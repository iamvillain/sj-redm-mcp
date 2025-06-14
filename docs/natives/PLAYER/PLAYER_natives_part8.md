# PLAYER Natives - Part 8 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PLAYER  
**Natives in this file:** 45  
**Total natives in namespace:** 395  
**Generated from:** RDR3natives JSON data

---

## _SET_PLAYER_DAMAGE_INFO_OVERRIDE

**Description:** damageInfo: STANDARD_PED_DAMAGE, STANDARD_FEMALE_PED_DAMAGE, STANDARD_PLAYER_PED_DAMAGE_MP, STANDARD_FEMALE_PLAYER_PED_DAMAGE_MP

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_DAMAGE_INFO_OVERRIDE` |
| Hash | `0x78B3D19AF6391A55` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `damageInfo` (char*) |

### Parameters

- **`player`** (`Player`)
- **`damageInfo`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPlayerDamageInfoOverride(player, damageInfo)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x78B3D19AF6391A55, player, damageInfo)
```


---

## _SET_PLAYER_DEFENSE_MODIFIER

**Description:** Sets stamina core drains peed using ranged damage scale and melee damage scale

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_DEFENSE_MODIFIER` |
| Hash | `0x497A6539BB0E8787` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `weaponDefenseMod` (float), `meleeDefenseMod` (float) |

### Parameters

- **`player`** (`Player`)
- **`weaponDefenseMod`** (`float`)
- **`meleeDefenseMod`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerDefenseModifier(player, weaponDefenseMod, meleeDefenseMod)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x497A6539BB0E8787, player, weaponDefenseMod, meleeDefenseMod)
```


---

## _SET_PLAYER_DEFENSE_TYPE_MODIFIER

**Description:** bullet damage modifier: type = 4
explosive damage Defense mod: type = 7
fire damage Defense mod: type = 8, 15

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_DEFENSE_TYPE_MODIFIER` |
| Hash | `0x93F499CAE53FCD05` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `type` (int), `defenseModifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`type`** (`int`)
- **`defenseModifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerDefenseTypeModifier(player, type, defenseModifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x93F499CAE53FCD05, player, type, defenseModifier)
```


---

## _SET_PLAYER_EXPLOSIVE_WEAPON_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_EXPLOSIVE_WEAPON_DAMAGE_MODIFIER` |
| Hash | `0x2D3ACE3DE0A2B622` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `modifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerExplosiveWeaponDamageModifier(player, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2D3ACE3DE0A2B622, player, modifier)
```


---

## _SET_PLAYER_HAS_DISCOVERED_CHARACTER_NAME_MP

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_HAS_DISCOVERED_CHARACTER_NAME_MP` |
| Hash | `0x7C32191D9FB2BDEA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `discoveryHash` (Hash) |

### Parameters

- **`discoveryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPlayerHasDiscoveredCharacterNameMp(discoveryHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C32191D9FB2BDEA, discoveryHash)
```


---

## _SET_PLAYER_HAS_DISCOVERED_CHARACTER_NAME_SP

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_HAS_DISCOVERED_CHARACTER_NAME_SP` |
| Hash | `0x946D46CD6DFB9742` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (int), `discoveryHash` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`int`)
- **`discoveryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPlayerHasDiscoveredCharacterNameSp(player, p1, discoveryHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x946D46CD6DFB9742, player, p1, discoveryHash)
```


---

## _SET_PLAYER_HEALTH_RECHARGE_TIME_MODIFIER

**Description:** Setting player's Health recharge time to zero forces immediate health regen

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_HEALTH_RECHARGE_TIME_MODIFIER` |
| Hash | `0x535ED4605F89AB6E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `modifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerHealthRechargeTimeModifier(player, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x535ED4605F89AB6E, player, modifier)
```


---

## _SET_PLAYER_HUNTING_WAGON

**Description:** Only applies to HUNTERCART01

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_HUNTING_WAGON` |
| Hash | `0x6A4404BDFA62CE2C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `wagon` (Vehicle) |

### Parameters

- **`player`** (`Player`)
- **`wagon`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
SetPlayerHuntingWagon(player, wagon)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A4404BDFA62CE2C, player, wagon)
```


---

