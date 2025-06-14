# ANIMSCENE Natives - Part 2 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ANIMSCENE  
**Natives in this file:** 49  
**Total natives in namespace:** 99  
**Generated from:** RDR3natives JSON data

---

## _0x3641FCD53E59B335

**Description:** p2: MINIGAME_GET_SECONDARY_VOICE_STRING
_SET_*

| Property | Value |
|----------|-------|
| Native Name | `_0x3641FCD53E59B335` |
| Hash | `0x3641FCD53E59B335` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `mgmHandle` (int), `ped` (Ped), `secondaryVoiceString` (const char*) |

### Parameters

- **`mgmHandle`** (`int`)
- **`ped`** (`Ped`)
- **`secondaryVoiceString`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0x3641FCD53E59B335(mgmHandle, ped, secondaryVoiceString)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3641FCD53E59B335, mgmHandle, ped, secondaryVoiceString)
```


---

## _0x3B393716C3FD8237

**Description:** Used in SP R* Scripts only
_IS_*

| Property | Value |
|----------|-------|
| Native Name | `_0x3B393716C3FD8237` |
| Hash | `0x3B393716C3FD8237` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x3B393716C3FD8237(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3B393716C3FD8237, ped)
```


---

## _0x4B85B3CF91972222

**Description:** Used in Script Function CUTSCENE_MANAGE_SKIP
_CHECK_* (?)

| Property | Value |
|----------|-------|
| Native Name | `_0x4B85B3CF91972222` |
| Hash | `0x4B85B3CF91972222` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = _0x4B85B3CF91972222(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4B85B3CF91972222, animScene)
```


---

## _0x5D7BFDA2290B4E39

**Description:** Used in SP R* Scripts only
_IS_ANIM_SCENE_R* - _IS_ANIM_SCENE_S*

| Property | Value |
|----------|-------|
| Native Name | `_0x5D7BFDA2290B4E39` |
| Hash | `0x5D7BFDA2290B4E39` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x5D7BFDA2290B4E39(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5D7BFDA2290B4E39, p0)
```


---

## _0x61B2AAEF645DDAF0

**Description:** Only used in tg_p R* Script
Returns true when mgm event success
_PREPARE_* - _REGISTER_*

| Property | Value |
|----------|-------|
| Native Name | `_0x61B2AAEF645DDAF0` |
| Hash | `0x61B2AAEF645DDAF0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `mgmEventHandle` (int), `p1` (const char*), `seatId` (int), `p3` (int), `p4` (BOOL) |

### Parameters

- **`mgmEventHandle`** (`int`)
- **`p1`** (`const char*`)
- **`seatId`** (`int`)
- **`p3`** (`int`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x61B2AAEF645DDAF0(mgmEventHandle, p1, seatId, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x61B2AAEF645DDAF0, mgmEventHandle, p1, seatId, p3, p4)
```


---

## _0x73616E64696C132E

**Description:** Used in SP R* Scripts only
_CO* - _CR*

| Property | Value |
|----------|-------|
| Native Name | `_0x73616E64696C132E` |
| Hash | `0x73616E64696C132E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x73616E64696C132E(animScene, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x73616E64696C132E, animScene, p1)
```


---

## _0x9AAE3C1148A09BCA

**Description:** Used in SP R* Scripts only
_IS_ANIM_SCENE_*

| Property | Value |
|----------|-------|
| Native Name | `_0x9AAE3C1148A09BCA` |
| Hash | `0x9AAE3C1148A09BCA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = _0x9AAE3C1148A09BCA(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9AAE3C1148A09BCA, animScene)
```


---

## _0xA96619FE85159ED2

**Description:** Used in SP R* Scripts only
_WAS_ANIM_SCENE_*

| Property | Value |
|----------|-------|
| Native Name | `_0xA96619FE85159ED2` |
| Hash | `0xA96619FE85159ED2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA96619FE85159ED2(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA96619FE85159ED2, animScene)
```


---

## _0xAE6DE22DE0ED4554

**Description:** _UNLOAD_* - _WAS_ANIM_SCENE_*

| Property | Value |
|----------|-------|
| Native Name | `_0xAE6DE22DE0ED4554` |
| Hash | `0xAE6DE22DE0ED4554` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `mgmHandle` (int), `ped` (Ped) |

### Parameters

