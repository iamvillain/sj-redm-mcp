# TASK Natives - Part 1 of 13

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TASK  
**Natives in this file:** 50  
**Total natives in namespace:** 640  
**Generated from:** RDR3natives JSON data

---

## ADD_COVER_BLOCKING_AREA

| Property | Value |
|----------|-------|
| Native Name | `ADD_COVER_BLOCKING_AREA` |
| Hash | `0x45C597097DD7CB81` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `playerX` (float), `playerY` (float), `playerZ` (float), `radiusX` (float), `radiusY` (float), `radiusZ` (float), `p6` (BOOL), `p7` (BOOL), `p8` (BOOL), `p9` (BOOL) |

### Parameters

- **`playerX`** (`float`)
- **`playerY`** (`float`)
- **`playerZ`** (`float`)
- **`radiusX`** (`float`)
- **`radiusY`** (`float`)
- **`radiusZ`** (`float`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AddCoverBlockingArea(playerX, playerY, playerZ, radiusX, radiusY, radiusZ, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x45C597097DD7CB81, playerX, playerY, playerZ, radiusX, radiusY, radiusZ, p6, p7, p8, p9)
```


---

## ADD_COVER_POINT

| Property | Value |
|----------|-------|
| Native Name | `ADD_COVER_POINT` |
| Hash | `0xD5C12A75C7B9497F` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (BOOL) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = AddCoverPoint(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD5C12A75C7B9497F, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## ADD_FLEE_TARGET_PED

**Description:** Params: p2 is always -1.f in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `ADD_FLEE_TARGET_PED` |
| Hash | `0x3923EC958249657D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddFleeTargetPed(ped, targetPed, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3923EC958249657D, ped, targetPed, p2)
```


---

## ADD_PATROL_ROUTE_LINK

| Property | Value |
|----------|-------|
| Native Name | `ADD_PATROL_ROUTE_LINK` |
| Hash | `0x23083260DEC3A551` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `node1` (int), `node2` (int) |

### Parameters

- **`node1`** (`int`)
- **`node2`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddPatrolRouteLink(node1, node2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x23083260DEC3A551, node1, node2)
```


---

## ADD_PATROL_ROUTE_NODE

| Property | Value |
|----------|-------|
| Native Name | `ADD_PATROL_ROUTE_NODE` |
| Hash | `0x8EDF950167586B7C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `nodeId` (int), `scenarioName` (char*), `x` (float), `y` (float), `z` (float), `lookPosX` (float), `lookPosY` (float), `lookPosZ` (float), `duration` (int), `p9` (BOOL) |

### Parameters

- **`nodeId`** (`int`)
- **`scenarioName`** (`char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`lookPosX`** (`float`)
- **`lookPosY`** (`float`)
- **`lookPosZ`** (`float`)
- **`duration`** (`int`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AddPatrolRouteNode(nodeId, scenarioName, x, y, z, lookPosX, lookPosY, lookPosZ, duration, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8EDF950167586B7C, nodeId, scenarioName, x, y, z, lookPosX, lookPosY, lookPosZ, duration, p9)
```


---

## ARE_COMPOSITE_LOOTABLE_ENTITY_DEF_ASSETS_LOADED

**Description:** Returns true when requested asset is loaded

| Property | Value |
|----------|-------|
| Native Name | `ARE_COMPOSITE_LOOTABLE_ENTITY_DEF_ASSETS_LOADED` |
| Hash | `0x5E5D96BE25E9DF68` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `asset` (Hash) |

### Parameters

- **`asset`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = AreCompositeLootableEntityDefAssetsLoaded(asset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5E5D96BE25E9DF68, asset)
```


---

## ASSISTED_MOVEMENT_IS_ROUTE_LOADED

| Property | Value |
|----------|-------|
| Native Name | `ASSISTED_MOVEMENT_IS_ROUTE_LOADED` |
| Hash | `0x60F9A4393A21F741` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `route` (char*) |

### Parameters

- **`route`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = AssistedMovementIsRouteLoaded(route)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x60F9A4393A21F741, route)
```


---

## ASSISTED_MOVEMENT_REMOVE_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `ASSISTED_MOVEMENT_REMOVE_ROUTE` |
| Hash | `0x3548536485DD792B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `route` (char*) |

### Parameters

- **`route`** (`char*`)

### Usage

**Lua (Direct):**
```lua
AssistedMovementRemoveRoute(route)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3548536485DD792B, route)
```


---

## ASSISTED_MOVEMENT_SET_ROUTE_PROPERTIES

| Property | Value |
|----------|-------|
| Native Name | `ASSISTED_MOVEMENT_SET_ROUTE_PROPERTIES` |
| Hash | `0xD5002D78B7162E1B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `route` (char*), `props` (int) |

### Parameters

- **`route`** (`char*`)
- **`props`** (`int`)

### Usage

**Lua (Direct):**
```lua
AssistedMovementSetRouteProperties(route, props)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD5002D78B7162E1B, route, props)
```


---

## CAN_START_ITEM_INTERACTION

| Property | Value |
|----------|-------|
| Native Name | `CAN_START_ITEM_INTERACTION` |
| Hash | `0x2D19BC4DF626CBE7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `itemHash` (Hash), `interactionAnimHash` (Hash), `p3` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`itemHash`** (`Hash`)
- **`interactionAnimHash`** (`Hash`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CanStartItemInteraction(ped, itemHash, interactionAnimHash, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2D19BC4DF626CBE7, ped, itemHash, interactionAnimHash, p3)
```


---

## CLEAR_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK` |
| Hash | `0xC35B5CDB2824CF69` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearDrivebyTaskUnderneathDrivingTask(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC35B5CDB2824CF69, ped)
```


---

## CLEAR_PED_SECONDARY_TASK

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_SECONDARY_TASK` |
| Hash | `0x176CECF6F920D707` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearPedSecondaryTask(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x176CECF6F920D707, ped)
```


---

## CLEAR_PED_TASKS

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_TASKS` |
| Hash | `0xE1EF3C1216AFF2CD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ClearPedTasks(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE1EF3C1216AFF2CD, ped, p1, p2)
```


---

## CLEAR_PED_TASKS_IMMEDIATELY

**Description:** Immediately stops the pedestrian from whatever it's doing. They stop fighting, animations, etc. they forget what they were doing.

resetCrouch TRUE = ped will stand up if crouching, FALSE = ped will remain crouching if crouched

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_TASKS_IMMEDIATELY` |
| Hash | `0xAAA34F8A7CB32098` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `resetCrouch` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`resetCrouch`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ClearPedTasksImmediately(ped, p1, resetCrouch)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAAA34F8A7CB32098, ped, p1, resetCrouch)
```


---

## CLEAR_SEQUENCE_TASK

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_SEQUENCE_TASK` |
| Hash | `0x3841422E9C488D8C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `taskSequenceId` (int*) |

### Parameters

- **`taskSequenceId`** (`int*`)

### Usage

**Lua (Direct):**
```lua
ClearSequenceTask(taskSequenceId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3841422E9C488D8C, taskSequenceId)
```


---

## CLOSE_PATROL_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `CLOSE_PATROL_ROUTE` |
| Hash | `0xB043ECA801B8CBC1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClosePatrolRoute()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB043ECA801B8CBC1, )
```


---

## CLOSE_SEQUENCE_TASK

| Property | Value |
|----------|-------|
| Native Name | `CLOSE_SEQUENCE_TASK` |
| Hash | `0x39E72BC99E6360CB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `taskSequenceId` (int) |

### Parameters

- **`taskSequenceId`** (`int`)

### Usage

**Lua (Direct):**
```lua
CloseSequenceTask(taskSequenceId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x39E72BC99E6360CB, taskSequenceId)
```


---

## CREATE_PATROL_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `CREATE_PATROL_ROUTE` |
| Hash | `0xAF8A443CCC8018DC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
CreatePatrolRoute()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAF8A443CCC8018DC, )
```


---

## CREATE_SCENARIO_POINT_HASH

**Description:** Returns scenario

| Property | Value |
|----------|-------|
| Native Name | `CREATE_SCENARIO_POINT_HASH` |
| Hash | `0x94B745CE41DB58A1` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `scenarioHash` (Hash), `x` (float), `y` (float), `z` (float), `heading` (float), `p5` (Any), `p6` (Any), `p7` (BOOL) |

### Parameters

- **`scenarioHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateScenarioPointHash(scenarioHash, x, y, z, heading, p5, p6, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x94B745CE41DB58A1, scenarioHash, x, y, z, heading, p5, p6, p7)
```


---

## CREATE_SCENARIO_POINT_HASH_ATTACHED_TO_ENTITY

**Description:** Returns scenario

| Property | Value |
|----------|-------|
| Native Name | `CREATE_SCENARIO_POINT_HASH_ATTACHED_TO_ENTITY` |
| Hash | `0x794AB1379A74064D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity), `scenarioHash` (Hash), `x` (float), `y` (float), `z` (float), `heading` (float), `p6` (Any), `p7` (Any), `p8` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`scenarioHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateScenarioPointHashAttachedToEntity(entity, scenarioHash, x, y, z, heading, p6, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x794AB1379A74064D, entity, scenarioHash, x, y, z, heading, p6, p7, p8)
```


