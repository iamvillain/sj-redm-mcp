# GRAPHICS Natives - Part 1 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** GRAPHICS  
**Natives in this file:** 50  
**Total natives in namespace:** 267  
**Generated from:** RDR3natives JSON data

---

## ADD_DECAL

| Property | Value |
|----------|-------|
| Native Name | `ADD_DECAL` |
| Hash | `0x57CB267624EF85C0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any), `p11` (Any), `p12` (Any), `p13` (Any), `p14` (Any), `p15` (Any), `p16` (Any), `p17` (Any), `p18` (Any), `p19` (Any), `p20` (Any), `p21` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)
- **`p9`** (`Any`)
- **`p10`** (`Any`)
- **`p11`** (`Any`)
- **`p12`** (`Any`)
- **`p13`** (`Any`)
- **`p14`** (`Any`)
- **`p15`** (`Any`)
- **`p16`** (`Any`)
- **`p17`** (`Any`)
- **`p18`** (`Any`)
- **`p19`** (`Any`)
- **`p20`** (`Any`)
- **`p21`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = AddDecal(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57CB267624EF85C0, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21)
```


---

## ADD_PETROL_TRAIL_DECAL_INFO

| Property | Value |
|----------|-------|
| Native Name | `ADD_PETROL_TRAIL_DECAL_INFO` |
| Hash | `0x73354FB6D03D2E8A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddPetrolTrailDecalInfo(x, y, z, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x73354FB6D03D2E8A, x, y, z, p3)
```


---

## ADD_VEG_MODIFIER_SPHERE

**Description:** Returns veg modifier handle

| Property | Value |
|----------|-------|
| Native Name | `ADD_VEG_MODIFIER_SPHERE` |
| Hash | `0xFA50F79257745E74` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `modType` (int), `flags` (int), `p6` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`modType`** (`int`)
- **`flags`** (`int`)
- **`p6`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = AddVegModifierSphere(x, y, z, radius, modType, flags, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFA50F79257745E74, x, y, z, radius, modType, flags, p6)
```


---

## ALLOW_PICKUP_LIGHT_SYNC

| Property | Value |
|----------|-------|
| Native Name | `ALLOW_PICKUP_LIGHT_SYNC` |
| Hash | `0x7C348310A6E2FB91` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pickupObject` (Object), `allow` (BOOL) |

### Parameters

- **`pickupObject`** (`Object`)
- **`allow`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AllowPickupLightSync(pickupObject, allow)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C348310A6E2FB91, pickupObject, allow)
```


---

## ANIMPOSTFX_HAS_EVENT_TRIGGERED_BY_STACKHASH

| Property | Value |
|----------|-------|
| Native Name | `ANIMPOSTFX_HAS_EVENT_TRIGGERED_BY_STACKHASH` |
| Hash | `0x9AB192A9EF980EED` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `effectNameHash` (Hash), `p1` (int), `p2` (BOOL), `p3` (BOOL*) |

### Parameters

- **`effectNameHash`** (`Hash`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL*`)

### Usage

**Lua (Direct):**
```lua
local result = AnimpostfxHasEventTriggeredByStackhash(effectNameHash, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9AB192A9EF980EED, effectNameHash, p1, p2, p3)
```


---

## ANIMPOSTFX_IS_PRELOADING_BY_STACKHASH

| Property | Value |
|----------|-------|
| Native Name | `ANIMPOSTFX_IS_PRELOADING_BY_STACKHASH` |
| Hash | `0x59EA80079B86D8C7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `effectNameHash` (Hash) |

### Parameters

- **`effectNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = AnimpostfxIsPreloadingByStackhash(effectNameHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x59EA80079B86D8C7, effectNameHash)
```


---

## ANIMPOSTFX_IS_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `ANIMPOSTFX_IS_RUNNING` |
| Hash | `0x4A123E85D7C4CA0B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `effectName` (const char*) |

### Parameters

- **`effectName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = AnimpostfxIsRunning(effectName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4A123E85D7C4CA0B, effectName)
```


---

## ANIMPOSTFX_PLAY

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/graphics/animpostfx

