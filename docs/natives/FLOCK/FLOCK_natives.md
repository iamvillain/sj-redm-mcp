# FLOCK Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** FLOCK  
**Natives in this file:** 46  
**Generated from:** RDR3natives JSON data

---

## GET_ANIMAL_TUNING_BOOL_PARAM

**Description:** index: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eAnimalTuningBools
https://github.com/femga/rdr3_discoveries/tree/master/AI/ANIMAL_TUNING_BOOL_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIMAL_TUNING_BOOL_PARAM` |
| Hash | `0x1C1993824A396603` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animal` (Ped), `index` (int) |

### Parameters

- **`animal`** (`Ped`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimalTuningBoolParam(animal, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1C1993824A396603, animal, index)
```


---

## GET_ANIMAL_TUNING_FLOAT_PARAM

**Description:** index: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eAnimalTuningFloats
https://github.com/femga/rdr3_discoveries/tree/master/AI/ANIMAL_TUNING_FLOAT_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIMAL_TUNING_FLOAT_PARAM` |
| Hash | `0x4BC3ECFDA0297E27` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `animal` (Ped), `index` (int) |

### Parameters

- **`animal`** (`Ped`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimalTuningFloatParam(animal, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4BC3ECFDA0297E27, animal, index)
```


---

## GET_SPECIES_TUNING_FLOAT_PARAM

| Property | Value |
|----------|-------|
| Native Name | `GET_SPECIES_TUNING_FLOAT_PARAM` |
| Hash | `0xE108489621422F91` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (int), `p2` (int) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetSpeciesTuningFloatParam(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE108489621422F91, p0, p1, p2)
```


---

## RESET_ANIMAL_TUNING_BOOL_PARAM

| Property | Value |
|----------|-------|
| Native Name | `RESET_ANIMAL_TUNING_BOOL_PARAM` |
| Hash | `0x96AA1304D30E6BC3` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `animal` (Ped), `index` (int) |

### Parameters

- **`animal`** (`Ped`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
ResetAnimalTuningBoolParam(animal, index)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x96AA1304D30E6BC3, animal, index)
```


---

## RESET_ANIMAL_TUNING_FLOAT_PARAM

| Property | Value |
|----------|-------|
| Native Name | `RESET_ANIMAL_TUNING_FLOAT_PARAM` |
| Hash | `0xE776A195488FC520` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `animal` (Ped), `index` (int) |

### Parameters

- **`animal`** (`Ped`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
ResetAnimalTuningFloatParam(animal, index)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE776A195488FC520, animal, index)
```


---

## SET_ANIMAL_TUNING_BOOL_PARAM

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIMAL_TUNING_BOOL_PARAM` |
| Hash | `0x9FF1E042FA597187` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animal` (Ped), `index` (int), `value` (BOOL) |

### Parameters

- **`animal`** (`Ped`)
- **`index`** (`int`)
- **`value`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAnimalTuningBoolParam(animal, index, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9FF1E042FA597187, animal, index, value)
```


---

## SET_ANIMAL_TUNING_FLOAT_PARAM

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIMAL_TUNING_FLOAT_PARAM` |
| Hash | `0xCBDA22C87977244F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animal` (Ped), `index` (int), `value` (float) |

### Parameters

- **`animal`** (`Ped`)
- **`index`** (`int`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAnimalTuningFloatParam(animal, index, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCBDA22C87977244F, animal, index, value)
```


---

## SET_SPECIES_TUNING_BOOL_PARAM

| Property | Value |
|----------|-------|
| Native Name | `SET_SPECIES_TUNING_BOOL_PARAM` |
| Hash | `0x6D1D94C2459B42EE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (int), `p2` (int), `p3` (BOOL) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`int`)
- **`p2`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetSpeciesTuningBoolParam(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D1D94C2459B42EE, p0, p1, p2, p3)
```


---

## SET_SPECIES_TUNING_FLOAT_PARAM

| Property | Value |
|----------|-------|
| Native Name | `SET_SPECIES_TUNING_FLOAT_PARAM` |
| Hash | `0x963240B6C252BA49` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (int), `p2` (int), `p3` (float) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`int`)
- **`p2`** (`int`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetSpeciesTuningFloatParam(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x963240B6C252BA49, p0, p1, p2, p3)
```


---

## _0x0816C31480764AB0

| Property | Value |
|----------|-------|
| Native Name | `_0x0816C31480764AB0` |
| Hash | `0x0816C31480764AB0` |
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
_0x0816C31480764AB0(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0816C31480764AB0, p0, p1, p2, p3)
```


---

## _0x09EE00B8F858E0BE

| Property | Value |
|----------|-------|
| Native Name | `_0x09EE00B8F858E0BE` |
| Hash | `0x09EE00B8F858E0BE` |
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
local result = _0x09EE00B8F858E0BE(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x09EE00B8F858E0BE, p0, p1, p2, p3, p4, p5, p6)
```


---

## _0x1520626FFAFFFA8F

| Property | Value |
|----------|-------|
| Native Name | `_0x1520626FFAFFFA8F` |
| Hash | `0x1520626FFAFFFA8F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1520626FFAFFFA8F(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1520626FFAFFFA8F, p0, p1)
```


---

## _0x17E3E5C46ECCD308

| Property | Value |
|----------|-------|
| Native Name | `_0x17E3E5C46ECCD308` |
| Hash | `0x17E3E5C46ECCD308` |
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
_0x17E3E5C46ECCD308(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x17E3E5C46ECCD308, p0, p1, p2)
```


---

## _0x19870C40C7EE15BE

| Property | Value |
|----------|-------|
| Native Name | `_0x19870C40C7EE15BE` |
| Hash | `0x19870C40C7EE15BE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x19870C40C7EE15BE(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x19870C40C7EE15BE, p0, p1)
```


---

## _0x1DA6CB02071055D5

| Property | Value |
|----------|-------|
| Native Name | `_0x1DA6CB02071055D5` |
| Hash | `0x1DA6CB02071055D5` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1DA6CB02071055D5(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1DA6CB02071055D5, p0)
```


---

## _0x2DF3D457D86F8E57

| Property | Value |
|----------|-------|
| Native Name | `_0x2DF3D457D86F8E57` |
| Hash | `0x2DF3D457D86F8E57` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2DF3D457D86F8E57(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2DF3D457D86F8E57, p0, p1)
```


---

## _0x34B9C4D86DF2C2F3

| Property | Value |
|----------|-------|
| Native Name | `_0x34B9C4D86DF2C2F3` |
| Hash | `0x34B9C4D86DF2C2F3` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x34B9C4D86DF2C2F3(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x34B9C4D86DF2C2F3, p0)
```


---

## _0x36486AF7DA93A464

| Property | Value |
|----------|-------|
| Native Name | `_0x36486AF7DA93A464` |
| Hash | `0x36486AF7DA93A464` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x36486AF7DA93A464(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x36486AF7DA93A464, p0)
```


---

## _REMOVE_HERD_PED

**Description:** Remove the ped from a herd.

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_HERD_PED` |
| Hash | `0x408D1149C5E39C1E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `herd` (Entity), `ped` (Ped) |

### Parameters

- **`herd`** (`Entity`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
RemoveHerdPed(herd, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x408D1149C5E39C1E, herd, ped)
```


---

## _0x53187E563F938E76

| Property | Value |
|----------|-------|
| Native Name | `_0x53187E563F938E76` |
| Hash | `0x53187E563F938E76` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x53187E563F938E76(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x53187E563F938E76, p0)
```


---

## _CLEAR_HERD

**Description:** Clear the herd.

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_HERD` |
| Hash | `0x67A43EA3F6FE0076` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `herd` (Entity) |

### Parameters

- **`herd`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
ClearHerd(herd)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x67A43EA3F6FE0076, herd)
```


---

## _0x6C57BEA886A20C6B

| Property | Value |
|----------|-------|
| Native Name | `_0x6C57BEA886A20C6B` |
| Hash | `0x6C57BEA886A20C6B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6C57BEA886A20C6B(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C57BEA886A20C6B, p0, p1)
```


---

## _0x706B434FEFAD6A24

| Property | Value |
|----------|-------|
| Native Name | `_0x706B434FEFAD6A24` |
| Hash | `0x706B434FEFAD6A24` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x706B434FEFAD6A24(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x706B434FEFAD6A24, p0)
```


