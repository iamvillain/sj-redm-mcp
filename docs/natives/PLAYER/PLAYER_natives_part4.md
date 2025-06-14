# PLAYER Natives - Part 4 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PLAYER  
**Natives in this file:** 50  
**Total natives in namespace:** 395  
**Generated from:** RDR3natives JSON data

---

## _EAGLE_EYE_GET_TRACKED_PED_ID

**Description:** Retrieves the ID of the ped that the specified player is currently tracking while in Eagle Eye mode.

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_GET_TRACKED_PED_ID` |
| Hash | `0x3813E11A378958A5` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = EagleEyeGetTrackedPedId(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3813E11A378958A5, player)
```


---

## _ADD_AMBIENT_PLAYER_INTERACTIVE_FOCUS_PRESET

**Description:** Associates a specific interactive focus mode preset between a player and a ped, with a specified location and target entity.
To access all available presets, refer to the file located at: `/update_1.rpf/common/data/interactive_focus_mode_presets.meta`

| Property | Value |
|----------|-------|
| Native Name | `_ADD_AMBIENT_PLAYER_INTERACTIVE_FOCUS_PRESET` |
| Hash | `0x3946FC742AC305CD` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped), `preset` (char*), `x` (float), `y` (float), `z` (float), `targetEntity` (Entity), `name` (char*) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)
- **`preset`** (`char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`targetEntity`** (`Entity`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
AddAmbientPlayerInteractiveFocusPreset(player, ped, preset, x, y, z, targetEntity, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3946FC742AC305CD, player, ped, preset, x, y, z, targetEntity, name)
```


---

## _0x39D8D7082BC34B72

| Property | Value |
|----------|-------|
| Native Name | `_0x39D8D7082BC34B72` |
| Hash | `0x39D8D7082BC34B72` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x39D8D7082BC34B72(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x39D8D7082BC34B72, p0)
```


---

## _0x3A8611BD7BDE84F7

| Property | Value |
|----------|-------|
| Native Name | `_0x3A8611BD7BDE84F7` |
| Hash | `0x3A8611BD7BDE84F7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3A8611BD7BDE84F7(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3A8611BD7BDE84F7, p0, p1)
```


---

## _0x3ACAC8832E77BC93

**Description:** Used in script function INIT_DEADEYE_SLOWDOWN

| Property | Value |
|----------|-------|
| Native Name | `_0x3ACAC8832E77BC93` |
| Hash | `0x3ACAC8832E77BC93` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x3ACAC8832E77BC93(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3ACAC8832E77BC93, player, p1)
```


---

## _0x3AD212429E095EFB

| Property | Value |
|----------|-------|
| Native Name | `_0x3AD212429E095EFB` |
| Hash | `0x3AD212429E095EFB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3AD212429E095EFB(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3AD212429E095EFB, p0, p1)
```


---

## _0x3B296934DB026873

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_0x3B296934DB026873` |
| Hash | `0x3B296934DB026873` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3B296934DB026873(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3B296934DB026873, p0, p1)
```


---

## _0x3BB84F812E052C90

| Property | Value |
|----------|-------|
| Native Name | `_0x3BB84F812E052C90` |
| Hash | `0x3BB84F812E052C90` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3BB84F812E052C90(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3BB84F812E052C90, p0)
```


---

## _0x3C4AE8506638C7E2

| Property | Value |
|----------|-------|
| Native Name | `_0x3C4AE8506638C7E2` |
| Hash | `0x3C4AE8506638C7E2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3C4AE8506638C7E2(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3C4AE8506638C7E2, p0, p1)
```


---

## _0x3D9DA5C9EFD20D88

| Property | Value |
|----------|-------|
| Native Name | `_0x3D9DA5C9EFD20D88` |
| Hash | `0x3D9DA5C9EFD20D88` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3D9DA5C9EFD20D88(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3D9DA5C9EFD20D88, p0, p1)
```


---

## _0x3DAABE78A23694BC

| Property | Value |
|----------|-------|
| Native Name | `_0x3DAABE78A23694BC` |
| Hash | `0x3DAABE78A23694BC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3DAABE78A23694BC(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3DAABE78A23694BC, p0, p1)
```


---

## _0x45EF176B532CA851

| Property | Value |
|----------|-------|
| Native Name | `_0x45EF176B532CA851` |
| Hash | `0x45EF176B532CA851` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x45EF176B532CA851(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x45EF176B532CA851, p0, p1)
```


---

## _0x497A18F8F88AA9D8

| Property | Value |
|----------|-------|
| Native Name | `_0x497A18F8F88AA9D8` |
| Hash | `0x497A18F8F88AA9D8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x497A18F8F88AA9D8()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x497A18F8F88AA9D8, )
```


---

## _0x4D1699543B1C023C

**Description:** _SET_SPECIAL_ABILITY_*

| Property | Value |
|----------|-------|
| Native Name | `_0x4D1699543B1C023C` |
| Hash | `0x4D1699543B1C023C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (float) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x4D1699543B1C023C(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D1699543B1C023C, player, p1)
```


---

## _0x4DBC4873707E8FD6

| Property | Value |
|----------|-------|
| Native Name | `_0x4DBC4873707E8FD6` |
| Hash | `0x4DBC4873707E8FD6` |
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
_0x4DBC4873707E8FD6(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4DBC4873707E8FD6, p0, p1, p2, p3)
```


