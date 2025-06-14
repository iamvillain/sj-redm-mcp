# SJ RedM MCP Structure

## Clean Directory Structure

```
sj-redm-mcp/
├── .gitignore                              # Excludes node_modules and temp files
├── claude_desktop_config_example.json     # Configuration template
├── index.js                               # Main unified MCP server
├── package.json                           # Dependencies and metadata
├── package-lock.json                      # Locked dependency versions
├── README.md                              # Comprehensive documentation
├── STRUCTURE.md                           # This file - structure overview
├── test.js                                # Verification script
├── cache/                                 # Performance cache directory
├── node_modules/                          # NPM dependencies (excluded from git)
└── docs/                                  # All documentation files
    ├── oxmysql_documentation.md           # Database operations guide
    ├── vorp/                              # VORP Framework documentation
    │   ├── vorp_characters_docs.md
    │   ├── vorp_core_docs.md
    │   ├── vorp_inputs_docs.md
    │   ├── vorp_inventory_docs.md
    │   ├── vorp_menu_docs.md
    │   ├── vorp_metabolism_docs.md
    │   └── vorp_progressbar_docs.md
    ├── rsgcore/                           # RSGCore Framework documentation
    │   ├── rsgcore_client_events.md
    │   ├── rsgcore_client_functions.md
    │   ├── rsgcore_server_events.md
    │   └── rsgcore_server_functions.md
    └── natives/                           # RDR3 Native Functions (86+ namespaces)
        ├── ENTITY/                        # Entity system natives
        ├── PLAYER/                        # Player-related natives
        ├── VEHICLE/                       # Vehicle system natives
        ├── PED/                           # Ped (character) natives
        ├── WEAPON/                        # Weapon system natives
        ├── AUDIO/                         # Audio system natives
        ├── GRAPHICS/                      # Graphics and rendering natives
        ├── HUD/                           # UI/HUD natives
        ├── NETWORK/                       # Multiplayer networking natives
        ├── TASK/                          # AI task system natives
        └── ... (80+ more namespaces)
```

## Git Considerations

- **Line Endings**: Configured for proper cross-platform compatibility
- **Exclusions**: `.gitignore` prevents tracking of `node_modules/` and cache files
- **Clean State**: No problematic symlinks or hidden files in docs directory
- **Structure**: Only documentation files and essential config files tracked

## File Counts

- **Total Documentation Files**: 300+ markdown files
- **VORP Framework**: 7 documentation files
- **RSGCore Framework**: 4 documentation files  
- **RDR3 Natives**: 86+ namespaces, 221+ documentation files
- **Dependencies**: All managed via npm, properly cached

## Verification

Run `node test.js` to verify:
- ✓ Server file structure valid
- ✓ Documentation directory exists
- ✓ All framework docs found
- ✓ Natives documentation found
- ✓ Server starts without errors

## Next Steps

1. Add to Claude Desktop configuration
2. Restart Claude Desktop
3. Use the 14 available `redm-*` tools for RedM development