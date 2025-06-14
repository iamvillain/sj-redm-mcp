# CAM Natives - Part 1 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** CAM  
**Natives in this file:** 50  
**Total natives in namespace:** 233  
**Generated from:** RDR3natives JSON data

---

## ADD_CAM_SPLINE_NODE

**Description:** p7 (length) determines the length of the spline, affects camera path and duration of transition between previous node and this one

p8 big values ~100 will slow down the camera movement before reaching this node

p9 != 0 seems to override the rotation/pitch (bool?)

| Property | Value |
|----------|-------|
| Native Name | `ADD_CAM_SPLINE_NODE` |
| Hash | `0xF1F57F9D230F9CD1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `camera` (Cam), `x` (float), `y` (float), `z` (float), `xRot` (float), `yRot` (float), `zRot` (float), `length` (int), `p8` (int), `p9` (int) |

### Parameters

- **`camera`** (`Cam`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`length`** (`int`)
- **`p8`** (`int`)
- **`p9`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddCamSplineNode(camera, x, y, z, xRot, yRot, zRot, length, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF1F57F9D230F9CD1, camera, x, y, z, xRot, yRot, zRot, length, p8, p9)
```


---

## ALLOW_MOTION_BLUR_DECAY

| Property | Value |
|----------|-------|
| Native Name | `ALLOW_MOTION_BLUR_DECAY` |
| Hash | `0x42ED56B02E05D109` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `p1` (BOOL) |

### Parameters

