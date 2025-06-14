# VEHICLE Natives - Part 8 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** VEHICLE  
**Natives in this file:** 37  
**Total natives in namespace:** 387  
**Generated from:** RDR3natives JSON data

---

## _IS_BOAT_GROUNDED

| Property | Value |
|----------|-------|
| Native Name | `_IS_BOAT_GROUNDED` |
| Hash | `0x30D86B2B7622D0EB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsBoatGrounded(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x30D86B2B7622D0EB, vehicle)
```


---

## _IS_PED_EXCLUSIVE_DRIVER_OF_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_EXCLUSIVE_DRIVER_OF_VEHICLE` |
| Hash | `0xB213D2A560B2E48B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `outIndex` (int*) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`outIndex`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedExclusiveDriverOfVehicle(ped, vehicle, outIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB213D2A560B2E48B, ped, vehicle, outIndex)
```


---

## _IS_THIS_MODEL_A_DRAFT_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_IS_THIS_MODEL_A_DRAFT_VEHICLE` |
| Hash | `0xB9D5BDDA88E1BB66` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsThisModelADraftVehicle(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB9D5BDDA88E1BB66, model)
```


---

## _IS_VEHICLE_BROUGHT_TO_HALT

**Description:** Only returns true if BRING_VEHICLE_TO_HALT is called on vehicle beforehand

| Property | Value |
|----------|-------|
| Native Name | `_IS_VEHICLE_BROUGHT_TO_HALT` |
| Hash | `0x404527BC03DA0E6C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleBroughtToHalt(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x404527BC03DA0E6C, vehicle)
```


---

## _IS_VEHICLE_DOOR_BROKEN

**Description:** doorId: see SET_VEHICLE_DOOR_SHUT

| Property | Value |
|----------|-------|
| Native Name | `_IS_VEHICLE_DOOR_BROKEN` |
| Hash | `0xE979BB5602AD3402` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `doorId` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`doorId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleDoorBroken(vehicle, doorId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE979BB5602AD3402, vehicle, doorId)
```


---

## _IS_VEHICLE_FADING_OUT

| Property | Value |
|----------|-------|
| Native Name | `_IS_VEHICLE_FADING_OUT` |
| Hash | `0x5136B284B67B35C7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleFadingOut(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5136B284B67B35C7, vehicle)
```


---

## _IS_VEHICLE_ON_FIRE

| Property | Value |
|----------|-------|
| Native Name | `_IS_VEHICLE_ON_FIRE` |
| Hash | `0x0E3BF7ED4169EC43` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleOnFire(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E3BF7ED4169EC43, vehicle)
```


---

## _IS_VEHICLE_WHEEL_DESTROYED

| Property | Value |
|----------|-------|
| Native Name | `_IS_VEHICLE_WHEEL_DESTROYED` |
| Hash | `0xCB2CA620C48BC875` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `wheel` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`wheel`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleWheelDestroyed(vehicle, wheel)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB2CA620C48BC875, vehicle, wheel)
```


---

## _SET_ALL_JUNCTIONS_CLEARED

| Property | Value |
|----------|-------|
| Native Name | `_SET_ALL_JUNCTIONS_CLEARED` |
| Hash | `0x138398153824E332` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetAllJunctionsCleared()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x138398153824E332, )
```


---

## _SET_ALL_VEHICLE_GENERATORS_DISABLED_FOR_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_SET_ALL_VEHICLE_GENERATORS_DISABLED_FOR_VOLUME` |
| Hash | `0x424FFCB9F0D2D4B5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `toggle` (BOOL) |

### Parameters

- **`volume`** (`Volume`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAllVehicleGeneratorsDisabledForVolume(volume, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x424FFCB9F0D2D4B5, volume, toggle)
```


---

## _SET_BALLOON_HOVER_STATE

**Description:** Params: 1.0f will make balloon hover

