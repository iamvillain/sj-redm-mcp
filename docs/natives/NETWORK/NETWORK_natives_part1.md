# NETWORK Natives - Part 1 of 12

Red Dead Redemption 3 Native Functions Reference

**Namespace:** NETWORK  
**Natives in this file:** 50  
**Total natives in namespace:** 566  
**Generated from:** RDR3natives JSON data

---

## ACTIVATE_DAMAGE_TRACKER_ON_NETWORK_ID

| Property | Value |
|----------|-------|
| Native Name | `ACTIVATE_DAMAGE_TRACKER_ON_NETWORK_ID` |
| Hash | `0xD45B1FFCCD52FF19` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `netID` (int), `toggle` (BOOL) |

### Parameters

- **`netID`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ActivateDamageTrackerOnNetworkId(netID, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD45B1FFCCD52FF19, netID, toggle)
```


---

## CAN_REGISTER_MISSION_ENTITIES

| Property | Value |
|----------|-------|
| Native Name | `CAN_REGISTER_MISSION_ENTITIES` |
| Hash | `0x69778E7564BADE6D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped_amt` (int), `vehicle_amt` (int), `object_amt` (int), `pickup_amt` (int) |

### Parameters

- **`ped_amt`** (`int`)
- **`vehicle_amt`** (`int`)
- **`object_amt`** (`int`)
- **`pickup_amt`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CanRegisterMissionEntities(ped_amt, vehicle_amt, object_amt, pickup_amt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x69778E7564BADE6D, ped_amt, vehicle_amt, object_amt, pickup_amt)
```


---

## CAN_REGISTER_MISSION_OBJECTS

| Property | Value |
|----------|-------|
| Native Name | `CAN_REGISTER_MISSION_OBJECTS` |
| Hash | `0x800DD4721A8B008B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CanRegisterMissionObjects(amount)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x800DD4721A8B008B, amount)
```


---

## CAN_REGISTER_MISSION_PEDS

| Property | Value |
|----------|-------|
| Native Name | `CAN_REGISTER_MISSION_PEDS` |
| Hash | `0xBCBF4FEF9FA5D781` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CanRegisterMissionPeds(amount)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBCBF4FEF9FA5D781, amount)
```


---

## CAN_REGISTER_MISSION_PICKUPS

| Property | Value |
|----------|-------|
| Native Name | `CAN_REGISTER_MISSION_PICKUPS` |
| Hash | `0xF0460C7BF80011EA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CanRegisterMissionPickups(amount)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF0460C7BF80011EA, amount)
```


---

## CAN_REGISTER_MISSION_VEHICLES

| Property | Value |
|----------|-------|
| Native Name | `CAN_REGISTER_MISSION_VEHICLES` |
| Hash | `0x7277F1F2E085EE74` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CanRegisterMissionVehicles(amount)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7277F1F2E085EE74, amount)
```


---

## CLEAR_SERVICE_EVENT_ARGUMENTS

**Description:** Old name: _CLEAR_LAUNCH_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_SERVICE_EVENT_ARGUMENTS` |
| Hash | `0x966DD84FB6A46017` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearServiceEventArguments()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x966DD84FB6A46017, )
```


---

## CLOUD_DID_REQUEST_SUCCEED

| Property | Value |
|----------|-------|
| Native Name | `CLOUD_DID_REQUEST_SUCCEED` |
| Hash | `0x3A3D5568AF297CD5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `id` (int) |

### Parameters

- **`id`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CloudDidRequestSucceed(id)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3A3D5568AF297CD5, id)
```


---

## CLOUD_HAS_REQUEST_COMPLETED

| Property | Value |
|----------|-------|
| Native Name | `CLOUD_HAS_REQUEST_COMPLETED` |
| Hash | `0x4C61B39930D045DA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `id` (int) |

### Parameters

- **`id`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CloudHasRequestCompleted(id)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4C61B39930D045DA, id)
```


---

## CONVERT_POSIX_TIME

**Description:** Takes the specified time and writes it to the structure specified in the second argument.

