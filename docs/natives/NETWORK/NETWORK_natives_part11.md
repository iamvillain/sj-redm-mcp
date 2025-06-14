# NETWORK Natives - Part 11 of 12

Red Dead Redemption 3 Native Functions Reference

**Namespace:** NETWORK  
**Natives in this file:** 50  
**Total natives in namespace:** 566  
**Generated from:** RDR3natives JSON data

---

## _NETWORK_RESURRECT_LOCAL_PLAYER_2

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_RESURRECT_LOCAL_PLAYER_2` |
| Hash | `0x4154B7D8C75E5DCF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
NetworkResurrectLocalPlayer2(args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4154B7D8C75E5DCF, args)
```


---

## _NETWORK_SEND_SESSION_INVITE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SEND_SESSION_INVITE` |
| Hash | `0xE47001B7CB8B98AE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*), `contentId` (const char*), `data` (Any*), `dataSize` (int), `p4` (int), `flags` (int) |

### Parameters

- **`gamerHandle`** (`Any*`)
- **`contentId`** (`const char*`)
- **`data`** (`Any*`)
- **`dataSize`** (`int`)
- **`p4`** (`int`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSendSessionInvite(gamerHandle, contentId, data, dataSize, p4, flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE47001B7CB8B98AE, gamerHandle, contentId, data, dataSize, p4, flags)
```


---

## _NETWORK_SESSION_ADD_SESSION_FLAGS

**Description:** enum eSessionFlags
{
	SESSION_FLAG_NONE = 0,
	SF_INSTANCE = (1 << 0),
	SF_MATCH = (1 << 1),
	SF_PRIVATE = (1 << 2),
	SF_BLOCK_INVITES = (1 << 3),
	SF_BLOCK_JOIN_VIA_PRESENCE = (1 << 4),
	SF_BLOCK_NON_HOST_INVITES = (1 << 5),
	SF_BLOCK_IN_PROGRESS_MATCHMAKING_BACKFILL = (1 << 6),
	SF_BLOCK_IN_GAMEPLAY_MATCHMAKING_BACKFILL = (1 << 7),
	SF_BLOCK_INVITES_TEMPORARY = (1 << 8),
	SF_IN_GAMEPLAY = (1 << 9),
	SF_COMPETITIVE = (1 << 10),
	SF_MATCHMAKING_BACKFILL_IS_BLOCKED = (1 << 11)
};

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_ADD_SESSION_FLAGS` |
| Hash | `0xE546BDA1B3E288EE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `flags` (int) |

### Parameters

- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionAddSessionFlags(flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE546BDA1B3E288EE, flags)
```


---

## _NETWORK_SESSION_ARE_SESSION_IDS_EQUAL

**Description:** Note: this native was added in build 1311.23

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_ARE_SESSION_IDS_EQUAL` |
| Hash | `0x4DEC5000F7B508F0` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `sessionId1` (Any*), `sessionId2` (Any*) |

### Parameters

- **`sessionId1`** (`Any*`)
- **`sessionId2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionAreSessionIdsEqual(sessionId1, sessionId2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4DEC5000F7B508F0, sessionId1, sessionId2)
```


---

## _NETWORK_SESSION_CANCEL_REQUEST

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_CANCEL_REQUEST` |
| Hash | `0xE72E5C1289BD1F40` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `sessionRequestId` (Any*) |

### Parameters

- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionCancelRequest(sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE72E5C1289BD1F40, sessionRequestId)
```


---

## _NETWORK_SESSION_GET_SESSION_ID

**Description:** Note: this native was added in build 1311.23

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_GET_SESSION_ID` |
| Hash | `0xE9B356C330C0A806` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `sessionId` (Any*) |

### Parameters

- **`sessionId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
NetworkSessionGetSessionId(sessionId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE9B356C330C0A806, sessionId)
```


---

## _NETWORK_SESSION_GET_SESSION_REQUEST_RESULT

**Description:** Returns result of session request:
0 - NOT_FOUND
1 - IN_PROGRESS
2 - TIMEOUT
3 - PLAYER_OFFLINE
4 - GANG_MEMBERS_CHANGED
5 - PLAYER_CANCELLED
6 - PLAYER_SET_TOO_LARGE
7 - MATCH_ACCEPTED
8 - OTHER

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_GET_SESSION_REQUEST_RESULT` |
| Hash | `0x0DD051B1BF4B8BD6` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `sessionRequestId` (Any*), `p1` (int*) |

### Parameters

