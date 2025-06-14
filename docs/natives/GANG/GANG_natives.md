# GANG Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** GANG  
**Natives in this file:** 42  
**Generated from:** RDR3natives JSON data

---

## NETWORK_GET_GANG_ID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_GANG_ID` |
| Hash | `0x901E0DC25080C8B9` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGangId(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x901E0DC25080C8B9, player)
```


---

## NETWORK_GET_GANG_LEADER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_GANG_LEADER` |
| Hash | `0x4BE6C13A45CCA8EC` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `gangId` (Any) |

### Parameters

- **`gangId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGangLeader(gangId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4BE6C13A45CCA8EC, gangId)
```


---

## NETWORK_GET_NUM_GANG_MEMBERS

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_GET_NUM_GANG_MEMBERS` |
| Hash | `0x149A2751AB66AC02` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `gangId` (Any) |

### Parameters

- **`gangId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetNumGangMembers(gangId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x149A2751AB66AC02, gangId)
```


---

## NETWORK_IS_GANG_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_GANG_ACTIVE` |
| Hash | `0x0F99F6436528A089` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gangId` (Any) |

### Parameters

- **`gangId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsGangActive(gangId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0F99F6436528A089, gangId)
```


---

## NETWORK_IS_GANG_ID_VALID

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_GANG_ID_VALID` |
| Hash | `0xD6F6ACF4392187FB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gangId` (Any) |

### Parameters

- **`gangId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsGangIdValid(gangId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD6F6ACF4392187FB, gangId)
```


---

## NETWORK_IS_GANG_IN_SESSION

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_GANG_IN_SESSION` |
| Hash | `0x93A91A351A07360E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gangId` (Any) |

### Parameters

- **`gangId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsGangInSession(gangId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x93A91A351A07360E, gangId)
```


---

## NETWORK_IS_GANG_LEADER

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_GANG_LEADER` |
| Hash | `0x424B17A7DC5C90BC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsGangLeader(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x424B17A7DC5C90BC, player)
```


---

## NETWORK_IS_IN_SAME_GANG

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_IS_IN_SAME_GANG` |
| Hash | `0x3F59FE6F37869576` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player1` (Player), `player2` (Player) |

### Parameters

- **`player1`** (`Player`)
- **`player2`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsInSameGang(player1, player2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3F59FE6F37869576, player1, player2)
```


---

## _0x0E5C9FB9ED5DFF1C

| Property | Value |
|----------|-------|
| Native Name | `_0x0E5C9FB9ED5DFF1C` |
| Hash | `0x0E5C9FB9ED5DFF1C` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0E5C9FB9ED5DFF1C(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E5C9FB9ED5DFF1C, p0)
```


---

## _0x1F11702DDBD915C6

| Property | Value |
|----------|-------|
| Native Name | `_0x1F11702DDBD915C6` |
| Hash | `0x1F11702DDBD915C6` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1F11702DDBD915C6(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F11702DDBD915C6, p0, p1)
```


---

## _0x2F7EB8B6F6AFE79C

| Property | Value |
|----------|-------|
| Native Name | `_0x2F7EB8B6F6AFE79C` |
| Hash | `0x2F7EB8B6F6AFE79C` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x2F7EB8B6F6AFE79C(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2F7EB8B6F6AFE79C, p0)
```


---

## _0x3ADC71A66356D706

| Property | Value |
|----------|-------|
| Native Name | `_0x3ADC71A66356D706` |
| Hash | `0x3ADC71A66356D706` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x3ADC71A66356D706()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3ADC71A66356D706, )
```


---

## _0x48D82C83987E18E4

| Property | Value |
|----------|-------|
| Native Name | `_0x48D82C83987E18E4` |
| Hash | `0x48D82C83987E18E4` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x48D82C83987E18E4(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x48D82C83987E18E4, p0)
```


---

## _0x51C5EF47086AA0D7

| Property | Value |
|----------|-------|
| Native Name | `_0x51C5EF47086AA0D7` |
| Hash | `0x51C5EF47086AA0D7` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x51C5EF47086AA0D7()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x51C5EF47086AA0D7, )
```


---

## _0x53A94294FDDCF98C

| Property | Value |
|----------|-------|
| Native Name | `_0x53A94294FDDCF98C` |
| Hash | `0x53A94294FDDCF98C` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x53A94294FDDCF98C(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x53A94294FDDCF98C, p0, p1)
```


