# PED Natives - Part 6 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## SET_PED_CAN_BE_TARGETTED_BY_TEAM

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_BE_TARGETTED_BY_TEAM` |
| Hash | `0xBF1CA77833E58F2C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `team` (int), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`team`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanBeTargettedByTeam(ped, team, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBF1CA77833E58F2C, ped, team, toggle)
```


---

## SET_PED_CAN_HEAD_IK

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_HEAD_IK` |
| Hash | `0xC11C18092C5530DC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanHeadIk(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC11C18092C5530DC, ped, toggle)
```


---

## SET_PED_CAN_LEG_IK

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_LEG_IK` |
| Hash | `0x73518ECE2485412B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanLegIk(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x73518ECE2485412B, ped, toggle)
```


---

## SET_PED_CAN_PLAY_AMBIENT_ANIMS

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_PLAY_AMBIENT_ANIMS` |
| Hash | `0x6373D1349925A70E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanPlayAmbientAnims(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6373D1349925A70E, ped, toggle)
```


---

## SET_PED_CAN_PLAY_AMBIENT_BASE_ANIMS

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_PLAY_AMBIENT_BASE_ANIMS` |
| Hash | `0x0EB0585D15254740` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanPlayAmbientBaseAnims(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0EB0585D15254740, ped, toggle)
```


---

## SET_PED_CAN_PLAY_GESTURE_ANIMS

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_PLAY_GESTURE_ANIMS` |
| Hash | `0xBAF20C5432058024` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPedCanPlayGestureAnims(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBAF20C5432058024, ped, p1, p2)
```


---

## SET_PED_CAN_RAGDOLL

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_RAGDOLL` |
| Hash | `0xB128377056A54E2A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanRagdoll(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB128377056A54E2A, ped, toggle)
```


---

## SET_PED_CAN_RAGDOLL_FROM_PLAYER_IMPACT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_RAGDOLL_FROM_PLAYER_IMPACT` |
| Hash | `0xDF993EE5E90ABA25` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanRagdollFromPlayerImpact(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF993EE5E90ABA25, ped, toggle)
```


---

## SET_PED_CAN_TELEPORT_TO_GROUP_LEADER

**Description:** This only will teleport the ped to the group leader if the group leader teleports (sets coords).

Only works in singleplayer

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_TELEPORT_TO_GROUP_LEADER` |
| Hash | `0x2E2F4240B3F24647` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pedHandle` (Ped), `groupId` (int), `toggle` (BOOL) |

### Parameters

- **`pedHandle`** (`Ped`)
- **`groupId`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanTeleportToGroupLeader(pedHandle, groupId, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E2F4240B3F24647, pedHandle, groupId, toggle)
```


---

## SET_PED_CAN_TORSO_IK

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_TORSO_IK` |
| Hash | `0xF2B7106D37947CE0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanTorsoIk(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF2B7106D37947CE0, ped, toggle)
```


---

## SET_PED_CAN_TORSO_REACT_IK

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_TORSO_REACT_IK` |
| Hash | `0xF5846EDB26A98A24` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanTorsoReactIk(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF5846EDB26A98A24, ped, toggle)
```


---

## SET_PED_CAN_TORSO_VEHICLE_IK

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_TORSO_VEHICLE_IK` |
| Hash | `0x6647C5F6F5792496` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanTorsoVehicleIk(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6647C5F6F5792496, ped, toggle)
```


---

## SET_PED_CAN_USE_AUTO_CONVERSATION_LOOKAT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAN_USE_AUTO_CONVERSATION_LOOKAT` |
| Hash | `0xEC4686EC06434678` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCanUseAutoConversationLookat(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEC4686EC06434678, ped, toggle)
```


---

## SET_PED_CAPSULE

**Description:** Overrides the ped's collision capsule radius for the current tick.
Must be called every tick to be effective.

Setting this to 0.001 will allow warping through some objects.

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CAPSULE` |
| Hash | `0x364DF566EC833DE2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedCapsule(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x364DF566EC833DE2, ped, value)
```


