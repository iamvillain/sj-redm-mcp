# RSGCore Server Event Reference

This documentation covers all available server-side events in the RSGCore framework, including detailed usage examples and implementation details.

## Table of Contents

1. [RSGCore:Server:CloseServer](#rsgcoreservercloseserver)
2. [RSGCore:Server:OpenServer](#rsgcoreserveropenserver)
3. [RSGCore:UpdatePlayer](#rsgcoreupdateplayer)
4. [RSGCore:Server:SetMetaData](#rsgcoreserversetmetadata)
5. [RSGCore:ToggleDuty](#rsgcoretoggleduty)
6. [RSGCore:CallCommand](#rsgcorecallcommand)

---

## RSGCore:Server:CloseServer

### Description
Event to check if the server is closed and handle server closure with optional reason. This event kicks all non-whitelisted players when triggered by an admin.

### Event Handler
```lua
RegisterNetEvent('RSGCore:Server:CloseServer', function(reason)
    local src = source
    if RSGCore.Functions.HasPermission(src, 'admin') then
        reason = reason or 'No reason specified'
        RSGCore.Config.Server.Closed = true
        RSGCore.Config.Server.ClosedReason = reason
        for k in pairs(RSGCore.Players) do
            if not RSGCore.Functions.HasPermission(k, RSGCore.Config.Server.WhitelistPermission) then
                RSGCore.Functions.Kick(k, reason, nil, nil)
            end
        end
    else
        RSGCore.Functions.Kick(src, 'You don\'t have permissions for this..', nil, nil)
    end
end)
```

### Parameters
- `reason` (string, optional) - Reason for server closure (defaults to 'No reason specified')

### Behavior
1. **Permission Check**: Verifies the triggering player has 'admin' permissions
2. **Server State**: Sets `RSGCore.Config.Server.Closed = true`
3. **Reason Storage**: Stores the closure reason in `RSGCore.Config.Server.ClosedReason`
4. **Player Removal**: Kicks all players without whitelist permissions
5. **Security**: Kicks unauthorized players attempting to use this event

### Usage Examples

#### Triggering from Client
```lua
-- Close server with custom reason
TriggerServerEvent('RSGCore:Server:CloseServer', 'Server maintenance in progress')

-- Close server with default reason
TriggerServerEvent('RSGCore:Server:CloseServer')
```

#### Server-side Trigger
```lua
-- Emergency server closure
TriggerEvent('RSGCore:Server:CloseServer', 'Emergency maintenance required')
```

### Use Cases
- Emergency server maintenance
- Scheduled maintenance periods
- Administrative server control
- Security lockdowns

---

## RSGCore:Server:OpenServer

### Description
Event to open the server and allow new connections. This reverses the effects of the CloseServer event.

### Event Handler
```lua
RegisterNetEvent('RSGCore:Server:OpenServer', function()
    local src = source
    if RSGCore.Functions.HasPermission(src, 'admin') then
        RSGCore.Config.Server.Closed = false
    else
        RSGCore.Functions.Kick(src, 'You don\'t have permissions for this..', nil, nil)
    end
end)
```

### Parameters
None

### Behavior
1. **Permission Check**: Verifies the triggering player has 'admin' permissions
2. **Server State**: Sets `RSGCore.Config.Server.Closed = false`
3. **Security**: Kicks unauthorized players attempting to use this event

### Usage Examples

#### Triggering from Client
```lua
-- Open server for normal operations
TriggerServerEvent('RSGCore:Server:OpenServer')
```

#### Server-side Trigger
```lua
-- Programmatically open server
TriggerEvent('RSGCore:Server:OpenServer')
```

### Use Cases
- Ending maintenance periods
- Reopening after emergency closure
- Administrative server management
- Automated server scheduling

---

## RSGCore:UpdatePlayer

### Description
Event for updating and saving player data, specifically handling hunger and thirst degradation over time.

### Event Handler
```lua
RegisterNetEvent('RSGCore:UpdatePlayer', function()
    local src = source
    local Player = RSGCore.Functions.GetPlayer(src)
    if not Player then return end
    local newHunger = Player.PlayerData.metadata['hunger'] - RSGCore.Config.Player.HungerRate
    local newThirst = Player.PlayerData.metadata['thirst'] - RSGCore.Config.Player.ThirstRate
    if newHunger <= 0 then newHunger = 0 end
    if newThirst <= 0 then newThirst = 0 end
    Player.Functions.SetMetaData('thirst', newThirst)
    Player.Functions.SetMetaData('hunger', newHunger)
    TriggerClientEvent('hud:client:UpdateNeeds', src, newHunger, newThirst)
    Player.Functions.Save()
end)
```

### Parameters
None

### Behavior
1. **Player Validation**: Checks if player exists
2. **Hunger Calculation**: Reduces hunger by configured rate
3. **Thirst Calculation**: Reduces thirst by configured rate
4. **Bounds Checking**: Ensures values don't go below 0
5. **Metadata Update**: Updates player metadata
6. **Client Sync**: Triggers HUD update on client
7. **Data Persistence**: Saves player data to database

### Configuration
The degradation rates are controlled by:
- `RSGCore.Config.Player.HungerRate` - Amount of hunger lost per update
- `RSGCore.Config.Player.ThirstRate` - Amount of thirst lost per update

### Usage Examples

#### Manual Trigger
```lua
-- Trigger player update from client
TriggerServerEvent('RSGCore:UpdatePlayer')
```

#### Automated System
```lua
-- Server-side timer for regular updates
CreateThread(function()
    while true do
        Wait(60000) -- Update every minute
        for playerId in pairs(RSGCore.Players) do
            TriggerEvent('RSGCore:UpdatePlayer')
        end
    end
end)
```

### Use Cases
- Automatic hunger/thirst degradation
- Survival gameplay mechanics
- Resource management systems
- Player status synchronization

---

## RSGCore:Server:SetMetaData

### Description
Event to set a player's metadata with built-in validation for hunger and thirst values.

### Event Handler
```lua
RegisterNetEvent('RSGCore:Server:SetMetaData', function(meta, data)
    local src = source
    local Player = RSGCore.Functions.GetPlayer(src)
    if meta == 'hunger' or meta == 'thirst' then
        if data > 100 then
            data = 100
        end
    end
    if Player then
        Player.Functions.SetMetaData(meta, data)
    end
    TriggerClientEvent('hud:client:UpdateNeeds', src, Player.PlayerData.metadata['hunger'], Player.PlayerData.metadata['thirst'])
end)
```

### Parameters
- `meta` (string) - The metadata key to set
- `data` (any) - The value to set for the metadata

### Behavior
1. **Player Validation**: Checks if player exists
2. **Value Capping**: Limits hunger and thirst to maximum of 100
3. **Metadata Update**: Sets the specified metadata
4. **HUD Sync**: Updates client HUD with current hunger/thirst values

### Usage Examples

#### Setting Hunger
```lua
-- Set player hunger to 50
TriggerServerEvent('RSGCore:Server:SetMetaData', 'hunger', 50)
```

#### Setting Thirst
```lua
-- Set player thirst to 75
TriggerServerEvent('RSGCore:Server:SetMetaData', 'thirst', 75)
```

#### Setting Custom Metadata
```lua
-- Set custom metadata
TriggerServerEvent('RSGCore:Server:SetMetaData', 'stress', 25)
TriggerServerEvent('RSGCore:Server:SetMetaData', 'reputation', 100)
```

#### Server-side Usage
```lua
-- Set metadata from server
local playerId = source
TriggerEvent('RSGCore:Server:SetMetaData', 'hunger', 100) -- Full hunger
```

### Use Cases
- Consumable item effects
- Status effect applications
- Admin commands for player management
- Quest/event rewards
- Punishment systems

---

## RSGCore:ToggleDuty

### Description
Event to toggle a player's duty status for their current job.

### Event Handler
```lua
RegisterNetEvent('RSGCore:ToggleDuty', function()
    local src = source
    local Player = RSGCore.Functions.GetPlayer(src)
    if not Player then return end
    if Player.PlayerData.job.onduty then
        Player.Functions.SetJobDuty(false)
        TriggerClientEvent('RSGCore:Notify', src, Lang:t('info.off_duty'))
    else
        Player.Functions.SetJobDuty(true)
        TriggerClientEvent('RSGCore:Notify', src, Lang:t('info.on_duty'))
    end
    TriggerClientEvent('RSGCore:Client:SetDuty', src, Player.PlayerData.job.onduty)
end)
```

### Parameters
None

### Behavior
1. **Player Validation**: Checks if player exists
2. **Duty Toggle**: Switches between on-duty and off-duty states
3. **Notification**: Sends appropriate notification to player
4. **Client Sync**: Updates client-side duty status

### Notifications
- **On Duty**: Shows language-translated 'on_duty' message
- **Off Duty**: Shows language-translated 'off_duty' message

### Usage Examples

#### Client Toggle
```lua
-- Toggle duty status
TriggerServerEvent('RSGCore:ToggleDuty')
```

#### Command Implementation
```lua
-- Create a command for duty toggle
RegisterCommand('duty', function()
    TriggerServerEvent('RSGCore:ToggleDuty')
end)
```

#### UI Integration
```lua
-- Button click handler in UI
RegisterNUICallback('toggleDuty', function()
    TriggerServerEvent('RSGCore:ToggleDuty')
end)
```

### Use Cases
- Police/EMS duty systems
- Job-based access control
- Salary/payment systems
- Role-playing mechanics
- Administrative job management

---

## RSGCore:CallCommand

### Description
Event to trigger a command outside the chat system with full permission checking and argument validation.

### Event Handler
```lua
RegisterNetEvent('RSGCore:CallCommand', function(command, args)
    local src = source
    if not RSGCore.Commands.List[command] then return end
    local Player = RSGCore.Functions.GetPlayer(src)
    if not Player then return end
    local hasPerm = RSGCore.Functions.HasPermission(src, "command."..RSGCore.Commands.List[command].name)
    if hasPerm then
        if RSGCore.Commands.List[command].argsrequired and #RSGCore.Commands.List[command].arguments ~= 0 and not args[#RSGCore.Commands.List[command].arguments] then
            TriggerClientEvent('RSGCore:Notify', src, Lang:t('error.missing_args2'), 'error')
        else
            RSGCore.Commands.List[command].callback(src, args)
        end
    else
        TriggerClientEvent('RSGCore:Notify', src, Lang:t('error.no_access'), 'error')
    end
end)
```

### Parameters
- `command` (string) - The command name to execute
- `args` (table) - Array of arguments for the command

### Behavior
1. **Command Validation**: Checks if command exists in RSGCore.Commands.List
2. **Player Validation**: Verifies player exists
3. **Permission Check**: Validates player has required permissions
4. **Argument Validation**: Ensures required arguments are provided
5. **Execution**: Calls the command callback with source and arguments
6. **Error Handling**: Provides appropriate error notifications

### Error Messages
- **Missing Arguments**: 'error.missing_args2' language key
- **No Access**: 'error.no_access' language key

### Usage Examples

#### Basic Command Call
```lua
-- Execute a command with arguments
TriggerServerEvent('RSGCore:CallCommand', 'teleport', {'player_name'})
```

#### Admin Command
```lua
-- Execute admin command
TriggerServerEvent('RSGCore:CallCommand', 'ban', {'player_id', 'reason'})
```

#### UI Command Integration
```lua
-- Execute command from UI
RegisterNUICallback('executeCommand', function(data)
    TriggerServerEvent('RSGCore:CallCommand', data.command, data.args)
end)
```

#### Command with Multiple Arguments
```lua
-- Complex command execution
local args = {'target_player', 'vehicle_model', 'color_primary', 'color_secondary'}
TriggerServerEvent('RSGCore:CallCommand', 'givevehicle', args)
```

### Use Cases
- UI-based admin panels
- Automated command execution
- Script-triggered admin actions
- Custom command interfaces
- Permission-based tool access

---

## Best Practices

### Security Considerations
1. **Permission Validation**: Always validate permissions before executing sensitive operations
2. **Input Sanitization**: Validate and sanitize all input parameters
3. **Error Handling**: Provide appropriate error messages without exposing system details
4. **Rate Limiting**: Consider implementing rate limiting for frequently used events

### Performance Optimization
1. **Player Validation**: Always check if player exists before operations
2. **Early Returns**: Use early returns for validation failures
3. **Batch Operations**: Group multiple metadata updates when possible
4. **Efficient Queries**: Minimize database operations in frequently called events

### Code Organization
1. **Event Naming**: Use consistent naming conventions for events
2. **Documentation**: Document expected parameters and behavior
3. **Error Messages**: Use language translation keys for user-facing messages
4. **Modular Design**: Keep event handlers focused on single responsibilities

### Data Management
1. **State Synchronization**: Ensure client-server state consistency
2. **Data Validation**: Validate data before applying changes
3. **Backup Considerations**: Ensure critical operations are properly saved
4. **Transaction Safety**: Handle database operations safely

---

## Common Integration Patterns

### Admin Panel Integration
```lua
-- Admin panel server events
RegisterNetEvent('admin:closeServer', function(reason)
    local src = source
    if RSGCore.Functions.HasPermission(src, 'admin') then
        TriggerEvent('RSGCore:Server:CloseServer', reason)
    end
end)

RegisterNetEvent('admin:openServer', function()
    local src = source
    if RSGCore.Functions.HasPermission(src, 'admin') then
        TriggerEvent('RSGCore:Server:OpenServer')
    end
end)
```

### Status Management System
```lua
-- Comprehensive status management
RegisterNetEvent('status:updateAll', function(hunger, thirst, stress)
    local src = source
    TriggerEvent('RSGCore:Server:SetMetaData', 'hunger', hunger)
    TriggerEvent('RSGCore:Server:SetMetaData', 'thirst', thirst)
    TriggerEvent('RSGCore:Server:SetMetaData', 'stress', stress)
end)
```

### Command Wrapper System
```lua
-- Safe command execution wrapper
function ExecuteCommand(source, command, args)
    if RSGCore.Functions.GetPlayer(source) then
        TriggerEvent('RSGCore:CallCommand', command, args)
    else
        print('Invalid player attempted command execution')
    end
end
```

---

## Error Handling Examples

### Robust Event Handlers
```lua
RegisterNetEvent('myResource:safeEvent', function(data)
    local src = source
    local Player = RSGCore.Functions.GetPlayer(src)
    
    -- Validate player
    if not Player then
        print('Error: Invalid player for event myResource:safeEvent')
        return
    end
    
    -- Validate data
    if not data or type(data) ~= 'table' then
        TriggerClientEvent('RSGCore:Notify', src, 'Invalid data provided', 'error')
        return
    end
    
    -- Process safely
    local success, result = pcall(function()
        -- Your event logic here
        return processData(data)
    end)
    
    if not success then
        print('Error processing event:', result)
        TriggerClientEvent('RSGCore:Notify', src, 'Processing error occurred', 'error')
    end
end)
```

---

## Additional Resources

- [RSGCore Client Event Reference](../client-events/)
- [RSGCore Function Reference](../functions/)
- [RSGCore Configuration Guide](../configuration/)
- [RSGCore Command System](../commands/)

---

*This documentation is based on the RSGCore framework server event reference. For the most up-to-date information, please refer to the official RSGCore documentation.*