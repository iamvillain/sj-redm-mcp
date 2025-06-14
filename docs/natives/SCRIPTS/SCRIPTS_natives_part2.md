# SCRIPTS Natives - Part 2 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** SCRIPTS  
**Natives in this file:** 44  
**Total natives in namespace:** 94  
**Generated from:** RDR3natives JSON data

---

## TRIGGER_SCRIPT_EVENT

**Description:** eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)

Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).

playerBits (also known as playersToBroadcastTo) is a bitset that indicates which players this event should be sent to. In order to send the event to specific players only, use (1 << playerIndex). Set all bits if it should be broadcast to all players.

| Property | Value |
|----------|-------|
| Native Name | `TRIGGER_SCRIPT_EVENT` |
| Hash | `0x5AE99C571D5BBE5D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `eventGroup` (int), `eventData` (Any*), `eventDataSize` (int), `scriptMetadataIndex` (int), `playerBits` (int*) |

### Parameters

- **`eventGroup`** (`int`)
- **`eventData`** (`Any*`)
- **`eventDataSize`** (`int`)
- **`scriptMetadataIndex`** (`int`)
- **`playerBits`** (`int*`)

### Usage

**Lua (Direct):**
```lua
TriggerScriptEvent(eventGroup, eventData, eventDataSize, scriptMetadataIndex, playerBits)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5AE99C571D5BBE5D, eventGroup, eventData, eventDataSize, scriptMetadataIndex, playerBits)
```


---

## _0x0A79C81C418F5D38

| Property | Value |
|----------|-------|
| Native Name | `_0x0A79C81C418F5D38` |
| Hash | `0x0A79C81C418F5D38` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0A79C81C418F5D38(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0A79C81C418F5D38, p0, p1)
```


---

## _0x11B0A0B282FA9B10

**Description:** Used in Script Function DISABLE_REGISTERED_WORLD_BRAINS

| Property | Value |
|----------|-------|
| Native Name | `_0x11B0A0B282FA9B10` |
| Hash | `0x11B0A0B282FA9B10` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x11B0A0B282FA9B10(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x11B0A0B282FA9B10, p0)
```


---

## _0x1BDB5A07307F6929

| Property | Value |
|----------|-------|
| Native Name | `_0x1BDB5A07307F6929` |
| Hash | `0x1BDB5A07307F6929` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1BDB5A07307F6929(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1BDB5A07307F6929, p0, p1)
```


---

## _0x1C5EB3C27F7508CB

| Property | Value |
|----------|-------|
| Native Name | `_0x1C5EB3C27F7508CB` |
| Hash | `0x1C5EB3C27F7508CB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1C5EB3C27F7508CB(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1C5EB3C27F7508CB, p0, p1)
```


---

## _0x29FB4CE89472C3CB

| Property | Value |
|----------|-------|
| Native Name | `_0x29FB4CE89472C3CB` |
| Hash | `0x29FB4CE89472C3CB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (float), `p3` (float), `p4` (const char*), `p5` (const char*), `p6` (const char*), `p7` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`const char*`)
- **`p5`** (`const char*`)
- **`p6`** (`const char*`)
- **`p7`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x29FB4CE89472C3CB(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x29FB4CE89472C3CB, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## _0x42A429CDFED6D99D

| Property | Value |
|----------|-------|
| Native Name | `_0x42A429CDFED6D99D` |
| Hash | `0x42A429CDFED6D99D` |
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
_0x42A429CDFED6D99D(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x42A429CDFED6D99D, p0, p1, p2)
```


---

## _0x5827BE85A87B073D

| Property | Value |
|----------|-------|
| Native Name | `_0x5827BE85A87B073D` |
| Hash | `0x5827BE85A87B073D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x5827BE85A87B073D(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5827BE85A87B073D, p0)
```


---

## _0x64F765D9A1F8F02C

| Property | Value |
|----------|-------|
| Native Name | `_0x64F765D9A1F8F02C` |
| Hash | `0x64F765D9A1F8F02C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (Any*) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
_0x64F765D9A1F8F02C(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x64F765D9A1F8F02C, p0, p1, p2)
```


---

## _0x6F700A4BF7C3331B

| Property | Value |
|----------|-------|
| Native Name | `_0x6F700A4BF7C3331B` |
| Hash | `0x6F700A4BF7C3331B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x6F700A4BF7C3331B(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6F700A4BF7C3331B, p0)
```


---

## _0x76CBCD9EADC00955

