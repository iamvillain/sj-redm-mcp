# LAW Natives - Part 1 of 3

Red Dead Redemption 3 Native Functions Reference

**Namespace:** LAW  
**Natives in this file:** 50  
**Total natives in namespace:** 124  
**Generated from:** RDR3natives JSON data

---

## ADD_BOUNTY

| Property | Value |
|----------|-------|
| Native Name | `ADD_BOUNTY` |
| Hash | `0x0E3BDEED21BEB945` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `itemValueAmount` (int) |

### Parameters

- **`player`** (`Player`)
- **`itemValueAmount`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddBounty(player, itemValueAmount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0E3BDEED21BEB945, player, itemValueAmount)
```


---

## ARE_WITNESSES_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `ARE_WITNESSES_ACTIVE` |
| Hash | `0x69E181772886F48B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = AreWitnessesActive(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x69E181772886F48B, player)
```


---

## CLEAR_BOUNTY

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_BOUNTY` |
| Hash | `0xC76F252371150D9A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ClearBounty(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC76F252371150D9A, player)
```


---

## CLEAR_PLAYER_PAST_CRIMES

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PLAYER_PAST_CRIMES` |
| Hash | `0xBCC6DC59E32A2BDC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ClearPlayerPastCrimes(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBCC6DC59E32A2BDC, player)
```


---

## CLEAR_WANTED_SCORE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_WANTED_SCORE` |
| Hash | `0x062B4A4A3396351D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ClearWantedScore(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x062B4A4A3396351D, player)
```


---

## GET_BOUNTY

| Property | Value |
|----------|-------|
| Native Name | `GET_BOUNTY` |
| Hash | `0x54310AAB97B92816` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetBounty(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x54310AAB97B92816, player)
```


---

## GET_PLAYER_REGISTERED_CRIME

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_REGISTERED_CRIME` |
| Hash | `0x532C5FDDB986EE5C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (int), `crimeType` (Hash*) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`int`)
- **`crimeType`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerRegisteredCrime(player, p1, crimeType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x532C5FDDB986EE5C, player, p1, crimeType)
```


---

## GET_WANTED_SCORE

| Property | Value |
|----------|-------|
| Native Name | `GET_WANTED_SCORE` |
| Hash | `0xDD5FD601481F648B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetWantedScore(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDD5FD601481F648B, player)
```


---

## IS_LAW_INCIDENT_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_LAW_INCIDENT_ACTIVE` |
| Hash | `0xAD401C63158ACBAA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsLawIncidentActive(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAD401C63158ACBAA, player)
```


---

## NUM_CRIMES_SUPPRESSED

**Description:** Returns amount of suppressed crimes to be used later in the function MPINTRO_CRIME_MONITOR_MAINTAIN

| Property | Value |
|----------|-------|
| Native Name | `NUM_CRIMES_SUPPRESSED` |
| Hash | `0xC08E804C91F47C80` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player), `crimeType` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`crimeType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = NumCrimesSuppressed(player, crimeType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC08E804C91F47C80, player, crimeType)
```


---

## RESET_WANTED_FOR_NEW_INCIDENT

| Property | Value |
|----------|-------|
| Native Name | `RESET_WANTED_FOR_NEW_INCIDENT` |
| Hash | `0x2728C77FBC4B9796` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ResetWantedForNewIncident(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2728C77FBC4B9796, player)
```


---

## SET_BOUNTY

| Property | Value |
|----------|-------|
| Native Name | `SET_BOUNTY` |
| Hash | `0x093A9D1F72DF0D19` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `amount` (int) |

### Parameters

- **`player`** (`Player`)
- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetBounty(player, amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x093A9D1F72DF0D19, player, amount)
```


---

## SET_DISABLE_DISTURBANCE_CRIMES

| Property | Value |
|----------|-------|
| Native Name | `SET_DISABLE_DISTURBANCE_CRIMES` |
| Hash | `0xDE5FAA741A781F73` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDisableDisturbanceCrimes(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDE5FAA741A781F73, player, p1)
```


---

## SET_LAW_SENSE_RANGE_MODIFIER

**Description:** Default range is 1.0f

| Property | Value |
|----------|-------|
| Native Name | `SET_LAW_SENSE_RANGE_MODIFIER` |
| Hash | `0xFEC85339AACA2A35` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `range` (float) |

### Parameters

- **`player`** (`Player`)
- **`range`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetLawSenseRangeModifier(player, range)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFEC85339AACA2A35, player, range)
```