- **`sessionRequestId`** (`Any*`)
- **`p1`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionGetSessionRequestResult(sessionRequestId, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0DD051B1BF4B8BD6, sessionRequestId, p1)
```


---

## _NETWORK_SESSION_IS_NSRR_SUCCESS

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_IS_NSRR_SUCCESS` |
| Hash | `0x0F44A5C78D114922` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `sessionRequestId` (Any*) |

### Parameters

- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionIsNsrrSuccess(sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0F44A5C78D114922, sessionRequestId)
```


---

## _NETWORK_SESSION_IS_REQUEST_IN_PROGRESS_BY_QUEUE_GROUP

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_IS_REQUEST_IN_PROGRESS_BY_QUEUE_GROUP` |
| Hash | `0x9E762A595CF88E4A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `queueGroup` (int) |

### Parameters

- **`queueGroup`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionIsRequestInProgressByQueueGroup(queueGroup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9E762A595CF88E4A, queueGroup)
```


---

## _NETWORK_SESSION_PLAYLIST_GET_UPCOMING_CONTENT

**Description:** Only used in R* Script net_rolling_playlist

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_PLAYLIST_GET_UPCOMING_CONTENT` |
| Hash | `0x8F9DB6CD03B42B58` |
| Return Type | `void` |
| Build | `1436` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkSessionPlaylistGetUpcomingContent()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8F9DB6CD03B42B58, )
```


---

## _NETWORK_SESSION_PLAYLIST_GO_TO_NEXT_CONTENT

**Description:** Only used in R* Script net_rolling_playlist

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_PLAYLIST_GO_TO_NEXT_CONTENT` |
| Hash | `0xBDE605F925B07127` |
| Return Type | `void` |
| Build | `1436` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkSessionPlaylistGoToNextContent()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBDE605F925B07127, )
```


---

## _NETWORK_SESSION_REMOVE_PLAYER_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_REMOVE_PLAYER_FLAGS` |
| Hash | `0x3215BBE34D3418C5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `flags` (int) |

### Parameters

- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionRemovePlayerFlags(flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3215BBE34D3418C5, flags)
```


---

## _NETWORK_SESSION_REQUEST_SESSION_NOMINATED

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_REQUEST_SESSION_NOMINATED` |
| Hash | `0x4F4672457FF597D1` |
| Return Type | `BOOL` |
| Build | `1436` |
| Parameters | `flags` (int), `userHash` (int), `p2` (int), `sessionRequestId` (Any*) |

### Parameters

- **`flags`** (`int`)
- **`userHash`** (`int`)
- **`p2`** (`int`)
- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionRequestSessionNominated(flags, userHash, p2, sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4F4672457FF597D1, flags, userHash, p2, sessionRequestId)
```


---

## _NETWORK_SESSION_REQUEST_SESSION_ON_CALL

**Description:** category:
enum eOnCallType
{
	NETWORK_SESSION_REQUEST_ON_CALL_TYPE_STORY = 2,
	NETWORK_SESSION_REQUEST_ON_CALL_TYPE_MATCH = 3
};

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_REQUEST_SESSION_ON_CALL` |
| Hash | `0x23D9C1F2E4098EDC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `flags` (int), `category` (int), `p2` (Any*), `userHash` (int), `sessionRequestId` (Any*) |

### Parameters

- **`flags`** (`int`)
- **`category`** (`int`)
- **`p2`** (`Any*`)
- **`userHash`** (`int`)
- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionRequestSessionOnCall(flags, category, p2, userHash, sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x23D9C1F2E4098EDC, flags, category, p2, userHash, sessionRequestId)
```


---

## _NETWORK_SESSION_SET_PLAYER_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_SET_PLAYER_FLAGS` |
| Hash | `0x0AE241A4A9ADEEEC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `flags` (int) |

### Parameters

- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionSetPlayerFlags(flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0AE241A4A9ADEEEC, flags)
```


---

## _NETWORK_SESSION_TRANSITION_TO_SESSION

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SESSION_TRANSITION_TO_SESSION` |
| Hash | `0xF20B18A330E6DB5C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `sessionRequestId` (Any*) |

### Parameters

- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionTransitionToSession(sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF20B18A330E6DB5C, sessionRequestId)
```


---

## _NETWORK_SET_IN_STATIC_SPECTATOR_MODE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SET_IN_STATIC_SPECTATOR_MODE` |
| Hash | `0xFBF1ECFB39A77B5F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`toggle`** (`BOOL`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
NetworkSetInStaticSpectatorMode(toggle, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFBF1ECFB39A77B5F, toggle, x, y, z)
```


---

