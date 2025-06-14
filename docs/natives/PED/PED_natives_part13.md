# PED Natives - Part 13 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _0xC2EF407645BEECDC

| Property | Value |
|----------|-------|
| Native Name | `_0xC2EF407645BEECDC` |
| Hash | `0xC2EF407645BEECDC` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xC2EF407645BEECDC(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC2EF407645BEECDC, p0)
```


---

## _0xC3995D396F1D97B6

**Description:** _GET_PED_G* - _GET_PED_I*

| Property | Value |
|----------|-------|
| Native Name | `_0xC3995D396F1D97B6` |
| Hash | `0xC3995D396F1D97B6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xC3995D396F1D97B6(ped, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC3995D396F1D97B6, ped, p1, p2)
```


---

## _SET_PELT_FOR_HORSE_BY_INVENTORY_ITEM

**Description:** Set the pelt of the animal to the back of the horse
EXAMPLE:
local mount = GetMountOwnedByPlayer(PlayerId())
Citizen.InvokeNative(0xC412AA1C73111FE0,mount,GetHashKey('PROVISION_DEER_HIDE_POOR'),GetHashKey('a_c_deer_01_uppr_000_c0_001_ab'),0,0)

| Property | Value |
|----------|-------|
| Native Name | `_SET_PELT_FOR_HORSE_BY_INVENTORY_ITEM` |
| Hash | `0xC412AA1C73111FE0` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `horse` (Ped), `itemHash` (Hash), `albedo` (Hash), `normal` (Hash), `p4` (BOOL) |

### Parameters

- **`horse`** (`Ped`)
- **`itemHash`** (`Hash`)
- **`albedo`** (`Hash`)
- **`normal`** (`Hash`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPeltForHorseByInventoryItem(horse, itemHash, albedo, normal, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC412AA1C73111FE0, horse, itemHash, albedo, normal, p4)
```


---

## _0xC48AF420371C7407

**Description:** _SET_PED_M*

| Property | Value |
|----------|-------|
| Native Name | `_0xC48AF420371C7407` |
| Hash | `0xC48AF420371C7407` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `grapple` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`grapple`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0xC48AF420371C7407(ped, grapple)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC48AF420371C7407, ped, grapple)
```


---

## _PED_SET_SIMPLE_PLAYER_MEMORY

**Description:** memoryType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/_PED_SET_SIMPLE_PLAYER_MEMORY

| Property | Value |
|----------|-------|
| Native Name | `_PED_SET_SIMPLE_PLAYER_MEMORY` |
| Hash | `0xC494C76A34266E82` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `memoryType` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`memoryType`** (`int`)

### Usage

**Lua (Direct):**
```lua
PedSetSimplePlayerMemory(ped, memoryType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC494C76A34266E82, ped, memoryType)
```


---

## _GET_PED_RAGDOLL_BONE_INDEX

**Description:** Returns boneIndex

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_RAGDOLL_BONE_INDEX` |
| Hash | `0xC5303F460A40D21D` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `boneId` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`boneId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedRagdollBoneIndex(ped, boneId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC5303F460A40D21D, ped, boneId)
```


---

## _0xC5B78E41DCF8227C

**Description:** _SET_H* - _SET_I*

| Property | Value |
|----------|-------|
| Native Name | `_0xC5B78E41DCF8227C` |
| Hash | `0xC5B78E41DCF8227C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xC5B78E41DCF8227C(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC5B78E41DCF8227C, ped, p1)
```


---

## _0xC6136B40FFFB778B

| Property | Value |
|----------|-------|
| Native Name | `_0xC6136B40FFFB778B` |
| Hash | `0xC6136B40FFFB778B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xC6136B40FFFB778B(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC6136B40FFFB778B, p0)
```


---

## _0xC6981AFF6D2A71C2

| Property | Value |
|----------|-------|
| Native Name | `_0xC6981AFF6D2A71C2` |
| Hash | `0xC6981AFF6D2A71C2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC6981AFF6D2A71C2(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC6981AFF6D2A71C2, p0)
```


---

## _0xC6C4E15CF7D52FEA

| Property | Value |
|----------|-------|
| Native Name | `_0xC6C4E15CF7D52FEA` |
| Hash | `0xC6C4E15CF7D52FEA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC6C4E15CF7D52FEA(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC6C4E15CF7D52FEA, p0, p1)
```


---

## _0xC9151483CC06A414

| Property | Value |
|----------|-------|
| Native Name | `_0xC9151483CC06A414` |
| Hash | `0xC9151483CC06A414` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xC9151483CC06A414(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC9151483CC06A414, ped)
```


---

## _0xC991EF46FE323867

**Description:** Not implemented.

| Property | Value |
|----------|-------|
| Native Name | `_0xC991EF46FE323867` |
| Hash | `0xC991EF46FE323867` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC991EF46FE323867(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC991EF46FE323867, ped, p1)
```