- **`mgmHandle`** (`int`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xAE6DE22DE0ED4554(mgmHandle, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE6DE22DE0ED4554, mgmHandle, ped)
```


---

## _0xB1A196BAFE650402

**Description:** _PREPARE_* - _REGISTER_*

| Property | Value |
|----------|-------|
| Native Name | `_0xB1A196BAFE650402` |
| Hash | `0xB1A196BAFE650402` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `mgmHandle` (int), `ped` (Ped) |

### Parameters

- **`mgmHandle`** (`int`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xB1A196BAFE650402(mgmHandle, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB1A196BAFE650402, mgmHandle, ped)
```


---

## _0xC1193521E3B9FADD

**Description:** Used in SP R* Scripts only
_RESUME_* - _SET_A*

| Property | Value |
|----------|-------|
| Native Name | `_0xC1193521E3B9FADD` |
| Hash | `0xC1193521E3B9FADD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xC1193521E3B9FADD(entity, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC1193521E3B9FADD, entity, p1)
```


---

## _0xCDCD7B2D49AEE73A

**Description:** Used in SP R* Scripts only
_SET_P*

| Property | Value |
|----------|-------|
| Native Name | `_0xCDCD7B2D49AEE73A` |
| Hash | `0xCDCD7B2D49AEE73A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xCDCD7B2D49AEE73A(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCDCD7B2D49AEE73A, p0)
```


---

## _0xD70C7A30412F8FA0

**Description:** Used in SP R* Scripts only
_IS_ANIM_SCENE_*

| Property | Value |
|----------|-------|
| Native Name | `_0xD70C7A30412F8FA0` |
| Hash | `0xD70C7A30412F8FA0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD70C7A30412F8FA0(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD70C7A30412F8FA0, animScene)
```


---

## _0xE12D7B4B959644CD

**Description:** Used in SP R* Scripts only
_SET_B* - _SET_C*

| Property | Value |
|----------|-------|
| Native Name | `_0xE12D7B4B959644CD` |
| Hash | `0xE12D7B4B959644CD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xE12D7B4B959644CD()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE12D7B4B959644CD, )
```


---

## _0xEA41D44A8D42057B

**Description:** Used in SP R* Scripts only
_PAUSE_* - _PLAY_*

| Property | Value |
|----------|-------|
| Native Name | `_0xEA41D44A8D42057B` |
| Hash | `0xEA41D44A8D42057B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0xEA41D44A8D42057B()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEA41D44A8D42057B, )
```


---

## _CLEAR_ANIM_SCENE_WAS_SKIPPED

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_ANIM_SCENE_WAS_SKIPPED` |
| Hash | `0x8A8208AE92BF87A5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
ClearAnimSceneWasSkipped(animScene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8A8208AE92BF87A5, animScene)
```


---

## _CLEAR_BREAKOUT_ARCHETYPE

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_BREAKOUT_ARCHETYPE` |
| Hash | `0xBC781D24AA11F179` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearBreakoutArchetype(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC781D24AA11F179, ped)
```


---

## _CREATE_ANIM_SCENE

**Description:** flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eAnimSceneFlag

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_ANIM_SCENE` |
| Hash | `0x1FCA98E33C1437B3` |
| Return Type | `AnimScene` |
| Build | `1207` |
| Parameters | `animDict` (char*), `flags` (int), `playbackListName` (char*), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`animDict`** (`char*`)
- **`flags`** (`int`)
- **`playbackListName`** (`char*`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateAnimScene(animDict, flags, playbackListName, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1FCA98E33C1437B3, animDict, flags, playbackListName, p3, p4)
```


---

## _CREATE_MGM_SYSTEM

**Description:** Returns mgmHandle

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_MGM_SYSTEM` |
| Hash | `0xA1300DE03E5D1973` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `mgmFilename` (const char*) |

### Parameters

- **`mgmFilename`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = CreateMgmSystem(mgmFilename)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA1300DE03E5D1973, mgmFilename)
```


---

## _DELETE_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `_DELETE_ANIM_SCENE` |
| Hash | `0x84EEDB2C6E650000` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
DeleteAnimScene(animScene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x84EEDB2C6E650000, animScene)
```


---

## _DELETE_MGM_SYSTEM

| Property | Value |
|----------|-------|
| Native Name | `_DELETE_MGM_SYSTEM` |
| Hash | `0x53CB3970BA02E3CC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `mgmHandle` (int) |

### Parameters

- **`mgmHandle`** (`int`)

### Usage

**Lua (Direct):**
```lua
DeleteMgmSystem(mgmHandle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x53CB3970BA02E3CC, mgmHandle)
```


---

## _DOES_ANIM_SCENE_OWNERSHIP_OF_ENTITY_EXIST

| Property | Value |
|----------|-------|
| Native Name | `_DOES_ANIM_SCENE_OWNERSHIP_OF_ENTITY_EXIST` |
| Hash | `0x9D1ECA9337BE9FC3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entityName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entityName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DoesAnimSceneOwnershipOfEntityExist(animScene, entityName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9D1ECA9337BE9FC3, animScene, entityName)
```


---

## _DOES_ANIM_SCENE_PLAY_LIST_EXIST

| Property | Value |
|----------|-------|
| Native Name | `_DOES_ANIM_SCENE_PLAY_LIST_EXIST` |
| Hash | `0xA9016536015DE29D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `playbackListName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`playbackListName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DoesAnimScenePlayListExist(animScene, playbackListName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA9016536015DE29D, animScene, playbackListName)
```


---

## _DOES_ENTITY_WITH_ID_EXIST_IN_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `_DOES_ENTITY_WITH_ID_EXIST_IN_ANIM_SCENE` |
| Hash | `0x6F1F0B17109309DA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entityId` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entityId`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DoesEntityWithIdExistInAnimScene(animScene, entityId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6F1F0B17109309DA, animScene, entityId)
```


---

## _GET_ANIM_SCENE_DICT

| Property | Value |
|----------|-------|
| Native Name | `_GET_ANIM_SCENE_DICT` |
| Hash | `0xAE5ADA4FE3E21ADC` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneDict(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAE5ADA4FE3E21ADC, animScene)
```


---

## _GET_ANIM_SCENE_DURATION

| Property | Value |
|----------|-------|
| Native Name | `_GET_ANIM_SCENE_DURATION` |
| Hash | `0x49F1D143ADE32656` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneDuration(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x49F1D143ADE32656, animScene)
```


---

## _GET_ANIM_SCENE_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `_GET_ANIM_SCENE_OBJECT` |
| Hash | `0xFB5674687A1B2814` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `name` (const char*), `isNetwork` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`name`** (`const char*`)
- **`isNetwork`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneObject(animScene, name, isNetwork)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFB5674687A1B2814, animScene, name, isNetwork)
```


---

## _GET_ANIM_SCENE_PED

| Property | Value |
|----------|-------|
| Native Name | `_GET_ANIM_SCENE_PED` |
| Hash | `0xE5822422197BBBA3` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `name` (const char*), `isNetwork` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`name`** (`const char*`)
- **`isNetwork`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimScenePed(animScene, name, isNetwork)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE5822422197BBBA3, animScene, name, isNetwork)
```


---

## _GET_ANIM_SCENE_PLAYBACK_LIST_PHASE_AUDIO_LOAD_STRESS

| Property | Value |
|----------|-------|
| Native Name | `_GET_ANIM_SCENE_PLAYBACK_LIST_PHASE_AUDIO_LOAD_STRESS` |
| Hash | `0x9E036D5204FFBBC8` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `phaseName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`phaseName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimScenePlaybackListPhaseAudioLoadStress(animScene, phaseName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9E036D5204FFBBC8, animScene, phaseName)
```


