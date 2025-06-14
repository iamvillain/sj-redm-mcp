# PED Natives - Part 16 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _GET_LAST_VEHICLE_DRAFT_HORSE_WAS_ATTACHED_TO

| Property | Value |
|----------|-------|
| Native Name | `_GET_LAST_VEHICLE_DRAFT_HORSE_WAS_ATTACHED_TO` |
| Hash | `0x5064DB5083C29921` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `horse` (Ped) |

### Parameters

- **`horse`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetLastVehicleDraftHorseWasAttachedTo(horse)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5064DB5083C29921, horse)
```


---

## _GET_LOOTING_FLAG

**Description:** lootFlag: see SET_LOOTING_FLAG

| Property | Value |
|----------|-------|
| Native Name | `_GET_LOOTING_FLAG` |
| Hash | `0xE4C11F104620DDCE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `lootFlag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`lootFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetLootingFlag(ped, lootFlag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE4C11F104620DDCE, ped, lootFlag)
```


---

## _GET_META_PED_TYPE

**Description:** enum eMetaPedType
{
	MPT_MALE,
	MPT_FEMALE,
	MPT_TEEN,
	MPT_ANIMAL,
	MPT_NONE
};

| Property | Value |
|----------|-------|
| Native Name | `_GET_META_PED_TYPE` |
| Hash | `0xEC9A1261BF0CE510` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetMetaPedType(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEC9A1261BF0CE510, ped)
```


---

## _GET_NUM_COMPONENTS_IN_PED

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_COMPONENTS_IN_PED` |
| Hash | `0x90403E8107B60E81` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumComponentsInPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x90403E8107B60E81, ped)
```


---

## _GET_NUM_COMPONENT_CATEGORIES_IN_PED

**Description:** Works similar to 0x90403E8107B60E81 (_GET_NUM_COMPONENTS_IN_PED) but is used to get category hashes instead

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_COMPONENT_CATEGORIES_IN_PED` |
| Hash | `0xA622E66EEE92A08D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumComponentCategoriesInPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA622E66EEE92A08D, ped)
```


---

## _GET_NUM_FREE_SLOTS_IN_PED_POOL

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_FREE_SLOTS_IN_PED_POOL` |
| Hash | `0x313778EDCA9158E2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetNumFreeSlotsInPedPool()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x313778EDCA9158E2, )
```


---

## _GET_NUM_RESERVED_AMBIENT_PEDS_DESIRED

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_RESERVED_AMBIENT_PEDS_DESIRED` |
| Hash | `0x62DE46F061CAA468` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetNumReservedAmbientPedsDesired()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x62DE46F061CAA468, )
```


---

## _GET_NUM_RESERVED_AMBIENT_PEDS_READY

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_RESERVED_AMBIENT_PEDS_READY` |
| Hash | `0x5C16855277819BBF` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetNumReservedAmbientPedsReady()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5C16855277819BBF, )
```


---

