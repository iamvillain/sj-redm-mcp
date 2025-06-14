# PLAYER Natives - Part 1 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PLAYER  
**Natives in this file:** 50  
**Total natives in namespace:** 395  
**Generated from:** RDR3natives JSON data

---

## BOOST_PLAYER_HORSE_SPEED_FOR_TIME

| Property | Value |
|----------|-------|
| Native Name | `BOOST_PLAYER_HORSE_SPEED_FOR_TIME` |
| Hash | `0x09C28F828EE674FA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `speedBoost` (float), `duration` (int) |

### Parameters

- **`player`** (`Player`)
- **`speedBoost`** (`float`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
BoostPlayerHorseSpeedForTime(player, speedBoost, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x09C28F828EE674FA, player, speedBoost, duration)
```


---

## CAN_PLAYER_START_MISSION

| Property | Value |
|----------|-------|
| Native Name | `CAN_PLAYER_START_MISSION` |
| Hash | `0x2DF170B1185AF777` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = CanPlayerStartMission(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2DF170B1185AF777, player)
```


---

## CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED` |
| Hash | `0x0361096D6CE4372C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ClearPlayerHasDamagedAtLeastOneNonAnimalPed(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0361096D6CE4372C, player)
```


---

## CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_PED

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_PED` |
| Hash | `0x270B63A641BE32F2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ClearPlayerHasDamagedAtLeastOnePed(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x270B63A641BE32F2, player)
```


---

## CLEAR_PLAYER_WANTED_LEVEL

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PLAYER_WANTED_LEVEL` |
| Hash | `0x4E4B996C928C7AA6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
ClearPlayerWantedLevel(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4E4B996C928C7AA6, player)
```


---

## DISABLE_PLAYER_FIRING

**Description:** Inhibits the player from using any method of combat including melee and firearms.

NOTE: Only disables the firing for one frame

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_PLAYER_FIRING` |
| Hash | `0x2970929FD5F9FC89` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DisablePlayerFiring(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2970929FD5F9FC89, player, toggle)
```


---

## EAGLE_EYE_SET_CUSTOM_ENTITY_TINT

| Property | Value |
|----------|-------|
| Native Name | `EAGLE_EYE_SET_CUSTOM_ENTITY_TINT` |
| Hash | `0x62ED71E133B6C9F1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `red` (int), `green` (int), `blue` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)

### Usage

**Lua (Direct):**
```lua
EagleEyeSetCustomEntityTint(entity, red, green, blue)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x62ED71E133B6C9F1, entity, red, green, blue)
```


---

## FORCE_CLEANUP

| Property | Value |
|----------|-------|
| Native Name | `FORCE_CLEANUP` |
| Hash | `0x768C017FB878E4F4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cleanupFlags` (int) |

### Parameters

- **`cleanupFlags`** (`int`)

### Usage

**Lua (Direct):**
```lua
ForceCleanup(cleanupFlags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x768C017FB878E4F4, cleanupFlags)
```


---

## FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME

| Property | Value |
|----------|-------|
| Native Name | `FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME` |
| Hash | `0xDAACAF8B687F2353` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (char*), `cleanupFlags` (int) |

### Parameters

- **`name`** (`char*`)
- **`cleanupFlags`** (`int`)

### Usage

**Lua (Direct):**
```lua
ForceCleanupForAllThreadsWithThisName(name, cleanupFlags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDAACAF8B687F2353, name, cleanupFlags)
```


---

## FORCE_CLEANUP_FOR_THREAD_WITH_THIS_ID

| Property | Value |
|----------|-------|
| Native Name | `FORCE_CLEANUP_FOR_THREAD_WITH_THIS_ID` |
| Hash | `0xF4C9512A2F0A3031` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `id` (int), `cleanupFlags` (int) |

### Parameters

- **`id`** (`int`)
- **`cleanupFlags`** (`int`)

### Usage

**Lua (Direct):**
```lua
ForceCleanupForThreadWithThisId(id, cleanupFlags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF4C9512A2F0A3031, id, cleanupFlags)
```


---

## GET_CAUSE_OF_MOST_RECENT_FORCE_CLEANUP

| Property | Value |
|----------|-------|
| Native Name | `GET_CAUSE_OF_MOST_RECENT_FORCE_CLEANUP` |
| Hash | `0x84E8E29EBD4A46D2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetCauseOfMostRecentForceCleanup()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x84E8E29EBD4A46D2, )
```


---

## GET_DISCOVERABLE_NAME_HASH_AND_TYPE_FOR_ENTITY

**Description:** Returns name hash (name) and outHash includes the type.

| Property | Value |
|----------|-------|
| Native Name | `GET_DISCOVERABLE_NAME_HASH_AND_TYPE_FOR_ENTITY` |
| Hash | `0x0139637A3BFF8B6D` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `entity` (Entity), `type` (Hash*) |

### Parameters

- **`entity`** (`Entity`)
- **`type`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = GetDiscoverableNameHashAndTypeForEntity(entity, type)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0139637A3BFF8B6D, entity, type)
```


