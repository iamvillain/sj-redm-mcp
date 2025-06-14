# STREAMING Natives - Part 2 of 3

Red Dead Redemption 3 Native Functions Reference

**Namespace:** STREAMING  
**Natives in this file:** 50  
**Total natives in namespace:** 115  
**Generated from:** RDR3natives JSON data

---

## REQUEST_MOVE_NETWORK_DEF

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_MOVE_NETWORK_DEF` |
| Hash | `0x2B6529C54D29037A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (char*) |

### Parameters

- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RequestMoveNetworkDef(name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2B6529C54D29037A, name)
```


---

## REQUEST_NAMED_PTFX_ASSET

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_NAMED_PTFX_ASSET` |
| Hash | `0xF2B2353BBC0D4E8F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `fxNameHash` (Hash) |

### Parameters

- **`fxNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RequestNamedPtfxAsset(fxNameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF2B2353BBC0D4E8F, fxNameHash)
```


---

## REQUEST_PTFX_ASSET

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_PTFX_ASSET` |
| Hash | `0x001FF43843028E0C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
RequestPtfxAsset()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x001FF43843028E0C, )
```


---

## SET_ALL_MAPDATA_CULLED

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `SET_ALL_MAPDATA_CULLED` |
| Hash | `0x19ABCC581D28E6F9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetAllMapdataCulled(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x19ABCC581D28E6F9, p0)
```


---

## SET_FOCUS_ENTITY

**Description:** It seems to make the entity's coords mark the point from which LOD-distances are measured. In my testing, setting a vehicle as the focus entity and moving that vehicle more than 300 distance units away from the player will make the level of detail around the player go down drastically (shadows disappear, textures go extremely low res, etc). The player seems to be the default focus entity.

| Property | Value |
|----------|-------|
| Native Name | `SET_FOCUS_ENTITY` |
| Hash | `0x955AEDD58F4BD309` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
SetFocusEntity(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x955AEDD58F4BD309, entity)
```


---

## SET_FOCUS_POS_AND_VEL

| Property | Value |
|----------|-------|
| Native Name | `SET_FOCUS_POS_AND_VEL` |
| Hash | `0x25F6EF88664540E2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `offsetX` (float), `offsetY` (float), `offsetZ` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetFocusPosAndVel(x, y, z, offsetX, offsetY, offsetZ)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x25F6EF88664540E2, x, y, z, offsetX, offsetY, offsetZ)
```


---

## SET_GAME_PAUSES_FOR_STREAMING

| Property | Value |
|----------|-------|
| Native Name | `SET_GAME_PAUSES_FOR_STREAMING` |
| Hash | `0xB3BC8250F4FE8B63` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetGamePausesForStreaming(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB3BC8250F4FE8B63, toggle)
```


---

## SET_HD_AREA

| Property | Value |
|----------|-------|
| Native Name | `SET_HD_AREA` |
| Hash | `0xB88B905AFA35CB4D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetHdArea(x, y, z, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB88B905AFA35CB4D, x, y, z, radius)
```


---

## SET_MAPDATACULLBOX_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `SET_MAPDATACULLBOX_ENABLED` |
| Hash | `0x3CACC83F6FED837C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (char*), `toggle` (BOOL) |

### Parameters

- **`name`** (`char*`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetMapdatacullboxEnabled(name, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3CACC83F6FED837C, name, toggle)
```


---

## SET_MODEL_AS_NO_LONGER_NEEDED

**Description:** Marks the model as no longer needed.

| Property | Value |
|----------|-------|
| Native Name | `SET_MODEL_AS_NO_LONGER_NEEDED` |
| Hash | `0x4AD96EF928BD4F9A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetModelAsNoLongerNeeded(model)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4AD96EF928BD4F9A, model)
```


---

## SET_POPULATION_BUDGET_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `SET_POPULATION_BUDGET_MULTIPLIER` |
| Hash | `0x2F9AC754FE179D58` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `fBudgetMultiplier` (float) |

### Parameters

- **`fBudgetMultiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPopulationBudgetMultiplier(fBudgetMultiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2F9AC754FE179D58, fBudgetMultiplier)
```


---

## SET_SCENE_STREAMING_TRACKS_CAM_POS_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_SCENE_STREAMING_TRACKS_CAM_POS_THIS_FRAME` |
| Hash | `0xA03A6812529AD9C8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetSceneStreamingTracksCamPosThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA03A6812529AD9C8, )
```


---

## SET_SRL_LONG_JUMP_MODE

| Property | Value |
|----------|-------|
| Native Name | `SET_SRL_LONG_JUMP_MODE` |
| Hash | `0x7C907E8A725E5FD2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetSrlLongJumpMode(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C907E8A725E5FD2, p0)
```


---

## SET_SRL_READAHEAD_TIMES

