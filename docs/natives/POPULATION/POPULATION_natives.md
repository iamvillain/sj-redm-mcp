# POPULATION Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** POPULATION  
**Natives in this file:** 31  
**Generated from:** RDR3natives JSON data

---

## CLEAR_SPAWNER_INFO_PRIORITY

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_SPAWNER_INFO_PRIORITY` |
| Hash | `0x217A54DE2D200305` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (Hash) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ClearSpawnerInfoPriority(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x217A54DE2D200305, p0, p1)
```


---

## DISABLE_AMBIENT_ROAD_POPULATION

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_AMBIENT_ROAD_POPULATION` |
| Hash | `0xC6DCC2A3A8825C85` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `unk` (BOOL) |

### Parameters

- **`unk`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DisableAmbientRoadPopulation(unk)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC6DCC2A3A8825C85, unk)
```


---

## ENABLE_AMBIENT_ROAD_POPULATION

| Property | Value |
|----------|-------|
| Native Name | `ENABLE_AMBIENT_ROAD_POPULATION` |
| Hash | `0xBC90BDF4E5228EA1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
EnableAmbientRoadPopulation()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC90BDF4E5228EA1, )
```


---

## GET_NUM_MODELS_IN_POPULATION_SET

| Property | Value |
|----------|-------|
| Native Name | `GET_NUM_MODELS_IN_POPULATION_SET` |
| Hash | `0xA1E3171ED0E47564` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `popSetHash` (Hash) |

### Parameters

- **`popSetHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumModelsInPopulationSet(popSetHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA1E3171ED0E47564, popSetHash)
```


---

## GET_PED_MODEL_NAME_IN_POPULATION_SET

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_MODEL_NAME_IN_POPULATION_SET` |
| Hash | `0x3EAFA1C533B7139E` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `popSetHash` (Hash), `index` (int) |

### Parameters

- **`popSetHash`** (`Hash`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedModelNameInPopulationSet(popSetHash, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3EAFA1C533B7139E, popSetHash, index)
```


---

## GET_RANDOM_MODEL_FROM_POPULATION_SET

| Property | Value |
|----------|-------|
| Native Name | `GET_RANDOM_MODEL_FROM_POPULATION_SET` |
| Hash | `0x6B12ED8C77E8567B` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `popSetHash` (Hash), `flags` (int), `p2` (Hash), `p3` (BOOL), `p4` (BOOL), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`popSetHash`** (`Hash`)
- **`flags`** (`int`)
- **`p2`** (`Hash`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetRandomModelFromPopulationSet(popSetHash, flags, p2, p3, p4, x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6B12ED8C77E8567B, popSetHash, flags, p2, p3, p4, x, y, z)
```


---

## SET_POPZONE_POPULATION_SET

| Property | Value |
|----------|-------|
| Native Name | `SET_POPZONE_POPULATION_SET` |
| Hash | `0x3E6A49D9B519E85C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `popZone` (PopZone), `populationSetHash` (Hash) |

### Parameters

- **`popZone`** (`PopZone`)
- **`populationSetHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPopzonePopulationSet(popZone, populationSetHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3E6A49D9B519E85C, popZone, populationSetHash)
```


---

## SET_SPAWNER_INFO_PRIORITY

| Property | Value |
|----------|-------|
| Native Name | `SET_SPAWNER_INFO_PRIORITY` |
| Hash | `0x60CDE717A6D47769` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (Hash), `priority` (int) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`Hash`)
- **`priority`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetSpawnerInfoPriority(p0, p1, priority)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x60CDE717A6D47769, p0, p1, priority)
```


---

## _0x08892122769770D5

| Property | Value |
|----------|-------|
| Native Name | `_0x08892122769770D5` |
| Hash | `0x08892122769770D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `popZone` (PopZone), `p1` (BOOL) |

### Parameters

