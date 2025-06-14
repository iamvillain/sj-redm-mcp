# OBJECT Natives - Part 1 of 4

Red Dead Redemption 3 Native Functions Reference

**Namespace:** OBJECT  
**Natives in this file:** 50  
**Total natives in namespace:** 153  
**Generated from:** RDR3natives JSON data

---

## ALLOW_DAMAGE_EVENTS_FOR_NON_NETWORKED_OBJECTS

| Property | Value |
|----------|-------|
| Native Name | `ALLOW_DAMAGE_EVENTS_FOR_NON_NETWORKED_OBJECTS` |
| Hash | `0xE2B3B852B537C398` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `enabled` (BOOL) |

### Parameters

- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AllowDamageEventsForNonNetworkedObjects(enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE2B3B852B537C398, enabled)
```


---

## ATTACH_PORTABLE_PICKUP_TO_PED

| Property | Value |
|----------|-------|
| Native Name | `ATTACH_PORTABLE_PICKUP_TO_PED` |
| Hash | `0x8DC39368BDD57755` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pickupObject` (Object), `ped` (Ped) |

### Parameters

- **`pickupObject`** (`Object`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
AttachPortablePickupToPed(pickupObject, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8DC39368BDD57755, pickupObject, ped)
```


---

## BLOCK_PICKUP_FROM_PLAYER_COLLECTION

| Property | Value |
|----------|-------|
| Native Name | `BLOCK_PICKUP_FROM_PLAYER_COLLECTION` |
| Hash | `0xB8F5062070BB6DBD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
BlockPickupFromPlayerCollection(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB8F5062070BB6DBD, p0, p1)
```


---

## BREAK_ALL_OBJECT_FRAGMENT_BONES

| Property | Value |
|----------|-------|
| Native Name | `BREAK_ALL_OBJECT_FRAGMENT_BONES` |
| Hash | `0x8462BE2341A55B6F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
BreakAllObjectFragmentBones(object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8462BE2341A55B6F, object)
```


---

## BREAK_OBJECT_FRAGMENT_CHILD

| Property | Value |
|----------|-------|
| Native Name | `BREAK_OBJECT_FRAGMENT_CHILD` |
| Hash | `0xE7E4C198B0185900` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `p1` (Any), `p2` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`p1`** (`Any`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
BreakObjectFragmentChild(object, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE7E4C198B0185900, object, p1, p2)
```


---

## CONVERT_OLD_PICKUP_TYPE_TO_NEW

**Description:** Old name: _GET_PICKUP_HASH

| Property | Value |
|----------|-------|
| Native Name | `CONVERT_OLD_PICKUP_TYPE_TO_NEW` |
| Hash | `0x5EAAD83F8CFB4575` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `pickupHash` (Hash) |

### Parameters

- **`pickupHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ConvertOldPickupTypeToNew(pickupHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5EAAD83F8CFB4575, pickupHash)
```


---

## CREATE_AMBIENT_PICKUP

**Description:** flags: see CREATE_PICKUP

| Property | Value |
|----------|-------|
| Native Name | `CREATE_AMBIENT_PICKUP` |
| Hash | `0x673966A0C0FD7171` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `pickupHash` (Hash), `x` (float), `y` (float), `z` (float), `flags` (int), `value` (int), `modelHash` (Hash), `p7` (BOOL), `p8` (BOOL), `p9` (int), `p10` (float) |

### Parameters

- **`pickupHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`flags`** (`int`)
- **`value`** (`int`)
- **`modelHash`** (`Hash`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)
- **`p9`** (`int`)
- **`p10`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = CreateAmbientPickup(pickupHash, x, y, z, flags, value, modelHash, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x673966A0C0FD7171, pickupHash, x, y, z, flags, value, modelHash, p7, p8, p9, p10)
```


---

## CREATE_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `CREATE_OBJECT` |
| Hash | `0x509D5878EB39E842` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `modelHash` (Hash), `x` (float), `y` (float), `z` (float), `isNetwork` (BOOL), `bScriptHostObj` (BOOL), `dynamic` (BOOL), `p7` (BOOL), `p8` (BOOL) |

### Parameters

- **`modelHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`isNetwork`** (`BOOL`)
- **`bScriptHostObj`** (`BOOL`)
- **`dynamic`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateObject(modelHash, x, y, z, isNetwork, bScriptHostObj, dynamic, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x509D5878EB39E842, modelHash, x, y, z, isNetwork, bScriptHostObj, dynamic, p7, p8)
```


---

## CREATE_OBJECT_NO_OFFSET

| Property | Value |
|----------|-------|
| Native Name | `CREATE_OBJECT_NO_OFFSET` |
| Hash | `0x9A294B2138ABB884` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `modelHash` (Hash), `x` (float), `y` (float), `z` (float), `isNetwork` (BOOL), `bScriptHostObj` (BOOL), `dynamic` (BOOL), `p7` (BOOL) |

### Parameters

- **`modelHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`isNetwork`** (`BOOL`)
- **`bScriptHostObj`** (`BOOL`)
- **`dynamic`** (`BOOL`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateObjectNoOffset(modelHash, x, y, z, isNetwork, bScriptHostObj, dynamic, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A294B2138ABB884, modelHash, x, y, z, isNetwork, bScriptHostObj, dynamic, p7)
```


---

## CREATE_OBJECT_SKELETON

| Property | Value |
|----------|-------|
| Native Name | `CREATE_OBJECT_SKELETON` |
| Hash | `0xB6CBD40F8EA69E8A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = CreateObjectSkeleton(object)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB6CBD40F8EA69E8A, object)
```


---

## CREATE_PICKUP

**Description:** https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/Placement%20Flags
https://github.com/femga/rdr3_discoveries/blob/master/objects/pickup_list.lua

| Property | Value |
|----------|-------|
| Native Name | `CREATE_PICKUP` |
| Hash | `0xFBA08C503DD5FA58` |
| Return Type | `Pickup` |
| Build | `1207` |
| Parameters | `pickupHash` (Hash), `x` (float), `y` (float), `z` (float), `flags` (int), `p5` (int), `p6` (BOOL), `modelHash` (Hash), `p8` (int), `p9` (float), `p10` (Any) |

### Parameters

- **`pickupHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`flags`** (`int`)
- **`p5`** (`int`)
- **`p6`** (`BOOL`)
- **`modelHash`** (`Hash`)
- **`p8`** (`int`)
- **`p9`** (`float`)
- **`p10`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePickup(pickupHash, x, y, z, flags, p5, p6, modelHash, p8, p9, p10)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFBA08C503DD5FA58, pickupHash, x, y, z, flags, p5, p6, modelHash, p8, p9, p10)
```


---

## CREATE_PICKUP_ROTATE

**Description:** flags: see CREATE_PICKUP

| Property | Value |
|----------|-------|
| Native Name | `CREATE_PICKUP_ROTATE` |
| Hash | `0x891804727E0A98B7` |
| Return Type | `Pickup` |
| Build | `1207` |
| Parameters | `pickupHash` (Hash), `posX` (float), `posY` (float), `posZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `flags` (int), `p8` (int), `p9` (int), `p10` (BOOL), `modelHash` (Hash), `p12` (int), `p13` (float), `p14` (Any) |

### Parameters

- **`pickupHash`** (`Hash`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`flags`** (`int`)
- **`p8`** (`int`)
- **`p9`** (`int`)
- **`p10`** (`BOOL`)
- **`modelHash`** (`Hash`)
- **`p12`** (`int`)
- **`p13`** (`float`)
- **`p14`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePickupRotate(pickupHash, posX, posY, posZ, rotX, rotY, rotZ, flags, p8, p9, p10, modelHash, p12, p13, p14)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x891804727E0A98B7, pickupHash, posX, posY, posZ, rotX, rotY, rotZ, flags, p8, p9, p10, modelHash, p12, p13, p14)
```


---

## CREATE_PORTABLE_PICKUP

| Property | Value |
|----------|-------|
| Native Name | `CREATE_PORTABLE_PICKUP` |
| Hash | `0x2EAF1FDB2FB55698` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `pickupHash` (Hash), `x` (float), `y` (float), `z` (float), `placeOnGround` (BOOL), `modelHash` (Hash) |

### Parameters

- **`pickupHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`placeOnGround`** (`BOOL`)
- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePortablePickup(pickupHash, x, y, z, placeOnGround, modelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2EAF1FDB2FB55698, pickupHash, x, y, z, placeOnGround, modelHash)
```


---

## DELETE_OBJECT

**Description:** Deletes the specified object, then sets the handle pointed to by the pointer to NULL.

| Property | Value |
|----------|-------|
| Native Name | `DELETE_OBJECT` |
| Hash | `0x931914268722C263` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object*) |

