# GOOGLE_ANALYTICS Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** GOOGLE_ANALYTICS  
**Natives in this file:** 4  
**Generated from:** RDR3natives JSON data

---

## _GOOGLE_ANALYTICS_END_EVENT

| Property | Value |
|----------|-------|
| Native Name | `_GOOGLE_ANALYTICS_END_EVENT` |
| Hash | `0x87BBCC4360A9BDE3` |
| Return Type | `BOOL` |
| Build | `1355` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GoogleAnalyticsEndEvent()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x87BBCC4360A9BDE3, )
```


---

## _GOOGLE_ANALYTICS_POP_PAGE

| Property | Value |
|----------|-------|
| Native Name | `_GOOGLE_ANALYTICS_POP_PAGE` |
| Hash | `0xC6DE040378364798` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pageName` (const char*) |

### Parameters

- **`pageName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
GoogleAnalyticsPopPage(pageName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC6DE040378364798, pageName)
```


---

## _GOOGLE_ANALYTICS_PUSH_PAGE

| Property | Value |
|----------|-------|
| Native Name | `_GOOGLE_ANALYTICS_PUSH_PAGE` |
| Hash | `0xD43A616AE3AC4EF6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pageName` (const char*) |

### Parameters

- **`pageName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
GoogleAnalyticsPushPage(pageName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD43A616AE3AC4EF6, pageName)
```


---

## _GOOGLE_ANALYTICS_START_EVENT

| Property | Value |
|----------|-------|
| Native Name | `_GOOGLE_ANALYTICS_START_EVENT` |
| Hash | `0x1C54F031D7C0F7AC` |
| Return Type | `BOOL` |
| Build | `1355` |
| Parameters | `eventCategory` (const char*), `eventAction` (const char*), `eventLabel` (const char*), `eventValue` (int) |

### Parameters

- **`eventCategory`** (`const char*`)
- **`eventAction`** (`const char*`)
- **`eventLabel`** (`const char*`)
- **`eventValue`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GoogleAnalyticsStartEvent(eventCategory, eventAction, eventLabel, eventValue)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1C54F031D7C0F7AC, eventCategory, eventAction, eventLabel, eventValue)
```


---

*End of GOOGLE_ANALYTICS natives*
