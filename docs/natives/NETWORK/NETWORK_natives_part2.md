# NETWORK Natives - Part 2 of 12

Red Dead Redemption 3 Native Functions Reference

**Namespace:** NETWORK  
**Natives in this file:** 50  
**Total natives in namespace:** 566  
**Generated from:** RDR3natives JSON data

---

## NETWORK_ARE_PLAYERS_IN_SAME_TUTORIAL_SESSION

**Description:** Old name: _NETWORK_IS_PLAYER_EQUAL_TO_INDEX

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_ARE_PLAYERS_IN_SAME_TUTORIAL_SESSION` |
| Hash | `0x9DE986FC9A87C474` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `index` (int) |

### Parameters

- **`player`** (`Player`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkArePlayersInSameTutorialSession(player, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9DE986FC9A87C474, player, index)
```


---

## NETWORK_AUTO_SESSION_CAN_SPLIT_SESSION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_AUTO_SESSION_CAN_SPLIT_SESSION` |
| Hash | `0xE404BFF0ABA23CDC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int*) |

### Parameters

- **`p0`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkAutoSessionCanSplitSession(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE404BFF0ABA23CDC, p0)
```


---

## NETWORK_AUTO_SESSION_FINISH_INSTANCE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_AUTO_SESSION_FINISH_INSTANCE` |
| Hash | `0xBB51299166B844F3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkAutoSessionFinishInstance()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB51299166B844F3, )
```


---

## NETWORK_AUTO_SESSION_IS_ALLOWED_TO_MERGE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_AUTO_SESSION_IS_ALLOWED_TO_MERGE` |
| Hash | `0xAADED99A6B268A27` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkAutoSessionIsAllowedToMerge()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAADED99A6B268A27, )
```


---

## NETWORK_AUTO_SESSION_IS_OBJECT_CREATION_PAUSED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_AUTO_SESSION_IS_OBJECT_CREATION_PAUSED` |
| Hash | `0x0E2C3AEE6CE603B7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkAutoSessionIsObjectCreationPaused()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E2C3AEE6CE603B7, )
```


---

## NETWORK_AUTO_SESSION_SPLIT_SESSION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_AUTO_SESSION_SPLIT_SESSION` |
| Hash | `0xC223D299C670413D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `playersToTake` (int), `maxInstancePlayers` (int), `sessionFlags` (int), `bucketId` (int) |

### Parameters

- **`playersToTake`** (`int`)
- **`maxInstancePlayers`** (`int`)
- **`sessionFlags`** (`int`)
- **`bucketId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkAutoSessionSplitSession(playersToTake, maxInstancePlayers, sessionFlags, bucketId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC223D299C670413D, playersToTake, maxInstancePlayers, sessionFlags, bucketId)
```


---

## NETWORK_AWARD_HAS_REACHED_MAXCLAIM

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_AWARD_HAS_REACHED_MAXCLAIM` |
| Hash | `0xFBE782B3165AC8EC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkAwardHasReachedMaxclaim(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFBE782B3165AC8EC, p0)
```


---

## NETWORK_CAN_ACCESS_MULTIPLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CAN_ACCESS_MULTIPLAYER` |
| Hash | `0xAF50DA1A3F8B1BA4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `loadingState` (int*) |

### Parameters

- **`loadingState`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkCanAccessMultiplayer(loadingState)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAF50DA1A3F8B1BA4, loadingState)
```


---

## NETWORK_CAN_REFRESH_FRIEND_PAGE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CAN_REFRESH_FRIEND_PAGE` |
| Hash | `0x1AF5E28E64A76A9F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkCanRefreshFriendPage()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1AF5E28E64A76A9F, )
```


---

## NETWORK_CAN_SESSION_END

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CAN_SESSION_END` |
| Hash | `0x4EEBC3694E49C572` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkCanSessionEnd()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4EEBC3694E49C572, )
```


---

## NETWORK_CAN_VIEW_GAMER_USER_CONTENT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CAN_VIEW_GAMER_USER_CONTENT` |
| Hash | `0x246545C37C27A717` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkCanViewGamerUserContent(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x246545C37C27A717, gamerHandle)
```


---

## NETWORK_CHECK_ACCESS_AND_ALERT_IF_FAIL

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CHECK_ACCESS_AND_ALERT_IF_FAIL` |
| Hash | `0x2A8112A974DE1EF6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkCheckAccessAndAlertIfFail()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2A8112A974DE1EF6, )
```


