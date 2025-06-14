# SCRIPTS Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** SCRIPTS  
**Natives in this file:** 50  
**Total natives in namespace:** 94  
**Generated from:** RDR3natives JSON data

---

## AWARDS_GET_RESULT_ITEM

| Property | Value |
|----------|-------|
| Native Name | `AWARDS_GET_RESULT_ITEM` |
| Hash | `0xAC8FAB22A914AE34` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `rpcGuid` (Any*), `awardHash` (Hash), `itemIndex` (int), `outResultItem` (Any*) |

### Parameters

- **`rpcGuid`** (`Any*`)
- **`awardHash`** (`Hash`)
- **`itemIndex`** (`int`)
- **`outResultItem`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = AwardsGetResultItem(rpcGuid, awardHash, itemIndex, outResultItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAC8FAB22A914AE34, rpcGuid, awardHash, itemIndex, outResultItem)
```


---

## BAIL_TO_LANDING_PAGE

| Property | Value |
|----------|-------|
| Native Name | `BAIL_TO_LANDING_PAGE` |
| Hash | `0xBC2C927F5C264243` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `bailCode` (int) |

### Parameters

- **`bailCode`** (`int`)

### Usage

**Lua (Direct):**
```lua
BailToLandingPage(bailCode)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC2C927F5C264243, bailCode)
```


---

## BAIL_WITH_PASS_THROUGH_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `BAIL_WITH_PASS_THROUGH_PARAMS` |
| Hash | `0xE98204D3C25AE14C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `params` (const char*) |

### Parameters

- **`params`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
BailWithPassThroughParams(params)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE98204D3C25AE14C, params)
```


---

## BG_DOES_LAUNCH_PARAM_EXIST

| Property | Value |
|----------|-------|
| Native Name | `BG_DOES_LAUNCH_PARAM_EXIST` |
| Hash | `0x4AE1DFF337A86FDE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scriptIndex` (int), `p1` (const char*) |

### Parameters

- **`scriptIndex`** (`int`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = BgDoesLaunchParamExist(scriptIndex, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4AE1DFF337A86FDE, scriptIndex, p1)
```


---

## BG_END_CONTEXT

**Description:** Deletes the given context from the background scripts context map.

| Property | Value |
|----------|-------|
| Native Name | `BG_END_CONTEXT` |
| Hash | `0x3ABF7BA1C3E2C8CF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `contextName` (const char*) |

### Parameters

- **`contextName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
BgEndContext(contextName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3ABF7BA1C3E2C8CF, contextName)
```


---

## BG_END_CONTEXT_HASH

**Description:** Hashed version of BG_END_CONTEXT

| Property | Value |
|----------|-------|
| Native Name | `BG_END_CONTEXT_HASH` |
| Hash | `0x6D1431744182CDE8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `contextHash` (Hash) |

### Parameters

- **`contextHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
BgEndContextHash(contextHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D1431744182CDE8, contextHash)
```


---

## BG_GET_LAUNCH_PARAM_VALUE

| Property | Value |
|----------|-------|
| Native Name | `BG_GET_LAUNCH_PARAM_VALUE` |
| Hash | `0x55C40B7592BAD213` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `scriptIndex` (int), `p1` (const char*) |

### Parameters

