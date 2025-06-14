# DATAFILE Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** DATAFILE  
**Natives in this file:** 50  
**Total natives in namespace:** 59  
**Generated from:** RDR3natives JSON data

---

## DATAARRAY_GET_BOOL

| Property | Value |
|----------|-------|
| Native Name | `DATAARRAY_GET_BOOL` |
| Hash | `0xAB1231D2DE52F2D3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `arrayData` (Any*), `arrayIndex` (int) |

### Parameters

- **`arrayData`** (`Any*`)
- **`arrayIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DataarrayGetBool(arrayData, arrayIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAB1231D2DE52F2D3, arrayData, arrayIndex)
```


---

## DATAARRAY_GET_COUNT

| Property | Value |
|----------|-------|
| Native Name | `DATAARRAY_GET_COUNT` |
| Hash | `0x6A885BF69239E539` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `arrayData` (Any*) |

### Parameters

- **`arrayData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = DataarrayGetCount(arrayData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6A885BF69239E539, arrayData)
```


---

## DATAARRAY_GET_DICT

| Property | Value |
|----------|-------|
| Native Name | `DATAARRAY_GET_DICT` |
| Hash | `0xA010655985853485` |
| Return Type | `Any*` |
| Build | `1207` |
| Parameters | `arrayData` (Any*), `arrayIndex` (int) |

### Parameters

- **`arrayData`** (`Any*`)
- **`arrayIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DataarrayGetDict(arrayData, arrayIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA010655985853485, arrayData, arrayIndex)
```


---

## DATAARRAY_GET_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `DATAARRAY_GET_FLOAT` |
| Hash | `0xA9D003CF419CB81E` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `arrayData` (Any*), `arrayIndex` (int) |

### Parameters

- **`arrayData`** (`Any*`)
- **`arrayIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DataarrayGetFloat(arrayData, arrayIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA9D003CF419CB81E, arrayData, arrayIndex)
```


---

## DATAARRAY_GET_INT

| Property | Value |
|----------|-------|
| Native Name | `DATAARRAY_GET_INT` |
| Hash | `0x96DEA500B6EBBE53` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `arrayData` (Any*), `arrayIndex` (int) |

### Parameters

- **`arrayData`** (`Any*`)
- **`arrayIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DataarrayGetInt(arrayData, arrayIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x96DEA500B6EBBE53, arrayData, arrayIndex)
```


---

## DATAARRAY_GET_STRING

| Property | Value |
|----------|-------|
| Native Name | `DATAARRAY_GET_STRING` |
| Hash | `0xB6790A8FF80F889F` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `arrayData` (Any*), `arrayIndex` (int) |

### Parameters

- **`arrayData`** (`Any*`)
- **`arrayIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DataarrayGetString(arrayData, arrayIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB6790A8FF80F889F, arrayData, arrayIndex)
```


---

## DATAARRAY_GET_TYPE

**Description:** Types:
1 = Boolean
2 = Integer
3 = Float
4 = String
5 = Vector3
6 = Object
7 = Array

| Property | Value |
|----------|-------|
| Native Name | `DATAARRAY_GET_TYPE` |
| Hash | `0x151DAFE6B3B9888F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `arrayData` (Any*), `arrayIndex` (int) |

### Parameters

- **`arrayData`** (`Any*`)
- **`arrayIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DataarrayGetType(arrayData, arrayIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x151DAFE6B3B9888F, arrayData, arrayIndex)
```


---

## DATAARRAY_GET_VECTOR

| Property | Value |
|----------|-------|
| Native Name | `DATAARRAY_GET_VECTOR` |
| Hash | `0x850DA2750DA14E9A` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `arrayData` (Any*), `arrayIndex` (int) |

### Parameters

- **`arrayData`** (`Any*`)
- **`arrayIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DataarrayGetVector(arrayData, arrayIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x850DA2750DA14E9A, arrayData, arrayIndex)
```


---

## DATADICT_GET_ARRAY

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_GET_ARRAY` |
| Hash | `0x1B5447CF18544B18` |
| Return Type | `Any*` |
| Build | `1207` |
| Parameters | `objectData` (Any*), `key` (const char*) |

### Parameters

- **`objectData`** (`Any*`)
- **`key`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatadictGetArray(objectData, key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1B5447CF18544B18, objectData, key)
```


---

## DATADICT_GET_BOOL

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_GET_BOOL` |
| Hash | `0x175E915A486EE548` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `objectData` (Any*), `key` (const char*) |

### Parameters

- **`objectData`** (`Any*`)
- **`key`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatadictGetBool(objectData, key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x175E915A486EE548, objectData, key)
```


