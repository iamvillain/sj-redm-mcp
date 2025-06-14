# NETWORK Natives - Part 3 of 12

Red Dead Redemption 3 Native Functions Reference

**Namespace:** NETWORK  
**Natives in this file:** 50  
**Total natives in namespace:** 566  
**Generated from:** RDR3natives JSON data

---

## NETWORK_GET_NETWORK_ID_FROM_ROPE_ID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_NETWORK_ID_FROM_ROPE_ID` |
| Hash | `0x42871327315EDAE8` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ropeId` (int) |

### Parameters

- **`ropeId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetNetworkIdFromRopeId(ropeId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x42871327315EDAE8, ropeId)
```


---

## NETWORK_GET_NET_STATISTICS_INFO

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_NET_STATISTICS_INFO` |
| Hash | `0x6FD992C4A1C1B986` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkGetNetStatisticsInfo()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6FD992C4A1C1B986, )
```


---

## NETWORK_GET_NP_UNAVAILABLE_REASON

**Description:** Hardcoded to return zero.

==== PS4 specific info ====

Returns some sort of unavailable reason:
-1 = REASON_INVALID
 0 = REASON_OTHER
 1 = REASON_SYSTEM_UPDATE
 2 = REASON_GAME_UPDATE
 3 = REASON_SIGNED_OUT
 4 = REASON_AGE
 5 = REASON_CONNECTION

=================================

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_NP_UNAVAILABLE_REASON` |
| Hash | `0x74FB3E29E6D10FA9` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetNpUnavailableReason()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74FB3E29E6D10FA9, )
```


---

## NETWORK_GET_NUM_CONNECTED_PLAYERS

**Description:** Returns the amount of players connected in the current session. Only works when connected to a session/server.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_NUM_CONNECTED_PLAYERS` |
| Hash | `0xA4A79DD2D9600654` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetNumConnectedPlayers()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA4A79DD2D9600654, )
```


---

## NETWORK_GET_NUM_PARTICIPANTS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_NUM_PARTICIPANTS` |
| Hash | `0x18D0456E86604654` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetNumParticipants()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x18D0456E86604654, )
```


---

## NETWORK_GET_NUM_SCRIPT_PARTICIPANTS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_NUM_SCRIPT_PARTICIPANTS` |
| Hash | `0x3658E8CD94FC121A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `scriptName` (const char*), `instanceId` (int), `position` (Hash) |

### Parameters

- **`scriptName`** (`const char*`)
- **`instanceId`** (`int`)
- **`position`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetNumScriptParticipants(scriptName, instanceId, position)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3658E8CD94FC121A, scriptName, instanceId, position)
```


---

## NETWORK_GET_NUM_UNACKED_RELIABLES

**Description:** Old name: _NETWORK_GET_NUM_UNACKED_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_NUM_UNACKED_RELIABLES` |
| Hash | `0xFF8FCF9FFC458A1C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetNumUnackedReliables(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFF8FCF9FFC458A1C, player)
```


---

## NETWORK_GET_PARTICIPANT_INDEX

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_PARTICIPANT_INDEX` |
| Hash | `0x1B84DF6AF2A46938` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetParticipantIndex(index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1B84DF6AF2A46938, index)
```


---

## NETWORK_GET_PLAYER_FROM_GAMER_HANDLE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_PLAYER_FROM_GAMER_HANDLE` |
| Hash | `0xCE5F689CF5A0A49D` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPlayerFromGamerHandle(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCE5F689CF5A0A49D, gamerHandle)
```


---

## NETWORK_GET_PLAYER_INDEX

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_PLAYER_INDEX` |
| Hash | `0x24FB80D107371267` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPlayerIndex(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x24FB80D107371267, player)
```


---

## NETWORK_GET_PLAYER_INDEX_FROM_PED

**Description:** Returns the Player associated to a given Ped when in an online session.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_PLAYER_INDEX_FROM_PED` |
| Hash | `0x6C0E2E0125610278` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPlayerIndexFromPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6C0E2E0125610278, ped)
```


---

## NETWORK_GET_PROMOTION_DLG_SEEN_COUNT

**Description:** Hardcoded to return zero.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_PROMOTION_DLG_SEEN_COUNT` |
| Hash | `0x2FB53C631A49BE92` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPromotionDlgSeenCount()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2FB53C631A49BE92, )
```


---

## NETWORK_GET_RANDOM_INT_RANGED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_RANDOM_INT_RANGED` |
| Hash | `0xE30CF56F1EFA5F43` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `rangeStart` (int), `rangeEnd` (int) |

### Parameters

- **`rangeStart`** (`int`)
- **`rangeEnd`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetRandomIntRanged(rangeStart, rangeEnd)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE30CF56F1EFA5F43, rangeStart, rangeEnd)
```


---

## NETWORK_GET_RECENT_GAMER_NAMES

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_RECENT_GAMER_NAMES` |
| Hash | `0xFEFCC345CE357453` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (int), `outData` (Any*), `dataSize` (int) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`int`)
- **`outData`** (`Any*`)
- **`dataSize`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetRecentGamerNames(p0, p1, outData, dataSize)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFEFCC345CE357453, p0, p1, outData, dataSize)
```


---

## NETWORK_GET_ROPE_ID_FROM_NETWORK_ID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_ROPE_ID_FROM_NETWORK_ID` |
| Hash | `0xEB1A4DD8352EC828` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `netId` (int) |