---

## NETWORK_CHECK_COMMUNICATION_PRIVILEGES

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CHECK_COMMUNICATION_PRIVILEGES` |
| Hash | `0x83F28CE49FBBFFBA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkCheckCommunicationPrivileges(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x83F28CE49FBBFFBA, p0)
```


---

## NETWORK_CHECK_USER_CONTENT_PRIVILEGES

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CHECK_USER_CONTENT_PRIVILEGES` |
| Hash | `0x595F028698072DD9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkCheckUserContentPrivileges(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x595F028698072DD9, p0)
```


---

## NETWORK_CLEAR_CLOCK_TIME_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLEAR_CLOCK_TIME_OVERRIDE` |
| Hash | `0xD972DF67326F966E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkClearClockTimeOverride()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD972DF67326F966E, )
```


---

## NETWORK_CLEAR_FOUND_GAMERS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLEAR_FOUND_GAMERS` |
| Hash | `0x6D14CCEE1B40381A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkClearFoundGamers()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D14CCEE1B40381A, )
```


---

## NETWORK_CLEAR_GET_GAMER_STATUS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLEAR_GET_GAMER_STATUS` |
| Hash | `0x86E0660E4F5C956D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkClearGetGamerStatus()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x86E0660E4F5C956D, )
```


---

## NETWORK_CLEAR_PLATFORM_INVITE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLEAR_PLATFORM_INVITE` |
| Hash | `0xA4484173759749B1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkClearPlatformInvite()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA4484173759749B1, )
```


---

## NETWORK_CONCEAL_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CONCEAL_PLAYER` |
| Hash | `0xBBDF066252829606` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkConcealPlayer(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBBDF066252829606, player, toggle)
```


---

## NETWORK_DID_FIND_GAMERS_SUCCEED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_DID_FIND_GAMERS_SUCCEED` |
| Hash | `0xF9B83B77929D8863` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkDidFindGamersSucceed()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF9B83B77929D8863, )
```


---

## NETWORK_DID_GET_GAMER_STATUS_SUCCEED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_DID_GET_GAMER_STATUS_SUCCEED` |
| Hash | `0x5AE17C6B0134B7F1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkDidGetGamerStatusSucceed()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5AE17C6B0134B7F1, )
```


---

## NETWORK_DISABLE_LEAVE_REMOTE_PED_BEHIND

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_DISABLE_LEAVE_REMOTE_PED_BEHIND` |
| Hash | `0xC505036A35AFD01B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkDisableLeaveRemotePedBehind(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC505036A35AFD01B, toggle)
```


---

## NETWORK_DISABLE_PROXIMITY_MIGRATION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_DISABLE_PROXIMITY_MIGRATION` |
| Hash | `0x407091CF6037118E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `netID` (int) |

### Parameters

- **`netID`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkDisableProximityMigration(netID)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x407091CF6037118E, netID)
```


---

## NETWORK_DISABLE_REALTIME_MULTIPLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_DISABLE_REALTIME_MULTIPLAYER` |
| Hash | `0x236905C700FDB54D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkDisableRealtimeMultiplayer()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x236905C700FDB54D, )
```


---

## NETWORK_DISPLAYNAMES_FROM_HANDLES_START

**Description:** Hardcoded to return -1.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_DISPLAYNAMES_FROM_HANDLES_START` |
| Hash | `0xD66C9E72B3CC4982` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkDisplaynamesFromHandlesStart(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD66C9E72B3CC4982, p0, p1)
```


---

## NETWORK_DOES_NETWORK_ID_EXIST

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_DOES_NETWORK_ID_EXIST` |
| Hash | `0x38CE16C96BD11344` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `netID` (int) |

### Parameters

- **`netID`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkDoesNetworkIdExist(netID)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x38CE16C96BD11344, netID)
```


---

## NETWORK_DOES_TUNABLE_EXIST

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_DOES_TUNABLE_EXIST` |
| Hash | `0x85E5F8B9B898B20A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `tunableContext` (Hash), `tunableName` (Hash) |

