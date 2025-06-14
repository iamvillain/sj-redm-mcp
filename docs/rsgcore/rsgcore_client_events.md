# RSGCore Client Event Reference

This documentation covers the available client events in the RSGCore framework, including usage examples and implementation details.

## Table of Contents

1. [RSGCore:Player:SetPlayerData](#rsgcoreplayersetplayerdata)
2. [RSGCore:Notify](#rsgcorenotify)
3. [RSGCore:Client:UpdateObject](#rsgcoreclientupdateobject)

---

## RSGCore:Player:SetPlayerData

### Description
This event can be used as an event handler to trigger code because it indicates that the player's data has changed.

### Parameters
- `val` - The updated player data object

### Usage Example

```lua
-- Event handler for player data changes
RegisterNetEvent('RSGCore:Player:SetPlayerData', function(val)
    PlayerData = val
    print(RSGCore.Debug(PlayerData))
end)
```

### Use Cases
- Updating local player data when server-side changes occur
- Triggering UI updates when player information changes
- Synchronizing player state across different resources

---

## RSGCore:Notify

### Description
Displays notification messages to players with customizable type and duration.

### Parameters
- `message` (string) - The notification message to display
- `type` (string) - The notification type (e.g., 'primary', 'success', 'error', 'warning')
- `length` (number) - Duration in milliseconds to display the notification

### Client Side Examples

#### Basic Implementation
```lua
-- Command: /testnotify This is my message, primary, 5000
RegisterCommand('testnotify', function(_, args)
    local message = {}
    for i=1, #args do
        message[#message + 1] = args[i]
        if string.match(args[i], ',') then
            local text = table.concat(message, ' '):gsub(",", "")
            local type = args[i + 1]:gsub(",", "")
            local length = args[i + 2]
            TriggerEvent('RSGCore:Notify', text, type, length)
            break
        end
    end
end)
```

#### Using RSGCore Shared Functions
```lua
-- Improved implementation using RSGCore's built-in string utilities
RegisterCommand('testnotify', function(_, args)
    local message = RSGCore.Shared.SplitStr(table.concat(args, ' '), ",")
    local text = message[1]
    local type = RSGCore.Shared.Trim(message[2])
    local length = tonumber(message[3])
    TriggerEvent('RSGCore:Notify', text, type, length)
end)
```

### Server Side Examples

#### Basic Server Implementation
```lua
-- Server command to send notifications to specific players
-- Command: /testnotify This is my message, primary, 5000
RegisterCommand('testnotify', function(source, args)
    local message = {}
    for i=1, #args do
        message[#message + 1] = args[i]
        if string.match(args[i], ',') then
            local text = table.concat(message, ' '):gsub(",", "")
            local type = args[i + 1]:gsub(",", "")
            local length = args[i + 2]
            TriggerClientEvent('RSGCore:Notify', source, text, type, length)
            break
        end
    end
end)
```

#### Using RSGCore Shared Functions (Server)
```lua
-- Server implementation using RSGCore's string utilities
RegisterCommand('testnotify', function(source, args)
    local message = RSGCore.Shared.SplitStr(table.concat(args, ' '), ",")
    local text = message[1]
    local type = RSGCore.Shared.Trim(message[2])
    local length = tonumber(message[3])
    TriggerClientEvent('RSGCore:Notify', source, text, type, length)
end)
```

### Notification Types
Common notification types include:
- `primary` - Standard blue notification
- `success` - Green success message
- `error` - Red error message
- `warning` - Yellow warning message
- `info` - Information message

---

## RSGCore:Client:UpdateObject

### Description
This event must be used as a handler when using Shared Exports because it refreshes the core object in your resource.

### Purpose
- Ensures the RSGCore object is properly updated in resources using shared exports
- Maintains synchronization between the core framework and dependent resources
- Required for proper functionality when accessing RSGCore through exports

### Implementation Notes
When implementing resources that depend on RSGCore exports, always register this event handler to ensure your resource receives updates to the core object when they occur.

---

## Best Practices

### Event Handling
1. Always register event handlers early in your resource initialization
2. Use proper error handling when processing event data
3. Validate parameters before using them in your code

### String Utilities
- Prefer using `RSGCore.Shared.SplitStr()` over manual string parsing
- Use `RSGCore.Shared.Trim()` to clean whitespace from user input
- Always validate user input before processing

### Notifications
- Choose appropriate notification types for different message contexts
- Set reasonable duration times (typically 3000-8000ms)
- Keep messages concise and user-friendly

### Performance Considerations
- Cache frequently accessed player data from `RSGCore:Player:SetPlayerData`
- Avoid triggering notifications too frequently to prevent spam
- Use client-side validation before sending server events when possible

---

## Additional Resources

- [RSGCore Documentation](https://rexshack-gaming.gitbook.io/rsg-documentation/)
- [Server Event Reference](../server-events/)
- [Shared Functions Reference](../shared-functions/)

---

*This documentation is based on the RSGCore framework client event reference. For the most up-to-date information, please refer to the official RSGCore documentation.*