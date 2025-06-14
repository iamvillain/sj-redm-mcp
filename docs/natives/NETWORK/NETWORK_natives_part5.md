# NETWORK Natives - Part 5 of 12

Red Dead Redemption 3 Native Functions Reference

**Namespace:** NETWORK  
**Natives in this file:** 50  
**Total natives in namespace:** 566  
**Generated from:** RDR3natives JSON data

---

## NETWORK_SESSION_REMOVE_SESSION_FLAGS

**Description:** See _NETWORK_SESSION_ADD_SESSION_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_REMOVE_SESSION_FLAGS` |
| Hash | `0x78335E12DB0BF961` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `flags` (int) |

### Parameters

- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionRemoveSessionFlags(flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x78335E12DB0BF961, flags)
```


---

## NETWORK_SESSION_REQUEST_SESSION_COMPETITIVE

**Description:** matchType:
enum eMatchType
{
	MATCHTYPE_DEPRECATED,
	MATCHTYPE_UGCPLAYLIST,
	MATCHTYPE_UGCMISSION,
	MATCHTYPE_MINIGAME,
	MATCHTYPE_SEAMLESS,
	MATCHTYPE_PRIVATE_DO_NOT_USE
};

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_REQUEST_SESSION_COMPETITIVE` |
| Hash | `0x309BBEBEA8A3986C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `flags` (int), `matchType` (int), `userHash` (int), `p3` (int), `sessionRequestId` (Any*) |

### Parameters

- **`flags`** (`int`)
- **`matchType`** (`int`)
- **`userHash`** (`int`)
- **`p3`** (`int`)
- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionRequestSessionCompetitive(flags, matchType, userHash, p3, sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x309BBEBEA8A3986C, flags, matchType, userHash, p3, sessionRequestId)
```


---

## NETWORK_SESSION_REQUEST_SESSION_PRIVATE

**Description:** Session flag 'SF_PRIVATE' is set internally
p1 represents max amount of players in private session

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_REQUEST_SESSION_PRIVATE` |
| Hash | `0x39A8EF7AF29A192C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `flags` (int), `numPlayers` (int), `userHash` (int), `sessionRequestId` (Any*) |

### Parameters

- **`flags`** (`int`)
- **`numPlayers`** (`int`)
- **`userHash`** (`int`)
- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionRequestSessionPrivate(flags, numPlayers, userHash, sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x39A8EF7AF29A192C, flags, numPlayers, userHash, sessionRequestId)
```


---

## NETWORK_SESSION_REQUEST_SESSION_SEAMLESS

**Description:** Equivalent to NETWORK_REQUEST_SESSION_SEAMLESS if userHash == 0.
Otherwise it is equivalent to NETWORK_SESSION_REQUEST_SESSION_COMPETITIVE(flags, MATCHTYPE_SEAMLESS, userHash, 0, sessionRequestId);

p1 is unused

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_REQUEST_SESSION_SEAMLESS` |
| Hash | `0x2989E131FDE37E97` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `flags` (int), `seamlessType` (int), `userHash` (int), `sessionRequestId` (Any*) |

### Parameters

- **`flags`** (`int`)
- **`seamlessType`** (`int`)
- **`userHash`** (`int`)
- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionRequestSessionSeamless(flags, seamlessType, userHash, sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2989E131FDE37E97, flags, seamlessType, userHash, sessionRequestId)
```


---

## NETWORK_SET_COMPLETED_MP_INTRO_FLOW_ON_CURRENT_SLOT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_COMPLETED_MP_INTRO_FLOW_ON_CURRENT_SLOT` |
| Hash | `0x2C5BD9A43987AA27` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `completed` (BOOL) |

### Parameters

