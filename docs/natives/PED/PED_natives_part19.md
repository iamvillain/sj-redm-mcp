# PED Natives - Part 19 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _SET_CURRENT_DEFENSE_AGAINST_PLAYERS_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_CURRENT_DEFENSE_AGAINST_PLAYERS_MODIFIER` |
| Hash | `0x069EDDF1FD4DEB0A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `horse` (Ped), `modifier` (float) |

### Parameters

- **`horse`** (`Ped`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCurrentDefenseAgainstPlayersModifier(horse, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x069EDDF1FD4DEB0A, horse, modifier)
```


---

## _SET_DEFENSE_MODIFIER_FOR_PED

| Property | Value |
|----------|-------|
| Native Name | `_SET_DEFENSE_MODIFIER_FOR_PED` |
| Hash | `0x9B6808EC46BE849B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `modifier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDefenseModifierForPed(ped, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9B6808EC46BE849B, ped, modifier)
```


---

## _SET_FORMATION_AUTO_ASSIGN_POSITION

| Property | Value |
|----------|-------|
| Native Name | `_SET_FORMATION_AUTO_ASSIGN_POSITION` |
| Hash | `0x478F6B9920446CE2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `toggle` (BOOL) |

### Parameters

- **`groupId`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetFormationAutoAssignPosition(groupId, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x478F6B9920446CE2, groupId, toggle)
```


---

## _SET_HEALTH_RECHARGE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_HEALTH_RECHARGE_MULTIPLIER` |
| Hash | `0xDE1B1907A83A1550` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `multiplier` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`multiplier`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetHealthRechargeMultiplier(ped, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDE1B1907A83A1550, ped, multiplier)
```


---

## _SET_INTERACTION_LOCKON_FLAG

| Property | Value |
|----------|-------|
| Native Name | `_SET_INTERACTION_LOCKON_FLAG` |
| Hash | `0xFECA2081F61ED2CD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `player` (Player), `flag` (int), `enable` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`player`** (`Player`)
- **`flag`** (`int`)
- **`enable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetInteractionLockonFlag(ped, player, flag, enable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFECA2081F61ED2CD, ped, player, flag, enable)
```


---

## _SET_META_PED_TAG

**Description:** Use to apply metaped player components
Replaces asset, alternatively you can remove assets using REMOVE_TAG_FROM_META_PED

| Property | Value |
|----------|-------|
| Native Name | `_SET_META_PED_TAG` |
| Hash | `0xBC6DF00D7A4A6819` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `drawable` (Hash), `albedo` (Hash), `normal` (Hash), `material` (Hash), `palette` (Hash), `tint0` (int), `tint1` (int), `tint2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`drawable`** (`Hash`)
- **`albedo`** (`Hash`)
- **`normal`** (`Hash`)
- **`material`** (`Hash`)
- **`palette`** (`Hash`)
- **`tint0`** (`int`)
- **`tint1`** (`int`)
- **`tint2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetMetaPedTag(ped, drawable, albedo, normal, material, palette, tint0, tint1, tint2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC6DF00D7A4A6819, ped, drawable, albedo, normal, material, palette, tint0, tint1, tint2)
```


---

## _SET_META_PED_WEARINESS

**Description:** Sets ped eye redness, weariness: 0.f to 1.f

| Property | Value |
|----------|-------|
| Native Name | `_SET_META_PED_WEARINESS` |
| Hash | `0x314C5465195F3B30` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weariness` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`weariness`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetMetaPedWeariness(ped, weariness)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x314C5465195F3B30, ped, weariness)
```


---

## _SET_MIN_PED_HEALTH_THRESHOLD

| Property | Value |
|----------|-------|
| Native Name | `_SET_MIN_PED_HEALTH_THRESHOLD` |
| Hash | `0x7883AA809DF43D98` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `ped` (Ped), `healthAmount` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`healthAmount`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetMinPedHealthThreshold(ped, healthAmount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7883AA809DF43D98, ped, healthAmount)
```


---

