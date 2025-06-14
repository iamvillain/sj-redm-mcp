# TASK Natives - Part 7 of 13

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TASK  
**Natives in this file:** 50  
**Total natives in namespace:** 640  
**Generated from:** RDR3natives JSON data

---

## TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD_WARP

| Property | Value |
|----------|-------|
| Native Name | `TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD_WARP` |
| Hash | `0x97A28E63F0BA5631` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `distance` (float), `p5` (BOOL), `p6` (BOOL), `p7` (BOOL), `p8` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`distance`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskUseNearestScenarioChainToCoordWarp(ped, x, y, z, distance, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x97A28E63F0BA5631, ped, x, y, z, distance, p5, p6, p7, p8)
```


---

## TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP

| Property | Value |
|----------|-------|
| Native Name | `TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP` |
| Hash | `0x58E2E0F23F6B76C3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `distance` (float), `duration` (int), `p6` (BOOL), `p7` (BOOL), `p8` (BOOL), `p9` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`distance`** (`float`)
- **`duration`** (`int`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskUseNearestScenarioToCoordWarp(ped, x, y, z, distance, duration, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x58E2E0F23F6B76C3, ped, x, y, z, distance, duration, p6, p7, p8, p9)
```


---

## TASK_USE_NEAREST_TRAIN_SCENARIO_TO_COORD_WARP

| Property | Value |
|----------|-------|
| Native Name | `TASK_USE_NEAREST_TRAIN_SCENARIO_TO_COORD_WARP` |
| Hash | `0x3774B03456DD6106` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `distance` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`distance`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskUseNearestTrainScenarioToCoordWarp(ped, x, y, z, distance)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3774B03456DD6106, ped, x, y, z, distance)
```


---

## TASK_USE_RANDOM_SCENARIO_IN_GROUP

| Property | Value |
|----------|-------|
| Native Name | `TASK_USE_RANDOM_SCENARIO_IN_GROUP` |
| Hash | `0x14747F4A5971DE4E` |
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
TaskUseRandomScenarioInGroup(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x14747F4A5971DE4E, ped, p1, p2, p3, p4)
```


---

## TASK_USE_SCENARIO_POINT

| Property | Value |
|----------|-------|
| Native Name | `TASK_USE_SCENARIO_POINT` |
| Hash | `0xCCDAE6324B6A821C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `scenario` (int), `conditionalAnim` (const char*), `p3` (int), `p4` (BOOL), `p5` (BOOL), `p6` (Hash), `p7` (BOOL), `p8` (float), `p9` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`scenario`** (`int`)
- **`conditionalAnim`** (`const char*`)
- **`p3`** (`int`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)
- **`p6`** (`Hash`)
- **`p7`** (`BOOL`)
- **`p8`** (`float`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskUseScenarioPoint(ped, scenario, conditionalAnim, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCCDAE6324B6A821C, ped, scenario, conditionalAnim, p3, p4, p5, p6, p7, p8, p9)
```


---

## TASK_VEHICLE_AIM_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_AIM_AT_COORD` |
| Hash | `0x447C1E9EF844BC0F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleAimAtCoord(ped, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x447C1E9EF844BC0F, ped, x, y, z)
```


---

## TASK_VEHICLE_AIM_AT_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_AIM_AT_PED` |
| Hash | `0xE41885592B08B097` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `target` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`target`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleAimAtPed(ped, target)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE41885592B08B097, ped, target)
```


---

## TASK_VEHICLE_DRIVE_STRAIGHT_TO_POINT

**Description:** Old name: _TASK_VEHICLE_DRIVE_TO_POINT
flag: 524419 and 0 in shop_horse_shop R* Script

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_DRIVE_STRAIGHT_TO_POINT` |
| Hash | `0x089FF2FB965F0A29` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `driver` (Ped), `vehicle` (Vehicle), `x` (float), `y` (float), `z` (float), `p5` (float), `p6` (float), `flag` (int) |

### Parameters

- **`driver`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleDriveStraightToPoint(driver, vehicle, x, y, z, p5, p6, flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x089FF2FB965F0A29, driver, vehicle, x, y, z, p5, p6, flag)
```


---

## TASK_VEHICLE_DRIVE_TO_COORD

**Description:** stopRange: how close vehicle will get to destination before stopping, default 4.0
straightLineDist: distance at which AI switches to heading for target directly instead of following nodes, default -1

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_DRIVE_TO_COORD` |
| Hash | `0xE2A2AA2F659D77A7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `x` (float), `y` (float), `z` (float), `speed` (float), `style` (Any), `vehicleModel` (Hash), `drivingMode` (int), `stopRange` (float), `straightLineDist` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`speed`** (`float`)
- **`style`** (`Any`)
- **`vehicleModel`** (`Hash`)
- **`drivingMode`** (`int`)
- **`stopRange`** (`float`)
- **`straightLineDist`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleDriveToCoord(ped, vehicle, x, y, z, speed, style, vehicleModel, drivingMode, stopRange, straightLineDist)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE2A2AA2F659D77A7, ped, vehicle, x, y, z, speed, style, vehicleModel, drivingMode, stopRange, straightLineDist)
```


---

## TASK_VEHICLE_DRIVE_TO_DESTINATION

**Description:** flags: 67108864, 2097152, 524564, 524675 (eDrivingFlags)
p7 = 6 or 3
p8 = x coordinate
p9 - 8.f
p10 = false

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_DRIVE_TO_DESTINATION` |
| Hash | `0x7F241A0D14354583` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `driver` (Ped), `vehicle` (Vehicle), `x` (float), `y` (float), `z` (float), `speed` (float), `drivingFlags` (int), `p7` (int), `stoppingRange1` (float), `stoppingRange2` (float), `p10` (BOOL) |

### Parameters

- **`driver`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`speed`** (`float`)
- **`drivingFlags`** (`int`)
- **`p7`** (`int`)
- **`stoppingRange1`** (`float`)
- **`stoppingRange2`** (`float`)
- **`p10`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleDriveToDestination(driver, vehicle, x, y, z, speed, drivingFlags, p7, stoppingRange1, stoppingRange2, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7F241A0D14354583, driver, vehicle, x, y, z, speed, drivingFlags, p7, stoppingRange1, stoppingRange2, p10)
```


---

## TASK_VEHICLE_DRIVE_WANDER

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_DRIVE_WANDER` |
| Hash | `0x480142959D337D00` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `speed` (float), `drivingStyle` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`speed`** (`float`)
- **`drivingStyle`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleDriveWander(ped, vehicle, speed, drivingStyle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x480142959D337D00, ped, vehicle, speed, drivingStyle)
```


---

## TASK_VEHICLE_ESCORT

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_ESCORT` |
| Hash | `0x0FA6E4B75F302400` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `targetVehicle` (Vehicle), `mode` (int), `speed` (float), `drivingStyle` (int), `minDistance` (float), `p7` (int), `noRoadsDistance` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`targetVehicle`** (`Vehicle`)
- **`mode`** (`int`)
- **`speed`** (`float`)
- **`drivingStyle`** (`int`)
- **`minDistance`** (`float`)
- **`p7`** (`int`)
- **`noRoadsDistance`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleEscort(ped, vehicle, targetVehicle, mode, speed, drivingStyle, minDistance, p7, noRoadsDistance)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0FA6E4B75F302400, ped, vehicle, targetVehicle, mode, speed, drivingStyle, minDistance, p7, noRoadsDistance)
```


---

## TASK_VEHICLE_FOLLOW_WAYPOINT_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_FOLLOW_WAYPOINT_RECORDING` |
| Hash | `0x3123FAA6DB1CF7ED` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `waypointRecording` (char*), `drivingMode` (int), `p4` (Any), `eWaypoint` (int), `flag` (int), `p7` (float), `p8` (BOOL), `stoppingDist` (float), `p10` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`waypointRecording`** (`char*`)
- **`drivingMode`** (`int`)
- **`p4`** (`Any`)
- **`eWaypoint`** (`int`)
- **`flag`** (`int`)
- **`p7`** (`float`)
- **`p8`** (`BOOL`)
- **`stoppingDist`** (`float`)
- **`p10`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleFollowWaypointRecording(ped, vehicle, waypointRecording, drivingMode, p4, eWaypoint, flag, p7, p8, stoppingDist, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3123FAA6DB1CF7ED, ped, vehicle, waypointRecording, drivingMode, p4, eWaypoint, flag, p7, p8, stoppingDist, p10)
```


---

## TASK_VEHICLE_GOTO_NAVMESH

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_GOTO_NAVMESH` |
| Hash | `0x195AEEB13CEFE2EE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `x` (float), `y` (float), `z` (float), `speed` (float), `behaviorFlag` (int), `stoppingRange` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`speed`** (`float`)
- **`behaviorFlag`** (`int`)
- **`stoppingRange`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleGotoNavmesh(ped, vehicle, x, y, z, speed, behaviorFlag, stoppingRange)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x195AEEB13CEFE2EE, ped, vehicle, x, y, z, speed, behaviorFlag, stoppingRange)
```


---

## TASK_VEHICLE_MISSION

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_MISSION` |
| Hash | `0x659427E0EF36BCDE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `driver` (Ped), `vehicle` (Vehicle), `vehicleTarget` (Vehicle), `missionType` (int), `p4` (float), `p5` (Any), `p6` (float), `p7` (float), `DriveAgainstTraffic` (BOOL) |

### Parameters

- **`driver`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`vehicleTarget`** (`Vehicle`)
- **`missionType`** (`int`)
- **`p4`** (`float`)
- **`p5`** (`Any`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`DriveAgainstTraffic`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleMission(driver, vehicle, vehicleTarget, missionType, p4, p5, p6, p7, DriveAgainstTraffic)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x659427E0EF36BCDE, driver, vehicle, vehicleTarget, missionType, p4, p5, p6, p7, DriveAgainstTraffic)
```


---

## TASK_VEHICLE_MISSION_PED_TARGET

**Description:** See TASK_VEHICLE_MISSION

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_MISSION_PED_TARGET` |
| Hash | `0x9454528DF15D657A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `pedTarget` (Ped), `mode` (int), `maxSpeed` (float), `drivingStyle` (int), `minDistance` (float), `p7` (float), `DriveAgainstTraffic` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`pedTarget`** (`Ped`)
- **`mode`** (`int`)
- **`maxSpeed`** (`float`)
- **`drivingStyle`** (`int`)
- **`minDistance`** (`float`)
- **`p7`** (`float`)
- **`DriveAgainstTraffic`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleMissionPedTarget(ped, vehicle, pedTarget, mode, maxSpeed, drivingStyle, minDistance, p7, DriveAgainstTraffic)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9454528DF15D657A, ped, vehicle, pedTarget, mode, maxSpeed, drivingStyle, minDistance, p7, DriveAgainstTraffic)
```


---

## TASK_VEHICLE_SHOOT_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_SHOOT_AT_COORD` |
| Hash | `0x5190796ED39C9B6D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `p4` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p4`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleShootAtCoord(ped, x, y, z, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5190796ED39C9B6D, ped, x, y, z, p4)
```


---

## TASK_VEHICLE_SHOOT_AT_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_SHOOT_AT_PED` |
| Hash | `0x10AB107B887214D8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `target` (Ped), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`target`** (`Ped`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleShootAtPed(ped, target, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x10AB107B887214D8, ped, target, p2)
```


---

## TASK_VEHICLE_TEMP_ACTION

**Description:** Documentation from GTA V, might be the same in RDR:

'1 - brake
'3 - brake + reverse
'4 - turn left 90 + braking
'5 - turn right 90 + braking
'6 - brake strong (handbrake?) until time ends
'7 - turn left + accelerate
'7 - turn right + accelerate
'9 - weak acceleration
'10 - turn left + restore wheel pos to center in the end
'11 - turn right + restore wheel pos to center in the end
'13 - turn left + go reverse
'14 - turn left + go reverse
'16 - crash the game after like 2 seconds :)
'17 - keep actual state, game crashed after few tries
'18 - game crash
'19 - strong brake + turn left/right
'20 - weak brake + turn left then turn right
'21 - weak brake + turn right then turn left
'22 - brake + reverse
'23 - accelerate fast
'24 - brake
'25 - brake turning left then when almost stopping it turns left more
'26 - brake turning right then when almost stopping it turns right more
'27 - brake until car stop or until time ends
'28 - brake + strong reverse acceleration
'30 - performs a burnout (brake until stop + brake and accelerate)
'31 - accelerate + handbrake
'32 - accelerate very strong

Seems to be this:
Works on NPCs, but overrides their current task. If inside a task sequence (and not being the last task), "time" will work, otherwise the task will be performed forever until tasked with something else

| Property | Value |
|----------|-------|
| Native Name | `TASK_VEHICLE_TEMP_ACTION` |
| Hash | `0xC429DCEEB339E129` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `driver` (Ped), `vehicle` (Vehicle), `action` (int), `time` (int) |

### Parameters

- **`driver`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`action`** (`int`)
- **`time`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleTempAction(driver, vehicle, action, time)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC429DCEEB339E129, driver, vehicle, action, time)
```


---

## TASK_WALK_AWAY

| Property | Value |
|----------|-------|
| Native Name | `TASK_WALK_AWAY` |
| Hash | `0x04ACFAC71E6858F9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
TaskWalkAway(ped, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x04ACFAC71E6858F9, ped, entity)
```


---

## TASK_WANDER_AND_CONVERSE_WITH_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_WANDER_AND_CONVERSE_WITH_PED` |
| Hash | `0x8AC76D1408731732` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskWanderAndConverseWithPed(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8AC76D1408731732, ped, p1, p2, p3)
```


---

## TASK_WANDER_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `TASK_WANDER_IN_AREA` |
| Hash | `0xE054346CA3A0F315` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `radius` (float), `p5` (float), `p6` (float), `p7` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskWanderInArea(ped, x, y, z, radius, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE054346CA3A0F315, ped, x, y, z, radius, p5, p6, p7)
```


