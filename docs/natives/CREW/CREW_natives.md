# CREW Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** CREW  
**Natives in this file:** 18  
**Generated from:** RDR3natives JSON data

---

## NETWORK_CLAN_GET_LOCAL_MEMBERSHIPS_COUNT

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLAN_GET_LOCAL_MEMBERSHIPS_COUNT` |
| Hash | `0x1F471B79ACC90BEF` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkClanGetLocalMembershipsCount()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F471B79ACC90BEF, )
```


---

## NETWORK_CLAN_GET_MEMBERSHIP_DESC

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLAN_GET_MEMBERSHIP_DESC` |
| Hash | `0x48DE78AF2C8885B8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `memberDesc` (Any*), `p1` (int) |

### Parameters

- **`memberDesc`** (`Any*`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkClanGetMembershipDesc(memberDesc, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x48DE78AF2C8885B8, memberDesc, p1)
```


---

## NETWORK_CLAN_IS_EMBLEM_READY

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLAN_IS_EMBLEM_READY` |
| Hash | `0xA134777FF7F33331` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkClanIsEmblemReady(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA134777FF7F33331, p0, p1)
```


---

## NETWORK_CLAN_PLAYER_GET_DESC

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLAN_PLAYER_GET_DESC` |
| Hash | `0xEEE6EACBE8874FBA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `clanDesc` (Any*), `bufferSize` (int), `gamerHandle` (Any*) |

### Parameters

- **`clanDesc`** (`Any*`)
- **`bufferSize`** (`int`)
- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkClanPlayerGetDesc(clanDesc, bufferSize, gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEEE6EACBE8874FBA, clanDesc, bufferSize, gamerHandle)
```


---

## NETWORK_CLAN_PLAYER_IS_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLAN_PLAYER_IS_ACTIVE` |
| Hash | `0xB124B57F571D8F18` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkClanPlayerIsActive(gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB124B57F571D8F18, gamerHandle)
```


---

## NETWORK_CLAN_RELEASE_EMBLEM

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLAN_RELEASE_EMBLEM` |
| Hash | `0x113E6E3E50E286B0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
NetworkClanReleaseEmblem(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x113E6E3E50E286B0, p0)
```


---

## NETWORK_CLAN_REQUEST_EMBLEM

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLAN_REQUEST_EMBLEM` |
| Hash | `0x13518FF1C6B28938` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkClanRequestEmblem(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x13518FF1C6B28938, p0)
```


---

## NETWORK_CLAN_SERVICE_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_CLAN_SERVICE_IS_VALID` |
| Hash | `0x579CCED0265D4896` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkClanServiceIsValid()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x579CCED0265D4896, )
```


---

## NETWORK_FIND_GAMERS_IN_CREW

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_FIND_GAMERS_IN_CREW` |
| Hash | `0xE532D6811B3A4D2A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `crewId` (int) |

### Parameters

- **`crewId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkFindGamersInCrew(crewId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE532D6811B3A4D2A, crewId)
```


---

## NETWORK_GET_PRIMARY_CLAN_DATA_CLEAR

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_PRIMARY_CLAN_DATA_CLEAR` |
| Hash | `0x9AA46BADAD0E27ED` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPrimaryClanDataClear()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9AA46BADAD0E27ED, )
```


---

## NETWORK_GET_PRIMARY_CLAN_DATA_NEW

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_PRIMARY_CLAN_DATA_NEW` |
| Hash | `0xC080FF658B2E41DA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPrimaryClanDataNew(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC080FF658B2E41DA, p0, p1)
```


---

## NETWORK_GET_PRIMARY_CLAN_DATA_PENDING

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_PRIMARY_CLAN_DATA_PENDING` |
| Hash | `0xB5074DB804E28CE7` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPrimaryClanDataPending()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB5074DB804E28CE7, )
```


---

## NETWORK_GET_PRIMARY_CLAN_DATA_START

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_PRIMARY_CLAN_DATA_START` |
| Hash | `0xCE86D8191B762107` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPrimaryClanDataStart(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCE86D8191B762107, p0, p1)
```


---

## NETWORK_GET_PRIMARY_CLAN_DATA_SUCCESS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_PRIMARY_CLAN_DATA_SUCCESS` |
| Hash | `0x5B4F04F19376A0BA` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetPrimaryClanDataSuccess()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5B4F04F19376A0BA, )
```


---

## _0x58D378AF2C8765B7

| Property | Value |
|----------|-------|
| Native Name | `_0x58D378AF2C8765B7` |
| Hash | `0x58D378AF2C8765B7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x58D378AF2C8765B7(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58D378AF2C8765B7, p0)
```


---

## _NETWORK_ACCEPT_CLAN_INVITE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_ACCEPT_CLAN_INVITE` |
| Hash | `0x8E2143144B8E188D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `crewInviteIndex` (int) |

### Parameters

- **`crewInviteIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkAcceptClanInvite(crewInviteIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8E2143144B8E188D, crewInviteIndex)
```


---

## _NETWORK_CLAN_INVITE_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_CLAN_INVITE_PLAYER` |
| Hash | `0xC685B014CE3D988B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkClanInvitePlayer(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC685B014CE3D988B, p0)
```


---

## _NETWORK_CLAN_SET_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_CLAN_SET_ACTIVE` |
| Hash | `0xC080FF658B2E51DA` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkClanSetActive(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC080FF658B2E51DA, p0)
```


---

*End of CREW natives*
