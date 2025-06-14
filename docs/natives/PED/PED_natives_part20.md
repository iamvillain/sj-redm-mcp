# PED Natives - Part 20 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _SET_PED_IMMERSION_FLAG

**Description:** Only used in R* Script beat_sharp_shooter
Blocks ped from swimming underwater

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_IMMERSION_FLAG` |
| Hash | `0x7FB0088E8769CDDB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedImmersionFlag(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7FB0088E8769CDDB, ped, toggle)
```


---

## _SET_PED_INCAPACITATION_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_INCAPACITATION_FLAGS` |
| Hash | `0xD67B6F3BCF81BA47` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedIncapacitationFlags(ped, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD67B6F3BCF81BA47, ped, flags)
```


---

## _SET_PED_INCAPACITATION_MODIFIERS

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_INCAPACITATION_MODIFIERS` |
| Hash | `0x39ED303390DDEAC7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `canBeIncapacitated` (BOOL), `threshold` (int), `bleedoutTime` (int), `p4` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`canBeIncapacitated`** (`BOOL`)
- **`threshold`** (`int`)
- **`bleedoutTime`** (`int`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedIncapacitationModifiers(ped, canBeIncapacitated, threshold, bleedoutTime, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x39ED303390DDEAC7, ped, canBeIncapacitated, threshold, bleedoutTime, p4)
```


---

## _SET_PED_INCAPACITATION_TOTAL_BLEED_OUT_DURATION

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_INCAPACITATION_TOTAL_BLEED_OUT_DURATION` |
| Hash | `0x2890418B39BC8FFF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `duration` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`duration`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedIncapacitationTotalBleedOutDuration(ped, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2890418B39BC8FFF, ped, duration)
```


---

## _SET_PED_INTERACTION_NEGATIVE_RESPONSE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_INTERACTION_NEGATIVE_RESPONSE` |
| Hash | `0xA3C53CDE922BC78B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `speech` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`speech`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPedInteractionNegativeResponse(ped, speech)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA3C53CDE922BC78B, ped, speech)
```


---

## _SET_PED_INTERACTION_PERSONALITY

**Description:** personality (script_mp_rel): NONE, AGGRESSIVE, TIMID (non-aggressive), CRIPPS, SCRIPTEDINTIMIDATION, MAGGIE, MARCEL, SCRIPTEDSALOON
personality (script_rel): AVOID, SCRIPTEDOUTLAW, TIMIDGUARDDOG, SCRIPTEDTIMIDROB, AGGRESSIVECAMPER, LAZYDOG, KIERANTIEDUP, SCRIPTEDGALA

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_INTERACTION_PERSONALITY` |
| Hash | `0x24C82EF607105FAA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `personality` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`personality`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedInteractionPersonality(ped, personality)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x24C82EF607105FAA, ped, personality)
```


---

## _SET_PED_INTERACTION_POSITIVE_RESPONSE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_INTERACTION_POSITIVE_RESPONSE` |
| Hash | `0x20C5459379D75C1C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `speech` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`speech`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPedInteractionPositiveResponse(ped, speech)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x20C5459379D75C1C, ped, speech)
```


---

## _SET_PED_KNOCKED_BY_ONE_HIT

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_KNOCKED_BY_ONE_HIT` |
| Hash | `0x5BCF0B79D4F5DBA3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedKnockedByOneHit(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5BCF0B79D4F5DBA3, ped, p1)
```


---

## _SET_PED_LADDER_MOVEMENT_SPEED_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_LADDER_MOVEMENT_SPEED_MODIFIER` |
| Hash | `0x05CE6AF4DF071D23` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedLadderMovementSpeedModifier(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x05CE6AF4DF071D23, ped, p1)
```


---

## _SET_PED_LIGHTS

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_LIGHTS` |
| Hash | `0x13A210949FCBD92B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedLights(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x13A210949FCBD92B, ped, toggle)
```


---

## _SET_PED_MOTIVATION

**Description:** enum eMotivationState
{
	TOILET_STATE,
	FEAR_STATE,
	ANGRY_STATE,
	AGITATION_STATE,
	HUNGRY_STATE,
	TIRED_STATE,
	SAD_STATE,
	BRAVE_STATE,
	OFFER_ITEM_STATE,
	SUSPICION,
	DRUNK_STATE
};