| Property | Value |
|----------|-------|
| Native Name | `ANIMPOSTFX_PLAY` |
| Hash | `0x4102732DF6B4005F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectName` (const char*) |

### Parameters

- **`effectName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxPlay(effectName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4102732DF6B4005F, effectName)
```


---

## ANIMPOSTFX_STOP

| Property | Value |
|----------|-------|
| Native Name | `ANIMPOSTFX_STOP` |
| Hash | `0xB4FD7446BAB2F394` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectName` (const char*) |

### Parameters

- **`effectName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
AnimpostfxStop(effectName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB4FD7446BAB2F394, effectName)
```


---

## ANIMPOSTFX_STOP_ALL

| Property | Value |
|----------|-------|
| Native Name | `ANIMPOSTFX_STOP_ALL` |
| Hash | `0x66560A0D4C64FD21` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
AnimpostfxStopAll()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66560A0D4C64FD21, )
```


---

## ATTACH_TV_AUDIO_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `ATTACH_TV_AUDIO_TO_ENTITY` |
| Hash | `0x40866A418EB8EFDE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
AttachTvAudioToEntity(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x40866A418EB8EFDE, entity)
```


---

## BEGIN_CREATE_LOW_QUALITY_COPY_OF_PHOTO

**Description:** Called together with FREE_MEMORY_FOR_LOW_QUALITY_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `BEGIN_CREATE_LOW_QUALITY_COPY_OF_PHOTO` |
| Hash | `0x494A9874F17A7D50` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = BeginCreateLowQualityCopyOfPhoto(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x494A9874F17A7D50, p0)
```


---

## BEGIN_TAKE_HIGH_QUALITY_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `BEGIN_TAKE_HIGH_QUALITY_PHOTO` |
| Hash | `0xA15BFFC0A01B34E1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = BeginTakeHighQualityPhoto()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA15BFFC0A01B34E1, )
```


---

## BLOCK_PICKUP_PLACEMENT_LIGHT

| Property | Value |
|----------|-------|
| Native Name | `BLOCK_PICKUP_PLACEMENT_LIGHT` |
| Hash | `0x0552AA3FFC5B87AA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pickup` (Pickup), `toggle` (BOOL) |

### Parameters

- **`pickup`** (`Pickup`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
BlockPickupPlacementLight(pickup, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0552AA3FFC5B87AA, pickup, toggle)
```


---

## CASCADE_SHADOWS_CLEAR_SHADOW_SAMPLE_TYPE

| Property | Value |
|----------|-------|
| Native Name | `CASCADE_SHADOWS_CLEAR_SHADOW_SAMPLE_TYPE` |
| Hash | `0xF7C29D7C12C36F03` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
CascadeShadowsClearShadowSampleType()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF7C29D7C12C36F03, )
```


---

## CASCADE_SHADOWS_ENABLE_ENTITY_TRACKER

**Description:** When this is set to ON, shadows only draw as you get nearer.

When OFF, they draw from a further distance.

| Property | Value |
|----------|-------|
| Native Name | `CASCADE_SHADOWS_ENABLE_ENTITY_TRACKER` |
| Hash | `0x8FBFD2AEB196B369` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
CascadeShadowsEnableEntityTracker(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8FBFD2AEB196B369, toggle)
```


---

## CASCADE_SHADOWS_SET_CASCADE_BOUNDS