---

## SET_PLAYER_ARRESTED_IN_REGION

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_ARRESTED_IN_REGION` |
| Hash | `0xE0FA74AA3CCE650B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `lawRegionHash` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`lawRegionHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPlayerArrestedInRegion(player, lawRegionHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0FA74AA3CCE650B, player, lawRegionHash)
```


---

## SET_PLAYER_TURNED_IN_BOUNTY_IN_REGION

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_TURNED_IN_BOUNTY_IN_REGION` |
| Hash | `0x73BAD7B2F2DB50DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `lawRegionHash` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`lawRegionHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPlayerTurnedInBountyInRegion(player, lawRegionHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x73BAD7B2F2DB50DE, player, lawRegionHash)
```


---

## SET_POSTPONE_DISTURBANCE_CRIMES_DURING_COMBAT

| Property | Value |
|----------|-------|
| Native Name | `SET_POSTPONE_DISTURBANCE_CRIMES_DURING_COMBAT` |
| Hash | `0x362086B911657B1A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPostponeDisturbanceCrimesDuringCombat(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x362086B911657B1A, player, p1)
```


---

## SET_WANTED_SCORE

| Property | Value |
|----------|-------|
| Native Name | `SET_WANTED_SCORE` |
| Hash | `0xA80FF73F772ACF6A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `intensity` (int) |

### Parameters

- **`player`** (`Player`)
- **`intensity`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetWantedScore(player, intensity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA80FF73F772ACF6A, player, intensity)
```


---

## SUPPRESS_CRIME_THIS_FRAME

**Description:** crimeType: see _REPORT_CRIME

| Property | Value |
|----------|-------|
| Native Name | `SUPPRESS_CRIME_THIS_FRAME` |
| Hash | `0x785177E4D57D7389` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `crimeType` (Hash), `p2` (int), `p3` (int), `p4` (int) |

### Parameters

- **`player`** (`Player`)
- **`crimeType`** (`Hash`)
- **`p2`** (`int`)
- **`p3`** (`int`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
SuppressCrimeThisFrame(player, crimeType, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x785177E4D57D7389, player, crimeType, p2, p3, p4)
```


---

## _0x00DB0BC05E3FAA4E

| Property | Value |
|----------|-------|
| Native Name | `_0x00DB0BC05E3FAA4E` |
| Hash | `0x00DB0BC05E3FAA4E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `bitset` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`bitset`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x00DB0BC05E3FAA4E(ped, bitset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x00DB0BC05E3FAA4E, ped, bitset)
```


---

## _0x018F30D762E62DF8

| Property | Value |
|----------|-------|
| Native Name | `_0x018F30D762E62DF8` |
| Hash | `0x018F30D762E62DF8` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x018F30D762E62DF8(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x018F30D762E62DF8, ped, p1)
```


---

## _0x07E8B8B20570271C

**Description:** Used in SP only, called together with 0x55F37F5F3F2475E1 & CLEAR_WANTED_SCORE
_REPORT_*

| Property | Value |
|----------|-------|
| Native Name | `_0x07E8B8B20570271C` |
| Hash | `0x07E8B8B20570271C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
_0x07E8B8B20570271C(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x07E8B8B20570271C, player)
```


---

## _0x0BDFEBCF40A5F7E3

**Description:** Only used in net_fetch R* Script

| Property | Value |
|----------|-------|
| Native Name | `_0x0BDFEBCF40A5F7E3` |
| Hash | `0x0BDFEBCF40A5F7E3` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `crimeType` (Hash) |

### Parameters

- **`crimeType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0BDFEBCF40A5F7E3(crimeType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0BDFEBCF40A5F7E3, crimeType)
```


---

## _0x0C392DB374655176

| Property | Value |
|----------|-------|
| Native Name | `_0x0C392DB374655176` |
| Hash | `0x0C392DB374655176` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (float), `itemSet` (ItemSet) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`float`)
- **`itemSet`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
_0x0C392DB374655176(x, y, z, p3, itemSet)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0C392DB374655176, x, y, z, p3, itemSet)
```


---

## _0x0DBACA9C38C9A686

**Description:** Only used in sisikapenitentiary R* Script: name = SISIKA
_IS_G* or _IS_H*

| Property | Value |
|----------|-------|
| Native Name | `_0x0DBACA9C38C9A686` |
| Hash | `0x0DBACA9C38C9A686` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `name` (const char*) |

### Parameters

- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0DBACA9C38C9A686(name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0DBACA9C38C9A686, name)
```


