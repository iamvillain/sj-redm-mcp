# PED Natives - Part 9 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _0x2DC0E8DCBD3546E9

**Description:** _IS_PED_D*

| Property | Value |
|----------|-------|
| Native Name | `_0x2DC0E8DCBD3546E9` |
| Hash | `0x2DC0E8DCBD3546E9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x2DC0E8DCBD3546E9(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2DC0E8DCBD3546E9, ped)
```


---

## _0x2DD4E0E26DFAD97D

**Description:** _IS_PED_M* - _IS_PED_O*

| Property | Value |
|----------|-------|
| Native Name | `_0x2DD4E0E26DFAD97D` |
| Hash | `0x2DD4E0E26DFAD97D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped1` (Ped), `ped2` (Ped), `p2` (float) |

### Parameters

- **`ped1`** (`Ped`)
- **`ped2`** (`Ped`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = _0x2DD4E0E26DFAD97D(ped1, ped2, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2DD4E0E26DFAD97D, ped1, ped2, p2)
```


---

## _0x2E5B5D1F1453E08E

| Property | Value |
|----------|-------|
| Native Name | `_0x2E5B5D1F1453E08E` |
| Hash | `0x2E5B5D1F1453E08E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x2E5B5D1F1453E08E(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E5B5D1F1453E08E, ped, p1)
```


---

## _0x2FA568BFA725F8D6

| Property | Value |
|----------|-------|
| Native Name | `_0x2FA568BFA725F8D6` |
| Hash | `0x2FA568BFA725F8D6` |
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
_0x2FA568BFA725F8D6(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2FA568BFA725F8D6, p0, p1, p2, p3)
```


---

## _0x31B2E7F2E3C58B89

**Description:** _GET_SHOP_ITEM_NUM_*? returns a number of ? p1 seems to be always joaat("base") 

| Property | Value |
|----------|-------|
| Native Name | `_0x31B2E7F2E3C58B89` |
| Hash | `0x31B2E7F2E3C58B89` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `componentHash` (Hash), `p1` (Hash), `metapedType` (int), `isMP` (BOOL) |

### Parameters

- **`componentHash`** (`Hash`)
- **`p1`** (`Hash`)
- **`metapedType`** (`int`)
- **`isMP`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x31B2E7F2E3C58B89(componentHash, p1, metapedType, isMP)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x31B2E7F2E3C58B89, componentHash, p1, metapedType, isMP)
```


---

## _0x32417CB860A3BDC4

| Property | Value |
|----------|-------|
| Native Name | `_0x32417CB860A3BDC4` |
| Hash | `0x32417CB860A3BDC4` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x32417CB860A3BDC4(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x32417CB860A3BDC4, p0, p1)
```


---

## _0x326F7951EF0D7F75

**Description:** Only used in R* SP Script short_update
_GET_TARGET_* - _GET_TRACKED*

| Property | Value |
|----------|-------|
| Native Name | `_0x326F7951EF0D7F75` |
| Hash | `0x326F7951EF0D7F75` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `eventType` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`eventType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x326F7951EF0D7F75(ped, eventType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x326F7951EF0D7F75, ped, eventType)
```


---

## _0x329772C47DBB2FBC

**Description:** _SET_PED_P* - _SET_PED_R*

| Property | Value |
|----------|-------|
| Native Name | `_0x329772C47DBB2FBC` |
| Hash | `0x329772C47DBB2FBC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x329772C47DBB2FBC(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x329772C47DBB2FBC, ped)
```


---

## _0x32CCAD8A981B53D3

**Description:** _STOP_(?)*

| Property | Value |
|----------|-------|
| Native Name | `_0x32CCAD8A981B53D3` |
| Hash | `0x32CCAD8A981B53D3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x32CCAD8A981B53D3(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x32CCAD8A981B53D3, ped)
```


---

## _0x32CEDA9A0AB4CEF7

| Property | Value |
|----------|-------|
| Native Name | `_0x32CEDA9A0AB4CEF7` |
| Hash | `0x32CEDA9A0AB4CEF7` |
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
_0x32CEDA9A0AB4CEF7(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x32CEDA9A0AB4CEF7, ped, p1, p2)
```


---

## _0x34B5CEAC180A5D6E

| Property | Value |
|----------|-------|
| Native Name | `_0x34B5CEAC180A5D6E` |
| Hash | `0x34B5CEAC180A5D6E` |
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
_0x34B5CEAC180A5D6E(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x34B5CEAC180A5D6E, ped, p1, p2)
```


---

## _0x34C11114887150FD

| Property | Value |
|----------|-------|
| Native Name | `_0x34C11114887150FD` |
| Hash | `0x34C11114887150FD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x34C11114887150FD(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x34C11114887150FD, p0, p1)
```