- **`scriptIndex`** (`int`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = BgGetLaunchParamValue(scriptIndex, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x55C40B7592BAD213, scriptIndex, p1)
```


---

## BG_GET_SCRIPT_ID_FROM_NAME_HASH

| Property | Value |
|----------|-------|
| Native Name | `BG_GET_SCRIPT_ID_FROM_NAME_HASH` |
| Hash | `0x829CD22E043A2577` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = BgGetScriptIdFromNameHash(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x829CD22E043A2577, p0)
```


---

## BG_IS_EXITFLAG_SET

**Description:** Returns true if GtaThread+0x77C is equal to 1.

Old name: _BG_EXITED_BECAUSE_BACKGROUND_THREAD_STOPPED

| Property | Value |
|----------|-------|
| Native Name | `BG_IS_EXITFLAG_SET` |
| Hash | `0x2238EC3EC631AB1F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = BgIsExitflagSet()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2238EC3EC631AB1F, )
```


---

## BG_SET_EXITFLAG_RESPONSE

**Description:** Sets bit 0 in GtaThread+0x784

| Property | Value |
|----------|-------|
| Native Name | `BG_SET_EXITFLAG_RESPONSE` |
| Hash | `0x4858148E3B8A75D0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
BgSetExitflagResponse()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4858148E3B8A75D0, )
```


---

## BG_START_CONTEXT

**Description:** Inserts the given context into the background scripts context map.

| Property | Value |
|----------|-------|
| Native Name | `BG_START_CONTEXT` |
| Hash | `0x49BA5678BA040CA7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `contextName` (const char*) |

### Parameters

- **`contextName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
BgStartContext(contextName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x49BA5678BA040CA7, contextName)
```


---

## BG_START_CONTEXT_HASH

**Description:** Hashed version of BG_START_CONTEXT

| Property | Value |
|----------|-------|
| Native Name | `BG_START_CONTEXT_HASH` |
| Hash | `0x2EB67D564DCC09D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `contextHash` (Hash) |

### Parameters

- **`contextHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
BgStartContextHash(contextHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2EB67D564DCC09D5, contextHash)
```


---

## COUNT_PARTICIPANT_BITS

| Property | Value |
|----------|-------|
| Native Name | `COUNT_PARTICIPANT_BITS` |
| Hash | `0x2F050A3FF8738245` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `value` (Any*) |

### Parameters

- **`value`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = CountParticipantBits(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2F050A3FF8738245, value)
```


---

## COUNT_PLAYER_BITS

| Property | Value |
|----------|-------|
| Native Name | `COUNT_PLAYER_BITS` |
| Hash | `0x462C687BEA254BD9` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `value` (Any*) |

### Parameters

- **`value`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = CountPlayerBits(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x462C687BEA254BD9, value)
```


---

## DOES_SCRIPT_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_SCRIPT_EXIST` |
| Hash | `0x552B171E3F69E5AE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scriptName` (char*) |

### Parameters

- **`scriptName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = DoesScriptExist(scriptName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x552B171E3F69E5AE, scriptName)
```


---

## DOES_SCRIPT_WITH_NAME_HASH_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_SCRIPT_WITH_NAME_HASH_EXIST` |
| Hash | `0xA34E89749F628284` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scriptHash` (Hash) |

### Parameters

- **`scriptHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DoesScriptWithNameHashExist(scriptHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA34E89749F628284, scriptHash)
```


---

## DOES_THREAD_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_THREAD_EXIST` |
| Hash | `0xFF975BC4435A0FA3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `threadId` (int) |

### Parameters

- **`threadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesThreadExist(threadId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFF975BC4435A0FA3, threadId)
```


---

## GET_BLOCK_OF_PLAYER_BITS

| Property | Value |
|----------|-------|
| Native Name | `GET_BLOCK_OF_PLAYER_BITS` |
| Hash | `0xFA3B530A5CC693D5` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `value` (Any*), `p1` (int) |

### Parameters

- **`value`** (`Any*`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetBlockOfPlayerBits(value, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFA3B530A5CC693D5, value, p1)
```


---

## GET_EVENT_AT_INDEX

**Description:** eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)

Returns event name hash: https://alloc8or.re/rdr3/doc/enums/eEventType.txt

| Property | Value |
|----------|-------|
| Native Name | `GET_EVENT_AT_INDEX` |
| Hash | `0xA85E614430EFF816` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `eventGroup` (int), `eventIndex` (int) |

### Parameters

- **`eventGroup`** (`int`)
- **`eventIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetEventAtIndex(eventGroup, eventIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA85E614430EFF816, eventGroup, eventIndex)
```


---

## GET_EVENT_DATA

**Description:** eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)

Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).

https://github.com/femga/rdr3_discoveries/tree/master/AI/EVENTS

| Property | Value |
|----------|-------|
| Native Name | `GET_EVENT_DATA` |
| Hash | `0x57EC5FA4D4D6AFCA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `eventGroup` (int), `eventIndex` (int), `eventData` (Any*), `eventDataSize` (int) |

### Parameters

- **`eventGroup`** (`int`)
- **`eventIndex`** (`int`)
- **`eventData`** (`Any*`)
- **`eventDataSize`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetEventData(eventGroup, eventIndex, eventData, eventDataSize)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57EC5FA4D4D6AFCA, eventGroup, eventIndex, eventData, eventDataSize)
```


---

## GET_EVENT_EXISTS

**Description:** eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_SCRIPT_ERRORS (CEventGroupScriptErrors)