---

## _0x4EC8BE63B8A5D4EF

| Property | Value |
|----------|-------|
| Native Name | `_0x4EC8BE63B8A5D4EF` |
| Hash | `0x4EC8BE63B8A5D4EF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (int) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x4EC8BE63B8A5D4EF(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4EC8BE63B8A5D4EF, player, p1)
```


---

## _0x4F0D2256AAE94EDA

| Property | Value |
|----------|-------|
| Native Name | `_0x4F0D2256AAE94EDA` |
| Hash | `0x4F0D2256AAE94EDA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x4F0D2256AAE94EDA(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4F0D2256AAE94EDA, p0)
```


---

## _0x51139D8C17B16FBC

| Property | Value |
|----------|-------|
| Native Name | `_0x51139D8C17B16FBC` |
| Hash | `0x51139D8C17B16FBC` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x51139D8C17B16FBC(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x51139D8C17B16FBC, p0)
```


---

## _0x57028FD99886F6F9

**Description:** _IS_PLAYER_D* - _IS_PLAYER_F*

| Property | Value |
|----------|-------|
| Native Name | `_0x57028FD99886F6F9` |
| Hash | `0x57028FD99886F6F9` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x57028FD99886F6F9()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57028FD99886F6F9, )
```


---

## _0x570A13A4CA2799BB

**Description:** Used in script function INIT_DEADEYE_SLOWDOWN

| Property | Value |
|----------|-------|
| Native Name | `_0x570A13A4CA2799BB` |
| Hash | `0x570A13A4CA2799BB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x570A13A4CA2799BB(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x570A13A4CA2799BB, player, p1)
```


---

## _0x57D9991DC1334151

| Property | Value |
|----------|-------|
| Native Name | `_0x57D9991DC1334151` |
| Hash | `0x57D9991DC1334151` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x57D9991DC1334151(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57D9991DC1334151, p0)
```


---

## _0x585CE159DB46FADB

| Property | Value |
|----------|-------|
| Native Name | `_0x585CE159DB46FADB` |
| Hash | `0x585CE159DB46FADB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x585CE159DB46FADB(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x585CE159DB46FADB, p0, p1)
```


---

## _0x5B7B97E99F84138B

| Property | Value |
|----------|-------|
| Native Name | `_0x5B7B97E99F84138B` |
| Hash | `0x5B7B97E99F84138B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x5B7B97E99F84138B(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5B7B97E99F84138B, p0)
```


---

## _0x5C2E5E3CAEEB1F58

| Property | Value |
|----------|-------|
| Native Name | `_0x5C2E5E3CAEEB1F58` |
| Hash | `0x5C2E5E3CAEEB1F58` |
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
_0x5C2E5E3CAEEB1F58(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5C2E5E3CAEEB1F58, p0, p1, p2)
```


---

## _0x621D1B289CAF5978

**Description:** _IS_PLAYER_S* - _IS_PLAYER_T*