---

## _0x0EAF918F751F27BA

| Property | Value |
|----------|-------|
| Native Name | `_0x0EAF918F751F27BA` |
| Hash | `0x0EAF918F751F27BA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0EAF918F751F27BA(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0EAF918F751F27BA, ped)
```


---

## _0x0F230DE0DDBE3649

| Property | Value |
|----------|-------|
| Native Name | `_0x0F230DE0DDBE3649` |
| Hash | `0x0F230DE0DDBE3649` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0F230DE0DDBE3649(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0F230DE0DDBE3649, player)
```


---

## _0x148E7AC8141C9E64

| Property | Value |
|----------|-------|
| Native Name | `_0x148E7AC8141C9E64` |
| Hash | `0x148E7AC8141C9E64` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = _0x148E7AC8141C9E64(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x148E7AC8141C9E64, player)
```


---

## _0x15ABD5004CAD2D99

**Description:** Params: p0 either 0, 1 or -1 in R* Scripts
Set to 0 called together with _SUPPRESS_CRIME

| Property | Value |
|----------|-------|
| Native Name | `_0x15ABD5004CAD2D99` |
| Hash | `0x15ABD5004CAD2D99` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x15ABD5004CAD2D99(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x15ABD5004CAD2D99, p0)
```


---

## _0x2001687F9562FD9D

**Description:** Only used in resapwn_dump_body R* Script

| Property | Value |
|----------|-------|
| Native Name | `_0x2001687F9562FD9D` |
| Hash | `0x2001687F9562FD9D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2001687F9562FD9D(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2001687F9562FD9D, p0)
```


---

## _0x21213B833EF4DAE7

| Property | Value |
|----------|-------|
| Native Name | `_0x21213B833EF4DAE7` |
| Hash | `0x21213B833EF4DAE7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped), `outCoords` (Vector3*) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)
- **`outCoords`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
_0x21213B833EF4DAE7(player, ped, outCoords)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x21213B833EF4DAE7, player, ped, outCoords)
```


---

## _0x22741652985C84D0

**Description:** Used in SP only
_REPORT_*

| Property | Value |
|----------|-------|
| Native Name | `_0x22741652985C84D0` |
| Hash | `0x22741652985C84D0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `lawRegionHash` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`lawRegionHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x22741652985C84D0(player, lawRegionHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x22741652985C84D0, player, lawRegionHash)
```


---

## _0x26934083D3F2579C

| Property | Value |
|----------|-------|
| Native Name | `_0x26934083D3F2579C` |
| Hash | `0x26934083D3F2579C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = _0x26934083D3F2579C(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x26934083D3F2579C, player)
```


---

## _0x292AD61A33A7A485

**Description:** Only used in R* Script fm_mission_controller
_CLEAR_WANTED_*

| Property | Value |
|----------|-------|
| Native Name | `_0x292AD61A33A7A485` |
| Hash | `0x292AD61A33A7A485` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x292AD61A33A7A485()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x292AD61A33A7A485, )
```


---

## _0x29CD4896ECB66C12

| Property | Value |
|----------|-------|
| Native Name | `_0x29CD4896ECB66C12` |
| Hash | `0x29CD4896ECB66C12` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x29CD4896ECB66C12()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x29CD4896ECB66C12, )
```


---

## _0x318F0F9A4426CFA2

**Description:** Only used in R* SP Script av_amb_camp_robbery

| Property | Value |
|----------|-------|
| Native Name | `_0x318F0F9A4426CFA2` |
| Hash | `0x318F0F9A4426CFA2` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x318F0F9A4426CFA2(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x318F0F9A4426CFA2, ped, p1)
```


---

## _0x331D349E0380B097

| Property | Value |
|----------|-------|
| Native Name | `_0x331D349E0380B097` |
| Hash | `0x331D349E0380B097` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x331D349E0380B097(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x331D349E0380B097, p0)
```


