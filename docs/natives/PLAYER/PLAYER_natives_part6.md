# PLAYER Natives - Part 6 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PLAYER  
**Natives in this file:** 50  
**Total natives in namespace:** 395  
**Generated from:** RDR3natives JSON data

---

## _0xE1D356F5A66D0FFA

| Property | Value |
|----------|-------|
| Native Name | `_0xE1D356F5A66D0FFA` |
| Hash | `0xE1D356F5A66D0FFA` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `emote` (Hash) |

### Parameters

- **`emote`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0xE1D356F5A66D0FFA(emote)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE1D356F5A66D0FFA, emote)
```


---

## _0xE50A67C33514A390

| Property | Value |
|----------|-------|
| Native Name | `_0xE50A67C33514A390` |
| Hash | `0xE50A67C33514A390` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xE50A67C33514A390(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE50A67C33514A390, p0, p1)
```


---

## _EAGLE_EYE_CLEAR_REGISTERED_TRAILS

**Description:** Clears all Eagle Eye trails that were registered for entities associated with the specified player.

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_CLEAR_REGISTERED_TRAILS` |
| Hash | `0xE5D3EB37ABC1EB03` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
EagleEyeClearRegisteredTrails(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE5D3EB37ABC1EB03, player)
```


---

## _IS_PLAYER_MOUNT_ON_ROAD

**Description:** returns true if the player is on a road while riding a horse but at a certain speed, if you go off road then it returns false or if you go too slow like walking state it also returns false

| Property | Value |
|----------|-------|
| Native Name | `_IS_PLAYER_MOUNT_ON_ROAD` |
| Hash | `0xE631EAF35828FA67` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerMountOnRoad(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE631EAF35828FA67, player)
```


---

## _0xE7F8707269544B29

**Description:** _IS_PLAYER_A* - _IS_PLAYER_BE*

| Property | Value |
|----------|-------|
| Native Name | `_0xE7F8707269544B29` |
| Hash | `0xE7F8707269544B29` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0xE7F8707269544B29(player, ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE7F8707269544B29, player, ped)
```


---

## _RESET_DEADEYE_AURA_EFFECT

**Description:** Resets any aura effects applied to entities for a specific player in Deadeye mode, returning all aura-related visuals to their default state. This function is primarily used to remove any highlighting or aura effects set by `_SET_DEADEYE_ENTITY_AURA_WITH_FLAG - 0x2B12B6FC8B8772AB` and `_SET_DEADEYE_ENTITY_AURA_INTENSITY_WITH_FLAG - 0x131E294EF60160DF`

| Property | Value |
|----------|-------|
| Native Name | `_RESET_DEADEYE_AURA_EFFECT` |
| Hash | `0xE910932F4B30BE23` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ResetDeadeyeAuraEffect(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE910932F4B30BE23, player)
```


---

## _GET_DEADEYE_ABILITY_DEPLETION_DELAY

**Description:** Returns the depletion delay value for the Deadeye ability that was previously set using `SetDeadeyeAbilityDepletionDelay - 0x870634493CB4372C`

| Property | Value |
|----------|-------|
| Native Name | `_GET_DEADEYE_ABILITY_DEPLETION_DELAY` |
| Hash | `0xE92261BD28C0878F` |
| Return Type | `float` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetDeadeyeAbilityDepletionDelay(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE92261BD28C0878F, player)
```


---

## _0xE956C2340A76272E

| Property | Value |
|----------|-------|
| Native Name | `_0xE956C2340A76272E` |
| Hash | `0xE956C2340A76272E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xE956C2340A76272E(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE956C2340A76272E, p0)
```


---

## _0xEACEBAAE0A33FB3F

| Property | Value |
|----------|-------|
| Native Name | `_0xEACEBAAE0A33FB3F` |
| Hash | `0xEACEBAAE0A33FB3F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xEACEBAAE0A33FB3F(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEACEBAAE0A33FB3F, p0)
```


---

## _0xEBB6E27AC2FF32DA

| Property | Value |
|----------|-------|
| Native Name | `_0xEBB6E27AC2FF32DA` |
| Hash | `0xEBB6E27AC2FF32DA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xEBB6E27AC2FF32DA(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEBB6E27AC2FF32DA, p0, p1, p2, p3, p4)
```


---

## _0xEBFF94328FF7A18A

| Property | Value |
|----------|-------|
| Native Name | `_0xEBFF94328FF7A18A` |
| Hash | `0xEBFF94328FF7A18A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xEBFF94328FF7A18A(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEBFF94328FF7A18A, p0, p1)
```


---

## _0xF21C7A3F3FFBA629

**Description:** _CLEAR_FACIAL_* - _CLEAR_PED_BLOOD*