## _NETWORK_SPAWN_CONFIG_ADD_EXCLUSION_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SPAWN_CONFIG_ADD_EXCLUSION_VOLUME` |
| Hash | `0xEEB7818B1D307212` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
NetworkSpawnConfigAddExclusionVolume(volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEEB7818B1D307212, volume)
```


---

## _NETWORK_SPAWN_CONFIG_ADD_PROPERTY_PREFERENCE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SPAWN_CONFIG_ADD_PROPERTY_PREFERENCE` |
| Hash | `0xEB6027FD1B4600D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `configProperty` (int), `include` (BOOL), `weight` (float) |

### Parameters

- **`configProperty`** (`int`)
- **`include`** (`BOOL`)
- **`weight`** (`float`)

### Usage

**Lua (Direct):**
```lua
NetworkSpawnConfigAddPropertyPreference(configProperty, include, weight)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEB6027FD1B4600D5, configProperty, include, weight)
```


---

## _NETWORK_SPAWN_CONFIG_ADD_PROPERTY_SCRIPTED

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SPAWN_CONFIG_ADD_PROPERTY_SCRIPTED` |
| Hash | `0x44D59EC597BBF348` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `configProperty` (int), `include` (BOOL) |

### Parameters

- **`configProperty`** (`int`)
- **`include`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkSpawnConfigAddPropertyScripted(configProperty, include)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x44D59EC597BBF348, configProperty, include)
```


---

## _NETWORK_SPAWN_CONFIG_ADD_SPAWN_POINT

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SPAWN_CONFIG_ADD_SPAWN_POINT` |
| Hash | `0xFD1AC0B3858F224C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `heading` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)

### Usage

**Lua (Direct):**
```lua
NetworkSpawnConfigAddSpawnPoint(x, y, z, heading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFD1AC0B3858F224C, x, y, z, heading)
```


---

## _NETWORK_SPAWN_CONFIG_REMOVE_EXCLUSION_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SPAWN_CONFIG_REMOVE_EXCLUSION_VOLUME` |
| Hash | `0xA35E7BF20FA269E0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume) |

### Parameters

- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
NetworkSpawnConfigRemoveExclusionVolume(volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA35E7BF20FA269E0, volume)
```


---

## _NETWORK_SPAWN_CONFIG_SEARCH_IN_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SPAWN_CONFIG_SEARCH_IN_PROGRESS` |
| Hash | `0x89EC2FC89ECB1005` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkSpawnConfigSearchInProgress()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x89EC2FC89ECB1005, )
```


---

## _NETWORK_SPAWN_CONFIG_SET_CANCEL_SEARCH

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SPAWN_CONFIG_SET_CANCEL_SEARCH` |
| Hash | `0x765E60A1DCB8B1CE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkSpawnConfigSetCancelSearch()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x765E60A1DCB8B1CE, )
```


---

## _NETWORK_SPAWN_CONFIG_SET_LEVEL_WATER_DEPTH

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SPAWN_CONFIG_SET_LEVEL_WATER_DEPTH` |
| Hash | `0xBDCC671B911040F9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `waterDepthLevel` (int) |

### Parameters

- **`waterDepthLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkSpawnConfigSetLevelWaterDepth(waterDepthLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBDCC671B911040F9, waterDepthLevel)
```


---

## _NET_TO_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `_NET_TO_ANIM_SCENE` |
| Hash | `0xD7F6781A0ABAF6FB` |
| Return Type | `AnimScene` |
| Build | `1207` |
| Parameters | `netId` (int) |

### Parameters

- **`netId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetToAnimScene(netId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD7F6781A0ABAF6FB, netId)
```


---

## _NET_TO_PROPSET

| Property | Value |
|----------|-------|
| Native Name | `_NET_TO_PROPSET` |
| Hash | `0xD08066E00D26C448` |
| Return Type | `PropSet` |
| Build | `1207` |
| Parameters | `netId` (int) |

### Parameters

- **`netId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetToPropset(netId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD08066E00D26C448, netId)
```


---

## _PEDMUGSHOT_GET_STATUS

