# DATABINDING Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** DATABINDING  
**Natives in this file:** 50  
**Total natives in namespace:** 83  
**Generated from:** RDR3natives JSON data

---

## DATABINDING_IS_ENTRY_VALID

| Property | Value |
|----------|-------|
| Native Name | `DATABINDING_IS_ENTRY_VALID` |
| Hash | `0x1E7130793AAAAB8D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entryId` (Hash) |

### Parameters

- **`entryId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingIsEntryValid(entryId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1E7130793AAAAB8D, entryId)
```


---

## DATABINDING_READ_INT

| Property | Value |
|----------|-------|
| Native Name | `DATABINDING_READ_INT` |
| Hash | `0x570784D782597512` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadInt(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x570784D782597512, p0)
```


---

## DATABINDING_WRITE_STRING_FROM_PARENT

| Property | Value |
|----------|-------|
| Native Name | `DATABINDING_WRITE_STRING_FROM_PARENT` |
| Hash | `0x4FF713B2F17A391E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteStringFromParent(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4FF713B2F17A391E, p0, p1, p2)
```


---

## _0x02B21B6BEEDD83CC

| Property | Value |
|----------|-------|
| Native Name | `_0x02B21B6BEEDD83CC` |
| Hash | `0x02B21B6BEEDD83CC` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `entryId` (Hash), `p1` (int) |

### Parameters

- **`entryId`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x02B21B6BEEDD83CC(entryId, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x02B21B6BEEDD83CC, entryId, p1)
```


---

## _0x05AC9E1E02975AFB

**Description:** _DATABINDING_WRITE_DATA_*

| Property | Value |
|----------|-------|
| Native Name | `_0x05AC9E1E02975AFB` |
| Hash | `0x05AC9E1E02975AFB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (float) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x05AC9E1E02975AFB(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x05AC9E1E02975AFB, p0, p1, p2)
```


---

## _0x1919D59E60FD516E

| Property | Value |
|----------|-------|
| Native Name | `_0x1919D59E60FD516E` |
| Hash | `0x1919D59E60FD516E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (int), `p2` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x1919D59E60FD516E(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1919D59E60FD516E, p0, p1, p2)
```


---

## _0x294AF5323F44B053

| Property | Value |
|----------|-------|
| Native Name | `_0x294AF5323F44B053` |
| Hash | `0x294AF5323F44B053` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x294AF5323F44B053(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x294AF5323F44B053, p0, p1, p2)
```


---

## _0x3BF0767CF33FCC88

| Property | Value |
|----------|-------|
| Native Name | `_0x3BF0767CF33FCC88` |
| Hash | `0x3BF0767CF33FCC88` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entryId` (Hash) |

### Parameters

- **`entryId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x3BF0767CF33FCC88(entryId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3BF0767CF33FCC88, entryId)
```


---

## _0x422179C7F6AD9304

| Property | Value |
|----------|-------|
| Native Name | `_0x422179C7F6AD9304` |
| Hash | `0x422179C7F6AD9304` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `gamerHandle` (Any*) |

### Parameters

- **`p0`** (`Any`)
- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
_0x422179C7F6AD9304(p0, gamerHandle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x422179C7F6AD9304, p0, gamerHandle)
```


---

## _0x6318FB3BE37E11B3

| Property | Value |
|----------|-------|
| Native Name | `_0x6318FB3BE37E11B3` |
| Hash | `0x6318FB3BE37E11B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entryId` (Hash), `index` (int) |

### Parameters

- **`entryId`** (`Hash`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x6318FB3BE37E11B3(entryId, index)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6318FB3BE37E11B3, entryId, index)
```


---

## _0x6329C34BEE5BFF4B

| Property | Value |
|----------|-------|
| Native Name | `_0x6329C34BEE5BFF4B` |
| Hash | `0x6329C34BEE5BFF4B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6329C34BEE5BFF4B(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6329C34BEE5BFF4B, p0, p1)
```