- **`completed`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSetCompletedMpIntroFlowOnCurrentSlot(completed)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2C5BD9A43987AA27, completed)
```


---

## NETWORK_SET_ENTITY_ONLY_EXISTS_FOR_PARTICIPANTS

**Description:** if set to true other network players can't see it
if set to false other network player can see it
=========================================
^^ I attempted this by grabbing an object with GET_ENTITY_PLAYER_IS_FREE_AIMING_AT and setting this naive no matter the toggle he could still see it.

pc or last gen?

^^ last-gen

Old name: _NETWORK_SET_ENTITY_INVISIBLE_TO_NETWORK

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_ENTITY_ONLY_EXISTS_FOR_PARTICIPANTS` |
| Hash | `0xF1CA12B18AEF5298` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkSetEntityOnlyExistsForParticipants(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF1CA12B18AEF5298, entity, toggle)
```


---

## NETWORK_SET_ENTITY_REMAINS_WHEN_UNNETWORKED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_ENTITY_REMAINS_WHEN_UNNETWORKED` |
| Hash | `0xD785864798258032` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkSetEntityRemainsWhenUnnetworked(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD785864798258032, entity, toggle)
```


---

## NETWORK_SET_FRIENDLY_FIRE_OPTION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_FRIENDLY_FIRE_OPTION` |
| Hash | `0xF808475FA571D823` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkSetFriendlyFireOption(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF808475FA571D823, toggle)
```


---

## NETWORK_SET_IN_MP_CUTSCENE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_IN_MP_CUTSCENE` |
| Hash | `0x9CA5DE655269FEC4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `p1` (BOOL), `p2` (int), `p3` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)
- **`p1`** (`BOOL`)
- **`p2`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkSetInMpCutscene(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9CA5DE655269FEC4, p0, p1, p2, p3)
```


---

## NETWORK_SET_IN_SPECTATOR_MODE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_IN_SPECTATOR_MODE` |
| Hash | `0x423DE3854BB50894` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL), `playerPed` (Ped) |

### Parameters

- **`toggle`** (`BOOL`)
- **`playerPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
NetworkSetInSpectatorMode(toggle, playerPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x423DE3854BB50894, toggle, playerPed)
```


---

## NETWORK_SET_LOCAL_PLAYER_INVINCIBLE_TIME

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_LOCAL_PLAYER_INVINCIBLE_TIME` |
| Hash | `0x2D95C7E2D7E07307` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `time` (int) |

### Parameters

- **`time`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkSetLocalPlayerInvincibleTime(time)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2D95C7E2D7E07307, time)
```


---

## NETWORK_SET_LOCAL_PLAYER_PENDING_FAST_INSTANCE_ID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_LOCAL_PLAYER_PENDING_FAST_INSTANCE_ID` |
| Hash | `0x007FF852DCF49DA4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `instanceId` (int) |

### Parameters

- **`instanceId`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkSetLocalPlayerPendingFastInstanceId(instanceId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x007FF852DCF49DA4, instanceId)
```


---

## NETWORK_SET_LOCAL_PLAYER_SYNC_LOOK_AT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_LOCAL_PLAYER_SYNC_LOOK_AT` |
| Hash | `0x524FF0AEFF9C3973` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkSetLocalPlayerSyncLookAt(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x524FF0AEFF9C3973, toggle)
```


---

## NETWORK_SET_MISSION_FINISHED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_MISSION_FINISHED` |
| Hash | `0x3B3D11CD9FFCDFC9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkSetMissionFinished()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3B3D11CD9FFCDFC9, )
```


---

## NETWORK_SET_MP_MISSION_FLAG_ON_CURRENT_SLOT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_MP_MISSION_FLAG_ON_CURRENT_SLOT` |
| Hash | `0x86FD10251A7118A4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `enabled` (BOOL), `flagIndex` (int) |

### Parameters

- **`enabled`** (`BOOL`)
- **`flagIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSetMpMissionFlagOnCurrentSlot(enabled, flagIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x86FD10251A7118A4, enabled, flagIndex)
```


---

## NETWORK_SET_PLAYER_IS_PASSIVE

**Description:** Old name: _NETWORK_SET_PASSIVE_MODE_OPTION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_PLAYER_IS_PASSIVE` |
| Hash | `0x9C25E8EC4C535FBD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkSetPlayerIsPassive(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9C25E8EC4C535FBD, toggle)
```


---

## NETWORK_SET_RECENT_GAMERS_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_RECENT_GAMERS_ENABLED` |
| Hash | `0x29FE035D35B8589C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkSetRecentGamersEnabled(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x29FE035D35B8589C, toggle)
```


