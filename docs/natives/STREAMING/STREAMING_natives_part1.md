# STREAMING Natives - Part 1 of 3

Red Dead Redemption 3 Native Functions Reference

**Namespace:** STREAMING  
**Natives in this file:** 50  
**Total natives in namespace:** 115  
**Generated from:** RDR3natives JSON data

---

## BEGIN_SRL

| Property | Value |
|----------|-------|
| Native Name | `BEGIN_SRL` |
| Hash | `0x0360710033BE60D9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
BeginSrl()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0360710033BE60D9, )
```


---

## CLEAR_FOCUS

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_FOCUS` |
| Hash | `0x86CCAF7CE493EFBE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearFocus()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x86CCAF7CE493EFBE, )
```


---

## CLEAR_HD_AREA

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_HD_AREA` |
| Hash | `0xD83B22434E52728D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearHdArea()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD83B22434E52728D, )
```


---

## DOES_ANIM_DICT_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_ANIM_DICT_EXIST` |
| Hash | `0x537F44CB0D7F150D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animDict` (char*) |

### Parameters

- **`animDict`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = DoesAnimDictExist(animDict)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x537F44CB0D7F150D, animDict)
```


---

## END_SRL

| Property | Value |
|----------|-------|
| Native Name | `END_SRL` |
| Hash | `0x1CE71FB33CA079FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
EndSrl()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1CE71FB33CA079FE, )
```


---

## GET_NUMBER_OF_STREAMING_REQUESTS

| Property | Value |
|----------|-------|
| Native Name | `GET_NUMBER_OF_STREAMING_REQUESTS` |
| Hash | `0x30CCCC4D88E654CA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetNumberOfStreamingRequests()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x30CCCC4D88E654CA, )
```


---

## GET_POPULATION_BUDGET_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `GET_POPULATION_BUDGET_MULTIPLIER` |
| Hash | `0x8A3945405B31048F` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetPopulationBudgetMultiplier()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8A3945405B31048F, )
```


---

## HAS_ANIM_DICT_LOADED

| Property | Value |
|----------|-------|
| Native Name | `HAS_ANIM_DICT_LOADED` |
| Hash | `0x27FF6FE8009B40CA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animDict` (char*) |

### Parameters

- **`animDict`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = HasAnimDictLoaded(animDict)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x27FF6FE8009B40CA, animDict)
```


---

## HAS_CLIP_SET_LOADED

**Description:** Alias for HAS_ANIM_SET_LOADED.

| Property | Value |
|----------|-------|
| Native Name | `HAS_CLIP_SET_LOADED` |
| Hash | `0x1F23D6B6DA1CC3B2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `clipSet` (char*) |

### Parameters

- **`clipSet`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = HasClipSetLoaded(clipSet)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F23D6B6DA1CC3B2, clipSet)
```


---

## HAS_COLLISION_FOR_MODEL_LOADED

| Property | Value |
|----------|-------|
| Native Name | `HAS_COLLISION_FOR_MODEL_LOADED` |
| Hash | `0x210A79C9EC89778F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasCollisionForModelLoaded(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x210A79C9EC89778F, model)
```


---

## HAS_MODEL_LOADED

**Description:** Checks if the specified model has loaded into memory.

| Property | Value |
|----------|-------|
| Native Name | `HAS_MODEL_LOADED` |
| Hash | `0x1283B8B89DD5D1B6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasModelLoaded(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1283B8B89DD5D1B6, model)
```


---

## HAS_MOVE_NETWORK_DEF_LOADED

| Property | Value |
|----------|-------|
| Native Name | `HAS_MOVE_NETWORK_DEF_LOADED` |
| Hash | `0x2C04D89A0FB4E244` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `name` (char*) |

### Parameters

- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = HasMoveNetworkDefLoaded(name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2C04D89A0FB4E244, name)
```


---

