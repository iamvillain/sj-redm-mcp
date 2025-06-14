# IK Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** IK  
**Natives in this file:** 5  
**Generated from:** RDR3natives JSON data

---

## _0x0B9F7A01EC50448D

| Property | Value |
|----------|-------|
| Native Name | `_0x0B9F7A01EC50448D` |
| Hash | `0x0B9F7A01EC50448D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `args` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
_0x0B9F7A01EC50448D(ped, args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0B9F7A01EC50448D, ped, args)
```


---

## _0x6098139150DCC745

| Property | Value |
|----------|-------|
| Native Name | `_0x6098139150DCC745` |
| Hash | `0x6098139150DCC745` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6098139150DCC745(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6098139150DCC745, ped, p1)
```


---

## _0x873C792E07A32C8B

| Property | Value |
|----------|-------|
| Native Name | `_0x873C792E07A32C8B` |
| Hash | `0x873C792E07A32C8B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped1` (Ped), `ped2` (Ped) |

### Parameters

- **`ped1`** (`Ped`)
- **`ped2`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x873C792E07A32C8B(ped1, ped2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x873C792E07A32C8B, ped1, ped2)
```


---

## _INVERSE_KINEMATICS_REQUEST_LOOK_AT

| Property | Value |
|----------|-------|
| Native Name | `_INVERSE_KINEMATICS_REQUEST_LOOK_AT` |
| Hash | `0x66F9EB44342BB4C5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `args` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
InverseKinematicsRequestLookAt(ped, args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66F9EB44342BB4C5, ped, args)
```


---

## _INVERSE_KINEMATICS_SET_DISABLED_FOR_PED

**Description:** Seems to disable IK on ped

| Property | Value |
|----------|-------|
| Native Name | `_INVERSE_KINEMATICS_SET_DISABLED_FOR_PED` |
| Hash | `0x0EABF182FBB63D72` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
InverseKinematicsSetDisabledForPed(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0EABF182FBB63D72, ped, p1, p2)
```


---

*End of IK natives*