| Property | Value |
|----------|-------|
| Native Name | `_SET_BALLOON_HOVER_STATE` |
| Hash | `0x7C9E45A4CED2E8DA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `balloon` (Vehicle), `p1` (float) |

### Parameters

- **`balloon`** (`Vehicle`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetBalloonHoverState(balloon, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C9E45A4CED2E8DA, balloon, p1)
```


---

## _SET_BATCH_TARP_HEIGHT

**Description:** Total height is calculated using: cargo ratio + pelt ratio (by pelt count)
Screenshot: https://imgur.com/a/nsomtiv

| Property | Value |
|----------|-------|
| Native Name | `_SET_BATCH_TARP_HEIGHT` |
| Hash | `0x31F343383F19C987` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `height` (float), `immediately` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`height`** (`float`)
- **`immediately`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetBatchTarpHeight(vehicle, height, immediately)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x31F343383F19C987, vehicle, height, immediately)
```


---

## _SET_DRAFT_ANIMAL_RANDOM_SEED

| Property | Value |
|----------|-------|
| Native Name | `_SET_DRAFT_ANIMAL_RANDOM_SEED` |
| Hash | `0x8C6D9A399126C194` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `seed` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`seed`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetDraftAnimalRandomSeed(vehicle, seed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8C6D9A399126C194, vehicle, seed)
```


---

## _SET_DRAFT_VEHICLE_ALLOW_DRAFT_ANIMAL_AUTO_CREATION

| Property | Value |
|----------|-------|
| Native Name | `_SET_DRAFT_VEHICLE_ALLOW_DRAFT_ANIMAL_AUTO_CREATION` |
| Hash | `0x87344305778E5415` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `allow` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`allow`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDraftVehicleAllowDraftAnimalAutoCreation(vehicle, allow)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x87344305778E5415, vehicle, allow)
```


---

## _SET_DRAFT_VEHICLE_ANIMALS_CAN_DETACH

| Property | Value |
|----------|-------|
| Native Name | `_SET_DRAFT_VEHICLE_ANIMALS_CAN_DETACH` |
| Hash | `0x6090A031C69F384E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `draft` (Vehicle), `canDetach` (BOOL) |

### Parameters

- **`draft`** (`Vehicle`)
- **`canDetach`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDraftVehicleAnimalsCanDetach(draft, canDetach)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6090A031C69F384E, draft, canDetach)
```


---

## _SET_DRAFT_VEHICLE_DESIRED_SPEED

| Property | Value |
|----------|-------|
| Native Name | `_SET_DRAFT_VEHICLE_DESIRED_SPEED` |
| Hash | `0x0C3F0F7F92CA847C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `speed` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDraftVehicleDesiredSpeed(vehicle, speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0C3F0F7F92CA847C, vehicle, speed)
```


---

## _SET_DRAFT_VEHICLE_YOKE_CAN_BREAK

| Property | Value |
|----------|-------|
| Native Name | `_SET_DRAFT_VEHICLE_YOKE_CAN_BREAK` |
| Hash | `0x226C6A4E3346D288` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `draft` (Vehicle), `canBreak` (BOOL) |

### Parameters

- **`draft`** (`Vehicle`)
- **`canBreak`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDraftVehicleYokeCanBreak(draft, canBreak)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x226C6A4E3346D288, draft, canBreak)
```


---

## _SET_FORCE_COACH_ROBBERY_LOOT

**Description:** Hashes: COACH2_BOOT_LOOT_ITEMS_COACHROB_RSC, COACH2_BOOT_LOOT_ITEMS_COACHROB, COACH2_MARY3

| Property | Value |
|----------|-------|
| Native Name | `_SET_FORCE_COACH_ROBBERY_LOOT` |
| Hash | `0xF489F94BFEE12BB0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `coachrobberyLoot` (Hash) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`coachrobberyLoot`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetForceCoachRobberyLoot(vehicle, coachrobberyLoot)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF489F94BFEE12BB0, vehicle, coachrobberyLoot)
```