| Property | Value |
|----------|-------|
| Native Name | `_PEDMUGSHOT_GET_STATUS` |
| Hash | `0xCBAC13F065C47596` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = PedmugshotGetStatus()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCBAC13F065C47596, )
```


---

## _PEDMUGSHOT_REQUEST_SEND

| Property | Value |
|----------|-------|
| Native Name | `_PEDMUGSHOT_REQUEST_SEND` |
| Hash | `0xFBC30B70B3CDB87E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = PedmugshotRequestSend()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFBC30B70B3CDB87E, )
```


---

## _PEDMUGSHOT_TAKE

| Property | Value |
|----------|-------|
| Native Name | `_PEDMUGSHOT_TAKE` |
| Hash | `0xCD954F330693F5F2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = PedmugshotTake()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCD954F330693F5F2, )
```


---

## _PROPSET_TO_NET

| Property | Value |
|----------|-------|
| Native Name | `_PROPSET_TO_NET` |
| Hash | `0x74F99EF7EF503398` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `propSet` (PropSet) |

### Parameters

- **`propSet`** (`PropSet`)

### Usage

**Lua (Direct):**
```lua
local result = PropsetToNet(propSet)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74F99EF7EF503398, propSet)
```


---

## _REPORT_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `_REPORT_PLAYER` |
| Hash | `0xA197C35F73AC0F12` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `reportType` (int), `description` (const char*), `horseName` (const char*) |

### Parameters

- **`player`** (`Player`)
- **`reportType`** (`int`)
- **`description`** (`const char*`)
- **`horseName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ReportPlayer(player, reportType, description, horseName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA197C35F73AC0F12, player, reportType, description, horseName)
```


---

## _REQUEST_PEDSHOT_TEXTURE_LOCAL_BACKUP_DOWNLOAD

**Description:** Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PEDSHOT_TEXTURE_LOCAL_BACKUP_DOWNLOAD` |
| Hash | `0x356F9FB0698C1FEB` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `player` (int), `personaPhotoLocalCacheType` (int) |

### Parameters

- **`player`** (`int`)
- **`personaPhotoLocalCacheType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RequestPedshotTextureLocalBackupDownload(player, personaPhotoLocalCacheType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x356F9FB0698C1FEB, player, personaPhotoLocalCacheType)
```


---

## _REQUEST_PEDSHOT_TEXTURE_LOCAL_DOWNLOAD

**Description:** Only used in R* SP Script map_app_event_handler

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PEDSHOT_TEXTURE_LOCAL_DOWNLOAD` |
| Hash | `0xCAF4CA2F87779F8F` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*), `p1` (int) |

### Parameters

- **`gamerHandle`** (`Any*`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RequestPedshotTextureLocalDownload(gamerHandle, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCAF4CA2F87779F8F, gamerHandle, p1)
```


---

## _REQUEST_PEDSHOT_TEXTURE_MULTIPLAYER_DOWNLOAD

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PEDSHOT_TEXTURE_MULTIPLAYER_DOWNLOAD` |
| Hash | `0xB5C4B18B12A2AF23` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*), `p1` (int) |

### Parameters

- **`gamerHandle`** (`Any*`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RequestPedshotTextureMultiplayerDownload(gamerHandle, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB5C4B18B12A2AF23, gamerHandle, p1)
```


---

## _SET_DOOR_NETWORKED

| Property | Value |
|----------|-------|
| Native Name | `_SET_DOOR_NETWORKED` |
| Hash | `0x51D99497ABF3F451` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `doorHash` (Hash) |

### Parameters

- **`doorHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetDoorNetworked(doorHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x51D99497ABF3F451, doorHash)
```


---

## _SET_DOOR_UNNETWORKED

| Property | Value |
|----------|-------|
| Native Name | `_SET_DOOR_UNNETWORKED` |
| Hash | `0xC1E1A3D5ED7617B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `toggle` (BOOL) |

### Parameters

- **`p0`** (`Any`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDoorUnnetworked(p0, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC1E1A3D5ED7617B8, p0, toggle)
```


---

## _SET_ENTITY_GHOSTED_TO_LOCAL_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_GHOSTED_TO_LOCAL_PLAYER` |
| Hash | `0xEE5AE9956743BA20` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityGhostedToLocalPlayer(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEE5AE9956743BA20, entity, toggle)
```


---

## _SET_LAUNCH_PARAM_STRING

| Property | Value |
|----------|-------|
| Native Name | `_SET_LAUNCH_PARAM_STRING` |
| Hash | `0xDFFC15AA63D04AAB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `params` (const char*) |

### Parameters

- **`params`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetLaunchParamString(params)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDFFC15AA63D04AAB, params)
```


---

## _SET_LAUNCH_PARAM_VALUE

| Property | Value |
|----------|-------|
| Native Name | `_SET_LAUNCH_PARAM_VALUE` |
| Hash | `0x668AF6E4933AC13F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `paramName` (const char*), `value` (const char*) |

### Parameters

