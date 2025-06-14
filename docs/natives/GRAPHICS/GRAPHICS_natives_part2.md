# GRAPHICS Natives - Part 2 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** GRAPHICS  
**Natives in this file:** 50  
**Total natives in namespace:** 267  
**Generated from:** RDR3natives JSON data

---

## IS_PHOTO_FRAME

| Property | Value |
|----------|-------|
| Native Name | `IS_PHOTO_FRAME` |
| Hash | `0x86076AE35CBBE55F` |
| Return Type | `BOOL` |
| Build | `1355` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsPhotoFrame()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x86076AE35CBBE55F, )
```


---

## IS_TRACKED_POINT_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `IS_TRACKED_POINT_VISIBLE` |
| Hash | `0xCBB056BA159FB48D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `point` (int) |

### Parameters

- **`point`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsTrackedPointVisible(point)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCBB056BA159FB48D, point)
```


---

## IS_TVSHOW_CURRENTLY_PLAYING

**Description:** Old name: _IS_TV_PLAYLIST_ITEM_PLAYING

| Property | Value |
|----------|-------|
| Native Name | `IS_TVSHOW_CURRENTLY_PLAYING` |
| Hash | `0x4D562223E0EB65F3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `videoCliphash` (Hash) |

### Parameters

- **`videoCliphash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsTvshowCurrentlyPlaying(videoCliphash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4D562223E0EB65F3, videoCliphash)
```


---

## LOAD_MISSION_CREATOR_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `LOAD_MISSION_CREATOR_PHOTO` |
| Hash | `0x84F0BA7462FF8D58` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = LoadMissionCreatorPhoto(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x84F0BA7462FF8D58, p0, p1, p2, p3)
```


---

## PEDSHOT_IS_AVAILABLE

| Property | Value |
|----------|-------|
| Native Name | `PEDSHOT_IS_AVAILABLE` |
| Hash | `0xAF6E67D073D2DCE2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = PedshotIsAvailable()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAF6E67D073D2DCE2, )
```


---

## QUEUE_OPERATION_TO_CREATE_SORTED_LIST_OF_PHOTOS

| Property | Value |
|----------|-------|
| Native Name | `QUEUE_OPERATION_TO_CREATE_SORTED_LIST_OF_PHOTOS` |
| Hash | `0xA42EDF1E88734A7E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = QueueOperationToCreateSortedListOfPhotos()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA42EDF1E88734A7E, )
```


---

## REMOVE_DECAL

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_DECAL` |
| Hash | `0x49A720552EB0BB88` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `decal` (int) |

### Parameters

- **`decal`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemoveDecal(decal)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x49A720552EB0BB88, decal)
```


---

## REMOVE_DECALS_FROM_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_DECALS_FROM_OBJECT` |
| Hash | `0xFB8972BAE0013140` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `obj` (Object) |

### Parameters

- **`obj`** (`Object`)

### Usage

**Lua (Direct):**
```lua
RemoveDecalsFromObject(obj)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFB8972BAE0013140, obj)
```


---

## REMOVE_DECALS_IN_RANGE

**Description:** Removes all decals in range from a position, it includes the bullet holes, blood pools, petrol...

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_DECALS_IN_RANGE` |
| Hash | `0x86DE59FA02902B40` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `range` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`range`** (`float`)

### Usage

**Lua (Direct):**
```lua
RemoveDecalsInRange(x, y, z, range)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x86DE59FA02902B40, x, y, z, range)
```


---

## REMOVE_GRASS_CULL_SPHERE

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_GRASS_CULL_SPHERE` |
| Hash | `0xAE7BF7CA9E4BA48D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `handle` (int) |

### Parameters

- **`handle`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemoveGrassCullSphere(handle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE7BF7CA9E4BA48D, handle)
```


---

## REMOVE_PARTICLE_FX

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_PARTICLE_FX` |
| Hash | `0x459598F579C98929` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ptfxHandle` (int), `p1` (BOOL) |

### Parameters

