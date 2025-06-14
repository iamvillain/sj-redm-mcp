# PED Natives - Part 12 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _HAS_PED_BEEN_SHOT_BY_PLAYER_RECENTLY

**Description:** this native checks if player has shot a specific ped for the duration passed p2 is in milliseconds 

| Property | Value |
|----------|-------|
| Native Name | `_HAS_PED_BEEN_SHOT_BY_PLAYER_RECENTLY` |
| Hash | `0x9C81338B2E62CE0A` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped), `duration` (int) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasPedBeenShotByPlayerRecently(player, ped, duration)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9C81338B2E62CE0A, player, ped, duration)
```


---

## _0x9D8DFE2DE9CB4DFC

**Description:** _RESET_PED_*

| Property | Value |
|----------|-------|
| Native Name | `_0x9D8DFE2DE9CB4DFC` |
| Hash | `0x9D8DFE2DE9CB4DFC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x9D8DFE2DE9CB4DFC(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9D8DFE2DE9CB4DFC, ped)
```


---

## _0x9E3842E5DAD69F80

**Description:** Only used in SP R* Script loanshark_hunter

| Property | Value |
|----------|-------|
| Native Name | `_0x9E3842E5DAD69F80` |
| Hash | `0x9E3842E5DAD69F80` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
_0x9E3842E5DAD69F80(volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9E3842E5DAD69F80, volume)
```


---

## _0x9E66708B2B41F14A

| Property | Value |
|----------|-------|
| Native Name | `_0x9E66708B2B41F14A` |
| Hash | `0x9E66708B2B41F14A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9E66708B2B41F14A(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9E66708B2B41F14A, p0, p1)
```


---

## _0x9F0F28B42C4EE80A

| Property | Value |
|----------|-------|
| Native Name | `_0x9F0F28B42C4EE80A` |
| Hash | `0x9F0F28B42C4EE80A` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `animal` (Ped), `p2` (float) |

### Parameters

