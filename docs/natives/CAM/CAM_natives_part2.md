# CAM Natives - Part 2 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** CAM  
**Natives in this file:** 50  
**Total natives in namespace:** 233  
**Generated from:** RDR3natives JSON data

---

## IS_GAMEPLAY_CAM_RENDERING

| Property | Value |
|----------|-------|
| Native Name | `IS_GAMEPLAY_CAM_RENDERING` |
| Hash | `0x8660EA714834E412` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsGameplayCamRendering()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8660EA714834E412, )
```


---

## IS_GAMEPLAY_CAM_SHAKING

| Property | Value |
|----------|-------|
| Native Name | `IS_GAMEPLAY_CAM_SHAKING` |
| Hash | `0xEA4C5F4AA0A4DBEF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsGameplayCamShaking()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEA4C5F4AA0A4DBEF, )
```


---

## IS_GAMEPLAY_HINT_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_GAMEPLAY_HINT_ACTIVE` |
| Hash | `0x2E04AB5FEE042D4A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsGameplayHintActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E04AB5FEE042D4A, )
```


---

## IS_INTERPOLATING_FROM_SCRIPT_CAMS

| Property | Value |
|----------|-------|
| Native Name | `IS_INTERPOLATING_FROM_SCRIPT_CAMS` |
| Hash | `0x251241CAEC707106` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsInterpolatingFromScriptCams()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x251241CAEC707106, )
```


---

## IS_INTERPOLATING_TO_SCRIPT_CAMS

| Property | Value |
|----------|-------|
| Native Name | `IS_INTERPOLATING_TO_SCRIPT_CAMS` |
| Hash | `0x43AB9D5A7D415478` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsInterpolatingToScriptCams()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x43AB9D5A7D415478, )
```


---

## IS_SCREEN_FADED_IN

| Property | Value |
|----------|-------|
| Native Name | `IS_SCREEN_FADED_IN` |
| Hash | `0x37F9A426FBCF4AF2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsScreenFadedIn()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x37F9A426FBCF4AF2, )
```


---

## IS_SCREEN_FADED_OUT

| Property | Value |
|----------|-------|
| Native Name | `IS_SCREEN_FADED_OUT` |
| Hash | `0xF5472C80DF2FF847` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsScreenFadedOut()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF5472C80DF2FF847, )
```


---

## IS_SCREEN_FADING_IN

| Property | Value |
|----------|-------|
| Native Name | `IS_SCREEN_FADING_IN` |
| Hash | `0x0CECCC63FFA2EF24` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsScreenFadingIn()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0CECCC63FFA2EF24, )
```


---

## IS_SCREEN_FADING_OUT

| Property | Value |
|----------|-------|
| Native Name | `IS_SCREEN_FADING_OUT` |
| Hash | `0x02F39BEFE7B88D00` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsScreenFadingOut()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x02F39BEFE7B88D00, )
```


---

## IS_SPHERE_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `IS_SPHERE_VISIBLE` |
| Hash | `0x2E941B5FFA2989C6` |
| Return Type | `BOOL` |
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
local result = IsSphereVisible(x, y, z, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E941B5FFA2989C6, x, y, z, radius)
```


---

## PLAY_CAM_ANIM

