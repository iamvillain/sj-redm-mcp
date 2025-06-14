# UIDEBUG Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** UIDEBUG  
**Natives in this file:** 3  
**Generated from:** RDR3natives JSON data

---

## _BG_DISPLAY_TEXT

**Description:** Note: you must use VAR_STRING

| Property | Value |
|----------|-------|
| Native Name | `_BG_DISPLAY_TEXT` |
| Hash | `0x16794E044C9EFB58` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `text` (char*), `x` (float), `y` (float) |

### Parameters

- **`text`** (`char*`)
- **`x`** (`float`)
- **`y`** (`float`)

### Usage

**Lua (Direct):**
```lua
BgDisplayText(text, x, y)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x16794E044C9EFB58, text, x, y)
```


---

## _BG_SET_TEXT_COLOR

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/colours

| Property | Value |
|----------|-------|
| Native Name | `_BG_SET_TEXT_COLOR` |
| Hash | `0x16FA5CE47F184F1E` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `red` (int), `green` (int), `blue` (int), `alpha` (int) |

### Parameters

- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)
- **`alpha`** (`int`)

### Usage

**Lua (Direct):**
```lua
BgSetTextColor(red, green, blue, alpha)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x16FA5CE47F184F1E, red, green, blue, alpha)
```


---

## _BG_SET_TEXT_SCALE

| Property | Value |
|----------|-------|
| Native Name | `_BG_SET_TEXT_SCALE` |
| Hash | `0xA1253A3C870B6843` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `scaleX` (float), `scaleY` (float) |

### Parameters

- **`scaleX`** (`float`)
- **`scaleY`** (`float`)

### Usage

**Lua (Direct):**
```lua
BgSetTextScale(scaleX, scaleY)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA1253A3C870B6843, scaleX, scaleY)
```


---

*End of UIDEBUG natives*