---

## _0x6102830F764B3DE1

| Property | Value |
|----------|-------|
| Native Name | `_0x6102830F764B3DE1` |
| Hash | `0x6102830F764B3DE1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6102830F764B3DE1(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6102830F764B3DE1, player)
```


---

## _0x644E02F24F9D4E98

| Property | Value |
|----------|-------|
| Native Name | `_0x644E02F24F9D4E98` |
| Hash | `0x644E02F24F9D4E98` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x644E02F24F9D4E98(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x644E02F24F9D4E98, p0, p1)
```


---

## _0x7933754F260B428A

| Property | Value |
|----------|-------|
| Native Name | `_0x7933754F260B428A` |
| Hash | `0x7933754F260B428A` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7933754F260B428A(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7933754F260B428A, player)
```


---

## _0x7BAA30C9BBE8AEE7

| Property | Value |
|----------|-------|
| Native Name | `_0x7BAA30C9BBE8AEE7` |
| Hash | `0x7BAA30C9BBE8AEE7` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7BAA30C9BBE8AEE7(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7BAA30C9BBE8AEE7, p0, p1)
```


---

## _0xA9CEAE8D6637FBAD

| Property | Value |
|----------|-------|
| Native Name | `_0xA9CEAE8D6637FBAD` |
| Hash | `0xA9CEAE8D6637FBAD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xA9CEAE8D6637FBAD(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA9CEAE8D6637FBAD, p0)
```


---

## _0xAD22AB64FA428DF3

| Property | Value |
|----------|-------|
| Native Name | `_0xAD22AB64FA428DF3` |
| Hash | `0xAD22AB64FA428DF3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xAD22AB64FA428DF3(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAD22AB64FA428DF3, p0)
```


---

## _0xAFD3599A3CC5637D

| Property | Value |
|----------|-------|
| Native Name | `_0xAFD3599A3CC5637D` |
| Hash | `0xAFD3599A3CC5637D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0xAFD3599A3CC5637D()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAFD3599A3CC5637D, )
```


---

## _0xB22B1D9F74095382

| Property | Value |
|----------|-------|
| Native Name | `_0xB22B1D9F74095382` |
| Hash | `0xB22B1D9F74095382` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xB22B1D9F74095382(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB22B1D9F74095382, p0)
```


---

## _0xB38C256498748413

| Property | Value |
|----------|-------|
| Native Name | `_0xB38C256498748413` |
| Hash | `0xB38C256498748413` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xB38C256498748413()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB38C256498748413, )
```


---

## _0xC81A9E2C8EFD28D5

| Property | Value |
|----------|-------|
| Native Name | `_0xC81A9E2C8EFD28D5` |
| Hash | `0xC81A9E2C8EFD28D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC81A9E2C8EFD28D5(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC81A9E2C8EFD28D5, p0)
```


---

## _0xDA801F7F6A5278D3

**Description:** _NETWORK_GET_* or _NETWORK_IS_*

| Property | Value |
|----------|-------|
| Native Name | `_0xDA801F7F6A5278D3` |
| Hash | `0xDA801F7F6A5278D3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = _0xDA801F7F6A5278D3(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDA801F7F6A5278D3, player)
```


---

## _0xE4C64CD37CB176AA

| Property | Value |
|----------|-------|
| Native Name | `_0xE4C64CD37CB176AA` |
| Hash | `0xE4C64CD37CB176AA` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xE4C64CD37CB176AA(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE4C64CD37CB176AA, p0)
```


---

## _0xEE4F20004D0288B7

| Property | Value |
|----------|-------|
| Native Name | `_0xEE4F20004D0288B7` |
| Hash | `0xEE4F20004D0288B7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xEE4F20004D0288B7()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEE4F20004D0288B7, )
```


---

## _0xFA7C5B7E087A4CEB

| Property | Value |
|----------|-------|
| Native Name | `_0xFA7C5B7E087A4CEB` |
| Hash | `0xFA7C5B7E087A4CEB` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0xFA7C5B7E087A4CEB()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFA7C5B7E087A4CEB, )
```


---

## _NETWORK_GET_GANG_LEADER_HANDLE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_GANG_LEADER_HANDLE` |
| Hash | `0xCE88A261DCBBA0D9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gangId` (Any), `gamerHandle` (Any*) |