| Property | Value |
|----------|-------|
| Native Name | `_0x76CBCD9EADC00955` |
| Hash | `0x76CBCD9EADC00955` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x76CBCD9EADC00955()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x76CBCD9EADC00955, )
```


---

## _0xA88E1D7FA1E20080

| Property | Value |
|----------|-------|
| Native Name | `_0xA88E1D7FA1E20080` |
| Hash | `0xA88E1D7FA1E20080` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA88E1D7FA1E20080(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA88E1D7FA1E20080, p0)
```


---

## _0xE4ABE20DCE7C7CFE

| Property | Value |
|----------|-------|
| Native Name | `_0xE4ABE20DCE7C7CFE` |
| Hash | `0xE4ABE20DCE7C7CFE` |
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
_0xE4ABE20DCE7C7CFE(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE4ABE20DCE7C7CFE, p0, p1, p2)
```


---

## _0xE7282390542F570D

| Property | Value |
|----------|-------|
| Native Name | `_0xE7282390542F570D` |
| Hash | `0xE7282390542F570D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xE7282390542F570D(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE7282390542F570D, p0)
```


---

## _0xF9E951A1E5517C06

| Property | Value |
|----------|-------|
| Native Name | `_0xF9E951A1E5517C06` |
| Hash | `0xF9E951A1E5517C06` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xF9E951A1E5517C06()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF9E951A1E5517C06, )
```


---

## _0xFFDDF802279BE128

| Property | Value |
|----------|-------|
| Native Name | `_0xFFDDF802279BE128` |
| Hash | `0xFFDDF802279BE128` |
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
_0xFFDDF802279BE128(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFFDDF802279BE128, p0, p1, p2)
```


---

## _ACTIVATE_GOAL_CONTEXT

**Description:** goalContext: see <availableContexts> in common/data/stats_and_challenges/goals_*.meta

| Property | Value |
|----------|-------|
| Native Name | `_ACTIVATE_GOAL_CONTEXT` |
| Hash | `0x7D654266025E921B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `goalContext` (Hash) |

### Parameters

- **`goalContext`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ActivateGoalContext(goalContext)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7D654266025E921B, goalContext)
```


---

## _AWARDS_GET_UNLOCK_CLAIM_DATA

| Property | Value |
|----------|-------|
| Native Name | `_AWARDS_GET_UNLOCK_CLAIM_DATA` |
| Hash | `0xB9467E41DAB1CF2C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `rpcGuid` (Any*), `awardHash` (Hash), `dataIndex` (int), `outUnlockData` (Any*) |

### Parameters

- **`rpcGuid`** (`Any*`)
- **`awardHash`** (`Hash`)
- **`dataIndex`** (`int`)
- **`outUnlockData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = AwardsGetUnlockClaimData(rpcGuid, awardHash, dataIndex, outUnlockData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB9467E41DAB1CF2C, rpcGuid, awardHash, dataIndex, outUnlockData)
```


---

## _BG_RELOAD_ALL_BACKGROUND_SCRIPTS

| Property | Value |
|----------|-------|
| Native Name | `_BG_RELOAD_ALL_BACKGROUND_SCRIPTS` |
| Hash | `0xBE7D814CFA181B56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
BgReloadAllBackgroundScripts()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBE7D814CFA181B56, )
```


---

## _CLEAR_ALL_PLAYER_BITS

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_ALL_PLAYER_BITS` |
| Hash | `0xDE544B7EC0C187CC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `value` (Any*) |

### Parameters

- **`value`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
ClearAllPlayerBits(value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDE544B7EC0C187CC, value)
```


---

## _CLEAR_PLAYER_BIT_AT_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PLAYER_BIT_AT_INDEX` |
| Hash | `0xD426E2E3288469D6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `value` (Any*), `bitIndex` (int) |

### Parameters

- **`value`** (`Any*`)
- **`bitIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearPlayerBitAtIndex(value, bitIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD426E2E3288469D6, value, bitIndex)
```


---

## _DEACTIVATE_GOAL_CONTEXT

**Description:** goalContext: see _ACTIVATE_GOAL_CONTEXT

| Property | Value |
|----------|-------|
| Native Name | `_DEACTIVATE_GOAL_CONTEXT` |
| Hash | `0x50B72A754EE64A71` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `goalContext` (Hash) |

### Parameters

- **`goalContext`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
DeactivateGoalContext(goalContext)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x50B72A754EE64A71, goalContext)
```


---

## _DISPLAY_LOADING_SCREENS

| Property | Value |
|----------|-------|
| Native Name | `_DISPLAY_LOADING_SCREENS` |
| Hash | `0x1E5B70E53DB661E5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (Hash), `p2` (Hash), `gamemodeName` (const char*), `title` (const char*), `subtitle` (const char*) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`Hash`)
- **`p2`** (`Hash`)
- **`gamemodeName`** (`const char*`)
- **`title`** (`const char*`)
- **`subtitle`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
DisplayLoadingScreens(p0, p1, p2, gamemodeName, title, subtitle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1E5B70E53DB661E5, p0, p1, p2, gamemodeName, title, subtitle)
```


