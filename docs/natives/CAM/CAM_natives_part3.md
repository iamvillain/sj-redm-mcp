# CAM Natives - Part 3 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** CAM  
**Natives in this file:** 50  
**Total natives in namespace:** 233  
**Generated from:** RDR3natives JSON data

---

## SET_THIRD_PERSON_CAM_ORBIT_DISTANCE_LIMITS_THIS_UPDATE

**Description:** Old name: _ANIMATE_GAMEPLAY_CAM_ZOOM

| Property | Value |
|----------|-------|
| Native Name | `SET_THIRD_PERSON_CAM_ORBIT_DISTANCE_LIMITS_THIS_UPDATE` |
| Hash | `0x2126C740A4AC370B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float), `distance` (float) |

### Parameters

- **`p0`** (`float`)
- **`distance`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetThirdPersonCamOrbitDistanceLimitsThisUpdate(p0, distance)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2126C740A4AC370B, p0, distance)
```


---

## SET_THIRD_PERSON_CAM_RELATIVE_HEADING_LIMITS_THIS_UPDATE

**Description:** minimum: Degrees between -180f and 180f.
maximum: Degrees between -180f and 180f.

Clamps the gameplay camera's current yaw.

Eg. _CLAMP_GAMEPLAY_CAM_YAW(0.0f, 0.0f) will set the horizontal angle directly behind the player.

Old name: _CLAMP_GAMEPLAY_CAM_YAW

| Property | Value |
|----------|-------|
| Native Name | `SET_THIRD_PERSON_CAM_RELATIVE_HEADING_LIMITS_THIS_UPDATE` |
| Hash | `0x14F3947318CA8AD2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `minimum` (float), `maximum` (float) |

### Parameters

- **`minimum`** (`float`)
- **`maximum`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetThirdPersonCamRelativeHeadingLimitsThisUpdate(minimum, maximum)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x14F3947318CA8AD2, minimum, maximum)
```


---

## SET_THIRD_PERSON_CAM_RELATIVE_PITCH_LIMITS_THIS_UPDATE

**Description:** minimum: Degrees between -90f and 90f.
maximum: Degrees between -90f and 90f.

Clamps the gameplay camera's current pitch.

Eg. _CLAMP_GAMEPLAY_CAM_PITCH(0.0f, 0.0f) will set the vertical angle directly behind the player.

Old name: _CLAMP_GAMEPLAY_CAM_PITCH

| Property | Value |
|----------|-------|
| Native Name | `SET_THIRD_PERSON_CAM_RELATIVE_PITCH_LIMITS_THIS_UPDATE` |
| Hash | `0x326C7AA308F3DF6A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `minimum` (float), `maximum` (float) |

### Parameters

- **`minimum`** (`float`)
- **`maximum`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetThirdPersonCamRelativePitchLimitsThisUpdate(minimum, maximum)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x326C7AA308F3DF6A, minimum, maximum)
```


---

## SET_WIDESCREEN_BORDERS

| Property | Value |
|----------|-------|
| Native Name | `SET_WIDESCREEN_BORDERS` |
| Hash | `0xD7F4D54CF80AFA34` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `p1` (int) |

### Parameters

