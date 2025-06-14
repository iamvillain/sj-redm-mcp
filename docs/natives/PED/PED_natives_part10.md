# PED Natives - Part 10 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _APPLY_PED_DAMAGE_PACK_TO_BONE

**Description:** seems to only work with PD_Vomit ? 

| Property | Value |
|----------|-------|
| Native Name | `_APPLY_PED_DAMAGE_PACK_TO_BONE` |
| Hash | `0x58D32261AE0F0843` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `boneId` (int), `xOffset` (float), `yOffset` (float), `zOffset` (float), `xRot` (float), `yRot` (float), `zRot` (float), `damagePack` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`boneId`** (`int`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`damagePack`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ApplyPedDamagePackToBone(ped, boneId, xOffset, yOffset, zOffset, xRot, yRot, zRot, damagePack)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x58D32261AE0F0843, ped, boneId, xOffset, yOffset, zOffset, xRot, yRot, zRot, damagePack)
```


---

## _0x5A1A929C8B729B4A

**Description:** _C*

| Property | Value |
|----------|-------|
| Native Name | `_0x5A1A929C8B729B4A` |
| Hash | `0x5A1A929C8B729B4A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x5A1A929C8B729B4A(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5A1A929C8B729B4A, ped)
```


---

## _0x5AF24CA9C974E51A

**Description:** _SET_C*

| Property | Value |
|----------|-------|
| Native Name | `_0x5AF24CA9C974E51A` |
| Hash | `0x5AF24CA9C974E51A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped1` (Ped), `ped2` (Ped) |

### Parameters

- **`ped1`** (`Ped`)
- **`ped2`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x5AF24CA9C974E51A(ped1, ped2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5AF24CA9C974E51A, ped1, ped2)
```


---

## _0x5B73975B4F12F7F3

| Property | Value |
|----------|-------|
| Native Name | `_0x5B73975B4F12F7F3` |
| Hash | `0x5B73975B4F12F7F3` |
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
_0x5B73975B4F12F7F3(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5B73975B4F12F7F3, p0, p1, p2, p3, p4)
```


---

## _0x5BB04BC74A474B47

| Property | Value |
|----------|-------|
| Native Name | `_0x5BB04BC74A474B47` |
| Hash | `0x5BB04BC74A474B47` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x5BB04BC74A474B47(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5BB04BC74A474B47, p0, p1)
```


---

## _0x5BF0B9D9A8E227A0

**Description:** _IS_PED_B* - _IS_PED_C*

| Property | Value |
|----------|-------|
| Native Name | `_0x5BF0B9D9A8E227A0` |
| Hash | `0x5BF0B9D9A8E227A0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x5BF0B9D9A8E227A0(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5BF0B9D9A8E227A0, ped)
```


---

## _0x5C6C7C70CA302801

**Description:** _IS_PED_IN*

| Property | Value |
|----------|-------|
| Native Name | `_0x5C6C7C70CA302801` |
| Hash | `0x5C6C7C70CA302801` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x5C6C7C70CA302801(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5C6C7C70CA302801, ped)
```


---

## _0x5C90E20C25E6D83C

| Property | Value |
|----------|-------|
| Native Name | `_0x5C90E20C25E6D83C` |
| Hash | `0x5C90E20C25E6D83C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x5C90E20C25E6D83C(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5C90E20C25E6D83C, p0)
```


---

## _0x5CA20FBE49891BBD

**Description:** Used in Script Function MP_MAIN_OFFLINE__INITIALIZE_FLOW & PROCESS_GENERIC_PLAYER_INITIALIZATION

| Property | Value |
|----------|-------|
| Native Name | `_0x5CA20FBE49891BBD` |
| Hash | `0x5CA20FBE49891BBD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x5CA20FBE49891BBD(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5CA20FBE49891BBD, ped, p1)
```


---

## _0x5CB2EBB467BE3ED6

| Property | Value |
|----------|-------|
| Native Name | `_0x5CB2EBB467BE3ED6` |
| Hash | `0x5CB2EBB467BE3ED6` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `animal` (Ped), `p2` (float) |

### Parameters

- **`animal`** (`Ped`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x5CB2EBB467BE3ED6(animal, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5CB2EBB467BE3ED6, animal, p2)
```


---

## _0x5D4CD22A8C82A81A

**Description:** Related to ped hat
_SET_PED_LA* - _SET_PED_LE*

