# PLAYER Natives - Part 2 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PLAYER  
**Natives in this file:** 50  
**Total natives in namespace:** 395  
**Generated from:** RDR3natives JSON data

---

## IS_PLAYER_SCRIPT_CONTROL_ON

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_SCRIPT_CONTROL_ON` |
| Hash | `0xB78350754157C00F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerScriptControlOn(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB78350754157C00F, player)
```


---

## IS_PLAYER_TARGETTING_ANYTHING

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_TARGETTING_ANYTHING` |
| Hash | `0x4605C66E0F935F83` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerTargettingAnything(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4605C66E0F935F83, player)
```


---

## IS_PLAYER_TARGETTING_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_TARGETTING_ENTITY` |
| Hash | `0x27F89FDC16688A7A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `entity` (Entity), `p2` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`entity`** (`Entity`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerTargettingEntity(player, entity, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x27F89FDC16688A7A, player, entity, p2)
```


---

## IS_PLAYER_TELEPORT_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_TELEPORT_ACTIVE` |
| Hash | `0x085EEAEB8783FEB5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerTeleportActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x085EEAEB8783FEB5, )
```


---

## IS_PLAYER_WANTED_LEVEL_GREATER

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_WANTED_LEVEL_GREATER` |
| Hash | `0xE1C0AD4C24324C36` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `wantedLevel` (int) |

### Parameters

- **`player`** (`Player`)
- **`wantedLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerWantedLevelGreater(player, wantedLevel)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE1C0AD4C24324C36, player, wantedLevel)
```


---

## IS_SYSTEM_UI_BEING_DISPLAYED

| Property | Value |
|----------|-------|
| Native Name | `IS_SYSTEM_UI_BEING_DISPLAYED` |
| Hash | `0x908258B6209E71F7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsSystemUiBeingDisplayed()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x908258B6209E71F7, )
```


---

## NETWORK_PLAYER_ID_TO_INT

**Description:** Does exactly the same thing as PLAYER_ID()

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_PLAYER_ID_TO_INT` |
| Hash | `0x8A9386F0749A17FA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkPlayerIdToInt()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8A9386F0749A17FA, )
```


---

## PLAYER_ID

**Description:** This returns YOUR 'identity' as a Player type.

Always returns 0 in story mode.

| Property | Value |
|----------|-------|
| Native Name | `PLAYER_ID` |
| Hash | `0x217E9DC48139933D` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = PlayerId()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x217E9DC48139933D, )
```


---

## PLAYER_PED_ID

**Description:** Returns current player ped

| Property | Value |
|----------|-------|
| Native Name | `PLAYER_PED_ID` |
| Hash | `0x096275889B8E0EE0` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = PlayerPedId()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x096275889B8E0EE0, )
```


---

## REPORT_POLICE_SPOTTED_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `REPORT_POLICE_SPOTTED_PLAYER` |
| Hash | `0xCBCCF73FFA69CC6B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ReportPoliceSpottedPlayer(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCBCCF73FFA69CC6B, player)
```


---

## RESET_LAW_RESPONSE_DELAY_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `RESET_LAW_RESPONSE_DELAY_OVERRIDE` |
| Hash | `0x5CE5CACC01D0F985` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetLawResponseDelayOverride()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5CE5CACC01D0F985, )
```


---

## RESET_PLAYER_ARREST_STATE

| Property | Value |
|----------|-------|
| Native Name | `RESET_PLAYER_ARREST_STATE` |
| Hash | `0x12917931C31F1750` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ResetPlayerArrestState(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x12917931C31F1750, player)
```


---

## RESET_PLAYER_INPUT_GAIT

| Property | Value |
|----------|-------|
| Native Name | `RESET_PLAYER_INPUT_GAIT` |
| Hash | `0x61A2EECAB274829B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ResetPlayerInputGait(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x61A2EECAB274829B, player)
```


---

## RESET_WANTED_LEVEL_DIFFICULTY

| Property | Value |
|----------|-------|
| Native Name | `RESET_WANTED_LEVEL_DIFFICULTY` |
| Hash | `0x062D14F18E8B0CAE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ResetWantedLevelDifficulty(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x062D14F18E8B0CAE, player)
```


---

## RESTORE_PLAYER_STAMINA