- **`p0`** (`BOOL`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetWidescreenBorders(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD7F4D54CF80AFA34, p0, p1)
```


---

## SHAKE_CAM

| Property | Value |
|----------|-------|
| Native Name | `SHAKE_CAM` |
| Hash | `0xF9A7BCF5D050D4E7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `type` (const char*), `amplitude` (float) |

### Parameters

- **`cam`** (`Cam`)
- **`type`** (`const char*`)
- **`amplitude`** (`float`)

### Usage

**Lua (Direct):**
```lua
ShakeCam(cam, type, amplitude)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF9A7BCF5D050D4E7, cam, type, amplitude)
```


---

## SHAKE_GAMEPLAY_CAM

| Property | Value |
|----------|-------|
| Native Name | `SHAKE_GAMEPLAY_CAM` |
| Hash | `0xD9B31B4650520529` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `shakeName` (const char*), `intensity` (float) |

### Parameters

- **`shakeName`** (`const char*`)
- **`intensity`** (`float`)

### Usage

**Lua (Direct):**
```lua
ShakeGameplayCam(shakeName, intensity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD9B31B4650520529, shakeName, intensity)
```


---

## STOP_CAM_POINTING

| Property | Value |
|----------|-------|
| Native Name | `STOP_CAM_POINTING` |
| Hash | `0xCA1B30A3357C71F1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam) |

### Parameters

- **`cam`** (`Cam`)

### Usage

**Lua (Direct):**
```lua
StopCamPointing(cam)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCA1B30A3357C71F1, cam)
```


---

## STOP_CAM_SHAKING

| Property | Value |
|----------|-------|
| Native Name | `STOP_CAM_SHAKING` |
| Hash | `0xB78CC4B4706614B0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `p1` (BOOL) |

### Parameters

- **`cam`** (`Cam`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StopCamShaking(cam, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB78CC4B4706614B0, cam, p1)
```


---

## STOP_CODE_GAMEPLAY_HINT

| Property | Value |
|----------|-------|
| Native Name | `STOP_CODE_GAMEPLAY_HINT` |
| Hash | `0x93759A83D0D844E7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StopCodeGameplayHint(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x93759A83D0D844E7, p0)
```


---

## STOP_GAMEPLAY_CAM_SHAKING

| Property | Value |
|----------|-------|
| Native Name | `STOP_GAMEPLAY_CAM_SHAKING` |
| Hash | `0xE0DE43D290FB65F9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StopGameplayCamShaking(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0DE43D290FB65F9, p0)
```


---

## STOP_GAMEPLAY_HINT

| Property | Value |
|----------|-------|
| Native Name | `STOP_GAMEPLAY_HINT` |
| Hash | `0x1BCEC33D54CFCA8A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StopGameplayHint(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1BCEC33D54CFCA8A, p0)
```


---

## STOP_RENDERING_SCRIPT_CAMS_USING_CATCH_UP

**Description:** This native makes the gameplay camera zoom into first person/third person with a special effect.
blendBackSmoothingType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eBlendBackSmoothing

| Property | Value |
|----------|-------|
| Native Name | `STOP_RENDERING_SCRIPT_CAMS_USING_CATCH_UP` |
| Hash | `0x8C7C7FF7CF0E5153` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `render` (BOOL), `distance` (float), `blendBackSmoothingType` (int), `p3` (BOOL), `p4` (BOOL), `p5` (BOOL) |

### Parameters

- **`render`** (`BOOL`)
- **`distance`** (`float`)
- **`blendBackSmoothingType`** (`int`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StopRenderingScriptCamsUsingCatchUp(render, distance, blendBackSmoothingType, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8C7C7FF7CF0E5153, render, distance, blendBackSmoothingType, p3, p4, p5)
```


---

## _0x0060B31968E60E41

**Description:** shakeNames in script_rel: CORRECTOR_SHAKE, MINIGAME_BOUNTY_SHAKE, POV_DRUNK_SHAKE, DRUNK_SHAKE, MINIGAME_TRAIN_SHAKE
_IS_GAMEPLAY_*

| Property | Value |
|----------|-------|
| Native Name | `_0x0060B31968E60E41` |
| Hash | `0x0060B31968E60E41` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `shakeName` (const char*) |

### Parameters

- **`shakeName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0060B31968E60E41(shakeName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0060B31968E60E41, shakeName)
```


---

## _0x04084490CC302CFB

| Property | Value |
|----------|-------|
| Native Name | `_0x04084490CC302CFB` |
| Hash | `0x04084490CC302CFB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x04084490CC302CFB()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x04084490CC302CFB, )
```


---

## _0x06557F6D96C86881

| Property | Value |
|----------|-------|
| Native Name | `_0x06557F6D96C86881` |
| Hash | `0x06557F6D96C86881` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x06557F6D96C86881()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06557F6D96C86881, )
```


---

## _SET_GAMEPLAY_CAM_PARAMS_THIS_UPDATE

**Description:** Not official name
This native allows to move the gameplay cam with the given speed, enableSlide will allow to move the cam to the slideOffset, enableZoom will allow to move the cam to the zoomOffset. 

EXAMPLE:
Citizen.InvokeNative(0x066167c63111d8cf,1.0, true, -1.0, true, 2.0)

| Property | Value |
|----------|-------|
| Native Name | `_SET_GAMEPLAY_CAM_PARAMS_THIS_UPDATE` |
| Hash | `0x066167C63111D8CF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `camSpeed` (float), `enableSlide` (BOOL), `slideOffset` (float), `enableZoom` (BOOL), `zoomOffset` (float) |

