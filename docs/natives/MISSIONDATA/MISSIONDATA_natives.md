# MISSIONDATA Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** MISSIONDATA  
**Natives in this file:** 18  
**Generated from:** RDR3natives JSON data

---

## MISSIONDATA_GET_CATAGORY

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_GET_CATAGORY` |
| Hash | `0x57E798B65C45EE17` |
| Return Type | `Hash` |
| Build | `1232` |
| Parameters | `missionId` (Hash) |

### Parameters

- **`missionId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MissiondataGetCatagory(missionId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57E798B65C45EE17, missionId)
```


---

## MISSIONDATA_GET_HIGH_SCORE

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_GET_HIGH_SCORE` |
| Hash | `0x9AABABF8313C3516` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `missionId` (Hash) |

### Parameters

- **`missionId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MissiondataGetHighScore(missionId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9AABABF8313C3516, missionId)
```


---

## MISSIONDATA_GET_RATING

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_GET_RATING` |
| Hash | `0x57E798B54C45EE1A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `missionId` (Hash) |

### Parameters

- **`missionId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MissiondataGetRating(missionId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57E798B54C45EE1A, missionId)
```


---

## MISSIONDATA_GET_REPLAY_STATE

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_GET_REPLAY_STATE` |
| Hash | `0x8C32D86E9556ED86` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = MissiondataGetReplayState(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8C32D86E9556ED86, p0)
```


---

## MISSIONDATA_GET_TEXTURE_NAME

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_GET_TEXTURE_NAME` |
| Hash | `0x57E798B56C45EE15` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `missionId` (Hash) |

### Parameters

- **`missionId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MissiondataGetTextureName(missionId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57E798B56C45EE15, missionId)
```


---

## MISSIONDATA_GET_TEXTURE_TXD

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_GET_TEXTURE_TXD` |
| Hash | `0x57E798B57C45EE16` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `missionId` (Hash) |

### Parameters

- **`missionId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MissiondataGetTextureTxd(missionId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57E798B57C45EE16, missionId)
```


---

## MISSIONDATA_IS_REQUIRED_STORY_MISSION

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_IS_REQUIRED_STORY_MISSION` |
| Hash | `0xE824CE7D13FCB35E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `missionId` (Hash) |

### Parameters

- **`missionId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MissiondataIsRequiredStoryMission(missionId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE824CE7D13FCB35E, missionId)
```


---

## MISSIONDATA_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_IS_VALID` |
| Hash | `0xE54DC27571D5EDC5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = MissiondataIsValid(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE54DC27571D5EDC5, p0)
```


---

## MISSIONDATA_SET_HIGH_SCORE

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_SET_HIGH_SCORE` |
| Hash | `0x3A04F0169DA87A9D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `missionId` (Hash), `score` (int) |

### Parameters

- **`missionId`** (`Hash`)
- **`score`** (`int`)

### Usage

**Lua (Direct):**
```lua
MissiondataSetHighScore(missionId, score)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3A04F0169DA87A9D, missionId, score)
```


---

## MISSIONDATA_SET_RATING_SCORES

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_SET_RATING_SCORES` |
| Hash | `0x12F65317708749A5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `missionId` (Hash), `bronzeScore` (int), `silverScore` (int), `goldScore` (int) |

### Parameters

- **`missionId`** (`Hash`)
- **`bronzeScore`** (`int`)
- **`silverScore`** (`int`)
- **`goldScore`** (`int`)

### Usage

**Lua (Direct):**
```lua
MissiondataSetRatingScores(missionId, bronzeScore, silverScore, goldScore)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x12F65317708749A5, missionId, bronzeScore, silverScore, goldScore)
```


---

## MISSIONDATA_SET_REPLAY_LOCKED_FOR_CATEGORY

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_SET_REPLAY_LOCKED_FOR_CATEGORY` |
| Hash | `0x957A830C9B4B99EA` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `category` (Hash), `locked` (BOOL) |

### Parameters

- **`category`** (`Hash`)
- **`locked`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
MissiondataSetReplayLockedForCategory(category, locked)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x957A830C9B4B99EA, category, locked)
```


---

## MISSIONDATA_WAS_COMPLETED

**Description:** see: missions.meta

| Property | Value |
|----------|-------|
| Native Name | `MISSIONDATA_WAS_COMPLETED` |
| Hash | `0xE54DC27571D5EDC4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `missionId` (Hash) |

### Parameters

- **`missionId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MissiondataWasCompleted(missionId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE54DC27571D5EDC4, missionId)
```


---

## _MISSIONDATA_IS_REPLAY_CATEGORY_LOCKED

| Property | Value |
|----------|-------|
| Native Name | `_MISSIONDATA_IS_REPLAY_CATEGORY_LOCKED` |
| Hash | `0xE145864DECC34219` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `category` (Hash) |

### Parameters

- **`category`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MissiondataIsReplayCategoryLocked(category)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE145864DECC34219, category)
```


---

## _MISSIONDATA_SET_MISSION_RATING

**Description:** MISSION_RATING_INCOMPLETE = 0,
MISSION_RATING_SKIPPED,
MISSION_RATING_COMPLETE,
MISSION_RATING_BRONZE,
MISSION_RATING_SILVER,
MISSION_RATING_GOLD,

| Property | Value |
|----------|-------|
| Native Name | `_MISSIONDATA_SET_MISSION_RATING` |
| Hash | `0xE824CE7D13FCB300` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `missionId` (Hash), `rating` (int) |

### Parameters

- **`missionId`** (`Hash`)
- **`rating`** (`int`)

### Usage

**Lua (Direct):**
```lua
MissiondataSetMissionRating(missionId, rating)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE824CE7D13FCB300, missionId, rating)
```


---

## _MISSIONDATA_SET_REPLAY_STATE_LOCKED

**Description:** replayState: MISSIONDATA_GET_REPLAY_STATE

| Property | Value |
|----------|-------|
| Native Name | `_MISSIONDATA_SET_REPLAY_STATE_LOCKED` |
| Hash | `0xE4E2C581F127A11C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `missionId` (Hash), `replayState` (int) |

### Parameters

- **`missionId`** (`Hash`)
- **`replayState`** (`int`)

### Usage

**Lua (Direct):**
```lua
MissiondataSetReplayStateLocked(missionId, replayState)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE4E2C581F127A11C, missionId, replayState)
```


---

## _MISSIONDATA_TIMECYCLE_BOX_DELETE

| Property | Value |
|----------|-------|
| Native Name | `_MISSIONDATA_TIMECYCLE_BOX_DELETE` |
| Hash | `0x7F89E15A8FB8DE97` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
MissiondataTimecycleBoxDelete()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7F89E15A8FB8DE97, )
```


---

## _MISSIONDATA_TIMECYCLE_BOX_EXISTS

| Property | Value |
|----------|-------|
| Native Name | `_MISSIONDATA_TIMECYCLE_BOX_EXISTS` |
| Hash | `0x7E8F86A4FA33033C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = MissiondataTimecycleBoxExists()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7E8F86A4FA33033C, )
```


---

## _MISSIONDATA_TIMECYCLE_BOX_SET_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_MISSIONDATA_TIMECYCLE_BOX_SET_MODIFIER` |
| Hash | `0x25855B1574BF8CD5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `timecycleName` (const char*) |

### Parameters

- **`timecycleName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
MissiondataTimecycleBoxSetModifier(timecycleName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x25855B1574BF8CD5, timecycleName)
```


---

*End of MISSIONDATA natives*