---

## _0x8049B17BEC937662

| Property | Value |
|----------|-------|
| Native Name | `_0x8049B17BEC937662` |
| Hash | `0x8049B17BEC937662` |
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
local result = _0x8049B17BEC937662(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8049B17BEC937662, p0, p1, p2, p3, p4, p5, p6)
```


---

## _IS_PED_IN_HERD

**Description:** Return whether the ped is in the herd.

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_IN_HERD` |
| Hash | `0x9E13ACC38BA8F9C3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `herd` (Entity), `ped` (Ped) |

### Parameters

- **`herd`** (`Entity`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInHerd(herd, ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9E13ACC38BA8F9C3, herd, ped)
```


---

## _0xA881F5C77A560906

| Property | Value |
|----------|-------|
| Native Name | `_0xA881F5C77A560906` |
| Hash | `0xA881F5C77A560906` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xA881F5C77A560906(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA881F5C77A560906, p0)
```


---

## _0xC3D581A34BC0A1F0

| Property | Value |
|----------|-------|
| Native Name | `_0xC3D581A34BC0A1F0` |
| Hash | `0xC3D581A34BC0A1F0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC3D581A34BC0A1F0(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC3D581A34BC0A1F0, p0, p1)
```


---

## _0xC72CE37081DAE625

| Property | Value |
|----------|-------|
| Native Name | `_0xC72CE37081DAE625` |
| Hash | `0xC72CE37081DAE625` |
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
_0xC72CE37081DAE625(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC72CE37081DAE625, p0, p1, p2, p3)
```


