# PED Natives - Part 5 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## PED_COWER_MOVE_TO_POINT

| Property | Value |
|----------|-------|
| Native Name | `PED_COWER_MOVE_TO_POINT` |
| Hash | `0x1E4C940233FC0C6F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float), `p3` (float), `ped2` (Ped), `p5` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`ped2`** (`Ped`)
- **`p5`** (`float`)

### Usage

**Lua (Direct):**
```lua
PedCowerMoveToPoint(ped, p1, p2, p3, ped2, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1E4C940233FC0C6F, ped, p1, p2, p3, ped2, p5)
```


---

## REGISTER_HATED_TARGETS_AROUND_PED

**Description:** Based on TASK_COMBAT_HATED_TARGETS_AROUND_PED, the parameters are likely similar (PedHandle, and area to attack in).

| Property | Value |
|----------|-------|
| Native Name | `REGISTER_HATED_TARGETS_AROUND_PED` |
| Hash | `0x9222F300BF8354FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `radius` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
RegisterHatedTargetsAroundPed(ped, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9222F300BF8354FE, ped, radius)
```


---

## REGISTER_TARGET

| Property | Value |
|----------|-------|
| Native Name | `REGISTER_TARGET` |
| Hash | `0x2F25D9AEFA34FBA2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RegisterTarget(ped, targetPed, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2F25D9AEFA34FBA2, ped, targetPed, p2)
```


---

## RELEASE_PED_VISIBILITY_TRACKING

| Property | Value |
|----------|-------|
| Native Name | `RELEASE_PED_VISIBILITY_TRACKING` |
| Hash | `0x3088634CF8C819CF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ReleasePedVisibilityTracking(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3088634CF8C819CF, ped)
```


---

## REMOVE_GROUP

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_GROUP` |
| Hash | `0x8EB2F69076AF7053` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int) |

### Parameters

- **`groupId`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemoveGroup(groupId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8EB2F69076AF7053, groupId)
```


---

## REMOVE_PED_DEFENSIVE_AREA

**Description:** Ped will no longer get angry when you stay near him.

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_PED_DEFENSIVE_AREA` |
| Hash | `0x74D4E028107450A9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemovePedDefensiveArea(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74D4E028107450A9, ped, toggle)
```


---

## REMOVE_PED_FROM_GROUP

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_PED_FROM_GROUP` |
| Hash | `0xED74007FFB146BC2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
RemovePedFromGroup(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xED74007FFB146BC2, ped)
```


---

## REMOVE_RELATIONSHIP_GROUP

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_RELATIONSHIP_GROUP` |
| Hash | `0xB6BA2444AB393DA2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupHash` (Hash) |

### Parameters

- **`groupHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveRelationshipGroup(groupHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB6BA2444AB393DA2, groupHash)
```


---

## REMOVE_SCENARIO_BLOCKING_AREA

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_SCENARIO_BLOCKING_AREA` |
| Hash | `0x31D16B74C6E29D66` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (BOOL) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemoveScenarioBlockingArea(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x31D16B74C6E29D66, p0, p1)
```


---

## REMOVE_SCENARIO_BLOCKING_AREAS

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_SCENARIO_BLOCKING_AREAS` |
| Hash | `0xD37401D78A929A49` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
RemoveScenarioBlockingAreas()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD37401D78A929A49, )
```


---

## REMOVE_SHOP_ITEM_FROM_PED_BY_CATEGORY