| Property | Value |
|----------|-------|
| Native Name | `PLAY_CAM_ANIM` |
| Hash | `0xA263DDF694D563F6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `cam` (Cam), `animName` (const char*), `animDictionary` (const char*), `x` (float), `y` (float), `z` (float), `xRot` (float), `yRot` (float), `zRot` (float), `animFlags` (int), `rotOrder` (int) |

### Parameters

- **`cam`** (`Cam`)
- **`animName`** (`const char*`)
- **`animDictionary`** (`const char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`animFlags`** (`int`)
- **`rotOrder`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = PlayCamAnim(cam, animName, animDictionary, x, y, z, xRot, yRot, zRot, animFlags, rotOrder)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA263DDF694D563F6, cam, animName, animDictionary, x, y, z, xRot, yRot, zRot, animFlags, rotOrder)
```


---

## POINT_CAM_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `POINT_CAM_AT_COORD` |
| Hash | `0x948B39341C3A40C2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`cam`** (`Cam`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
PointCamAtCoord(cam, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x948B39341C3A40C2, cam, x, y, z)
```


---

## POINT_CAM_AT_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `POINT_CAM_AT_ENTITY` |
| Hash | `0xFC2867E6074D3A61` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `entity` (Entity), `p2` (float), `p3` (float), `p4` (float), `p5` (BOOL) |

### Parameters

- **`cam`** (`Cam`)
- **`entity`** (`Entity`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PointCamAtEntity(cam, entity, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFC2867E6074D3A61, cam, entity, p2, p3, p4, p5)
```


---

## RENDER_SCRIPT_CAMS

**Description:** ease - smooth transition between the camera's positions
easeTime - Time in milliseconds for the transition to happen

If you have created a script (rendering) camera, and want to go back to the 
character (gameplay) camera, call this native with render set to FALSE.
Setting ease to TRUE will smooth the transition.

| Property | Value |
|----------|-------|
| Native Name | `RENDER_SCRIPT_CAMS` |
| Hash | `0x33281167E4942E4F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `render` (BOOL), `ease` (BOOL), `easeTime` (int), `p3` (BOOL), `p4` (BOOL), `p5` (int) |

### Parameters

- **`render`** (`BOOL`)
- **`ease`** (`BOOL`)
- **`easeTime`** (`int`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)
- **`p5`** (`int`)

### Usage

**Lua (Direct):**
```lua
RenderScriptCams(render, ease, easeTime, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x33281167E4942E4F, render, ease, easeTime, p3, p4, p5)
```


---

## SET_CAM_ACTIVE

**Description:** Set camera as active/inactive.

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_ACTIVE` |
| Hash | `0x87295BCA613800C8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `active` (BOOL) |

### Parameters

- **`cam`** (`Cam`)
- **`active`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCamActive(cam, active)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x87295BCA613800C8, cam, active)
```


---

## SET_CAM_ACTIVE_WITH_INTERP

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_ACTIVE_WITH_INTERP` |
| Hash | `0x8B15AE2987C1AC8F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `camTo` (Cam), `camFrom` (Cam), `duration` (int), `easeLocation` (int), `easeRotation` (int) |

### Parameters

- **`camTo`** (`Cam`)
- **`camFrom`** (`Cam`)
- **`duration`** (`int`)
- **`easeLocation`** (`int`)
- **`easeRotation`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetCamActiveWithInterp(camTo, camFrom, duration, easeLocation, easeRotation)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8B15AE2987C1AC8F, camTo, camFrom, duration, easeLocation, easeRotation)
```


---

## SET_CAM_AFFECTS_AIMING

**Description:** Allows you to aim and shoot at the direction the camera is facing.

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_AFFECTS_AIMING` |
| Hash | `0x3CB9E8BDE5E76F33` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `toggle` (BOOL) |

### Parameters

- **`cam`** (`Cam`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCamAffectsAiming(cam, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3CB9E8BDE5E76F33, cam, toggle)
```


---

## SET_CAM_CONTROLS_MINI_MAP_HEADING

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_CONTROLS_MINI_MAP_HEADING` |
| Hash | `0x1B8F3CE5A6001298` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `p1` (BOOL) |

### Parameters

- **`cam`** (`Cam`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCamControlsMiniMapHeading(cam, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1B8F3CE5A6001298, cam, p1)
```


---

## SET_CAM_COORD

**Description:** Sets the position of the cam.

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_COORD` |
| Hash | `0xF9EE7D419EE49DE6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `posX` (float), `posY` (float), `posZ` (float) |

### Parameters

- **`cam`** (`Cam`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCamCoord(cam, posX, posY, posZ)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF9EE7D419EE49DE6, cam, posX, posY, posZ)
```


---

## SET_CAM_FAR_CLIP

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_FAR_CLIP` |
| Hash | `0x5E32817BF6302111` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `farClip` (float) |

### Parameters

- **`cam`** (`Cam`)
- **`farClip`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCamFarClip(cam, farClip)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5E32817BF6302111, cam, farClip)
```


---

## SET_CAM_FOV

**Description:** Sets the field of view of the cam.

Min: 1.0f
Max: 130.0f

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_FOV` |
| Hash | `0x27666E5988D9D429` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `fieldOfView` (float) |

### Parameters

- **`cam`** (`Cam`)
- **`fieldOfView`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCamFov(cam, fieldOfView)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x27666E5988D9D429, cam, fieldOfView)
```


---

## SET_CAM_MOTION_BLUR_STRENGTH

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_MOTION_BLUR_STRENGTH` |
| Hash | `0x45FD891364181F9E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `strength` (float) |

### Parameters

- **`cam`** (`Cam`)
- **`strength`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCamMotionBlurStrength(cam, strength)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x45FD891364181F9E, cam, strength)
```


---

## SET_CAM_NEAR_CLIP

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_NEAR_CLIP` |
| Hash | `0xA924028272A61364` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `nearClip` (float) |

### Parameters

- **`cam`** (`Cam`)
- **`nearClip`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCamNearClip(cam, nearClip)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA924028272A61364, cam, nearClip)
```


---

## SET_CAM_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_PARAMS` |
| Hash | `0xA47BBFFFB83D4D0A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `posX` (float), `posY` (float), `posZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `fieldOfView` (float), `p8` (Any), `p9` (int), `p10` (int), `p11` (int), `p12` (Any), `p13` (Any) |

