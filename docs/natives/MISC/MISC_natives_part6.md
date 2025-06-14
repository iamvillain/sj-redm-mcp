# MISC Natives - Part 6 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** MISC  
**Natives in this file:** 38  
**Total natives in namespace:** 288  
**Generated from:** RDR3natives JSON data

---

## _GET_STRING_FROM_BOOL

| Property | Value |
|----------|-------|
| Native Name | `_GET_STRING_FROM_BOOL` |
| Hash | `0xF216F74101968DB0` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `value` (BOOL) |

### Parameters

- **`value`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetStringFromBool(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF216F74101968DB0, value)
```


---

## _GET_STRING_FROM_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `_GET_STRING_FROM_FLOAT` |
| Hash | `0x2B6846401D68E563` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `value` (float), `digits` (int) |

### Parameters

- **`value`** (`float`)
- **`digits`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetStringFromFloat(value, digits)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2B6846401D68E563, value, digits)
```


---

## _GET_STRING_FROM_VECTOR

**Description:** Returns a string in the following format: <<%.4f,%.4f,%.4f>>

| Property | Value |
|----------|-------|
| Native Name | `_GET_STRING_FROM_VECTOR` |
| Hash | `0x6C4DBF553885F9EB` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetStringFromVector(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6C4DBF553885F9EB, x, y, z)
```


---

## _GET_TEMPERATURE_AT_COORDS

| Property | Value |
|----------|-------|
| Native Name | `_GET_TEMPERATURE_AT_COORDS` |
| Hash | `0xB98B78C3768AF6E0` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetTemperatureAtCoords(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB98B78C3768AF6E0, x, y, z)
```


---

## _GET_VEHICLE_FROM_INDEXED_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_FROM_INDEXED_ITEM` |
| Hash | `0xE578C8AE173719B3` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `item` (ScrHandle) |

### Parameters

- **`item`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleFromIndexedItem(item)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE578C8AE173719B3, item)
```


---

## _GET_VOLUME_FROM_INDEXED_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_GET_VOLUME_FROM_INDEXED_ITEM` |
| Hash | `0xF18AF483DF70BBDE` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `item` (ScrHandle) |

### Parameters

- **`item`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVolumeFromIndexedItem(item)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF18AF483DF70BBDE, item)
```


---

## _INT_TO_STRING

**Description:** Note: the buffer should be exactly 32 bytes long

| Property | Value |
|----------|-------|
| Native Name | `_INT_TO_STRING` |
| Hash | `0xCF11C0CEB40C401B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `value` (int), `format` (const char*), `buffer` (char*) |

### Parameters

- **`value`** (`int`)
- **`format`** (`const char*`)
- **`buffer`** (`char*`)

### Usage

**Lua (Direct):**
```lua
IntToString(value, format, buffer)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCF11C0CEB40C401B, value, format, buffer)
```


---

## _IS_ANY_BIT_FLAG_SET

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANY_BIT_FLAG_SET` |
| Hash | `0x80E9C316EF84DD81` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `bitFlags` (Any*) |

### Parameters

- **`bitFlags`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnyBitFlagSet(bitFlags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x80E9C316EF84DD81, bitFlags)
```


---

## _IS_BASE_A_COVER_POINT

| Property | Value |
|----------|-------|
| Native Name | `_IS_BASE_A_COVER_POINT` |
| Hash | `0xFEC1D4B5C82C176F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `handle` (ScrHandle) |

### Parameters

- **`handle`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
local result = IsBaseACoverPoint(handle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFEC1D4B5C82C176F, handle)
```


---

## _IS_BASE_A_PERSISTENT_CHARACTER

| Property | Value |
|----------|-------|
| Native Name | `_IS_BASE_A_PERSISTENT_CHARACTER` |
| Hash | `0x716F17F8A0419F95` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `handle` (ScrHandle) |

### Parameters

- **`handle`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
local result = IsBaseAPersistentCharacter(handle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x716F17F8A0419F95, handle)
```


---

## _IS_BIT_FLAG_SET

| Property | Value |
|----------|-------|
| Native Name | `_IS_BIT_FLAG_SET` |
| Hash | `0x8F4F050054005C27` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `bitFlags` (Any*), `flag` (int) |

### Parameters

- **`bitFlags`** (`Any*`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsBitFlagSet(bitFlags, flag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8F4F050054005C27, bitFlags, flag)
```


---

## _IS_GLOBAL_BLOCK_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_GLOBAL_BLOCK_VALID` |
| Hash | `0xACB7E1418A8B6E32` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsGlobalBlockValid(index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xACB7E1418A8B6E32, index)
```


---

## _IS_MISSION_CREATOR_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_IS_MISSION_CREATOR_ACTIVE` |
| Hash | `0xF236C84C6ADFCB2F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsMissionCreatorActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF236C84C6ADFCB2F, )
```


