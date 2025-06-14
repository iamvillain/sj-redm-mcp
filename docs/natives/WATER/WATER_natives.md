# WATER Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** WATER  
**Natives in this file:** 17  
**Generated from:** RDR3natives JSON data

---

## DISABLE_WATER_LOOKUP

**Description:** Must be called every frame to take full effect.

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_WATER_LOOKUP` |
| Hash | `0x754616EC6965D1FB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
DisableWaterLookup()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x754616EC6965D1FB, )
```


---

## ENABLE_WATER_LOOKUP

| Property | Value |
|----------|-------|
| Native Name | `ENABLE_WATER_LOOKUP` |
| Hash | `0x754616EC6965D1BF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
EnableWaterLookup()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x754616EC6965D1BF, )
```


---

## GET_WATER_HEIGHT

**Description:** Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If that is set to one it will fail. Likely not the only issue but part of it.

| Property | Value |
|----------|-------|
| Native Name | `GET_WATER_HEIGHT` |
| Hash | `0xFCA8B23F28813F69` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `height` (float*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`height`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = GetWaterHeight(x, y, z, height)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFCA8B23F28813F69, x, y, z, height)
```


---

## GET_WATER_HEIGHT_NO_WAVES

| Property | Value |
|----------|-------|
| Native Name | `GET_WATER_HEIGHT_NO_WAVES` |
| Hash | `0xDCF3690AA262C03F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `height` (float*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`height`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = GetWaterHeightNoWaves(x, y, z, height)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDCF3690AA262C03F, x, y, z, height)
```


---

## REMOVE_EXTRA_CALMING_QUAD

**Description:** Only used in rcm_crackpot1 R* Script: p0 = 0

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_EXTRA_CALMING_QUAD` |
| Hash | `0x4BEF8DD75AF6C71C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemoveExtraCalmingQuad(index)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4BEF8DD75AF6C71C, index)
```


---

## TEST_PROBE_AGAINST_ALL_WATER

**Description:** enum eScriptWaterTestResult
{
	SCRIPT_WATER_TEST_RESULT_NONE,
	SCRIPT_WATER_TEST_RESULT_WATER,
	SCRIPT_WATER_TEST_RESULT_BLOCKED,
};

| Property | Value |
|----------|-------|
| Native Name | `TEST_PROBE_AGAINST_ALL_WATER` |
| Hash | `0x8974647ED222EA5F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `flags` (int), `intersectionPos` (Vector3*) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`flags`** (`int`)
- **`intersectionPos`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
local result = TestProbeAgainstAllWater(x1, y1, z1, x2, y2, z2, flags, intersectionPos)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8974647ED222EA5F, x1, y1, z1, x2, y2, z2, flags, intersectionPos)
```


---

## TEST_VERTICAL_PROBE_AGAINST_ALL_WATER

**Description:** Checks against a global variable that is set by _SET_WORLD_WATER_TYPE. If it's set to 1 (Guarma) it will fail.

See TEST_PROBE_AGAINST_ALL_WATER.

| Property | Value |
|----------|-------|
| Native Name | `TEST_VERTICAL_PROBE_AGAINST_ALL_WATER` |
| Hash | `0x2B3451FA1E3142E2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `flags` (int), `waterHeight` (float*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`flags`** (`int`)
- **`waterHeight`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = TestVerticalProbeAgainstAllWater(x, y, z, flags, waterHeight)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2B3451FA1E3142E2, x, y, z, flags, waterHeight)
```


---

## _0x09A1C7DFDCE54FBC

**Description:** Called together with REMOVE_EXTRA_CALMING_QUAD in rcm_crackpot1 R* Script: p0 = 0
_REMOVE_*

| Property | Value |
|----------|-------|
| Native Name | `_0x09A1C7DFDCE54FBC` |
| Hash | `0x09A1C7DFDCE54FBC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x09A1C7DFDCE54FBC(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x09A1C7DFDCE54FBC, p0)
```


---

## _0x0DCEC6A92E497E17

**Description:** Only used in native_son1 R* Script: p1 = 1

| Property | Value |
|----------|-------|
| Native Name | `_0x0DCEC6A92E497E17` |
| Hash | `0x0DCEC6A92E497E17` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x0DCEC6A92E497E17(entity, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0DCEC6A92E497E17, entity, p1)
```


