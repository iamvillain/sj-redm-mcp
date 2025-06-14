# VEHICLE Natives - Part 7 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** VEHICLE  
**Natives in this file:** 50  
**Total natives in namespace:** 387  
**Generated from:** RDR3natives JSON data

---

## _0xF05DFAF1ADFEF2CD

**Description:** _IS_* (related to CREATE_MISSION_TRAIN)

| Property | Value |
|----------|-------|
| Native Name | `_0xF05DFAF1ADFEF2CD` |
| Hash | `0xF05DFAF1ADFEF2CD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `trainConfig` (Hash), `x` (float), `y` (float), `z` (float), `direction` (BOOL), `p5` (BOOL) |

### Parameters

- **`trainConfig`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`direction`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0xF05DFAF1ADFEF2CD(trainConfig, x, y, z, direction, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF05DFAF1ADFEF2CD, trainConfig, x, y, z, direction, p5)
```


---

## _0xF57DB8E83DCD8349

| Property | Value |
|----------|-------|
| Native Name | `_0xF57DB8E83DCD8349` |
| Hash | `0xF57DB8E83DCD8349` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xF57DB8E83DCD8349(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF57DB8E83DCD8349, p0)
```


---

## _0xF5EA41C1408695FB

| Property | Value |
|----------|-------|
| Native Name | `_0xF5EA41C1408695FB` |
| Hash | `0xF5EA41C1408695FB` |
| Return Type | `Any` |
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
local result = _0xF5EA41C1408695FB(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF5EA41C1408695FB, p0, p1, p2, p3)
```


---

## _0xF6E3D38869D0F7AD

| Property | Value |
|----------|-------|
| Native Name | `_0xF6E3D38869D0F7AD` |
| Hash | `0xF6E3D38869D0F7AD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xF6E3D38869D0F7AD(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF6E3D38869D0F7AD, p0)
```


---

## _0xF8F7DA13CFBD4532

| Property | Value |
|----------|-------|
| Native Name | `_0xF8F7DA13CFBD4532` |
| Hash | `0xF8F7DA13CFBD4532` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `trackIndex` (int), `p1` (BOOL) |

### Parameters

- **`trackIndex`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xF8F7DA13CFBD4532(trackIndex, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF8F7DA13CFBD4532, trackIndex, p1)
```


---

## _0xFC4F15A7DDDC47B1

**Description:** _SET_DRAFT_VEHICLE_*

| Property | Value |
|----------|-------|
| Native Name | `_0xFC4F15A7DDDC47B1` |
| Hash | `0xFC4F15A7DDDC47B1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xFC4F15A7DDDC47B1(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFC4F15A7DDDC47B1, vehicle, p1)
```


---

## _0xFF2B1F59FB892F14

| Property | Value |
|----------|-------|
| Native Name | `_0xFF2B1F59FB892F14` |
| Hash | `0xFF2B1F59FB892F14` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xFF2B1F59FB892F14(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFF2B1F59FB892F14, p0)
```


---

## _0xFFFE15B433300B8C

| Property | Value |
|----------|-------|
| Native Name | `_0xFFFE15B433300B8C` |
| Hash | `0xFFFE15B433300B8C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xFFFE15B433300B8C(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFFFE15B433300B8C, p0, p1, p2)
```


---

## _ADD_TRAIN_TEMPORARY_STOP

| Property | Value |
|----------|-------|
| Native Name | `_ADD_TRAIN_TEMPORARY_STOP` |
| Hash | `0x41503629D1139ABC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `trackIndex` (int), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`train`** (`Vehicle`)
- **`trackIndex`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddTrainTemporaryStop(train, trackIndex, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x41503629D1139ABC, train, trackIndex, x, y, z)
```


---

## _ATTACH_DRAFT_VEHICLE_HARNESS_PED

| Property | Value |
|----------|-------|
| Native Name | `_ATTACH_DRAFT_VEHICLE_HARNESS_PED` |
| Hash | `0x316CDB5B6E8F4110` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `mount` (Ped), `draft` (Vehicle), `harnessId` (int) |

### Parameters

- **`mount`** (`Ped`)
- **`draft`** (`Vehicle`)
- **`harnessId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = AttachDraftVehicleHarnessPed(mount, draft, harnessId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x316CDB5B6E8F4110, mount, draft, harnessId)
```


---