### Parameters

- **`tunableContext`** (`Hash`)
- **`tunableName`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkDoesTunableExist(tunableContext, tunableName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x85E5F8B9B898B20A, tunableContext, tunableName)
```


---

## NETWORK_DUMP_NET_IF_CONFIG

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_DUMP_NET_IF_CONFIG` |
| Hash | `0xAEDF1BC1C133D6E3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkDumpNetIfConfig()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAEDF1BC1C133D6E3, )
```


---

## NETWORK_END_TUTORIAL_SESSION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_END_TUTORIAL_SESSION` |
| Hash | `0xD0AFAFF5A51D72F7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkEndTutorialSession()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD0AFAFF5A51D72F7, )
```


---

## NETWORK_GET_ASSISTED_DAMAGE_OF_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_ASSISTED_DAMAGE_OF_ENTITY` |
| Hash | `0x4CACA84440FA26F6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `entity` (Entity), `p2` (int*) |

### Parameters

- **`player`** (`Player`)
- **`entity`** (`Entity`)
- **`p2`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetAssistedDamageOfEntity(player, entity, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4CACA84440FA26F6, player, entity, p2)
```


---

## NETWORK_GET_AVERAGE_LATENCY

**Description:** Old name: _NETWORK_GET_AVERAGE_LATENCY_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_AVERAGE_LATENCY` |
| Hash | `0xD414BE129BB81B32` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetAverageLatency(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD414BE129BB81B32, player)
```


---

## NETWORK_GET_AVERAGE_PACKET_LOSS

**Description:** Old name: _NETWORK_GET_AVERAGE_PACKET_LOSS_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_AVERAGE_PACKET_LOSS` |
| Hash | `0x350C23949E43686C` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetAveragePacketLoss(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x350C23949E43686C, player)
```


---

## NETWORK_GET_AVERAGE_PING

**Description:** Same as NETWORK_GET_AVERAGE_LATENCY (0xD414BE129BB81B32)

Old name: _NETWORK_GET_AVERAGE_LATENCY_FOR_PLAYER_2

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_AVERAGE_PING` |
| Hash | `0x0E3A041ED6AC2B45` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetAveragePing(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E3A041ED6AC2B45, player)
```


---

## NETWORK_GET_DESTROYER_OF_NETWORK_ID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_DESTROYER_OF_NETWORK_ID` |
| Hash | `0x7A1ADEEF01740A24` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `netId` (int), `weaponHash` (Hash*) |

### Parameters

- **`netId`** (`int`)
- **`weaponHash`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetDestroyerOfNetworkId(netId, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7A1ADEEF01740A24, netId, weaponHash)
```


---

## NETWORK_GET_DISPLAYNAMES_FROM_HANDLES

**Description:** Hardcoded to return zero.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_DISPLAYNAMES_FROM_HANDLES` |
| Hash | `0x58CC181719256197` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetDisplaynamesFromHandles(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58CC181719256197, p0, p1, p2)
```


---

## NETWORK_GET_ENTITY_FROM_NETWORK_ID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_ENTITY_FROM_NETWORK_ID` |
| Hash | `0xCE4E5D9B0A4FF560` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `netId` (int) |

### Parameters

- **`netId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetEntityFromNetworkId(netId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCE4E5D9B0A4FF560, netId)
```


---

## NETWORK_GET_ENTITY_IS_NETWORKED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_ENTITY_IS_NETWORKED` |
| Hash | `0xC7827959479DCC78` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetEntityIsNetworked(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC7827959479DCC78, entity)
```


---

## NETWORK_GET_ENTITY_KILLER_OF_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_ENTITY_KILLER_OF_PLAYER` |
| Hash | `0x42B2DAA6B596F5F8` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `player` (Player), `weaponHash` (Hash*) |

### Parameters

- **`player`** (`Player`)
- **`weaponHash`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetEntityKillerOfPlayer(player, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x42B2DAA6B596F5F8, player, weaponHash)
```


---

## NETWORK_GET_GAMERTAG_FROM_HANDLE

**Description:** Always returns a null string.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_GAMERTAG_FROM_HANDLE` |
| Hash | `0x426141162EBE5CDB` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGamertagFromHandle(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x426141162EBE5CDB, gamerHandle)
```


---

## NETWORK_GET_GAME_MODE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_GAME_MODE` |
| Hash | `0x225640E09EFFDC3F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGameMode()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x225640E09EFFDC3F, )
```


