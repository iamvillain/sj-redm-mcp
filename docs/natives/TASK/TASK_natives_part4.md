# TASK Natives - Part 4 of 13

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TASK  
**Natives in this file:** 50  
**Total natives in namespace:** 640  
**Generated from:** RDR3natives JSON data

---

## TASK_COMBAT_HATED_TARGETS_AROUND_PED

**Description:** Despite its name, it only attacks ONE hated target. The one closest hated target.

| Property | Value |
|----------|-------|
| Native Name | `TASK_COMBAT_HATED_TARGETS_AROUND_PED` |
| Hash | `0x7BF835BB9E2698C8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `radius` (float), `flags` (int), `p3` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`radius`** (`float`)
- **`flags`** (`int`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskCombatHatedTargetsAroundPed(ped, radius, flags, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7BF835BB9E2698C8, ped, radius, flags, p3)
```


---

## TASK_COMBAT_HATED_TARGETS_AROUND_PED_TIMED

| Property | Value |
|----------|-------|
| Native Name | `TASK_COMBAT_HATED_TARGETS_AROUND_PED_TIMED` |
| Hash | `0x2BBA30B854534A0C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `radius` (float), `time` (int), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`radius`** (`float`)
- **`time`** (`int`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskCombatHatedTargetsAroundPedTimed(ped, radius, time, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2BBA30B854534A0C, ped, radius, time, flags)
```


---

## TASK_COMBAT_HATED_TARGETS_IN_AREA

**Description:** Despite its name, it only attacks ONE hated target. The one closest to the specified position.

| Property | Value |
|----------|-------|
| Native Name | `TASK_COMBAT_HATED_TARGETS_IN_AREA` |
| Hash | `0x4CF5F55DAC3280A0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `radius` (float), `flags` (int), `p6` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`flags`** (`int`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskCombatHatedTargetsInArea(ped, x, y, z, radius, flags, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4CF5F55DAC3280A0, ped, x, y, z, radius, flags, p6)
```


---

## TASK_COMBAT_HATED_TARGETS_NO_LOS_TEST

| Property | Value |
|----------|-------|
| Native Name | `TASK_COMBAT_HATED_TARGETS_NO_LOS_TEST` |
| Hash | `0xB5BC69D9C4060BC3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `radius` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskCombatHatedTargetsNoLosTest(ped, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB5BC69D9C4060BC3, ped, radius)
```


---

## TASK_COMBAT_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_COMBAT_PED` |
| Hash | `0xF166E48407BAC484` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (int), `p3` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskCombatPed(ped, targetPed, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF166E48407BAC484, ped, targetPed, p2, p3)
```


---

## TASK_COMBAT_PED_TIMED

| Property | Value |
|----------|-------|
| Native Name | `TASK_COMBAT_PED_TIMED` |
| Hash | `0x944F30DCB7096BDE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (int), `p3` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`int`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskCombatPedTimed(ped, targetPed, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x944F30DCB7096BDE, ped, targetPed, p2, p3)
```


---

## TASK_COMPANION_AMBIENT

| Property | Value |
|----------|-------|
| Native Name | `TASK_COMPANION_AMBIENT` |
| Hash | `0xE017CF6E2527FE4F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskCompanionAmbient(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE017CF6E2527FE4F, ped, p1)
```


---

## TASK_CONFRONT

| Property | Value |
|----------|-------|
| Native Name | `TASK_CONFRONT` |
| Hash | `0x3A2A2071DF5CC569` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = TaskConfront(ped, targetPed, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3A2A2071DF5CC569, ped, targetPed, p2)
```


---

## TASK_COWER

| Property | Value |
|----------|-------|
| Native Name | `TASK_COWER` |
| Hash | `0x3EB1FE9E8E908E15` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `duration` (int), `pedToCowerFrom` (Ped), `p3` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`duration`** (`int`)
- **`pedToCowerFrom`** (`Ped`)
- **`p3`** (`char*`)

### Usage

**Lua (Direct):**
```lua
TaskCower(ped, duration, pedToCowerFrom, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3EB1FE9E8E908E15, ped, duration, pedToCowerFrom, p3)
```


---

## TASK_DISEMBARK_NEAREST_TRAIN_CARRIAGE