## _BREAK_OFF_DRAFT_WHEEL

**Description:** Params: destroyingForce is usually 100f in R* Scripts
Similar to 0xD4F5EFB55769D272, _A*

| Property | Value |
|----------|-------|
| Native Name | `_BREAK_OFF_DRAFT_WHEEL` |
| Hash | `0xC372B6A88F6E4AD8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `wheelIndex` (int), `destroyingForce` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`wheelIndex`** (`int`)
- **`destroyingForce`** (`float`)

### Usage

**Lua (Direct):**
```lua
BreakOffDraftWheel(vehicle, wheelIndex, destroyingForce)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC372B6A88F6E4AD8, vehicle, wheelIndex, destroyingForce)
```


---

## _BREAK_OFF_VEHICLE_WHEEL

**Description:** wheelIndex 0: left, wheelIndex 1: right, 4 & 5: unknown

| Property | Value |
|----------|-------|
| Native Name | `_BREAK_OFF_VEHICLE_WHEEL` |
| Hash | `0xD4F5EFB55769D272` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `wheelIndex` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`wheelIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = BreakOffVehicleWheel(vehicle, wheelIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD4F5EFB55769D272, vehicle, wheelIndex)
```


---

## _CREATE_DRAFT_VEHICLE

**Description:** Identical to CREATE_VEHICLE but allows to set draftAnimalPopGroup (see popgroups.#mt for DRAFT_HORSES_*)

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_DRAFT_VEHICLE` |
| Hash | `0x214651FB1DFEBA89` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `modelHash` (Hash), `x` (float), `y` (float), `z` (float), `heading` (float), `isNetwork` (BOOL), `bScriptHostVeh` (BOOL), `bDontAutoCreateDraftAnimals` (BOOL), `draftAnimalPopGroup` (Hash), `p9` (BOOL) |

### Parameters

- **`modelHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`isNetwork`** (`BOOL`)
- **`bScriptHostVeh`** (`BOOL`)
- **`bDontAutoCreateDraftAnimals`** (`BOOL`)
- **`draftAnimalPopGroup`** (`Hash`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateDraftVehicle(modelHash, x, y, z, heading, isNetwork, bScriptHostVeh, bDontAutoCreateDraftAnimals, draftAnimalPopGroup, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x214651FB1DFEBA89, modelHash, x, y, z, heading, isNetwork, bScriptHostVeh, bDontAutoCreateDraftAnimals, draftAnimalPopGroup, p9)
```


---

## _CREATE_MISSION_TRAIN

**Description:** configHash: https://alloc8or.re/rdr3/doc/enums/eTrainConfig.txt
For more information, see trainconfigs.ymt
To make the train AI controlled, set conductor to true and set the speed once.

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_MISSION_TRAIN` |
| Hash | `0xC239DBD9A57D2A71` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `configHash` (Hash), `x` (float), `y` (float), `z` (float), `direction` (BOOL), `passengers` (BOOL), `p6` (BOOL), `conductor` (BOOL) |

### Parameters

- **`configHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`direction`** (`BOOL`)
- **`passengers`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`conductor`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateMissionTrain(configHash, x, y, z, direction, passengers, p6, conductor)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC239DBD9A57D2A71, configHash, x, y, z, direction, passengers, p6, conductor)
```


---

## _DELETE_VEHICLE_LANTERNS

**Description:** Spawn without lanterns set

| Property | Value |
|----------|-------|
| Native Name | `_DELETE_VEHICLE_LANTERNS` |
| Hash | `0xE1A83D4A3B5D7938` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = DeleteVehicleLanterns(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE1A83D4A3B5D7938, vehicle)
```


---

## _DETACH_DRAFT_VEHICLE_HARNESS_FROM_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_DETACH_DRAFT_VEHICLE_HARNESS_FROM_INDEX` |
| Hash | `0x4402960666000E62` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `draft` (Vehicle), `harnessId` (int) |

### Parameters

- **`draft`** (`Vehicle`)
- **`harnessId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DetachDraftVehicleHarnessFromIndex(draft, harnessId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4402960666000E62, draft, harnessId)
```


---

## _DETACH_DRAFT_VEHICLE_HARNESS_PED

| Property | Value |
|----------|-------|
| Native Name | `_DETACH_DRAFT_VEHICLE_HARNESS_PED` |
| Hash | `0xB36D3EC70963BE60` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `draft` (Vehicle), `ped` (Ped) |

