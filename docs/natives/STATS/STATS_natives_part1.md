# STATS Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** STATS  
**Natives in this file:** 50  
**Total natives in namespace:** 88  
**Generated from:** RDR3natives JSON data

---

## CHAL_ACHIEVEMENT_GET_PROGRESS_INT

| Property | Value |
|----------|-------|
| Native Name | `CHAL_ACHIEVEMENT_GET_PROGRESS_INT` |
| Hash | `0x808712E428F697B8` |
| Return Type | `int` |
| Build | `1232` |
| Parameters | `p0` (Hash), `p1` (Hash) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ChalAchievementGetProgressInt(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x808712E428F697B8, p0, p1)
```


---

## CHAL_ACHIEVEMENT_IS_COMPLETE

| Property | Value |
|----------|-------|
| Native Name | `CHAL_ACHIEVEMENT_IS_COMPLETE` |
| Hash | `0x77B97A827739D434` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `p0` (Hash), `p1` (Hash) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ChalAchievementIsComplete(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x77B97A827739D434, p0, p1)
```


---

## CHAL_ADD_GOAL_PROGRESS_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `CHAL_ADD_GOAL_PROGRESS_FLOAT` |
| Hash | `0x86922D8C02FB7703` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `chalHash` (Hash), `goalHash` (Hash), `value` (float) |

### Parameters