- **`cam`** (`Cam`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AllowMotionBlurDecay(cam, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x42ED56B02E05D109, cam, p1)
```


---

## ATTACH_CAM_TO_ENTITY

**Description:** Last param determines if its relative to the Entity

| Property | Value |
|----------|-------|
| Native Name | `ATTACH_CAM_TO_ENTITY` |
| Hash | `0xFDC0DF7F6FB0A592` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `entity` (Entity), `xOffset` (float), `yOffset` (float), `zOffset` (float), `isRelative` (BOOL) |

### Parameters

- **`cam`** (`Cam`)
- **`entity`** (`Entity`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)
- **`isRelative`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AttachCamToEntity(cam, entity, xOffset, yOffset, zOffset, isRelative)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFDC0DF7F6FB0A592, cam, entity, xOffset, yOffset, zOffset, isRelative)
```


---

## ATTACH_CAM_TO_PED_BONE

**Description:** boneIndex: https://github.com/femga/rdr3_discoveries/tree/master/boneNames

| Property | Value |
|----------|-------|
| Native Name | `ATTACH_CAM_TO_PED_BONE` |
| Hash | `0xDFC1E4A44C0324CA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `ped` (Ped), `boneIndex` (int), `x` (float), `y` (float), `z` (float), `heading` (BOOL) |

### Parameters

- **`cam`** (`Cam`)
- **`ped`** (`Ped`)
- **`boneIndex`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AttachCamToPedBone(cam, ped, boneIndex, x, y, z, heading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDFC1E4A44C0324CA, cam, ped, boneIndex, x, y, z, heading)
```


---

## CINEMATIC_LOCATION_OVERRIDE_TARGET_ENTITY_THIS_UPDATE

**Description:** Only used in R* Script fm_mission_controller

| Property | Value |
|----------|-------|
| Native Name | `CINEMATIC_LOCATION_OVERRIDE_TARGET_ENTITY_THIS_UPDATE` |
| Hash | `0x0B0F914459731F60` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `name` (const char*), `entity` (Entity) |

### Parameters

- **`name`** (`const char*`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
CinematicLocationOverrideTargetEntityThisUpdate(name, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0B0F914459731F60, name, entity)
```


---

## CINEMATIC_LOCATION_STOP_SCRIPTED_SHOT_EVENT

| Property | Value |
|----------|-------|
| Native Name | `CINEMATIC_LOCATION_STOP_SCRIPTED_SHOT_EVENT` |
| Hash | `0x6D4D25C2137FF511` |
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
CinematicLocationStopScriptedShotEvent(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D4D25C2137FF511, p0, p1, p2)
```


---

## CINEMATIC_LOCATION_TRIGGER_SCRIPTED_SHOT_EVENT

| Property | Value |
|----------|-------|
| Native Name | `CINEMATIC_LOCATION_TRIGGER_SCRIPTED_SHOT_EVENT` |
| Hash | `0x02389579A53C3276` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `dictionary` (const char*), `shotName` (const char*), `cameraName` (const char*), `p3` (Any) |

### Parameters

- **`dictionary`** (`const char*`)
- **`shotName`** (`const char*`)
- **`cameraName`** (`const char*`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
CinematicLocationTriggerScriptedShotEvent(dictionary, shotName, cameraName, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x02389579A53C3276, dictionary, shotName, cameraName, p3)
```


---

## CREATE_CAM

| Property | Value |
|----------|-------|
| Native Name | `CREATE_CAM` |
| Hash | `0xE72CDBA7F0A02DD6` |
| Return Type | `Cam` |
| Build | `1207` |
| Parameters | `camName` (const char*), `p1` (BOOL) |

### Parameters

- **`camName`** (`const char*`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateCam(camName, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE72CDBA7F0A02DD6, camName, p1)
```


---

## CREATE_CAMERA

| Property | Value |
|----------|-------|
| Native Name | `CREATE_CAMERA` |
| Hash | `0x57CDF879EA466C46` |
| Return Type | `Cam` |
| Build | `1207` |
| Parameters | `camHash` (Hash), `p1` (BOOL) |

### Parameters

- **`camHash`** (`Hash`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateCamera(camHash, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57CDF879EA466C46, camHash, p1)
```


---

## CREATE_CAMERA_WITH_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `CREATE_CAMERA_WITH_PARAMS` |
| Hash | `0x98B99B9F27E2D60B` |
| Return Type | `Cam` |
| Build | `1207` |
| Parameters | `camHash` (Hash), `posX` (float), `posY` (float), `posZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `fov` (float), `p8` (BOOL), `p9` (Any) |

### Parameters

- **`camHash`** (`Hash`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`fov`** (`float`)
- **`p8`** (`BOOL`)
- **`p9`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CreateCameraWithParams(camHash, posX, posY, posZ, rotX, rotY, rotZ, fov, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x98B99B9F27E2D60B, camHash, posX, posY, posZ, rotX, rotY, rotZ, fov, p8, p9)
```


---

## CREATE_CAM_WITH_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `CREATE_CAM_WITH_PARAMS` |
| Hash | `0x40C23491CE83708E` |
| Return Type | `Cam` |
| Build | `1207` |
| Parameters | `camName` (const char*), `posX` (float), `posY` (float), `posZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `fov` (float), `p8` (BOOL), `p9` (int) |

### Parameters

- **`camName`** (`const char*`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`fov`** (`float`)
- **`p8`** (`BOOL`)
- **`p9`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CreateCamWithParams(camName, posX, posY, posZ, rotX, rotY, rotZ, fov, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x40C23491CE83708E, camName, posX, posY, posZ, rotX, rotY, rotZ, fov, p8, p9)
```


---

## DESTROY_ALL_CAMS

**Description:** BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.

| Property | Value |
|----------|-------|
| Native Name | `DESTROY_ALL_CAMS` |
| Hash | `0x163600D6E136C9F8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DestroyAllCams(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x163600D6E136C9F8, p0)
```


---

## DESTROY_CAM

**Description:** BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.

| Property | Value |
|----------|-------|
| Native Name | `DESTROY_CAM` |
| Hash | `0x4E67E0B6D7FD5145` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `p1` (BOOL) |

### Parameters

- **`cam`** (`Cam`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DestroyCam(cam, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4E67E0B6D7FD5145, cam, p1)
```


---

## DETACH_CAM

| Property | Value |
|----------|-------|
| Native Name | `DETACH_CAM` |
| Hash | `0x05B41DDBEB559556` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam) |

### Parameters

- **`cam`** (`Cam`)

### Usage

**Lua (Direct):**
```lua
DetachCam(cam)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x05B41DDBEB559556, cam)
```


---

## DISABLE_CAM_COLLISION_FOR_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_CAM_COLLISION_FOR_OBJECT` |
| Hash | `0x7E3F546ACFE6C8D9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
DisableCamCollisionForObject(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7E3F546ACFE6C8D9, entity)
```


---

## DISABLE_CINEMATIC_BONNET_CAMERA_THIS_UPDATE

**Description:** Old name: _DISABLE_VEHICLE_FIRST_PERSON_CAM_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_CINEMATIC_BONNET_CAMERA_THIS_UPDATE` |
| Hash | `0xA5929C2E57AC90D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
DisableCinematicBonnetCameraThisUpdate()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA5929C2E57AC90D1, )
```


---

## DISABLE_FIRST_PERSON_FLASH_EFFECT_THIS_UPDATE

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_FIRST_PERSON_FLASH_EFFECT_THIS_UPDATE` |
| Hash | `0x77D65669A05D1A1A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
DisableFirstPersonFlashEffectThisUpdate()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x77D65669A05D1A1A, )
```


---

## DISABLE_ON_FOOT_FIRST_PERSON_VIEW_THIS_UPDATE

**Description:** Old name: _DISABLE_FIRST_PERSON_CAM_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_ON_FOOT_FIRST_PERSON_VIEW_THIS_UPDATE` |
| Hash | `0x9C473089A934C930` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
DisableOnFootFirstPersonViewThisUpdate()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9C473089A934C930, )
```


---

## DOES_CAM_EXIST

**Description:** Returns whether or not the passed camera handle exists.

| Property | Value |
|----------|-------|
| Native Name | `DOES_CAM_EXIST` |
| Hash | `0x153AD457764FD704` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `cam` (Cam) |

### Parameters

- **`cam`** (`Cam`)

### Usage

**Lua (Direct):**
```lua
local result = DoesCamExist(cam)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x153AD457764FD704, cam)
```


---

## DO_SCREEN_FADE_IN

**Description:** Fades the screen in.

duration: The time the fade should take, in milliseconds.

| Property | Value |
|----------|-------|
| Native Name | `DO_SCREEN_FADE_IN` |
| Hash | `0x6A053CF596F67DF7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `duration` (int) |

### Parameters

- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
DoScreenFadeIn(duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A053CF596F67DF7, duration)
```


---

## DO_SCREEN_FADE_OUT

**Description:** Fades the screen out.

duration: The time the fade should take, in milliseconds.

| Property | Value |
|----------|-------|
| Native Name | `DO_SCREEN_FADE_OUT` |
| Hash | `0x40C719A5E410B9E4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `duration` (int) |

### Parameters

- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
DoScreenFadeOut(duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x40C719A5E410B9E4, duration)
```


---

## FORCE_CINEMATIC_RENDERING_THIS_UPDATE

| Property | Value |
|----------|-------|
| Native Name | `FORCE_CINEMATIC_RENDERING_THIS_UPDATE` |
| Hash | `0x702B75DC9D3EDE56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ForceCinematicRenderingThisUpdate(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x702B75DC9D3EDE56, p0)
```


---

## GET_CAM_COORD

| Property | Value |
|----------|-------|
| Native Name | `GET_CAM_COORD` |
| Hash | `0x6B12F11C2A9F0344` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `cam` (Cam) |

### Parameters

- **`cam`** (`Cam`)

### Usage

**Lua (Direct):**
```lua
local result = GetCamCoord(cam)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6B12F11C2A9F0344, cam)
```


---

## GET_CAM_FOV

| Property | Value |
|----------|-------|
| Native Name | `GET_CAM_FOV` |
| Hash | `0x8101D32A0A6B0F60` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `cam` (Cam) |

### Parameters

- **`cam`** (`Cam`)

### Usage

**Lua (Direct):**
```lua
local result = GetCamFov(cam)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8101D32A0A6B0F60, cam)
```


---

## GET_CAM_ROT

**Description:** rotationOrder: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eEulerRotationOrder

| Property | Value |
|----------|-------|
| Native Name | `GET_CAM_ROT` |
| Hash | `0x9BF96B57254E7889` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `cam` (Cam), `rotationOrder` (int) |

### Parameters

- **`cam`** (`Cam`)
- **`rotationOrder`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetCamRot(cam, rotationOrder)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9BF96B57254E7889, cam, rotationOrder)
```


---

## GET_CAM_SPLINE_PHASE

**Description:** Can use this with SET_CAM_SPLINE_PHASE to set the float it this native returns.

(returns 1.0f when no nodes has been added, reached end of non existing spline)

| Property | Value |
|----------|-------|
| Native Name | `GET_CAM_SPLINE_PHASE` |
| Hash | `0x095EDCD24D90033A` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `cam` (Cam) |

### Parameters

- **`cam`** (`Cam`)

### Usage

**Lua (Direct):**
```lua
local result = GetCamSplinePhase(cam)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x095EDCD24D90033A, cam)
```


---

## GET_FINAL_RENDERED_CAM_COORD

| Property | Value |
|----------|-------|
| Native Name | `GET_FINAL_RENDERED_CAM_COORD` |
| Hash | `0x5352E025EC2B416F` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetFinalRenderedCamCoord()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5352E025EC2B416F, )
```


---

## GET_FINAL_RENDERED_CAM_FOV

| Property | Value |
|----------|-------|
| Native Name | `GET_FINAL_RENDERED_CAM_FOV` |
| Hash | `0x04AF77971E508F6A` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetFinalRenderedCamFov()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x04AF77971E508F6A, )
```


---

## GET_FINAL_RENDERED_CAM_ROT

| Property | Value |
|----------|-------|
| Native Name | `GET_FINAL_RENDERED_CAM_ROT` |
| Hash | `0x602685BD85DD26CA` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `rotationOrder` (int) |

### Parameters

- **`rotationOrder`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetFinalRenderedCamRot(rotationOrder)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x602685BD85DD26CA, rotationOrder)
```


---

## GET_FIRST_PERSON_AIM_CAM_ZOOM_FACTOR

| Property | Value |
|----------|-------|
| Native Name | `GET_FIRST_PERSON_AIM_CAM_ZOOM_FACTOR` |
| Hash | `0xB4132CA1B0EE1365` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetFirstPersonAimCamZoomFactor()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB4132CA1B0EE1365, )
```


---

## GET_GAMEPLAY_CAM_COORD

| Property | Value |
|----------|-------|
| Native Name | `GET_GAMEPLAY_CAM_COORD` |
| Hash | `0x595320200B98596E` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetGameplayCamCoord()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x595320200B98596E, )
```