### Parameters

- **`object`** (`Object*`)

### Usage

**Lua (Direct):**
```lua
DeleteObject(object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x931914268722C263, object)
```


---

## DETACH_PORTABLE_PICKUP_FROM_PED

| Property | Value |
|----------|-------|
| Native Name | `DETACH_PORTABLE_PICKUP_FROM_PED` |
| Hash | `0xCF463D1E9A0AECB1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pickupObject` (Object) |

### Parameters

- **`pickupObject`** (`Object`)

### Usage

**Lua (Direct):**
```lua
DetachPortablePickupFromPed(pickupObject)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCF463D1E9A0AECB1, pickupObject)
```


---

## DOES_OBJECT_OF_TYPE_EXIST_AT_COORDS

| Property | Value |
|----------|-------|
| Native Name | `DOES_OBJECT_OF_TYPE_EXIST_AT_COORDS` |
| Hash | `0xBFA48E2FF417213F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `hash` (Hash), `p5` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`hash`** (`Hash`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = DoesObjectOfTypeExistAtCoords(x, y, z, radius, hash, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBFA48E2FF417213F, x, y, z, radius, hash, p5)
```


---

## DOES_PICKUP_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_PICKUP_EXIST` |
| Hash | `0xAFC1CA75AD4074D1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `pickup` (Pickup) |

### Parameters

- **`pickup`** (`Pickup`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPickupExist(pickup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAFC1CA75AD4074D1, pickup)
```