---

## _0x7FC60C94C83C5CD7

| Property | Value |
|----------|-------|
| Native Name | `_0x7FC60C94C83C5CD7` |
| Hash | `0x7FC60C94C83C5CD7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash), `p2` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x7FC60C94C83C5CD7(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7FC60C94C83C5CD7, p0, p1, p2)
```


---

## _0xB138CA787F3DD858

| Property | Value |
|----------|-------|
| Native Name | `_0xB138CA787F3DD858` |
| Hash | `0xB138CA787F3DD858` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xB138CA787F3DD858(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB138CA787F3DD858, p0, p1, p2)
```


---

## _0xBFC83DA249BEFCC9

**Description:** _DATABINDING_WRITE_DATA_*

| Property | Value |
|----------|-------|
| Native Name | `_0xBFC83DA249BEFCC9` |
| Hash | `0xBFC83DA249BEFCC9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xBFC83DA249BEFCC9(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBFC83DA249BEFCC9, p0, p1, p2)
```


---

## _0xC900CEC8A172375B

| Property | Value |
|----------|-------|
| Native Name | `_0xC900CEC8A172375B` |
| Hash | `0xC900CEC8A172375B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xC900CEC8A172375B(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC900CEC8A172375B, p0, p1, p2)
```


---

## _0xD48993A61938C64D

| Property | Value |
|----------|-------|
| Native Name | `_0xD48993A61938C64D` |
| Hash | `0xD48993A61938C64D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD48993A61938C64D(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD48993A61938C64D, p0, p1)
```


---

## _DATABINDING_ADD_DATA_CONTAINER_FROM_PATH_BY_HASH

**Description:** p0 seems to always be empty string, p1 is the hash of the path

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_CONTAINER_FROM_PATH_BY_HASH` |
| Hash | `0xD7DB94AB78E8EBE4` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (const char*), `path` (Hash) |

### Parameters

- **`p0`** (`const char*`)
- **`path`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataContainerFromPathByHash(p0, path)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD7DB94AB78E8EBE4, p0, path)
```


---

## _0xE6AAB897120492D6

| Property | Value |
|----------|-------|
| Native Name | `_0xE6AAB897120492D6` |
| Hash | `0xE6AAB897120492D6` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = _0xE6AAB897120492D6(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE6AAB897120492D6, p0, p1)
```


---

## _0xE6AAB897120492D7

| Property | Value |
|----------|-------|
| Native Name | `_0xE6AAB897120492D7` |
| Hash | `0xE6AAB897120492D7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xE6AAB897120492D7(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE6AAB897120492D7, p0, p1, p2)
```


---

## _0xF47E33F8D2523825

| Property | Value |
|----------|-------|
| Native Name | `_0xF47E33F8D2523825` |
| Hash | `0xF47E33F8D2523825` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xF47E33F8D2523825(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF47E33F8D2523825, p0, p1)
```


---

## _DATABINDING_ADD_DATA_BOOL

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_BOOL` |
| Hash | `0x58BAA5F635DA2FF4` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataBool(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58BAA5F635DA2FF4, p0, p1, p2)
```


---

## _DATABINDING_ADD_DATA_BOOL_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_BOOL_BY_HASH` |
| Hash | `0xBC95D3AE2ECA70D6` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataBoolByHash(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBC95D3AE2ECA70D6, p0, p1, p2)
```


---

## _DATABINDING_ADD_DATA_BOOL_FROM_PATH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_BOOL_FROM_PATH` |
| Hash | `0x37BB86A751148A6A` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (const char*), `p2` (BOOL) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`const char*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataBoolFromPath(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x37BB86A751148A6A, p0, p1, p2)
```


---

## _DATABINDING_ADD_DATA_CONTAINER