**Description:** Params: p2, p3 usually 0 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_SHOP_ITEM_FROM_PED_BY_CATEGORY` |
| Hash | `0xDF631E4BCE1B1FC4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `componentCategory` (Hash), `p2` (int), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`componentCategory`** (`Hash`)
- **`p2`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemoveShopItemFromPedByCategory(ped, componentCategory, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF631E4BCE1B1FC4, ped, componentCategory, p2, p3)
```


---

## REMOVE_TAG_FROM_META_PED

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_TAG_FROM_META_PED` |
| Hash | `0xD710A5007C2AC539` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `component` (Hash), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`component`** (`Hash`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemoveTagFromMetaPed(ped, component, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD710A5007C2AC539, ped, component, p2)
```


---

## REQUEST_PED_USE_SMALL_BBOX_VISIBILITY_TRACKING

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_PED_USE_SMALL_BBOX_VISIBILITY_TRACKING` |
| Hash | `0x75BA1CB3B7D40CAF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RequestPedUseSmallBboxVisibilityTracking(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75BA1CB3B7D40CAF, ped, p1)
```


---

## REQUEST_PED_VEHICLE_VISIBILITY_TRACKING

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_PED_VEHICLE_VISIBILITY_TRACKING` |
| Hash | `0x2BC338A7B21F4608` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RequestPedVehicleVisibilityTracking(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2BC338A7B21F4608, ped, p1)
```


---

## REQUEST_PED_VISIBILITY_TRACKING

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_PED_VISIBILITY_TRACKING` |
| Hash | `0x7D7A2E43E74E2EB8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
RequestPedVisibilityTracking(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7D7A2E43E74E2EB8, ped)
```


---

## RESET_AI_WEAPON_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `RESET_AI_WEAPON_DAMAGE_MODIFIER` |
| Hash | `0xEA16670E7BA4743C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetAiWeaponDamageModifier()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEA16670E7BA4743C, )
```


---

## RESET_GROUP_FORMATION_DEFAULT_SPACING

| Property | Value |
|----------|-------|
| Native Name | `RESET_GROUP_FORMATION_DEFAULT_SPACING` |
| Hash | `0x63DAB4CCB3273205` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int) |

### Parameters

- **`groupId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ResetGroupFormationDefaultSpacing(groupId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x63DAB4CCB3273205, groupId)
```


---

## RESET_HORSE_AVOIDANCE_LEVEL_TO_DEFAULT

| Property | Value |
|----------|-------|
| Native Name | `RESET_HORSE_AVOIDANCE_LEVEL_TO_DEFAULT` |
| Hash | `0x2A5AFD2B8381A6E1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `horse` (Ped) |

### Parameters

- **`horse`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ResetHorseAvoidanceLevelToDefault(horse)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2A5AFD2B8381A6E1, horse)
```


---

## RESET_PED_IN_VEHICLE_CONTEXT

| Property | Value |
|----------|-------|
| Native Name | `RESET_PED_IN_VEHICLE_CONTEXT` |
| Hash | `0x22EF8FF8778030EB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ResetPedInVehicleContext(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x22EF8FF8778030EB, ped)
```


---

## RESET_PED_LAST_VEHICLE

**Description:** Resets the value for the last vehicle driven by the Ped.

| Property | Value |
|----------|-------|
| Native Name | `RESET_PED_LAST_VEHICLE` |
| Hash | `0xBB8DE8CF6A8DD8BB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ResetPedLastVehicle(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB8DE8CF6A8DD8BB, ped)
```


---

## RESET_PED_RAGDOLL_TIMER

| Property | Value |
|----------|-------|
| Native Name | `RESET_PED_RAGDOLL_TIMER` |
| Hash | `0x9FA4664CF62E47E8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ResetPedRagdollTimer(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9FA4664CF62E47E8, ped)
```


---

## RESET_PED_WEAPON_MOVEMENT_CLIPSET

| Property | Value |
|----------|-------|
| Native Name | `RESET_PED_WEAPON_MOVEMENT_CLIPSET` |
| Hash | `0x97B0DB5B4AA74E77` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ResetPedWeaponMovementClipset(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x97B0DB5B4AA74E77, ped)
```


---

## RESURRECT_PED

**Description:** This function will simply bring the dead ped back to life.

Before calling this function, you may want to declare the position, where your Resurrected ped to be spawn at because theres a chance the ped will fall through the map

Also, disabling any assigned task immediately helped in the number of scenarios, where If you want peds to perform certain decided tasks.

