# UIPINNING Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** UIPINNING  
**Natives in this file:** 1  
**Generated from:** RDR3natives JSON data

---

## _UIPINNING_GET_TOOLTIP_TEXT

| Property | Value |
|----------|-------|
| Native Name | `_UIPINNING_GET_TOOLTIP_TEXT` |
| Hash | `0x3138582E0A13BFAB` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UipinningGetTooltipText(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3138582E0A13BFAB, hash)
```


---

*End of UIPINNING natives*
