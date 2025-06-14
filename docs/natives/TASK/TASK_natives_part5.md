# TASK Natives - Part 5 of 13

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TASK  
**Natives in this file:** 50  
**Total natives in namespace:** 640  
**Generated from:** RDR3natives JSON data

---

## TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD` |
| Hash | `0xA55547801EB331FC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `goToLocationX` (float), `goToLocationY` (float), `goToLocationZ` (float), `focusLocationX` (float), `focusLocationY` (float), `focusLocationZ` (float), `speed` (float), `shootAtEnemies` (BOOL), `distanceToStopAt` (float), `noRoadsDistance` (float), `unkTrue` (BOOL), `unkFlag` (int), `aimingFlag` (int), `firingPattern` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`goToLocationX`** (`float`)
- **`goToLocationY`** (`float`)
- **`goToLocationZ`** (`float`)
- **`focusLocationX`** (`float`)
- **`focusLocationY`** (`float`)
- **`focusLocationZ`** (`float`)
- **`speed`** (`float`)
- **`shootAtEnemies`** (`BOOL`)
- **`distanceToStopAt`** (`float`)
- **`noRoadsDistance`** (`float`)
- **`unkTrue`** (`BOOL`)
- **`unkFlag`** (`int`)
- **`aimingFlag`** (`int`)
- **`firingPattern`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TaskGoToCoordAndAimAtHatedEntitiesNearCoord(ped, goToLocationX, goToLocationY, goToLocationZ, focusLocationX, focusLocationY, focusLocationZ, speed, shootAtEnemies, distanceToStopAt, noRoadsDistance, unkTrue, unkFlag, aimingFlag, firingPattern)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA55547801EB331FC, ped, goToLocationX, goToLocationY, goToLocationZ, focusLocationX, focusLocationY, focusLocationZ, speed, shootAtEnemies, distanceToStopAt, noRoadsDistance, unkTrue, unkFlag, aimingFlag, firingPattern)
```


---

## TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD_USING_COMBAT_STYLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD_USING_COMBAT_STYLE` |
| Hash | `0x87BD711FC31EA273` |
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
TaskGoToCoordAndAimAtHatedEntitiesNearCoordUsingCombatStyle(ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x87BD711FC31EA273, ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14)
```


---

## TASK_GO_TO_COORD_ANY_MEANS

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_COORD_ANY_MEANS` |
| Hash | `0x5BC448CB78FA3E88` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `speed` (float), `entity` (Entity), `p6` (BOOL), `walkingStyle` (int), `p8` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`speed`** (`float`)
- **`entity`** (`Entity`)
- **`p6`** (`BOOL`)
- **`walkingStyle`** (`int`)
- **`p8`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskGoToCoordAnyMeans(ped, x, y, z, speed, entity, p6, walkingStyle, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5BC448CB78FA3E88, ped, x, y, z, speed, entity, p6, walkingStyle, p8)
```


---

## TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS` |
| Hash | `0x1DD45F9ECFDB1BC9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `speed` (float), `p5` (Any), `p6` (BOOL), `walkingStyle` (int), `p8` (float), `p9` (Any), `p10` (Any), `p11` (Any), `p12` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`speed`** (`float`)
- **`p5`** (`Any`)
- **`p6`** (`BOOL`)
- **`walkingStyle`** (`int`)
- **`p8`** (`float`)
- **`p9`** (`Any`)
- **`p10`** (`Any`)
- **`p11`** (`Any`)
- **`p12`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskGoToCoordAnyMeansExtraParams(ped, x, y, z, speed, p5, p6, walkingStyle, p8, p9, p10, p11, p12)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1DD45F9ECFDB1BC9, ped, x, y, z, speed, p5, p6, walkingStyle, p8, p9, p10, p11, p12)
```


---

## TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS_WITH_CRUISE_SPEED

