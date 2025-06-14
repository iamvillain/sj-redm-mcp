# SOCIALCLUBFEED Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** SOCIALCLUBFEED  
**Natives in this file:** 2  
**Generated from:** RDR3natives JSON data

---

## SC_FEED_HUB_HAS_NEW_DATA

| Property | Value |
|----------|-------|
| Native Name | `SC_FEED_HUB_HAS_NEW_DATA` |
| Hash | `0x068332D20CB6F897` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ScFeedHubHasNewData()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x068332D20CB6F897, )
```


---

## _SC_FEED_SUBMIT_PRESET_MESSAGE

| Property | Value |
|----------|-------|
| Native Name | `_SC_FEED_SUBMIT_PRESET_MESSAGE` |
| Hash | `0xEFB64240F6B17817` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `type` (int), `subType` (int) |

### Parameters

- **`type`** (`int`)
- **`subType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ScFeedSubmitPresetMessage(type, subType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEFB64240F6B17817, type, subType)
```


---

*End of SOCIALCLUBFEED natives*