---

## GET_ENTITY_PLAYER_IS_FREE_AIMING_AT

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_PLAYER_IS_FREE_AIMING_AT` |
| Hash | `0xA6817C110B830EAD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `entity` (Entity*) |

### Parameters

- **`player`** (`Player`)
- **`entity`** (`Entity*`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityPlayerIsFreeAimingAt(player, entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA6817C110B830EAD, player, entity)
```


---

## GET_HAS_PLAYER_DISCOVERED_CHARACTER_NAME_MP

| Property | Value |
|----------|-------|
| Native Name | `GET_HAS_PLAYER_DISCOVERED_CHARACTER_NAME_MP` |
| Hash | `0x354F689C4FFAAB37` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `discoveryHash` (Hash) |

### Parameters

- **`discoveryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetHasPlayerDiscoveredCharacterNameMp(discoveryHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x354F689C4FFAAB37, discoveryHash)
```


---

## GET_IS_PLAYER_UI_PROMPT_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `GET_IS_PLAYER_UI_PROMPT_ACTIVE` |
| Hash | `0x51BEA356B1C60225` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (int) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsPlayerUiPromptActive(player, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x51BEA356B1C60225, player, p1)
```


---

## GET_MAX_WANTED_LEVEL

**Description:** Gets the maximum wanted level the player can get.
Ranges from 0 to 5.

| Property | Value |
|----------|-------|
| Native Name | `GET_MAX_WANTED_LEVEL` |
| Hash | `0xD04CFAD1E2B7984A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetMaxWantedLevel()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD04CFAD1E2B7984A, )
```


---

## GET_MOUNT_OWNED_BY_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `GET_MOUNT_OWNED_BY_PLAYER` |
| Hash | `0xF49F14462F0AE27C` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetMountOwnedByPlayer(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF49F14462F0AE27C, player)
```


---

## GET_PLAYERS_LAST_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYERS_LAST_VEHICLE` |
| Hash | `0x2F96E7720B0B19EA` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetPlayersLastVehicle()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2F96E7720B0B19EA, )
```


---

## GET_PLAYER_CURRENT_STEALTH_NOISE

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_CURRENT_STEALTH_NOISE` |
| Hash | `0xD7ECC25E176ECBA5` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerCurrentStealthNoise(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD7ECC25E176ECBA5, player)
```


---

## GET_PLAYER_GROUP

**Description:** Returns the group ID the player is member of.

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_GROUP` |
| Hash | `0x9BAB31815159ABCF` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerGroup(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9BAB31815159ABCF, player)
```


---

## GET_PLAYER_INDEX

**Description:** Returns the same as PLAYER_ID and NETWORK_PLAYER_ID_TO_INT

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_INDEX` |
| Hash | `0x47E385B0D957C8D4` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerIndex()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x47E385B0D957C8D4, )
```


---

## GET_PLAYER_INTERACTION_TARGET_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_INTERACTION_TARGET_ENTITY` |
| Hash | `0x3EE1F7A8C32F24E1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `outEntity` (Entity*), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`outEntity`** (`Entity*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerInteractionTargetEntity(player, outEntity, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3EE1F7A8C32F24E1, player, outEntity, p2, p3)
```


---

## GET_PLAYER_INVINCIBLE

**Description:** Returns the player's invincibility status.

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_INVINCIBLE` |
| Hash | `0x0CBBCB2CCFA7DC4E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerInvincible(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0CBBCB2CCFA7DC4E, player)
```


---

