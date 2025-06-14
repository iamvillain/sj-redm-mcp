# VEHICLE Natives - Part 1 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** VEHICLE  
**Natives in this file:** 50  
**Total natives in namespace:** 387  
**Generated from:** RDR3natives JSON data

---

## ADD_ROAD_NODE_SPEED_ZONE

| Property | Value |
|----------|-------|
| Native Name | `ADD_ROAD_NODE_SPEED_ZONE` |
| Hash | `0x4C221BAC54D735C3` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any) |

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

### Usage

**Lua (Direct):**
```lua
local result = AddRoadNodeSpeedZone(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4C221BAC54D735C3, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## ARE_ANY_VEHICLE_SEATS_FREE

**Description:** Returns false if every seat is occupied.

| Property | Value |
|----------|-------|
| Native Name | `ARE_ANY_VEHICLE_SEATS_FREE` |
| Hash | `0xA0A424505A1B6429` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = AreAnyVehicleSeatsFree(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA0A424505A1B6429, vehicle)
```


---

## BRING_VEHICLE_TO_HALT

**Description:** This native makes the vehicle stop immediately

distance defines how far it will travel until stopping.

| Property | Value |
|----------|-------|
| Native Name | `BRING_VEHICLE_TO_HALT` |
| Hash | `0x260BE8F09E326A20` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `distance` (float), `duration` (int), `unknown` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`distance`** (`float`)
- **`duration`** (`int`)
- **`unknown`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
BringVehicleToHalt(vehicle, distance, duration, unknown)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x260BE8F09E326A20, vehicle, distance, duration, unknown)
```


---

## CAN_ANCHOR_BOAT_HERE

| Property | Value |
|----------|-------|
| Native Name | `CAN_ANCHOR_BOAT_HERE` |
| Hash | `0xC075176CFB8B4128` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = CanAnchorBoatHere(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC075176CFB8B4128, vehicle)
```


---

## CAN_SHUFFLE_SEAT

**Description:** seatIndex: see CREATE_PED_INSIDE_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `CAN_SHUFFLE_SEAT` |
| Hash | `0xF8B2D32A2231FD24` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `seatIndex` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CanShuffleSeat(vehicle, seatIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF8B2D32A2231FD24, vehicle, seatIndex)
```


---

## CLEAR_LAST_DRIVEN_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_LAST_DRIVEN_VEHICLE` |
| Hash | `0x0EFC5DC62E67609B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearLastDrivenVehicle()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0EFC5DC62E67609B, )
```


---

## COPY_VEHICLE_DAMAGES

**Description:** Copies sourceVehicle's damage (broken bumpers, broken lights, etc.) to targetVehicle.

| Property | Value |
|----------|-------|
| Native Name | `COPY_VEHICLE_DAMAGES` |
| Hash | `0xDBC28A8C683CD80B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `sourceVehicle` (Vehicle), `targetVehicle` (Vehicle) |

### Parameters

- **`sourceVehicle`** (`Vehicle`)
- **`targetVehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
CopyVehicleDamages(sourceVehicle, targetVehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDBC28A8C683CD80B, sourceVehicle, targetVehicle)
```


---

## CREATE_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `CREATE_VEHICLE` |
| Hash | `0xAF35D0D2583051B0` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `modelHash` (Hash), `x` (float), `y` (float), `z` (float), `heading` (float), `isNetwork` (BOOL), `bScriptHostVeh` (BOOL), `bDontAutoCreateDraftAnimals` (BOOL), `p8` (BOOL) |

### Parameters

- **`modelHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`isNetwork`** (`BOOL`)
- **`bScriptHostVeh`** (`BOOL`)
- **`bDontAutoCreateDraftAnimals`** (`BOOL`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateVehicle(modelHash, x, y, z, heading, isNetwork, bScriptHostVeh, bDontAutoCreateDraftAnimals, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAF35D0D2583051B0, modelHash, x, y, z, heading, isNetwork, bScriptHostVeh, bDontAutoCreateDraftAnimals, p8)
```


---

## DELETE_ALL_TRAINS

| Property | Value |
|----------|-------|
| Native Name | `DELETE_ALL_TRAINS` |
| Hash | `0xA3120A1385F17FF7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
DeleteAllTrains()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA3120A1385F17FF7, )
```


---

## DELETE_MISSION_TRAIN

| Property | Value |
|----------|-------|
| Native Name | `DELETE_MISSION_TRAIN` |
| Hash | `0x0D3630FB07E8B570` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle*) |

### Parameters

- **`train`** (`Vehicle*`)

### Usage

**Lua (Direct):**
```lua
DeleteMissionTrain(train)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0D3630FB07E8B570, train)
```


---

## DELETE_VEHICLE

**Description:** Deletes a vehicle.
The vehicle must be a mission entity to delete, so call this before deleting: SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);

eg how to use:
SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
DELETE_VEHICLE(&vehicle);

Deletes the specified vehicle, then sets the handle pointed to by the pointer to NULL.

| Property | Value |
|----------|-------|
| Native Name | `DELETE_VEHICLE` |
| Hash | `0xE20A909D8C4A70F8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle*) |