---

## NETWORK_SET_RICH_PRESENCE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_RICH_PRESENCE` |
| Hash | `0x1DCCACDCFC569362` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (Any*), `p2` (int), `p3` (int) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`Any*`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkSetRichPresence(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1DCCACDCFC569362, p0, p1, p2, p3)
```


---

## NETWORK_SET_SCRIPT_READY_FOR_EVENTS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_SCRIPT_READY_FOR_EVENTS` |
| Hash | `0x7AC752103856FB20` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkSetScriptReadyForEvents(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7AC752103856FB20, toggle)
```


---

## NETWORK_SET_THIS_SCRIPT_IS_NETWORK_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_THIS_SCRIPT_IS_NETWORK_SCRIPT` |
| Hash | `0x1CA59E306ECB80A5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `maxNumMissionParticipants` (int), `p1` (BOOL), `instanceId` (int) |

### Parameters

- **`maxNumMissionParticipants`** (`int`)
- **`p1`** (`BOOL`)
- **`instanceId`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkSetThisScriptIsNetworkScript(maxNumMissionParticipants, p1, instanceId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1CA59E306ECB80A5, maxNumMissionParticipants, p1, instanceId)
```


---

## NETWORK_SHOULD_SHOW_PROMOTION_DLG

**Description:** Hardcoded to return false.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SHOULD_SHOW_PROMOTION_DLG` |
| Hash | `0xDA4B1A479C414FB2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkShouldShowPromotionDlg()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDA4B1A479C414FB2, )
```


---

## NETWORK_SHOW_ACCOUNT_UPGRADE_UI

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SHOW_ACCOUNT_UPGRADE_UI` |
| Hash | `0x83FE8D7229593017` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkShowAccountUpgradeUi()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x83FE8D7229593017, )
```


---

## NETWORK_SHOW_CHAT_RESTRICTION_MSC

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SHOW_CHAT_RESTRICTION_MSC` |
| Hash | `0x6BFF5F84102DF80A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
NetworkShowChatRestrictionMsc(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6BFF5F84102DF80A, player)
```


---

## NETWORK_SHOW_PROFILE_UI

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SHOW_PROFILE_UI` |
| Hash | `0x859ED1CEA343FCA8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
NetworkShowProfileUi(gamerHandle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x859ED1CEA343FCA8, gamerHandle)
```


---

## NETWORK_SHOW_PSN_UGC_RESTRICTION

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SHOW_PSN_UGC_RESTRICTION` |
| Hash | `0x5C497525F803486B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkShowPsnUgcRestriction()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5C497525F803486B, )
```


---

## NETWORK_SPAWN_CONFIG_SET_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SPAWN_CONFIG_SET_FLAGS` |
| Hash | `0xF94A0D5B254375DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `flags` (int) |

### Parameters

- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkSpawnConfigSetFlags(flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF94A0D5B254375DF, flags)
```


---

## NETWORK_SPAWN_CONFIG_SET_GROUND_TO_ROOT_OFFSET

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SPAWN_CONFIG_SET_GROUND_TO_ROOT_OFFSET` |
| Hash | `0x59577799F6AE2F34` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `offset` (float) |

### Parameters

- **`offset`** (`float`)

### Usage

**Lua (Direct):**
```lua
NetworkSpawnConfigSetGroundToRootOffset(offset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x59577799F6AE2F34, offset)
```


---

## NETWORK_SPAWN_CONFIG_SET_TUNING_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SPAWN_CONFIG_SET_TUNING_FLOAT` |
| Hash | `0x0608326F7B98C08D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (float) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
NetworkSpawnConfigSetTuningFloat(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0608326F7B98C08D, p0, p1)
```


---

## NETWORK_START_SOLO_TUTORIAL_SESSION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_START_SOLO_TUTORIAL_SESSION` |
| Hash | `0x17E0198B3882C2CB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkStartSoloTutorialSession()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x17E0198B3882C2CB, )
```


---

## NETWORK_START_USER_CONTENT_PERMISSIONS_CHECK

