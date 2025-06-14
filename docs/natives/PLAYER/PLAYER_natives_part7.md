# PLAYER Natives - Part 7 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PLAYER  
**Natives in this file:** 50  
**Total natives in namespace:** 395  
**Generated from:** RDR3natives JSON data

---

## _GET_PLAYER_SPECIAL_ABILITY_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_SPECIAL_ABILITY_MULTIPLIER` |
| Hash | `0xAB3773E7AA1E9DCC` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerSpecialAbilityMultiplier(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAB3773E7AA1E9DCC, player)
```


---

## _GET_PLAYER_STAMINA

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_STAMINA` |
| Hash | `0x0FF421E467373FCF` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerStamina(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0FF421E467373FCF, player)
```


---

## _GET_PLAYER_STAMINA_DEPLETION_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_STAMINA_DEPLETION_MULTIPLIER` |
| Hash | `0x68A0389E0718AC8F` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerStaminaDepletionMultiplier(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x68A0389E0718AC8F, player)
```


---

## _GET_PLAYER_STAMINA_RECHARGE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_STAMINA_RECHARGE_MULTIPLIER` |
| Hash | `0x617D3494AD58200F` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerStaminaRechargeMultiplier(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x617D3494AD58200F, player)
```


---

## _GET_PLAYER_UI_PROMPT_FOR_PED_IS_ENABLED

**Description:** Returns true if PromptType is enabled for ped (mount)
Params: See 0x0751D461F06E41CE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_UI_PROMPT_FOR_PED_IS_ENABLED` |
| Hash | `0xEA8F168A76A0B9BC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped), `promptType` (int), `promptMode` (int) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)
- **`promptType`** (`int`)
- **`promptMode`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerUiPromptForPedIsEnabled(player, ped, promptType, promptMode)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEA8F168A76A0B9BC, player, ped, promptType, promptMode)
```


---

## _GET_PLAYER_UI_PROMPT_IS_DISABLED

**Description:** Returns false if PromptType is enabled
Params: See 0x0751D461F06E41CE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_UI_PROMPT_IS_DISABLED` |
| Hash | `0x6614F9039BD31931` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `promptType` (int), `promptMode` (int) |

### Parameters

- **`player`** (`Player`)
- **`promptType`** (`int`)
- **`promptMode`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerUiPromptIsDisabled(player, promptType, promptMode)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6614F9039BD31931, player, promptType, promptMode)
```


---

## _GET_PLAYER_WEAPON_DAMAGE

| Property | Value |
|----------|-------|
| Native Name | `_GET_PLAYER_WEAPON_DAMAGE` |
| Hash | `0xFE0304050261442C` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player), `weaponHash` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerWeaponDamage(player, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFE0304050261442C, player, weaponHash)
```


---

## _GET_SADDLE_HORSE_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `_GET_SADDLE_HORSE_FOR_PLAYER` |
| Hash | `0xB48050D326E9A2F3` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetSaddleHorseForPlayer(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB48050D326E9A2F3, player)
```


---

## _GET_TEMP_PLAYER_HORSE

| Property | Value |
|----------|-------|
| Native Name | `_GET_TEMP_PLAYER_HORSE` |
| Hash | `0xD3F7445CEA2E5035` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetTempPlayerHorse(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD3F7445CEA2E5035, player)
```


---

## _GET_VEHICLE_OWNED_BY_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_OWNED_BY_PLAYER` |
| Hash | `0xB9050A97594C8832` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleOwnedByPlayer(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB9050A97594C8832, player)
```


---

## _GET_WANTED_LEVEL_MULTIPLIER

**Description:** Returns -1.0f if no multiplier has been set

| Property | Value |
|----------|-------|
| Native Name | `_GET_WANTED_LEVEL_MULTIPLIER` |
| Hash | `0xA82964B9D8D6A983` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetWantedLevelMultiplier()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA82964B9D8D6A983, )
```


