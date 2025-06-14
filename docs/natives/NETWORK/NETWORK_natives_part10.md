# NETWORK Natives - Part 10 of 12

Red Dead Redemption 3 Native Functions Reference

**Namespace:** NETWORK  
**Natives in this file:** 50  
**Total natives in namespace:** 566  
**Generated from:** RDR3natives JSON data

---

## _NETWORK_ADD_PLAYER_TO_RECENT_GAMERS_LIST

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_ADD_PLAYER_TO_RECENT_GAMERS_LIST` |
| Hash | `0x157D8F3DE12B307F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (int) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkAddPlayerToRecentGamersList(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x157D8F3DE12B307F, player, p1)
```


---

## _NETWORK_ALERT

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_ALERT` |
| Hash | `0x1BAA028F52EED310` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `ctx` (Hash), `lh` (Hash), `ec` (int), `h` (int) |

### Parameters

- **`ctx`** (`Hash`)
- **`lh`** (`Hash`)
- **`ec`** (`int`)
- **`h`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkAlert(ctx, lh, ec, h)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1BAA028F52EED310, ctx, lh, ec, h)
```


---

## _NETWORK_ARE_ONLINE_NOTIFICATIONS_SHOWN_IN_STORY_MODE

**Description:** Returns value of fwuiCachedSetting "general.onlineNotificationsInStoryMode"

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_ARE_ONLINE_NOTIFICATIONS_SHOWN_IN_STORY_MODE` |
| Hash | `0xF5C5929E07512F80` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkAreOnlineNotificationsShownInStoryMode()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF5C5929E07512F80, )
```


---

## _NETWORK_ARE_PLAYERS_IN_SAME_PLATFORM_PARTY

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_ARE_PLAYERS_IN_SAME_PLATFORM_PARTY` |
| Hash | `0x11820D1AE80DEA39` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle1` (Any*), `gamerHandle2` (Any*) |

### Parameters

- **`gamerHandle1`** (`Any*`)
- **`gamerHandle2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkArePlayersInSamePlatformParty(gamerHandle1, gamerHandle2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x11820D1AE80DEA39, gamerHandle1, gamerHandle2)
```


---

## _NETWORK_AUTO_SESSION_IS_AUTO_WARP_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_AUTO_SESSION_IS_AUTO_WARP_DISABLED` |
| Hash | `0xE258570E0C116A66` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkAutoSessionIsAutoWarpDisabled()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE258570E0C116A66, )
```


---

## _NETWORK_AUTO_SESSION_IS_INSTANCED_SESSION

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_AUTO_SESSION_IS_INSTANCED_SESSION` |
| Hash | `0x277865A734918AE6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkAutoSessionIsInstancedSession()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x277865A734918AE6, )
```


---

## _NETWORK_AUTO_SESSION_IS_PROCESSING_SESSION_SPLIT

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_AUTO_SESSION_IS_PROCESSING_SESSION_SPLIT` |
| Hash | `0xA021095C983F20D8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkAutoSessionIsProcessingSessionSplit()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA021095C983F20D8, )
```


---

## _NETWORK_AUTO_SESSION_SET_ALLOWED_TO_MERGE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_AUTO_SESSION_SET_ALLOWED_TO_MERGE` |
| Hash | `0x63246A24F5747510` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL), `p1` (Any*), `p2` (int) |

### Parameters

