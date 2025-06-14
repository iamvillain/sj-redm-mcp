# GRAPHICS Natives - Part 5 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** GRAPHICS  
**Natives in this file:** 50  
**Total natives in namespace:** 267  
**Generated from:** RDR3natives JSON data

---

## _ANIMPOSTFX_IS_STACKHASH_PLAYING

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_IS_STACKHASH_PLAYING` |
| Hash | `0xEEF83A759AE06A27` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `effectNameHash` (Hash) |

### Parameters

- **`effectNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = AnimpostfxIsStackhashPlaying(effectNameHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEEF83A759AE06A27, effectNameHash)
```


---

## _ANIMPOSTFX_IS_TAG_PLAYING

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_IS_TAG_PLAYING` |
| Hash | `0x2D4F9C852CE8A253` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `effectName` (const char*) |

### Parameters

- **`effectName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = AnimpostfxIsTagPlaying(effectName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2D4F9C852CE8A253, effectName)
```


---

## _ANIMPOSTFX_PLAY_TAG

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_PLAY_TAG` |
| Hash | `0x9B8D5D4CB8AF58B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectNameHash` (Hash) |

### Parameters

- **`effectNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxPlayTag(effectNameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9B8D5D4CB8AF58B3, effectNameHash)
```


---

## _ANIMPOSTFX_PLAY_TIMED

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_PLAY_TIMED` |
| Hash | `0x3A9A281FF71249E9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `duration` (int) |

### Parameters

- **`effectName`** (`const char*`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxPlayTimed(effectName, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3A9A281FF71249E9, effectName, duration)
```


---

## _ANIMPOSTFX_PRELOAD_POSTFX

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_PRELOAD_POSTFX` |
| Hash | `0x5199405EABFBD7F0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectName` (const char*) |

### Parameters

- **`effectName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxPreloadPostfx(effectName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5199405EABFBD7F0, effectName)
```


---

## _ANIMPOSTFX_PRELOAD_POSTFX_BY_STACKHASH

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_PRELOAD_POSTFX_BY_STACKHASH` |
| Hash | `0xF3E039322BFBD4D8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectNameHash` (Hash) |

### Parameters

- **`effectNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxPreloadPostfxByStackhash(effectNameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF3E039322BFBD4D8, effectNameHash)
```


---

## _ANIMPOSTFX_SET_POSTFX_COLOR

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_SET_POSTFX_COLOR` |
| Hash | `0x63011D0C7C6519E0` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `effectName` (const char*), `p1` (int), `red` (int), `green` (int), `blue` (int), `alpha` (int) |

### Parameters

- **`effectName`** (`const char*`)
- **`p1`** (`int`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)
- **`alpha`** (`int`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxSetPostfxColor(effectName, p1, red, green, blue, alpha)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x63011D0C7C6519E0, effectName, p1, red, green, blue, alpha)
```


---

## _ANIMPOSTFX_SET_POTENCY

**Description:** Health Core Effect Filter Potency: p1 = 1
Stamina Core Effect Filter Potency: p1 = 2
Multiple Core Effect Filter Potency: p1 = 3

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_SET_POTENCY` |
| Hash | `0xF972F0AB16DC5260` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `p1` (int), `potency` (float) |

### Parameters

- **`effectName`** (`const char*`)
- **`p1`** (`int`)
- **`potency`** (`float`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxSetPotency(effectName, p1, potency)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF972F0AB16DC5260, effectName, p1, potency)
```


---

## _ANIMPOSTFX_SET_STRENGTH

**Description:** must be called after ANIMPOSTFX_PLAY, strength 0.0f - 1.0f

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_SET_STRENGTH` |
| Hash | `0xCAB4DD2D5B2B7246` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `strength` (float) |

### Parameters

- **`effectName`** (`const char*`)
- **`strength`** (`float`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxSetStrength(effectName, strength)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCAB4DD2D5B2B7246, effectName, strength)
```


---

## _ANIMPOSTFX_SET_TO_UNLOAD

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_SET_TO_UNLOAD` |
| Hash | `0x37D7BDBA89F13959` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectName` (const char*) |

### Parameters

- **`effectName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxSetToUnload(effectName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x37D7BDBA89F13959, effectName)
```


---