---

## SET_PED_CLOTH_PIN_FRAMES

**Description:** Old name: SET_PED_CLOTH_PACKAGE_INDEX

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CLOTH_PIN_FRAMES` |
| Hash | `0x78C4E9961DB3EB5B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedClothPinFrames(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x78C4E9961DB3EB5B, ped, p1)
```


---

## SET_PED_COMBAT_ABILITY

**Description:** abilityLevel:
enum eCombatAbilityLevel
{
	CAL_POOR,
	CAL_AVERAGE,
	CAL_PROFESSIONAL
};

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_COMBAT_ABILITY` |
| Hash | `0xC7622C0D36B2FDA8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `abilityLevel` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`abilityLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedCombatAbility(ped, abilityLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC7622C0D36B2FDA8, ped, abilityLevel)
```


---

## SET_PED_COMBAT_ATTRIBUTES

**Description:** attributeIndex: https://alloc8or.re/rdr3/doc/enums/eCombatAttribute.txt
https://github.com/femga/rdr3_discoveries/tree/master/AI/COMBAT_ATTRIBUTES

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_COMBAT_ATTRIBUTES` |
| Hash | `0x9F7794730795E019` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int), `enabled` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCombatAttributes(ped, attributeIndex, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9F7794730795E019, ped, attributeIndex, enabled)
```


---

## SET_PED_COMBAT_MOVEMENT

**Description:** 0 - Stationary (Will just stand in place)
1 - Defensive (Will try to find cover and very likely to blind fire)
2 - Offensive (Will attempt to charge at enemy but take cover as well)
3 - Suicidal Offensive (Will try to flank enemy in a suicidal attack)

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_COMBAT_MOVEMENT` |
| Hash | `0x4D9CA1009AFBD057` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `combatMovement` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`combatMovement`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedCombatMovement(ped, combatMovement)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D9CA1009AFBD057, ped, combatMovement)
```


---

## SET_PED_COMBAT_RANGE

**Description:** range:
enum eCombatRange
{
	CR_NEAR,
	CR_MEDIUM,
	CR_FAR,
	CR_VERY_FAR
};

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_COMBAT_RANGE` |
| Hash | `0x3C606747B23E497B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `range` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`range`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedCombatRange(ped, range)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3C606747B23E497B, ped, range)
```


---

## SET_PED_CONFIG_FLAG

**Description:** flagId: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePedScriptConfigFlags
https://alloc8or.re/rdr3/doc/enums/ePedScriptConfigFlags.txt
https://github.com/femga/rdr3_discoveries/tree/master/AI/CPED_CONFIG_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CONFIG_FLAG` |
| Hash | `0x1913FE4CBF41C463` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flagId` (int), `value` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`flagId`** (`int`)
- **`value`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedConfigFlag(ped, flagId, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1913FE4CBF41C463, ped, flagId, value)
```


---

