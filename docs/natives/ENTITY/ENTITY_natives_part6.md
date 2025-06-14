# ENTITY Natives - Part 6 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ENTITY  
**Natives in this file:** 18  
**Total natives in namespace:** 268  
**Generated from:** RDR3natives JSON data

---

## _IS_ENTITY_PLAYING_ANY_ANIM

**Description:** Params: p1 (probably animType) = 1, 0

| Property | Value |
|----------|-------|
| Native Name | `_IS_ENTITY_PLAYING_ANY_ANIM` |
| Hash | `0x0B7CB1300CBFE19C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityPlayingAnyAnim(entity, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0B7CB1300CBFE19C, entity, p1)
```


---

## _IS_ENTITY_UNDERWATER

| Property | Value |
|----------|-------|
| Native Name | `_IS_ENTITY_UNDERWATER` |
| Hash | `0xD4E5C1E93C466127` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityUnderwater(entity, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD4E5C1E93C466127, entity, p1)
```


---

## _IS_TRACKED_ENTITY_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `_IS_TRACKED_ENTITY_VISIBLE` |
| Hash | `0xC8CCDB712FBCBA92` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsTrackedEntityVisible(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC8CCDB712FBCBA92, entity)
```


---

## _PAUSE_ENTITY_TRACKING

| Property | Value |
|----------|-------|
| Native Name | `_PAUSE_ENTITY_TRACKING` |
| Hash | `0x36EB4D34D4A092C5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `pause` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`pause`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PauseEntityTracking(entity, pause)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x36EB4D34D4A092C5, entity, pause)
```


---

## _REQUEST_ENTITY_LOOT_LIST

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_ENTITY_LOOT_LIST` |
| Hash | `0xA88E215CEB0435C0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `mount` (Ped), `argStruct` (Any*), `visiblelootslotrequestType` (Hash), `flag` (int), `p4` (int), `p5` (BOOL) |

### Parameters

- **`mount`** (`Ped`)
- **`argStruct`** (`Any*`)
- **`visiblelootslotrequestType`** (`Hash`)
- **`flag`** (`int`)
- **`p4`** (`int`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = RequestEntityLootList(mount, argStruct, visiblelootslotrequestType, flag, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA88E215CEB0435C0, mount, argStruct, visiblelootslotrequestType, flag, p4, p5)
```


---

## _SEARCH_BUILDING_POOL_FOR_ENTITY_WITH_THIS_MODEL

**Description:** Alternative Name: _GET_ENTITY_FROM_MAP_OBJECT; You can get existing objects and manipulate them using this native.

| Property | Value |
|----------|-------|
| Native Name | `_SEARCH_BUILDING_POOL_FOR_ENTITY_WITH_THIS_MODEL` |
| Hash | `0x66B2B83B94B22458` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `modelHash` (Hash) |

### Parameters

- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = SearchBuildingPoolForEntityWithThisModel(modelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x66B2B83B94B22458, modelHash)
```


---

## _SET_ENTITY_ANIM_CURRENT_TIME

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_ANIM_CURRENT_TIME` |
| Hash | `0x11CDABDC7783B2BC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `animDict` (const char*), `animName` (const char*), `time` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`animDict`** (`const char*`)
- **`animName`** (`const char*`)
- **`time`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetEntityAnimCurrentTime(entity, animDict, animName, time)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x11CDABDC7783B2BC, entity, animDict, animName, time)
```


---

## _SET_ENTITY_ANIM_SPEED

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_ANIM_SPEED` |
| Hash | `0xEAA885BA3CEA4E4A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `animDict` (const char*), `animName` (const char*), `speedMultiplier` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`animDict`** (`const char*`)
- **`animName`** (`const char*`)
- **`speedMultiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetEntityAnimSpeed(entity, animDict, animName, speedMultiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEAA885BA3CEA4E4A, entity, animDict, animName, speedMultiplier)
```


---

## _SET_ENTITY_CARCASS_TYPE

**Description:** Changes type and quality of skins
type hashes: https://pastebin.com/C1WvQjCy

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_CARCASS_TYPE` |
| Hash | `0x399657ED871B3A6C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `type` (Hash) |

### Parameters

- **`entity`** (`Entity`)
- **`type`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetEntityCarcassType(entity, type)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x399657ED871B3A6C, entity, type)
```


---

## _SET_ENTITY_CARRYING_FLAG

**Description:** flagId: https://github.com/femga/rdr3_discoveries/tree/master/AI/CARRYING_FLAGS
https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CCarryingFlags__Flags