- **`chalHash`** (`Hash`)
- **`goalHash`** (`Hash`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
ChalAddGoalProgressFloat(chalHash, goalHash, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x86922D8C02FB7703, chalHash, goalHash, value)
```


---

## CHAL_ADD_GOAL_PROGRESS_FLOAT_BY_SCORE_ID

| Property | Value |
|----------|-------|
| Native Name | `CHAL_ADD_GOAL_PROGRESS_FLOAT_BY_SCORE_ID` |
| Hash | `0x86922D8C02FB7705` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Hash), `value` (float) |

### Parameters

- **`p0`** (`Hash`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
ChalAddGoalProgressFloatByScoreId(p0, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x86922D8C02FB7705, p0, value)
```


---

## CHAL_ADD_GOAL_PROGRESS_INT

| Property | Value |
|----------|-------|
| Native Name | `CHAL_ADD_GOAL_PROGRESS_INT` |
| Hash | `0xDDBD560745B1EE9A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `chalHash` (Hash), `goalHash` (Hash), `value` (int) |

### Parameters

- **`chalHash`** (`Hash`)
- **`goalHash`** (`Hash`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
ChalAddGoalProgressInt(chalHash, goalHash, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDDBD560745B1EE9A, chalHash, goalHash, value)
```


---

## CHAL_ADD_GOAL_PROGRESS_INT_BY_SCORE_ID

| Property | Value |
|----------|-------|
| Native Name | `CHAL_ADD_GOAL_PROGRESS_INT_BY_SCORE_ID` |
| Hash | `0xDDBD560745B1EE9C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash), `value` (int) |

### Parameters

- **`p0`** (`Hash`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
ChalAddGoalProgressIntByScoreId(p0, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDDBD560745B1EE9C, p0, value)
```


---

## CHAL_GET_MAX_RANKS

| Property | Value |
|----------|-------|
| Native Name | `CHAL_GET_MAX_RANKS` |
| Hash | `0x58CB53DB63F84DEA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `chalHash` (Hash) |

### Parameters

- **`chalHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ChalGetMaxRanks(chalHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58CB53DB63F84DEA, chalHash)
```


---

## CHAL_GET_NUM_RANKS_COMPLETED

| Property | Value |
|----------|-------|
| Native Name | `CHAL_GET_NUM_RANKS_COMPLETED` |
| Hash | `0x58CB53DB63F84DE9` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `chalHash` (Hash) |

### Parameters

- **`chalHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ChalGetNumRanksCompleted(chalHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58CB53DB63F84DE9, chalHash)
```


---

## CHAL_IS_GOAL_ACTIVE

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS/challenge_goals.lua

| Property | Value |
|----------|-------|
| Native Name | `CHAL_IS_GOAL_ACTIVE` |
| Hash | `0x04DAC3929796EB87` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `chalHash` (Hash), `goalHash` (Hash) |

### Parameters

- **`chalHash`** (`Hash`)
- **`goalHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ChalIsGoalActive(chalHash, goalHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x04DAC3929796EB87, chalHash, goalHash)
```


---

## CHAL_MISSION_ADD_GOAL_PROGRESS_INT

| Property | Value |
|----------|-------|
| Native Name | `CHAL_MISSION_ADD_GOAL_PROGRESS_INT` |
| Hash | `0x97E18E7C098626DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `missionHash` (Hash), `goalHash` (Hash), `value` (int) |

### Parameters

- **`missionHash`** (`Hash`)
- **`goalHash`** (`Hash`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
ChalMissionAddGoalProgressInt(missionHash, goalHash, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x97E18E7C098626DE, missionHash, goalHash, value)
```


---

## CHAL_MISSION_GET_NUM_GOALS

| Property | Value |
|----------|-------|
| Native Name | `CHAL_MISSION_GET_NUM_GOALS` |
| Hash | `0x0B0576DD3A75E58D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `missionHash` (Hash) |

### Parameters

- **`missionHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ChalMissionGetNumGoals(missionHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0B0576DD3A75E58D, missionHash)
```


---

## CHAL_MISSION_GET_NUM_GOALS_COMPLETE

| Property | Value |
|----------|-------|
| Native Name | `CHAL_MISSION_GET_NUM_GOALS_COMPLETE` |
| Hash | `0xA785A52B59B7E7B2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `missionHash` (Hash) |

### Parameters

- **`missionHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ChalMissionGetNumGoalsComplete(missionHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA785A52B59B7E7B2, missionHash)
```


---

## CHAL_MISSION_IS_GOAL_COMPLETE

| Property | Value |
|----------|-------|
| Native Name | `CHAL_MISSION_IS_GOAL_COMPLETE` |
| Hash | `0xC0BB774787BBF301` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `missionHash` (Hash), `goalHash` (Hash) |

### Parameters

- **`missionHash`** (`Hash`)
- **`goalHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ChalMissionIsGoalComplete(missionHash, goalHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC0BB774787BBF301, missionHash, goalHash)
```


---

## CHAL_NET_START_CHAL

| Property | Value |
|----------|-------|
| Native Name | `CHAL_NET_START_CHAL` |
| Hash | `0x4ABF7E4DB6279E8F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `chalHash` (Hash) |

### Parameters

- **`chalHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ChalNetStartChal(chalHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4ABF7E4DB6279E8F, chalHash)
```


---

## CHAL_NET_START_GOAL

| Property | Value |
|----------|-------|
| Native Name | `CHAL_NET_START_GOAL` |
| Hash | `0xC3FCB47344DCB638` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `chalHash` (Hash), `goalHash` (Hash) |

### Parameters

- **`chalHash`** (`Hash`)
- **`goalHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ChalNetStartGoal(chalHash, goalHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC3FCB47344DCB638, chalHash, goalHash)
```


---

## CHAL_NET_STOP_CHAL

| Property | Value |
|----------|-------|
| Native Name | `CHAL_NET_STOP_CHAL` |
| Hash | `0x43B0163154A50C86` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `chalHash` (Hash) |

### Parameters

- **`chalHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ChalNetStopChal(chalHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x43B0163154A50C86, chalHash)
```


---

## CHAL_NET_STOP_GOAL

| Property | Value |
|----------|-------|
| Native Name | `CHAL_NET_STOP_GOAL` |
| Hash | `0x00CE6A93324A590B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `chalHash` (Hash), `goalHash` (Hash) |

### Parameters

- **`chalHash`** (`Hash`)
- **`goalHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ChalNetStopGoal(chalHash, goalHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x00CE6A93324A590B, chalHash, goalHash)
```


---

## CHAL_SET_GOAL_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `CHAL_SET_GOAL_DISABLED` |
| Hash | `0xF63DF9EE16393343` |
| Return Type | `void` |
| Build | `1436` |
| Parameters | `chalHash` (Hash), `goalHash` (Hash), `disabled` (BOOL) |

### Parameters

- **`chalHash`** (`Hash`)
- **`goalHash`** (`Hash`)
- **`disabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ChalSetGoalDisabled(chalHash, goalHash, disabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF63DF9EE16393343, chalHash, goalHash, disabled)
```


---

## CHAL_SET_GOAL_PROGRESS_INT

| Property | Value |
|----------|-------|
| Native Name | `CHAL_SET_GOAL_PROGRESS_INT` |
| Hash | `0xDDBD560745B1EE9B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `chalHash` (Hash), `goalHash` (Hash), `value` (int) |

### Parameters

- **`chalHash`** (`Hash`)
- **`goalHash`** (`Hash`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
ChalSetGoalProgressInt(chalHash, goalHash, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDDBD560745B1EE9B, chalHash, goalHash, value)
```


---

## STATSTRACKER_DEED_STARTED

| Property | Value |
|----------|-------|
| Native Name | `STATSTRACKER_DEED_STARTED` |
| Hash | `0xB2A38826E5886E83` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (Any) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
StatstrackerDeedStarted(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB2A38826E5886E83, p0, p1)
```


---

## STATSTRACKER_IS_INITIALIZED

| Property | Value |
|----------|-------|
| Native Name | `STATSTRACKER_IS_INITIALIZED` |
| Hash | `0x01F4D242765C6B24` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = StatstrackerIsInitialized(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x01F4D242765C6B24, p0)
```


---

## STAT_ADD_BOUNTY_TARGET

| Property | Value |
|----------|-------|
| Native Name | `STAT_ADD_BOUNTY_TARGET` |
| Hash | `0x6B1044FDC2B09101` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `unlockHash` (Hash), `ped` (Ped) |

### Parameters

- **`unlockHash`** (`Hash`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
StatAddBountyTarget(unlockHash, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6B1044FDC2B09101, unlockHash, ped)
```


---

## STAT_BOUNTY_CAPTURED

| Property | Value |
|----------|-------|
| Native Name | `STAT_BOUNTY_CAPTURED` |
| Hash | `0x262EF7CF49CF1EB9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
StatBountyCaptured(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x262EF7CF49CF1EB9, entity)
```


---

## STAT_BOUNTY_ESCAPED

| Property | Value |
|----------|-------|
| Native Name | `STAT_BOUNTY_ESCAPED` |
| Hash | `0xB22F05732F72F70C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
StatBountyEscaped(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB22F05732F72F70C, ped)
```


---

## STAT_ID_GET_BOOL

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_GET_BOOL` |
| Hash | `0x11B5E6D2AE73F48F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*), `value` (BOOL*) |

### Parameters

- **`statId`** (`Any*`)
- **`value`** (`BOOL*`)

### Usage

**Lua (Direct):**
```lua
local result = StatIdGetBool(statId, value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x11B5E6D2AE73F48F, statId, value)
```


---

## STAT_ID_GET_DATE

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_GET_DATE` |
| Hash | `0x8B0FACEFC36C824C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*), `date` (Any*) |

### Parameters

- **`statId`** (`Any*`)
- **`date`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = StatIdGetDate(statId, date)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8B0FACEFC36C824C, statId, date)
```


---

## STAT_ID_GET_FLOAT

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_GET_FLOAT` |
| Hash | `0xD7AE6C9C9C6AC54D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*), `value` (float*) |

### Parameters

- **`statId`** (`Any*`)
- **`value`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = StatIdGetFloat(statId, value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD7AE6C9C9C6AC54D, statId, value)
```


