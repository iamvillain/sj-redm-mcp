# NETWORK Natives - Part 4 of 12

Red Dead Redemption 3 Native Functions Reference

**Namespace:** NETWORK  
**Natives in this file:** 50  
**Total natives in namespace:** 566  
**Generated from:** RDR3natives JSON data

---

## NETWORK_IS_IN_MP_CUTSCENE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_IN_MP_CUTSCENE` |
| Hash | `0x6CC27C9FA2040220` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsInMpCutscene()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6CC27C9FA2040220, )
```


---

## NETWORK_IS_IN_PLATFORM_PARTY

**Description:** Hardcoded to return false.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_IN_PLATFORM_PARTY` |
| Hash | `0x2FC5650B0271CB57` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsInPlatformParty()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2FC5650B0271CB57, )
```


---

## NETWORK_IS_IN_PLATFORM_PARTY_CHAT

**Description:** Hardcoded to return false.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_IN_PLATFORM_PARTY_CHAT` |
| Hash | `0xFD8B834A8BA05048` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsInPlatformPartyChat()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFD8B834A8BA05048, )
```


---

## NETWORK_IS_IN_SESSION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_IN_SESSION` |
| Hash | `0xCA97246103B63917` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsInSession()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCA97246103B63917, )
```


---

## NETWORK_IS_IN_SPECTATOR_MODE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_IN_SPECTATOR_MODE` |
| Hash | `0x048746E388762E11` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsInSpectatorMode()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x048746E388762E11, )
```


---

## NETWORK_IS_IN_TUTORIAL_SESSION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_IN_TUTORIAL_SESSION` |
| Hash | `0xADA24309FE08DACF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsInTutorialSession()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xADA24309FE08DACF, )
```


---

## NETWORK_IS_PARTICIPANT_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PARTICIPANT_ACTIVE` |
| Hash | `0x6FF8FF40B6357D45` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsParticipantActive(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6FF8FF40B6357D45, p0)
```


---

## NETWORK_IS_PENDING_FRIEND

**Description:** Hardcoded to return false.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PENDING_FRIEND` |
| Hash | `0x0BE73DA6984A6E33` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPendingFriend(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0BE73DA6984A6E33, gamerHandle)
```


---

## NETWORK_IS_PLATFORM_INVITE_PENDING

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PLATFORM_INVITE_PENDING` |
| Hash | `0xFC4165C9165C166F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPlatformInvitePending()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFC4165C9165C166F, )
```


---

## NETWORK_IS_PLAYER_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PLAYER_ACTIVE` |
| Hash | `0xB8DFD30D6973E135` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPlayerActive(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB8DFD30D6973E135, player)
```


---

## NETWORK_IS_PLAYER_A_PARTICIPANT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PLAYER_A_PARTICIPANT` |
| Hash | `0x3CA58F6CB7CBD784` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPlayerAParticipant(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3CA58F6CB7CBD784, player)
```


---

## NETWORK_IS_PLAYER_A_PARTICIPANT_ON_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PLAYER_A_PARTICIPANT_ON_SCRIPT` |
| Hash | `0x1AD5B71586B94820` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Player), `p1` (Any*), `p2` (Any) |

### Parameters

