# GRAPHICS Natives - Part 6 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** GRAPHICS  
**Natives in this file:** 17  
**Total natives in namespace:** 267  
**Generated from:** RDR3natives JSON data

---

## _SET_LIGHTS_INTENSITY_FOR_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_SET_LIGHTS_INTENSITY_FOR_ENTITY` |
| Hash | `0x07C0F87AAC57F2E4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `intensity` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`intensity`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetLightsIntensityForEntity(entity, intensity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x07C0F87AAC57F2E4, entity, intensity)
```


---

## _SET_LIGHTS_TYPE_FOR_ENTITY

**Description:** type must be less than or equal to 20

| Property | Value |
|----------|-------|
| Native Name | `_SET_LIGHTS_TYPE_FOR_ENTITY` |
| Hash | `0xAB72C67163DC4DB4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `type` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`type`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetLightsTypeForEntity(entity, type)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAB72C67163DC4DB4, entity, type)
```


---

## _SET_PARTICLE_FX_LOOPED_UPDATE_DISTANT_SMOKE

**Description:** _SET_PARTICLE_FX_LOOPED_FA* - _SET_PARTICLE_FX_LOOPED_OF*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PARTICLE_FX_LOOPED_UPDATE_DISTANT_SMOKE` |
| Hash | `0x9DDC222D85D5AF2A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ptfxHandle` (int), `scalar` (float) |

### Parameters

- **`ptfxHandle`** (`int`)
- **`scalar`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxLoopedUpdateDistantSmoke(ptfxHandle, scalar)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9DDC222D85D5AF2A, ptfxHandle, scalar)
```


---

## _SET_PARTICLE_FX_NON_LOOPED_EMITTER_SCALE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PARTICLE_FX_NON_LOOPED_EMITTER_SCALE` |
| Hash | `0x56C392C2BD78B024` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (float), `p1` (float), `p2` (float) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxNonLoopedEmitterScale(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x56C392C2BD78B024, p0, p1, p2)
```


---

## _SET_PEARLESCENT_FX_ENABLED

**Description:** Enables/disables a kind of 'shiny' effect on metals.

| Property | Value |
|----------|-------|
| Native Name | `_SET_PEARLESCENT_FX_ENABLED` |
| Hash | `0x72E30372E7CC4415` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `toggle` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPearlescentFxEnabled(object, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x72E30372E7CC4415, object, toggle)
```


---

## _SET_PHOTO_IN_PHOTOMODE_STAT

| Property | Value |
|----------|-------|
| Native Name | `_SET_PHOTO_IN_PHOTOMODE_STAT` |
| Hash | `0xFA91736933AB3D93` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPhotoInPhotomodeStat(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA91736933AB3D93, p0)
```


---

## _SET_PHOTO_OVERLAY_EFFECT_STAT

| Property | Value |
|----------|-------|
| Native Name | `_SET_PHOTO_OVERLAY_EFFECT_STAT` |
| Hash | `0x8B3296278328B5EB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPhotoOverlayEffectStat(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8B3296278328B5EB, p0)
```


---

## _SET_PHOTO_SELF_STAT

| Property | Value |
|----------|-------|
| Native Name | `_SET_PHOTO_SELF_STAT` |
| Hash | `0x2705D18C11B61046` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPhotoSelfStat(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2705D18C11B61046, p0)
```


---

## _SET_PHOTO_STUDIO_STAT

| Property | Value |
|----------|-------|
| Native Name | `_SET_PHOTO_STUDIO_STAT` |
| Hash | `0x8E6AFF353C09652E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPhotoStudioStat(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8E6AFF353C09652E, p0)
```


---

## _SET_PLAYER_APPEAR_IN_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_APPEAR_IN_PHOTO` |
| Hash | `0x75D568607909333E` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SetPlayerAppearInPhoto(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75D568607909333E, player)
```


---

## _SET_POSSE_ID_FOR_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `_SET_POSSE_ID_FOR_PHOTO` |
| Hash | `0x564837D4A9EDE296` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `posseId` (Any) |

### Parameters

- **`posseId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPosseIdForPhoto(posseId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x564837D4A9EDE296, posseId)
```


---

## _SET_PROXY_INTERIOR_INDEX_ARTIFICIAL_LIGHTS_STATE

**Description:** state: false disables artificial interior light sources for specific proxyInteriorIndex

| Property | Value |
|----------|-------|
| Native Name | `_SET_PROXY_INTERIOR_INDEX_ARTIFICIAL_LIGHTS_STATE` |
| Hash | `0xBFCB17895BB99E4E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `proxyInteriorIndex` (int), `state` (BOOL) |

### Parameters

- **`proxyInteriorIndex`** (`int`)
- **`state`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetProxyInteriorIndexArtificialLightsState(proxyInteriorIndex, state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBFCB17895BB99E4E, proxyInteriorIndex, state)
```


---

## _SET_REGION_PHOTO_TAKEN_STAT

| Property | Value |
|----------|-------|
| Native Name | `_SET_REGION_PHOTO_TAKEN_STAT` |
| Hash | `0xD1031B83AC093BC7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetRegionPhotoTakenStat(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD1031B83AC093BC7, p0)
```


---

## _SET_SNIPER_GLINTS_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_SET_SNIPER_GLINTS_ENABLED` |
| Hash | `0x6E8EB45A4F4460EB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `enabled` (BOOL) |

### Parameters

- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetSniperGlintsEnabled(enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6E8EB45A4F4460EB, enabled)
```


---

## _SET_SNOW_COVERAGE_TYPE

**Description:** enum class eSnowCoverageType
{
	Primary,
	Secondary,
	Xmas,
	XmasSecondary // since b1232
};

| Property | Value |
|----------|-------|
| Native Name | `_SET_SNOW_COVERAGE_TYPE` |
| Hash | `0xF02A9C330BBFC5C7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `type` (int) |

### Parameters

- **`type`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetSnowCoverageType(type)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF02A9C330BBFC5C7, type)
```


---

## _SET_STATE_PHOTO_TAKEN_STAT

| Property | Value |
|----------|-------|
| Native Name | `_SET_STATE_PHOTO_TAKEN_STAT` |
| Hash | `0x8952E857696B8A79` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetStatePhotoTakenStat(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8952E857696B8A79, p0)
```


---

## _START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE_2

| Property | Value |
|----------|-------|
| Native Name | `_START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE_2` |
| Hash | `0xC695870B8A149B96` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `ped` (Ped), `offsetX` (float), `offsetY` (float), `offsetZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `boneIndex` (int), `scale` (float), `axisX` (BOOL), `axisY` (BOOL), `axisZ` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`ped`** (`Ped`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`boneIndex`** (`int`)
- **`scale`** (`float`)
- **`axisX`** (`BOOL`)
- **`axisY`** (`BOOL`)
- **`axisZ`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartParticleFxNonLoopedOnPedBone2(effectName, ped, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, boneIndex, scale, axisX, axisY, axisZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC695870B8A149B96, effectName, ped, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, boneIndex, scale, axisX, axisY, axisZ)
```


---

*End of GRAPHICS natives part 6*