### Parameters

- **`netId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetRopeIdFromNetworkId(netId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEB1A4DD8352EC828, netId)
```


---

## NETWORK_GET_SCRIPT_STATUS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_SCRIPT_STATUS` |
| Hash | `0x57D158647A6BFABF` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetScriptStatus()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57D158647A6BFABF, )
```


---

## NETWORK_GET_THIS_SCRIPT_IS_NETWORK_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_THIS_SCRIPT_IS_NETWORK_SCRIPT` |
| Hash | `0x2910669969E9535E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetThisScriptIsNetworkScript()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2910669969E9535E, )
```


---

## NETWORK_GET_TIMEOUT_TIME

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_TIMEOUT_TIME` |
| Hash | `0x5ED0356A0CE3A34F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetTimeoutTime()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5ED0356A0CE3A34F, )
```


---

## NETWORK_GET_TOTAL_NUM_FRIENDS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_TOTAL_NUM_FRIENDS` |
| Hash | `0xDB7ABDD203FA3704` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetTotalNumFriends()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDB7ABDD203FA3704, )
```


---

## NETWORK_GET_TOTAL_NUM_PLAYERS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_TOTAL_NUM_PLAYERS` |
| Hash | `0xCF61D4B4702EE9EB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetTotalNumPlayers()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCF61D4B4702EE9EB, )
```


---

## NETWORK_GET_TUNABLE_CLOUD_CRC

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_TUNABLE_CLOUD_CRC` |
| Hash | `0x10BD227A753B0D84` |
| Return Type | `int` |
| Build | `1436` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetTunableCloudCrc()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x10BD227A753B0D84, )
```


---

## NETWORK_GET_UNRELIABLE_RESEND_COUNT

**Description:** Old name: _NETWORK_GET_UNRELIABLE_RESEND_COUNT_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_UNRELIABLE_RESEND_COUNT` |
| Hash | `0x3765C3A3E8192E10` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetUnreliableResendCount(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3765C3A3E8192E10, player)
```


---

## NETWORK_HANDLE_FROM_FRIEND

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HANDLE_FROM_FRIEND` |
| Hash | `0xD45CB817D7E177D2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `friendIndex` (int), `gamerHandle` (Any*) |

### Parameters

- **`friendIndex`** (`int`)
- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
NetworkHandleFromFriend(friendIndex, gamerHandle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD45CB817D7E177D2, friendIndex, gamerHandle)
```


---

## NETWORK_HANDLE_FROM_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HANDLE_FROM_PLAYER` |
| Hash | `0x388EB2B86C73B6B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `gamerHandle` (Any*) |

### Parameters

- **`player`** (`Player`)
- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
NetworkHandleFromPlayer(player, gamerHandle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x388EB2B86C73B6B3, player, gamerHandle)
```


---

## NETWORK_HASH_FROM_PLAYER_HANDLE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HASH_FROM_PLAYER_HANDLE` |
| Hash | `0xBC1D768F2F5D6C05` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkHashFromPlayerHandle(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBC1D768F2F5D6C05, player)
```


---

## NETWORK_HAS_CONTROL_OF_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAS_CONTROL_OF_ENTITY` |
| Hash | `0x01BF60A500E28887` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasControlOfEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x01BF60A500E28887, entity)
```


---

## NETWORK_HAS_CONTROL_OF_NETWORK_ID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAS_CONTROL_OF_NETWORK_ID` |
| Hash | `0x4D36070FE0215186` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `netId` (int) |

### Parameters

- **`netId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasControlOfNetworkId(netId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4D36070FE0215186, netId)
```


---

## NETWORK_HAS_CONTROL_OF_PICKUP

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAS_CONTROL_OF_PICKUP` |
| Hash | `0x5BC9495F0B3B6FA6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `pickup` (Pickup) |

### Parameters

