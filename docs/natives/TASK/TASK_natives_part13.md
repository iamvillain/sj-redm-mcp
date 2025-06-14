# TASK Natives - Part 13 of 13

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TASK  
**Natives in this file:** 40  
**Total natives in namespace:** 640  
**Generated from:** RDR3natives JSON data

---

## _SET_SCENARIO_POINT_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_POINT_ACTIVE` |
| Hash | `0xEEE4829304F93EEE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scenario` (int), `active` (BOOL) |

### Parameters

- **`scenario`** (`int`)
- **`active`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScenarioPointActive(scenario, active)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEEE4829304F93EEE, scenario, active)
```


---

## _SET_SCENARIO_POINT_COORDS

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_POINT_COORDS` |
| Hash | `0x2056AB38DF06825C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scenario` (int), `xPos` (float), `yPos` (float), `zPos` (float), `p4` (BOOL) |

### Parameters

- **`scenario`** (`int`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScenarioPointCoords(scenario, xPos, yPos, zPos, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2056AB38DF06825C, scenario, xPos, yPos, zPos, p4)
```


---

## _SET_SCENARIO_POINT_FLAG

**Description:** flag: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CScenarioPointFlags__Flags

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_POINT_FLAG` |
| Hash | `0x5AF19B6CC2115D34` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scenario` (int), `flag` (int), `value` (BOOL) |

### Parameters

- **`scenario`** (`int`)
- **`flag`** (`int`)
- **`value`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScenarioPointFlag(scenario, flag, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5AF19B6CC2115D34, scenario, flag, value)
```


---

## _SET_SCENARIO_POINT_HEADING

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_POINT_HEADING` |
| Hash | `0xD3A0DA8F91612C6E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scenario` (int), `heading` (float), `p2` (BOOL) |

### Parameters

- **`scenario`** (`int`)
- **`heading`** (`float`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScenarioPointHeading(scenario, heading, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD3A0DA8F91612C6E, scenario, heading, p2)
```


---

## _SET_SCENARIO_POINT_RADIUS

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_POINT_RADIUS` |
| Hash | `0xC47D9080A9A8856A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scenario` (int), `radius` (float) |

### Parameters

- **`scenario`** (`int`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetScenarioPointRadius(scenario, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC47D9080A9A8856A, scenario, radius)
```


---

## _SET_SCENARIO_TYPE_ENABLED_HASH

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_TYPE_ENABLED_HASH` |
| Hash | `0xD00E50E673802D71` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scenarioType` (Hash), `toggle` (BOOL) |

### Parameters

- **`scenarioType`** (`Hash`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScenarioTypeEnabledHash(scenarioType, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD00E50E673802D71, scenarioType, toggle)
```


---

## _SET_TASK_FISHING

**Description:** Only used in R* Scripts fishing_core and av_fishing_river

| Property | Value |
|----------|-------|
| Native Name | `_SET_TASK_FISHING` |
| Hash | `0xF3735ACD11ACD501` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = SetTaskFishing(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF3735ACD11ACD501, ped, p1)
```


---

## _SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT_2

| Property | Value |
|----------|-------|
| Native Name | `_SET_TASK_MOVE_NETWORK_SIGNAL_FLOAT_2` |
| Hash | `0x099D4A855D53B03B` |
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
SetTaskMoveNetworkSignalFloat2(ped, signalName, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x099D4A855D53B03B, ped, signalName, value)
```


---

## _SET_TASK_MOVE_NETWORK_SIGNAL_VECTOR

| Property | Value |
|----------|-------|
| Native Name | `_SET_TASK_MOVE_NETWORK_SIGNAL_VECTOR` |
| Hash | `0x4662BFE01938D98D` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `signalName` (char*), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`signalName`** (`char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTaskMoveNetworkSignalVector(ped, signalName, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4662BFE01938D98D, ped, signalName, x, y, z)
```


---

## _TASK_ANIMAL_BLEED_OUT

| Property | Value |
|----------|-------|
| Native Name | `_TASK_ANIMAL_BLEED_OUT` |
| Hash | `0x30A768C30D385EC5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `killer` (Ped), `p2` (BOOL), `weaponHash` (Hash), `p4` (int), `p5` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`killer`** (`Ped`)
- **`p2`** (`BOOL`)
- **`weaponHash`** (`Hash`)
- **`p4`** (`int`)
- **`p5`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskAnimalBleedOut(ped, killer, p2, weaponHash, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x30A768C30D385EC5, ped, killer, p2, weaponHash, p4, p5)
```


---

## _TASK_BOARD_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_TASK_BOARD_VEHICLE` |
| Hash | `0xE53D17AD837CBF7C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskBoardVehicle(ped, vehicle, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE53D17AD837CBF7C, ped, vehicle, p2, p3, p4, p5)
```


---

## _TASK_BOARD_VEHICLE_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_BOARD_VEHICLE_2` |
| Hash | `0xE41A09C8DDFF7AA4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (float), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`float`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskBoardVehicle2(ped, p1, p2, p3, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE41A09C8DDFF7AA4, ped, p1, p2, p3, flags)
```


---

## _TASK_CLIMB_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_CLIMB_2` |
| Hash | `0xDF1D85BCAF60D537` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `heading` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`heading`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskClimb2(ped, heading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF1D85BCAF60D537, ped, heading)
```


---

## _TASK_COMBAT_PED_AT_COORDS

**Description:** Coords: volume coords used in R* Script smuggler2
p4/p5 = 0 in R* Scripts previous name TASK_COMBAT_PED_3

| Property | Value |
|----------|-------|
| Native Name | `_TASK_COMBAT_PED_AT_COORDS` |
| Hash | `0xC624414FA748B9BA` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `p4` (int), `p5` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p4`** (`int`)
- **`p5`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskCombatPedAtCoords(ped, x, y, z, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC624414FA748B9BA, ped, x, y, z, p4, p5)
```


---

## _TASK_CUT_FREE_HOGTIED_TARGET_PED

| Property | Value |
|----------|-------|
| Native Name | `_TASK_CUT_FREE_HOGTIED_TARGET_PED` |
| Hash | `0x81D16C4FF3A77ADF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskCutFreeHogtiedTargetPed(ped, targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x81D16C4FF3A77ADF, ped, targetPed)
```


---

## _TASK_CUT_FREE_HOGTIED_TARGET_PED_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_CUT_FREE_HOGTIED_TARGET_PED_2` |
| Hash | `0x525421A507216084` |
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
TaskCutFreeHogtiedTargetPed2(ped, targetPed, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x525421A507216084, ped, targetPed, p2)
```


---

## _TASK_DISEMBARK_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_TASK_DISEMBARK_VEHICLE` |
| Hash | `0xA7C6854BB5A4192A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `vehicle` (Vehicle), `p2` (int), `p3` (Any), `p4` (float), `p5` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`vehicle`** (`Vehicle`)
- **`p2`** (`int`)
- **`p3`** (`Any`)
- **`p4`** (`float`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskDisembarkVehicle(p0, vehicle, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA7C6854BB5A4192A, p0, vehicle, p2, p3, p4, p5)
```


---

## _TASK_EMOTE_OUTRO

| Property | Value |
|----------|-------|
| Native Name | `_TASK_EMOTE_OUTRO` |
| Hash | `0xBDFEEB7600BCD938` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskEmoteOutro(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBDFEEB7600BCD938, ped)
```


---

## _TASK_EQUIP_HAT

**Description:** _A*

| Property | Value |
|----------|-------|
| Native Name | `_TASK_EQUIP_HAT` |
| Hash | `0xAA0AF6025160243A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hatObject` (Object), `ped` (Ped) |

### Parameters

- **`hatObject`** (`Object`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskEquipHat(hatObject, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAA0AF6025160243A, hatObject, ped)
```


---

## _TASK_FLEE_FROM_COORD

**Description:** fleeType: see TASK_FLEE_COORD

| Property | Value |
|----------|-------|
| Native Name | `_TASK_FLEE_FROM_COORD` |
| Hash | `0x6879FF208ED87F2A` |
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
TaskFleeFromCoord(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6879FF208ED87F2A, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11)
```


---

## _TASK_FLEE_FROM_PED

**Description:** fleeType: see TASK_FLEE_COORD

| Property | Value |
|----------|-------|
| Native Name | `_TASK_FLEE_FROM_PED` |
| Hash | `0x7B74D8EEDE9B5727` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `fleeFromTarget` (Ped), `x` (float), `y` (float), `z` (float), `distance` (float), `p6` (int), `p7` (int), `p8` (float), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`fleeFromTarget`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`distance`** (`float`)
- **`p6`** (`int`)
- **`p7`** (`int`)
- **`p8`** (`float`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskFleeFromPed(ped, fleeFromTarget, x, y, z, distance, p6, p7, p8, targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7B74D8EEDE9B5727, ped, fleeFromTarget, x, y, z, distance, p6, p7, p8, targetPed)
```


---

## _TASK_GUARD_ASSIGNED_DEFENSIVE_AREA_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_GUARD_ASSIGNED_DEFENSIVE_AREA_2` |
| Hash | `0x1FC9B33976BACD6C` |
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
TaskGuardAssignedDefensiveArea2(ped, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1FC9B33976BACD6C, ped, p1, p2, p3, p4, p5, p6, p7)
```


---

## _TASK_INTIMIDATED

| Property | Value |
|----------|-------|
| Native Name | `_TASK_INTIMIDATED` |
| Hash | `0x648B75D44930D6BD` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `p0` (Any), `ped` (Ped), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`ped`** (`Ped`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = TaskIntimidated(p0, ped, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x648B75D44930D6BD, p0, ped, p2, p3, p4)
```


---

## _TASK_INTIMIDATED_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_INTIMIDATED_2` |
| Hash | `0x933ACC1A1771A288` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `victim` (Ped), `attacker` (Ped), `p2` (int), `p3` (BOOL), `p4` (BOOL), `everyFrame` (BOOL), `p6` (BOOL), `p7` (BOOL), `flag` (int) |

### Parameters

- **`victim`** (`Ped`)
- **`attacker`** (`Ped`)
- **`p2`** (`int`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)
- **`everyFrame`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = TaskIntimidated2(victim, attacker, p2, p3, p4, everyFrame, p6, p7, flag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x933ACC1A1771A288, victim, attacker, p2, p3, p4, everyFrame, p6, p7, flag)
```


---

## _TASK_ITEM_INTERACTION_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_ITEM_INTERACTION_2` |
| Hash | `0x72F52AA2D2B172CC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `propNameGxt` (Hash), `prop` (Object), `propId` (Hash), `itemInteractionState` (Hash), `p5` (int), `p6` (Any), `p7` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`propNameGxt`** (`Hash`)
- **`prop`** (`Object`)
- **`propId`** (`Hash`)
- **`itemInteractionState`** (`Hash`)
- **`p5`** (`int`)
- **`p6`** (`Any`)
- **`p7`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskItemInteraction2(ped, propNameGxt, prop, propId, itemInteractionState, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x72F52AA2D2B172CC, ped, propNameGxt, prop, propId, itemInteractionState, p5, p6, p7)
```


---

## _TASK_ITEM_INTERACTION_3

**Description:** Params: p3, p4, p5, p6: 0, 0, 0, -1.0f in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_TASK_ITEM_INTERACTION_3` |
| Hash | `0xD61D5E1AD9876DEB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `item` (Hash), `guid` (Any*), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`item`** (`Hash`)
- **`guid`** (`Any*`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskItemInteraction3(ped, item, guid, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD61D5E1AD9876DEB, ped, item, guid, p3, p4, p5, p6)
```


---

## _TASK_JUMP_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_JUMP_2` |
| Hash | `0x91083103137D7254` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `entity` (Entity) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
TaskJump2(ped, x, y, z, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x91083103137D7254, ped, x, y, z, entity)
```


---

## _TASK_PATROL_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_PATROL_2` |
| Hash | `0x964B06C88E4C86DB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any) |

### Parameters

- **`p0`** (`Any`)
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
TaskPatrol2(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x964B06C88E4C86DB, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## TASK_PERFORM_SEQUENCE_LOCALLY

**Description:** Old name: _TASK_PERFORM_SEQUENCE_2

| Property | Value |
|----------|-------|
| Native Name | `TASK_PERFORM_SEQUENCE_LOCALLY` |
| Hash | `0x4FC0AF869D6E309D` |
| Return Type | `void` |
| API Set | `client` |
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
TaskPerformSequenceLocally(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4FC0AF869D6E309D, p0, p1, p2, p3)
```


---

## _TASK_PLAY_EMOTE

**Description:** Similar to 0xB31A277C1AC7B7FF but checks if the ped's inventory contains the specified emote kit.

| Property | Value |
|----------|-------|
| Native Name | `_TASK_PLAY_EMOTE` |
| Hash | `0x884E3436CC1F41DD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `emoteType` (int), `playbackMode` (int), `emote` (Hash), `isSecondaryTask` (BOOL), `canBreakOut` (BOOL), `disableEarlyOutAnimTag` (BOOL), `ignoreInvalidMainTask` (BOOL), `destroyProps` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`emoteType`** (`int`)
- **`playbackMode`** (`int`)
- **`emote`** (`Hash`)
- **`isSecondaryTask`** (`BOOL`)
- **`canBreakOut`** (`BOOL`)
- **`disableEarlyOutAnimTag`** (`BOOL`)
- **`ignoreInvalidMainTask`** (`BOOL`)
- **`destroyProps`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskPlayEmote(ped, emoteType, playbackMode, emote, isSecondaryTask, canBreakOut, disableEarlyOutAnimTag, ignoreInvalidMainTask, destroyProps)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x884E3436CC1F41DD, ped, emoteType, playbackMode, emote, isSecondaryTask, canBreakOut, disableEarlyOutAnimTag, ignoreInvalidMainTask, destroyProps)
```


---

## _TASK_PUT_PED_DIRECTLY_INTO_COVER_FROM_COORDS

| Property | Value |
|----------|-------|
| Native Name | `_TASK_PUT_PED_DIRECTLY_INTO_COVER_FROM_COORDS` |
| Hash | `0xDF8A5855B9F9A97B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `fromX` (float), `fromY` (float), `fromZ` (float), `timeout` (int), `p8` (Any), `p9` (Any), `p10` (Any), `p11` (Any), `p12` (Any), `p13` (Any), `p14` (Any), `p15` (Any), `p16` (Any), `p17` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`fromX`** (`float`)
- **`fromY`** (`float`)
- **`fromZ`** (`float`)
- **`timeout`** (`int`)
- **`p8`** (`Any`)
- **`p9`** (`Any`)
- **`p10`** (`Any`)
- **`p11`** (`Any`)
- **`p12`** (`Any`)
- **`p13`** (`Any`)
- **`p14`** (`Any`)
- **`p15`** (`Any`)
- **`p16`** (`Any`)
- **`p17`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskPutPedDirectlyIntoCoverFromCoords(ped, x, y, z, fromX, fromY, fromZ, timeout, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF8A5855B9F9A97B, ped, x, y, z, fromX, fromY, fromZ, timeout, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17)
```


---

## _TASK_START_SCENARIO_IN_PLACE_2

**Description:** Takes scenario point handle instead of hash

| Property | Value |
|----------|-------|
| Native Name | `_TASK_START_SCENARIO_IN_PLACE_2` |
| Hash | `0xA917E39F2CEFD215` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (char*), `p3` (int), `p4` (BOOL), `p5` (float), `p6` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`char*`)
- **`p3`** (`int`)
- **`p4`** (`BOOL`)
- **`p5`** (`float`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskStartScenarioInPlace2(ped, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA917E39F2CEFD215, ped, p1, p2, p3, p4, p5, p6)
```


---

## _TASK_THROW_PROJECTILE_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_THROW_PROJECTILE_2` |
| Hash | `0x7282356DFF6B5A51` |
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
TaskThrowProjectile2(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7282356DFF6B5A51, p0, p1, p2, p3)
```


---

## _TASK_USE_NEAREST_SCENARIO_TO_COORD

| Property | Value |
|----------|-------|
| Native Name | `_TASK_USE_NEAREST_SCENARIO_TO_COORD` |
| Hash | `0x322BFDEA666E2B0E` |
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
TaskUseNearestScenarioToCoord(ped, x, y, z, distance, duration, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x322BFDEA666E2B0E, ped, x, y, z, distance, duration, p6, p7, p8, p9)
```


---

## _TASK_USE_SCENARIO_POINT_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_USE_SCENARIO_POINT_2` |
| Hash | `0x0F6641449DD86FBE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ped2` (Ped), `p2` (Any), `p3` (char*), `p4` (int), `p5` (Hash), `p6` (float), `p7` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`ped2`** (`Ped`)
- **`p2`** (`Any`)
- **`p3`** (`char*`)
- **`p4`** (`int`)
- **`p5`** (`Hash`)
- **`p6`** (`float`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskUseScenarioPoint2(ped, ped2, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0F6641449DD86FBE, ped, ped2, p2, p3, p4, p5, p6, p7)
```


---

## _TASK_VEHICLE_DRIVE_TO_COORD_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_VEHICLE_DRIVE_TO_COORD_2` |
| Hash | `0xF0108F01FB105DA2` |
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
TaskVehicleDriveToCoord2(ped, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF0108F01FB105DA2, ped, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## _TASK_VEHICLE_DRIVE_TO_DESTINATION_2

**Description:** Tasks vehicle towards owner

| Property | Value |
|----------|-------|
| Native Name | `_TASK_VEHICLE_DRIVE_TO_DESTINATION_2` |
| Hash | `0x391073B9D3CCE2BA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `x` (float), `y` (float), `z` (float), `speed` (float), `p5` (int), `p6` (int), `p7` (float), `p8` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`speed`** (`float`)
- **`p5`** (`int`)
- **`p6`** (`int`)
- **`p7`** (`float`)
- **`p8`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleDriveToDestination2(vehicle, x, y, z, speed, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x391073B9D3CCE2BA, vehicle, x, y, z, speed, p5, p6, p7, p8)
```


---

## _TASK_VEHICLE_DRIVE_TO_POINT_2

**Description:** Params: p4 = 3.f or 8.f, p5 = 0.25f, p6 = 0 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_TASK_VEHICLE_DRIVE_TO_POINT_2` |
| Hash | `0x6524A8981E8BE7C9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `x` (float), `y` (float), `z` (float), `p4` (float), `p5` (float), `p6` (Any) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleDriveToPoint2(vehicle, x, y, z, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6524A8981E8BE7C9, vehicle, x, y, z, p4, p5, p6)
```


---

## _TASK_VEHICLE_FLEE_ON_CLEANUP

**Description:** Vehicle Auto Drive (?)
p1/p2/p3: usually 1f, 1f, 0f or 0f, 0f, 0f
Speed: usually 8f
Types: 1148979456 (task with flee), 1148979587 (dismissing the vehicle)

| Property | Value |
|----------|-------|
| Native Name | `_TASK_VEHICLE_FLEE_ON_CLEANUP` |
| Hash | `0x55CD5FDDD4335C1E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (float), `p2` (float), `p3` (float), `speed` (float), `type` (Hash) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`speed`** (`float`)
- **`type`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TaskVehicleFleeOnCleanup(vehicle, p1, p2, p3, speed, type)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x55CD5FDDD4335C1E, vehicle, p1, p2, p3, speed, type)
```


---

## _TASK_VEHICLE_FOLLOW_WAYPOINT_RECORDING_2

| Property | Value |
|----------|-------|
| Native Name | `_TASK_VEHICLE_FOLLOW_WAYPOINT_RECORDING_2` |
| Hash | `0x041D17A9E221AE30` |
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
TaskVehicleFollowWaypointRecording2(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x041D17A9E221AE30, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

*End of TASK natives part 13*
