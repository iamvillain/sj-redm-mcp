# TASK Natives - Part 3 of 13

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TASK  
**Natives in this file:** 50  
**Total natives in namespace:** 640  
**Generated from:** RDR3natives JSON data

---

## SET_DRIVE_TASK_CRUISE_SPEED

| Property | Value |
|----------|-------|
| Native Name | `SET_DRIVE_TASK_CRUISE_SPEED` |
| Hash | `0x5C9B84BD7D31D908` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `driver` (Ped), `cruiseSpeed` (float) |

### Parameters

- **`driver`** (`Ped`)
- **`cruiseSpeed`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDriveTaskCruiseSpeed(driver, cruiseSpeed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5C9B84BD7D31D908, driver, cruiseSpeed)
```


---

## SET_DRIVE_TASK_MAX_CRUISE_SPEED

**Description:** Not implemented.

| Property | Value |
|----------|-------|
| Native Name | `SET_DRIVE_TASK_MAX_CRUISE_SPEED` |
| Hash | `0x404A5AA9B9F0B746` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `maxCruiseSpeed` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`maxCruiseSpeed`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDriveTaskMaxCruiseSpeed(ped, maxCruiseSpeed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x404A5AA9B9F0B746, ped, maxCruiseSpeed)
```


---

## SET_ENABLE_SPEED_RESTRAIN_FOR_WAYPOINT_RECORDING_LEADER

| Property | Value |
|----------|-------|
| Native Name | `SET_ENABLE_SPEED_RESTRAIN_FOR_WAYPOINT_RECORDING_LEADER` |
| Hash | `0x295F03DC97BEEBC1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetEnableSpeedRestrainForWaypointRecordingLeader(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x295F03DC97BEEBC1, p0, p1)
```


---

## SET_ENHANCED_BREAK_FREE

**Description:** clipset: CLIPSET@MECH_HOGTIE@HUMAN@BREAKOUT_MG@GROUND, CLIPSET@MECH_HOGTIE@HUMAN@BREAKOUT_MG@SHOULDER, CLIPSET@MECH_HOGTIE@HUMAN@BREAKOUT_MG@MOUNT
clipset can also be 0

| Property | Value |
|----------|-------|
| Native Name | `SET_ENHANCED_BREAK_FREE` |
| Hash | `0x1BF9D36A5EAFFBAE` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `clipset` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`clipset`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = SetEnhancedBreakFree(ped, p1, clipset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1BF9D36A5EAFFBAE, ped, p1, clipset)
```


---

## SET_HIGH_FALL_TASK

**Description:** Makes the ped ragdoll like when falling from a great height

| Property | Value |
|----------|-------|
| Native Name | `SET_HIGH_FALL_TASK` |
| Hash | `0x8C825BDC7741D37C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (int), `p3` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetHighFallTask(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8C825BDC7741D37C, ped, p1, p2, p3)
```


---

## SET_PED_DESIRED_MOVE_BLEND_RATIO

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_DESIRED_MOVE_BLEND_RATIO` |
| Hash | `0x1E982AC8716912C5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedDesiredMoveBlendRatio(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1E982AC8716912C5, ped, p1)
```


---

## SET_PED_PATH_AVOID_FIRE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATH_AVOID_FIRE` |
| Hash | `0x4455517B28441E60` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `avoidFire` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`avoidFire`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedPathAvoidFire(ped, avoidFire)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4455517B28441E60, ped, avoidFire)
```


---

## SET_PED_PATH_CAN_DROP_FROM_HEIGHT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATH_CAN_DROP_FROM_HEIGHT` |
| Hash | `0xE361C5C71C431A4F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedPathCanDropFromHeight(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE361C5C71C431A4F, ped, toggle)
```


---

## SET_PED_PATH_CAN_USE_CLIMBOVERS

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATH_CAN_USE_CLIMBOVERS` |
| Hash | `0x8E06A6FE76C9EFF4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedPathCanUseClimbovers(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8E06A6FE76C9EFF4, ped, toggle)
```


---

## SET_PED_PATH_CAN_USE_LADDERS

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATH_CAN_USE_LADDERS` |
| Hash | `0x77A5B103C87F476E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedPathCanUseLadders(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x77A5B103C87F476E, ped, toggle)
```


