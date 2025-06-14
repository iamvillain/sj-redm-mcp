# VORP Core Characters API Documentation

This documentation covers the VORP Core Framework Characters API for developers creating scripts and integrations.

## Table of Contents

1. [Events](#events)
2. [Functions](#functions)
3. [StateBags](#statebags)

---

## Events

Character-related events are triggered during character selection, creation, and other character lifecycle events.

### Character Joined Event

This event is triggered when a player has successfully selected a character and joined the server. It provides an opportunity to execute custom logic or initialize player-specific data based on the chosen character.

**Availability:** Both client and server side

```lua
-- CLIENT
AddEventHandler("vorp_core:Client:OnPlayerJoined", function()
  -- Player has joined with their character
  -- Initialize client-side character-specific data
end)

-- SERVER
AddEventHandler("vorp_core:Server:OnPlayerJoined", function(source)
  -- Player has joined with their character
  -- Initialize server-side character-specific data
end)
```

**Use Cases:**
- Initialize player-specific data when character is selected
- Set up character-dependent systems
- Load character-specific configurations
- Trigger welcome messages or tutorials

### Character Created Event

This event is triggered when a player has created a new character for the server.

```lua
-- CLIENT
AddEventHandler("vorp_core:Client:OnCharacterCreated", function()
  -- New character has been created
  -- Handle client-side new character logic
end)

-- SERVER
AddEventHandler("vorp_core:Server:OnCharacterCreated", function(source)
  -- New character has been created
  -- Handle server-side new character logic
end)
```

**Example Usage Case:** 
Someone might use this to create/select a first spawn location for a character, set up default inventory items, or initialize character-specific databases.

**Use Cases:**
- Set first spawn location for new characters
- Initialize default inventory items
- Create character-specific database entries
- Set up default character settings
- Trigger character creation tutorials

---

## Functions

Character-related functions for managing character appearance and data.

### Get All Components

This function retrieves all components in the player's cache. It is useful for updating or modifying the player's appearance based on the components stored in the cache.

```lua
local components = exports.vorp_character:GetAllComponents()
```

**Returns:** 
- `components` - Table containing all cached player components

**Use Cases:**
- Updating player appearance
- Modifying cached components
- Saving current appearance state
- Synchronizing appearance across systems

**Example Usage:**
```lua
local components = exports.vorp_character:GetAllComponents()
if components then
  -- Process or modify components
  for componentType, componentData in pairs(components) do
    print("Component Type:", componentType)
    print("Component Data:", json.encode(componentData))
  end
end
```

---

## StateBags

StateBags provide efficient access to character state information that can be checked from other scripts.

### Bandana State

Check if a player is wearing a bandana on their face. This can be used in other scripts to detect bandana usage through the characters bandana commands.

```lua
-- CLIENT
local isBandanaOn = LocalPlayer.state.BandanaState

-- SERVER  
local isBandanaOn = Player(source).state.BandanaState
```

**Returns:**
- `true` - Player is wearing a bandana on their face
- `false` - Player is not wearing a bandana

**Use Cases:**
- Hide player identity in criminal activities
- Modify player recognition systems
- Trigger bandana-specific interactions
- Law enforcement identification systems

**Example Usage:**
```lua
-- Check bandana state before revealing player identity
if not LocalPlayer.state.BandanaState then
  -- Player face is visible, show name
  DisplayPlayerName()
else
  -- Player is wearing bandana, show generic identifier
  DisplayGenericIdentifier()
end
```

### Character Shop State

Check if a player is currently in character shops (clothing stores, barbers, etc.).

```lua
-- CLIENT
local inCharacterShop = LocalPlayer.state.InCharacterShop

-- SERVER
local inCharacterShop = Player(source).state.InCharacterShop
```

**Returns:**
- `true` - Player is currently in a character shop
- `false` - Player is not in a character shop

**Use Cases:**
- Prevent certain actions while in shops
- Disable conflicting systems during character customization
- Track shop usage analytics
- Manage shop-specific interactions

**Example Usage:**
```lua
-- Prevent certain actions while in character shop
if LocalPlayer.state.InCharacterShop then
  -- Player is in shop, disable conflicting features
  DisableControlAction(0, 24, true) -- Attack
  DisableControlAction(0, 25, true) -- Aim
else
  -- Player is not in shop, normal controls available
end
```

---

## Integration Examples

### Complete Character Event Handler

```lua
-- Server-side character management
AddEventHandler("vorp_core:Server:OnPlayerJoined", function(source)
  print("Player " .. source .. " joined with character")
  
  -- Check if wearing bandana
  if Player(source).state.BandanaState then
    print("Player is wearing a bandana")
  end
  
  -- Check if in character shop
  if Player(source).state.InCharacterShop then
    print("Player is in a character shop")
  end
  
  -- Get character components
  TriggerClientEvent("getCharacterComponents", source)
end)

AddEventHandler("vorp_core:Server:OnCharacterCreated", function(source)
  print("New character created by player " .. source)
  
  -- Set up new character defaults
  -- Initialize spawn location, inventory, etc.
end)
```

### Client-Side Character Component Management

```lua
-- Client-side component handling
RegisterNetEvent("getCharacterComponents")
AddEventHandler("getCharacterComponents", function()
  local components = exports.vorp_character:GetAllComponents()
  
  if components then
    -- Send components back to server for processing
    TriggerServerEvent("processCharacterComponents", components)
  end
end)

-- Monitor character shop state
CreateThread(function()
  local wasInShop = false
  
  while true do
    local inShop = LocalPlayer.state.InCharacterShop
    
    if inShop and not wasInShop then
      print("Entered character shop")
      -- Handle shop entry
    elseif not inShop and wasInShop then
      print("Exited character shop")
      -- Handle shop exit
    end
    
    wasInShop = inShop
    Wait(1000)
  end
end)
```

---

## Notes

- Character events are fired on both client and server sides for maximum flexibility
- StateBags provide efficient real-time access to character state information
- The GetAllComponents function is useful for appearance management systems
- Bandana state affects player identification and recognition systems
- Character shop state helps manage conflicting interactions during customization
- Events can be used to initialize character-specific data and systems
- Always check if data exists before processing to avoid errors