- **`p0`** (`Player`)
- **`p1`** (`Any*`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPlayerAParticipantOnScript(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1AD5B71586B94820, p0, p1, p2)
```


---

## NETWORK_IS_PLAYER_CONCEALED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PLAYER_CONCEALED` |
| Hash | `0x919B3C98ED8292F9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPlayerConcealed(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x919B3C98ED8292F9, player)
```


---

## NETWORK_IS_PLAYER_CONNECTED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PLAYER_CONNECTED` |
| Hash | `0x93DC1BE4E1ABE9D1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPlayerConnected(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x93DC1BE4E1ABE9D1, player)
```


---

## NETWORK_IS_PLAYER_INDEX_VALID

**Description:** Returns true if the passed value is less than 32.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PLAYER_INDEX_VALID` |
| Hash | `0x255A5EF65EDA9167` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPlayerIndexValid(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x255A5EF65EDA9167, player)
```


---

## NETWORK_IS_PLAYER_IN_MP_CUTSCENE

**Description:** Note: scripts seem to indicate that this was renamed to NETWORK_IS_PLAYER_IN_MP_FAST_INSTANCE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PLAYER_IN_MP_CUTSCENE` |
| Hash | `0x63F9EE203C3619F2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPlayerInMpCutscene(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x63F9EE203C3619F2, player)
```


---

## NETWORK_IS_PROMOTION_ENABLED

**Description:** Hardcoded to return false.

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_PROMOTION_ENABLED` |
| Hash | `0x8FF6059DA26E688A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsPromotionEnabled()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8FF6059DA26E688A, )
```


---

## NETWORK_IS_RESETTING_POPULATION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_RESETTING_POPULATION` |
| Hash | `0x1BB50CD340A996E6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsResettingPopulation()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1BB50CD340A996E6, )
```


---

## NETWORK_IS_SCRIPT_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_SCRIPT_ACTIVE` |
| Hash | `0x9D40DF90FAD26098` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scriptName` (const char*), `p1` (int), `p2` (BOOL), `p3` (int) |

### Parameters

- **`scriptName`** (`const char*`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsScriptActive(scriptName, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9D40DF90FAD26098, scriptName, p1, p2, p3)
```


---

## NETWORK_IS_SCRIPT_ACTIVE_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_SCRIPT_ACTIVE_BY_HASH` |
| Hash | `0x1B89BC43B6E69107` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scriptHash` (Hash), `p1` (int), `p2` (BOOL), `p3` (int) |

### Parameters

- **`scriptHash`** (`Hash`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsScriptActiveByHash(scriptHash, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1B89BC43B6E69107, scriptHash, p1, p2, p3)
```


---

## NETWORK_IS_SESSION_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_SESSION_ACTIVE` |
| Hash | `0xD83C2B94E7508980` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsSessionActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD83C2B94E7508980, )
```


---

## NETWORK_IS_SESSION_STARTED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_SESSION_STARTED` |
| Hash | `0x9DE624D2FC4B603F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsSessionStarted()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9DE624D2FC4B603F, )
```


---

## NETWORK_IS_SIGNED_ONLINE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_SIGNED_ONLINE` |
| Hash | `0x1077788E268557C2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsSignedOnline()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1077788E268557C2, )
```


---

## NETWORK_IS_TUNABLE_CLOUD_REQUEST_PENDING

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_TUNABLE_CLOUD_REQUEST_PENDING` |
| Hash | `0x0467C11ED88B7D28` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsTunableCloudRequestPending()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0467C11ED88B7D28, )
```


---

## NETWORK_IS_TUTORIAL_SESSION_CHANGE_PENDING

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_TUTORIAL_SESSION_CHANGE_PENDING` |
| Hash | `0x35F0B98A8387274D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsTutorialSessionChangePending()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x35F0B98A8387274D, )
```


---

## NETWORK_PREVENT_SCRIPT_HOST_MIGRATION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_PREVENT_SCRIPT_HOST_MIGRATION` |
| Hash | `0x2302C0264EA58D31` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkPreventScriptHostMigration()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2302C0264EA58D31, )
```


---

## NETWORK_REFRESH_CURRENT_FRIEND_PAGE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REFRESH_CURRENT_FRIEND_PAGE` |
| Hash | `0x1F51F367B710A832` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkRefreshCurrentFriendPage()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F51F367B710A832, )
```


---

## NETWORK_REGISTER_ENTITY_AS_NETWORKED

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REGISTER_ENTITY_AS_NETWORKED` |
| Hash | `0x06FAACD625D80CAA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
NetworkRegisterEntityAsNetworked(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06FAACD625D80CAA, entity)
```