---

## _0xC95611869E14F8AF

| Property | Value |
|----------|-------|
| Native Name | `_0xC95611869E14F8AF` |
| Hash | `0xC95611869E14F8AF` |
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
_0xC95611869E14F8AF(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC95611869E14F8AF, p0, p1, p2, p3)
```


---

## _0xCC6B5AAFC87BFC7B

| Property | Value |
|----------|-------|
| Native Name | `_0xCC6B5AAFC87BFC7B` |
| Hash | `0xCC6B5AAFC87BFC7B` |
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
_0xCC6B5AAFC87BFC7B(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCC6B5AAFC87BFC7B, p0, p1, p2)
```


---

## _0xD95F04A4E73BE85E

| Property | Value |
|----------|-------|
| Native Name | `_0xD95F04A4E73BE85E` |
| Hash | `0xD95F04A4E73BE85E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD95F04A4E73BE85E(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD95F04A4E73BE85E, p0, p1)
```


---

## _DELETE_HERD

**Description:** Delete and invalidate the herd.

| Property | Value |
|----------|-------|
| Native Name | `_DELETE_HERD` |
| Hash | `0xE0961AED72642B80` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `herd` (Entity) |

### Parameters

- **`herd`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
DeleteHerd(herd)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0961AED72642B80, herd)
```


---

## _0xE36D2CB540597EF7

| Property | Value |
|----------|-------|
| Native Name | `_0xE36D2CB540597EF7` |
| Hash | `0xE36D2CB540597EF7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xE36D2CB540597EF7(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE36D2CB540597EF7, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## _0xE93415B3307208E5

| Property | Value |
|----------|-------|
| Native Name | `_0xE93415B3307208E5` |
| Hash | `0xE93415B3307208E5` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any) |

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

### Usage

**Lua (Direct):**
```lua
local result = _0xE93415B3307208E5(p0, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE93415B3307208E5, p0, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## _0xF2CCA7B68CFAB2B9

**Description:** species: SPECIES_BIRD_CROW

| Property | Value |
|----------|-------|
| Native Name | `_0xF2CCA7B68CFAB2B9` |
| Hash | `0xF2CCA7B68CFAB2B9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `species` (Hash), `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `x3` (float), `y3` (float), `z3` (float), `p10` (float), `p11` (float), `p12` (float), `p13` (float) |

### Parameters

- **`species`** (`Hash`)
- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`x3`** (`float`)
- **`y3`** (`float`)
- **`z3`** (`float`)
- **`p10`** (`float`)
- **`p11`** (`float`)
- **`p12`** (`float`)
- **`p13`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xF2CCA7B68CFAB2B9(species, x1, y1, z1, x2, y2, z2, x3, y3, z3, p10, p11, p12, p13)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF2CCA7B68CFAB2B9, species, x1, y1, z1, x2, y2, z2, x3, y3, z3, p10, p11, p12, p13)
```


