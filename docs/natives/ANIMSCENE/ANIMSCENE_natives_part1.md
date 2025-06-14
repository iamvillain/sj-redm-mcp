# ANIMSCENE Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ANIMSCENE  
**Natives in this file:** 50  
**Total natives in namespace:** 99  
**Generated from:** RDR3natives JSON data

---

## ABORT_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `ABORT_ANIM_SCENE` |
| Hash | `0x718CF1328D20C2B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AbortAnimScene(animScene, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x718CF1328D20C2B3, animScene, p1)
```


---

## ATTACH_ANIM_SCENE_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `ATTACH_ANIM_SCENE_TO_ENTITY` |
| Hash | `0xDC418495DBA327A1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entity` (Entity), `p2` (int) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entity`** (`Entity`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
AttachAnimSceneToEntity(animScene, entity, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDC418495DBA327A1, animScene, entity, p2)
```


---

## ATTACH_ANIM_SCENE_TO_ENTITY_PRESERVING_LOCATION

| Property | Value |
|----------|-------|
| Native Name | `ATTACH_ANIM_SCENE_TO_ENTITY_PRESERVING_LOCATION` |
| Hash | `0x1C0B105C3F30B88D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entity` (Entity), `p2` (int) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entity`** (`Entity`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
AttachAnimSceneToEntityPreservingLocation(animScene, entity, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1C0B105C3F30B88D, animScene, entity, p2)
```


---

## BLOCK_ANIM_SCENE_FADING_NEXT_FRAME

| Property | Value |
|----------|-------|
| Native Name | `BLOCK_ANIM_SCENE_FADING_NEXT_FRAME` |
| Hash | `0x1B70811D3BF75DB9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `p1` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
BlockAnimSceneFadingNextFrame(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1B70811D3BF75DB9, p0, p1)
```


---

