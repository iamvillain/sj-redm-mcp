# AITRANSPORT Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** AITRANSPORT  
**Natives in this file:** 24  
**Generated from:** RDR3natives JSON data

---

## GET_TRANSPORT_CONFIG_FLAG

**Description:** flagId: see SET_TRANSPORT_CONFIG_FLAG

| Property | Value |
|----------|-------|
| Native Name | `GET_TRANSPORT_CONFIG_FLAG` |
| Hash | `0xF382C92CCC1CCDBC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `flagId` (int), `p2` (BOOL) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`flagId`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetTransportConfigFlag(transportEntity, flagId, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF382C92CCC1CCDBC, transportEntity, flagId, p2)
```


---

## IS_PED_ENTERING_TRANSPORT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_ENTERING_TRANSPORT` |
| Hash | `0x619E63980BFC0096` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `transportEntity` (Entity), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`transportEntity`** (`Entity`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedEnteringTransport(ped, transportEntity, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x619E63980BFC0096, ped, transportEntity, p2)
```


---

## IS_PED_EXITING_TRANSPORT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_EXITING_TRANSPORT` |
| Hash | `0x660639BC60157048` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `transportEntity` (Entity) |

### Parameters

- **`ped`** (`Ped`)
- **`transportEntity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedExitingTransport(ped, transportEntity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x660639BC60157048, ped, transportEntity)
```


---

## SET_PED_OFF_TRANSPORT_SEAT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_OFF_TRANSPORT_SEAT` |
| Hash | `0x8886D83A430537FD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedOffTransportSeat(ped, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8886D83A430537FD, ped, flags)
```


---

## SET_PED_ON_TRANSPORT_SEAT

**Description:** seat: see CREATE_PED_INSIDE_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_ON_TRANSPORT_SEAT` |
| Hash | `0xE588B5A8A005CB5E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `transportEntity` (Entity), `seat` (int), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`transportEntity`** (`Entity`)
- **`seat`** (`int`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedOnTransportSeat(ped, transportEntity, seat, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE588B5A8A005CB5E, ped, transportEntity, seat, flags)
```


---

## SET_TRANSPORT_ACCESSIBLE_SEAT_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `SET_TRANSPORT_ACCESSIBLE_SEAT_FLAGS` |
| Hash | `0xDD0660C997DE94FD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `flags` (int) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetTransportAccessibleSeatFlags(transportEntity, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDD0660C997DE94FD, transportEntity, flags)
```


---

## SET_TRANSPORT_CONFIG_FLAG

**Description:** flagId:
enum eTransportConfigFlags
{
	TCF_NotConsideredForEntryByLocalPlayer,
	TCF_0xB78D6624,
	TCF_0xA9700425,
	TCF_0x8D7E4641,
	TCF_0xF24BAA1F,
	TCF_0x63B77935,
	TCF_NotConsideredForEntryByAllPlayers,
	TCF_0xD17A2AFD,
	TCF_0xD4E4FDD5,
	TCF_0x8227C929,
	TCF_0x812C1070,
	TCF_0x0E1AB26F,
	TCF_0xBF4EC863,
	TCF_0x75660C36,
	TCF_0xA2539E20,
	TCF_0x9162C633,
	TCF_DisableHonorModifiers,
	TCF_0xF9E71CB6,
	TCF_0x933ECD3F,
	TCF_0x18513A34
};
https://github.com/femga/rdr3_discoveries/tree/master/AI/TRANSPORT_CONFIG_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `SET_TRANSPORT_CONFIG_FLAG` |
| Hash | `0xBA8818212633500A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `flagId` (int), `value` (BOOL) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`flagId`** (`int`)
- **`value`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetTransportConfigFlag(transportEntity, flagId, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBA8818212633500A, transportEntity, flagId, value)
```


---

## TASK_ENTER_TRANSPORT

| Property | Value |
|----------|-------|
| Native Name | `TASK_ENTER_TRANSPORT` |
| Hash | `0xAEE3ADD08829CB6F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TaskEnterTransport(args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAEE3ADD08829CB6F, args)
```


---

## TASK_EXIT_TRANSPORT

| Property | Value |
|----------|-------|
| Native Name | `TASK_EXIT_TRANSPORT` |
| Hash | `0xC273A5B8488F7838` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TaskExitTransport(args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC273A5B8488F7838, args)
```


---

## _0x4248AB2EEB3C75AD

**Description:** _SET_TRANSPORT_*

| Property | Value |
|----------|-------|
| Native Name | `_0x4248AB2EEB3C75AD` |
| Hash | `0x4248AB2EEB3C75AD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `ped` (Ped), `p2` (BOOL) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`ped`** (`Ped`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x4248AB2EEB3C75AD(transportEntity, ped, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4248AB2EEB3C75AD, transportEntity, ped, p2)
```


---

## _0x4B6C9A43F7D9109B

| Property | Value |
|----------|-------|
| Native Name | `_0x4B6C9A43F7D9109B` |
| Hash | `0x4B6C9A43F7D9109B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x4B6C9A43F7D9109B(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4B6C9A43F7D9109B, p0, p1)
```


---

## _0x5639FBEA922788DA

**Description:** _CLEAR_A*

| Property | Value |
|----------|-------|
| Native Name | `_0x5639FBEA922788DA` |
| Hash | `0x5639FBEA922788DA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity) |

### Parameters

- **`transportEntity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
_0x5639FBEA922788DA(transportEntity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5639FBEA922788DA, transportEntity)
```


---

## _0x8C8371EDFAF014A0

**Description:** _SET_TRANSPORT_*

| Property | Value |
|----------|-------|
| Native Name | `_0x8C8371EDFAF014A0` |
| Hash | `0x8C8371EDFAF014A0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x8C8371EDFAF014A0(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8C8371EDFAF014A0, ped, p1)
```


---

## _0xF8C20282B237E3F7

**Description:** _SET_TRANSPORT_*

| Property | Value |
|----------|-------|
| Native Name | `_0xF8C20282B237E3F7` |
| Hash | `0xF8C20282B237E3F7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xF8C20282B237E3F7(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF8C20282B237E3F7, ped)
```


---

## _GET_PED_IN_TRANSPORT_SEAT

**Description:** seatIndex: see CREATE_PED_INSIDE_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_IN_TRANSPORT_SEAT` |
| Hash | `0xFFEC4B0A1A3ED515` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `seatIndex` (int) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedInTransportSeat(transportEntity, seatIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFFEC4B0A1A3ED515, transportEntity, seatIndex)
```


---

## _GET_TRANSPORT_USAGE_FLAGS

**Description:** See _SET_TRANSPORT_USAGE_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRANSPORT_USAGE_FLAGS` |
| Hash | `0xE195C5A82156321D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `flags` (int*) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`flags`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = GetTransportUsageFlags(transportEntity, flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE195C5A82156321D, transportEntity, flags)
```


---

## _IS_PED_ON_TRANSPORT_ENTITY

**Description:** Checks if ped is placed on target transportEntity

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_ON_TRANSPORT_ENTITY` |
| Hash | `0x159EF5B6EDCE00E8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `transportEntity` (Entity) |

### Parameters

- **`ped`** (`Ped`)
- **`transportEntity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedOnTransportEntity(ped, transportEntity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x159EF5B6EDCE00E8, ped, transportEntity)
```


---

## _IS_PED_ON_TRANSPORT_SEAT

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_ON_TRANSPORT_SEAT` |
| Hash | `0xDC44F405A6B98D03` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedOnTransportSeat(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDC44F405A6B98D03, ped, p1)
```


---

## _IS_TRANSPORT_SEAT_FREE

**Description:** Called together with IS_VEHICLE_SEAT_FREE

| Property | Value |
|----------|-------|
| Native Name | `_IS_TRANSPORT_SEAT_FREE` |
| Hash | `0x43FF27FC1829C202` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `seatIndex` (int) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsTransportSeatFree(transportEntity, seatIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x43FF27FC1829C202, transportEntity, seatIndex)
```


---

## _IS_TRANSPORT_SEAT_OCCUPIED

| Property | Value |
|----------|-------|
| Native Name | `_IS_TRANSPORT_SEAT_OCCUPIED` |
| Hash | `0x2E2E06023D07631E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `seatIndex` (int) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsTransportSeatOccupied(transportEntity, seatIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E2E06023D07631E, transportEntity, seatIndex)
```


---

## _SET_AI_CAN_USE_TRANSPORT

| Property | Value |
|----------|-------|
| Native Name | `_SET_AI_CAN_USE_TRANSPORT` |
| Hash | `0x67F7CEAC2391E114` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `state` (BOOL) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`state`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAiCanUseTransport(transportEntity, state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x67F7CEAC2391E114, transportEntity, state)
```


---

## _SET_PED_USE_TRANSPORT_SEAT_PREFERENCE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_USE_TRANSPORT_SEAT_PREFERENCE` |
| Hash | `0xB7079F4C72896756` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `transportEntity` (Entity), `preferenceSlot` (int), `p3` (int), `seatIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`transportEntity`** (`Entity`)
- **`preferenceSlot`** (`int`)
- **`p3`** (`int`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedUseTransportSeatPreference(ped, transportEntity, preferenceSlot, p3, seatIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB7079F4C72896756, ped, transportEntity, preferenceSlot, p3, seatIndex)
```


---

## _SET_TRANSPORT_PRIORITY_SEAT

| Property | Value |
|----------|-------|
| Native Name | `_SET_TRANSPORT_PRIORITY_SEAT` |
| Hash | `0x13F138225C202F66` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `seatIndex` (int) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetTransportPrioritySeat(transportEntity, seatIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x13F138225C202F66, transportEntity, seatIndex)
```


---

## _SET_TRANSPORT_USAGE_FLAGS

**Description:** enum eTransportUsageFlags
{
	TUF_INVALID = 0,
	TUF_ALLOW_DRIVER_ME = (1 << 0),
	TUF_ALLOW_DRIVER_GANG = (1 << 1),
	TUF_ALLOW_DRIVER_CREW = (1 << 2),
	TUF_ALLOW_DRIVER_FRIENDS = (1 << 3),
	TUF_ALLOW_DRIVER_ANYONE = (1 << 4),
	TUF_ALLOW_PASSENGER_ME = (1 << 5),
	TUF_ALLOW_PASSENGER_GANG = (1 << 6),
	TUF_ALLOW_PASSENGER_CREW = (1 << 7),
	TUF_ALLOW_PASSENGER_FRIENDS = (1 << 8),
	TUF_ALLOW_PASSENGER_ANYONE = (1 << 9),
	TUF_ALLOW_ACCESS_AI = (1 << 10)
};

| Property | Value |
|----------|-------|
| Native Name | `_SET_TRANSPORT_USAGE_FLAGS` |
| Hash | `0xE2487779957FE897` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `transportEntity` (Entity), `flags` (int) |

### Parameters

- **`transportEntity`** (`Entity`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetTransportUsageFlags(transportEntity, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE2487779957FE897, transportEntity, flags)
```


---

*End of AITRANSPORT natives*
