# PATHFIND Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PATHFIND  
**Natives in this file:** 50  
**Total natives in namespace:** 76  
**Generated from:** RDR3natives JSON data

---

## ADD_NAVMESH_BLOCKING_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `ADD_NAVMESH_BLOCKING_OBJECT` |
| Hash | `0xFCD5C8E06E502F5A` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (BOOL), `p8` (Any) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`BOOL`)
- **`p8`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = AddNavmeshBlockingObject(p0, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFCD5C8E06E502F5A, p0, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## ADD_NAVMESH_REQUIRED_REGION

| Property | Value |
|----------|-------|
| Native Name | `ADD_NAVMESH_REQUIRED_REGION` |
| Hash | `0x387EAD7EE42F6685` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `radius` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddNavmeshRequiredRegion(x, y, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x387EAD7EE42F6685, x, y, radius)
```


---

## ARE_NODES_LOADED_FOR_AREA

| Property | Value |
|----------|-------|
| Native Name | `ARE_NODES_LOADED_FOR_AREA` |
| Hash | `0xF7B79A50B905A30D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `x2` (float), `y2` (float) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = AreNodesLoadedForArea(x1, y1, x2, y2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF7B79A50B905A30D, x1, y1, x2, y2)
```


---

## DOES_NAVMESH_BLOCKING_OBJECT_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_NAVMESH_BLOCKING_OBJECT_EXIST` |
| Hash | `0x0EAEB0DB4B132399` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = DoesNavmeshBlockingObjectExist(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0EAEB0DB4B132399, p0)
```


---

## GET_APPROX_FLOOR_FOR_POINT

**Description:** Returns CGameWorldHeightMap's minimum Z value at specified point (grid node).

| Property | Value |
|----------|-------|
| Native Name | `GET_APPROX_FLOOR_FOR_POINT` |
| Hash | `0x336511A34F2E5185` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetApproxFloorForPoint(x, y)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x336511A34F2E5185, x, y)
```


---

## GET_CLOSEST_ROAD

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOSEST_ROAD` |
| Hash | `0x132F52BBA570FE92` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (float), `p4` (int), `p5` (Vector3*), `p6` (Vector3*), `p7` (Any*), `p8` (Any*), `p9` (float*), `p10` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`int`)
- **`p5`** (`Vector3*`)
- **`p6`** (`Vector3*`)
- **`p7`** (`Any*`)
- **`p8`** (`Any*`)
- **`p9`** (`float*`)
- **`p10`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetClosestRoad(x, y, z, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x132F52BBA570FE92, x, y, z, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## GET_CLOSEST_VEHICLE_NODE

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOSEST_VEHICLE_NODE` |
| Hash | `0x240A18690AE96513` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `outPosition` (Vector3*), `nodeType` (int), `p5` (float), `p6` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`outPosition`** (`Vector3*`)
- **`nodeType`** (`int`)
- **`p5`** (`float`)
- **`p6`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetClosestVehicleNode(x, y, z, outPosition, nodeType, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x240A18690AE96513, x, y, z, outPosition, nodeType, p5, p6)
```


---

## GET_CLOSEST_VEHICLE_NODE_WITH_HEADING

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOSEST_VEHICLE_NODE_WITH_HEADING` |
| Hash | `0x23CFFD4CCB243354` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `outPosition` (Vector3*), `outHeading` (float*), `nodeType` (int), `p6` (float), `p7` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`outPosition`** (`Vector3*`)
- **`outHeading`** (`float*`)
- **`nodeType`** (`int`)
- **`p6`** (`float`)
- **`p7`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetClosestVehicleNodeWithHeading(x, y, z, outPosition, outHeading, nodeType, p6, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x23CFFD4CCB243354, x, y, z, outPosition, outHeading, nodeType, p6, p7)
```


---

## GET_GPS_BLIP_ROUTE_FOUND

| Property | Value |
|----------|-------|
| Native Name | `GET_GPS_BLIP_ROUTE_FOUND` |
| Hash | `0x869DAACBBE9FA006` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetGpsBlipRouteFound()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x869DAACBBE9FA006, )
```


---

## GET_GPS_BLIP_ROUTE_LENGTH

| Property | Value |
|----------|-------|
| Native Name | `GET_GPS_BLIP_ROUTE_LENGTH` |
| Hash | `0xBBB45C3CF5C8AA85` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetGpsBlipRouteLength()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBBB45C3CF5C8AA85, )
```


---

## GET_NTH_CLOSEST_VEHICLE_NODE

| Property | Value |
|----------|-------|
| Native Name | `GET_NTH_CLOSEST_VEHICLE_NODE` |
| Hash | `0x5A6D8DF6FBC5D0C4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `nthClosest` (int), `outPosition` (Vector3*), `unknown1` (int), `unknown2` (float), `unknown3` (Any) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`nthClosest`** (`int`)
- **`outPosition`** (`Vector3*`)
- **`unknown1`** (`int`)
- **`unknown2`** (`float`)
- **`unknown3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = GetNthClosestVehicleNode(x, y, z, nthClosest, outPosition, unknown1, unknown2, unknown3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5A6D8DF6FBC5D0C4, x, y, z, nthClosest, outPosition, unknown1, unknown2, unknown3)
```


