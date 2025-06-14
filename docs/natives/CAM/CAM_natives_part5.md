# CAM Natives - Part 5 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** CAM  
**Natives in this file:** 33  
**Total natives in namespace:** 233  
**Generated from:** RDR3natives JSON data

---

## _FORCE_CINEMATIC_DEATH_CAM_ON_PED

**Description:** Used for DUELING_MANAGE_DEATH_CAMERA - Initializing death camera
Params: targetPed = death cam focuses on it

| Property | Value |
|----------|-------|
| Native Name | `_FORCE_CINEMATIC_DEATH_CAM_ON_PED` |
| Hash | `0xE3639DB78B3B5400` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `targetPed` (Ped) |

### Parameters

- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ForceCinematicDeathCamOnPed(targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE3639DB78B3B5400, targetPed)
```


---

## _FORCE_FIRST_PERSON_CAM_THIS_FRAME

**Description:** Returns true if first person camera is active in saloon1.ysc

| Property | Value |
|----------|-------|
| Native Name | `_FORCE_FIRST_PERSON_CAM_THIS_FRAME` |
| Hash | `0x90DA5BA5C2635416` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ForceFirstPersonCamThisFrame()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x90DA5BA5C2635416, )
```


---

## _FORCE_LETTER_BOX_THIS_UPDATE

| Property | Value |
|----------|-------|
| Native Name | `_FORCE_LETTER_BOX_THIS_UPDATE` |
| Hash | `0xC64ABC0676AF262B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ForceLetterBoxThisUpdate()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC64ABC0676AF262B, )
```


---

## _FORCE_THIRD_PERSON_CAM_FAR_THIS_FRAME

**Description:** Forces camera position to furthest 3rd person

| Property | Value |
|----------|-------|
| Native Name | `_FORCE_THIRD_PERSON_CAM_FAR_THIS_FRAME` |
| Hash | `0x1CFB749AD4317BDE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ForceThirdPersonCamFarThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1CFB749AD4317BDE, )
```


---

## _FORCE_THIRD_PERSON_CAM_THIS_FRAME

**Description:** Forces camera position to second furthest 3rd person

| Property | Value |
|----------|-------|
| Native Name | `_FORCE_THIRD_PERSON_CAM_THIS_FRAME` |
| Hash | `0x8370D34BD2E60B73` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ForceThirdPersonCamThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8370D34BD2E60B73, )
```


---

## _FREEZE_GAMEPLAY_CAM_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_FREEZE_GAMEPLAY_CAM_THIS_FRAME` |
| Hash | `0x027CAB2C3AF27010` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
FreezeGameplayCamThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x027CAB2C3AF27010, )
```


---

## _GET_PHOTO_MODE_DOF

| Property | Value |
|----------|-------|
| Native Name | `_GET_PHOTO_MODE_DOF` |
| Hash | `0x4653A741D17F2CD0` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetPhotoModeDof()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4653A741D17F2CD0, )
```


---

## _GET_PHOTO_MODE_FOCAL_LENGTH

| Property | Value |
|----------|-------|
| Native Name | `_GET_PHOTO_MODE_FOCAL_LENGTH` |
| Hash | `0x2533BAFFBE737E54` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetPhotoModeFocalLength()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2533BAFFBE737E54, )
```


---

## _GET_PHOTO_MODE_FOCUS_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PHOTO_MODE_FOCUS_DISTANCE` |
| Hash | `0x18FC740FFDCD7454` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetPhotoModeFocusDistance()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x18FC740FFDCD7454, )
```


---

## _IS_ANIM_SCENE_CAM_ACTIVE

**Description:** Only used in R* Script camera_photomode

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIM_SCENE_CAM_ACTIVE` |
| Hash | `0x20389408F0E93B9A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneCamActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x20389408F0E93B9A, )
```


---

## _IS_CAMERA_AVAILABLE

| Property | Value |
|----------|-------|
| Native Name | `_IS_CAMERA_AVAILABLE` |
| Hash | `0x927B810E43E99932` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `cameraDictionary` (const char*) |

### Parameters

- **`cameraDictionary`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsCameraAvailable(cameraDictionary)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x927B810E43E99932, cameraDictionary)
```


---

## _IS_CAM_DATA_DICT_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_IS_CAM_DATA_DICT_LOADED` |
| Hash | `0xDD0B7C5AE58F721D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `cameraDictionary` (const char*) |

### Parameters

- **`cameraDictionary`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsCamDataDictLoaded(cameraDictionary)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDD0B7C5AE58F721D, cameraDictionary)
```


---

