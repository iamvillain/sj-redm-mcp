# TASK Natives - Part 2 of 13

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TASK  
**Natives in this file:** 50  
**Total natives in namespace:** 640  
**Generated from:** RDR3natives JSON data

---

## GET_VEHICLE_WAYPOINT_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_WAYPOINT_PROGRESS` |
| Hash | `0x9824CFF8FC66E159` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleWaypointProgress(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9824CFF8FC66E159, vehicle)
```


---

## GET_VEHICLE_WAYPOINT_TARGET_POINT

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_WAYPOINT_TARGET_POINT` |
| Hash | `0x416B62AC8B9E5BBD` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleWaypointTargetPoint(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x416B62AC8B9E5BBD, vehicle)
```


---

## GET_WAYPOINT_DISTANCE_ALONG_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `GET_WAYPOINT_DISTANCE_ALONG_ROUTE` |
| Hash | `0xA5B769058763E497` |
| Return Type | `float` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `waypointRecording` (char*), `p1` (int) |

### Parameters

- **`waypointRecording`** (`char*`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetWaypointDistanceAlongRoute(waypointRecording, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA5B769058763E497, waypointRecording, p1)
```


---

## IS_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK

| Property | Value |
|----------|-------|
| Native Name | `IS_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK` |
| Hash | `0x8785E6E40C7A8818` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsDrivebyTaskUnderneathDrivingTask(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8785E6E40C7A8818, ped)
```


---

## IS_EMOTE_TASK_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `IS_EMOTE_TASK_RUNNING` |
| Hash | `0xCF9B71C0AF824036` |
| Return Type | `BOOL` |
| Build | `1355` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsEmoteTaskRunning(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCF9B71C0AF824036, ped, p1)
```


---

## IS_MOUNTED_WEAPON_TASK_UNDERNEATH_DRIVING_TASK

| Property | Value |
|----------|-------|
| Native Name | `IS_MOUNTED_WEAPON_TASK_UNDERNEATH_DRIVING_TASK` |
| Hash | `0xA320EF046186FA3B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsMountedWeaponTaskUnderneathDrivingTask(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA320EF046186FA3B, ped)
```


---

## IS_MOVE_BLEND_RATIO_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `IS_MOVE_BLEND_RATIO_RUNNING` |
| Hash | `0xD4D8636C0199A939` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `moveBlendRatio` (float) |

### Parameters

- **`moveBlendRatio`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsMoveBlendRatioRunning(moveBlendRatio)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD4D8636C0199A939, moveBlendRatio)
```


---

## IS_MOVE_BLEND_RATIO_SPRINTING

| Property | Value |
|----------|-------|
| Native Name | `IS_MOVE_BLEND_RATIO_SPRINTING` |
| Hash | `0x24A2AD74FA9814E2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `moveBlendRatio` (float) |

### Parameters

- **`moveBlendRatio`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsMoveBlendRatioSprinting(moveBlendRatio)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x24A2AD74FA9814E2, moveBlendRatio)
```


---

## IS_MOVE_BLEND_RATIO_STILL

| Property | Value |
|----------|-------|
| Native Name | `IS_MOVE_BLEND_RATIO_STILL` |
| Hash | `0x349CE7B56DAFD95C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `moveBlendRatio` (float) |

### Parameters

- **`moveBlendRatio`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsMoveBlendRatioStill(moveBlendRatio)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x349CE7B56DAFD95C, moveBlendRatio)
```


---

## IS_MOVE_BLEND_RATIO_WALKING

| Property | Value |
|----------|-------|
| Native Name | `IS_MOVE_BLEND_RATIO_WALKING` |
| Hash | `0xF133BBBE91E1691F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `moveBlendRatio` (float) |

### Parameters

- **`moveBlendRatio`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsMoveBlendRatioWalking(moveBlendRatio)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF133BBBE91E1691F, moveBlendRatio)
```


---

## IS_PED_ACTIVE_IN_SCENARIO

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_ACTIVE_IN_SCENARIO` |
| Hash | `0xAA135F9482C82CC3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `scenario` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedActiveInScenario(ped, scenario)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAA135F9482C82CC3, ped, scenario)
```


---