- **`toggle`** (`BOOL`)
- **`p1`** (`Any*`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkAutoSessionSetAllowedToMerge(toggle, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x63246A24F5747510, toggle, p1, p2)
```


---

## _NETWORK_AUTO_SESSION_SET_ALLOWED_TO_SPLIT

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_AUTO_SESSION_SET_ALLOWED_TO_SPLIT` |
| Hash | `0x0A428058079EE65C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkAutoSessionSetAllowedToSplit(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0A428058079EE65C, toggle)
```


---

## _NETWORK_AUTO_SESSION_SET_AUTO_WARP_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_AUTO_SESSION_SET_AUTO_WARP_ENABLED` |
| Hash | `0x4440FEE3EFE78F54` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkAutoSessionSetAutoWarpEnabled(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4440FEE3EFE78F54, toggle)
```


---

## _NETWORK_AUTO_SESSION_SPLIT_SESSION_SUCCESSFUL

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_AUTO_SESSION_SPLIT_SESSION_SUCCESSFUL` |
| Hash | `0x6D87BA8EF15226CD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkAutoSessionSplitSessionSuccessful()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6D87BA8EF15226CD, )
```


---

## _NETWORK_CAN_ADD_FRIEND

**Description:** On PC this returns true if gamerHandle is a valid handle.

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_CAN_ADD_FRIEND` |
| Hash | `0x99ABE9BF9DADA162` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkCanAddFriend(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x99ABE9BF9DADA162, gamerHandle)
```


---

## _NETWORK_CAN_RECEIVE_INVITE_FROM_HANDLE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_CAN_RECEIVE_INVITE_FROM_HANDLE` |
| Hash | `0xF23D6475640D29EB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkCanReceiveInviteFromHandle(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF23D6475640D29EB, gamerHandle)
```


---

## _NETWORK_CLEAR_CLOCK_OVERRIDE_OVERTIME

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_CLEAR_CLOCK_OVERRIDE_OVERTIME` |
| Hash | `0x65F040D91001ED4B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `milliseconds` (int) |

### Parameters

- **`milliseconds`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkClearClockOverrideOvertime(milliseconds)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x65F040D91001ED4B, milliseconds)
```


---

## _NETWORK_CLOCK_TIME_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_CLOCK_TIME_OVERRIDE` |
| Hash | `0x669E223E64B1903C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hour` (int), `minute` (int), `second` (int), `transitionTime` (int), `pauseClock` (BOOL) |

### Parameters

- **`hour`** (`int`)
- **`minute`** (`int`)
- **`second`** (`int`)
- **`transitionTime`** (`int`)
- **`pauseClock`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkClockTimeOverride(hour, minute, second, transitionTime, pauseClock)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x669E223E64B1903C, hour, minute, second, transitionTime, pauseClock)
```


---

## _NETWORK_CLOCK_TIME_OVERRIDE_2

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_CLOCK_TIME_OVERRIDE_2` |
| Hash | `0xE28C13ECC36FF14E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hour` (int), `minute` (int), `second` (int), `transitionTime` (int), `pauseClock` (BOOL), `clockwise` (BOOL) |

### Parameters

- **`hour`** (`int`)
- **`minute`** (`int`)
- **`second`** (`int`)
- **`transitionTime`** (`int`)
- **`pauseClock`** (`BOOL`)
- **`clockwise`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkClockTimeOverride2(hour, minute, second, transitionTime, pauseClock, clockwise)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE28C13ECC36FF14E, hour, minute, second, transitionTime, pauseClock, clockwise)
```


---

## _NETWORK_DEBUG_REQUEST_ENTITY_POSITION

**Description:** Must be called from a background script, otherwise it will do nothing.

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_DEBUG_REQUEST_ENTITY_POSITION` |
| Hash | `0xFA38B52F91B59075` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
NetworkDebugRequestEntityPosition(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA38B52F91B59075, p0)
```


---

## _NETWORK_DID_RECENT_GAMER_NAMES_REQUEST_SUCCEED

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_DID_RECENT_GAMER_NAMES_REQUEST_SUCCEED` |
| Hash | `0x12AEB56B489415C5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkDidRecentGamerNamesRequestSucceed()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x12AEB56B489415C5, )
```


---

## _NETWORK_GET_CURRENT_FRIEND_PAGE_DATA

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_CURRENT_FRIEND_PAGE_DATA` |
| Hash | `0xA3EEC0A5AFF3FC5B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetCurrentFriendPageData(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA3EEC0A5AFF3FC5B, p0)
```


---

## _NETWORK_GET_DISPLAY_NAME_FROM_HANDLE

**Description:** Example:

char displayName[64];
if (_NETWORK_GET_DISPLAY_NAME_FROM_HANDLE(handle, displayName))
{
	// use displayName
}

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_DISPLAY_NAME_FROM_HANDLE` |
| Hash | `0x7FEE4F07C54B6B3C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*), `displayName` (char*) |

### Parameters

- **`gamerHandle`** (`Any*`)
- **`displayName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetDisplayNameFromHandle(gamerHandle, displayName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7FEE4F07C54B6B3C, gamerHandle, displayName)
```


---

## _NETWORK_GET_GAMERTAG_FROM_FRIEND

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_GAMERTAG_FROM_FRIEND` |
| Hash | `0x5659D87BE674AB17` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGamertagFromFriend(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5659D87BE674AB17, gamerHandle)
```


---

## _NETWORK_GET_GAMER_SESSION_FROM_HANDLE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_GAMER_SESSION_FROM_HANDLE` |
| Hash | `0xFBDFE1C1356E12E8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `data` (Any*), `count` (int) |

### Parameters

- **`data`** (`Any*`)
- **`count`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGamerSessionFromHandle(data, count)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFBDFE1C1356E12E8, data, count)
```