| Property | Value |
|----------|-------|
| Native Name | `_0x621D1B289CAF5978` |
| Hash | `0x621D1B289CAF5978` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = _0x621D1B289CAF5978(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x621D1B289CAF5978, player)
```


---

## _0x628E742FE1F79C4A

| Property | Value |
|----------|-------|
| Native Name | `_0x628E742FE1F79C4A` |
| Hash | `0x628E742FE1F79C4A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x628E742FE1F79C4A(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x628E742FE1F79C4A, p0, p1)
```


---

## _0x65887EAC535A0B0C

| Property | Value |
|----------|-------|
| Native Name | `_0x65887EAC535A0B0C` |
| Hash | `0x65887EAC535A0B0C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x65887EAC535A0B0C(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x65887EAC535A0B0C, p0)
```


---

## _0x67659A8F248E0141

| Property | Value |
|----------|-------|
| Native Name | `_0x67659A8F248E0141` |
| Hash | `0x67659A8F248E0141` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x67659A8F248E0141(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x67659A8F248E0141, p0, p1)
```


---

## _0x6852288340B43239

| Property | Value |
|----------|-------|
| Native Name | `_0x6852288340B43239` |
| Hash | `0x6852288340B43239` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6852288340B43239(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6852288340B43239, p0, p1)
```


---

## _0x694FFA4308060CD1

| Property | Value |
|----------|-------|
| Native Name | `_0x694FFA4308060CD1` |
| Hash | `0x694FFA4308060CD1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x694FFA4308060CD1(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x694FFA4308060CD1, p0, p1)
```


---

## _0x6C54E69516CC56BD

| Property | Value |
|----------|-------|
| Native Name | `_0x6C54E69516CC56BD` |
| Hash | `0x6C54E69516CC56BD` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6C54E69516CC56BD(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6C54E69516CC56BD, p0)
```


---

## _EAGLE_EYE_ADD_PARTICLE_EFFECT_TO_ENTITY

**Description:** Add a yellow particle to the entity.
entity: entity to apply yellow particle
entity2: same entity as entit
p2: always 
p3: always 0

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_ADD_PARTICLE_EFFECT_TO_ENTITY` |
| Hash | `0x6ECFC621A168424C` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity1` (Entity), `entity2` (Entity), `p2` (int), `p3` (int) |

### Parameters

- **`entity1`** (`Entity`)
- **`entity2`** (`Entity`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
EagleEyeAddParticleEffectToEntity(entity1, entity2, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6ECFC621A168424C, entity1, entity2, p2, p3)
```


---

## _0x6EDB5D08CB03E763

| Property | Value |
|----------|-------|
| Native Name | `_0x6EDB5D08CB03E763` |
| Hash | `0x6EDB5D08CB03E763` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6EDB5D08CB03E763(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6EDB5D08CB03E763, p0, p1)
```


---

## _HAS_PLAYER_DAMAGED_ANY_PED_RECENTLY

**Description:** this native checks if the player has damaged or killed any ped human/animal recently within the duration passed, either by shooting or even using melee
duration is in miliseconds

| Property | Value |
|----------|-------|
| Native Name | `_HAS_PLAYER_DAMAGED_ANY_PED_RECENTLY` |
| Hash | `0x72AD59F7B7FB6E24` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `duration` (int) |

### Parameters

- **`player`** (`Player`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasPlayerDamagedAnyPedRecently(player, duration)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x72AD59F7B7FB6E24, player, duration)
```


---

## _0x73EB2EF2E92D23BF

| Property | Value |
|----------|-------|
| Native Name | `_0x73EB2EF2E92D23BF` |
| Hash | `0x73EB2EF2E92D23BF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x73EB2EF2E92D23BF()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x73EB2EF2E92D23BF, )
```


---

## _0x747257807B8721CE

| Property | Value |
|----------|-------|
| Native Name | `_0x747257807B8721CE` |
| Hash | `0x747257807B8721CE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x747257807B8721CE(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x747257807B8721CE, p0, p1)
```


---

## _0x76F7E1BCD623A429

| Property | Value |
|----------|-------|
| Native Name | `_0x76F7E1BCD623A429` |
| Hash | `0x76F7E1BCD623A429` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x76F7E1BCD623A429(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x76F7E1BCD623A429, p0)
```