## _SET_MOUNT_BONDING_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `_SET_MOUNT_BONDING_LEVEL` |
| Hash | `0xA69899995997A63B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `bondingLevel` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`bondingLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetMountBondingLevel(ped, bondingLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA69899995997A63B, ped, bondingLevel)
```


---

## _SET_MOUNT_SECURITY_ENABLED

**Description:** Note: this native was added in build 1232.40

| Property | Value |
|----------|-------|
| Native Name | `_SET_MOUNT_SECURITY_ENABLED` |
| Hash | `0x11E6B9629C46D6EC` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetMountSecurityEnabled(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x11E6B9629C46D6EC, ped, toggle)
```


---

## _SET_PED_ACTION_DISABLE_FLAG

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_ACTION_DISABLE_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_ACTION_DISABLE_FLAG` |
| Hash | `0xB8DE69D9473B7593` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `actionDisableFlag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`actionDisableFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedActionDisableFlag(ped, actionDisableFlag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB8DE69D9473B7593, ped, actionDisableFlag)
```


---

## _SET_PED_ACTIVATE_WOUND_EFFECT

**Description:** bloodFountainPressure: visible effect from 0.0 till 20.0
yaw: visible effect from -3.0 till 3.0
bloodFountainDirection: 1.0 left side, -1.0 right side
bloodFountainPulse: from 0.1 (low) till 1.0 (fast)
make blood fountain from your stomach: _SET_PED_ACTIVATE_WOUND_EFFECT(ped, unk, 2, 14411, 0.0, 0.1, 0.0, 0.0, 3.0, -1.0, 1.0)

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_ACTIVATE_WOUND_EFFECT` |
| Hash | `0xFFD54D9FE71B966A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `boneId` (int), `moveWoundLeftRight` (float), `bloodFountainPressure` (float), `yaw` (float), `bloodFountainDirection` (float), `bloodFountainPulse` (float), `p8` (float), `p9` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`boneId`** (`int`)
- **`moveWoundLeftRight`** (`float`)
- **`bloodFountainPressure`** (`float`)
- **`yaw`** (`float`)
- **`bloodFountainDirection`** (`float`)
- **`bloodFountainPulse`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedActivateWoundEffect(ped, p1, boneId, moveWoundLeftRight, bloodFountainPressure, yaw, bloodFountainDirection, bloodFountainPulse, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFFD54D9FE71B966A, ped, p1, boneId, moveWoundLeftRight, bloodFountainPressure, yaw, bloodFountainDirection, bloodFountainPulse, p8, p9)
```


---

## _SET_PED_ACTIVE_PLAYER_TYPE

**Description:** Params: hash - ARTHUR or JOHN
_SET_PED_(A-D)*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_ACTIVE_PLAYER_TYPE` |
| Hash | `0xB285AD0EC870B2DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `playerType` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`playerType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedActivePlayerType(ped, playerType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB285AD0EC870B2DF, ped, playerType)
```


---

## _SET_PED_ANIMAL_DETECTION_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_ANIMAL_DETECTION_MODIFIER` |
| Hash | `0x43CA928E892CFDB8` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `ped` (Ped), `modifier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedAnimalDetectionModifier(ped, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x43CA928E892CFDB8, ped, modifier)
```


---

## _SET_PED_BEAT_MULTIPLIER

**Description:** NET_FETCH_CLIENT_UPDATE_PED_FIGHT_PROFICIENCY: Changing parry multiplier for ped

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_BEAT_MULTIPLIER` |
| Hash | `0x6DBF2D78709AD70B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedBeatMultiplier(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6DBF2D78709AD70B, ped, p1)
```


---

## _SET_PED_BLACKBOARD_BOOL

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_BLACKBOARD_BOOL` |
| Hash | `0xCB9401F918CB0F75` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (char*), `value` (BOOL), `removeTimer` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`char*`)
- **`value`** (`BOOL`)
- **`removeTimer`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedBlackboardBool(ped, variableName, value, removeTimer)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCB9401F918CB0F75, ped, variableName, value, removeTimer)
```


---

## _SET_PED_BLACKBOARD_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_BLACKBOARD_FLOAT` |
| Hash | `0x437C08DB4FEBE2BD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (char*), `value` (float), `removeTimer` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`char*`)
- **`value`** (`float`)
- **`removeTimer`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedBlackboardFloat(ped, variableName, value, removeTimer)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x437C08DB4FEBE2BD, ped, variableName, value, removeTimer)
```


