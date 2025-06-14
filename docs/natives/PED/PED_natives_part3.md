# PED Natives - Part 3 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## GET_SEAT_PED_IS_USING

| Property | Value |
|----------|-------|
| Native Name | `GET_SEAT_PED_IS_USING` |
| Hash | `0x4E76CB57222A00E5` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetSeatPedIsUsing(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4E76CB57222A00E5, ped)
```


---

## GET_TRACKED_PED_PIXELCOUNT

| Property | Value |
|----------|-------|
| Native Name | `GET_TRACKED_PED_PIXELCOUNT` |
| Hash | `0x511F1A683387C7E2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrackedPedPixelcount(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x511F1A683387C7E2, ped)
```


---

## GET_VEHICLE_PED_IS_ENTERING

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_PED_IS_ENTERING` |
| Hash | `0xF92691AED837A5FC` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehiclePedIsEntering(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF92691AED837A5FC, ped)
```


---

## GET_VEHICLE_PED_IS_IN

**Description:** Gets the vehicle the specified Ped is in.

If the Ped is not in a vehicle and includeLastVehicle is true, the vehicle they were last in is returned.

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_PED_IS_IN` |
| Hash | `0x9A9112A0FE9A4713` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `ped` (Ped), `lastVehicle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`lastVehicle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehiclePedIsIn(ped, lastVehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A9112A0FE9A4713, ped, lastVehicle)
```


---

## GET_VEHICLE_PED_IS_USING

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_PED_IS_USING` |
| Hash | `0x6094AD011A2EA87D` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehiclePedIsUsing(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6094AD011A2EA87D, ped)
```


---

## GIVE_PED_HASH_SCENARIO_PROP

| Property | Value |
|----------|-------|
| Native Name | `GIVE_PED_HASH_SCENARIO_PROP` |
| Hash | `0x2B02DB082258625F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `object` (Object), `conditionalAnim` (char*), `scenarioType` (Hash), `p4` (Hash), `p5` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`object`** (`Object`)
- **`conditionalAnim`** (`char*`)
- **`scenarioType`** (`Hash`)
- **`p4`** (`Hash`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GivePedHashScenarioProp(ped, object, conditionalAnim, scenarioType, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2B02DB082258625F, ped, object, conditionalAnim, scenarioType, p4, p5)
```


---

## HAS_MOTION_TYPE_ASSET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `HAS_MOTION_TYPE_ASSET_LOADED` |
| Hash | `0x854BC9B1A1CCD034` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `nameHash` (Hash), `ped` (Ped) |

### Parameters

- **`nameHash`** (`Hash`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = HasMotionTypeAssetLoaded(nameHash, ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x854BC9B1A1CCD034, nameHash, ped)
```


---

## INIT_PED_DEFAULT_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `INIT_PED_DEFAULT_HEALTH` |
| Hash | `0x7DD7FB3480D8083E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
InitPedDefaultHealth(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7DD7FB3480D8083E, ped)
```


---

## INSTANTLY_FILL_PED_POPULATION

| Property | Value |
|----------|-------|
| Native Name | `INSTANTLY_FILL_PED_POPULATION` |
| Hash | `0x4759CC730F947C81` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
InstantlyFillPedPopulation()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4759CC730F947C81, )
```


---

## IS_ANIMAL_INTERACTION_POSSIBLE

| Property | Value |
|----------|-------|
| Native Name | `IS_ANIMAL_INTERACTION_POSSIBLE` |
| Hash | `0xD543D3A8FDE4F185` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `animal` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`animal`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimalInteractionPossible(ped, animal)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD543D3A8FDE4F185, ped, animal)
```


---

## IS_ANY_HOSTILE_PED_NEAR_POINT

| Property | Value |
|----------|-------|
| Native Name | `IS_ANY_HOSTILE_PED_NEAR_POINT` |
| Hash | `0x68772DB2B2526F9F` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnyHostilePedNearPoint(ped, x, y, z, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x68772DB2B2526F9F, ped, x, y, z, radius)
```


---

## IS_ANY_PED_NEAR_POINT

| Property | Value |
|----------|-------|
| Native Name | `IS_ANY_PED_NEAR_POINT` |
| Hash | `0x083961498679DC9F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnyPedNearPoint(x, y, z, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x083961498679DC9F, x, y, z, radius)
```


---

## IS_ANY_PED_SHOOTING_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `IS_ANY_PED_SHOOTING_IN_AREA` |
| Hash | `0xA0D3D71EA1086C55` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `p6` (BOOL), `p7` (BOOL) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnyPedShootingInArea(x1, y1, z1, x2, y2, z2, p6, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA0D3D71EA1086C55, x1, y1, z1, x2, y2, z2, p6, p7)
```