---

## _IS_DEADEYE_ABILITY_LOCKED

| Property | Value |
|----------|-------|
| Native Name | `_IS_DEADEYE_ABILITY_LOCKED` |
| Hash | `0x8A0643B0B4CA276B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `abilityType` (int) |

### Parameters

- **`player`** (`Player`)
- **`abilityType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsDeadeyeAbilityLocked(player, abilityType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8A0643B0B4CA276B, player, abilityType)
```


---

## _IS_EAGLE_EYE_REGISTERED_FOR_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_IS_EAGLE_EYE_REGISTERED_FOR_ENTITY` |
| Hash | `0x0E6846476906C9DD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `entity` (Entity) |

### Parameters

- **`player`** (`Player`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEagleEyeRegisteredForEntity(player, entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E6846476906C9DD, player, entity)
```


---

## _IS_PLAYER_FOLLOWING_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_IS_PLAYER_FOLLOWING_TARGET` |
| Hash | `0xE24C64D9ADED2EF5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerFollowingTarget(player, ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE24C64D9ADED2EF5, player, ped)
```


---

## _IS_PLAYER_FREE_FOCUSING

**Description:** Checks if player is focused on any entity

| Property | Value |
|----------|-------|
| Native Name | `_IS_PLAYER_FREE_FOCUSING` |
| Hash | `0x1A51BFE60708E482` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerFreeFocusing(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1A51BFE60708E482, player)
```


---

## _IS_PLAYER_IN_SCOPE

| Property | Value |
|----------|-------|
| Native Name | `_IS_PLAYER_IN_SCOPE` |
| Hash | `0x04D7F33640662FA2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerInScope(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x04D7F33640662FA2, player)
```


---

## _IS_SECONDARY_SPECIAL_ABILITY_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_IS_SECONDARY_SPECIAL_ABILITY_ACTIVE` |
| Hash | `0x45AB66D02B601FA7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsSecondarySpecialAbilityActive(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x45AB66D02B601FA7, player)
```


---

## _IS_SECONDARY_SPECIAL_ABILITY_ENABLED

**Description:** Returns true if eagle eye is enabled for the player

| Property | Value |
|----------|-------|
| Native Name | `_IS_SECONDARY_SPECIAL_ABILITY_ENABLED` |
| Hash | `0xE022CC1B545F1D9F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsSecondarySpecialAbilityEnabled(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE022CC1B545F1D9F, player)
```


---

## _IS_SPECIAL_ABILITY_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_IS_SPECIAL_ABILITY_ACTIVE` |
| Hash | `0xB16223CB7DA965F0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsSpecialAbilityActive(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB16223CB7DA965F0, player)
```


---

## _MODIFY_INFINITE_TRAIL_VISION

**Description:** Toggle handles wether Deadeye and Eagleeye are infinite or not.

| Property | Value |
|----------|-------|
| Native Name | `_MODIFY_INFINITE_TRAIL_VISION` |
| Hash | `0x28A13BF6B05C3D83` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ModifyInfiniteTrailVision(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x28A13BF6B05C3D83, player, toggle)
```


---

## _MODIFY_PLAYER_DISCOVERED_CHARACTER_NAME_MP_SET_UNDISCOVERED

| Property | Value |
|----------|-------|
| Native Name | `_MODIFY_PLAYER_DISCOVERED_CHARACTER_NAME_MP_SET_UNDISCOVERED` |
| Hash | `0xFB0E622B401884D3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `discoveryHash` (Hash) |

### Parameters

- **`discoveryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ModifyPlayerDiscoveredCharacterNameMpSetUndiscovered(discoveryHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFB0E622B401884D3, discoveryHash)
```


---

## _MODIFY_PLAYER_UI_PROMPT