---

## TASK_WANDER_IN_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `TASK_WANDER_IN_VOLUME` |
| Hash | `0x9FDA168777B28424` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `volume` (Volume), `p2` (float), `p3` (float), `p4` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`volume`** (`Volume`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskWanderInVolume(ped, volume, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9FDA168777B28424, ped, volume, p2, p3, p4)
```


---

## TASK_WANDER_STANDARD

**Description:** Makes ped walk around the area the params p1 p2 seems to not affect anything but p2 is either 0 or 1 and p1 is mostly 1.0 or ped heading

| Property | Value |
|----------|-------|
| Native Name | `TASK_WANDER_STANDARD` |
| Hash | `0xBB9CE077274F6A1B` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskWanderStandard(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB9CE077274F6A1B, ped, p1, p2)
```


---

## TASK_WANDER_SWIM

| Property | Value |
|----------|-------|
| Native Name | `TASK_WANDER_SWIM` |
| Hash | `0x527EA3DB8BC7F03B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskWanderSwim(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x527EA3DB8BC7F03B, ped, p1)
```


---

## TASK_WARP_PED_INTO_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_WARP_PED_INTO_VEHICLE` |
| Hash | `0x9A7D091411C5F684` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `seat` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`seat`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskWarpPedIntoVehicle(ped, vehicle, seat)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9A7D091411C5F684, ped, vehicle, seat)
```


---

## TASK_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `TASK_WEAPON` |
| Hash | `0x7157B82D60E4BC46` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskWeapon(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7157B82D60E4BC46, ped)
```