struct date_time
{
    int year;
    int PADDING1;
    int month;
    int PADDING2;
    int day;
    int PADDING3;
    int hour;
    int PADDING4;
    int minute;
    int PADDING5;
    int second;
    int PADDING6;
};

| Property | Value |
|----------|-------|
| Native Name | `CONVERT_POSIX_TIME` |
| Hash | `0xAC97AF97FA68E5D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `posixTime` (int), `timeStructure` (Any*) |

### Parameters

- **`posixTime`** (`int`)
- **`timeStructure`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
ConvertPosixTime(posixTime, timeStructure)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAC97AF97FA68E5D5, posixTime, timeStructure)
```


---

## GET_CLOUD_TIME_AS_INT

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOUD_TIME_AS_INT` |
| Hash | `0x9A73240B49945C76` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetCloudTimeAsInt()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A73240B49945C76, )
```


---

## GET_LAUNCH_PARAM_VALUE

| Property | Value |
|----------|-------|
| Native Name | `GET_LAUNCH_PARAM_VALUE` |
| Hash | `0x65E65CA6A0FE59D4` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `paramName` (const char*) |

### Parameters

- **`paramName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetLaunchParamValue(paramName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x65E65CA6A0FE59D4, paramName)
```


---

## GET_MAX_NUM_NETWORK_OBJECTS

**Description:** Always returns 60

| Property | Value |
|----------|-------|
| Native Name | `GET_MAX_NUM_NETWORK_OBJECTS` |
| Hash | `0xC7BE335216B5EC7C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetMaxNumNetworkObjects()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC7BE335216B5EC7C, )
```


---

## GET_MAX_NUM_NETWORK_PEDS

**Description:** Always returns 110

| Property | Value |
|----------|-------|
| Native Name | `GET_MAX_NUM_NETWORK_PEDS` |
| Hash | `0x0C1F7D49C39D2289` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetMaxNumNetworkPeds()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C1F7D49C39D2289, )
```


---

## GET_MAX_NUM_NETWORK_PICKUPS

**Description:** Always returns 80

| Property | Value |
|----------|-------|
| Native Name | `GET_MAX_NUM_NETWORK_PICKUPS` |
| Hash | `0xA72835064DD63E4C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetMaxNumNetworkPickups()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA72835064DD63E4C, )
```


---

## GET_MAX_NUM_NETWORK_VEHICLES

**Description:** Always returns 40

| Property | Value |
|----------|-------|
| Native Name | `GET_MAX_NUM_NETWORK_VEHICLES` |
| Hash | `0x0AFCE529F69B21FF` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetMaxNumNetworkVehicles()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0AFCE529F69B21FF, )
```


---

## GET_NETWORK_TIME

| Property | Value |
|----------|-------|
| Native Name | `GET_NETWORK_TIME` |
| Hash | `0x7A5487FE9FAA6B48` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetNetworkTime()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7A5487FE9FAA6B48, )
```


---

## GET_NETWORK_TIME_ACCURATE

| Property | Value |
|----------|-------|
| Native Name | `GET_NETWORK_TIME_ACCURATE` |
| Hash | `0x89023FBBF9200E9F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetNetworkTimeAccurate()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x89023FBBF9200E9F, )
```


---

## GET_NUM_CREATED_MISSION_OBJECTS

| Property | Value |
|----------|-------|
| Native Name | `GET_NUM_CREATED_MISSION_OBJECTS` |
| Hash | `0x12B6281B6C6706C0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumCreatedMissionObjects(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x12B6281B6C6706C0, p0)
```


---

## GET_NUM_CREATED_MISSION_PEDS

| Property | Value |
|----------|-------|
| Native Name | `GET_NUM_CREATED_MISSION_PEDS` |
| Hash | `0xCB215C4B56A7FAE7` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumCreatedMissionPeds(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB215C4B56A7FAE7, p0)
```


---

## GET_NUM_CREATED_MISSION_VEHICLES