---

## _NETWORK_GET_GAMER_STATUS

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_GAMER_STATUS` |
| Hash | `0xDDAEB478E58F8DEA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*), `p1` (int) |

### Parameters

- **`gamerHandle`** (`Any*`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGamerStatus(gamerHandle, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDDAEB478E58F8DEA, gamerHandle, p1)
```


---

## _NETWORK_GET_GLOBAL_ENTITY_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_GLOBAL_ENTITY_FLAGS` |
| Hash | `0xDD7806FD0543BC3D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGlobalEntityFlags(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDD7806FD0543BC3D, entity)
```


---

## _NETWORK_GET_INSTANCE_ID_OF_THREAD

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_INSTANCE_ID_OF_THREAD` |
| Hash | `0xFB9ECED5B68F3B78` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `threadId` (int) |

### Parameters

- **`threadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetInstanceIdOfThread(threadId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFB9ECED5B68F3B78, threadId)
```


---

## _NETWORK_GET_NUM_RECENT_GAMERS

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_NUM_RECENT_GAMERS` |
| Hash | `0x37A834AEC6A4F74A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetNumRecentGamers()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x37A834AEC6A4F74A, )
```


---

## _NETWORK_GET_PLATFORM_INVITE_ID

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_PLATFORM_INVITE_ID` |
| Hash | `0x9BCF28FB5D65A9BE` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPlatformInviteId()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9BCF28FB5D65A9BE, )
```


---

## _NETWORK_GET_PLAYER_FAST_INSTANCE_ID

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_PLAYER_FAST_INSTANCE_ID` |
| Hash | `0xD9267375834C5EAB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPlayerFastInstanceId(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD9267375834C5EAB, player)
```


---

## _NETWORK_GET_PLAYER_OWNER_OF_NETWORK_ID

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_PLAYER_OWNER_OF_NETWORK_ID` |
| Hash | `0xA6C0787443C9583E` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `netId` (int) |

### Parameters

- **`netId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPlayerOwnerOfNetworkId(netId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA6C0787443C9583E, netId)
```


---

## _NETWORK_GET_RANK

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_RANK` |
| Hash | `0x32C90CDFAF40514C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetRank()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x32C90CDFAF40514C, )
```


---

## _NETWORK_GET_ROS_TITLE_NAME

**Description:** Returns CGameConfig->ConfigOnlineServices->RosTitleName (see gameconfig.xml)

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_ROS_TITLE_NAME` |
| Hash | `0xAC6153A0722F524C` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetRosTitleName()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAC6153A0722F524C, )
```


---

## _NETWORK_GET_SESSION_HOST

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_SESSION_HOST` |
| Hash | `0x8DC9AA3B508B1A85` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetSessionHost()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8DC9AA3B508B1A85, )
```


---

## _NETWORK_GET_SIZE_OF_HOST_BROADCAST_DATA_STORAGE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_SIZE_OF_HOST_BROADCAST_DATA_STORAGE` |
| Hash | `0xBA24095EA96DFE17` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (int*) |

### Parameters

- **`p0`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetSizeOfHostBroadcastDataStorage(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBA24095EA96DFE17, p0)
```


---

## _NETWORK_GET_SIZE_OF_PLAYER_BROADCAST_DATA_STORAGE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_SIZE_OF_PLAYER_BROADCAST_DATA_STORAGE` |
| Hash | `0x690806BC83BC8CA2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (int*) |

### Parameters

- **`p0`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetSizeOfPlayerBroadcastDataStorage(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x690806BC83BC8CA2, p0)
```


---

## _NETWORK_GET_XP

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_XP` |
| Hash | `0xDB438CC9BC6F4022` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetXp()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDB438CC9BC6F4022, )
```


---

## _NETWORK_HAS_COMPLETED_MP_INTRO_FLOW_ON_CURRENT_SLOT

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_HAS_COMPLETED_MP_INTRO_FLOW_ON_CURRENT_SLOT` |
| Hash | `0xDD73C9838CE7181D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasCompletedMpIntroFlowOnCurrentSlot()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDD73C9838CE7181D, )
```


---

## _NETWORK_HAS_CONTROL_OF_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_HAS_CONTROL_OF_ANIM_SCENE` |
| Hash | `0x26A5C12FACFF8724` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasControlOfAnimScene(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x26A5C12FACFF8724, animScene)
```


---

## _NETWORK_HAS_CURRENT_GET_GAMER_STATUS_STARTED

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_HAS_CURRENT_GET_GAMER_STATUS_STARTED` |
| Hash | `0x25189F9908E9CD65` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasCurrentGetGamerStatusStarted()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x25189F9908E9CD65, )
```


---

## _NETWORK_IS_FRIEND_HANDLE_IN_SAME_TITLE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_FRIEND_HANDLE_IN_SAME_TITLE` |
| Hash | `0x665161D250850A9F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsFriendHandleInSameTitle(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x665161D250850A9F, gamerHandle)
```