## _SET_PLAYER_INTERACTION_NEGATIVE_RESPONSE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_INTERACTION_NEGATIVE_RESPONSE` |
| Hash | `0x98CD760DE43B612E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `speech` (char*) |

### Parameters

- **`player`** (`Player`)
- **`speech`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPlayerInteractionNegativeResponse(player, speech)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x98CD760DE43B612E, player, speech)
```


---

## _SET_PLAYER_INTERACTION_POSITIVE_RESPONSE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_INTERACTION_POSITIVE_RESPONSE` |
| Hash | `0xC6366A585659D15C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `speech` (char*) |

### Parameters

- **`player`** (`Player`)
- **`speech`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPlayerInteractionPositiveResponse(player, speech)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC6366A585659D15C, player, speech)
```


---

## _SET_PLAYER_IN_VEHICLE_TARGETING_MODE

**Description:** Sets your targeting mode for when you're in a vehicle (perhaps a mount/horse).
see SET_PLAYER_TARGETING_MODE for eTargetingMode

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_IN_VEHICLE_TARGETING_MODE` |
| Hash | `0x19B4F71703902238` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `targetMode` (int) |

### Parameters

- **`targetMode`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPlayerInVehicleTargetingMode(targetMode)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x19B4F71703902238, targetMode)
```


---

## _SET_PLAYER_LASSO_DAMAGE_PER_SECOND

**Description:** _SET_PLAYER_A* - _SET_PLAYER_C*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_LASSO_DAMAGE_PER_SECOND` |
| Hash | `0x43F50A7CD2482156` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `damage` (float) |

### Parameters

- **`player`** (`Player`)
- **`damage`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerLassoDamagePerSecond(player, damage)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x43F50A7CD2482156, player, damage)
```


---

## _SET_PLAYER_LOCAL_ACCURACY_FLOOR_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_LOCAL_ACCURACY_FLOOR_MODIFIER` |
| Hash | `0x4EA69188FBCE6A7D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `accuracy` (float) |

### Parameters

- **`player`** (`Player`)
- **`accuracy`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerLocalAccuracyFloorModifier(player, accuracy)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4EA69188FBCE6A7D, player, accuracy)
```


---

## _SET_PLAYER_MANAGE_BUFF_SUPER_JUMP

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_MANAGE_BUFF_SUPER_JUMP` |
| Hash | `0x292F0B6EDC82E3A4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (float) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerManageBuffSuperJump(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x292F0B6EDC82E3A4, player, p1)
```


---

## _SET_PLAYER_MAX_AMMO_OVERRIDE_FOR_AMMO_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_MAX_AMMO_OVERRIDE_FOR_AMMO_TYPE` |
| Hash | `0xE133C1EC5300F740` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `ammoType` (Hash), `amount` (int) |

### Parameters

- **`player`** (`Player`)
- **`ammoType`** (`Hash`)
- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPlayerMaxAmmoOverrideForAmmoType(player, ammoType, amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE133C1EC5300F740, player, ammoType, amount)
```


---

## _SET_PLAYER_MOOD

**Description:** mood: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePedMood

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_MOOD` |
| Hash | `0x39BED552DB46FFA9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `mood` (int) |

### Parameters

- **`player`** (`Player`)
- **`mood`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPlayerMood(player, mood)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x39BED552DB46FFA9, player, mood)
```


---

## _SET_PLAYER_MOUNT_STATE_ACTIVE

**Description:** Name could potentially be inaccurate.
Used in Script Function HORSE_SETUP_PLAYER_HORSE_ATTRIBUTES (p1 = true)
_SET_PLAYER_L* - _SET_PLAYER_M*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_MOUNT_STATE_ACTIVE` |
| Hash | `0xDF93973251FB2CA5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `active` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`active`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerMountStateActive(player, active)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF93973251FB2CA5, player, active)
```


---

## _SET_PLAYER_OWNS_MOUNT

**Description:** Seems to enable active horse equipment prompt when being near it and enables the control that opens the inventory as well

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_OWNS_MOUNT` |
| Hash | `0xE6D4E435B56D5BD0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `mount` (Ped) |

### Parameters

- **`player`** (`Player`)
- **`mount`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetPlayerOwnsMount(player, mount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE6D4E435B56D5BD0, player, mount)
```


