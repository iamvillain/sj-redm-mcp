# VEHICLE Natives - Part 2 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** VEHICLE  
**Natives in this file:** 50  
**Total natives in namespace:** 387  
**Generated from:** RDR3natives JSON data

---

## IS_VEHICLE_DOOR_FULLY_OPEN

**Description:** doorId: see SET_VEHICLE_DOOR_SHUT

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_DOOR_FULLY_OPEN` |
| Hash | `0x7AE191143C7A9107` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `doorId` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`doorId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleDoorFullyOpen(vehicle, doorId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7AE191143C7A9107, vehicle, doorId)
```


---

## IS_VEHICLE_DRIVEABLE

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_DRIVEABLE` |
| Hash | `0xB86D29B10F627379` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleDriveable(vehicle, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB86D29B10F627379, vehicle, p1, p2)
```


---

## IS_VEHICLE_EXTRA_TURNED_ON

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_EXTRA_TURNED_ON` |
| Hash | `0xFA9A55D9C4351625` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `extraId` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`extraId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleExtraTurnedOn(vehicle, extraId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFA9A55D9C4351625, vehicle, extraId)
```


---

## IS_VEHICLE_IN_BURNOUT

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_IN_BURNOUT` |
| Hash | `0x3F5029A8FC060C48` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleInBurnout(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3F5029A8FC060C48, vehicle)
```


---

## IS_VEHICLE_MODEL

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_MODEL` |
| Hash | `0x0045A54EC7A22455` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `model` (Hash) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleModel(vehicle, model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0045A54EC7A22455, vehicle, model)
```


---

## IS_VEHICLE_ON_ALL_WHEELS

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_ON_ALL_WHEELS` |
| Hash | `0x0D5D119529654EE0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleOnAllWheels(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0D5D119529654EE0, vehicle)
```


---

## IS_VEHICLE_SEAT_FREE

**Description:** seatIndex: see CREATE_PED_INSIDE_VEHICLE
Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_SEAT_FREE` |
| Hash | `0xE052C1B1CAA4ECE4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `seatIndex` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleSeatFree(vehicle, seatIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE052C1B1CAA4ECE4, vehicle, seatIndex)
```


---

## IS_VEHICLE_STOPPED

**Description:** Returns true if the vehicle's current speed is less than, or equal to 0.0025f.

For some vehicles it returns true if the current speed is <= 0.00039999999.

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_STOPPED` |
| Hash | `0x78C3311A73135241` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleStopped(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x78C3311A73135241, vehicle)
```


---

## IS_VEHICLE_STUCK_TIMER_UP

**Description:** VEH_STUCK_ON_ROOF = 0,
VEH_STUCK_ON_SIDE,
VEH_STUCK_HUNG_UP,
VEH_STUCK_JAMMED

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_STUCK_TIMER_UP` |
| Hash | `0x1ABA9753939503C5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `stuckType` (int), `ms` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`stuckType`** (`int`)
- **`ms`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleStuckTimerUp(vehicle, stuckType, ms)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1ABA9753939503C5, vehicle, stuckType, ms)
```


---

## IS_VEHICLE_VISIBLE

**Description:** Requires a visibility tracker on the vehicle (TRACK_VEHICLE_VISIBILITY)

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_VISIBLE` |
| Hash | `0x424910CD5DE8C246` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleVisible(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x424910CD5DE8C246, vehicle)
```


---

## IS_VEHICLE_WINDOW_INTACT

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_WINDOW_INTACT` |
| Hash | `0x0E7910A63E05B12C` |
| Return Type | `BOOL` |
| Build | `1436` |
| Parameters | `vehicle` (Vehicle), `windowIndex` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`windowIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleWindowIntact(vehicle, windowIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E7910A63E05B12C, vehicle, windowIndex)
```


---

## IS_VEHICLE_WRECKED

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_WRECKED` |
| Hash | `0xDDBEA5506C848227` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleWrecked(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDDBEA5506C848227, vehicle)
```


---

## LOCK_DOORS_WHEN_NO_LONGER_NEEDED

| Property | Value |
|----------|-------|
| Native Name | `LOCK_DOORS_WHEN_NO_LONGER_NEEDED` |
| Hash | `0x1EF36558FBDE2DAA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
LockDoorsWhenNoLongerNeeded(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1EF36558FBDE2DAA, vehicle)
```


---

## MODIFY_VEHICLE_TOP_SPEED

| Property | Value |
|----------|-------|
| Native Name | `MODIFY_VEHICLE_TOP_SPEED` |
| Hash | `0x35AD938C74CACD6A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `value` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
ModifyVehicleTopSpeed(vehicle, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x35AD938C74CACD6A, vehicle, value)
```