**Description:** This native allows to control the cruise speed of where you want the ped to go
3rd param might be the entity ped is in? like boat or wagon, 12th param might be the cruiseSpeed of the entity ped is in?
EXAMPLE: TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(PlayerPedId(), vector3(x, y, z), 3.0, entity, 1, 0, -1082130432, 0, 101004800, 520, 3.0, 1082130432, 0)

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS_WITH_CRUISE_SPEED` |
| Hash | `0xB8ECD61F531A7B02` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `gotoCoords` (Vector3*), `cruiseSpeed` (float), `entity` (Entity), `p4` (int), `p5` (int), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any), `p11` (Any), `cruiseSpeed_2` (float), `p13` (Any), `p14` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`gotoCoords`** (`Vector3*`)
- **`cruiseSpeed`** (`float`)
- **`entity`** (`Entity`)
- **`p4`** (`int`)
- **`p5`** (`int`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)
- **`p9`** (`Any`)
- **`p10`** (`Any`)
- **`p11`** (`Any`)
- **`cruiseSpeed_2`** (`float`)
- **`p13`** (`Any`)
- **`p14`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(ped, gotoCoords, cruiseSpeed, entity, p4, p5, p6, p7, p8, p9, p10, p11, cruiseSpeed_2, p13, p14)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB8ECD61F531A7B02, ped, gotoCoords, cruiseSpeed, entity, p4, p5, p6, p7, p8, p9, p10, p11, cruiseSpeed_2, p13, p14)
```


---

## TASK_GO_TO_COORD_WHILE_AIMING_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_COORD_WHILE_AIMING_AT_COORD` |
| Hash | `0x11315AB3385B8AC0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any), `p11` (Any), `p12` (Any), `p13` (Any), `p14` (Any), `p15` (Any) |

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
- **`p15`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskGoToCoordWhileAimingAtCoord(ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x11315AB3385B8AC0, ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15)
```


---

## TASK_GO_TO_COORD_WHILE_AIMING_AT_COORD_USING_COMBAT_STYLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_COORD_WHILE_AIMING_AT_COORD_USING_COMBAT_STYLE` |
| Hash | `0x639C0425A0B4E77E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any), `p11` (Any), `p12` (Any), `p13` (Any), `p14` (Any), `p15` (Any) |

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
- **`p15`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskGoToCoordWhileAimingAtCoordUsingCombatStyle(ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x639C0425A0B4E77E, ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15)
```


---

## TASK_GO_TO_COORD_WHILE_AIMING_AT_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_COORD_WHILE_AIMING_AT_ENTITY` |
| Hash | `0xB2A16444EAD9AE47` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped1` (Ped), `x` (float), `y` (float), `z` (float), `ped2` (Ped), `p5` (float), `p6` (Any), `p7` (float), `p8` (float), `p9` (Any), `p10` (Any), `p11` (Any), `firingPattern` (Hash), `p13` (int), `p14` (Any) |

### Parameters

- **`ped1`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`ped2`** (`Ped`)
- **`p5`** (`float`)
- **`p6`** (`Any`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`Any`)
- **`p10`** (`Any`)
- **`p11`** (`Any`)
- **`firingPattern`** (`Hash`)
- **`p13`** (`int`)
- **`p14`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskGoToCoordWhileAimingAtEntity(ped1, x, y, z, ped2, p5, p6, p7, p8, p9, p10, p11, firingPattern, p13, p14)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB2A16444EAD9AE47, ped1, x, y, z, ped2, p5, p6, p7, p8, p9, p10, p11, firingPattern, p13, p14)
```


---

