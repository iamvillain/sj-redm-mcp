# NETWORK Natives - Part 12 of 12

Red Dead Redemption 3 Native Functions Reference

**Namespace:** NETWORK  
**Natives in this file:** 16  
**Total natives in namespace:** 566  
**Generated from:** RDR3natives JSON data

---

## _UGC_QUERY_BY_CONTENT_TYPE

**Description:** Returns ugcRequestId

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_BY_CONTENT_TYPE` |
| Hash | `0xF40EF49B3099E98E` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (int), `maxGet` (int), `contentTypeName` (const char*), `p3` (int), `p4` (int), `p5` (int) |

### Parameters

- **`p0`** (`int`)
- **`maxGet`** (`int`)
- **`contentTypeName`** (`const char*`)
- **`p3`** (`int`)
- **`p4`** (`int`)
- **`p5`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryByContentType(p0, maxGet, contentTypeName, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF40EF49B3099E98E, p0, maxGet, contentTypeName, p3, p4, p5)
```


---

## _UGC_QUERY_GET_BOOK_MARKED

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_BOOK_MARKED` |
| Hash | `0x98539FC453AEA639` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetBookMarked(p0, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x98539FC453AEA639, p0, index)
```


---

## _UGC_QUERY_GET_CREATOR_HANDLE

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_CREATOR_HANDLE` |
| Hash | `0xADB56322EEDFBDC9` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int), `gamerHandle` (Any*) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)
- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetCreatorHandle(p0, index, gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xADB56322EEDFBDC9, p0, index, gamerHandle)
```


---

## _UGC_QUERY_GET_CREATOR_PHOTO

**Description:** Returns string for GET_STATUS_OF_LOAD_MISSION_CREATOR_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_CREATOR_PHOTO` |
| Hash | `0x409FE0CA6A4D1D49` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (int), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`int`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetCreatorPhoto(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x409FE0CA6A4D1D49, p0, p1, p2)
```


---

## _UGC_QUERY_GET_DATE

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_DATE` |
| Hash | `0xE0CB4AB15CB32710` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int), `p2` (Any*) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)
- **`p2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
UgcQueryGetDate(p0, index, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0CB4AB15CB32710, p0, index, p2)
```


---

## _UGC_QUERY_GET_LANGUAGE

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_LANGUAGE` |
| Hash | `0x97764E8AC6487A9A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetLanguage(p0, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x97764E8AC6487A9A, p0, index)
```


---

## _UGC_QUERY_GET_MISSION_DESC_HASH

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_MISSION_DESC_HASH` |
| Hash | `0xA6BF569956C60A60` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetMissionDescHash(p0, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA6BF569956C60A60, p0, index)
```


---

## _UGC_QUERY_GET_NAME

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_NAME` |
| Hash | `0x2D053EA815702DD1` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetName(p0, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2D053EA815702DD1, p0, index)
```


---

## _UGC_QUERY_GET_OWNER_ID

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_OWNER_ID` |
| Hash | `0xF9F0B3028431967B` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetOwnerId(p0, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF9F0B3028431967B, p0, index)
```


---

## _UGC_QUERY_GET_PLAYLIST_NAME

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_PLAYLIST_NAME` |
| Hash | `0xCAF50048C8D0FBA0` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetPlaylistName(p0, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCAF50048C8D0FBA0, p0, index)
```


---

## _UGC_QUERY_GET_POSIX_PUBLISHED_DATE

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_POSIX_PUBLISHED_DATE` |
| Hash | `0x104080CA9E519B00` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetPosixPublishedDate(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x104080CA9E519B00, p0, p1)
```


---

## _UGC_QUERY_GET_POSIX_UPDATED_DATE

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_POSIX_UPDATED_DATE` |
| Hash | `0x21A99A72B00D8002` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetPosixUpdatedDate(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x21A99A72B00D8002, p0, p1)
```


---

## _UGC_QUERY_GET_PUBLISHED

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_PUBLISHED` |
| Hash | `0x9993F1E11944A3DD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetPublished(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9993F1E11944A3DD, p0, p1)
```


---

## _UGC_QUERY_GET_RATING

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_RATING` |
| Hash | `0x24CD8FAEA1368379` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int), `p2` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetRating(p0, index, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x24CD8FAEA1368379, p0, index, p2)
```


---

## _UGC_QUERY_GET_ROOT_CONTENT_ID

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_ROOT_CONTENT_ID` |
| Hash | `0x566CEB0542EF5ECF` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetRootContentId(p0, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x566CEB0542EF5ECF, p0, index)
```


---

## _UGC_QUERY_GET_VERSION

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_GET_VERSION` |
| Hash | `0x63E9DCBC8B0931ED` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int), `p2` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetVersion(p0, index, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x63E9DCBC8B0931ED, p0, index, p2)
```


---

*End of NETWORK natives part 12*