- **`animal`** (`Ped`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x9F0F28B42C4EE80A(animal, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9F0F28B42C4EE80A, animal, p2)
```


---

## _0x9F933E0985E12C51

| Property | Value |
|----------|-------|
| Native Name | `_0x9F933E0985E12C51` |
| Hash | `0x9F933E0985E12C51` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float), `p3` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x9F933E0985E12C51(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9F933E0985E12C51, ped, p1, p2, p3)
```


---

## _0xA064BBABB064446F

| Property | Value |
|----------|-------|
| Native Name | `_0xA064BBABB064446F` |
| Hash | `0xA064BBABB064446F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xA064BBABB064446F(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA064BBABB064446F, p0)
```


---

## _0xA180FBD502A03125

| Property | Value |
|----------|-------|
| Native Name | `_0xA180FBD502A03125` |
| Hash | `0xA180FBD502A03125` |
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
local result = _0xA180FBD502A03125(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA180FBD502A03125, p0, p1, p2)
```


---

## _0xA1FBAC56D38563E2

| Property | Value |
|----------|-------|
| Native Name | `_0xA1FBAC56D38563E2` |
| Hash | `0xA1FBAC56D38563E2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA1FBAC56D38563E2(volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA1FBAC56D38563E2, volume)
```


---

## _0xA2116C1E4ED85C24

**Description:** _SET_PED_*

| Property | Value |
|----------|-------|
| Native Name | `_0xA2116C1E4ED85C24` |
| Hash | `0xA2116C1E4ED85C24` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `inverted` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`inverted`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xA2116C1E4ED85C24(ped, inverted)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA2116C1E4ED85C24, ped, inverted)
```


---

## _0xA218D2BBCAA7388C

| Property | Value |
|----------|-------|
| Native Name | `_0xA218D2BBCAA7388C` |
| Hash | `0xA218D2BBCAA7388C` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA218D2BBCAA7388C(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA218D2BBCAA7388C, p0, p1)
```


---

## _0xA274F51EF7E34B95

| Property | Value |
|----------|-------|
| Native Name | `_0xA274F51EF7E34B95` |
| Hash | `0xA274F51EF7E34B95` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA274F51EF7E34B95(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA274F51EF7E34B95, p0, p1)
```


---

## _0xA2B8E47442C76CEC

| Property | Value |
|----------|-------|
| Native Name | `_0xA2B8E47442C76CEC` |
| Hash | `0xA2B8E47442C76CEC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xA2B8E47442C76CEC(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA2B8E47442C76CEC, p0, p1)
```


---

## _0xA2F8B3B5FEDFC100

| Property | Value |
|----------|-------|
| Native Name | `_0xA2F8B3B5FEDFC100` |
| Hash | `0xA2F8B3B5FEDFC100` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xA2F8B3B5FEDFC100(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA2F8B3B5FEDFC100, p0, p1)
```


---

## _0xA31D350D66FA1855

| Property | Value |
|----------|-------|
| Native Name | `_0xA31D350D66FA1855` |
| Hash | `0xA31D350D66FA1855` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA31D350D66FA1855(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA31D350D66FA1855, p0)
```


---

## _0xA405BF9F01960C16

| Property | Value |
|----------|-------|
| Native Name | `_0xA405BF9F01960C16` |
| Hash | `0xA405BF9F01960C16` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xA405BF9F01960C16(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA405BF9F01960C16, p0)
```


---

## _0xA4AC05B1A364EBC5

| Property | Value |
|----------|-------|
| Native Name | `_0xA4AC05B1A364EBC5` |
| Hash | `0xA4AC05B1A364EBC5` |
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
local result = _0xA4AC05B1A364EBC5(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA4AC05B1A364EBC5, p0, p1, p2)
```


---

## _0xA4B6432E3880F2F9

| Property | Value |
|----------|-------|
| Native Name | `_0xA4B6432E3880F2F9` |
| Hash | `0xA4B6432E3880F2F9` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA4B6432E3880F2F9(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA4B6432E3880F2F9, ped)
```


---

## _0xA691C10054275290

| Property | Value |
|----------|-------|
| Native Name | `_0xA691C10054275290` |
| Hash | `0xA691C10054275290` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `mount` (Ped), `player` (Player), `dismountedTimestamp` (int) |

### Parameters

- **`mount`** (`Ped`)
- **`player`** (`Player`)
- **`dismountedTimestamp`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xA691C10054275290(mount, player, dismountedTimestamp)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA691C10054275290, mount, player, dismountedTimestamp)
```


---

## _0xA6D6F03095C88F59

**Description:** _DELETE_*

| Property | Value |
|----------|-------|
| Native Name | `_0xA6D6F03095C88F59` |
| Hash | `0xA6D6F03095C88F59` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xA6D6F03095C88F59(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA6D6F03095C88F59, ped)
```


---

## _0xA7A806677F8DE138

**Description:** Washing player's face/hands now
_CLEAR_PED_E* - _CLEAR_PED_L*

| Property | Value |
|----------|-------|
| Native Name | `_0xA7A806677F8DE138` |
| Hash | `0xA7A806677F8DE138` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xA7A806677F8DE138(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA7A806677F8DE138, ped)
```


---

## _0xA7DC9266ED6A4E51

**Description:** _CLEAR_PED_B* - _CLEAR_PED_C*

| Property | Value |
|----------|-------|
| Native Name | `_0xA7DC9266ED6A4E51` |
| Hash | `0xA7DC9266ED6A4E51` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xA7DC9266ED6A4E51(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA7DC9266ED6A4E51, ped)
```


---

## _0xA8A95CECB1906EA2

**Description:** _SET_ENABLE_B* - _SET_ENABLE_H*

| Property | Value |
|----------|-------|
| Native Name | `_0xA8A95CECB1906EA2` |
| Hash | `0xA8A95CECB1906EA2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `p1` (BOOL) |

### Parameters

- **`groupId`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xA8A95CECB1906EA2(groupId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA8A95CECB1906EA2, groupId, p1)
```


---

## _0xA90684ED185CCB4B

**Description:** Only used in R* Script mob4 and rcm_mason4
_SET_PED_DEFENSIVE_* - _SET_PED_DESIRED_*

| Property | Value |
|----------|-------|
| Native Name | `_0xA90684ED185CCB4B` |
| Hash | `0xA90684ED185CCB4B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animal` (Ped), `p1` (BOOL), `p2` (float), `p3` (float) |

### Parameters

- **`animal`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`float`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xA90684ED185CCB4B(animal, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA90684ED185CCB4B, animal, p1, p2, p3)
```


---

## _0xA967D6A8ED2D713B

**Description:** _SET_PED_P* - _SET_PED_R*

| Property | Value |
|----------|-------|
| Native Name | `_0xA967D6A8ED2D713B` |
| Hash | `0xA967D6A8ED2D713B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xA967D6A8ED2D713B(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA967D6A8ED2D713B, ped, p1)
```


---

## _0xAA6C49AE90A32299

| Property | Value |
|----------|-------|
| Native Name | `_0xAA6C49AE90A32299` |
| Hash | `0xAA6C49AE90A32299` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0xAA6C49AE90A32299(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAA6C49AE90A32299, ped, p1)
```


---

## _SET_ACTIVE_META_PED_COMPONENTS_UPDATED

**Description:** Related to _0x704C908E9C405136 for component loading
Can be used to fix missing outfit changes, always paired with _UPDATE_PED_VARIATION
_S*
Doesn't actually return anything.

| Property | Value |
|----------|-------|
| Native Name | `_SET_ACTIVE_META_PED_COMPONENTS_UPDATED` |
| Hash | `0xAAB86462966168CE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `isMP` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`isMP`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = SetActiveMetaPedComponentsUpdated(ped, isMP)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAAB86462966168CE, ped, isMP)
```


---

## _0xAAC0EE3B4999ABB5

| Property | Value |
|----------|-------|
| Native Name | `_0xAAC0EE3B4999ABB5` |
| Hash | `0xAAC0EE3B4999ABB5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xAAC0EE3B4999ABB5(ped, targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAAC0EE3B4999ABB5, ped, targetPed)
```


---

## _0xAD3330E3C3E98007

| Property | Value |
|----------|-------|
| Native Name | `_0xAD3330E3C3E98007` |
| Hash | `0xAD3330E3C3E98007` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xAD3330E3C3E98007(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAD3330E3C3E98007, p0, p1)
```


