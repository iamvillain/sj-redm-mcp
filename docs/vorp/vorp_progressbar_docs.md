# VORP Progressbar System Documentation

VORP Progressbar allows you to create visual progress indicators in your scripts with multiple theme options and customizable duration.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Initialization](#initialization)
3. [Starting Progressbars](#starting-progressbars)
4. [Theme Options](#theme-options)
5. [Examples](#examples)
6. [Best Practices](#best-practices)

---

## Getting Started

The VORP Progressbar system provides a visual way to show progress for long-running operations like crafting, loading, or any timed activity.

### Basic Usage Flow

1. Initialize the progressbar at the top of your script
2. Call the start function when you need to show progress
3. Handle completion in the callback function

---

## Initialization

### Initialize Progressbar

Initialize the progressbar system at the top of your script:

```lua
progressbar = exports.vorp_progressbar:initiate()
```

**Returns:** Progressbar object with methods for controlling progress display

**Note:** This should be called once at the beginning of your script, not every time you want to show a progressbar.

---

## Starting Progressbars

### Start Function

Display a progressbar with specified parameters:

```lua
progressbar.start(message, duration, callback, theme)
```

**Parameters:**
- `message` (string) - The message displayed in the progressbar
- `duration` (number) - Duration in milliseconds
- `callback` (function) - Function called when progressbar completes
- `theme` (string) - Visual theme: "linear", "circle", or "innercircle"

### Basic Example

```lua
progressbar.start("Loading Example", 20000, function()
  print('DONE!!!!')
end, 'linear')
```

---

## Theme Options

The progressbar system supports three different visual themes:

### Linear Theme

A horizontal progress bar that fills from left to right.

```lua
progressbar.start("Processing...", 5000, function()
  print("Linear progress complete!")
end, 'linear')
```

**Best for:** 
- File operations
- Data processing
- Loading screens
- General progress indication

### Circle Theme

A circular progress indicator that fills clockwise.

```lua
progressbar.start("Crafting Item...", 10000, function()
  print("Crafting complete!")
end, 'circle')
```

**Best for:**
- Crafting systems
- Skill training
- Circular timers
- Compact progress display

### Inner Circle Theme

A circular progress indicator with inner circle design.

```lua
progressbar.start("Healing...", 8000, function()
  print("Healing complete!")
end, 'innercircle')
```

**Best for:**
- Health/mana regeneration
- Meditation/resting
- Special abilities
- Aesthetic variety

---

## Examples

### Basic Loading Operation

```lua
-- Initialize at script start
progressbar = exports.vorp_progressbar:initiate()

-- Function to show loading
function ShowLoadingProgress()
  progressbar.start("Loading player data...", 3000, function()
    print("Player data loaded successfully!")
    -- Continue with loaded data
    TriggerEvent("playerDataReady")
  end, 'linear')
end

-- Usage
RegisterCommand("load", function()
  ShowLoadingProgress()
end)
```

### Crafting System

```lua
-- Initialize progressbar
progressbar = exports.vorp_progressbar:initiate()

function StartCrafting(itemName, craftTime)
  local message = "Crafting " .. itemName .. "..."
  
  progressbar.start(message, craftTime, function()
    print("Crafted " .. itemName .. " successfully!")
    -- Add item to inventory
    TriggerServerEvent("addCraftedItem", itemName)
  end, 'circle')
end

-- Usage
RegisterNetEvent("startCraftingClient")
AddEventHandler("startCraftingClient", function(itemName, duration)
  StartCrafting(itemName, duration)
end)
```

### Healing System

```lua
-- Initialize progressbar
progressbar = exports.vorp_progressbar:initiate()

function StartHealing(healAmount)
  progressbar.start("Healing wounds...", 5000, function()
    print("Healing complete!")
    -- Restore health
    TriggerServerEvent("restoreHealth", healAmount)
  end, 'innercircle')
end

-- Usage with item
RegisterNetEvent("useHealthItem")
AddEventHandler("useHealthItem", function(healAmount)
  StartHealing(healAmount)
end)
```

### Mining/Gathering System

```lua
-- Initialize progressbar
progressbar = exports.vorp_progressbar:initiate()

function StartMining(rockType)
  local miningTime = GetMiningTime(rockType) -- Custom function
  local message = "Mining " .. rockType .. "..."
  
  progressbar.start(message, miningTime, function()
    print("Mining complete!")
    -- Give mined resources
    TriggerServerEvent("giveMiningRewards", rockType)
  end, 'linear')
end

function GetMiningTime(rockType)
  local times = {
    iron = 8000,
    gold = 12000,
    diamond = 20000
  }
  return times[rockType] or 5000
end
```

### Skill Training

```lua
-- Initialize progressbar
progressbar = exports.vorp_progressbar:initiate()

function TrainSkill(skillName, trainingTime)
  progressbar.start("Training " .. skillName .. "...", trainingTime, function()
    print("Skill training complete!")
    TriggerServerEvent("addSkillExp", skillName, 100)
  end, 'circle')
end

-- Usage
RegisterCommand("train", function(source, args)
  local skill = args[1] or "strength"
  TrainSkill(skill, 10000)
end)
```

### Bank Transaction

```lua
-- Initialize progressbar
progressbar = exports.vorp_progressbar:initiate()

function ProcessBankTransaction(transactionType, amount)
  local message = transactionType == "deposit" and "Depositing $" .. amount or "Withdrawing $" .. amount
  
  progressbar.start(message, 3000, function()
    print("Bank transaction complete!")
    TriggerServerEvent("processBankTransaction", transactionType, amount)
  end, 'linear')
end

-- Usage
RegisterNetEvent("startBankTransaction")
AddEventHandler("startBankTransaction", function(type, amount)
  ProcessBankTransaction(type, amount)
end)
```

### Advanced Example with Interruption

```lua
-- Initialize progressbar
progressbar = exports.vorp_progressbar:initiate()

local currentProgress = nil

function StartInterruptibleProgress(message, duration, onComplete, onInterrupt)
  currentProgress = {
    active = true,
    onInterrupt = onInterrupt
  }
  
  progressbar.start(message, duration, function()
    if currentProgress and currentProgress.active then
      currentProgress = nil
      if onComplete then
        onComplete()
      end
    end
  end, 'circle')
end

function InterruptProgress()
  if currentProgress and currentProgress.active then
    currentProgress.active = false
    if currentProgress.onInterrupt then
      currentProgress.onInterrupt()
    end
    currentProgress = nil
    print("Progress interrupted!")
  end
end

-- Usage
RegisterCommand("longaction", function()
  StartInterruptibleProgress(
    "Performing long action...", 
    15000,
    function()
      print("Long action completed!")
    end,
    function()
      print("Long action was interrupted!")
    end
  )
end)

RegisterCommand("interrupt", function()
  InterruptProgress()
end)
```

### Dynamic Progress Messages

```lua
-- Initialize progressbar
progressbar = exports.vorp_progressbar:initiate()

function ShowDynamicProgress(stages)
  local currentStage = 1
  local totalStages = #stages
  
  local function nextStage()
    if currentStage <= totalStages then
      local stage = stages[currentStage]
      local message = stage.message .. " (" .. currentStage .. "/" .. totalStages .. ")"
      
      progressbar.start(message, stage.duration, function()
        currentStage = currentStage + 1
        if currentStage <= totalStages then
          nextStage()
        else
          print("All stages complete!")
        end
      end, stage.theme or 'linear')
    end
  end
  
  nextStage()
end

-- Usage
RegisterCommand("multistage", function()
  local stages = {
    {message = "Preparing materials", duration = 3000, theme = "linear"},
    {message = "Mixing ingredients", duration = 5000, theme = "circle"},
    {message = "Finalizing product", duration = 2000, theme = "innercircle"}
  }
  
  ShowDynamicProgress(stages)
end)
```

---

## Best Practices

### Initialization

1. **Initialize once** at the top of your script
2. **Don't re-initialize** for each progressbar
3. **Store reference globally** if needed across multiple functions

```lua
-- Good: Initialize once at script start
progressbar = exports.vorp_progressbar:initiate()

-- Bad: Don't do this repeatedly
function badExample()
  local progressbar = exports.vorp_progressbar:initiate() -- Don't repeat this
  progressbar.start("Bad example", 1000, function() end, 'linear')
end
```

### Duration Selection

1. **Match duration to action** - longer actions need longer progress
2. **Consider user experience** - avoid extremely long progressbars
3. **Use realistic timing** - 30 seconds for complex crafting, 3 seconds for simple actions

```lua
-- Good duration examples
progressbar.start("Quick action", 2000, callback, 'linear')     -- 2 seconds
progressbar.start("Medium task", 8000, callback, 'circle')      -- 8 seconds  
progressbar.start("Complex craft", 15000, callback, 'circle')   -- 15 seconds
```

### Theme Selection

1. **Linear** - General purpose, loading, file operations
2. **Circle** - Crafting, skills, circular timers
3. **Inner Circle** - Special actions, healing, meditation

### Message Guidelines

1. **Be descriptive** - tell users what's happening
2. **Use present tense** - "Crafting..." not "Will craft..."
3. **Include context** - item names, quantities when relevant
4. **Keep it concise** - avoid overly long messages

```lua
-- Good messages
"Crafting Iron Sword..."
"Healing wounds..."
"Processing bank transaction..."
"Mining gold ore..."

-- Avoid
"Please wait..."
"Loading..."
"Working..."
```

### Error Handling

```lua
function SafeProgressbar(message, duration, callback, theme)
  if not progressbar then
    print("Progressbar not initialized!")
    return
  end
  
  if not message or not duration or not callback then
    print("Invalid progressbar parameters!")
    return
  end
  
  progressbar.start(message, duration, function()
    -- Wrap callback in pcall for safety
    local success, error = pcall(callback)
    if not success then
      print("Progressbar callback error: " .. tostring(error))
    end
  end, theme or 'linear')
end
```

### Performance Considerations

1. **Don't overlap progressbars** - finish one before starting another
2. **Clean up properly** - ensure callbacks complete
3. **Avoid very short durations** - under 1 second may feel jarring

---

## Notes

- Progressbar system is **client-side only**
- Must be initialized before use
- Only one progressbar can be active at a time
- Duration is specified in milliseconds
- Callback function is executed when progress completes
- Theme parameter is optional, defaults to 'linear' if not specified
- Messages should be clear and descriptive for better user experience
- Consider the visual context when choosing themes