## IS_PED_BEING_ARRESTED

**Description:** This function is hard-coded to always return false.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_BEING_ARRESTED` |
| Hash | `0x90A09F3A45FED688` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedBeingArrested(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x90A09F3A45FED688, ped)
```


---

## IS_PED_CUFFED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_CUFFED` |
| Hash | `0x74E559B3BC910685` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedCuffed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74E559B3BC910685, ped)
```


---

## IS_PED_EXITING_SCENARIO

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_EXITING_SCENARIO` |
| Hash | `0x0C3CB2E600C8977D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedExitingScenario(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C3CB2E600C8977D, ped, p1)
```


---

## IS_PED_GETTING_UP

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_GETTING_UP` |
| Hash | `0x2A74E1D5F2F00EEC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedGettingUp(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2A74E1D5F2F00EEC, ped)
```


---

## IS_PED_IN_HIT_REACT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_HIT_REACT` |
| Hash | `0xF330A5C062B29BED` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInHitReact(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF330A5C062B29BED, ped)
```


---

## IS_PED_IN_WRITHE

**Description:** This native checks if a ped is on the ground, in pain from a (gunshot) wound.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_WRITHE` |
| Hash | `0xDEB6D52126E7D640` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInWrithe(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDEB6D52126E7D640, ped)
```


---

## IS_PED_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_RUNNING` |
| Hash | `0xC5286FFC176F28A2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedRunning(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC5286FFC176F28A2, ped)
```


---

## IS_PED_RUNNING_INSPECTION_TASK

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_RUNNING_INSPECTION_TASK` |
| Hash | `0x038B1F1674F0E242` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedRunningInspectionTask(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x038B1F1674F0E242, ped)
```


---

## IS_PED_RUNNING_TASK_ITEM_INTERACTION

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_RUNNING_TASK_ITEM_INTERACTION` |
| Hash | `0xEC7E480FF8BD0BED` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedRunningTaskItemInteraction(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEC7E480FF8BD0BED, ped)
```


---

## IS_PED_SCENARIO_REACT_LOOKING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_SCENARIO_REACT_LOOKING` |
| Hash | `0x916B8E075ABC8B4E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedScenarioReactLooking(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x916B8E075ABC8B4E, ped, p1)
```


---

## IS_PED_SPRINTING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_SPRINTING` |
| Hash | `0x57E457CD2C0FC168` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedSprinting(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57E457CD2C0FC168, ped)
```


---

## IS_PED_STILL

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_STILL` |
| Hash | `0xAC29253EEF8F0180` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedStill(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAC29253EEF8F0180, ped)
```


---

## IS_PED_WALKING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_WALKING` |
| Hash | `0xDE4C184B2B9B071A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedWalking(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDE4C184B2B9B071A, ped)
```


---

## IS_SCENARIO_GROUP_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `IS_SCENARIO_GROUP_ENABLED` |
| Hash | `0x367A09DED4E05B99` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `scenarioGroup` (char*) |

### Parameters

- **`scenarioGroup`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsScenarioGroupEnabled(scenarioGroup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x367A09DED4E05B99, scenarioGroup)
```


---

## IS_SCENARIO_OCCUPIED

| Property | Value |
|----------|-------|
| Native Name | `IS_SCENARIO_OCCUPIED` |
| Hash | `0x788756D73AC2E07C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (BOOL) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsScenarioOccupied(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x788756D73AC2E07C, p0, p1, p2, p3, p4)
```


---

## IS_SCENARIO_TYPE_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `IS_SCENARIO_TYPE_ENABLED` |
| Hash | `0x3A815DB3EA088722` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `scenarioType` (char*) |

### Parameters

- **`scenarioType`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsScenarioTypeEnabled(scenarioType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3A815DB3EA088722, scenarioType)
```


---

## IS_TASK_MOVE_NETWORK_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_TASK_MOVE_NETWORK_ACTIVE` |
| Hash | `0x921CE12C489C4C41` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsTaskMoveNetworkActive(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x921CE12C489C4C41, ped)
```


---

## IS_TASK_MOVE_NETWORK_READY_FOR_TRANSITION

| Property | Value |
|----------|-------|
| Native Name | `IS_TASK_MOVE_NETWORK_READY_FOR_TRANSITION` |
| Hash | `0x30ED88D5E0C56A37` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsTaskMoveNetworkReadyForTransition(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x30ED88D5E0C56A37, ped)
```