---

## GET_GAMEPLAY_CAM_FOV

| Property | Value |
|----------|-------|
| Native Name | `GET_GAMEPLAY_CAM_FOV` |
| Hash | `0xF6A96E5ACEEC6E50` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetGameplayCamFov()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF6A96E5ACEEC6E50, )
```


---

## GET_GAMEPLAY_CAM_RELATIVE_HEADING

| Property | Value |
|----------|-------|
| Native Name | `GET_GAMEPLAY_CAM_RELATIVE_HEADING` |
| Hash | `0xC4ABF536048998AA` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetGameplayCamRelativeHeading()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC4ABF536048998AA, )
```


---

## GET_GAMEPLAY_CAM_RELATIVE_PITCH

| Property | Value |
|----------|-------|
| Native Name | `GET_GAMEPLAY_CAM_RELATIVE_PITCH` |
| Hash | `0x99AADEBBA803F827` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetGameplayCamRelativePitch()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x99AADEBBA803F827, )
```


---

## GET_GAMEPLAY_CAM_ROT

| Property | Value |
|----------|-------|
| Native Name | `GET_GAMEPLAY_CAM_ROT` |
| Hash | `0x0252D2B5582957A6` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `rotationOrder` (int) |

### Parameters

- **`rotationOrder`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetGameplayCamRot(rotationOrder)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0252D2B5582957A6, rotationOrder)
```