---

## DELETE_PATROL_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `DELETE_PATROL_ROUTE` |
| Hash | `0x7767DD9D65E91319` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `patrolRoute` (char*) |

### Parameters

- **`patrolRoute`** (`char*`)

### Usage

**Lua (Direct):**
```lua
DeletePatrolRoute(patrolRoute)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7767DD9D65E91319, patrolRoute)
```


---

## DOES_SCENARIO_EXIST_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `DOES_SCENARIO_EXIST_IN_AREA` |
| Hash | `0x5A59271FFADD33C1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `p4` (BOOL), `p5` (Any), `p6` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p4`** (`BOOL`)
- **`p5`** (`Any`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = DoesScenarioExistInArea(x, y, z, radius, p4, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5A59271FFADD33C1, x, y, z, radius, p4, p5, p6)
```


---

## DOES_SCENARIO_GROUP_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_SCENARIO_GROUP_EXIST` |
| Hash | `0xF9034C136C9E00D3` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `scenarioGroup` (char*) |

### Parameters

- **`scenarioGroup`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = DoesScenarioGroupExist(scenarioGroup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF9034C136C9E00D3, scenarioGroup)
```


---

## DOES_SCENARIO_OF_TYPE_EXIST_IN_AREA_HASH

| Property | Value |
|----------|-------|
| Native Name | `DOES_SCENARIO_OF_TYPE_EXIST_IN_AREA_HASH` |
| Hash | `0x6EEAD6AF637DA752` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `typeHash` (Hash), `radius` (float), `p5` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`typeHash`** (`Hash`)
- **`radius`** (`float`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = DoesScenarioOfTypeExistInAreaHash(x, y, z, typeHash, radius, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6EEAD6AF637DA752, x, y, z, typeHash, radius, p5)
```


---

## DOES_SCENARIO_POINT_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_SCENARIO_POINT_EXIST` |
| Hash | `0x841475AC96E794D1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scenario` (int) |

### Parameters

- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesScenarioPointExist(scenario)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x841475AC96E794D1, scenario)
```


---

## DOES_SCRIPTED_COVER_POINT_EXIST_AT_COORDS

**Description:** Checks if there is a cover point at position

| Property | Value |
|----------|-------|
| Native Name | `DOES_SCRIPTED_COVER_POINT_EXIST_AT_COORDS` |
| Hash | `0xA98B8E3C088E5A31` |
| Return Type | `BOOL` |
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
local result = DoesScriptedCoverPointExistAtCoords(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA98B8E3C088E5A31, p0, p1, p2, p3)
```


