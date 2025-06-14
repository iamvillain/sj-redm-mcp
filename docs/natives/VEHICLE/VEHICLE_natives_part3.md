# VEHICLE Natives - Part 3 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** VEHICLE  
**Natives in this file:** 50  
**Total natives in namespace:** 387  
**Generated from:** RDR3natives JSON data

---

## SET_TRAIN_CRUISE_SPEED

| Property | Value |
|----------|-------|
| Native Name | `SET_TRAIN_CRUISE_SPEED` |
| Hash | `0x01021EB2E96B793C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `speed` (float) |

### Parameters

- **`train`** (`Vehicle`)
- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTrainCruiseSpeed(train, speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x01021EB2E96B793C, train, speed)
```


---

## SET_TRAIN_OFFSET_FROM_STATION

| Property | Value |
|----------|-------|
| Native Name | `SET_TRAIN_OFFSET_FROM_STATION` |
| Hash | `0x8EC47DD4300BF063` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `offset` (float) |

### Parameters

- **`train`** (`Vehicle`)
- **`offset`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTrainOffsetFromStation(train, offset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8EC47DD4300BF063, train, offset)
```


---

## SET_TRAIN_SPEED

| Property | Value |
|----------|-------|
| Native Name | `SET_TRAIN_SPEED` |
| Hash | `0xDFBA6BBFF7CCAFBB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `speed` (float) |

### Parameters

- **`train`** (`Vehicle`)
- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTrainSpeed(train, speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDFBA6BBFF7CCAFBB, train, speed)
```


---

## SET_VEHICLE_AI_CAN_USE_EXCLUSIVE_SEATS

**Description:** Used to be incorrectly named SET_VEHICLE_EXCLUSIVE_DRIVER

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_AI_CAN_USE_EXCLUSIVE_SEATS` |
| Hash | `0x0893DAFBFA67110E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleAiCanUseExclusiveSeats(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0893DAFBFA67110E, vehicle, toggle)
```


---

## SET_VEHICLE_ALLOW_HOMING_MISSLE_LOCKON

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_ALLOW_HOMING_MISSLE_LOCKON` |
| Hash | `0x1240E8596A8308B9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleAllowHomingMissleLockon(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1240E8596A8308B9, vehicle, toggle)
```


---

## SET_VEHICLE_ALLOW_NO_PASSENGERS_LOCKON

**Description:** Makes the vehicle accept no passengers.

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_ALLOW_NO_PASSENGERS_LOCKON` |
| Hash | `0xECB9E9BC887E8060` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleAllowNoPassengersLockon(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xECB9E9BC887E8060, vehicle, toggle)
```


---

## SET_VEHICLE_AUTOMATICALLY_ATTACHES

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_AUTOMATICALLY_ATTACHES` |
| Hash | `0x501354951CD942DE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL), `p2` (Any) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = SetVehicleAutomaticallyAttaches(vehicle, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x501354951CD942DE, vehicle, p1, p2)
```


---

## SET_VEHICLE_BODY_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_BODY_HEALTH` |
| Hash | `0x55CCAAE4F28C67A0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `value` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleBodyHealth(vehicle, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x55CCAAE4F28C67A0, vehicle, value)
```


---

## SET_VEHICLE_BROKEN_PARTS_DONT_AFFECT_AI_HANDLING

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_BROKEN_PARTS_DONT_AFFECT_AI_HANDLING` |
| Hash | `0xCEC4CA2CAB8FA98C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleBrokenPartsDontAffectAiHandling(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCEC4CA2CAB8FA98C, vehicle, p1)
```


---

## SET_VEHICLE_CAN_BE_TARGETTED

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_CAN_BE_TARGETTED` |
| Hash | `0x05254BA0B44ADC16` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `state` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`state`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleCanBeTargetted(vehicle, state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x05254BA0B44ADC16, vehicle, state)
```


---

## SET_VEHICLE_CAN_BE_USED_BY_FLEEING_PEDS

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_CAN_BE_USED_BY_FLEEING_PEDS` |
| Hash | `0xE42952510F84AFDB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleCanBeUsedByFleeingPeds(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE42952510F84AFDB, vehicle, toggle)
```


---

## SET_VEHICLE_CAN_BE_VISIBLY_DAMAGED

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_CAN_BE_VISIBLY_DAMAGED` |
| Hash | `0x4BF8131AE811541C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `state` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`state`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleCanBeVisiblyDamaged(vehicle, state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4BF8131AE811541C, vehicle, state)
```


---

## SET_VEHICLE_CAN_BREAK

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_CAN_BREAK` |
| Hash | `0xC5ED9D59B4646611` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleCanBreak(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC5ED9D59B4646611, vehicle, toggle)
```


---

## SET_VEHICLE_CAN_EJECT_PASSENGERS_IF_LOCKED

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_CAN_EJECT_PASSENGERS_IF_LOCKED` |
| Hash | `0x065D03A9D6B2C6B5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleCanEjectPassengersIfLocked(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x065D03A9D6B2C6B5, vehicle, p1)
```