| Property | Value |
|----------|-------|
| Native Name | `_0x5D4CD22A8C82A81A` |
| Hash | `0x5D4CD22A8C82A81A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x5D4CD22A8C82A81A(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5D4CD22A8C82A81A, ped, p1)
```


---

## _0x5DA36CCCB63C0895

| Property | Value |
|----------|-------|
| Native Name | `_0x5DA36CCCB63C0895` |
| Hash | `0x5DA36CCCB63C0895` |
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
local result = _0x5DA36CCCB63C0895(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5DA36CCCB63C0895, p0, p1, p2)
```


---

## _0x5E9FAF6C513347B4

**Description:** Only used in R* SP Scripts
_GET_PED_IN*

| Property | Value |
|----------|-------|
| Native Name | `_0x5E9FAF6C513347B4` |
| Hash | `0x5E9FAF6C513347B4` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped), `eventType` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`eventType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x5E9FAF6C513347B4(ped, eventType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5E9FAF6C513347B4, ped, eventType)
```


---

## _0x5EFA8A3D8A60D662

| Property | Value |
|----------|-------|
| Native Name | `_0x5EFA8A3D8A60D662` |
| Hash | `0x5EFA8A3D8A60D662` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x5EFA8A3D8A60D662(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5EFA8A3D8A60D662, p0, p1)
```


---

## _0x5FCF25D584065BFD

| Property | Value |
|----------|-------|
| Native Name | `_0x5FCF25D584065BFD` |
| Hash | `0x5FCF25D584065BFD` |
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
_0x5FCF25D584065BFD(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5FCF25D584065BFD, p0, p1, p2, p3)
```


---

## _0x600BBDD29820370C

**Description:** Not implemented.

| Property | Value |
|----------|-------|
| Native Name | `_0x600BBDD29820370C` |
| Hash | `0x600BBDD29820370C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x600BBDD29820370C(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x600BBDD29820370C, ped)
```


---

## _0x604E1010E3162E86

| Property | Value |
|----------|-------|
| Native Name | `_0x604E1010E3162E86` |
| Hash | `0x604E1010E3162E86` |
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
_0x604E1010E3162E86(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x604E1010E3162E86, p0, p1, p2)
```


---

## _0x606D529DADA3C940

**Description:** Not implemented.

| Property | Value |
|----------|-------|
| Native Name | `_0x606D529DADA3C940` |
| Hash | `0x606D529DADA3C940` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x606D529DADA3C940(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x606D529DADA3C940, ped, p1)
```


---

## _GET_METAPED_OUTFIT_BY_INDEX

**Description:** Returns p1 value for 0x8E84119A23C16623,  get index outfit using GET_NUM_META_PED_OUTFITS

| Property | Value |
|----------|-------|
| Native Name | `_GET_METAPED_OUTFIT_BY_INDEX` |
| Hash | `0x62FDF4E678E40CC6` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `index` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetMetapedOutfitByIndex(entity, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x62FDF4E678E40CC6, entity, index)
```


---

## _0x633F83B301C87994

| Property | Value |
|----------|-------|
| Native Name | `_0x633F83B301C87994` |
| Hash | `0x633F83B301C87994` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x633F83B301C87994(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x633F83B301C87994, p0, p1)
```


---

## _0x642720D8D69328B6

**Description:** _SET_PED_M*

| Property | Value |
|----------|-------|
| Native Name | `_0x642720D8D69328B6` |
| Hash | `0x642720D8D69328B6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x642720D8D69328B6(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x642720D8D69328B6, ped, p1)
```


---

## _0x6507AC3BD7C99009

**Description:** _IS_N* - _IS_P*

| Property | Value |
|----------|-------|
| Native Name | `_0x6507AC3BD7C99009` |
| Hash | `0x6507AC3BD7C99009` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6507AC3BD7C99009(x, y, z, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6507AC3BD7C99009, x, y, z, p3)
```


---

## _0x6734F0A6A52C371C

| Property | Value |
|----------|-------|
| Native Name | `_0x6734F0A6A52C371C` |
| Hash | `0x6734F0A6A52C371C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `horseSlot` (int) |

### Parameters

- **`player`** (`Player`)
- **`horseSlot`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x6734F0A6A52C371C(player, horseSlot)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6734F0A6A52C371C, player, horseSlot)
```


---

## _0x6A190B94C2541A99