---

## _SET_FORCE_HIGH_LOD_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_SET_FORCE_HIGH_LOD_VEHICLE` |
| Hash | `0x1098CDA477890165` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetForceHighLodVehicle(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1098CDA477890165, vehicle, p1)
```


---

## _SET_HORSE_TRAFFIC_GROUPING_DISTRIBUTION

| Property | Value |
|----------|-------|
| Native Name | `_SET_HORSE_TRAFFIC_GROUPING_DISTRIBUTION` |
| Hash | `0xF5FFB08976911B50` |
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
SetHorseTrafficGroupingDistribution(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF5FFB08976911B50, p0, p1, p2, p3)
```


---

## _SET_MISSION_TRAIN_WARP_TO_COORDS

**Description:** Notice: BOOL p4 was wrongly named takePassengers (?)
Can be used to rotate the train by setting the BOOL direction

| Property | Value |
|----------|-------|
| Native Name | `_SET_MISSION_TRAIN_WARP_TO_COORDS` |
| Hash | `0xC9EA26893C9E4024` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `x` (float), `y` (float), `z` (float), `direction` (BOOL) |

### Parameters

- **`train`** (`Vehicle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`direction`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetMissionTrainWarpToCoords(train, x, y, z, direction)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC9EA26893C9E4024, train, x, y, z, direction)
```


---

## _SET_TRAIN_HALT

| Property | Value |
|----------|-------|
| Native Name | `_SET_TRAIN_HALT` |
| Hash | `0x3660BCAB3A6BB734` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
SetTrainHalt(train)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3660BCAB3A6BB734, train)
```


---

## _SET_TRAIN_LEAVE_STATION

**Description:** Restarts the train

| Property | Value |
|----------|-------|
| Native Name | `_SET_TRAIN_LEAVE_STATION` |
| Hash | `0x787E43477746876F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
SetTrainLeaveStation(train)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x787E43477746876F, train)
```


---

## _SET_TRAIN_MAX_SPEED

**Description:** Maximum possible speed is 30.0 (108 km/h)

| Property | Value |
|----------|-------|
| Native Name | `_SET_TRAIN_MAX_SPEED` |
| Hash | `0x9F29999DFDF2AEB8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `speed` (float) |

### Parameters

- **`train`** (`Vehicle`)
- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTrainMaxSpeed(train, speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9F29999DFDF2AEB8, train, speed)
```


---

## _SET_TRAIN_STOPS_FOR_STATIONS

| Property | Value |
|----------|-------|
| Native Name | `_SET_TRAIN_STOPS_FOR_STATIONS` |
| Hash | `0x4182C037AA1F0091` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`train`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetTrainStopsForStations(train, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4182C037AA1F0091, train, toggle)
```


---

## _SET_TRAIN_TRACK_JUNCTION_SWITCH

**Description:** trainTrack: FREIGHT_GROUP, TRAINS3, BRAITHWAITES2_TRACK_CONFIG, TRAINS_OLD_WEST01, TRAINS_OLD_WEST03, TRAINS_NB1, TRAINS_INTERSECTION1_ANN

| Property | Value |
|----------|-------|
| Native Name | `_SET_TRAIN_TRACK_JUNCTION_SWITCH` |
| Hash | `0xE6C5E2125EB210C1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `trainTrack` (Hash), `junctionIndex` (int), `enabled` (BOOL) |

### Parameters

- **`trainTrack`** (`Hash`)
- **`junctionIndex`** (`int`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetTrainTrackJunctionSwitch(trainTrack, junctionIndex, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE6C5E2125EB210C1, trainTrack, junctionIndex, enabled)
```


---