## _ANIMPOSTFX_STOP_STACKHASH_POSTFX

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_STOP_STACKHASH_POSTFX` |
| Hash | `0xEDA5CBECF56E1386` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectNameHash` (Hash) |

### Parameters

- **`effectNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxStopStackhashPostfx(effectNameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEDA5CBECF56E1386, effectNameHash)
```


---

## _ANIMPOSTFX_STOP_TAG

| Property | Value |
|----------|-------|
| Native Name | `_ANIMPOSTFX_STOP_TAG` |
| Hash | `0xAD74C22A541AB987` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectName` (const char*) |

### Parameters

- **`effectName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxStopTag(effectName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAD74C22A541AB987, effectName)
```


---

## _BLOCK_PICKUP_OBJECT_LIGHT

| Property | Value |
|----------|-------|
| Native Name | `_BLOCK_PICKUP_OBJECT_LIGHT` |
| Hash | `0x50C14328119E1DD1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pickupObject` (Object), `toggle` (BOOL) |

### Parameters

- **`pickupObject`** (`Object`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
BlockPickupObjectLight(pickupObject, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x50C14328119E1DD1, pickupObject, toggle)
```


---

## _BLOOD_TRAIL_FOR_WAYPOINT

**Description:** p1: 0.3f in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_BLOOD_TRAIL_FOR_WAYPOINT` |
| Hash | `0xB9C92616929CC25D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `waypointRecording` (const char*), `p1` (float) |

### Parameters

- **`waypointRecording`** (`const char*`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
BloodTrailForWaypoint(waypointRecording, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB9C92616929CC25D, waypointRecording, p1)
```


---

## _CREATE_SWATCH_TEXTURE_DICT

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_SWATCH_TEXTURE_DICT` |
| Hash | `0x3D084D5568FB4028` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `slots` (int) |

### Parameters

- **`slots`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CreateSwatchTextureDict(slots)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3D084D5568FB4028, slots)
```


---

## _DESTROY_SWATCH_TEXTURE_DICT

| Property | Value |
|----------|-------|
| Native Name | `_DESTROY_SWATCH_TEXTURE_DICT` |
| Hash | `0xDAD7FB8402651654` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
DestroySwatchTextureDict()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDAD7FB8402651654, )
```


---

## _DISABLE_FAR_ARTIFICIAL_LIGHTS

**Description:** Only used in guama1 R* Script
Disables lod/distant lights when BOOL is set to true

| Property | Value |
|----------|-------|
| Native Name | `_DISABLE_FAR_ARTIFICIAL_LIGHTS` |
| Hash | `0xCD284E2F6AC27EE9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `disable` (BOOL) |

### Parameters

- **`disable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DisableFarArtificialLights(disable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCD284E2F6AC27EE9, disable)
```


---

## _DISABLE_STATIC_VEG_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_DISABLE_STATIC_VEG_MODIFIER` |
| Hash | `0xDD0BC0EDCB2162F6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
DisableStaticVegModifier(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDD0BC0EDCB2162F6, p0)
```


---

## _DOES_CHECKPOINT_HAVE_FX

| Property | Value |
|----------|-------|
| Native Name | `_DOES_CHECKPOINT_HAVE_FX` |
| Hash | `0x4C11CCACB7C02B6E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `checkpoint` (int) |

### Parameters

- **`checkpoint`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesCheckpointHaveFx(checkpoint)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4C11CCACB7C02B6E, checkpoint)
```


---

## DRAW_MARKER

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/graphics/markers/marker_types.lua
Old name: _DRAW_MARKER