| Property | Value |
|----------|-------|
| Native Name | `CASCADE_SHADOWS_SET_CASCADE_BOUNDS` |
| Hash | `0xD9EDB2E4512D563E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (BOOL), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (BOOL), `p7` (float) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`BOOL`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`BOOL`)
- **`p7`** (`float`)

### Usage

**Lua (Direct):**
```lua
CascadeShadowsSetCascadeBounds(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD9EDB2E4512D563E, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## CASCADE_SHADOWS_SET_SHADOW_SAMPLE_TYPE

**Description:** Possible values:
"CSM_ST_POINT"
"CSM_ST_LINEAR"
"CSM_ST_BOX3x3"
"CSM_ST_BOX4x4"
"CSM_ST_DITHER2_LINEAR"
"CSM_ST_CUBIC"
"CSM_ST_POISSON16"
"CSM_ST_SOFT8"
"CSM_ST_SOFT16"
"CSM_ST_SOFT32"
"CSM_ST_DITHER16_RPDB"
"CSM_ST_POISSON16_RPDB_GNORM"
"CSM_ST_HIGHRES_BOX4x4"
"CSM_ST_ESM"

| Property | Value |
|----------|-------|
| Native Name | `CASCADE_SHADOWS_SET_SHADOW_SAMPLE_TYPE` |
| Hash | `0xCE4774E0F9AD48D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `type` (const char*) |

### Parameters

- **`type`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
CascadeShadowsSetShadowSampleType(type)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE4774E0F9AD48D1, type)
```


---

## CLEAR_TIMECYCLE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_TIMECYCLE_MODIFIER` |
| Hash | `0x0E3F4AF2D63491FB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearTimecycleModifier()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0E3F4AF2D63491FB, )
```


---

## CREATE_CHECKPOINT_WITH_NAMEHASH

| Property | Value |
|----------|-------|
| Native Name | `CREATE_CHECKPOINT_WITH_NAMEHASH` |
| Hash | `0x175668836B44CBB0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `typeHash` (Hash), `posX1` (float), `posY1` (float), `posZ1` (float), `posX2` (float), `posY2` (float), `posZ2` (float), `radius` (float), `red` (int), `green` (int), `blue` (int), `alpha` (int), `reserved` (int) |

### Parameters

- **`typeHash`** (`Hash`)
- **`posX1`** (`float`)
- **`posY1`** (`float`)
- **`posZ1`** (`float`)
- **`posX2`** (`float`)
- **`posY2`** (`float`)
- **`posZ2`** (`float`)
- **`radius`** (`float`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)
- **`alpha`** (`int`)
- **`reserved`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CreateCheckpointWithNamehash(typeHash, posX1, posY1, posZ1, posX2, posY2, posZ2, radius, red, green, blue, alpha, reserved)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x175668836B44CBB0, typeHash, posX1, posY1, posZ1, posX2, posY2, posZ2, radius, red, green, blue, alpha, reserved)
```


---

## CREATE_TRACKED_POINT

**Description:** Creates a tracked point, useful for checking the visibility of a 3D point on screen.

| Property | Value |
|----------|-------|
| Native Name | `CREATE_TRACKED_POINT` |
| Hash | `0xFB405CB357C69CB9` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = CreateTrackedPoint()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFB405CB357C69CB9, )
```


---

## DELETE_CHECKPOINT

| Property | Value |
|----------|-------|
| Native Name | `DELETE_CHECKPOINT` |
| Hash | `0x0DED5B0C8EBAAE12` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `checkpoint` (int) |

### Parameters

- **`checkpoint`** (`int`)

### Usage

**Lua (Direct):**
```lua
DeleteCheckpoint(checkpoint)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0DED5B0C8EBAAE12, checkpoint)
```


---

## DESTROY_TRACKED_POINT

| Property | Value |
|----------|-------|
| Native Name | `DESTROY_TRACKED_POINT` |
| Hash | `0x37A59922109F8F1C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `point` (int) |

### Parameters

- **`point`** (`int`)

### Usage

**Lua (Direct):**
```lua
DestroyTrackedPoint(point)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x37A59922109F8F1C, point)
```


---

## DISABLE_ENTITYMASK

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_ENTITYMASK` |
| Hash | `0x5C9978A2A3DC3D0D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
DisableEntitymask()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5C9978A2A3DC3D0D, )
```


---

## DISABLE_HDTEX_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_HDTEX_THIS_FRAME` |
| Hash | `0x98A7CD5EA379A854` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
DisableHdtexThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x98A7CD5EA379A854, )
```


---

## DOES_PARTICLE_FX_LOOPED_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_PARTICLE_FX_LOOPED_EXIST` |
| Hash | `0x9DD5AFF561E88F2A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ptfxHandle` (int) |

### Parameters

