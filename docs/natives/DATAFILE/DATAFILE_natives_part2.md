# DATAFILE Natives - Part 2 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** DATAFILE  
**Natives in this file:** 9  
**Total natives in namespace:** 59  
**Generated from:** RDR3natives JSON data

---

## _PARSEDDATA_LOAD_FILE_HASH

**Description:** LOAD_PARSEDDATA_FILE_FAILSAFE_HASH
Returns parseddata script fileHandle

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_LOAD_FILE_HASH` |
| Hash | `0xD97D8D905F1562F2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataLoadFileHash(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD97D8D905F1562F2, p0)
```


---

## _PARSEDDATA_REGISTER_QUERY

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_REGISTER_QUERY` |
| Hash | `0xAE156A747C39A741` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataRegisterQuery(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAE156A747C39A741, p0, p1, p2)
```


---

## _PARSEDDATA_RQ_FILLOUT_BOOL

**Description:** Old name: _DATAFILE_GET_BOOL

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_RQ_FILLOUT_BOOL` |
| Hash | `0x0D9138F3F8261DF7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (BOOL*), `p1` (Any*) |

### Parameters

- **`p0`** (`BOOL*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataRqFilloutBool(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0D9138F3F8261DF7, p0, p1)
```


---

## _PARSEDDATA_RQ_FILLOUT_FLOAT

**Description:** Old name: _DATAFILE_GET_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_RQ_FILLOUT_FLOAT` |
| Hash | `0x7F034FC3E891B57A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float*), `p1` (Any*) |

### Parameters

- **`p0`** (`float*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataRqFilloutFloat(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7F034FC3E891B57A, p0, p1)
```


---

## _PARSEDDATA_RQ_FILLOUT_INT

**Description:** Old name: _DATAFILE_GET_INT

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_RQ_FILLOUT_INT` |
| Hash | `0xEF44ACC657352A35` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int*), `p1` (Any*) |

### Parameters

- **`p0`** (`int*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataRqFilloutInt(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEF44ACC657352A35, p0, p1)
```


---

## _PARSEDDATA_RQ_FILLOUT_STRING_63

**Description:** Old name: _DATAFILE_GET_STRING

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_RQ_FILLOUT_STRING_63` |
| Hash | `0x08EAF8E9F2EB7B2E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (char*), `p1` (Any*) |

### Parameters

- **`p0`** (`char*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataRqFilloutString63(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x08EAF8E9F2EB7B2E, p0, p1)
```


---

## _PARSEDDATA_RQ_FILLOUT_VECTOR

**Description:** Old name: _DATAFILE_GET_VECTOR

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_RQ_FILLOUT_VECTOR` |
| Hash | `0x06FBF89B12DA279C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Vector3*), `p1` (Any*) |

### Parameters

- **`p0`** (`Vector3*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataRqFilloutVector(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x06FBF89B12DA279C, p0, p1)
```


---

## _PARSEDDATA_RQ_GET_NUM_NODES

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_RQ_GET_NUM_NODES` |
| Hash | `0xDF01B1F7A886B42D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = ParseddataRqGetNumNodes(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF01B1F7A886B42D, p0)
```


---

## _PARSEDDATA_UNLOAD_FILE

| Property | Value |
|----------|-------|
| Native Name | `_PARSEDDATA_UNLOAD_FILE` |
| Hash | `0x129567F0C05F81B9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `fileHandle` (int) |

### Parameters

- **`fileHandle`** (`int`)

### Usage

**Lua (Direct):**
```lua
ParseddataUnloadFile(fileHandle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x129567F0C05F81B9, fileHandle)
```


---

*End of DATAFILE natives part 2*