---

## _0x3738B784DDD35CC6

| Property | Value |
|----------|-------|
| Native Name | `_0x3738B784DDD35CC6` |
| Hash | `0x3738B784DDD35CC6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (int), `p2` (int) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x3738B784DDD35CC6(player, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3738B784DDD35CC6, player, p1, p2)
```


---

## _0x3852237A3D9DF145

| Property | Value |
|----------|-------|
| Native Name | `_0x3852237A3D9DF145` |
| Hash | `0x3852237A3D9DF145` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x3852237A3D9DF145(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3852237A3D9DF145, p0)
```


---

## _0x390710D2DAFA6BFF

**Description:** _CLEAR*

| Property | Value |
|----------|-------|
| Native Name | `_0x390710D2DAFA6BFF` |
| Hash | `0x390710D2DAFA6BFF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x390710D2DAFA6BFF(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x390710D2DAFA6BFF, player, p1)
```


---

## _0x3D2674828A4E6B3C

| Property | Value |
|----------|-------|
| Native Name | `_0x3D2674828A4E6B3C` |
| Hash | `0x3D2674828A4E6B3C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x3D2674828A4E6B3C()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3D2674828A4E6B3C, )
```


---

## _0x40851BCC33ACD9AB

| Property | Value |
|----------|-------|
| Native Name | `_0x40851BCC33ACD9AB` |
| Hash | `0x40851BCC33ACD9AB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x40851BCC33ACD9AB(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x40851BCC33ACD9AB, ped)
```


---

## _0x522F74636DF10201

| Property | Value |
|----------|-------|
| Native Name | `_0x522F74636DF10201` |
| Hash | `0x522F74636DF10201` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `itemSet` (ItemSet) |

### Parameters

- **`player`** (`Player`)
- **`itemSet`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
_0x522F74636DF10201(player, itemSet)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x522F74636DF10201, player, itemSet)
```


---

## _0x5E6F375CA101C108

**Description:** Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0x5E6F375CA101C108` |
| Hash | `0x5E6F375CA101C108` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x5E6F375CA101C108(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5E6F375CA101C108, player, p1)
```


---

## _0x61B98367D93F012F

| Property | Value |
|----------|-------|
| Native Name | `_0x61B98367D93F012F` |
| Hash | `0x61B98367D93F012F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
_0x61B98367D93F012F(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x61B98367D93F012F, player)
```


---

## _0x6ABC50979655BEE7

| Property | Value |
|----------|-------|
| Native Name | `_0x6ABC50979655BEE7` |
| Hash | `0x6ABC50979655BEE7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `crimeType` (Hash*), `p2` (Any) |

### Parameters

- **`player`** (`Player`)
- **`crimeType`** (`Hash*`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6ABC50979655BEE7(player, crimeType, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6ABC50979655BEE7, player, crimeType, p2)
```


---

## _0x7351DA734F989F4E

**Description:** Only used in shoprobberies

| Property | Value |
|----------|-------|
| Native Name | `_0x7351DA734F989F4E` |
| Hash | `0x7351DA734F989F4E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7351DA734F989F4E(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7351DA734F989F4E, entity)
```


---

## _0x7803436E68C32B26

| Property | Value |
|----------|-------|
| Native Name | `_0x7803436E68C32B26` |
| Hash | `0x7803436E68C32B26` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x7803436E68C32B26()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7803436E68C32B26, )
```


---

## _0x7EF2A2FE38D74456

**Description:** _SET_DISPATCH_*

| Property | Value |
|----------|-------|
| Native Name | `_0x7EF2A2FE38D74456` |
| Hash | `0x7EF2A2FE38D74456` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `flag` (int), `p1` (BOOL) |

### Parameters

- **`flag`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x7EF2A2FE38D74456(flag, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7EF2A2FE38D74456, flag, p1)
```


---

## _0x7FC667F6DDFBCDCC

**Description:** Only used in R* Script long_update
Returns a value thats being subtracted from GET_GAME_TIMER

| Property | Value |
|----------|-------|
| Native Name | `_0x7FC667F6DDFBCDCC` |
| Hash | `0x7FC667F6DDFBCDCC` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7FC667F6DDFBCDCC(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7FC667F6DDFBCDCC, player)
```


---

*End of LAW natives part 1*