| Property | Value |
|----------|-------|
| Native Name | `DRAW_MARKER` |
| Hash | `0x2A32FAA57B937173` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `type` (Hash), `posX` (float), `posY` (float), `posZ` (float), `dirX` (float), `dirY` (float), `dirZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float), `red` (int), `green` (int), `blue` (int), `alpha` (int), `bobUpAndDown` (BOOL), `faceCamera` (BOOL), `p19` (int), `rotate` (BOOL), `textureDict` (const char*), `textureName` (const char*), `drawOnEnts` (BOOL) |

### Parameters

- **`type`** (`Hash`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`dirX`** (`float`)
- **`dirY`** (`float`)
- **`dirZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)
- **`alpha`** (`int`)
- **`bobUpAndDown`** (`BOOL`)
- **`faceCamera`** (`BOOL`)
- **`p19`** (`int`)
- **`rotate`** (`BOOL`)
- **`textureDict`** (`const char*`)
- **`textureName`** (`const char*`)
- **`drawOnEnts`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DrawMarker(type, posX, posY, posZ, dirX, dirY, dirZ, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, red, green, blue, alpha, bobUpAndDown, faceCamera, p19, rotate, textureDict, textureName, drawOnEnts)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2A32FAA57B937173, type, posX, posY, posZ, dirX, dirY, dirZ, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, red, green, blue, alpha, bobUpAndDown, faceCamera, p19, rotate, textureDict, textureName, drawOnEnts)
```


---

## _ENABLE_STATIC_VEG_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_ENABLE_STATIC_VEG_MODIFIER` |
| Hash | `0xDFEA23EC90113657` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
EnableStaticVegModifier(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDFEA23EC90113657, p0)
```


---

## _GENERATE_SWATCH_TEXTURE

**Description:** Example:
local hash = GetHashKey("CLOTHING_ITEM_M_EYES_001_TINT_001")
_GENERATE_SWATCH_TEXTURE(0, hash, 0, true)
metapedType: see 0xEC9A1261BF0CE510

| Property | Value |
|----------|-------|
| Native Name | `_GENERATE_SWATCH_TEXTURE` |
| Hash | `0x160921255327C591` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `slotId` (int), `componentHash` (Hash), `metapedType` (int), `p3` (BOOL) |

### Parameters

- **`slotId`** (`int`)
- **`componentHash`** (`Hash`)
- **`metapedType`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
GenerateSwatchTexture(slotId, componentHash, metapedType, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x160921255327C591, slotId, componentHash, metapedType, p3)
```


---

## _GENERATE_SWATCH_TEXTURE_DIRECTLY

**Description:** Example: https://pastebin.com/tTgpER9A

| Property | Value |
|----------|-------|
| Native Name | `_GENERATE_SWATCH_TEXTURE_DIRECTLY` |
| Hash | `0x646ED1A1D28487DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `slot` (int), `p1` (Any) |

### Parameters

- **`slot`** (`int`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
GenerateSwatchTextureDirectly(slot, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x646ED1A1D28487DF, slot, p1)
```


---

## _GET_CURRENT_NUMBER_OF_LOCAL_PHOTOS

| Property | Value |
|----------|-------|
| Native Name | `_GET_CURRENT_NUMBER_OF_LOCAL_PHOTOS` |
| Hash | `0x78C56B8A7B1D000C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetCurrentNumberOfLocalPhotos()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x78C56B8A7B1D000C, )
```


---

## _GET_ENTITY_MASK_LAYERS

| Property | Value |
|----------|-------|
| Native Name | `_GET_ENTITY_MASK_LAYERS` |
| Hash | `0xE8A8378BF651079C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `layer0` (float*), `layer1` (float*), `layer2` (float*), `layer3` (float*) |

### Parameters

- **`entity`** (`Entity`)
- **`layer0`** (`float*`)
- **`layer1`** (`float*`)
- **`layer2`** (`float*`)
- **`layer3`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityMaskLayers(entity, layer0, layer1, layer2, layer3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE8A8378BF651079C, entity, layer0, layer1, layer2, layer3)
```


---

## _GET_MAX_NUMBER_OF_LOCAL_PHOTOS

**Description:** Always returns 200.

| Property | Value |
|----------|-------|
| Native Name | `_GET_MAX_NUMBER_OF_LOCAL_PHOTOS` |
| Hash | `0x8E587FCD30E05592` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetMaxNumberOfLocalPhotos()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8E587FCD30E05592, )
```


---

## _GET_MODIFIED_VISIBILITY_DISTANCE

**Description:** _GET_C* - _GET_E*

| Property | Value |
|----------|-------|
| Native Name | `_GET_MODIFIED_VISIBILITY_DISTANCE` |
| Hash | `0x25CA89B2A39DCC69` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetModifiedVisibilityDistance()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x25CA89B2A39DCC69, )
```


---

## _GET_PHOTO_MODE_CONTRAST

