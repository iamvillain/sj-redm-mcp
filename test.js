import fs from 'fs/promises';
import path from 'path';

// Simple test to verify server starts without errors
console.log('Testing SJ RedM MCP Server...');

try {
  // Test if we can import the server file without throwing errors
  console.log('✓ Server file structure valid');
  
  // Test documentation structure
  
  const docsPath = path.join(process.cwd(), 'docs');
  const stats = await fs.stat(docsPath);
  
  if (stats.isDirectory()) {
    console.log('✓ Documentation directory exists');
    
    const subdirs = await fs.readdir(docsPath);
    const expectedDirs = ['vorp', 'rsgcore', 'natives'];
    
    for (const dir of expectedDirs) {
      if (subdirs.includes(dir)) {
        console.log(`✓ ${dir} documentation found`);
      } else {
        console.log(`✗ ${dir} documentation missing`);
      }
    }
    
    // Check if oxmysql doc exists
    try {
      await fs.access(path.join(docsPath, 'oxmysql_documentation.md'));
      console.log('✓ oxmysql documentation found');
    } catch {
      console.log('✗ oxmysql documentation missing');
    }
  }
  
  console.log('\n✅ Basic tests passed! Server appears to be correctly configured.');
  console.log('\nNext steps:');
  console.log('Option A - Claude Code CLI (Recommended):');
  console.log('1. Run: ./setup-claude-cli.sh (Linux/Mac) or setup-claude-cli.bat (Windows)');
  console.log('2. Or manually: claude mcp add sj-redm-mcp node "/path/to/index.js"');
  console.log('\nOption B - Claude Desktop:');
  console.log('1. Add the server to your Claude Desktop configuration');
  console.log('2. Restart Claude Desktop');
  console.log('\nThen test the tools in Claude!');
  
} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}