---

## GET_LETTER_BOX_RATIO

**Description:** More info: see HAS_LETTER_BOX

| Property | Value |
|----------|-------|
| Native Name | `GET_LETTER_BOX_RATIO` |
| Hash | `0xA2B1C7EF759A63CE` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetLetterBoxRatio()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA2B1C7EF759A63CE, )
```


---

## GET_RENDERING_CAM

| Property | Value |
|----------|-------|
| Native Name | `GET_RENDERING_CAM` |
| Hash | `0x03A8931ECC8015D6` |
| Return Type | `Cam` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetRenderingCam()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x03A8931ECC8015D6, )
```


---

## HAS_LETTER_BOX

**Description:** More info: https://en.wikipedia.org/wiki/Letterboxing_(filming)

| Property | Value |
|----------|-------|
| Native Name | `HAS_LETTER_BOX` |
| Hash | `0x81DCFD13CF39920E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = HasLetterBox()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x81DCFD13CF39920E, )
```


---

## INVALIDATE_CINEMATIC_VEHICLE_IDLE_MODE

**Description:** Old name: _INVALIDATE_VEHICLE_IDLE_CAM

| Property | Value |
|----------|-------|
| Native Name | `INVALIDATE_CINEMATIC_VEHICLE_IDLE_MODE` |
| Hash | `0x634F4A0562CF19B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
InvalidateCinematicVehicleIdleMode()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x634F4A0562CF19B8, )
```