---

## STAT_ID_GET_INT

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_GET_INT` |
| Hash | `0x767FBC2AC802EF3E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*), `p1` (int*) |

### Parameters

- **`statId`** (`Any*`)
- **`p1`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = StatIdGetInt(statId, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x767FBC2AC802EF3E, statId, p1)
```


---

## STAT_ID_IS_VALID

**Description:** struct StatId
{
	alignas(8) Hash BaseId;
	alignas(8) Hash PermutationId;
}

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_IS_VALID` |
| Hash | `0xC48FE1971C9743FF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*) |

### Parameters

- **`statId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = StatIdIsValid(statId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC48FE1971C9743FF, statId)
```


---

## STAT_ID_SET_BOOL

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_SET_BOOL` |
| Hash | `0x3B5107353267D7A1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*), `value` (BOOL), `p2` (BOOL) |

### Parameters

- **`statId`** (`Any*`)
- **`value`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StatIdSetBool(statId, value, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3B5107353267D7A1, statId, value, p2)
```


---

## STAT_ID_SET_DATE

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_SET_DATE` |
| Hash | `0x1FAE9B2FAA2DFE06` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*), `date` (Any*), `p2` (BOOL) |

### Parameters

- **`statId`** (`Any*`)
- **`date`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StatIdSetDate(statId, date, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1FAE9B2FAA2DFE06, statId, date, p2)
```


