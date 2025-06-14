# RSGCore Server Function Reference

This documentation covers all available server-side functions in the RSGCore framework, including detailed usage examples and implementation details.

## Table of Contents

1. [RSGCore.Functions.GetCoords](#rsgcorefunctionsgetcoords)
2. [RSGCore.Functions.GetIdentifier](#rsgcorefunctionsgetidentifier)
3. [RSGCore.Functions.GetSource](#rsgcorefunctionsgetsource)
4. [RSGCore.Functions.GetPlayer](#rsgcorefunctionsgetplayer)
5. [RSGCore.Functions.GetPlayerByCitizenId](#rsgcorefunctionsgetplayerbycitizenid)
6. [RSGCore.Functions.GetPlayers](#rsgcorefunctionsgetplayers)
7. [RSGCore.Functions.GetRSGPlayers](#rsgcorefunctionsgetrsgplayers)
8. [RSGCore.Functions.CreateCallback](#rsgcorefunctionscreatecallback)
9. [RSGCore.Functions.CreateUseableItem](#rsgcorefunctionscreateuseableitem)
10. [RSGCore.Functions.CanUseItem](#rsgcorefunctionscanUseitem)
11. [RSGCore.Functions.UseItem](#rsgcorefunctionsuseitem)
12. [RSGCore.Functions.Kick](#rsgcorefunctionskick)
13. [RSGCore.Functions.AddPermission](#rsgcorefunctionsaddpermission)
14. [RSGCore.Functions.RemovePermission](#rsgcorefunctionsremovepermission)
15. [RSGCore.Functions.HasPermission](#rsgcorefunctionshaspermission)
16. [RSGCore.Functions.GetPermission](#rsgcorefunctionsgetpermission)
17. [RSGCore.Functions.IsPlayerBanned](#rsgcorefunctionsisplayerbanned)
18. [RSGCore.Functions.IsLicenseInUse](#rsgcorefunctionsislicenseinuse)

---

## RSGCore.Functions.GetCoords

### Description
Get the coordinates of a passed entity, returning both position and heading in a vector4 format.

### Function Definition
```lua
function RSGCore.Functions.GetCoords(entity)
    local coords = GetEntityCoords(entity, false)
    local heading = GetEntityHeading(entity)
    return vector4(coords.x, coords.y, coords.z, heading)
end
```

### Parameters
- `entity` (number) - Entity handle to get coordinates from

### Return Value
- `vector4` - Contains x, y, z coordinates and heading (w component)

### Usage Example
```lua
local ped = GetPlayerPed(source)
local coords = RSGCore.Functions.GetCoords(ped)
print(coords)
```

### Use Cases
- Getting player positions for teleportation
- Storing vehicle locations
- Calculating distances between entities
- Setting spawn positions with proper rotation

---

## RSGCore.Functions.GetIdentifier

### Description
Get a specific identifier of a player. Defaults to the identifier type specified in RSGCore configuration.

### Function Definition
```lua
function RSGCore.Functions.GetIdentifier(source, idtype)
    local idtype = idtype or RSGConfig.IdentifierType
    for key, value in pairs(GetPlayerIdentifiers(source)) do
        if string.find(value, idtype) then
            return identifier
        end
    end
    return nil
end
```

### Parameters
- `source` (number) - Player source ID
- `idtype` (string, optional) - Identifier type to retrieve (defaults to config value)

### Return Value
- `string` or `nil` - The requested identifier or nil if not found

### Usage Examples

#### Get Specific Identifier
```lua
local identifier = RSGCore.Functions.GetIdentifier(source, 'license')
print(identifier)
```

#### Get Default Identifier
```lua
-- Uses the identifier type from rsg-core config
local identifier = RSGCore.Functions.GetIdentifier(source)
print(identifier)
```

### Common Identifier Types
- `license` - Rockstar Social Club license
- `steam` - Steam identifier
- `discord` - Discord identifier
- `fivem` - FiveM identifier

### Use Cases
- Player identification and tracking
- Database lookups
- Ban system implementation
- Player data management

---

## RSGCore.Functions.GetSource

### Description
Get a player's source ID by their identifier.

### Function Definition
```lua
function RSGCore.Functions.GetSource(identifier)
    for key, value in pairs(RSGCore.Players) do
        local identifiers = GetPlayerIdentifiers(key)
        for _, id in pairs(identifiers) do
            if identifier == id then
                return key
            end
        end
    end
    return 0
end
```

### Parameters
- `identifier` (string) - Player identifier to search for

### Return Value
- `number` - Player source ID or 0 if not found

### Usage Example
```lua
local identifier = RSGCore.Functions.GetIdentifier(source, 'license')
local playerSource = RSGCore.Functions.GetSource(identifier)
print(playerSource)
```

### Use Cases
- Converting stored identifiers back to active sources
- Cross-referencing player data
- Admin tools and commands
- Player management systems

---

## RSGCore.Functions.GetPlayer

### Description
Get a player object by their source ID and access their complete data. This is one of the most important functions for player data management.

### Function Definition
```lua
function RSGCore.Functions.GetPlayer(source)
    local src = source
    if type(src) == 'number' then
        return RSGCore.Players[src]
    else
        return RSGCore.Players[RSGCore.Functions.GetSource(src)]
    end
end
```

### Parameters
- `source` (number or string) - Player source ID or identifier

### Return Value
- `table` or `nil` - Player object with complete PlayerData or nil if not found

### Usage Examples

#### Basic Player Access
```lua
local Player = RSGCore.Functions.GetPlayer(source)
print(RSGCore.Debug(Player))
```

#### Accessing Player Data
```lua
local Player = RSGCore.Functions.GetPlayer(source)
print(Player.PlayerData.citizenid)
```

#### Comprehensive Player Data Access
```lua
local Player = RSGCore.Functions.GetPlayer(source)
if Player then
    local citizenId = Player.PlayerData.citizenid
    local firstName = Player.PlayerData.charinfo.firstname
    local lastName = Player.PlayerData.charinfo.lastname
    local job = Player.PlayerData.job.name
    local money = Player.PlayerData.money.cash
    
    print(string.format("Player: %s %s (%s) - Job: %s - Cash: $%d", 
        firstName, lastName, citizenId, job, money))
end
```

### Use Cases
- Accessing player inventory
- Checking player job and permissions
- Managing player money and assets
- Player data validation
- Character information retrieval

---

## RSGCore.Functions.GetPlayerByCitizenId

### Description
Get a player by their citizen ID and access their data. The player must be online for this function to work.

### Function Definition
```lua
function RSGCore.Functions.GetPlayerByCitizenId(citizenid)
    for key, value in pairs(RSGCore.Players) do
        if RSGCore.Players[key].PlayerData.citizenid == citizenid then
            return RSGCore.Players[key]
        end
    end
    return nil
end
```

### Parameters
- `citizenid` (string) - Citizen ID to search for

### Return Value
- `table` or `nil` - Player object or nil if not found/offline

### Usage Examples

#### Basic Citizen ID Search
```lua
local Player = RSGCore.Functions.GetPlayerByCitizenId('ONZ55343')
print(RSGCore.Debug(Player))
```

#### Accessing Player Data by Citizen ID
```lua
local Player = RSGCore.Functions.GetPlayerByCitizenId('ONZ55343')
if Player then
    print(Player.PlayerData.license)
else
    print('Player not found or offline')
end
```

### Use Cases
- Admin commands targeting specific characters
- Player-to-player transactions
- Quest and mission systems
- Character-specific data retrieval

---

## RSGCore.Functions.GetPlayers

### Description
Get all player IDs currently on the server. This is a deprecated method; prefer `GetRSGPlayers()`.

### Function Definition
```lua
function RSGCore.Functions.GetPlayers()
    local sources = {}
    for key, value in pairs(RSGCore.Players) do
        sources[#sources + 1] = key
    end
    return sources
end
```

### Return Value
- `table` - Array of player source IDs

### Usage Example
```lua
local Players = RSGCore.Functions.GetPlayers()
print(RSGCore.Debug(Players))
```

### Note
This function is deprecated. Use `RSGCore.Functions.GetRSGPlayers()` instead for better performance and more complete data access.

---

## RSGCore.Functions.GetRSGPlayers

### Description
Access the table of all active players on the server. This is the preferred method over `GetPlayers()`.

### Function Definition
```lua
function RSGCore.Functions.GetRSGPlayers()
    return RSGCore.Players
end
```

### Return Value
- `table` - Complete RSGCore.Players table with full player objects

### Usage Example
```lua
local Players = RSGCore.Functions.GetRSGPlayers()
print(RSGCore.Debug(Players))
```

### Advanced Usage
```lua
-- Iterate through all online players
local Players = RSGCore.Functions.GetRSGPlayers()
for source, Player in pairs(Players) do
    print(string.format("Player %d: %s %s (Job: %s)", 
        source, 
        Player.PlayerData.charinfo.firstname,
        Player.PlayerData.charinfo.lastname,
        Player.PlayerData.job.name))
end
```

### Use Cases
- Server-wide announcements
- Mass player operations
- Statistics collection
- Administrative tools

---

## RSGCore.Functions.CreateCallback

### Description
Creates a callback which is used on the client-side code with `RSGCore.Functions.TriggerCallback`. This enables secure client-server communication.

### Function Definition
```lua
function RSGCore.Functions.CreateCallback(name, cb)
    RSGCore.ServerCallbacks[name] = cb
end
```

### Parameters
- `name` (string) - Unique callback name
- `cb` (function) - Callback function to execute

### Usage Example
```lua
RSGCore.Functions.CreateCallback('callbackName', function(source, cb)
    cb('Ok')
end)
```

### Advanced Examples

#### Player Data Callback
```lua
RSGCore.Functions.CreateCallback('getPlayerMoney', function(source, cb)
    local Player = RSGCore.Functions.GetPlayer(source)
    if Player then
        cb({
            cash = Player.PlayerData.money.cash,
            bank = Player.PlayerData.money.bank
        })
    else
        cb(nil)
    end
end)
```

#### Database Query Callback
```lua
RSGCore.Functions.CreateCallback('getUserVehicles', function(source, cb, citizenId)
    local Player = RSGCore.Functions.GetPlayer(source)
    if not Player then return cb(nil) end
    
    MySQL.Async.fetchAll('SELECT * FROM player_vehicles WHERE citizenid = ?', {
        citizenId or Player.PlayerData.citizenid
    }, function(result)
        cb(result)
    end)
end)
```

### Use Cases
- Secure data retrieval from server
- Database queries from client
- Validation checks
- Complex server-side calculations

---

## RSGCore.Functions.CreateUseableItem

### Description
Register an item as usable in the core framework. This allows players to use items from their inventory.

### Function Definition
```lua
function RSGCore.Functions.CreateUseableItem(item, cb)
    RSGCore.UseableItems[item] = cb
end
```

### Parameters
- `item` (string) - Item name to register
- `cb` (function) - Function to execute when item is used

### Usage Example
```lua
RSGCore.Functions.CreateUseableItem('example_item', function(source, item)
    local Player = RSGCore.Functions.GetPlayer(source)
    if not Player.Functions.GetItemByName(item.name) then return end
    -- Trigger code here for what item should do
end)
```

### Advanced Examples

#### Consumable Item
```lua
RSGCore.Functions.CreateUseableItem('sandwich', function(source, item)
    local Player = RSGCore.Functions.GetPlayer(source)
    if not Player.Functions.GetItemByName(item.name) then return end
    
    -- Remove item from inventory
    Player.Functions.RemoveItem('sandwich', 1)
    
    -- Restore hunger
    Player.Functions.SetMetaData('hunger', math.min(100, Player.PlayerData.metadata.hunger + 25))
    
    -- Notify player
    TriggerClientEvent('RSGCore:Notify', source, 'You ate a sandwich and feel less hungry', 'success')
end)
```

#### Tool Item
```lua
RSGCore.Functions.CreateUseableItem('lockpick', function(source, item)
    local Player = RSGCore.Functions.GetPlayer(source)
    if not Player.Functions.GetItemByName(item.name) then return end
    
    -- Check if player has required skill
    if Player.PlayerData.metadata.lockpicking_skill < 10 then
        TriggerClientEvent('RSGCore:Notify', source, 'You don\'t have enough lockpicking skill', 'error')
        return
    end
    
    -- Trigger client-side lockpicking minigame
    TriggerClientEvent('lockpicking:startMinigame', source)
end)
```

### Use Cases
- Consumable items (food, drinks, medicine)
- Tools and equipment
- Key items and documents
- Crafting materials

---

## RSGCore.Functions.CanUseItem

### Description
Check if an item is registered as usable before attempting to use it.

### Function Definition
```lua
function RSGCore.Functions.CanUseItem(item)
    return RSGCore.UseableItems[item]
end
```

### Parameters
- `item` (string) - Item name to check

### Return Value
- `function` or `nil` - The useable item function or nil if not registered

### Usage Examples

#### Basic Check
```lua
local canUse = RSGCore.Functions.CanUseItem('example_item')
print(canUse)
```

#### Conditional Usage
```lua
local canUse = RSGCore.Functions.CanUseItem('example_item')
if not canUse then return end
-- Trigger code here
```

### Use Cases
- Inventory system validation
- UI element states
- Error prevention
- Dynamic item behavior

---

## RSGCore.Functions.UseItem

### Description
Trigger an item to be used on the player. This manually executes the useable item function.

### Function Definition
```lua
function RSGCore.Functions.UseItem(source, item)
    RSGCore.UseableItems[item.name](source, item)
end
```

### Parameters
- `source` (number) - Player source ID
- `item` (table) - Item data table

### Usage Example
```lua
local Player = RSGCore.Functions.GetPlayer(source)
if not Player.Functions.GetItemByName('example_item') then return end
RSGCore.Functions.UseItem(source, 'example_item')
```

### Advanced Usage
```lua
-- Use item with full item data
local Player = RSGCore.Functions.GetPlayer(source)
local itemData = Player.Functions.GetItemByName('medkit')
if itemData then
    RSGCore.Functions.UseItem(source, itemData)
end
```

### Use Cases
- Programmatic item usage
- Admin commands
- Automated systems
- Quest rewards

---

## RSGCore.Functions.Kick

### Description
Kick a player from the server with a custom reason and optional Discord information.

### Function Definition
```lua
function RSGCore.Functions.Kick(source, reason, setKickReason, deferrals)
    local src = source
    reason = '\n'..reason..'\n🔸 Check our Discord for further information: '..RSGCore.Config.Server.discord
    if setKickReason then
        setKickReason(reason)
    end
    CreateThread(function()
        if deferrals then
            deferrals.update(reason)
            Wait(2500)
        end
        if src then
            DropPlayer(src, reason)
        end
        local i = 0
        while (i <= 4) do
            i = i + 1
            while true do
                if src then
                    if(GetPlayerPing(src) >= 0) then
                        break
                    end
                    Wait(100)
                    CreateThread(function()
                        DropPlayer(src, reason)
                    end)
                end
            end
            Wait(5000)
        end
    end)
end
```

### Parameters
- `source` (number) - Player source ID to kick
- `reason` (string) - Reason for the kick
- `setKickReason` (boolean, optional) - Whether to set kick reason
- `deferrals` (boolean, optional) - Whether to use deferrals

### Usage Example
```lua
RSGCore.Functions.Kick(playerId, 'You messed up', true, true)
```

### Advanced Examples

#### Admin Command Kick
```lua
RegisterCommand('kick', function(source, args)
    if not RSGCore.Functions.HasPermission(source, 'admin') then return end
    
    local targetId = tonumber(args[1])
    local reason = table.concat(args, ' ', 2) or 'No reason specified'
    
    if targetId and RSGCore.Functions.GetPlayer(targetId) then
        RSGCore.Functions.Kick(targetId, reason, true, false)
        TriggerClientEvent('RSGCore:Notify', source, 'Player kicked successfully', 'success')
    else
        TriggerClientEvent('RSGCore:Notify', source, 'Invalid player ID', 'error')
    end
end)
```

### Use Cases
- Administrative punishment
- Rule violation enforcement
- Security measures
- Connection management

---

## RSGCore.Functions.AddPermission

### Description
Give a player a specific permission level for the current session only. Permissions are lost on disconnect.

### Function Definition
```lua
function RSGCore.Functions.AddPermission(source, permission)
    local license = RSGCore.Functions.GetIdentifier(source, 'license')
    ExecuteCommand(('add_principal identifier.%s rsgcore.%s'):format(license, permission))
    RSGCore.Commands.Refresh(source)
end
```

### Parameters
- `source` (number) - Player source ID
- `permission` (string) - Permission level to add

### Usage Example
```lua
local Player = RSGCore.Functions.GetPlayer(playerId)
local permission = 'admin'
RSGCore.Functions.AddPermission(Player.PlayerData.source, permission)
```

### Advanced Usage
```lua
-- Temporary permission assignment
RegisterCommand('tempmod', function(source, args)
    if not RSGCore.Functions.HasPermission(source, 'admin') then return end
    
    local targetId = tonumber(args[1])
    if targetId and RSGCore.Functions.GetPlayer(targetId) then
        RSGCore.Functions.AddPermission(targetId, 'mod')
        TriggerClientEvent('RSGCore:Notify', source, 'Temporary moderator permissions granted', 'success')
        TriggerClientEvent('RSGCore:Notify', targetId, 'You have been granted temporary moderator permissions', 'info')
    end
end)
```

### Common Permission Levels
- `user` - Standard user permissions
- `mod` - Moderator permissions
- `admin` - Administrator permissions
- `god` - Highest level permissions

### Use Cases
- Temporary staff assignments
- Event management
- Trial moderator periods
- Emergency permissions

---

## RSGCore.Functions.RemovePermission

### Description
Remove specific or all permissions from a player for the current session only.

### Function Definition
```lua
function RSGCore.Functions.RemovePermission(source, permission)
    local src = source
    local license = RSGCore.Functions.GetIdentifier(src, 'license')
    if permission then
        if IsPlayerAceAllowed(src, permission) then
            ExecuteCommand(('remove_principal identifier.%s rsgcore.%s'):format(license, permission))
            RSGCore.Commands.Refresh(src)
        end
    else
        for k,v in pairs(RSGCore.Config.Server.Permissions) do
            if IsPlayerAceAllowed(src, v) then
                ExecuteCommand(('remove_principal identifier.%s rsgcore.%s'):format(license, v))
                RSGCore.Commands.Refresh(src)
            end
        end
    end
end
```

### Parameters
- `source` (number) - Player source ID
- `permission` (string, optional) - Specific permission to remove (if nil, removes all)

### Usage Examples

#### Remove Specific Permission
```lua
local Player = RSGCore.Functions.GetPlayer(playerId)
local permission = 'admin'
RSGCore.Functions.RemovePermission(Player.PlayerData.source, permission)
```

#### Remove All Permissions
```lua
local Player = RSGCore.Functions.GetPlayer(playerId)
RSGCore.Functions.RemovePermission(Player.PlayerData.source) -- No permission specified = remove all
```

### Use Cases
- Staff punishment/demotion
- Security revocation
- Trial period endings
- Permission auditing

---

## RSGCore.Functions.HasPermission

### Description
Check if a player has the required permission level.

### Function Definition
```lua
function RSGCore.Functions.HasPermission(source, permission)
    if IsPlayerAceAllowed(source, permission) then return true end
    return false
end
```

### Parameters
- `source` (number) - Player source ID
- `permission` (string) - Permission level to check

### Return Value
- `boolean` - True if player has permission, false otherwise

### Usage Examples

#### Basic Permission Check
```lua
local hasPerms = RSGCore.Functions.HasPermission(source, 'admin')
print(hasPerms)
```

#### Conditional Code Execution
```lua
local hasPerms = RSGCore.Functions.HasPermission(source, 'admin')
if not hasPerms then return end
-- Trigger code here
```

#### Command Permission Validation
```lua
RegisterCommand('adminpanel', function(source)
    if not RSGCore.Functions.HasPermission(source, 'admin') then
        TriggerClientEvent('RSGCore:Notify', source, 'You don\'t have permission to use this command', 'error')
        return
    end
    
    -- Open admin panel
    TriggerClientEvent('admin:openPanel', source)
end)
```

### Use Cases
- Command access control
- Feature gating
- UI element visibility
- Action authorization

---

## RSGCore.Functions.GetPermission

### Description
Get all permissions that a player currently has.

### Function Definition
```lua
function RSGCore.Functions.GetPermission(source)
    local src = source
    local perms = {}
    for key, value in pairs (RSGCore.Config.Server.Permissions) do
        if IsPlayerAceAllowed(src, value) then
            perms[value] = true
        end
    end
    return perms
end
```

### Parameters
- `source` (number) - Player source ID

### Return Value
- `table` - Table of permissions where key is permission name and value is true

### Usage Examples

#### Get All Permissions
```lua
local permissions = RSGCore.Functions.GetPermission(source)
print(RSGCore.Debug(permissions))
```

#### Iterate Through Permissions
```lua
local permissions = RSGCore.Functions.GetPermission(source)
for key, value in pairs(permissions) do
    if value == true then
        print(key)
    end
end
```

#### Permission Level Detection
```lua
local permissions = RSGCore.Functions.GetPermission(source)
local highestPerm = 'user'

if permissions['god'] then
    highestPerm = 'god'
elseif permissions['admin'] then
    highestPerm = 'admin'
elseif permissions['mod'] then
    highestPerm = 'mod'
end

print('Player has', highestPerm, 'permissions')
```

### Use Cases
- Permission auditing
- Dynamic UI generation
- Role assignment verification
- Access level determination

---

## RSGCore.Functions.IsPlayerBanned

### Description
Check if a player is banned from the server. Used primarily during connection process.

### Function Definition
```lua
function RSGCore.Functions.IsPlayerBanned(source)
    local plicense = RSGCore.Functions.GetIdentifier(source, 'license')
    local result = MySQL.Sync.fetchSingle('SELECT * FROM bans WHERE license = ?', { plicense })
    if not result then return false end
    if os.time() < result.expire then
        local timeTable = os.date('*t', tonumber(result.expire))
        return true, 'You have been banned from the server:\n' .. result.reason .. '\nYour ban expires ' .. timeTable.day .. '/' .. timeTable.month .. '/' .. timeTable.year .. ' ' .. timeTable.hour .. ':' .. timeTable.min .. '\n'
    else
        MySQL.Async.execute('DELETE FROM bans WHERE id = ?', { result.id })
    end
    return false
end
```

### Parameters
- `source` (number) - Player source ID

### Return Values
- `boolean` - True if player is banned
- `string` (optional) - Ban message with reason and expiration time

### Usage Example
```lua
local isBanned = RSGCore.Functions.IsPlayerBanned(source)
print(isBanned)
```

### Advanced Usage
```lua
-- Check ban status during connection
AddEventHandler('playerConnecting', function(name, setKickReason, deferrals)
    local source = source
    deferrals.defer()
    
    local isBanned, banMessage = RSGCore.Functions.IsPlayerBanned(source)
    if isBanned then
        deferrals.done(banMessage)
        return
    end
    
    deferrals.done()
end)
```

### Database Schema
Expected `bans` table structure:
- `id` - Unique ban ID
- `license` - Player license identifier
- `reason` - Ban reason
- `expire` - Unix timestamp of ban expiration

### Use Cases
- Connection filtering
- Ban system implementation
- Player validation
- Security enforcement

---

## RSGCore.Functions.IsLicenseInUse

### Description
Prevent duplicate licenses on the server. Used during connection to ensure unique player identities.

### Function Definition
```lua
function RSGCore.Functions.IsLicenseInUse(license)
    local players = GetPlayers()
    for key, value in pairs(players) do
        local identifiers = GetPlayerIdentifiers(value)
        for _, id in pairs(identifiers) do
            if string.find(id, 'license') then
                if id == license then
                    return true
                end
            end
        end
    end
    return false
end
```

### Parameters
- `license` (string) - License identifier to check

### Return Value
- `boolean` - True if license is already in use, false otherwise

### Usage Example
```lua
local license = RSGCore.Functions.GetIdentifier(source, 'license')
local isUsed = RSGCore.Functions.IsLicenseInUse(license)
print(isUsed)
```

### Connection Validation Example
```lua
AddEventHandler('playerConnecting', function(name, setKickReason, deferrals)
    local source = source
    deferrals.defer()
    
    local license = RSGCore.Functions.GetIdentifier(source, 'license')
    if RSGCore.Functions.IsLicenseInUse(license) then
        deferrals.done('This license is already in use on the server. Please try again later.')
        return
    end
    
    deferrals.done()
end)
```

### Use Cases
- Preventing multiple connections from same account
- Connection security
- Server integrity
- Account management

---

## Best Practices

### Performance Optimization
1. **Caching**: Cache frequently accessed player data instead of repeated `GetPlayer()` calls
2. **Validation**: Always validate player existence before operations
3. **Batch Operations**: Group multiple player operations when possible
4. **Database Efficiency**: Use appropriate MySQL query types (Sync vs Async)

### Security Considerations
1. **Permission Validation**: Always check permissions before sensitive operations
2. **Input Sanitization**: Validate all parameters before processing
3. **Error Handling**: Handle database errors gracefully
4. **Rate Limiting**: Implement rate limiting for user-triggered functions

### Code Organization
1. **Function Naming**: Use descriptive names for callback functions
2. **Error Messages**: Provide clear, user-friendly error messages
3. **Documentation**: Document custom callbacks and their expected parameters
4. **Modular Design**: Keep functions focused on single responsibilities

### Database Management
1. **Connection Handling**: Ensure proper database connection management
2. **Query Optimization**: Use indexed columns for frequent lookups
3. **Data Validation**: Validate data before database operations
4. **Backup Considerations**: Handle critical data operations safely

---

## Common Integration Patterns

### Player Management System
```lua
-- Comprehensive player utilities
local PlayerUtils = {}

function PlayerUtils.GetOnlinePlayersCount()
    local players = RSGCore.Functions.GetRSGPlayers()
    return #players
end

function PlayerUtils.GetPlayersByJob(jobName)
    local players = RSGCore.Functions.GetRSGPlayers()
    local jobPlayers = {}
    
    for source, Player in pairs(players) do
        if Player.PlayerData.job.name == jobName then
            jobPlayers[#jobPlayers + 1] = Player
        end
    end
    
    return jobPlayers
end

function PlayerUtils.BroadcastToPermission(permission, message, messageType)
    local players = RSGCore.Functions.GetRSGPlayers()
    
    for source, Player in pairs(players) do
        if RSGCore.Functions.HasPermission(source, permission) then
            TriggerClientEvent('RSGCore:Notify', source, message, messageType or 'info')
        end
    end
end
```

### Secure Callback System
```lua
-- Advanced callback with permission checking
RSGCore.Functions.CreateCallback('admin:getPlayerData', function(source, cb, targetId)
    if not RSGCore.Functions.HasPermission(source, 'admin') then
        cb(nil, 'No permission')
        return
    end
    
    local targetPlayer = RSGCore.Functions.GetPlayer(targetId)
    if not targetPlayer then
        cb(nil, 'Player not found')
        return
    end
    
    cb({
        citizenid = targetPlayer.PlayerData.citizenid,
        name = targetPlayer.PlayerData.charinfo.firstname .. ' ' .. targetPlayer.PlayerData.charinfo.lastname,
        job = targetPlayer.PlayerData.job,
        money = targetPlayer.PlayerData.money,
        metadata = targetPlayer.PlayerData.metadata
    })
end)
```

### Item Management System
```lua
-- Advanced useable item with cooldowns
local itemCooldowns = {}

RSGCore.Functions.CreateUseableItem('energy_drink', function(source, item)
    local Player = RSGCore.Functions.GetPlayer(source)
    if not Player then return end
    
    -- Check cooldown
    if itemCooldowns[source] and itemCooldowns[source] > GetGameTimer() then
        local remainingTime = math.ceil((itemCooldowns[source] - GetGameTimer()) / 1000)
        TriggerClientEvent('RSGCore:Notify', source, 'You must wait ' .. remainingTime .. ' seconds', 'error')
        return
    end
    
    -- Check if player has item
    if not Player.Functions.GetItemByName('energy_drink') then return end
    
    -- Use item
    Player.Functions.RemoveItem('energy_drink', 1)
    Player.Functions.SetMetaData('stress', math.max(0, Player.PlayerData.metadata.stress - 10))
    
    -- Set cooldown (60 seconds)
    itemCooldowns[source] = GetGameTimer() + 60000
    
    TriggerClientEvent('RSGCore:Notify', source, 'You feel energized!', 'success')
    TriggerClientEvent('energy:boost', source) -- Trigger client effects
end)
```

---

## Error Handling Examples

### Robust Function Wrappers
```lua
-- Safe player operations
function SafePlayerOperation(source, operation, ...)
    local Player = RSGCore.Functions.GetPlayer(source)
    if not Player then
        print('Error: Invalid player for operation:', operation)
        return false
    end
    
    local success, result = pcall(operation, Player, ...)
    if not success then
        print('Error in player operation:', operation, result)
        return false
    end
    
    return true, result
end

-- Usage
SafePlayerOperation(source, function(Player, amount)
    Player.Functions.AddMoney('cash', amount)
end, 1000)
```

### Database Error Handling
```lua
-- Safe database operations with callbacks
RSGCore.Functions.CreateCallback('safeQuery:getPlayerVehicles', function(source, cb)
    local Player = RSGCore.Functions.GetPlayer(source)
    if not Player then
        cb(nil, 'Player not found')
        return
    end
    
    MySQL.Async.fetchAll('SELECT * FROM player_vehicles WHERE citizenid = ?', {
        Player.PlayerData.citizenid
    }, function(result)
        if result then
            cb(result)
        else
            cb(nil, 'Database error')
        end
    end)
end)
```

---

## Additional Resources

- [RSGCore Client Function Reference](../client-functions/)
- [RSGCore Event Reference](../events/)
- [RSGCore Database Schema](../database/)
- [RSGCore Configuration Guide](../configuration/)

---

*This documentation is based on the RSGCore framework server function reference. For the most up-to-date information, please refer to the official RSGCore documentation.*