---

## TASK_WHISTLE_ANIM

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS/aud_ped_whistle_types.lua
p2: UNSPECIFIED

| Property | Value |
|----------|-------|
| Native Name | `TASK_WHISTLE_ANIM` |
| Hash | `0xD6401A1B2F63BED6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `audPedWhistleType` (Hash), `p2` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`audPedWhistleType`** (`Hash`)
- **`p2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TaskWhistleAnim(ped, audPedWhistleType, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD6401A1B2F63BED6, ped, audPedWhistleType, p2)
```


---

## UNCUFF_PED

| Property | Value |
|----------|-------|
| Native Name | `UNCUFF_PED` |
| Hash | `0x67406F2C8F87FC4F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
UncuffPed(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x67406F2C8F87FC4F, ped)
```


---

## UNHOGTIE_PED

**Description:** getupSetHash: see nm_blend_out_sets.meta

| Property | Value |
|----------|-------|
| Native Name | `UNHOGTIE_PED` |
| Hash | `0x79559BAD83CCD038` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flags` (int), `getupSetHash` (Hash), `p3` (char*), `p4` (char*), `p5` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`flags`** (`int`)
- **`getupSetHash`** (`Hash`)
- **`p3`** (`char*`)
- **`p4`** (`char*`)
- **`p5`** (`float`)