---

## DOES_PICKUP_OBJECT_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_PICKUP_OBJECT_EXIST` |
| Hash | `0xD9EFB6DBF7DAAEA3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `pickupObject` (Object) |

### Parameters

- **`pickupObject`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPickupObjectExist(pickupObject)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD9EFB6DBF7DAAEA3, pickupObject)
```


---

## DOES_PICKUP_OF_TYPE_EXIST_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `DOES_PICKUP_OF_TYPE_EXIST_IN_AREA` |
| Hash | `0xF9C36251F6E48E33` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `pickupHash` (Hash), `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`pickupHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPickupOfTypeExistInArea(pickupHash, x, y, z, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF9C36251F6E48E33, pickupHash, x, y, z, radius)
```


---

## DOES_RAYFIRE_MAP_OBJECT_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_RAYFIRE_MAP_OBJECT_EXIST` |
| Hash | `0x52AF537A0C5B8AAD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = DoesRayfireMapObjectExist(object)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x52AF537A0C5B8AAD, object)
```


---

## DOOR_SYSTEM_GET_DOOR_STATE

| Property | Value |
|----------|-------|
| Native Name | `DOOR_SYSTEM_GET_DOOR_STATE` |
| Hash | `0x160AA1B32F6139B8` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `doorHash` (Hash) |

### Parameters

- **`doorHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DoorSystemGetDoorState(doorHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x160AA1B32F6139B8, doorHash)
```


---

## DOOR_SYSTEM_GET_OPEN_RATIO

| Property | Value |
|----------|-------|
| Native Name | `DOOR_SYSTEM_GET_OPEN_RATIO` |
| Hash | `0x65499865FCA6E5EC` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `doorHash` (Hash) |

### Parameters

- **`doorHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DoorSystemGetOpenRatio(doorHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x65499865FCA6E5EC, doorHash)
```


---

## DOOR_SYSTEM_SET_AUTOMATIC_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `DOOR_SYSTEM_SET_AUTOMATIC_DISTANCE` |
| Hash | `0x9BA001CB45CBF627` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `doorHash` (Hash), `distance` (float) |