### Parameters

- **`draft`** (`Vehicle`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = DetachDraftVehicleHarnessPed(draft, ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB36D3EC70963BE60, draft, ped)
```


---

## _DETACH_WAGON_ENTITY_FROM_TRAIN

**Description:** Only used in train_robbery4 R* Script
_C* - _DEL*

| Property | Value |
|----------|-------|
| Native Name | `_DETACH_WAGON_ENTITY_FROM_TRAIN` |
| Hash | `0x54CBDD6E1B4CB4DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
DetachWagonEntityFromTrain(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x54CBDD6E1B4CB4DF, entity)
```


---

## _DOES_TRAIN_EXIST_ON_TRACK

| Property | Value |
|----------|-------|
| Native Name | `_DOES_TRAIN_EXIST_ON_TRACK` |
| Hash | `0xC29996A337BDD099` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `trackIndex` (int) |

### Parameters

- **`trackIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesTrainExistOnTrack(trackIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC29996A337BDD099, trackIndex)
```


---

## _FADE_AND_DESTROY_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_FADE_AND_DESTROY_VEHICLE` |
| Hash | `0x35DC1877312FBA0F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle*) |

### Parameters

- **`vehicle`** (`Vehicle*`)

### Usage

**Lua (Direct):**
```lua
FadeAndDestroyVehicle(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x35DC1877312FBA0F, vehicle)
```


---

## _GET_BREAKABLE_VEHICLE_LOCKS_STATE

| Property | Value |
|----------|-------|
| Native Name | `_GET_BREAKABLE_VEHICLE_LOCKS_STATE` |
| Hash | `0xE015CF1F2C0959D8` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetBreakableVehicleLocksState(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE015CF1F2C0959D8, vehicle)
```


---

## _GET_BREAKABLE_VEHICLE_LOCK_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `_GET_BREAKABLE_VEHICLE_LOCK_OBJECT` |
| Hash | `0x58F2244C1286D09A` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `index` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetBreakableVehicleLockObject(vehicle, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58F2244C1286D09A, vehicle, index)
```


---

## _GET_CHECKPOINT_TRAIN_SPAWN_LOCATION

| Property | Value |
|----------|-------|
| Native Name | `_GET_CHECKPOINT_TRAIN_SPAWN_LOCATION` |
| Hash | `0x35D302397E524939` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `trackIndex` (int), `x` (float), `y` (float), `z` (float), `distance` (float), `direction` (BOOL) |

### Parameters

- **`trackIndex`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`distance`** (`float`)
- **`direction`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetCheckpointTrainSpawnLocation(trackIndex, x, y, z, distance, direction)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x35D302397E524939, trackIndex, x, y, z, distance, direction)
```


---

## _GET_CURRENT_TRACK_FOR_TRAIN

**Description:** Returns p0 for 0xBA958F68031DDBFC (trackIndex)

| Property | Value |
|----------|-------|
| Native Name | `_GET_CURRENT_TRACK_FOR_TRAIN` |
| Hash | `0xAF787E081AC4A8EE` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetCurrentTrackForTrain(train)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAF787E081AC4A8EE, train)
```


---

## _GET_DRAFT_VEHICLE_DESIRED_SPEED

**Description:** Returns rage::NumericLimits<float>::kMax (3.402823466e+38) if vehicle is not a valid vehicle of type VEHICLE_TYPE_DRAFT.

| Property | Value |
|----------|-------|
| Native Name | `_GET_DRAFT_VEHICLE_DESIRED_SPEED` |
| Hash | `0xC6D7DDC843176701` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetDraftVehicleDesiredSpeed(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC6D7DDC843176701, vehicle)
```


---

## _GET_NEAREST_TRAIN_TRACK_POSITION

| Property | Value |
|----------|-------|
| Native Name | `_GET_NEAREST_TRAIN_TRACK_POSITION` |
| Hash | `0x6DE03BCC15E81710` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetNearestTrainTrackPosition(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6DE03BCC15E81710, x, y, z)
```


---

## _GET_NUM_BREAKABLE_VEHICLE_LOCK_OBJECTS

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_BREAKABLE_VEHICLE_LOCK_OBJECTS` |
| Hash | `0x2FA86833E3617E2D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumBreakableVehicleLockObjects(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2FA86833E3617E2D, vehicle)
```