---

## SET_PED_PATH_CLIMB_COST_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATH_CLIMB_COST_MODIFIER` |
| Hash | `0x88E32DB8C1A4AA4B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `modifier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedPathClimbCostModifier(ped, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x88E32DB8C1A4AA4B, ped, modifier)
```


---

## SET_PED_PATH_DEEP_SNOW_COST_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATH_DEEP_SNOW_COST_MODIFIER` |
| Hash | `0xE8C296B75EACC357` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `modifier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedPathDeepSnowCostModifier(ped, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE8C296B75EACC357, ped, modifier)
```


---

## SET_PED_PATH_FOLIAGE_COST_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATH_FOLIAGE_COST_MODIFIER` |
| Hash | `0x3AD8EFF9703BE657` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `modifier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedPathFoliageCostModifier(ped, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3AD8EFF9703BE657, ped, modifier)
```


---

## SET_PED_PATH_MAY_ENTER_WATER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATH_MAY_ENTER_WATER` |
| Hash | `0xF35425A4204367EC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `mayEnterWater` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`mayEnterWater`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedPathMayEnterWater(ped, mayEnterWater)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF35425A4204367EC, ped, mayEnterWater)
```


---

## SET_PED_PATH_PREFER_TO_AVOID_WATER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATH_PREFER_TO_AVOID_WATER` |
| Hash | `0x38FE1EC73743793C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `avoidWater` (BOOL), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`avoidWater`** (`BOOL`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedPathPreferToAvoidWater(ped, avoidWater, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x38FE1EC73743793C, ped, avoidWater, p2)
```


---

## SET_PED_WAYPOINT_ROUTE_OFFSET

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_WAYPOINT_ROUTE_OFFSET` |
| Hash | `0xED98E10B0AFCE4B4` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float), `p3` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedWaypointRouteOffset(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xED98E10B0AFCE4B4, ped, p1, p2, p3)
```


---

## SET_SCENARIO_GROUP_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `SET_SCENARIO_GROUP_ENABLED` |
| Hash | `0x02C8E5B49848664E` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `scenarioGroup` (char*), `toggle` (BOOL) |

### Parameters