---

## _GET_ANIM_SCENE_RATE

| Property | Value |
|----------|-------|
| Native Name | `_GET_ANIM_SCENE_RATE` |
| Hash | `0x43C21623E42B821B` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneRate(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x43C21623E42B821B, animScene)
```


---

## _GET_ANIM_SCENE_TIME

| Property | Value |
|----------|-------|
| Native Name | `_GET_ANIM_SCENE_TIME` |
| Hash | `0x61BE7D6186260002` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneTime(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x61BE7D6186260002, animScene)
```


---

## _GET_ANIM_SCENE_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_GET_ANIM_SCENE_VEHICLE` |
| Hash | `0x430EE0A19BC5A287` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `name` (const char*), `isNetwork` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`name`** (`const char*`)
- **`isNetwork`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneVehicle(animScene, name, isNetwork)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x430EE0A19BC5A287, animScene, name, isNetwork)
```


---

## _HAS_ENTITY_ENTERED_ANIM_SCENE

**Description:** _HAS_L* (?)

| Property | Value |
|----------|-------|
| Native Name | `_HAS_ENTITY_ENTERED_ANIM_SCENE` |
| Hash | `0x337F1CC8EE895601` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entityName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entityName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityEnteredAnimScene(animScene, entityName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x337F1CC8EE895601, animScene, entityName)
```


---

## _IS_ANIM_SCENE_ABORTED

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIM_SCENE_ABORTED` |
| Hash | `0x34A0671BE613D3D0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneAborted(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x34A0671BE613D3D0, animScene)
```


---

## _IS_ANIM_SCENE_LOADING

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIM_SCENE_LOADING` |
| Hash | `0x59606519FF9D3EC2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneLoading(animScene, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x59606519FF9D3EC2, animScene, p1)
```


---