---

## IS_EVENT_IN_QUEUE

| Property | Value |
|----------|-------|
| Native Name | `IS_EVENT_IN_QUEUE` |
| Hash | `0xC8D523BF5BBD3808` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `eventType` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`eventType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsEventInQueue(ped, eventType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC8D523BF5BBD3808, ped, eventType)
```


---

## IS_GROUP_LOCALLY_CONTROLLED

| Property | Value |
|----------|-------|
| Native Name | `IS_GROUP_LOCALLY_CONTROLLED` |
| Hash | `0x909AD9E9A92A10DF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `groupId` (int) |

### Parameters

- **`groupId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsGroupLocallyControlled(groupId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x909AD9E9A92A10DF, groupId)
```


---

## IS_INSTANTLY_FILL_PED_POPULATION_FINISHED

| Property | Value |
|----------|-------|
| Native Name | `IS_INSTANTLY_FILL_PED_POPULATION_FINISHED` |
| Hash | `0x0EE3F0D7FECCC54F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsInstantlyFillPedPopulationFinished()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0EE3F0D7FECCC54F, )
```


---

## IS_LOCATION_SPAWN_SAFE

| Property | Value |
|----------|-------|
| Native Name | `IS_LOCATION_SPAWN_SAFE` |
| Hash | `0xFB1E7998B8595825` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsLocationSpawnSafe(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFB1E7998B8595825, ped, p1)
```


---

## IS_PED_AIMING_FROM_COVER

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_AIMING_FROM_COVER` |
| Hash | `0x3998B1276A3300E5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedAimingFromCover(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3998B1276A3300E5, ped)
```


---

## IS_PED_A_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_A_PLAYER` |
| Hash | `0x12534C348C6CB68B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedAPlayer(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x12534C348C6CB68B, ped)
```


---

## IS_PED_BEING_DRAGGED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_BEING_DRAGGED` |
| Hash | `0xEF3A8772F085B4AA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedBeingDragged(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEF3A8772F085B4AA, ped)
```


---

## IS_PED_BEING_HOGTIED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_BEING_HOGTIED` |
| Hash | `0xD453BB601D4A606E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedBeingHogtied(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD453BB601D4A606E, ped)
```


---

## IS_PED_BEING_JACKED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_BEING_JACKED` |
| Hash | `0x9A497FE2DF198913` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedBeingJacked(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A497FE2DF198913, ped)
```


---

## IS_PED_BEING_STEALTH_KILLED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_BEING_STEALTH_KILLED` |
| Hash | `0x863B23EFDE9C5DF2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedBeingStealthKilled(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x863B23EFDE9C5DF2, ped)
```


---

## IS_PED_BEING_STUNNED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_BEING_STUNNED` |
| Hash | `0x4FBACCE3B4138EE8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponType` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedBeingStunned(ped, weaponType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4FBACCE3B4138EE8, ped, weaponType)
```


---

## IS_PED_CARRYING_SOMETHING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_CARRYING_SOMETHING` |
| Hash | `0xA911EE21EDF69DAF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedCarryingSomething(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA911EE21EDF69DAF, ped)
```


---

## IS_PED_CLIMBING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_CLIMBING` |
| Hash | `0x53E8CB4F48BFE623` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedClimbing(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x53E8CB4F48BFE623, ped)
```


---

## IS_PED_DEAD_OR_DYING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_DEAD_OR_DYING` |
| Hash | `0x3317DEDB88C95038` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedDeadOrDying(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3317DEDB88C95038, ped, p1)
```


---

## IS_PED_DEFENSIVE_AREA_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_DEFENSIVE_AREA_ACTIVE` |
| Hash | `0xBA63D9FE45412247` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedDefensiveAreaActive(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBA63D9FE45412247, ped, p1)
```


---

## IS_PED_DIVING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_DIVING` |
| Hash | `0x5527B8246FEF9B11` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedDiving(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5527B8246FEF9B11, ped)
```


---

## IS_PED_ENTERING_ANY_TRANSPORT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_ENTERING_ANY_TRANSPORT` |
| Hash | `0x1D46B417F926D34D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedEnteringAnyTransport(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1D46B417F926D34D, ped)
```


---

## IS_PED_EVASIVE_DIVING

**Description:** Presumably returns the Entity that the Ped is currently diving out of the way of.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_EVASIVE_DIVING` |
| Hash | `0x414641C26E105898` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `evadingEntity` (Entity*) |

### Parameters

- **`ped`** (`Ped`)
- **`evadingEntity`** (`Entity*`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedEvasiveDiving(ped, evadingEntity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x414641C26E105898, ped, evadingEntity)
```


---

## IS_PED_FACING_PED