| Property | Value |
|----------|-------|
| Native Name | `GET_EVENT_EXISTS` |
| Hash | `0xC9F59C0A710ECD34` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `eventGroup` (int), `eventType` (Hash) |

### Parameters

- **`eventGroup`** (`int`)
- **`eventType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetEventExists(eventGroup, eventType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC9F59C0A710ECD34, eventGroup, eventType)
```


---

## GET_HASH_OF_THIS_SCRIPT_NAME

| Property | Value |
|----------|-------|
| Native Name | `GET_HASH_OF_THIS_SCRIPT_NAME` |
| Hash | `0xBC2C927F5C264960` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetHashOfThisScriptName()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBC2C927F5C264960, )
```


---

## GET_ID_OF_THIS_THREAD

| Property | Value |
|----------|-------|
| Native Name | `GET_ID_OF_THIS_THREAD` |
| Hash | `0x55525C346BEF6960` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetIdOfThisThread()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x55525C346BEF6960, )
```


---

## GET_NO_LOADING_SCREEN

| Property | Value |
|----------|-------|
| Native Name | `GET_NO_LOADING_SCREEN` |
| Hash | `0x323DAF00687E0F28` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetNoLoadingScreen()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x323DAF00687E0F28, )
```


---

## GET_NUMBER_OF_EVENTS

**Description:** eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork), 2 = unk, 3 = unk, 4 = SCRIPT_EVENT_QUEUE_ERRORS (CEventGroupScriptErrors)

| Property | Value |
|----------|-------|
| Native Name | `GET_NUMBER_OF_EVENTS` |
| Hash | `0x5CE8DE5909565748` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `eventGroup` (int) |

### Parameters

- **`eventGroup`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumberOfEvents(eventGroup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5CE8DE5909565748, eventGroup)
```


---

## GET_NUMBER_OF_THREADS_RUNNING_THE_SCRIPT_WITH_THIS_HASH

**Description:** Gets the number of instances of the specified script is currently running.

Actually returns numRefs - 1.
if (program)
	v3 = rage::scrProgram::GetNumRefs(program) - 1;
return v3;

Old name: _GET_NUMBER_OF_REFERENCES_OF_SCRIPT_WITH_NAME_HASH

| Property | Value |
|----------|-------|
| Native Name | `GET_NUMBER_OF_THREADS_RUNNING_THE_SCRIPT_WITH_THIS_HASH` |
| Hash | `0x8E34C953364A76DD` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `scriptHash` (Hash) |

### Parameters

- **`scriptHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumberOfThreadsRunningTheScriptWithThisHash(scriptHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8E34C953364A76DD, scriptHash)
```


---

## GET_THREAD_EXISTENCE_DETAILS

| Property | Value |
|----------|-------|
| Native Name | `GET_THREAD_EXISTENCE_DETAILS` |
| Hash | `0xD92FA81B64920E85` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `threadId` (int), `threadExists` (BOOL*), `hasScriptHandler` (BOOL*) |

### Parameters

- **`threadId`** (`int`)
- **`threadExists`** (`BOOL*`)
- **`hasScriptHandler`** (`BOOL*`)

### Usage

**Lua (Direct):**
```lua
GetThreadExistenceDetails(threadId, threadExists, hasScriptHandler)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD92FA81B64920E85, threadId, threadExists, hasScriptHandler)
```


---

## HAS_SCRIPT_LOADED

**Description:** Returns if a script has been loaded into the game. Used to see if a script was loaded after requesting.

| Property | Value |
|----------|-------|
| Native Name | `HAS_SCRIPT_LOADED` |
| Hash | `0xE97BD36574F8B0A6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scriptName` (char*) |

### Parameters

- **`scriptName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = HasScriptLoaded(scriptName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE97BD36574F8B0A6, scriptName)
```


---

## HAS_SCRIPT_WITH_NAME_HASH_LOADED

| Property | Value |
|----------|-------|
| Native Name | `HAS_SCRIPT_WITH_NAME_HASH_LOADED` |
| Hash | `0xA5D8E0C2F3C7EEBC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scriptHash` (Hash) |

### Parameters

- **`scriptHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasScriptWithNameHashLoaded(scriptHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA5D8E0C2F3C7EEBC, scriptHash)
```


---

## HAVE_ALL_CHILD_SCRIPTS_TERMINATED