### Parameters

- **`doorHash`** (`Hash`)
- **`distance`** (`float`)

### Usage

**Lua (Direct):**
```lua
DoorSystemSetAutomaticDistance(doorHash, distance)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9BA001CB45CBF627, doorHash, distance)
```


---

## DOOR_SYSTEM_SET_AUTOMATIC_RATE

| Property | Value |
|----------|-------|
| Native Name | `DOOR_SYSTEM_SET_AUTOMATIC_RATE` |
| Hash | `0x03C27E13B42A0E82` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `doorHash` (Hash), `rate` (float) |

### Parameters

- **`doorHash`** (`Hash`)
- **`rate`** (`float`)

### Usage

**Lua (Direct):**
```lua
DoorSystemSetAutomaticRate(doorHash, rate)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x03C27E13B42A0E82, doorHash, rate)
```


---

## DOOR_SYSTEM_SET_DOOR_STATE

**Description:** Door lock states:
enum eDoorState
{
	DOORSTATE_INVALID = -1,
	DOORSTATE_UNLOCKED,
	DOORSTATE_LOCKED_UNBREAKABLE,
	DOORSTATE_LOCKED_BREAKABLE,
	DOORSTATE_HOLD_OPEN_POSITIVE,
	DOORSTATE_HOLD_OPEN_NEGATIVE
};

| Property | Value |
|----------|-------|
| Native Name | `DOOR_SYSTEM_SET_DOOR_STATE` |
| Hash | `0x6BAB9442830C7F53` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `doorHash` (Hash), `state` (int) |

### Parameters

- **`doorHash`** (`Hash`)
- **`state`** (`int`)

### Usage

**Lua (Direct):**
```lua
DoorSystemSetDoorState(doorHash, state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6BAB9442830C7F53, doorHash, state)
```


---

## DOOR_SYSTEM_SET_OPEN_RATIO

**Description:** Sets the ajar angle of a door.
Ranges from -1.0 to 1.0, and 0.0 is closed / default.

| Property | Value |
|----------|-------|
| Native Name | `DOOR_SYSTEM_SET_OPEN_RATIO` |
| Hash | `0xB6E6FBA95C7324AC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `doorHash` (Hash), `ajar` (float), `forceUpdate` (BOOL) |

### Parameters

- **`doorHash`** (`Hash`)
- **`ajar`** (`float`)
- **`forceUpdate`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DoorSystemSetOpenRatio(doorHash, ajar, forceUpdate)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB6E6FBA95C7324AC, doorHash, ajar, forceUpdate)
```


---

## FIX_OBJECT_FRAGMENT

| Property | Value |
|----------|-------|
| Native Name | `FIX_OBJECT_FRAGMENT` |
| Hash | `0xF9C1681347C8BD15` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
FixObjectFragment(object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF9C1681347C8BD15, object)
```


---

## FORCE_PICKUP_REGENERATE

| Property | Value |
|----------|-------|
| Native Name | `FORCE_PICKUP_REGENERATE` |
| Hash | `0x758A5C1B3B1E1990` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
ForcePickupRegenerate(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x758A5C1B3B1E1990, p0)
```


---

## GET_CLOSEST_OBJECT_OF_TYPE

**Description:** Returns the closest object of a specified type within a given radius from a specified position

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOSEST_OBJECT_OF_TYPE` |
| Hash | `0xE143FA2249364369` |
| Return Type | `Object` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `modelHash` (Hash), `missionScriptObject` (BOOL), `scriptHostObject` (BOOL), `networkObject` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`modelHash`** (`Hash`)
- **`missionScriptObject`** (`BOOL`)
- **`scriptHostObject`** (`BOOL`)
- **`networkObject`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetClosestObjectOfType(x, y, z, radius, modelHash, missionScriptObject, scriptHostObject, networkObject)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE143FA2249364369, x, y, z, radius, modelHash, missionScriptObject, scriptHostObject, networkObject)
```


---