---

## _GET_NUM_CARS_FROM_TRAIN_CONFIG

**Description:** Returns amount for CAN_REGISTER_MISSION_VEHICLES

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_CARS_FROM_TRAIN_CONFIG` |
| Hash | `0x635423D55CA84FC8` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `trainConfig` (Hash) |

### Parameters

- **`trainConfig`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumCarsFromTrainConfig(trainConfig)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x635423D55CA84FC8, trainConfig)
```


---

## _GET_NUM_DRAFT_VEHICLE_HARNESS_PED

**Description:** Returns number of horses a wagon can have

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_DRAFT_VEHICLE_HARNESS_PED` |
| Hash | `0x5B1A26BB18E7D451` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `modelHash` (Hash) |

### Parameters

- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumDraftVehicleHarnessPed(modelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5B1A26BB18E7D451, modelHash)
```


---

## _GET_PED_IN_DRAFT_HARNESS

**Description:** enum eDraftHarness
{
	DRAFT_HARNESS_LR,
	DRAFT_HARNESS_RR,
	DRAFT_HARNESS_LM,
	DRAFT_HARNESS_RM,
	DRAFT_HARNESS_LF,
	DRAFT_HARNESS_RF,
	DRAFT_HARNESS_COUNT
};

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_IN_DRAFT_HARNESS` |
| Hash | `0xA8BA0BAE0173457B` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `harnessId` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`harnessId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedInDraftHarness(vehicle, harnessId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA8BA0BAE0173457B, vehicle, harnessId)
```


---

## _GET_ROWING_OARS

**Description:** Returns handles of boat paddles entities.

| Property | Value |
|----------|-------|
| Native Name | `_GET_ROWING_OARS` |
| Hash | `0xA6E210FB4283B767` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `left` (Entity*), `right` (Entity*) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`left`** (`Entity*`)
- **`right`** (`Entity*`)

### Usage

**Lua (Direct):**
```lua
GetRowingOars(vehicle, left, right)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA6E210FB4283B767, vehicle, left, right)
```


---

## _GET_STATION_COORDS_FROM_TRAIN_STATION_DATA

**Description:** Returns Coords of vStation
p0 - NET_TRAIN_MANAGER_GET_TRAIN_STATION_DATA
_GET_P* - _GET_T*

| Property | Value |
|----------|-------|
| Native Name | `_GET_STATION_COORDS_FROM_TRAIN_STATION_DATA` |
| Hash | `0xBA958F68031DDBFC` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `trackIndex` (int), `stationIndex` (int) |

### Parameters

- **`trackIndex`** (`int`)
- **`stationIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetStationCoordsFromTrainStationData(trackIndex, stationIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBA958F68031DDBFC, trackIndex, stationIndex)
```


---

## _GET_TRACK_INDEX_FROM_COORDS

**Description:** Returns trackIndex
_E* - _F*

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRACK_INDEX_FROM_COORDS` |
| Hash | `0x85D39F5E3B6D7EB0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrackIndexFromCoords(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x85D39F5E3B6D7EB0, x, y, z)
```


---

## _GET_TRAIN_CAR

**Description:** Returns train car, use GET_TRAIN_CARRIAGE when trailerNumber is bigger than 0

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRAIN_CAR` |
| Hash | `0x671A07C9A1CD50A5` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainCar(train)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x671A07C9A1CD50A5, train)
```


---

## _GET_TRAIN_CARRIAGE_TRAILER_NUMBER

**Description:** Returns iNumCars - to be used with GET_TRAIN_CARRIAGE (trailerNumber)
_C* (O, P, Q, R)

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRAIN_CARRIAGE_TRAILER_NUMBER` |
| Hash | `0x60B7D1DCC312697D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainCarriageTrailerNumber(train)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x60B7D1DCC312697D, train)
```


---

## _GET_TRAIN_DIRECTION

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRAIN_DIRECTION` |
| Hash | `0x3C9628A811CBD724` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainDirection(train)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3C9628A811CBD724, train)
```


---

## _GET_TRAIN_DIRECTION_FROM_INDEX

**Description:** https://i.imgur.com/1rHibjW.jpg

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRAIN_DIRECTION_FROM_INDEX` |
| Hash | `0x67995318F5FAA496` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `trackIndex` (int) |

### Parameters