If targetPed is set to 0 the ped motivationState affects everyone

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_MOTIVATION` |
| Hash | `0x06D26A96CA1BCA75` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `motivationState` (int), `threshold` (float), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`motivationState`** (`int`)
- **`threshold`** (`float`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetPedMotivation(ped, motivationState, threshold, targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06D26A96CA1BCA75, ped, motivationState, threshold, targetPed)
```


---

## _SET_PED_MOTIVATION_MODIFIER

**Description:** The higher the modifier, the slower the motivationState value will decrease

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_MOTIVATION_MODIFIER` |
| Hash | `0xA1EB5D029E0191D3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `motivationState` (int), `modifier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`motivationState`** (`int`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedMotivationModifier(ped, motivationState, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA1EB5D029E0191D3, ped, motivationState, modifier)
```


---

## _SET_PED_MOTIVATION_STATE_OVERRIDE

**Description:** motivationState: see _SET_PED_MOTIVATION

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_MOTIVATION_STATE_OVERRIDE` |
| Hash | `0x2EB75FB86C41F026` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `motivationState` (int), `enabled` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`motivationState`** (`int`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedMotivationStateOverride(ped, motivationState, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2EB75FB86C41F026, ped, motivationState, enabled)
```


---

## _SET_PED_PERSONALITY

**Description:** Hashes: STANDARD_PED_AGRO_GUARD, BOUNTY_HUNTER, PLAYER_HORSE, LAW_POLICE, GUARD_DOG, ATTACK_DOG
Personalities can also be found in common:/data/ai/interactionpersonalities

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_PERSONALITY` |
| Hash | `0xB8B6430EAD2D2437` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `personality` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`personality`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedPersonality(ped, personality)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB8B6430EAD2D2437, ped, personality)
```


---

## _SET_PED_PROMPT_NAME

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_PROMPT_NAME` |
| Hash | `0x4A48B6E03BABB4AC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `name` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPedPromptName(ped, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4A48B6E03BABB4AC, ped, name)
```


---

## _SET_PED_PROMPT_NAME_2

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_PROMPT_NAME_2` |
| Hash | `0x19B14E04B009E28B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `name` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPedPromptName2(ped, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x19B14E04B009E28B, ped, name)
```


---

## _SET_PED_PROMPT_NAME_FROM_GXT_ENTRY

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_PROMPT_NAME_FROM_GXT_ENTRY` |
| Hash | `0xFCA8FB9E15FA80D3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `gxtEntryHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`gxtEntryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedPromptNameFromGxtEntry(ped, gxtEntryHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFCA8FB9E15FA80D3, ped, gxtEntryHash)
```


---

## _SET_PED_PROMPT_NAME_FROM_GXT_ENTRY_2

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_PROMPT_NAME_FROM_GXT_ENTRY_2` |
| Hash | `0xC2745D9261664901` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `gxtEntryHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`gxtEntryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedPromptNameFromGxtEntry2(ped, gxtEntryHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC2745D9261664901, ped, gxtEntryHash)
```


---

## _SET_PED_QUALITY

**Description:** quality: see _GET_PED_QUALITY

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_QUALITY` |
| Hash | `0xCE6B874286D640BB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `quality` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`quality`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedQuality(ped, quality)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE6B874286D640BB, ped, quality)
```


---

## _SET_PED_SCALE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_SCALE` |
| Hash | `0x25ACFC650B65C538` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `scale` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`scale`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedScale(ped, scale)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x25ACFC650B65C538, ped, scale)
```


---

## _SET_PED_SCENT

**Description:** 0.0 - 1.0
Modifies the "scent line" on the ped's body when using Eagle Eye.

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_SCENT` |
| Hash | `0x01B21B81865E2A1F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `scent` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`scent`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedScent(ped, scent)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x01B21B81865E2A1F, ped, scent)
```


---

## _SET_PED_TARGET_ACTION_DISABLE_FLAG

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_TARGET_ACTION_DISABLE_FLAG` |
| Hash | `0xC163DAC52AC975D3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `actionDisableFlag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`actionDisableFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedTargetActionDisableFlag(ped, actionDisableFlag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC163DAC52AC975D3, ped, actionDisableFlag)
```


---

## _SET_PED_TO_BE_REMOVED

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_TO_BE_REMOVED` |
| Hash | `0x36E4B61DC56DE77C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float), `p3` (int), `p4` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`int`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPedToBeRemoved(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x36E4B61DC56DE77C, ped, p1, p2, p3, p4)
```