---

## SET_VEHICLE_DAMAGE

**Description:** Apply damage to vehicle at a location. Location is relative to vehicle model (not world).

Radius of effect damage applied in a sphere at impact location

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DAMAGE` |
| Hash | `0x1D7678F81452BB41` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `xOffset` (float), `yOffset` (float), `zOffset` (float), `damage` (float), `radius` (float), `p6` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)
- **`damage`** (`float`)
- **`radius`** (`float`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDamage(vehicle, xOffset, yOffset, zOffset, damage, radius, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1D7678F81452BB41, vehicle, xOffset, yOffset, zOffset, damage, radius, p6)
```


---

## SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME` |
| Hash | `0x606374EBFC27B133` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDensityMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x606374EBFC27B133, multiplier)
```


---

## SET_VEHICLE_DIRT_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DIRT_LEVEL` |
| Hash | `0x758C3460EE915D0A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `dirtLevel` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`dirtLevel`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDirtLevel(vehicle, dirtLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x758C3460EE915D0A, vehicle, dirtLevel)
```


---

## SET_VEHICLE_DOORS_LOCKED

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOORS_LOCKED` |
| Hash | `0x96F78A6A075D55D9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `doorLockStatus` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`doorLockStatus`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorsLocked(vehicle, doorLockStatus)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x96F78A6A075D55D9, vehicle, doorLockStatus)
```


---

## SET_VEHICLE_DOORS_LOCKED_FOR_ALL_PLAYERS

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOORS_LOCKED_FOR_ALL_PLAYERS` |
| Hash | `0x2381977DA948F8DC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorsLockedForAllPlayers(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2381977DA948F8DC, vehicle, toggle)
```


---

## SET_VEHICLE_DOORS_LOCKED_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOORS_LOCKED_FOR_PLAYER` |
| Hash | `0x359A8EA1FB8D6F0F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `player` (Player), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorsLockedForPlayer(vehicle, player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x359A8EA1FB8D6F0F, vehicle, player, toggle)
```


---

## SET_VEHICLE_DOORS_LOCKED_FOR_TEAM

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOORS_LOCKED_FOR_TEAM` |
| Hash | `0xE712BC978770F105` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `team` (int), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`team`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorsLockedForTeam(vehicle, team, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE712BC978770F105, vehicle, team, toggle)
```


---

## SET_VEHICLE_DOORS_SHUT

**Description:** Closes all doors of a vehicle:

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOORS_SHUT` |
| Hash | `0xA4FFCD645B11F25A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `closeInstantly` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`closeInstantly`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorsShut(vehicle, closeInstantly)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA4FFCD645B11F25A, vehicle, closeInstantly)
```


---

## SET_VEHICLE_DOORS_TO_OPEN_AT_ANY_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOORS_TO_OPEN_AT_ANY_DISTANCE` |
| Hash | `0x362CEDD2A41E0747` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorsToOpenAtAnyDistance(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x362CEDD2A41E0747, vehicle, toggle)
```


---

## SET_VEHICLE_DOOR_BROKEN

**Description:** doorId: see SET_VEHICLE_DOOR_SHUT

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOOR_BROKEN` |
| Hash | `0x9666CF20A1C6D780` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `doorId` (int), `deleteDoor` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`doorId`** (`int`)
- **`deleteDoor`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorBroken(vehicle, doorId, deleteDoor)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9666CF20A1C6D780, vehicle, doorId, deleteDoor)
```


---

## SET_VEHICLE_DOOR_CONTROL

**Description:** doorId: see SET_VEHICLE_DOOR_SHUT

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOOR_CONTROL` |
| Hash | `0xD57F10EBBA814ECF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `doorId` (int), `speed` (int), `angle` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`doorId`** (`int`)
- **`speed`** (`int`)
- **`angle`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorControl(vehicle, doorId, speed, angle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD57F10EBBA814ECF, vehicle, doorId, speed, angle)
```


---

## SET_VEHICLE_DOOR_LATCHED