## _IS_ANIM_SCENE_METADATA_ASSET_IN_RANGE_LOADING

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIM_SCENE_METADATA_ASSET_IN_RANGE_LOADING` |
| Hash | `0xF8D1D2DAB6007EEF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneMetadataAssetInRangeLoading(animScene, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF8D1D2DAB6007EEF, animScene, p1)
```


---

## _IS_ANIM_SCENE_PAUSED

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIM_SCENE_PAUSED` |
| Hash | `0x4B4038796F0D6566` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimScenePaused(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4B4038796F0D6566, animScene)
```


---

## _IS_ANIM_SCENE_PLAYBACK_LIST_PHASE_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIM_SCENE_PLAYBACK_LIST_PHASE_ACTIVE` |
| Hash | `0x1F0E401031E20146` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `phaseName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`phaseName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimScenePlaybackListPhaseActive(animScene, phaseName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F0E401031E20146, animScene, phaseName)
```


---

## _IS_ANIM_SCENE_PLAYBACK_LIST_PHASE_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIM_SCENE_PLAYBACK_LIST_PHASE_LOADED` |
| Hash | `0x23E33CB9F4A3F547` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `phaseName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`phaseName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimScenePlaybackListPhaseLoaded(animScene, phaseName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x23E33CB9F4A3F547, animScene, phaseName)
```


---

## _IS_ANIM_SCENE_PLAYBACK_LIST_PHASE_LOADING

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIM_SCENE_PLAYBACK_LIST_PHASE_LOADING` |
| Hash | `0x0DF57F86FE71DBE5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `phaseName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`phaseName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimScenePlaybackListPhaseLoading(animScene, phaseName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0DF57F86FE71DBE5, animScene, phaseName)
```


---

## _IS_ANIM_SCENE_SKIPPABLE

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIM_SCENE_SKIPPABLE` |
| Hash | `0x4CDFFE3189EBDBD0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneSkippable(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4CDFFE3189EBDBD0, animScene)
```


---

## _IS_MGM_SYSTEM_LOADED

**Description:** MGM stands for MiniGameMoments.

| Property | Value |
|----------|-------|
| Native Name | `_IS_MGM_SYSTEM_LOADED` |
| Hash | `0xFDFC14799373283F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `mgmFilename` (const char*) |

### Parameters

- **`mgmFilename`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsMgmSystemLoaded(mgmFilename)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFDFC14799373283F, mgmFilename)
```


---

## _LOAD_MGM_ASSETS

**Description:** Used to request MiniGameMoments Assets.

mgmFilename's:
Poker
PokerArthur
PokerArthurCamp
PokerJohn
PokerJohnCamp

| Property | Value |
|----------|-------|
| Native Name | `_LOAD_MGM_ASSETS` |
| Hash | `0xB727A847862CB00A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `mgmFilename` (const char*) |

### Parameters

- **`mgmFilename`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = LoadMgmAssets(mgmFilename)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB727A847862CB00A, mgmFilename)
```


---

## _PAUSE_SCRIPT_THREADS

**Description:** Pauses all script threads except the one that called it.

| Property | Value |
|----------|-------|
| Native Name | `_PAUSE_SCRIPT_THREADS` |
| Hash | `0x37C1257849DEF24A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PauseScriptThreads(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x37C1257849DEF24A, toggle)
```


---

## _RELEASE_ANIM_SCENE_PLAY_LIST

| Property | Value |
|----------|-------|
| Native Name | `_RELEASE_ANIM_SCENE_PLAY_LIST` |
| Hash | `0xAE6ADA8FE7E84ACC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `playlistName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`playlistName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = ReleaseAnimScenePlayList(animScene, playlistName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAE6ADA8FE7E84ACC, animScene, playlistName)
```


---

## _REQUEST_PHOTO_MODE_DEFREEZE

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PHOTO_MODE_DEFREEZE` |
| Hash | `0x41AFA5F228B0B6B0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
RequestPhotoModeDefreeze()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x41AFA5F228B0B6B0, )
```


---

## _REQUEST_PHOTO_MODE_FREEZE

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PHOTO_MODE_FREEZE` |
| Hash | `0x7C709C01D43D94CD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
RequestPhotoModeFreeze()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C709C01D43D94CD, )
```


---

## _SET_BREAKOUT_ARCHETYPE

| Property | Value |
|----------|-------|
| Native Name | `_SET_BREAKOUT_ARCHETYPE` |
| Hash | `0x99B2A2E3655DEAF1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `archetype` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`archetype`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetBreakoutArchetype(ped, archetype)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x99B2A2E3655DEAF1, ped, archetype)
```


---

## _SET_MGM_EVENT

| Property | Value |
|----------|-------|
| Native Name | `_SET_MGM_EVENT` |
| Hash | `0x07706C4CC9C6CC9E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `mgmEventHandle` (int), `p1` (const char*), `seatId` (Any), `p3` (int), `p4` (float) |

### Parameters

- **`mgmEventHandle`** (`int`)
- **`p1`** (`const char*`)
- **`seatId`** (`Any`)
- **`p3`** (`int`)
- **`p4`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetMgmEvent(mgmEventHandle, p1, seatId, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x07706C4CC9C6CC9E, mgmEventHandle, p1, seatId, p3, p4)
```


---

*End of ANIMSCENE natives part 2*