## GET_OBJECT_FRAGMENT_DAMAGE_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `GET_OBJECT_FRAGMENT_DAMAGE_HEALTH` |
| Hash | `0xB6FBFD079B8D0596` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (BOOL) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetObjectFragmentDamageHealth(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB6FBFD079B8D0596, p0, p1)
```


---

## GET_OFFSET_FROM_COORD_AND_HEADING_IN_WORLD_COORDS

**Description:** Old name: _GET_OBJECT_OFFSET_FROM_COORDS

| Property | Value |
|----------|-------|
| Native Name | `GET_OFFSET_FROM_COORD_AND_HEADING_IN_WORLD_COORDS` |
| Hash | `0x163E252DE035A133` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `xPos` (float), `yPos` (float), `zPos` (float), `heading` (float), `xOffset` (float), `yOffset` (float), `zOffset` (float) |

### Parameters

- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`heading`** (`float`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetOffsetFromCoordAndHeadingInWorldCoords(xPos, yPos, zPos, heading, xOffset, yOffset, zOffset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x163E252DE035A133, xPos, yPos, zPos, heading, xOffset, yOffset, zOffset)
```


---

## GET_PICKUP_COORDS

| Property | Value |
|----------|-------|
| Native Name | `GET_PICKUP_COORDS` |
| Hash | `0x225B8B35C88029B3` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `pickup` (Pickup) |

### Parameters

- **`pickup`** (`Pickup`)

### Usage

**Lua (Direct):**
```lua
local result = GetPickupCoords(pickup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x225B8B35C88029B3, pickup)
```


---

## GET_PICKUP_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `GET_PICKUP_OBJECT` |
| Hash | `0x5099BC55630B25AE` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `pickup` (Pickup) |

### Parameters

- **`pickup`** (`Pickup`)

### Usage

**Lua (Direct):**
```lua
local result = GetPickupObject(pickup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5099BC55630B25AE, pickup)
```


---