**Description:** flags: See TASK_ENTER_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_DISEMBARK_NEAREST_TRAIN_CARRIAGE` |
| Hash | `0x0A11F3BDEC03ED5F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskDisembarkNearestTrainCarriage(ped, p1, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0A11F3BDEC03ED5F, ped, p1, flags)
```


---

## TASK_DISMOUNT_ANIMAL

**Description:** Dismounts the ped from the animal it's mounted on. taskFlag affects what side the rider gets off. p2-p5 are almost always 0.
flags: See TASK_ENTER_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_DISMOUNT_ANIMAL` |
| Hash | `0x48E92D3DDE23C23A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `rider` (Ped), `taskFlag` (int), `p2` (Any), `p3` (Any), `p4` (Any), `targetPed` (Ped) |

### Parameters

- **`rider`** (`Ped`)
- **`taskFlag`** (`int`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskDismountAnimal(rider, taskFlag, p2, p3, p4, targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x48E92D3DDE23C23A, rider, taskFlag, p2, p3, p4, targetPed)
```


---

## TASK_DRIVE_BY

| Property | Value |
|----------|-------|
| Native Name | `TASK_DRIVE_BY` |
| Hash | `0x2F8AF0E82773A171` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `driverPed` (Ped), `targetPed` (Ped), `targetVehicle` (Vehicle), `targetX` (float), `targetY` (float), `targetZ` (float), `distanceToShoot` (float), `pedAccuracy` (int), `p8` (BOOL), `firingPattern` (Hash) |

### Parameters

- **`driverPed`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`targetVehicle`** (`Vehicle`)
- **`targetX`** (`float`)
- **`targetY`** (`float`)
- **`targetZ`** (`float`)
- **`distanceToShoot`** (`float`)
- **`pedAccuracy`** (`int`)
- **`p8`** (`BOOL`)
- **`firingPattern`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TaskDriveBy(driverPed, targetPed, targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, p8, firingPattern)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2F8AF0E82773A171, driverPed, targetPed, targetVehicle, targetX, targetY, targetZ, distanceToShoot, pedAccuracy, p8, firingPattern)
```


---

## TASK_DUCK

| Property | Value |
|----------|-------|
| Native Name | `TASK_DUCK` |
| Hash | `0xA14B5FBF986BAC23` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `time` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`time`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskDuck(ped, time)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA14B5FBF986BAC23, ped, time)
```


---

## TASK_DUEL

**Description:** Params: p4 either 0.2f, 0.25f, 0.31f, 0.4f

| Property | Value |
|----------|-------|
| Native Name | `TASK_DUEL` |
| Hash | `0x5D5B0D5BC3626E5A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (float), `entity` (Entity), `p4` (float), `p5` (int), `vPosOpponentX` (float), `vPosOpponentY` (float), `vPosOpponentZ` (float), `fOpponentHead` (float), `p10` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`float`)
- **`entity`** (`Entity`)
- **`p4`** (`float`)
- **`p5`** (`int`)
- **`vPosOpponentX`** (`float`)
- **`vPosOpponentY`** (`float`)
- **`vPosOpponentZ`** (`float`)
- **`fOpponentHead`** (`float`)
- **`p10`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskDuel(ped, p1, p2, entity, p4, p5, vPosOpponentX, vPosOpponentY, vPosOpponentZ, fOpponentHead, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5D5B0D5BC3626E5A, ped, p1, p2, entity, p4, p5, vPosOpponentX, vPosOpponentY, vPosOpponentZ, fOpponentHead, p10)
```


---

## TASK_DUMP_CARRIABLE_FROM_PARENT

| Property | Value |
|----------|-------|
| Native Name | `TASK_DUMP_CARRIABLE_FROM_PARENT` |
| Hash | `0x17CA98707B15926A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ped2` (Ped), `entity` (Entity) |

### Parameters