---

## IS_TEAM_CARRIABLE_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `IS_TEAM_CARRIABLE_ENTITY` |
| Hash | `0x559A6F8C5133B4EE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsTeamCarriableEntity(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x559A6F8C5133B4EE, p0, p1)
```


---

## IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_PED

| Property | Value |
|----------|-------|
| Native Name | `IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_PED` |
| Hash | `0xE03B3F2D3DC59B64` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `waypointRecording` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`waypointRecording`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsWaypointPlaybackGoingOnForPed(ped, waypointRecording)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE03B3F2D3DC59B64, ped, waypointRecording)
```


---

## IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_VEHICLE` |
| Hash | `0xF5134943EA29868C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsWaypointPlaybackGoingOnForVehicle(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF5134943EA29868C, p0, p1)
```


---

## MAKE_OBJECT_NOT_CARRIABLE

| Property | Value |
|----------|-------|
| Native Name | `MAKE_OBJECT_NOT_CARRIABLE` |
| Hash | `0x67BFCED22909834D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
MakeObjectNotCarriable(object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x67BFCED22909834D, object)
```


---

## OPEN_PATROL_ROUTE

**Description:** Note: patrolRoute must be prefixed with 'miss_' for it to be valid

| Property | Value |
|----------|-------|
| Native Name | `OPEN_PATROL_ROUTE` |
| Hash | `0xA36BFB5EE89F3D82` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `patrolRoute` (char*) |

### Parameters

- **`patrolRoute`** (`char*`)

### Usage

**Lua (Direct):**
```lua
OpenPatrolRoute(patrolRoute)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA36BFB5EE89F3D82, patrolRoute)
```


---

## OPEN_SEQUENCE_TASK

| Property | Value |
|----------|-------|
| Native Name | `OPEN_SEQUENCE_TASK` |
| Hash | `0xE8854A4326B9E12B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `taskSequenceId` (int*) |

### Parameters

- **`taskSequenceId`** (`int*`)

### Usage

**Lua (Direct):**
```lua
OpenSequenceTask(taskSequenceId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE8854A4326B9E12B, taskSequenceId)
```


---

## PED_HAS_USE_SCENARIO_TASK

| Property | Value |
|----------|-------|
| Native Name | `PED_HAS_USE_SCENARIO_TASK` |
| Hash | `0x295E3CCEC879CCD7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = PedHasUseScenarioTask(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x295E3CCEC879CCD7, ped)
```


---

## PLAY_ANIM_ON_RUNNING_SCENARIO

| Property | Value |
|----------|-------|
| Native Name | `PLAY_ANIM_ON_RUNNING_SCENARIO` |
| Hash | `0x748040460F8DF5DC` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `animDict` (char*), `animName` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`animDict`** (`char*`)
- **`animName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
PlayAnimOnRunningScenario(ped, animDict, animName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x748040460F8DF5DC, ped, animDict, animName)
```


---

## PLAY_ENTITY_SCRIPTED_ANIM

| Property | Value |
|----------|-------|
| Native Name | `PLAY_ENTITY_SCRIPTED_ANIM` |
| Hash | `0x77A1EEC547E7FCF1` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `args` (Any) |

### Parameters

- **`entity`** (`Entity`)
- **`args`** (`Any`)

### Usage

**Lua (Direct):**
```lua
PlayEntityScriptedAnim(entity, args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x77A1EEC547E7FCF1, entity, args)
```


---

## REACT_LOOK_AT

**Description:** lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT

exitAnimation: LOOK_RETURN_GENERIC = 1,
LOOK_RETURN_DISMISSIVE = 2,
LOOK_RETURN_RELIEVED = 3

| Property | Value |
|----------|-------|
| Native Name | `REACT_LOOK_AT` |
| Hash | `0xE7FA07624574B79A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `lookIntensity` (int), `exitAnimation` (int), `duration` (float), `p5` (int), `targetPed2` (Ped), `p7` (Any), `p8` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`lookIntensity`** (`int`)
- **`exitAnimation`** (`int`)
- **`duration`** (`float`)
- **`p5`** (`int`)
- **`targetPed2`** (`Ped`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)

