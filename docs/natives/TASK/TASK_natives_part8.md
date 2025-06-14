# TASK Natives - Part 8 of 13

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TASK  
**Natives in this file:** 50  
**Total natives in namespace:** 640  
**Generated from:** RDR3natives JSON data

---

## WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED` |
| Hash | `0x6599D834B12D0800` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
WaypointPlaybackUseDefaultSpeed(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6599D834B12D0800, ped)
```


---

## WAYPOINT_RECORDING_GET_CLOSEST_WAYPOINT

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_RECORDING_GET_CLOSEST_WAYPOINT` |
| Hash | `0xB629A298081F876F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `waypointRecording` (char*), `x` (float), `y` (float), `z` (float), `point` (int) |

### Parameters

- **`waypointRecording`** (`char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`point`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = WaypointRecordingGetClosestWaypoint(waypointRecording, x, y, z, point)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB629A298081F876F, waypointRecording, x, y, z, point)
```


---

## WAYPOINT_RECORDING_GET_COORD

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_RECORDING_GET_COORD` |
| Hash | `0x2FB897405C90B361` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `waypointRecording` (char*), `point` (int), `coord` (Vector3*) |

### Parameters

- **`waypointRecording`** (`char*`)
- **`point`** (`int`)
- **`coord`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
local result = WaypointRecordingGetCoord(waypointRecording, point, coord)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2FB897405C90B361, waypointRecording, point, coord)
```


---

## WAYPOINT_RECORDING_GET_NUM_POINTS

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_RECORDING_GET_NUM_POINTS` |
| Hash | `0x5343532C01A07234` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `waypointRecording` (char*), `points` (int) |

### Parameters

- **`waypointRecording`** (`char*`)
- **`points`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = WaypointRecordingGetNumPoints(waypointRecording, points)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5343532C01A07234, waypointRecording, points)
```


---

## WAYPOINT_RECORDING_GET_SPEED_AT_POINT

| Property | Value |
|----------|-------|
| Native Name | `WAYPOINT_RECORDING_GET_SPEED_AT_POINT` |
| Hash | `0x005622AEBC33ACA9` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `waypointRecording` (char*), `point` (int) |

### Parameters

- **`waypointRecording`** (`char*`)
- **`point`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = WaypointRecordingGetSpeedAtPoint(waypointRecording, point)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x005622AEBC33ACA9, waypointRecording, point)
```


---

## _0x0000A8ACDC2E1B6A

| Property | Value |
|----------|-------|
| Native Name | `_0x0000A8ACDC2E1B6A` |
| Hash | `0x0000A8ACDC2E1B6A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0000A8ACDC2E1B6A(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0000A8ACDC2E1B6A, p0, p1)
```


---

## _0x00FFE0F85253C572

| Property | Value |
|----------|-------|
| Native Name | `_0x00FFE0F85253C572` |
| Hash | `0x00FFE0F85253C572` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x00FFE0F85253C572(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x00FFE0F85253C572, p0)
```


---

## _0x01AF8A3729231A43

| Property | Value |
|----------|-------|
| Native Name | `_0x01AF8A3729231A43` |
| Hash | `0x01AF8A3729231A43` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x01AF8A3729231A43(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x01AF8A3729231A43, p0)
```


---

## _0x0365000D8BF86531

| Property | Value |
|----------|-------|
| Native Name | `_0x0365000D8BF86531` |
| Hash | `0x0365000D8BF86531` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0365000D8BF86531(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0365000D8BF86531, p0)
```


---

## _0x03D741CB4052E26C

| Property | Value |
|----------|-------|
| Native Name | `_0x03D741CB4052E26C` |
| Hash | `0x03D741CB4052E26C` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x03D741CB4052E26C(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x03D741CB4052E26C, p0)
```


---