## SET_PED_DEFENSIVE_AREA_DIRECTION

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_DEFENSIVE_AREA_DIRECTION` |
| Hash | `0x413C6C763A4AFFAD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float), `p3` (float), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedDefensiveAreaDirection(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x413C6C763A4AFFAD, ped, p1, p2, p3, p4)
```


---

## SET_PED_DEFENSIVE_AREA_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_DEFENSIVE_AREA_VOLUME` |
| Hash | `0xFC3DB99C8144CD81` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `volume` (Volume), `p2` (BOOL), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`volume`** (`Volume`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedDefensiveAreaVolume(ped, volume, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFC3DB99C8144CD81, ped, volume, p2, p3, p4)
```


---

## SET_PED_DESIRED_HEADING

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_DESIRED_HEADING` |
| Hash | `0xAA5A7ECE2AA8FE70` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `heading` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`heading`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedDesiredHeading(ped, heading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAA5A7ECE2AA8FE70, ped, heading)
```


---

## SET_PED_FIRING_PATTERN

**Description:** Used in various R* MP & SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_FIRING_PATTERN` |
| Hash | `0x9AC577F5A12AD8A9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `patternHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`patternHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedFiringPattern(ped, patternHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9AC577F5A12AD8A9, ped, patternHash)
```


---

## SET_PED_FLEE_ATTRIBUTES

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/AI/FLEE_ATTRIBUTES

attributeFlags:
enum eFleeAttribute
{
	FA_FORCE_EXIT_VEHICLE = (1 << 16),
	FA_DISABLE_MOUNT_USAGE = (1 << 20),
	FA_DISABLE_ENTER_VEHICLES = (1 << 22),
};

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_FLEE_ATTRIBUTES` |
| Hash | `0x70A2D1137C8ED7C9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeFlags` (int), `enable` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeFlags`** (`int`)
- **`enable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedFleeAttributes(ped, attributeFlags, enable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x70A2D1137C8ED7C9, ped, attributeFlags, enable)
```


---

## SET_PED_GESTURE_GROUP

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_GESTURE_GROUP` |
| Hash | `0xDDF803377F94AAA8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `gesture` (char*), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`gesture`** (`char*`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedGestureGroup(ped, gesture, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDDF803377F94AAA8, ped, gesture, p2)
```


---

## SET_PED_GRAVITY

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_GRAVITY` |
| Hash | `0x9FF447B6B6AD960A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedGravity(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9FF447B6B6AD960A, ped, toggle)
```


---

## SET_PED_GROUP_MEMBER_PASSENGER_INDEX

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_GROUP_MEMBER_PASSENGER_INDEX` |
| Hash | `0x0BDDB8D9EC6BCF3C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `index` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedGroupMemberPassengerIndex(ped, index)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0BDDB8D9EC6BCF3C, ped, index)
```


---

## SET_PED_HEARING_RANGE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_HEARING_RANGE` |
| Hash | `0x33A8F7F7D5F7F33C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedHearingRange(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x33A8F7F7D5F7F33C, ped, value)
```


---

## SET_PED_HIGHLY_PERCEPTIVE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_HIGHLY_PERCEPTIVE` |
| Hash | `0x52D59AB61DDC05DD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedHighlyPerceptive(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x52D59AB61DDC05DD, ped, toggle)
```


---

## SET_PED_ID_RANGE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_ID_RANGE` |
| Hash | `0xF107E836A70DCE05` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedIdRange(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF107E836A70DCE05, ped, value)
```


---

## SET_PED_INJURED_ON_GROUND_BEHAVIOUR

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_INJURED_ON_GROUND_BEHAVIOUR` |
| Hash | `0xEC4B4B3B9908052A` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `ped` (Ped), `unk` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`unk`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedInjuredOnGroundBehaviour(ped, unk)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEC4B4B3B9908052A, ped, unk)
```


---

## SET_PED_INTO_VEHICLE

**Description:** Ped: The ped to warp.
vehicle: The vehicle to warp the ped into.
seatIndex: see CREATE_PED_INSIDE_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_INTO_VEHICLE` |
| Hash | `0xF75B0D629E1C063D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `seatIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`seatIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedIntoVehicle(ped, vehicle, seatIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF75B0D629E1C063D, ped, vehicle, seatIndex)
```


---

## SET_PED_KEEP_TASK

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_KEEP_TASK` |
| Hash | `0x971D38760FBC02EF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedKeepTask(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x971D38760FBC02EF, ped, toggle)
```


---

## SET_PED_LASSO_HOGTIE_FLAG

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_LASSO_HOGTIE_FLAG` |
| Hash | `0xAE6004120C18DF97` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flagId` (int), `value` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`flagId`** (`int`)
- **`value`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedLassoHogtieFlag(ped, flagId, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE6004120C18DF97, ped, flagId, value)
```


---

## SET_PED_LEG_IK_MODE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_LEG_IK_MODE` |
| Hash | `0xC396F5B86FF9FEBD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `mode` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`mode`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedLegIkMode(ped, mode)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC396F5B86FF9FEBD, ped, mode)
```