**Description:** Returns entryId Hash

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_CONTAINER` |
| Hash | `0xEB4F9A3537EEABCD` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `entryId` (Hash), `p1` (const char*) |

### Parameters

- **`entryId`** (`Hash`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataContainer(entryId, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEB4F9A3537EEABCD, entryId, p1)
```


---

## _DATABINDING_ADD_DATA_CONTAINER_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_CONTAINER_BY_HASH` |
| Hash | `0x98BB14345BB68257` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataContainerByHash(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x98BB14345BB68257, p0, p1)
```


---

## _DATABINDING_ADD_DATA_CONTAINER_FROM_PATH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_CONTAINER_FROM_PATH` |
| Hash | `0x0C827D175F1292F4` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (const char*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataContainerFromPath(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C827D175F1292F4, p0, p1)
```


---

## _DATABINDING_ADD_DATA_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_FLOAT` |
| Hash | `0x5154228273ADB9A6` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (float) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataFloat(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5154228273ADB9A6, p0, p1, p2)
```


---

## _DATABINDING_ADD_DATA_GANG_ID

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_GANG_ID` |
| Hash | `0x7D0F2014DB28DD00` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `gangId` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`gangId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataGangId(p0, p1, gangId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7D0F2014DB28DD00, p0, p1, gangId)
```


---

## _DATABINDING_ADD_DATA_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_HASH` |
| Hash | `0x8538F1205D60ECA6` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataHash(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8538F1205D60ECA6, p0, p1, p2)
```


---

## _DATABINDING_ADD_DATA_HASH_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_HASH_BY_HASH` |
| Hash | `0x8E173DFB041993C6` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash), `p2` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)
- **`p2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataHashByHash(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8E173DFB041993C6, p0, p1, p2)
```


---

## _DATABINDING_ADD_DATA_INT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_INT` |
| Hash | `0x307A3247C5457BDE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataInt(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x307A3247C5457BDE, p0, p1, p2)
```


---

## _DATABINDING_ADD_DATA_INT_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_INT_BY_HASH` |
| Hash | `0x267F9527F4350ADE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash), `p2` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataIntByHash(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x267F9527F4350ADE, p0, p1, p2)
```


---

## _DATABINDING_ADD_DATA_POSSE_ID

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_POSSE_ID` |
| Hash | `0x7D0F2014DB28DD01` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `posseId` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`posseId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataPosseId(p0, p1, posseId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7D0F2014DB28DD01, p0, p1, posseId)
```


---

## _DATABINDING_ADD_DATA_STRING

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_STRING` |
| Hash | `0x617FCA1C5652BBAD` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataString(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x617FCA1C5652BBAD, p0, p1, p2)
```


---

## _DATABINDING_ADD_DATA_STRING_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_STRING_BY_HASH` |
| Hash | `0xEAD09E76E22630C3` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash), `p2` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)
- **`p2`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataStringByHash(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEAD09E76E22630C3, p0, p1, p2)
```


---

## _DATABINDING_ADD_DATA_STRING_FROM_PATH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_DATA_STRING_FROM_PATH` |
| Hash | `0xA381DE86EE170C4A` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (const char*), `p2` (const char*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`const char*`)
- **`p2`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddDataStringFromPath(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA381DE86EE170C4A, p0, p1, p2)
```


---

## _DATABINDING_ADD_HASH_ARRAY

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_HASH_ARRAY` |
| Hash | `0x52F5F08278EA5D75` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddHashArray(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x52F5F08278EA5D75, p0, p1)
```


---

## _DATABINDING_ADD_STRING_ARRAY

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_STRING_ARRAY` |
| Hash | `0x1B23E0627BDBFE85` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddStringArray(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1B23E0627BDBFE85, p0, p1)
```


---

## _DATABINDING_ADD_UI_ITEM_LIST

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_UI_ITEM_LIST` |
| Hash | `0xFE74FA57E0CE6824` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddUiItemList(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFE74FA57E0CE6824, p0, p1)
```


---

## _DATABINDING_ADD_UI_ITEM_LIST_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_UI_ITEM_LIST_BY_HASH` |
| Hash | `0x3C7799283325181B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddUiItemListByHash(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3C7799283325181B, p0, p1)
```