- **`ped`** (`Ped`)
- **`ped2`** (`Ped`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
TaskDumpCarriableFromParent(ped, ped2, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x17CA98707B15926A, ped, ped2, entity)
```


---

## TASK_EAT

| Property | Value |
|----------|-------|
| Native Name | `TASK_EAT` |
| Hash | `0xBD7949BD07299672` |
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
TaskEat(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBD7949BD07299672, ped, p1, p2)
```


---

## TASK_ENTER_ANIM_SCENE

**Description:** flags:
MOVE_WHILST_WAITING_FOR_PATH = (1 << 0),
DO_NOT_STAND_STILL_AT_END_OF_PATH = (1 << 1),
SKIP_NAVIGATION = (1 << 2),
TEASF_AUTO_START_ANIM_SCENE = (1 << 3),
FORCE_STAND_STILL_AT_END_OF_PATH = (1 << 6),
ENTER_ANIM_SCENE_DONT_FOLLOW_NAVMESH = (1 << 7)

| Property | Value |
|----------|-------|
| Native Name | `TASK_ENTER_ANIM_SCENE` |
| Hash | `0xC2329B0206426644` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `animScene` (AnimScene), `entityName` (char*), `playbackListName` (char*), `enterSpeed` (float), `bAutoStart` (BOOL), `flag` (int), `p7` (int), `p8` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`animScene`** (`AnimScene`)
- **`entityName`** (`char*`)
- **`playbackListName`** (`char*`)
- **`enterSpeed`** (`float`)
- **`bAutoStart`** (`BOOL`)
- **`flag`** (`int`)
- **`p7`** (`int`)
- **`p8`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskEnterAnimScene(ped, animScene, entityName, playbackListName, enterSpeed, bAutoStart, flag, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC2329B0206426644, ped, animScene, entityName, playbackListName, enterSpeed, bAutoStart, flag, p7, p8)
```


---

## TASK_ENTER_VEHICLE

**Description:** flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eEnterExitVehicleFlags

| Property | Value |
|----------|-------|
| Native Name | `TASK_ENTER_VEHICLE` |
| Hash | `0xC20E50AA46D09CA8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `timeout` (int), `seat` (int), `speed` (float), `flag` (int), `p6` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`timeout`** (`int`)
- **`seat`** (`int`)
- **`speed`** (`float`)
- **`flag`** (`int`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskEnterVehicle(ped, vehicle, timeout, seat, speed, flag, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC20E50AA46D09CA8, ped, vehicle, timeout, seat, speed, flag, p6)
```


---

## TASK_EVASIVE_ANIM

**Description:** Params: p2 is returned by BUILTIN::SHIFT_LEFT

| Property | Value |
|----------|-------|
| Native Name | `TASK_EVASIVE_ANIM` |
| Hash | `0x5F22926E1BCE9B08` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped1` (Ped), `ped2` (Ped), `p2` (int) |

### Parameters

- **`ped1`** (`Ped`)
- **`ped2`** (`Ped`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskEvasiveAnim(ped1, ped2, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5F22926E1BCE9B08, ped1, ped2, p2)
```


---

## TASK_EVERYONE_LEAVE_VEHICLE_IN_ORDER

| Property | Value |
|----------|-------|
| Native Name | `TASK_EVERYONE_LEAVE_VEHICLE_IN_ORDER` |
| Hash | `0x6F1C49F275BD25B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskEveryoneLeaveVehicleInOrder(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6F1C49F275BD25B3, vehicle, p1)
```


---

## TASK_EXTEND_ROUTE

**Description:** Adds a new point to the current point route. Call TASK_FLUSH_ROUTE before the first call to this. Call TASK_FOLLOW_POINT_ROUTE to make the Ped go the route.

A maximum of 8 points can be added.

| Property | Value |
|----------|-------|
| Native Name | `TASK_EXTEND_ROUTE` |
| Hash | `0x1E7889778264843A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskExtendRoute(x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1E7889778264843A, x, y, z)
```


---

## TASK_FLEE_COORD

**Description:** Params: p5 = some flag?, p6 = -1.0f, p8 = 0 in R* Scripts
fleeStyle: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eFleeStyle

| Property | Value |
|----------|-------|
| Native Name | `TASK_FLEE_COORD` |
| Hash | `0x58428248BF4B64E4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `fleeStyle` (int), `p5` (int), `p6` (float), `duration` (int), `p8` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`fleeStyle`** (`int`)
- **`p5`** (`int`)
- **`p6`** (`float`)
- **`duration`** (`int`)
- **`p8`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskFleeCoord(ped, x, y, z, fleeStyle, p5, p6, duration, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x58428248BF4B64E4, ped, x, y, z, fleeStyle, p5, p6, duration, p8)
```


---

## TASK_FLEE_COORD_VIA

| Property | Value |
|----------|-------|
| Native Name | `TASK_FLEE_COORD_VIA` |
| Hash | `0x390E0B697D25EAF5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any), `p11` (Any) |

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
- **`p9`** (`Any`)
- **`p10`** (`Any`)
- **`p11`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskFleeCoordVia(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x390E0B697D25EAF5, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11)
```


---

## TASK_FLEE_PED

**Description:** Params: p4 = -1.0f, p5 = -1, p6 = 0 in R* Scripts
fleeStyle: see TASK_FLEE_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_FLEE_PED` |
| Hash | `0xFD45175A6DFD7CE9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `fleeFromTarget` (Ped), `fleeStyle` (int), `flag` (int), `p4` (float), `p5` (int), `p6` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`fleeFromTarget`** (`Ped`)
- **`fleeStyle`** (`int`)
- **`flag`** (`int`)
- **`p4`** (`float`)
- **`p5`** (`int`)
- **`p6`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskFleePed(ped, fleeFromTarget, fleeStyle, flag, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFD45175A6DFD7CE9, ped, fleeFromTarget, fleeStyle, flag, p4, p5, p6)
```


---

## TASK_FLEE_PED_VIA

| Property | Value |
|----------|-------|
| Native Name | `TASK_FLEE_PED_VIA` |
| Hash | `0x5802E0F910E4CF1D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any) |

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
- **`p9`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskFleePedVia(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5802E0F910E4CF1D, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## TASK_FLUSH_ROUTE

**Description:** Clears the current point route. Call this before TASK_EXTEND_ROUTE and TASK_FOLLOW_POINT_ROUTE.

| Property | Value |
|----------|-------|
| Native Name | `TASK_FLUSH_ROUTE` |
| Hash | `0x841142A1376E9006` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
TaskFlushRoute()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x841142A1376E9006, )
```


---

## TASK_FLYING_CIRCLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_FLYING_CIRCLE` |
| Hash | `0x72997893BFB8ECCC` |
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
TaskFlyingCircle(ped, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x72997893BFB8ECCC, ped, p1, p2, p3, p4, p5, p6)
```


---

## TASK_FLY_AWAY

| Property | Value |
|----------|-------|
| Native Name | `TASK_FLY_AWAY` |
| Hash | `0xE86A537B5A3C297C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `fleeFromTarget` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`fleeFromTarget`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskFlyAway(ped, fleeFromTarget)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE86A537B5A3C297C, ped, fleeFromTarget)
```


---

## TASK_FLY_TO_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_FLY_TO_COORD` |
| Hash | `0xD6CFC2D59DA72042` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `travelMbr` (float), `x` (float), `y` (float), `z` (float), `p5` (BOOL), `p6` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`travelMbr`** (`float`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskFlyToCoord(ped, travelMbr, x, y, z, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD6CFC2D59DA72042, ped, travelMbr, x, y, z, p5, p6)
```


---

## TASK_FOLLOW_AND_CONVERSE_WITH_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_AND_CONVERSE_WITH_PED` |
| Hash | `0x489FFCCCE7392B55` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (Any), `p3` (Any), `p4` (float), `p5` (float), `p6` (int), `p7` (Any), `p8` (Any), `p9` (float), `p10` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`int`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)
- **`p9`** (`float`)
- **`p10`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskFollowAndConverseWithPed(ped, targetPed, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x489FFCCCE7392B55, ped, targetPed, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## TASK_FOLLOW_ENTITY_ALONG_WAYPOINT_RECORDING_AT_OFFSET

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_ENTITY_ALONG_WAYPOINT_RECORDING_AT_OFFSET` |
| Hash | `0x4D2B787BAE9AB760` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped0` (Ped), `ped1` (Ped), `waypointRecording` (char*), `p3` (float), `p4` (float), `p5` (int), `p6` (int), `p7` (int), `p8` (BOOL) |

### Parameters

- **`ped0`** (`Ped`)
- **`ped1`** (`Ped`)
- **`waypointRecording`** (`char*`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`int`)
- **`p6`** (`int`)
- **`p7`** (`int`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskFollowEntityAlongWaypointRecordingAtOffset(ped0, ped1, waypointRecording, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D2B787BAE9AB760, ped0, ped1, waypointRecording, p3, p4, p5, p6, p7, p8)
```


---

## TASK_FOLLOW_ENTITY_WHILE_AIMING_AT_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_ENTITY_WHILE_AIMING_AT_ENTITY` |
| Hash | `0x2D532EAA142CF83F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskFollowEntityWhileAimingAtEntity(ped, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2D532EAA142CF83F, ped, p1, p2, p3, p4, p5, p6, p7)
```


---

## TASK_FOLLOW_NAV_MESH_TO_COORD

**Description:** If no timeout, set timeout to -1.

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_NAV_MESH_TO_COORD` |
| Hash | `0x15D3A79D4E44B913` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `speedMultiplier` (float), `timeout` (int), `stoppingRange` (float), `flags` (int), `heading` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`speedMultiplier`** (`float`)
- **`timeout`** (`int`)
- **`stoppingRange`** (`float`)
- **`flags`** (`int`)
- **`heading`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskFollowNavMeshToCoord(ped, x, y, z, speedMultiplier, timeout, stoppingRange, flags, heading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x15D3A79D4E44B913, ped, x, y, z, speedMultiplier, timeout, stoppingRange, flags, heading)
```


---

## TASK_FOLLOW_NAV_MESH_TO_COORD_ADVANCED

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_NAV_MESH_TO_COORD_ADVANCED` |
| Hash | `0x17F58B88D085DBAC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `speedMultiplier` (float), `timeout` (int), `stoppingRange` (float), `flags` (int), `p8` (float), `p9` (float), `p10` (float), `entity` (Entity), `unk` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`speedMultiplier`** (`float`)
- **`timeout`** (`int`)
- **`stoppingRange`** (`float`)
- **`flags`** (`int`)
- **`p8`** (`float`)
- **`p9`** (`float`)
- **`p10`** (`float`)
- **`entity`** (`Entity`)
- **`unk`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskFollowNavMeshToCoordAdvanced(ped, x, y, z, speedMultiplier, timeout, stoppingRange, flags, p8, p9, p10, entity, unk)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x17F58B88D085DBAC, ped, x, y, z, speedMultiplier, timeout, stoppingRange, flags, p8, p9, p10, entity, unk)
```


---

## TASK_FOLLOW_PAVEMENT_TO_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_PAVEMENT_TO_COORD` |
| Hash | `0x1B1475414E70DD8E` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `args` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`args`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskFollowPavementToCoord(ped, args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1B1475414E70DD8E, ped, args)
```


---

## TASK_FOLLOW_POINT_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_POINT_ROUTE` |
| Hash | `0x0E14C5550DC3CD1D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskFollowPointRoute(ped, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0E14C5550DC3CD1D, ped, p1, p2, p3, p4, p5)
```


---

## TASK_FOLLOW_TO_OFFSET_OF_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_TO_OFFSET_OF_COORD` |
| Hash | `0x2E3676282C18A692` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any), `p11` (Any), `p12` (Any), `p13` (Any), `p14` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)
- **`p9`** (`Any`)
- **`p10`** (`Any`)
- **`p11`** (`Any`)
- **`p12`** (`Any`)
- **`p13`** (`Any`)
- **`p14`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskFollowToOffsetOfCoord(ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E3676282C18A692, ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14)
```


---

## TASK_FOLLOW_TO_OFFSET_OF_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_TO_OFFSET_OF_ENTITY` |
| Hash | `0x304AE42E357B8C7E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity), `offsetX` (float), `offsetY` (float), `offsetZ` (float), `movementSpeed` (float), `timeout` (int), `stoppingRange` (float), `persistFollowing` (BOOL), `p9` (BOOL), `walkOnly` (BOOL), `p11` (BOOL), `p12` (BOOL), `p13` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)
- **`movementSpeed`** (`float`)
- **`timeout`** (`int`)
- **`stoppingRange`** (`float`)
- **`persistFollowing`** (`BOOL`)
- **`p9`** (`BOOL`)
- **`walkOnly`** (`BOOL`)
- **`p11`** (`BOOL`)
- **`p12`** (`BOOL`)
- **`p13`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskFollowToOffsetOfEntity(ped, entity, offsetX, offsetY, offsetZ, movementSpeed, timeout, stoppingRange, persistFollowing, p9, walkOnly, p11, p12, p13)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x304AE42E357B8C7E, ped, entity, offsetX, offsetY, offsetZ, movementSpeed, timeout, stoppingRange, persistFollowing, p9, walkOnly, p11, p12, p13)
```