---

## REMOVE_ROAD_NODE_SPEED_ZONE

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_ROAD_NODE_SPEED_ZONE` |
| Hash | `0xFE9AB3354ACE6C9C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `speedzone` (int) |

### Parameters

- **`speedzone`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RemoveRoadNodeSpeedZone(speedzone)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFE9AB3354ACE6C9C, speedzone)
```


---

## REMOVE_VEHICLES_FROM_GENERATORS_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_VEHICLES_FROM_GENERATORS_IN_AREA` |
| Hash | `0xC619A44639BC0CB4` |
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
RemoveVehiclesFromGeneratorsInArea(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC619A44639BC0CB4, p0, p1, p2, p3, p4, p5)
```


---

## REMOVE_VEHICLE_ASSET

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_VEHICLE_ASSET` |
| Hash | `0x888A4E675B38F5AD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicleAsset` (Hash) |

### Parameters

- **`vehicleAsset`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveVehicleAsset(vehicleAsset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x888A4E675B38F5AD, vehicleAsset)
```


---

## REMOVE_VEHICLE_RECORDING

**Description:** See REQUEST_VEHICLE_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_VEHICLE_RECORDING` |
| Hash | `0x139E35755418F6AA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
RemoveVehicleRecording(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x139E35755418F6AA, p0, p1)
```


---

## REMOVE_VEHICLE_WINDOW

**Description:** windowIndex:
0 = Front Right Window
1 = Front Left Window
2 = Back Right Window
3 = Back Left Window

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_VEHICLE_WINDOW` |
| Hash | `0x745F15A215F2DDF1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `windowIndex` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`windowIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemoveVehicleWindow(vehicle, windowIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x745F15A215F2DDF1, vehicle, windowIndex)
```


---

## REQUEST_VEHICLE_ASSET

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_VEHICLE_ASSET` |
| Hash | `0x81A15811460FAB3A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicleHash` (Hash), `vehicleAsset` (int) |

### Parameters

- **`vehicleHash`** (`Hash`)
- **`vehicleAsset`** (`int`)

### Usage

**Lua (Direct):**
```lua
RequestVehicleAsset(vehicleHash, vehicleAsset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x81A15811460FAB3A, vehicleHash, vehicleAsset)
```


---

## REQUEST_VEHICLE_HIGH_DETAIL_MODEL

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_VEHICLE_HIGH_DETAIL_MODEL` |
| Hash | `0x84B81EF78BD22357` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
RequestVehicleHighDetailModel(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x84B81EF78BD22357, vehicle)
```


---

## REQUEST_VEHICLE_RECORDING

**Description:** Request the vehicle recording defined by the lowercase format string "%s%03d.yvr". For example, REQUEST_VEHICLE_RECORDING(1, "FBIs1UBER") corresponds to fbis1uber001.yvr.
For all vehicle recording/playback natives, "script" is a common prefix that usually corresponds to the script/mission the recording is used in, "recording" is its int suffix, and "id" corresponds to a unique identifier within the recording streaming module.
(GTA) Note that only 24 recordings (hardcoded in multiple places) can ever active at a given time before clobbering begins.

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_VEHICLE_RECORDING` |
| Hash | `0xC474CF16EDA45DC9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `recording` (int), `script` (char*) |

### Parameters

- **`recording`** (`int`)
- **`script`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RequestVehicleRecording(recording, script)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC474CF16EDA45DC9, recording, script)
```


---

## RESET_VEHICLE_STUCK_TIMER

| Property | Value |
|----------|-------|
| Native Name | `RESET_VEHICLE_STUCK_TIMER` |
| Hash | `0x23298B468F7D88B6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `nullAttributes` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`nullAttributes`** (`int`)

### Usage

**Lua (Direct):**
```lua
ResetVehicleStuckTimer(vehicle, nullAttributes)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x23298B468F7D88B6, vehicle, nullAttributes)
```


---

## SET_ALLOW_VEHICLE_EXPLODES_ON_CONTACT

| Property | Value |
|----------|-------|
| Native Name | `SET_ALLOW_VEHICLE_EXPLODES_ON_CONTACT` |
| Hash | `0x8D3230A0ED7DE39F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAllowVehicleExplodesOnContact(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8D3230A0ED7DE39F, vehicle, p1)
```


---

## SET_ALL_VEHICLE_GENERATORS_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `SET_ALL_VEHICLE_GENERATORS_ACTIVE` |
| Hash | `0x3D596E6E88A02C24` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetAllVehicleGeneratorsActive()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3D596E6E88A02C24, )
```


---

