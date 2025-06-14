# PED Natives - Part 14 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _0xE4C95E0AE31C6512

| Property | Value |
|----------|-------|
| Native Name | `_0xE4C95E0AE31C6512` |
| Hash | `0xE4C95E0AE31C6512` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xE4C95E0AE31C6512(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE4C95E0AE31C6512, ped, p1)
```


---

## _0xE4EF4382E22C780C

| Property | Value |
|----------|-------|
| Native Name | `_0xE4EF4382E22C780C` |
| Hash | `0xE4EF4382E22C780C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xE4EF4382E22C780C(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE4EF4382E22C780C, p0)
```


---

## _0xE50C9816B3F22D8B

**Description:** _SET_D*

| Property | Value |
|----------|-------|
| Native Name | `_0xE50C9816B3F22D8B` |
| Hash | `0xE50C9816B3F22D8B` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `ped` (Ped), `p1` (Hash), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Hash`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xE50C9816B3F22D8B(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE50C9816B3F22D8B, ped, p1, p2)
```


---

## _0xE6CB36F43A95D75F

| Property | Value |
|----------|-------|
| Native Name | `_0xE6CB36F43A95D75F` |
| Hash | `0xE6CB36F43A95D75F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xE6CB36F43A95D75F(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE6CB36F43A95D75F, p0)
```


---

## _0xE735A7DA22E88359

| Property | Value |
|----------|-------|
| Native Name | `_0xE735A7DA22E88359` |
| Hash | `0xE735A7DA22E88359` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xE735A7DA22E88359(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE735A7DA22E88359, p0)
```


---

## _0xE737D5F14304A2EC

**Description:** Only used in R* Script nb_animal_attack: p2 = 120000
_SET_PED_SH* - _SET_PED_SP*

| Property | Value |
|----------|-------|
| Native Name | `_0xE737D5F14304A2EC` |
| Hash | `0xE737D5F14304A2EC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `player` (Player), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`player`** (`Player`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xE737D5F14304A2EC(ped, player, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE737D5F14304A2EC, ped, player, p2)
```


---

## _0xE76687023D8C8505

**Description:** Used for AUDIO / ANIMSCENE (REFERENCE_REGIONAL_CHARACTER)
Params: p1 = 0
_GET_PED_IN*

| Property | Value |
|----------|-------|
| Native Name | `_0xE76687023D8C8505` |
| Hash | `0xE76687023D8C8505` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `perscharModel` (Hash), `p1` (int) |

### Parameters

- **`perscharModel`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xE76687023D8C8505(perscharModel, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE76687023D8C8505, perscharModel, p1)
```


---

## _0xE8ABE3B73FC7FE17

| Property | Value |
|----------|-------|
| Native Name | `_0xE8ABE3B73FC7FE17` |
| Hash | `0xE8ABE3B73FC7FE17` |
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
_0xE8ABE3B73FC7FE17(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE8ABE3B73FC7FE17, p0, p1, p2, p3)
```


---

## _GET_PLAYER_DISMOUNT_TIMESTAMP

**Description:** Returns dismounted timestamp

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_DISMOUNT_TIMESTAMP` |
| Hash | `0xE8D1CCB9375C101B` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `mount` (Ped), `player` (Player) |

### Parameters

- **`mount`** (`Ped`)
- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerDismountTimestamp(mount, player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE8D1CCB9375C101B, mount, player)
```


---

## _0xE9E06EA514A69061

| Property | Value |
|----------|-------|
| Native Name | `_0xE9E06EA514A69061` |
| Hash | `0xE9E06EA514A69061` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xE9E06EA514A69061(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE9E06EA514A69061, p0, p1)
```


---

## _0xEA8763E505AFD49A

| Property | Value |
|----------|-------|
| Native Name | `_0xEA8763E505AFD49A` |
| Hash | `0xEA8763E505AFD49A` |
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
_0xEA8763E505AFD49A(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEA8763E505AFD49A, p0, p1, p2)
```


---

## _0xEB8886E1065654CD

**Description:** Washing player's face/hands now
_FA* - _FI*