## _SET_VEHICLE_DETERIORATION

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_DETERIORATION` |
| Hash | `0x8E5DA070BAD3279E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `amount` (float), `p2` (int), `p3` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`amount`** (`float`)
- **`p2`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDeterioration(vehicle, amount, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8E5DA070BAD3279E, vehicle, amount, p2, p3)
```


---

## _SET_VEHICLE_DIRT_LEVEL_2

**Description:** dirtLevel: 0.0 - 1.0

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_DIRT_LEVEL_2` |
| Hash | `0xBAE0EEDF93F05EAA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `dirtLevel` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`dirtLevel`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDirtLevel2(vehicle, dirtLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBAE0EEDF93F05EAA, vehicle, dirtLevel)
```


---

## _SET_VEHICLE_IS_IN_HURRY

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_IS_IN_HURRY` |
| Hash | `0xCE1531927AD6C9F8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `enabled` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleIsInHurry(vehicle, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE1531927AD6C9F8, vehicle, enabled)
```


---

## _SET_VEHICLE_LIVERY

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_liveries.lua

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_LIVERY` |
| Hash | `0xF89D82A0582E46ED` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `liveryIndex` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`liveryIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetVehicleLivery(vehicle, liveryIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF89D82A0582E46ED, vehicle, liveryIndex)
```


---

## _SET_VEHICLE_LOD_LEVEL

**Description:** Ranges from -1 to 2? (internal type is int8)
https://imgur.com/a/bPzHcft

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_LOD_LEVEL` |
| Hash | `0x3FA7D7D1E0EA809E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `lodLevel` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`lodLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetVehicleLodLevel(vehicle, lodLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3FA7D7D1E0EA809E, vehicle, lodLevel)
```


---

## _SET_VEHICLE_MUD_LEVEL

**Description:** mudLevel: 0.0 - 1.0

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_MUD_LEVEL` |
| Hash | `0x4D15E49764CB328A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `mudLevel` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`mudLevel`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleMudLevel(vehicle, mudLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D15E49764CB328A, vehicle, mudLevel)
```


---

## _SET_VEHICLE_SNOW_LEVEL

**Description:** snowLevel: 0.0 - 1.0

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_SNOW_LEVEL` |
| Hash | `0x6F73EFAB11651D7F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `snowLevel` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`snowLevel`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleSnowLevel(vehicle, snowLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6F73EFAB11651D7F, vehicle, snowLevel)
```


---

## _SET_VEHICLE_TINT

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_tints.lua

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_TINT` |
| Hash | `0x8268B098F6FCA4E2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `tintId` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`tintId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetVehicleTint(vehicle, tintId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8268B098F6FCA4E2, vehicle, tintId)
```


---

## _SET_VEHICLE_WET_LEVEL

**Description:** wetLevel: 0.0 - 1.0

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_WET_LEVEL` |
| Hash | `0x5AABB09F6FBD1F87` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `wetLevel` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`wetLevel`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleWetLevel(vehicle, wetLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5AABB09F6FBD1F87, vehicle, wetLevel)
```


---

## _SHOW_HORSE_REINS

| Property | Value |
|----------|-------|
| Native Name | `_SHOW_HORSE_REINS` |
| Hash | `0x41CDA90EE3450921` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
ShowHorseReins(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x41CDA90EE3450921, vehicle)
```


---

## _TRIGGER_TRAIN_WHISTLE

**Description:** whistleSequence: ACKNOWLEDGE, BACKING_UP, CROSSING, DANGER, MOVING, NEXT_STATION, PASSING, STOPPED
p2 = true seems to mute the sound

| Property | Value |
|----------|-------|
| Native Name | `_TRIGGER_TRAIN_WHISTLE` |
| Hash | `0xCFE122EC635CC2B2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `whistleSequence` (char*), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`train`** (`Vehicle`)
- **`whistleSequence`** (`char*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TriggerTrainWhistle(train, whistleSequence, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCFE122EC635CC2B2, train, whistleSequence, p2, p3)
```


---

*End of VEHICLE natives part 8*