### Parameters

- **`camSpeed`** (`float`)
- **`enableSlide`** (`BOOL`)
- **`slideOffset`** (`float`)
- **`enableZoom`** (`BOOL`)
- **`zoomOffset`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCamParamsThisUpdate(camSpeed, enableSlide, slideOffset, enableZoom, zoomOffset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x066167C63111D8CF, camSpeed, enableSlide, slideOffset, enableZoom, zoomOffset)
```


---

## _0x0961B089947BA6D0

| Property | Value |
|----------|-------|
| Native Name | `_0x0961B089947BA6D0` |
| Hash | `0x0961B089947BA6D0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0961B089947BA6D0(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0961B089947BA6D0, p0)
```


---

## _0x0F1FFEF5D54AE832

**Description:** NPLOI_UPDATE__GUN_SPINNING_PREVIEW - Adjusting Camera / Ped Reset Flags This Frame
_DISABLE_*

| Property | Value |
|----------|-------|
| Native Name | `_0x0F1FFEF5D54AE832` |
| Hash | `0x0F1FFEF5D54AE832` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x0F1FFEF5D54AE832()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0F1FFEF5D54AE832, )
```


---

## _0x0FF7125F07DEB84F

| Property | Value |
|----------|-------|
| Native Name | `_0x0FF7125F07DEB84F` |
| Hash | `0x0FF7125F07DEB84F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0FF7125F07DEB84F(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0FF7125F07DEB84F, p0, p1)
```


---

## _0x1204EB53A5FBC63D

**Description:** Used for DUELING_LOCK_CAMERA_CONTROLS_THIS_FRAME: Disabling look/aim controls
_IS_SC(REEN_)* (?)

| Property | Value |
|----------|-------|
| Native Name | `_0x1204EB53A5FBC63D` |
| Hash | `0x1204EB53A5FBC63D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x1204EB53A5FBC63D()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1204EB53A5FBC63D, )
```


---

## _0x14C4A49E36C29E49

| Property | Value |
|----------|-------|
| Native Name | `_0x14C4A49E36C29E49` |
| Hash | `0x14C4A49E36C29E49` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x14C4A49E36C29E49()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x14C4A49E36C29E49, )
```


---

## _0x16E9ABDD34DDD931

| Property | Value |
|----------|-------|
| Native Name | `_0x16E9ABDD34DDD931` |
| Hash | `0x16E9ABDD34DDD931` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x16E9ABDD34DDD931()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x16E9ABDD34DDD931, )
```


---

## _0x1811A02277A9E49D

| Property | Value |
|----------|-------|
| Native Name | `_0x1811A02277A9E49D` |
| Hash | `0x1811A02277A9E49D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x1811A02277A9E49D()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1811A02277A9E49D, )
```


---

## _0x18C3DFAC458783BB

| Property | Value |
|----------|-------|
| Native Name | `_0x18C3DFAC458783BB` |
| Hash | `0x18C3DFAC458783BB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x18C3DFAC458783BB()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x18C3DFAC458783BB, )
```


---

## _0x190F7DA1AC09A8EF