## _SET_PED_PATH_MAY_USE_SLIDING_SURFACES

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_PATH_MAY_USE_SLIDING_SURFACES` |
| Hash | `0x06ECF3925BC2ABAE` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1311` |
| Parameters | `ped` (Ped), `useSlidingSurfaces` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`useSlidingSurfaces`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedPathMayUseSlidingSurfaces(ped, useSlidingSurfaces)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06ECF3925BC2ABAE, ped, useSlidingSurfaces)
```


---

## _0x098036CAB8373D36

| Property | Value |
|----------|-------|
| Native Name | `_0x098036CAB8373D36` |
| Hash | `0x098036CAB8373D36` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x098036CAB8373D36(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x098036CAB8373D36, p0)
```


---

## _0x098CAA6DBE7D8D82

| Property | Value |
|----------|-------|
| Native Name | `_0x098CAA6DBE7D8D82` |
| Hash | `0x098CAA6DBE7D8D82` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x098CAA6DBE7D8D82(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x098CAA6DBE7D8D82, p0, p1)
```


---

## _0x0A98A362C5A19A43

| Property | Value |
|----------|-------|
| Native Name | `_0x0A98A362C5A19A43` |
| Hash | `0x0A98A362C5A19A43` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0A98A362C5A19A43(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0A98A362C5A19A43, p0)
```


---

## _0x0D322AEF8878B8FE

| Property | Value |
|----------|-------|
| Native Name | `_0x0D322AEF8878B8FE` |
| Hash | `0x0D322AEF8878B8FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0D322AEF8878B8FE(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0D322AEF8878B8FE, p0, p1)
```


---

## _0x0E184495B27BB57D

| Property | Value |
|----------|-------|
| Native Name | `_0x0E184495B27BB57D` |
| Hash | `0x0E184495B27BB57D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x0E184495B27BB57D()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0E184495B27BB57D, )
```


---

## _0x0F4F6C4CE471259D

| Property | Value |
|----------|-------|
| Native Name | `_0x0F4F6C4CE471259D` |
| Hash | `0x0F4F6C4CE471259D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0F4F6C4CE471259D(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0F4F6C4CE471259D, p0, p1)
```


---

## _0x0FE797DD9F70DFA6

| Property | Value |
|----------|-------|
| Native Name | `_0x0FE797DD9F70DFA6` |
| Hash | `0x0FE797DD9F70DFA6` |
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
_0x0FE797DD9F70DFA6(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0FE797DD9F70DFA6, p0, p1, p2, p3)
```


---

## _0x10ADFDF07B7DFFBA

| Property | Value |
|----------|-------|
| Native Name | `_0x10ADFDF07B7DFFBA` |
| Hash | `0x10ADFDF07B7DFFBA` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x10ADFDF07B7DFFBA(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x10ADFDF07B7DFFBA, p0, p1, p2)
```


---

## _0x10C44F633E2D6D9E

| Property | Value |
|----------|-------|
| Native Name | `_0x10C44F633E2D6D9E` |
| Hash | `0x10C44F633E2D6D9E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x10C44F633E2D6D9E(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x10C44F633E2D6D9E, p0)
```


---

## _0x11C7CE1AE38911B5