---

## _0x77B0B6D17A3AC9AA

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_0x77B0B6D17A3AC9AA` |
| Hash | `0x77B0B6D17A3AC9AA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x77B0B6D17A3AC9AA(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x77B0B6D17A3AC9AA, p0, p1)
```


---

## _0x77E83C315A3B31CA

| Property | Value |
|----------|-------|
| Native Name | `_0x77E83C315A3B31CA` |
| Hash | `0x77E83C315A3B31CA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x77E83C315A3B31CA(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x77E83C315A3B31CA, p0)
```


---

## _0x7AE93C45EC14A166

**Description:** Only used in script function PROCESS_PED_INTERRUPT_DIALOGUE
_GET_PLAYER_*

| Property | Value |
|----------|-------|
| Native Name | `_0x7AE93C45EC14A166` |
| Hash | `0x7AE93C45EC14A166` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped*) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7AE93C45EC14A166(player, ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7AE93C45EC14A166, player, ped)
```


---

## _0x818241B3EDA84191

**Description:** _SET_PLAYER_DAMAGE_* - _SET_PLAYER_DEFENSE_*

| Property | Value |
|----------|-------|
| Native Name | `_0x818241B3EDA84191` |
| Hash | `0x818241B3EDA84191` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x818241B3EDA84191(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x818241B3EDA84191, player, p1)
```


---

## _0x83C989D5B5B5B466

| Property | Value |
|----------|-------|
| Native Name | `_0x83C989D5B5B5B466` |
| Hash | `0x83C989D5B5B5B466` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x83C989D5B5B5B466(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x83C989D5B5B5B466, p0, p1)
```


---

## _0x84481018E668E1B8

| Property | Value |
|----------|-------|
| Native Name | `_0x84481018E668E1B8` |
| Hash | `0x84481018E668E1B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped), `p2` (Any) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x84481018E668E1B8(player, ped, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x84481018E668E1B8, player, ped, p2)
```


---

## _0x8591EE69CC3ED257

**Description:** SET_PLAYER_S/T*

| Property | Value |
|----------|-------|
| Native Name | `_0x8591EE69CC3ED257` |
| Hash | `0x8591EE69CC3ED257` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x8591EE69CC3ED257(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8591EE69CC3ED257, player, toggle)
```


---

## _0x8702D9150D9FBB3D

| Property | Value |
|----------|-------|
| Native Name | `_0x8702D9150D9FBB3D` |
| Hash | `0x8702D9150D9FBB3D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x8702D9150D9FBB3D(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8702D9150D9FBB3D, p0, p1)
```


---

## _0x8F44EBB3BA8F6D44

| Property | Value |
|----------|-------|
| Native Name | `_0x8F44EBB3BA8F6D44` |
| Hash | `0x8F44EBB3BA8F6D44` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x8F44EBB3BA8F6D44(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8F44EBB3BA8F6D44, p0, p1)
```


---

## _0x9044835BE9D9DBFE

| Property | Value |
|----------|-------|
| Native Name | `_0x9044835BE9D9DBFE` |
| Hash | `0x9044835BE9D9DBFE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9044835BE9D9DBFE(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9044835BE9D9DBFE, p0, p1)
```


---

## _0x9073EC5456651A90

| Property | Value |
|----------|-------|
| Native Name | `_0x9073EC5456651A90` |
| Hash | `0x9073EC5456651A90` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9073EC5456651A90(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9073EC5456651A90, p0, p1)
```


---

## _0x908D4B72854C8F62

| Property | Value |
|----------|-------|
| Native Name | `_0x908D4B72854C8F62` |
| Hash | `0x908D4B72854C8F62` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x908D4B72854C8F62(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x908D4B72854C8F62, p0)
```


---

## _0x927861B2C08DBEA5

**Description:** _GET_A* - _GET_C*

| Property | Value |
|----------|-------|
| Native Name | `_0x927861B2C08DBEA5` |
| Hash | `0x927861B2C08DBEA5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = _0x927861B2C08DBEA5(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x927861B2C08DBEA5, player)
```


---

*End of PLAYER natives part 4*