**Description:** doorId: see SET_VEHICLE_DOOR_SHUT

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOOR_LATCHED` |
| Hash | `0x06F8A202EB312A3C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `doorId` (int), `p2` (BOOL), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`doorId`** (`int`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorLatched(vehicle, doorId, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06F8A202EB312A3C, vehicle, doorId, p2, p3, p4)
```


---

## SET_VEHICLE_DOOR_OPEN

**Description:** doorId: see SET_VEHICLE_DOOR_SHUT
Can also be used on trains and its wagons

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOOR_OPEN` |
| Hash | `0x550CE392A4672412` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `doorId` (int), `loose` (BOOL), `openInstantly` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`doorId`** (`int`)
- **`loose`** (`BOOL`)
- **`openInstantly`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorOpen(vehicle, doorId, loose, openInstantly)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x550CE392A4672412, vehicle, doorId, loose, openInstantly)
```


---

## SET_VEHICLE_DOOR_SHUT

**Description:** doorId: enum eDoorId
{
	VEH_EXT_DOOR_INVALID_ID = -1,
	VEH_EXT_DOOR_DSIDE_F,
	VEH_EXT_DOOR_DSIDE_M,
	VEH_EXT_DOOR_DSIDE_M1,
	VEH_EXT_DOOR_DSIDE_M2,
	VEH_EXT_DOOR_DSIDE_R,
	VEH_EXT_DOOR_PSIDE_F,
	VEH_EXT_DOOR_PSIDE_M,
	VEH_EXT_DOOR_PSIDE_M1,
	VEH_EXT_DOOR_PSIDE_M2,
	VEH_EXT_DOOR_PSIDE_R,
	VEH_EXT_BONNET,
	VEH_EXT_BOOT
};

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_DOOR_SHUT` |
| Hash | `0x6A3C24B91FD0EA09` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `doorId` (int), `closeInstantly` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`doorId`** (`int`)
- **`closeInstantly`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleDoorShut(vehicle, doorId, closeInstantly)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A3C24B91FD0EA09, vehicle, doorId, closeInstantly)
```


---

## SET_VEHICLE_ENGINE_CAN_DEGRADE

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_ENGINE_CAN_DEGRADE` |
| Hash | `0x48E4C137A71C2688` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleEngineCanDegrade(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x48E4C137A71C2688, vehicle, toggle)
```


---

## SET_VEHICLE_ENGINE_HEALTH

**Description:** 1000 is max health
Begins leaking gas at around 650 health
-999.90002441406 appears to be minimum health, although nothing special occurs <- false statement

-------------------------
Minimum: -4000
Maximum: 1000

-4000: Engine is destroyed
0 and below: Engine catches fire and health rapidly declines
300: Engine is smoking and losing functionality
1000: Engine is perfect

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_ENGINE_HEALTH` |
| Hash | `0x8BDC5B998B4654EF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `health` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`health`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleEngineHealth(vehicle, health)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8BDC5B998B4654EF, vehicle, health)
```


---

## SET_VEHICLE_ENGINE_ON

**Description:** Starts or stops the engine on the specified vehicle.

vehicle: The vehicle to start or stop the engine on.
value: true to turn the vehicle on; false to turn it off.
instantly: if true, the vehicle will be set to the state immediately; otherwise, the current driver will physically turn on or off the engine.

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_ENGINE_ON` |
| Hash | `0xB64CFA14CB9A2E78` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `value` (BOOL), `instantly` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`value`** (`BOOL`)
- **`instantly`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleEngineOn(vehicle, value, instantly)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB64CFA14CB9A2E78, vehicle, value, instantly)
```


---

## SET_VEHICLE_EXCLUSIVE_DRIVER

**Description:** index: 0 - 1

Used to be incorrectly named _SET_VEHICLE_EXCLUSIVE_DRIVER_2

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_EXCLUSIVE_DRIVER` |
| Hash | `0xC6B9BF123B9463B6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `ped` (Ped), `index` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`ped`** (`Ped`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetVehicleExclusiveDriver(vehicle, ped, index)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC6B9BF123B9463B6, vehicle, ped, index)
```


---

## SET_VEHICLE_EXPLODES_ON_HIGH_EXPLOSION_DAMAGE

**Description:** Sets a vehicle to be strongly resistant to explosions. p0 is the vehicle; set p1 to false to toggle the effect on/off.

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_EXPLODES_ON_HIGH_EXPLOSION_DAMAGE` |
| Hash | `0xA402939C6761E1A3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleExplodesOnHighExplosionDamage(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA402939C6761E1A3, vehicle, toggle)
```


---

## SET_VEHICLE_EXTRA

**Description:** Note: only some vehicle have extras
https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_extras.lua

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_EXTRA` |
| Hash | `0xBB6F89150BC9D16B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `extraId` (int), `disable` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`extraId`** (`int`)
- **`disable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleExtra(vehicle, extraId, disable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB6F89150BC9D16B, vehicle, extraId, disable)
```


---

## SET_VEHICLE_FIXED

**Description:** This fixes a vehicle.
If the vehicle's engine's broken then you cannot fix it with this native.

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_FIXED` |
| Hash | `0x79811282A9D1AE56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
SetVehicleFixed(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x79811282A9D1AE56, vehicle)
```


---

## SET_VEHICLE_FORWARD_SPEED

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_FORWARD_SPEED` |
| Hash | `0xF9F92AF49F12F6E7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `speed` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleForwardSpeed(vehicle, speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF9F92AF49F12F6E7, vehicle, speed)
```