---

## _0xA33F5069B0CB89B8

**Description:** Only used in fishing_core R* Script

| Property | Value |
|----------|-------|
| Native Name | `_0xA33F5069B0CB89B8` |
| Hash | `0xA33F5069B0CB89B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xA33F5069B0CB89B8()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA33F5069B0CB89B8, )
```


---

## _0xB34A6009A0DB80B8

**Description:** Used in bounty1, fanale3, sean1 R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0xB34A6009A0DB80B8` |
| Hash | `0xB34A6009A0DB80B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
_0xB34A6009A0DB80B8(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB34A6009A0DB80B8, entity)
```


---

## _0xE8126623008372AA

**Description:** Only used in fussar1 / train_robbery2 R* Script

| Property | Value |
|----------|-------|
| Native Name | `_0xE8126623008372AA` |
| Hash | `0xE8126623008372AA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xE8126623008372AA()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE8126623008372AA, )
```


---

## _0xF0FBF193F1F5C0EA

**Description:** Only used in fishing_core R* Script

| Property | Value |
|----------|-------|
| Native Name | `_0xF0FBF193F1F5C0EA` |
| Hash | `0xF0FBF193F1F5C0EA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0xF0FBF193F1F5C0EA(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF0FBF193F1F5C0EA, ped)
```


---

## _GET_WORLD_WATER_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_GET_WORLD_WATER_TYPE` |
| Hash | `0x189739A7631C1867` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetWorldWaterType()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x189739A7631C1867, )
```


---

## _RESET_GUARMA_WATER_STATE

**Description:** Only used in guama1 / guama3 R* Script
_REQUEST_* or _RESET_*

| Property | Value |
|----------|-------|
| Native Name | `_RESET_GUARMA_WATER_STATE` |
| Hash | `0xC63540AEF8384769` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetGuarmaWaterState()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC63540AEF8384769, )
```


---

## _SET_OCEAN_GUARMA_WATER_QUADRANT

**Description:** Only used in R* Script guama1 this native allows to modify the ocean water in the guarma island. wave direction accepts 0, 1 and 2 values.

| Property | Value |
|----------|-------|
| Native Name | `_SET_OCEAN_GUARMA_WATER_QUADRANT` |
| Hash | `0xC63540AEF8384732` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `wavesHeight` (float), `p1` (float), `waveDirection` (int), `p3` (float), `waveAmmount` (float), `p5` (float), `waveSpeed` (float), `wavesStrength` (float), `p8` (int) |

### Parameters

- **`wavesHeight`** (`float`)
- **`p1`** (`float`)
- **`waveDirection`** (`int`)
- **`p3`** (`float`)
- **`waveAmmount`** (`float`)
- **`p5`** (`float`)
- **`waveSpeed`** (`float`)
- **`wavesStrength`** (`float`)
- **`p8`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetOceanGuarmaWaterQuadrant(wavesHeight, p1, waveDirection, p3, waveAmmount, p5, waveSpeed, wavesStrength, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC63540AEF8384732, wavesHeight, p1, waveDirection, p3, waveAmmount, p5, waveSpeed, wavesStrength, p8)
```


---

## _SET_WORLD_WATER_TYPE

**Description:** 0 = World
1 = Guarma

| Property | Value |
|----------|-------|
| Native Name | `_SET_WORLD_WATER_TYPE` |
| Hash | `0xE8770EE02AEE45C2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `waterType` (int) |

### Parameters

- **`waterType`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetWorldWaterType(waterType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE8770EE02AEE45C2, waterType)
```


---

*End of WATER natives*