| Property | Value |
|----------|-------|
| Native Name | `_0x6A190B94C2541A99` |
| Hash | `0x6A190B94C2541A99` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6A190B94C2541A99(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A190B94C2541A99, p0)
```


---

## _0x6A489892E813951A

| Property | Value |
|----------|-------|
| Native Name | `_0x6A489892E813951A` |
| Hash | `0x6A489892E813951A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6A489892E813951A(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A489892E813951A, p0)
```


---

## _0x6B67320E0D57856A

| Property | Value |
|----------|-------|
| Native Name | `_0x6B67320E0D57856A` |
| Hash | `0x6B67320E0D57856A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any*), `p2` (int), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any*`)
- **`p2`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x6B67320E0D57856A(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6B67320E0D57856A, ped, p1, p2, p3)
```


---

## _0x6DB875AFC584FA32

**Description:** Only used in R* SP Script winter1: p1 = 5000
_SET_PED_M*

| Property | Value |
|----------|-------|
| Native Name | `_0x6DB875AFC584FA32` |
| Hash | `0x6DB875AFC584FA32` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6DB875AFC584FA32(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6DB875AFC584FA32, ped, p1)
```


---

## _0x6E8B87139854022D

**Description:** Only used in SP R* Script train_robbery3: p1 = CLIPSET@VEH_TRAIN@HANDCART@BASE_PANIC & CLIPSET@VEH_TRAIN@HANDCART@BASE_PANIC_JOHN

| Property | Value |
|----------|-------|
| Native Name | `_0x6E8B87139854022D` |
| Hash | `0x6E8B87139854022D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `clipset` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`clipset`** (`char*`)

### Usage

**Lua (Direct):**
```lua
_0x6E8B87139854022D(ped, clipset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6E8B87139854022D, ped, clipset)
```


---

## _GET_CARRIED_PELT_SKINS

| Property | Value |
|----------|-------|
| Native Name | `_GET_CARRIED_PELT_SKINS` |
| Hash | `0x6F43C351A5D51E2F` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `mount` (Ped), `outData` (Any*) |

### Parameters