**Description:** Params: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePromptType
promptType is mostly 34 (PP_TRACK_ANIMAL), promptMode = 0 (PP_MODE_BLOCK) in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_MODIFY_PLAYER_UI_PROMPT` |
| Hash | `0x0751D461F06E41CE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `promptType` (int), `promptMode` (int), `disabled` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`promptType`** (`int`)
- **`promptMode`** (`int`)
- **`disabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ModifyPlayerUiPrompt(player, promptType, promptMode, disabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0751D461F06E41CE, player, promptType, promptMode, disabled)
```


---

## _MODIFY_PLAYER_UI_PROMPT_FOR_PED

**Description:** Params: See 0x0751D461F06E41CE

| Property | Value |
|----------|-------|
| Native Name | `_MODIFY_PLAYER_UI_PROMPT_FOR_PED` |
| Hash | `0xA3DB37EDF9A74635` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped), `promptType` (int), `promptMode` (int), `enabled` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)
- **`promptType`** (`int`)
- **`promptMode`** (`int`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ModifyPlayerUiPromptForPed(player, ped, promptType, promptMode, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA3DB37EDF9A74635, player, ped, promptType, promptMode, enabled)
```


---

## _NETWORK_HAS_PLAYER_VALID_PED

**Description:** Returns true if the given player has a valid ped.

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_HAS_PLAYER_VALID_PED` |
| Hash | `0x0760D6F70EBCC05C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkHasPlayerValidPed(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0760D6F70EBCC05C, player)
```


---

## _REGISTER_EAGLE_EYE_FOR_ENTITY

**Description:** Used for setting up eagle eye for entity
Params: p2 = re-register or not?

| Property | Value |
|----------|-------|
| Native Name | `_REGISTER_EAGLE_EYE_FOR_ENTITY` |
| Hash | `0x543DFE14BE720027` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `entity` (Entity), `p2` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`entity`** (`Entity`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RegisterEagleEyeForEntity(player, entity, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x543DFE14BE720027, player, entity, p2)
```


---

## _REGISTER_EAGLE_EYE_TRAILS_FOR_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_REGISTER_EAGLE_EYE_TRAILS_FOR_ENTITY` |
| Hash | `0xAC67098A1E54ABB0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `entity` (Entity), `p2` (Any) |

### Parameters

- **`player`** (`Player`)
- **`entity`** (`Entity`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
RegisterEagleEyeTrailsForEntity(player, entity, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAC67098A1E54ABB0, player, entity, p2)
```


---

## _REMOVE_PLAYER_AS_FOLLOW_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PLAYER_AS_FOLLOW_TARGET` |
| Hash | `0x0C6B89876262A99D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
RemovePlayerAsFollowTarget(player, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0C6B89876262A99D, player, ped)
```


---

## _SECONDARY_SPECIAL_ABILITY_SET_ACTIVE

**Description:** Activates EagleEye, called together with 0x28A13BF6B05C3D83

| Property | Value |
|----------|-------|
| Native Name | `_SECONDARY_SPECIAL_ABILITY_SET_ACTIVE` |
| Hash | `0x1710BC33CFB83634` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SecondarySpecialAbilitySetActive(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1710BC33CFB83634, player)
```


---

## _SECONDARY_SPECIAL_ABILITY_SET_DISABLED

**Description:** Deactivates EagleEye, called together with 0xC0B21F235C02139C

| Property | Value |
|----------|-------|
| Native Name | `_SECONDARY_SPECIAL_ABILITY_SET_DISABLED` |
| Hash | `0x64FF4BF9AF59E139` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `disabled` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`disabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SecondarySpecialAbilitySetDisabled(player, disabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x64FF4BF9AF59E139, player, disabled)
```


---

## _SET_AI_PLAYER_DEFENSE_MODIFIER_AGAINST_AI

**Description:** Sets Player's Defense against AI modifier

| Property | Value |
|----------|-------|
| Native Name | `_SET_AI_PLAYER_DEFENSE_MODIFIER_AGAINST_AI` |
| Hash | `0x914071FF93AF2692` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `modifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAiPlayerDefenseModifierAgainstAi(player, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x914071FF93AF2692, player, modifier)
```


---

## _SET_BOUNTY_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_SET_BOUNTY_TARGET` |
| Hash | `0x6ADF821FBF21920E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `target` (Player) |

### Parameters

- **`player`** (`Player`)
- **`target`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SetBountyTarget(player, target)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6ADF821FBF21920E, player, target)
```


---

## _SET_BOW_DRAW_REDUCTION_TIME_IN_DEADEYE

| Property | Value |
|----------|-------|
| Native Name | `_SET_BOW_DRAW_REDUCTION_TIME_IN_DEADEYE` |
| Hash | `0xBE0C524970892D41` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `drawReductionTime` (float) |

### Parameters

- **`player`** (`Player`)
- **`drawReductionTime`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetBowDrawReductionTimeInDeadeye(player, drawReductionTime)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBE0C524970892D41, player, drawReductionTime)
```


---

## _SET_BOW_STAMINA_DRAIN_SPEED

**Description:** Decreases Stamina bar drain speed by % when drawing a bow.

| Property | Value |
|----------|-------|
| Native Name | `_SET_BOW_STAMINA_DRAIN_SPEED` |
| Hash | `0xFE7C9CF376D23342` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `staminaDrain` (float) |

### Parameters

- **`player`** (`Player`)
- **`staminaDrain`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetBowStaminaDrainSpeed(player, staminaDrain)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFE7C9CF376D23342, player, staminaDrain)
```


---

## _SET_DAMAGE_CLOSE_DISTANCE_BONUS

| Property | Value |
|----------|-------|
| Native Name | `_SET_DAMAGE_CLOSE_DISTANCE_BONUS` |
| Hash | `0x7761A30432C91297` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `closeRangeLowerBound` (float), `closeRangeUpperBound` (float) |

### Parameters

- **`player`** (`Player`)
- **`closeRangeLowerBound`** (`float`)
- **`closeRangeUpperBound`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDamageCloseDistanceBonus(player, closeRangeLowerBound, closeRangeUpperBound)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7761A30432C91297, player, closeRangeLowerBound, closeRangeUpperBound)
```


---

## _SET_DAMAGE_CLOSE_DISTANCE_BONUS_TOTAL

| Property | Value |
|----------|-------|
| Native Name | `_SET_DAMAGE_CLOSE_DISTANCE_BONUS_TOTAL` |
| Hash | `0x5006C36652D6EC56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `closeDamageBonus` (float) |

