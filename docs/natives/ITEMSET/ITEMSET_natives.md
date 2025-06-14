# ITEMSET Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ITEMSET  
**Natives in this file:** 11  
**Generated from:** RDR3natives JSON data

---

## ADD_TO_ITEMSET

| Property | Value |
|----------|-------|
| Native Name | `ADD_TO_ITEMSET` |
| Hash | `0xABE74510883C7950` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `itemset` (ItemSet) |

### Parameters

- **`entity`** (`Entity`)
- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
local result = AddToItemset(entity, itemset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xABE74510883C7950, entity, itemset)
```


---

## CLEAN_ITEMSET

| Property | Value |
|----------|-------|
| Native Name | `CLEAN_ITEMSET` |
| Hash | `0x85F3A86CA9021FB0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `itemset` (ItemSet) |

### Parameters

- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
CleanItemset(itemset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x85F3A86CA9021FB0, itemset)
```


---

## CREATE_ITEMSET

| Property | Value |
|----------|-------|
| Native Name | `CREATE_ITEMSET` |
| Hash | `0xA1AF16083320065A` |
| Return Type | `ItemSet` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateItemset(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA1AF16083320065A, p0)
```


---

## DESTROY_ITEMSET

| Property | Value |
|----------|-------|
| Native Name | `DESTROY_ITEMSET` |
| Hash | `0x712BC69F10549B92` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `itemset` (ItemSet) |

### Parameters

- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
DestroyItemset(itemset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x712BC69F10549B92, itemset)
```


---

## GET_INDEXED_ITEM_IN_ITEMSET

| Property | Value |
|----------|-------|
| Native Name | `GET_INDEXED_ITEM_IN_ITEMSET` |
| Hash | `0x275A2E2C0FAB7612` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `index` (int), `itemset` (ItemSet) |

### Parameters

- **`index`** (`int`)
- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
local result = GetIndexedItemInItemset(index, itemset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x275A2E2C0FAB7612, index, itemset)
```


---

## GET_INDEXED_SCENARIO_POINT_INDEX_IN_ITEMSET

| Property | Value |
|----------|-------|
| Native Name | `GET_INDEXED_SCENARIO_POINT_INDEX_IN_ITEMSET` |
| Hash | `0x9FC3CDB5CE815901` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `index` (int), `itemset` (ItemSet) |

### Parameters

- **`index`** (`int`)
- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
local result = GetIndexedScenarioPointIndexInItemset(index, itemset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9FC3CDB5CE815901, index, itemset)
```


---

## GET_ITEMSET_SIZE

| Property | Value |
|----------|-------|
| Native Name | `GET_ITEMSET_SIZE` |
| Hash | `0x55F2E375AC6018A9` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `itemset` (ItemSet) |

### Parameters

- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
local result = GetItemsetSize(itemset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x55F2E375AC6018A9, itemset)
```


---

## IS_IN_ITEMSET

| Property | Value |
|----------|-------|
| Native Name | `IS_IN_ITEMSET` |
| Hash | `0xD1503C2EE2FE688C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `itemset` (ItemSet) |

### Parameters

- **`entity`** (`Entity`)
- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
local result = IsInItemset(entity, itemset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD1503C2EE2FE688C, entity, itemset)
```


---

## IS_ITEMSET_VALID

| Property | Value |
|----------|-------|
| Native Name | `IS_ITEMSET_VALID` |
| Hash | `0xD30765D153EF5C76` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `itemset` (ItemSet) |

### Parameters

- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
local result = IsItemsetValid(itemset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD30765D153EF5C76, itemset)
```


---

## REMOVE_FROM_ITEMSET

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_FROM_ITEMSET` |
| Hash | `0xC5BAA432B429DC24` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `itemset` (ItemSet) |

### Parameters

- **`entity`** (`Entity`)
- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
RemoveFromItemset(entity, itemset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC5BAA432B429DC24, entity, itemset)
```


---

## _CLEAR_ITEMSET

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_ITEMSET` |
| Hash | `0x20A4BF0E09BEE146` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `itemset` (ItemSet) |

### Parameters

- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
ClearItemset(itemset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x20A4BF0E09BEE146, itemset)
```


---

*End of ITEMSET natives*