## GET_RAYFIRE_MAP_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `GET_RAYFIRE_MAP_OBJECT` |
| Hash | `0xB48FCED898292E52` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `name` (const char*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetRayfireMapObject(x, y, z, radius, name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB48FCED898292E52, x, y, z, radius, name)
```


---

## GET_RAYFIRE_MAP_OBJECT_ANIM_PHASE

| Property | Value |
|----------|-------|
| Native Name | `GET_RAYFIRE_MAP_OBJECT_ANIM_PHASE` |
| Hash | `0x260EE4FDBDF4DB01` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = GetRayfireMapObjectAnimPhase(object)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x260EE4FDBDF4DB01, object)
```


---

## GET_SAFE_PICKUP_COORDS

| Property | Value |
|----------|-------|
| Native Name | `GET_SAFE_PICKUP_COORDS` |
| Hash | `0x6E16BC2503FF1FF0` |
| Return Type | `Vector3` |
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
local result = GetSafePickupCoords(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6E16BC2503FF1FF0, p0, p1, p2, p3, p4, p5)
```


---

## GET_STATE_OF_RAYFIRE_MAP_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `GET_STATE_OF_RAYFIRE_MAP_OBJECT` |
| Hash | `0x899BA936634A322E` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = GetStateOfRayfireMapObject(object)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x899BA936634A322E, object)
```


---

## GET_WEAPON_TYPE_FROM_PICKUP_TYPE

| Property | Value |
|----------|-------|
| Native Name | `GET_WEAPON_TYPE_FROM_PICKUP_TYPE` |
| Hash | `0x08F96CA6C551AD51` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `pickupHash` (Hash) |

### Parameters

- **`pickupHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponTypeFromPickupType(pickupHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x08F96CA6C551AD51, pickupHash)
```


---

## HAS_CLOSEST_OBJECT_OF_TYPE_BEEN_BROKEN

| Property | Value |
|----------|-------|
| Native Name | `HAS_CLOSEST_OBJECT_OF_TYPE_BEEN_BROKEN` |
| Hash | `0x761B0E69AC4D007E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `modelHash` (Hash), `p5` (Any) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`modelHash`** (`Hash`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = HasClosestObjectOfTypeBeenBroken(p0, p1, p2, p3, modelHash, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x761B0E69AC4D007E, p0, p1, p2, p3, modelHash, p5)
```


---

## HAS_OBJECT_BEEN_BROKEN

| Property | Value |
|----------|-------|
| Native Name | `HAS_OBJECT_BEEN_BROKEN` |
| Hash | `0x8ABFB70C49CC43E2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = HasObjectBeenBroken(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8ABFB70C49CC43E2, p0)
```


---

## HAS_PICKUP_BEEN_COLLECTED

| Property | Value |
|----------|-------|
| Native Name | `HAS_PICKUP_BEEN_COLLECTED` |
| Hash | `0x80EC48E6679313F9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `pickup` (Pickup) |

### Parameters

- **`pickup`** (`Pickup`)

### Usage

**Lua (Direct):**
```lua
local result = HasPickupBeenCollected(pickup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x80EC48E6679313F9, pickup)
```


---

## IS_DOOR_CLOSED

| Property | Value |
|----------|-------|
| Native Name | `IS_DOOR_CLOSED` |
| Hash | `0xC531EE8A1145A149` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `doorHash` (Hash) |

### Parameters

- **`doorHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsDoorClosed(doorHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC531EE8A1145A149, doorHash)
```


---

## IS_DOOR_REGISTERED_WITH_SYSTEM

| Property | Value |
|----------|-------|
| Native Name | `IS_DOOR_REGISTERED_WITH_SYSTEM` |
| Hash | `0xC153C43EA202C8C1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `doorHash` (Hash) |

### Parameters

- **`doorHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsDoorRegisteredWithSystem(doorHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC153C43EA202C8C1, doorHash)
```


---

## IS_OBJECT_A_PORTABLE_PICKUP

| Property | Value |
|----------|-------|
| Native Name | `IS_OBJECT_A_PORTABLE_PICKUP` |
| Hash | `0x0378C08504160D0D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = IsObjectAPortablePickup(object)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0378C08504160D0D, object)
```


---

## IS_OBJECT_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `IS_OBJECT_VISIBLE` |
| Hash | `0x8B32ACE6326A7546` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = IsObjectVisible(object)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8B32ACE6326A7546, object)
```


---

## IS_POINT_IN_ANGLED_AREA

| Property | Value |
|----------|-------|
| Native Name | `IS_POINT_IN_ANGLED_AREA` |
| Hash | `0x2A70BAE8883E4C81` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (float), `p9` (float), `p10` (BOOL), `p11` (BOOL) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`float`)
- **`p10`** (`BOOL`)
- **`p11`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPointInAngledArea(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2A70BAE8883E4C81, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11)
```


---

## ONLY_CLEAN_UP_OBJECT_WHEN_OUT_OF_RANGE

**Description:** Old name: _MARK_OBJECT_FOR_DELETION

| Property | Value |
|----------|-------|
| Native Name | `ONLY_CLEAN_UP_OBJECT_WHEN_OUT_OF_RANGE` |
| Hash | `0xADBE4809F19F927A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
OnlyCleanUpObjectWhenOutOfRange(object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xADBE4809F19F927A, object)
```


---

## PLACE_OBJECT_ON_GROUND_PROPERLY

| Property | Value |
|----------|-------|
| Native Name | `PLACE_OBJECT_ON_GROUND_PROPERLY` |
| Hash | `0x58A850EAEE20FAA3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `object` (Object), `p1` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = PlaceObjectOnGroundProperly(object, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58A850EAEE20FAA3, object, p1)
```


---

## PREVENT_COLLECTION_OF_PORTABLE_PICKUP

| Property | Value |
|----------|-------|
| Native Name | `PREVENT_COLLECTION_OF_PORTABLE_PICKUP` |
| Hash | `0x92AEFB5F6E294023` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PreventCollectionOfPortablePickup(object, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x92AEFB5F6E294023, object, p1, p2)
```


---

## REMOVE_ALL_PICKUPS_OF_TYPE

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_ALL_PICKUPS_OF_TYPE` |
| Hash | `0x27F9D613092159CF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pickupHash` (Hash) |

### Parameters

- **`pickupHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveAllPickupsOfType(pickupHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x27F9D613092159CF, pickupHash)
```


---

*End of OBJECT natives part 1*