---

## _SET_PED_BLACKBOARD_HASH

**Description:** p1:
BodyPartChained
OverloadMostInjuredBodyPart

p2:
LeftLeg
Legs
RightArm

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_BLACKBOARD_HASH` |
| Hash | `0xA762C9D6CF165E0D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (char*), `value` (char*), `removeTimer` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`char*`)
- **`value`** (`char*`)
- **`removeTimer`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedBlackboardHash(ped, variableName, value, removeTimer)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA762C9D6CF165E0D, ped, variableName, value, removeTimer)
```


---

## _SET_PED_BLACKBOARD_INT

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/AI/BLACKBOARDS
Blackboard natives allow you to apply and check certain data to/for peds.
Blackboard bools, floats and strings are subdivided into 6 sections: "all", "animation", "any", "code", "global" and "script"
Most changes are only visible for "script" blackboards, some "script" blackboards change ped motions
"removeTimer" is self-removal timer, can be "-1" so your data will not be removed by the game (forever); 100 = 1 second

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_BLACKBOARD_INT` |
| Hash | `0x5F53010C4C3F6BAF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (char*), `value` (int), `removeTimer` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`char*`)
- **`value`** (`int`)
- **`removeTimer`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedBlackboardInt(ped, variableName, value, removeTimer)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5F53010C4C3F6BAF, ped, variableName, value, removeTimer)
```


---

## _SET_PED_BLEEDOUT_PROFILE

**Description:** Bleedout profiles:
Animal_FastBleedout
Animal_Generic
Human_FastBleedout
Human_Generic
Human_Mission

For more information, see common/data/ai/peddamageinfo.meta

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_BLEEDOUT_PROFILE` |
| Hash | `0x66C047719B0E80E1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `bleedoutProfile` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`bleedoutProfile`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedBleedoutProfile(ped, bleedoutProfile)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66C047719B0E80E1, ped, bleedoutProfile)
```


---

## _SET_PED_BRAWLING_STYLE

**Description:** brawlingStyle:
enum eBrawlingStyle : Hash
{
	BS_AI = 0x802C604D,
	BS_AI_BARBRAWL = 0x4FF5F0C7,
	BS_AI_DEFENSIVE = 0xD888F2FD,
	BS_AI_MOONSHINE_BARBRAWL = 0xA01B433A,
	BS_ALLIGATOR = 0x7A5548ED,
	BS_ALLIGATOR_LARGE = 0x368EC7CB,
	BS_ALLY = 0x69C76C14,
	BS_ANIMAL = 0xD777C754,
	BS_BADGER = 0x7E7C3F53,
	BS_BEAR = 0x0BC66E35,
	BS_BEAVER = 0x4E313783,
	BS_BOAR = 0x176A5831,
	BS_BOUNTY_HUNTER = 0x3900654C,
	BS_BRUISER = 0x4514DB61,
	BS_BULL = 0x4E50C5D2,
	BS_COUGAR = 0x9DAA7CCB,
	BS_COW = 0xB0E91295,
	BS_COYOTE = 0xA448EB69,
	BS_DEER = 0xA781E6B3,
	BS_DOG = 0x5A4155C4,
	BS_ELK = 0x408697F0,
	BS_FEMALE = 0x6A3BB2C2,
	BS_FEMALE_STRONG = 0x4DAFDD84,
	BS_GANGUP = 0xD0CECFF2,
	BS_GOAT = 0x078E649F,
	BS_HORSE = 0xF6B775F3,
	BS_MICAH_FINALE = 0x1F0BB27A,
	BS_MOOSE = 0x968917AB,
	BS_MUSKRAT = 0x1EDC33AC,
	BS_NO_MELEE = 0x25B5F931,
	BS_PIG = 0x22EAD110,
	BS_PLAYER = 0x78BAEF07,
	BS_PLAYER_FINALE = 0xF9E77D2D,
	BS_PLAYER_MOONSHINER = 0x687BF19F,
	BS_PLAYER_WINTER1 = 0x3C6A802F,
	BS_QUICK = 0xC4CABB1B,
	BS_RACCOON = 0x505F8917,
	BS_SHEEP = 0x6827CCCF,
	BS_SNAKE = 0x82BEBC4B,
	BS_TIMID = 0x431AEF77,
	BS_WOLF = 0xA8F023D4
};

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_BRAWLING_STYLE` |
| Hash | `0x8BA83CC4288CD56D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `brawlingStyle` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`brawlingStyle`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedBrawlingStyle(ped, brawlingStyle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8BA83CC4288CD56D, ped, brawlingStyle)
```