| Property | Value |
|----------|-------|
| Native Name | `RESURRECT_PED` |
| Hash | `0x71BC8E838B9C6035` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ResurrectPed(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x71BC8E838B9C6035, ped)
```


---

## REVIVE_INJURED_PED

| Property | Value |
|----------|-------|
| Native Name | `REVIVE_INJURED_PED` |
| Hash | `0x8D8ACD8388CD99CE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ReviveInjuredPed(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8D8ACD8388CD99CE, ped)
```


---

## SET_AI_MELEE_WEAPON_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_AI_MELEE_WEAPON_DAMAGE_MODIFIER` |
| Hash | `0x66460DEDDD417254` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `modifier` (float) |

### Parameters

- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAiMeleeWeaponDamageModifier(modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66460DEDDD417254, modifier)
```


---

## SET_AI_WEAPON_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_AI_WEAPON_DAMAGE_MODIFIER` |
| Hash | `0x1B1E2A40A65B8521` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `value` (float) |

### Parameters

- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAiWeaponDamageModifier(value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1B1E2A40A65B8521, value)
```


---

## SET_BLOCKING_OF_NON_TEMPORARY_EVENTS

| Property | Value |
|----------|-------|
| Native Name | `SET_BLOCKING_OF_NON_TEMPORARY_EVENTS` |
| Hash | `0x9F8AA94D6D97DBF4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetBlockingOfNonTemporaryEvents(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9F8AA94D6D97DBF4, ped, toggle)
```


---

## SET_BLOCKING_OF_NON_TEMPORARY_EVENTS_FOR_AMBIENT_PEDS_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_BLOCKING_OF_NON_TEMPORARY_EVENTS_FOR_AMBIENT_PEDS_THIS_FRAME` |
| Hash | `0x9911F4A24485F653` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetBlockingOfNonTemporaryEventsForAmbientPedsThisFrame(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9911F4A24485F653, p0)
```


---

## SET_COMBAT_FLOAT

**Description:** combatType can be between 0-14. See GET_COMBAT_FLOAT below for a list of possible parameters.
https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_FLOATS 
https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eCombatAttributeFloats

| Property | Value |
|----------|-------|
| Native Name | `SET_COMBAT_FLOAT` |
| Hash | `0xFF41B4B141ED981C` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `combatType` (int), `newValue` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`combatType`** (`int`)
- **`newValue`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCombatFloat(ped, combatType, newValue)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFF41B4B141ED981C, ped, combatType, newValue)
```


---

## SET_CREATE_RANDOM_COPS

| Property | Value |
|----------|-------|
| Native Name | `SET_CREATE_RANDOM_COPS` |
| Hash | `0x102E68B2024D536D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCreateRandomCops(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x102E68B2024D536D, toggle)
```


---

## SET_ENABLE_BOUND_ANKLES

| Property | Value |
|----------|-------|
| Native Name | `SET_ENABLE_BOUND_ANKLES` |
| Hash | `0xC52E0F855C58FC2E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEnableBoundAnkles(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC52E0F855C58FC2E, ped, toggle)
```


---

## SET_ENABLE_HANDCUFFS

**Description:** Ped can not pull out a weapon when true

| Property | Value |
|----------|-------|
| Native Name | `SET_ENABLE_HANDCUFFS` |
| Hash | `0xDF1AF8B5D56542FA` |
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
SetEnableHandcuffs(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF1AF8B5D56542FA, ped, p1, p2)
```


---

## SET_FACIAL_IDLE_ANIM_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `SET_FACIAL_IDLE_ANIM_OVERRIDE` |
| Hash | `0xFFC24B988B938B38` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `animName` (char*), `animDict` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`animName`** (`char*`)
- **`animDict`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetFacialIdleAnimOverride(ped, animName, animDict)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFFC24B988B938B38, ped, animName, animDict)
```


---

## SET_FORMATION_POSITIONS_TARGET_RADIUS