- **`scenarioGroup`** (`char*`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScenarioGroupEnabled(scenarioGroup, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x02C8E5B49848664E, scenarioGroup, toggle)
```


---

## SET_SCENARIO_TYPE_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `SET_SCENARIO_TYPE_ENABLED` |
| Hash | `0xEB47EC4E34FB7EE1` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `scenarioType` (char*), `toggle` (BOOL) |

### Parameters

- **`scenarioType`** (`char*`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScenarioTypeEnabled(scenarioType, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEB47EC4E34FB7EE1, scenarioType, toggle)
```


---

## SET_SEQUENCE_TO_REPEAT

**Description:** repeatMode: 0 = REPEAT_NOT; 1 = REPEAT_FOREVER

| Property | Value |
|----------|-------|
| Native Name | `SET_SEQUENCE_TO_REPEAT` |
| Hash | `0x58C70CF3A41E4AE7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `taskSequenceId` (int), `repeatMode` (int) |

### Parameters

- **`taskSequenceId`** (`int`)
- **`repeatMode`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetSequenceToRepeat(taskSequenceId, repeatMode)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x58C70CF3A41E4AE7, taskSequenceId, repeatMode)
```


---

## SET_TASK_MOVE_NETWORK_SIGNAL_BOOL

| Property | Value |
|----------|-------|
| Native Name | `SET_TASK_MOVE_NETWORK_SIGNAL_BOOL` |
| Hash | `0xB0A6CFD2C69C1088` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `signalName` (char*), `value` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`signalName`** (`char*`)
- **`value`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetTaskMoveNetworkSignalBool(ped, signalName, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB0A6CFD2C69C1088, ped, signalName, value)
```


---

## SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT` |
| Hash | `0xD5BB4025AE449A4E` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `signalName` (char*), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`signalName`** (`char*`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTaskMoveNetworkSignalFloat(ped, signalName, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD5BB4025AE449A4E, ped, signalName, value)
```


---

## SET_TEAM_CARRIABLE_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `SET_TEAM_CARRIABLE_ENTITY` |
| Hash | `0x545BF19F86E80F11` |
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
SetTeamCarriableEntity(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x545BF19F86E80F11, p0, p1, p2)
```


---

## SET_UP_SPEED_RESTRAIN_INFORMATION_FOR_PLAYER_FOLLOWER

| Property | Value |
|----------|-------|
| Native Name | `SET_UP_SPEED_RESTRAIN_INFORMATION_FOR_PLAYER_FOLLOWER` |
| Hash | `0xB5C51DD544F14F58` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any) |

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

### Usage

**Lua (Direct):**
```lua
SetUpSpeedRestrainInformationForPlayerFollower(p0, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB5C51DD544F14F58, p0, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## START_TASK_ITEM_INTERACTION

**Description:** Params: p3 = 0, 1; p5 = 0.0f, -1.0f
https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ITEM_INTERACTION

| Property | Value |
|----------|-------|
| Native Name | `START_TASK_ITEM_INTERACTION` |
| Hash | `0xAE72E7DF013AAA61` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `itemHash` (Hash), `interactionAnimHash` (Hash), `p3` (int), `flag` (int), `p5` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`itemHash`** (`Hash`)
- **`interactionAnimHash`** (`Hash`)
- **`p3`** (`int`)
- **`flag`** (`int`)
- **`p5`** (`float`)

### Usage

**Lua (Direct):**
```lua
StartTaskItemInteraction(ped, itemHash, interactionAnimHash, p3, flag, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE72E7DF013AAA61, ped, itemHash, interactionAnimHash, p3, flag, p5)
```


---

## STOP_ANIM_PLAYBACK

| Property | Value |
|----------|-------|
| Native Name | `STOP_ANIM_PLAYBACK` |
| Hash | `0xEE08C992D238C5D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StopAnimPlayback(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEE08C992D238C5D1, ped, p1, p2)
```


---

## STOP_ANIM_TASK

| Property | Value |
|----------|-------|
| Native Name | `STOP_ANIM_TASK` |
| Hash | `0x97FF36A1D40EA00A` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `animDictionary` (char*), `animationName` (char*), `p3` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`animDictionary`** (`char*`)
- **`animationName`** (`char*`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
StopAnimTask(ped, animDictionary, animationName, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x97FF36A1D40EA00A, ped, animDictionary, animationName, p3)
```


---

## TASK_ACHIEVE_HEADING

**Description:** Makes the specified ped achieve the specified heading.

pedHandle: The handle of the ped to assign the task to.
heading: The desired heading.
timeout: The time, in milliseconds, to allow the task to complete. If the task times out, it is canceled, and the ped will stay at the heading it managed to reach in the time.

| Property | Value |
|----------|-------|
| Native Name | `TASK_ACHIEVE_HEADING` |
| Hash | `0x93B93A37987F1F3D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `heading` (float), `timeout` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`heading`** (`float`)
- **`timeout`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskAchieveHeading(ped, heading, timeout)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x93B93A37987F1F3D, ped, heading, timeout)
```


---

## TASK_AIM_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_AIM_AT_COORD` |
| Hash | `0x4AF1D73861212F52` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskAimAtCoord(ped, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4AF1D73861212F52, ped, p1, p2, p3, p4, p5, p6)
```


---

## TASK_AIM_AT_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_AIM_AT_ENTITY` |
| Hash | `0xCF7569BD0FB480A0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskAimAtEntity(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCF7569BD0FB480A0, ped, p1, p2, p3, p4)
```


---

## TASK_AIM_GUN_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_AIM_GUN_AT_COORD` |
| Hash | `0x6671F3EEC681BDA1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `time` (int), `p5` (BOOL), `p6` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`time`** (`int`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskAimGunAtCoord(ped, x, y, z, time, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6671F3EEC681BDA1, ped, x, y, z, time, p5, p6)
```


---

## TASK_AIM_GUN_AT_ENTITY

**Description:** duration: the amount of time in milliseconds to do the task.  -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped

| Property | Value |
|----------|-------|
| Native Name | `TASK_AIM_GUN_AT_ENTITY` |
| Hash | `0x9B53BB6E8943AF53` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetEntity` (Entity), `duration` (int), `p3` (BOOL), `p4` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`targetEntity`** (`Entity`)
- **`duration`** (`int`)
- **`p3`** (`BOOL`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskAimGunAtEntity(ped, targetEntity, duration, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9B53BB6E8943AF53, ped, targetEntity, duration, p3, p4)
```


---

## TASK_AMBIENT_ANIMAL_HUNT

| Property | Value |
|----------|-------|
| Native Name | `TASK_AMBIENT_ANIMAL_HUNT` |
| Hash | `0x4B39D8F9D0FE7749` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskAmbientAnimalHunt(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4B39D8F9D0FE7749, ped, p1, p2)
```


---

## TASK_AMBIENT_ANIMAL_STALK

| Property | Value |
|----------|-------|
| Native Name | `TASK_AMBIENT_ANIMAL_STALK` |
| Hash | `0x37C13863ABA1B4A3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskAmbientAnimalStalk(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x37C13863ABA1B4A3, ped, p1, p2)
```


---

## TASK_ANIMAL_ALERTED

| Property | Value |
|----------|-------|
| Native Name | `TASK_ANIMAL_ALERTED` |
| Hash | `0x979D93372FC8C565` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskAnimalAlerted(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x979D93372FC8C565, ped, p1, p2)
```


---

## TASK_ANIMAL_FLEE

| Property | Value |
|----------|-------|
| Native Name | `TASK_ANIMAL_FLEE` |
| Hash | `0xA899B61C66F09134` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskAnimalFlee(ped, targetPed, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA899B61C66F09134, ped, targetPed, p2)
```


---

## TASK_ANIMAL_INTERACTION

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ANIMAL_INTERACTION

| Property | Value |
|----------|-------|
| Native Name | `TASK_ANIMAL_INTERACTION` |
| Hash | `0xCD181A959CFDD7F4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `interactionType` (Hash), `interactionModel` (Hash), `skipIdleAnimationClip` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`interactionType`** (`Hash`)
- **`interactionModel`** (`Hash`)
- **`skipIdleAnimationClip`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskAnimalInteraction(ped, targetPed, interactionType, interactionModel, skipIdleAnimationClip)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCD181A959CFDD7F4, ped, targetPed, interactionType, interactionModel, skipIdleAnimationClip)
```


---

## TASK_ANIMAL_UNALERTED

| Property | Value |
|----------|-------|
| Native Name | `TASK_ANIMAL_UNALERTED` |
| Hash | `0x21FDF9A25CFE1CE5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskAnimalUnalerted(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x21FDF9A25CFE1CE5, ped, p1, p2, p3, p4)
```


---

## TASK_ANIMAL_WRITHE

| Property | Value |
|----------|-------|
| Native Name | `TASK_ANIMAL_WRITHE` |
| Hash | `0x8C038A39C4A4B6D6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskAnimalWrithe(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8C038A39C4A4B6D6, ped, p1, p2)
```


---

## TASK_ARREST_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_ARREST_PED` |
| Hash | `0xF3B9A78A178572B1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `target` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`target`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskArrestPed(ped, target)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF3B9A78A178572B1, ped, target)
```