| Property | Value |
|----------|-------|
| Native Name | `_0xF21C7A3F3FFBA629` |
| Hash | `0xF21C7A3F3FFBA629` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
_0xF21C7A3F3FFBA629(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF21C7A3F3FFBA629, player)
```


---

## _0xF4CB347D7B5EB0FD

| Property | Value |
|----------|-------|
| Native Name | `_0xF4CB347D7B5EB0FD` |
| Hash | `0xF4CB347D7B5EB0FD` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0xF4CB347D7B5EB0FD()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF4CB347D7B5EB0FD, )
```


---

## _0xF993373285053D77

| Property | Value |
|----------|-------|
| Native Name | `_0xF993373285053D77` |
| Hash | `0xF993373285053D77` |
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
_0xF993373285053D77(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF993373285053D77, p0, p1, p2)
```


---

## _0xFA437FA0738C370C

**Description:** Params: p1, p2, p3, p4 = 1.f, 0, 0, 0 in R* Scripts
_SPECIAL_ABILITY*

| Property | Value |
|----------|-------|
| Native Name | `_0xFA437FA0738C370C` |
| Hash | `0xFA437FA0738C370C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (float), `p2` (int), `p3` (int), `p4` (int) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`float`)
- **`p2`** (`int`)
- **`p3`** (`int`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xFA437FA0738C370C(player, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA437FA0738C370C, player, p1, p2, p3, p4)
```


---

## _0xFA7DAAE3959E6C7B

| Property | Value |
|----------|-------|
| Native Name | `_0xFA7DAAE3959E6C7B` |
| Hash | `0xFA7DAAE3959E6C7B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xFA7DAAE3959E6C7B(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA7DAAE3959E6C7B, p0, p1)
```


---

## _ADD_PLAYER_AS_FOLLOW_TARGET

**Description:** Used in script function: NET_AUTO_FOLLOW_UPDATE_LEADER_VALUES
followMode:
HORSEFOLLOWMODE_AUTO = 0,
HORSEFOLLOWMODE_SIDE_ONLY,
HORSEFOLLOWMODE_BEHIND_ONLY,
HORSEFOLLOWMODE_BEHIND_AND_SIDE,
HORSEFOLLOWMODE_BEHIND_CLOSE
followPriority:
HORSEFOLLOWPRIORITY_STEER_ASSIST = 0,
HORSEFOLLOWPRIORITY_AMBIENT,
HORSEFOLLOWPRIORITY_NORMAL,
HORSEFOLLOWPRIORITY_HIGH

| Property | Value |
|----------|-------|
| Native Name | `_ADD_PLAYER_AS_FOLLOW_TARGET` |
| Hash | `0xAC22AA6DF4D1C1DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped), `p2` (float), `p3` (float), `followMode` (int), `followPriority` (int), `p6` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`followMode`** (`int`)
- **`followPriority`** (`int`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AddPlayerAsFollowTarget(player, ped, p2, p3, followMode, followPriority, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAC22AA6DF4D1C1DE, player, ped, p2, p3, followMode, followPriority, p6)
```


---

## _CLEAR_BOUNTY_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_BOUNTY_TARGET` |
| Hash | `0x8F2A81C09DA9124A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ClearBountyTarget(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8F2A81C09DA9124A, player)
```


---

## _EAGLE_EYE_DISABLE_TRACKING_TRAIL

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_DISABLE_TRACKING_TRAIL` |
| Hash | `0x40AB73092C95B5F5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `trail` (char*), `p2` (Any), `p3` (Any) |

### Parameters

- **`entity`** (`Entity`)
- **`trail`** (`char*`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
EagleEyeDisableTrackingTrail(entity, trail, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x40AB73092C95B5F5, entity, trail, p2, p3)
```


---

## _EAGLE_EYE_SET_COLOR

**Description:** false: default eagleeye color
true: green eagleeye color

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_SET_COLOR` |
| Hash | `0x2C41D93F550D5E37` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (BOOL), `p2` (Any*) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`BOOL`)
- **`p2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
EagleEyeSetColor(player, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2C41D93F550D5E37, player, p1, p2)
```


---

## _EAGLE_EYE_SET_CUSTOM_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_SET_CUSTOM_DISTANCE` |
| Hash | `0x907B16B3834C69E2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `distance` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`distance`** (`float`)

### Usage

**Lua (Direct):**
```lua
EagleEyeSetCustomDistance(entity, distance)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x907B16B3834C69E2, entity, distance)
```


---

## _EAGLE_EYE_SET_DRAIN_RATE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_SET_DRAIN_RATE_MODIFIER` |
| Hash | `0xE0D6C2A146A5C993` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `modifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
EagleEyeSetDrainRateModifier(player, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0D6C2A146A5C993, player, modifier)
```