- **`trackIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainDirectionFromIndex(trackIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x67995318F5FAA496, trackIndex)
```


---

## _GET_TRAIN_MODEL_FROM_TRAIN_CONFIG_BY_CAR_INDEX

**Description:** Returns modelHash

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRAIN_MODEL_FROM_TRAIN_CONFIG_BY_CAR_INDEX` |
| Hash | `0x8DF5F6A19F99F0D5` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `trainConfig` (Hash), `trainCarIndex` (int) |

### Parameters

- **`trainConfig`** (`Hash`)
- **`trainCarIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainModelFromTrainConfigByCarIndex(trainConfig, trainCarIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8DF5F6A19F99F0D5, trainConfig, trainCarIndex)
```


---

## _GET_TRAIN_POSITION_ON_TRACK

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRAIN_POSITION_ON_TRACK` |
| Hash | `0x1E8A921112891651` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `trackIndex` (int) |

### Parameters

- **`trackIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainPositionOnTrack(trackIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1E8A921112891651, trackIndex)
```


---

## _GET_TRAIN_TRACK_FROM_TRAIN_VEHICLE

**Description:** Returns trackIndex

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRAIN_TRACK_FROM_TRAIN_VEHICLE` |
| Hash | `0x45853F4E17D847D5` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainTrackFromTrainVehicle(train)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x45853F4E17D847D5, train)
```


---

## _GET_TRAIN_TRACK_JUNCTION_AT_COORDS

**Description:** Outputs junctionIndex, to be used with 0xE6C5E2125EB210C1

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRAIN_TRACK_JUNCTION_AT_COORDS` |
| Hash | `0x86AFC343CF7F0B34` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `trainTrack` (Hash), `x` (float), `y` (float), `z` (float), `junctionIndex` (int*) |

### Parameters

- **`trainTrack`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`junctionIndex`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainTrackJunctionAtCoords(trainTrack, x, y, z, junctionIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x86AFC343CF7F0B34, trainTrack, x, y, z, junctionIndex)
```


---

## _GET_TRAIN_VEHICLE_FROM_TRACK_INDEX

**Description:** Returns train

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRAIN_VEHICLE_FROM_TRACK_INDEX` |
| Hash | `0x6E585A616ABB8401` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `trackIndex` (int) |

### Parameters

- **`trackIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainVehicleFromTrackIndex(trackIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6E585A616ABB8401, trackIndex)
```


---

## _GET_VEHICLE_DOORS_LOCKED_FOR_TEAM

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_DOORS_LOCKED_FOR_TEAM` |
| Hash | `0xDD1E1393D966D39A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `team` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`team`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleDoorsLockedForTeam(vehicle, team)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDD1E1393D966D39A, vehicle, team)
```


---

## _GET_VEHICLE_IS_PROP_SET_APPLIED

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_IS_PROP_SET_APPLIED` |
| Hash | `0xD798DF5DB67B1659` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleIsPropSetApplied(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD798DF5DB67B1659, vehicle)
```


---

## _GET_VEHICLE_LIVERY

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_LIVERY` |
| Hash | `0xBB765B8FD49A796C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleLivery(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBB765B8FD49A796C, vehicle)
```


---

## _GET_VEHICLE_OWNER

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_OWNER` |
| Hash | `0xB729679356A889AE` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleOwner(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB729679356A889AE, vehicle)
```


---

## _GET_VEHICLE_TINT

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_TINT` |
| Hash | `0xA44D65E6C624526F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleTint(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA44D65E6C624526F, vehicle)
```


---

## _GET_VEHICLE_TURRET_SEAT

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_TURRET_SEAT` |
| Hash | `0xFF5791B7639C2A46` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `seatIndex` (int*) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`seatIndex`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleTurretSeat(vehicle, seatIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFF5791B7639C2A46, vehicle, seatIndex)
```


---

## _HAS_TRAIN_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_HAS_TRAIN_LOADED` |
| Hash | `0xBD3C4A2ED509205E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = HasTrainLoaded(train)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBD3C4A2ED509205E, train)
```


---

## _HIDE_HORSE_REINS

| Property | Value |
|----------|-------|
| Native Name | `_HIDE_HORSE_REINS` |
| Hash | `0x201B8ED4FF7FE9F5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
HideHorseReins(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x201B8ED4FF7FE9F5, vehicle)
```


---

*End of VEHICLE natives part 7*
