# VORP Inputs System Documentation

VORP Inputs allows you to build advanced input menus for your scripts with customizable styling and validation.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Input Configuration](#input-configuration)
3. [Input Types](#input-types)
4. [Validation Patterns](#validation-patterns)
5. [Result Processing](#result-processing)
6. [Examples](#examples)

---

## Getting Started

The VORP Inputs system is client-side only and provides advanced input functionality for user data collection.

### Basic Usage

```lua
local result = exports.vorp_inputs:advancedInput(inputConfig)
```

**Parameters:**
- `inputConfig` - Configuration table defining the input properties

**Returns:** 
- `result` - String containing the user input

---

## Input Configuration

### Input Configuration Object

```lua
local myInput = {
  type = "enableinput",              -- Required: Don't modify
  inputType = "input",               -- Input type
  button = "Confirm",                -- Button text
  placeholder = "NAME QUANTITY",     -- Placeholder text
  style = "block",                   -- Required: Don't modify
  attributes = {
    inputHeader = "GIVE ITEM",       -- Header text
    type = "text",                   -- Input type (text, number, date, textarea, etc.)
    pattern = "[0-9]",               -- Validation pattern
    title = "numbers only",          -- Error message for invalid input
    style = "border-radius: 10px; background-color: ; border:none;" -- CSS styling
  }
}
```

### Configuration Properties

#### Main Properties
- `type` - Must be "enableinput" (required, do not modify)
- `inputType` - Set to "input" for input fields
- `button` - Text displayed on the confirm button
- `placeholder` - Placeholder text shown in empty input field
- `style` - Must be "block" (required, do not modify)

#### Attributes Object
- `inputHeader` - Header text displayed above the input
- `type` - HTML input type (see [Input Types](#input-types))
- `pattern` - Regular expression for input validation (see [Validation Patterns](#validation-patterns))
- `title` - Error message shown when input doesn't match pattern
- `style` - CSS styling for the input field

---

## Input Types

The `attributes.type` property supports various HTML input types:

### Text Input
```lua
attributes = {
  type = "text"
}
```
**Use Case:** General text input, names, descriptions

### Number Input
```lua
attributes = {
  type = "number"
}
```
**Use Case:** Numeric values, quantities, prices

### Date Input
```lua
attributes = {
  type = "date"
}
```
**Use Case:** Date selection, birth dates, event dates

### Textarea
```lua
attributes = {
  type = "textarea"
}
```
**Use Case:** Multi-line text input, descriptions, messages

### Email Input
```lua
attributes = {
  type = "email"
}
```
**Use Case:** Email address validation

### Password Input
```lua
attributes = {
  type = "password"
}
```
**Use Case:** Password entry (masked input)

---

## Validation Patterns

Use regular expressions in the `pattern` attribute to validate user input:

### Numbers Only
```lua
pattern = "[0-9]"
```
**Validates:** Single digit
```lua
pattern = "[0-9]+"
```
**Validates:** One or more digits

### Letters Only
```lua
pattern = "[A-Za-z]+"
```
**Validates:** Letters only (uppercase and lowercase)

### Alphanumeric
```lua
pattern = "[A-Za-z0-9]+"
```
**Validates:** Letters and numbers only

### Specific Length
```lua
pattern = "[0-9]{3}"        -- Exactly 3 digits
pattern = "[A-Za-z]{2,10}"  -- 2 to 10 letters
```

### Custom Patterns
```lua
pattern = "^[A-Za-z\\s]+$"  -- Letters and spaces only
pattern = "^\\d{1,4}$"      -- 1 to 4 digits
pattern = "^[a-z0-9_-]+$"   -- Lowercase letters, numbers, underscore, hyphen
```

---

## Result Processing

### Basic Result Handling

```lua
local result = exports.vorp_inputs:advancedInput(myInput)

-- Convert to number
result = tonumber(result)

-- Convert to string (if needed)
result = tostring(result)
```

### Splitting Multiple Values

When users enter multiple values separated by spaces:

```lua
local result = "apple 5"  -- Example result

local splitString = {}
for i in string.gmatch(result, "%S+") do
  splitString[#splitString + 1] = i
end

local data1, data2 = splitString[1], splitString[2]
-- data1 = "apple", data2 = "5"
```

### Advanced Result Processing

```lua
-- Split and validate multiple values
local function processMultipleInputs(result)
  local splitString = {}
  for i in string.gmatch(result, "%S+") do
    splitString[#splitString + 1] = i
  end
  
  if #splitString < 2 then
    return nil, "Not enough parameters"
  end
  
  local itemName = splitString[1]
  local quantity = tonumber(splitString[2])
  
  if not quantity then
    return nil, "Invalid quantity"
  end
  
  return {
    item = itemName,
    quantity = quantity
  }
end

-- Usage
local result = exports.vorp_inputs:advancedInput(myInput)
local data, error = processMultipleInputs(result)

if data then
  print("Item: " .. data.item .. ", Quantity: " .. data.quantity)
else
  print("Error: " .. error)
end
```

---

## Examples

### Simple Text Input

```lua
local nameInput = {
  type = "enableinput",
  inputType = "input",
  button = "Submit",
  placeholder = "Enter your name",
  style = "block",
  attributes = {
    inputHeader = "Character Name",
    type = "text",
    pattern = "[A-Za-z\\s]+",
    title = "Letters and spaces only",
    style = "border-radius: 5px; padding: 10px;"
  }
}

local playerName = exports.vorp_inputs:advancedInput(nameInput)
if playerName and playerName ~= "" then
  print("Player name: " .. playerName)
end
```

### Number Input with Validation

```lua
local quantityInput = {
  type = "enableinput",
  inputType = "input", 
  button = "Confirm",
  placeholder = "Enter quantity (1-999)",
  style = "block",
  attributes = {
    inputHeader = "Item Quantity",
    type = "number",
    pattern = "[1-9][0-9]{0,2}",  -- 1-999
    title = "Enter a number between 1 and 999",
    style = "border-radius: 8px; border: 2px solid #333;"
  }
}

local quantity = exports.vorp_inputs:advancedInput(quantityInput)
quantity = tonumber(quantity)

if quantity and quantity > 0 and quantity <= 999 then
  print("Valid quantity: " .. quantity)
else
  print("Invalid quantity entered")
end
```

### Multi-Value Input (Item and Quantity)

```lua
local itemInput = {
  type = "enableinput",
  inputType = "input",
  button = "Give Item",
  placeholder = "ITEM_NAME QUANTITY",
  style = "block",
  attributes = {
    inputHeader = "Give Item to Player",
    type = "text",
    pattern = "^[A-Za-z_]+ [0-9]+$",
    title = "Format: ITEM_NAME QUANTITY (e.g., bread 5)",
    style = "border-radius: 10px; padding: 12px; font-family: monospace;"
  }
}

local result = exports.vorp_inputs:advancedInput(itemInput)

if result then
  local splitString = {}
  for i in string.gmatch(result, "%S+") do
    splitString[#splitString + 1] = i
  end
  
  local itemName, quantity = splitString[1], tonumber(splitString[2])
  
  if itemName and quantity then
    -- Give item to player
    TriggerServerEvent("givePlayerItem", itemName, quantity)
  end
end
```

### Date Input

```lua
local dateInput = {
  type = "enableinput",
  inputType = "input",
  button = "Set Date",
  placeholder = "Select date",
  style = "block",
  attributes = {
    inputHeader = "Event Date",
    type = "date",
    title = "Please select a valid date",
    style = "border-radius: 6px; padding: 8px;"
  }
}

local eventDate = exports.vorp_inputs:advancedInput(dateInput)
if eventDate then
  print("Event scheduled for: " .. eventDate)
end
```

### Textarea Input

```lua
local messageInput = {
  type = "enableinput",
  inputType = "input",
  button = "Send Message",
  placeholder = "Type your message here...",
  style = "block",
  attributes = {
    inputHeader = "Send Message",
    type = "textarea",
    pattern = ".{1,500}",  -- 1-500 characters
    title = "Message must be 1-500 characters",
    style = "border-radius: 8px; padding: 10px; min-height: 100px; resize: vertical;"
  }
}

local message = exports.vorp_inputs:advancedInput(messageInput)
if message and #message > 0 then
  TriggerServerEvent("sendMessage", message)
end
```

### Styled Input with Custom CSS

```lua
local styledInput = {
  type = "enableinput",
  inputType = "input",
  button = "💎 Confirm",
  placeholder = "Enter amount...",
  style = "block",
  attributes = {
    inputHeader = "💰 Bank Deposit",
    type = "number",
    pattern = "[1-9][0-9]*",
    title = "Enter a positive number",
    style = [[
      border-radius: 15px; 
      padding: 15px; 
      background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
      border: 2px solid #gold;
      color: #fff;
      font-size: 16px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    ]]
  }
}

local amount = exports.vorp_inputs:advancedInput(styledInput)
amount = tonumber(amount)

if amount and amount > 0 then
  TriggerServerEvent("bankDeposit", amount)
end
```

---

## Best Practices

### Input Validation

1. **Always validate input** on both client and server
2. **Use appropriate patterns** for expected input format
3. **Provide clear error messages** in the title attribute
4. **Handle nil/empty results** gracefully

### User Experience

1. **Use descriptive headers** that explain what input is expected
2. **Provide clear placeholders** showing input format
3. **Style inputs consistently** across your script
4. **Give feedback** when input is processed

### Error Handling

```lua
local function safeInputPrompt(inputConfig, validator)
  local result = exports.vorp_inputs:advancedInput(inputConfig)
  
  if not result or result == "" then
    return nil, "No input provided"
  end
  
  if validator and not validator(result) then
    return nil, "Invalid input format"
  end
  
  return result
end

-- Usage with validator
local result, error = safeInputPrompt(myInput, function(input)
  return tonumber(input) ~= nil and tonumber(input) > 0
end)

if result then
  -- Process valid input
else
  print("Input error: " .. (error or "Unknown error"))
end
```

---

## Notes

- VORP Inputs is **client-side only**
- Always validate input on the server side for security
- Use appropriate HTML input types for better user experience
- Regular expressions in patterns help ensure data quality
- CSS styling allows for theme consistency across your scripts
- Multiple values can be separated by spaces and split using string.gmatch
- Consider user experience when designing input prompts