---

## _EAGLE_EYE_SET_FOCUS_ON_ASSOCIATED_CLUE_TRAIL

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_SET_FOCUS_ON_ASSOCIATED_CLUE_TRAIL` |
| Hash | `0x2AF423D6ECB2C485` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `linkedWaypointPed` (Entity) |

### Parameters

- **`player`** (`Player`)
- **`linkedWaypointPed`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
EagleEyeSetFocusOnAssociatedClueTrail(player, linkedWaypointPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2AF423D6ECB2C485, player, linkedWaypointPed)
```


---

## _EAGLEEYE_SET_SPRINT_BEHAVIOR

**Description:** Sets the behavior of sprinting while the Eagleeye feature is active, determining whether sprinting cancels the effect based on the specified parameter.
 old name was _EAGLE_EYE_SET_PLUS_FLAG_DISABLED this native can still be used as its declared.

| Property | Value |
|----------|-------|
| Native Name | `_EAGLEEYE_SET_SPRINT_BEHAVIOR` |
| Hash | `0xCE285A4413B00B7F` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `disabled` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`disabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EagleeyeSetSprintBehavior(player, disabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE285A4413B00B7F, player, disabled)
```


---

## _EAGLE_EYE_SET_TRACKING_UPGRADE

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_SET_TRACKING_UPGRADE` |
| Hash | `0xDFC85C5199045026` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (float) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
EagleEyeSetTrackingUpgrade(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDFC85C5199045026, player, p1)
```


---

## _EAGLE_EYE_SET_TRACKING_UPGRADE_2

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_SET_TRACKING_UPGRADE_2` |
| Hash | `0x6FA957D1B55941C1` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `player` (Player), `p1` (float) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
EagleEyeSetTrackingUpgrade2(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6FA957D1B55941C1, player, p1)
```


---

## _ENABLE_CUSTOM_DEADEYE_ABILITY

| Property | Value |
|----------|-------|
| Native Name | `_ENABLE_CUSTOM_DEADEYE_ABILITY` |
| Hash | `0x95EE1DEE1DCD9070` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `enable` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`enable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EnableCustomDeadeyeAbility(player, enable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x95EE1DEE1DCD9070, player, enable)
```


---

## _ENABLE_EAGLEEYE

**Description:** (Un)lock Eagle Eye functionality

| Property | Value |
|----------|-------|
| Native Name | `_ENABLE_EAGLEEYE` |
| Hash | `0xA63FCAD3A6FEC6D2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `enable` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`enable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EnableEagleeye(player, enable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA63FCAD3A6FEC6D2, player, enable)
```


---

## _FORCE_REST_SCENARIO

| Property | Value |
|----------|-------|
| Native Name | `_FORCE_REST_SCENARIO` |
| Hash | `0xE5A3DD2FF84E1A4B` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ForceRestScenario(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE5A3DD2FF84E1A4B, toggle)
```


---

## _FORMAT_PLAYER_NAME_STRING

| Property | Value |
|----------|-------|
| Native Name | `_FORMAT_PLAYER_NAME_STRING` |
| Hash | `0x5B6193813E03E4E9` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `string` (char*) |

### Parameters

- **`string`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = FormatPlayerNameString(string)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5B6193813E03E4E9, string)
```


---

## _GET_ACTIVE_HORSE_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `_GET_ACTIVE_HORSE_FOR_PLAYER` |
| Hash | `0x46FA0AE18F4C7FA9` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetActiveHorseForPlayer(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x46FA0AE18F4C7FA9, player)
```


---

## _GET_AI_PLAYER_DEFENSE_MODIFIER_AGAINST_AI

| Property | Value |
|----------|-------|
| Native Name | `_GET_AI_PLAYER_DEFENSE_MODIFIER_AGAINST_AI` |
| Hash | `0x2E78D822208E740A` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetAiPlayerDefenseModifierAgainstAi(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E78D822208E740A, player)
```


---

## _GET_CONSTRUCTED_DISCOVERED_CHARACTER_NAME

**Description:** p0: mostly Ped Hashes

| Property | Value |
|----------|-------|
| Native Name | `_GET_CONSTRUCTED_DISCOVERED_CHARACTER_NAME` |
| Hash | `0x8E84119A23C16623` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `p0` (Hash), `model` (BOOL), `outfit` (BOOL) |

### Parameters

- **`p0`** (`Hash`)
- **`model`** (`BOOL`)
- **`outfit`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetConstructedDiscoveredCharacterName(p0, model, outfit)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8E84119A23C16623, p0, model, outfit)
```


---

