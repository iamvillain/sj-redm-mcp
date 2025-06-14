# BOUNTY Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** BOUNTY  
**Natives in this file:** 33  
**Generated from:** RDR3natives JSON data

---

## BOUNTY_GET_BOUNTY_ON_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `BOUNTY_GET_BOUNTY_ON_PLAYER` |
| Hash | `0x4EF23E04A0C8FF51` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*), `bountyData` (Any*) |

### Parameters

- **`gamerHandle`** (`Any*`)
- **`bountyData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyGetBountyOnPlayer(gamerHandle, bountyData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4EF23E04A0C8FF51, gamerHandle, bountyData)
```


---

## BOUNTY_GET_COOLDOWN_COLLECTION

| Property | Value |
|----------|-------|
| Native Name | `BOUNTY_GET_COOLDOWN_COLLECTION` |
| Hash | `0x8FAF4D262FABA99C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyGetCooldownCollection(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8FAF4D262FABA99C, p0)
```


---

## BOUNTY_GET_LEGENDARY_TARGET

| Property | Value |
|----------|-------|
| Native Name | `BOUNTY_GET_LEGENDARY_TARGET` |
| Hash | `0x85E4D7B225A30ED1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyGetLegendaryTarget(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x85E4D7B225A30ED1, p0, p1)
```


---

## BOUNTY_GET_WANTED_POSTER_SLOT

| Property | Value |
|----------|-------|
| Native Name | `BOUNTY_GET_WANTED_POSTER_SLOT` |
| Hash | `0xB395A44A0C7CA615` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (Hash), `p2` (Any*) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`Hash`)
- **`p2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyGetWantedPosterSlot(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB395A44A0C7CA615, p0, p1, p2)
```


---

## BOUNTY_REQUEST_BEGIN_LEGENDARY_MISSION

| Property | Value |
|----------|-------|
| Native Name | `BOUNTY_REQUEST_BEGIN_LEGENDARY_MISSION` |
| Hash | `0xFC81D7C7A151CFAA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*), `p1` (int), `p2` (int) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestBeginLegendaryMission(outRpcGuid, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFC81D7C7A151CFAA, outRpcGuid, p1, p2)
```


---

## BOUNTY_REQUEST_BEGIN_LEGENDARY_MISSION_FOR_POSSE

| Property | Value |
|----------|-------|
| Native Name | `BOUNTY_REQUEST_BEGIN_LEGENDARY_MISSION_FOR_POSSE` |
| Hash | `0x48E4E23F1739E197` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `outRpcGuid` (Any*), `p1` (int), `p2` (int) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestBeginLegendaryMissionForPosse(outRpcGuid, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x48E4E23F1739E197, outRpcGuid, p1, p2)
```


---

## _0x27D3A0E1FE090A43

**Description:** _BOUNTY_IS_* or _BOUNTY_REQUEST_*

| Property | Value |
|----------|-------|
| Native Name | `_0x27D3A0E1FE090A43` |
| Hash | `0x27D3A0E1FE090A43` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x27D3A0E1FE090A43(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x27D3A0E1FE090A43, p0)
```


---

## _0x81847C2134039BDC

| Property | Value |
|----------|-------|
| Native Name | `_0x81847C2134039BDC` |
| Hash | `0x81847C2134039BDC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x81847C2134039BDC(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x81847C2134039BDC, p0)
```


---

## _0x86EC5F83867C4B70

**Description:** _BOUNTY_C* or _BOUNTY_GET_*

| Property | Value |
|----------|-------|
| Native Name | `_0x86EC5F83867C4B70` |
| Hash | `0x86EC5F83867C4B70` |
| Return Type | `BOOL` |
| Build | `1436` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x86EC5F83867C4B70(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x86EC5F83867C4B70, p0)
```


---

## _0xD6A67E2FF373D0E3

**Description:** _BOUNTY_GET_*

| Property | Value |
|----------|-------|
| Native Name | `_0xD6A67E2FF373D0E3` |
| Hash | `0xD6A67E2FF373D0E3` |
| Return Type | `int` |
| Build | `1355` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD6A67E2FF373D0E3(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD6A67E2FF373D0E3, p0)
```


---

## _0xF8BCC5ECA33AC9C1