---

## _0x34EDDD59364AD74A

| Property | Value |
|----------|-------|
| Native Name | `_0x34EDDD59364AD74A` |
| Hash | `0x34EDDD59364AD74A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
_0x34EDDD59364AD74A(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x34EDDD59364AD74A, ped, p1)
```


---

## _0x354CA4DDDEEC397A

| Property | Value |
|----------|-------|
| Native Name | `_0x354CA4DDDEEC397A` |
| Hash | `0x354CA4DDDEEC397A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x354CA4DDDEEC397A(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x354CA4DDDEEC397A, ped)
```


---

## _RESET_PED_STAMINA

**Description:** Seems to set the peds stamina to 30%

| Property | Value |
|----------|-------|
| Native Name | `_RESET_PED_STAMINA` |
| Hash | `0x36513AFFC703C60D` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ResetPedStamina(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x36513AFFC703C60D, ped)
```


---

## _0x370A973252741AC4

**Description:** _RESET_PED_*

| Property | Value |
|----------|-------|
| Native Name | `_0x370A973252741AC4` |
| Hash | `0x370A973252741AC4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x370A973252741AC4(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x370A973252741AC4, ped, p1)
```


---

## _0x3A5697B80FED5EBE

**Description:** _SET_PED_MO*

| Property | Value |
|----------|-------|
| Native Name | `_0x3A5697B80FED5EBE` |
| Hash | `0x3A5697B80FED5EBE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float), `p3` (float), `p4` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x3A5697B80FED5EBE(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3A5697B80FED5EBE, ped, p1, p2, p3, p4)
```


---

## _0x3ACCE14DFA6BA8C2

**Description:** Used in R* Script net_fetch (NET_FETCH_UPDATE_RECIPIENT_PROP_ILO_IN_COMBAT) and various SP Scripts
Params: p1 = 4/5/6, p5 = 40.f/100.f, coords = Player ped
Perhaps returns some distance (Clearing that the local player is able to use ILO while in combat because they are near the recipient but also near hated peds)
_GET_NUM_M* - _GET_PEDS_J*

| Property | Value |
|----------|-------|
| Native Name | `_0x3ACCE14DFA6BA8C2` |
| Hash | `0x3ACCE14DFA6BA8C2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `x` (float), `y` (float), `z` (float), `p5` (float), `itemset` (ItemSet) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p5`** (`float`)
- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
local result = _0x3ACCE14DFA6BA8C2(ped, p1, x, y, z, p5, itemset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3ACCE14DFA6BA8C2, ped, p1, x, y, z, p5, itemset)
```


---

## _0x3AEC4A410ECAF30D

**Description:** _IS_PED_R*

| Property | Value |
|----------|-------|
| Native Name | `_0x3AEC4A410ECAF30D` |
| Hash | `0x3AEC4A410ECAF30D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x3AEC4A410ECAF30D(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3AEC4A410ECAF30D, ped)
```


---

## _0x3C529A827998F9B3

**Description:** _SET_PED_TA* - _SET_PED_TO_*

| Property | Value |
|----------|-------|
| Native Name | `_0x3C529A827998F9B3` |
| Hash | `0x3C529A827998F9B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x3C529A827998F9B3(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3C529A827998F9B3, ped, p1, p2)
```


---

## _0x3D9F958834AB9C30

| Property | Value |
|----------|-------|
| Native Name | `_0x3D9F958834AB9C30` |
| Hash | `0x3D9F958834AB9C30` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x3D9F958834AB9C30(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3D9F958834AB9C30, ped)
```


---

## _0x3EFED081B4834BA1

| Property | Value |
|----------|-------|
| Native Name | `_0x3EFED081B4834BA1` |
| Hash | `0x3EFED081B4834BA1` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3EFED081B4834BA1(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3EFED081B4834BA1, p0)
```


---

## _0x3FCBB5FCFD968698

**Description:** Used for script function PROCESS_PLAYER_HAT_EVENT
Returns requestId to be used with 0x13E7320C762F0477

| Property | Value |
|----------|-------|
| Native Name | `_0x3FCBB5FCFD968698` |
| Hash | `0x3FCBB5FCFD968698` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `drawable` (Hash), `albedo` (Hash), `normal` (Hash), `material` (Hash), `p4` (Any) |

### Parameters