- **`ptfxHandle`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesParticleFxLoopedExist(ptfxHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9DD5AFF561E88F2A, ptfxHandle)
```


---

## DRAW_LIGHT_WITH_RANGE

| Property | Value |
|----------|-------|
| Native Name | `DRAW_LIGHT_WITH_RANGE` |
| Hash | `0xD2D9E04C0DF927F4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `posX` (float), `posY` (float), `posZ` (float), `colorR` (int), `colorG` (int), `colorB` (int), `range` (float), `intensity` (float) |

### Parameters

- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`colorR`** (`int`)
- **`colorG`** (`int`)
- **`colorB`** (`int`)
- **`range`** (`float`)
- **`intensity`** (`float`)

### Usage

**Lua (Direct):**
```lua
DrawLightWithRange(posX, posY, posZ, colorR, colorG, colorB, range, intensity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD2D9E04C0DF927F4, posX, posY, posZ, colorR, colorG, colorB, range, intensity)
```


---

## DRAW_LOW_QUALITY_PHOTO_TO_PHONE

**Description:** nullsub, doesn't do anything (GTA5 leftover, there is no phone in RDR3)

| Property | Value |
|----------|-------|
| Native Name | `DRAW_LOW_QUALITY_PHOTO_TO_PHONE` |
| Hash | `0xF1142E5D64B47802` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `photoRotation` (int) |

### Parameters

- **`p0`** (`BOOL`)
- **`photoRotation`** (`int`)

### Usage

**Lua (Direct):**
```lua
DrawLowQualityPhotoToPhone(p0, photoRotation)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF1142E5D64B47802, p0, photoRotation)
```


---

## DRAW_RECT

**Description:** Draws a rectangle on the screen.

-x: The relative X point of the center of the rectangle. (0.0-1.0, 0.0 is the left edge of the screen, 1.0 is the right edge of the screen)

-y: The relative Y point of the center of the rectangle. (0.0-1.0, 0.0 is the top edge of the screen, 1.0 is the bottom edge of the screen)

-width: The relative width of the rectangle. (0.0-1.0, 1.0 means the whole screen width)

-height: The relative height of the rectangle. (0.0-1.0, 1.0 means the whole screen height)

-R: Red part of the color. (0-255)

-G: Green part of the color. (0-255)

-B: Blue part of the color. (0-255)

-A: Alpha part of the color. (0-255, 0 means totally transparent, 255 means totally opaque)

| Property | Value |
|----------|-------|
| Native Name | `DRAW_RECT` |
| Hash | `0x405224591DF02025` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `width` (float), `height` (float), `red` (int), `green` (int), `blue` (int), `alpha` (int), `p8` (BOOL), `p9` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`width`** (`float`)
- **`height`** (`float`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)
- **`alpha`** (`int`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DrawRect(x, y, width, height, red, green, blue, alpha, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x405224591DF02025, x, y, width, height, red, green, blue, alpha, p8, p9)
```


---

## DRAW_SPRITE

**Description:** Draws a 2D sprite on the screen.

Parameters:
textureDict - Name of texture dictionary to load texture from

textureName - Name of texture to load from texture dictionary

screenX/Y - Screen offset (0.5 = center)
scaleX/Y - Texture scaling. Negative values can be used to flip the texture on that axis. (0.5 = half)

heading - Texture rotation in degrees (default = 0.0) positive is clockwise, measured in degrees

red,green,blue - Sprite color (default = 255/255/255)

alpha - opacity level

https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures

| Property | Value |
|----------|-------|
| Native Name | `DRAW_SPRITE` |
| Hash | `0xC9884ECADE94CB34` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureDict` (const char*), `textureName` (const char*), `screenX` (float), `screenY` (float), `width` (float), `height` (float), `heading` (float), `red` (int), `green` (int), `blue` (int), `alpha` (int), `p11` (BOOL) |

### Parameters

- **`textureDict`** (`const char*`)
- **`textureName`** (`const char*`)
- **`screenX`** (`float`)
- **`screenY`** (`float`)
- **`width`** (`float`)
- **`height`** (`float`)
- **`heading`** (`float`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)
- **`alpha`** (`int`)
- **`p11`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DrawSprite(textureDict, textureName, screenX, screenY, width, height, heading, red, green, blue, alpha, p11)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC9884ECADE94CB34, textureDict, textureName, screenX, screenY, width, height, heading, red, green, blue, alpha, p11)
```


---

## DRAW_TV_CHANNEL

| Property | Value |
|----------|-------|
| Native Name | `DRAW_TV_CHANNEL` |
| Hash | `0xC0A145540254A840` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `xPos` (float), `yPos` (float), `xScale` (float), `yScale` (float), `rotation` (float), `red` (int), `green` (int), `blue` (int), `alpha` (int) |

### Parameters

- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`xScale`** (`float`)
- **`yScale`** (`float`)
- **`rotation`** (`float`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)
- **`alpha`** (`int`)

### Usage

**Lua (Direct):**
```lua
DrawTvChannel(xPos, yPos, xScale, yScale, rotation, red, green, blue, alpha)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC0A145540254A840, xPos, yPos, xScale, yScale, rotation, red, green, blue, alpha)
```


---

## ENABLE_ENTITYMASK

| Property | Value |
|----------|-------|
| Native Name | `ENABLE_ENTITYMASK` |
| Hash | `0xFAAD23DE7A54FC14` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
EnableEntitymask()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFAAD23DE7A54FC14, )
```