- **`ptfxHandle`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemoveParticleFx(ptfxHandle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x459598F579C98929, ptfxHandle, p1)
```


---

## REMOVE_PARTICLE_FX_FROM_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_PARTICLE_FX_FROM_ENTITY` |
| Hash | `0x92884B4A49D81325` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
RemoveParticleFxFromEntity(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x92884B4A49D81325, entity)
```


---

## REMOVE_PARTICLE_FX_IN_RANGE

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_PARTICLE_FX_IN_RANGE` |
| Hash | `0x87B5905ECA623B68` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `X` (float), `Y` (float), `Z` (float), `radius` (float) |

### Parameters

- **`X`** (`float`)
- **`Y`** (`float`)
- **`Z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
RemoveParticleFxInRange(X, Y, Z, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x87B5905ECA623B68, X, Y, Z, radius)
```


---

## REMOVE_VEG_MODIFIER_SPHERE

**Description:** only works by invoking and passing as pointer value Citizen.InvokeNative(0x9CF1836C03FB67A2, Citizen.PointerValueIntInitialized(vegModifierId),1) p1 is 1 or 0

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_VEG_MODIFIER_SPHERE` |
| Hash | `0x9CF1836C03FB67A2` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `vegModifierHandle` (int), `p1` (int) |

### Parameters

- **`vegModifierHandle`** (`int`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemoveVegModifierSphere(vegModifierHandle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9CF1836C03FB67A2, vegModifierHandle, p1)
```


---

## RESET_ADAPTATION

**Description:** Sets an unknown value related to timecycles.

| Property | Value |
|----------|-------|
| Native Name | `RESET_ADAPTATION` |
| Hash | `0x297B72E2AF094742` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `unk` (int) |

### Parameters

- **`unk`** (`int`)

### Usage

**Lua (Direct):**
```lua
ResetAdaptation(unk)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x297B72E2AF094742, unk)
```


---

## RESET_PARTICLE_FX_OVERRIDE

**Description:** Resets the effect of SET_PARTICLE_FX_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `RESET_PARTICLE_FX_OVERRIDE` |
| Hash | `0x274B3DABF7E72DEF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (const char*) |

### Parameters

- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ResetParticleFxOverride(name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x274B3DABF7E72DEF, name)
```


---

## RESET_PAUSED_RENDERPHASES

| Property | Value |
|----------|-------|
| Native Name | `RESET_PAUSED_RENDERPHASES` |
| Hash | `0xCCD9AAD85E1B559E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetPausedRenderphases()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCCD9AAD85E1B559E, )
```


---

## SAVE_HIGH_QUALITY_PHOTO

| Property | Value |
|----------|-------|
| Native Name | `SAVE_HIGH_QUALITY_PHOTO` |
| Hash | `0x57639FD876B68A91` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `unused` (int) |

### Parameters

- **`unused`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = SaveHighQualityPhoto(unused)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57639FD876B68A91, unused)
```


---

## SET_ARTIFICIAL_LIGHTS_STATE

**Description:** Does not affect weapons, particles, fire/explosions, flashlights or the sun.
When set to true, all emissive textures (including ped components that have light effects), street lights, building lights, vehicle lights, etc will all be turned off.

state: True turns off all artificial light sources in the map: buildings, street lights, car lights, etc. False turns them back on.

| Property | Value |
|----------|-------|
| Native Name | `SET_ARTIFICIAL_LIGHTS_STATE` |
| Hash | `0xB2797619A7C7747B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `state` (BOOL) |

### Parameters

- **`state`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetArtificialLightsState(state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB2797619A7C7747B, state)
```


---

## SET_CHECKPOINT_RGBA

**Description:** Sets the checkpoint color.

| Property | Value |
|----------|-------|
| Native Name | `SET_CHECKPOINT_RGBA` |
| Hash | `0xCAAFC225E33B1D15` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `checkpoint` (int), `red` (int), `green` (int), `blue` (int), `alpha` (int) |

### Parameters

- **`checkpoint`** (`int`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)
- **`alpha`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetCheckpointRgba(checkpoint, red, green, blue, alpha)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCAAFC225E33B1D15, checkpoint, red, green, blue, alpha)
```


---

## SET_CHECKPOINT_RGBA2

**Description:** Sets the checkpoint icon color.