- **`mount`** (`Ped`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = GetCarriedPeltSkins(mount, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6F43C351A5D51E2F, mount, outData)
```


---

## _0x6F46F8ACB44C4FC1

| Property | Value |
|----------|-------|
| Native Name | `_0x6F46F8ACB44C4FC1` |
| Hash | `0x6F46F8ACB44C4FC1` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6F46F8ACB44C4FC1(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6F46F8ACB44C4FC1, p0)
```


---

## _0x7020839C7302D8AC

**Description:** _HAS_*

| Property | Value |
|----------|-------|
| Native Name | `_0x7020839C7302D8AC` |
| Hash | `0x7020839C7302D8AC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7020839C7302D8AC(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7020839C7302D8AC, ped)
```


---

## _0x704C908E9C405136

**Description:** _CLEAR*

| Property | Value |
|----------|-------|
| Native Name | `_0x704C908E9C405136` |
| Hash | `0x704C908E9C405136` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x704C908E9C405136(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x704C908E9C405136, ped)
```


---

## _0x712B2C2B2471B493

**Description:** _SET_PED_MO*

| Property | Value |
|----------|-------|
| Native Name | `_0x712B2C2B2471B493` |
| Hash | `0x712B2C2B2471B493` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x712B2C2B2471B493(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x712B2C2B2471B493, ped, p1)
```


---

## _0x735662994E60A710

**Description:** _SET_PED_F*

| Property | Value |
|----------|-------|
| Native Name | `_0x735662994E60A710` |
| Hash | `0x735662994E60A710` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x735662994E60A710(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x735662994E60A710, ped, p1)
```


---

## _0x7406C71F4AC2FFCC

| Property | Value |
|----------|-------|
| Native Name | `_0x7406C71F4AC2FFCC` |
| Hash | `0x7406C71F4AC2FFCC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x7406C71F4AC2FFCC(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7406C71F4AC2FFCC, p0)
```


---

## _0x758F081DB204DDDE

| Property | Value |
|----------|-------|
| Native Name | `_0x758F081DB204DDDE` |
| Hash | `0x758F081DB204DDDE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x758F081DB204DDDE(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x758F081DB204DDDE, ped)
```


---

## _0x75A082563B4452E5

| Property | Value |
|----------|-------|
| Native Name | `_0x75A082563B4452E5` |
| Hash | `0x75A082563B4452E5` |
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
_0x75A082563B4452E5(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75A082563B4452E5, p0, p1, p2, p3)
```


---

## _0x75D3333409CD33CE

| Property | Value |
|----------|-------|
| Native Name | `_0x75D3333409CD33CE` |
| Hash | `0x75D3333409CD33CE` |
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
_0x75D3333409CD33CE(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75D3333409CD33CE, p0, p1, p2)
```


---

## _0x763FA8A9D76EE3A7

**Description:** Used in Script Function NB_EVENT_OVERRIDE__HANDLE__EVENT_DAMAGE_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_0x763FA8A9D76EE3A7` |
| Hash | `0x763FA8A9D76EE3A7` |
| Return Type | `float` |
| Build | `1311` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x763FA8A9D76EE3A7(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x763FA8A9D76EE3A7, ped)
```


---

## _0x77243ED4F7CAAA55

**Description:** _IS_I* - _IS_L*

| Property | Value |
|----------|-------|
| Native Name | `_0x77243ED4F7CAAA55` |
| Hash | `0x77243ED4F7CAAA55` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x77243ED4F7CAAA55(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x77243ED4F7CAAA55, ped)
```


---

## _0x7ABBD9E449E0DB00

| Property | Value |
|----------|-------|
| Native Name | `_0x7ABBD9E449E0DB00` |
| Hash | `0x7ABBD9E449E0DB00` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x7ABBD9E449E0DB00(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7ABBD9E449E0DB00, ped, p1)
```


---

## _0x7B5C293238EE4F20

| Property | Value |
|----------|-------|
| Native Name | `_0x7B5C293238EE4F20` |
| Hash | `0x7B5C293238EE4F20` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7B5C293238EE4F20(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7B5C293238EE4F20, p0)
```


---

## _0x7BB810E8B343AC7B

| Property | Value |
|----------|-------|
| Native Name | `_0x7BB810E8B343AC7B` |
| Hash | `0x7BB810E8B343AC7B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7BB810E8B343AC7B(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7BB810E8B343AC7B, p0)
```


---

## _0x7C08E7CB8D951B70

**Description:** Only used in SP
_SET_REMOVE_PED*

| Property | Value |
|----------|-------|
| Native Name | `_0x7C08E7CB8D951B70` |
| Hash | `0x7C08E7CB8D951B70` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x7C08E7CB8D951B70(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C08E7CB8D951B70, ped, p1)
```


---

## _0x7C10221CE718AA72

**Description:** _CLEAR_PED_M*

| Property | Value |
|----------|-------|
| Native Name | `_0x7C10221CE718AA72` |
| Hash | `0x7C10221CE718AA72` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x7C10221CE718AA72(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C10221CE718AA72, ped, p1)
```


---

## _0x7C8AA850617651D9

**Description:** Returns wether `0x1E017404784AA6A3` was applied on the ped.
 some hashs MAR2_RIDE1, MAR2_RIDE1, RBCH1_RIDE1, SAD5_RIDE1

| Property | Value |
|----------|-------|
| Native Name | `_0x7C8AA850617651D9` |
| Hash | `0x7C8AA850617651D9` |
| Return Type | `Any` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7C8AA850617651D9(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7C8AA850617651D9, ped, p1)
```


---

## _0x7E5185B979706210

**Description:** _SET_FORMATION_P*

| Property | Value |
|----------|-------|
| Native Name | `_0x7E5185B979706210` |
| Hash | `0x7E5185B979706210` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `p1` (int) |

### Parameters

- **`groupId`** (`int`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x7E5185B979706210(groupId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7E5185B979706210, groupId, p1)
```


---

## _0x7E8F9949B7AABBF0

| Property | Value |
|----------|-------|
| Native Name | `_0x7E8F9949B7AABBF0` |
| Hash | `0x7E8F9949B7AABBF0` |
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
_0x7E8F9949B7AABBF0(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7E8F9949B7AABBF0, p0, p1, p2)
```


---

## _0x7EDB3C766B0D073F

**Description:** Only used in R* Script net_moonshine_property
_A* - _B*

| Property | Value |
|----------|-------|
| Native Name | `_0x7EDB3C766B0D073F` |
| Hash | `0x7EDB3C766B0D073F` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x7EDB3C766B0D073F(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7EDB3C766B0D073F, ped)
```


---

## _0x7EE3A8660F38797E

**Description:** _IS_PED_H* - _IS_PED_I*

| Property | Value |
|----------|-------|
| Native Name | `_0x7EE3A8660F38797E` |
| Hash | `0x7EE3A8660F38797E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7EE3A8660F38797E(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7EE3A8660F38797E, ped)
```


---

*End of PED natives part 10*