### Parameters

- **`vehicle`** (`Vehicle*`)

### Usage

**Lua (Direct):**
```lua
DeleteVehicle(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE20A909D8C4A70F8, vehicle)
```


---

## DISABLE_VEHICLE_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_VEHICLE_WEAPON` |
| Hash | `0x94B1E71B144356A5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `disabled` (BOOL), `weaponHash` (Hash), `vehicle` (Vehicle), `owner` (Ped) |

### Parameters

- **`disabled`** (`BOOL`)
- **`weaponHash`** (`Hash`)
- **`vehicle`** (`Vehicle`)
- **`owner`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
DisableVehicleWeapon(disabled, weaponHash, vehicle, owner)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x94B1E71B144356A5, disabled, weaponHash, vehicle, owner)
```


---

## DOES_EXTRA_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_EXTRA_EXIST` |
| Hash | `0xAF5E7E9A7620FFB5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `extraId` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`extraId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesExtraExist(vehicle, extraId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAF5E7E9A7620FFB5, vehicle, extraId)
```


---

## EXPLODE_VEHICLE

**Description:** Explodes a selected vehicle.

Vehicle vehicle = Vehicle you want to explode.
BOOL isAudible = If explosion makes a sound.
BOOL isInvisible = If the explosion is invisible or not.

First BOOL does not give any visual explosion, the vehicle just falls apart completely but slowly and starts to burn.

| Property | Value |
|----------|-------|
| Native Name | `EXPLODE_VEHICLE` |
| Hash | `0x75DCED9EEC5769D7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `isAudible` (BOOL), `isInvisible` (BOOL), `p3` (Any), `p4` (Any) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`isAudible`** (`BOOL`)
- **`isInvisible`** (`BOOL`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
ExplodeVehicle(vehicle, isAudible, isInvisible, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75DCED9EEC5769D7, vehicle, isAudible, isInvisible, p3, p4)
```


---

## FORCE_PLAYBACK_RECORDED_VEHICLE_UPDATE

**Description:** Often called after START_PLAYBACK_RECORDED_VEHICLE and SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE; similar in use to FORCE_ENTITY_AI_AND_ANIMATION_UPDATE.

| Property | Value |
|----------|-------|
| Native Name | `FORCE_PLAYBACK_RECORDED_VEHICLE_UPDATE` |
| Hash | `0x59ECA796021B0539` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ForcePlaybackRecordedVehicleUpdate(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x59ECA796021B0539, vehicle, p1)
```


---

## GET_CLOSEST_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOSEST_VEHICLE` |
| Hash | `0x52F45D033645181B` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `modelHash` (Hash), `flags` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`modelHash`** (`Hash`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetClosestVehicle(x, y, z, radius, modelHash, flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x52F45D033645181B, x, y, z, radius, modelHash, flags)
```


---

## GET_CURRENT_STATION_FOR_TRAIN

**Description:** Returns p1 for 0xBA958F68031DDBFC (stationIndex)

| Property | Value |
|----------|-------|
| Native Name | `GET_CURRENT_STATION_FOR_TRAIN` |
| Hash | `0x86FA6D8B48667D75` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetCurrentStationForTrain(train)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x86FA6D8B48667D75, train)
```


---

## GET_DRAFT_ANIMAL_COUNT

| Property | Value |
|----------|-------|
| Native Name | `GET_DRAFT_ANIMAL_COUNT` |
| Hash | `0xA19447D83294E29F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `expected` (int*), `actual` (int*) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`expected`** (`int*`)
- **`actual`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = GetDraftAnimalCount(vehicle, expected, actual)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA19447D83294E29F, vehicle, expected, actual)
```


---

## GET_DRIVER_OF_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `GET_DRIVER_OF_VEHICLE` |
| Hash | `0x2963B5C1637E8A27` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetDriverOfVehicle(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2963B5C1637E8A27, vehicle)
```


---

## GET_LAST_DRIVEN_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `GET_LAST_DRIVEN_VEHICLE` |
| Hash | `0xA94F3E0AB9695E19` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetLastDrivenVehicle()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA94F3E0AB9695E19, )
```


---

## GET_LAST_PED_IN_VEHICLE_SEAT

**Description:** seatIndex: see CREATE_PED_INSIDE_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `GET_LAST_PED_IN_VEHICLE_SEAT` |
| Hash | `0x74583B19FEEAFDA7` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `seatIndex` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetLastPedInVehicleSeat(vehicle, seatIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74583B19FEEAFDA7, vehicle, seatIndex)
```


---

## GET_PED_IN_VEHICLE_SEAT

**Description:** seatIndex: see CREATE_PED_INSIDE_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_IN_VEHICLE_SEAT` |
| Hash | `0xBB40DD2270B65366` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `seatIndex` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedInVehicleSeat(vehicle, seatIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBB40DD2270B65366, vehicle, seatIndex)
```


---

## GET_POSITION_OF_VEHICLE_RECORDING_AT_TIME

**Description:** This native does no interpolation between pathpoints. The same position will be returned for all times up to the next pathpoint in the recording.

See REQUEST_VEHICLE_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `GET_POSITION_OF_VEHICLE_RECORDING_AT_TIME` |
| Hash | `0x1A00961A1BE94E5E` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `recording` (int), `time` (float), `script` (char*) |

### Parameters

- **`recording`** (`int`)
- **`time`** (`float`)
- **`script`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPositionOfVehicleRecordingAtTime(recording, time, script)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1A00961A1BE94E5E, recording, time, script)
```


---

## GET_ROTATION_OF_VEHICLE_RECORDING_AT_TIME

**Description:** This native does no interpolation between pathpoints. The same rotation will be returned for all times up to the next pathpoint in the recording.

See REQUEST_VEHICLE_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `GET_ROTATION_OF_VEHICLE_RECORDING_AT_TIME` |
| Hash | `0x61787DD28B8CC0D5` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `recording` (int), `time` (float), `script` (char*) |

### Parameters

- **`recording`** (`int`)
- **`time`** (`float`)
- **`script`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetRotationOfVehicleRecordingAtTime(recording, time, script)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x61787DD28B8CC0D5, recording, time, script)
```


---

## GET_TIME_POSITION_IN_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `GET_TIME_POSITION_IN_RECORDING` |
| Hash | `0x233B51C7913FA031` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetTimePositionInRecording(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x233B51C7913FA031, vehicle)
```


---

## GET_TRACK_INDEX_OF_TRAIN

| Property | Value |
|----------|-------|
| Native Name | `GET_TRACK_INDEX_OF_TRAIN` |
| Hash | `0x865FEC2FA899F29C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrackIndexOfTrain(train)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x865FEC2FA899F29C, train)
```


---

## GET_TRAIN_CARRIAGE

| Property | Value |
|----------|-------|
| Native Name | `GET_TRAIN_CARRIAGE` |
| Hash | `0xD0FB093A4CDB932C` |
| Return Type | `Entity` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `trailerNumber` (int) |

### Parameters

- **`train`** (`Vehicle`)
- **`trailerNumber`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainCarriage(train, trailerNumber)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD0FB093A4CDB932C, train, trailerNumber)
```


---

## GET_VEHICLE_BODY_HEALTH

**Description:** Seems related to vehicle health, like the one in IV.
Max 1000, min 0.
Vehicle does not necessarily explode or become undrivable at 0.

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_BODY_HEALTH` |
| Hash | `0x42113B857E33C16E` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleBodyHealth(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x42113B857E33C16E, vehicle)
```


---

## GET_VEHICLE_DOORS_LOCKED_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_DOORS_LOCKED_FOR_PLAYER` |
| Hash | `0xFA2CDDFEB8BC898B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `player` (Player) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleDoorsLockedForPlayer(vehicle, player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFA2CDDFEB8BC898B, vehicle, player)
```