### Usage

**Lua (Direct):**
```lua
UnhogtiePed(ped, flags, getupSetHash, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x79559BAD83CCD038, ped, flags, getupSetHash, p3, p4, p5)
```


---

## UPDATE_TASK_HANDS_UP_DURATION

| Property | Value |
|----------|-------|
| Native Name | `UPDATE_TASK_HANDS_UP_DURATION` |
| Hash | `0xA98FCAFD7893C834` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `duration` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
UpdateTaskHandsUpDuration(ped, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA98FCAFD7893C834, ped, duration)
```


---

## USE_WAYPOINT_RECORDING_AS_ASSISTED_MOVEMENT_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `USE_WAYPOINT_RECORDING_AS_ASSISTED_MOVEMENT_ROUTE` |
| Hash | `0x5A353B8E6B1095B5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `waypointRecording` (char*), `p1` (BOOL), `p2` (float), `p3` (float), `p4` (BOOL) |

### Parameters

- **`waypointRecording`** (`char*`)
- **`p1`** (`BOOL`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UseWaypointRecordingAsAssistedMovementRoute(waypointRecording, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5A353B8E6B1095B5, waypointRecording, p1, p2, p3, p4)
```


---

## VEHICLE_WAYPOINT_PLAYBACK_GET_IS_PAUSED

| Property | Value |
|----------|-------|
| Native Name | `VEHICLE_WAYPOINT_PLAYBACK_GET_IS_PAUSED` |
| Hash | `0x4D6D30AB18B0B089` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = VehicleWaypointPlaybackGetIsPaused(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4D6D30AB18B0B089, p0)
```


---

## VEHICLE_WAYPOINT_PLAYBACK_OVERRIDE_SPEED

| Property | Value |
|----------|-------|
| Native Name | `VEHICLE_WAYPOINT_PLAYBACK_OVERRIDE_SPEED` |
| Hash | `0x121F0593E0A431D7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `speed` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
VehicleWaypointPlaybackOverrideSpeed(vehicle, speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x121F0593E0A431D7, vehicle, speed)
```


---

## VEHICLE_WAYPOINT_PLAYBACK_PAUSE

| Property | Value |
|----------|-------|
| Native Name | `VEHICLE_WAYPOINT_PLAYBACK_PAUSE` |
| Hash | `0x8A4E6AC373666BC5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
VehicleWaypointPlaybackPause(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8A4E6AC373666BC5, vehicle)
```


---

## VEHICLE_WAYPOINT_PLAYBACK_RESUME

| Property | Value |
|----------|-------|
| Native Name | `VEHICLE_WAYPOINT_PLAYBACK_RESUME` |
| Hash | `0xDC04FCAA7839D492` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
VehicleWaypointPlaybackResume(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDC04FCAA7839D492, vehicle)
```


---

## VEHICLE_WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED

| Property | Value |
|----------|-------|
| Native Name | `VEHICLE_WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED` |
| Hash | `0x5CEB25A7D2848963` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
VehicleWaypointPlaybackUseDefaultSpeed(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5CEB25A7D2848963, vehicle)
```


---

## WAYPOINT_PLAYBACK_GET_IS_AIMING

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_GET_IS_AIMING` |
| Hash | `0xD73A5D1F0325C71C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = WaypointPlaybackGetIsAiming(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD73A5D1F0325C71C, ped)
```


---

## WAYPOINT_PLAYBACK_GET_IS_PAUSED

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_GET_IS_PAUSED` |
| Hash | `0x701375A7D43F01CB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = WaypointPlaybackGetIsPaused(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x701375A7D43F01CB, ped)
```


---

## WAYPOINT_PLAYBACK_GET_IS_SHOOTING

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_GET_IS_SHOOTING` |
| Hash | `0xA5B94DF8AF058F46` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = WaypointPlaybackGetIsShooting(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA5B94DF8AF058F46, ped)
```


---

## WAYPOINT_PLAYBACK_OVERRIDE_SPEED

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_OVERRIDE_SPEED` |
| Hash | `0x7D7D2B47FA788E85` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `speed` (float), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`speed`** (`float`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackOverrideSpeed(ped, speed, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7D7D2B47FA788E85, ped, speed, p2, p3, p4)
```


---

## WAYPOINT_PLAYBACK_PAUSE

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_PAUSE` |
| Hash | `0x0F342546AA06FED5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackPause(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0F342546AA06FED5, ped, p1, p2, p3)
```


---

## WAYPOINT_PLAYBACK_RESUME

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_RESUME` |
| Hash | `0x244F70C84C547D2D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (int), `p3` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackResume(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x244F70C84C547D2D, ped, p1, p2, p3)
```


---

## WAYPOINT_PLAYBACK_START_AIMING_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_START_AIMING_AT_COORD` |
| Hash | `0x8968400D900ED8B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackStartAimingAtCoord(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8968400D900ED8B3, p0, p1, p2, p3, p4, p5)
```


---

## WAYPOINT_PLAYBACK_START_AIMING_AT_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_START_AIMING_AT_ENTITY` |
| Hash | `0x4F158205E0C74385` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackStartAimingAtEntity(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4F158205E0C74385, p0, p1, p2, p3)
```


---

## WAYPOINT_PLAYBACK_START_AIMING_AT_PED

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_START_AIMING_AT_PED` |
| Hash | `0x20E330937C399D29` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackStartAimingAtPed(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x20E330937C399D29, p0, p1, p2, p3)
```


---

## WAYPOINT_PLAYBACK_START_SHOOTING_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_START_SHOOTING_AT_COORD` |
| Hash | `0x057A25CFCC9DB671` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackStartShootingAtCoord(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x057A25CFCC9DB671, p0, p1, p2, p3, p4, p5, p6)
```


---

## WAYPOINT_PLAYBACK_START_SHOOTING_AT_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_START_SHOOTING_AT_ENTITY` |
| Hash | `0x4AF458F71C1196D2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackStartShootingAtEntity(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4AF458F71C1196D2, p0, p1, p2, p3, p4)
```


---

## WAYPOINT_PLAYBACK_START_SHOOTING_AT_PED

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_START_SHOOTING_AT_PED` |
| Hash | `0xE70BA7B90F8390DC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackStartShootingAtPed(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE70BA7B90F8390DC, p0, p1, p2, p3, p4)
```


---

## WAYPOINT_PLAYBACK_STOP_AIMING_OR_SHOOTING

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_STOP_AIMING_OR_SHOOTING` |
| Hash | `0x47EFA040EBB8E2EA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackStopAimingOrShooting(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x47EFA040EBB8E2EA, p0)
```


---

*End of TASK natives part 7*