**Description:** Always returns -1. Seems to be XB1 specific.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_START_USER_CONTENT_PERMISSIONS_CHECK` |
| Hash | `0xDEB2B99A1AF1A2A6` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkStartUserContentPermissionsCheck(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDEB2B99A1AF1A2A6, gamerHandle)
```


---

## NETWORK_TRIGGER_DAMAGE_EVENT_FOR_ZERO_DAMAGE

**Description:** Old name: _NETWORK_SET_VEHICLE_WHEELS_DESTRUCTIBLE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_TRIGGER_DAMAGE_EVENT_FOR_ZERO_DAMAGE` |
| Hash | `0x0C8BC052AE87D744` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkTriggerDamageEventForZeroDamage(entity, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0C8BC052AE87D744, entity, p1)
```


---

## NETWORK_TRY_ACCESS_TUNABLE_BOOL_HASH

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_TRY_ACCESS_TUNABLE_BOOL_HASH` |
| Hash | `0xB2AD5D29A99D4B26` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `tunableContext` (Hash), `tunableName` (Hash), `defaultValue` (BOOL) |

### Parameters

- **`tunableContext`** (`Hash`)
- **`tunableName`** (`Hash`)
- **`defaultValue`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkTryAccessTunableBoolHash(tunableContext, tunableName, defaultValue)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB2AD5D29A99D4B26, tunableContext, tunableName, defaultValue)
```


---

## NETWORK_TRY_ACCESS_TUNABLE_FLOAT_HASH

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_TRY_ACCESS_TUNABLE_FLOAT_HASH` |
| Hash | `0xA18393089C05E49C` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `tunableContext` (Hash), `tunableName` (Hash), `defaultValue` (float) |

### Parameters

- **`tunableContext`** (`Hash`)
- **`tunableName`** (`Hash`)
- **`defaultValue`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkTryAccessTunableFloatHash(tunableContext, tunableName, defaultValue)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA18393089C05E49C, tunableContext, tunableName, defaultValue)
```


---

## NETWORK_TRY_ACCESS_TUNABLE_INT_HASH

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_TRY_ACCESS_TUNABLE_INT_HASH` |
| Hash | `0xA25E006B36719774` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `tunableContext` (Hash), `tunableName` (Hash), `defaultValue` (int) |

### Parameters

- **`tunableContext`** (`Hash`)
- **`tunableName`** (`Hash`)
- **`defaultValue`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkTryAccessTunableIntHash(tunableContext, tunableName, defaultValue)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA25E006B36719774, tunableContext, tunableName, defaultValue)
```


---

## NET_TO_ENT

**Description:** gets the entity id of a network id

| Property | Value |
|----------|-------|
| Native Name | `NET_TO_ENT` |
| Hash | `0xBFFEAB45A9A9094A` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `netHandle` (int) |

### Parameters

- **`netHandle`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetToEnt(netHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBFFEAB45A9A9094A, netHandle)
```


---

## NET_TO_OBJ

**Description:** gets the object id of a network id

| Property | Value |
|----------|-------|
| Native Name | `NET_TO_OBJ` |
| Hash | `0xD8515F5FEA14CB3F` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `netHandle` (int) |

### Parameters

- **`netHandle`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetToObj(netHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD8515F5FEA14CB3F, netHandle)
```


---

## NET_TO_PED

**Description:** gets the ped id of a network id

| Property | Value |
|----------|-------|
| Native Name | `NET_TO_PED` |
| Hash | `0xBDCD95FC216A8B3E` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `netHandle` (int) |

### Parameters

- **`netHandle`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetToPed(netHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBDCD95FC216A8B3E, netHandle)
```


---

## NET_TO_VEH

| Property | Value |
|----------|-------|
| Native Name | `NET_TO_VEH` |
| Hash | `0x367B936610BA360C` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `netHandle` (int) |

### Parameters

- **`netHandle`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetToVeh(netHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x367B936610BA360C, netHandle)
```


---

## OBJ_TO_NET

**Description:** Returns the network ID of the given object.