| Property | Value |
|----------|-------|
| Native Name | `SET_CHECKPOINT_RGBA2` |
| Hash | `0x99AFF17222D4DEB4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `checkpoint` (int), `red` (int), `green` (int), `blue` (int), `alpha` (int) |

### Parameters

- **`checkpoint`** (`int`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)
- **`alpha`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetCheckpointRgba2(checkpoint, red, green, blue, alpha)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x99AFF17222D4DEB4, checkpoint, red, green, blue, alpha)
```


---

## SET_DISABLE_PETROL_DECALS_IGNITING_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_DISABLE_PETROL_DECALS_IGNITING_THIS_FRAME` |
| Hash | `0x53ED07BF368EDA59` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetDisablePetrolDecalsIgnitingThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x53ED07BF368EDA59, )
```


---

## SET_GRASS_CULL_SPHERE

**Description:** Returns handle to be used with REMOVE_GRASS_CULL_SPHERE

| Property | Value |
|----------|-------|
| Native Name | `SET_GRASS_CULL_SPHERE` |
| Hash | `0x27219300C36A8D40` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (float), `p4` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = SetGrassCullSphere(x, y, z, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x27219300C36A8D40, x, y, z, p3, p4)
```


---

## SET_HIDOF_OVERRIDE

**Description:** Old name: _SET_HIDOF_ENV_BLUR_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `SET_HIDOF_OVERRIDE` |
| Hash | `0xCC23AA1A7CBFE840` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `p1` (BOOL), `p2` (float), `p3` (float), `p4` (float), `p5` (float) |

### Parameters

- **`p0`** (`BOOL`)
- **`p1`** (`BOOL`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetHidofOverride(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCC23AA1A7CBFE840, p0, p1, p2, p3, p4, p5)
```


---

## SET_PARTICLE_FX_AMBIENT_COLOUR

**Description:** Related to Campfires.
p1: AMB_BONFIRE_MP, AMB_CAMPFIRE_LRG_MP

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_AMBIENT_COLOUR` |
| Hash | `0x3C61B52B00848C26` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (const char*), `r` (float), `g` (float), `b` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`const char*`)
- **`r`** (`float`)
- **`g`** (`float`)
- **`b`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxAmbientColour(entity, p1, r, g, b)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3C61B52B00848C26, entity, p1, r, g, b)
```


---

## SET_PARTICLE_FX_BULLET_IMPACT_LODRANGE_SCALE

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_BULLET_IMPACT_LODRANGE_SCALE` |
| Hash | `0x8DCCC98DC0DBF9E4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxBulletImpactLodrangeScale(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8DCCC98DC0DBF9E4, p0)
```


---

## SET_PARTICLE_FX_BULLET_IMPACT_SCALE

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_BULLET_IMPACT_SCALE` |
| Hash | `0xA53C8D7D0F8C74D0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scale` (float) |

### Parameters

- **`scale`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxBulletImpactScale(scale)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA53C8D7D0F8C74D0, scale)
```


---

## SET_PARTICLE_FX_FOOT_LODRANGE_SCALE

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_FOOT_LODRANGE_SCALE` |
| Hash | `0x2A1625858887D4E6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxFootLodrangeScale(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2A1625858887D4E6, p0)
```


---

## SET_PARTICLE_FX_LOOPED_ALPHA

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_LOOPED_ALPHA` |
| Hash | `0x88786E76234F7054` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ptfxHandle` (int), `alpha` (float) |

### Parameters

- **`ptfxHandle`** (`int`)
- **`alpha`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxLoopedAlpha(ptfxHandle, alpha)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x88786E76234F7054, ptfxHandle, alpha)
```


---

## SET_PARTICLE_FX_LOOPED_COLOUR

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_LOOPED_COLOUR` |
| Hash | `0x239879FC61C610CC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ptfxHandle` (int), `r` (float), `g` (float), `b` (float), `p4` (BOOL) |

### Parameters

- **`ptfxHandle`** (`int`)
- **`r`** (`float`)
- **`g`** (`float`)
- **`b`** (`float`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxLoopedColour(ptfxHandle, r, g, b, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x239879FC61C610CC, ptfxHandle, r, g, b, p4)
```


---