---

## GET_VEHICLE_DOOR_LOCK_STATUS

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_DOOR_LOCK_STATUS` |
| Hash | `0xC867FD144F2469D3` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleDoorLockStatus(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC867FD144F2469D3, vehicle)
```


---

## GET_VEHICLE_ENGINE_HEALTH

**Description:** Returns 1000.0 if the function is unable to get the address of the specified vehicle or if it's not a vehicle.

Minimum: -4000
Maximum: 1000

-4000: Engine is destroyed
0 and below: Engine catches fire and health rapidly declines
300: Engine is smoking and losing functionality
1000: Engine is perfect

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_ENGINE_HEALTH` |
| Hash | `0x90DBFFAC43B22081` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleEngineHealth(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x90DBFFAC43B22081, vehicle)
```


---

## GET_VEHICLE_ESTIMATED_MAX_SPEED

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_ESTIMATED_MAX_SPEED` |
| Hash | `0xFE52F34491529F0B` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleEstimatedMaxSpeed(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFE52F34491529F0B, vehicle)
```


---

## GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS` |
| Hash | `0xA9C55F1C15E62E06` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleMaxNumberOfPassengers(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA9C55F1C15E62E06, vehicle)
```


---

## GET_VEHICLE_MODEL_NUMBER_OF_SEATS

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_MODEL_NUMBER_OF_SEATS` |
| Hash | `0x9A578736FF3A17C3` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `modelHash` (Hash) |