---

## _SET_PLAYER_OWNS_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_OWNS_VEHICLE` |
| Hash | `0xD0E02AA618020D17` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `vehicle` (Vehicle) |

### Parameters

- **`player`** (`Player`)
- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
SetPlayerOwnsVehicle(player, vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD0E02AA618020D17, player, vehicle)
```


---

## _SET_PLAYER_REMOTE_ACCURACY_FLOOR_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_REMOTE_ACCURACY_FLOOR_MODIFIER` |
| Hash | `0xDEE80FEDFDD43C9B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `accuracy` (float) |

### Parameters

- **`player`** (`Player`)
- **`accuracy`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerRemoteAccuracyFloorModifier(player, accuracy)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDEE80FEDFDD43C9B, player, accuracy)
```


---

## _SET_PLAYER_RESET_FLAG

**Description:** https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePlayerResetFlags
https://github.com/femga/rdr3_discoveries/tree/master/AI/PLAYER_RESET_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_RESET_FLAG` |
| Hash | `0x9F9A829C6751F3C7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `playerResetFlag` (int), `p2` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`playerResetFlag`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerResetFlag(player, playerResetFlag, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9F9A829C6751F3C7, player, playerResetFlag, p2)
```


---

## _SET_PLAYER_STAMINA_SPRINT_DEPLETION_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_STAMINA_SPRINT_DEPLETION_MULTIPLIER` |
| Hash | `0xBBADFB5E5E5766FB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `multiplier` (float) |

### Parameters

- **`player`** (`Player`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerStaminaSprintDepletionMultiplier(player, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBBADFB5E5E5766FB, player, multiplier)
```


---

## _SET_PLAYER_DEAD_EYE_AURA_BY_HASH

**Description:** Sets the aura color for entities that the player can target in Deadeye mode, based on a specific hash value. This Native was previously named `SetPlayerStatFlagHash`, but it has been re-evaluated and renamed to better reflect its function in controlling the Deadeye aura color for targeted entities
some colors
0: Default aura
1014693585
1936842089
1979474018

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_DEAD_EYE_AURA_BY_HASH` |
| Hash | `0x768E81AE285A4B67` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `auraColorHash` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`auraColorHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPlayerDeadEyeAuraByHash(player, auraColorHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x768E81AE285A4B67, player, auraColorHash)
```


---

## _SET_PLAYER_TOTAL_ACCURACY_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_TOTAL_ACCURACY_MODIFIER` |
| Hash | `0x967FF5BC0CFE6D26` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `accuracy` (float) |

### Parameters

- **`player`** (`Player`)
- **`accuracy`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerTotalAccuracyModifier(player, accuracy)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x967FF5BC0CFE6D26, player, accuracy)
```


---

## _SET_PLAYER_TRAMPLE_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_TRAMPLE_DAMAGE_MODIFIER` |
| Hash | `0xAF341032E97FB061` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `modifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerTrampleDamageModifier(player, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAF341032E97FB061, player, modifier)
```


---

## _SET_PLAYER_WEAPON_GROUP_AS_INSTANT_KILL

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_WEAPON_GROUP_AS_INSTANT_KILL` |
| Hash | `0x59F0AFF3E0A1B019` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `weaponGroup` (Hash), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`weaponGroup`** (`Hash`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerWeaponGroupAsInstantKill(player, weaponGroup, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x59F0AFF3E0A1B019, player, weaponGroup, toggle)
```


---

## _SET_PLAYER_WEAPON_GROUP_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_WEAPON_GROUP_DAMAGE_MODIFIER` |
| Hash | `0xFC79DCC94D0A5897` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `weaponGroup` (Hash), `modifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`weaponGroup`** (`Hash`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerWeaponGroupDamageModifier(player, weaponGroup, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFC79DCC94D0A5897, player, weaponGroup, modifier)
```


---

## _SET_RECEIVED_DAMAGE_TAKEN_ON_HORSEBACK_MODIFIER

**Description:** Decreases the damage the player receives while on horseback
Previous name: _SET_RECEIVED_HORSEBACK_DAMAGE_DECREASE