| Property | Value |
|----------|-------|
| Native Name | `SET_SRL_READAHEAD_TIMES` |
| Hash | `0xD346248C1DCE0D76` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (int), `p2` (int), `p3` (int) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`int`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetSrlReadaheadTimes(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD346248C1DCE0D76, p0, p1, p2, p3)
```


---

## SET_SRL_TIME

| Property | Value |
|----------|-------|
| Native Name | `SET_SRL_TIME` |
| Hash | `0x18231AEF458BCFF2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetSrlTime(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x18231AEF458BCFF2, p0)
```


---

## _0x032A14D082A9B269

**Description:** _SET_E* or _SET_F*

| Property | Value |
|----------|-------|
| Native Name | `_0x032A14D082A9B269` |
| Hash | `0x032A14D082A9B269` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x032A14D082A9B269(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x032A14D082A9B269, p0)
```


---

## _0x03DDBF2D73799F9E

| Property | Value |
|----------|-------|
| Native Name | `_0x03DDBF2D73799F9E` |
| Hash | `0x03DDBF2D73799F9E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x03DDBF2D73799F9E(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x03DDBF2D73799F9E, p0)
```


---

## _0x05DD384F39DE1C8C

| Property | Value |
|----------|-------|
| Native Name | `_0x05DD384F39DE1C8C` |
| Hash | `0x05DD384F39DE1C8C` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x05DD384F39DE1C8C(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x05DD384F39DE1C8C, p0, p1)
```


---

## _0x071769BCB24379E5

| Property | Value |
|----------|-------|
| Native Name | `_0x071769BCB24379E5` |
| Hash | `0x071769BCB24379E5` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x071769BCB24379E5()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x071769BCB24379E5, )
```


---

## _0x07559B29950301FF

| Property | Value |
|----------|-------|
| Native Name | `_0x07559B29950301FF` |
| Hash | `0x07559B29950301FF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x07559B29950301FF(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x07559B29950301FF, p0, p1)
```


---

## _0x09FBF15D73EFC900

| Property | Value |
|----------|-------|
| Native Name | `_0x09FBF15D73EFC900` |
| Hash | `0x09FBF15D73EFC900` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x09FBF15D73EFC900()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x09FBF15D73EFC900, )
```


---

## _0x198B85CC3C7A4593

| Property | Value |
|----------|-------|
| Native Name | `_0x198B85CC3C7A4593` |
| Hash | `0x198B85CC3C7A4593` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x198B85CC3C7A4593(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x198B85CC3C7A4593, p0, p1)
```


---

## _0x27AF48C62B281341

| Property | Value |
|----------|-------|
| Native Name | `_0x27AF48C62B281341` |
| Hash | `0x27AF48C62B281341` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x27AF48C62B281341()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x27AF48C62B281341, )
```


---

## _0x2A6D1DAAB9EBB262

| Property | Value |
|----------|-------|
| Native Name | `_0x2A6D1DAAB9EBB262` |
| Hash | `0x2A6D1DAAB9EBB262` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x2A6D1DAAB9EBB262(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2A6D1DAAB9EBB262, p0)
```


---

## _0x2E24C27B112B5B12

| Property | Value |
|----------|-------|
| Native Name | `_0x2E24C27B112B5B12` |
| Hash | `0x2E24C27B112B5B12` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2E24C27B112B5B12(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E24C27B112B5B12, p0)
```


---

## _0x2F4D53023F826FF0

| Property | Value |
|----------|-------|
| Native Name | `_0x2F4D53023F826FF0` |
| Hash | `0x2F4D53023F826FF0` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x2F4D53023F826FF0()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2F4D53023F826FF0, )
```


---

## _0x5288B7F0690F7C1F

| Property | Value |
|----------|-------|
| Native Name | `_0x5288B7F0690F7C1F` |
| Hash | `0x5288B7F0690F7C1F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x5288B7F0690F7C1F(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5288B7F0690F7C1F, p0)
```


---

## _0x53764309C4618087

| Property | Value |
|----------|-------|
| Native Name | `_0x53764309C4618087` |
| Hash | `0x53764309C4618087` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x53764309C4618087(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x53764309C4618087, p0)
```


---

## _0x5D5E2102B174B8D2

| Property | Value |
|----------|-------|
| Native Name | `_0x5D5E2102B174B8D2` |
| Hash | `0x5D5E2102B174B8D2` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x5D5E2102B174B8D2()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5D5E2102B174B8D2, )
```


---

## _0x62D5F0588915B277

| Property | Value |
|----------|-------|
| Native Name | `_0x62D5F0588915B277` |
| Hash | `0x62D5F0588915B277` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x62D5F0588915B277()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x62D5F0588915B277, )
```


---

## _0x66BC28E50E85270E

| Property | Value |
|----------|-------|
| Native Name | `_0x66BC28E50E85270E` |
| Hash | `0x66BC28E50E85270E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x66BC28E50E85270E(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x66BC28E50E85270E, p0)
```


---

## _0x6A6E79FBE8678C98

| Property | Value |
|----------|-------|
| Native Name | `_0x6A6E79FBE8678C98` |
| Hash | `0x6A6E79FBE8678C98` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x6A6E79FBE8678C98()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A6E79FBE8678C98, )
```


---

## _0x7B8C2B846C05E5AD