---

## _IS_PED_DECOMPOSED

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_DECOMPOSED` |
| Hash | `0x5170DDA6D63ACAAA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedDecomposed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5170DDA6D63ACAAA, ped)
```


---

## _IS_PLAYER_OWNING_STANDALONE_SP

| Property | Value |
|----------|-------|
| Native Name | `_IS_PLAYER_OWNING_STANDALONE_SP` |
| Hash | `0x36040772DF5E59A0` |
| Return Type | `BOOL` |
| Build | `1355` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerOwningStandaloneSp()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x36040772DF5E59A0, )
```


---

## _LOOT_TABLES_GET_INFO

| Property | Value |
|----------|-------|
| Native Name | `_LOOT_TABLES_GET_INFO` |
| Hash | `0x48E4D50F87A96AA5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL), `lootTableKey` (Hash), `p4` (Any*), `p5` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`lootTableKey`** (`Hash`)
- **`p4`** (`Any*`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
LootTablesGetInfo(ped, p1, p2, lootTableKey, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x48E4D50F87A96AA5, ped, p1, p2, lootTableKey, p4, p5)
```


---

## _QUEUE_SAVEGAME_OPERATION

**Description:** p0 must be < 2

| Property | Value |
|----------|-------|
| Native Name | `_QUEUE_SAVEGAME_OPERATION` |
| Hash | `0x279B0696DA4657EB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = QueueSavegameOperation(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x279B0696DA4657EB, p0)
```


---

## _READ_INT_AS_FLOAT

**Description:** Reads the passed value as floating point value and returns it.
Example: _READ_INT_AS_FLOAT(0x3F800000) returns 1.0f because 0x3F800000 is the hexadecimal representation of 1.0f.

| Property | Value |
|----------|-------|
| Native Name | `_READ_INT_AS_FLOAT` |
| Hash | `0xD2C9126410DFA1B2` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `value` (int) |

### Parameters

- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ReadIntAsFloat(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD2C9126410DFA1B2, value)
```


---

## _REMOVE_POP_MULTIPLIER_AREA_FOR_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_POP_MULTIPLIER_AREA_FOR_VOLUME` |
| Hash | `0xBD090F5B1DB82189` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `p1` (int) |

### Parameters

- **`volume`** (`Volume`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemovePopMultiplierAreaForVolume(volume, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBD090F5B1DB82189, volume, p1)
```


---

## _RESET_DISPATCH_MAX_SPAWN_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `_RESET_DISPATCH_MAX_SPAWN_DISTANCE` |
| Hash | `0x54EC7B6BC72BAD69` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetDispatchMaxSpawnDistance()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x54EC7B6BC72BAD69, )
```


---

## _RESET_DISPATCH_MIN_SPAWN_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `_RESET_DISPATCH_MIN_SPAWN_DISTANCE` |
| Hash | `0x96498D922D8D0D0A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetDispatchMinSpawnDistance()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x96498D922D8D0D0A, )
```


---

## _SET_AI_MEMORY_REACTIONS_ENABLED

**Description:** Used in CAIConditionAmbientAIMemoryReactionsEnabled

| Property | Value |
|----------|-------|
| Native Name | `_SET_AI_MEMORY_REACTIONS_ENABLED` |
| Hash | `0x6AC4AF46A6B8DFB2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `enabled` (BOOL) |

### Parameters

- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAiMemoryReactionsEnabled(enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6AC4AF46A6B8DFB2, enabled)
```


---

## _SET_BIT_FLAG

**Description:** Similar to SET_BIT but specifically designed for large (>32 flags) bit flag sets.
The flags are stored in an int array where each int has the ability to hold 32 flags.
Flags 0-31 would be stored in the first int, flags 32-63 in the second int, etc.

| Property | Value |
|----------|-------|
| Native Name | `_SET_BIT_FLAG` |
| Hash | `0xE84AAC1B22A73E99` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `bitFlags` (Any*), `flag` (int) |

### Parameters

- **`bitFlags`** (`Any*`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetBitFlag(bitFlags, flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE84AAC1B22A73E99, bitFlags, flag)
```


---

## _SET_DISPATCH_MAX_SPAWN_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `_SET_DISPATCH_MAX_SPAWN_DISTANCE` |
| Hash | `0x89314FB3463E28DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `maxSpawnDistance` (float) |

### Parameters

- **`maxSpawnDistance`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDispatchMaxSpawnDistance(maxSpawnDistance)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x89314FB3463E28DE, maxSpawnDistance)
```


---

## _SET_DISPATCH_MIN_SPAWN_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `_SET_DISPATCH_MIN_SPAWN_DISTANCE` |
| Hash | `0x27A1B170AA8AF84C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `minSpawnDistance` (float) |

### Parameters

- **`minSpawnDistance`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDispatchMinSpawnDistance(minSpawnDistance)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x27A1B170AA8AF84C, minSpawnDistance)
```


---

## _SET_GAME_LOGIC_PAUSED

**Description:** Note: this native was added in build 1232.56

| Property | Value |
|----------|-------|
| Native Name | `_SET_GAME_LOGIC_PAUSED` |
| Hash | `0x550F05CFFBD63C8C` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetGameLogicPaused()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x550F05CFFBD63C8C, )
```