### Parameters

- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleModelNumberOfSeats(modelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A578736FF3A17C3, modelHash)
```


---

## GET_VEHICLE_NUMBER_OF_PASSENGERS

**Description:** Gets the number of passengers, NOT including the driver. Use IS_VEHICLE_SEAT_FREE(Vehicle, -1) to also check for the driver

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_NUMBER_OF_PASSENGERS` |
| Hash | `0x59F3F16577CD79B2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleNumberOfPassengers(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x59F3F16577CD79B2, vehicle)
```


---

## GET_VEHICLE_PETROL_TANK_HEALTH

**Description:** 1000 is max health

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_PETROL_TANK_HEALTH` |
| Hash | `0x1E5A9B356D5098BE` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehiclePetrolTankHealth(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1E5A9B356D5098BE, vehicle)
```


---

## GET_VEHICLE_TRAILER_VEHICLE

**Description:** Gets the trailer of a vehicle and puts it into the trailer parameter.

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_TRAILER_VEHICLE` |
| Hash | `0xCF867A239EC30741` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `trailer` (Vehicle*) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`trailer`** (`Vehicle*`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleTrailerVehicle(vehicle, trailer)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCF867A239EC30741, vehicle, trailer)
```


---

## HAS_INSTANT_FILL_VEHICLE_POPULATION_FINISHED

| Property | Value |
|----------|-------|
| Native Name | `HAS_INSTANT_FILL_VEHICLE_POPULATION_FINISHED` |
| Hash | `0x2701D01D5E18FC31` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = HasInstantFillVehiclePopulationFinished()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2701D01D5E18FC31, )
```


---

## HAS_VEHICLE_ASSET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `HAS_VEHICLE_ASSET_LOADED` |
| Hash | `0xB935F3154BC913C8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicleAsset` (Hash) |

### Parameters

- **`vehicleAsset`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasVehicleAssetLoaded(vehicleAsset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB935F3154BC913C8, vehicleAsset)
```