### Parameters

- **`cam`** (`Cam`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`fieldOfView`** (`float`)
- **`p8`** (`Any`)
- **`p9`** (`int`)
- **`p10`** (`int`)
- **`p11`** (`int`)
- **`p12`** (`Any`)
- **`p13`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetCamParams(cam, posX, posY, posZ, rotX, rotY, rotZ, fieldOfView, p8, p9, p10, p11, p12, p13)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA47BBFFFB83D4D0A, cam, posX, posY, posZ, rotX, rotY, rotZ, fieldOfView, p8, p9, p10, p11, p12, p13)
```


---

## SET_CAM_ROT

**Description:** Sets the rotation of the cam.

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_ROT` |
| Hash | `0x63DFA6810AD78719` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `rotX` (float), `rotY` (float), `rotZ` (float), `rotationOrder` (int) |

### Parameters

- **`cam`** (`Cam`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`rotationOrder`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetCamRot(cam, rotX, rotY, rotZ, rotationOrder)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x63DFA6810AD78719, cam, rotX, rotY, rotZ, rotationOrder)
```


---

## SET_CAM_SPLINE_DURATION

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_SPLINE_DURATION` |
| Hash | `0xFF6311652CA91015` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `timeDuration` (int) |

### Parameters

- **`cam`** (`Cam`)
- **`timeDuration`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetCamSplineDuration(cam, timeDuration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFF6311652CA91015, cam, timeDuration)
```


---

## SET_CAM_SPLINE_PHASE

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_SPLINE_PHASE` |
| Hash | `0xF1898A68E7C15636` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `p1` (float) |

### Parameters