## SET_PARTICLE_FX_LOOPED_EVOLUTION

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_LOOPED_EVOLUTION` |
| Hash | `0x3674F389B0FACD80` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ptfxHandle` (int), `propertyName` (const char*), `amount` (float), `noNetwork` (BOOL) |

### Parameters

- **`ptfxHandle`** (`int`)
- **`propertyName`** (`const char*`)
- **`amount`** (`float`)
- **`noNetwork`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxLoopedEvolution(ptfxHandle, propertyName, amount, noNetwork)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3674F389B0FACD80, ptfxHandle, propertyName, amount, noNetwork)
```


---

## SET_PARTICLE_FX_LOOPED_FAR_CLIP_DIST

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_LOOPED_FAR_CLIP_DIST` |
| Hash | `0x9B04D471DA0AD7AA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ptfxHandle` (int), `range` (float) |

### Parameters

- **`ptfxHandle`** (`int`)
- **`range`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxLoopedFarClipDist(ptfxHandle, range)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9B04D471DA0AD7AA, ptfxHandle, range)
```


---

## SET_PARTICLE_FX_LOOPED_OFFSETS

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_LOOPED_OFFSETS` |
| Hash | `0xD3A4A95FC94FE83B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ptfxHandle` (int), `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float) |

### Parameters

- **`ptfxHandle`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxLoopedOffsets(ptfxHandle, x, y, z, rotX, rotY, rotZ)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD3A4A95FC94FE83B, ptfxHandle, x, y, z, rotX, rotY, rotZ)
```


---

## SET_PARTICLE_FX_LOOPED_SCALE

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_LOOPED_SCALE` |
| Hash | `0x1A9E1C0D98D093B7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ptfxHandle` (int), `scale` (float) |

### Parameters

- **`ptfxHandle`** (`int`)
- **`scale`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxLoopedScale(ptfxHandle, scale)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1A9E1C0D98D093B7, ptfxHandle, scale)
```


---

## SET_PARTICLE_FX_NON_LOOPED_ALPHA

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_NON_LOOPED_ALPHA` |
| Hash | `0xE8A35938A7026CEA` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `alpha` (float) |

### Parameters

- **`alpha`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxNonLoopedAlpha(alpha)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE8A35938A7026CEA, alpha)
```


---

## SET_PARTICLE_FX_NON_LOOPED_COLOUR

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_NON_LOOPED_COLOUR` |
| Hash | `0x60B85BED6577A35B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `r` (float), `g` (float), `b` (float) |

### Parameters

- **`r`** (`float`)
- **`g`** (`float`)
- **`b`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxNonLoopedColour(r, g, b)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x60B85BED6577A35B, r, g, b)
```


---

## SET_PARTICLE_FX_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `SET_PARTICLE_FX_OVERRIDE` |
| Hash | `0xBE711A169E9C7E95` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `oldAsset` (const char*), `newAsset` (const char*) |

### Parameters

- **`oldAsset`** (`const char*`)
- **`newAsset`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetParticleFxOverride(oldAsset, newAsset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBE711A169E9C7E95, oldAsset, newAsset)
```


---

## SET_PICKUP_LIGHT

**Description:** https://imgur.com/a/I2swSDJ

Old name: _SET_PICKUP_OBJECT_GLOW_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `SET_PICKUP_LIGHT` |
| Hash | `0x7DFB49BCDB73089A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `toggle` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPickupLight(object, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7DFB49BCDB73089A, object, toggle)
```


---

## SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU

**Description:** Sets a flag defining whether or not script draw commands should continue being drawn behind the pause menu. This is usually used for draw commands that are used with a world render target.

| Property | Value |
|----------|-------|
| Native Name | `SET_SCRIPT_GFX_DRAW_BEHIND_PAUSEMENU` |
| Hash | `0x906B86E6D7896B9E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScriptGfxDrawBehindPausemenu(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x906B86E6D7896B9E, toggle)
```


---

## SET_SCRIPT_GFX_DRAW_ORDER

**Description:** Sets the draw order for script draw commands.

| Property | Value |
|----------|-------|
| Native Name | `SET_SCRIPT_GFX_DRAW_ORDER` |
| Hash | `0xCFCC78391C8B3814` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `drawOrder` (int) |

### Parameters