- **`pickup`** (`Pickup`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasControlOfPickup(pickup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5BC9495F0B3B6FA6, pickup)
```


---

## NETWORK_HAS_CONTROL_OF_PICKUP_PLACEMENT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAS_CONTROL_OF_PICKUP_PLACEMENT` |
| Hash | `0x51EABCF2786515AB` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasControlOfPickupPlacement(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x51EABCF2786515AB, p0)
```


---

## NETWORK_HAS_ENTITY_BEEN_REGISTERED_WITH_THIS_THREAD

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAS_ENTITY_BEEN_REGISTERED_WITH_THIS_THREAD` |
| Hash | `0xB07D3185E11657A5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasEntityBeenRegisteredWithThisThread(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB07D3185E11657A5, entity)
```


---

## NETWORK_HAS_PENDING_INVITE_FAILURE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAS_PENDING_INVITE_FAILURE` |
| Hash | `0xD0498AD30E16B6BD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasPendingInviteFailure()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD0498AD30E16B6BD, )
```


---

## NETWORK_HAS_RECEIVED_HOST_BROADCAST_DATA

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAS_RECEIVED_HOST_BROADCAST_DATA` |
| Hash | `0x5D10B3795F3FC886` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasReceivedHostBroadcastData()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5D10B3795F3FC886, )
```


---

## NETWORK_HAS_ROS_PRIVILEGE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAS_ROS_PRIVILEGE` |
| Hash | `0xA699957E60D80214` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `index` (int) |

### Parameters

- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasRosPrivilege(index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA699957E60D80214, index)
```


---

## NETWORK_HAS_SOCIAL_CLUB_ACCOUNT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAS_SOCIAL_CLUB_ACCOUNT` |
| Hash | `0x67A5589628E0CFF6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasSocialClubAccount()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x67A5589628E0CFF6, )
```


---

## NETWORK_HAS_VALID_ROS_CREDENTIALS

**Description:** Returns whether the signed-in user has valid Rockstar Online Services (ROS) credentials.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAS_VALID_ROS_CREDENTIALS` |
| Hash | `0x85443FF4C328F53B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasValidRosCredentials()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x85443FF4C328F53B, )
```


---

## NETWORK_HAVE_ONLINE_PRIVILEGES

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAVE_ONLINE_PRIVILEGES` |
| Hash | `0x25CB5A9F37BFD063` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkHaveOnlinePrivileges()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x25CB5A9F37BFD063, )
```


---

## NETWORK_HAVE_ROS_BANNED_PRIV

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_HAVE_ROS_BANNED_PRIV` |
| Hash | `0x8020A73847E0CA7D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkHaveRosBannedPriv()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8020A73847E0CA7D, )
```


---

## NETWORK_IS_AIM_CAM_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_AIM_CAM_ACTIVE` |
| Hash | `0x8E7CE19219669AEB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsAimCamActive(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8E7CE19219669AEB, player)
```


---

## NETWORK_IS_CLOCK_TIME_OVERRIDDEN

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_CLOCK_TIME_OVERRIDDEN` |
| Hash | `0xD7C95D322FF57522` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsClockTimeOverridden()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD7C95D322FF57522, )
```


---

## NETWORK_IS_CLOUD_AVAILABLE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_CLOUD_AVAILABLE` |
| Hash | `0x9A4CF4F48AD77302` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsCloudAvailable()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A4CF4F48AD77302, )
```


---

## NETWORK_IS_CONNECTED_VIA_RELAY

**Description:** Old name: _NETWORK_IS_CONNECTION_ENDPOINT_RELAY_SERVER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_CONNECTED_VIA_RELAY` |
| Hash | `0x16D3D49902F697BB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsConnectedViaRelay(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x16D3D49902F697BB, player)
```


---

## NETWORK_IS_CUSTOM_UPSELL_ENABLED

**Description:** Hardcoded to return false.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_CUSTOM_UPSELL_ENABLED` |
| Hash | `0x78A9535AF83715C6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsCustomUpsellEnabled()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x78A9535AF83715C6, )
```


---

## NETWORK_IS_FEATURE_SUPPORTED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_FEATURE_SUPPORTED` |
| Hash | `0x9C725D149622BFDE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `featureId` (int) |

### Parameters

- **`featureId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsFeatureSupported(featureId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9C725D149622BFDE, featureId)
```


---

## NETWORK_IS_FINDING_GAMERS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_FINDING_GAMERS` |
| Hash | `0xDDDF64C91BFCF0AA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsFindingGamers()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDDDF64C91BFCF0AA, )
```


---

## NETWORK_IS_FRIEND

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_FRIEND` |
| Hash | `0x1A24A179F9B31654` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsFriend(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1A24A179F9B31654, gamerHandle)
```


---

## NETWORK_IS_GAMER_IN_MY_SESSION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_GAMER_IN_MY_SESSION` |
| Hash | `0x0F10B05DDF8D16E9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsGamerInMySession(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0F10B05DDF8D16E9, gamerHandle)
```


---

## NETWORK_IS_GAME_IN_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_GAME_IN_PROGRESS` |
| Hash | `0x10FAB35428CCC9D7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsGameInProgress()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x10FAB35428CCC9D7, )
```


---

## NETWORK_IS_HANDLE_VALID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_HANDLE_VALID` |
| Hash | `0x6F79B93B0A8E4133` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsHandleValid(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6F79B93B0A8E4133, gamerHandle)
```


---

## NETWORK_IS_HOST

**Description:** If you are host, returns true else returns false.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_HOST` |
| Hash | `0x8DB296B814EDDA07` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsHost()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8DB296B814EDDA07, )
```


---

## NETWORK_IS_HOST_OF_THIS_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_HOST_OF_THIS_SCRIPT` |
| Hash | `0x83CD99A1E6061AB5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsHostOfThisScript()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x83CD99A1E6061AB5, )
```


---

*End of NETWORK natives part 3*