## CHECK_OWNERSHIP_OF_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `CHECK_OWNERSHIP_OF_ANIM_SCENE` |
| Hash | `0x661B8683611B9B97` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = CheckOwnershipOfAnimScene(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x661B8683611B9B97, animScene)
```


---

## COULD_ANIM_SCENE_ENTITY_REACH_EXIT_NEXT_FRAME

| Property | Value |
|----------|-------|
| Native Name | `COULD_ANIM_SCENE_ENTITY_REACH_EXIT_NEXT_FRAME` |
| Hash | `0x73616E64696C616E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entityName` (const char*), `p2` (Any), `p3` (Any) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entityName`** (`const char*`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CouldAnimSceneEntityReachExitNextFrame(animScene, entityName, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x73616E64696C616E, animScene, entityName, p2, p3)
```


---

## DETACH_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `DETACH_ANIM_SCENE` |
| Hash | `0x6843A1AA3A336DFF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
DetachAnimScene(animScene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6843A1AA3A336DFF, animScene)
```


---

## DETACH_ANIM_SCENE_PRESERVING_LOCATION

| Property | Value |
|----------|-------|
| Native Name | `DETACH_ANIM_SCENE_PRESERVING_LOCATION` |
| Hash | `0xA2507C4948C83D2E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
DetachAnimScenePreservingLocation(animScene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA2507C4948C83D2E, animScene)
```


---

## DOES_ANIM_SCENE_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_ANIM_SCENE_EXIST` |
| Hash | `0x25557E324489393C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = DoesAnimSceneExist(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x25557E324489393C, animScene)
```


---

## FADE_ANIM_SCENE_AUDIO_IN

| Property | Value |
|----------|-------|
| Native Name | `FADE_ANIM_SCENE_AUDIO_IN` |
| Hash | `0xA41351EA2A18A0AD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (float) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
FadeAnimSceneAudioIn(animScene, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA41351EA2A18A0AD, animScene, p1)
```


---

## FADE_ANIM_SCENE_AUDIO_OUT

| Property | Value |
|----------|-------|
| Native Name | `FADE_ANIM_SCENE_AUDIO_OUT` |
| Hash | `0x323E3AD772BA5D57` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (float) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
FadeAnimSceneAudioOut(animScene, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x323E3AD772BA5D57, animScene, p1)
```


---

## GET_ANIM_SCENE_BOOL

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIM_SCENE_BOOL` |
| Hash | `0x07A6F6447ECA9B64` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `name` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneBool(animScene, name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x07A6F6447ECA9B64, animScene, name)
```


---

## GET_ANIM_SCENE_CURRENT_ACTIVE_CAMERA_COUNT

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIM_SCENE_CURRENT_ACTIVE_CAMERA_COUNT` |
| Hash | `0x4822A65D5AF64E69` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneCurrentActiveCameraCount(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4822A65D5AF64E69, animScene)
```


---

## GET_ANIM_SCENE_ENTITY_LOCATION_DATA

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIM_SCENE_ENTITY_LOCATION_DATA` |
| Hash | `0x8398438D8F14F56D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entityName` (const char*), `matrix` (Vector3*), `p3` (BOOL), `playbackListName` (const char*), `p5` (int) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entityName`** (`const char*`)
- **`matrix`** (`Vector3*`)
- **`p3`** (`BOOL`)
- **`playbackListName`** (`const char*`)
- **`p5`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneEntityLocationData(animScene, entityName, matrix, p3, playbackListName, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8398438D8F14F56D, animScene, entityName, matrix, p3, playbackListName, p5)
```


---

## GET_ANIM_SCENE_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIM_SCENE_FLOAT` |
| Hash | `0xCC24CB07F60B496E` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `name` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneFloat(animScene, name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCC24CB07F60B496E, animScene, name)
```


---

## GET_ANIM_SCENE_INT

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIM_SCENE_INT` |
| Hash | `0x2B7277484CC095FD` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `name` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimSceneInt(animScene, name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2B7277484CC095FD, animScene, name)
```


---

## GET_ANIM_SCENE_ORIGIN

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIM_SCENE_ORIGIN` |
| Hash | `0xADF1D53F3B1FE0A7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `position` (Vector3*), `rotation` (Vector3*), `order` (int) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`position`** (`Vector3*`)
- **`rotation`** (`Vector3*`)
- **`order`** (`int`)

### Usage

**Lua (Direct):**
```lua
GetAnimSceneOrigin(animScene, position, rotation, order)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xADF1D53F3B1FE0A7, animScene, position, rotation, order)
```


---

## GET_ANIM_SCENE_PHASE

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIM_SCENE_PHASE` |
| Hash | `0x3FBC3F51BF12DFBF` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimScenePhase(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3FBC3F51BF12DFBF, animScene)
```


---

## HAS_ANIM_SCENE_EXITED

| Property | Value |
|----------|-------|
| Native Name | `HAS_ANIM_SCENE_EXITED` |
| Hash | `0xF94692EB9DC15D74` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = HasAnimSceneExited(animScene, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF94692EB9DC15D74, animScene, p1)
```


---