---

## NETWORK_REGISTER_HOST_BROADCAST_VARIABLES

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REGISTER_HOST_BROADCAST_VARIABLES` |
| Hash | `0x3E9B2F01C50DF595` |
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
NetworkRegisterHostBroadcastVariables(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3E9B2F01C50DF595, p0, p1, p2)
```


---

## NETWORK_REGISTER_PLAYER_BROADCAST_VARIABLES

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REGISTER_PLAYER_BROADCAST_VARIABLES` |
| Hash | `0x3364AA97340CA215` |
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
NetworkRegisterPlayerBroadcastVariables(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3364AA97340CA215, p0, p1, p2)
```


---

## NETWORK_REQUEST_CLOUD_TUNABLES

**Description:** Note: this native was added in build 1311.23, but was only used after build 1436.25

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REQUEST_CLOUD_TUNABLES` |
| Hash | `0x42FB3B532D526E6C` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkRequestCloudTunables()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x42FB3B532D526E6C, )
```


---

## NETWORK_REQUEST_CONTROL_OF_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REQUEST_CONTROL_OF_ENTITY` |
| Hash | `0xB69317BF5E782347` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkRequestControlOfEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB69317BF5E782347, entity)
```


---

## NETWORK_REQUEST_CONTROL_OF_NETWORK_ID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REQUEST_CONTROL_OF_NETWORK_ID` |
| Hash | `0xA670B3662FAFFBD0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `netId` (int) |

### Parameters

- **`netId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkRequestControlOfNetworkId(netId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA670B3662FAFFBD0, netId)
```


---

## NETWORK_REQUEST_CONTROL_OF_PICKUP_PLACEMENT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REQUEST_CONTROL_OF_PICKUP_PLACEMENT` |
| Hash | `0x56ED2C48558DAB78` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkRequestControlOfPickupPlacement(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x56ED2C48558DAB78, p0)
```


---

## NETWORK_REQUEST_JOIN

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REQUEST_JOIN` |
| Hash | `0xE483BB6BE686F632` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkRequestJoin(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE483BB6BE686F632, p0)
```


---

## NETWORK_REQUEST_RECENT_GAMER_NAMES

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REQUEST_RECENT_GAMER_NAMES` |
| Hash | `0x6D206D383BB5F6B1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int), `playerCount` (int) |

### Parameters

- **`p0`** (`int`)
- **`playerCount`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkRequestRecentGamerNames(p0, playerCount)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6D206D383BB5F6B1, p0, playerCount)
```


---

## NETWORK_REQUEST_SESSION_SEAMLESS

**Description:** flags:
enum eSessionRequestOptionFlags
{
	SESSION_REQUEST_OPTION_FLAG_INCLUDE_GANG_MEMBERS = (1 << 1),
	SESSION_REQUEST_OPTION_FLAG_LEADER_KEEPS_GANG = (1 << 7),
};

seamlessType:
enum eSeamlessType
{
	SEAMLESS_TYPE_NORMAL,
	SEAMLESS_TYPE_PVE,
	SEAMLESS_TYPE_DEV,
	SEAMLESS_TYPE_NO_SEAMLESS
};

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_REQUEST_SESSION_SEAMLESS` |
| Hash | `0x04019AE4956D4393` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `flags` (int), `seamlessType` (int), `sessionRequestId` (Any*) |

### Parameters

- **`flags`** (`int`)
- **`seamlessType`** (`int`)
- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkRequestSessionSeamless(flags, seamlessType, sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x04019AE4956D4393, flags, seamlessType, sessionRequestId)
```


---

## NETWORK_RESET_POPULATION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_RESET_POPULATION` |
| Hash | `0x101F538C25ABB39A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `p1` (int) |

### Parameters

- **`p0`** (`BOOL`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkResetPopulation(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x101F538C25ABB39A, p0, p1)
```