- **`cam`** (`Cam`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCamSplinePhase(cam, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF1898A68E7C15636, cam, p1)
```


---

## SET_CAM_SPLINE_SMOOTHING_STYLE

| Property | Value |
|----------|-------|
| Native Name | `SET_CAM_SPLINE_SMOOTHING_STYLE` |
| Hash | `0x84B3645618E726B0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `smoothingStyle` (int) |

### Parameters

- **`cam`** (`Cam`)
- **`smoothingStyle`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetCamSplineSmoothingStyle(cam, smoothingStyle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x84B3645618E726B0, cam, smoothingStyle)
```


---

## SET_CINEMATIC_BUTTON_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `SET_CINEMATIC_BUTTON_ACTIVE` |
| Hash | `0xB90411F480457A6C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCinematicButtonActive(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB90411F480457A6C, p0)
```


---

## SET_CINEMATIC_MODE_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `SET_CINEMATIC_MODE_ACTIVE` |
| Hash | `0xCE7A90B160F75046` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCinematicModeActive(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE7A90B160F75046, p0)
```


---

## SET_FIRST_PERSON_AIM_CAM_RELATIVE_HEADING_LIMITS_THIS_UPDATE

| Property | Value |
|----------|-------|
| Native Name | `SET_FIRST_PERSON_AIM_CAM_RELATIVE_HEADING_LIMITS_THIS_UPDATE` |
| Hash | `0x05BD5E4088B30A66` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetFirstPersonAimCamRelativeHeadingLimitsThisUpdate(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x05BD5E4088B30A66, p0, p1)
```


---

## SET_FIRST_PERSON_AIM_CAM_RELATIVE_PITCH_LIMITS_THIS_UPDATE

**Description:** Old name: _SET_FIRST_PERSON_CAM_PITCH_RANGE

| Property | Value |
|----------|-------|
| Native Name | `SET_FIRST_PERSON_AIM_CAM_RELATIVE_PITCH_LIMITS_THIS_UPDATE` |
| Hash | `0x715B7F5E8BED32A2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetFirstPersonAimCamRelativePitchLimitsThisUpdate(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x715B7F5E8BED32A2, p0, p1)
```


---

## SET_GAMEPLAY_CAM_FOLLOW_PED_THIS_UPDATE

**Description:** Forces gameplay cam to specified ped as if you were the ped or spectating it

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_CAM_FOLLOW_PED_THIS_UPDATE` |
| Hash | `0x82E41D6ADE924FCA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCamFollowPedThisUpdate(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x82E41D6ADE924FCA, ped)
```


---

## SET_GAMEPLAY_CAM_IGNORE_ENTITY_COLLISION_THIS_UPDATE

**Description:** Old name: _DISABLE_CAM_COLLISION_FOR_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_CAM_IGNORE_ENTITY_COLLISION_THIS_UPDATE` |
| Hash | `0xD904F75DBD7AB865` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCamIgnoreEntityCollisionThisUpdate(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD904F75DBD7AB865, entity)
```


---

## SET_GAMEPLAY_CAM_MAX_MOTION_BLUR_STRENGTH_THIS_UPDATE

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_CAM_MAX_MOTION_BLUR_STRENGTH_THIS_UPDATE` |
| Hash | `0x8459B3E64257B21D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCamMaxMotionBlurStrengthThisUpdate(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8459B3E64257B21D, p0)
```


---

## SET_GAMEPLAY_CAM_RELATIVE_HEADING

**Description:** Sets the camera position relative to heading in float from -360 to +360.

Heading is always 0 in aiming camera.

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_CAM_RELATIVE_HEADING` |
| Hash | `0x5D1EB123EAC5D071` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `heading` (float), `p1` (float) |

### Parameters

- **`heading`** (`float`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCamRelativeHeading(heading, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5D1EB123EAC5D071, heading, p1)
```


---

## SET_GAMEPLAY_CAM_RELATIVE_PITCH

**Description:** Sets the camera pitch.

Parameters:
x = pitches the camera on the x axis.
Value2 = always seems to be hex 0x3F800000 (1.000000 float).

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_CAM_RELATIVE_PITCH` |
| Hash | `0xFB760AF4F537B8BF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `Value2` (float) |

### Parameters

- **`x`** (`float`)
- **`Value2`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCamRelativePitch(x, Value2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFB760AF4F537B8BF, x, Value2)
```


---

## SET_GAMEPLAY_CAM_SHAKE_AMPLITUDE

**Description:** Sets the amplitude for the gameplay (i.e. 3rd or 1st) camera to shake.

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_CAM_SHAKE_AMPLITUDE` |
| Hash | `0x570E35F5C4A44838` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `amplitude` (float) |

### Parameters

- **`amplitude`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCamShakeAmplitude(amplitude)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x570E35F5C4A44838, amplitude)
```


---

## SET_GAMEPLAY_COORD_HINT

**Description:** Hash used in finale1.ysc: 1726668277

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_COORD_HINT` |
| Hash | `0xFA33B8C69A4A6A0F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `duration` (int), `blendOutDuration` (int), `blendInDuration` (int), `p6` (Hash) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`duration`** (`int`)
- **`blendOutDuration`** (`int`)
- **`blendInDuration`** (`int`)
- **`p6`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCoordHint(x, y, z, duration, blendOutDuration, blendInDuration, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA33B8C69A4A6A0F, x, y, z, duration, blendOutDuration, blendInDuration, p6)
```


---

## SET_GAMEPLAY_ENTITY_HINT

**Description:** p6 & p7 - possibly length or time

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_ENTITY_HINT` |
| Hash | `0xD1F7F32640ADFD12` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `xOffset` (float), `yOffset` (float), `zOffset` (float), `p4` (BOOL), `p5` (int), `p6` (int), `p7` (int), `p8` (Any) |

### Parameters

- **`entity`** (`Entity`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)
- **`p4`** (`BOOL`)
- **`p5`** (`int`)
- **`p6`** (`int`)
- **`p7`** (`int`)
- **`p8`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetGameplayEntityHint(entity, xOffset, yOffset, zOffset, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD1F7F32640ADFD12, entity, xOffset, yOffset, zOffset, p4, p5, p6, p7, p8)
```


---

## SET_GAMEPLAY_HINT_BASE_ORBIT_PITCH_OFFSET

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_HINT_BASE_ORBIT_PITCH_OFFSET` |
| Hash | `0x421192A2DA48FD01` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayHintBaseOrbitPitchOffset(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x421192A2DA48FD01, p0)
```


---

## SET_GAMEPLAY_HINT_CAMERA_RELATIVE_SIDE_OFFSET

**Description:** Old name: _SET_GAMEPLAY_HINT_ANIM_OFFSETX

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_HINT_CAMERA_RELATIVE_SIDE_OFFSET` |
| Hash | `0xF86B6F93727C59C9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayHintCameraRelativeSideOffset(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF86B6F93727C59C9, p0)
```


---

## SET_GAMEPLAY_HINT_CAMERA_RELATIVE_VERTICAL_OFFSET

**Description:** Old name: _SET_GAMEPLAY_HINT_ANIM_OFFSETY

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_HINT_CAMERA_RELATIVE_VERTICAL_OFFSET` |
| Hash | `0x29E74F819150CC32` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayHintCameraRelativeVerticalOffset(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x29E74F819150CC32, p0)
```


---

## SET_GAMEPLAY_HINT_FOLLOW_DISTANCE_SCALAR

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_HINT_FOLLOW_DISTANCE_SCALAR` |
| Hash | `0xDDDC54181868F81F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayHintFollowDistanceScalar(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDDDC54181868F81F, p0)
```


---

## SET_GAMEPLAY_HINT_FOV

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_HINT_FOV` |
| Hash | `0x661E58BC6F00A49A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `FOV` (float) |

### Parameters

- **`FOV`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayHintFov(FOV)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x661E58BC6F00A49A, FOV)
```


---

## SET_GAMEPLAY_OBJECT_HINT

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_OBJECT_HINT` |
| Hash | `0xC40551D65F2BF297` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (float), `p2` (float), `p3` (float), `p4` (BOOL), `p5` (Any), `p6` (Any), `p7` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`BOOL`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetGameplayObjectHint(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC40551D65F2BF297, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## SET_GAMEPLAY_PED_HINT

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_PED_HINT` |
| Hash | `0x90FB951648851733` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Ped), `x1` (float), `y1` (float), `z1` (float), `p4` (BOOL), `p5` (Any), `p6` (Any), `p7` (Any) |

### Parameters

- **`p0`** (`Ped`)
- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`p4`** (`BOOL`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetGameplayPedHint(p0, x1, y1, z1, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x90FB951648851733, p0, x1, y1, z1, p4, p5, p6, p7)
```


---

## SET_GAMEPLAY_VEHICLE_HINT

| Property | Value |
|----------|-------|
| Native Name | `SET_GAMEPLAY_VEHICLE_HINT` |
| Hash | `0xE2B2BB7DAC280515` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (float), `p2` (float), `p3` (float), `p4` (BOOL), `p5` (Any), `p6` (Any), `p7` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`BOOL`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetGameplayVehicleHint(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE2B2BB7DAC280515, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## SET_IN_VEHICLE_CAM_STATE_THIS_UPDATE

**Description:** Forces gameplay cam to specified vehicle as if you were in it

| Property | Value |
|----------|-------|
| Native Name | `SET_IN_VEHICLE_CAM_STATE_THIS_UPDATE` |
| Hash | `0xFA1D5E8D1C3CCD67` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetInVehicleCamStateThisUpdate(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA1D5E8D1C3CCD67, vehicle, p1)
```


---

## SET_SCRIPTED_CAMERA_IS_FIRST_PERSON_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_SCRIPTED_CAMERA_IS_FIRST_PERSON_THIS_FRAME` |
| Hash | `0x1DD95A8D6B24A0C9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScriptedCameraIsFirstPersonThisFrame(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1DD95A8D6B24A0C9, p0)
```


---

*End of CAM natives part 2*