---

## SET_VEHICLE_HANDBRAKE

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_HANDBRAKE` |
| Hash | `0x91BE51AEC4E99710` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleHandbrake(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x91BE51AEC4E99710, vehicle, toggle)
```


---

## SET_VEHICLE_HAS_BEEN_OWNED_BY_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_HAS_BEEN_OWNED_BY_PLAYER` |
| Hash | `0xBB5A3FA8ED3979C5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `owned` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`owned`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleHasBeenOwnedByPlayer(vehicle, owned)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB5A3FA8ED3979C5, vehicle, owned)
```


---

## SET_VEHICLE_HAS_STRONG_AXLES

**Description:** if true, axles won't bend.

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_HAS_STRONG_AXLES` |
| Hash | `0x252253C8A45AA1FC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleHasStrongAxles(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x252253C8A45AA1FC, vehicle, toggle)
```


---

## SET_VEHICLE_HAS_UNBREAKABLE_LIGHTS

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_HAS_UNBREAKABLE_LIGHTS` |
| Hash | `0xC903855E028A05F2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleHasUnbreakableLights(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC903855E028A05F2, vehicle, p1)
```


---

## SET_VEHICLE_INACTIVE_DURING_PLAYBACK

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_INACTIVE_DURING_PLAYBACK` |
| Hash | `0x4EA71B4C9DB3C3F1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleInactiveDuringPlayback(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4EA71B4C9DB3C3F1, vehicle, toggle)
```


---

## SET_VEHICLE_INDIVIDUAL_DOORS_LOCKED

**Description:** doorId: see SET_VEHICLE_DOOR_SHUT

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_INDIVIDUAL_DOORS_LOCKED` |
| Hash | `0xA9F1D75195CC40F6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `doorId` (int), `doorLockStatus` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`doorId`** (`int`)
- **`doorLockStatus`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetVehicleIndividualDoorsLocked(vehicle, doorId, doorLockStatus)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA9F1D75195CC40F6, vehicle, doorId, doorLockStatus)
```


---

## SET_VEHICLE_INFLUENCES_WANTED_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_INFLUENCES_WANTED_LEVEL` |
| Hash | `0xC1842F40FD501DA2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleInfluencesWantedLevel(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC1842F40FD501DA2, vehicle, toggle)
```


---

## SET_VEHICLE_IS_CONSIDERED_BY_PLAYER

**Description:** Setting this to false, makes the specified vehicle to where if you press Y your character doesn't even attempt the animation to enter the vehicle. Hence it's not considered aka ignored.

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_IS_CONSIDERED_BY_PLAYER` |
| Hash | `0x54800D386C5825E5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleIsConsideredByPlayer(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x54800D386C5825E5, vehicle, toggle)
```


---

## SET_VEHICLE_IS_STOLEN

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_IS_STOLEN` |
| Hash | `0x6C32FC81DFF25C9A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `isStolen` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`isStolen`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleIsStolen(vehicle, isStolen)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C32FC81DFF25C9A, vehicle, isStolen)
```


---

## SET_VEHICLE_KEEP_ENGINE_ON_WHEN_ABANDONED

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_KEEP_ENGINE_ON_WHEN_ABANDONED` |
| Hash | `0x1549BA7FE83A2383` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleKeepEngineOnWhenAbandoned(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1549BA7FE83A2383, vehicle, toggle)
```


---

## SET_VEHICLE_LIGHTS

**Description:** Sets the vehicle's lights state.

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_LIGHTS` |
| Hash | `0x629F0A0E952CAE7D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `state` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`state`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetVehicleLights(vehicle, state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x629F0A0E952CAE7D, vehicle, state)
```


---

## SET_VEHICLE_LIMIT_SPEED_WHEN_PLAYER_INACTIVE

**Description:** _SET_VEHICLE_LI*

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_LIMIT_SPEED_WHEN_PLAYER_INACTIVE` |
| Hash | `0x8F75941C86EEBFCA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleLimitSpeedWhenPlayerInactive(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8F75941C86EEBFCA, vehicle, p1)
```


---

## SET_VEHICLE_LOD_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_LOD_MULTIPLIER` |
| Hash | `0x5F5E2B1B9EAECC0F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `multiplier` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleLodMultiplier(vehicle, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5F5E2B1B9EAECC0F, vehicle, multiplier)
```


---

## SET_VEHICLE_MAY_BE_USED_BY_GOTO_POINT_ANY_MEANS

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_MAY_BE_USED_BY_GOTO_POINT_ANY_MEANS` |
| Hash | `0x7549B9E841940695` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleMayBeUsedByGotoPointAnyMeans(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7549B9E841940695, vehicle, p1)
```


---

*End of VEHICLE natives part 3*