| Property | Value |
|----------|-------|
| Native Name | `GET_NUM_CREATED_MISSION_VEHICLES` |
| Hash | `0x0CD9AB83489430EA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumCreatedMissionVehicles(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0CD9AB83489430EA, p0)
```


---

## GET_NUM_RESERVED_MISSION_OBJECTS

**Description:** p0 appears to be for MP

| Property | Value |
|----------|-------|
| Native Name | `GET_NUM_RESERVED_MISSION_OBJECTS` |
| Hash | `0xAA81B5F10BC43AC2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumReservedMissionObjects(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAA81B5F10BC43AC2, p0)
```


---

## GET_NUM_RESERVED_MISSION_PEDS

**Description:** p0 appears to be for MP

| Property | Value |
|----------|-------|
| Native Name | `GET_NUM_RESERVED_MISSION_PEDS` |
| Hash | `0x1F13D5AE5CB17E17` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumReservedMissionPeds(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F13D5AE5CB17E17, p0)
```


---

## GET_NUM_RESERVED_MISSION_VEHICLES

**Description:** p0 appears to be for MP

| Property | Value |
|----------|-------|
| Native Name | `GET_NUM_RESERVED_MISSION_VEHICLES` |
| Hash | `0xCF3A965906452031` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumReservedMissionVehicles(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCF3A965906452031, p0)
```


---

## GET_RESERVED_MISSION_ENTITIES_IN_AREA

**Description:** Used in Script Function NET_ACE_CLIENT_VERIFY_ENTITY_RESERVATIONS
Coords: Slot world position

Old name: _GET_RESERVATIONS_FOR_SLOT_WORLD_POSITION

| Property | Value |
|----------|-------|
| Native Name | `GET_RESERVED_MISSION_ENTITIES_IN_AREA` |
| Hash | `0x5E71E72A94985214` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (BOOL), `peds` (int*), `vehicles` (int*), `objects` (int*), `pickups` (int*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`BOOL`)
- **`peds`** (`int*`)
- **`vehicles`** (`int*`)
- **`objects`** (`int*`)
- **`pickups`** (`int*`)

### Usage

**Lua (Direct):**
```lua
GetReservedMissionEntitiesInArea(x, y, z, p3, peds, vehicles, objects, pickups)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5E71E72A94985214, x, y, z, p3, peds, vehicles, objects, pickups)
```


---

## GET_STATUS_OF_TEXTURE_DOWNLOAD

**Description:** 0 = succeeded
1 = pending
2 = failed

| Property | Value |
|----------|-------|
| Native Name | `GET_STATUS_OF_TEXTURE_DOWNLOAD` |
| Hash | `0x8BD6C6DEA20E82C6` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `textureDownloadId` (int) |

### Parameters

- **`textureDownloadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetStatusOfTextureDownload(textureDownloadId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8BD6C6DEA20E82C6, textureDownloadId)
```


---

## GET_TIME_DIFFERENCE

**Description:** Subtracts the second argument from the first.

| Property | Value |
|----------|-------|
| Native Name | `GET_TIME_DIFFERENCE` |
| Hash | `0xA2C6FC031D46FFF0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `timeA` (int), `timeB` (int) |

### Parameters

- **`timeA`** (`int`)
- **`timeB`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetTimeDifference(timeA, timeB)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA2C6FC031D46FFF0, timeA, timeB)
```


---

## GET_TIME_OFFSET

**Description:** Adds the first argument to the second.

| Property | Value |
|----------|-------|
| Native Name | `GET_TIME_OFFSET` |
| Hash | `0x017008CCDAD48503` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `timeA` (int), `timeB` (int) |

### Parameters

- **`timeA`** (`int`)
- **`timeB`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetTimeOffset(timeA, timeB)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x017008CCDAD48503, timeA, timeB)
```


---

## GET_UNIQUE_INT_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `GET_UNIQUE_INT_FOR_PLAYER` |
| Hash | `0x07F723401B9D921C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetUniqueIntForPlayer(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x07F723401B9D921C, player)
```


---

## HAS_NETWORK_TIME_STARTED

| Property | Value |
|----------|-------|
| Native Name | `HAS_NETWORK_TIME_STARTED` |
| Hash | `0x46718ACEEDEAFC84` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = HasNetworkTimeStarted()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x46718ACEEDEAFC84, )
```