- **`drawable`** (`Hash`)
- **`albedo`** (`Hash`)
- **`normal`** (`Hash`)
- **`material`** (`Hash`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x3FCBB5FCFD968698(drawable, albedo, normal, material, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3FCBB5FCFD968698, drawable, albedo, normal, material, p4)
```


---

## _0x3FDBB99EFD8CE4AF

| Property | Value |
|----------|-------|
| Native Name | `_0x3FDBB99EFD8CE4AF` |
| Hash | `0x3FDBB99EFD8CE4AF` |
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
_0x3FDBB99EFD8CE4AF(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3FDBB99EFD8CE4AF, p0, p1, p2)
```


---

## _0x3FDCC1F8C17E303E

**Description:** Changes health bar around heart core icon
INITIALISE_NEW_ROLE - Applying Super Jump buffs: p1 = 10, p2 = 0.0f
INITIALISE_NEW_ROLE - Clearing up Super Jump buffs: p1 = 10, p2 = 1.0f
_SET_D*

| Property | Value |
|----------|-------|
| Native Name | `_0x3FDCC1F8C17E303E` |
| Hash | `0x3FDCC1F8C17E303E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x3FDCC1F8C17E303E(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3FDCC1F8C17E303E, ped, p1, p2)
```


---

## _0x405180B14DA5A935

**Description:** _SET_PED_A*

| Property | Value |
|----------|-------|
| Native Name | `_0x405180B14DA5A935` |
| Hash | `0x405180B14DA5A935` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x405180B14DA5A935(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x405180B14DA5A935, ped, p1)
```


---

## _0x40C3524D4ED83554

**Description:** _SET_SCENARIO_PED_* - _SET_SPAWNER_*

| Property | Value |
|----------|-------|
| Native Name | `_0x40C3524D4ED83554` |
| Hash | `0x40C3524D4ED83554` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `p1` (BOOL) |

### Parameters

- **`groupId`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x40C3524D4ED83554(groupId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x40C3524D4ED83554, groupId, p1)
```


---

## _0x40C9155AF8BC13F3

**Description:** _IS_PED_RE*

| Property | Value |
|----------|-------|
| Native Name | `_0x40C9155AF8BC13F3` |
| Hash | `0x40C9155AF8BC13F3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x40C9155AF8BC13F3(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x40C9155AF8BC13F3, ped)
```


---

## _0x413697EC260AABBF

| Property | Value |
|----------|-------|
| Native Name | `_0x413697EC260AABBF` |
| Hash | `0x413697EC260AABBF` |
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
_0x413697EC260AABBF(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x413697EC260AABBF, p0, p1, p2)
```


---

## _0x41C23A8E6B344867

**Description:** _SET_PED_IN*

| Property | Value |
|----------|-------|
| Native Name | `_0x41C23A8E6B344867` |
| Hash | `0x41C23A8E6B344867` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0x41C23A8E6B344867(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x41C23A8E6B344867, ped, p1)
```


---

## _0x45FEA6D5539BD474

**Description:** _SET_PED_IN*

| Property | Value |
|----------|-------|
| Native Name | `_0x45FEA6D5539BD474` |
| Hash | `0x45FEA6D5539BD474` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0x45FEA6D5539BD474(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x45FEA6D5539BD474, ped, p1)
```


---

## _0x4642182A298187D0

| Property | Value |
|----------|-------|
| Native Name | `_0x4642182A298187D0` |
| Hash | `0x4642182A298187D0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (Any*), `p3` (int), `p4` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`Any*`)
- **`p3`** (`int`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x4642182A298187D0(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4642182A298187D0, ped, p1, p2, p3, p4)
```


---

## _0x46BF2A810679D6E6

**Description:** Returns vehicle (desired) speed
_COMPUTE_(VEHICLE_SPEED_USING_BLEND_RATIO?)*

| Property | Value |
|----------|-------|
| Native Name | `_0x46BF2A810679D6E6` |
| Hash | `0x46BF2A810679D6E6` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `maxMoveBlendRatio` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`maxMoveBlendRatio`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = _0x46BF2A810679D6E6(ped, maxMoveBlendRatio)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x46BF2A810679D6E6, ped, maxMoveBlendRatio)
```


---

## _0x49DADFC4CD808B0A

| Property | Value |
|----------|-------|
| Native Name | `_0x49DADFC4CD808B0A` |
| Hash | `0x49DADFC4CD808B0A` |
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
_0x49DADFC4CD808B0A(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x49DADFC4CD808B0A, p0, p1, p2)
```


---

## _0x4B19F171450E0D4F

| Property | Value |
|----------|-------|
| Native Name | `_0x4B19F171450E0D4F` |
| Hash | `0x4B19F171450E0D4F` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x4B19F171450E0D4F(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4B19F171450E0D4F, ped)
```


---

## _0x4E68C7EF706DF35D

| Property | Value |
|----------|-------|
| Native Name | `_0x4E68C7EF706DF35D` |
| Hash | `0x4E68C7EF706DF35D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `p4` (float), `relationshipGroup` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p4`** (`float`)
- **`relationshipGroup`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x4E68C7EF706DF35D(ped, x, y, z, p4, relationshipGroup)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4E68C7EF706DF35D, ped, x, y, z, p4, relationshipGroup)
```


---

## _0x4EC4EA2F72B36358

**Description:** _SET_PED_A*

| Property | Value |
|----------|-------|
| Native Name | `_0x4EC4EA2F72B36358` |
| Hash | `0x4EC4EA2F72B36358` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x4EC4EA2F72B36358(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4EC4EA2F72B36358, ped, p1)
```