### Parameters

- **`gangId`** (`Any`)
- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGangLeaderHandle(gangId, gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCE88A261DCBBA0D9, gangId, gamerHandle)
```


---

## _NETWORK_GET_GANG_MEMBERS

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_GANG_MEMBERS` |
| Hash | `0xD1BF325C8252A982` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `gangId` (Any), `memberHandles` (Any*) |

### Parameters

- **`gangId`** (`Any`)
- **`memberHandles`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGangMembers(gangId, memberHandles)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD1BF325C8252A982, gangId, memberHandles)
```


---

## _NETWORK_GET_GANG_PRIVACY

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_GANG_PRIVACY` |
| Hash | `0x9970AE8C3D706139` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGangPrivacy()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9970AE8C3D706139, )
```


---

## _NETWORK_GET_GANG_SIZE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_GANG_SIZE` |
| Hash | `0x853B0FA4D8732C57` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `gangId` (Any) |

### Parameters

- **`gangId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetGangSize(gangId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x853B0FA4D8732C57, gangId)
```


---

## _NETWORK_IS_GANG_MEMBER

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_GANG_MEMBER` |
| Hash | `0x9BE7DCB22D32CCBE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gangId` (Any), `player` (Player) |

### Parameters

- **`gangId`** (`Any`)
- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsGangMember(gangId, player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9BE7DCB22D32CCBE, gangId, player)
```


---

## _NETWORK_IS_GANG_OPEN

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_GANG_OPEN` |
| Hash | `0xFCF96CCBD81B24C8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gangId` (Any) |

### Parameters

- **`gangId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsGangOpen(gangId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFCF96CCBD81B24C8, gangId)
```


---

## _NETWORK_IS_IN_MY_GANG

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_IN_MY_GANG` |
| Hash | `0x81FB74C83C2ED69F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsInMyGang(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x81FB74C83C2ED69F, player)
```


---

## _NETWORK_KICK_GANG_MEMBER

**Description:** banTimeSeconds is 120 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_KICK_GANG_MEMBER` |
| Hash | `0xCD9E2D9BC52FD80F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `banTimeSeconds` (int) |

### Parameters

- **`player`** (`Player`)
- **`banTimeSeconds`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkKickGangMember(player, banTimeSeconds)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCD9E2D9BC52FD80F, player, banTimeSeconds)
```


---

## _NETWORK_LEAVE_GANG

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_LEAVE_GANG` |
| Hash | `0x0A04A07BC3074EDB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `disband` (BOOL) |

### Parameters

- **`disband`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
NetworkLeaveGang(disband)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0A04A07BC3074EDB, disband)
```


---

## _NETWORK_REQUEST_GANG_JOIN

**Description:** Returns true if join succeeded, false if failed.

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_REQUEST_GANG_JOIN` |
| Hash | `0xC0474C8BCF6787AD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gangId` (Any) |

### Parameters

- **`gangId`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkRequestGangJoin(gangId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC0474C8BCF6787AD, gangId)
```


---

## _NETWORK_SET_GANG_PRIVACY

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SET_GANG_PRIVACY` |
| Hash | `0xC5BF29F4035277C2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `privacyType` (int) |

### Parameters

- **`privacyType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSetGangPrivacy(privacyType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC5BF29F4035277C2, privacyType)
```


---

## _NETWORK_SET_GANG_SIZE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_SET_GANG_SIZE` |
| Hash | `0x833D8268D51B4522` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `size` (int) |

### Parameters

- **`size`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkSetGangSize(size)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x833D8268D51B4522, size)
```


---

## _NETWORK_START_GANG

**Description:** openStatus = true -> sets privacyType = 2 (PUBLIC_ADVERTISED)
openStatus = false -> sets privacyType = 1 (INVITE_ONLY)

campSize: NET_CAMP_SIZE_SMALLEST = 4, NET_CAMP_SIZE_LARGEST = 7

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_START_GANG` |
| Hash | `0xD1A226F2E05E58FC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `openStatus` (BOOL), `campSize` (int) |

### Parameters

- **`openStatus`** (`BOOL`)
- **`campSize`** (`int`)

### Usage

**Lua (Direct):**
```lua
NetworkStartGang(openStatus, campSize)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD1A226F2E05E58FC, openStatus, campSize)
```


---

*End of GANG natives*