---

## _0xC99F104BDF8C7F5A

**Description:** _SET_PLAYER_N* - _SET_PLAYER_S*

| Property | Value |
|----------|-------|
| Native Name | `_0xC99F104BDF8C7F5A` |
| Hash | `0xC99F104BDF8C7F5A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xC99F104BDF8C7F5A(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC99F104BDF8C7F5A, ped, p1)
```


---

## _0xCA95924C893A0C91

**Description:** Returns vehicle speed
_COMPUTE_*

| Property | Value |
|----------|-------|
| Native Name | `_0xCA95924C893A0C91` |
| Hash | `0xCA95924C893A0C91` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = _0xCA95924C893A0C91(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCA95924C893A0C91, ped, p1)
```


---

## _0xCA95C156C14B2054

| Property | Value |
|----------|-------|
| Native Name | `_0xCA95C156C14B2054` |
| Hash | `0xCA95C156C14B2054` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xCA95C156C14B2054(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCA95C156C14B2054, p0, p1)
```


---

## _0xCAC43D060099EA72

| Property | Value |
|----------|-------|
| Native Name | `_0xCAC43D060099EA72` |
| Hash | `0xCAC43D060099EA72` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xCAC43D060099EA72(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCAC43D060099EA72, ped)
```


---

## _0xCB1A3864C524F784

| Property | Value |
|----------|-------|
| Native Name | `_0xCB1A3864C524F784` |
| Hash | `0xCB1A3864C524F784` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xCB1A3864C524F784(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCB1A3864C524F784, p0, p1)
```


---

## _0xCB86D3E3E3708901

| Property | Value |
|----------|-------|
| Native Name | `_0xCB86D3E3E3708901` |
| Hash | `0xCB86D3E3E3708901` |
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
local result = _0xCB86D3E3E3708901(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB86D3E3E3708901, p0, p1, p2, p3, p4)
```


---

## _0xCB8F4C9343EBE240

**Description:** Only used in R* SP Scripts
_GET_PLAYER_W* - _GET_RANDOM_*

| Property | Value |
|----------|-------|
| Native Name | `_0xCB8F4C9343EBE240` |
| Hash | `0xCB8F4C9343EBE240` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `eventType` (Hash), `coords` (Vector3*) |

### Parameters

- **`ped`** (`Ped`)
- **`eventType`** (`Hash`)
- **`coords`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
local result = _0xCB8F4C9343EBE240(ped, eventType, coords)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB8F4C9343EBE240, ped, eventType, coords)
```


---

## _0xCBDE59C48F2B06F5

| Property | Value |
|----------|-------|
| Native Name | `_0xCBDE59C48F2B06F5` |
| Hash | `0xCBDE59C48F2B06F5` |
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
_0xCBDE59C48F2B06F5(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCBDE59C48F2B06F5, p0, p1, p2)
```


---

## _0xCD9E5F94A2F38683

**Description:** _SET_PED_R* - _SET_PED_S*

| Property | Value |
|----------|-------|
| Native Name | `_0xCD9E5F94A2F38683` |
| Hash | `0xCD9E5F94A2F38683` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xCD9E5F94A2F38683(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCD9E5F94A2F38683, ped, p1)
```


---

## _0xCDFB8C04D4C95D9B

| Property | Value |
|----------|-------|
| Native Name | `_0xCDFB8C04D4C95D9B` |
| Hash | `0xCDFB8C04D4C95D9B` |
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
_0xCDFB8C04D4C95D9B(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCDFB8C04D4C95D9B, p0, p1, p2, p3)
```


---

## _0xCE7A6C1D5CDE1F9D

| Property | Value |
|----------|-------|
| Native Name | `_0xCE7A6C1D5CDE1F9D` |
| Hash | `0xCE7A6C1D5CDE1F9D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `object` (Object), `propName` (const char*), `animName` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`object`** (`Object`)
- **`propName`** (`const char*`)
- **`animName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0xCE7A6C1D5CDE1F9D(ped, object, propName, animName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE7A6C1D5CDE1F9D, ped, object, propName, animName)
```


---

## _0xCF0B19806473D324

**Description:** _SET_PED_COMBAT_*

| Property | Value |
|----------|-------|
| Native Name | `_0xCF0B19806473D324` |
| Hash | `0xCF0B19806473D324` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xCF0B19806473D324(ped, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCF0B19806473D324, ped, x, y, z)
```


---

## _0xD049920CD29F6CC8

| Property | Value |
|----------|-------|
| Native Name | `_0xD049920CD29F6CC8` |
| Hash | `0xD049920CD29F6CC8` |
| Return Type | `void` |
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
_0xD049920CD29F6CC8(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD049920CD29F6CC8, p0, p1, p2, p3, p4)
```


---

