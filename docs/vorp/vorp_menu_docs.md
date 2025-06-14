# VORP Menu System Documentation

VORP Menu is a library that allows you to create menus in-game with an RDR2 style interface. This documentation covers the complete menu system for developers.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Menu Elements](#menu-elements)
3. [Menu Configuration](#menu-configuration)
4. [Menu Functions](#menu-functions)
5. [Runtime Menu Management](#runtime-menu-management)
6. [Complete Menu Example](#complete-menu-example)

---

## Getting Started

### Get Menu Data

Add this to the top of your client scripts to get the menu data setters and getters:

```lua
local Menu = exports.vorp_menu:GetMenuData()
```

**Returns:** The menu data object containing all menu functions and properties.

### Close All Menus

Close all currently open menus:

```lua
MenuData.CloseAll()
```

---

## Menu Elements

Menu elements are the components that will be displayed in the menu. Different element types provide various interaction methods.

### Basic Element Structure

```lua
local MenuElements = {
  {
    label = "name",           -- Display name
    value = "value",          -- Element value
    desc = "description"      -- Element description
  }
}
```

### Slider Element

Create slider elements for numeric input with min/max values:

```lua
local MenuElements = {
  {
    label = "name",
    value = 0,                -- Current slider value
    desc = "description",
    type = "slider",          -- Element type
    min = 0,                  -- Minimum value (can be float)
    max = 10,                 -- Maximum value (can be float)
    hop = 1                   -- Step/increment value
  }
}
```

**Properties:**
- `type` - Must be "slider" for slider elements
- `min` - Minimum value (supports floats)
- `max` - Maximum value (supports floats)
- `hop` - Step value for increments

### Advanced Element with Custom Properties

```lua
local MenuElements = {
  {
    label = "name",
    value = "value",
    desc = "description",
    itemHeight = "4vh",       -- Custom height for this element
    any = any,                -- Custom property (any value type)
    table = {                 -- Nested table data
      string = "string",
      number = 111,
      table = table,
    }
  }
}
```

**Custom Properties:**
- `itemHeight` - Override default element height
- `any` - Any custom value (string, number, table, array, etc.)
- `table` - Nested table within element for complex data

---

## Menu Configuration

### Menu Information Object

```lua
local MenuInfo = {
  title = "menu title",               -- Menu title
  subtext = "menu sub text",          -- Menu subtitle
  align = "top-right",                -- Menu alignment
  elements = MenuElements,            -- Menu elements array
  lastmenu = "function",              -- Previous menu function name (optional)
  itemHeight = "4vh"                  -- Default height for all elements (optional)
}
```

**Configuration Properties:**
- `title` - The title displayed at the top of the menu
- `subtext` - Subtitle text below the title
- `align` - Menu position: "top-right", "top-center", "top-left"
- `elements` - Array of menu elements
- `lastmenu` - Function name for returning to previous menu (optional)
- `itemHeight` - Default height applied to all elements if not defined individually (optional)

---

## Menu Functions

### Opening a Menu

```lua
Menu.Open("default", GetCurrentResourceName(), "OpenMenu", MenuInfo, 
  function(data, menu)
    -- Selection callback
  end,
  function(data, menu)
    -- Close/back callback
  end
)
```

**Parameters:**
- `"default"` - Menu type
- `GetCurrentResourceName()` - Resource name
- `"OpenMenu"` - Unique namespace (allows menu to remember position)
- `MenuInfo` - Menu configuration object
- `function(data, menu)` - Selection callback function
- `function(data, menu)` - Close/back callback function

### Selection Callback Data

```lua
function(data, menu)
  print("current key of MenuElements is " .. data.current.index)
  print("current value of MenuElements is " .. data.current.value)
  
  -- Access custom element properties
  if data.current.any then
    print("Custom property:", data.current.any)
  end
  
  -- Handle back button
  if (data.current == "backup") then
    return _G[data.trigger](any, any) -- Call previous menu function
  end
  
  -- Handle specific values
  if data.current.value == "value" then
    return
  end
  
  if data.current.info == "param" then
    return menu.close()
  end
end
```

---

## Runtime Menu Management

### Add New Element

Add elements to the current menu during runtime:

```lua
menu.addNewElement({
  label = "label",
  value = "open", 
  desc = "description"
})

-- Refresh menu to show new element
menu.refresh()
```

**Parameters:**
- `label` - The display label of the element
- `value` - The value of the element
- `desc` - The description of the element

### Find Elements

Retrieve elements by value or index:

```lua
local element = menu.getElementByValue(value)
local element = menu.getElementByIndex(index)
```

**Parameters:**
- `value` - Element value to search for
- `index` - Element index to retrieve

**Returns:** Element object if found

### Update Element

Update specific element properties:

```lua
menu.setElement(index, variable, newValue)

-- Refresh menu to show changes
menu.refresh()
```

**Parameters:**
- `index` - The index of the menu element to update
- `variable` - The property to update (label, value, desc, or any custom property)
- `newValue` - The new value for the property

### Remove Elements

Remove elements by index or value:

```lua
menu.removeElementByIndex(index, loop)
menu.removeElementByValue(value, loop)

-- Refresh menu to show changes
menu.refresh()
```

**Parameters:**
- `index` - Element index to remove
- `value` - Element value to remove
- `loop` - Stop at first match (false) or continue searching (true)

### Menu Control Functions

```lua
menu.close()              -- Close current menu
menu.setTitle("title")    -- Set menu title
menu.refresh()            -- Refresh menu display
```

---

## Complete Menu Example

```lua
function OpenMenu()
  Menu.CloseAll()
  
  local MenuElements = {
    {
      label = "Basic Item",
      value = "basic",
      desc = "A basic menu item"
    },
    {
      label = "Volume Slider",
      value = 50,
      desc = "Adjust volume level",
      type = "slider",
      min = 0,
      max = 100,
      hop = 5
    },
    {
      label = "Custom Height Item",
      value = "custom",
      desc = "Item with custom height",
      itemHeight = "6vh"
    },
    {
      label = "Advanced Item",
      value = "advanced",
      desc = "Item with custom data",
      customData = "example",
      settings = {
        enabled = true,
        priority = 1,
        options = {"option1", "option2"}
      }
    }
  }

  Menu.Open("default", GetCurrentResourceName(), "OpenMenu",
    {
      title = "Example Menu",
      subtext = "Choose an option",
      align = "top-right",
      elements = MenuElements,
      lastmenu = nil,
      itemHeight = "4vh"
    },
    function(data, menu)
      print("Selected index: " .. data.current.index)
      print("Selected value: " .. data.current.value)
      
      -- Handle back button
      if (data.current == "backup") then
        return menu.close()
      end
      
      -- Handle different menu items
      if data.current.value == "basic" then
        print("Basic item selected")
        -- Add new element dynamically
        menu.addNewElement({
          label = "New Item",
          value = "new",
          desc = "Dynamically added item"
        })
        menu.refresh()
        
      elseif data.current.value == "custom" then
        print("Custom item selected")
        -- Update menu title
        menu.setTitle("Updated Menu")
        menu.refresh()
        
      elseif data.current.value == "advanced" then
        print("Advanced item selected")
        print("Custom data: " .. data.current.customData)
        print("Settings: " .. json.encode(data.current.settings))
        
      elseif data.current.value == "new" then
        print("New item selected")
        -- Remove this element
        menu.removeElementByValue("new")
        menu.refresh()
        
      elseif data.current.type == "slider" then
        print("Slider value: " .. data.current.value)
        -- Handle slider value change
      end
    end,
    function(data, menu)
      -- Handle menu close/back
      print("Menu closed or back pressed")
      menu.close()
    end
  )
end

-- Example usage
RegisterCommand("openmenu", function()
  OpenMenu()
end)
```

### Dynamic Menu Management Example

```lua
function CreateDynamicMenu()
  Menu.CloseAll()
  
  local MenuElements = {
    {
      label = "Add Item",
      value = "add",
      desc = "Add a new menu item"
    },
    {
      label = "Remove Item",
      value = "remove", 
      desc = "Remove the last item"
    }
  }

  Menu.Open("default", GetCurrentResourceName(), "DynamicMenu",
    {
      title = "Dynamic Menu",
      subtext = "Manage menu items",
      align = "top-center",
      elements = MenuElements
    },
    function(data, menu)
      if data.current.value == "add" then
        local itemCount = #menu.getElements() + 1
        menu.addNewElement({
          label = "Dynamic Item " .. itemCount,
          value = "dynamic_" .. itemCount,
          desc = "Dynamically created item"
        })
        menu.refresh()
        
      elseif data.current.value == "remove" then
        local elements = menu.getElements()
        if #elements > 2 then -- Keep original add/remove buttons
          menu.removeElementByIndex(#elements)
          menu.refresh()
        end
        
      elseif string.match(data.current.value, "dynamic_") then
        print("Selected dynamic item: " .. data.current.label)
      end
    end,
    function(data, menu)
      menu.close()
    end
  )
end
```

---

## Best Practices

### Menu Organization

1. **Use Descriptive Labels**: Make menu items clear and understandable
2. **Logical Grouping**: Group related items together
3. **Consistent Naming**: Use consistent value naming conventions

### Performance Considerations

1. **Refresh Sparingly**: Only call `menu.refresh()` when necessary
2. **Clean Up**: Always close menus when done
3. **Memory Management**: Remove unused elements to free memory

### User Experience

1. **Provide Feedback**: Use descriptions to explain what items do
2. **Logical Flow**: Design menu navigation that makes sense
3. **Error Handling**: Always check if elements exist before operations

### Example Error Handling

```lua
-- Safe element retrieval
local element = menu.getElementByValue("somevalue")
if element then
  -- Process element
else
  print("Element not found")
end

-- Safe element update
if menu.getElementByIndex(index) then
  menu.setElement(index, "label", "New Label")
  menu.refresh()
end
```

---

## Notes

- Menus use RDR2-style interface design
- All menu operations are client-side
- Refresh menu after runtime modifications
- Use unique namespaces to prevent conflicts
- Element properties can be extended with custom data
- Slider elements support float values for precision
- Menu alignment affects where the menu appears on screen
- Always handle both selection and close callbacks for complete functionality