---

## _0xFA821997794F48E7

| Property | Value |
|----------|-------|
| Native Name | `_0xFA821997794F48E7` |
| Hash | `0xFA821997794F48E7` |
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
_0xFA821997794F48E7(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA821997794F48E7, p0, p1, p2)
```


---

## _0xFB16F08F47B83B4C

| Property | Value |
|----------|-------|
| Native Name | `_0xFB16F08F47B83B4C` |
| Hash | `0xFB16F08F47B83B4C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xFB16F08F47B83B4C(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFB16F08F47B83B4C, p0)
```


---

## _0xFDB008B3BCF5992F

| Property | Value |
|----------|-------|
| Native Name | `_0xFDB008B3BCF5992F` |
| Hash | `0xFDB008B3BCF5992F` |
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
_0xFDB008B3BCF5992F(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFDB008B3BCF5992F, p0, p1, p2)
```


---

## _0xFF1E339CE40EAAAF

| Property | Value |
|----------|-------|
| Native Name | `_0xFF1E339CE40EAAAF` |
| Hash | `0xFF1E339CE40EAAAF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xFF1E339CE40EAAAF(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFF1E339CE40EAAAF, p0, p1)
```


---

## _ADD_PED_TO_FLOCK

| Property | Value |
|----------|-------|
| Native Name | `_ADD_PED_TO_FLOCK` |
| Hash | `0x933E5D31A7D13069` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `ped` (Ped) |

### Parameters

- **`p0`** (`Any`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
AddPedToFlock(p0, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x933E5D31A7D13069, p0, ped)
```


---

## _CREATE_HERD

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_HERD` |
| Hash | `0xCB4EF7EDAE2E16F1` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = CreateHerd()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB4EF7EDAE2E16F1, )
```


---

## _GET_ANIMAL_IS_WILD

**Description:** Ped (horse) will run away from players and mounting will trigger them to buck until disabled.
Used for: REL_DOMESTICATED_ANIMAL

| Property | Value |
|----------|-------|
| Native Name | `_GET_ANIMAL_IS_WILD` |
| Hash | `0x3B005FF0538ED2A9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimalIsWild(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3B005FF0538ED2A9, ped)
```


---

## _GET_ANIMAL_RARITY

**Description:** enum eAnimalRarityLevel
{
	ARL_COMMON,
	ARL_RARE,
	ARL_LEGENDARY,
	ARL_NUMRARITYLEVELS
};

| Property | Value |
|----------|-------|
| Native Name | `_GET_ANIMAL_RARITY` |
| Hash | `0xF8B48A361DC388AE` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimalRarity(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF8B48A361DC388AE, ped)
```


---

## _IS_HERD_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_HERD_VALID` |
| Hash | `0x8D913E493BAFE0A3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `herdHandle` (ScrHandle) |

### Parameters

- **`herdHandle`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
local result = IsHerdValid(herdHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8D913E493BAFE0A3, herdHandle)
```


---

## _SET_ANIMAL_IS_WILD

| Property | Value |
|----------|-------|
| Native Name | `_SET_ANIMAL_IS_WILD` |
| Hash | `0xAEB97D84CDF3C00B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAnimalIsWild(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAEB97D84CDF3C00B, ped, toggle)
```


---

## _SET_ANIMAL_RARITY

**Description:** rarityLevel: see _GET_ANIMAL_RARITY

| Property | Value |
|----------|-------|
| Native Name | `_SET_ANIMAL_RARITY` |
| Hash | `0x8B6F0F59B1B99801` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `rarityLevel` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`rarityLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetAnimalRarity(ped, rarityLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8B6F0F59B1B99801, ped, rarityLevel)
```


---

*End of FLOCK natives*