**Description:** _BOUNTY_GET_*

| Property | Value |
|----------|-------|
| Native Name | `_0xF8BCC5ECA33AC9C1` |
| Hash | `0xF8BCC5ECA33AC9C1` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0xF8BCC5ECA33AC9C1()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF8BCC5ECA33AC9C1, )
```


---

## _BOUNTY_CANCEL_LEGENDARY_MISSION

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_CANCEL_LEGENDARY_MISSION` |
| Hash | `0x2BA1BCC99826CDA2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
BountyCancelLegendaryMission()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2BA1BCC99826CDA2, )
```


---

## _BOUNTY_CANCEL_WANTED_POSTER

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_CANCEL_WANTED_POSTER` |
| Hash | `0x6A9DF0FCD0C87FF9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
BountyCancelWantedPoster()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A9DF0FCD0C87FF9, )
```


---

## _BOUNTY_CLEAR_BEING_BOUNTY_HUNTER

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_CLEAR_BEING_BOUNTY_HUNTER` |
| Hash | `0xA59D1997ECD99F0A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
BountyClearBeingBountyHunter()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA59D1997ECD99F0A, )
```


---

## _BOUNTY_CLEAR_BEING_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_CLEAR_BEING_TARGET` |
| Hash | `0x932DB3C05A7465D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
BountyClearBeingTarget()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x932DB3C05A7465D1, )
```


---

## _BOUNTY_IS_REQUEST_PENDING

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_IS_REQUEST_PENDING` |
| Hash | `0x03B61CD51097DE60` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `rpcGuid` (Any*) |

### Parameters

- **`rpcGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyIsRequestPending(rpcGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x03B61CD51097DE60, rpcGuid)
```


---

## _BOUNTY_REQUEST_BECOME_TARGET_OF_CHARACTER_BOUNTY_HUNT

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_BECOME_TARGET_OF_CHARACTER_BOUNTY_HUNT` |
| Hash | `0xB096547D61868254` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestBecomeTargetOfCharacterBountyHunt(outRpcGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB096547D61868254, outRpcGuid)
```


---

## _BOUNTY_REQUEST_BEGIN_WANTED_POSTER

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_BEGIN_WANTED_POSTER` |
| Hash | `0xFFA13742E43507E3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*), `p1` (int) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestBeginWantedPoster(outRpcGuid, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFFA13742E43507E3, outRpcGuid, p1)
```


---

## _BOUNTY_REQUEST_BRIBE_JAIL_GUARD

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_BRIBE_JAIL_GUARD` |
| Hash | `0x28717806D3BDD0D0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*), `p1` (int) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestBribeJailGuard(outRpcGuid, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x28717806D3BDD0D0, outRpcGuid, p1)
```


---

## _BOUNTY_REQUEST_CLAIM_CHARACTER_BOUNTY

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_CLAIM_CHARACTER_BOUNTY` |
| Hash | `0xA9C3B0F746375162` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*), `p1` (int), `p2` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`int`)
- **`p2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestClaimCharacterBounty(outRpcGuid, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA9C3B0F746375162, outRpcGuid, p1, p2)
```


---

## _BOUNTY_REQUEST_COMPLETE_LEGENDARY_MISSION

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_COMPLETE_LEGENDARY_MISSION` |
| Hash | `0xA7309AC0DCF6D950` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*), `p1` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestCompleteLegendaryMission(outRpcGuid, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA7309AC0DCF6D950, outRpcGuid, p1)
```


---

## _BOUNTY_REQUEST_COMPLETE_SPLIT_WANTED_POSTER

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_COMPLETE_SPLIT_WANTED_POSTER` |
| Hash | `0xFBD137BF0EC50FC9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*), `p1` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestCompleteSplitWantedPoster(outRpcGuid, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFBD137BF0EC50FC9, outRpcGuid, p1)
```


---

## _BOUNTY_REQUEST_COMPLETE_WANTED_POSTER

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_COMPLETE_WANTED_POSTER` |
| Hash | `0x727AB6F008BB9F29` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*), `p1` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestCompleteWantedPoster(outRpcGuid, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x727AB6F008BB9F29, outRpcGuid, p1)
```


---

## _BOUNTY_REQUEST_ESCAPED_CHARACTER_BOUNTY_HUNT

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_ESCAPED_CHARACTER_BOUNTY_HUNT` |
| Hash | `0x12E981D53B07BF48` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestEscapedCharacterBountyHunt(outRpcGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x12E981D53B07BF48, outRpcGuid)
```


---

## _BOUNTY_REQUEST_PAY_OFF_BOUNTY

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_PAY_OFF_BOUNTY` |
| Hash | `0x537CE992BD2D7BCB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestPayOffBounty(outRpcGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x537CE992BD2D7BCB, outRpcGuid)
```