---

## ENABLE_MOON_CYCLE_OVERRIDE

**Description:** Old name: _ENABLE_EXTRA_TIMECYCLE_MODIFIER_STRENGTH

| Property | Value |
|----------|-------|
| Native Name | `ENABLE_MOON_CYCLE_OVERRIDE` |
| Hash | `0x6FE93BCC7BF12B63` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `strength` (float) |

### Parameters

- **`strength`** (`float`)

### Usage

**Lua (Direct):**
```lua
EnableMoonCycleOverride(strength)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6FE93BCC7BF12B63, strength)
```


---

## ENABLE_MOVIE_SUBTITLES

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `ENABLE_MOVIE_SUBTITLES` |
| Hash | `0x6FC9B065229C0787` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EnableMovieSubtitles(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6FC9B065229C0787, toggle)
```


---

## END_PETROL_TRAIL_DECALS

| Property | Value |
|----------|-------|
| Native Name | `END_PETROL_TRAIL_DECALS` |
| Hash | `0x0E126AAE933F3B56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
EndPetrolTrailDecals()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0E126AAE933F3B56, )
```


---

## FREE_MEMORY_FOR_HIGH_QUALITY_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `FREE_MEMORY_FOR_HIGH_QUALITY_PHOTO` |
| Hash | `0xD45547D8396F002A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
FreeMemoryForHighQualityPhoto()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD45547D8396F002A, )
```


---

## FREE_MEMORY_FOR_LOW_QUALITY_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `FREE_MEMORY_FOR_LOW_QUALITY_PHOTO` |
| Hash | `0x614682E715ADBAAC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
FreeMemoryForLowQualityPhoto()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x614682E715ADBAAC, )
```


---

## FREE_MEMORY_FOR_MISSION_CREATOR_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `FREE_MEMORY_FOR_MISSION_CREATOR_PHOTO` |
| Hash | `0x7DFF8F94937D2659` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
FreeMemoryForMissionCreatorPhoto()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7DFF8F94937D2659, )
```


---

## GET_SCREEN_COORD_FROM_WORLD_COORD

| Property | Value |
|----------|-------|
| Native Name | `GET_SCREEN_COORD_FROM_WORLD_COORD` |
| Hash | `0xCB50D7AFCC8B0EC6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `worldX` (float), `worldY` (float), `worldZ` (float), `screenX` (float*), `screenY` (float*) |

### Parameters

- **`worldX`** (`float`)
- **`worldY`** (`float`)
- **`worldZ`** (`float`)
- **`screenX`** (`float*`)
- **`screenY`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = GetScreenCoordFromWorldCoord(worldX, worldY, worldZ, screenX, screenY)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB50D7AFCC8B0EC6, worldX, worldY, worldZ, screenX, screenY)
```


---

## GET_SCREEN_RESOLUTION

**Description:** Hardcoded to always set x to 1280 and y to 720.

| Property | Value |
|----------|-------|
| Native Name | `GET_SCREEN_RESOLUTION` |
| Hash | `0x66773C92835D0909` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (int*), `y` (int*) |