## _IS_CAM_PHOTOFX_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `_IS_CAM_PHOTOFX_RUNNING` |
| Hash | `0xA14D5FE82BCB1D9E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsCamPhotofxRunning()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA14D5FE82BCB1D9E, )
```


---

## _IS_CINEMATIC_CAM_LOCATION_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_IS_CINEMATIC_CAM_LOCATION_LOADED` |
| Hash | `0xAA235E2F2C09E952` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `sLocationDictName` (const char*) |

### Parameters

- **`sLocationDictName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsCinematicCamLocationLoaded(sLocationDictName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAA235E2F2C09E952, sLocationDictName)
```


---

## _IS_CINEMATIC_CAM_LOCATION_LOADED_2

**Description:** Checks data related to Cinematic Cam Locations, if the check fails, the location is being loaded using 0x1B3C2D961F5FC0E1.

| Property | Value |
|----------|-------|
| Native Name | `_IS_CINEMATIC_CAM_LOCATION_LOADED_2` |
| Hash | `0x595550376B7EA230` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `locationDictName` (const char*) |

### Parameters

- **`locationDictName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsCinematicCamLocationLoaded2(locationDictName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x595550376B7EA230, locationDictName)
```


---

## _IS_IN_CINEMATIC_MODE

| Property | Value |
|----------|-------|
| Native Name | `_IS_IN_CINEMATIC_MODE` |
| Hash | `0x74F1D22EFA71FAB8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsInCinematicMode()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74F1D22EFA71FAB8, )
```


---

## _IS_IN_FULL_FIRST_PERSON_MODE

**Description:** Returns true if player is in first person

| Property | Value |
|----------|-------|
| Native Name | `_IS_IN_FULL_FIRST_PERSON_MODE` |
| Hash | `0xD1BA66940E94C547` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsInFullFirstPersonMode()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD1BA66940E94C547, )
```


---

## _LOAD_CAMERA_DATA_DICT

| Property | Value |
|----------|-------|
| Native Name | `_LOAD_CAMERA_DATA_DICT` |
| Hash | `0x6A4D224FC7643941` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cameraDictionary` (const char*) |

### Parameters

- **`cameraDictionary`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
LoadCameraDataDict(cameraDictionary)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A4D224FC7643941, cameraDictionary)
```


---

## _LOAD_CINEMATIC_CAM_LOCATION

| Property | Value |
|----------|-------|
| Native Name | `_LOAD_CINEMATIC_CAM_LOCATION` |
| Hash | `0x1B3C2D961F5FC0E1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `locationDictName` (const char*) |

### Parameters

- **`locationDictName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
LoadCinematicCamLocation(locationDictName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1B3C2D961F5FC0E1, locationDictName)
```


---

## _PAUSE_CAMERA_FOCUS

| Property | Value |
|----------|-------|
| Native Name | `_PAUSE_CAMERA_FOCUS` |
| Hash | `0x9F97E85EC142255E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `pause` (BOOL) |

### Parameters

- **`cam`** (`Cam`)
- **`pause`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PauseCameraFocus(cam, pause)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9F97E85EC142255E, cam, pause)
```


---

## _REACTIVATE_PED_HEADSHOT_EXECUTE_SLOWCAM

**Description:** Used to enable headshot kill replay when you headshot set ped.
Params: p1 seems to be 0 or 1 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_REACTIVATE_PED_HEADSHOT_EXECUTE_SLOWCAM` |
| Hash | `0x986F7A51EE3E1F92` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReactivatePedHeadshotExecuteSlowcam(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x986F7A51EE3E1F92, ped, p1)
```


---

## _REQUEST_LETTER_BOX_NOW

**Description:** Creates Cinematic Black Bars (at top and bottom)
Disable instantly: false/false, Enable instantly: true/true

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_LETTER_BOX_NOW` |
| Hash | `0x69D65E89FFD72313` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `p1` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RequestLetterBoxNow(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x69D65E89FFD72313, p0, p1)
```


---

## _REQUEST_LETTER_BOX_OVERTIME

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_LETTER_BOX_OVERTIME` |
| Hash | `0xE296208C273BD7F0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (int), `p2` (BOOL), `p3` (int), `p4` (BOOL), `p5` (BOOL) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)
- **`p3`** (`int`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RequestLetterBoxOvertime(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE296208C273BD7F0, p0, p1, p2, p3, p4, p5)
```


---

## _SET_CAM_FOCUS_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `_SET_CAM_FOCUS_DISTANCE` |
| Hash | `0x11F32BB61B756732` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cam` (Cam), `distance` (float) |

### Parameters

- **`cam`** (`Cam`)
- **`distance`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCamFocusDistance(cam, distance)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x11F32BB61B756732, cam, distance)
```


---

## _SET_GAMEPLAY_CAM_INITIAL_HEADING

| Property | Value |
|----------|-------|
| Native Name | `_SET_GAMEPLAY_CAM_INITIAL_HEADING` |
| Hash | `0x6C1053C433A573CF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `camInitialHeading` (float) |