---

## HAS_VEHICLE_RECORDING_BEEN_LOADED

**Description:** See REQUEST_VEHICLE_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `HAS_VEHICLE_RECORDING_BEEN_LOADED` |
| Hash | `0xBA9325BE372AB6EA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `recording` (int), `script` (char*) |

### Parameters

- **`recording`** (`int`)
- **`script`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = HasVehicleRecordingBeenLoaded(recording, script)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBA9325BE372AB6EA, recording, script)
```


---

## INSTANTLY_FILL_VEHICLE_POPULATION

| Property | Value |
|----------|-------|
| Native Name | `INSTANTLY_FILL_VEHICLE_POPULATION` |
| Hash | `0x1FF00DB43026B12F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
InstantlyFillVehiclePopulation()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1FF00DB43026B12F, )
```


---

## IS_ANY_VEHICLE_NEAR_POINT

| Property | Value |
|----------|-------|
| Native Name | `IS_ANY_VEHICLE_NEAR_POINT` |
| Hash | `0x5698BA4FD04D39C4` |
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
local result = IsAnyVehicleNearPoint(x, y, z, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5698BA4FD04D39C4, x, y, z, radius)
```


---

## IS_DRAFT_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_DRAFT_VEHICLE` |
| Hash | `0xEA44E97849E9F3DD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsDraftVehicle(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEA44E97849E9F3DD, vehicle)
```


---

## IS_ENTRY_POINT_FOR_SEAT_CLEAR

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTRY_POINT_FOR_SEAT_CLEAR` |
| Hash | `0x80DDCCB2F4A3EB57` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `seatIndex` (int), `side` (BOOL), `onEnter` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`seatIndex`** (`int`)
- **`side`** (`BOOL`)
- **`onEnter`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntryPointForSeatClear(ped, vehicle, seatIndex, side, onEnter)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x80DDCCB2F4A3EB57, ped, vehicle, seatIndex, side, onEnter)
```


---

## IS_PLAYBACK_GOING_ON_FOR_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYBACK_GOING_ON_FOR_VEHICLE` |
| Hash | `0x02774B3A9034278F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlaybackGoingOnForVehicle(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x02774B3A9034278F, vehicle)
```


---

## IS_PLAYBACK_USING_AI_GOING_ON_FOR_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYBACK_USING_AI_GOING_ON_FOR_VEHICLE` |
| Hash | `0x5A7472606EC5B7C1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlaybackUsingAiGoingOnForVehicle(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5A7472606EC5B7C1, vehicle)
```


---

## IS_SEAT_WARP_ONLY

**Description:** seatIndex: see CREATE_PED_INSIDE_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_SEAT_WARP_ONLY` |
| Hash | `0x7892685BF6D9775E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `seatIndex` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsSeatWarpOnly(vehicle, seatIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7892685BF6D9775E, vehicle, seatIndex)
```


---

## IS_THIS_MODEL_A_BOAT

| Property | Value |
|----------|-------|
| Native Name | `IS_THIS_MODEL_A_BOAT` |
| Hash | `0x799CFC7C5B743B15` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsThisModelABoat(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x799CFC7C5B743B15, model)
```


---

## IS_THIS_MODEL_A_TRAIN

| Property | Value |
|----------|-------|
| Native Name | `IS_THIS_MODEL_A_TRAIN` |
| Hash | `0xFC08C8F8C1EDF174` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsThisModelATrain(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFC08C8F8C1EDF174, model)
```


---

## IS_TRAIN_WAITING_AT_STATION

| Property | Value |
|----------|-------|
| Native Name | `IS_TRAIN_WAITING_AT_STATION` |
| Hash | `0xE887BD31D97793F6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsTrainWaitingAtStation(train)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE887BD31D97793F6, train)
```


---

*End of VEHICLE natives part 1*