---

## STAT_ID_SET_FLOAT

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_SET_FLOAT` |
| Hash | `0x481BDF6A10C5EF68` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*), `value` (float), `p2` (BOOL) |

### Parameters

- **`statId`** (`Any*`)
- **`value`** (`float`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StatIdSetFloat(statId, value, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x481BDF6A10C5EF68, statId, value, p2)
```


---

## STAT_ID_SET_GXT_LABEL

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_SET_GXT_LABEL` |
| Hash | `0x05060A54834F2382` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*), `label` (const char*), `p2` (BOOL) |

### Parameters

- **`statId`** (`Any*`)
- **`label`** (`const char*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StatIdSetGxtLabel(statId, label, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x05060A54834F2382, statId, label, p2)
```


---

## STAT_ID_SET_INT

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_SET_INT` |
| Hash | `0xA4DDF5DF95E65EEE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*), `value` (int), `p2` (BOOL) |

### Parameters

- **`statId`** (`Any*`)
- **`value`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StatIdSetInt(statId, value, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA4DDF5DF95E65EEE, statId, value, p2)
```


---

## STAT_ID_SET_TO_POSSE_ID

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `STAT_ID_SET_TO_POSSE_ID` |
| Hash | `0x34B22DE38477EDB4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `statId` (Any*) |

### Parameters

- **`statId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
StatIdSetToPosseId(statId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x34B22DE38477EDB4, statId)
```


---

## STAT_PHOTOGRAPH_TAKEN

| Property | Value |
|----------|-------|
| Native Name | `STAT_PHOTOGRAPH_TAKEN` |
| Hash | `0x4D31051A4CA83787` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `itemset` (ItemSet) |

### Parameters

- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
StatPhotographTaken(itemset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D31051A4CA83787, itemset)
```


---

## STAT_REGISTER_LEGENDARY_ANIMAL_DEED

| Property | Value |
|----------|-------|
| Native Name | `STAT_REGISTER_LEGENDARY_ANIMAL_DEED` |
| Hash | `0xCD0D69C65BB0E8B9` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `deedHash` (Hash) |

### Parameters

- **`deedHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
StatRegisterLegendaryAnimalDeed(deedHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCD0D69C65BB0E8B9, deedHash)
```


---

## WEEKLY_COLLECTIBLE_GET_ITEM_IN_SET

| Property | Value |
|----------|-------|
| Native Name | `WEEKLY_COLLECTIBLE_GET_ITEM_IN_SET` |
| Hash | `0xBA61BA6205A3F5A8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `chalHash` (Hash), `setIndex` (int), `itemIndex` (int), `p3` (Hash*), `p4` (int*) |

### Parameters

- **`chalHash`** (`Hash`)
- **`setIndex`** (`int`)
- **`itemIndex`** (`int`)
- **`p3`** (`Hash*`)
- **`p4`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = WeeklyCollectibleGetItemInSet(chalHash, setIndex, itemIndex, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBA61BA6205A3F5A8, chalHash, setIndex, itemIndex, p3, p4)
```


---

## WEEKLY_COLLECTIBLE_GET_ITEM_SET_BUY_AWARD

| Property | Value |
|----------|-------|
| Native Name | `WEEKLY_COLLECTIBLE_GET_ITEM_SET_BUY_AWARD` |
| Hash | `0x610783F646894D25` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `chalHash` (Hash), `index` (int) |

### Parameters