## TASK_GO_TO_COORD_WHILE_AIMING_AT_ENTITY_USING_COMBAT_STYLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_COORD_WHILE_AIMING_AT_ENTITY_USING_COMBAT_STYLE` |
| Hash | `0x78426D0982D083C9` |
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
TaskGoToCoordWhileAimingAtEntityUsingCombatStyle(ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x78426D0982D083C9, ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14)
```


---

## TASK_GO_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_ENTITY` |
| Hash | `0x6A071245EB0D1882` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `target` (Entity), `duration` (int), `distance` (float), `speed` (float), `p5` (float), `p6` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`target`** (`Entity`)
- **`duration`** (`int`)
- **`distance`** (`float`)
- **`speed`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskGoToEntity(ped, target, duration, distance, speed, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A071245EB0D1882, ped, target, duration, distance, speed, p5, p6)
```


---

## TASK_GO_TO_ENTITY_WHILE_AIMING_AT_ENTITY

**Description:** shootatEntity:
If true, peds will shoot at Entity till it is dead.
If false, peds will just walk till they reach the entity and will cease shooting.

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_ENTITY_WHILE_AIMING_AT_ENTITY` |
| Hash | `0x97465886D35210E9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any) |

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

### Usage

**Lua (Direct):**
```lua
TaskGoToEntityWhileAimingAtEntity(ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x97465886D35210E9, ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## TASK_GO_TO_ENTITY_WHILE_AIMING_AT_ENTITY_USING_COMBAT_STYLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_ENTITY_WHILE_AIMING_AT_ENTITY_USING_COMBAT_STYLE` |
| Hash | `0xCEF0117C233026AD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any) |

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

### Usage

**Lua (Direct):**
```lua
TaskGoToEntityWhileAimingAtEntityUsingCombatStyle(ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCEF0117C233026AD, ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## TASK_GO_TO_WHISTLE

**Description:** enum eWhistleType
{
	WHISTLE_MAIN,
	WHISTLE_SECONDARY,
	WHISTLE_DOUBLE,
	WHISTLE_URGENT,
	WHISTLE_LONG
};

| Property | Value |
|----------|-------|
| Native Name | `TASK_GO_TO_WHISTLE` |
| Hash | `0xBAD6545608CECA6E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Ped), `whistleType` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Ped`)
- **`whistleType`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskGoToWhistle(ped, p1, whistleType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBAD6545608CECA6E, ped, p1, whistleType)
```


---

## TASK_GRAPPLE

**Description:** grappleStyle: AR_GRAPPLE_MOUNT_STANDING_FROM_FRONT, AR_GRAPPLE_MOUNT_STANDING_FROM_RIGHT, AR_GRAPPLE_MOUNT_STANDING_FROM_BACK, AR_GRAPPLE_MOUNT_STANDING_FROM_LEFT, AR_GRAPPLE_MOUNT_FROM_FRONT, AR_WOLF_EXECUTION_ENTER_FROM_BACK, AR_GRAPPLE_DRAG_FRONT_ON_ASS, AR_GRAPPLE_FRONT_FROM_LEFT_FAR, AR_BEAR_CHALLENGE_FRONT, AR_GRAPPLE_FRONT_FROM_FRONT, AR_GRAPPLE_MOUNT_FACEUP_FROM_FRONT

| Property | Value |
|----------|-------|
| Native Name | `TASK_GRAPPLE` |
| Hash | `0x779A2FFACEFAEA7B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `grappleStyle` (Hash), `p3` (int), `p4` (float), `p5` (int), `p6` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`grappleStyle`** (`Hash`)
- **`p3`** (`int`)
- **`p4`** (`float`)
- **`p5`** (`int`)
- **`p6`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = TaskGrapple(ped, targetPed, grappleStyle, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x779A2FFACEFAEA7B, ped, targetPed, grappleStyle, p3, p4, p5, p6)
```


---

## TASK_GUARD

| Property | Value |
|----------|-------|
| Native Name | `TASK_GUARD` |
| Hash | `0xB9FB242EACCAF30F` |
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
TaskGuard(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB9FB242EACCAF30F, ped, p1, p2)
```


---

## TASK_GUARD_ASSIGNED_DEFENSIVE_AREA

| Property | Value |
|----------|-------|
| Native Name | `TASK_GUARD_ASSIGNED_DEFENSIVE_AREA` |
| Hash | `0xD2A207EEBDF9889B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskGuardAssignedDefensiveArea(ped, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD2A207EEBDF9889B, ped, p1, p2, p3, p4, p5, p6)
```


---

## TASK_GUARD_CURRENT_POSITION

| Property | Value |
|----------|-------|
| Native Name | `TASK_GUARD_CURRENT_POSITION` |
| Hash | `0x4A58A47A72E3FCB4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskGuardCurrentPosition(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4A58A47A72E3FCB4, ped, p1, p2, p3)
```


---

## TASK_HANDS_UP

**Description:** flags: 0 = HANDS_UP_NOTHING; 1 = HANDS_UP_STRAIGHT_TO_LOOP

| Property | Value |
|----------|-------|
| Native Name | `TASK_HANDS_UP` |
| Hash | `0xF2EAB31979A7F910` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `duration` (int), `facingPed` (Ped), `timeToFacePed` (int), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`duration`** (`int`)
- **`facingPed`** (`Ped`)
- **`timeToFacePed`** (`int`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskHandsUp(ped, duration, facingPed, timeToFacePed, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF2EAB31979A7F910, ped, duration, facingPed, timeToFacePed, flags)
```


---

## TASK_HITCH_ANIMAL

| Property | Value |
|----------|-------|
| Native Name | `TASK_HITCH_ANIMAL` |
| Hash | `0x9030AD4B6207BFE8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `scenarioPoint` (int), `flag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`scenarioPoint`** (`int`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskHitchAnimal(ped, scenarioPoint, flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9030AD4B6207BFE8, ped, scenarioPoint, flag)
```


---

## TASK_HOGTIEABLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_HOGTIEABLE` |
| Hash | `0x6AFD8FE0D723328F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskHogtieable(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6AFD8FE0D723328F, ped)
```


---

## TASK_HOGTIE_TARGET_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_HOGTIE_TARGET_PED` |
| Hash | `0x27829AFD3E03AC1A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskHogtieTargetPed(ped, targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x27829AFD3E03AC1A, ped, targetPed)
```


---

## TASK_HORSE_ACTION

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_HORSE_ACTION
Params: p2, p3 are set to 0 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `TASK_HORSE_ACTION` |
| Hash | `0xA09CFD29100F06C3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `action` (int), `targetPed` (Ped), `p3` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`action`** (`int`)
- **`targetPed`** (`Ped`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskHorseAction(ped, action, targetPed, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA09CFD29100F06C3, ped, action, targetPed, p3)
```


---

## TASK_INVESTIGATE

| Property | Value |
|----------|-------|
| Native Name | `TASK_INVESTIGATE` |
| Hash | `0x5C8514540D27FBFB` |
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
TaskInvestigate(ped, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5C8514540D27FBFB, ped, p1, p2, p3, p4, p5)
```


---

## TASK_JUMP

| Property | Value |
|----------|-------|
| Native Name | `TASK_JUMP` |
| Hash | `0x0AE4086104E067B1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `unused` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`unused`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskJump(ped, unused)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0AE4086104E067B1, ped, unused)
```


---

## TASK_KNOCKED_OUT

| Property | Value |
|----------|-------|
| Native Name | `TASK_KNOCKED_OUT` |
| Hash | `0xF90427F00A495A28` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `permanently` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`permanently`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskKnockedOut(ped, p1, permanently)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF90427F00A495A28, ped, p1, permanently)
```


---

## TASK_KNOCKED_OUT_AND_HOGTIED

| Property | Value |
|----------|-------|
| Native Name | `TASK_KNOCKED_OUT_AND_HOGTIED` |
| Hash | `0x42AC6401ABB8C7E5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskKnockedOutAndHogtied(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x42AC6401ABB8C7E5, ped, p1, p2)
```


---

## TASK_LASSO_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_LASSO_PED` |
| Hash | `0xC716EB2BD16370A3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskLassoPed(ped, targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC716EB2BD16370A3, ped, targetPed)
```


---

## TASK_LEAD_AND_CONVERSE

| Property | Value |
|----------|-------|
| Native Name | `TASK_LEAD_AND_CONVERSE` |
| Hash | `0xAA19711D33C6708C` |
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
TaskLeadAndConverse(ped, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAA19711D33C6708C, ped, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## TASK_LEAD_HORSE

| Property | Value |
|----------|-------|
| Native Name | `TASK_LEAD_HORSE` |
| Hash | `0x9A7A4A54596FE09D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `horse` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`horse`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskLeadHorse(ped, horse)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9A7A4A54596FE09D, ped, horse)
```


---

## TASK_LEAVE_ANY_VEHICLE

**Description:** flags: See TASK_ENTER_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_LEAVE_ANY_VEHICLE` |
| Hash | `0x504D54DF3F6F2247` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `taskFlag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`taskFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskLeaveAnyVehicle(ped, p1, taskFlag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x504D54DF3F6F2247, ped, p1, taskFlag)
```


---

## TASK_LEAVE_VEHICLE

**Description:** flags: See TASK_ENTER_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `TASK_LEAVE_VEHICLE` |
| Hash | `0xD3DBCE61A490BE02` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `flags` (int), `unkPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`flags`** (`int`)
- **`unkPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskLeaveVehicle(ped, vehicle, flags, unkPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD3DBCE61A490BE02, ped, vehicle, flags, unkPed)
```


---

## TASK_LOOK_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_LOOK_AT_COORD` |
| Hash | `0x6FA46612594F7973` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `duration` (int), `flags` (int), `p6` (int), `p7` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`duration`** (`int`)
- **`flags`** (`int`)
- **`p6`** (`int`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskLookAtCoord(ped, x, y, z, duration, flags, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6FA46612594F7973, ped, x, y, z, duration, flags, p6, p7)
```


---

## TASK_LOOK_AT_ENTITY

**Description:** param3: duration in ms, use -1 to look forever
param4: using 2048 is fine
param5: using 3 is fine

| Property | Value |
|----------|-------|
| Native Name | `TASK_LOOK_AT_ENTITY` |
| Hash | `0x69F4BE8C8CC4796C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `lookAtTarget` (Entity), `duration` (int), `p3` (int), `p4` (int), `p5` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`lookAtTarget`** (`Entity`)
- **`duration`** (`int`)
- **`p3`** (`int`)
- **`p4`** (`int`)
- **`p5`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskLookAtEntity(ped, lookAtTarget, duration, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x69F4BE8C8CC4796C, ped, lookAtTarget, duration, p3, p4, p5)
```


---

## TASK_LOOT_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_LOOT_ENTITY` |
| Hash | `0x48FAE038401A2888` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
TaskLootEntity(ped, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x48FAE038401A2888, ped, entity)
```


---

## TASK_LOOT_NEAREST_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_LOOT_NEAREST_ENTITY` |
| Hash | `0xCF1501CBC4059412` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `p4` (int), `p5` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p4`** (`int`)
- **`p5`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskLootNearestEntity(ped, x, y, z, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCF1501CBC4059412, ped, x, y, z, p4, p5)
```


---

## TASK_MELEE

**Description:** Params: p2: AR_TAKEDOWN_FRONT, AR_EXECUTION_FRONT, 0 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `TASK_MELEE` |
| Hash | `0x482C99D0B38D1B0A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (Hash), `p3` (Any), `p4` (Any), `p5` (float), `p6` (Any), `p7` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`Hash`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`float`)
- **`p6`** (`Any`)
- **`p7`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = TaskMelee(ped, targetPed, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x482C99D0B38D1B0A, ped, targetPed, p2, p3, p4, p5, p6, p7)
```


---

## TASK_MOUNT_ANIMAL

**Description:** timer: in ms, if it reaches 0 it will auto warp the ped on the horse
mountStyle: See TASK_ENTER_VEHICLE
Flags will still apply to mountStyle

| Property | Value |
|----------|-------|
| Native Name | `TASK_MOUNT_ANIMAL` |
| Hash | `0x92DB0739813C5186` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `mount` (Ped), `timer` (int), `seatIndex` (int), `pedSpeed` (float), `mountStyle` (int), `p6` (Any), `p7` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`mount`** (`Ped`)
- **`timer`** (`int`)
- **`seatIndex`** (`int`)
- **`pedSpeed`** (`float`)
- **`mountStyle`** (`int`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskMountAnimal(ped, mount, timer, seatIndex, pedSpeed, mountStyle, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x92DB0739813C5186, ped, mount, timer, seatIndex, pedSpeed, mountStyle, p6, p7)
```


---

## TASK_MOVE_BE_IN_FORMATION

| Property | Value |
|----------|-------|
| Native Name | `TASK_MOVE_BE_IN_FORMATION` |
| Hash | `0x4AA5AA97C65E4A2F` |
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
TaskMoveBeInFormation(ped, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4AA5AA97C65E4A2F, ped, p1, p2, p3, p4, p5, p6)
```


---

## TASK_MOVE_FOLLOW_ROAD_USING_NAVMESH

**Description:** Params: moveBlendRatio commonly 1.25f, p5 is always 0 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `TASK_MOVE_FOLLOW_ROAD_USING_NAVMESH` |
| Hash | `0x79482C12482A860D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `moveBlendRatio` (float), `x` (float), `y` (float), `z` (float), `p5` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`moveBlendRatio`** (`float`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskMoveFollowRoadUsingNavmesh(ped, moveBlendRatio, x, y, z, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x79482C12482A860D, ped, moveBlendRatio, x, y, z, p5)
```


---

## TASK_MOVE_IN_TRAFFIC

| Property | Value |
|----------|-------|
| Native Name | `TASK_MOVE_IN_TRAFFIC` |
| Hash | `0x8AA1593AEC087A29` |
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
TaskMoveInTraffic(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8AA1593AEC087A29, ped, p1, p2, p3)
```


---

## TASK_MOVE_IN_TRAFFIC_AWAY_FROM_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_MOVE_IN_TRAFFIC_AWAY_FROM_ENTITY` |
| Hash | `0x13DED0BC45600FE1` |
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
TaskMoveInTrafficAwayFromEntity(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x13DED0BC45600FE1, ped, p1, p2, p3, p4)
```


---

## TASK_MOVE_IN_TRAFFIC_TO_DESTINATION

| Property | Value |
|----------|-------|
| Native Name | `TASK_MOVE_IN_TRAFFIC_TO_DESTINATION` |
| Hash | `0xDCA3A13F7A45338B` |
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
TaskMoveInTrafficToDestination(ped, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDCA3A13F7A45338B, ped, p1, p2, p3, p4, p5, p6, p7)
```


---

## TASK_MOVE_NETWORK_ADVANCED_BY_NAME_WITH_INIT_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `TASK_MOVE_NETWORK_ADVANCED_BY_NAME_WITH_INIT_PARAMS` |
| Hash | `0x7B6A04F98BBAFB2C` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `moveNetworkDefName` (char*), `taskData` (Any), `xPos` (float), `yPos` (float), `zPos` (float), `xRot` (float), `yRot` (float), `zRot` (float), `p9` (int), `p10` (float), `p11` (int), `p12` (int), `flag` (int), `p14` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`moveNetworkDefName`** (`char*`)
- **`taskData`** (`Any`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`p9`** (`int`)
- **`p10`** (`float`)
- **`p11`** (`int`)
- **`p12`** (`int`)
- **`flag`** (`int`)
- **`p14`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskMoveNetworkAdvancedByNameWithInitParams(ped, moveNetworkDefName, taskData, xPos, yPos, zPos, xRot, yRot, zRot, p9, p10, p11, p12, flag, p14)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7B6A04F98BBAFB2C, ped, moveNetworkDefName, taskData, xPos, yPos, zPos, xRot, yRot, zRot, p9, p10, p11, p12, flag, p14)
```


---

## TASK_MOVE_NETWORK_ADVANCED_BY_NAME_WITH_INIT_PARAMS_ATTACHED

| Property | Value |
|----------|-------|
| Native Name | `TASK_MOVE_NETWORK_ADVANCED_BY_NAME_WITH_INIT_PARAMS_ATTACHED` |
| Hash | `0xF92171093BCABED4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any), `p11` (Any), `p12` (Any), `p13` (Any), `p14` (Any), `p15` (Any), `p16` (Any), `p17` (Any) |

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
- **`p15`** (`Any`)
- **`p16`** (`Any`)
- **`p17`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskMoveNetworkAdvancedByNameWithInitParamsAttached(ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF92171093BCABED4, ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17)
```


---

## TASK_MOVE_NETWORK_BY_NAME

| Property | Value |
|----------|-------|
| Native Name | `TASK_MOVE_NETWORK_BY_NAME` |
| Hash | `0x2D537BA194896636` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `task` (char*), `multiplier` (float), `p3` (BOOL), `animDict` (char*), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`task`** (`char*`)
- **`multiplier`** (`float`)
- **`p3`** (`BOOL`)
- **`animDict`** (`char*`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskMoveNetworkByName(ped, task, multiplier, p3, animDict, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2D537BA194896636, ped, task, multiplier, p3, animDict, flags)
```


---

## TASK_MOVE_NETWORK_BY_NAME_WITH_INIT_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `TASK_MOVE_NETWORK_BY_NAME_WITH_INIT_PARAMS` |
| Hash | `0x139805C2A67C4795` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `moveNetworkDefName` (char*), `taskData` (Any*), `p3` (float), `p4` (BOOL), `animDict` (char*), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`moveNetworkDefName`** (`char*`)
- **`taskData`** (`Any*`)
- **`p3`** (`float`)
- **`p4`** (`BOOL`)
- **`animDict`** (`char*`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskMoveNetworkByNameWithInitParams(ped, moveNetworkDefName, taskData, p3, p4, animDict, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x139805C2A67C4795, ped, moveNetworkDefName, taskData, p3, p4, animDict, flags)
```


---

## TASK_PATROL

| Property | Value |
|----------|-------|
| Native Name | `TASK_PATROL` |
| Hash | `0xBDA5DF49D080FE4E` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `patrolRoute` (char*), `p2` (Any), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`patrolRoute`** (`char*`)
- **`p2`** (`Any`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskPatrol(ped, patrolRoute, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBDA5DF49D080FE4E, ped, patrolRoute, p2, p3, p4)
```


---

## TASK_PAUSE

**Description:** This tasks the ped to do nothing for the specified amount of milliseconds.
This is useful if you want to add a delay between tasks when using a sequence task.

| Property | Value |
|----------|-------|
| Native Name | `TASK_PAUSE` |
| Hash | `0xE73A266DB0CA9042` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ms` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`ms`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskPause(ped, ms)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE73A266DB0CA9042, ped, ms)
```


---

## TASK_PED_SLIDE_TO_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_PED_SLIDE_TO_COORD` |
| Hash | `0xD04FE6765D990A06` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `heading` (float), `p5` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`p5`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskPedSlideToCoord(ped, x, y, z, heading, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD04FE6765D990A06, ped, x, y, z, heading, p5)
```


---

## TASK_PERFORM_SEQUENCE

| Property | Value |
|----------|-------|
| Native Name | `TASK_PERFORM_SEQUENCE` |
| Hash | `0x5ABA3986D90D8A3B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `taskSequenceId` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`taskSequenceId`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskPerformSequence(ped, taskSequenceId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5ABA3986D90D8A3B, ped, taskSequenceId)
```


---

*End of TASK natives part 5*
