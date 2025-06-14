# DATABINDING Natives - Part 2 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** DATABINDING  
**Natives in this file:** 33  
**Total natives in namespace:** 83  
**Generated from:** RDR3natives JSON data

---

## _DATABINDING_READ_DATA_BOOL_FROM_PARENT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_DATA_BOOL_FROM_PARENT` |
| Hash | `0xA8EDE09FE07BD77F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadDataBoolFromParent(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA8EDE09FE07BD77F, p0, p1)
```


---

## _DATABINDING_READ_DATA_BOOL_FROM_PARENT_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_DATA_BOOL_FROM_PARENT_BY_HASH` |
| Hash | `0x4CDC3FDDFAE07EB3` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadDataBoolFromParentByHash(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4CDC3FDDFAE07EB3, p0, p1)
```


---

## _DATABINDING_READ_DATA_HASH_STRING_FROM_PARENT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_DATA_HASH_STRING_FROM_PARENT` |
| Hash | `0x9B535990B01B62DE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadDataHashStringFromParent(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9B535990B01B62DE, p0, p1)
```


---

## _DATABINDING_READ_DATA_HASH_STRING_FROM_PARENT_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_DATA_HASH_STRING_FROM_PARENT_BY_HASH` |
| Hash | `0x1F43BC25A119B252` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadDataHashStringFromParentByHash(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F43BC25A119B252, p0, p1)
```


---

## _DATABINDING_READ_DATA_INT_FROM_PARENT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_DATA_INT_FROM_PARENT` |
| Hash | `0xFFC566A4801F6B40` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadDataIntFromParent(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFFC566A4801F6B40, p0, p1)
```


---

## _DATABINDING_READ_DATA_INT_FROM_PARENT_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_DATA_INT_FROM_PARENT_BY_HASH` |
| Hash | `0xB5F668B648EC0970` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadDataIntFromParentByHash(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB5F668B648EC0970, p0, p1)
```


---

## _DATABINDING_READ_DATA_STRING

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_DATA_STRING` |
| Hash | `0x3D290B5FFA7C5151` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadDataString(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3D290B5FFA7C5151, p0)
```


---

## _DATABINDING_READ_DATA_STRING_FROM_PARENT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_DATA_STRING_FROM_PARENT` |
| Hash | `0x6323AD277C4A2AFB` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadDataStringFromParent(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6323AD277C4A2AFB, p0, p1)
```


---

## _DATABINDING_READ_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_FLOAT` |
| Hash | `0x5FE444EB67C70AD4` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entryId` (Hash) |

### Parameters

- **`entryId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadFloat(entryId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5FE444EB67C70AD4, entryId)
```


---

## _DATABINDING_READ_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_READ_HASH` |
| Hash | `0x81D7183E7A8ECA72` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `entryId` (Hash) |

### Parameters

- **`entryId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DatabindingReadHash(entryId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x81D7183E7A8ECA72, entryId)
```


---

## _DATABINDING_REMOVE_BINDING_ARRAY_ITEM_BY_DATA_CONTEXT_ID

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_REMOVE_BINDING_ARRAY_ITEM_BY_DATA_CONTEXT_ID` |
| Hash | `0xF68B1726EAF7B285` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `entryId` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`entryId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
DatabindingRemoveBindingArrayItemByDataContextId(p0, entryId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF68B1726EAF7B285, p0, entryId)
```


---

## _DATABINDING_REMOVE_DATA_ENTRY

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_REMOVE_DATA_ENTRY` |
| Hash | `0x0AE9938D0541F2DA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entryId` (Hash) |

### Parameters

- **`entryId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
DatabindingRemoveDataEntry(entryId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0AE9938D0541F2DA, entryId)
```


---

## _DATABINDING_SET_TEMPLATED_UI_ITEM_HASH_ALIAS

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_SET_TEMPLATED_UI_ITEM_HASH_ALIAS` |
| Hash | `0x0AE7138D0541F2DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (int), `p2` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`int`)
- **`p2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
DatabindingSetTemplatedUiItemHashAlias(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0AE7138D0541F2DE, p0, p1, p2)
```


---

## _DATABINDING_SET_TEMPLATED_UI_ITEM_LIST_SIZE

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_SET_TEMPLATED_UI_ITEM_LIST_SIZE` |
| Hash | `0xFE74FA57E0CE6825` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
DatabindingSetTemplatedUiItemListSize(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFE74FA57E0CE6825, p0, p1)
```


---

## _DATABINDING_WRITE_DATA_BOOL

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_BOOL` |
| Hash | `0xAB888B4B91046770` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (BOOL) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteDataBool(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAB888B4B91046770, p0, p1)
```


---