---

## _DOES_COMPRESSED_GLOBAL_BLOCK_BUFFER_EXIST

| Property | Value |
|----------|-------|
| Native Name | `_DOES_COMPRESSED_GLOBAL_BLOCK_BUFFER_EXIST` |
| Hash | `0x66EE5B93C308F734` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesCompressedGlobalBlockBufferExist(index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x66EE5B93C308F734, index)
```


---

## _GET_GLOBAL_BLOCK_CAN_BE_ACCESSED

| Property | Value |
|----------|-------|
| Native Name | `_GET_GLOBAL_BLOCK_CAN_BE_ACCESSED` |
| Hash | `0x42A7EB5C814C2DE0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetGlobalBlockCanBeAccessed(index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x42A7EB5C814C2DE0, index)
```


---

## _GET_HASH_OF_THREAD

| Property | Value |
|----------|-------|
| Native Name | `_GET_HASH_OF_THREAD` |
| Hash | `0x724CB89D35B283D0` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `threadId` (int) |

### Parameters

- **`threadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetHashOfThread(threadId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x724CB89D35B283D0, threadId)
```


---

## _GET_THREAD_EXIT_REASON

**Description:** enum eThreadExitReason
{
	THREAD_EXIT_REASON_NONE,
	THREAD_EXIT_REASON_BACKGROUND_THREAD_STOPPED,
	THREAD_EXIT_REASON_SESSION_MERGE,
	THREAD_EXIT_REASON_SCENARIO_OUT_OF_SCOPE,
	THREAD_EXIT_REASON_REQUESTED_BY_SCRIPT
};

| Property | Value |
|----------|-------|
| Native Name | `_GET_THREAD_EXIT_REASON` |
| Hash | `0x54AE4FDEEFEAB77E` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetThreadExitReason()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x54AE4FDEEFEAB77E, )
```


---

## _IS_ANY_PLAYER_BIT_SET

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANY_PLAYER_BIT_SET` |
| Hash | `0x179A6F0EE2E79026` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `playerBits` (int*) |

### Parameters

- **`playerBits`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnyPlayerBitSet(playerBits)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x179A6F0EE2E79026, playerBits)
```


---

## _IS_BACKGROUND_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `_IS_BACKGROUND_SCRIPT` |
| Hash | `0x20B7F69B40C6B755` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `threadId` (int) |

### Parameters

- **`threadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsBackgroundScript(threadId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x20B7F69B40C6B755, threadId)
```


---

## _IS_GOAL_CONTEXT_ACTIVE

**Description:** goalContext: see _ACTIVATE_GOAL_CONTEXT

| Property | Value |
|----------|-------|
| Native Name | `_IS_GOAL_CONTEXT_ACTIVE` |
| Hash | `0x7409669C5ED50144` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `goalContext` (Hash) |

### Parameters

- **`goalContext`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsGoalContextActive(goalContext)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7409669C5ED50144, goalContext)
```


---

## _IS_PLAYER_BIT_SET_AT_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_IS_PLAYER_BIT_SET_AT_INDEX` |
| Hash | `0x72B2E00C9BAC6789` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `value` (Any*), `bitIndex` (int) |

### Parameters

- **`value`** (`Any*`)
- **`bitIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerBitSetAtIndex(value, bitIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x72B2E00C9BAC6789, value, bitIndex)
```


---

## _IS_THREAD_EXIT_REQUESTED_FOR_THREAD_WITH_THIS_ID

| Property | Value |
|----------|-------|
| Native Name | `_IS_THREAD_EXIT_REQUESTED_FOR_THREAD_WITH_THIS_ID` |
| Hash | `0x30BED53646C86D11` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `threadId` (int) |

### Parameters

- **`threadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsThreadExitRequestedForThreadWithThisId(threadId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x30BED53646C86D11, threadId)
```


---

## _LOOT_GET_LOOT_CLAIM_DATA

| Property | Value |
|----------|-------|
| Native Name | `_LOOT_GET_LOOT_CLAIM_DATA` |
| Hash | `0xF1E9045F5AA9E428` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `rpcGuid` (Any*), `dataIndex` (int), `outLootData` (Any*) |

### Parameters

- **`rpcGuid`** (`Any*`)
- **`dataIndex`** (`int`)
- **`outLootData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = LootGetLootClaimData(rpcGuid, dataIndex, outLootData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF1E9045F5AA9E428, rpcGuid, dataIndex, outLootData)
```