| Property | Value |
|----------|-------|
| Native Name | `RESTORE_PLAYER_STAMINA` |
| Hash | `0xC41F4B6E23FE6A4A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (float) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
RestorePlayerStamina(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC41F4B6E23FE6A4A, player, p1)
```


---

## SET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE

**Description:** This can be between 1.0f - 50.0f

| Property | Value |
|----------|-------|
| Native Name | `SET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE` |
| Hash | `0x5DA6500FE849DA16` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `multiplier` (float) |

### Parameters

- **`player`** (`Player`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAirDragMultiplierForPlayersVehicle(player, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5DA6500FE849DA16, player, multiplier)
```


---

## SET_ALL_NEUTRAL_RANDOM_PEDS_FLEE_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_ALL_NEUTRAL_RANDOM_PEDS_FLEE_THIS_FRAME` |
| Hash | `0x16752DAA7E6D3F72` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SetAllNeutralRandomPedsFleeThisFrame(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x16752DAA7E6D3F72, player)
```


---

## SET_ALL_RANDOM_PEDS_FLEE

**Description:** Sets whether all random peds will run away from player if they are agitated (threatened) (bool=true), or some peds can stand up for themselves (bool=false).

| Property | Value |
|----------|-------|
| Native Name | `SET_ALL_RANDOM_PEDS_FLEE` |
| Hash | `0xE705309B8C6445A4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAllRandomPedsFlee(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE705309B8C6445A4, player, toggle)
```


---

## SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME` |
| Hash | `0xD5C198A62F1DEB0A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SetAllRandomPedsFleeThisFrame(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD5C198A62F1DEB0A, player)
```


---

## SET_EVERYONE_IGNORE_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `SET_EVERYONE_IGNORE_PLAYER` |
| Hash | `0x34630A768925B852` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEveryoneIgnorePlayer(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x34630A768925B852, player, toggle)
```


---

## SET_LAW_RESPONSE_DELAY_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `SET_LAW_RESPONSE_DELAY_OVERRIDE` |
| Hash | `0xD2DFC9CCA5596A11` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetLawResponseDelayOverride(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD2DFC9CCA5596A11, p0)
```


---

## SET_LOCKON_TO_FRIENDLY_PLAYERS

| Property | Value |
|----------|-------|
| Native Name | `SET_LOCKON_TO_FRIENDLY_PLAYERS` |
| Hash | `0x4A056257802DD3E5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetLockonToFriendlyPlayers(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4A056257802DD3E5, player, toggle)
```


---

## SET_MAX_WANTED_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `SET_MAX_WANTED_LEVEL` |
| Hash | `0x28A4BD2CEE236E19` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `maxWantedLevel` (int) |

### Parameters

- **`maxWantedLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetMaxWantedLevel(maxWantedLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x28A4BD2CEE236E19, maxWantedLevel)
```


---

## SET_MIN_TIME_BEFORE_HORSE_BUCKING

| Property | Value |
|----------|-------|
| Native Name | `SET_MIN_TIME_BEFORE_HORSE_BUCKING` |
| Hash | `0x506CE71FB6E8CF5E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `mount` (Ped), `iMinBuckTime` (int) |

### Parameters

- **`mount`** (`Ped`)
- **`iMinBuckTime`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetMinTimeBeforeHorseBucking(mount, iMinBuckTime)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x506CE71FB6E8CF5E, mount, iMinBuckTime)
```


---

## SET_PED_AS_TEMP_PLAYER_HORSE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_AS_TEMP_PLAYER_HORSE` |
| Hash | `0x227B06324234FB09` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `horse` (Ped) |

### Parameters

- **`player`** (`Player`)
- **`horse`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedAsTempPlayerHorse(player, horse)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x227B06324234FB09, player, horse)
```


---

## SET_PLAYER_CAN_BE_HASSLED_BY_GANGS

**Description:** Sets whether this player can be hassled by gangs.

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_CAN_BE_HASSLED_BY_GANGS` |
| Hash | `0xC7FE774412046825` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerCanBeHassledByGangs(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC7FE774412046825, player, toggle)
```


---

## SET_PLAYER_CAN_USE_COVER

**Description:** Sets whether this player can take cover.

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_CAN_USE_COVER` |
| Hash | `0x5EDA520F7A3BAF4E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerCanUseCover(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5EDA520F7A3BAF4E, player, toggle)
```


