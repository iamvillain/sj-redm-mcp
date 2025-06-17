#!/bin/bash

# SJ RedM MCP Server - Claude Code CLI Setup Script
# This script helps configure the MCP server for Claude Code CLI

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get current directory
CURRENT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
INDEX_JS_PATH="$CURRENT_DIR/index.js"

echo -e "${BLUE}🔧 SJ RedM MCP Server - Claude Code CLI Setup${NC}"
echo -e "${BLUE}===============================================${NC}"
echo ""

# Check if claude CLI is available
if ! command -v claude &> /dev/null; then
    echo -e "${RED}❌ Claude CLI not found!${NC}"
    echo -e "${YELLOW}Please install Claude Code CLI first:${NC}"
    echo -e "${YELLOW}Visit: https://docs.anthropic.com/en/docs/claude-code${NC}"
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found!${NC}"
    echo -e "${YELLOW}Please install Node.js 16.0.0 or higher${NC}"
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "$CURRENT_DIR/node_modules" ]; then
    echo -e "${YELLOW}⚠️  Dependencies not found. Installing...${NC}"
    npm install
    echo -e "${GREEN}✅ Dependencies installed${NC}"
    echo ""
fi

echo -e "${BLUE}Current directory: ${NC}$CURRENT_DIR"
echo -e "${BLUE}Server file: ${NC}$INDEX_JS_PATH"
echo ""

# Check if server is already configured
if claude mcp list 2>/dev/null | grep -q "sj-redm-mcp"; then
    echo -e "${YELLOW}⚠️  MCP server 'sj-redm-mcp' is already configured${NC}"
    echo -e "${YELLOW}Do you want to reconfigure it? (y/N)${NC}"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        echo -e "${BLUE}Removing existing configuration...${NC}"
        claude mcp remove sj-redm-mcp
        echo -e "${GREEN}✅ Existing configuration removed${NC}"
    else
        echo -e "${GREEN}✅ Keeping existing configuration${NC}"
        exit 0
    fi
fi

# Ask for GitHub token
echo -e "${BLUE}GitHub Token Configuration${NC}"
echo -e "${BLUE}=========================${NC}"
echo -e "${YELLOW}Do you want to configure a GitHub token? (recommended for higher API limits)${NC}"
echo -e "${YELLOW}Enter your GitHub token (leave empty to skip):${NC}"
read -r -s GITHUB_TOKEN

if [ -n "$GITHUB_TOKEN" ]; then
    echo -e "${BLUE}Adding MCP server with GitHub token...${NC}"
    claude mcp add-json sj-redm-mcp "{
        \"command\": \"node\",
        \"args\": [\"$INDEX_JS_PATH\"],
        \"env\": {
            \"GITHUB_TOKEN\": \"$GITHUB_TOKEN\"
        }
    }"
else
    echo -e "${BLUE}Adding MCP server without GitHub token...${NC}"
    claude mcp add sj-redm-mcp node "$INDEX_JS_PATH"
fi

echo -e "${GREEN}✅ MCP server configured successfully!${NC}"
echo ""

# Verify configuration
echo -e "${BLUE}Verifying configuration...${NC}"
if claude mcp list | grep -q "sj-redm-mcp"; then
    echo -e "${GREEN}✅ Configuration verified!${NC}"
else
    echo -e "${RED}❌ Configuration verification failed${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}🎉 Setup complete!${NC}"
echo ""
echo -e "${BLUE}Available tools:${NC}"
echo -e "${YELLOW}• redm-search-discoveries     - Search RDR3 discoveries repository${NC}"
echo -e "${YELLOW}• redm-search-framework-docs  - Search VORP/RSGCore documentation${NC}"
echo -e "${YELLOW}• redm-search-natives         - Search RDR3 native functions${NC}"
echo -e "${YELLOW}• redm-get-smart-context      - Get intelligent context${NC}"
echo -e "${YELLOW}• And 10 more specialized tools...${NC}"
echo ""
echo -e "${BLUE}To test the setup, try asking Claude:${NC}"
echo -e "${GREEN}\"How do I create a character in VORP?\"${NC}"
echo -e "${GREEN}\"Find vehicle natives in RDR3\"${NC}"
echo ""
echo -e "${BLUE}For more information, see README.md${NC}"