---

## END_DUEL

| Property | Value |
|----------|-------|
| Native Name | `END_DUEL` |
| Hash | `0xEED08A3A98B847E2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
EndDuel(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEED08A3A98B847E2, ped, p1, p2)
```


---

## FIND_SCENARIO_OF_TYPE_HASH

| Property | Value |
|----------|-------|
| Native Name | `FIND_SCENARIO_OF_TYPE_HASH` |
| Hash | `0xF533D68FF970D190` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `xPos` (float), `yPos` (float), `zPos` (float), `scenarioType` (Hash), `distance` (float), `p5` (Any), `p6` (BOOL) |

### Parameters

- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`scenarioType`** (`Hash`)
- **`distance`** (`float`)
- **`p5`** (`Any`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = FindScenarioOfTypeHash(xPos, yPos, zPos, scenarioType, distance, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF533D68FF970D190, xPos, yPos, zPos, scenarioType, distance, p5, p6)
```


---

## FORCE_SCENARIO_GROUP_PRIORITY

| Property | Value |
|----------|-------|
| Native Name | `FORCE_SCENARIO_GROUP_PRIORITY` |
| Hash | `0x444C910A5058E568` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
ForceScenarioGroupPriority(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x444C910A5058E568, p0, p1)
```


---

## GET_ACTIVE_VEHICLE_MISSION_TYPE

| Property | Value |
|----------|-------|
| Native Name | `GET_ACTIVE_VEHICLE_MISSION_TYPE` |
| Hash | `0x534AEBA6E5ED4CAB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetActiveVehicleMissionType(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x534AEBA6E5ED4CAB, vehicle)
```


---

## GET_IS_CARRIABLE_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `GET_IS_CARRIABLE_ENTITY` |
| Hash | `0x0CCFE72B43C9CF96` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsCarriableEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0CCFE72B43C9CF96, entity)
```


---

## GET_IS_PED_AIMING_IN_THE_AIR

| Property | Value |
|----------|-------|
| Native Name | `GET_IS_PED_AIMING_IN_THE_AIR` |
| Hash | `0x8785E6E40C7A8819` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsPedAimingInTheAir(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8785E6E40C7A8819, ped)
```