---

## DATADICT_GET_DICT

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_GET_DICT` |
| Hash | `0x4D7A30130F46AC9C` |
| Return Type | `Any*` |
| Build | `1207` |
| Parameters | `objectData` (Any*), `key` (const char*) |

### Parameters

- **`objectData`** (`Any*`)
- **`key`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatadictGetDict(objectData, key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4D7A30130F46AC9C, objectData, key)
```


---

## DATADICT_GET_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_GET_FLOAT` |
| Hash | `0x814643ECA258ADF5` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `objectData` (Any*), `key` (const char*) |

### Parameters

- **`objectData`** (`Any*`)
- **`key`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatadictGetFloat(objectData, key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x814643ECA258ADF5, objectData, key)
```


---

## DATADICT_GET_INT

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_GET_INT` |
| Hash | `0x9D896A3B87D96E2B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `objectData` (Any*), `key` (const char*) |

### Parameters

- **`objectData`** (`Any*`)
- **`key`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatadictGetInt(objectData, key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9D896A3B87D96E2B, objectData, key)
```


---

## DATADICT_GET_STRING

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_GET_STRING` |
| Hash | `0xE37B38C0B4E95DFA` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `objectData` (Any*), `key` (const char*) |

### Parameters

- **`objectData`** (`Any*`)
- **`key`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatadictGetString(objectData, key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE37B38C0B4E95DFA, objectData, key)
```


---

## DATADICT_GET_TYPE

**Description:** Types:
1 = Boolean
2 = Integer
3 = Float
4 = String
5 = Vector3
6 = Object
7 = Array

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_GET_TYPE` |
| Hash | `0x92E11E3CA4C7CDF0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `objectData` (Any*), `key` (const char*) |

### Parameters

- **`objectData`** (`Any*`)
- **`key`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatadictGetType(objectData, key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x92E11E3CA4C7CDF0, objectData, key)
```


---

## DATADICT_GET_VECTOR

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_GET_VECTOR` |
| Hash | `0xE459C941431E0FFA` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `objectData` (Any*), `key` (const char*) |

### Parameters

- **`objectData`** (`Any*`)
- **`key`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DatadictGetVector(objectData, key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE459C941431E0FFA, objectData, key)
```


---

## DATADICT_IS_ARRAY_VALID

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_IS_ARRAY_VALID` |
| Hash | `0xB04B69CF277D15C0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `fileDict` (Any*) |

### Parameters

- **`fileDict`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = DatadictIsArrayValid(fileDict)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB04B69CF277D15C0, fileDict)
```


---

## DATADICT_IS_DICT_VALID

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_IS_DICT_VALID` |
| Hash | `0x4607D57C5F7D332A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `fileDict` (Any*) |

### Parameters

- **`fileDict`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = DatadictIsDictValid(fileDict)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4607D57C5F7D332A, fileDict)
```


---

## DATADICT_SET_INT

| Property | Value |
|----------|-------|
| Native Name | `DATADICT_SET_INT` |
| Hash | `0x26FDF5E99AA2F3E9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `objectData` (Any*), `key` (const char*), `value` (int) |

### Parameters

