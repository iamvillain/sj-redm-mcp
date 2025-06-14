# VOLUME Natives - Part 2 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** VOLUME  
**Natives in this file:** 30  
**Total natives in namespace:** 80  
**Generated from:** RDR3natives JSON data

---

## _0xFA15C9A320E707B0

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_0xFA15C9A320E707B0` |
| Hash | `0xFA15C9A320E707B0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xFA15C9A320E707B0()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA15C9A320E707B0, )
```


---

## _ADD_BOUNDS_TO_AGGREGATE_VOLUME

**Description:** _ADD_R* - _ADD_V(OLUME?)*

| Property | Value |
|----------|-------|
| Native Name | `_ADD_BOUNDS_TO_AGGREGATE_VOLUME` |
| Hash | `0x6E0D3C3F828DA773` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `aggregate` (Volume) |

### Parameters

- **`volume`** (`Volume`)
- **`aggregate`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
AddBoundsToAggregateVolume(volume, aggregate)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6E0D3C3F828DA773, volume, aggregate)
```


---

## _ADD_BOX_VOLUME_TO_VOLUME_AGGREGATE

| Property | Value |
|----------|-------|
| Native Name | `_ADD_BOX_VOLUME_TO_VOLUME_AGGREGATE` |
| Hash | `0x39816F6F94F385AD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `aggregate` (Volume), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (float), `p9` (float) |

### Parameters

- **`aggregate`** (`Volume`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddBoxVolumeToVolumeAggregate(aggregate, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x39816F6F94F385AD, aggregate, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## _ADD_CYLINDER_VOLUME_TO_VOLUME_AGGREGATE

| Property | Value |
|----------|-------|
| Native Name | `_ADD_CYLINDER_VOLUME_TO_VOLUME_AGGREGATE` |
| Hash | `0xBCE668AAF83608BE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `aggregate` (Volume), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (float), `p9` (float) |

### Parameters