---

## _SET_GLOBAL_BLOCK_IS_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_SET_GLOBAL_BLOCK_IS_LOADED` |
| Hash | `0xE97240065406CB80` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `index` (int), `toggle` (BOOL) |

### Parameters

- **`index`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetGlobalBlockIsLoaded(index, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE97240065406CB80, index, toggle)
```


---

## _SET_INCIDENT_UNK

| Property | Value |
|----------|-------|
| Native Name | `_SET_INCIDENT_UNK` |
| Hash | `0x9617B6E5F6537B63` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `incidentId` (int) |

### Parameters

- **`incidentId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetIncidentUnk(incidentId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9617B6E5F6537B63, incidentId)
```


---

## _SET_LOOT_PELT_SATCHEL_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_SET_LOOT_PELT_SATCHEL_ITEM` |
| Hash | `0x9B47971234169990` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `item` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`item`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetLootPeltSatchelItem(ped, item)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9B47971234169990, ped, item)
```


---

## _SET_OVERRIDE_WEATHER

| Property | Value |
|----------|-------|
| Native Name | `_SET_OVERRIDE_WEATHER` |
| Hash | `0xBE83CAE8ED77A94F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weatherType` (Hash) |

### Parameters

- **`weatherType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetOverrideWeather(weatherType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBE83CAE8ED77A94F, weatherType)
```


---

## _SET_SNOW_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `_SET_SNOW_LEVEL` |
| Hash | `0xF6BEE7E80EC5CA40` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `level` (float) |

### Parameters

- **`level`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetSnowLevel(level)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF6BEE7E80EC5CA40, level)
```


---

## _SET_WEATHER_TYPE_2

| Property | Value |
|----------|-------|
| Native Name | `_SET_WEATHER_TYPE_2` |
| Hash | `0x2C6A07AF9AEDABD8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weatherType` (Hash), `p1` (int), `p2` (int), `p3` (int), `p4` (BOOL) |

### Parameters

- **`weatherType`** (`Hash`)
- **`p1`** (`int`)
- **`p2`** (`int`)
- **`p3`** (`int`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetWeatherType2(weatherType, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2C6A07AF9AEDABD8, weatherType, p1, p2, p3, p4)
```


---

## _SET_WEATHER_TYPE_FROZEN

| Property | Value |
|----------|-------|
| Native Name | `_SET_WEATHER_TYPE_FROZEN` |
| Hash | `0xD74ACDF7DB8114AF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetWeatherTypeFrozen(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD74ACDF7DB8114AF, toggle)
```


---

## _SET_WEATHER_VARIATION

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/weather/weather_variations.lua

| Property | Value |
|----------|-------|
| Native Name | `_SET_WEATHER_VARIATION` |
| Hash | `0x3373779BAF7CAF48` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weatherType` (char*), `variation` (char*) |

### Parameters

- **`weatherType`** (`char*`)
- **`variation`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetWeatherVariation(weatherType, variation)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3373779BAF7CAF48, weatherType, variation)
```


---

## _SHOULD_USE_24_HOUR_CLOCK

| Property | Value |
|----------|-------|
| Native Name | `_SHOULD_USE_24_HOUR_CLOCK` |
| Hash | `0x0177CF20345F44DD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ShouldUse24HourClock()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0177CF20345F44DD, )
```


---

## _SHOULD_USE_METRIC_MEASUREMENTS_2

**Description:** Same as SHOULD_USE_METRIC_MEASUREMENTS

| Property | Value |
|----------|-------|
| Native Name | `_SHOULD_USE_METRIC_MEASUREMENTS_2` |
| Hash | `0x58BCDC75BA52110A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ShouldUseMetricMeasurements2()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58BCDC75BA52110A, )
```


---

## _SHOULD_USE_METRIC_TEMPERATURE

| Property | Value |
|----------|-------|
| Native Name | `_SHOULD_USE_METRIC_TEMPERATURE` |
| Hash | `0xFF4AAF3275BAAB4F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ShouldUseMetricTemperature()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFF4AAF3275BAAB4F, )
```


---

## _SHOULD_USE_METRIC_WEIGHT

| Property | Value |
|----------|-------|
| Native Name | `_SHOULD_USE_METRIC_WEIGHT` |
| Hash | `0x8F24157FEDB85EA2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ShouldUseMetricWeight()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8F24157FEDB85EA2, )
```


---

*End of MISC natives part 6*