- **`objectData`** (`Any*`)
- **`key`** (`const char*`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
DatadictSetInt(objectData, key, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x26FDF5E99AA2F3E9, objectData, key, value)
```


---

## DATAFILE_CREATE

| Property | Value |
|----------|-------|
| Native Name | `DATAFILE_CREATE` |
| Hash | `0x56B7291FB953DD51` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
DatafileCreate(index)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x56B7291FB953DD51, index)
```


---

## DATAFILE_DELETE

| Property | Value |
|----------|-------|
| Native Name | `DATAFILE_DELETE` |
| Hash | `0x9FB90EEDEA9F2D5C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
DatafileDelete(index)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9FB90EEDEA9F2D5C, index)
```


---

## DATAFILE_DELETE_REQUESTED_FILE

| Property | Value |
|----------|-------|
| Native Name | `DATAFILE_DELETE_REQUESTED_FILE` |
| Hash | `0x604B8ED1A482F9DF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DatafileDeleteRequestedFile(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x604B8ED1A482F9DF, p0)
```


---

## DATAFILE_GET_FILE_DICT

| Property | Value |
|----------|-------|
| Native Name | `DATAFILE_GET_FILE_DICT` |
| Hash | `0xBBD8CF823CAE557C` |
| Return Type | `Any*` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DatafileGetFileDict(index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBBD8CF823CAE557C, index)
```


---

## DATAFILE_HAS_LOADED_FILE_DATA

| Property | Value |
|----------|-------|
| Native Name | `DATAFILE_HAS_LOADED_FILE_DATA` |
| Hash | `0x17279C820464CEE0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DatafileHasLoadedFileData(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x17279C820464CEE0, p0)
```


---

## DATAFILE_HAS_VALID_FILE_DATA

| Property | Value |
|----------|-------|
| Native Name | `DATAFILE_HAS_VALID_FILE_DATA` |
| Hash | `0xE60100389E50EADE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DatafileHasValidFileData(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE60100389E50EADE, p0)
```


---

## DATAFILE_SELECT_ACTIVE_FILE

| Property | Value |
|----------|-------|
| Native Name | `DATAFILE_SELECT_ACTIVE_FILE` |
| Hash | `0x46102A0989AD80B5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DatafileSelectActiveFile(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x46102A0989AD80B5, p0, p1)
```


---

## DATAFILE_UGC_SELECT_DATA

**Description:** Reloops value returned by UGC_QUERY_GET_CONTENT_NUM

| Property | Value |
|----------|-------|
| Native Name | `DATAFILE_UGC_SELECT_DATA` |
| Hash | `0x790EC421078F5C4E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ugcRequestId` (Any), `index` (int), `p2` (Any) |

### Parameters

- **`ugcRequestId`** (`Any`)
- **`index`** (`int`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DatafileUgcSelectData(ugcRequestId, index, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x790EC421078F5C4E, ugcRequestId, index, p2)
```


---

## DATAFILE_WATCH_REQUEST_ID

**Description:** Adds the given request ID to the watch list.

| Property | Value |
|----------|-------|
| Native Name | `DATAFILE_WATCH_REQUEST_ID` |
| Hash | `0xA5834834CA8FD7FC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `id` (int) |

### Parameters

- **`id`** (`int`)

### Usage

**Lua (Direct):**
```lua
DatafileWatchRequestId(id)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA5834834CA8FD7FC, id)
```


---

## PARSEDDATA_IS_FILE_LOADED

| Property | Value |
|----------|-------|
| Native Name | `PARSEDDATA_IS_FILE_LOADED` |
| Hash | `0x603AC35FD4602C76` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `fileHandle` (int) |

### Parameters

- **`fileHandle`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataIsFileLoaded(fileHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x603AC35FD4602C76, fileHandle)
```


---

## PARSEDDATA_IS_FILE_VALID

| Property | Value |
|----------|-------|
| Native Name | `PARSEDDATA_IS_FILE_VALID` |
| Hash | `0x7907969497EA92F5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `fileHandle` (int) |

### Parameters

- **`fileHandle`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataIsFileValid(fileHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7907969497EA92F5, fileHandle)
```


---

## PARSEDDATA_RQ_FILLOUT_HASH

**Description:** Old name: _DATAFILE_GET_HASH

| Property | Value |
|----------|-------|
| Native Name | `PARSEDDATA_RQ_FILLOUT_HASH` |
| Hash | `0xFBFF3FF2F5E80C0B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Hash*), `p1` (Any*) |

### Parameters

- **`p0`** (`Hash*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataRqFilloutHash(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFBFF3FF2F5E80C0B, p0, p1)
```


---

## PARSEDDATA_RQ_FILLOUT_NODE

**Description:** Old name: _DATAFILE_GET_DATA_NODE_INDEX

| Property | Value |
|----------|-------|
| Native Name | `PARSEDDATA_RQ_FILLOUT_NODE` |
| Hash | `0x83C3ED532B6E5D07` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int*), `p1` (Any*) |

### Parameters

- **`p0`** (`int*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataRqFilloutNode(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x83C3ED532B6E5D07, p0, p1)
```


---

## PARSEDDATA_RQ_FILLOUT_STRING_127

| Property | Value |
|----------|-------|
| Native Name | `PARSEDDATA_RQ_FILLOUT_STRING_127` |
| Hash | `0x951327435DC5164B` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `p0` (char*), `p1` (Any*) |

### Parameters

- **`p0`** (`char*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataRqFilloutString127(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x951327435DC5164B, p0, p1)
```


---

## UGC2_SET_PLAYER_DATA

| Property | Value |
|----------|-------|
| Native Name | `UGC2_SET_PLAYER_DATA` |
| Hash | `0xE79C70E77E0973C7` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = Ugc2SetPlayerData(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE79C70E77E0973C7, p0, p1, p2, p3)
```


