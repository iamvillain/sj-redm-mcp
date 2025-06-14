# COMPENDIUM Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** COMPENDIUM  
**Natives in this file:** 34  
**Generated from:** RDR3natives JSON data

---

## COMPENDIUM_ANIMAL_GET_SAMPLE_INVENTORY_ITEM

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_ANIMAL_GET_SAMPLE_INVENTORY_ITEM` |
| Hash | `0x4E4ACAE1C671A9DA` |
| Return Type | `Any` |
| Build | `1311` |
| Parameters | `compendiumEntry` (int) |

### Parameters

- **`compendiumEntry`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumAnimalGetSampleInventoryItem(compendiumEntry)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4E4ACAE1C671A9DA, compendiumEntry)
```


---

## COMPENDIUM_ANIMAL_HAS_SAMPLE

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_ANIMAL_HAS_SAMPLE` |
| Hash | `0x6FC24625E4FCAC27` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `compendiumEntry` (int) |

### Parameters

- **`compendiumEntry`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumAnimalHasSample(compendiumEntry)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6FC24625E4FCAC27, compendiumEntry)
```


---

## COMPENDIUM_ANIMAL_HAS_STAMP

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_ANIMAL_HAS_STAMP` |
| Hash | `0xBCF569FC32FFF456` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `compendiumEntry` (int) |

### Parameters

- **`compendiumEntry`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumAnimalHasStamp(compendiumEntry)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBCF569FC32FFF456, compendiumEntry)
```


---

## COMPENDIUM_ANIMAL_OBSERVED_BY_STAT_NAME

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_ANIMAL_OBSERVED_BY_STAT_NAME` |
| Hash | `0x725D52F26A5E9E10` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animalType` (Hash), `disableCompendiumToast` (BOOL) |

### Parameters

- **`animalType`** (`Hash`)
- **`disableCompendiumToast`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
CompendiumAnimalObservedByStatName(animalType, disableCompendiumToast)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D52F26A5E9E10, animalType, disableCompendiumToast)
```


---

## COMPENDIUM_ANIMAL_SET_DISCOVERED

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_ANIMAL_SET_DISCOVERED` |
| Hash | `0x67F35C7C9F2BDCFE` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `compendiumEntry` (int) |

### Parameters

- **`compendiumEntry`** (`int`)

### Usage

**Lua (Direct):**
```lua
CompendiumAnimalSetDiscovered(compendiumEntry)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x67F35C7C9F2BDCFE, compendiumEntry)
```


---

## COMPENDIUM_FISH_CAUGHT

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_FISH_CAUGHT` |
| Hash | `0x725D52F21A5E9E00` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `category` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`category`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
CompendiumFishCaught(ped, category)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D52F21A5E9E00, ped, category)
```


---

## COMPENDIUM_FISH_GET_LURE_SUITABILITY_BY_STAT_ITEM

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_FISH_GET_LURE_SUITABILITY_BY_STAT_ITEM` |
| Hash | `0x725D52F21A5E9E81` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `animalType` (Hash), `baitType` (Hash) |

### Parameters

- **`animalType`** (`Hash`)
- **`baitType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumFishGetLureSuitabilityByStatItem(animalType, baitType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x725D52F21A5E9E81, animalType, baitType)
```


---

## COMPENDIUM_GANG_AMBUSH_SURVIVED

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GANG_AMBUSH_SURVIVED` |
| Hash | `0x725D52F21A5E9E04` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
CompendiumGangAmbushSurvived(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D52F21A5E9E04, p0)
```


---

## COMPENDIUM_GANG_BOUNTY_CAPTURED

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GANG_BOUNTY_CAPTURED` |
| Hash | `0x725D52F21A5E9E06` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
CompendiumGangBountyCaptured(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D52F21A5E9E06, p0)
```


---

## COMPENDIUM_GANG_CAMP_FOUND

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GANG_CAMP_FOUND` |
| Hash | `0x725D52F21A5E9E03` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
CompendiumGangCampFound(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D52F21A5E9E03, p0, p1)
```


---

## COMPENDIUM_GANG_ENCOUNTERED

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GANG_ENCOUNTERED` |
| Hash | `0x725D52F21A5E9E05` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
CompendiumGangEncountered(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D52F21A5E9E05, p0)
```


---

## COMPENDIUM_GANG_HIDEOUT_FOUND

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GANG_HIDEOUT_FOUND` |
| Hash | `0x725D52F21A5E9E08` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
CompendiumGangHideoutFound(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D52F21A5E9E08, p0, p1)
```


---

## COMPENDIUM_GANG_MEMBER_KILLED

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GANG_MEMBER_KILLED` |
| Hash | `0x725D52F21A5E9E07` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
CompendiumGangMemberKilled(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D52F21A5E9E07, p0)
```


---

## COMPENDIUM_GET_ENTRY_BY_INDEX_IN_SUBCATEGORY

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_ENTRY_BY_INDEX_IN_SUBCATEGORY` |
| Hash | `0x5CEB63B2E3D9895F` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | `category` (Hash), `subcategory` (Hash), `count` (int) |