| Property | Value |
|----------|-------|
| Native Name | `OBJ_TO_NET` |
| Hash | `0x99BFDC94A603E541` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = ObjToNet(object)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x99BFDC94A603E541, object)
```


---

## PARTICIPANT_ID

**Description:** Return the local Participant ID

| Property | Value |
|----------|-------|
| Native Name | `PARTICIPANT_ID` |
| Hash | `0x90986E8876CE0A83` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ParticipantId()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x90986E8876CE0A83, )
```


---

## PARTICIPANT_ID_TO_INT

**Description:** Return the local Participant ID.

This native is exactly the same as 'PARTICIPANT_ID' native.

| Property | Value |
|----------|-------|
| Native Name | `PARTICIPANT_ID_TO_INT` |
| Hash | `0x57A3BDDAD8E5AA0A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ParticipantIdToInt()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57A3BDDAD8E5AA0A, )
```


---

## PED_TO_NET

**Description:** Returns the network ID of the given ped.

| Property | Value |
|----------|-------|
| Native Name | `PED_TO_NET` |
| Hash | `0x0EDEC3C276198689` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = PedToNet(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0EDEC3C276198689, ped)
```


---

## PREVENT_MIGRATION_OF_ENTITIES_IN_FAST_INSTANCE_FOR_LOCAL_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `PREVENT_MIGRATION_OF_ENTITIES_IN_FAST_INSTANCE_FOR_LOCAL_PLAYER` |
| Hash | `0x89D803CD48622150` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PreventMigrationOfEntitiesInFastInstanceForLocalPlayer(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x89D803CD48622150, toggle)
```


---

## PREVENT_NETWORK_ID_MIGRATION

| Property | Value |
|----------|-------|
| Native Name | `PREVENT_NETWORK_ID_MIGRATION` |
| Hash | `0x7182EDDA1EE7DB5A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `netId` (int) |

### Parameters

- **`netId`** (`int`)

### Usage

**Lua (Direct):**
```lua
PreventNetworkIdMigration(netId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7182EDDA1EE7DB5A, netId)
```


---

## RESERVE_NETWORK_CLIENT_MISSION_OBJECTS

| Property | Value |
|----------|-------|
| Native Name | `RESERVE_NETWORK_CLIENT_MISSION_OBJECTS` |
| Hash | `0xE7DDA8BD3BCF751C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReserveNetworkClientMissionObjects(amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE7DDA8BD3BCF751C, amount)
```


---

## RESERVE_NETWORK_CLIENT_MISSION_PEDS

| Property | Value |
|----------|-------|
| Native Name | `RESERVE_NETWORK_CLIENT_MISSION_PEDS` |
| Hash | `0x807E119F80231732` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReserveNetworkClientMissionPeds(amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x807E119F80231732, amount)
```


---

## RESERVE_NETWORK_MISSION_OBJECTS

| Property | Value |
|----------|-------|
| Native Name | `RESERVE_NETWORK_MISSION_OBJECTS` |
| Hash | `0x4E5C93BD0C32FBF8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReserveNetworkMissionObjects(amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4E5C93BD0C32FBF8, amount)
```


---

## RESERVE_NETWORK_MISSION_PEDS

| Property | Value |
|----------|-------|
| Native Name | `RESERVE_NETWORK_MISSION_PEDS` |
| Hash | `0xB60FEBA45333D36F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReserveNetworkMissionPeds(amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB60FEBA45333D36F, amount)
```


---

## RESERVE_NETWORK_MISSION_PICKUPS

| Property | Value |
|----------|-------|
| Native Name | `RESERVE_NETWORK_MISSION_PICKUPS` |
| Hash | `0x4D40E7D749BC6E6D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReserveNetworkMissionPickups(amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D40E7D749BC6E6D, amount)
```


---

## RESERVE_NETWORK_MISSION_VEHICLES

| Property | Value |
|----------|-------|
| Native Name | `RESERVE_NETWORK_MISSION_VEHICLES` |
| Hash | `0x76B02E21ED27A469` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReserveNetworkMissionVehicles(amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x76B02E21ED27A469, amount)
```


---

*End of NETWORK natives part 5*