## _0xD049FDAF089FDDB0

| Property | Value |
|----------|-------|
| Native Name | `_0xD049FDAF089FDDB0` |
| Hash | `0xD049FDAF089FDDB0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Hash), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Hash`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xD049FDAF089FDDB0(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD049FDAF089FDDB0, ped, p1, p2)
```


---

## _0xD103F6DBB5442BE8

**Description:** Params: p1 either a 1 or 0, so perhaps BOOL
_SET_PED_A*

| Property | Value |
|----------|-------|
| Native Name | `_0xD103F6DBB5442BE8` |
| Hash | `0xD103F6DBB5442BE8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xD103F6DBB5442BE8(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD103F6DBB5442BE8, ped, p1)
```


---

## _0xD2F0FE8805D91647

| Property | Value |
|----------|-------|
| Native Name | `_0xD2F0FE8805D91647` |
| Hash | `0xD2F0FE8805D91647` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xD2F0FE8805D91647(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD2F0FE8805D91647, p0, p1)
```


---

## _0xD355E2F1BB41087E

| Property | Value |
|----------|-------|
| Native Name | `_0xD355E2F1BB41087E` |
| Hash | `0xD355E2F1BB41087E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD355E2F1BB41087E(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD355E2F1BB41087E, ped, p1)
```


---

## _0xD4D403EA031F351C

| Property | Value |
|----------|-------|
| Native Name | `_0xD4D403EA031F351C` |
| Hash | `0xD4D403EA031F351C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD4D403EA031F351C(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD4D403EA031F351C, ped)
```


---

## _0xD55DB4466D00A258

**Description:** Used in Script Function LA_CHECK_ALERTED
_GET_IS_PED_*

| Property | Value |
|----------|-------|
| Native Name | `_0xD55DB4466D00A258` |
| Hash | `0xD55DB4466D00A258` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `legendaryAnimal` (Ped) |

### Parameters

- **`legendaryAnimal`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD55DB4466D00A258(legendaryAnimal)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD55DB4466D00A258, legendaryAnimal)
```


---

## _0xD5BD1B5318A81994

**Description:** _SET_FORMATION_*

| Property | Value |
|----------|-------|
| Native Name | `_0xD5BD1B5318A81994` |
| Hash | `0xD5BD1B5318A81994` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `p1` (BOOL) |

### Parameters

- **`groupId`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xD5BD1B5318A81994(groupId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD5BD1B5318A81994, groupId, p1)
```


---

## _0xD61FCF9FCFD515B7

| Property | Value |
|----------|-------|
| Native Name | `_0xD61FCF9FCFD515B7` |
| Hash | `0xD61FCF9FCFD515B7` |
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
_0xD61FCF9FCFD515B7(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD61FCF9FCFD515B7, p0, p1, p2)
```


---

## _0xD7D2F45C56A4F4DF

| Property | Value |
|----------|-------|
| Native Name | `_0xD7D2F45C56A4F4DF` |
| Hash | `0xD7D2F45C56A4F4DF` |
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
_0xD7D2F45C56A4F4DF(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD7D2F45C56A4F4DF, p0, p1, p2)
```


---

## _0xD8544F6260F5F01E

**Description:** METAPED_PLAYER_COMPONENTS_SET_META_TYPE_TO_BE_BYPASSED: Setting visibility
p1 is mostly 10
_CLEAR_PED_N* - _CLEAR_PED_W*

| Property | Value |
|----------|-------|
| Native Name | `_0xD8544F6260F5F01E` |
| Hash | `0xD8544F6260F5F01E` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xD8544F6260F5F01E(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD8544F6260F5F01E, ped, p1)
```


---

## _0xD8CEEED54C672B5D

| Property | Value |
|----------|-------|
| Native Name | `_0xD8CEEED54C672B5D` |
| Hash | `0xD8CEEED54C672B5D` |
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
_0xD8CEEED54C672B5D(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD8CEEED54C672B5D, p0, p1, p2, p3, p4, p5, p6)
```


---

## _0xD97BC27AC039F681

| Property | Value |
|----------|-------|
| Native Name | `_0xD97BC27AC039F681` |
| Hash | `0xD97BC27AC039F681` |
| Return Type | `Any` |
| Build | `1311` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD97BC27AC039F681(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD97BC27AC039F681, p0, p1, p2, p3)
```


---

## _IS_PED_AFLOAT

**Description:** detects if ped is afloat in water like swimming or in a boat (driving or standing on it)

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_AFLOAT` |
| Hash | `0xDC88D06719070C39` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedAfloat(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDC88D06719070C39, ped)
```


---

## _0xDC91F22F09BC6C2F

**Description:** Used in Script Function MP_MAIN_OFFLINE__INITIALIZE_GAME
_SET_RELATIONSHIP_*

| Property | Value |
|----------|-------|
| Native Name | `_0xDC91F22F09BC6C2F` |
| Hash | `0xDC91F22F09BC6C2F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `group` (Hash), `p1` (BOOL) |