**Description:** Waiting for child scripts to terminate / waiting for collapse of child scripts

| Property | Value |
|----------|-------|
| Native Name | `HAVE_ALL_CHILD_SCRIPTS_TERMINATED` |
| Hash | `0x380FFA15B72408FB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HaveAllChildScriptsTerminated(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x380FFA15B72408FB, p0)
```


---

## IS_LOADING_SCREEN_VISIBLE

**Description:** Same as GET_IS_LOADING_SCREEN_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_LOADING_SCREEN_VISIBLE` |
| Hash | `0xB54ADBE65D528FCB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsLoadingScreenVisible()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB54ADBE65D528FCB, )
```


---

## IS_THREAD_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_THREAD_ACTIVE` |
| Hash | `0x46E9AE36D8FA6417` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `threadId` (int), `ignoreKilledState` (BOOL) |

### Parameters

- **`threadId`** (`int`)
- **`ignoreKilledState`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsThreadActive(threadId, ignoreKilledState)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x46E9AE36D8FA6417, threadId, ignoreKilledState)
```


---

## IS_THREAD_EXIT_REQUESTED

| Property | Value |
|----------|-------|
| Native Name | `IS_THREAD_EXIT_REQUESTED` |
| Hash | `0x9E4EF615E307FBBE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsThreadExitRequested()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9E4EF615E307FBBE, )
```


---

## REQUEST_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_SCRIPT` |
| Hash | `0x46ED607DDD40D7FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scriptName` (char*) |

### Parameters

- **`scriptName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
RequestScript(scriptName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x46ED607DDD40D7FE, scriptName)
```


---

## REQUEST_SCRIPT_WITH_NAME_HASH

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_SCRIPT_WITH_NAME_HASH` |
| Hash | `0xF6B9CE3F8D5B9B74` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scriptHash` (Hash) |

### Parameters

- **`scriptHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RequestScriptWithNameHash(scriptHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF6B9CE3F8D5B9B74, scriptHash)
```


---

## SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID

**Description:** If the function returns 0, the end of the iteration has been reached.

| Property | Value |
|----------|-------|
| Native Name | `SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID` |
| Hash | `0x3CE3FB167E837D7C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ScriptThreadIteratorGetNextThreadId()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3CE3FB167E837D7C, )
```


---

## SCRIPT_THREAD_ITERATOR_RESET

**Description:** Starts a new iteration of the current threads.
Call this first, then SCRIPT_THREAD_ITERATOR_GET_NEXT_THREAD_ID (0x30B4FA1C82DD4B9F)

| Property | Value |
|----------|-------|
| Native Name | `SCRIPT_THREAD_ITERATOR_RESET` |
| Hash | `0x39382EB8DCD8684D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ScriptThreadIteratorReset()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x39382EB8DCD8684D, )
```


---

## SET_BLOCK_OF_PLAYER_BITS

| Property | Value |
|----------|-------|
| Native Name | `SET_BLOCK_OF_PLAYER_BITS` |
| Hash | `0xC6DFB8C04C86D5A5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `value` (Any*), `p1` (int), `p2` (int) |

### Parameters

- **`value`** (`Any*`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetBlockOfPlayerBits(value, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC6DFB8C04C86D5A5, value, p1, p2)
```


---

## SET_EVENT_FLAG_FOR_DELETION

| Property | Value |
|----------|-------|
| Native Name | `SET_EVENT_FLAG_FOR_DELETION` |
| Hash | `0x4768D5252EAEB76F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `eventGroup` (int), `eventIndex` (int), `p2` (BOOL) |

### Parameters

- **`eventGroup`** (`int`)
- **`eventIndex`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEventFlagForDeletion(eventGroup, eventIndex, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4768D5252EAEB76F, eventGroup, eventIndex, p2)
```


---

## SET_NO_LOADING_SCREEN