---

## _DATABINDING_ADD_UI_ITEM_LIST_FROM_PATH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_ADD_UI_ITEM_LIST_FROM_PATH` |
| Hash | `0xDB5B9A474148F699` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (const char*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingAddUiItemListFromPath(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDB5B9A474148F699, p0, p1)
```


---

## _DATABINDING_CLEAR_BINDING_ARRAY

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_CLEAR_BINDING_ARRAY` |
| Hash | `0xA1F15C1D03DF802D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entryId` (Hash) |

### Parameters

- **`entryId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
DatabindingClearBindingArray(entryId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA1F15C1D03DF802D, entryId)
```


---

## _DATABINDING_GET_ARRAY_COUNT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_GET_ARRAY_COUNT` |
| Hash | `0xD23F5DE04FE717E2` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `entryId` (Hash) |

### Parameters

- **`entryId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingGetArrayCount(entryId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD23F5DE04FE717E2, entryId)
```


---

## _DATABINDING_GET_DATA_CONTAINER_FROM_CHILD_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_GET_DATA_CONTAINER_FROM_CHILD_INDEX` |
| Hash | `0x0C827D175F1292F3` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `entryId` (Hash), `p1` (int) |

### Parameters

- **`entryId`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingGetDataContainerFromChildIndex(entryId, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C827D175F1292F3, entryId, p1)
```


---

## _DATABINDING_GET_DATA_CONTAINER_FROM_PATH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_GET_DATA_CONTAINER_FROM_PATH` |
| Hash | `0x0C827D175F1292F2` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingGetDataContainerFromPath(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C827D175F1292F2, p0)
```


---

## _DATABINDING_GET_ITEM_CONTEXT_BY_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_GET_ITEM_CONTEXT_BY_INDEX` |
| Hash | `0xE96D7F9FEFCC105F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingGetItemContextByIndex(p0, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE96D7F9FEFCC105F, p0, index)
```


---

## _DATABINDING_INSERT_UI_ITEM_TO_LIST_FROM_CONTEXT_HASH_ALIAS

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_INSERT_UI_ITEM_TO_LIST_FROM_CONTEXT_HASH_ALIAS` |
| Hash | `0xEE97A05C05F16E41` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int), `p2` (Hash), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)
- **`p2`** (`Hash`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
DatabindingInsertUiItemToListFromContextHashAlias(p0, index, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEE97A05C05F16E41, p0, index, p2, p3)
```


---

## _DATABINDING_INSERT_UI_ITEM_TO_LIST_FROM_CONTEXT_STRING_ALIAS

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_INSERT_UI_ITEM_TO_LIST_FROM_CONTEXT_STRING_ALIAS` |
| Hash | `0x5859E970794D92F3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int), `p2` (const char*), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)
- **`p2`** (`const char*`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
DatabindingInsertUiItemToListFromContextStringAlias(p0, index, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5859E970794D92F3, p0, index, p2, p3)
```


---

## _DATABINDING_INSERT_UI_ITEM_TO_LIST_FROM_PATH_STRING_ALIAS

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_INSERT_UI_ITEM_TO_LIST_FROM_PATH_STRING_ALIAS` |
| Hash | `0x5740774F608E4FC8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (const char*), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`const char*`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
DatabindingInsertUiItemToListFromPathStringAlias(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5740774F608E4FC8, p0, p1, p2, p3)
```


---

## _DATABINDING_READ_DATA_BOOL

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_DATA_BOOL` |
| Hash | `0x5EEFBD4B6D7CD6EB` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadDataBool(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5EEFBD4B6D7CD6EB, p0)
```


---

*End of DATABINDING natives part 1*