---

## _0xAE6B68A83ABBE7C0

| Property | Value |
|----------|-------|
| Native Name | `_0xAE6B68A83ABBE7C0` |
| Hash | `0xAE6B68A83ABBE7C0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xAE6B68A83ABBE7C0(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE6B68A83ABBE7C0, p0)
```


---

## _0xAF041C10756C30FB

**Description:** _CLEAR_PED_D*

| Property | Value |
|----------|-------|
| Native Name | `_0xAF041C10756C30FB` |
| Hash | `0xAF041C10756C30FB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xAF041C10756C30FB(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAF041C10756C30FB, ped, p1, p2, p3)
```


---

## _0xB05CC690CDE8A4A9

**Description:** Used to set up bad guy groups in nb_kidnapped R* Script (MP_RE_KIDNAPPED): p1 = 4.f
_SET_FORMATION_*

| Property | Value |
|----------|-------|
| Native Name | `_0xB05CC690CDE8A4A9` |
| Hash | `0xB05CC690CDE8A4A9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `groupId` (int), `p1` (float) |

### Parameters

- **`groupId`** (`int`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB05CC690CDE8A4A9(groupId, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB05CC690CDE8A4A9, groupId, p1)
```


---

## _0xB06F5F1DEF417216

| Property | Value |
|----------|-------|
| Native Name | `_0xB06F5F1DEF417216` |
| Hash | `0xB06F5F1DEF417216` |
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
_0xB06F5F1DEF417216(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB06F5F1DEF417216, p0, p1, p2, p3)
```


---

## _GET_META_PED_RACE

| Property | Value |
|----------|-------|
| Native Name | `_GET_META_PED_RACE` |
| Hash | `0xB292203008EBBAAC` |
| Return Type | `Hash` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetMetaPedRace(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB292203008EBBAAC, ped)
```


---

## _0xB29C553BA582D09E

**Description:** Used in Script Function SATCHEL_COUNT_BREAKDOWN_COMPONENTS

| Property | Value |
|----------|-------|
| Native Name | `_0xB29C553BA582D09E` |
| Hash | `0xB29C553BA582D09E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any*), `model` (Hash), `damageCleanliness` (int), `p3` (int) |

### Parameters

- **`p0`** (`Any*`)
- **`model`** (`Hash`)
- **`damageCleanliness`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB29C553BA582D09E(p0, model, damageCleanliness, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB29C553BA582D09E, p0, model, damageCleanliness, p3)
```


---

## _0xB4B7C92FCE7347B7

**Description:** _RESET_PED_C*

| Property | Value |
|----------|-------|
| Native Name | `_0xB4B7C92FCE7347B7` |
| Hash | `0xB4B7C92FCE7347B7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xB4B7C92FCE7347B7(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB4B7C92FCE7347B7, ped)
```


---

## _0xB65927F861E7AE39