---

## IS_DAMAGE_TRACKER_ACTIVE_ON_NETWORK_ID

| Property | Value |
|----------|-------|
| Native Name | `IS_DAMAGE_TRACKER_ACTIVE_ON_NETWORK_ID` |
| Hash | `0x6E192E33AD436366` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `netID` (int) |

### Parameters

- **`netID`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsDamageTrackerActiveOnNetworkId(netID)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6E192E33AD436366, netID)
```


---

## IS_ENTITY_A_GHOST

**Description:** Old name: _IS_ENTITY_GHOSTED_TO_LOCAL_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_A_GHOST` |
| Hash | `0x21D04D7BC538C146` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAGhost(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x21D04D7BC538C146, entity)
```


---

## IS_NETWORK_ID_OWNED_BY_PARTICIPANT

| Property | Value |
|----------|-------|
| Native Name | `IS_NETWORK_ID_OWNED_BY_PARTICIPANT` |
| Hash | `0xA1607996431332DF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `netId` (int) |

### Parameters

- **`netId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsNetworkIdOwnedByParticipant(netId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA1607996431332DF, netId)
```


---

## IS_OBJECT_REASSIGNMENT_IN_PROGRESS

**Description:** Note: this native was added in build 1311.16

| Property | Value |
|----------|-------|
| Native Name | `IS_OBJECT_REASSIGNMENT_IN_PROGRESS` |
| Hash | `0x8FE9EB11EC9CC23A` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsObjectReassignmentInProgress()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8FE9EB11EC9CC23A, )
```


---

## IS_SPHERE_VISIBLE_TO_ANOTHER_MACHINE

| Property | Value |
|----------|-------|
| Native Name | `IS_SPHERE_VISIBLE_TO_ANOTHER_MACHINE` |
| Hash | `0xD82CF8E64C8729D8` |
| Return Type | `BOOL` |
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
local result = IsSphereVisibleToAnotherMachine(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD82CF8E64C8729D8, p0, p1, p2, p3, p4)
```


---

## IS_SPHERE_VISIBLE_TO_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `IS_SPHERE_VISIBLE_TO_PLAYER` |
| Hash | `0xDC3A310219E5DA62` |
| Return Type | `BOOL` |
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
local result = IsSphereVisibleToPlayer(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDC3A310219E5DA62, p0, p1, p2, p3, p4, p5)
```


---

## IS_TIME_LESS_THAN

**Description:** Subtracts the second argument from the first, then returns whether the result is negative.

| Property | Value |
|----------|-------|
| Native Name | `IS_TIME_LESS_THAN` |
| Hash | `0xCB2CF5148012C8D0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `timeA` (int), `timeB` (int) |

### Parameters

- **`timeA`** (`int`)
- **`timeB`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsTimeLessThan(timeA, timeB)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB2CF5148012C8D0, timeA, timeB)
```


---

## IS_TIME_MORE_THAN

**Description:** Subtracts the first argument from the second, then returns whether the result is negative.

| Property | Value |
|----------|-------|
| Native Name | `IS_TIME_MORE_THAN` |
| Hash | `0xDE350F8651E4346C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `timeA` (int), `timeB` (int) |

### Parameters

- **`timeA`** (`int`)
- **`timeB`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsTimeMoreThan(timeA, timeB)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDE350F8651E4346C, timeA, timeB)
```


---

## KEEP_NETWORK_ID_IN_FAST_INSTANCE

| Property | Value |
|----------|-------|
| Native Name | `KEEP_NETWORK_ID_IN_FAST_INSTANCE` |
| Hash | `0xE1BC73D6815BA361` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `netId` (int), `p1` (BOOL), `p2` (int) |

### Parameters

- **`netId`** (`int`)
- **`p1`** (`BOOL`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
KeepNetworkIdInFastInstance(netId, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE1BC73D6815BA361, netId, p1, p2)
```


