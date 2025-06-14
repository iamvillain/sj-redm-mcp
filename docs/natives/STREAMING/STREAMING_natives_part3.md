# STREAMING Natives - Part 3 of 3

Red Dead Redemption 3 Native Functions Reference

**Namespace:** STREAMING  
**Natives in this file:** 15  
**Total natives in namespace:** 115  
**Generated from:** RDR3natives JSON data

---

## _0xDEEE1F265B7ECEF5

| Property | Value |
|----------|-------|
| Native Name | `_0xDEEE1F265B7ECEF5` |
| Hash | `0xDEEE1F265B7ECEF5` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xDEEE1F265B7ECEF5()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDEEE1F265B7ECEF5, )
```


---

## _0xE5B76E5B56CD77DD

| Property | Value |
|----------|-------|
| Native Name | `_0xE5B76E5B56CD77DD` |
| Hash | `0xE5B76E5B56CD77DD` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0xE5B76E5B56CD77DD()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE5B76E5B56CD77DD, )
```


---

## _0xEF1A8A484118735E

| Property | Value |
|----------|-------|
| Native Name | `_0xEF1A8A484118735E` |
| Hash | `0xEF1A8A484118735E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xEF1A8A484118735E()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEF1A8A484118735E, )
```


---

## _0xF01D21DF39554115

| Property | Value |
|----------|-------|
| Native Name | `_0xF01D21DF39554115` |
| Hash | `0xF01D21DF39554115` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xF01D21DF39554115(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF01D21DF39554115, p0)
```


---

## _0xF11D7CB962FCD747

| Property | Value |
|----------|-------|
| Native Name | `_0xF11D7CB962FCD747` |
| Hash | `0xF11D7CB962FCD747` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xF11D7CB962FCD747(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF11D7CB962FCD747, p0)
```


---

## _GET_IPL_BOUNDING_SPHERE

**Description:** Outputs IPL position and radius (previously wrongly named heading)
https://github.com/femga/rdr3_discoveries/blob/master/imaps/imaps_with_coords_and_heading.lua

| Property | Value |
|----------|-------|
| Native Name | `_GET_IPL_BOUNDING_SPHERE` |
| Hash | `0x9C77964B0E07B633` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `iplHash` (Hash), `position` (Vector3*), `radius` (float*) |

### Parameters

- **`iplHash`** (`Hash`)
- **`position`** (`Vector3*`)
- **`radius`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = GetIplBoundingSphere(iplHash, position, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9C77964B0E07B633, iplHash, position, radius)
```


---

## _HAS_COLLISION_LOADED_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `_HAS_COLLISION_LOADED_AT_COORD` |
| Hash | `0xDA8B2EAF29E872E2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = HasCollisionLoadedAtCoord(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDA8B2EAF29E872E2, x, y, z)
```


---

## _HAS_SCENARIO_TYPE_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_HAS_SCENARIO_TYPE_LOADED` |
| Hash | `0x9427C94D2E4094A4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scenarioType` (Hash), `p1` (BOOL) |

### Parameters

- **`scenarioType`** (`Hash`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = HasScenarioTypeLoaded(scenarioType, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9427C94D2E4094A4, scenarioType, p1)
```


---

## _IS_MODEL_AN_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `_IS_MODEL_AN_OBJECT` |
| Hash | `0x274EE1B90CFA669E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsModelAnObject(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x274EE1B90CFA669E, model)
```


---

## _IS_POSITION_INSIDE_IPL_STREAMING_EXTENTS

**Description:** Returns true if IPL is streamed in (?)

| Property | Value |
|----------|-------|
| Native Name | `_IS_POSITION_INSIDE_IPL_STREAMING_EXTENTS` |
| Hash | `0x73B40D97D7BAAD77` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `iplHash` (Hash), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`iplHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsPositionInsideIplStreamingExtents(iplHash, x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x73B40D97D7BAAD77, iplHash, x, y, z)
```


---

## _REMOVE_SCENARIO_ASSET

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_SCENARIO_ASSET` |
| Hash | `0x4EDDD9E9CA5AF985` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `scenarioType` (Hash) |

### Parameters

- **`scenarioType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = RemoveScenarioAsset(scenarioType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4EDDD9E9CA5AF985, scenarioType)
```


---

## _REQUEST_CLIP_SET_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_CLIP_SET_BY_HASH` |
| Hash | `0xAC37644A538F7524` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `clipSetHash` (Hash) |

### Parameters

- **`clipSetHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RequestClipSetByHash(clipSetHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAC37644A538F7524, clipSetHash)
```


---

## _REQUEST_METADATA_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_METADATA_AT_COORD` |
| Hash | `0xA8432A14D4DC2101` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
RequestMetadataAtCoord(x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA8432A14D4DC2101, x, y, z)
```


---

## _REQUEST_SCENARIO_TYPE

**Description:** p1 seems to be some kind of flag? p2 can be 0 or entity model accepts hash joaat("a_c_bear_01") or with GetEntityModel(entity) p3 can be 0 or pass the conditional anim or using _GET_ACTIVE_DYNAMIC_SCENARIO

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_SCENARIO_TYPE` |
| Hash | `0x19A6BE7D9C6884D3` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `scenarioType` (Hash), `p1` (int), `entityModel` (Hash), `conditionalAnim` (Hash) |

### Parameters

- **`scenarioType`** (`Hash`)
- **`p1`** (`int`)
- **`entityModel`** (`Hash`)
- **`conditionalAnim`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = RequestScenarioType(scenarioType, p1, entityModel, conditionalAnim)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x19A6BE7D9C6884D3, scenarioType, p1, entityModel, conditionalAnim)
```


---

## _SET_GUARMA_WORLDHORIZON_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_SET_GUARMA_WORLDHORIZON_ACTIVE` |
| Hash | `0x74E2261D2A66849A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetGuarmaWorldhorizonActive(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74E2261D2A66849A, toggle)
```


---

*End of STREAMING natives part 3*