- **`drawOrder`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetScriptGfxDrawOrder(drawOrder)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCFCC78391C8B3814, drawOrder)
```


---

## SET_TIMECYCLE_MODIFIER

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/graphics/timecycles

| Property | Value |
|----------|-------|
| Native Name | `SET_TIMECYCLE_MODIFIER` |
| Hash | `0xFA08722A5EA82DA7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `modifierName` (const char*) |

### Parameters

- **`modifierName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetTimecycleModifier(modifierName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA08722A5EA82DA7, modifierName)
```


---

## SET_TIMECYCLE_MODIFIER_STRENGTH

| Property | Value |
|----------|-------|
| Native Name | `SET_TIMECYCLE_MODIFIER_STRENGTH` |
| Hash | `0xFDB74C9CC54C3F37` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `strength` (float) |

### Parameters

- **`strength`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTimecycleModifierStrength(strength)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFDB74C9CC54C3F37, strength)
```


---

## SET_TRACKED_POINT_INFO

| Property | Value |
|----------|-------|
| Native Name | `SET_TRACKED_POINT_INFO` |
| Hash | `0xF6FDA3D4404D4F2C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `point` (int), `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`point`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTrackedPointInfo(point, x, y, z, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF6FDA3D4404D4F2C, point, x, y, z, radius)
```


---

## SET_TRANSITION_OUT_OF_TIMECYCLE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_TRANSITION_OUT_OF_TIMECYCLE_MODIFIER` |
| Hash | `0xBB6C707F20D955D4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `strength` (float) |

### Parameters

- **`strength`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTransitionOutOfTimecycleModifier(strength)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB6C707F20D955D4, strength)
```


---

## SET_TRANSITION_TIMECYCLE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_TRANSITION_TIMECYCLE_MODIFIER` |
| Hash | `0xFF927A09F481D80C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `modifierName` (const char*), `transitionBlend` (float) |

### Parameters

- **`modifierName`** (`const char*`)
- **`transitionBlend`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTransitionTimecycleModifier(modifierName, transitionBlend)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFF927A09F481D80C, modifierName, transitionBlend)
```


---

## SET_TV_AUDIO_FRONTEND

**Description:** Probably changes tvs from being a 3d audio to being "global" audio

| Property | Value |
|----------|-------|
| Native Name | `SET_TV_AUDIO_FRONTEND` |
| Hash | `0x64437C98FCC5F291` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetTvAudioFrontend(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x64437C98FCC5F291, toggle)
```


---

## SET_TV_CHANNEL

| Property | Value |
|----------|-------|
| Native Name | `SET_TV_CHANNEL` |
| Hash | `0x593FAF7FC9401A56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `channel` (int) |

### Parameters

- **`channel`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetTvChannel(channel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x593FAF7FC9401A56, channel)
```


---

## SET_TV_CHANNEL_PLAYLIST

| Property | Value |
|----------|-------|
| Native Name | `SET_TV_CHANNEL_PLAYLIST` |
| Hash | `0xDEC6B25F5DC8925B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `tvChannel` (int), `playlistName` (const char*), `restart` (BOOL) |

### Parameters

- **`tvChannel`** (`int`)
- **`playlistName`** (`const char*`)
- **`restart`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetTvChannelPlaylist(tvChannel, playlistName, restart)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDEC6B25F5DC8925B, tvChannel, playlistName, restart)
```


---

## SET_TV_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `SET_TV_VOLUME` |
| Hash | `0x73A97068787D7231` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (float) |

### Parameters

- **`volume`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTvVolume(volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x73A97068787D7231, volume)
```


---

## START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY` |
| Hash | `0x8F90AB32E1944BDE` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `entity` (Entity), `xOffset` (float), `yOffset` (float), `zOffset` (float), `xRot` (float), `yRot` (float), `zRot` (float), `scale` (float), `xAxis` (BOOL), `yAxis` (BOOL), `zAxis` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`entity`** (`Entity`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`scale`** (`float`)
- **`xAxis`** (`BOOL`)
- **`yAxis`** (`BOOL`)
- **`zAxis`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartNetworkedParticleFxLoopedOnEntity(effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8F90AB32E1944BDE, effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis)
```


---

*End of GRAPHICS natives part 2*