### Parameters

- **`player`** (`Player`)
- **`closeDamageBonus`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDamageCloseDistanceBonusTotal(player, closeDamageBonus)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5006C36652D6EC56, player, closeDamageBonus)
```


---

## _SET_DAMAGE_FAR_DISTANCE_BONUS

| Property | Value |
|----------|-------|
| Native Name | `_SET_DAMAGE_FAR_DISTANCE_BONUS` |
| Hash | `0xED591CB17C8BA216` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `farRangeLowerBound` (float), `farRangeUpperBound` (float) |

### Parameters

- **`player`** (`Player`)
- **`farRangeLowerBound`** (`float`)
- **`farRangeUpperBound`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDamageFarDistanceBonus(player, farRangeLowerBound, farRangeUpperBound)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xED591CB17C8BA216, player, farRangeLowerBound, farRangeUpperBound)
```


---

## _SET_DAMAGE_FAR_DISTANCE_BONUS_TOTAL

| Property | Value |
|----------|-------|
| Native Name | `_SET_DAMAGE_FAR_DISTANCE_BONUS_TOTAL` |
| Hash | `0x1F0E3A4434565F8F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `farDamageBonus` (float) |

### Parameters

- **`player`** (`Player`)
- **`farDamageBonus`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDamageFarDistanceBonusTotal(player, farDamageBonus)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1F0E3A4434565F8F, player, farDamageBonus)
```