## GET_PLAYER_NAME

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_NAME` |
| Hash | `0x7124FD9AC0E01BA0` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerName(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7124FD9AC0E01BA0, player)
```


---

## GET_PLAYER_PED

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_PED` |
| Hash | `0x275F255ED201B937` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerPed(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x275F255ED201B937, player)
```


---

## GET_PLAYER_PED_SCRIPT_INDEX

**Description:** Does the same like PLAYER::GET_PLAYER_PED

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_PED_SCRIPT_INDEX` |
| Hash | `0x5C880F9056D784C8` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerPedScriptIndex(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5C880F9056D784C8, player)
```


---

## GET_PLAYER_RECEIVED_BATTLE_EVENT_RECENTLY

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_RECEIVED_BATTLE_EVENT_RECENTLY` |
| Hash | `0xFB6EB8785F808551` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (int), `p2` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerReceivedBattleEventRecently(player, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFB6EB8785F808551, player, p1, p2)
```


---

## GET_PLAYER_TARGET_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_TARGET_ENTITY` |
| Hash | `0xAE663DDD99C8A670` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `entity` (Entity*) |

### Parameters

- **`player`** (`Player`)
- **`entity`** (`Entity*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerTargetEntity(player, entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAE663DDD99C8A670, player, entity)
```


---

## GET_PLAYER_TEAM

**Description:** Gets the player's team.
Returns -1 in singleplayer.

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_TEAM` |
| Hash | `0xB464EB6A40C7975B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerTeam(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB464EB6A40C7975B, player)
```


---

## GET_PLAYER_WANTED_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_WANTED_LEVEL` |
| Hash | `0xABC532F9098BFD9D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerWantedLevel(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xABC532F9098BFD9D, player)
```


---

## GET_TARGET_CHARACTER_NAME_FOR_LOCAL_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `GET_TARGET_CHARACTER_NAME_FOR_LOCAL_PLAYER` |
| Hash | `0x36E3D8B5A6552FE8` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetTargetCharacterNameForLocalPlayer(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x36E3D8B5A6552FE8, ped)
```


---

## GET_TARGET_CHARACTER_NAME_SCRIPT_OVERRIDE_HASH

| Property | Value |
|----------|-------|
| Native Name | `GET_TARGET_CHARACTER_NAME_SCRIPT_OVERRIDE_HASH` |
| Hash | `0x0335106F3ACABBED` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetTargetCharacterNameScriptOverrideHash(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0335106F3ACABBED, ped)
```


---

## GET_TARGET_CHARACTER_NAME_SCRIPT_OVERRIDE_RAW_STRING

| Property | Value |
|----------|-------|
| Native Name | `GET_TARGET_CHARACTER_NAME_SCRIPT_OVERRIDE_RAW_STRING` |
| Hash | `0x755E08680F21EF30` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetTargetCharacterNameScriptOverrideRawString(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x755E08680F21EF30, ped)
```


---

## GET_WANTED_LEVEL_RADIUS

| Property | Value |
|----------|-------|
| Native Name | `GET_WANTED_LEVEL_RADIUS` |
| Hash | `0x80B00EB26D9521C7` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetWantedLevelRadius(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x80B00EB26D9521C7, p0)
```


---

## GET_WANTED_LEVEL_THRESHOLD

| Property | Value |
|----------|-------|
| Native Name | `GET_WANTED_LEVEL_THRESHOLD` |
| Hash | `0x1B1A3B358F7D8F07` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `wantedLevel` (int) |

### Parameters

- **`wantedLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetWantedLevelThreshold(wantedLevel)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1B1A3B358F7D8F07, wantedLevel)
```


---

## HAS_FORCE_CLEANUP_OCCURRED

| Property | Value |
|----------|-------|
| Native Name | `HAS_FORCE_CLEANUP_OCCURRED` |
| Hash | `0xC11469DCA6FC3BB5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `cleanupFlags` (int) |

### Parameters

- **`cleanupFlags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasForceCleanupOccurred(cleanupFlags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC11469DCA6FC3BB5, cleanupFlags)
```


---

## HAS_PLAYER_BEEN_SPOTTED_IN_STOLEN_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `HAS_PLAYER_BEEN_SPOTTED_IN_STOLEN_VEHICLE` |
| Hash | `0xC932F57F31EA9152` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = HasPlayerBeenSpottedInStolenVehicle(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC932F57F31EA9152, player)
```


---

## HAS_PLAYER_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED

| Property | Value |
|----------|-------|
| Native Name | `HAS_PLAYER_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED` |
| Hash | `0x16C8D205DD5A2E90` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = HasPlayerDamagedAtLeastOneNonAnimalPed(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x16C8D205DD5A2E90, player)
```


---

## HAS_PLAYER_DAMAGED_AT_LEAST_ONE_PED

| Property | Value |
|----------|-------|
| Native Name | `HAS_PLAYER_DAMAGED_AT_LEAST_ONE_PED` |
| Hash | `0xDA4A4B9B96E20092` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = HasPlayerDamagedAtLeastOnePed(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDA4A4B9B96E20092, player)
```


---

## INT_TO_PARTICIPANTINDEX

**Description:** Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).