---

## TASK_FOLLOW_WAYPOINT_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_WAYPOINT_RECORDING` |
| Hash | `0x0759591819534F7B` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `waypointRecording` (char*), `p2` (int), `flag` (int), `p4` (int), `p5` (BOOL), `p6` (Any), `p7` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`waypointRecording`** (`char*`)
- **`p2`** (`int`)
- **`flag`** (`int`)
- **`p4`** (`int`)
- **`p5`** (`BOOL`)
- **`p6`** (`Any`)
- **`p7`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskFollowWaypointRecording(ped, waypointRecording, p2, flag, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0759591819534F7B, ped, waypointRecording, p2, flag, p4, p5, p6, p7)
```


---

## TASK_FOLLOW_WAYPOINT_RECORDING_ADVANCED

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_WAYPOINT_RECORDING_ADVANCED` |
| Hash | `0x0CFC13EBC19BCA52` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskFollowWaypointRecordingAdvanced(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0CFC13EBC19BCA52, ped, p1)
```


---

## TASK_FOLLOW_WAYPOINT_RECORDING_AT_OFFSET

| Property | Value |
|----------|-------|
| Native Name | `TASK_FOLLOW_WAYPOINT_RECORDING_AT_OFFSET` |
| Hash | `0xBE9B0520BD7C445B` |
| Return Type | `void` |
| API Set | `cient` |
| Build | `1207` |
| Parameters | `ped` (Ped), `waypointRecording` (char*), `p2` (float), `p3` (int), `p4` (int), `p5` (int), `p6` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`waypointRecording`** (`char*`)
- **`p2`** (`float`)
- **`p3`** (`int`)
- **`p4`** (`int`)
- **`p5`** (`int`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskFollowWaypointRecordingAtOffset(ped, waypointRecording, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBE9B0520BD7C445B, ped, waypointRecording, p2, p3, p4, p5, p6)
```