| Property | Value |
|----------|-------|
| Native Name | `SET_FORMATION_POSITIONS_TARGET_RADIUS` |
| Hash | `0x7CC7D3B7AF7FB71F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `groupId` (int), `radius` (float) |

### Parameters

- **`groupId`** (`int`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetFormationPositionsTargetRadius(groupId, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7CC7D3B7AF7FB71F, groupId, radius)
```


---

## SET_GROUP_FORMATION

**Description:** eFormationType

0: Default
1: Circle Around Leader
2: Alternative Circle Around Leader
3: Line, with Leader at center

| Property | Value |
|----------|-------|
| Native Name | `SET_GROUP_FORMATION` |
| Hash | `0xCE2F5FC3AF7E8C1E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `formationType` (int) |

### Parameters

- **`groupId`** (`int`)
- **`formationType`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetGroupFormation(groupId, formationType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE2F5FC3AF7E8C1E, groupId, formationType)
```


---

## SET_GROUP_FORMATION_SPACING

| Property | Value |
|----------|-------|
| Native Name | `SET_GROUP_FORMATION_SPACING` |
| Hash | `0x1D9D45004C28C916` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `p1` (float), `p2` (float), `p3` (float) |

### Parameters

- **`groupId`** (`int`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGroupFormationSpacing(groupId, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1D9D45004C28C916, groupId, p1, p2, p3)
```


---

## SET_GROUP_SEPARATION_RANGE

**Description:** Sets the range at which members will automatically leave the group.

| Property | Value |
|----------|-------|
| Native Name | `SET_GROUP_SEPARATION_RANGE` |
| Hash | `0x4102C7858CFEE4E4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `separationRange` (float) |

### Parameters

- **`groupId`** (`int`)
- **`separationRange`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGroupSeparationRange(groupId, separationRange)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4102C7858CFEE4E4, groupId, separationRange)
```


---

## SET_HORSE_AVOIDANCE_LEVEL

**Description:** -1 - HORSE_ASSIST__NO_CHANGE
 0 - HORSE_ASSIST__MANUAL
 1 - HORSE_ASSIST__SEMIASSIST
 2 - HORSE_ASSIST__FULLASSIST

| Property | Value |
|----------|-------|
| Native Name | `SET_HORSE_AVOIDANCE_LEVEL` |
| Hash | `0xDDCF6FEA5D7ACC17` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `horse` (Ped), `avoidanceLevel` (int) |

### Parameters

- **`horse`** (`Ped`)
- **`avoidanceLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetHorseAvoidanceLevel(horse, avoidanceLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDDCF6FEA5D7ACC17, horse, avoidanceLevel)
```


---

## SET_IK_TARGET

| Property | Value |
|----------|-------|
| Native Name | `SET_IK_TARGET` |
| Hash | `0xC32779C16FCEECD9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ikIndex` (int), `entityLookAt` (Entity), `boneLookAt` (int), `offsetX` (float), `offsetY` (float), `offsetZ` (float), `p7` (Any), `blendInDuration` (int), `blendOutDuration` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`ikIndex`** (`int`)
- **`entityLookAt`** (`Entity`)
- **`boneLookAt`** (`int`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)
- **`p7`** (`Any`)
- **`blendInDuration`** (`int`)
- **`blendOutDuration`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetIkTarget(ped, ikIndex, entityLookAt, boneLookAt, offsetX, offsetY, offsetZ, p7, blendInDuration, blendOutDuration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC32779C16FCEECD9, ped, ikIndex, entityLookAt, boneLookAt, offsetX, offsetY, offsetZ, p7, blendInDuration, blendOutDuration)
```


---

## SET_LOOTING_FLAG

**Description:** https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CLootingFlags__Flags
https://github.com/femga/rdr3_discoveries/tree/master/AI/LOOTING_FLAGS