### Usage

**Lua (Direct):**
```lua
ReactLookAt(ped, targetPed, lookIntensity, exitAnimation, duration, p5, targetPed2, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE7FA07624574B79A, ped, targetPed, lookIntensity, exitAnimation, duration, p5, targetPed2, p7, p8)
```


---

## REACT_LOOK_AT_END

| Property | Value |
|----------|-------|
| Native Name | `REACT_LOOK_AT_END` |
| Hash | `0x541E5B41DCA45828` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `exitAnimation` (int), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`exitAnimation`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ReactLookAtEnd(ped, exitAnimation, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x541E5B41DCA45828, ped, exitAnimation, p2)
```


---

## REMOVE_ALL_COVER_BLOCKING_AREAS

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_ALL_COVER_BLOCKING_AREAS` |
| Hash | `0xDB6708C0B46F56D8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
RemoveAllCoverBlockingAreas()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDB6708C0B46F56D8, )
```


---

## REMOVE_COVER_POINT

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_COVER_POINT` |
| Hash | `0xAE287C923D891715` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `coverpoint` (ScrHandle) |

### Parameters

- **`coverpoint`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
RemoveCoverPoint(coverpoint)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE287C923D891715, coverpoint)
```


---

## REMOVE_WAYPOINT_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_WAYPOINT_RECORDING` |
| Hash | `0xFF1B8B4AA1C25DC8` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `waypointRecording` (char*) |

### Parameters

- **`waypointRecording`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RemoveWaypointRecording(waypointRecording)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFF1B8B4AA1C25DC8, waypointRecording)
```


---

## REQUEST_TASK_MOVE_NETWORK_STATE_TRANSITION

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_TASK_MOVE_NETWORK_STATE_TRANSITION` |
| Hash | `0xD01015C7316AE176` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `name` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RequestTaskMoveNetworkStateTransition(ped, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD01015C7316AE176, ped, name)
```


---

## REQUEST_WAYPOINT_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_WAYPOINT_RECORDING` |
| Hash | `0x9EEFB62EB27B5792` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `waypointRecording` (char*) |

### Parameters

- **`waypointRecording`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RequestWaypointRecording(waypointRecording)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9EEFB62EB27B5792, waypointRecording)
```


---

## RESET_SCENARIO_GROUPS_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `RESET_SCENARIO_GROUPS_ENABLED` |
| Hash | `0xDD902D0349AFAD3A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetScenarioGroupsEnabled()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDD902D0349AFAD3A, )
```


---

## RESET_SCENARIO_TYPES_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `RESET_SCENARIO_TYPES_ENABLED` |
| Hash | `0x0D40EE2A7F2B2D6D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetScenarioTypesEnabled()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0D40EE2A7F2B2D6D, )
```


---

## SET_ANIM_FILTER

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_FILTER` |
| Hash | `0x87B66D77D545DB66` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `filterName` (char*), `priority` (int), `secondary` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`filterName`** (`char*`)
- **`priority`** (`int`)
- **`secondary`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAnimFilter(entity, filterName, priority, secondary)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x87B66D77D545DB66, entity, filterName, priority, secondary)
```


---

## SET_ANIM_RATE

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIM_RATE` |
| Hash | `0x032D49C5E359C847` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (float), `p2` (Any), `p3` (BOOL) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`float`)
- **`p2`** (`Any`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAnimRate(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x032D49C5E359C847, p0, p1, p2, p3)
```


---

## SET_DRIVEBY_TASK_TARGET

| Property | Value |
|----------|-------|
| Native Name | `SET_DRIVEBY_TASK_TARGET` |
| Hash | `0xE5B302114D8162EE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `shootingPed` (Ped), `targetPed` (Ped), `targetVehicle` (Vehicle), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`shootingPed`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`targetVehicle`** (`Vehicle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDrivebyTaskTarget(shootingPed, targetPed, targetVehicle, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE5B302114D8162EE, shootingPed, targetPed, targetVehicle, x, y, z)
```


---

*End of TASK natives part 2*