- **`chalHash`** (`Hash`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = WeeklyCollectibleGetItemSetBuyAward(chalHash, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x610783F646894D25, chalHash, index)
```


---

## WEEKLY_COLLECTIBLE_GET_ITEM_SET_LABEL

| Property | Value |
|----------|-------|
| Native Name | `WEEKLY_COLLECTIBLE_GET_ITEM_SET_LABEL` |
| Hash | `0xBFFA88522FF0F730` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `chalHash` (Hash), `index` (int) |

### Parameters

- **`chalHash`** (`Hash`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = WeeklyCollectibleGetItemSetLabel(chalHash, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBFFA88522FF0F730, chalHash, index)
```


---

## WEEKLY_COLLECTIBLE_GET_NUM_ITEMS_IN_SET

| Property | Value |
|----------|-------|
| Native Name | `WEEKLY_COLLECTIBLE_GET_NUM_ITEMS_IN_SET` |
| Hash | `0x7D675C9DDDB365BE` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `chalHash` (Hash), `index` (int) |

### Parameters

- **`chalHash`** (`Hash`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = WeeklyCollectibleGetNumItemsInSet(chalHash, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7D675C9DDDB365BE, chalHash, index)
```


---

## WEEKLY_COLLECTIBLE_GET_NUM_SETS

| Property | Value |
|----------|-------|
| Native Name | `WEEKLY_COLLECTIBLE_GET_NUM_SETS` |
| Hash | `0x8F5317729F791D10` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `chalHash` (Hash) |

### Parameters

- **`chalHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = WeeklyCollectibleGetNumSets(chalHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8F5317729F791D10, chalHash)
```


---

## _0x025E98E317652CDD

| Property | Value |
|----------|-------|
| Native Name | `_0x025E98E317652CDD` |
| Hash | `0x025E98E317652CDD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x025E98E317652CDD(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x025E98E317652CDD, p0)
```


---

## _0x0FEE2561120F3333

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `_0x0FEE2561120F3333` |
| Hash | `0x0FEE2561120F3333` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `statId` (Any*) |

### Parameters

- **`statId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
_0x0FEE2561120F3333(statId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0FEE2561120F3333, statId)
```


---

## _0x218F7710A139D012

| Property | Value |
|----------|-------|
| Native Name | `_0x218F7710A139D012` |
| Hash | `0x218F7710A139D012` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x218F7710A139D012()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x218F7710A139D012, )
```


---

## _0x302E71C1D9EE75B9

**Description:** statId: see STAT_ID_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `_0x302E71C1D9EE75B9` |
| Hash | `0x302E71C1D9EE75B9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `statId` (Any*), `p1` (Hash), `p2` (int*) |

### Parameters

- **`statId`** (`Any*`)
- **`p1`** (`Hash`)
- **`p2`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x302E71C1D9EE75B9(statId, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x302E71C1D9EE75B9, statId, p1, p2)
```


---

## _0x378D3B1B11D9385B

| Property | Value |
|----------|-------|
| Native Name | `_0x378D3B1B11D9385B` |
| Hash | `0x378D3B1B11D9385B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x378D3B1B11D9385B(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x378D3B1B11D9385B, p0)
```


---

## _0x3AEABAE3F3C7600C

| Property | Value |
|----------|-------|
| Native Name | `_0x3AEABAE3F3C7600C` |
| Hash | `0x3AEABAE3F3C7600C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x3AEABAE3F3C7600C()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3AEABAE3F3C7600C, )
```


---

## _0x3EB2791A1FBC8A42

| Property | Value |
|----------|-------|
| Native Name | `_0x3EB2791A1FBC8A42` |
| Hash | `0x3EB2791A1FBC8A42` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `statItem` (Hash), `p1` (int) |

### Parameters

- **`statItem`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x3EB2791A1FBC8A42(statItem, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3EB2791A1FBC8A42, statItem, p1)
```


---

## _0x3F6FD87D2030ADC6

| Property | Value |
|----------|-------|
| Native Name | `_0x3F6FD87D2030ADC6` |
| Hash | `0x3F6FD87D2030ADC6` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x3F6FD87D2030ADC6()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3F6FD87D2030ADC6, )
```


---

*End of STATS natives part 1*