- **`popZone`** (`PopZone`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x08892122769770D5(popZone, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x08892122769770D5, popZone, p1)
```


---

## _0x0F1861101C9A9944

| Property | Value |
|----------|-------|
| Native Name | `_0x0F1861101C9A9944` |
| Hash | `0x0F1861101C9A9944` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `popZone` (PopZone), `p1` (BOOL) |

### Parameters

- **`popZone`** (`PopZone`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x0F1861101C9A9944(popZone, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0F1861101C9A9944, popZone, p1)
```


---

## _0x2161278C6322F740

| Property | Value |
|----------|-------|
| Native Name | `_0x2161278C6322F740` |
| Hash | `0x2161278C6322F740` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `includeFlags` (int), `excludeFlags` (int), `p2` (int), `p3` (Hash), `p4` (int), `volume` (Volume) |

### Parameters

- **`includeFlags`** (`int`)
- **`excludeFlags`** (`int`)
- **`p2`** (`int`)
- **`p3`** (`Hash`)
- **`p4`** (`int`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
_0x2161278C6322F740(includeFlags, excludeFlags, p2, p3, p4, volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2161278C6322F740, includeFlags, excludeFlags, p2, p3, p4, volume)
```


---

## _0x247F86595D396344

| Property | Value |
|----------|-------|
| Native Name | `_0x247F86595D396344` |
| Hash | `0x247F86595D396344` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x247F86595D396344(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x247F86595D396344, p0)
```


---

## _0x2660E7720EDC4BD0

| Property | Value |
|----------|-------|
| Native Name | `_0x2660E7720EDC4BD0` |
| Hash | `0x2660E7720EDC4BD0` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2660E7720EDC4BD0(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2660E7720EDC4BD0, p0, p1, p2)
```


---

## _0x324AB2A68AD8AEE5

| Property | Value |
|----------|-------|
| Native Name | `_0x324AB2A68AD8AEE5` |
| Hash | `0x324AB2A68AD8AEE5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x324AB2A68AD8AEE5()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x324AB2A68AD8AEE5, )
```


---

## _0x578E2FA64E847C60

| Property | Value |
|----------|-------|
| Native Name | `_0x578E2FA64E847C60` |
| Hash | `0x578E2FA64E847C60` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `popZone` (PopZone), `p1` (int) |

### Parameters

- **`popZone`** (`PopZone`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x578E2FA64E847C60(popZone, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x578E2FA64E847C60, popZone, p1)
```


---

## _0x638FCFC6042A9473

| Property | Value |
|----------|-------|
| Native Name | `_0x638FCFC6042A9473` |
| Hash | `0x638FCFC6042A9473` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x638FCFC6042A9473(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x638FCFC6042A9473, p0, p1)
```


---

## _0x7E6BC0B94F5928F0

| Property | Value |
|----------|-------|
| Native Name | `_0x7E6BC0B94F5928F0` |
| Hash | `0x7E6BC0B94F5928F0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `popZone` (PopZone), `p1` (int), `p2` (int) |

### Parameters

- **`popZone`** (`PopZone`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x7E6BC0B94F5928F0(popZone, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7E6BC0B94F5928F0, popZone, p1, p2)
```


---

## _0x8EC7CD701F872F87

| Property | Value |
|----------|-------|
| Native Name | `_0x8EC7CD701F872F87` |
| Hash | `0x8EC7CD701F872F87` |
| Return Type | `void` |
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
_0x8EC7CD701F872F87(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8EC7CD701F872F87, p0, p1, p2, p3, p4, p5)
```


---

## _0xC4533E3E87125C9E

| Property | Value |
|----------|-------|
| Native Name | `_0xC4533E3E87125C9E` |
| Hash | `0xC4533E3E87125C9E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC4533E3E87125C9E(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC4533E3E87125C9E, p0)
```


---

## _0xDBBF12EA7C1029B2

| Property | Value |
|----------|-------|
| Native Name | `_0xDBBF12EA7C1029B2` |
| Hash | `0xDBBF12EA7C1029B2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xDBBF12EA7C1029B2(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDBBF12EA7C1029B2, p0, p1)
```


---

## _0xEC116EDB683AD479

**Description:** Only used for Special Event (XMAS).
_SET_P*

| Property | Value |
|----------|-------|
| Native Name | `_0xEC116EDB683AD479` |
| Hash | `0xEC116EDB683AD479` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xEC116EDB683AD479(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEC116EDB683AD479, p0)
```


---

## _0xF45E46DEECF7DF6E

| Property | Value |
|----------|-------|
| Native Name | `_0xF45E46DEECF7DF6E` |
| Hash | `0xF45E46DEECF7DF6E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `bitFlag` (int), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`bitFlag`** (`int`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xF45E46DEECF7DF6E(bitFlag, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF45E46DEECF7DF6E, bitFlag, p1, p2, p3, p4)
```


---

## _ADD_AMBIENT_AVOIDANCE_RESTRICTION

**Description:** flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/PedFilterFlags

| Property | Value |
|----------|-------|
| Native Name | `_ADD_AMBIENT_AVOIDANCE_RESTRICTION` |
| Hash | `0xB56D41A694E42E86` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `includeFlags` (int), `excludeFlags` (int), `p3` (Hash), `p4` (Hash), `p5` (Hash), `p6` (int) |

### Parameters

- **`volume`** (`Volume`)
- **`includeFlags`** (`int`)
- **`excludeFlags`** (`int`)
- **`p3`** (`Hash`)
- **`p4`** (`Hash`)
- **`p5`** (`Hash`)
- **`p6`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddAmbientAvoidanceRestriction(volume, includeFlags, excludeFlags, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB56D41A694E42E86, volume, includeFlags, excludeFlags, p3, p4, p5, p6)
```


---

## _ADD_AMBIENT_SPAWN_RESTRICTION

**Description:** flags: see 0xB56D41A694E42E86

| Property | Value |
|----------|-------|
| Native Name | `_ADD_AMBIENT_SPAWN_RESTRICTION` |
| Hash | `0x18262CAFEBB5FBE1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `includeFlags` (int), `excludeFlags` (int), `p3` (Hash), `p4` (Hash), `p5` (Hash), `p6` (int) |

### Parameters

- **`volume`** (`Volume`)
- **`includeFlags`** (`int`)
- **`excludeFlags`** (`int`)
- **`p3`** (`Hash`)
- **`p4`** (`Hash`)
- **`p5`** (`Hash`)
- **`p6`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddAmbientSpawnRestriction(volume, includeFlags, excludeFlags, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x18262CAFEBB5FBE1, volume, includeFlags, excludeFlags, p3, p4, p5, p6)
```


---

## _CREATE_POPZONE_FROM_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_POPZONE_FROM_VOLUME` |
| Hash | `0x9AC1C64FE46B6D09` |
| Return Type | `PopZone` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePopzoneFromVolume(volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9AC1C64FE46B6D09, volume)
```


---

## _DELETE_SCRIPT_POPZONE

| Property | Value |
|----------|-------|
| Native Name | `_DELETE_SCRIPT_POPZONE` |
| Hash | `0xA6E6A66FC4CA4224` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `popZone` (PopZone) |

### Parameters

- **`popZone`** (`PopZone`)

### Usage

**Lua (Direct):**
```lua
DeleteScriptPopzone(popZone)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA6E6A66FC4CA4224, popZone)
```


---

## _GET_RANDOM_FISH_TYPE_FOR_LOCATION

**Description:** Returns model hash of the closest fish

| Property | Value |
|----------|-------|
| Native Name | `_GET_RANDOM_FISH_TYPE_FOR_LOCATION` |
| Hash | `0x595478B3BBC3076D` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetRandomFishTypeForLocation()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x595478B3BBC3076D, )
```


---

## _IS_POPZONE_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_POPZONE_VALID` |
| Hash | `0xA5BD585005EFCAD4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `popZone` (PopZone) |

### Parameters

- **`popZone`** (`PopZone`)

### Usage

**Lua (Direct):**
```lua
local result = IsPopzoneValid(popZone)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA5BD585005EFCAD4, popZone)
```


---

## _REMOVE_AMBIENT_AVOIDANCE_RESTRICTION

**Description:** flags: see 0xB56D41A694E42E86

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_AMBIENT_AVOIDANCE_RESTRICTION` |
| Hash | `0x74C2B3DC0B294102` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
RemoveAmbientAvoidanceRestriction(volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74C2B3DC0B294102, volume)
```


---

## _REMOVE_AMBIENT_SPAWN_RESTRICTION

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_AMBIENT_SPAWN_RESTRICTION` |
| Hash | `0xA1CFB35069D23C23` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
RemoveAmbientSpawnRestriction(volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA1CFB35069D23C23, volume)
```


---

## _SET_PED_SHOULD_IGNORE_AVOIDANCE_VOLUMES

**Description:** Params: p1 = 1 & 2 in R* Scripts, 0 = Disable avoidance, 1 = Enabled avoidance, 2 = Enabled avoidance (?)

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_SHOULD_IGNORE_AVOIDANCE_VOLUMES` |
| Hash | `0xF74E134F40192884` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedShouldIgnoreAvoidanceVolumes(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF74E134F40192884, ped, p1)
```


---

*End of POPULATION natives*