---

## GET_NTH_CLOSEST_VEHICLE_NODE_FAVOUR_DIRECTION

| Property | Value |
|----------|-------|
| Native Name | `GET_NTH_CLOSEST_VEHICLE_NODE_FAVOUR_DIRECTION` |
| Hash | `0x2FAC235A6062F14A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `desiredX` (float), `desiredY` (float), `desiredZ` (float), `nthClosest` (int), `outPosition` (Vector3*), `outHeading` (float*), `nodetype` (int), `p10` (Any), `p11` (Any) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`desiredX`** (`float`)
- **`desiredY`** (`float`)
- **`desiredZ`** (`float`)
- **`nthClosest`** (`int`)
- **`outPosition`** (`Vector3*`)
- **`outHeading`** (`float*`)
- **`nodetype`** (`int`)
- **`p10`** (`Any`)
- **`p11`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = GetNthClosestVehicleNodeFavourDirection(x, y, z, desiredX, desiredY, desiredZ, nthClosest, outPosition, outHeading, nodetype, p10, p11)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2FAC235A6062F14A, x, y, z, desiredX, desiredY, desiredZ, nthClosest, outPosition, outHeading, nodetype, p10, p11)
```


---

## GET_NTH_CLOSEST_VEHICLE_NODE_ID

| Property | Value |
|----------|-------|
| Native Name | `GET_NTH_CLOSEST_VEHICLE_NODE_ID` |
| Hash | `0x116443008E5CEFC3` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `nth` (int), `nodetype` (int), `p5` (float), `p6` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`nth`** (`int`)
- **`nodetype`** (`int`)
- **`p5`** (`float`)
- **`p6`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetNthClosestVehicleNodeId(x, y, z, nth, nodetype, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x116443008E5CEFC3, x, y, z, nth, nodetype, p5, p6)
```


---

## GET_NTH_CLOSEST_VEHICLE_NODE_ID_WITH_HEADING

**Description:** Returns the nth closest vehicle node with a heading to a coord

| Property | Value |
|----------|-------|
| Native Name | `GET_NTH_CLOSEST_VEHICLE_NODE_ID_WITH_HEADING` |
| Hash | `0x4114EAA8A7F7766D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `nthClosest` (int), `returnHeading` (float*), `returnNumLanes` (int*), `nodeFlags` (int), `zMeasureMult` (float), `zTolerance` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`nthClosest`** (`int`)
- **`returnHeading`** (`float*`)
- **`returnNumLanes`** (`int*`)
- **`nodeFlags`** (`int`)
- **`zMeasureMult`** (`float`)
- **`zTolerance`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetNthClosestVehicleNodeIdWithHeading(x, y, z, nthClosest, returnHeading, returnNumLanes, nodeFlags, zMeasureMult, zTolerance)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4114EAA8A7F7766D, x, y, z, nthClosest, returnHeading, returnNumLanes, nodeFlags, zMeasureMult, zTolerance)
```


---

## GET_NTH_CLOSEST_VEHICLE_NODE_WITH_HEADING

| Property | Value |
|----------|-------|
| Native Name | `GET_NTH_CLOSEST_VEHICLE_NODE_WITH_HEADING` |
| Hash | `0x591B40D4390DB54A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `nthClosest` (int), `outPosition` (Vector3*), `heading` (float*), `unknown1` (Any*), `unknown2` (int), `unknown3` (float), `unknown4` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`nthClosest`** (`int`)
- **`outPosition`** (`Vector3*`)
- **`heading`** (`float*`)
- **`unknown1`** (`Any*`)
- **`unknown2`** (`int`)
- **`unknown3`** (`float`)
- **`unknown4`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetNthClosestVehicleNodeWithHeading(x, y, z, nthClosest, outPosition, heading, unknown1, unknown2, unknown3, unknown4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x591B40D4390DB54A, x, y, z, nthClosest, outPosition, heading, unknown1, unknown2, unknown3, unknown4)
```


---

## GET_NUM_NAVMESHES_EXISTING_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `GET_NUM_NAVMESHES_EXISTING_IN_AREA` |
| Hash | `0x01708E8DD3FF8C65` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumNavmeshesExistingInArea(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x01708E8DD3FF8C65, p0, p1, p2, p3, p4, p5)
```