| Property | Value |
|----------|-------|
| Native Name | `_0x190F7DA1AC09A8EF` |
| Hash | `0x190F7DA1AC09A8EF` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x190F7DA1AC09A8EF()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x190F7DA1AC09A8EF, )
```


---

## _0x1D931B7CC0EE3956

| Property | Value |
|----------|-------|
| Native Name | `_0x1D931B7CC0EE3956` |
| Hash | `0x1D931B7CC0EE3956` |
| Return Type | `BOOL` |
| Build | `1436` |
| Parameters | `dictionary` (const char*), `shotName` (const char*), `cameraName` (const char*) |

### Parameters

- **`dictionary`** (`const char*`)
- **`shotName`** (`const char*`)
- **`cameraName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1D931B7CC0EE3956(dictionary, shotName, cameraName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1D931B7CC0EE3956, dictionary, shotName, cameraName)
```


---

## _0x1D9F72DD4FD9A9D7

| Property | Value |
|----------|-------|
| Native Name | `_0x1D9F72DD4FD9A9D7` |
| Hash | `0x1D9F72DD4FD9A9D7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1D9F72DD4FD9A9D7(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1D9F72DD4FD9A9D7, p0)
```


---

## _0x1F6EBD94680252CE

| Property | Value |
|----------|-------|
| Native Name | `_0x1F6EBD94680252CE` |
| Hash | `0x1F6EBD94680252CE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1F6EBD94680252CE(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1F6EBD94680252CE, p0, p1)
```


---

## _0x1FC6C727D30FFDDE

| Property | Value |
|----------|-------|
| Native Name | `_0x1FC6C727D30FFDDE` |
| Hash | `0x1FC6C727D30FFDDE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1FC6C727D30FFDDE(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1FC6C727D30FFDDE, p0)
```


---

## _0x29E6655DF3590B0D

| Property | Value |
|----------|-------|
| Native Name | `_0x29E6655DF3590B0D` |
| Hash | `0x29E6655DF3590B0D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x29E6655DF3590B0D(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x29E6655DF3590B0D, p0)
```


---

## _0x2AB7C81B3F70570C

| Property | Value |
|----------|-------|
| Native Name | `_0x2AB7C81B3F70570C` |
| Hash | `0x2AB7C81B3F70570C` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x2AB7C81B3F70570C()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2AB7C81B3F70570C, )
```


---

## _0x2DD3149DC34A3F4C

| Property | Value |
|----------|-------|
| Native Name | `_0x2DD3149DC34A3F4C` |
| Hash | `0x2DD3149DC34A3F4C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2DD3149DC34A3F4C(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2DD3149DC34A3F4C, p0)
```


---

## _0x39073DA4EDDBC91D

| Property | Value |
|----------|-------|
| Native Name | `_0x39073DA4EDDBC91D` |
| Hash | `0x39073DA4EDDBC91D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x39073DA4EDDBC91D(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x39073DA4EDDBC91D, p0)
```


---

## _0x3B8E3AD9677CE12B

| Property | Value |
|----------|-------|
| Native Name | `_0x3B8E3AD9677CE12B` |
| Hash | `0x3B8E3AD9677CE12B` |
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
_0x3B8E3AD9677CE12B(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3B8E3AD9677CE12B, p0, p1, p2)
```


---

## _0x3C486E334520579D

| Property | Value |
|----------|-------|
| Native Name | `_0x3C486E334520579D` |
| Hash | `0x3C486E334520579D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x3C486E334520579D()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3C486E334520579D, )
```


---

## _0x3C8F74E8FE751614

| Property | Value |
|----------|-------|
| Native Name | `_0x3C8F74E8FE751614` |
| Hash | `0x3C8F74E8FE751614` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x3C8F74E8FE751614()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3C8F74E8FE751614, )
```


---

## _0x4138EE36BC3DC0A7