| Property | Value |
|----------|-------|
| Native Name | `_SET_RECEIVED_DAMAGE_TAKEN_ON_HORSEBACK_MODIFIER` |
| Hash | `0xB427911EA6DFFEF3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `damageDecrease` (float) |

### Parameters

- **`player`** (`Player`)
- **`damageDecrease`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetReceivedDamageTakenOnHorsebackModifier(player, damageDecrease)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB427911EA6DFFEF3, player, damageDecrease)
```


---

## _SET_SHOW_INFO_CARD

| Property | Value |
|----------|-------|
| Native Name | `_SET_SHOW_INFO_CARD` |
| Hash | `0xDC68829BB3F37023` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `showingInfoCard` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`showingInfoCard`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetShowInfoCard(player, showingInfoCard)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDC68829BB3F37023, player, showingInfoCard)
```


---

## _SET_SPECIAL_ABILITY_ACTIVATION_COST

| Property | Value |
|----------|-------|
| Native Name | `_SET_SPECIAL_ABILITY_ACTIVATION_COST` |
| Hash | `0xAE4BCC79C587EBBF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `activationCost` (float), `p2` (int) |

### Parameters

- **`player`** (`Player`)
- **`activationCost`** (`float`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetSpecialAbilityActivationCost(player, activationCost, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE4BCC79C587EBBF, player, activationCost, p2)
```


---

## _SET_SPECIAL_ABILITY_DISABLE_TIMER

**Description:** Only used in R* SP Script short_update

| Property | Value |
|----------|-------|
| Native Name | `_SET_SPECIAL_ABILITY_DISABLE_TIMER` |
| Hash | `0xC0B1C05B313693D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `timer` (float) |

### Parameters

- **`player`** (`Player`)
- **`timer`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetSpecialAbilityDisableTimer(player, timer)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC0B1C05B313693D1, player, timer)
```


---

## _SET_SPECIAL_ABILITY_DURATION_COST

**Description:** durationCost: per second

| Property | Value |
|----------|-------|
| Native Name | `_SET_SPECIAL_ABILITY_DURATION_COST` |
| Hash | `0xB783F75940B23014` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `durationCost` (float) |

### Parameters

- **`player`** (`Player`)
- **`durationCost`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetSpecialAbilityDurationCost(player, durationCost)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB783F75940B23014, player, durationCost)
```


---

## _SET_SPECIAL_ABILITY_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_SPECIAL_ABILITY_MULTIPLIER` |
| Hash | `0x5A498FCA232F71E1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `multiplier` (float) |

### Parameters

- **`player`** (`Player`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetSpecialAbilityMultiplier(player, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5A498FCA232F71E1, player, multiplier)
```


---

## _SET_SPECIAL_ABILITY_TYPE

**Description:** SPECIAL_ABILITY_NONE = -1,
SPECIAL_ABILITY_CAR_SLOWDOWN,
SPECIAL_ABILITY_RAGE,
SPECIAL_ABILITY_BULLET_TIME,
SPECIAL_ABILITY_SNAPSHOT,
SPECIAL_ABILITY_INSULT,
SPECIAL_ABILITY_DEADEYE,
SPECIAL_ABILITY_REVIVE

| Property | Value |
|----------|-------|
| Native Name | `_SET_SPECIAL_ABILITY_TYPE` |
| Hash | `0x00BA333DA05ADC23` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `type` (int) |

### Parameters

- **`player`** (`Player`)
- **`type`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetSpecialAbilityType(player, type)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x00BA333DA05ADC23, player, type)
```


---

## _SET_USED_ITEM_EFFECT

| Property | Value |
|----------|-------|
| Native Name | `_SET_USED_ITEM_EFFECT` |
| Hash | `0x0E1DB1F8F5B561DC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `health` (float), `stamina` (float), `deadeye` (float), `healthCore` (int), `staminaCore` (int), `deadeyeCore` (int) |

### Parameters

- **`health`** (`float`)
- **`stamina`** (`float`)
- **`deadeye`** (`float`)
- **`healthCore`** (`int`)
- **`staminaCore`** (`int`)
- **`deadeyeCore`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetUsedItemEffect(health, stamina, deadeye, healthCore, staminaCore, deadeyeCore)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0E1DB1F8F5B561DC, health, stamina, deadeye, healthCore, staminaCore, deadeyeCore)
```


---

## _SET_WEAPON_DEGRADATION_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_WEAPON_DEGRADATION_MODIFIER` |
| Hash | `0x11A7FF918EF6BC66` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `modifier` (float) |