---

## SET_PLAYER_CLOTH_PIN_FRAMES

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_CLOTH_PIN_FRAMES` |
| Hash | `0xD0D9317DFEEF9A66` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPlayerClothPinFrames(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD0D9317DFEEF9A66, ped, p1)
```


---

## SET_PLAYER_CONTROL

**Description:** flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eSetPlayerControlFlags

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_CONTROL` |
| Hash | `0x4D51E59243281D80` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL), `flags` (int), `bPreventHeadingChange` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)
- **`flags`** (`int`)
- **`bPreventHeadingChange`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerControl(player, toggle, flags, bPreventHeadingChange)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D51E59243281D80, player, toggle, flags, bPreventHeadingChange)
```


---

## SET_PLAYER_FORCED_AIM

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_FORCED_AIM` |
| Hash | `0xD5FCC166AEB2FD0F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL), `ped` (Ped), `p3` (int), `p4` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)
- **`ped`** (`Ped`)
- **`p3`** (`int`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerForcedAim(player, toggle, ped, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD5FCC166AEB2FD0F, player, toggle, ped, p3, p4)
```


---

## SET_PLAYER_HEALTH_RECHARGE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_HEALTH_RECHARGE_MULTIPLIER` |
| Hash | `0x8899C244EBCF70DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `regenRate` (float) |

### Parameters

- **`player`** (`Player`)
- **`regenRate`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerHealthRechargeMultiplier(player, regenRate)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8899C244EBCF70DE, player, regenRate)
```


---

## SET_PLAYER_INVINCIBLE

**Description:** Simply sets you as invincible (Health will not deplete).

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_INVINCIBLE` |
| Hash | `0xFEBEEBC9CBDF4B12` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerInvincible(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFEBEEBC9CBDF4B12, player, toggle)
```


---

## SET_PLAYER_LOCKON

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_LOCKON` |
| Hash | `0x462AA1973CBBA75E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerLockon(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x462AA1973CBBA75E, player, toggle)
```


---

## SET_PLAYER_LOCKON_RANGE_OVERRIDE

**Description:** Affects the range of auto aim target.

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_LOCKON_RANGE_OVERRIDE` |
| Hash | `0x3A3CD06597388322` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `range` (float) |

### Parameters

- **`player`** (`Player`)
- **`range`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerLockonRangeOverride(player, range)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3A3CD06597388322, player, range)
```


---

## SET_PLAYER_MAY_NOT_ENTER_ANY_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_MAY_NOT_ENTER_ANY_VEHICLE` |
| Hash | `0xBEC463B3A11C909E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SetPlayerMayNotEnterAnyVehicle(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBEC463B3A11C909E, player)
```


---

## SET_PLAYER_MAY_ONLY_ENTER_THIS_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_MAY_ONLY_ENTER_THIS_VEHICLE` |
| Hash | `0xDA35A134038557EC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `vehicle` (Vehicle) |

### Parameters

- **`player`** (`Player`)
- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
SetPlayerMayOnlyEnterThisVehicle(player, vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDA35A134038557EC, player, vehicle)
```


---

## SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER` |
| Hash | `0xE4CB5A3F18170381` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `modifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerMeleeWeaponDamageModifier(player, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE4CB5A3F18170381, player, modifier)
```


---

## SET_PLAYER_MODEL

**Description:** Make sure to request the model first and wait until it has loaded.

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_MODEL` |
| Hash | `0xED40380076A31506` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `modelHash` (Hash), `p2` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`modelHash`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerModel(player, modelHash, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xED40380076A31506, player, modelHash, p2)
```


---

## SET_PLAYER_NOISE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_NOISE_MULTIPLIER` |
| Hash | `0xB5EC6BDAEBCA454C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `multiplier` (float) |

### Parameters

- **`player`** (`Player`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerNoiseMultiplier(player, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB5EC6BDAEBCA454C, player, multiplier)
```


---

## SET_PLAYER_SIMULATE_AIMING

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_SIMULATE_AIMING` |
| Hash | `0xE0447DEF81CCDFD2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerSimulateAiming(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0447DEF81CCDFD2, player, toggle)
```


---

## SET_PLAYER_SNEAKING_NOISE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_SNEAKING_NOISE_MULTIPLIER` |
| Hash | `0x4DE44FA389DCA565` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `multiplier` (float) |