---

## _SET_DEADEYE_ABILITY_DEPLETION_DELAY

**Description:** Only used in R* SP Script short_update

| Property | Value |
|----------|-------|
| Native Name | `_SET_DEADEYE_ABILITY_DEPLETION_DELAY` |
| Hash | `0x870634493CB4372C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `delay` (float) |

### Parameters

- **`player`** (`Player`)
- **`delay`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDeadeyeAbilityDepletionDelay(player, delay)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x870634493CB4372C, player, delay)
```


---

## _SET_DEADEYE_ABILITY_LEVEL

**Description:** Max level is 5.

| Property | Value |
|----------|-------|
| Native Name | `_SET_DEADEYE_ABILITY_LEVEL` |
| Hash | `0xF0FE8E790BFEB5BB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `level` (int) |

### Parameters

- **`player`** (`Player`)
- **`level`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetDeadeyeAbilityLevel(player, level)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF0FE8E790BFEB5BB, player, level)
```


---

## _SET_DEADEYE_ABILITY_LOCKED

| Property | Value |
|----------|-------|
| Native Name | `_SET_DEADEYE_ABILITY_LOCKED` |
| Hash | `0x2797B8D66DD0EBB8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `abilityType` (int), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`abilityType`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDeadeyeAbilityLocked(player, abilityType, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2797B8D66DD0EBB8, player, abilityType, toggle)
```


---

## _SET_DEADEYE_TAGGING_CONFIG

| Property | Value |
|----------|-------|
| Native Name | `_SET_DEADEYE_TAGGING_CONFIG` |
| Hash | `0x83FCD6921FC8FD05` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `filter` (int) |

### Parameters

- **`player`** (`Player`)
- **`filter`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetDeadeyeTaggingConfig(player, filter)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x83FCD6921FC8FD05, player, filter)
```


---

## _SET_DEADEYE_TAGGING_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_SET_DEADEYE_TAGGING_ENABLED` |
| Hash | `0x6B5DDFB967E5073D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDeadeyeTaggingEnabled(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6B5DDFB967E5073D, player, toggle)
```


---

## _SET_DISABLE_PLAYER_WANTED_LEVEL

**Description:** Disables the players ability to be wanted by lawmen

| Property | Value |
|----------|-------|
| Native Name | `_SET_DISABLE_PLAYER_WANTED_LEVEL` |
| Hash | `0x8674D138391FFB1B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `disable` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`disable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDisablePlayerWantedLevel(player, disable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8674D138391FFB1B, player, disable)
```


---

## _SET_LOCAL_PLAYER_PERSONA_ABILITY_FLAG

**Description:** see personaabilities.meta
enum ePersonaAbilityFlag
{
	PERSONA_CAN_AUTOESCAPE_FROM_LASSO,
	PERSONA_HAT_BLOCKS_FIRST_HEADSHOT,
	PERSONA_FULL_AUTO_FOR_ALL_WEAPONS,
	PERSONA_MIGHT_LIVE_AFTER_DEADLY_DAMAGE,
	PERSONA_IGNORE_AIM_BEFORE_FIRING_RESTRICTIONS,
	PERSONA_DEADEYE_INSTANT_RELOAD,
	PERSONA_USE_PHOSPHOROUS_ROUNDS,
	PERSONA_CONT_DEADEYE_ON_TAKING_COVER,
	PERSONA_CONT_DEADEYE_ON_RELOAD,
	PERSONA_CONT_DEADEYE_ON_SHOOTING,
	PERSONA_CONT_DEADEYE_ON_EXITING_AIM,
	PERSONA_DISABLE_PLAYER_CANCELLING_DEADEYE,
	PERSONA_CONT_DEADEYE_ON_RAGDOLL,
	PERSONA_USE_EXPLOSIVE_ROUNDS,
	PERSONA_EXIT_DEADEYE_ON_TAKING_DAMAGE,
	PERSONA_CARRY_TWO_MONEYBAGS,
	PERSONA_ABILITY_LONG_PICK_HERBS,
	PERSONA_ABILITY_UNBREAKABLE_LASSO,
	PERSONA_CONT_DEADEYE_ON_SPRINTING,
	PERSONA_CANT_DEAL_HEADSHOTS,
	PERSONA_HANGMAN,
	PERSONA_ALLOW_DEADEYE_WITH_MELEE_WEAPONS,
	PERSONA_ALLOW_DEADEYE_WHILE_UNARMED,
	PERSONA_DISABLE_DEADEYE_PERFECT_ACCURACY,
	PERSONA_CANT_DEAL_HEADSHOTS_TO_PLAYERS,
	PERSONA_CANT_DEAL_CRITICAL_DAMAGE,
	PERSONA_CANT_DEAL_CRITICAL_DAMAGE_TO_PLAYERS,
	PERSONA_ALLOW_EAGLEEYE_IN_COMBAT,
	PERSONA_CONT_EAGLEEYE_ON_SPRINT,
	PERSONA_SUPPRESS_LENGENDARY_EAGLEEYE_TRAIL_COLOR
};

| Property | Value |
|----------|-------|
| Native Name | `_SET_LOCAL_PLAYER_PERSONA_ABILITY_FLAG` |
| Hash | `0x7146CF430965927C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `flagId` (int), `toggle` (BOOL) |

