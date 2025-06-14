# VEHICLE Natives - Part 4 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** VEHICLE  
**Natives in this file:** 50  
**Total natives in namespace:** 387  
**Generated from:** RDR3natives JSON data

---

## SET_VEHICLE_NOT_STEALABLE_AMBIENTLY

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_NOT_STEALABLE_AMBIENTLY` |
| Hash | `0x09C970AE59ABF6B2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleNotStealableAmbiently(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x09C970AE59ABF6B2, vehicle, p1)
```


---

## SET_VEHICLE_ON_GROUND_PROPERLY

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_ON_GROUND_PROPERLY` |
| Hash | `0x7263332501E07F52` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = SetVehicleOnGroundProperly(vehicle, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7263332501E07F52, vehicle, p1)
```


---

## SET_VEHICLE_PETROL_TANK_HEALTH

**Description:** 1000 is max health

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_PETROL_TANK_HEALTH` |
| Hash | `0x6AB2918EE3BEC94C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `health` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`health`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehiclePetrolTankHealth(vehicle, health)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6AB2918EE3BEC94C, vehicle, health)
```


---

## SET_VEHICLE_PROVIDES_COVER

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_PROVIDES_COVER` |
| Hash | `0x652712478F1721F4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleProvidesCover(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x652712478F1721F4, vehicle, toggle)
```


---

## SET_VEHICLE_RESPECTS_LOCKS_WHEN_HAS_DRIVER

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_RESPECTS_LOCKS_WHEN_HAS_DRIVER` |
| Hash | `0x33992A808DF1C1BA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleRespectsLocksWhenHasDriver(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x33992A808DF1C1BA, vehicle, p1)
```


---

## SET_VEHICLE_SHOOT_AT_TARGET

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_SHOOT_AT_TARGET` |
| Hash | `0xB79BE78C665B3E6D` |
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
SetVehicleShootAtTarget(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB79BE78C665B3E6D, p0, p1, p2, p3, p4, p5)
```


---

## SET_VEHICLE_STAYS_FROZEN_WHEN_CLEANED_UP

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_STAYS_FROZEN_WHEN_CLEANED_UP` |
| Hash | `0x23A3AB86E0807721` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleStaysFrozenWhenCleanedUp(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x23A3AB86E0807721, vehicle, toggle)
```


---

## SET_VEHICLE_STEER_BIAS

**Description:** Locks the vehicle's steering to the desired angle, explained below.

Requires to be called onTick. Steering is unlocked the moment the function stops being called on the vehicle.

Steer bias:
-1.0 = full right
0.0 = centered steering
1.0 = full left

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_STEER_BIAS` |
| Hash | `0x84DAAE11E9EE4FC3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `value` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleSteerBias(vehicle, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x84DAAE11E9EE4FC3, vehicle, value)
```


---

## SET_VEHICLE_STOP_INSTANTLY_WHEN_PLAYER_INACTIVE

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_STOP_INSTANTLY_WHEN_PLAYER_INACTIVE` |
| Hash | `0xC84E138448507567` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleStopInstantlyWhenPlayerInactive(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC84E138448507567, vehicle, p1)
```


---

## SET_VEHICLE_STRONG

**Description:** If set to true, vehicle will not take crash damage, but is still susceptible to damage from bullets and explosives

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_STRONG` |
| Hash | `0xAB315515C9F8803D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleStrong(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAB315515C9F8803D, vehicle, toggle)
```


---

## SET_VEHICLE_TYRES_CAN_BURST

**Description:** Allows you to toggle bulletproof tires.

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_TYRES_CAN_BURST` |
| Hash | `0xEBD0A4E935106FE5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleTyresCanBurst(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEBD0A4E935106FE5, vehicle, toggle)
```


---

## SET_VEHICLE_UNDRIVEABLE

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_UNDRIVEABLE` |
| Hash | `0x6E884BAB713A2A94` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleUndriveable(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6E884BAB713A2A94, vehicle, toggle)
```


---

## SET_VEHICLE_WHEELS_CAN_BREAK

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_WHEELS_CAN_BREAK` |
| Hash | `0x839137C40275FB77` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `enabled` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleWheelsCanBreak(vehicle, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x839137C40275FB77, vehicle, enabled)
```


---

## SET_VEHICLE_WHEELS_CAN_BREAK_OFF_WHEN_BLOW_UP

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_WHEELS_CAN_BREAK_OFF_WHEN_BLOW_UP` |
| Hash | `0xC462C79379ABBCB1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleWheelsCanBreakOffWhenBlowUp(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC462C79379ABBCB1, vehicle, toggle)
```