| Property | Value |
|----------|-------|
| Native Name | `_GET_PHOTO_MODE_CONTRAST` |
| Hash | `0x98F4154989B81EC6` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetPhotoModeContrast()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x98F4154989B81EC6, )
```


---

## _GET_PHOTO_MODE_EXPOSURE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PHOTO_MODE_EXPOSURE` |
| Hash | `0x06C0D8BB6B04A709` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetPhotoModeExposure()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x06C0D8BB6B04A709, )
```


---

## _GET_PROXY_INTERIOR_INDEX

**Description:** Returns proxyInteriorIndex

| Property | Value |
|----------|-------|
| Native Name | `_GET_PROXY_INTERIOR_INDEX` |
| Hash | `0x5D1C5D8E62E8EE1C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `interiorId` (int) |

### Parameters

- **`interiorId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetProxyInteriorIndex(interiorId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5D1C5D8E62E8EE1C, interiorId)
```


---

## _IS_PROXY_INTERIOR_INDEX_ARTIFICIAL_LIGHTS_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_IS_PROXY_INTERIOR_INDEX_ARTIFICIAL_LIGHTS_ENABLED` |
| Hash | `0x113857D66A9CABE6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `proxyInteriorIndex` (int) |

### Parameters

- **`proxyInteriorIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsProxyInteriorIndexArtificialLightsEnabled(proxyInteriorIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x113857D66A9CABE6, proxyInteriorIndex)
```


---

## _IS_STATIC_VEG_MODIFIER_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_IS_STATIC_VEG_MODIFIER_ENABLED` |
| Hash | `0xDE9BAD3292AA6D5E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsStaticVegModifierEnabled(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDE9BAD3292AA6D5E, p0)
```


---

## _IS_TEXTURE_IN_DICT

| Property | Value |
|----------|-------|
| Native Name | `_IS_TEXTURE_IN_DICT` |
| Hash | `0xA2A51869BDED733B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `txdHash` (Hash), `dict` (Hash) |

### Parameters

- **`txdHash`** (`Hash`)
- **`dict`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsTextureInDict(txdHash, dict)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA2A51869BDED733B, txdHash, dict)
```


---

## _IS_TRACKED_POINT_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_TRACKED_POINT_VALID` |
| Hash | `0xF2FDDCC8C6BAE1B3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `point` (int) |

### Parameters

- **`point`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsTrackedPointValid(point)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF2FDDCC8C6BAE1B3, point)
```


---

## _PEDSHOT_FINISH_CLEANUP_DATA

| Property | Value |
|----------|-------|
| Native Name | `_PEDSHOT_FINISH_CLEANUP_DATA` |
| Hash | `0xC2B8164C3BE871A4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
PedshotFinishCleanupData()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC2B8164C3BE871A4, )
```


---

## _PEDSHOT_GENERATE_PERSONA_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `_PEDSHOT_GENERATE_PERSONA_PHOTO` |
| Hash | `0xD9C24F53631F2372` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `texture` (const char*), `ped` (Ped), `playerSlot` (int) |

### Parameters

- **`texture`** (`const char*`)
- **`ped`** (`Ped`)
- **`playerSlot`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = PedshotGeneratePersonaPhoto(texture, ped, playerSlot)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD9C24F53631F2372, texture, ped, playerSlot)
```


---

## _PEDSHOT_INIT_CLEANUP_DATA

| Property | Value |
|----------|-------|
| Native Name | `_PEDSHOT_INIT_CLEANUP_DATA` |
| Hash | `0x55285F885F662169` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
PedshotInitCleanupData()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x55285F885F662169, )
```


---

## _PEDSHOT_PREVIOUS_PERSONA_PHOTO_DATA_CLEANUP

