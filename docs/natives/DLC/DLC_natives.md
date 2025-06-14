# DLC Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** DLC  
**Natives in this file:** 4  
**Generated from:** RDR3natives JSON data

---

## GET_IS_LOADING_SCREEN_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `GET_IS_LOADING_SCREEN_ACTIVE` |
| Hash | `0x71D4BF5890659B0C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetIsLoadingScreenActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x71D4BF5890659B0C, )
```


---

## IS_DLC_PRESENT

| Property | Value |
|----------|-------|
| Native Name | `IS_DLC_PRESENT` |
| Hash | `0x2763DC12BBE2BB6F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `dlcHash` (Hash) |

### Parameters

- **`dlcHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsDlcPresent(dlcHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2763DC12BBE2BB6F, dlcHash)
```


---

## _GET_SPECIAL_EDITION_CASH_CAMP_BONUS_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_GET_SPECIAL_EDITION_CASH_CAMP_BONUS_ENABLED` |
| Hash | `0x1DB9D61E505AE3FC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetSpecialEditionCashCampBonusEnabled()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1DB9D61E505AE3FC, )
```


---

## _GET_SPECIAL_EDITION_CORE_STATS_BONUS_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_GET_SPECIAL_EDITION_CORE_STATS_BONUS_ENABLED` |
| Hash | `0xA16B4FBA7887D7BA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetSpecialEditionCoreStatsBonusEnabled()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA16B4FBA7887D7BA, )
```


---

*End of DLC natives*