### Parameters

- **`category`** (`Hash`)
- **`subcategory`** (`Hash`)
- **`count`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetEntryByIndexInSubcategory(category, subcategory, count)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5CEB63B2E3D9895F, category, subcategory, count)
```


---

## COMPENDIUM_GET_ENTRY_BY_PED_INDEX

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_ENTRY_BY_PED_INDEX` |
| Hash | `0x1CFA0219D8E1CF25` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | `category` (Hash), `ped` (Ped) |

### Parameters

- **`category`** (`Hash`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetEntryByPedIndex(category, ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1CFA0219D8E1CF25, category, ped)
```


---

## COMPENDIUM_GET_ENTRY_BY_STAT_ITEM

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_ENTRY_BY_STAT_ITEM` |
| Hash | `0x66EC938394D76C85` |
| Return Type | `int` |
| Build | `1355` |
| Parameters | `category` (Hash), `animalType` (Hash) |

### Parameters

- **`category`** (`Hash`)
- **`animalType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetEntryByStatItem(category, animalType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x66EC938394D76C85, category, animalType)
```


---

## COMPENDIUM_GET_MAP_DISCOVERABLE_FROM_STAT_ITEM

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_MAP_DISCOVERABLE_FROM_STAT_ITEM` |
| Hash | `0x729D54121A5E9E20` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `animalStatItem` (Hash), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`animalStatItem`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetMapDiscoverableFromStatItem(animalStatItem, x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x729D54121A5E9E20, animalStatItem, x, y, z)
```


---

## COMPENDIUM_GET_NUM_ENTRIES_IN_SUBCATEGORY

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_NUM_ENTRIES_IN_SUBCATEGORY` |
| Hash | `0xF58A0C0E086E8E36` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | `category` (Hash), `subcategory` (Hash) |

### Parameters

- **`category`** (`Hash`)
- **`subcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetNumEntriesInSubcategory(category, subcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF58A0C0E086E8E36, category, subcategory)
```


---

## COMPENDIUM_GET_SHORT_DESCRIPTION_FROM_PED

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_SHORT_DESCRIPTION_FROM_PED` |
| Hash | `0x6C5E5D48E48B4C65` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetShortDescriptionFromPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6C5E5D48E48B4C65, ped)
```


---

## COMPENDIUM_GET_STUDY_AWARD_ID

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_STUDY_AWARD_ID` |
| Hash | `0x9F678782720349E4` |
| Return Type | `Any` |
| Build | `1311` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetStudyAwardId(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9F678782720349E4, ped)
```


---

## COMPENDIUM_GET_SUBCATEGORY_PED_IS_IN

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_SUBCATEGORY_PED_IS_IN` |
| Hash | `0x9B657550DF55EC96` |
| Return Type | `Hash` |
| Build | `1311` |
| Parameters | `category` (Hash), `ped` (Ped) |

### Parameters