---

## GET_RANDOM_VEHICLE_NODE

| Property | Value |
|----------|-------|
| Native Name | `GET_RANDOM_VEHICLE_NODE` |
| Hash | `0x93E0DB8440B73A7D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `minLanes` (int), `avoidDeadEnds` (BOOL), `avoidHighways` (BOOL), `outPosition` (Vector3*), `nodeId` (int*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`minLanes`** (`int`)
- **`avoidDeadEnds`** (`BOOL`)
- **`avoidHighways`** (`BOOL`)
- **`outPosition`** (`Vector3*`)
- **`nodeId`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = GetRandomVehicleNode(x, y, z, radius, minLanes, avoidDeadEnds, avoidHighways, outPosition, nodeId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x93E0DB8440B73A7D, x, y, z, radius, minLanes, avoidDeadEnds, avoidHighways, outPosition, nodeId)
```


---

## GET_SAFE_COORD_FOR_PED

| Property | Value |
|----------|-------|
| Native Name | `GET_SAFE_COORD_FOR_PED` |
| Hash | `0xB61C8E878A4199CA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `onGround` (BOOL), `outPosition` (Vector3*), `flags` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`onGround`** (`BOOL`)
- **`outPosition`** (`Vector3*`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetSafeCoordForPed(x, y, z, onGround, outPosition, flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB61C8E878A4199CA, x, y, z, onGround, outPosition, flags)
```


---

## GET_VEHICLE_NODE_IS_SWITCHED_OFF

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_NODE_IS_SWITCHED_OFF` |
| Hash | `0x28533DBDDF7C2C97` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `nodeID` (int) |

### Parameters

- **`nodeID`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleNodeIsSwitchedOff(nodeID)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x28533DBDDF7C2C97, nodeID)
```


---

## GET_VEHICLE_NODE_POSITION

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_NODE_POSITION` |
| Hash | `0x8E8D72FF24DEE1FB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `nodeId` (int), `outPosition` (Vector3*) |

### Parameters