### Parameters

- **`flagId`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetLocalPlayerPersonaAbilityFlag(flagId, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7146CF430965927C, flagId, toggle)
```


---

## _SET_LOCKON_FOCUS_FIRE_VFX

**Description:** Focus Fire VFX start for player: p1 = focusfire

| Property | Value |
|----------|-------|
| Native Name | `_SET_LOCKON_FOCUS_FIRE_VFX` |
| Hash | `0x5F8E0303C229C84B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (char*) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetLockonFocusFireVfx(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5F8E0303C229C84B, player, p1)
```


---

## _SET_MAX_WANTED_LEVEL_2

| Property | Value |
|----------|-------|
| Native Name | `_SET_MAX_WANTED_LEVEL_2` |
| Hash | `0xEA6DE0CD15AECBE2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `maxWantedLevel` (int) |

### Parameters

- **`maxWantedLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetMaxWantedLevel2(maxWantedLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEA6DE0CD15AECBE2, maxWantedLevel)
```


---

## _SET_MOUNT_PROMPT_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `_SET_MOUNT_PROMPT_DISABLED` |
| Hash | `0x5B9813ECF7633FE8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `disabled` (BOOL) |

### Parameters

- **`disabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetMountPromptDisabled(disabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5B9813ECF7633FE8, disabled)
```


---

## _SET_PED_ACTIVE_PLAYER_HORSE

**Description:** Seems to work similar to 0xD2CB0FB0FDCB473D

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_ACTIVE_PLAYER_HORSE` |
| Hash | `0x8FBF9EDB378CCB8C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `horse` (Ped) |

### Parameters

- **`player`** (`Player`)
- **`horse`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetPedActivePlayerHorse(player, horse)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8FBF9EDB378CCB8C, player, horse)
```


---

## _SET_PED_AS_SADDLE_HORSE_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_AS_SADDLE_HORSE_FOR_PLAYER` |
| Hash | `0xD2CB0FB0FDCB473D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `mount` (Ped) |

### Parameters

- **`player`** (`Player`)
- **`mount`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetPedAsSaddleHorseForPlayer(player, mount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD2CB0FB0FDCB473D, player, mount)
```


---

## _SET_PLAYER_CAN_MERCY_KILL

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_CAN_MERCY_KILL` |
| Hash | `0x39363DFD04E91496` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerCanMercyKill(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x39363DFD04E91496, player, toggle)
```


---

*End of PLAYER natives part 7*