| Property | Value |
|----------|-------|
| Native Name | `_0x7B8C2B846C05E5AD` |
| Hash | `0x7B8C2B846C05E5AD` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x7B8C2B846C05E5AD()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7B8C2B846C05E5AD, )
```


---

## _0x80B3E0597366ADF1

| Property | Value |
|----------|-------|
| Native Name | `_0x80B3E0597366ADF1` |
| Hash | `0x80B3E0597366ADF1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x80B3E0597366ADF1()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x80B3E0597366ADF1, )
```


---

## _0x85B8F04555AB49B8

| Property | Value |
|----------|-------|
| Native Name | `_0x85B8F04555AB49B8` |
| Hash | `0x85B8F04555AB49B8` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x85B8F04555AB49B8(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x85B8F04555AB49B8, p0)
```


---

## _0x8D56BDA343D9519F

| Property | Value |
|----------|-------|
| Native Name | `_0x8D56BDA343D9519F` |
| Hash | `0x8D56BDA343D9519F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x8D56BDA343D9519F(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8D56BDA343D9519F, p0)
```


---

## _0x99F92061EFE908BA

| Property | Value |
|----------|-------|
| Native Name | `_0x99F92061EFE908BA` |
| Hash | `0x99F92061EFE908BA` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x99F92061EFE908BA()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x99F92061EFE908BA, )
```


---

## _0x9F348DE670423460

| Property | Value |
|----------|-------|
| Native Name | `_0x9F348DE670423460` |
| Hash | `0x9F348DE670423460` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9F348DE670423460(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9F348DE670423460, p0)
```


---

## _0xA0AE7653E8181725

| Property | Value |
|----------|-------|
| Native Name | `_0xA0AE7653E8181725` |
| Hash | `0xA0AE7653E8181725` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA0AE7653E8181725(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA0AE7653E8181725, p0)
```


---

## _0xAE00387E53B1E9FC

| Property | Value |
|----------|-------|
| Native Name | `_0xAE00387E53B1E9FC` |
| Hash | `0xAE00387E53B1E9FC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xAE00387E53B1E9FC()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE00387E53B1E9FC, )
```


---

## _0xAFA87A7D41EE346A

| Property | Value |
|----------|-------|
| Native Name | `_0xAFA87A7D41EE346A` |
| Hash | `0xAFA87A7D41EE346A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xAFA87A7D41EE346A(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAFA87A7D41EE346A, p0)
```


---

## _0xB223249B7798EEED

| Property | Value |
|----------|-------|
| Native Name | `_0xB223249B7798EEED` |
| Hash | `0xB223249B7798EEED` |
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
local result = _0xB223249B7798EEED(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB223249B7798EEED, p0, p1, p2, p3)
```


---

## _0xB9B9E47EDB9D63DB

**Description:** Sorts some unknown data.

Likely SORT_*

| Property | Value |
|----------|-------|
| Native Name | `_0xB9B9E47EDB9D63DB` |
| Hash | `0xB9B9E47EDB9D63DB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xB9B9E47EDB9D63DB()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB9B9E47EDB9D63DB, )
```


---

## _0xBE8DAA9D8D01DA6A

| Property | Value |
|----------|-------|
| Native Name | `_0xBE8DAA9D8D01DA6A` |
| Hash | `0xBE8DAA9D8D01DA6A` |
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
_0xBE8DAA9D8D01DA6A(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBE8DAA9D8D01DA6A, p0, p1, p2)
```


---

## _0xCC61D8D6C19D9F14

| Property | Value |
|----------|-------|
| Native Name | `_0xCC61D8D6C19D9F14` |
| Hash | `0xCC61D8D6C19D9F14` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xCC61D8D6C19D9F14(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCC61D8D6C19D9F14, p0)
```


---

## _0xD6E39DC5D46DF4AB

| Property | Value |
|----------|-------|
| Native Name | `_0xD6E39DC5D46DF4AB` |
| Hash | `0xD6E39DC5D46DF4AB` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD6E39DC5D46DF4AB(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD6E39DC5D46DF4AB, p0)
```


---

## _0xD840C130D7AACFA5

| Property | Value |
|----------|-------|
| Native Name | `_0xD840C130D7AACFA5` |
| Hash | `0xD840C130D7AACFA5` |
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
_0xD840C130D7AACFA5(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD840C130D7AACFA5, p0, p1, p2)
```


---

## _0xD9F2FF4AF394D926

| Property | Value |
|----------|-------|
| Native Name | `_0xD9F2FF4AF394D926` |
| Hash | `0xD9F2FF4AF394D926` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xD9F2FF4AF394D926()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD9F2FF4AF394D926, )
```


---

## _0xDA7FDEFF4DE86839

| Property | Value |
|----------|-------|
| Native Name | `_0xDA7FDEFF4DE86839` |
| Hash | `0xDA7FDEFF4DE86839` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0xDA7FDEFF4DE86839()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDA7FDEFF4DE86839, )
```


---

## _0xDABFE48BA0D457AA

| Property | Value |
|----------|-------|
| Native Name | `_0xDABFE48BA0D457AA` |
| Hash | `0xDABFE48BA0D457AA` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0xDABFE48BA0D457AA()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDABFE48BA0D457AA, )
```


---

*End of STREAMING natives part 2*