### Parameters

- **`player`** (`Player`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerSneakingNoiseMultiplier(player, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4DE44FA389DCA565, player, multiplier)
```


---

## SET_PLAYER_STAMINA_RECHARGE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_STAMINA_RECHARGE_MULTIPLIER` |
| Hash | `0xFECA17CF3343694B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `multiplier` (float) |

### Parameters

- **`player`** (`Player`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerStaminaRechargeMultiplier(player, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFECA17CF3343694B, player, multiplier)
```


---

## SET_PLAYER_TARGETING_MODE

**Description:** Sets your targeting mode for when you're on foot.
enum eTargetingMode
{
	TARGETING_MODE_INVALID = -1,
	TARGETING_MODE_CAUSAL, (Wide)
	TARGETING_MODE_NORMAL,
	TARGETING_MODE_HARD, (Narrow)
	TARGETING_MODE_EXPERT (Free Aim)
};

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_TARGETING_MODE` |
| Hash | `0xD66A941F401E7302` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `targetMode` (int) |

### Parameters

- **`targetMode`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPlayerTargetingMode(targetMode)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD66A941F401E7302, targetMode)
```


---

## SET_PLAYER_TEAM

**Description:** Sets the player's team.

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_TEAM` |
| Hash | `0xE8DD8536F01DE600` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `team` (int), `bRestrictToThisScript` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`team`** (`int`)
- **`bRestrictToThisScript`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerTeam(player, team, bRestrictToThisScript)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE8DD8536F01DE600, player, team, bRestrictToThisScript)
```


---

## SET_PLAYER_WANTED_LEVEL

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_WANTED_LEVEL` |
| Hash | `0x384D4765395E006C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `wantedLevel` (int), `disableNoMission` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`wantedLevel`** (`int`)
- **`disableNoMission`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerWantedLevel(player, wantedLevel, disableNoMission)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x384D4765395E006C, player, wantedLevel, disableNoMission)
```


---

## SET_PLAYER_WEAPON_DAMAGE_MODIFIER

**Description:** This modifies the damage value of your weapon. Whether it is a multiplier or base damage is unknown.

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_WEAPON_DAMAGE_MODIFIER` |
| Hash | `0x94D529F7B73D7A85` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `modifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerWeaponDamageModifier(player, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x94D529F7B73D7A85, player, modifier)
```


---

## SET_PLAYER_WEAPON_DEFENSE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_WEAPON_DEFENSE_MODIFIER` |
| Hash | `0xD15CC2D493160BE3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `modifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerWeaponDefenseModifier(player, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD15CC2D493160BE3, player, modifier)
```


---

## SET_PLAYER_WEAPON_TYPE_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_WEAPON_TYPE_DAMAGE_MODIFIER` |
| Hash | `0xD04AD186CE8BB129` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `weaponHash` (Hash), `damageModifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`weaponHash`** (`Hash`)
- **`damageModifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerWeaponTypeDamageModifier(player, weaponHash, damageModifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD04AD186CE8BB129, player, weaponHash, damageModifier)
```


---

## SET_POLICE_RADAR_BLIPS

**Description:** If toggle is set to false:
 The police won't be shown on the (mini)map

If toggle is set to true:
 The police will be shown on the (mini)map

| Property | Value |
|----------|-------|
| Native Name | `SET_POLICE_RADAR_BLIPS` |
| Hash | `0x6FD7DD6B63F2820E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPoliceRadarBlips(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6FD7DD6B63F2820E, toggle)
```


---

## SET_SWIM_MULTIPLIER_FOR_PLAYER

**Description:** Swim speed multiplier.
Multiplier goes up to 1.49f

| Property | Value |
|----------|-------|
| Native Name | `SET_SWIM_MULTIPLIER_FOR_PLAYER` |
| Hash | `0xBFCEABDE34DA5085` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `multiplier` (float) |

### Parameters

- **`player`** (`Player`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetSwimMultiplierForPlayer(player, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBFCEABDE34DA5085, player, multiplier)
```


---

*End of PLAYER natives part 2*
