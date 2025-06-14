# VOLUME Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** VOLUME  
**Natives in this file:** 50  
**Total natives in namespace:** 80  
**Generated from:** RDR3natives JSON data

---

## CREATE_VOLUME_AGGREGATE

| Property | Value |
|----------|-------|
| Native Name | `CREATE_VOLUME_AGGREGATE` |
| Hash | `0x59F6F5C1D129F106` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeAggregate()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x59F6F5C1D129F106, )
```


---

## CREATE_VOLUME_BOX

| Property | Value |
|----------|-------|
| Native Name | `CREATE_VOLUME_BOX` |
| Hash | `0xDF85637F22706891` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float) |

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

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeBox(x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF85637F22706891, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```


---

## CREATE_VOLUME_CYLINDER

| Property | Value |
|----------|-------|
| Native Name | `CREATE_VOLUME_CYLINDER` |
| Hash | `0x0522D4774B82E3E6` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float) |

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

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeCylinder(x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0522D4774B82E3E6, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```


---

## CREATE_VOLUME_SPHERE

| Property | Value |
|----------|-------|
| Native Name | `CREATE_VOLUME_SPHERE` |
| Hash | `0xB3FB80A32BAE3065` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float) |

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

### Usage

**Lua (Direct):**
```lua
local result = CreateVolumeSphere(x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB3FB80A32BAE3065, x, y, z, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```


---

## DELETE_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `DELETE_VOLUME` |
| Hash | `0x43F867EF5C463A53` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
DeleteVolume(volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x43F867EF5C463A53, volume)
```


---

## DOES_VOLUME_COLLIDE_WITH_ANY_VOLUME_LOCK

| Property | Value |
|----------|-------|
| Native Name | `DOES_VOLUME_COLLIDE_WITH_ANY_VOLUME_LOCK` |
| Hash | `0x397769175A7DBB30` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `p4` (BOOL), `p5` (int), `p6` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p4`** (`BOOL`)
- **`p5`** (`int`)
- **`p6`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesVolumeCollideWithAnyVolumeLock(x, y, z, radius, p4, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x397769175A7DBB30, x, y, z, radius, p4, p5, p6)
```


---

## DOES_VOLUME_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_VOLUME_EXIST` |
| Hash | `0x92A78D0BEDB332A3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = DoesVolumeExist(volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x92A78D0BEDB332A3, volume)
```


---

## GET_VOLUME_COORDS

| Property | Value |
|----------|-------|
| Native Name | `GET_VOLUME_COORDS` |
| Hash | `0xF70F00013A62F866` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = GetVolumeCoords(volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF70F00013A62F866, volume)
```


---

## GET_VOLUME_LOCK_REQUEST_STATUS

**Description:** enum eVolumeLockRequestStatus
{
	VOLUME_LOCK_REQUEST_STATUS_INVALID,
	VOLUME_LOCK_REQUEST_STATUS_READY,
	VOLUME_LOCK_REQUEST_STATUS_IN_PROGRESS,
	VOLUME_LOCK_REQUEST_STATUS_SUCCEEDED,
	VOLUME_LOCK_REQUEST_STATUS_FAILED
};

| Property | Value |
|----------|-------|
| Native Name | `GET_VOLUME_LOCK_REQUEST_STATUS` |
| Hash | `0xB33A604345F58202` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `volLockRequestId` (int) |

### Parameters

- **`volLockRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetVolumeLockRequestStatus(volLockRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB33A604345F58202, volLockRequestId)
```


---

## GET_VOLUME_ROTATION

| Property | Value |
|----------|-------|
| Native Name | `GET_VOLUME_ROTATION` |
| Hash | `0x18675BC914891122` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = GetVolumeRotation(volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x18675BC914891122, volume)
```


---

## GET_VOLUME_SCALE

| Property | Value |
|----------|-------|
| Native Name | `GET_VOLUME_SCALE` |
| Hash | `0x3E2A25B2416DD67E` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = GetVolumeScale(volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3E2A25B2416DD67E, volume)
```


---

## IS_POINT_IN_VOLUME

**Description:** Old name: _IS_POSITION_INSIDE_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `IS_POINT_IN_VOLUME` |
| Hash | `0xF256A75210C5C0EB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `volume` (Volume), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`volume`** (`Volume`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsPointInVolume(volume, x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF256A75210C5C0EB, volume, x, y, z)
```


---

## IS_VOLUME_LOCK_REQUEST_VALID

| Property | Value |
|----------|-------|
| Native Name | `IS_VOLUME_LOCK_REQUEST_VALID` |
| Hash | `0xA4A4359320345B34` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `volLockRequestId` (int) |

### Parameters

- **`volLockRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsVolumeLockRequestValid(volLockRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA4A4359320345B34, volLockRequestId)
```


---

## REQUEST_VOLUME_LOCK

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_VOLUME_LOCK` |
| Hash | `0xF14BCEF290F869E1` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `p4` (int), `p5` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p4`** (`int`)
- **`p5`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RequestVolumeLock(x, y, z, radius, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF14BCEF290F869E1, x, y, z, radius, p4, p5)
```


---

## REQUEST_VOLUME_LOCK_WITH_ARGS

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_VOLUME_LOCK_WITH_ARGS` |
| Hash | `0x183C0B6CFEFFCAE4` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = RequestVolumeLockWithArgs(args)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x183C0B6CFEFFCAE4, args)
```


---

## SET_VOLUME_COORDS

| Property | Value |
|----------|-------|
| Native Name | `SET_VOLUME_COORDS` |
| Hash | `0x541B8576615C33DE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `volume` (Volume), `posX` (float), `posY` (float), `posZ` (float) |

### Parameters

- **`volume`** (`Volume`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetVolumeCoords(volume, posX, posY, posZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x541B8576615C33DE, volume, posX, posY, posZ)
```


---

## SET_VOLUME_OWNER_PERSISTENT_CHARACTER

| Property | Value |
|----------|-------|
| Native Name | `SET_VOLUME_OWNER_PERSISTENT_CHARACTER` |
| Hash | `0xE2BE6FFA4A13CBB0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `persChar` (PersChar), `p2` (BOOL) |

### Parameters

- **`volume`** (`Volume`)
- **`persChar`** (`PersChar`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVolumeOwnerPersistentCharacter(volume, persChar, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE2BE6FFA4A13CBB0, volume, persChar, p2)
```


---

## SET_VOLUME_ROTATION

| Property | Value |
|----------|-------|
| Native Name | `SET_VOLUME_ROTATION` |
| Hash | `0xA07CF1B21B56F041` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `volume` (Volume), `rotX` (float), `rotY` (float), `rotZ` (float) |

### Parameters

- **`volume`** (`Volume`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetVolumeRotation(volume, rotX, rotY, rotZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA07CF1B21B56F041, volume, rotX, rotY, rotZ)
```


---

## SET_VOLUME_SCALE

| Property | Value |
|----------|-------|
| Native Name | `SET_VOLUME_SCALE` |
| Hash | `0xA46E98BDC407E23D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `volume` (Volume), `scaleX` (float), `scaleY` (float), `scaleZ` (float) |

### Parameters

- **`volume`** (`Volume`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetVolumeScale(volume, scaleX, scaleY, scaleZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA46E98BDC407E23D, volume, scaleX, scaleY, scaleZ)
```


---

## _0x128FC3A893BF853A

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_0x128FC3A893BF853A` |
| Hash | `0x128FC3A893BF853A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x128FC3A893BF853A(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x128FC3A893BF853A, p0)
```


---

## _GET_VOLUME_AMOUNT_OF_INDEXED_ITEMS

**Description:** Indexes items (including entyties and peds) in a set volume
Counts up as its the return value of how many items it writes to given itemSet

| Property | Value |
|----------|-------|
| Native Name | `_GET_VOLUME_AMOUNT_OF_INDEXED_ITEMS` |
| Hash | `0x2B32B11520626229` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `itemSet` (ItemSet) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`itemSet`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
local result = GetVolumeAmountOfIndexedItems(x, y, z, radius, itemSet)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2B32B11520626229, x, y, z, radius, itemSet)
```


---

## _0x351D71B8B72B858B

| Property | Value |
|----------|-------|
| Native Name | `_0x351D71B8B72B858B` |
| Hash | `0x351D71B8B72B858B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x351D71B8B72B858B(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x351D71B8B72B858B, p0)
```


---

## _0x3EFABB21E14A6BD1

| Property | Value |
|----------|-------|
| Native Name | `_0x3EFABB21E14A6BD1` |
| Hash | `0x3EFABB21E14A6BD1` |
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
_0x3EFABB21E14A6BD1(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3EFABB21E14A6BD1, p0, p1, p2)
```


---

## _0x40F769D31A00D5A0

| Property | Value |
|----------|-------|
| Native Name | `_0x40F769D31A00D5A0` |
| Hash | `0x40F769D31A00D5A0` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x40F769D31A00D5A0(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x40F769D31A00D5A0, p0, p1)
```


---

## _0x4A8FEFC43FD8AC9B

| Property | Value |
|----------|-------|
| Native Name | `_0x4A8FEFC43FD8AC9B` |
| Hash | `0x4A8FEFC43FD8AC9B` |
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
_0x4A8FEFC43FD8AC9B(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4A8FEFC43FD8AC9B, p0, p1, p2)
```


---

## _0x51E52C9687FCDEEC

| Property | Value |
|----------|-------|
| Native Name | `_0x51E52C9687FCDEEC` |
| Hash | `0x51E52C9687FCDEEC` |
| Return Type | `Any` |
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
local result = _0x51E52C9687FCDEEC(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x51E52C9687FCDEEC, p0, p1, p2, p3, p4, p5, p6)
```


---

## _0x52572B331E693AED

| Property | Value |
|----------|-------|
| Native Name | `_0x52572B331E693AED` |
| Hash | `0x52572B331E693AED` |
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
_0x52572B331E693AED(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x52572B331E693AED, p0, p1, p2)
```


---

## _0x53D05D60E5F5B40C

| Property | Value |
|----------|-------|
| Native Name | `_0x53D05D60E5F5B40C` |
| Hash | `0x53D05D60E5F5B40C` |
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
_0x53D05D60E5F5B40C(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x53D05D60E5F5B40C, p0, p1, p2, p3)
```


---

## _0x695DAC2DB928F308

| Property | Value |
|----------|-------|
| Native Name | `_0x695DAC2DB928F308` |
| Hash | `0x695DAC2DB928F308` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x695DAC2DB928F308(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x695DAC2DB928F308, p0, p1)
```


---

## _0x6D5F9E69BA1BE783

| Property | Value |
|----------|-------|
| Native Name | `_0x6D5F9E69BA1BE783` |
| Hash | `0x6D5F9E69BA1BE783` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6D5F9E69BA1BE783(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D5F9E69BA1BE783, p0)
```


---

## _0x748C5F51A18CB8F0

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_0x748C5F51A18CB8F0` |
| Hash | `0x748C5F51A18CB8F0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x748C5F51A18CB8F0(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x748C5F51A18CB8F0, p0)
```


---

## _0x7FD78DFD0C5D7B9B

| Property | Value |
|----------|-------|
| Native Name | `_0x7FD78DFD0C5D7B9B` |
| Hash | `0x7FD78DFD0C5D7B9B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7FD78DFD0C5D7B9B(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7FD78DFD0C5D7B9B, p0)
```


---

## _0x870E9981ED27C815

| Property | Value |
|----------|-------|
| Native Name | `_0x870E9981ED27C815` |
| Hash | `0x870E9981ED27C815` |
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
local result = _0x870E9981ED27C815(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x870E9981ED27C815, p0, p1, p2, p3, p4, p5)
```


---

## _0x998202B206872672

| Property | Value |
|----------|-------|
| Native Name | `_0x998202B206872672` |
| Hash | `0x998202B206872672` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x998202B206872672(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x998202B206872672, p0)
```


---

## _0xAA9EE2AAFC717623

| Property | Value |
|----------|-------|
| Native Name | `_0xAA9EE2AAFC717623` |
| Hash | `0xAA9EE2AAFC717623` |
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
local result = _0xAA9EE2AAFC717623(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAA9EE2AAFC717623, p0, p1, p2, p3, p4, p5)
```


---

## _0xAC355980681A7F89

| Property | Value |
|----------|-------|
| Native Name | `_0xAC355980681A7F89` |
| Hash | `0xAC355980681A7F89` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xAC355980681A7F89(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAC355980681A7F89, p0)
```


---

## _0xB440F4E35393FC39

| Property | Value |
|----------|-------|
| Native Name | `_0xB440F4E35393FC39` |
| Hash | `0xB440F4E35393FC39` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `p1` (Any) |

### Parameters

- **`volume`** (`Volume`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xB440F4E35393FC39(volume, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB440F4E35393FC39, volume, p1)
```


---

## _0xB469CFD9E065EB99

| Property | Value |
|----------|-------|
| Native Name | `_0xB469CFD9E065EB99` |
| Hash | `0xB469CFD9E065EB99` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xB469CFD9E065EB99(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB469CFD9E065EB99, p0, p1)
```


---

## _0xC4019CF9AE8E931A

| Property | Value |
|----------|-------|
| Native Name | `_0xC4019CF9AE8E931A` |
| Hash | `0xC4019CF9AE8E931A` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `volLockRequestId` (int) |

### Parameters

- **`volLockRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xC4019CF9AE8E931A(volLockRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC4019CF9AE8E931A, volLockRequestId)
```


---

## _0xC61E2FD926DBB406

| Property | Value |
|----------|-------|
| Native Name | `_0xC61E2FD926DBB406` |
| Hash | `0xC61E2FD926DBB406` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xC61E2FD926DBB406()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC61E2FD926DBB406, )
```


---

## _0xCA5C90D40665D5CE

| Property | Value |
|----------|-------|
| Native Name | `_0xCA5C90D40665D5CE` |
| Hash | `0xCA5C90D40665D5CE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xCA5C90D40665D5CE(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCA5C90D40665D5CE, p0, p1)
```


---

## _0xD460135C98940274

| Property | Value |
|----------|-------|
| Native Name | `_0xD460135C98940274` |
| Hash | `0xD460135C98940274` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `p1` (Any) |

### Parameters

- **`volume`** (`Volume`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xD460135C98940274(volume, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD460135C98940274, volume, p1)
```


---

## _0xD4FA73FE628FEC63

| Property | Value |
|----------|-------|
| Native Name | `_0xD4FA73FE628FEC63` |
| Hash | `0xD4FA73FE628FEC63` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xD4FA73FE628FEC63(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD4FA73FE628FEC63, p0, p1)
```


---

## _0xD52DF30355EA7C8E

| Property | Value |
|----------|-------|
| Native Name | `_0xD52DF30355EA7C8E` |
| Hash | `0xD52DF30355EA7C8E` |
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
_0xD52DF30355EA7C8E(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD52DF30355EA7C8E, p0, p1, p2)
```


---

## _0xD882C5B3991575B7

| Property | Value |
|----------|-------|
| Native Name | `_0xD882C5B3991575B7` |
| Hash | `0xD882C5B3991575B7` |
| Return Type | `Vector3` |
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
local result = _0xD882C5B3991575B7(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD882C5B3991575B7, p0, p1, p2, p3, p4)
```


---

## _0xEBA87B9273835CF3

| Property | Value |
|----------|-------|
| Native Name | `_0xEBA87B9273835CF3` |
| Hash | `0xEBA87B9273835CF3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xEBA87B9273835CF3(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEBA87B9273835CF3, p0, p1)
```


---

## _0xEE1D6FF54CAF7714

| Property | Value |
|----------|-------|
| Native Name | `_0xEE1D6FF54CAF7714` |
| Hash | `0xEE1D6FF54CAF7714` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xEE1D6FF54CAF7714(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEE1D6FF54CAF7714, p0, p1)
```


---

## _0xF3A2FBA5985C8CD5

| Property | Value |
|----------|-------|
| Native Name | `_0xF3A2FBA5985C8CD5` |
| Hash | `0xF3A2FBA5985C8CD5` |
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
_0xF3A2FBA5985C8CD5(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF3A2FBA5985C8CD5, p0, p1, p2, p3)
```


---

## _0xF6CE6F9C3897804E

| Property | Value |
|----------|-------|
| Native Name | `_0xF6CE6F9C3897804E` |
| Hash | `0xF6CE6F9C3897804E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xF6CE6F9C3897804E(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF6CE6F9C3897804E, p0)
```


---

## _0xF6F5447D418DAA82

| Property | Value |
|----------|-------|
| Native Name | `_0xF6F5447D418DAA82` |
| Hash | `0xF6F5447D418DAA82` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xF6F5447D418DAA82(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF6F5447D418DAA82, p0)
```


---

*End of VOLUME natives part 1*