---

## GET_IS_TASK_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `GET_IS_TASK_ACTIVE` |
| Hash | `0xB0760331C7AA4155` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `taskIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`taskIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsTaskActive(ped, taskIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB0760331C7AA4155, ped, taskIndex)
```


---

## GET_IS_WAYPOINT_RECORDING_LOADED

| Property | Value |
|----------|-------|
| Native Name | `GET_IS_WAYPOINT_RECORDING_LOADED` |
| Hash | `0xCB4E8BE8A0063C5D` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `waypointRecording` (char*) |

### Parameters

- **`waypointRecording`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsWaypointRecordingLoaded(waypointRecording)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB4E8BE8A0063C5D, waypointRecording)
```


---

## GET_ITEM_INTERACTION_ITEM_ID

| Property | Value |
|----------|-------|
| Native Name | `GET_ITEM_INTERACTION_ITEM_ID` |
| Hash | `0x804425C4BBD00883` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetItemInteractionItemId(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x804425C4BBD00883, ped)
```


---

## GET_ITEM_INTERACTION_PROMPT_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `GET_ITEM_INTERACTION_PROMPT_PROGRESS` |
| Hash | `0xBC864A70AD55E0C1` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `inputContext` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`inputContext`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetItemInteractionPromptProgress(ped, inputContext)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBC864A70AD55E0C1, ped, inputContext)
```


---

## GET_ITEM_INTERACTION_STATE

| Property | Value |
|----------|-------|
| Native Name | `GET_ITEM_INTERACTION_STATE` |
| Hash | `0x6AA3DCA2C6F5EB6D` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetItemInteractionState(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6AA3DCA2C6F5EB6D, ped)
```


---

## GET_PED_DESIRED_MOVE_BLEND_RATIO

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_DESIRED_MOVE_BLEND_RATIO` |
| Hash | `0x8517D4A6CA8513ED` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedDesiredMoveBlendRatio(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8517D4A6CA8513ED, ped)
```


---

## GET_PED_WAYPOINT_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_WAYPOINT_DISTANCE` |
| Hash | `0xE6A877C64CAF1BC5` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedWaypointDistance(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE6A877C64CAF1BC5, ped)
```


---

## GET_PED_WAYPOINT_OVERRIDE_SPEED

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_WAYPOINT_OVERRIDE_SPEED` |
| Hash | `0xD39A2F3E7FCAFF08` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedWaypointOverrideSpeed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD39A2F3E7FCAFF08, ped)
```


---

## GET_PED_WAYPOINT_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_WAYPOINT_PROGRESS` |
| Hash | `0x2720AAA75001E094` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedWaypointProgress(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2720AAA75001E094, ped)
```


---

## GET_PROP_FOR_SCENARIO_POINT

**Description:** Old name: _GET_SCENARIO_POINT_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `GET_PROP_FOR_SCENARIO_POINT` |
| Hash | `0x295514F198EFD0CA` |
| Return Type | `Entity` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `scenarioPoint` (int), `name` (char*) |

### Parameters

- **`scenarioPoint`** (`int`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPropForScenarioPoint(scenarioPoint, name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x295514F198EFD0CA, scenarioPoint, name)
```


