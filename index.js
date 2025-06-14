import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { Octokit } from 'octokit';
import { marked } from 'marked';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Constants
const REPO_OWNER = 'femga';
const REPO_NAME = 'rdr3_discoveries';
const DOCS_ROOT = path.join(__dirname, 'docs');

class SJRedMMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'sj-redm-mcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    this.docCache = new Map();
    this.nativesIndex = null;
    this.setupHandlers();
  }

  // GitHub API functions (from rdr3-discoveries-mcp)
  async fetchRepoContent(path = '') {
    try {
      const response = await this.octokit.rest.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: path,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch content: ${error.message}`);
    }
  }

  async fetchFileContent(path) {
    try {
      const response = await this.octokit.rest.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: path,
      });
      
      if (response.data.type !== 'file') {
        throw new Error('Path does not point to a file');
      }
      
      const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
      return content;
    } catch (error) {
      throw new Error(`Failed to fetch file content: ${error.message}`);
    }
  }

  async searchInRepo(query, options = {}) {
    try {
      const searchQuery = `${query} repo:${REPO_OWNER}/${REPO_NAME}`;
      const response = await this.octokit.rest.search.code({
        q: searchQuery,
        per_page: options.limit || 10,
      });
      return response.data.items;
    } catch (error) {
      throw new Error(`Search failed: ${error.message}`);
    }
  }

  // Local documentation functions (from redm-framework-mcp)
  async loadDocumentation(filePath) {
    if (this.docCache.has(filePath)) {
      return this.docCache.get(filePath);
    }

    try {
      const content = await fs.readFile(filePath, 'utf-8');
      this.docCache.set(filePath, content);
      return content;
    } catch (error) {
      return null;
    }
  }

  async searchFrameworkDocs(query, framework = null) {
    const searchTerm = query.toLowerCase();
    const results = [];

    const searchVorp = !framework || framework === 'vorp' || searchTerm.includes('vorp');
    const searchRsg = !framework || framework === 'rsgcore' || 
                     searchTerm.includes('rsg') || searchTerm.includes('rsgcore');

    if (searchVorp) {
      const vorpDir = path.join(DOCS_ROOT, 'vorp');
      try {
        const files = await fs.readdir(vorpDir);
        for (const file of files) {
          if (file.endsWith('.md')) {
            const content = await this.loadDocumentation(path.join(vorpDir, file));
            if (content && content.toLowerCase().includes(searchTerm)) {
              results.push({
                framework: 'VORP',
                file: file,
                preview: this.extractPreview(content, searchTerm)
              });
            }
          }
        }
      } catch (error) {
        console.error('Error searching VORP docs:', error);
      }
    }

    if (searchRsg) {
      const rsgDir = path.join(DOCS_ROOT, 'rsgcore');
      try {
        const files = await fs.readdir(rsgDir);
        for (const file of files) {
          if (file.endsWith('.md')) {
            const content = await this.loadDocumentation(path.join(rsgDir, file));
            if (content && content.toLowerCase().includes(searchTerm)) {
              results.push({
                framework: 'RSGCore',
                file: file,
                preview: this.extractPreview(content, searchTerm)
              });
            }
          }
        }
      } catch (error) {
        console.error('Error searching RSGCore docs:', error);
      }
    }

    // Always check oxmysql for database operations
    if (searchTerm.includes('mysql') || searchTerm.includes('database') || 
        searchTerm.includes('query') || searchTerm.includes('insert') || 
        searchTerm.includes('update') || searchTerm.includes('delete')) {
      const oxmysqlPath = path.join(DOCS_ROOT, 'oxmysql_documentation.md');
      const content = await this.loadDocumentation(oxmysqlPath);
      if (content) {
        results.push({
          framework: 'oxmysql',
          file: 'oxmysql_documentation.md',
          preview: this.extractPreview(content, searchTerm)
        });
      }
    }

    return results;
  }

  extractPreview(content, searchTerm) {
    const index = content.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index === -1) return '';
    
    const start = Math.max(0, index - 100);
    const end = Math.min(content.length, index + searchTerm.length + 100);
    return '...' + content.substring(start, end).trim() + '...';
  }

  async getFrameworkDocs(framework) {
    const docs = {};
    let dir;

    switch (framework.toLowerCase()) {
      case 'vorp':
        dir = path.join(DOCS_ROOT, 'vorp');
        break;
      case 'rsgcore':
      case 'rsg':
        dir = path.join(DOCS_ROOT, 'rsgcore');
        break;
      default:
        return { error: 'Unknown framework. Please specify "vorp" or "rsgcore".' };
    }

    try {
      const files = await fs.readdir(dir);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const content = await this.loadDocumentation(path.join(dir, file));
          if (content) {
            docs[file] = content;
          }
        }
      }
    } catch (error) {
      return { error: `Error loading ${framework} documentation: ${error.message}` };
    }

    return docs;
  }

  // Native functions (from rdr3natives-mcp)
  async buildNativesIndex() {
    if (this.nativesIndex) return this.nativesIndex;

    const nativesPath = path.join(DOCS_ROOT, 'natives');
    const index = {
      namespaces: [],
      totalFiles: 0,
      lastBuilt: new Date().toISOString()
    };

    try {
      const items = await fs.readdir(nativesPath, { withFileTypes: true });
      
      for (const item of items) {
        if (item.isDirectory()) {
          const namespacePath = path.join(nativesPath, item.name);
          const files = await fs.readdir(namespacePath);
          const mdFiles = files.filter(f => f.endsWith('.md'));
          
          index.namespaces.push({
            name: item.name,
            fileCount: mdFiles.length,
            files: mdFiles,
            hasIndex: files.includes(`${item.name}_INDEX.md`)
          });
          
          index.totalFiles += mdFiles.length;
        }
      }

      index.namespaces.sort((a, b) => a.name.localeCompare(b.name));
      this.nativesIndex = index;
      return index;
    } catch (error) {
      throw new Error(`Failed to build natives index: ${error.message}`);
    }
  }

  async searchNatives(query, namespace = null) {
    await this.buildNativesIndex();
    const searchTerm = query.toLowerCase();
    const results = [];

    const namespacesToSearch = namespace 
      ? this.nativesIndex.namespaces.filter(ns => ns.name.toLowerCase() === namespace.toLowerCase())
      : this.nativesIndex.namespaces;

    for (const ns of namespacesToSearch) {
      const namespacePath = path.join(DOCS_ROOT, 'natives', ns.name);
      
      for (const file of ns.files) {
        const filePath = path.join(namespacePath, file);
        const content = await this.loadDocumentation(filePath);
        
        if (content) {
          const lines = content.split('\n');
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.toLowerCase().includes(searchTerm)) {
              results.push({
                namespace: ns.name,
                file: file,
                line: i + 1,
                content: line.trim(),
                context: lines.slice(Math.max(0, i-2), i+3).join('\n')
              });
            }
          }
        }
      }
    }

    return results.slice(0, 20); // Limit results
  }

  async getNativeDetails(nativeName, namespace = null) {
    await this.buildNativesIndex();
    const searchTerm = nativeName.toLowerCase();
    
    const namespacesToSearch = namespace 
      ? this.nativesIndex.namespaces.filter(ns => ns.name.toLowerCase() === namespace.toLowerCase())
      : this.nativesIndex.namespaces;

    for (const ns of namespacesToSearch) {
      const namespacePath = path.join(DOCS_ROOT, 'natives', ns.name);
      
      for (const file of ns.files) {
        const filePath = path.join(namespacePath, file);
        const content = await this.loadDocumentation(filePath);
        
        if (content && content.toLowerCase().includes(searchTerm)) {
          // Extract the native function section
          const lines = content.split('\n');
          let foundIndex = -1;
          
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].toLowerCase().includes(searchTerm)) {
              foundIndex = i;
              break;
            }
          }
          
          if (foundIndex >= 0) {
            // Extract a reasonable section around the found native
            const start = Math.max(0, foundIndex - 5);
            const end = Math.min(lines.length, foundIndex + 20);
            const section = lines.slice(start, end).join('\n');
            
            return {
              namespace: ns.name,
              file: file,
              nativeName: nativeName,
              details: section,
              fullContent: content
            };
          }
        }
      }
    }

    return null;
  }

  // Smart context loading based on user mentions
  async getSmartContext(userQuery) {
    const query = userQuery.toLowerCase();
    const context = {
      frameworks: {},
      shouldLoadOxmysql: false,
      suggestions: []
    };

    // Check for VORP mentions
    if (query.includes('vorp')) {
      context.frameworks.vorp = await this.getFrameworkDocs('vorp');
      context.shouldLoadOxmysql = true;
      context.suggestions.push('VORP framework documentation loaded');
    }

    // Check for RSGCore mentions
    if (query.includes('rsg') || query.includes('rsgcore')) {
      context.frameworks.rsgcore = await this.getFrameworkDocs('rsgcore');
      context.shouldLoadOxmysql = true;
      context.suggestions.push('RSGCore framework documentation loaded');
    }

    // Check for discovery-related terms
    const discoveryTerms = ['texture', 'ped', 'control', 'scenario', 'animation', 'model', 'prop'];
    if (discoveryTerms.some(term => query.includes(term))) {
      context.suggestions.push('Consider using redm-search-discoveries for game asset research');
    }

    // Check for native-related terms
    const nativeTerms = ['native', 'lua', 'script', 'function', 'hash'];
    if (nativeTerms.some(term => query.includes(term))) {
      context.suggestions.push('Consider using redm-search-natives for native function verification');
    }

    // Load oxmysql if needed
    if (context.shouldLoadOxmysql) {
      const oxmysqlPath = path.join(DOCS_ROOT, 'oxmysql_documentation.md');
      context.frameworks.oxmysql = await this.loadDocumentation(oxmysqlPath);
      context.suggestions.push('oxmysql documentation included for database operations');
    }

    return context;
  }

  setupHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        // RDR3 Discoveries tools (GitHub integration)
        {
          name: 'redm-search-discoveries',
          description: 'Search the RDR3 discoveries GitHub repository for game assets, scripts, and documentation',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Search query (e.g., "native function", "ped", "vehicle", "texture")'
              },
              limit: {
                type: 'number',
                description: 'Maximum number of results to return',
                default: 10
              }
            },
            required: ['query']
          }
        },
        {
          name: 'redm-read-discovery-file',
          description: 'Read the contents of a specific file from the RDR3 discoveries repository',
          inputSchema: {
            type: 'object',
            properties: {
              path: {
                type: 'string',
                description: 'File path (e.g., "AI/EVENTS/README.md")'
              }
            },
            required: ['path']
          }
        },
        {
          name: 'redm-list-discovery-dirs',
          description: 'List contents of a directory in the RDR3 discoveries repository',
          inputSchema: {
            type: 'object',
            properties: {
              path: {
                type: 'string',
                description: 'Directory path (e.g., "AI", "Objects"). Leave empty for root.',
                default: ''
              }
            }
          }
        },
        {
          name: 'redm-get-lua-examples',
          description: 'Find Lua code examples in the RDR3 discoveries repository',
          inputSchema: {
            type: 'object',
            properties: {
              topic: {
                type: 'string',
                description: 'Topic to search for (e.g., "ped", "vehicle", "weapon")'
              }
            },
            required: ['topic']
          }
        },
        
        // Framework documentation tools
        {
          name: 'redm-search-framework-docs',
          description: 'Search RedM framework documentation (VORP and RSGCore)',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Search query'
              },
              framework: {
                type: 'string',
                description: 'Optional: Specific framework to search (vorp, rsgcore)',
                enum: ['vorp', 'rsgcore']
              }
            },
            required: ['query']
          }
        },
        {
          name: 'redm-get-vorp-docs',
          description: 'Get all VORP framework documentation',
          inputSchema: {
            type: 'object',
            properties: {}
          }
        },
        {
          name: 'redm-get-rsgcore-docs',
          description: 'Get all RSGCore framework documentation',
          inputSchema: {
            type: 'object',
            properties: {}
          }
        },
        {
          name: 'redm-get-oxmysql-docs',
          description: 'Get oxmysql documentation for database operations',
          inputSchema: {
            type: 'object',
            properties: {}
          }
        },

        // Native functions tools
        {
          name: 'redm-search-natives',
          description: 'Search for RDR3 native functions by name or partial match',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Native function name or search term'
              },
              namespace: {
                type: 'string',
                description: 'Optional: Specific namespace to search in (e.g., ENTITY, PLAYER, VEHICLE)'
              }
            },
            required: ['query']
          }
        },
        {
          name: 'redm-get-native-details',
          description: 'Get detailed information about a specific native function',
          inputSchema: {
            type: 'object',
            properties: {
              nativeName: {
                type: 'string',
                description: 'Native function name'
              },
              namespace: {
                type: 'string',
                description: 'Optional: Namespace where the native is located'
              }
            },
            required: ['nativeName']
          }
        },
        {
          name: 'redm-list-native-namespaces',
          description: 'List all available native function namespaces',
          inputSchema: {
            type: 'object',
            properties: {}
          }
        },
        {
          name: 'redm-browse-namespace',
          description: 'Browse native functions within a specific namespace',
          inputSchema: {
            type: 'object',
            properties: {
              namespace: {
                type: 'string',
                description: 'Namespace name (e.g., ENTITY, PLAYER, VEHICLE)'
              },
              page: {
                type: 'number',
                description: 'Page number for pagination',
                default: 1
              }
            },
            required: ['namespace']
          }
        },

        // Smart context tool
        {
          name: 'redm-get-smart-context',
          description: 'Get intelligent context based on query - automatically loads relevant documentation',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Your development query or task description'
              }
            },
            required: ['query']
          }
        }
      ]
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          // RDR3 Discoveries tools
          case 'redm-search-discoveries': {
            const results = await this.searchInRepo(args.query, { limit: args.limit });
            const formatted = results.map(item => ({
              path: item.path,
              repository: item.repository.name,
              score: item.score,
              url: item.html_url
            }));

            return {
              content: [{
                type: 'text',
                text: `Found ${results.length} results for "${args.query}":\n\n${JSON.stringify(formatted, null, 2)}`
              }]
            };
          }

          case 'redm-read-discovery-file': {
            const content = await this.fetchFileContent(args.path);
            
            if (args.path.endsWith('.md')) {
              const parsed = matter(content);
              return {
                content: [{
                  type: 'text',
                  text: `# ${args.path}\n\n${parsed.content}`
                }]
              };
            }

            return {
              content: [{
                type: 'text',
                text: content
              }]
            };
          }

          case 'redm-list-discovery-dirs': {
            const pathStr = args.path || '';
            const contents = await this.fetchRepoContent(pathStr);
            
            if (!Array.isArray(contents)) {
              return {
                content: [{
                  type: 'text',
                  text: 'The specified path is a file, not a directory.'
                }]
              };
            }

            const formatted = contents.map(item => ({
              name: item.name,
              type: item.type,
              path: item.path,
              size: item.size
            }));

            return {
              content: [{
                type: 'text',
                text: JSON.stringify(formatted, null, 2)
              }]
            };
          }

          case 'redm-get-lua-examples': {
            const luaQuery = `${args.topic} extension:lua`;
            const results = await this.searchInRepo(luaQuery, { limit: 5 });
            
            if (results.length === 0) {
              return {
                content: [{
                  type: 'text',
                  text: `No Lua examples found for topic: ${args.topic}`
                }]
              };
            }

            const examples = [];
            for (const result of results.slice(0, 3)) {
              try {
                const content = await this.fetchFileContent(result.path);
                examples.push({
                  path: result.path,
                  content: content.substring(0, 500) + '...'
                });
              } catch (e) {
                // Skip files that can't be fetched
              }
            }

            return {
              content: [{
                type: 'text',
                text: `Lua examples for "${args.topic}":\n\n${JSON.stringify(examples, null, 2)}`
              }]
            };
          }

          // Framework documentation tools
          case 'redm-search-framework-docs': {
            const results = await this.searchFrameworkDocs(args.query, args.framework);
            return {
              content: [{
                type: 'text',
                text: JSON.stringify(results, null, 2)
              }]
            };
          }

          case 'redm-get-vorp-docs': {
            const docs = await this.getFrameworkDocs('vorp');
            return {
              content: [{
                type: 'text',
                text: JSON.stringify(docs, null, 2)
              }]
            };
          }

          case 'redm-get-rsgcore-docs': {
            const docs = await this.getFrameworkDocs('rsgcore');
            return {
              content: [{
                type: 'text',
                text: JSON.stringify(docs, null, 2)
              }]
            };
          }

          case 'redm-get-oxmysql-docs': {
            const oxmysqlPath = path.join(DOCS_ROOT, 'oxmysql_documentation.md');
            const content = await this.loadDocumentation(oxmysqlPath);
            return {
              content: [{
                type: 'text',
                text: content || 'oxmysql documentation not found'
              }]
            };
          }

          // Native functions tools
          case 'redm-search-natives': {
            const results = await this.searchNatives(args.query, args.namespace);
            return {
              content: [{
                type: 'text',
                text: `Found ${results.length} native matches:\n\n${JSON.stringify(results, null, 2)}`
              }]
            };
          }

          case 'redm-get-native-details': {
            const details = await this.getNativeDetails(args.nativeName, args.namespace);
            if (!details) {
              return {
                content: [{
                  type: 'text',
                  text: `Native function "${args.nativeName}" not found`
                }]
              };
            }
            return {
              content: [{
                type: 'text',
                text: JSON.stringify(details, null, 2)
              }]
            };
          }

          case 'redm-list-native-namespaces': {
            const index = await this.buildNativesIndex();
            return {
              content: [{
                type: 'text',
                text: JSON.stringify(index, null, 2)
              }]
            };
          }

          case 'redm-browse-namespace': {
            const index = await this.buildNativesIndex();
            const namespace = index.namespaces.find(ns => ns.name.toLowerCase() === args.namespace.toLowerCase());
            
            if (!namespace) {
              return {
                content: [{
                  type: 'text',
                  text: `Namespace "${args.namespace}" not found`
                }]
              };
            }

            const page = args.page || 1;
            const pageSize = 10;
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            const files = namespace.files.slice(start, end);

            return {
              content: [{
                type: 'text',
                text: JSON.stringify({
                  namespace: namespace.name,
                  page: page,
                  totalFiles: namespace.fileCount,
                  totalPages: Math.ceil(namespace.fileCount / pageSize),
                  files: files
                }, null, 2)
              }]
            };
          }

          // Smart context tool
          case 'redm-get-smart-context': {
            const context = await this.getSmartContext(args.query);
            return {
              content: [{
                type: 'text',
                text: JSON.stringify(context, null, 2)
              }]
            };
          }

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [{
            type: 'text',
            text: `Error: ${error.message}`
          }],
          isError: true,
        };
      }
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('SJ RedM MCP Server running on stdio');
  }
}

const server = new SJRedMMCPServer();
server.run().catch(console.error);