- **`nodeId`** (`int`)
- **`outPosition`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
GetVehicleNodePosition(nodeId, outPosition)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8E8D72FF24DEE1FB, nodeId, outPosition)
```


---

## IS_NAVMESH_LOADED_IN_AREA

**Description:** Returns whether navmesh for the region is loaded.

| Property | Value |
|----------|-------|
| Native Name | `IS_NAVMESH_LOADED_IN_AREA` |
| Hash | `0xF813C7E63F9062A5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsNavmeshLoadedInArea(x1, y1, z1, x2, y2, z2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF813C7E63F9062A5, x1, y1, z1, x2, y2, z2)
```


---

## IS_POINT_ON_ROAD

**Description:** Gets a value indicating whether the specified position is on a road.

| Property | Value |
|----------|-------|
| Native Name | `IS_POINT_ON_ROAD` |
| Hash | `0x125BF4ABFC536B09` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `vehicle` (Vehicle) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsPointOnRoad(x, y, z, vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x125BF4ABFC536B09, x, y, z, vehicle)
```


---

## IS_VEHICLE_NODE_ID_VALID

**Description:** Returns true if the id is non zero.

| Property | Value |
|----------|-------|
| Native Name | `IS_VEHICLE_NODE_ID_VALID` |
| Hash | `0x5829A02AF4F0B3CB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicleNodeId` (int) |

### Parameters

- **`vehicleNodeId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleNodeIdValid(vehicleNodeId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5829A02AF4F0B3CB, vehicleNodeId)
```


---

## NAVMESH_REQUEST_PATH

**Description:** Starts a nav mesh query for a path between coordinates with a given ped and returns a handle to be validated by _NAVMESH_REQUESTED_QUERY_STATUS and then _NAVMESH_REQUESTED_PATH_WAYPOINTS_FOUND

Only bit flag values used in scripts are 0, 23, and 29. 23 is used with dogs and horses. 29 with legendary animals.

| Property | Value |
|----------|-------|
| Native Name | `NAVMESH_REQUEST_PATH` |
| Hash | `0x348F211CA2404039` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `bitFlag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`bitFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NavmeshRequestPath(ped, x1, y1, z1, x2, y2, z2, bitFlag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x348F211CA2404039, ped, x1, y1, z1, x2, y2, z2, bitFlag)
```


---

## REMOVE_NAVMESH_BLOCKING_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_NAVMESH_BLOCKING_OBJECT` |
| Hash | `0x46399A7895957C0E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
RemoveNavmeshBlockingObject(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x46399A7895957C0E, p0)
```


---

## REQUEST_PATH_NODES_IN_AREA_THIS_FRAME

**Description:** Old name: REQUEST_PATHS_PREFER_ACCURATE_BOUNDINGSTRUCT

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_PATH_NODES_IN_AREA_THIS_FRAME` |
| Hash | `0x07FB139B592FA687` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `x2` (float), `y2` (float) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = RequestPathNodesInAreaThisFrame(x1, y1, x2, y2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x07FB139B592FA687, x1, y1, x2, y2)
```


---

## RESET_ROADS_IN_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `RESET_ROADS_IN_VOLUME` |
| Hash | `0xD17672447692478E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `p1` (BOOL) |

### Parameters

- **`volume`** (`Volume`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ResetRoadsInVolume(volume, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD17672447692478E, volume, p1)
```


---

## SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME` |
| Hash | `0x0B919E1FB47CC4E0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAmbientPedRangeMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0B919E1FB47CC4E0, multiplier)
```


---