---

## _SET_PED_CAN_BE_LASSOED

**Description:** SET_PED_CAN_*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_CAN_BE_LASSOED` |
| Hash | `0xFD6943B6DF77E449` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanBeLassoed(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFD6943B6DF77E449, ped, toggle)
```


---

## SET_PED_CAN_BODY_RECOIL_IK

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_BODY_RECOIL_IK` |
| Hash | `0xEE9DF765990E8D1D` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `PedIndex` (Ped), `bEnableIK` (BOOL) |

### Parameters

- **`PedIndex`** (`Ped`)
- **`bEnableIK`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanBodyRecoilIk(PedIndex, bEnableIK)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEE9DF765990E8D1D, PedIndex, bEnableIK)
```


---

## _SET_PED_COMBAT_ATTRIBUTE_HASH

**Description:** Hashes: GUARD, COMBAT_ANIMAL, LAW, LAW_SHERIFF
_SET_PED_COMBAT_A* - _SET_PED_COMBAT_M*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_COMBAT_ATTRIBUTE_HASH` |
| Hash | `0xBD75500141E4725C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedCombatAttributeHash(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBD75500141E4725C, ped, p1)
```


---

## _SET_PED_COMBAT_BEHAVIOUR

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_COMBAT_BEHAVIOUR` |
| Hash | `0x9238A3D970BBB0A9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `behaviour` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`behaviour`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedCombatBehaviour(ped, behaviour)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9238A3D970BBB0A9, ped, behaviour)
```


---

## _SET_PED_COMBAT_STYLE

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_STYLES
Params: p2 is usually 1, sometimes 0 or 2
duration in seconds, -1.0 = forever

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_COMBAT_STYLE` |
| Hash | `0x8ACC0506743A8A5C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `combatStyleHash` (Hash), `p2` (int), `duration` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`combatStyleHash`** (`Hash`)
- **`p2`** (`int`)
- **`duration`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedCombatStyle(ped, combatStyleHash, p2, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8ACC0506743A8A5C, ped, combatStyleHash, p2, duration)
```


---

## _SET_PED_COMBAT_STYLE_MOD

**Description:** duration in seconds, -1.0 = forever

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_COMBAT_STYLE_MOD` |
| Hash | `0x8B1E8E35A6E814EA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `combatStyleModHash` (Hash), `duration` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`combatStyleModHash`** (`Hash`)
- **`duration`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedCombatStyleMod(ped, combatStyleModHash, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8B1E8E35A6E814EA, ped, combatStyleModHash, duration)
```


---

## _SET_PED_CROUCH_MOVEMENT

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_CROUCH_MOVEMENT` |
| Hash | `0x7DE9692C6F64CFE8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `state` (BOOL), `p2` (int), `immediately` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`state`** (`BOOL`)
- **`p2`** (`int`)
- **`immediately`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCrouchMovement(ped, state, p2, immediately)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7DE9692C6F64CFE8, ped, state, p2, immediately)
```


---

## _SET_PED_CULL_RANGE

**Description:** The higher the multiplier the less the engine renders culls (https://docs.unity3d.com/Manual/OcclusionCulling.html)

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_CULL_RANGE` |
| Hash | `0x8AC1D721B2097B6E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedCullRange(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8AC1D721B2097B6E, ped, p1, p2)
```


---