---

## IS_AIM_CAM_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_AIM_CAM_ACTIVE` |
| Hash | `0x698F456FB909E077` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsAimCamActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x698F456FB909E077, )
```


---

## IS_CAM_ACTIVE

**Description:** Returns whether or not the passed camera handle is active.

| Property | Value |
|----------|-------|
| Native Name | `IS_CAM_ACTIVE` |
| Hash | `0x63EFCC7E1810B8E6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `cam` (Cam) |

### Parameters

- **`cam`** (`Cam`)

### Usage

**Lua (Direct):**
```lua
local result = IsCamActive(cam)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x63EFCC7E1810B8E6, cam)
```


---

## IS_CAM_INTERPOLATING

| Property | Value |
|----------|-------|
| Native Name | `IS_CAM_INTERPOLATING` |
| Hash | `0x578F8F1CAA17BD2B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `cam` (Cam) |

### Parameters

- **`cam`** (`Cam`)

### Usage

**Lua (Direct):**
```lua
local result = IsCamInterpolating(cam)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x578F8F1CAA17BD2B, cam)
```


---

## IS_CAM_RENDERING

| Property | Value |
|----------|-------|
| Native Name | `IS_CAM_RENDERING` |
| Hash | `0x4415F8A6C536D39F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `cam` (Cam) |

### Parameters

- **`cam`** (`Cam`)

### Usage

**Lua (Direct):**
```lua
local result = IsCamRendering(cam)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4415F8A6C536D39F, cam)
```


---

## IS_CAM_SHAKING

| Property | Value |
|----------|-------|
| Native Name | `IS_CAM_SHAKING` |
| Hash | `0x2EEB402BD7320159` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `cam` (Cam) |

### Parameters

- **`cam`** (`Cam`)

### Usage

**Lua (Direct):**
```lua
local result = IsCamShaking(cam)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2EEB402BD7320159, cam)
```


---

## IS_CINEMATIC_CAM_RENDERING

| Property | Value |
|----------|-------|
| Native Name | `IS_CINEMATIC_CAM_RENDERING` |
| Hash | `0xBF7C780731AADBF8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsCinematicCamRendering()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBF7C780731AADBF8, )
```


---

## IS_DEATH_FAIL_CAMERA_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `IS_DEATH_FAIL_CAMERA_RUNNING` |
| Hash | `0x139EFB0A71DD9011` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsDeathFailCameraRunning()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x139EFB0A71DD9011, )
```


---

## IS_FIRST_PERSON_AIM_CAM_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_FIRST_PERSON_AIM_CAM_ACTIVE` |
| Hash | `0xF63134C54B6EC212` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsFirstPersonAimCamActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF63134C54B6EC212, )
```


---

## IS_FIRST_PERSON_CAMERA_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_FIRST_PERSON_CAMERA_ACTIVE` |
| Hash | `0xA24C1D341C6E0D53` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsFirstPersonCameraActive(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA24C1D341C6E0D53, p0, p1, p2)
```


---

## IS_FOLLOW_VEHICLE_CAM_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_FOLLOW_VEHICLE_CAM_ACTIVE` |
| Hash | `0xA40C2F51FB589E9A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsFollowVehicleCamActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA40C2F51FB589E9A, )
```


---

## IS_GAMEPLAY_CAM_LOOKING_BEHIND

| Property | Value |
|----------|-------|
| Native Name | `IS_GAMEPLAY_CAM_LOOKING_BEHIND` |
| Hash | `0x8FE0D24FFD04D5A2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsGameplayCamLookingBehind()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8FE0D24FFD04D5A2, )
```


---

*End of CAM natives part 1*
