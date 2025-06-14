# DECORATOR Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** DECORATOR  
**Natives in this file:** 15  
**Generated from:** RDR3natives JSON data

---

## DECOR_EXIST_ON

**Description:** Returns whether or not the specified property is set for the entity.

| Property | Value |
|----------|-------|
| Native Name | `DECOR_EXIST_ON` |
| Hash | `0xD9D1CDBF3464DCDF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DecorExistOn(entity, propertyName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD9D1CDBF3464DCDF, entity, propertyName)
```


---

## DECOR_GET_BOOL

| Property | Value |
|----------|-------|
| Native Name | `DECOR_GET_BOOL` |
| Hash | `0xDEF3F1B071ABB197` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DecorGetBool(entity, propertyName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDEF3F1B071ABB197, entity, propertyName)
```


---

## DECOR_GET_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `DECOR_GET_FLOAT` |
| Hash | `0xE5FF70CD842CA9D4` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DecorGetFloat(entity, propertyName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE5FF70CD842CA9D4, entity, propertyName)
```


---

## DECOR_GET_INT

| Property | Value |
|----------|-------|
| Native Name | `DECOR_GET_INT` |
| Hash | `0x44DB62727762FD9B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DecorGetInt(entity, propertyName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x44DB62727762FD9B, entity, propertyName)
```


---

## DECOR_IS_REGISTERED_AS_TYPE

**Description:** type: see DECOR_REGISTER

| Property | Value |
|----------|-------|
| Native Name | `DECOR_IS_REGISTERED_AS_TYPE` |
| Hash | `0x72355278C069F272` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `propertyName` (const char*), `type` (int) |

### Parameters

- **`propertyName`** (`const char*`)
- **`type`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DecorIsRegisteredAsType(propertyName, type)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x72355278C069F272, propertyName, type)
```


---

## DECOR_REGISTER

| Property | Value |
|----------|-------|
| Native Name | `DECOR_REGISTER` |
| Hash | `0x0B253D644E3C36B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `propertyName` (const char*), `type` (int) |

### Parameters

- **`propertyName`** (`const char*`)
- **`type`** (`int`)

### Usage

**Lua (Direct):**
```lua
DecorRegister(propertyName, type)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0B253D644E3C36B3, propertyName, type)
```


---

## DECOR_REMOVE

| Property | Value |
|----------|-------|
| Native Name | `DECOR_REMOVE` |
| Hash | `0x2BA7F5877A088A1D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DecorRemove(entity, propertyName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2BA7F5877A088A1D, entity, propertyName)
```


---

## DECOR_REMOVE_ALL

| Property | Value |
|----------|-------|
| Native Name | `DECOR_REMOVE_ALL` |
| Hash | `0x88942780E0ADEA42` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = DecorRemoveAll(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x88942780E0ADEA42, entity)
```


---

## DECOR_SET_BOOL

**Description:** This function sets metadata of type bool to specified entity.


| Property | Value |
|----------|-------|
| Native Name | `DECOR_SET_BOOL` |
| Hash | `0xFE26E4609B1C3772` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*), `value` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)
- **`value`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = DecorSetBool(entity, propertyName, value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFE26E4609B1C3772, entity, propertyName, value)
```


---

## DECOR_SET_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `DECOR_SET_FLOAT` |
| Hash | `0x238F8B0C1C7FE834` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*), `value` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = DecorSetFloat(entity, propertyName, value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x238F8B0C1C7FE834, entity, propertyName, value)
```


---

## DECOR_SET_INT

**Description:** Sets property to int.

| Property | Value |
|----------|-------|
| Native Name | `DECOR_SET_INT` |
| Hash | `0xE88F4D7F52A6090F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*), `value` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DecorSetInt(entity, propertyName, value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE88F4D7F52A6090F, entity, propertyName, value)
```


---

## DECOR_SET_STRING

| Property | Value |
|----------|-------|
| Native Name | `DECOR_SET_STRING` |
| Hash | `0x0671C1A3FF7AFDFC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*), `value` (const char*) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)
- **`value`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DecorSetString(entity, propertyName, value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0671C1A3FF7AFDFC, entity, propertyName, value)
```


---

## _DECOR_GET_UINT8

| Property | Value |
|----------|-------|
| Native Name | `_DECOR_GET_UINT8` |
| Hash | `0xB1682B2443F0540B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DecorGetUint8(entity, propertyName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB1682B2443F0540B, entity, propertyName)
```


---

## _DECOR_REGISTER_2

| Property | Value |
|----------|-------|
| Native Name | `_DECOR_REGISTER_2` |
| Hash | `0x4587374F88B7F6C2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `propertyName` (const char*), `type` (int), `p2` (BOOL) |

### Parameters

- **`propertyName`** (`const char*`)
- **`type`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DecorRegister2(propertyName, type, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4587374F88B7F6C2, propertyName, type, p2)
```


---

## _DECOR_SET_UINT8

| Property | Value |
|----------|-------|
| Native Name | `_DECOR_SET_UINT8` |
| Hash | `0x4BDC83150D43772D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `propertyName` (const char*), `value` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`propertyName`** (`const char*`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DecorSetUint8(entity, propertyName, value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4BDC83150D43772D, entity, propertyName, value)
```


---

*End of DECORATOR natives*