- **`paramName`** (`const char*`)
- **`value`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetLaunchParamValue(paramName, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x668AF6E4933AC13F, paramName, value)
```


---

## _SET_LOCAL_PLAYER_DAMAGE_MULTIPLIER_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `_SET_LOCAL_PLAYER_DAMAGE_MULTIPLIER_FOR_PLAYER` |
| Hash | `0xD041A32992A55F84` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `damageMultiplier` (float) |

### Parameters

- **`player`** (`Player`)
- **`damageMultiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetLocalPlayerDamageMultiplierForPlayer(player, damageMultiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD041A32992A55F84, player, damageMultiplier)
```


---

## _SET_NETWORK_RESPOT_TIMER

| Property | Value |
|----------|-------|
| Native Name | `_SET_NETWORK_RESPOT_TIMER` |
| Hash | `0x442B4347B6EC36E8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `timer` (int), `p2` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`timer`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetNetworkRespotTimer(entity, timer, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x442B4347B6EC36E8, entity, timer, p2)
```


---

## _SET_PLAYER_VISIBILITY_TO_LOCAL_PLAYER_DISABLED

**Description:** _SET_PLAYER_V* - _SET_S*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_VISIBILITY_TO_LOCAL_PLAYER_DISABLED` |
| Hash | `0xDCA6ABDB9288FBE4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `disabled` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`disabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerVisibilityToLocalPlayerDisabled(player, disabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDCA6ABDB9288FBE4, player, disabled)
```


---

## _SET_SOCIAL_MATCHMAKING_ALLOWED

| Property | Value |
|----------|-------|
| Native Name | `_SET_SOCIAL_MATCHMAKING_ALLOWED` |
| Hash | `0x777D0571A466B520` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetSocialMatchmakingAllowed(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x777D0571A466B520, toggle)
```


---

## _TEXTURE_DOWNLOAD_RELEASE_BY_NAME

| Property | Value |
|----------|-------|
| Native Name | `_TEXTURE_DOWNLOAD_RELEASE_BY_NAME` |
| Hash | `0x7A17B7981560FFA5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (const char*) |

### Parameters

- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
TextureDownloadReleaseByName(name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7A17B7981560FFA5, name)
```


---

## _TEXTURE_DOWNLOAD_TEXTURE_NAME_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `_TEXTURE_DOWNLOAD_TEXTURE_NAME_IS_VALID` |
| Hash | `0xE2C3CEC3C0903A00` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `name` (const char*) |

### Parameters

- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = TextureDownloadTextureNameIsValid(name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE2C3CEC3C0903A00, name)
```


---

## _UGC_HAS_PRIVILEGE

**Description:** Checks if the user has ROS privilege 14.

| Property | Value |
|----------|-------|
| Native Name | `_UGC_HAS_PRIVILEGE` |
| Hash | `0x6506BFA755FB209C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = UgcHasPrivilege()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6506BFA755FB209C, )
```


---

## _UGC_IS_BOOK_MARKED

| Property | Value |
|----------|-------|
| Native Name | `_UGC_IS_BOOK_MARKED` |
| Hash | `0xE42D1042F09865FE` |
| Return Type | `BOOL` |
| Build | `1355` |
| Parameters | `contentId` (const char*) |

### Parameters

- **`contentId`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = UgcIsBookMarked(contentId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE42D1042F09865FE, contentId)
```


---

## _UGC_QUERY_BY_CATEGORY

**Description:** Returns ugcRequestId

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_BY_CATEGORY` |
| Hash | `0x8C109958C9BB559D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `categoryType` (int), `p1` (int), `maxGet` (int), `contentTypeName` (const char*), `p4` (int), `p5` (BOOL) |

### Parameters

- **`categoryType`** (`int`)
- **`p1`** (`int`)
- **`maxGet`** (`int`)
- **`contentTypeName`** (`const char*`)
- **`p4`** (`int`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryByCategory(categoryType, p1, maxGet, contentTypeName, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8C109958C9BB559D, categoryType, p1, maxGet, contentTypeName, p4, p5)
```


---

## _UGC_QUERY_BY_CONTENT_ID

**Description:** Returns ugcRequestId

| Property | Value |
|----------|-------|
| Native Name | `_UGC_QUERY_BY_CONTENT_ID` |
| Hash | `0x69D22E183580113F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `contentId` (const char*), `latestVersion` (BOOL), `contentTypeName` (const char*) |

### Parameters

- **`contentId`** (`const char*`)
- **`latestVersion`** (`BOOL`)
- **`contentTypeName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryByContentId(contentId, latestVersion, contentTypeName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x69D22E183580113F, contentId, latestVersion, contentTypeName)
```


---

*End of NETWORK natives part 11*