| Property | Value |
|----------|-------|
| Native Name | `_0x11C7CE1AE38911B5` |
| Hash | `0x11C7CE1AE38911B5` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x11C7CE1AE38911B5(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x11C7CE1AE38911B5, p0)
```


---

## _SET_PED_PATH_PREFER_TO_AVOID_FOLIAGE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_PATH_PREFER_TO_AVOID_FOLIAGE` |
| Hash | `0x12990818C1D35886` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `preferAvoidFoliage` (BOOL), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`preferAvoidFoliage`** (`BOOL`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedPathPreferToAvoidFoliage(ped, preferAvoidFoliage, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x12990818C1D35886, ped, preferAvoidFoliage, p2)
```


---

## _0x141BC64C8D7C5529

| Property | Value |
|----------|-------|
| Native Name | `_0x141BC64C8D7C5529` |
| Hash | `0x141BC64C8D7C5529` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
_0x141BC64C8D7C5529(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x141BC64C8D7C5529, vehicle)
```


---

## _0x152664AA3188B193

| Property | Value |
|----------|-------|
| Native Name | `_0x152664AA3188B193` |
| Hash | `0x152664AA3188B193` |
| Return Type | `Any` |
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
local result = _0x152664AA3188B193(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x152664AA3188B193, p0, p1, p2, p3, p4, p5)
```


---

## _0x1632EB9386CDBE64

| Property | Value |
|----------|-------|
| Native Name | `_0x1632EB9386CDBE64` |
| Hash | `0x1632EB9386CDBE64` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1632EB9386CDBE64(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1632EB9386CDBE64, p0, p1)
```


---

## _0x19BC99C678FBA139

| Property | Value |
|----------|-------|
| Native Name | `_0x19BC99C678FBA139` |
| Hash | `0x19BC99C678FBA139` |
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
_0x19BC99C678FBA139(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x19BC99C678FBA139, p0, p1, p2)
```


---

## _0x1A7D63CB1B0BB223

| Property | Value |
|----------|-------|
| Native Name | `_0x1A7D63CB1B0BB223` |
| Hash | `0x1A7D63CB1B0BB223` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1A7D63CB1B0BB223(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1A7D63CB1B0BB223, p0)
```


---

## _0x1AC5A8AB50CFAA33

| Property | Value |
|----------|-------|
| Native Name | `_0x1AC5A8AB50CFAA33` |
| Hash | `0x1AC5A8AB50CFAA33` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1AC5A8AB50CFAA33(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1AC5A8AB50CFAA33, p0)
```


---

## _IS_SCENARIO_IN_USE

**Description:** Checks whether a specified scenario is currently being used (actively played) by any entity (player or ped). Returns true if the scenario is already occupied, otherwise false.

| Property | Value |
|----------|-------|
| Native Name | `_IS_SCENARIO_IN_USE` |
| Hash | `0x1ACBC313966C21F3` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1436` |
| Parameters | `scenarioHash` (Hash) |

### Parameters

- **`scenarioHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsScenarioInUse(scenarioHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1ACBC313966C21F3, scenarioHash)
```


---

## _0x1D125814EBC517EB

| Property | Value |
|----------|-------|
| Native Name | `_0x1D125814EBC517EB` |
| Hash | `0x1D125814EBC517EB` |
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
_0x1D125814EBC517EB(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1D125814EBC517EB, p0, p1, p2, p3)
```


---

## _0x1ECF56C040FD839C

| Property | Value |
|----------|-------|
| Native Name | `_0x1ECF56C040FD839C` |
| Hash | `0x1ECF56C040FD839C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1ECF56C040FD839C(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1ECF56C040FD839C, p0, p1)
```


---

## _0x1F298C7BD30D1240

| Property | Value |
|----------|-------|
| Native Name | `_0x1F298C7BD30D1240` |
| Hash | `0x1F298C7BD30D1240` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x1F298C7BD30D1240(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1F298C7BD30D1240, ped)
```


---

## _0x1F7A9A9C38C13A56

| Property | Value |
|----------|-------|
| Native Name | `_0x1F7A9A9C38C13A56` |
| Hash | `0x1F7A9A9C38C13A56` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1F7A9A9C38C13A56(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F7A9A9C38C13A56, p0)
```


---

## _0x2064B33F6E6B92D4

| Property | Value |
|----------|-------|
| Native Name | `_0x2064B33F6E6B92D4` |
| Hash | `0x2064B33F6E6B92D4` |
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
_0x2064B33F6E6B92D4(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2064B33F6E6B92D4, p0, p1, p2, p3)
```


---

## _SET_PED_PATH_PREFER_HORSE_WALKABLE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_PATH_PREFER_HORSE_WALKABLE` |
| Hash | `0x216343750545A486` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `preferHorseWalkable` (BOOL), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`preferHorseWalkable`** (`BOOL`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedPathPreferHorseWalkable(ped, preferHorseWalkable, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x216343750545A486, ped, preferHorseWalkable, p2)
```


---

## _0x22CD2C33ED4467A1

| Property | Value |
|----------|-------|
| Native Name | `_0x22CD2C33ED4467A1` |
| Hash | `0x22CD2C33ED4467A1` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x22CD2C33ED4467A1(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x22CD2C33ED4467A1, p0)
```


---

## _0x22CDBF317C40A122

| Property | Value |
|----------|-------|
| Native Name | `_0x22CDBF317C40A122` |
| Hash | `0x22CDBF317C40A122` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x22CDBF317C40A122(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x22CDBF317C40A122, ped)
```


---

## _0x23767D80C7EED7C6

| Property | Value |
|----------|-------|
| Native Name | `_0x23767D80C7EED7C6` |
| Hash | `0x23767D80C7EED7C6` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x23767D80C7EED7C6(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x23767D80C7EED7C6, p0, p1)
```


---

## _0x2416EC2F31F75266

| Property | Value |
|----------|-------|
| Native Name | `_0x2416EC2F31F75266` |
| Hash | `0x2416EC2F31F75266` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `targetEntity` (Entity), `duration` (int), `p3` (Any), `p4` (Any) |

### Parameters

- **`entity`** (`Entity`)
- **`targetEntity`** (`Entity`)
- **`duration`** (`int`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2416EC2F31F75266(entity, targetEntity, duration, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2416EC2F31F75266, entity, targetEntity, duration, p3, p4)
```


---

## _0x244430C13BA5258E

| Property | Value |
|----------|-------|
| Native Name | `_0x244430C13BA5258E` |
| Hash | `0x244430C13BA5258E` |
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
local result = _0x244430C13BA5258E(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x244430C13BA5258E, p0, p1, p2, p3)
```


---

## _0x28EF780BDEA8A639

| Property | Value |
|----------|-------|
| Native Name | `_0x28EF780BDEA8A639` |
| Hash | `0x28EF780BDEA8A639` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x28EF780BDEA8A639(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x28EF780BDEA8A639, ped, p1)
```


---

## _0x2948235DB2058E99

| Property | Value |
|----------|-------|
| Native Name | `_0x2948235DB2058E99` |
| Hash | `0x2948235DB2058E99` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2948235DB2058E99(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2948235DB2058E99, p0, p1)
```


---

## _0x2A10538D0A005E81

| Property | Value |
|----------|-------|
| Native Name | `_0x2A10538D0A005E81` |
| Hash | `0x2A10538D0A005E81` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2A10538D0A005E81(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2A10538D0A005E81, p0, p1)
```


---

## _0x2B8AF29A78024BD3

| Property | Value |
|----------|-------|
| Native Name | `_0x2B8AF29A78024BD3` |
| Hash | `0x2B8AF29A78024BD3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2B8AF29A78024BD3(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2B8AF29A78024BD3, p0)
```


---

## _0x2C497BDEF897C6DF

| Property | Value |
|----------|-------|
| Native Name | `_0x2C497BDEF897C6DF` |
| Hash | `0x2C497BDEF897C6DF` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x2C497BDEF897C6DF(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2C497BDEF897C6DF, p0)
```


---

## _0x2D657B10F211C572

| Property | Value |
|----------|-------|
| Native Name | `_0x2D657B10F211C572` |
| Hash | `0x2D657B10F211C572` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = _0x2D657B10F211C572(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2D657B10F211C572, ped, p1)
```


---

## _0x2E1D6D87346BB7D2

| Property | Value |
|----------|-------|
| Native Name | `_0x2E1D6D87346BB7D2` |
| Hash | `0x2E1D6D87346BB7D2` |
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
_0x2E1D6D87346BB7D2(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E1D6D87346BB7D2, p0, p1, p2, p3)
```


---

## _0x2EB977293923C723

| Property | Value |
|----------|-------|
| Native Name | `_0x2EB977293923C723` |
| Hash | `0x2EB977293923C723` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2EB977293923C723(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2EB977293923C723, p0, p1)
```


---

## _0x30146C25686B7836

| Property | Value |
|----------|-------|
| Native Name | `_0x30146C25686B7836` |
| Hash | `0x30146C25686B7836` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x30146C25686B7836(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x30146C25686B7836, p0, p1)
```


---

## _0x30B391915538EBE2

| Property | Value |
|----------|-------|
| Native Name | `_0x30B391915538EBE2` |
| Hash | `0x30B391915538EBE2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x30B391915538EBE2(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x30B391915538EBE2, p0)
```


---

*End of TASK natives part 8*