---

## TASK_FORCE_MOTION_STATE

**Description:** motionStateHash: see FORCE_PED_MOTION_STATE

| Property | Value |
|----------|-------|
| Native Name | `TASK_FORCE_MOTION_STATE` |
| Hash | `0x4F056E1AFFEF17AB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `motionStateHash` (Hash), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`motionStateHash`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskForceMotionState(ped, motionStateHash, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4F056E1AFFEF17AB, ped, motionStateHash, p2)
```


---

## TASK_GOTO_ENTITY_AIMING

**Description:** ped = Ped you want to perform this task.
target = the Entity they should aim at.
distanceToStopAt = distance from the target, where the ped should stop to aim.
StartAimingDist = distance where the ped should start to aim.

| Property | Value |
|----------|-------|
| Native Name | `TASK_GOTO_ENTITY_AIMING` |
| Hash | `0xA9DA48FAB8A76C12` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `target` (Entity), `distanceToStopAt` (float), `StartAimingDist` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`target`** (`Entity`)
- **`distanceToStopAt`** (`float`)
- **`StartAimingDist`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskGotoEntityAiming(ped, target, distanceToStopAt, StartAimingDist)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA9DA48FAB8A76C12, ped, target, distanceToStopAt, StartAimingDist)
```


---

## TASK_GOTO_ENTITY_OFFSET

| Property | Value |
|----------|-------|
| Native Name | `TASK_GOTO_ENTITY_OFFSET` |
| Hash | `0xE39B4FF4FDEBDE27` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity), `p2` (Any), `x` (float), `y` (float), `z` (float), `duration` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)
- **`p2`** (`Any`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskGotoEntityOffset(ped, entity, p2, x, y, z, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE39B4FF4FDEBDE27, ped, entity, p2, x, y, z, duration)
```


