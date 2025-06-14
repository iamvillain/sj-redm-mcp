# TXD Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TXD  
**Natives in this file:** 8  
**Generated from:** RDR3natives JSON data

---

## DOES_STREAMED_TEXTURE_DICT_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_STREAMED_TEXTURE_DICT_EXIST` |
| Hash | `0x7332461FC59EB7EC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `textureDict` (char*) |

### Parameters

- **`textureDict`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = DoesStreamedTextureDictExist(textureDict)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7332461FC59EB7EC, textureDict)
```


---

## DOES_STREAMED_TXD_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_STREAMED_TXD_EXIST` |
| Hash | `0xBA0163B277C2D2D0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `txdHash` (Hash) |

### Parameters

- **`txdHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DoesStreamedTxdExist(txdHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBA0163B277C2D2D0, txdHash)
```


---

## HAS_STREAMED_TEXTURE_DICT_LOADED

| Property | Value |
|----------|-------|
| Native Name | `HAS_STREAMED_TEXTURE_DICT_LOADED` |
| Hash | `0x54D6900929CCF162` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `textureDict` (char*) |

### Parameters

- **`textureDict`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = HasStreamedTextureDictLoaded(textureDict)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x54D6900929CCF162, textureDict)
```


---

## HAS_STREAMED_TXD_LOADED

| Property | Value |
|----------|-------|
| Native Name | `HAS_STREAMED_TXD_LOADED` |
| Hash | `0xBE72591D1509FFE4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `txdHash` (Hash) |

### Parameters

- **`txdHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasStreamedTxdLoaded(txdHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBE72591D1509FFE4, txdHash)
```


---

## REQUEST_STREAMED_TEXTURE_DICT

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_STREAMED_TEXTURE_DICT` |
| Hash | `0xC1BA29DF5631B0F8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureDict` (char*), `p1` (BOOL) |

### Parameters

- **`textureDict`** (`char*`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RequestStreamedTextureDict(textureDict, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC1BA29DF5631B0F8, textureDict, p1)
```


---

## REQUEST_STREAMED_TXD

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_STREAMED_TXD` |
| Hash | `0xDB1BD07FB464584D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `txdHash` (Hash), `p1` (BOOL) |

### Parameters

- **`txdHash`** (`Hash`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RequestStreamedTxd(txdHash, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDB1BD07FB464584D, txdHash, p1)
```


---

## SET_STREAMED_TEXTURE_DICT_AS_NO_LONGER_NEEDED

| Property | Value |
|----------|-------|
| Native Name | `SET_STREAMED_TEXTURE_DICT_AS_NO_LONGER_NEEDED` |
| Hash | `0x4ACA10A91F66F1E2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureDict` (char*) |

### Parameters

- **`textureDict`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetStreamedTextureDictAsNoLongerNeeded(textureDict)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4ACA10A91F66F1E2, textureDict)
```


---

## SET_STREAMED_TXD_AS_NO_LONGER_NEEDED

| Property | Value |
|----------|-------|
| Native Name | `SET_STREAMED_TXD_AS_NO_LONGER_NEEDED` |
| Hash | `0x8232F37DF762ACB2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `txdHash` (Hash) |

### Parameters

- **`txdHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetStreamedTxdAsNoLongerNeeded(txdHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8232F37DF762ACB2, txdHash)
```


---

*End of TXD natives*
