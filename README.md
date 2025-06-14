# SJ RedM MCP Server

A unified "Swiss Army knife" MCP (Model Context Protocol) server for RedM development that combines RDR3 discoveries, framework documentation (VORP/RSGCore), native functions, and database operations into one powerful tool.

## Features

### 🔍 **RDR3 Discoveries Integration**
- Search the comprehensive RDR3 discoveries GitHub repository
- Access game assets, textures, ped models, controls, scenarios, and animations
- Get Lua code examples for specific topics
- Browse repository structure and read files directly

### 📚 **Framework Documentation**
- **VORP Framework**: Complete documentation including core, characters, inventory, menu, metabolism, and more
- **RSGCore Framework**: Client/server events and functions documentation
- **oxmysql**: Database operations and query documentation
- Smart context loading - mention "vorp" or "rsg" to auto-load relevant docs

### ⚡ **Native Functions Database**
- 86+ namespaces covering all RDR3 game systems
- 221+ documentation files with comprehensive native details
- Search natives by name or functionality
- Get detailed parameter information and usage examples
- Prefer direct calls over hashes with hash comments for Lua scripting

### 🧠 **Smart Context Loading**
- Automatically detects framework mentions and loads relevant documentation
- Context-aware suggestions based on your queries
- Intelligent module activation for optimal performance

## Installation

### Prerequisites
- Node.js 16.0.0 or higher
- Claude Desktop application

### Quick Setup

1. **Navigate to the directory:**
   ```bash
   cd "/path/to/sj-redm-mcp"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Claude Desktop:**
   
   Add the following to your Claude Desktop configuration file:
   
   **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
   **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

   ```json
   {
     "mcpServers": {
       "sj-redm-mcp": {
         "command": "node",
         "args": ["/absolute/path/to/sj-redm-mcp/index.js"],
         "env": {
           "GITHUB_TOKEN": "your-github-token-here"
         }
       }
     }
   }
   ```

   **Note:** GitHub token is optional but recommended for higher API rate limits.

4. **Restart Claude Desktop**

## Available Tools

### RDR3 Discoveries Tools
- **`redm-search-discoveries`**: Search the RDR3 discoveries repository
- **`redm-read-discovery-file`**: Read specific files from the repository
- **`redm-list-discovery-dirs`**: List directory contents
- **`redm-get-lua-examples`**: Find Lua code examples by topic

### Framework Documentation Tools
- **`redm-search-framework-docs`**: Search VORP and RSGCore documentation
- **`redm-get-vorp-docs`**: Get all VORP framework documentation
- **`redm-get-rsgcore-docs`**: Get all RSGCore framework documentation
- **`redm-get-oxmysql-docs`**: Get database operation documentation

### Native Functions Tools
- **`redm-search-natives`**: Search for native functions by name
- **`redm-get-native-details`**: Get detailed native function information
- **`redm-list-native-namespaces`**: List all available namespaces
- **`redm-browse-namespace`**: Browse natives within a specific namespace

### Smart Tools
- **`redm-get-smart-context`**: Get intelligent context based on your query

## Usage Examples

### Framework Development
```
"How do I create a character in VORP?"
→ Automatically loads VORP docs + oxmysql docs
```

```
"Show me RSGCore server events for player management"
→ Loads RSGCore documentation with server events
```

### Game Asset Research
```
"Find texture information for horse models"
→ Uses RDR3 discoveries for asset research
```

```
"Get animation examples for ped interactions"
→ Searches discoveries repo for animation scripts
```

### Native Function Development
```
"How do I use SET_PED_COMPONENT_VARIATION native?"
→ Returns detailed native info with parameters and Lua example
```

```
"Search for vehicle-related natives in VEHICLE namespace"
→ Lists relevant vehicle natives with usage details
```

### Database Operations
```
"How do I insert player data into database?"
→ Includes oxmysql documentation automatically
```

## Smart Context Features

The MCP server intelligently loads relevant documentation based on your queries:

- **VORP mentions**: Auto-loads complete VORP docs + oxmysql docs
- **RSG/RSGCore mentions**: Auto-loads complete RSGCore docs + oxmysql docs
- **Asset research terms** (texture, ped, animation, etc.): Prioritizes RDR3 discoveries
- **Native/scripting terms**: Activates native function database
- **Database terms**: Includes oxmysql documentation

## Documentation Structure

```
sj-redm-mcp/
├── docs/
│   ├── vorp/                    # VORP framework documentation
│   │   ├── vorp_core_docs.md
│   │   ├── vorp_characters_docs.md
│   │   ├── vorp_inventory_docs.md
│   │   └── ...
│   ├── rsgcore/                 # RSGCore framework documentation
│   │   ├── rsgcore_client_events.md
│   │   ├── rsgcore_server_events.md
│   │   └── ...
│   ├── natives/                 # RDR3 native functions (86+ namespaces)
│   │   ├── ENTITY/
│   │   ├── PLAYER/
│   │   ├── VEHICLE/
│   │   └── ...
│   └── oxmysql_documentation.md # Database operations
├── cache/                       # Performance cache
├── package.json
├── index.js                     # Main MCP server
└── README.md
```

## Native Function Features

- **Direct Call Preference**: Uses function names instead of hashes
- **Hash Comments**: Includes hash values as comments for reference
- **Parameter Details**: Complete parameter information and types
- **Lua Examples**: Working code examples for each native
- **86+ Namespaces**: Complete coverage of all RDR3 systems

Example native output:
```lua
-- Set ped component variation
Ped.SetPedComponentVariation(ped, componentId, drawableId, textureId, paletteId) -- 0x262B14F48D29DE80
```

## Troubleshooting

### Common Issues

1. **"Module not found" errors**
   - Ensure you ran `npm install` in the correct directory
   - Check that Node.js version is 16.0.0 or higher

2. **GitHub API rate limiting**
   - Add a GitHub token to your configuration for higher limits
   - Public repositories have lower rate limits without authentication

3. **Claude Desktop not recognizing server**
   - Verify the absolute path in your configuration
   - Ensure JSON syntax is valid in claude_desktop_config.json
   - Restart Claude Desktop after configuration changes

4. **Documentation not loading**
   - Check that all documentation files are in the docs/ directory
   - Verify file permissions allow reading

### Performance Tips

- The server uses intelligent caching for better performance
- Native function index is built on first use and cached
- Framework documentation is cached after first load
- Use specific namespace searches for faster native function lookups

## Contributing

This MCP server combines functionality from multiple sources:
- [RDR3 Discoveries](https://github.com/femga/rdr3_discoveries) - Game research and documentation
- VORP Framework - RedM framework documentation
- RSGCore Framework - Alternative RedM framework
- RDR3 Natives Database - Comprehensive native function documentation

## License

MIT License - Feel free to use and modify for your RedM development needs.

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify your Claude Desktop configuration
3. Ensure all dependencies are properly installed
4. Test individual tools using the available commands

## Changelog

### v1.0.0
- Initial unified release
- Combined 3 separate MCPs into one
- Added smart context loading
- Implemented consistent tool naming with "redm-" prefix
- Single installation process
- Comprehensive documentation coverage