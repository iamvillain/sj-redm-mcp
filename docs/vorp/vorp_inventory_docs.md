# VORP Core Inventory System Documentation

This documentation covers the complete VORP Core Framework inventory system for developers creating scripts and integrations.

## Table of Contents

1. [Inventory Management](#inventory-management)
2. [Item Management](#item-management)
3. [Weapon Management](#weapon-management)
4. [Custom Inventory Management](#custom-inventory-management)
5. [Events](#events)
6. [Statebags](#statebags)

---

## Inventory Management

### Basic Inventory Operations

#### Get All User Inventory Items
```lua
local result = exports.vorp_inventory:getInventoryItems()
```

#### Close Inventory
```lua
exports.vorp_inventory:closeInventory()
```

---

## Item Management

### Item Getters

#### Check if Player Can Carry Item
Checks if a player can carry the specified item before adding it to inventory.

```lua
exports.vorp_inventory:canCarryItem(source, item, amount, callback)
```

**Parameters:**
- `source` - Player source ID
- `item` - The item name
- `amount` - The amount of items
- `callback` - The callback function (synchronous or asynchronous)

**Returns:** `true` if the player can carry the item

#### Get Item Count
Gets the amount of a specific item from player inventory.

```lua
exports.vorp_inventory:getItemCount(source, callback, item, metadata, percentage)
```

**Parameters:**
- `source` - Player source ID
- `callback` - Callback function for synchronous or asynchronous operation
- `item` - Item name
- `metadata` - Item metadata filter
- `percentage` - Controls what items to get:
  - `0` - Gets all items with no metadata if meta was not passed, or gets expired items
  - `>0` - Returns items with that count or above

**Returns:** The amount of items in the inventory

#### Get Item by ID
```lua
exports.vorp_inventory:getItemById(source, id, callback)
```

**Parameters:**
- `source` - Player source ID
- `id` - Item ID

**Returns:** Item object:
```lua
{
  id = number,
  label = string,
  name = string,
  metadata = table,
  group = number,
  type = string,
  count = number,
  limit = number,
  canUse = boolean,
  percentage = integer,
  description = string,
  weight = number
}
```

#### Get Item Data
```lua
exports.vorp_inventory:getItem(source, item, callback, metadata, percentage)
```

**Parameters:**
- `source` - Player source ID
- `item` - Item name
- `callback` - Callback function
- `metadata` - Item metadata
- `percentage` - Item percentage filter:
  - `0` - Gets expired items
  - `nil` - Gets any item
  - `>0` - Gets items equal to or above this percentage

**Returns:** Item object:
```lua
{
  id = number,
  label = string,
  name = string,
  metadata = table,
  group = number,
  type = string,
  count = number,
  limit = number,
  canUse = boolean,
  weight = number,
  desc = string,
  percentage = integer
}
```

### Item Setters

#### Add Item to User
```lua
exports.vorp_inventory:addItem(source, item, amount, metadata, callback, event)
```

**Parameters:**
- `source` - Player source ID
- `item` - Item name
- `amount` - Amount of item
- `metadata` - Item metadata
- `callback` - Callback function
- `event` - If `true`, will not trigger the `OnItemCreated` event

**Returns:** `true` if the item was successfully added

#### Remove Item from User Inventory
```lua
exports.vorp_inventory:subItem(source, item, amount, metadata, callback, event, percentage)
```

**Parameters:**
- `source` - Player source ID
- `item` - Item name
- `amount` - Amount of item
- `metadata` - Item metadata
- `callback` - Callback function
- `event` - `OnItemRemoved` event control: `true` won't fire event, `false`/`nil` will fire
- `percentage` - Controls which items to remove:
  - `nil` - Removes any
  - `0` - Removes expired items only
  - `>0` - Removes items above or equal to this percentage

#### Remove Item by ID
```lua
exports.vorp_inventory:subItemById(source, itemId, callback, event, amount)
```

**Parameters:**
- `source` - Player source ID
- `itemId` - Item ID
- `callback` - Callback function
- `event` - `OnItemRemoved` event control
- `amount` - Amount to remove

*Note: Available on version 3.9 and up. Lower versions use `subItemID`*

#### Set Item Metadata
Modifies item metadata with three possible behaviors:
- Split a stack and modify only some items (amount must be less than current stack)
- Merge with existing stack that has matching metadata (amount must be more or equal than current stack)
- Modify entire stack's metadata (amount must be more or equal than current stack, only applies if metadata matches current stack)

```lua
exports.vorp_inventory:setItemMetadata(source, itemId, metadata, amount, callback)
```

**Parameters:**
- `source` - Player source ID
- `itemId` - Item ID
- `metadata` - Metadata object with reserved keys:
  ```lua
  {
    description = string?, -- Optional description
    image = string?,      -- Optional image name to apply
    label = string?,      -- Optional label
    weight = number?      -- Optional weight
  }
  ```
- `amount` - Amount of items to modify
- `callback` - Callback function

**Returns:** `true` if the metadata was successfully set

#### Register Usable Item
```lua
exports.vorp_inventory:registerUsableItem(item, callback, resourceName)
```

**Parameters:**
- `item` - Item name
- `callback` - Callback function with item data:
  ```lua
  {
    source = int,
    id = number,
    label = string,
    name = string,
    metadata = table,
    group = number,
    type = string,
    count = number,
    limit = number,
    canUse = boolean,
    mainid = integer,
    percentage = integer
  }
  ```
- `resourceName` - Resource name for debug purposes

#### Unregister Usable Item
```lua
exports.vorp_inventory:unRegisterUsableItem(item)
```

**Parameters:**
- `item` - Item name

---

## Weapon Management

### Weapon Getters

#### Check if Player Can Carry Weapons
```lua
exports.vorp_inventory:canCarryWeapons(source, amount, callback, weaponName)
```

**Parameters:**
- `source` - Player source ID
- `amount` - Amount of weapons
- `callback` - Callback function
- `weaponName` - Weapon name or hash (needed to check weight since v3.6)

**Returns:** `true` if the player can carry the weapons

#### Get User Inventory Weapon
```lua
exports.vorp_inventory:getUserWeapon(source, callback, weaponId)
```

**Parameters:**
- `source` - Player source ID
- `callback` - Callback function
- `weaponId` - Weapon ID

**Returns:** Weapon object:
```lua
{
  id = number,
  name = string,
  propietary = string,
  used = boolean,
  desc = string,
  group = number,
  source = number,
  label = string,
  serial_number = string,
  custom_label = string,
  custom_desc = string
}
```

#### Get User Inventory Weapons
```lua
exports.vorp_inventory:getUserInventoryWeapons(source, callback)
```

**Parameters:**
- `source` - Player source ID
- `callback` - Callback function

**Returns:** Array of weapon objects with same structure as above

### Weapon Setters

#### Give Weapon to User
```lua
exports.vorp_inventory:giveWeapon(source, weaponId, target, callback)
```

**Parameters:**
- `source` - Player source ID
- `weaponId` - Weapon ID
- `target` - Target player ID
- `callback` - Callback function

**Returns:** `true` if the weapon was successfully given

#### Create Weapon
```lua
exports.vorp_inventory:createWeapon(source, weaponName, ammo, components, comps, callback, serial, label, desc)
```

**Parameters:**
- `source` - Player source ID
- `weaponName` - Weapon name
- `ammo` - Amount of ammo
- `components` - Weapon components
- `comps` - Weapon components (leave as `nil`, used internally only)
- `callback` - Callback function
- `serial` - Custom serial number for weapon
- `label` - Custom label for weapon
- `desc` - Custom description for weapon

#### Add Bullets
```lua
exports.vorp_inventory:addBullets(source, bulletType, amount, callback)
```

**Parameters:**
- `source` - Player source ID
- `bulletType` - Bullet type
- `amount` - Amount of bullets
- `callback` - Callback function

**Returns:** `true` if the bullets were successfully added

#### Remove Bullets from Weapon
```lua
exports.vorp_inventory:subBullets(weaponId, bulletType, amount, callback)
```

**Parameters:**
- `weaponId` - Weapon ID
- `bulletType` - Bullet type
- `amount` - Amount of bullets
- `callback` - Callback function

**Returns:** `true` if the bullets were successfully removed

---

## Custom Inventory Management

### Custom Inventory Registration

#### Register Custom Inventory
```lua
exports.vorp_inventory:registerInventory(data)
```

**Parameters:**
- `data` - Inventory configuration:
  ```lua
  {
    id = string,                    -- Inventory ID
    name = string,                  -- Inventory name
    limit = number,                 -- Item limit
    acceptWeapons = boolean,        -- Whether to accept weapons
    shared = boolean,               -- Whether inventory is shared
    ignoreItemStackLimit = boolean, -- Ignore item stack limits
    whitelistItems = boolean,       -- Use item whitelist
    UsePermissions = boolean,       -- Use permissions
    UseBlackList = boolean,         -- Use blacklist
    whitelistWeapons = boolean,     -- Use weapon whitelist
    webhook = string                -- Webhook URL
  }
  ```

#### Remove Inventory from Session
```lua
exports.vorp_inventory:removeInventory(invId)
```

**Parameters:**
- `invId` - Inventory ID

### Custom Inventory Items

#### Add Items to Custom Inventory
```lua
exports.vorp_inventory:addItemsToCustomInventory(invid, items, charid, callback)
```

**Parameters:**
- `invid` - Inventory ID
- `items` - Items to add
- `charid` - Character identifier of the owner (if not shared)
- `callback` - Callback function

**Returns:** `true` if the items were successfully added

#### Update Item in Custom Inventory
```lua
exports.vorp_inventory:updateCustomInventoryItem(invId, item_id, metadata, amount, callback)
```

**Parameters:**
- `invId` - Inventory ID
- `item_id` - Item ID
- `metadata` - Metadata to update
- `amount` - Amount of item
- `callback` - Callback function

**Returns:** `true` if the item was successfully updated

#### Remove Item from Custom Inventory by ID
```lua
exports.vorp_inventory:removeCustomInventoryItemById(invId, item_id, callback)
```

**Parameters:**
- `invId` - Inventory ID
- `item_id` - Item ID
- `callback` - Callback function

#### Set Custom Inventory Item Limit
```lua
exports.vorp_inventory:setCustomInventoryItemLimit(invId, item, limit, callback)
```

**Parameters:**
- `invId` - Inventory ID
- `item` - Item name
- `limit` - Item limit
- `callback` - Callback function

**Returns:** `true` if the limit was successfully set

*Note: Use this export when `whitelistItems` is set to `true` in `registerCustomInventory`*

### Custom Inventory Weapons

#### Add Weapons to Custom Inventory
```lua
exports.vorp_inventory:addWeaponsToCustomInventory(invid, weapons, charid, callback)
```

**Parameters:**
- `invid` - Inventory ID
- `weapons` - Weapons array:
  ```lua
  {
    {
      name = string,           -- Weapon name
      serial_number = string?, -- Optional serial number
      custom_label = string?,  -- Optional custom label
      custom_desc = string?,   -- Optional custom description
      components = table?      -- Optional components
    }
  }
  ```
- `charid` - Character identifier of the owner (if not shared)
- `callback` - Callback function

**Returns:** `true` if the weapons were successfully added

#### Remove Weapon from Custom Inventory
```lua
exports.vorp_inventory:removeWeaponFromCustomInventory(invid, weaponName, callback)
```

**Parameters:**
- `invid` - Inventory ID
- `weaponName` - Weapon name
- `callback` - Callback function

#### Remove Weapon from Custom Inventory by ID
```lua
exports.vorp_inventory:removeCustomInventoryWeaponById(invId, weapon_id, callback)
```

**Parameters:**
- `invId` - Inventory ID
- `weapon_id` - Weapon ID
- `callback` - Callback function

#### Set Custom Inventory Weapon Limit
```lua
exports.vorp_inventory:setCustomInventoryWeaponLimit(invId, weapon, limit, callback)
```

**Parameters:**
- `invId` - Inventory ID
- `weapon` - Weapon name
- `limit` - Weapon limit
- `callback` - Callback function

**Returns:** `true` if the limit was successfully set

*Note: Use this export when `whitelistWeapons` is set to `true` in `registerCustomInventory`*

### Player Inventory Access

#### Open Player Inventory
```lua
exports.vorp_inventory:openPlayerInventory(data)
```

**Parameters:**
- `data` - Configuration object:
  ```lua
  {
    source = int,           -- Source player
    target = int,           -- Target player
    title = string,         -- Inventory title
    blacklist = table,      -- Optional blacklisted items
    itemsLimit = table,     -- Optional item limits
    timeout = number        -- Optional timeout in seconds
  }
  ```

**Example:**
```lua
local data = {
  source = source,
  target = target,
  title = "Search inventory",
  blacklist = { -- OPTIONAL
    water = true, -- item name or weapon name
  },
  itemsLimit = { -- OPTIONAL
    weapons = { itemType = "item_weapon", limit = 1 }, -- how many weapons user is allowed to take
    items = { itemType = "item_standard", limit = 2 }, -- how many items user is allowed to take
  },
  timeout = 60, -- OPTIONAL in seconds, timeout applied when user reaches limits
}
exports.vorp_inventory:openPlayerInventory(data)
```

---

## Events

### Server Events

#### Item Use Event
Triggered when an item is used.

```lua
AddEventHandler("vorp_inventory:Server:OnItemUse", function(data)
  local source = data.source
  local itemName = data.item.name
  local itemMetadata = data.item.metadata
end)
```

#### Item Created Event
Triggered when an item is created in player inventory.

```lua
AddEventHandler("vorp_inventory:Server:OnItemCreated", function(data, source)
  -- data.count, data.name, data.metadata
end)
```

#### Item Removed Event
Triggered when an item is removed from player inventory.

```lua
AddEventHandler("vorp_inventory:Server:OnItemRemoved", function(data, source)
  -- data.count, data.name (no metadata is passed here)
end)
```

### Client Events

#### Inventory State Change Event
Triggered when inventory opens or closes (including custom inventories).

```lua
AddEventHandler("vorp_inventory:Client:OnInvStateChange", function(boolean)
  print(boolean) -- true if opened, false if closed
end)
```

---

## Statebags

### Player State

#### Equipped Weapon Data
Contains data from the current weapon used in the inventory or last weapon used.

**Client Side:**
```lua
local key = string.format("GetEquippedWeaponData_%d", weaponHash)
local data = LocalPlayer.state[key]
local serial = data.serialNumber
local id = data.weaponId
```

**Server Side:**
```lua
local key = string.format("GetEquippedWeaponData_%d", weaponHash)
local data = Player(source).state[key]
local serial = data.serialNumber
local id = data.weaponId
```

#### Inventory Active State
Check if inventory is active (open or closed) including custom inventories.

**Client Side:**
```lua
LocalPlayer.state.IsInvActive
```

**Server Side:**
```lua
Player(source).state.IsInvActive
```

### Global Statebags

#### Server Timestamp
Returns timestamp from server to be used in client.

```lua
local timestamp = GlobalState.TimeNow

-- Get hours, minutes and seconds from timestamp
local seconds = GlobalState.TimeNow % 60
local minutes = math.floor(GlobalState.TimeNow / 60) % 60
local hours = math.floor(GlobalState.TimeNow / 3600) % 24
```

---

## Notes

- This documentation is for developers creating scripts for the VORP Core Framework
- Version 3.6+ requires weapon name or hash for weight checking in `canCarryWeapons`
- Version 3.9+ uses `subItemById` instead of `subItemID` for lower versions
- Custom inventories support both shared and individual ownership models
- All callback functions can be synchronous or asynchronous
- Metadata operations include reserved keys: `description`, `image`, `label`, and `weight`