| Property | Value |
|----------|-------|
| Native Name | `INT_TO_PARTICIPANTINDEX` |
| Hash | `0x58FF971FC8F2702C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `value` (int) |

### Parameters

- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IntToParticipantindex(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58FF971FC8F2702C, value)
```


---

## INT_TO_PLAYERINDEX

**Description:** Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).

| Property | Value |
|----------|-------|
| Native Name | `INT_TO_PLAYERINDEX` |
| Hash | `0x748B3A65C2604C33` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `value` (int) |

### Parameters

- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IntToPlayerindex(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x748B3A65C2604C33, value)
```


---

## IS_PLAYER_BEING_ARRESTED

**Description:** Return true while player is being arrested / busted.

If atArresting is set to 1, this function will return 1 when player is being arrested (while player is putting his hand up, but still have control)

If atArresting is set to 0, this function will return 1 only when the busted screen is shown.

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_BEING_ARRESTED` |
| Hash | `0xC8183AE963C58374` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `atArresting` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`atArresting`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerBeingArrested(player, atArresting)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC8183AE963C58374, player, atArresting)
```


---

## IS_PLAYER_CLIMBING

**Description:** Returns TRUE if the player ('s ped) is climbing at the moment.

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_CLIMBING` |
| Hash | `0xB8A70C22FD48197A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerClimbing(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB8A70C22FD48197A, player)
```


---

## IS_PLAYER_CONTROL_ON

**Description:** Returns whether the player can control himself.

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_CONTROL_ON` |
| Hash | `0x7964097FCE4C244B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerControlOn(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7964097FCE4C244B, player)
```


---

## IS_PLAYER_DEAD

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_DEAD` |
| Hash | `0x2E9C3FCB6798F397` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerDead(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E9C3FCB6798F397, player)
```


---

## IS_PLAYER_FREE_AIMING

**Description:** Gets a value indicating whether the specified player is currently aiming freely.

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_FREE_AIMING` |
| Hash | `0x936F967D4BE1CE9D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerFreeAiming(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x936F967D4BE1CE9D, player)
```


---

## IS_PLAYER_FREE_AIMING_AT_ENTITY

**Description:** Gets a value indicating whether the specified player is currently aiming freely at the specified entity.

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_FREE_AIMING_AT_ENTITY` |
| Hash | `0x8C67C11C68713D25` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `entity` (Entity) |

### Parameters

- **`player`** (`Player`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerFreeAimingAtEntity(player, entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8C67C11C68713D25, player, entity)
```


---

## IS_PLAYER_PLAYING

**Description:** Checks whether the specified player has a Ped, the Ped is not dead, is not injured and is not arrested.

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_PLAYING` |
| Hash | `0xBFFB35986CAAE58C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerPlaying(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBFFB35986CAAE58C, player)
```


---

## IS_PLAYER_READY_FOR_CUTSCENE

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_READY_FOR_CUTSCENE` |
| Hash | `0xAA67BCB0097F2FA3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerReadyForCutscene(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAA67BCB0097F2FA3, player)
```


---

## IS_PLAYER_RIDING_TRAIN

**Description:** Returns true if the player is riding a train.

| Property | Value |
|----------|-------|
| Native Name | `IS_PLAYER_RIDING_TRAIN` |
| Hash | `0x2FB0ACADA6A238DD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerRidingTrain(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2FB0ACADA6A238DD, player)
```


---

*End of PLAYER natives part 1*