---

## NETWORK_RESURRECT_LOCAL_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_RESURRECT_LOCAL_PLAYER` |
| Hash | `0xEA23C49EAA83ACFB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `heading` (float), `p4` (int), `p5` (BOOL), `p6` (Any), `p7` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`p4`** (`int`)
- **`p5`** (`BOOL`)
- **`p6`** (`Any`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkResurrectLocalPlayer(x, y, z, heading, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEA23C49EAA83ACFB, x, y, z, heading, p4, p5, p6, p7)
```


---

## NETWORK_SEED_RANDOM_NUMBER_GENERATOR

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SEED_RANDOM_NUMBER_GENERATOR` |
| Hash | `0xF1B84178F8674195` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `seed` (int) |

### Parameters

- **`seed`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkSeedRandomNumberGenerator(seed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF1B84178F8674195, seed)
```


---

## NETWORK_SESSION_GET_SESSION_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_GET_SESSION_FLAGS` |
| Hash | `0x51F33DBC1A41CBFD` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionGetSessionFlags()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x51F33DBC1A41CBFD, )
```


---

## NETWORK_SESSION_GET_SESSION_TYPE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_GET_SESSION_TYPE` |
| Hash | `0xF0C0C94B404206FA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionGetSessionType()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF0C0C94B404206FA, )
```


---

## NETWORK_SESSION_IS_ANY_REQUEST_IN_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_IS_ANY_REQUEST_IN_PROGRESS` |
| Hash | `0xBAFFDE5F953720D9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionIsAnyRequestInProgress()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBAFFDE5F953720D9, )
```


---

## NETWORK_SESSION_IS_PRIVATE

**Description:** Checks for session flag 'SF_PRIVATE'

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_IS_PRIVATE` |
| Hash | `0xCEF70AA5B3F89BA1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionIsPrivate()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCEF70AA5B3F89BA1, )
```


---

## NETWORK_SESSION_IS_REQUEST_IN_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_IS_REQUEST_IN_PROGRESS` |
| Hash | `0x8FB7C254CFCBF78E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `sessionRequestId` (Any*) |

### Parameters

- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionIsRequestInProgress(sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8FB7C254CFCBF78E, sessionRequestId)
```


---

## NETWORK_SESSION_IS_REQUEST_PENDING_TRANSITION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_IS_REQUEST_PENDING_TRANSITION` |
| Hash | `0xCCF878D50F8AB10D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `sessionRequestId` (Any*) |

### Parameters

- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionIsRequestPendingTransition(sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCCF878D50F8AB10D, sessionRequestId)
```


---

## NETWORK_SESSION_IS_SESSION_REQUEST_ID_VALID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_IS_SESSION_REQUEST_ID_VALID` |
| Hash | `0x2F54B146D3EDCE4D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `sessionRequestId` (Any*) |

### Parameters

- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionIsSessionRequestIdValid(sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2F54B146D3EDCE4D, sessionRequestId)
```


---

## NETWORK_SESSION_IS_TRANSITIONING

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_IS_TRANSITIONING` |
| Hash | `0xF2CBC969C4F090C7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionIsTransitioning()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF2CBC969C4F090C7, )
```


---

## NETWORK_SESSION_LEAVE_SESSION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_LEAVE_SESSION` |
| Hash | `0x17C21B7319A05047` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionLeaveSession()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x17C21B7319A05047, )
```


---

## NETWORK_SESSION_LEFT_QUEUE_OR_REQUESTED_SESSION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SESSION_LEFT_QUEUE_OR_REQUESTED_SESSION` |
| Hash | `0xECE6A0C1B59CD8BE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `sessionRequestId` (Any*) |

### Parameters

- **`sessionRequestId`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSessionLeftQueueOrRequestedSession(sessionRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xECE6A0C1B59CD8BE, sessionRequestId)
```


---

*End of NETWORK natives part 4*