| Property | Value |
|----------|-------|
| Native Name | `SET_NO_LOADING_SCREEN` |
| Hash | `0x5CB83156AA038F95` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetNoLoadingScreen(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5CB83156AA038F95, toggle)
```


---

## SET_SCRIPT_AS_NO_LONGER_NEEDED

| Property | Value |
|----------|-------|
| Native Name | `SET_SCRIPT_AS_NO_LONGER_NEEDED` |
| Hash | `0x0086D3067E1CFD1C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scriptName` (const char*) |

### Parameters

- **`scriptName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetScriptAsNoLongerNeeded(scriptName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0086D3067E1CFD1C, scriptName)
```


---

## SET_SCRIPT_WITH_NAME_HASH_AS_NO_LONGER_NEEDED

| Property | Value |
|----------|-------|
| Native Name | `SET_SCRIPT_WITH_NAME_HASH_AS_NO_LONGER_NEEDED` |
| Hash | `0x50723A1567C8361E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scriptHash` (Hash) |

### Parameters

- **`scriptHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetScriptWithNameHashAsNoLongerNeeded(scriptHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x50723A1567C8361E, scriptHash)
```


---

## SHUTDOWN_LOADING_SCREEN

| Property | Value |
|----------|-------|
| Native Name | `SHUTDOWN_LOADING_SCREEN` |
| Hash | `0xFC179D7E8886DADF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ShutdownLoadingScreen()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFC179D7E8886DADF, )
```


---

## START_NEW_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `START_NEW_SCRIPT` |
| Hash | `0xE81651AD79516E48` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `scriptName` (const char*), `stackSize` (int) |

### Parameters

- **`scriptName`** (`const char*`)
- **`stackSize`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StartNewScript(scriptName, stackSize)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE81651AD79516E48, scriptName, stackSize)
```


---

## START_NEW_SCRIPT_WITH_ARGS

**Description:** return : script thread id, 0 if failed
Pass pointer to struct of args in p1, size of struct goes into p2

| Property | Value |
|----------|-------|
| Native Name | `START_NEW_SCRIPT_WITH_ARGS` |
| Hash | `0xB8BA7F44DF1575E1` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `scriptName` (const char*), `args` (Any*), `argCount` (int), `stackSize` (int) |

### Parameters

- **`scriptName`** (`const char*`)
- **`args`** (`Any*`)
- **`argCount`** (`int`)
- **`stackSize`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StartNewScriptWithArgs(scriptName, args, argCount, stackSize)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB8BA7F44DF1575E1, scriptName, args, argCount, stackSize)
```


---

## START_NEW_SCRIPT_WITH_NAME_HASH

| Property | Value |
|----------|-------|
| Native Name | `START_NEW_SCRIPT_WITH_NAME_HASH` |
| Hash | `0xEB1C67C3A5333A92` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `scriptHash` (Hash), `stackSize` (int) |

### Parameters

- **`scriptHash`** (`Hash`)
- **`stackSize`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StartNewScriptWithNameHash(scriptHash, stackSize)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEB1C67C3A5333A92, scriptHash, stackSize)
```


---

## START_NEW_SCRIPT_WITH_NAME_HASH_AND_ARGS

| Property | Value |
|----------|-------|
| Native Name | `START_NEW_SCRIPT_WITH_NAME_HASH_AND_ARGS` |
| Hash | `0xC4BB298BD441BE78` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `scriptHash` (Hash), `args` (Any*), `argCount` (int), `stackSize` (int) |

### Parameters

- **`scriptHash`** (`Hash`)
- **`args`** (`Any*`)
- **`argCount`** (`int`)
- **`stackSize`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StartNewScriptWithNameHashAndArgs(scriptHash, args, argCount, stackSize)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC4BB298BD441BE78, scriptHash, args, argCount, stackSize)
```


---

## STOP_DISPLAYING_MP_TRANSITION_LOADING_SCREENS

| Property | Value |
|----------|-------|
| Native Name | `STOP_DISPLAYING_MP_TRANSITION_LOADING_SCREENS` |
| Hash | `0x778D4733E0F2F265` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
StopDisplayingMpTransitionLoadingScreens(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x778D4733E0F2F265, p0)
```


---

## TERMINATE_THIS_THREAD

| Property | Value |
|----------|-------|
| Native Name | `TERMINATE_THIS_THREAD` |
| Hash | `0x5E8B6D17FF91CD59` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
TerminateThisThread()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5E8B6D17FF91CD59, )
```


---

## TERMINATE_THREAD

| Property | Value |
|----------|-------|
| Native Name | `TERMINATE_THREAD` |
| Hash | `0x87ED52AE40EA1A52` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `threadId` (int) |

### Parameters

- **`threadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
TerminateThread(threadId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x87ED52AE40EA1A52, threadId)
```


---

*End of SCRIPTS natives part 1*