---

## SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE

**Description:** SET_TIME_POSITION_IN_RECORDING can be emulated by: desired_time - GET_TIME_POSITION_IN_RECORDING(vehicle)

| Property | Value |
|----------|-------|
| Native Name | `SKIP_TIME_IN_PLAYBACK_RECORDED_VEHICLE` |
| Hash | `0x5F5E6379C59EFC56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `time` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`time`** (`float`)

### Usage

**Lua (Direct):**
```lua
SkipTimeInPlaybackRecordedVehicle(vehicle, time)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5F5E6379C59EFC56, vehicle, time)
```


---

## START_PLAYBACK_RECORDED_VEHICLE

**Description:** p3 is some flag related to 'trailers' (invokes CVehicle::GetTrailer).

See REQUEST_VEHICLE_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `START_PLAYBACK_RECORDED_VEHICLE` |
| Hash | `0x4932B84E3276508E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `recording` (int), `script` (char*), `p3` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`recording`** (`int`)
- **`script`** (`char*`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StartPlaybackRecordedVehicle(vehicle, recording, script, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4932B84E3276508E, vehicle, recording, script, p3)
```


---

## START_VEHICLE_HORN

**Description:** Sounds the horn for the specified vehicle.

vehicle: The vehicle to activate the horn for.
mode: The hash of "NORMAL" or "HELDDOWN". Can be 0.
duration: The duration to sound the horn, in milliseconds.

Note: If a player is in the vehicle, it will only sound briefly.

| Property | Value |
|----------|-------|
| Native Name | `START_VEHICLE_HORN` |
| Hash | `0xB4E3BFC39CA16057` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `duration` (int), `mode` (Hash), `forever` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`duration`** (`int`)
- **`mode`** (`Hash`)
- **`forever`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StartVehicleHorn(vehicle, duration, mode, forever)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB4E3BFC39CA16057, vehicle, duration, mode, forever)
```


---

## STOP_BRINGING_VEHICLE_TO_HALT

**Description:** Old name: _STOP_BRING_VEHICLE_TO_HALT

| Property | Value |
|----------|-------|
| Native Name | `STOP_BRINGING_VEHICLE_TO_HALT` |
| Hash | `0x7C06330BFDDA182E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
StopBringingVehicleToHalt(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C06330BFDDA182E, vehicle)
```


---

## STOP_PLAYBACK_RECORDED_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `STOP_PLAYBACK_RECORDED_VEHICLE` |
| Hash | `0xBF9B4D6267E8C26D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
StopPlaybackRecordedVehicle(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBF9B4D6267E8C26D, vehicle)
```


---

## TRACK_VEHICLE_VISIBILITY

| Property | Value |
|----------|-------|
| Native Name | `TRACK_VEHICLE_VISIBILITY` |
| Hash | `0x1F3969B140DEE157` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
TrackVehicleVisibility(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1F3969B140DEE157, vehicle)
```


---

## _0x012701ED938B85DE

**Description:** Only used in SP Scripts.
Related to Vehicle Speed.

| Property | Value |
|----------|-------|
| Native Name | `_0x012701ED938B85DE` |
| Hash | `0x012701ED938B85DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x012701ED938B85DE(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x012701ED938B85DE, p0, p1)
```


---

## _0x0355FE37240E2C77

| Property | Value |
|----------|-------|
| Native Name | `_0x0355FE37240E2C77` |
| Hash | `0x0355FE37240E2C77` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0355FE37240E2C77(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0355FE37240E2C77, p0, p1)
```


---

## _0x04F0579DBDD32F34

**Description:** _SET_VEHICLE_*

| Property | Value |
|----------|-------|
| Native Name | `_0x04F0579DBDD32F34` |
| Hash | `0x04F0579DBDD32F34` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
_0x04F0579DBDD32F34(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x04F0579DBDD32F34, vehicle)
```


---

## _0x0516FAE561276EFC

**Description:** Takes value returned from 0x45853F4E17D847D5

| Property | Value |
|----------|-------|
| Native Name | `_0x0516FAE561276EFC` |
| Hash | `0x0516FAE561276EFC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `trackIndex` (int) |

### Parameters

- **`trackIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0516FAE561276EFC(trackIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0516FAE561276EFC, trackIndex)
```


---

## _0x06A09A6E0C6D2A84

**Description:** _SET_TRAIN_*

| Property | Value |
|----------|-------|
| Native Name | `_0x06A09A6E0C6D2A84` |
| Hash | `0x06A09A6E0C6D2A84` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `p1` (BOOL) |

### Parameters

- **`train`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x06A09A6E0C6D2A84(train, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06A09A6E0C6D2A84, train, p1)
```


---

## _0x0794199B25E499E1

**Description:** _SET_VEHICLE_S*

| Property | Value |
|----------|-------|
| Native Name | `_0x0794199B25E499E1` |
| Hash | `0x0794199B25E499E1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `wagon` (Vehicle), `p1` (BOOL) |

### Parameters

- **`wagon`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x0794199B25E499E1(wagon, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0794199B25E499E1, wagon, p1)
```


---

## _0x07E2E21E799080A0

| Property | Value |
|----------|-------|
| Native Name | `_0x07E2E21E799080A0` |
| Hash | `0x07E2E21E799080A0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x07E2E21E799080A0(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x07E2E21E799080A0, p0, p1)
```


---

## _RETURN_TRAIN_INFO_FROM_HANDLE

**Description:** Outputs track hash and junction index on given train vehicle handle.
_RESET_VEHICLE_* (?)

| Property | Value |
|----------|-------|
| Native Name | `_RETURN_TRAIN_INFO_FROM_HANDLE` |
| Hash | `0x09034479E6E3E269` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `trainTrack` (Hash*), `junctionIndex` (int*) |

### Parameters

- **`train`** (`Vehicle`)
- **`trainTrack`** (`Hash*`)
- **`junctionIndex`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = ReturnTrainInfoFromHandle(train, trainTrack, junctionIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x09034479E6E3E269, train, trainTrack, junctionIndex)
```


### Examples

**Example 1 (lua):**
```lua
local trainTrack, junctionIndex = Citizen.InvokeNative(0x09034479E6E3E269, train, Citizen.PointerValueInt(), Citizen.PointerValueInt())
```


---

## _0x0BA4250D20007C2E

| Property | Value |
|----------|-------|
| Native Name | `_0x0BA4250D20007C2E` |
| Hash | `0x0BA4250D20007C2E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0BA4250D20007C2E(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0BA4250D20007C2E, p0)
```


---

## _0x0CD7914D17A970AB

| Property | Value |
|----------|-------|
| Native Name | `_0x0CD7914D17A970AB` |
| Hash | `0x0CD7914D17A970AB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0CD7914D17A970AB(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0CD7914D17A970AB, p0, p1)
```


---

## _0x0D5FDF0D36FA10CD

| Property | Value |
|----------|-------|
| Native Name | `_0x0D5FDF0D36FA10CD` |
| Hash | `0x0D5FDF0D36FA10CD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `trackIndex` (int) |

### Parameters

- **`trackIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x0D5FDF0D36FA10CD(trackIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0D5FDF0D36FA10CD, trackIndex)
```


---

## _0x0E558D3A49D759D6

| Property | Value |
|----------|-------|
| Native Name | `_0x0E558D3A49D759D6` |
| Hash | `0x0E558D3A49D759D6` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0E558D3A49D759D6(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E558D3A49D759D6, p0, p1)
```


---

## _0x0F7F603BDE08C4D3

| Property | Value |
|----------|-------|
| Native Name | `_0x0F7F603BDE08C4D3` |
| Hash | `0x0F7F603BDE08C4D3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0F7F603BDE08C4D3(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0F7F603BDE08C4D3, p0)
```


---

## _0x0FDDEE66E3465726

| Property | Value |
|----------|-------|
| Native Name | `_0x0FDDEE66E3465726` |
| Hash | `0x0FDDEE66E3465726` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0FDDEE66E3465726(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0FDDEE66E3465726, p0)
```


---

## _0x104D9A7B1C0D0783

| Property | Value |
|----------|-------|
| Native Name | `_0x104D9A7B1C0D0783` |
| Hash | `0x104D9A7B1C0D0783` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x104D9A7B1C0D0783(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x104D9A7B1C0D0783, vehicle, p1)
```


---

## _0x1121B07088ED3013

| Property | Value |
|----------|-------|
| Native Name | `_0x1121B07088ED3013` |
| Hash | `0x1121B07088ED3013` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1121B07088ED3013(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1121B07088ED3013, p0)
```


---

## _0x1180A2974D251B7B

**Description:** Returns p1 for 0xBA958F68031DDBFC (stationIndex)
_GET_N* (NEAREST_STATION_FOR_TRAIN?)

| Property | Value |
|----------|-------|
| Native Name | `_0x1180A2974D251B7B` |
| Hash | `0x1180A2974D251B7B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `train` (Vehicle) |

### Parameters

- **`train`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1180A2974D251B7B(train)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1180A2974D251B7B, train)
```


---

## _0x12F6C6ED3EFF42DE

**Description:** Params: coords = GET_ENTITY_VELOCITY
_SET_VELOCITY*

| Property | Value |
|----------|-------|
| Native Name | `_0x12F6C6ED3EFF42DE` |
| Hash | `0x12F6C6ED3EFF42DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x12F6C6ED3EFF42DE(vehicle, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x12F6C6ED3EFF42DE, vehicle, x, y, z)
```


---

## _0x13C190302369308B

| Property | Value |
|----------|-------|
| Native Name | `_0x13C190302369308B` |
| Hash | `0x13C190302369308B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x13C190302369308B(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x13C190302369308B, p0)
```


---

## _0x13EB275BF81636D1

| Property | Value |
|----------|-------|
| Native Name | `_0x13EB275BF81636D1` |
| Hash | `0x13EB275BF81636D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x13EB275BF81636D1(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x13EB275BF81636D1, p0, p1)
```


---

## _0x14DA8C4BC2CCD90A

| Property | Value |
|----------|-------|
| Native Name | `_0x14DA8C4BC2CCD90A` |
| Hash | `0x14DA8C4BC2CCD90A` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x14DA8C4BC2CCD90A(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x14DA8C4BC2CCD90A, p0)
```