## _SET_PED_DAMAGED

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_DAMAGED` |
| Hash | `0xDACE03C65C6666DB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `damaged` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`damaged`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedDamaged(ped, damaged)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDACE03C65C6666DB, ped, damaged)
```


---

## _SET_PED_DAMAGE_CLEANLINESS

**Description:** damageCleanliness: see _GET_PED_DAMAGE_CLEANLINESS

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_DAMAGE_CLEANLINESS` |
| Hash | `0x7528720101A807A5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `damageCleanliness` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`damageCleanliness`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedDamageCleanliness(ped, damageCleanliness)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7528720101A807A5, ped, damageCleanliness)
```


---

## _SET_PED_DEFENSIVE_AREA_TO_ANGLED_AREA

**Description:** _SET_PED_(A?)*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_DEFENSIVE_AREA_TO_ANGLED_AREA` |
| Hash | `0xEB2BFE5D009F0331` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `ped` (Ped), `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `p7` (Any), `p8` (BOOL), `p9` (BOOL), `entity` (Entity), `p11` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`p7`** (`Any`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)
- **`entity`** (`Entity`)
- **`p11`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedDefensiveAreaToAngledArea(ped, x1, y1, z1, x2, y2, z2, p7, p8, p9, entity, p11)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEB2BFE5D009F0331, ped, x1, y1, z1, x2, y2, z2, p7, p8, p9, entity, p11)
```


---

## _SET_PED_DEFENSIVE_SPHERE_ATTACHED_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_DEFENSIVE_SPHERE_ATTACHED_TO_ENTITY` |
| Hash | `0x1854217C640B39EC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity), `x` (float), `y` (float), `z` (float), `radius` (float), `p6` (int), `p7` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p6`** (`int`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedDefensiveSphereAttachedToEntity(ped, entity, x, y, z, radius, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1854217C640B39EC, ped, entity, x, y, z, radius, p6, p7)
```


---

## _SET_PED_DESIRED_LOCO_FOR_MODEL

**Description:** Seems to set the ped's loco type.
Values used in the scripts:
algie
angry_female
arthur_healthy
cowboy
cowboy_f
default
default_female
free_slave_01
free_slave_02
gold_panner
guard_lantern
injured_general
john_marston
lilly_millet
lone_prisoner
lost_man
mp_ova_hunter
mp_ova_hunter_female
murfree
old_female
primate
rally
waiter
war_veteran

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_DESIRED_LOCO_FOR_MODEL` |
| Hash | `0x923583741DC87BCE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `locomotionArchetype` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`locomotionArchetype`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetPedDesiredLocoForModel(ped, locomotionArchetype)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x923583741DC87BCE, ped, locomotionArchetype)
```


---

## _SET_PED_DESIRED_LOCO_MOTION_TYPE

**Description:** Sets peds motion type

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_DESIRED_LOCO_MOTION_TYPE` |
| Hash | `0x89F5E7ADECCCB49C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `locoMotionType` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`locoMotionType`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPedDesiredLocoMotionType(ped, locoMotionType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x89F5E7ADECCCB49C, ped, locoMotionType)
```


---

## _SET_PED_DIRT_CLEANED

**Description:** Params: ped, 0f, -1, true, true in R* MP Scripts
_SET_PED_DE* - _SET_PED_F*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_DIRT_CLEANED` |
| Hash | `0xE3144B932DFDFF65` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (int), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`int`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedDirtCleaned(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE3144B932DFDFF65, ped, p1, p2, p3, p4)
```


---

## _SET_PED_DISABLE_KICK_MOVE

**Description:** Disables being able to kick move ped.

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_DISABLE_KICK_MOVE` |
| Hash | `0xADD31A5C7A5FAA73` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `disable` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`disable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedDisableKickMove(ped, disable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xADD31A5C7A5FAA73, ped, disable)
```


---

## _SET_PED_DRUNKNESS

**Description:** SOBER = 0.0f, SLIGHTLY_DRUNK = 0.25f, MODERATELY_DRUNK = 0.5f, VERY_DRUNK = 1.0f

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_DRUNKNESS` |
| Hash | `0x406CCF555B04FAD3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `enabled` (BOOL), `drunknessLevel` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`enabled`** (`BOOL`)
- **`drunknessLevel`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedDrunkness(ped, enabled, drunknessLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x406CCF555B04FAD3, ped, enabled, drunknessLevel)
```


---

## _SET_PED_FIRING_PATTERN_2

**Description:** Used in R* MP Script fm_mission_controller and various R* SP Scripts for ambush*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_FIRING_PATTERN_2` |
| Hash | `0x20E54854DEF6A54A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `patternHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`patternHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedFiringPattern2(ped, patternHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x20E54854DEF6A54A, ped, patternHash)
```


---

## _SET_PED_FIRING_PATTERN_3

**Description:** Only used in R* MP Script fm_mission_controller

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_FIRING_PATTERN_3` |
| Hash | `0x244E8C282188E40F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `patternHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`patternHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedFiringPattern3(ped, patternHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x244E8C282188E40F, ped, patternHash)
```


---

## _SET_PED_FORMATION_POSITION

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_FORMATION_POSITION` |
| Hash | `0x0E9E95FDEDCC9D35` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `position` (int), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`position`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedFormationPosition(ped, position, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0E9E95FDEDCC9D35, ped, position, toggle)
```


---

## _SET_PED_GETUP_ANIMATION

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_GETUP_ANIMATION` |
| Hash | `0x3AE3552E7C207CC5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `animName` (char*), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`animName`** (`char*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedGetupAnimation(ped, animName, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3AE3552E7C207CC5, ped, animName, p2)
```


---

## _SET_PED_GRAPPLE_ACTION

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_GRAPPLE_ACTION` |
| Hash | `0x8301D87B1B89E219` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `grappleAction` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`grappleAction`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedGrappleAction(ped, grappleAction)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8301D87B1B89E219, ped, grappleAction)
```


---

## _SET_PED_GRAPPLE_ANIMATION

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_GRAPPLE_ANIMATION` |
| Hash | `0x56E9C26CD29D1ED6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `grappleAnim` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`grappleAnim`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedGrappleAnimation(ped, grappleAnim)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x56E9C26CD29D1ED6, ped, grappleAnim)
```


