# UNLOCK Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** UNLOCK  
**Natives in this file:** 9  
**Generated from:** RDR3natives JSON data

---

## UNLOCK_IS_UNLOCKED

| Property | Value |
|----------|-------|
| Native Name | `UNLOCK_IS_UNLOCKED` |
| Hash | `0xC4B660C7B6040E75` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `unlockHash` (Hash) |

### Parameters

- **`unlockHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UnlockIsUnlocked(unlockHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC4B660C7B6040E75, unlockHash)
```


---

## UNLOCK_IS_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `UNLOCK_IS_VISIBLE` |
| Hash | `0x8588A14B75AF096B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `unlockHash` (Hash) |

### Parameters

- **`unlockHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UnlockIsVisible(unlockHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8588A14B75AF096B, unlockHash)
```


---

## UNLOCK_SET_UNLOCKED

| Property | Value |
|----------|-------|
| Native Name | `UNLOCK_SET_UNLOCKED` |
| Hash | `0x1B7C5ADA8A6910A0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `unlockHash` (Hash), `toggle` (BOOL) |

### Parameters

- **`unlockHash`** (`Hash`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UnlockSetUnlocked(unlockHash, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1B7C5ADA8A6910A0, unlockHash, toggle)
```


---

## UNLOCK_SET_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `UNLOCK_SET_VISIBLE` |
| Hash | `0x46B901A8ECDB5A61` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `unlockHash` (Hash), `toggle` (BOOL) |

### Parameters

- **`unlockHash`** (`Hash`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UnlockSetVisible(unlockHash, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x46B901A8ECDB5A61, unlockHash, toggle)
```


---

## _UNLOCK_GET_ITEM_ROLE_UNLOCK_INFO

| Property | Value |
|----------|-------|
| Native Name | `_UNLOCK_GET_ITEM_ROLE_UNLOCK_INFO` |
| Hash | `0x7C1C2062CFAD06FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `unlockHash` (Hash), `outData` (Any*) |

### Parameters

- **`unlockHash`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
UnlockGetItemRoleUnlockInfo(unlockHash, outData)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C1C2062CFAD06FE, unlockHash, outData)
```


---

## _UNLOCK_IS_LOOTABLE

| Property | Value |
|----------|-------|
| Native Name | `_UNLOCK_IS_LOOTABLE` |
| Hash | `0x66BF197E066050DE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `unlockHash` (Hash) |

### Parameters

- **`unlockHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UnlockIsLootable(unlockHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x66BF197E066050DE, unlockHash)
```


---

## _UNLOCK_IS_NEW

| Property | Value |
|----------|-------|
| Native Name | `_UNLOCK_IS_NEW` |
| Hash | `0x644166BA7AA49DEA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `unlockHash` (Hash) |

### Parameters

- **`unlockHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UnlockIsNew(unlockHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x644166BA7AA49DEA, unlockHash)
```


---

## _UNLOCK_IS_UNLOCK_FLAG_SET

| Property | Value |
|----------|-------|
| Native Name | `_UNLOCK_IS_UNLOCK_FLAG_SET` |
| Hash | `0x6B6369647F26F09F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `unlockHash` (Hash), `flag` (int) |

### Parameters

- **`unlockHash`** (`Hash`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UnlockIsUnlockFlagSet(unlockHash, flag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6B6369647F26F09F, unlockHash, flag)
```


---

## _UNLOCK_SET_NEW

| Property | Value |
|----------|-------|
| Native Name | `_UNLOCK_SET_NEW` |
| Hash | `0xA6D79C7AEF870A99` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `unlockHash` (Hash), `toggle` (BOOL) |

### Parameters

- **`unlockHash`** (`Hash`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UnlockSetNew(unlockHash, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA6D79C7AEF870A99, unlockHash, toggle)
```


---

*End of UNLOCK natives*
