# ZONE Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ZONE  
**Natives in this file:** 2  
**Generated from:** RDR3natives JSON data

---

## _GET_MAP_ZONE_AT_COORDS

**Description:** Returns name hash, see common:/data/levels/rdr3/mapzones.meta

type (-1 matches any type):
class CMapZone
{
public:
	enum class Type
	{
		STATE,
		TOWN,
		LAKE,
		RIVER,
		OIL_SPILL,
		SWAMP,
		OCEAN,
		CREEK,
		POND,
		GLACIER,
		DISTRICT,
		TEXT_PRINTED,
		TEXT_WRITTEN
	};
};

https://github.com/femga/rdr3_discoveries/tree/master/zones & https://alloc8or.re/rdr3/doc/enums/CMapZone__Type.txt

| Property | Value |
|----------|-------|
| Native Name | `_GET_MAP_ZONE_AT_COORDS` |
| Hash | `0x43AD8FC02B429D33` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `type` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`type`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetMapZoneAtCoords(x, y, z, type)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x43AD8FC02B429D33, x, y, z, type)
```


---

## _GET_WATER_MAP_ZONE_AT_COORDS

**Description:** Returns the zone's name hash if its type matches one of the following:
- LAKE
- RIVER
- OIL_SPILL
- SWAMP
- OCEAN
- CREEK
- POND
- GLACIER

| Property | Value |
|----------|-------|
| Native Name | `_GET_WATER_MAP_ZONE_AT_COORDS` |
| Hash | `0x5BA7A68A346A5A91` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetWaterMapZoneAtCoords(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5BA7A68A346A5A91, x, y, z)
```


---

*End of ZONE natives*