### Parameters

- **`group`** (`Hash`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xDC91F22F09BC6C2F(group, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDC91F22F09BC6C2F, group, p1)
```


---

## _0xDD9540E7B1C9714F

| Property | Value |
|----------|-------|
| Native Name | `_0xDD9540E7B1C9714F` |
| Hash | `0xDD9540E7B1C9714F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Hash), `r` (float), `g` (float), `b` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Hash`)
- **`r`** (`float`)
- **`g`** (`float`)
- **`b`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xDD9540E7B1C9714F(ped, p1, r, g, b)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDD9540E7B1C9714F, ped, p1, r, g, b)
```


---

## _0xDDFAD4DEAA7FA362

**Description:** _SET_FORMATION_P*

| Property | Value |
|----------|-------|
| Native Name | `_0xDDFAD4DEAA7FA362` |
| Hash | `0xDDFAD4DEAA7FA362` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `p1` (float), `p2` (float), `p3` (float), `p4` (float) |

### Parameters

- **`groupId`** (`int`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xDDFAD4DEAA7FA362(groupId, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDDFAD4DEAA7FA362, groupId, p1, p2, p3, p4)
```


---

## _0xDEDBED3020DA49DC

| Property | Value |
|----------|-------|
| Native Name | `_0xDEDBED3020DA49DC` |
| Hash | `0xDEDBED3020DA49DC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xDEDBED3020DA49DC(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDEDBED3020DA49DC, p0)
```


---

## _0xDEE8D30AA5C2E28D

| Property | Value |
|----------|-------|
| Native Name | `_0xDEE8D30AA5C2E28D` |
| Hash | `0xDEE8D30AA5C2E28D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Hash), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xDEE8D30AA5C2E28D(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDEE8D30AA5C2E28D, ped, p1, p2)
```


---

## _0xE0FE107AB174D64A

| Property | Value |
|----------|-------|
| Native Name | `_0xE0FE107AB174D64A` |
| Hash | `0xE0FE107AB174D64A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xE0FE107AB174D64A(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0FE107AB174D64A, p0, p1)
```


---

## _0xE1103300F3456DE7

**Description:** _SET_FORMATION_P*

| Property | Value |
|----------|-------|
| Native Name | `_0xE1103300F3456DE7` |
| Hash | `0xE1103300F3456DE7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `p1` (float), `p2` (float) |

### Parameters

- **`groupId`** (`int`)
- **`p1`** (`float`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xE1103300F3456DE7(groupId, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE1103300F3456DE7, groupId, p1, p2)
```


---

## _0xE1AADD0055D76603

**Description:** _C*

| Property | Value |
|----------|-------|
| Native Name | `_0xE1AADD0055D76603` |
| Hash | `0xE1AADD0055D76603` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity), `boneIndex1` (int), `boneIndex2` (int), `x` (float), `y` (float), `z` (float), `p7` (float), `p8` (BOOL), `p9` (BOOL), `p10` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)
- **`boneIndex1`** (`int`)
- **`boneIndex2`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)
- **`p10`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xE1AADD0055D76603(ped, entity, boneIndex1, boneIndex2, x, y, z, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE1AADD0055D76603, ped, entity, boneIndex1, boneIndex2, x, y, z, p7, p8, p9, p10)
```


---

## _0xE1B3BE07D3AADDED

| Property | Value |
|----------|-------|
| Native Name | `_0xE1B3BE07D3AADDED` |
| Hash | `0xE1B3BE07D3AADDED` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xE1B3BE07D3AADDED(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE1B3BE07D3AADDED, ped, p1, p2)
```


---

## _0xE20027B414BFE6C7

| Property | Value |
|----------|-------|
| Native Name | `_0xE20027B414BFE6C7` |
| Hash | `0xE20027B414BFE6C7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xE20027B414BFE6C7(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE20027B414BFE6C7, p0, p1)
```


---

## _0xE29D8CD66553DBAA

**Description:** _SET_PED_R* -_SET_PED_S*

| Property | Value |
|----------|-------|
| Native Name | `_0xE29D8CD66553DBAA` |
| Hash | `0xE29D8CD66553DBAA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `horse` (Ped) |

### Parameters

- **`horse`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xE29D8CD66553DBAA(horse)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE29D8CD66553DBAA, horse)
```


---

## _0xE37ACEE15AC50C7E

**Description:** _SET_PED_IN*

| Property | Value |
|----------|-------|
| Native Name | `_0xE37ACEE15AC50C7E` |
| Hash | `0xE37ACEE15AC50C7E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0xE37ACEE15AC50C7E(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE37ACEE15AC50C7E, ped, p1)
```


---

*End of PED natives part 13*