---

## _LOOT_GET_RESULT_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_LOOT_GET_RESULT_ITEM` |
| Hash | `0x4293B44A855F82CC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `rpcGuid` (Any*), `itemIndex` (int), `outResultItem` (Any*) |

### Parameters

- **`rpcGuid`** (`Any*`)
- **`itemIndex`** (`int`)
- **`outResultItem`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = LootGetResultItem(rpcGuid, itemIndex, outResultItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4293B44A855F82CC, rpcGuid, itemIndex, outResultItem)
```


---

## _NET_RPC_GUID_TO_STRING

**Description:** Returns "INVALID_NET_RPC_GUID" if netRpcGuid is invalid.

| Property | Value |
|----------|-------|
| Native Name | `_NET_RPC_GUID_TO_STRING` |
| Hash | `0xAC9FF854BD4BA9B5` |
| Return Type | `const char*` |
| Build | `1311` |
| Parameters | `netRpcGuid` (Any*) |

### Parameters

- **`netRpcGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetRpcGuidToString(netRpcGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAC9FF854BD4BA9B5, netRpcGuid)
```


---

## _REQUEST_THREAD_EXIT

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_THREAD_EXIT` |
| Hash | `0x7DE4643157AD646C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `threadId` (int) |

### Parameters

- **`threadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
RequestThreadExit(threadId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7DE4643157AD646C, threadId)
```


---

## _REQUEST_THREAD_EXIT_FOR_ALL_THREADS_WITH_THIS_NAME

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_THREAD_EXIT_FOR_ALL_THREADS_WITH_THIS_NAME` |
| Hash | `0x7423F7835770F619` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `nameHash` (Hash) |

### Parameters

- **`nameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RequestThreadExitForAllThreadsWithThisName(nameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7423F7835770F619, nameHash)
```


---

## _RESTORE_GLOBAL_BLOCK

| Property | Value |
|----------|-------|
| Native Name | `_RESTORE_GLOBAL_BLOCK` |
| Hash | `0xDC3914A99B4A5FDF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RestoreGlobalBlock(index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDC3914A99B4A5FDF, index)
```


---

## _SET_ALL_GLOBAL_BLOCKS_HAVE_BEEN_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_SET_ALL_GLOBAL_BLOCKS_HAVE_BEEN_LOADED` |
| Hash | `0x11986B05885564D2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAllGlobalBlocksHaveBeenLoaded(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x11986B05885564D2, toggle)
```


---

## _SET_ALL_PLAYER_BITS

| Property | Value |
|----------|-------|
| Native Name | `_SET_ALL_PLAYER_BITS` |
| Hash | `0x20F4CB76689ACDBC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `value` (Any*) |

### Parameters

- **`value`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
SetAllPlayerBits(value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x20F4CB76689ACDBC, value)
```


---

## _SET_GLOBAL_BLOCK_CAN_BE_ACCESSED

| Property | Value |
|----------|-------|
| Native Name | `_SET_GLOBAL_BLOCK_CAN_BE_ACCESSED` |
| Hash | `0xE66F392BFCE734AF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `index` (int), `toggle` (BOOL) |

### Parameters

- **`index`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetGlobalBlockCanBeAccessed(index, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE66F392BFCE734AF, index, toggle)
```


---

## _SET_PLAYER_BIT_AT_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_BIT_AT_INDEX` |
| Hash | `0x31010318BA9897AC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `value` (Any*), `bitIndex` (int) |

### Parameters

- **`value`** (`Any*`)
- **`bitIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPlayerBitAtIndex(value, bitIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x31010318BA9897AC, value, bitIndex)
```


---

## _STORE_GLOBAL_BLOCK

| Property | Value |
|----------|-------|
| Native Name | `_STORE_GLOBAL_BLOCK` |
| Hash | `0xB952A3AC41D58F2F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StoreGlobalBlock(index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB952A3AC41D58F2F, index)
```


---

## _TRIGGER_SCRIPT_EVENT_2

| Property | Value |
|----------|-------|
| Native Name | `_TRIGGER_SCRIPT_EVENT_2` |
| Hash | `0x8B61C950A148FFA2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `eventData` (Any*), `eventDataSize` (int), `scriptMetadataIndex` (int), `threadId` (int) |

### Parameters

- **`eventData`** (`Any*`)
- **`eventDataSize`** (`int`)
- **`scriptMetadataIndex`** (`int`)
- **`threadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
TriggerScriptEvent2(eventData, eventDataSize, scriptMetadataIndex, threadId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8B61C950A148FFA2, eventData, eventDataSize, scriptMetadataIndex, threadId)
```


---

*End of SCRIPTS natives part 2*