## SET_ALL_VEHICLE_GENERATORS_ACTIVE_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `SET_ALL_VEHICLE_GENERATORS_ACTIVE_IN_AREA` |
| Hash | `0xBBB134FB9D50C0CC` |
| Return Type | `void` |
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
SetAllVehicleGeneratorsActiveInArea(x1, y1, z1, x2, y2, z2, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBBB134FB9D50C0CC, x1, y1, z1, x2, y2, z2, p6, p7)
```


---

## SET_BOAT_ANCHOR

| Property | Value |
|----------|-------|
| Native Name | `SET_BOAT_ANCHOR` |
| Hash | `0xAEAB044F05B92659` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetBoatAnchor(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAEAB044F05B92659, vehicle, toggle)
```


---

## SET_BOAT_LOW_LOD_ANCHOR_DISTANCE

**Description:** Value: mostly 99999.9f

Old name: _SET_BOAT_MOVEMENT_RESISTANCE

| Property | Value |
|----------|-------|
| Native Name | `SET_BOAT_LOW_LOD_ANCHOR_DISTANCE` |
| Hash | `0xE3261532550D6A9F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `value` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetBoatLowLodAnchorDistance(vehicle, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE3261532550D6A9F, vehicle, value)
```


---

## SET_BOAT_REMAINS_ANCHORED_WHILE_PLAYER_IS_DRIVER

**Description:** Old name: _SET_BOAT_FROZEN_WHEN_ANCHORED

| Property | Value |
|----------|-------|
| Native Name | `SET_BOAT_REMAINS_ANCHORED_WHILE_PLAYER_IS_DRIVER` |
| Hash | `0x286771F3059A37A7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetBoatRemainsAnchoredWhilePlayerIsDriver(vehicle, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x286771F3059A37A7, vehicle, p1, p2)
```


---

## SET_BOAT_SINKS_WHEN_WRECKED

| Property | Value |
|----------|-------|
| Native Name | `SET_BOAT_SINKS_WHEN_WRECKED` |
| Hash | `0x62A6D317A011EA1D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetBoatSinksWhenWrecked(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x62A6D317A011EA1D, vehicle, toggle)
```


---

## SET_BREAKABLE_VEHICLE_LOCKS_UNBREAKABLE

| Property | Value |
|----------|-------|
| Native Name | `SET_BREAKABLE_VEHICLE_LOCKS_UNBREAKABLE` |
| Hash | `0xBC4735F48CD983EF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetBreakableVehicleLocksUnbreakable(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC4735F48CD983EF, vehicle, toggle)
```


---

## SET_DISABLE_RANDOM_TRAINS_THIS_FRAME

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `SET_DISABLE_RANDOM_TRAINS_THIS_FRAME` |
| Hash | `0xD4288603E8766FF7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDisableRandomTrainsThisFrame(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD4288603E8766FF7, toggle)
```


---

## SET_DISABLE_SUPERDUMMY

**Description:** Old name: _SET_DISABLE_SUPERDUMMY_MODE

| Property | Value |
|----------|-------|
| Native Name | `SET_DISABLE_SUPERDUMMY` |
| Hash | `0x1716D787D9B94202` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `vehicle` (Vehicle), `disable` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`disable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDisableSuperdummy(vehicle, disable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1716D787D9B94202, vehicle, disable)
```


---

## SET_DISABLE_VEHICLE_ENGINE_FIRES

| Property | Value |
|----------|-------|
| Native Name | `SET_DISABLE_VEHICLE_ENGINE_FIRES` |
| Hash | `0xD146EE5F2B06B95E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDisableVehicleEngineFires(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD146EE5F2B06B95E, vehicle, p1)
```


---

## SET_DISABLE_VEHICLE_PETROL_TANK_DAMAGE

| Property | Value |
|----------|-------|
| Native Name | `SET_DISABLE_VEHICLE_PETROL_TANK_DAMAGE` |
| Hash | `0x5795FBE7A2001C14` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDisableVehiclePetrolTankDamage(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5795FBE7A2001C14, vehicle, toggle)
```


---

## SET_DISABLE_VEHICLE_PETROL_TANK_FIRES

| Property | Value |
|----------|-------|
| Native Name | `SET_DISABLE_VEHICLE_PETROL_TANK_FIRES` |
| Hash | `0xB70986AB19B04AFF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDisableVehiclePetrolTankFires(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB70986AB19B04AFF, vehicle, toggle)
```


---

## SET_DONT_ALLOW_PLAYER_TO_ENTER_VEHICLE_IF_LOCKED_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `SET_DONT_ALLOW_PLAYER_TO_ENTER_VEHICLE_IF_LOCKED_FOR_PLAYER` |
| Hash | `0x63DC1F22C903B709` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDontAllowPlayerToEnterVehicleIfLockedForPlayer(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x63DC1F22C903B709, vehicle, p1)
```