---

## NETWORK_GET_GLOBAL_CLOCK

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_GLOBAL_CLOCK` |
| Hash | `0x11A7ADCD629E170F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hour` (int*), `minute` (int*), `second` (int*) |

### Parameters

- **`hour`** (`int*`)
- **`minute`** (`int*`)
- **`second`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGlobalClock(hour, minute, second)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x11A7ADCD629E170F, hour, minute, second)
```


---

## NETWORK_GET_GLOBAL_MULTIPLAYER_CLOCK

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_GLOBAL_MULTIPLAYER_CLOCK` |
| Hash | `0x6D03BFBD643B2A02` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hours` (int*), `minutes` (int*), `seconds` (int*) |

### Parameters

- **`hours`** (`int*`)
- **`minutes`** (`int*`)
- **`seconds`** (`int*`)

### Usage

**Lua (Direct):**
```lua
NetworkGetGlobalMultiplayerClock(hours, minutes, seconds)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D03BFBD643B2A02, hours, minutes, seconds)
```


---

## NETWORK_GET_HIGHEST_RELIABLE_RESEND_COUNT

**Description:** Old name: _NETWORK_GET_OLDEST_RESEND_COUNT_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_HIGHEST_RELIABLE_RESEND_COUNT` |
| Hash | `0x52C1EADAF7B10302` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetHighestReliableResendCount(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x52C1EADAF7B10302, player)
```


---

## NETWORK_GET_HOST_OF_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_HOST_OF_SCRIPT` |
| Hash | `0x1D6A14F1F9A736FC` |
| Return Type | `Player` |
| Build | `1436` |
| Parameters | `scriptName` (const char*), `p1` (int), `p2` (int) |

### Parameters

- **`scriptName`** (`const char*`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetHostOfScript(scriptName, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1D6A14F1F9A736FC, scriptName, p1, p2)
```


---

## NETWORK_GET_HOST_OF_THIS_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_HOST_OF_THIS_SCRIPT` |
| Hash | `0xC7B4D79B01FA7A5C` |
| Return Type | `Player` |
| Build | `1232` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetHostOfThisScript()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC7B4D79B01FA7A5C, )
```


---

## NETWORK_GET_HOST_OF_THREAD

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_HOST_OF_THREAD` |
| Hash | `0xB4A25351D79B444C` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `threadId` (int) |

### Parameters

- **`threadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetHostOfThread(threadId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB4A25351D79B444C, threadId)
```


---

## NETWORK_GET_INSTANCE_ID_OF_THIS_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_INSTANCE_ID_OF_THIS_SCRIPT` |
| Hash | `0x638A3A81733086DB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetInstanceIdOfThisScript()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x638A3A81733086DB, )
```


---

## NETWORK_GET_LOCAL_HANDLE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_LOCAL_HANDLE` |
| Hash | `0xE86051786B66CD8E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
NetworkGetLocalHandle(gamerHandle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE86051786B66CD8E, gamerHandle)
```


---

## NETWORK_GET_MAX_NUM_PARTICIPANTS

**Description:** Seems to always return 0, but it's used in quite a few loops.

for (num3 = 0; num3 < NETWORK::0xCCD8C02D(); num3++)
    {
        if (NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE(PLAYER::0x98F3B274(num3)) != 0)
        {
            var num5 = NETWORK::NETWORK_GET_PLAYER_INDEX(PLAYER::0x98F3B274(num3));

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_MAX_NUM_PARTICIPANTS` |
| Hash | `0xA6C90FBC38E395EE` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetMaxNumParticipants()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA6C90FBC38E395EE, )
```


---

## NETWORK_GET_NETWORK_ID_FROM_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_NETWORK_ID_FROM_ENTITY` |
| Hash | `0xA11700682F3AD45C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetNetworkIdFromEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA11700682F3AD45C, entity)
```


---

*End of NETWORK natives part 2*