---

## _0x1C65CC931C0F946F

| Property | Value |
|----------|-------|
| Native Name | `_0x1C65CC931C0F946F` |
| Hash | `0x1C65CC931C0F946F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1C65CC931C0F946F(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1C65CC931C0F946F, p0, p1, p2)
```


---

## _0x277251C161B4C3F4

| Property | Value |
|----------|-------|
| Native Name | `_0x277251C161B4C3F4` |
| Hash | `0x277251C161B4C3F4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x277251C161B4C3F4(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x277251C161B4C3F4, p0, p1, p2)
```


---

## _0x3168BA5D6DECE323

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_0x3168BA5D6DECE323` |
| Hash | `0x3168BA5D6DECE323` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x3168BA5D6DECE323()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3168BA5D6DECE323, )
```


---

## _0x4F9E3ED7617123AC

| Property | Value |
|----------|-------|
| Native Name | `_0x4F9E3ED7617123AC` |
| Hash | `0x4F9E3ED7617123AC` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x4F9E3ED7617123AC(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4F9E3ED7617123AC, p0)
```


---

## _0x7681B677400C7071

| Property | Value |
|----------|-------|
| Native Name | `_0x7681B677400C7071` |
| Hash | `0x7681B677400C7071` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x7681B677400C7071(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7681B677400C7071, p0, p1, p2, p3, p4)
```


---

## _0x9F130129EBC31B34

| Property | Value |
|----------|-------|
| Native Name | `_0x9F130129EBC31B34` |
| Hash | `0x9F130129EBC31B34` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9F130129EBC31B34(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9F130129EBC31B34, p0, p1, p2)
```


---

## _0xBC0DF006A4952C68

| Property | Value |
|----------|-------|
| Native Name | `_0xBC0DF006A4952C68` |
| Hash | `0xBC0DF006A4952C68` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xBC0DF006A4952C68(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC0DF006A4952C68, p0, p1, p2)
```


---

## _0xCA56DD6AB7A39F64

| Property | Value |
|----------|-------|
| Native Name | `_0xCA56DD6AB7A39F64` |
| Hash | `0xCA56DD6AB7A39F64` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xCA56DD6AB7A39F64(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCA56DD6AB7A39F64, p0)
```


---

## _0xE13634BB6BAF0734

| Property | Value |
|----------|-------|
| Native Name | `_0xE13634BB6BAF0734` |
| Hash | `0xE13634BB6BAF0734` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (int) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xE13634BB6BAF0734(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE13634BB6BAF0734, p0, p1)
```


---

## _PARSEDDATA_GET_BOOL

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_GET_BOOL` |
| Hash | `0xA63CD20F19B961AB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (BOOL*), `p1` (Any*), `p2` (Hash) |

### Parameters

- **`p0`** (`BOOL*`)
- **`p1`** (`Any*`)
- **`p2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataGetBool(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA63CD20F19B961AB, p0, p1, p2)
```


---

## _PARSEDDATA_GET_ENTRIES

**Description:** Returns false when there are no entries.

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_GET_ENTRIES` |
| Hash | `0xED4413CEE1BF142C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataGetEntries(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xED4413CEE1BF142C, p0)
```


---

## _PARSEDDATA_GET_FILE

**Description:** Opens file.

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_GET_FILE` |
| Hash | `0x91DED5DD64BB2691` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
ParseddataGetFile(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x91DED5DD64BB2691, p0)
```


---

## _PARSEDDATA_GET_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_GET_FLOAT` |
| Hash | `0xB2B42607F7867576` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (Hash) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataGetFloat(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB2B42607F7867576, p0, p1, p2)
```


---

## _PARSEDDATA_GET_INT

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_GET_INT` |
| Hash | `0x52FC26D2D2FC2987` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (Hash) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataGetInt(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x52FC26D2D2FC2987, p0, p1, p2)
```


---

## _PARSEDDATA_GET_NUM_CHILDREN

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_GET_NUM_CHILDREN` |
| Hash | `0x6BEB168D5195E7AB` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataGetNumChildren(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6BEB168D5195E7AB, p0, p1)
```


---

## _PARSEDDATA_GET_SECTION

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_GET_SECTION` |
| Hash | `0x44B3A36933AC009C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `section` (Hash) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`section`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataGetSection(p0, p1, section)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x44B3A36933AC009C, p0, p1, section)
```


---

*End of DATAFILE natives part 1*