---

## TASK_BARK

| Property | Value |
|----------|-------|
| Native Name | `TASK_BARK` |
| Hash | `0x83BFC1F836B2F3F2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `barkAtTarget` (Ped), `mood` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`barkAtTarget`** (`Ped`)
- **`mood`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TaskBark(ped, barkAtTarget, mood)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x83BFC1F836B2F3F2, ped, barkAtTarget, mood)
```


---

## TASK_BOAT_MISSION

| Property | Value |
|----------|-------|
| Native Name | `TASK_BOAT_MISSION` |
| Hash | `0x15C86013127CE63F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pedDriver` (Ped), `boat` (Vehicle), `p2` (Any), `p3` (Any), `x` (float), `y` (float), `z` (float), `p7` (Any), `maxSpeed` (float), `drivingStyle` (int), `p10` (float), `p11` (Any) |

### Parameters

- **`pedDriver`** (`Ped`)
- **`boat`** (`Vehicle`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p7`** (`Any`)
- **`maxSpeed`** (`float`)
- **`drivingStyle`** (`int`)
- **`p10`** (`float`)
- **`p11`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskBoatMission(pedDriver, boat, p2, p3, x, y, z, p7, maxSpeed, drivingStyle, p10, p11)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x15C86013127CE63F, pedDriver, boat, p2, p3, x, y, z, p7, maxSpeed, drivingStyle, p10, p11)
```


---

## TASK_BREAK_VEHICLE_DOOR_LOCK

| Property | Value |
|----------|-------|
| Native Name | `TASK_BREAK_VEHICLE_DOOR_LOCK` |
| Hash | `0xBB28D1BC9EA8A6A5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
TaskBreakVehicleDoorLock(ped, vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB28D1BC9EA8A6A5, ped, vehicle)
```


---

## TASK_CARRIABLE

**Description:** carriableSlot:
 7 > Back of a horse
 6 > Right side of a horse
 5 > Left side of a horse
flags:
 512: enables the prompt being the name of the item when using a generic item

| Property | Value |
|----------|-------|
| Native Name | `TASK_CARRIABLE` |
| Hash | `0xF0B4F759F35CC7F5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `carryConfig` (Hash), `carrier` (Ped), `carriableSlot` (int), `flags` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`carryConfig`** (`Hash`)
- **`carrier`** (`Ped`)
- **`carriableSlot`** (`int`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskCarriable(entity, carryConfig, carrier, carriableSlot, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF0B4F759F35CC7F5, entity, carryConfig, carrier, carriableSlot, flags)
```


---

## TASK_CLEAR_DEFENSIVE_AREA

| Property | Value |
|----------|-------|
| Native Name | `TASK_CLEAR_DEFENSIVE_AREA` |
| Hash | `0x95A6C46A31D1917D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskClearDefensiveArea(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x95A6C46A31D1917D, ped)
```


---

## TASK_CLEAR_LOOK_AT

| Property | Value |
|----------|-------|
| Native Name | `TASK_CLEAR_LOOK_AT` |
| Hash | `0x0F804F1DB19B9689` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskClearLookAt(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0F804F1DB19B9689, ped)
```


---

## TASK_CLIMB

**Description:** Climbs or vaults the nearest thing.

| Property | Value |
|----------|-------|
| Native Name | `TASK_CLIMB` |
| Hash | `0x89D9FCC2435112F1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `unused` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`unused`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskClimb(ped, unused)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x89D9FCC2435112F1, ped, unused)
```


---

## TASK_CLIMB_LADDER

| Property | Value |
|----------|-------|
| Native Name | `TASK_CLIMB_LADDER` |
| Hash | `0xB6C987F9285A3814` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskClimbLadder(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB6C987F9285A3814, ped, p1, p2, p3)
```


---

## TASK_COMBAT_ANIMAL_CHARGE_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_COMBAT_ANIMAL_CHARGE_PED` |
| Hash | `0xEE3AA414CF99F368` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (BOOL), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`BOOL`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskCombatAnimalChargePed(ped, targetPed, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEE3AA414CF99F368, ped, targetPed, p2, p3, p4, p5, p6)
```


---

## TASK_COMBAT_ANIMAL_WARN

| Property | Value |
|----------|-------|
| Native Name | `TASK_COMBAT_ANIMAL_WARN` |
| Hash | `0xF960F3D57B660E96` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskCombatAnimalWarn(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF960F3D57B660E96, ped, p1, p2)
```


---

## TASK_COMBAT_HATED_TARGETS

| Property | Value |
|----------|-------|
| Native Name | `TASK_COMBAT_HATED_TARGETS` |
| Hash | `0x8182B561A29BD597` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `radius` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskCombatHatedTargets(ped, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8182B561A29BD597, ped, radius)
```


---

*End of TASK natives part 3*