### Parameters

- **`player`** (`Player`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetWeaponDegradationModifier(player, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x11A7FF918EF6BC66, player, modifier)
```


---

## _SPECIAL_ABILITY_DRAIN_BY_AMOUNT

**Description:** Drains Deadeye by given amount.

| Property | Value |
|----------|-------|
| Native Name | `_SPECIAL_ABILITY_DRAIN_BY_AMOUNT` |
| Hash | `0x200114E99552462B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `amount` (float), `p2` (Any) |

### Parameters

- **`player`** (`Player`)
- **`amount`** (`float`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SpecialAbilityDrainByAmount(player, amount, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x200114E99552462B, player, amount, p2)
```


---

## _SPECIAL_ABILITY_GET_AMOUNT_CACHED

**Description:** Returns Deadeye value from player

| Property | Value |
|----------|-------|
| Native Name | `_SPECIAL_ABILITY_GET_AMOUNT_CACHED` |
| Hash | `0x029884FB65821B07` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = SpecialAbilityGetAmountCached(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x029884FB65821B07, player)
```


---

## _SPECIAL_ABILITY_RESTORE_BY_AMOUNT

**Description:** Restores Deadeye by given amount.
Params: p2, p3, p4 = 0, 0, 1 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_SPECIAL_ABILITY_RESTORE_BY_AMOUNT` |
| Hash | `0x51345AE20F22C261` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `amount` (float), `p2` (int), `p3` (int), `p4` (int) |

### Parameters

- **`player`** (`Player`)
- **`amount`** (`float`)
- **`p2`** (`int`)
- **`p3`** (`int`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
SpecialAbilityRestoreByAmount(player, amount, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x51345AE20F22C261, player, amount, p2, p3, p4)
```


---

## _SPECIAL_ABILITY_RESTORE_OUTER_RING

**Description:** Only used in R* SP Script short_update
Restores Deadeye Outer Ring

| Property | Value |
|----------|-------|
| Native Name | `_SPECIAL_ABILITY_RESTORE_OUTER_RING` |
| Hash | `0x2498035289B5688F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `amount` (float) |

### Parameters

- **`player`** (`Player`)
- **`amount`** (`float`)

### Usage

**Lua (Direct):**
```lua
SpecialAbilityRestoreOuterRing(player, amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2498035289B5688F, player, amount)
```


---

## _SPECIAL_ABILITY_SET_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `_SPECIAL_ABILITY_SET_DISABLED` |
| Hash | `0xAE637BB8EF017875` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `disabled` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`disabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SpecialAbilitySetDisabled(player, disabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE637BB8EF017875, player, disabled)
```


---

## _SPECIAL_ABILITY_SET_EAGLE_EYE_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `_SPECIAL_ABILITY_SET_EAGLE_EYE_DISABLED` |
| Hash | `0xC0B21F235C02139C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SpecialAbilitySetEagleEyeDisabled(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC0B21F235C02139C, player)
```


---

## _SPECIAL_ABILITY_START_RESTORE

**Description:** Params: p1 = -1 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_SPECIAL_ABILITY_START_RESTORE` |
| Hash | `0x1D77B47AFA584E90` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (int), `p2` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SpecialAbilityStartRestore(player, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1D77B47AFA584E90, player, p1, p2)
```


---

## _UNREGISTER_EAGLE_EYE_FOR_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_UNREGISTER_EAGLE_EYE_FOR_ENTITY` |
| Hash | `0x9DAE1380CC5C6451` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `entity` (Entity) |

### Parameters

- **`player`** (`Player`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
UnregisterEagleEyeForEntity(player, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9DAE1380CC5C6451, player, entity)
```


---

## _UNREGISTER_EAGLE_EYE_TRAILS_FOR_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_UNREGISTER_EAGLE_EYE_TRAILS_FOR_ENTITY` |
| Hash | `0x9A957912CE2EABD1` |
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
UnregisterEagleEyeTrailsForEntity(player, entity, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9A957912CE2EABD1, player, entity, p2)
```


---

*End of PLAYER natives part 8*