## _GET_NUM_RESERVED_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_RESERVED_HEALTH` |
| Hash | `0x16F2C8C084AB2092` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumReservedHealth(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x16F2C8C084AB2092, ped)
```


---

## _GET_PEDS_IN_COMBAT_WITH_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_GET_PEDS_IN_COMBAT_WITH_TARGET` |
| Hash | `0x7BE607DAFF382FD2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `itemset` (ItemSet), `flag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`itemset`** (`ItemSet`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedsInCombatWithTarget(ped, itemset, flag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7BE607DAFF382FD2, ped, itemset, flag)
```


---

## _GET_PED_ATTITUDE

**Description:** AI_ATTITUDE_NEUTRAL = 0,
AI_ATTITUDE_FRIENDLY,
AI_ATTITUDE_WARY,
AI_ATTITUDE_COMBATIVE,
AI_ATTITUDE_NEVER_MET

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_ATTITUDE` |
| Hash | `0x7CC2186C32D3540A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `player` (Player) |

### Parameters

- **`ped`** (`Ped`)
- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedAttitude(ped, player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7CC2186C32D3540A, ped, player)
```


---

## _GET_PED_BLACKBOARD_BOOL

**Description:** Can be used to get a peds foliage active status: variableName = FoliageActive

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_BLACKBOARD_BOOL` |
| Hash | `0x498F2E77982D6945` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedBlackboardBool(ped, variableName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x498F2E77982D6945, ped, variableName)
```


---

## _GET_PED_BLACKBOARD_FLOAT

**Description:** Can be used to get a peds foliage raw height: variableName = FoliageHeight

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_BLACKBOARD_FLOAT` |
| Hash | `0x56E58D4D118FB45E` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedBlackboardFloat(ped, variableName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x56E58D4D118FB45E, ped, variableName)
```


---

## _GET_PED_BLACKBOARD_HASH

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_BLACKBOARD_HASH` |
| Hash | `0xBF5E791BBBF90A3C` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedBlackboardHash(ped, variableName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBF5E791BBBF90A3C, ped, variableName)
```


---

## _GET_PED_BRAWLING_STYLE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_BRAWLING_STYLE` |
| Hash | `0xEC6B59BE445FEC51` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedBrawlingStyle(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEC6B59BE445FEC51, ped)
```


---

## _GET_PED_CAN_BE_INCAPACITATED_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_CAN_BE_INCAPACITATED_THIS_FRAME` |
| Hash | `0x7A4E00364B5D727B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedCanBeIncapacitatedThisFrame(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7A4E00364B5D727B, ped)
```


---

## _GET_PED_COMBAT_ATTRIBUTE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_COMBAT_ATTRIBUTE` |
| Hash | `0xCC2B20596E29E4E3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedCombatAttribute(ped, attributeIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCC2B20596E29E4E3, ped, attributeIndex)
```


---

## _GET_PED_COMPONENT_CATEGORY_BY_INDEX

**Description:** Returns category hash that each ped component has. Hash examples: MASKS, HATS, HEADS, HORSE_MANES

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_COMPONENT_CATEGORY_BY_INDEX` |
| Hash | `0xCCB97B51893C662F` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped), `index` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedComponentCategoryByIndex(ped, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCCB97B51893C662F, ped, index)
```


---

## _GET_PED_DAMAGED

**Description:** Returns true if _GET_PED_DAMAGE_CLEANLINESS was ever lower than 2

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_DAMAGED` |
| Hash | `0x6CFC373008A1EDAF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedDamaged(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6CFC373008A1EDAF, ped)
```


---

## _GET_PED_DAMAGE_CLEANLINESS

**Description:** enum ePedDamageCleanliness
{
	PED_DAMAGE_CLEANLINESS_POOR,
	PED_DAMAGE_CLEANLINESS_GOOD,
	PED_DAMAGE_CLEANLINESS_PERFECT
};

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_DAMAGE_CLEANLINESS` |
| Hash | `0x88EFFED5FE8B0B4A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedDamageCleanliness(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x88EFFED5FE8B0B4A, ped)
```


---

## _GET_PED_DEFENSIVE_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_DEFENSIVE_VOLUME` |
| Hash | `0xEF2E6F870783369B` |
| Return Type | `Volume` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedDefensiveVolume(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEF2E6F870783369B, ped, p1)
```


---

## _GET_PED_DRUNKNESS

**Description:** Returns ped drunk level
_H* or _I*

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_DRUNKNESS` |
| Hash | `0x6FB76442469ABD68` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedDrunkness(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6FB76442469ABD68, ped)
```


---

## _GET_PED_GRAPPLER

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_GRAPPLER` |
| Hash | `0xD0B7AEB56229D317` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedGrappler(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD0B7AEB56229D317, ped)
```


---

## _GET_PED_GRAPPLE_FLAG

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_GRAPPLE_FLAG` |
| Hash | `0xF3C873ED0C595109` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedGrappleFlag(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF3C873ED0C595109, ped)
```


---

## _GET_PED_GRAPPLE_STYLE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_GRAPPLE_STYLE` |
| Hash | `0x753B15AD0FD6F3E3` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedGrappleStyle(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x753B15AD0FD6F3E3, ped)
```


---

## _GET_PED_HEIGHT

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_HEIGHT` |
| Hash | `0x1D491CCF7211FB74` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedHeight(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1D491CCF7211FB74, ped)
```


---

## _GET_PED_ID_RANGE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_ID_RANGE` |
| Hash | `0x31167ED4324B758D` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedIdRange(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x31167ED4324B758D, ped)
```


---

## _GET_PED_INCAPACITATION_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_INCAPACITATION_HEALTH` |
| Hash | `0x89BFDF6D53145545` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedIncapacitationHealth(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x89BFDF6D53145545, ped)
```


---

## _GET_PED_INTERACTION_PERSONALITY

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_INTERACTION_PERSONALITY` |
| Hash | `0xD7AD3C7EBAF88C92` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedInteractionPersonality(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD7AD3C7EBAF88C92, ped)
```


---

## _GET_PED_LASSO_HOGTIE_FLAG

**Description:** https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/Lasso%20Hogtie%20Flags
https://github.com/femga/rdr3_discoveries/tree/master/AI/LASSO_HOGTIE_FLAG

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_LASSO_HOGTIE_FLAG` |
| Hash | `0x2C76FA0E01681F8D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flagId` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`flagId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedLassoHogtieFlag(ped, flagId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2C76FA0E01681F8D, ped, flagId)
```


---

## _GET_PED_LAST_DROPPED_HAT

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_LAST_DROPPED_HAT` |
| Hash | `0x1F714E7A9DADFC42` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedLastDroppedHat(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F714E7A9DADFC42, ped)
```


---

## _GET_PED_LOD_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_LOD_MULTIPLIER` |
| Hash | `0x1B710E6F4AB69341` |
| Return Type | `float` |
| Build | `1355` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedLodMultiplier(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1B710E6F4AB69341, ped)
```


---

## _GET_PED_MAX_STAMINA

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_MAX_STAMINA` |
| Hash | `0xCB42AFE2B613EE55` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedMaxStamina(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB42AFE2B613EE55, ped)
```


---

## _GET_PED_MELEE_ACTION_PHASE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_MELEE_ACTION_PHASE` |
| Hash | `0x6127F25ED21C533C` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedMeleeActionPhase(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6127F25ED21C533C, ped)
```


---

## _GET_PED_META_OUTFIT_HASH

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_META_OUTFIT_HASH` |
| Hash | `0x30569F348D126A5A` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedMetaOutfitHash(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x30569F348D126A5A, ped)
```


---

## _GET_PED_MODEL_SIZE_FROM_HASH

**Description:** PS_SMALL = 0,
PS_MEDIUM,
PS_MEDIUM_LARGE,
PS_LARGE,
PS_EXTRA_LARGE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_MODEL_SIZE_FROM_HASH` |
| Hash | `0xA65AA1ACE81E5A77` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | `modelHash` (Hash) |

### Parameters

- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedModelSizeFromHash(modelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA65AA1ACE81E5A77, modelHash)
```


---

## _GET_PED_MOTIVATION

**Description:** If targetPed is set to 0 the ped motivationState affects everyone

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_MOTIVATION` |
| Hash | `0x42688E94E96FD9B4` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `motivationState` (int), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`motivationState`** (`int`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedMotivation(ped, motivationState, targetPed)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x42688E94E96FD9B4, ped, motivationState, targetPed)
```


---

## _GET_PED_QUALITY

**Description:** Returns Ped Quality to be used to calculate Skinning Quality

enum ePedQuality
{
	PQ_INVALID = -1,
	PQ_LOW,
	PQ_MEDIUM,
	PQ_HIGH,
	PQ_MAX
};

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_QUALITY` |
| Hash | `0x7BCC6087D130312A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedQuality(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7BCC6087D130312A, ped)
```


---

## _GET_PED_REGISTER_PROP

**Description:** Gets a registered/attached prop entity for a particular ped. Second parameter will detach the prop entity from the ped if true. Props primarily appear to come from scenarios, such as a broom or hay bale.

Known props: https://pastebin.com/ap2NEJqB

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_REGISTER_PROP` |
| Hash | `0x4D0D2E3D8BC000EB` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped), `propName` (const char*), `detachProp` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`propName`** (`const char*`)
- **`detachProp`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedRegisterProp(ped, propName, detachProp)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4D0D2E3D8BC000EB, ped, propName, detachProp)
```


---

## _GET_PED_REMAINING_REVIVAL_TIME

**Description:** normalized / non normalized
0.0        / 1000.0         STARTED IN WRITHE STAGE
1.0        / 0.0            END OF WRITHE, DEAD
-1.0                        DEAD

Returns some value from AI task 562 (unknown).

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_REMAINING_REVIVAL_TIME` |
| Hash | `0xEBE89623EB861271` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `normalized` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`normalized`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedRemainingRevivalTime(ped, normalized)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEBE89623EB861271, ped, normalized)
```


---

## _GET_PED_STAMINA

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_STAMINA` |
| Hash | `0x775A1CA7893AA8B5` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedStamina(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x775A1CA7893AA8B5, ped)
```


---

## _GET_PED_STAMINA_NORMALIZED

**Description:** Returns stamina normalizedValue / normalizedUnlockedMax

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_STAMINA_NORMALIZED` |
| Hash | `0x22F2A386D43048A9` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedStaminaNormalized(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x22F2A386D43048A9, ped)
```


---

## _GET_PED_TRANQUILIZER

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_TRANQUILIZER` |
| Hash | `0x65C75FDCCAC86464` |
| Return Type | `Ped` |
| Build | `1355` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedTranquilizer(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x65C75FDCCAC86464, ped)
```


---

## _GET_PELT_FROM_HORSE

**Description:** Returns peltId

| Property | Value |
|----------|-------|
| Native Name | `_GET_PELT_FROM_HORSE` |
| Hash | `0x0CEEB6F4780B1F2F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `horse` (Ped), `index` (int) |

### Parameters

- **`horse`** (`Ped`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPeltFromHorse(horse, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0CEEB6F4780B1F2F, horse, index)
```


---

## _GET_PLAYER_CURRENT_ANIMAL_DAMAGE_MODIFIER

**Description:** Returns animal skin quality modifier

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_CURRENT_ANIMAL_DAMAGE_MODIFIER` |
| Hash | `0xEE2D5C819A65BF26` |
| Return Type | `float` |
| Build | `1311` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerCurrentAnimalDamageModifier(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEE2D5C819A65BF26, player)
```


---

## _GET_PLAYER_PED_WATER_DEPTH

**Description:** Returns how deep the water is below the ped (if in water)
-1.0f = Not in water
10.0f = Max water depth

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_PED_WATER_DEPTH` |
| Hash | `0x2942457417A5FD24` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerPedWaterDepth(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2942457417A5FD24, ped)
```


---

## _GET_RIDER_OF_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `_GET_RIDER_OF_MOUNT` |
| Hash | `0xB676EFDA03DADA52` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `mount` (Ped), `p1` (BOOL) |

### Parameters

- **`mount`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetRiderOfMount(mount, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB676EFDA03DADA52, mount, p1)
```


---

## _GET_SHOP_ITEM_BASE_LAYERS

| Property | Value |
|----------|-------|
| Native Name | `_GET_SHOP_ITEM_BASE_LAYERS` |
| Hash | `0x63342C50EC115CE8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `shopItem` (Hash), `p1` (Any), `ped` (Ped), `metapedType` (int), `p4` (BOOL), `drawable` (Hash*), `albedo` (Hash*), `normal` (Hash*), `material` (Hash*), `p9` (Hash*), `p10` (Hash*), `p11` (Hash*), `p12` (Hash*) |

### Parameters

- **`shopItem`** (`Hash`)
- **`p1`** (`Any`)
- **`ped`** (`Ped`)
- **`metapedType`** (`int`)
- **`p4`** (`BOOL`)
- **`drawable`** (`Hash*`)
- **`albedo`** (`Hash*`)
- **`normal`** (`Hash*`)
- **`material`** (`Hash*`)
- **`p9`** (`Hash*`)
- **`p10`** (`Hash*`)
- **`p11`** (`Hash*`)
- **`p12`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = GetShopItemBaseLayers(shopItem, p1, ped, metapedType, p4, drawable, albedo, normal, material, p9, p10, p11, p12)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x63342C50EC115CE8, shopItem, p1, ped, metapedType, p4, drawable, albedo, normal, material, p9, p10, p11, p12)
```


---

## _GET_SHOP_ITEM_COMPONENT_AT_INDEX

**Description:** Returns the current shop item component at index and it's wearable state

| Property | Value |
|----------|-------|
| Native Name | `_GET_SHOP_ITEM_COMPONENT_AT_INDEX` |
| Hash | `0x77BA37622E22023B` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped), `index` (int), `p2` (BOOL), `argStruct` (Any*), `wearableState` (Hash*) |

### Parameters

- **`ped`** (`Ped`)
- **`index`** (`int`)
- **`p2`** (`BOOL`)
- **`argStruct`** (`Any*`)
- **`wearableState`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = GetShopItemComponentAtIndex(ped, index, p2, argStruct, wearableState)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x77BA37622E22023B, ped, index, p2, argStruct, wearableState)
```


### Examples

**Example 1 (lua):**
```lua
local ped = PlayerPedId()
local numComponent = GetNumComponentsInPed(ped)
for index = 0, numComponent -1 do
	local componentHash,_,wearableState = GetShopItemComponentAtIndex(ped, index, true, Citizen.ResultAsInteger(), Citizen.ResultAsInteger())
	print('Index:',index,'Hash:',componentHash,'wearable state:', wearableState)
end
```


---

## _GET_SHOP_ITEM_COMPONENT_CATEGORY

| Property | Value |
|----------|-------|
| Native Name | `_GET_SHOP_ITEM_COMPONENT_CATEGORY` |
| Hash | `0x5FF9A878C3D115B8` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `componentHash` (Hash), `metapedType` (int), `isMP` (BOOL) |

### Parameters

- **`componentHash`** (`Hash`)
- **`metapedType`** (`int`)
- **`isMP`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetShopItemComponentCategory(componentHash, metapedType, isMP)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5FF9A878C3D115B8, componentHash, metapedType, isMP)
```


---

*End of PED natives part 16*