## SET_IGNORE_NO_GPS_FLAG

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `SET_IGNORE_NO_GPS_FLAG` |
| Hash | `0x72751156E7678833` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetIgnoreNoGpsFlag(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x72751156E7678833, toggle)
```


---

## SET_PED_PATHS_BACK_TO_ORIGINAL

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATHS_BACK_TO_ORIGINAL` |
| Hash | `0xE04B48F2CC926253` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPedPathsBackToOriginal(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE04B48F2CC926253, p0, p1, p2, p3, p4, p5, p6)
```


---

## SET_PED_PATHS_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PATHS_IN_AREA` |
| Hash | `0x34F060F4BF92E018` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `unknown` (BOOL), `p7` (Any) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`unknown`** (`BOOL`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPedPathsInArea(x1, y1, z1, x2, y2, z2, unknown, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x34F060F4BF92E018, x1, y1, z1, x2, y2, z2, unknown, p7)
```


---

## SET_ROADS_BACK_TO_ORIGINAL

| Property | Value |
|----------|-------|
| Native Name | `SET_ROADS_BACK_TO_ORIGINAL` |
| Hash | `0x1EE7063B80FFC77C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `xMin` (float), `yMin` (float), `zMin` (float), `xMax` (float), `yMax` (float), `zMax` (float), `p6` (Any), `p7` (Any) |

### Parameters

- **`xMin`** (`float`)
- **`yMin`** (`float`)
- **`zMin`** (`float`)
- **`xMax`** (`float`)
- **`yMax`** (`float`)
- **`zMax`** (`float`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetRoadsBackToOriginal(xMin, yMin, zMin, xMax, yMax, zMax, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1EE7063B80FFC77C, xMin, yMin, zMin, xMax, yMax, zMax, p6, p7)
```


---

## SET_ROADS_BACK_TO_ORIGINAL_IN_ANGLED_AREA

| Property | Value |
|----------|-------|
| Native Name | `SET_ROADS_BACK_TO_ORIGINAL_IN_ANGLED_AREA` |
| Hash | `0x0027501B9F3B407E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any) |

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

### Usage

**Lua (Direct):**
```lua
SetRoadsBackToOriginalInAngledArea(p0, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0027501B9F3B407E, p0, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## SET_ROADS_IN_ANGLED_AREA

| Property | Value |
|----------|-------|
| Native Name | `SET_ROADS_IN_ANGLED_AREA` |
| Hash | `0x1A5AA1208AF5DB59` |
| Return Type | `void` |
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
SetRoadsInAngledArea(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1A5AA1208AF5DB59, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## SET_ROADS_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `SET_ROADS_IN_AREA` |
| Hash | `0xBF1A602B5BA52FEE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `xMin` (float), `yMin` (float), `zMin` (float), `xMax` (float), `yMax` (float), `zMax` (float), `p6` (Any), `p7` (Any), `p8` (Any) |

### Parameters

- **`xMin`** (`float`)
- **`yMin`** (`float`)
- **`zMin`** (`float`)
- **`xMax`** (`float`)
- **`yMax`** (`float`)
- **`zMax`** (`float`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetRoadsInArea(xMin, yMin, zMin, xMax, yMax, zMax, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBF1A602B5BA52FEE, xMin, yMin, zMin, xMax, yMax, zMax, p6, p7, p8)
```


---

## SET_ROADS_IN_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `SET_ROADS_IN_VOLUME` |
| Hash | `0xC1799FAFD2FDF52B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `p1` (BOOL), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`volume`** (`Volume`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetRoadsInVolume(volume, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC1799FAFD2FDF52B, volume, p1, p2, p3)
```


---

## SIMULATED_ROUTE_GET_ETA

| Property | Value |
|----------|-------|
| Native Name | `SIMULATED_ROUTE_GET_ETA` |
| Hash | `0x2DD5F78D73B24172` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = SimulatedRouteGetEta(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2DD5F78D73B24172, p0)
```


---

## SIMULATED_ROUTE_IS_LOADED

| Property | Value |
|----------|-------|
| Native Name | `SIMULATED_ROUTE_IS_LOADED` |
| Hash | `0x240915043CB799D7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = SimulatedRouteIsLoaded(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x240915043CB799D7, p0)
```


---

## SIMULATED_ROUTE_TRAVEL_TO_POINT

| Property | Value |
|----------|-------|
| Native Name | `SIMULATED_ROUTE_TRAVEL_TO_POINT` |
| Hash | `0xA1A3DE1C215C7394` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (float), `p2` (float) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`float`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
SimulatedRouteTravelToPoint(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA1A3DE1C215C7394, p0, p1, p2)
```


---

## _0x264E9A5CD78C338F

| Property | Value |
|----------|-------|
| Native Name | `_0x264E9A5CD78C338F` |
| Hash | `0x264E9A5CD78C338F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x264E9A5CD78C338F(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x264E9A5CD78C338F, p0)
```


---

## _0x34C9AF25649172D0

| Property | Value |
|----------|-------|
| Native Name | `_0x34C9AF25649172D0` |
| Hash | `0x34C9AF25649172D0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x34C9AF25649172D0(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x34C9AF25649172D0, p0)
```


---

## _0x4358BCF14C91761C

| Property | Value |
|----------|-------|
| Native Name | `_0x4358BCF14C91761C` |
| Hash | `0x4358BCF14C91761C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any) |

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

### Usage

**Lua (Direct):**
```lua
_0x4358BCF14C91761C(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4358BCF14C91761C, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## _0x4BDEBEA5702B97A9

| Property | Value |
|----------|-------|
| Native Name | `_0x4BDEBEA5702B97A9` |
| Hash | `0x4BDEBEA5702B97A9` |
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
_0x4BDEBEA5702B97A9(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4BDEBEA5702B97A9, p0, p1, p2, p3, p4, p5)
```


---

## _0x54F4D7B6670FBB5A

| Property | Value |
|----------|-------|
| Native Name | `_0x54F4D7B6670FBB5A` |
| Hash | `0x54F4D7B6670FBB5A` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x54F4D7B6670FBB5A(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x54F4D7B6670FBB5A, p0, p1, p2, p3, p4)
```


---

## _0x5A3B54ADDF5472A3

| Property | Value |
|----------|-------|
| Native Name | `_0x5A3B54ADDF5472A3` |
| Hash | `0x5A3B54ADDF5472A3` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x5A3B54ADDF5472A3(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5A3B54ADDF5472A3, p0)
```


---

## _0x5A4E1A41E3A02AD0

| Property | Value |
|----------|-------|
| Native Name | `_0x5A4E1A41E3A02AD0` |
| Hash | `0x5A4E1A41E3A02AD0` |
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
_0x5A4E1A41E3A02AD0(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5A4E1A41E3A02AD0, p0, p1, p2)
```


---

## _0x665B21666351CB37

| Property | Value |
|----------|-------|
| Native Name | `_0x665B21666351CB37` |
| Hash | `0x665B21666351CB37` |
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
local result = _0x665B21666351CB37(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x665B21666351CB37, p0, p1, p2)
```


---

## _0x6C3F12ECEB6D2E2A

| Property | Value |
|----------|-------|
| Native Name | `_0x6C3F12ECEB6D2E2A` |
| Hash | `0x6C3F12ECEB6D2E2A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `xMin` (float), `yMin` (float), `zMin` (float), `xMax` (float), `yMax` (float), `zMax` (float), `p6` (Any), `p7` (Any) |

### Parameters

- **`xMin`** (`float`)
- **`yMin`** (`float`)
- **`zMin`** (`float`)
- **`xMax`** (`float`)
- **`yMax`** (`float`)
- **`zMax`** (`float`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6C3F12ECEB6D2E2A(xMin, yMin, zMin, xMax, yMax, zMax, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C3F12ECEB6D2E2A, xMin, yMin, zMin, xMax, yMax, zMax, p6, p7)
```


---

## _0x6DAD6630AE4A74CB

| Property | Value |
|----------|-------|
| Native Name | `_0x6DAD6630AE4A74CB` |
| Hash | `0x6DAD6630AE4A74CB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6DAD6630AE4A74CB(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6DAD6630AE4A74CB, p0, p1)
```


---

## _0x869A7015BD4606E9

| Property | Value |
|----------|-------|
| Native Name | `_0x869A7015BD4606E9` |
| Hash | `0x869A7015BD4606E9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x869A7015BD4606E9(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x869A7015BD4606E9, p0)
```


---

*End of PATHFIND natives part 1*