- **`aggregate`** (`Volume`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddCylinderVolumeToVolumeAggregate(aggregate, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBCE668AAF83608BE, aggregate, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## _ADD_ENTRY_VOLUME_LOCK

| Property | Value |
|----------|-------|
| Native Name | `_ADD_ENTRY_VOLUME_LOCK` |
| Hash | `0x58D3803FA639A3BB` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = AddEntryVolumeLock(args)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58D3803FA639A3BB, args)
```


---

## _ADD_SPHERE_VOLUME_TO_VOLUME_AGGREGATE

| Property | Value |
|----------|-------|
| Native Name | `_ADD_SPHERE_VOLUME_TO_VOLUME_AGGREGATE` |
| Hash | `0x5B7D7BF36D2DE18B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `aggregate` (Volume), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (float), `p9` (float) |

### Parameters

- **`aggregate`** (`Volume`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddSphereVolumeToVolumeAggregate(aggregate, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5B7D7BF36D2DE18B, aggregate, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## _ADD_VOLUME_TO_VOLUME_AGGREGATE

| Property | Value |
|----------|-------|
| Native Name | `_ADD_VOLUME_TO_VOLUME_AGGREGATE` |
| Hash | `0x12FCAA23F2320422` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `aggregate` (Volume), `typeHash` (Hash), `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float) |

### Parameters

- **`aggregate`** (`Volume`)
- **`typeHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddVolumeToVolumeAggregate(aggregate, typeHash, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x12FCAA23F2320422, aggregate, typeHash, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```


---

## _CREATE_ANTI_GRIEF_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_ANTI_GRIEF_VOLUME` |
| Hash | `0x0EB78C2B156635B1` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `volumeType` (Hash), `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float) |

### Parameters

- **`volumeType`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = CreateAntiGriefVolume(volumeType, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0EB78C2B156635B1, volumeType, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```


---

## _CREATE_SPEED_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_SPEED_VOLUME` |
| Hash | `0xBBE768E3AE76E07C` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any), `p11` (Any), `p12` (Any), `p13` (Any), `p14` (Any) |

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
- **`p11`** (`Any`)
- **`p12`** (`Any`)
- **`p13`** (`Any`)
- **`p14`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CreateSpeedVolume(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBBE768E3AE76E07C, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14)
```


---

## _CREATE_VOLUME_AGGREGATE_WITH_CUSTOM_NAME

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_VOLUME_AGGREGATE_WITH_CUSTOM_NAME` |
| Hash | `0x5D580DE6398BB162` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `name` (char*) |

### Parameters

- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeAggregateWithCustomName(name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5D580DE6398BB162, name)
```


---

## _CREATE_VOLUME_BOX_WITH_CUSTOM_NAME

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_VOLUME_BOX_WITH_CUSTOM_NAME` |
| Hash | `0xF68485C7495D848E` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float), `name` (char*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeBoxWithCustomName(x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF68485C7495D848E, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, name)
```


---

## _CREATE_VOLUME_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_VOLUME_BY_HASH` |
| Hash | `0x502022FA1AF9DC86` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `volumeType` (Hash), `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float) |

### Parameters

- **`volumeType`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeByHash(volumeType, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x502022FA1AF9DC86, volumeType, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```


---

## _CREATE_VOLUME_BY_HASH_WITH_CUSTOM_NAME

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_VOLUME_BY_HASH_WITH_CUSTOM_NAME` |
| Hash | `0x1F85E4AC774A201E` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `volumeType` (Hash), `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float), `name` (char*) |

### Parameters

- **`volumeType`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeByHashWithCustomName(volumeType, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F85E4AC774A201E, volumeType, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, name)
```


---

## _CREATE_VOLUME_CYLINDER_WITH_CUSTOM_NAME

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_VOLUME_CYLINDER_WITH_CUSTOM_NAME` |
| Hash | `0xDF1E350EDDF06E59` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float), `name` (char*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeCylinderWithCustomName(x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF1E350EDDF06E59, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, name)
```


---

## _CREATE_VOLUME_LOCK

**Description:** Params: p5 is always 0

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_VOLUME_LOCK` |
| Hash | `0x00BBF7CEAE8C666A` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `flag` (int), `p5` (Any) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`flag`** (`int`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeLock(x, y, z, radius, flag, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x00BBF7CEAE8C666A, x, y, z, radius, flag, p5)
```


---

## _CREATE_VOLUME_LOCK_ATTACHED_TO_ENTITY

**Description:** Params: p3 is always 0

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_VOLUME_LOCK_ATTACHED_TO_ENTITY` |
| Hash | `0xF383E96C4904DF0C` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `entity` (Entity), `radius` (float), `flag` (int), `p3` (Any) |

### Parameters

- **`entity`** (`Entity`)
- **`radius`** (`float`)
- **`flag`** (`int`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeLockAttachedToEntity(entity, radius, flag, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF383E96C4904DF0C, entity, radius, flag, p3)
```


---

## _CREATE_VOLUME_SPHERE_WITH_CUSTOM_NAME

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_VOLUME_SPHERE_WITH_CUSTOM_NAME` |
| Hash | `0x10157BC3247FF3BA` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float), `name` (char*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeSphereWithCustomName(x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x10157BC3247FF3BA, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, name)
```


---

## _CREATE_WALK_AND_TALK_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_WALK_AND_TALK_VOLUME` |
| Hash | `0xFD0E389CD44434B6` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any), `p11` (Any), `p12` (Any) |

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
- **`p11`** (`Any`)
- **`p12`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CreateWalkAndTalkVolume(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFD0E389CD44434B6, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12)
```


---

## _FIND_VOLUME_LOCK_REQUEST_ID_WITH_ARGS

| Property | Value |
|----------|-------|
| Native Name | `_FIND_VOLUME_LOCK_REQUEST_ID_WITH_ARGS` |
| Hash | `0x77A6E4AD0C496F81` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = FindVolumeLockRequestIdWithArgs(args)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x77A6E4AD0C496F81, args)
```


---

## _GET_VOLUME_BOUNDS

| Property | Value |
|----------|-------|
| Native Name | `_GET_VOLUME_BOUNDS` |
| Hash | `0x5737199AF2DC609F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `min` (Vector3*), `max` (Vector3*) |

### Parameters

- **`volume`** (`Volume`)
- **`min`** (`Vector3*`)
- **`max`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
GetVolumeBounds(volume, min, max)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5737199AF2DC609F, volume, min, max)
```


---

## _GET_VOLUME_RELATIONSHIP

**Description:** Returns relationshipGroup Hash

| Property | Value |
|----------|-------|
| Native Name | `_GET_VOLUME_RELATIONSHIP` |
| Hash | `0x666C2F53ABEFC952` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = GetVolumeRelationship(volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x666C2F53ABEFC952, volume)
```


---

## _IS_AGGREGATE_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_IS_AGGREGATE_VOLUME` |
| Hash | `0xFEFF01B5725BCD22` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = IsAggregateVolume(volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFEFF01B5725BCD22, volume)
```


---

## _IS_POINT_NEAR_VOLUME_LOCK_CENTER

| Property | Value |
|----------|-------|
| Native Name | `_IS_POINT_NEAR_VOLUME_LOCK_CENTER` |
| Hash | `0x769BB7626B8CDB06` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `p4` (int), `p5` (int), `flags` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p4`** (`int`)
- **`p5`** (`int`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsPointNearVolumeLockCenter(x, y, z, radius, p4, p5, flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x769BB7626B8CDB06, x, y, z, radius, p4, p5, flags)
```


---

## _IS_VOLUME_LOCK_REQUEST_VALID_2

| Property | Value |
|----------|-------|
| Native Name | `_IS_VOLUME_LOCK_REQUEST_VALID_2` |
| Hash | `0xF6A8A652A6B186CD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `volLockRequestId` (int) |

### Parameters

- **`volLockRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsVolumeLockRequestValid2(volLockRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF6A8A652A6B186CD, volLockRequestId)
```


---

## _MODIFY_VOLUME_LOCK_LOCATION

| Property | Value |
|----------|-------|
| Native Name | `_MODIFY_VOLUME_LOCK_LOCATION` |
| Hash | `0xEC43C2FFB70E3F30` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volLock` (int), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`volLock`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
ModifyVolumeLockLocation(volLock, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEC43C2FFB70E3F30, volLock, x, y, z)
```


---

## _RELEASE_LOCK_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_RELEASE_LOCK_VOLUME` |
| Hash | `0xFDFECC6EE4491E11` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volLockRequestId` (int) |

### Parameters

- **`volLockRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReleaseLockVolume(volLockRequestId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFDFECC6EE4491E11, volLockRequestId)
```


---

## _REMOVE_BOUNDS_FROM_AGGREGATE_VOLUME

**Description:** _REMOVE_E* - _REMOVE_R*

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_BOUNDS_FROM_AGGREGATE_VOLUME` |
| Hash | `0xF92FA8890DECECF6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `aggregate` (Volume) |

### Parameters

- **`volume`** (`Volume`)
- **`aggregate`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
RemoveBoundsFromAggregateVolume(volume, aggregate)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF92FA8890DECECF6, volume, aggregate)
```


---

## _SET_ANTI_GRIEF_VOLUME_BLOCKS_HORSE

| Property | Value |
|----------|-------|
| Native Name | `_SET_ANTI_GRIEF_VOLUME_BLOCKS_HORSE` |
| Hash | `0xBE551C2CC421185D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `toggle` (BOOL) |

### Parameters

- **`volume`** (`Volume`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAntiGriefVolumeBlocksHorse(volume, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBE551C2CC421185D, volume, toggle)
```


---

## _SET_ANTI_GRIEF_VOLUME_BLOCKS_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `_SET_ANTI_GRIEF_VOLUME_BLOCKS_PLAYER` |
| Hash | `0x5B23DFF8E0948BB2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `toggle` (BOOL) |

### Parameters

- **`volume`** (`Volume`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAntiGriefVolumeBlocksPlayer(volume, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5B23DFF8E0948BB2, volume, toggle)
```


---

## _SET_VOLUME_RELATIONSHIP

| Property | Value |
|----------|-------|
| Native Name | `_SET_VOLUME_RELATIONSHIP` |
| Hash | `0xFD010A2154B40676` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `relationshipGroup` (Hash) |

### Parameters

- **`volume`** (`Volume`)
- **`relationshipGroup`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetVolumeRelationship(volume, relationshipGroup)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFD010A2154B40676, volume, relationshipGroup)
```


---

*End of VOLUME natives part 2*