---

## _0x15206E88FF7617DF

| Property | Value |
|----------|-------|
| Native Name | `_0x15206E88FF7617DF` |
| Hash | `0x15206E88FF7617DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `trackIndex` (int), `p1` (float) |

### Parameters

- **`trackIndex`** (`int`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x15206E88FF7617DF(trackIndex, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x15206E88FF7617DF, trackIndex, p1)
```


---

## _0x15CC8C33D7FFCC4A

| Property | Value |
|----------|-------|
| Native Name | `_0x15CC8C33D7FFCC4A` |
| Hash | `0x15CC8C33D7FFCC4A` |
| Return Type | `void` |
| Build | `1436` |
| Parameters | `vehicle` (Vehicle), `p1` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x15CC8C33D7FFCC4A(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x15CC8C33D7FFCC4A, vehicle, p1)
```


---

## _0x160C1B5AB48AB87C

| Property | Value |
|----------|-------|
| Native Name | `_0x160C1B5AB48AB87C` |
| Hash | `0x160C1B5AB48AB87C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `p1` (float) |

### Parameters

- **`train`** (`Vehicle`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x160C1B5AB48AB87C(train, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x160C1B5AB48AB87C, train, p1)
```


---

## _0x165BE2001E5E4B75

| Property | Value |
|----------|-------|
| Native Name | `_0x165BE2001E5E4B75` |
| Hash | `0x165BE2001E5E4B75` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x165BE2001E5E4B75(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x165BE2001E5E4B75, p0)
```


---

## _0x16B86A49E072AA85

| Property | Value |
|----------|-------|
| Native Name | `_0x16B86A49E072AA85` |
| Hash | `0x16B86A49E072AA85` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x16B86A49E072AA85()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x16B86A49E072AA85, )
```


---

## _0x172E9DD35858DCD7

| Property | Value |
|----------|-------|
| Native Name | `_0x172E9DD35858DCD7` |
| Hash | `0x172E9DD35858DCD7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x172E9DD35858DCD7(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x172E9DD35858DCD7, p0)
```


---

## _ARE_ANY_VEHICLE_WHEELS_DESTROYED

**Description:** returns true if any wheel is destroyed/detached

| Property | Value |
|----------|-------|
| Native Name | `_ARE_ANY_VEHICLE_WHEELS_DESTROYED` |
| Hash | `0x18714953CCED17D3` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = AreAnyVehicleWheelsDestroyed(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x18714953CCED17D3, vehicle)
```


---

## _0x1A861F899EBBE17C

| Property | Value |
|----------|-------|
| Native Name | `_0x1A861F899EBBE17C` |
| Hash | `0x1A861F899EBBE17C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `p1` (BOOL) |

### Parameters

- **`train`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x1A861F899EBBE17C(train, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1A861F899EBBE17C, train, p1)
```


---

## _0x1BFBAFCC6760FF02

| Property | Value |
|----------|-------|
| Native Name | `_0x1BFBAFCC6760FF02` |
| Hash | `0x1BFBAFCC6760FF02` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `train` (Vehicle), `p1` (BOOL) |

### Parameters

- **`train`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x1BFBAFCC6760FF02(train, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1BFBAFCC6760FF02, train, p1)
```


---

*End of VEHICLE natives part 4*
