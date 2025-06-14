# VORP Metabolism API Documentation

VORP Metabolism API provides comprehensive management of player hunger, thirst, and other metabolic systems with HUD integration.

## Table of Contents

1. [Overview](#overview)
2. [Metabolism Types](#metabolism-types)
3. [Value Ranges](#value-ranges)
4. [Functions](#functions)
5. [HUD Management](#hud-management)
6. [Examples](#examples)
7. [Best Practices](#best-practices)

---

## Overview

The VORP Metabolism system manages player survival mechanics including hunger, thirst, and other metabolic needs. The system is client-side and provides functions to get, set, and modify metabolism values with HUD integration.

---

## Metabolism Types

The metabolism system supports the following types:

### Available Types
- **`"Metabolism"`** - General metabolism/health indicator
- **`"Thirst"`** - Player thirst level
- **`"Hunger"`** - Player hunger level

---

## Value Ranges

All metabolism values operate within a standardized range:

- **Minimum Value:** `0` (completely depleted)
- **Maximum Value:** `1000` (completely full)

**Value Interpretation:**
- `0-200` - Critical (red/danger zone)
- `201-500` - Low (orange/warning zone) 
- `501-800` - Moderate (yellow/caution zone)
- `801-1000` - Good/Full (green/safe zone)

---

## Functions

### Change Metabolism Value

Add or subtract from the current metabolism value:

```lua
exports.vorp_metabolism:Change(type, amount)
```

**Parameters:**
- `type` (string) - Metabolism type: "Metabolism", "Thirst", or "Hunger"
- `amount` (number) - Amount to change (positive to increase, negative to decrease)

**Examples:**
```lua
-- Increase hunger by 50 points
exports.vorp_metabolism:Change("Hunger", 50)

-- Decrease thirst by 25 points  
exports.vorp_metabolism:Change("Thirst", -25)

-- Increase general metabolism by 100 points
exports.vorp_metabolism:Change("Metabolism", 100)
```

### Set Metabolism Value

Set the metabolism to a specific value:

```lua
exports.vorp_metabolism:Set(type, value)
```

**Parameters:**
- `type` (string) - Metabolism type: "Metabolism", "Thirst", or "Hunger"
- `value` (number) - Value to set (0-1000)

**Examples:**
```lua
-- Set hunger to full
exports.vorp_metabolism:Set("Hunger", 1000)

-- Set thirst to half
exports.vorp_metabolism:Set("Thirst", 500)

-- Set metabolism to quarter
exports.vorp_metabolism:Set("Metabolism", 250)
```

### Get Metabolism Value

Retrieve the current metabolism value:

```lua
local value = exports.vorp_metabolism:Get(type)
```

**Parameters:**
- `type` (string) - Metabolism type: "Metabolism", "Thirst", or "Hunger"

**Returns:**
- `value` (number) - Current metabolism value (0-1000)

**Examples:**
```lua
-- Get current hunger level
local hunger = exports.vorp_metabolism:Get("Hunger")
print("Current hunger: " .. hunger)

-- Get current thirst level
local thirst = exports.vorp_metabolism:Get("Thirst")

-- Get current metabolism level
local metabolism = exports.vorp_metabolism:Get("Metabolism")
```

---

## HUD Management

### Set HUD Visibility

Control the visibility of the metabolism HUD elements:

```lua
exports.vorp_metabolism:SetHudVisibility(visible)
```

**Parameters:**
- `visible` (boolean) - `true` to show HUD, `false` to hide HUD

**Examples:**
```lua
-- Show metabolism HUD
exports.vorp_metabolism:SetHudVisibility(true)

-- Hide metabolism HUD
exports.vorp_metabolism:SetHudVisibility(false)
```

---

## Examples

### Basic Metabolism Management

```lua
-- Get all current metabolism values
local hunger = exports.vorp_metabolism:Get("Hunger")
local thirst = exports.vorp_metabolism:Get("Thirst")
local metabolism = exports.vorp_metabolism:Get("Metabolism")

print("Hunger: " .. hunger .. "/1000")
print("Thirst: " .. thirst .. "/1000") 
print("Metabolism: " .. metabolism .. "/1000")
```

### Food Consumption System

```lua
-- Function to handle eating food
function EatFood(foodType)
  local hungerGain = GetFoodHungerValue(foodType) -- Custom function
  local thirstGain = GetFoodThirstValue(foodType) -- Custom function
  
  -- Increase hunger and thirst
  exports.vorp_metabolism:Change("Hunger", hungerGain)
  exports.vorp_metabolism:Change("Thirst", thirstGain)
  
  print("Ate " .. foodType .. " (+Hunger: " .. hungerGain .. ", +Thirst: " .. thirstGain .. ")")
end

function GetFoodHungerValue(foodType)
  local foodValues = {
    bread = 150,
    apple = 75,
    meat = 300,
    soup = 200
  }
  return foodValues[foodType] or 50
end

function GetFoodThirstValue(foodType)
  local thirstValues = {
    bread = 10,
    apple = 50,
    meat = 5,
    soup = 100
  }
  return thirstValues[foodType] or 0
end

-- Usage
RegisterNetEvent("eatFood")
AddEventHandler("eatFood", function(foodType)
  EatFood(foodType)
end)
```

### Drink Consumption System

```lua
-- Function to handle drinking
function DrinkLiquid(drinkType)
  local thirstGain = GetDrinkThirstValue(drinkType)
  local hungerGain = GetDrinkHungerValue(drinkType)
  
  -- Increase thirst and possibly hunger
  exports.vorp_metabolism:Change("Thirst", thirstGain)
  if hungerGain > 0 then
    exports.vorp_metabolism:Change("Hunger", hungerGain)
  end
  
  print("Drank " .. drinkType .. " (+Thirst: " .. thirstGain .. ")")
end

function GetDrinkThirstValue(drinkType)
  local drinkValues = {
    water = 200,
    coffee = 150,
    beer = 100,
    milk = 175
  }
  return drinkValues[drinkType] or 100
end

function GetDrinkHungerValue(drinkType)
  local hungerValues = {
    water = 0,
    coffee = 25,
    beer = 50,
    milk = 100
  }
  return hungerValues[drinkType] or 0
end

-- Usage
RegisterNetEvent("drinkLiquid")
AddEventHandler("drinkLiquid", function(drinkType)
  DrinkLiquid(drinkType)
end)
```

### Metabolism Decay System

```lua
-- Automatic metabolism decay over time
CreateThread(function()
  while true do
    Wait(60000) -- Every minute
    
    -- Decrease metabolism values over time
    exports.vorp_metabolism:Change("Hunger", -5)
    exports.vorp_metabolism:Change("Thirst", -8)
    exports.vorp_metabolism:Change("Metabolism", -2)
    
    -- Check for critical levels
    CheckCriticalLevels()
  end
end)

function CheckCriticalLevels()
  local hunger = exports.vorp_metabolism:Get("Hunger")
  local thirst = exports.vorp_metabolism:Get("Thirst")
  
  if hunger <= 100 then
    TriggerEvent("showNotification", "You are starving!", "error")
  elseif hunger <= 200 then
    TriggerEvent("showNotification", "You are very hungry", "warning")
  end
  
  if thirst <= 100 then
    TriggerEvent("showNotification", "You are dehydrated!", "error")
  elseif thirst <= 200 then
    TriggerEvent("showNotification", "You are very thirsty", "warning")
  end
end
```

### Medicine/Health System

```lua
-- Function to handle medicine consumption
function UseMedicine(medicineType)
  local healthGain = GetMedicineHealthValue(medicineType)
  local metabolismGain = GetMedicineMetabolismValue(medicineType)
  
  -- Increase metabolism (health)
  exports.vorp_metabolism:Change("Metabolism", metabolismGain)
  
  print("Used " .. medicineType .. " (+Health: " .. metabolismGain .. ")")
end

function GetMedicineHealthValue(medicineType)
  local medicineValues = {
    bandage = 100,
    tonic = 200,
    medicine = 300,
    elixir = 500
  }
  return medicineValues[medicineType] or 50
end

function GetMedicineMetabolismValue(medicineType)
  return GetMedicineHealthValue(medicineType) -- Same values for now
end

-- Usage
RegisterNetEvent("useMedicine")
AddEventHandler("useMedicine", function(medicineType)
  UseMedicine(medicineType)
end)
```

### Status Monitoring System

```lua
-- Monitor metabolism levels and provide feedback
function MonitorMetabolism()
  local hunger = exports.vorp_metabolism:Get("Hunger")
  local thirst = exports.vorp_metabolism:Get("Thirst")
  local metabolism = exports.vorp_metabolism:Get("Metabolism")
  
  return {
    hunger = {
      value = hunger,
      status = GetStatusLevel(hunger),
      percentage = math.floor((hunger / 1000) * 100)
    },
    thirst = {
      value = thirst,
      status = GetStatusLevel(thirst),
      percentage = math.floor((thirst / 1000) * 100)
    },
    metabolism = {
      value = metabolism,
      status = GetStatusLevel(metabolism),
      percentage = math.floor((metabolism / 1000) * 100)
    }
  }
end

function GetStatusLevel(value)
  if value <= 200 then
    return "Critical"
  elseif value <= 500 then
    return "Low"
  elseif value <= 800 then
    return "Moderate"
  else
    return "Good"
  end
end

-- Usage
RegisterCommand("status", function()
  local status = MonitorMetabolism()
  
  print("=== Metabolism Status ===")
  print("Hunger: " .. status.hunger.percentage .. "% (" .. status.hunger.status .. ")")
  print("Thirst: " .. status.thirst.percentage .. "% (" .. status.thirst.status .. ")")
  print("Health: " .. status.metabolism.percentage .. "% (" .. status.metabolism.status .. ")")
end)
```

### HUD Toggle System

```lua
local hudVisible = true

-- Toggle HUD visibility
RegisterCommand("togglehud", function()
  hudVisible = not hudVisible
  exports.vorp_metabolism:SetHudVisibility(hudVisible)
  
  if hudVisible then
    print("Metabolism HUD enabled")
  else
    print("Metabolism HUD disabled")
  end
end)

-- Hide HUD during specific events
RegisterNetEvent("hideMetabolismHUD")
AddEventHandler("hideMetabolismHUD", function()
  exports.vorp_metabolism:SetHudVisibility(false)
end)

RegisterNetEvent("showMetabolismHUD")
AddEventHandler("showMetabolismHUD", function()
  exports.vorp_metabolism:SetHudVisibility(true)
end)
```

### Full Reset System

```lua
-- Reset all metabolism values to full
function ResetMetabolism()
  exports.vorp_metabolism:Set("Hunger", 1000)
  exports.vorp_metabolism:Set("Thirst", 1000)
  exports.vorp_metabolism:Set("Metabolism", 1000)
  
  print("All metabolism values reset to maximum")
end

-- Admin command
RegisterCommand("resetmetabolism", function()
  ResetMetabolism()
end)

-- Death/respawn reset
RegisterNetEvent("playerRespawned")
AddEventHandler("playerRespawned", function()
  -- Reset to moderate levels on respawn
  exports.vorp_metabolism:Set("Hunger", 500)
  exports.vorp_metabolism:Set("Thirst", 500)
  exports.vorp_metabolism:Set("Metabolism", 750)
end)
```

---

## Best Practices

### Value Management

1. **Stay within bounds** - Always ensure values stay between 0-1000
2. **Use realistic changes** - Don't make dramatic value changes that feel unrealistic
3. **Balance decay rates** - Thirst should typically decrease faster than hunger

```lua
-- Good: Realistic value changes
exports.vorp_metabolism:Change("Hunger", 150)  -- Meal
exports.vorp_metabolism:Change("Thirst", -10)  -- Small decrease

-- Avoid: Extreme changes
exports.vorp_metabolism:Change("Hunger", 2000) -- Too much
exports.vorp_metabolism:Change("Thirst", -500) -- Too drastic
```

### Error Handling

```lua
function SafeMetabolismChange(type, amount)
  local validTypes = {"Metabolism", "Thirst", "Hunger"}
  local isValidType = false
  
  for _, validType in ipairs(validTypes) do
    if type == validType then
      isValidType = true
      break
    end
  end
  
  if not isValidType then
    print("Invalid metabolism type: " .. tostring(type))
    return false
  end
  
  if not amount or type(amount) ~= "number" then
    print("Invalid amount: " .. tostring(amount))
    return false
  end
  
  exports.vorp_metabolism:Change(type, amount)
  return true
end
```

### Performance Considerations

1. **Batch updates** when possible
2. **Don't query values unnecessarily**
3. **Use appropriate update intervals** for decay systems

### User Experience

1. **Provide clear feedback** when metabolism changes
2. **Use realistic timing** for decay and consumption
3. **Balance challenge vs. fun** - don't make survival too punishing

---

## Notes

- Metabolism API is **client-side only**
- Values range from 0 (empty) to 1000 (full)
- Three main types: Metabolism, Thirst, and Hunger
- HUD visibility can be controlled programmatically
- Changes are immediate and persistent during the session
- Consider implementing server-side validation for multiplayer environments
- Metabolism typically represents health or overall condition
- Thirst decreases faster than hunger in realistic survival systems