### Parameters

- **`camInitialHeading`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCamInitialHeading(camInitialHeading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C1053C433A573CF, camInitialHeading)
```


---

## _SET_GAMEPLAY_CAM_INITIAL_PITCH

| Property | Value |
|----------|-------|
| Native Name | `_SET_GAMEPLAY_CAM_INITIAL_PITCH` |
| Hash | `0x449995EA846D3FC2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `camInitialPitch` (float) |

### Parameters

- **`camInitialPitch`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCamInitialPitch(camInitialPitch)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x449995EA846D3FC2, camInitialPitch)
```


---

## _SET_GAMEPLAY_CAM_INITIAL_ZOOM

**Description:** Used in Script Function SHOP_CAMERA_SUPPORT_START_NEW_ORBIT

| Property | Value |
|----------|-------|
| Native Name | `_SET_GAMEPLAY_CAM_INITIAL_ZOOM` |
| Hash | `0xBCDA0BA8762FACB9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `camInitialZoom` (float) |

### Parameters

- **`camInitialZoom`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGameplayCamInitialZoom(camInitialZoom)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBCDA0BA8762FACB9, camInitialZoom)
```


---

## _SET_START_CINEMATIC_DEATH_CAM

**Description:** Used for DUELING_MANAGE_DEATH_CAMERA - Initializing death camera
_SET_P* - _SET_S*

| Property | Value |
|----------|-------|
| Native Name | `_SET_START_CINEMATIC_DEATH_CAM` |
| Hash | `0x6E969927CF632608` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetStartCinematicDeathCam(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6E969927CF632608, p0)
```


---

## _START_CAMERA_ORBIT

**Description:** [SHOP_CAMERA_SUPPORT_START_NEW_ORBIT]
p0: struct<32> /*256*/

| Property | Value |
|----------|-------|
| Native Name | `_START_CAMERA_ORBIT` |
| Hash | `0x65B205BF30C13DDB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
StartCameraOrbit(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x65B205BF30C13DDB, p0)
```


---

## _STOP_GAMEPLAY_CAM_SHAKING_WITH_NAME

**Description:** script_rel: DRUNK_SHAKE, REINFORCED_LASSO_STRUGGLE_SHAKE, CORRECTOR_SHAKE, MINIGAME_BOUNTY_SHAKE, HAND_SHAKE, MINIGAME_TRAIN_SHAKE
script_mp_rel: DRUNK_SHAKE, REINFORCED_LASSO_STRUGGLE_SHAKE
_STOP_GAMEPLAY_CAM* - _STOP_I*

| Property | Value |
|----------|-------|
| Native Name | `_STOP_GAMEPLAY_CAM_SHAKING_WITH_NAME` |
| Hash | `0x4285804FD65D8066` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `shakeName` (const char*), `p1` (BOOL) |

### Parameters

- **`shakeName`** (`const char*`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StopGameplayCamShakingWithName(shakeName, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4285804FD65D8066, shakeName, p1)
```


---

## _TRIGGER_MISSION_FAILED_CAM

| Property | Value |
|----------|-------|
| Native Name | `_TRIGGER_MISSION_FAILED_CAM` |
| Hash | `0x9A92C06ACBAF9731` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
TriggerMissionFailedCam()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9A92C06ACBAF9731, )
```


---

## _UNLOAD_CAMERA_DATA_DICT

| Property | Value |
|----------|-------|
| Native Name | `_UNLOAD_CAMERA_DATA_DICT` |
| Hash | `0x798BE43C9393632B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cameraDictionary` (const char*) |

### Parameters

- **`cameraDictionary`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
UnloadCameraDataDict(cameraDictionary)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x798BE43C9393632B, cameraDictionary)
```


---

## _UNLOAD_CINEMATIC_CAMERA_LOCATION

| Property | Value |
|----------|-------|
| Native Name | `_UNLOAD_CINEMATIC_CAMERA_LOCATION` |
| Hash | `0x2412216FCC7B4E3E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `dictionaryName` (const char*) |

### Parameters

- **`dictionaryName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
UnloadCinematicCameraLocation(dictionaryName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2412216FCC7B4E3E, dictionaryName)
```


---

*End of CAM natives part 5*