lootFlag:
enum eLootFlag
{
	LOOT_FLAG_IS_CRITICAL_LOOT_TARGET = 7,
	LOOT_FLAG_IGNORE_WATER_CHECKS = 8,
	LOOT_FLAG_ANIMAL_FLAGGED_FOR_TAGGING = 23,
};

| Property | Value |
|----------|-------|
| Native Name | `SET_LOOTING_FLAG` |
| Hash | `0x6569F31A01B4C097` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `lootFlag` (int), `enabled` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`lootFlag`** (`int`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetLootingFlag(ped, lootFlag, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6569F31A01B4C097, ped, lootFlag, enabled)
```


---

## SET_PAUSE_PED_WRITHE_BLEEDOUT

| Property | Value |
|----------|-------|
| Native Name | `SET_PAUSE_PED_WRITHE_BLEEDOUT` |
| Hash | `0x925A160133003AC6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPausePedWritheBleedout(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x925A160133003AC6, ped, toggle)
```


---

## SET_PED_ACCURACY

**Description:** accuracy = 0-100, 100 being perfectly accurate

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_ACCURACY` |
| Hash | `0x7AEFB85C1D49DEB6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `accuracy` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`accuracy`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedAccuracy(ped, accuracy)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7AEFB85C1D49DEB6, ped, accuracy)
```


---

## SET_PED_AS_COP

**Description:** Turns the desired ped into a cop. If you use this on the player ped, you will become almost invisible to cops dispatched for you. You will also report your own crimes, get a generic cop voice, get a cop-vision-cone on the radar, and you will be unable to shoot at other cops. Toggling ped as "false" has no effect; you must change p0's ped model to disable the effect.
toggle = bSetRelGroup

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_AS_COP` |
| Hash | `0xBB03C38DD3FB7FFD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedAsCop(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB03C38DD3FB7FFD, ped, toggle)
```


---

## SET_PED_AS_GROUP_LEADER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_AS_GROUP_LEADER` |
| Hash | `0x2A7819605465FBCE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `groupId` (int), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`groupId`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedAsGroupLeader(ped, groupId, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2A7819605465FBCE, ped, groupId, p2)
```


---

## SET_PED_AS_GROUP_MEMBER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_AS_GROUP_MEMBER` |
| Hash | `0x9F3480FE65DB31B5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `groupId` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`groupId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedAsGroupMember(ped, groupId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9F3480FE65DB31B5, ped, groupId)
```


---

## SET_PED_CAN_ARM_IK

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_ARM_IK` |
| Hash | `0x6C3B4D6D13B4C841` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanArmIk(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C3B4D6D13B4C841, ped, toggle)
```


---

## SET_PED_CAN_BE_INCAPACITATED

**Description:** When set on a player ped, its just like when you die in RDO

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_BE_INCAPACITATED` |
| Hash | `0x5240864E847C691C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanBeIncapacitated(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5240864E847C691C, ped, toggle)
```


---

## SET_PED_CAN_BE_KNOCKED_OFF_VEHICLE

**Description:** state:
enum eKnockOffVehicle
{
	KNOCKOFFVEHICLE_DEFAULT,
	KNOCKOFFVEHICLE_NEVER,
	KNOCKOFFVEHICLE_EASY,
	KNOCKOFFVEHICLE_HARD
};

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_BE_KNOCKED_OFF_VEHICLE` |
| Hash | `0x7A6535691B477C48` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `state` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`state`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedCanBeKnockedOffVehicle(ped, state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7A6535691B477C48, ped, state)
```


---

## SET_PED_CAN_BE_TARGETTED

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_BE_TARGETTED` |
| Hash | `0x63F58F7C80513AAD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanBeTargetted(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x63F58F7C80513AAD, ped, toggle)
```


---

## SET_PED_CAN_BE_TARGETTED_BY_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_BE_TARGETTED_BY_PLAYER` |
| Hash | `0x66B57B72E0836A76` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `player` (Player), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanBeTargettedByPlayer(ped, player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66B57B72E0836A76, ped, player, toggle)
```


---

*End of PED natives part 5*