| Property | Value |
|----------|-------|
| Native Name | `_0xEB8886E1065654CD` |
| Hash | `0xEB8886E1065654CD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (const char*), `p3` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`const char*`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xEB8886E1065654CD(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEB8886E1065654CD, ped, p1, p2, p3)
```


---

## _0xEBAAC9A750E7563B

**Description:** If returned true: PROCESS_RESIZING_TRACKING_BOUNDS_VOLUME - Scaling UP the bounds due to tracking
If returned false: PROCESS_RESIZING_TRACKING_BOUNDS_VOLUME - Scaling DOWN the bounds due to tracking
_IS_PED_T* - _IS_PED_U*

| Property | Value |
|----------|-------|
| Native Name | `_0xEBAAC9A750E7563B` |
| Hash | `0xEBAAC9A750E7563B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0xEBAAC9A750E7563B(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEBAAC9A750E7563B, ped)
```


---

## _0xEBD49472BCCF7642

| Property | Value |
|----------|-------|
| Native Name | `_0xEBD49472BCCF7642` |
| Hash | `0xEBD49472BCCF7642` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xEBD49472BCCF7642(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEBD49472BCCF7642, p0, p1)
```


---

## _0xEC60D1D225BC50AA

**Description:** _SET_C*

| Property | Value |
|----------|-------|
| Native Name | `_0xEC60D1D225BC50AA` |
| Hash | `0xEC60D1D225BC50AA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xEC60D1D225BC50AA(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEC60D1D225BC50AA, ped, p1)
```


---

## _0xED1C764997A86D5A

**Description:** Only used in R* Script nb_stalking_hunter

| Property | Value |
|----------|-------|
| Native Name | `_0xED1C764997A86D5A` |
| Hash | `0xED1C764997A86D5A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped1` (Ped), `ped2` (Ped) |

### Parameters

- **`ped1`** (`Ped`)
- **`ped2`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xED1C764997A86D5A(ped1, ped2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xED1C764997A86D5A, ped1, ped2)
```


---

## _0xEEDC9B29314B2733

| Property | Value |
|----------|-------|
| Native Name | `_0xEEDC9B29314B2733` |
| Hash | `0xEEDC9B29314B2733` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any) |

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

### Usage

**Lua (Direct):**
```lua
_0xEEDC9B29314B2733(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEEDC9B29314B2733, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## _0xEF371232BC6053E1

**Description:** _ADD_*

| Property | Value |
|----------|-------|
| Native Name | `_0xEF371232BC6053E1` |
| Hash | `0xEF371232BC6053E1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xEF371232BC6053E1(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEF371232BC6053E1, ped)
```


---

## _0xF47D54B986F0A346

**Description:** Used in Script Function MOONSHINE_BAND_CLIENT_PATRON_UPDATE

| Property | Value |
|----------|-------|
| Native Name | `_0xF47D54B986F0A346` |
| Hash | `0xF47D54B986F0A346` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `ped` (Ped), `danceIntensity` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`danceIntensity`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xF47D54B986F0A346(ped, danceIntensity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF47D54B986F0A346, ped, danceIntensity)
```


---

## _0xF4860514AD354226

**Description:** Only used in SP Scripts
Returns count / index
_C*

| Property | Value |
|----------|-------|
| Native Name | `_0xF4860514AD354226` |
| Hash | `0xF4860514AD354226` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `shockingEvent` (ScrHandle), `x` (float), `y` (float), `z` (float), `p4` (float), `p5` (int*) |

### Parameters