---

## GET_RANSACK_SCENARIO_POINT_PED_IS_USING

| Property | Value |
|----------|-------|
| Native Name | `GET_RANSACK_SCENARIO_POINT_PED_IS_USING` |
| Hash | `0xD04241BBF6D03A5E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetRansackScenarioPointPedIsUsing(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD04241BBF6D03A5E, ped)
```


---

## GET_SCENARIO_POINTS_IN_AREA

**Description:** Note: scenariosInRadius is an array, and its size and values should be aligned to 8 bytes.

| Property | Value |
|----------|-------|
| Native Name | `GET_SCENARIO_POINTS_IN_AREA` |
| Hash | `0x345EC3B7EBDE1CB5` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `posX` (float), `posY` (float), `posZ` (float), `radius` (float), `scenariosInRadius` (Any), `size` (int) |

### Parameters

- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`radius`** (`float`)
- **`scenariosInRadius`** (`Any`)
- **`size`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetScenarioPointsInArea(posX, posY, posZ, radius, scenariosInRadius, size)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x345EC3B7EBDE1CB5, posX, posY, posZ, radius, scenariosInRadius, size)
```


---

## GET_SCRIPTED_COVER_POINT_COORDS

| Property | Value |
|----------|-------|
| Native Name | `GET_SCRIPTED_COVER_POINT_COORDS` |
| Hash | `0x594A1028FC2A3E85` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `coverpoint` (ScrHandle) |

### Parameters

- **`coverpoint`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
local result = GetScriptedCoverPointCoords(coverpoint)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x594A1028FC2A3E85, coverpoint)
```


---

## GET_SCRIPT_TASK_STATUS

**Description:** Gets the status of a script-assigned task, and returns an int between 0-8
taskHash: https://alloc8or.re/rdr3/doc/enums/eScriptTaskHash.txt 

WAITING_TO_START_TASK = 0,
PERFORMING_TASK
DORMANT_TASK
VACANT_STAGE
GROUP_TASK_STAGE
ATTRACTOR_SCRIPT_TASK_STAGE
SECONDARY_TASK_STAGE
TASK_NOT_FOUND
FINISHED_TASK

| Property | Value |
|----------|-------|
| Native Name | `GET_SCRIPT_TASK_STATUS` |
| Hash | `0x77F1BEB8863288D5` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `taskHash` (Hash), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`taskHash`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetScriptTaskStatus(ped, taskHash, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x77F1BEB8863288D5, ped, taskHash, p2)
```


---

## GET_SEQUENCE_PROGRESS

**Description:** returned values:
0 to 7 = task that's currently in progress, 0 meaning the first one.
-1 no task sequence in progress.

| Property | Value |
|----------|-------|
| Native Name | `GET_SEQUENCE_PROGRESS` |
| Hash | `0x00A9010CFE1E3533` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetSequenceProgress(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x00A9010CFE1E3533, ped)
```


---

## GET_TASK_MOVE_NETWORK_EVENT

| Property | Value |
|----------|-------|
| Native Name | `GET_TASK_MOVE_NETWORK_EVENT` |
| Hash | `0xB4F47213DF45A64C` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `eventName` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`eventName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetTaskMoveNetworkEvent(ped, eventName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB4F47213DF45A64C, ped, eventName)
```


---

## GET_TASK_MOVE_NETWORK_STATE

| Property | Value |
|----------|-------|
| Native Name | `GET_TASK_MOVE_NETWORK_STATE` |
| Hash | `0x717E4D1F2048376D` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetTaskMoveNetworkState(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x717E4D1F2048376D, ped)
```


---

## GET_VEHICLE_WAYPOINT_PLAYBACK_OVERRIDE_SPEED

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_WAYPOINT_PLAYBACK_OVERRIDE_SPEED` |
| Hash | `0x3DC971EB22F73447` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleWaypointPlaybackOverrideSpeed(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3DC971EB22F73447, p0)
```


---

*End of TASK natives part 1*