---

## SET_DOOR_ALLOWED_TO_BE_BROKEN_OFF

**Description:** doorId: see SET_VEHICLE_DOOR_SHUT

Old name: _SET_VEHICLE_DOOR_CAN_BREAK

| Property | Value |
|----------|-------|
| Native Name | `SET_DOOR_ALLOWED_TO_BE_BROKEN_OFF` |
| Hash | `0x081FB9D6422F804C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `doorId` (int), `isBreakable` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`doorId`** (`int`)
- **`isBreakable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDoorAllowedToBeBrokenOff(vehicle, doorId, isBreakable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x081FB9D6422F804C, vehicle, doorId, isBreakable)
```


---

## SET_ENABLE_VEHICLE_SLIPSTREAMING

| Property | Value |
|----------|-------|
| Native Name | `SET_ENABLE_VEHICLE_SLIPSTREAMING` |
| Hash | `0x73F1E4F6DF26FE30` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEnableVehicleSlipstreaming(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x73F1E4F6DF26FE30, p0)
```


---

## SET_FORCE_HD_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `SET_FORCE_HD_VEHICLE` |
| Hash | `0x373CB1283308BD7B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetForceHdVehicle(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x373CB1283308BD7B, vehicle, toggle)
```


---

## SET_FORCE_LOW_LOD_ANCHOR_MODE

**Description:** Sets boat to be anchored on spawn, called together with SET_BOAT_ANCHOR and _SET_BOAT_ANCHOR_BUOYANCY_COEFFICIENT

| Property | Value |
|----------|-------|
| Native Name | `SET_FORCE_LOW_LOD_ANCHOR_MODE` |
| Hash | `0x75B49ACD73617437` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetForceLowLodAnchorMode(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75B49ACD73617437, vehicle, p1)
```


---

## SET_FORCE_VEHICLE_ENGINE_DAMAGE_BY_BULLET

| Property | Value |
|----------|-------|
| Native Name | `SET_FORCE_VEHICLE_ENGINE_DAMAGE_BY_BULLET` |
| Hash | `0x7F8E2B131E1DCA6C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetForceVehicleEngineDamageByBullet(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7F8E2B131E1DCA6C, vehicle, toggle)
```


---

## SET_MISSION_TRAIN_AS_NO_LONGER_NEEDED

**Description:** flags = 0: DEFAULT; 1: KEEP_OLD_SPEED

| Property | Value |
|----------|-------|
| Native Name | `SET_MISSION_TRAIN_AS_NO_LONGER_NEEDED` |
| Hash | `0xBBE7648349B49BE8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle*), `flags` (int) |

### Parameters

- **`train`** (`Vehicle*`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetMissionTrainAsNoLongerNeeded(train, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBBE7648349B49BE8, train, flags)
```


---

## SET_MISSION_TRAIN_COORDS

| Property | Value |
|----------|-------|
| Native Name | `SET_MISSION_TRAIN_COORDS` |
| Hash | `0x7632755962AB9922` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`train`** (`Vehicle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetMissionTrainCoords(train, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7632755962AB9922, train, x, y, z)
```


---

## SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME` |
| Hash | `0xFEDFA97638D61D4A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetParkedVehicleDensityMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFEDFA97638D61D4A, multiplier)
```


---

## SET_PED_OWNS_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_OWNS_VEHICLE` |
| Hash | `0x838C216C2B05A009` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
SetPedOwnsVehicle(ped, vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x838C216C2B05A009, ped, vehicle)
```


---

## SET_PLAYBACK_SPEED

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYBACK_SPEED` |
| Hash | `0xD78084EED4CD94C6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `speed` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlaybackSpeed(vehicle, speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD78084EED4CD94C6, vehicle, speed)
```


---

## SET_RANDOM_BOATS

| Property | Value |
|----------|-------|
| Native Name | `SET_RANDOM_BOATS` |
| Hash | `0xF44D446D4E36DB87` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetRandomBoats(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF44D446D4E36DB87, toggle)
```


---

## SET_RANDOM_TRAINS

| Property | Value |
|----------|-------|
| Native Name | `SET_RANDOM_TRAINS` |
| Hash | `0x1156C6EE7E82A98A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetRandomTrains(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1156C6EE7E82A98A, toggle)
```


---

## SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME` |
| Hash | `0x1F91D44490E1EA0C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetRandomVehicleDensityMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1F91D44490E1EA0C, multiplier)
```


---

*End of VEHICLE natives part 2*