- **`shockingEvent`** (`ScrHandle`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = _0xF4860514AD354226(shockingEvent, x, y, z, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF4860514AD354226, shockingEvent, x, y, z, p4, p5)
```


---

## _0xF634E2892220EF34

| Property | Value |
|----------|-------|
| Native Name | `_0xF634E2892220EF34` |
| Hash | `0xF634E2892220EF34` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xF634E2892220EF34(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF634E2892220EF34, ped, p1)
```


---

## _0xF6A8C4B4A11AE89C

| Property | Value |
|----------|-------|
| Native Name | `_0xF6A8C4B4A11AE89C` |
| Hash | `0xF6A8C4B4A11AE89C` |
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
local result = _0xF6A8C4B4A11AE89C(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF6A8C4B4A11AE89C, p0, p1, p2, p3, p4, p5)
```


---

## _0xF7327ACC7A89AEF1

| Property | Value |
|----------|-------|
| Native Name | `_0xF7327ACC7A89AEF1` |
| Hash | `0xF7327ACC7A89AEF1` |
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
local result = _0xF7327ACC7A89AEF1(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF7327ACC7A89AEF1, p0, p1, p2)
```


---

## _0xF917F92BF22ECBAB

| Property | Value |
|----------|-------|
| Native Name | `_0xF917F92BF22ECBAB` |
| Hash | `0xF917F92BF22ECBAB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xF917F92BF22ECBAB(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF917F92BF22ECBAB, p0)
```


---

## _0xF9331B3A314EB49D

| Property | Value |
|----------|-------|
| Native Name | `_0xF9331B3A314EB49D` |
| Hash | `0xF9331B3A314EB49D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0xF9331B3A314EB49D(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF9331B3A314EB49D, ped)
```


---

## _0xF9CBD46433E36713

**Description:** Used in Script Function PLAYER_HEAD_TRACKING_MAINTAIN

| Property | Value |
|----------|-------|
| Native Name | `_0xF9CBD46433E36713` |
| Hash | `0xF9CBD46433E36713` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetEntity` (Entity), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (float), `p9` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`targetEntity`** (`Entity`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0xF9CBD46433E36713(ped, targetEntity, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF9CBD46433E36713, ped, targetEntity, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## _SET_PED_WETNESS

**Description:** only works when you use SET_PED_WETNESS_HEIGHT first , if you do 0.0 (it resets) you need to apply again with SET_PED_WETNESS_HEIGHT to see the wetness effects again

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_WETNESS` |
| Hash | `0xF9CFF5BB70E8A2CB` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedWetness(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF9CFF5BB70E8A2CB, ped, p1)
```


---

## _0xFA0D206B489A6846

| Property | Value |
|----------|-------|
| Native Name | `_0xFA0D206B489A6846` |
| Hash | `0xFA0D206B489A6846` |
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
_0xFA0D206B489A6846(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA0D206B489A6846, p0, p1, p2, p3, p4)
```


---

## _0xFA742B82D093D848

| Property | Value |
|----------|-------|
| Native Name | `_0xFA742B82D093D848` |
| Hash | `0xFA742B82D093D848` |
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
_0xFA742B82D093D848(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA742B82D093D848, p0, p1, p2)
```


---

## _0xFA8C10DCE0706D43

**Description:** _HAS_PED_*

| Property | Value |
|----------|-------|
| Native Name | `_0xFA8C10DCE0706D43` |
| Hash | `0xFA8C10DCE0706D43` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0xFA8C10DCE0706D43(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFA8C10DCE0706D43, ped)
```


---

## _0xFC23348F0F4E245F

| Property | Value |
|----------|-------|
| Native Name | `_0xFC23348F0F4E245F` |
| Hash | `0xFC23348F0F4E245F` |
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
_0xFC23348F0F4E245F(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFC23348F0F4E245F, p0, p1, p2, p3)
```


---

## _GET_NUM_RESERVED_STAMINA

**Description:** returns the number of reserved stamina similar to _GET_NUM_RESERVED_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_RESERVED_STAMINA` |
| Hash | `0xFC3B580C4380B5B7` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumReservedStamina(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFC3B580C4380B5B7, ped)
```


---

## _0xFD3C31A2E45671E7

**Description:** _DISABLE_A* - _DISABLE_C*

| Property | Value |
|----------|-------|
| Native Name | `_0xFD3C31A2E45671E7` |
| Hash | `0xFD3C31A2E45671E7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xFD3C31A2E45671E7(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFD3C31A2E45671E7, ped, p1)
```


---

## _0xFD8E853F0BC2E942

| Property | Value |
|----------|-------|
| Native Name | `_0xFD8E853F0BC2E942` |
| Hash | `0xFD8E853F0BC2E942` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xFD8E853F0BC2E942(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFD8E853F0BC2E942, p0, p1)
```


---

## _0xFEA6126C34DF2532

**Description:** METAPED_PLAYER_COMPONENTS_SET_META_TYPE_TO_BE_BYPASSED: Setting visibility
_SET_M* - _SET_P*

| Property | Value |
|----------|-------|
| Native Name | `_0xFEA6126C34DF2532` |
| Hash | `0xFEA6126C34DF2532` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xFEA6126C34DF2532(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFEA6126C34DF2532, ped, p1)
```


---

## _0xFFA1594703ED27CA

| Property | Value |
|----------|-------|
| Native Name | `_0xFFA1594703ED27CA` |
| Hash | `0xFFA1594703ED27CA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xFFA1594703ED27CA(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFFA1594703ED27CA, ped, p1)
```


---

## _0xFFDE295662405B25

**Description:** _GET_PED_COMBAT_M* - _GET_PED_C*

| Property | Value |
|----------|-------|
| Native Name | `_0xFFDE295662405B25` |
| Hash | `0xFFDE295662405B25` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0xFFDE295662405B25(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFFDE295662405B25, ped)
```


---

## _ADD_PED_STAY_OUT_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_ADD_PED_STAY_OUT_VOLUME` |
| Hash | `0xE9B168527B337BF0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `volume` (Volume) |

### Parameters

- **`ped`** (`Ped`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = AddPedStayOutVolume(ped, volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE9B168527B337BF0, ped, volume)
```


---

## _ADD_PED_SUBSCRIBE_TO_LEGENDARY_BLIPS

| Property | Value |
|----------|-------|
| Native Name | `_ADD_PED_SUBSCRIBE_TO_LEGENDARY_BLIPS` |
| Hash | `0xE37287EE358939C3` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = AddPedSubscribeToLegendaryBlips(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE37287EE358939C3, ped)
```


---

## _ADD_SCENARIO_BLOCKING_VOLUME

**Description:** flag: see ADD_SCENARIO_BLOCKING_AREA

| Property | Value |
|----------|-------|
| Native Name | `_ADD_SCENARIO_BLOCKING_VOLUME` |
| Hash | `0x4C39C95AE5DB1329` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `volume` (Volume), `p1` (BOOL), `flag` (int) |

### Parameters

- **`volume`** (`Volume`)
- **`p1`** (`BOOL`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = AddScenarioBlockingVolume(volume, p1, flag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4C39C95AE5DB1329, volume, p1, flag)
```


---

## _ADD_SCENARIO_TRANSITION

**Description:** Forces transition now, called together with 0xD65FDC686A031C83

| Property | Value |
|----------|-------|
| Native Name | `_ADD_SCENARIO_TRANSITION` |
| Hash | `0x6D07B371E9439019` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
AddScenarioTransition(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D07B371E9439019, ped)
```


---

## _ADD_TEXTURE_LAYER

**Description:** Creates ped overlay in texture override data and returns it's index.
This index are used for further overlay editing.

albedoHash: a hash of overlay's albedo texture
colorType: a color type(from 0 to 2). 0 is used for overlays with RGB colors usually.

| Property | Value |
|----------|-------|
| Native Name | `_ADD_TEXTURE_LAYER` |
| Hash | `0x86BB5FF45F193A02` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `textureId` (int), `albedoHash` (Hash), `normalHash` (Hash), `materialHash` (Hash), `blendType` (int), `texAlpha` (float), `sheetGridIndex` (int) |

### Parameters

- **`textureId`** (`int`)
- **`albedoHash`** (`Hash`)
- **`normalHash`** (`Hash`)
- **`materialHash`** (`Hash`)
- **`blendType`** (`int`)
- **`texAlpha`** (`float`)
- **`sheetGridIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = AddTextureLayer(textureId, albedoHash, normalHash, materialHash, blendType, texAlpha, sheetGridIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x86BB5FF45F193A02, textureId, albedoHash, normalHash, materialHash, blendType, texAlpha, sheetGridIndex)
```


---

## _APPLY_PED_META_PED_OUTFIT

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/clothes/metaped_outfits.lua

| Property | Value |
|----------|-------|
| Native Name | `_APPLY_PED_META_PED_OUTFIT` |
| Hash | `0x74F512E29CB717E2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `requestId` (int), `ped` (Ped), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`requestId`** (`int`)
- **`ped`** (`Ped`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = ApplyPedMetaPedOutfit(requestId, ped, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74F512E29CB717E2, requestId, ped, p2, p3)
```


---

## _APPLY_SHOP_ITEM_TO_PED

| Property | Value |
|----------|-------|
| Native Name | `_APPLY_SHOP_ITEM_TO_PED` |
| Hash | `0xD3A7B003ED343FD9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `componentHash` (Hash), `immediately` (BOOL), `isMp` (BOOL), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`componentHash`** (`Hash`)
- **`immediately`** (`BOOL`)
- **`isMp`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ApplyShopItemToPed(ped, componentHash, immediately, isMp, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD3A7B003ED343FD9, ped, componentHash, immediately, isMp, p4)
```


---

## _APPLY_TEXTURE_ON_PED

| Property | Value |
|----------|-------|
| Native Name | `_APPLY_TEXTURE_ON_PED` |
| Hash | `0x0B46E25761519058` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `componentHash` (Hash), `textureId` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`componentHash`** (`Hash`)
- **`textureId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ApplyTextureOnPed(ped, componentHash, textureId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0B46E25761519058, ped, componentHash, textureId)
```


---

## _ARE_ALL_AMBIENT_PED_RESERVATIONS_READY

| Property | Value |
|----------|-------|
| Native Name | `_ARE_ALL_AMBIENT_PED_RESERVATIONS_READY` |
| Hash | `0x5E420FF293EE5472` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = AreAllAmbientPedReservationsReady()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5E420FF293EE5472, )
```


---

## _ATTACH_VOLUME_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_ATTACH_VOLUME_TO_ENTITY` |
| Hash | `0x7C00CFC48A782DC0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `entity` (Entity), `offsetX` (float), `offsetY` (float), `offsetZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `p8` (int), `p9` (BOOL) |

### Parameters

- **`volume`** (`Volume`)
- **`entity`** (`Entity`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`p8`** (`int`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AttachVolumeToEntity(volume, entity, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C00CFC48A782DC0, volume, entity, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, p8, p9)
```


---

## _CAN_PED_USE_SCENARIO_POINT

**Description:** p2 is always 0, p3 is always 0, p4 is always 1

| Property | Value |
|----------|-------|
| Native Name | `_CAN_PED_USE_SCENARIO_POINT` |
| Hash | `0xAB643407D0B26F07` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `scenario` (int), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`scenario`** (`int`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CanPedUseScenarioPoint(ped, scenario, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAB643407D0B26F07, ped, scenario, p2, p3, p4)
```


---

## _CHANGE_PED_STAMINA

**Description:** Alters entity's stamina by 'amount'. Can be negative (to drain stamina). float amount: -1000.0 - 1000.0

| Property | Value |
|----------|-------|
| Native Name | `_CHANGE_PED_STAMINA` |
| Hash | `0xC3D4B754C0E86B9E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `amount` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`amount`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = ChangePedStamina(ped, amount)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC3D4B754C0E86B9E, ped, amount)
```


---

## _CLEAR_ACTIVE_ANIMAL_OWNER

**Description:** Used in Script Functions PLAYER_HORSE_RELEASE_HORSE_TO_AMBIENT_WORLD (p1 = true), HORSE_SETUP_PLAYER_HORSE_ATTRIBUTES (p1 = false)
Set to false for player horse in scripts and seems it's only true when releasing/changing a player horse? Cannot determine what effect it has, but it doesn't seem to affect _GET_HORSE_TAMING_STATE

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_ACTIVE_ANIMAL_OWNER` |
| Hash | `0xBCC76708E5677E1D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `horse` (Ped), `clear` (BOOL) |

### Parameters

- **`horse`** (`Ped`)
- **`clear`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ClearActiveAnimalOwner(horse, clear)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBCC76708E5677E1D, horse, clear)
```


---

*End of PED natives part 14*