## HAS_ENTITY_EXITED_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `HAS_ENTITY_EXITED_ANIM_SCENE` |
| Hash | `0xB89FCFF19DAFFF28` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entityName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entityName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityExitedAnimScene(animScene, entityName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB89FCFF19DAFFF28, animScene, entityName)
```


---

## IS_ANIM_SCENE_EXITING_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `IS_ANIM_SCENE_EXITING_THIS_FRAME` |
| Hash | `0xCDC5512A407CF08D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneExitingThisFrame(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCDC5512A407CF08D, animScene)
```


---

## IS_ANIM_SCENE_FINISHED

| Property | Value |
|----------|-------|
| Native Name | `IS_ANIM_SCENE_FINISHED` |
| Hash | `0xD8254CB2C586412B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneFinished(animScene, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD8254CB2C586412B, animScene, p1)
```


---

## IS_ANIM_SCENE_IN_SECTION

| Property | Value |
|----------|-------|
| Native Name | `IS_ANIM_SCENE_IN_SECTION` |
| Hash | `0x8D81E7824B7753F7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `sectionName` (const char*), `p2` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`sectionName`** (`const char*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneInSection(animScene, sectionName, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8D81E7824B7753F7, animScene, sectionName, p2)
```


---

## IS_ANIM_SCENE_LOADED

| Property | Value |
|----------|-------|
| Native Name | `IS_ANIM_SCENE_LOADED` |
| Hash | `0x477122B8D05E7968` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneLoaded(animScene, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x477122B8D05E7968, animScene, p1, p2)
```


---

## IS_ANIM_SCENE_METADATA_LOADED

| Property | Value |
|----------|-------|
| Native Name | `IS_ANIM_SCENE_METADATA_LOADED` |
| Hash | `0x95531A4A20CCE7BC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneMetadataLoaded(animScene, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x95531A4A20CCE7BC, animScene, p1)
```


---

## IS_ANIM_SCENE_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `IS_ANIM_SCENE_RUNNING` |
| Hash | `0xCBFC7725DE6CE2E0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimSceneRunning(animScene, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCBFC7725DE6CE2E0, animScene, p1)
```


---

## IS_ENTITY_EXITING_ANIM_SCENE_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_EXITING_ANIM_SCENE_THIS_FRAME` |
| Hash | `0x005E6F28DD7ED58D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entityName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entityName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityExitingAnimSceneThisFrame(animScene, entityName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x005E6F28DD7ED58D, animScene, entityName)
```


---

## IS_ENTITY_PLAYING_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_PLAYING_ANIM_SCENE` |
| Hash | `0x3AB6C7B0BB0DF4B1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `animScene` (AnimScene) |

### Parameters

- **`entity`** (`Entity`)
- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityPlayingAnimScene(entity, animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3AB6C7B0BB0DF4B1, entity, animScene)
```


---

## LOAD_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `LOAD_ANIM_SCENE` |
| Hash | `0xAF068580194D9DC7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
LoadAnimScene(animScene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAF068580194D9DC7, animScene)
```


---

## REMOVE_ANIM_SCENE_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_ANIM_SCENE_ENTITY` |
| Hash | `0x2BF96692C67F3E53` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entityName` (const char*), `entity` (Entity) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entityName`** (`const char*`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
RemoveAnimSceneEntity(animScene, entityName, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2BF96692C67F3E53, animScene, entityName, entity)
```


---

## REQUEST_ANIM_SCENE_PLAY_LIST

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_ANIM_SCENE_PLAY_LIST` |
| Hash | `0xDF7B5144E25CD3FE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `playlistName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`playlistName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = RequestAnimScenePlayList(animScene, playlistName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF7B5144E25CD3FE, animScene, playlistName)
```


---

## RESET_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `RESET_ANIM_SCENE` |
| Hash | `0x8FDF221F13537936` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `playbackListName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`playbackListName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ResetAnimScene(animScene, playbackListName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8FDF221F13537936, animScene, playbackListName)
```


---

## RESUME_ANIM_SCENE_FROM_LAST_CHECKPOINT

| Property | Value |
|----------|-------|
| Native Name | `RESUME_ANIM_SCENE_FROM_LAST_CHECKPOINT` |
| Hash | `0x8E1BA705F63C1925` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
ResumeAnimSceneFromLastCheckpoint(animScene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8E1BA705F63C1925, animScene)
```


---

## SET_ANIM_SCENE_BOOL

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_SCENE_BOOL` |
| Hash | `0x519E96C2C68B404B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `name` (const char*), `value` (BOOL), `p3` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`name`** (`const char*`)
- **`value`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAnimSceneBool(animScene, name, value, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x519E96C2C68B404B, animScene, name, value, p3)
```


---

## SET_ANIM_SCENE_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_SCENE_ENTITY` |
| Hash | `0x8B720AD451CA2AB3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `entityName` (const char*), `entity` (Entity), `flags` (int) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`entityName`** (`const char*`)
- **`entity`** (`Entity`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetAnimSceneEntity(animScene, entityName, entity, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8B720AD451CA2AB3, animScene, entityName, entity, flags)
```


---

## SET_ANIM_SCENE_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_SCENE_FLOAT` |
| Hash | `0x6BC5104E68CBEFE8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `name` (const char*), `value` (float), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`name`** (`const char*`)
- **`value`** (`float`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAnimSceneFloat(animScene, name, value, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6BC5104E68CBEFE8, animScene, name, value, p3, p4)
```


---

## SET_ANIM_SCENE_INT

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_SCENE_INT` |
| Hash | `0x3A379D2166CF5B92` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `name` (const char*), `value` (int), `p3` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`name`** (`const char*`)
- **`value`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAnimSceneInt(animScene, name, value, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3A379D2166CF5B92, animScene, name, value, p3)
```


---

## SET_ANIM_SCENE_ORIGIN

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_SCENE_ORIGIN` |
| Hash | `0x020894BF17A02EF2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `posX` (float), `posY` (float), `posZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `order` (int) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`order`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetAnimSceneOrigin(animScene, posX, posY, posZ, rotX, rotY, rotZ, order)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x020894BF17A02EF2, animScene, posX, posY, posZ, rotX, rotY, rotZ, order)
```


---

## SET_ANIM_SCENE_PAUSED

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_SCENE_PAUSED` |
| Hash | `0xD6824B7D24DC0CE0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `toggle` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAnimScenePaused(animScene, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD6824B7D24DC0CE0, animScene, toggle)
```


---

## SET_ANIM_SCENE_PLAYBACK_LIST

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_SCENE_PLAYBACK_LIST` |
| Hash | `0xAB5E7CAB074D6B84` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `playbackListName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`playbackListName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetAnimScenePlaybackList(animScene, playbackListName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAB5E7CAB074D6B84, animScene, playbackListName)
```


---

## SET_ANIM_SCENE_PLAY_LIST

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_SCENE_PLAY_LIST` |
| Hash | `0x15598CFB25F3DC7E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `playlistName` (const char*), `p2` (BOOL) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`playlistName`** (`const char*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAnimScenePlayList(animScene, playlistName, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x15598CFB25F3DC7E, animScene, playlistName, p2)
```


---

## SET_ANIM_SCENE_RATE

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_SCENE_RATE` |
| Hash | `0x75820B801CFF262A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `rate` (float) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`rate`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAnimSceneRate(animScene, rate)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75820B801CFF262A, animScene, rate)
```


---

## START_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `START_ANIM_SCENE` |
| Hash | `0xF4D94AF761768700` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
StartAnimScene(animScene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF4D94AF761768700, animScene)
```


---

## TAKE_OWNERSHIP_OF_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `TAKE_OWNERSHIP_OF_ANIM_SCENE` |
| Hash | `0xF7A4C571E572D237` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
TakeOwnershipOfAnimScene(animScene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF7A4C571E572D237, animScene)
```


---

## TRIGGER_ANIM_SCENE_SKIP

| Property | Value |
|----------|-------|
| Native Name | `TRIGGER_ANIM_SCENE_SKIP` |
| Hash | `0x4B85B3CF9197AEDF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
TriggerAnimSceneSkip(animScene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4B85B3CF9197AEDF, animScene)
```


---

## WAS_ANIM_SCENE_SKIPPED

| Property | Value |
|----------|-------|
| Native Name | `WAS_ANIM_SCENE_SKIPPED` |
| Hash | `0xEF324E9550A394D5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = WasAnimSceneSkipped(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEF324E9550A394D5, animScene)
```


---

## _0x1407F5115FB9583E

**Description:** Used in SP R* Scripts only
Params: p1 = 2B-LowHonor, 2A-HighHonor

| Property | Value |
|----------|-------|
| Native Name | `_0x1407F5115FB9583E` |
| Hash | `0x1407F5115FB9583E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `p1` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1407F5115FB9583E(animScene, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1407F5115FB9583E, animScene, p1)
```


---

## _0x1AD896BF43619551

**Description:** Used in braithwaites2 SP R* Scripts only
_A*

| Property | Value |
|----------|-------|
| Native Name | `_0x1AD896BF43619551` |
| Hash | `0x1AD896BF43619551` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x1AD896BF43619551()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1AD896BF43619551, )
```


---

## _0x1C5D33A4293E6DDE

**Description:** Used in SP R* Scripts only
_IS_ANIM_SCENE_P*

| Property | Value |
|----------|-------|
| Native Name | `_0x1C5D33A4293E6DDE` |
| Hash | `0x1C5D33A4293E6DDE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene), `phaseName` (const char*) |

### Parameters

- **`animScene`** (`AnimScene`)
- **`phaseName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1C5D33A4293E6DDE(animScene, phaseName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1C5D33A4293E6DDE, animScene, phaseName)
```


---

## _0x2DB524750DC41ED4

**Description:** Used in SP R* Scripts only
_IS_PED_* - _IS_SC*

| Property | Value |
|----------|-------|
| Native Name | `_0x2DB524750DC41ED4` |
| Hash | `0x2DB524750DC41ED4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x2DB524750DC41ED4()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2DB524750DC41ED4, )
```


---

*End of ANIMSCENE natives part 1*