## HAS_NAMED_PTFX_ASSET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `HAS_NAMED_PTFX_ASSET_LOADED` |
| Hash | `0x65BB72F29138F5D6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `fxNameHash` (Hash) |

### Parameters

- **`fxNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasNamedPtfxAssetLoaded(fxNameHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x65BB72F29138F5D6, fxNameHash)
```


---

## HAS_PTFX_ASSET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `HAS_PTFX_ASSET_LOADED` |
| Hash | `0x13A3F30A9ED0BC31` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = HasPtfxAssetLoaded()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x13A3F30A9ED0BC31, )
```


---

## IPL_GROUP_SWAP_CANCEL

| Property | Value |
|----------|-------|
| Native Name | `IPL_GROUP_SWAP_CANCEL` |
| Hash | `0x31108BB5715D035F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
IplGroupSwapCancel()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x31108BB5715D035F, )
```


---

## IPL_GROUP_SWAP_FINISH

| Property | Value |
|----------|-------|
| Native Name | `IPL_GROUP_SWAP_FINISH` |
| Hash | `0x040EE319EFD1D3B5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
IplGroupSwapFinish()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x040EE319EFD1D3B5, )
```


---

## IPL_GROUP_SWAP_IS_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IPL_GROUP_SWAP_IS_ACTIVE` |
| Hash | `0xFC464598F6EE97B0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IplGroupSwapIsActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFC464598F6EE97B0, )
```


---

## IPL_GROUP_SWAP_IS_READY

| Property | Value |
|----------|-------|
| Native Name | `IPL_GROUP_SWAP_IS_READY` |
| Hash | `0xC2C05DEFE85A0B64` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IplGroupSwapIsReady()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC2C05DEFE85A0B64, )
```


---

## IPL_GROUP_SWAP_START

| Property | Value |
|----------|-------|
| Native Name | `IPL_GROUP_SWAP_START` |
| Hash | `0x20D504994FDC4412` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `iplName1` (char*), `iplName2` (char*) |

### Parameters

- **`iplName1`** (`char*`)
- **`iplName2`** (`char*`)

### Usage

**Lua (Direct):**
```lua
IplGroupSwapStart(iplName1, iplName2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x20D504994FDC4412, iplName1, iplName2)
```


---

## IS_ENTITY_FOCUS

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_FOCUS` |
| Hash | `0xF87DE697E9A06EC6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityFocus(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF87DE697E9A06EC6, entity)
```


---

## IS_IPL_ACTIVE_BY_HASH

**Description:** Old name: _IS_IMAP_ACTIVE_2

| Property | Value |
|----------|-------|
| Native Name | `IS_IPL_ACTIVE_BY_HASH` |
| Hash | `0x93AC1B91CB6D9913` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `iplHash` (Hash) |

### Parameters

- **`iplHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsIplActiveByHash(iplHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x93AC1B91CB6D9913, iplHash)
```


---

## IS_IPL_ACTIVE_HASH

**Description:** Old name: _IS_IMAP_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_IPL_ACTIVE_HASH` |
| Hash | `0xD779B9B910BD3B7C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `iplHash` (Hash) |

### Parameters

- **`iplHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsIplActiveHash(iplHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD779B9B910BD3B7C, iplHash)
```


---

## IS_LOAD_SCENE_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_LOAD_SCENE_ACTIVE` |
| Hash | `0xCF45DF50C7775F2A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsLoadSceneActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCF45DF50C7775F2A, )
```


---

## IS_LOAD_SCENE_LOADED