### Parameters

- **`x`** (`int*`)
- **`y`** (`int*`)

### Usage

**Lua (Direct):**
```lua
GetScreenResolution(x, y)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66773C92835D0909, x, y)
```


---

## GET_STATUS_OF_CREATE_LOW_QUALITY_COPY_OF_PHOTO

**Description:** Old name: _GET_STATUS_OF_DRAW_LOW_QUALITY_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `GET_STATUS_OF_CREATE_LOW_QUALITY_COPY_OF_PHOTO` |
| Hash | `0x13430D3D5A45F14B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = GetStatusOfCreateLowQualityCopyOfPhoto(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x13430D3D5A45F14B, p0)
```


---

## GET_STATUS_OF_LOAD_MISSION_CREATOR_PHOTO

**Description:** contentId: returned by NETWORK::_UGC_QUERY_GET_CREATOR_PHOTO(uVar0, 0, sParam3)

| Property | Value |
|----------|-------|
| Native Name | `GET_STATUS_OF_LOAD_MISSION_CREATOR_PHOTO` |
| Hash | `0xC71B50AE58D07369` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `contentId` (const char*) |

### Parameters

- **`contentId`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetStatusOfLoadMissionCreatorPhoto(contentId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC71B50AE58D07369, contentId)
```


---

## GET_STATUS_OF_SAVE_HIGH_QUALITY_PHOTO

**Description:** 0 = succeeded
1 = getting status
2 = failed

| Property | Value |
|----------|-------|
| Native Name | `GET_STATUS_OF_SAVE_HIGH_QUALITY_PHOTO` |
| Hash | `0xD6663EC374092383` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetStatusOfSaveHighQualityPhoto()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD6663EC374092383, )
```


---

## GET_STATUS_OF_SORTED_LIST_OPERATION

**Description:** 0 = succeeded
1 = getting status
2 = failed

| Property | Value |
|----------|-------|
| Native Name | `GET_STATUS_OF_SORTED_LIST_OPERATION` |
| Hash | `0xB28894CD7408BD0C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetStatusOfSortedListOperation()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB28894CD7408BD0C, )
```


---

## GET_STATUS_OF_TAKE_HIGH_QUALITY_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `GET_STATUS_OF_TAKE_HIGH_QUALITY_PHOTO` |
| Hash | `0x4A3DA74C3CCB1725` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetStatusOfTakeHighQualityPhoto()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4A3DA74C3CCB1725, )
```


---

## GET_TIMECYCLE_MODIFIER_INDEX

| Property | Value |
|----------|-------|
| Native Name | `GET_TIMECYCLE_MODIFIER_INDEX` |
| Hash | `0xA705394293E2B3D3` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetTimecycleModifierIndex()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA705394293E2B3D3, )
```


---

## GET_TIMECYCLE_TRANSITION_MODIFIER_INDEX

| Property | Value |
|----------|-------|
| Native Name | `GET_TIMECYCLE_TRANSITION_MODIFIER_INDEX` |
| Hash | `0x2DA67BA3C8A6755D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetTimecycleTransitionModifierIndex()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2DA67BA3C8A6755D, )
```


---

## GET_TOGGLE_PAUSED_RENDERPHASES_STATUS

| Property | Value |
|----------|-------|
| Native Name | `GET_TOGGLE_PAUSED_RENDERPHASES_STATUS` |
| Hash | `0x86ED21BDB2791CE8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetTogglePausedRenderphasesStatus()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x86ED21BDB2791CE8, )
```


---

## GET_TV_CHANNEL

| Property | Value |
|----------|-------|
| Native Name | `GET_TV_CHANNEL` |
| Hash | `0xF90FBFD68F3C59AE` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetTvChannel()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF90FBFD68F3C59AE, )
```


---

## IS_DECAL_ALIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_DECAL_ALIVE` |
| Hash | `0x3E4B4E5CF5D3EEB5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `decal` (int) |

### Parameters

- **`decal`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsDecalAlive(decal)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3E4B4E5CF5D3EEB5, decal)
```


---

*End of GRAPHICS natives part 1*