| Property | Value |
|----------|-------|
| Native Name | `_PEDSHOT_PREVIOUS_PERSONA_PHOTO_DATA_CLEANUP` |
| Hash | `0x3E2FDDBE435A8787` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
PedshotPreviousPersonaPhotoDataCleanup()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3E2FDDBE435A8787, )
```


---

## _PEDSHOT_SET_PERSONA_PHOTO_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_PEDSHOT_SET_PERSONA_PHOTO_TYPE` |
| Hash | `0x196D3ACBEBA4A44B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `personaPhotoLocalCacheType` (int) |

### Parameters

- **`personaPhotoLocalCacheType`** (`int`)

### Usage

**Lua (Direct):**
```lua
PedshotSetPersonaPhotoType(personaPhotoLocalCacheType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x196D3ACBEBA4A44B, personaPhotoLocalCacheType)
```


---

## _REMOVE_ENTITY_FROM_ENTITY_MASK

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_ENTITY_FROM_ENTITY_MASK` |
| Hash | `0x56A786E87FF53478` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
RemoveEntityFromEntityMask(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x56A786E87FF53478, entity)
```


---

## _RESET_ENTITY_AURA

**Description:** Used for script function RPG_GLOBAL_STATS__PRIVATE__DEACTIVATE_STAT_FLAG - Inspiration Aura unequip

| Property | Value |
|----------|-------|
| Native Name | `_RESET_ENTITY_AURA` |
| Hash | `0xAF4D239B8903FCBE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetEntityAura()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAF4D239B8903FCBE, )
```


---

## _SET_CLOUD_HEIGHT

| Property | Value |
|----------|-------|
| Native Name | `_SET_CLOUD_HEIGHT` |
| Hash | `0xC332C91388F5580B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `height` (float) |

### Parameters

- **`height`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCloudHeight(height)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC332C91388F5580B, height)
```


---

## _SET_CLOUD_LAYER

| Property | Value |
|----------|-------|
| Native Name | `_SET_CLOUD_LAYER` |
| Hash | `0xB8C984C0D47F4F07` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `p2` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetCloudLayer(x, y, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB8C984C0D47F4F07, x, y, p2)
```


---

## _SET_CLOUD_NOISE

| Property | Value |
|----------|-------|
| Native Name | `_SET_CLOUD_NOISE` |
| Hash | `0xFE7966DF01452F32` |
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
SetCloudNoise(x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFE7966DF01452F32, x, y, z)
```


---

## _SET_CLOUD_POSITION

**Description:** Only used in finale2, smuggler2, winter4
_SET_CLOUD_A* - _SET_CLOUD_H*

| Property | Value |
|----------|-------|
| Native Name | `_SET_CLOUD_POSITION` |
| Hash | `0x10C1767B93257480` |
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
SetCloudPosition(x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x10C1767B93257480, x, y, z)
```


---

## _SET_DISTRICT_PHOTO_TAKEN_STAT

| Property | Value |
|----------|-------|
| Native Name | `_SET_DISTRICT_PHOTO_TAKEN_STAT` |
| Hash | `0x9937FACBBF267244` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetDistrictPhotoTakenStat(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9937FACBBF267244, p0)
```


---

## _SET_ENTITY_AURA

**Description:** Used for script function RPG_GLOBAL_STATS__PRIVATE__ACTIVATE_STAT_FLAG - Quite and Inspiration Aura equip
Params: 0f, 2f, 2f

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_AURA` |
| Hash | `0x249CD6B7285536F2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetEntityAura(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x249CD6B7285536F2, p0, p1, p2)
```


---

## _SET_ENTITY_MASK_LAYERS

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_MASK_LAYERS` |
| Hash | `0xE92012611461A42A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `layer0` (float*), `layer1` (float*), `layer2` (float*), `layer3` (float*) |

### Parameters

- **`entity`** (`Entity`)
- **`layer0`** (`float*`)
- **`layer1`** (`float*`)
- **`layer2`** (`float*`)
- **`layer3`** (`float*`)

### Usage

**Lua (Direct):**
```lua
SetEntityMaskLayers(entity, layer0, layer1, layer2, layer3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE92012611461A42A, entity, layer0, layer1, layer2, layer3)
```


---

## _SET_ENTITY_RENDER_GUARMA_SHIP

**Description:** Only used in guama1 R* SP Script while spawning the ship
_SET_ENTITY_QUATERNION_* - SET_ENTITY_RENDER_*

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_RENDER_GUARMA_SHIP` |
| Hash | `0xC38B4952B728397A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityRenderGuarmaShip(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC38B4952B728397A, vehicle, toggle)
```


---

## _SET_LIGHTS_COLOR_FOR_ENTITY

**Description:** https://gfycat.com/meagerfaireyra

| Property | Value |
|----------|-------|
| Native Name | `_SET_LIGHTS_COLOR_FOR_ENTITY` |
| Hash | `0x6EC2A67962296F49` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `red` (int), `green` (int), `blue` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetLightsColorForEntity(entity, red, green, blue)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6EC2A67962296F49, entity, red, green, blue)
```


---

*End of GRAPHICS natives part 5*