| Property | Value |
|----------|-------|
| Native Name | `IS_LOAD_SCENE_LOADED` |
| Hash | `0x0909F71B5C070797` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsLoadSceneLoaded()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0909F71B5C070797, )
```


---

## IS_MODEL_A_PED

| Property | Value |
|----------|-------|
| Native Name | `IS_MODEL_A_PED` |
| Hash | `0xC3F09DE9D6D17DDA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsModelAPed(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC3F09DE9D6D17DDA, model)
```


---

## IS_MODEL_A_VEHICLE

**Description:** Returns whether the specified model represents a vehicle.

| Property | Value |
|----------|-------|
| Native Name | `IS_MODEL_A_VEHICLE` |
| Hash | `0x354F62672DE7DB0A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsModelAVehicle(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x354F62672DE7DB0A, model)
```


---

## IS_MODEL_IN_CDIMAGE

**Description:** Returns whether the specified model exists in the game.

| Property | Value |
|----------|-------|
| Native Name | `IS_MODEL_IN_CDIMAGE` |
| Hash | `0xD6F3B6D7716CFF8E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsModelInCdimage(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD6F3B6D7716CFF8E, model)
```


---

## IS_MODEL_VALID

**Description:** Returns whether the specified model is valid

| Property | Value |
|----------|-------|
| Native Name | `IS_MODEL_VALID` |
| Hash | `0x392C8D8E07B70EFC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsModelValid(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x392C8D8E07B70EFC, model)
```


---

## IS_PLAYER_SWITCH_IN_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_SWITCH_IN_PROGRESS` |
| Hash | `0xED20CB1F5297791D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerSwitchInProgress()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xED20CB1F5297791D, )
```


---

## IS_RENDERED_SCENE_LOADED

| Property | Value |
|----------|-------|
| Native Name | `IS_RENDERED_SCENE_LOADED` |
| Hash | `0x45BF3A6239A576B7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsRenderedSceneLoaded()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x45BF3A6239A576B7, )
```


---

## IS_SRL_LOADED

| Property | Value |
|----------|-------|
| Native Name | `IS_SRL_LOADED` |
| Hash | `0x5C2C88512CF6DAFB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsSrlLoaded()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5C2C88512CF6DAFB, )
```


---

## LOAD_SCENE_START

| Property | Value |
|----------|-------|
| Native Name | `LOAD_SCENE_START` |
| Hash | `0x387AD749E3B69B70` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `posX` (float), `posY` (float), `posZ` (float), `offsetX` (float), `offsetY` (float), `offsetZ` (float), `radius` (float), `controlFlags` (int) |

### Parameters

- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)
- **`radius`** (`float`)
- **`controlFlags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = LoadSceneStart(posX, posY, posZ, offsetX, offsetY, offsetZ, radius, controlFlags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x387AD749E3B69B70, posX, posY, posZ, offsetX, offsetY, offsetZ, radius, controlFlags)
```


---

## LOAD_SCENE_START_SPHERE

| Property | Value |
|----------|-------|
| Native Name | `LOAD_SCENE_START_SPHERE` |
| Hash | `0x513F8AA5BF2F17CF` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `controlFlags` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`controlFlags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = LoadSceneStartSphere(x, y, z, radius, controlFlags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x513F8AA5BF2F17CF, x, y, z, radius, controlFlags)
```


---

## LOAD_SCENE_STOP

| Property | Value |
|----------|-------|
| Native Name | `LOAD_SCENE_STOP` |
| Hash | `0x5A8B01199C3E79C3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
LoadSceneStop()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5A8B01199C3E79C3, )
```


---

## PREFETCH_SRL

| Property | Value |
|----------|-------|
| Native Name | `PREFETCH_SRL` |
| Hash | `0x354837E5A5BAA5AF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `srl` (char*) |

### Parameters

- **`srl`** (`char*`)

### Usage

**Lua (Direct):**
```lua
PrefetchSrl(srl)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x354837E5A5BAA5AF, srl)
```


---

## REMOVE_ANIM_DICT

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_ANIM_DICT` |
| Hash | `0x4763145053A33D46` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animDict` (char*) |

### Parameters

- **`animDict`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RemoveAnimDict(animDict)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4763145053A33D46, animDict)
```


---

## REMOVE_CLIP_SET

**Description:** Alias for REMOVE_ANIM_SET.

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_CLIP_SET` |
| Hash | `0x817FA1B1EE7CD6F0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `clipSet` (char*) |