---

## TASK_GOTO_ENTITY_OFFSET_XY

| Property | Value |
|----------|-------|
| Native Name | `TASK_GOTO_ENTITY_OFFSET_XY` |
| Hash | `0x338E7EF52B6095A9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity), `duration` (int), `targetRadius` (float), `xOffset` (float), `yOffset` (float), `moveBlendRatio` (float), `offsetFlags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)
- **`duration`** (`int`)
- **`targetRadius`** (`float`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`moveBlendRatio`** (`float`)
- **`offsetFlags`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskGotoEntityOffsetXy(ped, entity, duration, targetRadius, xOffset, yOffset, moveBlendRatio, offsetFlags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x338E7EF52B6095A9, ped, entity, duration, targetRadius, xOffset, yOffset, moveBlendRatio, offsetFlags)
```


---

## TASK_GOTO_ENTITY_OFFSET_XYZ

| Property | Value |
|----------|-------|
| Native Name | `TASK_GOTO_ENTITY_OFFSET_XYZ` |
| Hash | `0xFA6DA9D151769392` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any) |

### Parameters

- **`ped`** (`Ped`)
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
TaskGotoEntityOffsetXyz(ped, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA6DA9D151769392, ped, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## TASK_GOTO_ENTITY_OFFSET_XYZ_AIMING

| Property | Value |
|----------|-------|
| Native Name | `TASK_GOTO_ENTITY_OFFSET_XYZ_AIMING` |
| Hash | `0x41B0832CA96B5351` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)
- **`p9`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskGotoEntityOffsetXyzAiming(ped, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x41B0832CA96B5351, ped, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## TASK_GOTO_ENTITY_OFFSET_XY_AIMING

| Property | Value |
|----------|-------|
| Native Name | `TASK_GOTO_ENTITY_OFFSET_XY_AIMING` |
| Hash | `0x901BD69984400F62` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any) |

### Parameters

- **`ped`** (`Ped`)
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
TaskGotoEntityOffsetXyAiming(ped, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x901BD69984400F62, ped, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## TASK_GO_STRAIGHT_TO_COORD

**Description:** Tells the ped to go to a coord, without using the navemesh. if timeBeforeTeleport is -1 the ped will never warp, p8 is always 0 or 1 still unknown

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_STRAIGHT_TO_COORD` |
| Hash | `0xD76B57B44F1E6F8B` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `moveBlendRatio` (float), `timeBeforeTeleport` (int), `finalHeading` (float), `targetRadius` (float), `p8` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`moveBlendRatio`** (`float`)
- **`timeBeforeTeleport`** (`int`)
- **`finalHeading`** (`float`)
- **`targetRadius`** (`float`)
- **`p8`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskGoStraightToCoord(ped, x, y, z, moveBlendRatio, timeBeforeTeleport, finalHeading, targetRadius, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD76B57B44F1E6F8B, ped, x, y, z, moveBlendRatio, timeBeforeTeleport, finalHeading, targetRadius, p8)
```


---

## TASK_GO_STRAIGHT_TO_COORD_RELATIVE_TO_ENTITY

**Description:** Tells the ped to go to an offset coord from an entity, without using the navmesh. if timeBeforeTeleport is -1 the ped will never warp, p7 is 1 or 0 still unknown param 

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_STRAIGHT_TO_COORD_RELATIVE_TO_ENTITY` |
| Hash | `0x61E360B7E040D12E` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity), `xOffset` (float), `Yoffset` (float), `zOffset` (float), `moveBlendRatio` (int), `timeBeforeTeleport` (int), `p7` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)
- **`xOffset`** (`float`)
- **`Yoffset`** (`float`)
- **`zOffset`** (`float`)
- **`moveBlendRatio`** (`int`)
- **`timeBeforeTeleport`** (`int`)
- **`p7`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskGoStraightToCoordRelativeToEntity(ped, entity, xOffset, Yoffset, zOffset, moveBlendRatio, timeBeforeTeleport, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x61E360B7E040D12E, ped, entity, xOffset, Yoffset, zOffset, moveBlendRatio, timeBeforeTeleport, p7)
```


---

*End of TASK natives part 4*
