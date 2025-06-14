# UISTICKYFEED Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** UISTICKYFEED  
**Natives in this file:** 8  
**Generated from:** RDR3natives JSON data

---

## _UI_STICKY_FEED_CLEAR_MESSAGE

| Property | Value |
|----------|-------|
| Native Name | `_UI_STICKY_FEED_CLEAR_MESSAGE` |
| Hash | `0x00A15B94CBA4F76F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `msgId` (int) |

### Parameters

- **`msgId`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiStickyFeedClearMessage(msgId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x00A15B94CBA4F76F, msgId)
```


---

## _UI_STICKY_FEED_CREATE_DEATH_FAIL_MESSAGE

**Description:** Example: https://pastebin.com/JygJShNU

| Property | Value |
|----------|-------|
| Native Name | `_UI_STICKY_FEED_CREATE_DEATH_FAIL_MESSAGE` |
| Hash | `0x815C4065AE6E6071` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiStickyFeedCreateDeathFailMessage(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x815C4065AE6E6071, p0, p1, p2)
```


---

## _UI_STICKY_FEED_CREATE_ERROR_MESSAGE

**Description:** Example: https://pastebin.com/EJD7ytnz

| Property | Value |
|----------|-------|
| Native Name | `_UI_STICKY_FEED_CREATE_ERROR_MESSAGE` |
| Hash | `0x9F2CC2439A04E7BA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiStickyFeedCreateErrorMessage(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9F2CC2439A04E7BA, p0, p1, p2)
```


---

## _UI_STICKY_FEED_CREATE_WARNING_MESSAGE

**Description:** Example: https://pastebin.com/6mLtee2S

| Property | Value |
|----------|-------|
| Native Name | `_UI_STICKY_FEED_CREATE_WARNING_MESSAGE` |
| Hash | `0x339E16B41780FC35` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiStickyFeedCreateWarningMessage(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x339E16B41780FC35, p0, p1, p2)
```


---

## _UI_STICKY_FEED_GET_MESSAGE_STATE

**Description:** Returns state of sticky feed message, see 0x59FA676177DBE4C9

| Property | Value |
|----------|-------|
| Native Name | `_UI_STICKY_FEED_GET_MESSAGE_STATE` |
| Hash | `0x07954320D77F6A3D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `msgId` (int) |

### Parameters

- **`msgId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UiStickyFeedGetMessageState(msgId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x07954320D77F6A3D, msgId)
```


---

## _UI_STICKY_FEED_IS_ALERT_SCREEN_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_UI_STICKY_FEED_IS_ALERT_SCREEN_ACTIVE` |
| Hash | `0xF8806EC3FF840FDC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = UiStickyFeedIsAlertScreenActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF8806EC3FF840FDC, )
```


---

## _UI_STICKY_FEED_IS_CHANNEL_ACTIVE

**Description:** stickyFeedChannel: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eUIStickyFeedChannel

| Property | Value |
|----------|-------|
| Native Name | `_UI_STICKY_FEED_IS_CHANNEL_ACTIVE` |
| Hash | `0xC5C395C60B542A3C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `stickyFeedChannel` (int) |

### Parameters

- **`stickyFeedChannel`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UiStickyFeedIsChannelActive(stickyFeedChannel)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC5C395C60B542A3C, stickyFeedChannel)
```


---

## _UI_STICKY_FEED_UPDATE_MESSAGE

**Description:** Seems to only update _UI_STICKY_FEED_CREATE_ERROR_MESSAGE(0x9F2CC2439A04E7BA) and _UI_STICKY_FEED_CREATE_DEATH_FAIL_MESSAGE(0x815C4065AE6E6071) message.
Example: https://pastebin.com/nDrJyWq2

| Property | Value |
|----------|-------|
| Native Name | `_UI_STICKY_FEED_UPDATE_MESSAGE` |
| Hash | `0xBC6F454E310124DA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `msgId` (int), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`msgId`** (`int`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UiStickyFeedUpdateMessage(msgId, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC6F454E310124DA, msgId, p1, p2)
```


---

*End of UISTICKYFEED natives*