enum eCarryingFlag
{
	CARRYING_FLAG_CAN_BE_CUT_FREE = 1,
	CARRYING_FLAG_CAN_BE_CARRIED_ON_FOOT = 2,
	CARRYING_FLAG_CAN_BE_DROPPED = 4,
	CARRYING_FLAG_CAN_BE_CARRIED_WHEN_DEAD = 7,
	CARRYING_FLAG_CAN_CARRY_ANYTHING = 9,
	CARRYING_FLAG_DISABLE_PROMPT_LOS_CHECKS = 19,
	CARRYING_FLAG_FORCE_ALLOW_WARP_TO_SAFE_GROUND_LOCATION = 23,
	CARRYING_FLAG_PICKUPS_IGNORE_HEIGHT_RESTRICTIONS = 26,
	CARRYING_FLAG_CLEAN_UP_WHEN_NOT_CARRIED = 27,
	CARRYING_FLAG_BLOCK_KNOCK_OFF_PED_VARIATIONS_FROM_CARRIABLE_INTERACTIONS = 29,
	CARRYING_FLAG_HIT_WHEN_CARRIABLE = 31,
	CARRYING_FLAG_DISABLE_CARRIABLE_INTERACTIONS_ON_THIS_MOUNT = 34,
	CARRYING_FLAG_FORCE_HIDE_PROMPT_GROUP = 37,
};

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_CARRYING_FLAG` |
| Hash | `0x18FF3110CF47115D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `flagId` (int), `value` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`flagId`** (`int`)
- **`value`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityCarryingFlag(entity, flagId, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x18FF3110CF47115D, entity, flagId, value)
```


---

## _SET_ENTITY_COORDS_AND_HEADING

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_COORDS_AND_HEADING` |
| Hash | `0x203BEFFDBE12E96A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `xPos` (float), `yPos` (float), `zPos` (float), `heading` (float), `xAxis` (BOOL), `yAxis` (BOOL), `zAxis` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`heading`** (`float`)
- **`xAxis`** (`BOOL`)
- **`yAxis`** (`BOOL`)
- **`zAxis`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityCoordsAndHeading(entity, xPos, yPos, zPos, heading, xAxis, yAxis, zAxis)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x203BEFFDBE12E96A, entity, xPos, yPos, zPos, heading, xAxis, yAxis, zAxis)
```


---

## _SET_ENTITY_COORDS_AND_HEADING_NO_OFFSET

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_COORDS_AND_HEADING_NO_OFFSET` |
| Hash | `0x0918E3565C20F03C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `xPos` (float), `yPos` (float), `zPos` (float), `heading` (float), `p5` (BOOL), `p6` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`heading`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityCoordsAndHeadingNoOffset(entity, xPos, yPos, zPos, heading, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0918E3565C20F03C, entity, xPos, yPos, zPos, heading, p5, p6)
```


---

## _SET_ENTITY_CUSTOM_PICKUP_RADIUS

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_CUSTOM_PICKUP_RADIUS` |
| Hash | `0x482D17E45665DA44` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `radius` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetEntityCustomPickupRadius(entity, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x482D17E45665DA44, entity, radius)
```


---

## _SET_ENTITY_FADE_IN

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_FADE_IN` |
| Hash | `0xA91E6CF94404E8C9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
SetEntityFadeIn(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA91E6CF94404E8C9, entity)
```


---

## _SET_ENTITY_FULLY_LOOTED

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_FULLY_LOOTED` |
| Hash | `0x6BCF5F3D8FFE988D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `looted` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`looted`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityFullyLooted(entity, looted)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6BCF5F3D8FFE988D, entity, looted)
```


---

## _SET_ENTITY_LIGHTS_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_LIGHTS_ENABLED` |
| Hash | `0xEBDC12861D079ABA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `enabled` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityLightsEnabled(entity, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEBDC12861D079ABA, entity, enabled)
```


---

## _SET_ENTITY_THREAT_TIER

**Description:** tier: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eEntityThreatTier

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_THREAT_TIER` |
| Hash | `0x4B436BAC8CBE9B07` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `tier` (int), `p2` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`tier`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityThreatTier(entity, tier, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4B436BAC8CBE9B07, entity, tier, p2)
```


---

## _UNPIN_MAP_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_UNPIN_MAP_ENTITY` |
| Hash | `0xD2B9C78537ED5759` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
UnpinMapEntity(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD2B9C78537ED5759, entity)
```


---

*End of ENTITY natives part 6*