**Description:** angle is ped's view cone

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_FACING_PED` |
| Hash | `0xD71649DB0A545AA3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `otherPed` (Ped), `angle` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`otherPed`** (`Ped`)
- **`angle`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedFacingPed(ped, otherPed, angle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD71649DB0A545AA3, ped, otherPed, angle)
```


---

## IS_PED_FALLING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_FALLING` |
| Hash | `0xFB92A102F1C4DFA3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedFalling(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFB92A102F1C4DFA3, ped)
```


---

## IS_PED_FALLING_OVER

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_FALLING_OVER` |
| Hash | `0x3E592D0486DEC0F6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedFallingOver(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3E592D0486DEC0F6, ped)
```


---

## IS_PED_FATALLY_INJURED

**Description:** Gets a value indicating whether this ped's health is below its fatally injured threshold. The default threshold is 100.
If the handle is invalid, the function returns true.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_FATALLY_INJURED` |
| Hash | `0xD839450756ED5A80` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedFatallyInjured(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD839450756ED5A80, ped)
```


---

## IS_PED_FLEEING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_FLEEING` |
| Hash | `0xBBCCE00B381F8482` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedFleeing(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBBCCE00B381F8482, ped)
```


---

## IS_PED_FULLY_ON_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_FULLY_ON_MOUNT` |
| Hash | `0x95CBC65780DE7EB1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedFullyOnMount(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x95CBC65780DE7EB1, ped, p1)
```


---

## IS_PED_GETTING_INTO_A_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_GETTING_INTO_A_VEHICLE` |
| Hash | `0xBB062B2B5722478E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedGettingIntoAVehicle(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBB062B2B5722478E, ped)
```


---

## IS_PED_GOING_INTO_COVER

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_GOING_INTO_COVER` |
| Hash | `0x9F65DBC537E59AD5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedGoingIntoCover(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9F65DBC537E59AD5, ped)
```


---

## IS_PED_GROUP_MEMBER

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_GROUP_MEMBER` |
| Hash | `0x9BB01E3834671191` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `groupId` (int), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`groupId`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedGroupMember(ped, groupId, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9BB01E3834671191, ped, groupId, p2)
```


---

## IS_PED_HANGING_ON_TO_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_HANGING_ON_TO_VEHICLE` |
| Hash | `0x1C86D8AEF8254B78` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedHangingOnToVehicle(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1C86D8AEF8254B78, ped)
```


---

## IS_PED_HEADING_TOWARDS_POSITION

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_HEADING_TOWARDS_POSITION` |
| Hash | `0xFCF37A457CB96DC0` |
| Return Type | `BOOL` |
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
local result = IsPedHeadingTowardsPosition(ped, x, y, z, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFCF37A457CB96DC0, ped, x, y, z, p4)
```


---

## IS_PED_HEADTRACKING_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_HEADTRACKING_ENTITY` |
| Hash | `0x813A0A7C9D2E831F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedHeadtrackingEntity(ped, entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x813A0A7C9D2E831F, ped, entity)
```


---

## IS_PED_HEADTRACKING_PED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_HEADTRACKING_PED` |
| Hash | `0x5CD3CB88A7F8850D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped1` (Ped), `ped2` (Ped) |

### Parameters

- **`ped1`** (`Ped`)
- **`ped2`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedHeadtrackingPed(ped1, ped2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5CD3CB88A7F8850D, ped1, ped2)
```


---

## IS_PED_HOGTIED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_HOGTIED` |
| Hash | `0x3AA24CCC0D451379` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedHogtied(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3AA24CCC0D451379, ped)
```


---

## IS_PED_HOGTYING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_HOGTYING` |
| Hash | `0x42429C674B61238B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedHogtying(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x42429C674B61238B, ped)
```


---

## IS_PED_HUMAN

**Description:** Returns true/false if the ped is/isn't humanoid.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_HUMAN` |
| Hash | `0xB980061DA992779D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedHuman(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB980061DA992779D, ped)
```


---

## IS_PED_INCAPACITATED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_INCAPACITATED` |
| Hash | `0xB655DB7582AEC805` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedIncapacitated(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB655DB7582AEC805, ped)
```


---

## IS_PED_INJURED

**Description:** Gets a value indicating whether this ped's health is below its injured threshold.

The default threshold is 100.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_INJURED` |
| Hash | `0x84A2DD9AC37C35C1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInjured(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x84A2DD9AC37C35C1, ped)
```


---

## IS_PED_IN_ANY_BOAT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_ANY_BOAT` |
| Hash | `0x2E0E1C2B4F6CB339` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInAnyBoat(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E0E1C2B4F6CB339, ped)
```


---

*End of PED natives part 3*