---

## NETWORK_ACCEPT_RS_INVITE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ACCEPT_RS_INVITE` |
| Hash | `0xB2CEA5105AAC8DDE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkAcceptRsInvite(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB2CEA5105AAC8DDE, p0)
```


---

## NETWORK_ACCESS_TUNABLE_BOOL

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ACCESS_TUNABLE_BOOL` |
| Hash | `0xAA6A47A573ABB75A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `tunableContext` (Hash), `tunableName` (Hash) |

### Parameters

- **`tunableContext`** (`Hash`)
- **`tunableName`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkAccessTunableBool(tunableContext, tunableName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAA6A47A573ABB75A, tunableContext, tunableName)
```


---

## NETWORK_ACCESS_TUNABLE_INT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ACCESS_TUNABLE_INT` |
| Hash | `0x8BE1146DFD5D4468` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `tunableContext` (Hash), `tunableName` (Hash), `value` (int*) |

### Parameters

- **`tunableContext`** (`Hash`)
- **`tunableName`** (`Hash`)
- **`value`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkAccessTunableInt(tunableContext, tunableName, value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8BE1146DFD5D4468, tunableContext, tunableName, value)
```


---

## NETWORK_ACTION_PLATFORM_INVITE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ACTION_PLATFORM_INVITE` |
| Hash | `0x3B82ACC3F4B6240C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkActionPlatformInvite()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3B82ACC3F4B6240C, )
```


---

## NETWORK_ACTIVITY_RESET_TO_IDLE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ACTIVITY_RESET_TO_IDLE` |
| Hash | `0x3FE141FDB990E3D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkActivityResetToIdle()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3FE141FDB990E3D1, )
```


---

## NETWORK_ACTIVITY_SET_CURRENT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ACTIVITY_SET_CURRENT` |
| Hash | `0x9ADAC065D9F6706F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `netPlaylistActivity` (int) |

### Parameters

- **`netPlaylistActivity`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkActivitySetCurrent(netPlaylistActivity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9ADAC065D9F6706F, netPlaylistActivity)
```


---

## NETWORK_ADD_FRIEND

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ADD_FRIEND` |
| Hash | `0x8E02D73914064223` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*), `message` (const char*) |

### Parameters

- **`gamerHandle`** (`Any*`)
- **`message`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkAddFriend(gamerHandle, message)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8E02D73914064223, gamerHandle, message)
```


---

## NETWORK_ALLOW_ALL_ENTITY_FADING_FOR_INSTANCES

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ALLOW_ALL_ENTITY_FADING_FOR_INSTANCES` |
| Hash | `0x4B05B97BA46F419D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkAllowAllEntityFadingForInstances(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4B05B97BA46F419D, toggle)
```


---

## NETWORK_ALLOW_ENTITY_FADING_FOR_INSTANCES

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ALLOW_ENTITY_FADING_FOR_INSTANCES` |
| Hash | `0xF3354D6CA46F419D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkAllowEntityFadingForInstances(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF3354D6CA46F419D, entity, toggle)
```


---

## NETWORK_ALLOW_REMOTE_ATTACHMENT_MODIFICATION

**Description:** Old name: _NETWORK_ALLOW_LOCAL_ENTITY_ATTACHMENT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ALLOW_REMOTE_ATTACHMENT_MODIFICATION` |
| Hash | `0x267C78C60E806B9A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkAllowRemoteAttachmentModification(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x267C78C60E806B9A, entity, toggle)
```


---

## NETWORK_ARE_HANDLES_THE_SAME

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ARE_HANDLES_THE_SAME` |
| Hash | `0x57DBA049E110F217` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle1` (Any*), `gamerHandle2` (Any*) |

### Parameters

- **`gamerHandle1`** (`Any*`)
- **`gamerHandle2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkAreHandlesTheSame(gamerHandle1, gamerHandle2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57DBA049E110F217, gamerHandle1, gamerHandle2)
```


---

*End of NETWORK natives part 1*