---

## _NETWORK_IS_FRIEND_HANDLE_ONLINE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_FRIEND_HANDLE_ONLINE` |
| Hash | `0xE348D1404BD80146` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsFriendHandleOnline(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE348D1404BD80146, gamerHandle)
```


---

## _NETWORK_IS_IN_SESSION_LOBBY

**Description:** Hardcoded to return false.

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_IN_SESSION_LOBBY` |
| Hash | `0xC5196C42DE19F646` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsInSessionLobby()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC5196C42DE19F646, )
```


---

## _NETWORK_IS_PLAYER_IN_SPECTATOR_MODE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_PLAYER_IN_SPECTATOR_MODE` |
| Hash | `0x5B709519997ECF0F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPlayerInSpectatorMode(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5B709519997ECF0F, player)
```


---

## _NETWORK_IS_PREVIOUS_UPLOAD_PENDING

**Description:** _NETWORK_IS_T* - _NETWORK_RE*

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_PREVIOUS_UPLOAD_PENDING` |
| Hash | `0xA21E3BAD0A42D199` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPreviousUploadPending()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA21E3BAD0A42D199, )
```


---

## _NETWORK_IS_RECENT_GAMER_NAMES_REQUEST_IN_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_RECENT_GAMER_NAMES_REQUEST_IN_PROGRESS` |
| Hash | `0x4664D213A0CCAF40` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsRecentGamerNamesRequestInProgress()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4664D213A0CCAF40, )
```


---

## _NETWORK_IS_THREAD_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_THREAD_ACTIVE` |
| Hash | `0x31DAD2CD6D49546E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `threadId` (int) |

### Parameters

- **`threadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsThreadActive(threadId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x31DAD2CD6D49546E, threadId)
```


---

## _NETWORK_IS_TRACKED_PLAYER_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_TRACKED_PLAYER_VISIBLE` |
| Hash | `0xE525878A35B9EEBD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `trackedPlayer` (Player) |

### Parameters

- **`player`** (`Player`)
- **`trackedPlayer`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsTrackedPlayerVisible(player, trackedPlayer)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE525878A35B9EEBD, player, trackedPlayer)
```


---

## _NETWORK_PERSONA_PHOTO_WRITE_LOCAL

**Description:** Returns false if pedshot push failed

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_PERSONA_PHOTO_WRITE_LOCAL` |
| Hash | `0x2A48D9567940598F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `texture` (const char*), `playerSlot` (int), `p2` (int), `personaPhotoLocalCacheType` (int) |

### Parameters

- **`texture`** (`const char*`)
- **`playerSlot`** (`int`)
- **`p2`** (`int`)
- **`personaPhotoLocalCacheType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkPersonaPhotoWriteLocal(texture, playerSlot, p2, personaPhotoLocalCacheType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2A48D9567940598F, texture, playerSlot, p2, personaPhotoLocalCacheType)
```


---

## _NETWORK_PERSONA_PHOTO_WRITE_SC_PROFILE

**Description:** Returns false if pedshot push failed

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_PERSONA_PHOTO_WRITE_SC_PROFILE` |
| Hash | `0xB72999D3120599DF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `texture` (const char*), `personaPhotoType` (int), `formatIndex` (int) |

### Parameters

- **`texture`** (`const char*`)
- **`personaPhotoType`** (`int`)
- **`formatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkPersonaPhotoWriteScProfile(texture, personaPhotoType, formatIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB72999D3120599DF, texture, personaPhotoType, formatIndex)
```


---

## _NETWORK_REMOVE_FRIEND

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_REMOVE_FRIEND` |
| Hash | `0x55F618F68AB854D3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkRemoveFriend(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x55F618F68AB854D3, gamerHandle)
```


---

## _NETWORK_REQUEST_CONTROL_OF_ANIM_SCENE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_REQUEST_CONTROL_OF_ANIM_SCENE` |
| Hash | `0xAAA92B631B13F614` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animScene` (AnimScene) |

### Parameters

- **`animScene`** (`AnimScene`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkRequestControlOfAnimScene(animScene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAAA92B631B13F614, animScene)
```


---

*End of NETWORK natives part 10*