| Property | Value |
|----------|-------|
| Native Name | `_0x4138EE36BC3DC0A7` |
| Hash | `0x4138EE36BC3DC0A7` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x4138EE36BC3DC0A7(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4138EE36BC3DC0A7, p0, p1)
```


---

## _0x41E452A3C580D1A7

| Property | Value |
|----------|-------|
| Native Name | `_0x41E452A3C580D1A7` |
| Hash | `0x41E452A3C580D1A7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x41E452A3C580D1A7()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x41E452A3C580D1A7, )
```


---

## _0x450769C833D58844

| Property | Value |
|----------|-------|
| Native Name | `_0x450769C833D58844` |
| Hash | `0x450769C833D58844` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x450769C833D58844()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x450769C833D58844, )
```


---

## _0x465F04F68AD38197

| Property | Value |
|----------|-------|
| Native Name | `_0x465F04F68AD38197` |
| Hash | `0x465F04F68AD38197` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `dictionary` (const char*), `shotName` (const char*), `duration` (int) |

### Parameters

- **`dictionary`** (`const char*`)
- **`shotName`** (`const char*`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x465F04F68AD38197(dictionary, shotName, duration)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x465F04F68AD38197, dictionary, shotName, duration)
```


---

## _0x4D2F46D1B28D90FB

| Property | Value |
|----------|-------|
| Native Name | `_0x4D2F46D1B28D90FB` |
| Hash | `0x4D2F46D1B28D90FB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x4D2F46D1B28D90FB(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D2F46D1B28D90FB, p0, p1)
```


---

## _0x5060FA977CEA4455

| Property | Value |
|----------|-------|
| Native Name | `_0x5060FA977CEA4455` |
| Hash | `0x5060FA977CEA4455` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x5060FA977CEA4455()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5060FA977CEA4455, )
```


---

## _0x5B637D6F3B67716A

| Property | Value |
|----------|-------|
| Native Name | `_0x5B637D6F3B67716A` |
| Hash | `0x5B637D6F3B67716A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x5B637D6F3B67716A(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5B637D6F3B67716A, p0)
```


---

## _0x6072B7420A83A03F

| Property | Value |
|----------|-------|
| Native Name | `_0x6072B7420A83A03F` |
| Hash | `0x6072B7420A83A03F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x6072B7420A83A03F()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6072B7420A83A03F, )
```


---

## _0x632BE8D84846FA56

**Description:** Zooms in the gameplay camera to the next zoom level?
USE_* - WAS_*

| Property | Value |
|----------|-------|
| Native Name | `_0x632BE8D84846FA56` |
| Hash | `0x632BE8D84846FA56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x632BE8D84846FA56()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x632BE8D84846FA56, )
```


---

## _0x63E5841A9264D016

**Description:** Maintains the death camera after respawn

| Property | Value |
|----------|-------|
| Native Name | `_0x63E5841A9264D016` |
| Hash | `0x63E5841A9264D016` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x63E5841A9264D016(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x63E5841A9264D016, toggle)
```


---

## _0x641092322A8852AB

| Property | Value |
|----------|-------|
| Native Name | `_0x641092322A8852AB` |
| Hash | `0x641092322A8852AB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x641092322A8852AB()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x641092322A8852AB, )
```


---

## _0x6519238858AF5479

| Property | Value |
|----------|-------|
| Native Name | `_0x6519238858AF5479` |
| Hash | `0x6519238858AF5479` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6519238858AF5479(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6519238858AF5479, p0)
```


---

## _0x6CAB0BA160B168D2

| Property | Value |
|----------|-------|
| Native Name | `_0x6CAB0BA160B168D2` |
| Hash | `0x6CAB0BA160B168D2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x6CAB0BA160B168D2()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6CAB0BA160B168D2, )
```


---

## _0x6DFD37E586D4F44F

| Property | Value |
|----------|-------|
| Native Name | `_0x6DFD37E586D4F44F` |
| Hash | `0x6DFD37E586D4F44F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x6DFD37E586D4F44F()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6DFD37E586D4F44F, )
```


---

*End of CAM natives part 3*