| Property | Value |
|----------|-------|
| Native Name | `_0xB65927F861E7AE39` |
| Hash | `0xB65927F861E7AE39` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB65927F861E7AE39(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB65927F861E7AE39, ped, p1)
```


---

## _0xB7DBB2986B87E230

| Property | Value |
|----------|-------|
| Native Name | `_0xB7DBB2986B87E230` |
| Hash | `0xB7DBB2986B87E230` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB7DBB2986B87E230(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB7DBB2986B87E230, ped, p1)
```


---

## _0xB8AB265426CFE6DD

**Description:** _SET_HO*

| Property | Value |
|----------|-------|
| Native Name | `_0xB8AB265426CFE6DD` |
| Hash | `0xB8AB265426CFE6DD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xB8AB265426CFE6DD(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB8AB265426CFE6DD, ped, p1)
```


---

## _0xB8E2D655E1D5BD39

| Property | Value |
|----------|-------|
| Native Name | `_0xB8E2D655E1D5BD39` |
| Hash | `0xB8E2D655E1D5BD39` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB8E2D655E1D5BD39(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB8E2D655E1D5BD39, p0)
```


---

## _0xB91AB3BE7F655D49

**Description:** _IS_PED_J* - _IS_PED_L*

| Property | Value |
|----------|-------|
| Native Name | `_0xB91AB3BE7F655D49` |
| Hash | `0xB91AB3BE7F655D49` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB91AB3BE7F655D49(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB91AB3BE7F655D49, ped)
```


---

## _0xB9BDFAE609DFB7C5

| Property | Value |
|----------|-------|
| Native Name | `_0xB9BDFAE609DFB7C5` |
| Hash | `0xB9BDFAE609DFB7C5` |
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
_0xB9BDFAE609DFB7C5(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB9BDFAE609DFB7C5, p0, p1, p2)
```


---

## _SET_PED_DESIRES_GROUP

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_DESIRES_GROUP` |
| Hash | `0xBAD2A311667A50D7` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedDesiresGroup(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBAD2A311667A50D7, ped, toggle)
```


---

## _0xBB3E5370EBB6BE28

| Property | Value |
|----------|-------|
| Native Name | `_0xBB3E5370EBB6BE28` |
| Hash | `0xBB3E5370EBB6BE28` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xBB3E5370EBB6BE28(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBB3E5370EBB6BE28, p0, p1)
```


---

## _0xBC1DC48270468444

| Property | Value |
|----------|-------|
| Native Name | `_0xBC1DC48270468444` |
| Hash | `0xBC1DC48270468444` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xBC1DC48270468444(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC1DC48270468444, p0)
```


---

## _0xBD0E4F52F6D95242

**Description:** _IS_PED_M* - _IS_PED_O*

| Property | Value |
|----------|-------|
| Native Name | `_0xBD0E4F52F6D95242` |
| Hash | `0xBD0E4F52F6D95242` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0xBD0E4F52F6D95242(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBD0E4F52F6D95242, ped)
```


---

## _0xBF567DF2BEF211A6

| Property | Value |
|----------|-------|
| Native Name | `_0xBF567DF2BEF211A6` |
| Hash | `0xBF567DF2BEF211A6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xBF567DF2BEF211A6(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBF567DF2BEF211A6, p0, p1)
```


---

## _0xBFA6B7731C3BAF02

**Description:** Only used in R* Script tg_p (CLIENT__AMBIENT_POPULATION - Player starts the populate in region)

| Property | Value |
|----------|-------|
| Native Name | `_0xBFA6B7731C3BAF02` |
| Hash | `0xBFA6B7731C3BAF02` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xBFA6B7731C3BAF02()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBFA6B7731C3BAF02, )
```


---

## _0xC17A94CC8FC3C61A

**Description:** _SET_PED_P* - _SET_PED_R*

| Property | Value |
|----------|-------|
| Native Name | `_0xC17A94CC8FC3C61A` |
| Hash | `0xC17A94CC8FC3C61A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `boneId` (int), `p2` (float), `p3` (float), `p4` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`boneId`** (`int`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xC17A94CC8FC3C61A(entity, boneId, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC17A94CC8FC3C61A, entity, boneId, p2, p3, p4)
```


---

## _0xC2722B252C79E641

**Description:** _FORCE_PED_*

| Property | Value |
|----------|-------|
| Native Name | `_0xC2722B252C79E641` |
| Hash | `0xC2722B252C79E641` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xC2722B252C79E641(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC2722B252C79E641, ped, p1, p2, p3)
```


---

*End of PED natives part 12*