---

## _BOUNTY_REQUEST_PAY_OFF_BOUNTY_EX

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_PAY_OFF_BOUNTY_EX` |
| Hash | `0x587BCEC31D64F382` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `outRpcGuid` (Any*), `p1` (Hash), `costType` (Hash) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`Hash`)
- **`costType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestPayOffBountyEx(outRpcGuid, p1, costType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x587BCEC31D64F382, outRpcGuid, p1, costType)
```


---

## _BOUNTY_REQUEST_POSSE_LEADER_CLAIM_CHARACTER_BOUNTY

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_POSSE_LEADER_CLAIM_CHARACTER_BOUNTY` |
| Hash | `0x5B53CA0E2AC3FF45` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*), `p1` (int), `p2` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`int`)
- **`p2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestPosseLeaderClaimCharacterBounty(outRpcGuid, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5B53CA0E2AC3FF45, outRpcGuid, p1, p2)
```


---

## _BOUNTY_REQUEST_POSSE_LEADER_ESCAPED_CHARACTER_BOUNTY_HUNT

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_POSSE_LEADER_ESCAPED_CHARACTER_BOUNTY_HUNT` |
| Hash | `0x2D874BA20E8E1F20` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestPosseLeaderEscapedCharacterBountyHunt(outRpcGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2D874BA20E8E1F20, outRpcGuid)
```


---

## _BOUNTY_REQUEST_POSSE_MEMBER_CLAIM_CHARACTER_BOUNTY_SHARE

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_POSSE_MEMBER_CLAIM_CHARACTER_BOUNTY_SHARE` |
| Hash | `0x22D3A61CE053270C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*), `p1` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestPosseMemberClaimCharacterBountyShare(outRpcGuid, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x22D3A61CE053270C, outRpcGuid, p1)
```


---

## _BOUNTY_REQUEST_POSSE_MEMBER_ESCAPED_CHARACTER_BOUNTY_HUNT

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_POSSE_MEMBER_ESCAPED_CHARACTER_BOUNTY_HUNT` |
| Hash | `0x8521C2E235558278` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestPosseMemberEscapedCharacterBountyHunt(outRpcGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8521C2E235558278, outRpcGuid)
```


---

## _BOUNTY_REQUEST_SELF_REPORT_CRIME

**Description:** crimeType: see _REPORT_CRIME

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_SELF_REPORT_CRIME` |
| Hash | `0x188B748861B5BA17` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*), `crimeType` (Hash), `p2` (BOOL) |

### Parameters

- **`outRpcGuid`** (`Any*`)
- **`crimeType`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestSelfReportCrime(outRpcGuid, crimeType, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x188B748861B5BA17, outRpcGuid, crimeType, p2)
```


---

## _BOUNTY_REQUEST_SELF_REPORT_KILLED_BY_BOUNTY_HUNTER

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_SELF_REPORT_KILLED_BY_BOUNTY_HUNTER` |
| Hash | `0xB462D69D406A2602` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestSelfReportKilledByBountyHunter(outRpcGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB462D69D406A2602, outRpcGuid)
```


---

## _BOUNTY_REQUEST_SERVED_FULL_JAIL_SENTENCE

| Property | Value |
|----------|-------|
| Native Name | `_BOUNTY_REQUEST_SERVED_FULL_JAIL_SENTENCE` |
| Hash | `0x3F73AED12A5EF0FF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outRpcGuid` (Any*) |

### Parameters

- **`outRpcGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = BountyRequestServedFullJailSentence(outRpcGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3F73AED12A5EF0FF, outRpcGuid)
```


---

*End of BOUNTY natives*