---

## SET_PED_LOD_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_LOD_MULTIPLIER` |
| Hash | `0xDC2C5C242AAC342B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `multiplier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedLodMultiplier(ped, multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDC2C5C242AAC342B, ped, multiplier)
```


---

## SET_PED_MAX_HEALTH

**Description:** Sets the maximum health of a ped.

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_MAX_HEALTH` |
| Hash | `0xF5F6378C4F3419D3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedMaxHealth(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF5F6378C4F3419D3, ped, value)
```


---

## SET_PED_MAX_MOVE_BLEND_RATIO

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_MAX_MOVE_BLEND_RATIO` |
| Hash | `0x433083750C5E064A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedMaxMoveBlendRatio(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x433083750C5E064A, ped, value)
```


---

## SET_PED_MAX_TIME_IN_WATER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_MAX_TIME_IN_WATER` |
| Hash | `0x43C851690662113D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedMaxTimeInWater(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x43C851690662113D, ped, value)
```


---

## SET_PED_MAX_TIME_UNDERWATER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_MAX_TIME_UNDERWATER` |
| Hash | `0x6BA428C528D9E522` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedMaxTimeUnderwater(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6BA428C528D9E522, ped, value)
```


---

## SET_PED_MIN_MOVE_BLEND_RATIO

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_MIN_MOVE_BLEND_RATIO` |
| Hash | `0x01A898D26E2333DD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedMinMoveBlendRatio(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x01A898D26E2333DD, ped, value)
```


---

## SET_PED_MODEL_IS_SUPPRESSED

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_MODEL_IS_SUPPRESSED` |
| Hash | `0xE163A4BCE4DE6F11` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `model` (Hash), `toggle` (BOOL) |

### Parameters

- **`model`** (`Hash`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedModelIsSuppressed(model, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE163A4BCE4DE6F11, model, toggle)
```


---

## SET_PED_MONEY

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_MONEY` |
| Hash | `0xA9C8960E8684C1B5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `amount` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedMoney(ped, amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA9C8960E8684C1B5, ped, amount)
```


---

## SET_PED_MOVE_ANIMS_BLEND_OUT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_MOVE_ANIMS_BLEND_OUT` |
| Hash | `0x9E8C908F41584ECD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetPedMoveAnimsBlendOut(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9E8C908F41584ECD, ped)
```


---

## SET_PED_MOVE_RATE_OVERRIDE

**Description:** Min: 0.0f
Max: 1.15f

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_MOVE_RATE_OVERRIDE` |
| Hash | `0x085BF80FA50A39D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedMoveRateOverride(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x085BF80FA50A39D1, ped, value)
```


---

## SET_PED_NAME_DEBUG

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_NAME_DEBUG` |
| Hash | `0x98EFA132A4117BE1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `name` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPedNameDebug(ped, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x98EFA132A4117BE1, ped, name)
```


---

## SET_PED_NON_CREATION_AREA

**Description:** The distance between these points, is the diagonal of a box (remember it's 3D).

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_NON_CREATION_AREA` |
| Hash | `0xEE01041D559983EA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedNonCreationArea(x1, y1, z1, x2, y2, z2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEE01041D559983EA, x1, y1, z1, x2, y2, z2)
```


---

## SET_PED_ONTO_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_ONTO_MOUNT` |
| Hash | `0x028F76B6E78246EB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `mount` (Ped), `seatIndex` (int), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`mount`** (`Ped`)
- **`seatIndex`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedOntoMount(ped, mount, seatIndex, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x028F76B6E78246EB, ped, mount, seatIndex, p3)
```


---

## SET_PED_OWNS_ANIMAL

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_OWNS_ANIMAL` |
| Hash | `0x931B241409216C1F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `animal` (Ped), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`animal`** (`Ped`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedOwnsAnimal(ped, animal, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x931B241409216C1F, ped, animal, p2)
```


---

*End of PED natives part 6*