- **`category`** (`Hash`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetSubcategoryPedIsIn(category, ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9B657550DF55EC96, category, ped)
```


---

## COMPENDIUM_GET_SUBCATEGORY_SAMPLE_TOAST_DESC_COMPLETE

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_SUBCATEGORY_SAMPLE_TOAST_DESC_COMPLETE` |
| Hash | `0x59D4D68CDB82427C` |
| Return Type | `const char*` |
| Build | `1311` |
| Parameters | `category` (Hash), `subcategory` (Hash) |

### Parameters

- **`category`** (`Hash`)
- **`subcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetSubcategorySampleToastDescComplete(category, subcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x59D4D68CDB82427C, category, subcategory)
```


---

## COMPENDIUM_GET_SUBCATEGORY_SAMPLE_TOAST_DESC_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_SUBCATEGORY_SAMPLE_TOAST_DESC_PROGRESS` |
| Hash | `0x82BFB5B367957699` |
| Return Type | `const char*` |
| Build | `1311` |
| Parameters | `category` (Hash), `subcategory` (Hash) |

### Parameters

- **`category`** (`Hash`)
- **`subcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetSubcategorySampleToastDescProgress(category, subcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x82BFB5B367957699, category, subcategory)
```


---

## COMPENDIUM_GET_SUBCATEGORY_SAMPLE_TOAST_TITLE

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_SUBCATEGORY_SAMPLE_TOAST_TITLE` |
| Hash | `0x5E50C67EB60951E6` |
| Return Type | `const char*` |
| Build | `1311` |
| Parameters | `category` (Hash), `subcategory` (Hash) |

### Parameters

- **`category`** (`Hash`)
- **`subcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetSubcategorySampleToastTitle(category, subcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5E50C67EB60951E6, category, subcategory)
```


---

## COMPENDIUM_GET_SUBCATEGORY_TOAST_APP_ID

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_GET_SUBCATEGORY_TOAST_APP_ID` |
| Hash | `0x2BF30D9D4D680112` |
| Return Type | `Any` |
| Build | `1311` |
| Parameters | `category` (Hash), `subcategory` (Hash) |

### Parameters

- **`category`** (`Hash`)
- **`subcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetSubcategoryToastAppId(category, subcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2BF30D9D4D680112, category, subcategory)
```


---

## COMPENDIUM_HERB_PICKED

**Description:** herbType: https://alloc8or.re/rdr3/doc/enums/eHerbType.txt
Vector3: Player Location

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_HERB_PICKED` |
| Hash | `0x725D52F21A5E9E09` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `herbType` (Hash), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`herbType`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
CompendiumHerbPicked(herbType, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D52F21A5E9E09, herbType, x, y, z)
```


---

## COMPENDIUM_HORSE_BONDING

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_HORSE_BONDING` |
| Hash | `0x725D52F21A5E9E50` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `bondingLevel` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`bondingLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
CompendiumHorseBonding(ped, bondingLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D52F21A5E9E50, ped, bondingLevel)
```


---

## COMPENDIUM_HORSE_OBSERVED

**Description:** Only gets called if bSetObserved is true and animalType is matching

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_HORSE_OBSERVED` |
| Hash | `0x725D58F2125E5E50` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `disableCompendiumToast` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`disableCompendiumToast`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
CompendiumHorseObserved(ped, disableCompendiumToast)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725D58F2125E5E50, ped, disableCompendiumToast)
```


---

## COMPENDIUM_HORSE_WILD_BROKEN

**Description:** NET_PLAYER_HORSE_PROCESS_EVENT_HORSE_BREAKING

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_HORSE_WILD_BROKEN` |
| Hash | `0x725852D21A2E9E50` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
CompendiumHorseWildBroken(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x725852D21A2E9E50, ped)
```


---

## COMPENDIUM_WAS_ANIMAL_OBSERVED

| Property | Value |
|----------|-------|
| Native Name | `COMPENDIUM_WAS_ANIMAL_OBSERVED` |
| Hash | `0x23B5E9C5160BC04F` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumWasAnimalObserved(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x23B5E9C5160BC04F, ped)
```


---

## _0x725D52F21A5E9E22

**Description:** Only used in R* SP Scripts, category = GANGS
_COMPENDIUM_GET_*

| Property | Value |
|----------|-------|
| Native Name | `_0x725D52F21A5E9E22` |
| Hash | `0x725D52F21A5E9E22` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `category` (Hash) |

### Parameters

- **`category`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x725D52F21A5E9E22(category)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x725D52F21A5E9E22, category)
```


---

## _0x729D52461AEA9E22

**Description:** Only used in R* SP Scripts, category = GANGS
_COMPENDIUM_GET_NUM_OF_ENTRIES_IN_*

| Property | Value |
|----------|-------|
| Native Name | `_0x729D52461AEA9E22` |
| Hash | `0x729D52461AEA9E22` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `category` (Hash) |

### Parameters

- **`category`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x729D52461AEA9E22(category)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x729D52461AEA9E22, category)
```


---

## _COMPENDIUM_GET_NUM_OF_ENTRIES_IN_CATEGORY

| Property | Value |
|----------|-------|
| Native Name | `_COMPENDIUM_GET_NUM_OF_ENTRIES_IN_CATEGORY` |
| Hash | `0x729D52F61A5A9E22` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `category` (Hash) |

### Parameters

- **`category`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetNumOfEntriesInCategory(category)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x729D52F61A5A9E22, category)
```


---

## _COMPENDIUM_GET_SUBCATEGORY_HASH_FROM_ANIMAL_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_COMPENDIUM_GET_SUBCATEGORY_HASH_FROM_ANIMAL_TYPE` |
| Hash | `0xCD278B6BFBDBDC22` |
| Return Type | `Hash` |
| Build | `1355` |
| Parameters | `category` (Hash), `animalType` (Hash) |

### Parameters

- **`category`** (`Hash`)
- **`animalType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CompendiumGetSubcategoryHashFromAnimalType(category, animalType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCD278B6BFBDBDC22, category, animalType)
```


---

*End of COMPENDIUM natives*