---

## _0x4F27603E44A8E4C0

| Property | Value |
|----------|-------|
| Native Name | `_0x4F27603E44A8E4C0` |
| Hash | `0x4F27603E44A8E4C0` |
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
_0x4F27603E44A8E4C0(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4F27603E44A8E4C0, ped, p1, p2)
```


---

## _0x4F63433CE3C08230

**Description:** Only used in R* Script shop_harriet
_SET_PED_F*

| Property | Value |
|----------|-------|
| Native Name | `_0x4F63433CE3C08230` |
| Hash | `0x4F63433CE3C08230` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x4F63433CE3C08230(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4F63433CE3C08230, ped, p1)
```


---

## _0x5203038FF8BAE577

| Property | Value |
|----------|-------|
| Native Name | `_0x5203038FF8BAE577` |
| Hash | `0x5203038FF8BAE577` |
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
local result = _0x5203038FF8BAE577(ped, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5203038FF8BAE577, ped, p1, p2)
```


---

## _0x52250B92EA70BE3D

| Property | Value |
|----------|-------|
| Native Name | `_0x52250B92EA70BE3D` |
| Hash | `0x52250B92EA70BE3D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x52250B92EA70BE3D(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x52250B92EA70BE3D, p0)
```


---

## _0x52A24D8A1DA89658

| Property | Value |
|----------|-------|
| Native Name | `_0x52A24D8A1DA89658` |
| Hash | `0x52A24D8A1DA89658` |
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
_0x52A24D8A1DA89658(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x52A24D8A1DA89658, ped, p1, p2)
```


---

## _0x53BA7D96B9A421D9

| Property | Value |
|----------|-------|
| Native Name | `_0x53BA7D96B9A421D9` |
| Hash | `0x53BA7D96B9A421D9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x53BA7D96B9A421D9(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x53BA7D96B9A421D9, p0, p1)
```


---

## _0x54D3CD482742C482

| Property | Value |
|----------|-------|
| Native Name | `_0x54D3CD482742C482` |
| Hash | `0x54D3CD482742C482` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `animal` (Ped), `p2` (float) |

### Parameters

- **`animal`** (`Ped`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x54D3CD482742C482(animal, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x54D3CD482742C482, animal, p2)
```


---

## _0x550CB89DD7F4FA3D

**Description:** _HAS_PED_*

| Property | Value |
|----------|-------|
| Native Name | `_0x550CB89DD7F4FA3D` |
| Hash | `0x550CB89DD7F4FA3D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped1` (Ped), `ped2` (Ped) |

### Parameters

- **`ped1`** (`Ped`)
- **`ped2`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x550CB89DD7F4FA3D(ped1, ped2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x550CB89DD7F4FA3D, ped1, ped2)
```


---

## _0x55546004A244302A

| Property | Value |
|----------|-------|
| Native Name | `_0x55546004A244302A` |
| Hash | `0x55546004A244302A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x55546004A244302A(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x55546004A244302A, p0, p1)
```


---

## _0x56076667E7C2DCD6

| Property | Value |
|----------|-------|
| Native Name | `_0x56076667E7C2DCD6` |
| Hash | `0x56076667E7C2DCD6` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x56076667E7C2DCD6(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x56076667E7C2DCD6, p0, p1)
```


---

## _0x56E4BAD93D33453C

| Property | Value |
|----------|-------|
| Native Name | `_0x56E4BAD93D33453C` |
| Hash | `0x56E4BAD93D33453C` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x56E4BAD93D33453C(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x56E4BAD93D33453C, p0, p1)
```


---

## _0x577C60BA06D0EA64

**Description:** _IS_PED_C* - _IS_PED_D*

| Property | Value |
|----------|-------|
| Native Name | `_0x577C60BA06D0EA64` |
| Hash | `0x577C60BA06D0EA64` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x577C60BA06D0EA64(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x577C60BA06D0EA64, ped)
```


---

## _0x57F35552E771BE9D

**Description:** _SET_PED_M*

| Property | Value |
|----------|-------|
| Native Name | `_0x57F35552E771BE9D` |
| Hash | `0x57F35552E771BE9D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x57F35552E771BE9D(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x57F35552E771BE9D, ped, p1)
```


---

*End of PED natives part 9*