---

## _SET_PED_GRAPPLE_EFFECT_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_GRAPPLE_EFFECT_MULTIPLIER` |
| Hash | `0x99A6E246C315BF60` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `multiplier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedGrappleEffectMultiplier(ped, multiplier)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x99A6E246C315BF60, ped, multiplier)
```


---

## _SET_PED_GRAPPLE_FLAG

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_GRAPPLE_FLAG` |
| Hash | `0x789DABD18E9024DB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flag` (int), `enable` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`flag`** (`int`)
- **`enable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedGrappleFlag(ped, flag, enable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x789DABD18E9024DB, ped, flag, enable)
```


---

## _SET_PED_GRAPPLE_SEQUENCE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_GRAPPLE_SEQUENCE` |
| Hash | `0x604190F0CF0DF158` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `grappleSequence` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`grappleSequence`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPedGrappleSequence(ped, grappleSequence)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x604190F0CF0DF158, ped, grappleSequence)
```


---

## _SET_PED_GRAPPLE_STYLE

**Description:** Hashes: GS_DRAGGING, GS_FACE_TO_BACK, GS_FACE_TO_FACE, GS_FACE_TO_FACE_WALL, GS_MOUNTED

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_GRAPPLE_STYLE` |
| Hash | `0x630E7B01F091A197` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `style` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`style`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedGrappleStyle(ped, style)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x630E7B01F091A197, ped, style)
```


---

## _SET_PED_HEADSHOT_DAMAGE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_HEADSHOT_DAMAGE_MULTIPLIER` |
| Hash | `0x2BA918C823B8BA56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `multiplier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedHeadshotDamageMultiplier(ped, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2BA918C823B8BA56, ped, multiplier)
```


---

## _SET_PED_HEALTH_CONFIG

**Description:** configHash: see pedhealth.meta

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_HEALTH_CONFIG` |
| Hash | `0xF6B82FCE03B43A37` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `configHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`configHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedHealthConfig(ped, configHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF6B82FCE03B43A37, ped, configHash)
```


---

*End of PED natives part 19*
