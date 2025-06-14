# RSGCore Client Function Reference

This documentation covers all available client-side functions in the RSGCore framework, including detailed usage examples and implementation notes.

## Table of Contents

1. [RSGCore.Functions.GetPlayerData](#rsgcorefunctionsgetplayerdata)
2. [RSGCore.Functions.GetCoords](#rsgcorefunctionsgetcoords)
3. [RSGCore.Functions.HasItem](#rsgcorefunctionshasitem)
4. [RSGCore.Functions.TriggerCallback](#rsgcorefunctionstriggercallback)
5. [RSGCore.Functions.GetVehicles](#rsgcorefunctionsgetvehicles)
6. [RSGCore.Functions.GetCoreObject](#rsgcorefunctionsgetcoreobject)
7. [RSGCore.Functions.GetPlayers](#rsgcorefunctionsgetplayers)
8. [RSGCore.Functions.GetPeds](#rsgcorefunctionsgetpeds)
9. [RSGCore.Functions.GetClosestPed](#rsgcorefunctionsgetclosestped)
10. [RSGCore.Functions.GetClosestVehicle](#rsgcorefunctionsgetclosestvehicle)
11. [RSGCore.Functions.GetClosestObject](#rsgcorefunctionsgetclosestobject)
12. [RSGCore.Functions.GetClosestPlayer](#rsgcorefunctionsgetclosestplayer)
13. [RSGCore.Functions.GetPlayersFromCoords](#rsgcorefunctionsgetplayersfromcoords)

---

## RSGCore.Functions.GetPlayerData

### Description
Perhaps the most used function in the framework. This function returns the player's data of the current source which, since it's used client-side, is automatically the client or player. It can be used with modifiers on the end starting with a "." (period).

### Function Definition
```lua
function RSGCore.Functions.GetPlayerData(cb)
    if not cb then return RSGCore.PlayerData end
    cb(RSGCore.PlayerData)
end
```

### Parameters
- `cb` (function, optional) - Callback function to receive player data

### Return Value
- Returns `RSGCore.PlayerData` table if no callback is provided
- Executes callback with player data if callback is provided

### Usage Examples

#### Basic Usage
```lua
local Player = RSGCore.Functions.GetPlayerData()
print(RSGCore.Debug(Player))
```

#### Accessing Specific Data
```lua
local Player = RSGCore.Functions.GetPlayerData()
local jobName = Player.job.name
print(jobName)
```

### Use Cases
- Getting current player job information
- Accessing player metadata (hunger, thirst, etc.)
- Retrieving player inventory data
- Checking player permissions and roles

---

## RSGCore.Functions.GetCoords

### Description
This function operates very similarly to how the native `GetEntityCoords` does, but it returns the heading as well in a vector4 format.

### Function Definition
```lua
function RSGCore.Functions.GetCoords(entity)
    return vector4(GetEntityCoords(entity), GetEntityHeading(entity))
end
```

### Parameters
- `entity` (number) - Entity handle to get coordinates from

### Return Value
- `vector4` - Contains x, y, z coordinates and heading (w component)

### Usage Example
```lua
local coords = RSGCore.Functions.GetCoords(PlayerPedId())
print(coords)
```

### Use Cases
- Getting complete positional data including heading
- Saving player positions for teleportation
- Calculating distances with directional data
- Setting spawn positions with proper rotation

---

## RSGCore.Functions.HasItem

### Description
Returns whether a player has a certain item in their inventory.

### Function Definition
```lua
function RSGCore.Functions.HasItem(item)
    local p = promise.new()
    RSGCore.Functions.TriggerCallback('RSGCore:HasItem', function(result)
        p:resolve(result)
    end, item)
    return Citizen.Await(p)
end
```

### Parameters
- `item` (string) - Item name to check for

### Return Value
- `boolean` or `table` - Returns item data if found, false if not found

### Usage Example
```lua
local hasItem = RSGCore.Functions.HasItem('my_cool_item')
print(hasItem)
```

### Use Cases
- Checking prerequisites before allowing actions
- Validating inventory requirements for crafting
- Conditional UI elements based on item possession
- Quest progression checks

---

## RSGCore.Functions.TriggerCallback

### Description
Function used to call from the client to the server and receive a value back using the callback system.

### Function Definition
```lua
function RSGCore.Functions.TriggerCallback(name, cb, ...)
    RSGCore.ServerCallbacks[name] = cb
    TriggerServerEvent('RSGCore:Server:TriggerCallback', name, ...)
end
```

### Parameters
- `name` (string) - Name of the callback to trigger
- `cb` (function) - Callback function to handle the response
- `...` - Additional parameters to pass to the server callback

### Usage Example
```lua
RSGCore.Functions.TriggerCallback('callbackName', function(result)
    print('I got this from the CreateCallBack --> '..result)
end, 'my_parameter_name')
```

### Use Cases
- Requesting data from server
- Validating server-side conditions
- Getting database information
- Performing secure server-side calculations

---

## RSGCore.Functions.GetVehicles

### Description
Returns vehicle game pool (for backwards compatibility) - Not worth using. Prefer using the native `GetGamePool('CVehicle')` directly.

### Function Definition
```lua
function RSGCore.Functions.GetVehicles()
    return GetGamePool('CVehicle')
end
```

### Return Value
- `table` - Array of vehicle entity handles

### Usage Examples

#### Legacy Method (Not Recommended)
```lua
local vehicles = RSGCore.Functions.GetVehicles()
print(RSGCore.Debug(vehicles))
```

#### Preferred Method
```lua
local vehicles = GetGamePool('CVehicle')
print(RSGCore.Debug(vehicles))
```

---

## RSGCore.Functions.GetCoreObject

### Description
Returns the core object for accessing RSGCore functionality. This is an export function.

### Export Definition
```lua
exports('GetCoreObject', function()
    return RSGCore
end)
```

### Usage Examples

#### Standard Usage
```lua
local RSGCore = exports['rsg-core']:GetCoreObject()
```

#### Global Declaration (Single File)
```lua
-- Call the core in a single file that loads before the others
RSGCore = exports['rsg-core']:GetCoreObject()
```

### Use Cases
- Initializing RSGCore in external resources
- Setting up shared RSGCore access
- Ensuring proper core object references

---

## RSGCore.Functions.GetPlayers

### Description
Returns active players in OneSync scope (for backwards compatibility) - Not worth using. Prefer using the native `GetActivePlayers()` directly.

### Function Definition
```lua
function RSGCore.Functions.GetPlayers()
    return GetActivePlayers()
end
```

### Return Value
- `table` - Array of active player IDs

### Usage Examples

#### Legacy Method (Not Recommended)
```lua
local players = RSGCore.Functions.GetPlayers()
print(RSGCore.Debug(players))
```

#### Preferred Method
```lua
local players = GetActivePlayers()
print(RSGCore.Debug(players))
```

---

## RSGCore.Functions.GetPeds

### Description
Returns a model hash filtered ped game pool, with optional ignore list functionality.

### Function Definition
```lua
function RSGCore.Functions.GetPeds(ignoreList)
    local pedPool = GetGamePool('CPed')
    local ignoreList = ignoreList or {}
    local peds = {}
    for i = 1, #pedPool, 1 do
        local found = false
        for j=1, #ignoreList, 1 do
            if ignoreList[j] == pedPool[i] then
                found = true
            end
        end
        if not found then
            peds[#peds+1] = pedPool[i]
        end
    end
    return peds
end
```

### Parameters
- `ignoreList` (table, optional) - Array of ped handles or model hashes to ignore

### Return Value
- `table` - Array of filtered ped entity handles

### Usage Example
```lua
local peds = RSGCore.Functions.GetPeds({`mp_m_freemode_01`})
print(RSGCore.Debug(peds))
```

### Use Cases
- Finding NPCs while excluding certain models
- Getting ambient population for interactions
- Filtering out player peds from searches

---

## RSGCore.Functions.GetClosestPed

### Description
Returns the closest ped to the player after filtering through the ignore list.

### Function Definition
```lua
function RSGCore.Functions.GetClosestPed(coords, ignoreList)
    local ped = PlayerPedId()
    if coords then
        coords = type(coords) == 'table' and vec3(coords.x, coords.y, coords.z) or coords
    else
        coords = GetEntityCoords(ped)
    end
    local ignoreList = ignoreList or {}
    local peds = RSGCore.Functions.GetPeds(ignoreList)
    local closestDistance = -1
    local closestPed = -1
    for i = 1, #peds, 1 do
        local pedCoords = GetEntityCoords(peds[i])
        local distance = #(pedCoords - coords)
        if closestDistance == -1 or closestDistance > distance then
            closestPed = peds[i]
            closestDistance = distance
        end
    end
    return closestPed, closestDistance
end
```

### Parameters
- `coords` (vector3/table, optional) - Coordinates to search from (defaults to player position)
- `ignoreList` (table, optional) - Array of ped handles to ignore

### Return Values
- `closestPed` (number) - Entity handle of closest ped
- `distance` (number) - Distance to the closest ped

### Usage Example
```lua
local coords = GetEntityCoords(PlayerPedId())
local closestPed, distance = RSGCore.Functions.GetClosestPed(coords)
print(closestPed, distance)
```

### Use Cases
- Finding nearest NPC for interactions
- Targeting systems
- AI behavior scripting

---

## RSGCore.Functions.GetClosestVehicle

### Description
Returns the closest vehicle to the player or specified coordinates.

### Function Definition
```lua
function RSGCore.Functions.GetClosestVehicle(coords)
    local ped = PlayerPedId()
    local vehicles = GetGamePool('CVehicle')
    local closestDistance = -1
    local closestVehicle = -1
    if coords then
        coords = type(coords) == 'table' and vec3(coords.x, coords.y, coords.z) or coords
    else
        coords = GetEntityCoords(ped)
    end
    for i = 1, #vehicles, 1 do
        local vehicleCoords = GetEntityCoords(vehicles[i])
        local distance = #(vehicleCoords - coords)
        if closestDistance == -1 or closestDistance > distance then
            closestVehicle = vehicles[i]
            closestDistance = distance
        end
    end
    return closestVehicle, closestDistance
end
```

### Parameters
- `coords` (vector3/table, optional) - Coordinates to search from (defaults to player position)

### Return Values
- `closestVehicle` (number) - Entity handle of closest vehicle
- `distance` (number) - Distance to the closest vehicle

### Usage Example
```lua
local coords = GetEntityCoords(PlayerPedId())
local closestVehicle, distance = RSGCore.Functions.GetClosestVehicle(coords)
print(closestVehicle, distance)
```

### Use Cases
- Vehicle interaction systems
- Auto-locking mechanics
- Parking validation
- Vehicle spawning position checks

---

## RSGCore.Functions.GetClosestObject

### Description
Returns the closest object to the player or specified coordinates.

### Function Definition
```lua
function RSGCore.Functions.GetClosestObject(coords)
    local ped = PlayerPedId()
    local objects = GetGamePool('CObject')
    local closestDistance = -1
    local closestObject = -1
    if coords then
        coords = type(coords) == 'table' and vec3(coords.x, coords.y, coords.z) or coords
    else
        coords = GetEntityCoords(ped)
    end
    for i = 1, #objects, 1 do
        local objectCoords = GetEntityCoords(objects[i])
        local distance = #(objectCoords - coords)
        if closestDistance == -1 or closestDistance > distance then
            closestObject = objects[i]
            closestDistance = distance
        end
    end
    return closestObject, closestDistance
end
```

### Parameters
- `coords` (vector3/table, optional) - Coordinates to search from (defaults to player position)

### Return Values
- `closestObject` (number) - Entity handle of closest object
- `distance` (number) - Distance to the closest object

### Usage Example
```lua
local coords = GetEntityCoords(PlayerPedId())
local closestObject, distance = RSGCore.Functions.GetClosestObject(coords)
print(closestObject, distance)
```

### Use Cases
- Interactive object systems
- Pickup mechanics
- Environmental interactions
- Object management scripts

---

## RSGCore.Functions.GetClosestPlayer

### Description
Returns the closest player to the client, excluding the client themselves.

### Function Definition
```lua
function RSGCore.Functions.GetClosestPlayer(coords)
    local ped = PlayerPedId()
    if coords then
        coords = type(coords) == 'table' and vec3(coords.x, coords.y, coords.z) or coords
    else
        coords = GetEntityCoords(ped)
    end
    local closestPlayers = RSGCore.Functions.GetPlayersFromCoords(coords)
    local closestDistance = -1
    local closestPlayer = -1
    for i = 1, #closestPlayers, 1 do
        if closestPlayers[i] ~= PlayerId() and closestPlayers[i] ~= -1 then
            local pos = GetEntityCoords(GetPlayerPed(closestPlayers[i]))
            local distance = #(pos - coords)
            if closestDistance == -1 or closestDistance > distance then
                closestPlayer = closestPlayers[i]
                closestDistance = distance
            end
        end
    end
    return closestPlayer, closestDistance
end
```

### Parameters
- `coords` (vector3/table, optional) - Coordinates to search from (defaults to player position)

### Return Values
- `closestPlayer` (number) - Player ID of closest player
- `distance` (number) - Distance to the closest player

### Usage Example
```lua
local coords = GetEntityCoords(PlayerPedId())
local closestPlayer, distance = RSGCore.Functions.GetClosestPlayer(coords)
print(closestPlayer, distance)
```

### Use Cases
- Player interaction systems
- Trading mechanics
- Social features
- Proximity-based actions

---

## RSGCore.Functions.GetPlayersFromCoords

### Description
Returns all players within a specified radius of given coordinates.

### Function Definition
```lua
function RSGCore.Functions.GetPlayersFromCoords(coords, distance)
    local players = RSGCore.Functions.GetPlayers()
    local ped = PlayerPedId()
    if coords then
        coords = type(coords) == 'table' and vec3(coords.x, coords.y, coords.z) or coords
    else
        coords = GetEntityCoords(ped)
    end
    local distance = distance or 5
    local closePlayers = {}
    for _, player in pairs(players) do
        local target = GetPlayerPed(player)
        local targetCoords = GetEntityCoords(target)
        local targetdistance = #(targetCoords - coords)
        if targetdistance <= distance then
            closePlayers[#closePlayers + 1] = player
        end
    end
    return closePlayers
end
```

### Parameters
- `coords` (vector3/table, optional) - Coordinates to search from (defaults to player position)
- `distance` (number, optional) - Search radius in units (defaults to 5.0)

### Return Value
- `table` - Array of player IDs within the specified radius

### Usage Example
```lua
local coords = GetEntityCoords(PlayerPedId())
local radius = 5.0
local closestPlayers = RSGCore.Functions.GetPlayersFromCoords(coords, radius)
print(RSGCore.Debug(closestPlayers))
```

### Use Cases
- Area-based notifications
- Group interactions
- Event participation checks
- Local chat systems
- Multi-player activities

---

## Best Practices

### Performance Considerations
1. **Caching**: Cache frequently accessed player data instead of calling `GetPlayerData()` repeatedly
2. **Distance Checks**: Use appropriate search radii for proximity functions to avoid unnecessary calculations
3. **Entity Pools**: Prefer native functions like `GetGamePool()` over wrapper functions when possible

### Error Handling
1. Always validate entity handles before using them
2. Check if coordinates are valid before distance calculations
3. Handle cases where no entities are found (functions may return -1)

### Code Organization
1. Store the RSGCore object reference early in your resource initialization
2. Use meaningful variable names when storing returned values
3. Consider creating local wrapper functions for frequently used patterns

### Memory Management
1. Clean up entity references when no longer needed
2. Avoid storing large arrays of entity handles for extended periods
3. Use appropriate scoping for temporary variables

---

## Common Patterns

### Getting Nearby Entities
```lua
-- Get all nearby entities of different types
local playerCoords = GetEntityCoords(PlayerPedId())
local radius = 10.0

local nearbyPlayers = RSGCore.Functions.GetPlayersFromCoords(playerCoords, radius)
local closestVehicle, vehicleDistance = RSGCore.Functions.GetClosestVehicle(playerCoords)
local closestPed, pedDistance = RSGCore.Functions.GetClosestPed(playerCoords)
```

### Player Data Access
```lua
-- Common player data access patterns
local Player = RSGCore.Functions.GetPlayerData()
local currentJob = Player.job.name
local isOnDuty = Player.job.onduty
local hunger = Player.metadata.hunger
local citizenId = Player.citizenid
```

### Callback Pattern
```lua
-- Standard callback usage
RSGCore.Functions.TriggerCallback('myResource:getServerData', function(data)
    if data then
        -- Process server response
        print('Received data from server:', data)
    else
        print('No data received')
    end
end, param1, param2)
```

---

## Additional Resources

- [RSGCore Server Function Reference](../server-functions/)
- [RSGCore Event Reference](../events/)
- [RSGCore Configuration Guide](../configuration/)

---

*This documentation is based on the RSGCore framework client function reference. For the most up-to-date information, please refer to the official RSGCore documentation.*