## _GET_DEADEYE_ABILITY_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `_GET_DEADEYE_ABILITY_LEVEL` |
| Hash | `0xCCE7C695C164C35F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetDeadeyeAbilityLevel(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCCE7C695C164C35F, player)
```


---

## _GET_HAS_PLAYER_DISCOVERED_CHARACTER_NAME_SP

| Property | Value |
|----------|-------|
| Native Name | `_GET_HAS_PLAYER_DISCOVERED_CHARACTER_NAME_SP` |
| Hash | `0x0772F87D7B07719A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (int), `discoveryHash` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`int`)
- **`discoveryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetHasPlayerDiscoveredCharacterNameSp(player, p1, discoveryHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0772F87D7B07719A, player, p1, discoveryHash)
```


---

## _GET_IS_DEADEYE_TAGGING_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_GET_IS_DEADEYE_TAGGING_ENABLED` |
| Hash | `0x32348719DCED2969` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsDeadeyeTaggingEnabled(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x32348719DCED2969, player)
```


---

## _GET_NUM_MARKED_DEADEYE_TARGETS

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_MARKED_DEADEYE_TARGETS` |
| Hash | `0xCCD9B77F70D31C9D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumMarkedDeadeyeTargets(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCCD9B77F70D31C9D, player)
```


---

## _GET_PLAYER_CACHED_DEAD_EYE_AMOUNT

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_CACHED_DEAD_EYE_AMOUNT` |
| Hash | `0xDF66A37936D5F3D9` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerCachedDeadEyeAmount(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF66A37936D5F3D9, player)
```


---

## _GET_PLAYER_DEAD_EYE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_DEAD_EYE` |
| Hash | `0xA81D24AE0AF99A5E` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerDeadEye(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA81D24AE0AF99A5E, player)
```


---

## _GET_PLAYER_DEAD_EYE_METER_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_DEAD_EYE_METER_LEVEL` |
| Hash | `0x3A6AE4EEE30370FE` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerDeadEyeMeterLevel(player, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3A6AE4EEE30370FE, player, p1)
```


---

## _GET_PLAYER_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_HEALTH` |
| Hash | `0x0317C947D062854E` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerHealth(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0317C947D062854E, player)
```


---

## _GET_PLAYER_HEALTH_RECHARGE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_HEALTH_RECHARGE_MULTIPLIER` |
| Hash | `0x22CD23BB0C45E0CD` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerHealthRechargeMultiplier(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x22CD23BB0C45E0CD, player)
```


---

## _GET_PLAYER_HUNTING_WAGON

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_HUNTING_WAGON` |
| Hash | `0x5CA6BBD4A7D8145E` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerHuntingWagon(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5CA6BBD4A7D8145E, player)
```


---

## _GET_PLAYER_MAX_DEAD_EYE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_MAX_DEAD_EYE` |
| Hash | `0x592F58BC4D2A2CF3` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (Any) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerMaxDeadEye(player, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x592F58BC4D2A2CF3, player, p1)
```


---

## _GET_PLAYER_MOOD

**Description:** See _SET_PLAYER_MOOD

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_MOOD` |
| Hash | `0x054473164C012699` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerMood(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x054473164C012699, player)
```


---

## _GET_PLAYER_OWNER_OF_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_OWNER_OF_MOUNT` |
| Hash | `0xAD03B03737CE6810` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `mount` (Ped) |

### Parameters

- **`mount`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerOwnerOfMount(mount)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAD03B03737CE6810, mount)
```


---

## _GET_PLAYER_OWNER_OF_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_OWNER_OF_VEHICLE` |
| Hash | `0x7C803BDC8343228D` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerOwnerOfVehicle(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7C803BDC8343228D, vehicle)
```


---

## _GET_PLAYER_PED_2

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_PED_2` |
| Hash | `0x5EBE38A20BC51C27` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerPed2(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5EBE38A20BC51C27, player)
```


---

## _GET_PLAYER_REQUIRED_DEAD_EYE_AMOUNT

**Description:** If player has less Dead Eye than required, Dead Eye cant be triggered.

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_REQUIRED_DEAD_EYE_AMOUNT` |
| Hash | `0x811A748B1BE231BA` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerRequiredDeadEyeAmount(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x811A748B1BE231BA, player)
```


---

## _GET_PLAYER_RESET_FLAG

**Description:** playerResetFlag: See 0x9F9A829C6751F3C7

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_RESET_FLAG` |
| Hash | `0xFE691E89C08937B6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `playerResetFlag` (int) |

### Parameters

- **`player`** (`Player`)
- **`playerResetFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerResetFlag(player, playerResetFlag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFE691E89C08937B6, player, playerResetFlag)
```


---

*End of PLAYER natives part 6*
