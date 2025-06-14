# VORP Core Framework API Documentation

This documentation covers the complete VORP Core Framework API for developers creating scripts and integrations.

## Table of Contents

1. [Core Export](#core-export)
2. [Notifications](#notifications)
3. [Character Management](#character-management)
4. [User Management](#user-management)
5. [Whitelist](#whitelist)
6. [Webhooks](#webhooks)
7. [Instancing](#instancing)
8. [Player Functions](#player-functions)
9. [Callbacks/RPC System](#callbacksrpc-system)
10. [Events](#events)
11. [Dataview](#dataview)
12. [Global States](#global-states)
13. [Statebags](#statebags)
14. [Version Checking](#version-checking)

---

## Core Export

The core export provides access to all VORP Core functionality. Some getters and setters are client-side only, while others are server-side only.

```lua
local Core = exports.vorp_core:GetCore()
```

**Returns:** The core table containing all the getters and setters for VORP Core.

---

## Notifications

VORP Core provides various notification types for user interface feedback. Notifications can accept `-1` as duration to always stay on screen. To clear persistent notifications, use `UiFeedClearChannel`.

### Client-Side Notifications

#### Left Notification
```lua
Core.NotifyLeft("title", "subtitle", "dict", "icon", 4000, "color")
```

**Parameters:**
- `title` - Notification title
- `subtitle` - Notification subtitle
- `dict` - Icon dictionary
- `icon` - Icon name
- `4000` - Duration in milliseconds
- `color` - Notification color

#### Warning Notification
```lua
Core.NotifyWarning("title", "subtitle", "audioref", "audioname", 4000)
```

**Parameters:**
- `title` - Notification title
- `subtitle` - Notification subtitle
- `audioref` - Audio reference
- `audioname` - Audio name
- `4000` - Duration in milliseconds

#### Left Rank Notification
```lua
Core.NotifyLeftRank("title", "subtitle", "dict", "icon", 4000, "color")
```

**Parameters:**
- `title` - Notification title
- `subtitle` - Notification subtitle
- `dict` - Icon dictionary
- `icon` - Icon name
- `4000` - Duration in milliseconds
- `color` - Notification color

### Server-Side Notifications

#### Left Notification (Server)
```lua
Core.NotifyLeft(source, "title", "subtitle", "dict", "icon", 4000, "color")
```

**Parameters:**
- `source` - Player source ID
- `title` - Notification title
- `subtitle` - Notification subtitle
- `dict` - Icon dictionary
- `icon` - Icon name
- `4000` - Duration in milliseconds
- `color` - Notification color

#### Advanced Notification
```lua
Core.NotifyAvanced(source, "title", "dict", "icon", "color", 4000)
```

**Parameters:**
- `source` - Player source ID
- `title` - Notification title
- `dict` - Icon dictionary
- `icon` - Icon name
- `color` - Notification color
- `4000` - Duration in milliseconds

#### Warning Notification (Server)
```lua
Core.NotifyWarning(source, "title", "subtitle", "audioref", "audioname", 4000)
```

**Parameters:**
- `source` - Player source ID
- `title` - Notification title
- `subtitle` - Notification subtitle
- `audioref` - Audio reference
- `audioname` - Audio name
- `4000` - Duration in milliseconds

#### Left Rank Notification (Server)
```lua
Core.NotifyLeftRank(source, "title", "subtitle", "dict", "icon", 4000, "color")
```

**Parameters:**
- `source` - Player source ID
- `title` - Notification title
- `subtitle` - Notification subtitle
- `dict` - Icon dictionary
- `icon` - Icon name
- `4000` - Duration in milliseconds
- `color` - Notification color

---

## Character Management

Character data provides access to all character-related information and modification functions.

### Getting Character Data

```lua
local user = Core.getUser(source) --[[@as User]]
if not user then return end -- is player in session?
local character = user.getUsedCharacter --[[@as Character]]
```

### Character Skills

#### Getting Skills
```lua
local skills = character.skills
local skill = skills.Crafting
if not skill then return print("skill not found in core config or it doesn't exist") end
local skillExp = skill.Exp
local skillLevel = skill.Level
```

#### Setting Skills
```lua
character.setSkills("skillName", 10) -- skillname exp
```

**Parameters:**
- `skillName` - The name of the skill to set (must exist in VORP Core config skills)
- `exp` - The experience value to be set (values are incremental, so 1000 exp will be 1000 + current exp)

### Character Properties

#### Job Management
```lua
character.setJobLabel("Label")
```

**Parameters:**
- `Label` - The job label to set

#### Currency Management
```lua
character.setRol(1000)  -- Set Rol amount
```

**Parameters:**
- `1000` - Amount of Rol to set

#### Experience Management
```lua
character.setXp(5000)     -- Set XP amount
character.addXp(100)      -- Add XP
character.removeXp(100)   -- Remove XP
```

**Parameters:**
- `5000` - Amount of XP to set
- `100` - Amount of XP to add/remove

#### Personal Information
```lua
character.setFirstname("Sadie")               -- Set first name
character.setLastname("Adler")                -- Set last name
character.setAge(45)                          -- Set age
character.setCharDescription("string")        -- Set character description
character.setNickName("string")               -- Set nickname
character.setGender("string")                 -- Set gender (male or female)
```

**Parameters:**
- `"Sadie"` - First name to set
- `"Adler"` - Last name to set
- `45` - Age to set
- `"string"` - Description/nickname/gender to set

#### Appearance Management
```lua
character.updateSkin("skin")           -- Update skin
character.updateComps("comps")         -- Update clothing components
character.updateCompTints("comps")     -- Update clothing component tints
```

**Parameters:**
- `"skin"` - The skin data in JSON format
- `"comps"` - The clothing components in JSON format

#### Inventory Management
```lua
character.updateInvCapacity(1)
```

**Parameters:**
- `1` - Amount to change inventory capacity by (can be positive or negative, incremental)

---

## User Management

User data provides access to user-level information and functions.

### Getting User Data

```lua
local user = Core.getUser(source) --[[@as User]]
if not user then return end -- is player in session?
```

### User Functions

#### Group Management
```lua
user.SetGroup(group)
```

**Parameters:**
- `group` - The group to set for the user

#### User Information
```lua
local steam = user.getIdentifier()           -- Get Steam ID
local data = user.getUserCharacters()        -- Get all characters
local warnstatus = user.getPlayerwarnings()  -- Get warning status
```

**Returns:**
- `steam` - The Steam ID of the user
- `data` - All characters of the user
- `warnstatus` - The warning status of the user

---

## Whitelist

Whitelist management functions for controlling server access.

### Get Whitelist Entry

```lua
local data = Core.Whitelist.getEntry(identifier)
print(json.encode(data), {ident = true})
```

**Parameters:**
- `identifier` - Player identifier to check

**Returns:** Whitelist entry data

---

## Webhooks

Send webhook notifications to Discord or other services.

### Add Webhook

```lua
Core.AddWebhook("title", "webhook", "description", 12345678, "name", "logo", "footerlogo", "avatar")
```

**Parameters:**
- `"title"` - The title of the webhook
- `"webhook"` - The webhook link
- `"description"` - The description of the webhook
- `12345678` - The color of the webhook
- `"name"` - The name of the webhook
- `"logo"` - The logo of the webhook
- `"footerlogo"` - The footer logo of the webhook
- `"avatar"` - The avatar of the webhook

---

## Instancing

Player instancing system for separating players into different game instances.

### Add Players to Instance

To add players to different instances, use their server ID + instance number. To add players to the same instance, use only the instance number.

```lua
local instanceNumber = 54123 -- any number
VORPcore.instancePlayers(GetPlayerServerId(PlayerId()) + instanceNumber)
```

### Remove Players from Instance

```lua
VORPcore.instancePlayers(0)
```

---

## Player Functions

Player health and revival system functions. These functions benefit from event listeners and trigger corresponding events.

### Health Management

```lua
Core.Player.Heal(source)     -- Heal player
Core.Player.Revive(source)   -- Revive player
Core.Player.Respawn(source)  -- Respawn player
```

**Parameters:**
- `source` - Player source ID

---

## Callbacks/RPC System

Remote procedure call system for client-server communication.

### Server-Side Callbacks

#### Using Core Export
```lua
Core.Callback.Register(name, function(source, callback, ...)
  callback(...)
end)
```

#### Using Single Export
```lua
local ServerRPC = exports.vorp_core:ServerRpcCall() --[[@as ServerRPC]] -- for intellisense

-- Register a callback on the server to receive a client callback
ServerRPC.Register(name, function(source, callback, ...)
  callback(...)
end)
```

### Client-Side Callbacks

#### Using Core Export
```lua
Core.Callback.Register(name, function(callback, ...)
  callback(...)
end)
```

#### Using Single Export
```lua
local ClientRPC = exports.vorp_core:ClientRpcCall() --[[@as ClientRPC]] -- for intellisense

-- Register a callback on the client to receive a server callback
ClientRPC.Register(name, function(callback, ...)
  callback(...)
end)
```

**Parameters:**
- `name` - Callback name/identifier
- `callback` - The callback function to execute

---

## Events

Event listeners for detecting changes in player state and game events.

### Job and Group Events

#### Group Change Event
```lua
AddEventHandler("vorp:playerGroupChange", function(source, newgroup, oldgroup) end)
```

#### Job Change Event
```lua
AddEventHandler("vorp:playerJobChange", function(source, newjob, oldjob) end)
```

#### Job Grade Change Event
```lua
AddEventHandler("vorp:playerJobGradeChange", function(source, newjobgrade, oldjobgrade) end)
```

### Player State Events

#### Player Death Event
```lua
-- CLIENT
AddEventHandler("vorp_core:Client:OnPlayerDeath", function(killerserverid, causeofdeath) end)

-- SERVER
RegisterNetEvent("vorp_core:Server:OnPlayerDeath", function(killerserverid, causeofdeath) end)
```

#### Player Revive Event
```lua
-- SERVER
AddEventHandler("vorp_core:Server:OnPlayerRevive", function(source) end)

-- CLIENT
RegisterNetEvent("vorp_core:Client:OnPlayerRevive")
```

#### Player Respawn Event
```lua
-- SERVER
AddEventHandler("vorp_core:Server:OnPlayerRespawn", function(source) end)

-- CLIENT
RegisterNetEvent("vorp_core:Client:OnPlayerRespawn")
```

#### Player Heal Event
```lua
-- SERVER
AddEventHandler("vorp_core:Server:OnPlayerHeal", function(source) end)

-- CLIENT
RegisterNetEvent("vorp_core:Client:OnPlayerHeal")
```

#### Player Level Up Event
```lua
-- SERVER
AddEventHandler("vorp_core:Server:OnPlayerLevelUp", function(source, skillName, newLevel, oldLevel) end)

-- CLIENT
RegisterNetEvent("vorp_core:Client:OnPlayerLevelUp", function(skillName, newLevel, oldLevel) end)
```

#### Player Spawned Event
```lua
-- CLIENT
AddEventHandler("vorp_core:Client:OnPlayerSpawned", function() end)
```

**Event Parameters:**
- `source` - Player source ID
- `killerserverid` - ID of the killer (if applicable)
- `causeofdeath` - Cause of death
- `skillName` - Name of the skill that leveled up
- `newLevel` - New skill level
- `oldLevel` - Previous skill level
- `newgroup`/`oldgroup` - New and old group values
- `newjob`/`oldjob` - New and old job values
- `newjobgrade`/`oldjobgrade` - New and old job grade values

---

## Dataview

To use dataview functionality in your script, add the following to your `fxmanifest.lua`:

```lua
client_scripts {
  '@vorp_core/client/dataview.lua'
}
```

---

## Global States

Global state variables accessible from both client and server.

### Players Count
```lua
GlobalState.PlayersInSession
```

**Returns:** Current number of players in session

---

## Statebags

Statebag getters for accessing character data efficiently.

### Client-Side Statebags

#### Session Status
```lua
LocalPlayer.state.IsInSession  -- Returns true when player chooses character
```

#### Character Information
```lua
LocalPlayer.state.Character.FirstName        -- First name
LocalPlayer.state.Character.LastName         -- Last name
LocalPlayer.state.Character.JobLabel         -- Job label
LocalPlayer.state.Character.Grade            -- Grade
LocalPlayer.state.Character.Group            -- Group
LocalPlayer.state.Character.Gender           -- Gender
LocalPlayer.state.Character.NickName         -- Nickname
LocalPlayer.state.Character.CharDescription  -- Character description
LocalPlayer.state.Character.Money            -- Money amount
LocalPlayer.state.Character.Gold             -- Gold amount
LocalPlayer.state.Character.CharId           -- Character ID
```

### Server-Side Statebags

#### Session Status
```lua
Player(source).state.IsInSession  -- Returns true when player chooses character
```

#### Character Information
```lua
Player(source).state.Character.FirstName        -- First name
Player(source).state.Character.LastName         -- Last name
Player(source).state.Character.Job              -- Job
Player(source).state.Character.JobLabel         -- Job label
Player(source).state.Character.Grade            -- Grade
Player(source).state.Character.Group            -- Group
Player(source).state.Character.Age              -- Age
Player(source).state.Character.Gender           -- Gender
Player(source).state.Character.NickName         -- Nickname
Player(source).state.Character.CharDescription  -- Character description
Player(source).state.Character.Money            -- Money amount
Player(source).state.Character.Gold             -- Gold amount
Player(source).state.Character.Rol              -- Rol amount
Player(source).state.Character.CharId           -- Character ID
```

---

## Version Checking

VORP Core includes a version checking system with changelog features.

### Setup in fxmanifest.lua

```lua
-- Version must match version.file
version '0.0.1'
vorp_checker 'yes'

-- Can use color codes ^1
vorp_name '^5your resource name ^4version Check^3'

-- Path to the GitHub repository
-- Must have a version.file containing changelogs
-- Repository must be public
vorp_github 'https://github.com/repository/resource_name'
```

### version.file Format

Create a `version.file` in your GitHub repository root:

```
<0.0.1>
- new version
- added feature
- removed feature
- fixed something
```

**Requirements:**
- Version in `<>` brackets must match the version in `fxmanifest.lua`
- Repository must be public
- `version.file` must be in the repository root
- Each changelog entry should be on a new line with `-` prefix

---

## Notes

- This documentation is for developers creating scripts for the VORP Core Framework
- Some functions are client-side only, others are server-side only
- Notifications support persistent display with `-1` duration
- Statebags provide efficient access to frequently-used character data
- Events are triggered automatically when using Core player functions
- The callback/RPC system supports both synchronous and asynchronous operations
- Version checking helps maintain compatibility across script updates