## _DATABINDING_WRITE_DATA_BOOL_FROM_PARENT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_BOOL_FROM_PARENT` |
| Hash | `0xBDFE546E4C2D0E21` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteDataBoolFromParent(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBDFE546E4C2D0E21, p0, p1, p2)
```


---

## _DATABINDING_WRITE_DATA_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_FLOAT` |
| Hash | `0xDF504BECEB15DA93` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (float) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteDataFloat(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF504BECEB15DA93, p0, p1)
```


---

## _DATABINDING_WRITE_DATA_GANG_ID

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_GANG_ID` |
| Hash | `0xC70041408E16BE2D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `gangId` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`gangId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteDataGangId(p0, p1, gangId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC70041408E16BE2D, p0, p1, gangId)
```


---

## _DATABINDING_WRITE_DATA_HASH_STRING

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_HASH_STRING` |
| Hash | `0xACDEF586BD71B1FD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteDataHashString(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xACDEF586BD71B1FD, p0, p1)
```


---

## _DATABINDING_WRITE_DATA_HASH_STRING_FROM_PARENT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_HASH_STRING_FROM_PARENT` |
| Hash | `0x0971F04E1EAA7AE8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `p2` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`p2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteDataHashStringFromParent(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0971F04E1EAA7AE8, p0, p1, p2)
```


---

## _DATABINDING_WRITE_DATA_HASH_STRING_FROM_PARENT_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_HASH_STRING_FROM_PARENT_BY_HASH` |
| Hash | `0x20209529689E0953` |
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
DatabindingWriteDataHashStringFromParentByHash(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x20209529689E0953, p0, p1, p2)
```


---

## _DATABINDING_WRITE_DATA_INT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_INT` |
| Hash | `0x335C3F6B3766B8D9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteDataInt(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x335C3F6B3766B8D9, p0, p1)
```


---

## _DATABINDING_WRITE_DATA_INT_FROM_PARENT

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_INT_FROM_PARENT` |
| Hash | `0x9EFA98238BA08FC4` |
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
DatabindingWriteDataIntFromParent(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9EFA98238BA08FC4, p0, p1, p2)
```


---

## _DATABINDING_WRITE_DATA_INT_FROM_PARENT_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_INT_FROM_PARENT_BY_HASH` |
| Hash | `0x9D6E10A41D6ED6EC` |
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
DatabindingWriteDataIntFromParentByHash(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9D6E10A41D6ED6EC, p0, p1, p2)
```


---

## _DATABINDING_WRITE_DATA_POSSE_ID

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_POSSE_ID` |
| Hash | `0xC70041408E16BE2E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*), `posseId` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)
- **`posseId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteDataPosseId(p0, p1, posseId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC70041408E16BE2E, p0, p1, posseId)
```


---

## _DATABINDING_WRITE_DATA_SCRIPT_VARIABLES

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_SCRIPT_VARIABLES` |
| Hash | `0xAB888B4B91046771` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (int), `...` () |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`int`)
- **`...`** (``)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteDataScriptVariables(p0, p1, ...)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAB888B4B91046771, p0, p1, ...)
```


---

## _DATABINDING_WRITE_DATA_STRING

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_DATA_STRING` |
| Hash | `0xE1BD342F2872AEE9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteDataString(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE1BD342F2872AEE9, p0, p1)
```


---

## _DATABINDING_WRITE_STRING_FROM_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DATABINDING_WRITE_STRING_FROM_HASH` |
| Hash | `0xA3BD6FF95E713EE5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Hash), `p2` (const char*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)
- **`p2`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
DatabindingWriteStringFromHash(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA3BD6FF95E713EE5, p0, p1, p2)
```


---

## _VIRTUAL_COLLECTION_EXISTS

| Property | Value |
|----------|-------|
| Native Name | `_VIRTUAL_COLLECTION_EXISTS` |
| Hash | `0x37963B56755BFB35` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = VirtualCollectionExists(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x37963B56755BFB35, p0)
```


---

## _VIRTUAL_COLLECTION_ITEM_ADD

| Property | Value |
|----------|-------|
| Native Name | `_VIRTUAL_COLLECTION_ITEM_ADD` |
| Hash | `0x6DCBF187221CF73D` |
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
VirtualCollectionItemAdd(p0, index, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6DCBF187221CF73D, p0, index, p2, p3)
```


---

## _VIRTUAL_COLLECTION_RESET

| Property | Value |
|----------|-------|
| Native Name | `_VIRTUAL_COLLECTION_RESET` |
| Hash | `0x09D95666ED2B5F60` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
VirtualCollectionReset(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x09D95666ED2B5F60, p0)
```


---

## _VIRTUAL_COLLECTION_SET_INTEREST_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_VIRTUAL_COLLECTION_SET_INTEREST_INDEX` |
| Hash | `0x49A8447533308BCF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `interestIndex` (int) |

### Parameters

- **`p0`** (`Any`)
- **`interestIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
VirtualCollectionSetInterestIndex(p0, interestIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x49A8447533308BCF, p0, interestIndex)
```


---

## _VIRTUAL_COLLECTION_SET_SIZE

| Property | Value |
|----------|-------|
| Native Name | `_VIRTUAL_COLLECTION_SET_SIZE` |
| Hash | `0x9DCE9B01A93B58BC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `size` (int) |

### Parameters

- **`p0`** (`Any`)
- **`size`** (`int`)

### Usage

**Lua (Direct):**
```lua
VirtualCollectionSetSize(p0, size)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9DCE9B01A93B58BC, p0, size)
```


---

*End of DATABINDING natives part 2*