---

## _SET_PED_TO_DISABLE_RAGDOLL

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_TO_DISABLE_RAGDOLL` |
| Hash | `0x221F4D9912B7FE86` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedToDisableRagdoll(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x221F4D9912B7FE86, ped, toggle)
```


---

## _SET_PED_TRAIL_EFFECT

**Description:** duration in seconds

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_TRAIL_EFFECT` |
| Hash | `0xA5950E16B8F31052` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `duration` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`duration`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedTrailEffect(ped, p1, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA5950E16B8F31052, ped, p1, duration)
```


---

## _SET_PED_USE_HORSE_MAP_COLLISION

**Description:** Doesn't actually return anything.

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_USE_HORSE_MAP_COLLISION` |
| Hash | `0xEB72453B6F5B45B0` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedUseHorseMapCollision(ped, toggle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEB72453B6F5B45B0, ped, toggle)
```


---

## _SET_PED_VOICE_VOLUME

**Description:** _SET_PED_S* - _SET_PED_T*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_VOICE_VOLUME` |
| Hash | `0xD05AD61F242C626B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `volume` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`volume`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedVoiceVolume(ped, volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD05AD61F242C626B, ped, volume)
```


---

## _SET_PED_WRITHING_DURATION

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_WRITHING_DURATION` |
| Hash | `0x4DB9D03AC4E1FA84` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `writhingDuration1` (float), `writhingDuration2` (float), `p3` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`writhingDuration1`** (`float`)
- **`writhingDuration2`** (`float`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedWrithingDuration(ped, writhingDuration1, writhingDuration2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4DB9D03AC4E1FA84, ped, writhingDuration1, writhingDuration2, p3)
```


---

## _SET_PELT_FOR_HORSE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PELT_FOR_HORSE` |
| Hash | `0xA73F50E8796150D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `horse` (Ped), `peltId` (int) |

### Parameters

- **`horse`** (`Ped`)
- **`peltId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPeltForHorse(horse, peltId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA73F50E8796150D5, horse, peltId)
```


---

## _SET_PLAYER_ANTAGONIZE_DISABLED_FOR_PED

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_ANTAGONIZE_DISABLED_FOR_PED` |
| Hash | `0x5708EDD71B50C008` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `player` (Player), `duration` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`player`** (`Player`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPlayerAntagonizeDisabledForPed(ped, player, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5708EDD71B50C008, ped, player, duration)
```


---

## _SET_PLAYER_CURRENT_ANIMAL_DAMAGE_MODIFIER

**Description:** Animal Skin Quality Modifier
Params: p2 = 2, p3 = 3 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_CURRENT_ANIMAL_DAMAGE_MODIFIER` |
| Hash | `0x9EFF3C91DF38304F` |
| Return Type | `Any` |
| Build | `1311` |
| Parameters | `player` (Player), `modifier` (float), `p2` (int), `p3` (int) |

### Parameters

- **`player`** (`Player`)
- **`modifier`** (`float`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = SetPlayerCurrentAnimalDamageModifier(player, modifier, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9EFF3C91DF38304F, player, modifier, p2, p3)
```


---

## _SET_PLAYER_GREET_DISABLED_FOR_PED

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_GREET_DISABLED_FOR_PED` |
| Hash | `0x19173C3F15367B54` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `player` (Player), `duration` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`player`** (`Player`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPlayerGreetDisabledForPed(ped, player, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x19173C3F15367B54, ped, player, duration)
```


---

## _SET_RANDOM_OUTFIT_VARIATION

| Property | Value |
|----------|-------|
| Native Name | `_SET_RANDOM_OUTFIT_VARIATION` |
| Hash | `0x283978A15512B2FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetRandomOutfitVariation(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x283978A15512B2FE, ped, p1)
```


---

## _SET_REMOVE_PED_NETWORKED

| Property | Value |
|----------|-------|
| Native Name | `_SET_REMOVE_PED_NETWORKED` |
| Hash | `0x39A2FC5AF55A52B1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetRemovePedNetworked(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x39A2FC5AF55A52B1, ped, p1)
```


---

## _SET_SCENARIO_ANIMAL_DENSITY_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_ANIMAL_DENSITY_MULTIPLIER_THIS_FRAME` |
| Hash | `0xDB48E99F8E064E56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetScenarioAnimalDensityMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDB48E99F8E064E56, multiplier)
```


---

## _SET_SCENARIO_HUMAN_DENSITY_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_HUMAN_DENSITY_MULTIPLIER_THIS_FRAME` |
| Hash | `0x28CB6391ACEDD9DB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetScenarioHumanDensityMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x28CB6391ACEDD9DB, multiplier)
```


---

## _SET_SCENARIO_PED_DENSITY_THIS_FRAME

**Description:** Sets the scenario ped density to the given config.

Valid configs:
- BLACKWATER
- DEFAULT
- NEWBORDEAUX
- RHODES
- STRAWBERRY
- TUMBLEWEED
- VALENTINE
- VANHORN

See common/data/ai/densityscoringconfigs.meta for more information.

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_PED_DENSITY_THIS_FRAME` |
| Hash | `0x95423627A9CA598E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `configHash` (Hash) |

### Parameters

- **`configHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetScenarioPedDensityThisFrame(configHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x95423627A9CA598E, configHash)
```


---

## _SET_SCENARIO_PED_RANGE_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_PED_RANGE_MULTIPLIER_THIS_FRAME` |
| Hash | `0xA77FA7BE9312F8C0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetScenarioPedRangeMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA77FA7BE9312F8C0, multiplier)
```


---

## _SET_STAMINA_DEPLETION_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_STAMINA_DEPLETION_MULTIPLIER` |
| Hash | `0xEF5A3D2285D8924B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `multiplier` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`multiplier`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetStaminaDepletionMultiplier(ped, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEF5A3D2285D8924B, ped, multiplier)
```


---

## _SET_STAMINA_RECHARGE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_STAMINA_RECHARGE_MULTIPLIER` |
| Hash | `0x345C9F993A8AB4A4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `multiplier` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`multiplier`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetStaminaRechargeMultiplier(ped, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x345C9F993A8AB4A4, ped, multiplier)
```


---

## _SET_TANK_ATTRIBUTE_SIZE

**Description:** Size will be permanent

| Property | Value |
|----------|-------|
| Native Name | `_SET_TANK_ATTRIBUTE_SIZE` |
| Hash | `0x7FF72DE061DF55E2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int), `size` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)
- **`size`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTankAttributeSize(ped, attributeIndex, size)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7FF72DE061DF55E2, ped, attributeIndex, size)
```


---

## _SET_TEXTURE_LAYER_ALPHA

| Property | Value |
|----------|-------|
| Native Name | `_SET_TEXTURE_LAYER_ALPHA` |
| Hash | `0x6C76BC24F8BB709A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int), `layerId` (int), `texAlpha` (float) |

### Parameters

- **`textureId`** (`int`)
- **`layerId`** (`int`)
- **`texAlpha`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTextureLayerAlpha(textureId, layerId, texAlpha)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C76BC24F8BB709A, textureId, layerId, texAlpha)
```


---

## _SET_TEXTURE_LAYER_MOD

| Property | Value |
|----------|-------|
| Native Name | `_SET_TEXTURE_LAYER_MOD` |
| Hash | `0xF2EA041F1146D75B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int), `layerId` (int), `modTextureHash` (Hash), `modAlpha` (float), `modChannel` (int) |

### Parameters

- **`textureId`** (`int`)
- **`layerId`** (`int`)
- **`modTextureHash`** (`Hash`)
- **`modAlpha`** (`float`)
- **`modChannel`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetTextureLayerMod(textureId, layerId, modTextureHash, modAlpha, modChannel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF2EA041F1146D75B, textureId, layerId, modTextureHash, modAlpha, modChannel)
```


---

## _SET_TEXTURE_LAYER_PALLETE

**Description:** paletteHash: https://raw.githubusercontent.com/femga/rdr3_discoveries/master/clothes/cloth_color_palletes.lua

| Property | Value |
|----------|-------|
| Native Name | `_SET_TEXTURE_LAYER_PALLETE` |
| Hash | `0x1ED8588524AC9BE1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int), `layerId` (int), `paletteHash` (Hash) |

### Parameters

- **`textureId`** (`int`)
- **`layerId`** (`int`)
- **`paletteHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetTextureLayerPallete(textureId, layerId, paletteHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1ED8588524AC9BE1, textureId, layerId, paletteHash)
```


---

## _SET_TEXTURE_LAYER_ROUGHNESS

| Property | Value |
|----------|-------|
| Native Name | `_SET_TEXTURE_LAYER_ROUGHNESS` |
| Hash | `0x057C4F092E2298BE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int), `layerId` (int), `texRough` (float) |

### Parameters

- **`textureId`** (`int`)
- **`layerId`** (`int`)
- **`texRough`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTextureLayerRoughness(textureId, layerId, texRough)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x057C4F092E2298BE, textureId, layerId, texRough)
```


---

## _SET_TEXTURE_LAYER_SHEET_GRID_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_SET_TEXTURE_LAYER_SHEET_GRID_INDEX` |
| Hash | `0x3329AAE2882FC8E4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int), `layerId` (int), `sheetGridIndex` (int) |

### Parameters

- **`textureId`** (`int`)
- **`layerId`** (`int`)
- **`sheetGridIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetTextureLayerSheetGridIndex(textureId, layerId, sheetGridIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3329AAE2882FC8E4, textureId, layerId, sheetGridIndex)
```


---

## _SET_TEXTURE_LAYER_TEXTURE_MAP

| Property | Value |
|----------|-------|
| Native Name | `_SET_TEXTURE_LAYER_TEXTURE_MAP` |
| Hash | `0x253A63B5BADBC398` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int), `layerId` (int), `albedoHash` (Hash), `normalHash` (Hash), `materialHash` (Hash) |

### Parameters

- **`textureId`** (`int`)
- **`layerId`** (`int`)
- **`albedoHash`** (`Hash`)
- **`normalHash`** (`Hash`)
- **`materialHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetTextureLayerTextureMap(textureId, layerId, albedoHash, normalHash, materialHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x253A63B5BADBC398, textureId, layerId, albedoHash, normalHash, materialHash)
```


---

## _SET_TEXTURE_LAYER_TINT

**Description:** Seem color is not RGB or HSV

| Property | Value |
|----------|-------|
| Native Name | `_SET_TEXTURE_LAYER_TINT` |
| Hash | `0x2DF59FFE6FFD6044` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int), `layerId` (int), `tint0` (int), `tint1` (int), `tint2` (int) |

### Parameters

- **`textureId`** (`int`)
- **`layerId`** (`int`)
- **`tint0`** (`int`)
- **`tint1`** (`int`)
- **`tint2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetTextureLayerTint(textureId, layerId, tint0, tint1, tint2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2DF59FFE6FFD6044, textureId, layerId, tint0, tint1, tint2)
```


---

## _SET_TEXTURE_OUTFIT_TINTS

**Description:** Used in script function METAPED_CLOTHING__XML__APPLY_OUTFIT_TINTS_TO_PED

| Property | Value |
|----------|-------|
| Native Name | `_SET_TEXTURE_OUTFIT_TINTS` |
| Hash | `0x4EFC1F8FF1AD94DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `componentCategory` (Hash), `palette` (Hash), `tint0` (int), `tint1` (int), `tint2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`componentCategory`** (`Hash`)
- **`palette`** (`Hash`)
- **`tint0`** (`int`)
- **`tint1`** (`int`)
- **`tint2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetTextureOutfitTints(ped, componentCategory, palette, tint0, tint1, tint2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4EFC1F8FF1AD94DE, ped, componentCategory, palette, tint0, tint1, tint2)
```


---

## _SET_TOTAL_PED_DAMAGE_FALLOFF_BONUS

**Description:** _SET_W(EAPON?)*

| Property | Value |
|----------|-------|
| Native Name | `_SET_TOTAL_PED_DAMAGE_FALLOFF_BONUS` |
| Hash | `0x932786CE3C76477C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `bonus` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`bonus`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTotalPedDamageFalloffBonus(ped, bonus)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x932786CE3C76477C, ped, bonus)
```


---

*End of PED natives part 20*