### Parameters

- **`clipSet`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RemoveClipSet(clipSet)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x817FA1B1EE7CD6F0, clipSet)
```


---

## REMOVE_IPL_BY_HASH

**Description:** Old name: _REMOVE_IMAP_2

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_IPL_BY_HASH` |
| Hash | `0x431E3AB760629B34` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `iplHash` (Hash) |

### Parameters

- **`iplHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveIplByHash(iplHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x431E3AB760629B34, iplHash)
```


---

## REMOVE_IPL_HASH

**Description:** Old name: _REMOVE_IMAP

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_IPL_HASH` |
| Hash | `0x5A3E5CF7B4014B96` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `iplHash` (Hash) |

### Parameters

- **`iplHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveIplHash(iplHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5A3E5CF7B4014B96, iplHash)
```


---

## REMOVE_MOVE_NETWORK_DEF

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_MOVE_NETWORK_DEF` |
| Hash | `0x57A197AD83F66BBF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (char*) |

### Parameters

- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RemoveMoveNetworkDef(name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x57A197AD83F66BBF, name)
```


---

## REMOVE_NAMED_PTFX_ASSET

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_NAMED_PTFX_ASSET` |
| Hash | `0xF20866829E1C81A2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `fxNameHash` (Hash) |

### Parameters

- **`fxNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveNamedPtfxAsset(fxNameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF20866829E1C81A2, fxNameHash)
```


---

## REMOVE_PTFX_ASSET

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_PTFX_ASSET` |
| Hash | `0x042F9049EA419E86` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
RemovePtfxAsset()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x042F9049EA419E86, )
```


---

## REQUEST_ADDITIONAL_COLLISION_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_ADDITIONAL_COLLISION_AT_COORD` |
| Hash | `0x83A8D71650D1894F` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
RequestAdditionalCollisionAtCoord(x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x83A8D71650D1894F, x, y, z)
```


---

## REQUEST_ANIM_DICT

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_ANIM_DICT` |
| Hash | `0xA862A2AD321F94B4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animDict` (char*) |

### Parameters

- **`animDict`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RequestAnimDict(animDict)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA862A2AD321F94B4, animDict)
```


---

## REQUEST_CLIP_SET

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_CLIP_SET` |
| Hash | `0xEF7611B57A820126` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `clipSet` (char*) |

### Parameters

- **`clipSet`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RequestClipSet(clipSet)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEF7611B57A820126, clipSet)
```


---

## REQUEST_COLLISION_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_COLLISION_AT_COORD` |
| Hash | `0x0A3720F162A033C9` |
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
RequestCollisionAtCoord(x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0A3720F162A033C9, x, y, z)
```


---

## REQUEST_COLLISION_FOR_MODEL

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_COLLISION_FOR_MODEL` |
| Hash | `0xF1767BE37F661551` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RequestCollisionForModel(model)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF1767BE37F661551, model)
```


---

## REQUEST_IPL_BY_HASH

**Description:** Old name: _REQUEST_IMAP_2

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_IPL_BY_HASH` |
| Hash | `0x9E211A378F95C97C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `iplHash` (Hash) |

### Parameters

- **`iplHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RequestIplByHash(iplHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9E211A378F95C97C, iplHash)
```


---

## REQUEST_IPL_HASH

**Description:** Old name: _REQUEST_IMAP

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_IPL_HASH` |
| Hash | `0x59767C5A7A9AE6DA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `iplHash` (Hash) |

### Parameters

- **`iplHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RequestIplHash(iplHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x59767C5A7A9AE6DA, iplHash)
```


---

## REQUEST_MODEL

**Description:** Request a model to be loaded into memory.

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_MODEL` |
| Hash | `0xFA28FE3A6246FC30` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `model` (Hash), `p1` (BOOL) |

### Parameters

- **`model`** (`Hash`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RequestModel(model, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA28FE3A6246FC30, model, p1)
```


---

*End of STREAMING natives part 1*
