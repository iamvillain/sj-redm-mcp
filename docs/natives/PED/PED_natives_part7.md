# PED Natives - Part 7 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## SET_PED_PANIC_EXIT_SCENARIO

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_PANIC_EXIT_SCENARIO` |
| Hash | `0xFE07FF6495D52E2A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedPanicExitScenario(ped, x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFE07FF6495D52E2A, ped, x, y, z)
```


---

## SET_PED_RAGDOLL_FORCE_FALL

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_RAGDOLL_FORCE_FALL` |
| Hash | `0x01F6594B923B9251` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetPedRagdollForceFall(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x01F6594B923B9251, ped)
```


---

## SET_PED_RAGDOLL_ON_COLLISION

**Description:** Causes Ped to ragdoll on collision with any object (e.g Running into trashcan). If applied to player you will sometimes trip on the sidewalk.

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_RAGDOLL_ON_COLLISION` |
| Hash | `0xF0A4F1BBF4FA7497` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedRagdollOnCollision(ped, toggle, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF0A4F1BBF4FA7497, ped, toggle, p2)
```


---

## SET_PED_RANDOM_COMPONENT_VARIATION

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_RANDOM_COMPONENT_VARIATION` |
| Hash | `0xC8A9481A01E63C28` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedRandomComponentVariation(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC8A9481A01E63C28, ped, p1)
```


---

## SET_PED_RELATIONSHIP_GROUP_DEFAULT_HASH

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_RELATIONSHIP_GROUP_DEFAULT_HASH` |
| Hash | `0xADB3F206518799E8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `hash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedRelationshipGroupDefaultHash(ped, hash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xADB3F206518799E8, ped, hash)
```


---

## SET_PED_RELATIONSHIP_GROUP_HASH

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_RELATIONSHIP_GROUP_HASH` |
| Hash | `0xC80A74AC829DDD92` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `relationshipGroup` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`relationshipGroup`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedRelationshipGroupHash(ped, relationshipGroup)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC80A74AC829DDD92, ped, relationshipGroup)
```


---

## SET_PED_RESET_FLAG

**Description:** Needs to be called every frame

flagid:https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePedScriptResetFlags
https://github.com/femga/rdr3_discoveries/tree/master/AI/CPED_RESET_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_RESET_FLAG` |
| Hash | `0xC1E8A365BF3B29F2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flagId` (int), `doReset` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`flagId`** (`int`)
- **`doReset`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedResetFlag(ped, flagId, doReset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC1E8A365BF3B29F2, ped, flagId, doReset)
```


---

## SET_PED_SEEING_RANGE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SEEING_RANGE` |
| Hash | `0xF29CF591C4BF6CEE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedSeeingRange(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF29CF591C4BF6CEE, ped, value)
```


---

## SET_PED_SHOOT_RATE

**Description:** Params: shootRate = 0 - 1000

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SHOOT_RATE` |
| Hash | `0x614DA022990752DC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `shootRate` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`shootRate`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedShootRate(ped, shootRate)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x614DA022990752DC, ped, shootRate)
```


---

## SET_PED_SHOULD_PLAY_COMBAT_SCENARIO_EXIT

**Description:** lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SHOULD_PLAY_COMBAT_SCENARIO_EXIT` |
| Hash | `0x802092B07E3B1EEA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `lookIntensity` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`lookIntensity`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedShouldPlayCombatScenarioExit(ped, x, y, z, lookIntensity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x802092B07E3B1EEA, ped, x, y, z, lookIntensity)
```


---

## SET_PED_SHOULD_PLAY_DIRECTED_NORMAL_SCENARIO_EXIT

**Description:** Old name: _SET_PED_SHOULD_PLAY_DIRECTED_SCENARIO_EXIT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SHOULD_PLAY_DIRECTED_NORMAL_SCENARIO_EXIT` |
| Hash | `0xEC6935EBE0847B90` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedShouldPlayDirectedNormalScenarioExit(ped, x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEC6935EBE0847B90, ped, x, y, z)
```


---

## SET_PED_SHOULD_PLAY_EMOTIONAL_SCENARIO_EXIT

**Description:** lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SHOULD_PLAY_EMOTIONAL_SCENARIO_EXIT` |
| Hash | `0x62FDAD5E01D2DD47` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `lookIntensity` (int), `p5` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`lookIntensity`** (`int`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedShouldPlayEmotionalScenarioExit(ped, x, y, z, lookIntensity, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x62FDAD5E01D2DD47, ped, x, y, z, lookIntensity, p5)
```


---

## SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT

**Description:** lookIntensity:
0 - REACT_LOOK_NONE
1 - REACT_LOOK_LOW
2 - REACT_LOOK_MEDIUM
3 - REACT_LOOK_HIGH

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT` |
| Hash | `0xEEED8FAFEC331A70` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `lookIntensity` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`lookIntensity`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedShouldPlayFleeScenarioExit(ped, x, y, z, lookIntensity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEEED8FAFEC331A70, ped, x, y, z, lookIntensity)
```


---

## SET_PED_SHOULD_PLAY_IMMEDIATE_SCENARIO_EXIT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SHOULD_PLAY_IMMEDIATE_SCENARIO_EXIT` |
| Hash | `0xF1C03A5352243A30` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetPedShouldPlayImmediateScenarioExit(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF1C03A5352243A30, ped)
```


---

## SET_PED_SHOULD_PLAY_NORMAL_SCENARIO_EXIT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SHOULD_PLAY_NORMAL_SCENARIO_EXIT` |
| Hash | `0xA3A9299C4F2ADB98` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetPedShouldPlayNormalScenarioExit(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA3A9299C4F2ADB98, ped)
```


---

## SET_PED_SHOULD_PLAY_QUICK_SCENARIO_EXIT

**Description:** lookIntensity: see SET_PED_SHOULD_PLAY_FLEE_SCENARIO_EXIT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SHOULD_PLAY_QUICK_SCENARIO_EXIT` |
| Hash | `0x463803429297117C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `lookIntensity` (int), `p5` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`lookIntensity`** (`int`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedShouldPlayQuickScenarioExit(ped, x, y, z, lookIntensity, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x463803429297117C, ped, x, y, z, lookIntensity, p5)
```


---

## SET_PED_SPHERE_DEFENSIVE_AREA

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SPHERE_DEFENSIVE_AREA` |
| Hash | `0x9D3151A373974804` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `radius` (float), `p5` (BOOL), `p6` (BOOL), `p7` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedSphereDefensiveArea(ped, x, y, z, radius, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9D3151A373974804, ped, x, y, z, radius, p5, p6, p7)
```


---

## SET_PED_STEALTH_MOVEMENT

**Description:** Not implemented.

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_STEALTH_MOVEMENT` |
| Hash | `0x88CBB5CEB96B7BD2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL), `p2` (Any), `p3` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPedStealthMovement(ped, toggle, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x88CBB5CEB96B7BD2, ped, toggle, p2, p3)
```


---

## SET_PED_SWEAT

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_SWEAT` |
| Hash | `0x27B0405F59637D1F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `sweat` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`sweat`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedSweat(ped, sweat)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x27B0405F59637D1F, ped, sweat)
```


---

## SET_PED_TARGET_LOSS_RESPONSE

**Description:** TLR_ExitTask = 0,
TLR_NeverLoseTarget,
TLR_SearchForTarget

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_TARGET_LOSS_RESPONSE` |
| Hash | `0x0703B9079823DA4A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `responseType` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`responseType`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedTargetLossResponse(ped, responseType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0703B9079823DA4A, ped, responseType)
```


---

## SET_PED_TO_INFORM_RESPECTED_FRIENDS

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_TO_INFORM_RESPECTED_FRIENDS` |
| Hash | `0x112942C6E708F70B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `radius` (float), `maxFriends` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`radius`** (`float`)
- **`maxFriends`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedToInformRespectedFriends(ped, radius, maxFriends)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x112942C6E708F70B, ped, radius, maxFriends)
```


---

## SET_PED_TO_PLAYER_WEAPON_DAMAGE_MODIFIER

**Description:** Old name: _SET_PED_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_TO_PLAYER_WEAPON_DAMAGE_MODIFIER` |
| Hash | `0xD77AE48611B7B10A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `damageModifier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`damageModifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedToPlayerWeaponDamageModifier(ped, damageModifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD77AE48611B7B10A, ped, damageModifier)
```


---

## SET_PED_TO_RAGDOLL

**Description:** nmTaskMessageParameterName: See physicstasks.ymt. Search for DraggedByCart or 0xD00820D7 (Used in R* SP Script marston8)

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_TO_RAGDOLL` |
| Hash | `0xAE99FB955581844A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `timeMin` (int), `timeMax` (int), `ragdollType` (int), `abortIfInjured` (BOOL), `abortIfDead` (BOOL), `nmTaskMessageParameterName` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`timeMin`** (`int`)
- **`timeMax`** (`int`)
- **`ragdollType`** (`int`)
- **`abortIfInjured`** (`BOOL`)
- **`abortIfDead`** (`BOOL`)
- **`nmTaskMessageParameterName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedToRagdoll(ped, timeMin, timeMax, ragdollType, abortIfInjured, abortIfDead, nmTaskMessageParameterName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAE99FB955581844A, ped, timeMin, timeMax, ragdollType, abortIfInjured, abortIfDead, nmTaskMessageParameterName)
```


---

## SET_PED_TO_RAGDOLL_WITH_FALL

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_TO_RAGDOLL_WITH_FALL` |
| Hash | `0xD76632D99E4966C8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `timeMin` (int), `timeMax` (int), `ragdollType` (int), `falldirX` (float), `falldirY` (float), `falldirZ` (float), `p7` (float), `p8` (float), `p9` (float), `p10` (float), `p11` (float), `p12` (float), `p13` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`timeMin`** (`int`)
- **`timeMax`** (`int`)
- **`ragdollType`** (`int`)
- **`falldirX`** (`float`)
- **`falldirY`** (`float`)
- **`falldirZ`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`float`)
- **`p10`** (`float`)
- **`p11`** (`float`)
- **`p12`** (`float`)
- **`p13`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetPedToRagdollWithFall(ped, timeMin, timeMax, ragdollType, falldirX, falldirY, falldirZ, p7, p8, p9, p10, p11, p12, p13)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD76632D99E4966C8, ped, timeMin, timeMax, ragdollType, falldirX, falldirY, falldirZ, p7, p8, p9, p10, p11, p12, p13)
```


---

## SET_PED_USING_ACTION_MODE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_USING_ACTION_MODE` |
| Hash | `0xD75ACCF5E0FB5367` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `bActionModeEnabled` (BOOL), `p2` (int), `action` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`bActionModeEnabled`** (`BOOL`)
- **`p2`** (`int`)
- **`action`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPedUsingActionMode(ped, bActionModeEnabled, p2, action)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD75ACCF5E0FB5367, ped, bActionModeEnabled, p2, action)
```


---

## SET_PED_VISUAL_FIELD_CENTER_ANGLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_VISUAL_FIELD_CENTER_ANGLE` |
| Hash | `0x3B6405E8AB34A907` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `angle` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`angle`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedVisualFieldCenterAngle(ped, angle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3B6405E8AB34A907, ped, angle)
```


---

## SET_PED_VISUAL_FIELD_MAX_ANGLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_VISUAL_FIELD_MAX_ANGLE` |
| Hash | `0x70793BDCA1E854D4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedVisualFieldMaxAngle(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x70793BDCA1E854D4, ped, value)
```


---

## SET_PED_VISUAL_FIELD_MIN_ANGLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_VISUAL_FIELD_MIN_ANGLE` |
| Hash | `0x2DB492222FB21E26` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedVisualFieldMinAngle(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2DB492222FB21E26, ped, value)
```


---

## SET_PED_VISUAL_FIELD_PERIPHERAL_RANGE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_VISUAL_FIELD_PERIPHERAL_RANGE` |
| Hash | `0x9C74B0BC831B753A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `range` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`range`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedVisualFieldPeripheralRange(ped, range)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9C74B0BC831B753A, ped, range)
```


---

## SET_PED_WETNESS_ENABLED_THIS_FRAME

**Description:** combined with PED::SET_PED_WETNESS_HEIGHT(), this native makes the ped drenched in water up to the height specified in the other function

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_WETNESS_ENABLED_THIS_FRAME` |
| Hash | `0xB5485E4907B53019` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetPedWetnessEnabledThisFrame(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB5485E4907B53019, ped)
```


---

## SET_PED_WETNESS_HEIGHT

**Description:** It adds the wetness level to the player clothing/outfit. As if player just got out from water surface.

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_WETNESS_HEIGHT` |
| Hash | `0x44CB6447D2571AA0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `height` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`height`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedWetnessHeight(ped, height)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x44CB6447D2571AA0, ped, height)
```


---

## SET_POP_CONTROL_SPHERE_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_POP_CONTROL_SPHERE_THIS_FRAME` |
| Hash | `0xD8C3BE3EE94CAF2D` |
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
SetPopControlSphereThisFrame(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD8C3BE3EE94CAF2D, p0, p1, p2, p3, p4)
```


---

## SET_RAGDOLL_BLOCKING_FLAGS

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/AI/RAGDOLL_BLOCKING_FLAGS

flags:
enum eRagdollBlockingFlags
{
	RBF_BULLET_IMPACT = (1 << 0),
	RBF_VEHICLE_IMPACT = (1 << 1),
	RBF_FIRE = (1 << 2),
	RBF_ELECTROCUTION = (1 << 3),
	RBF_PLAYER_IMPACT = (1 << 4),
	RBF_EXPLOSION = (1 << 5),
	RBF_IMPACT_OBJECT = (1 << 6),
	RBF_MELEE = (1 << 7),
	RBF_RUBBER_BULLET = (1 << 8),
	RBF_FALLING = (1 << 9),
	RBF_WATER_JET = (1 << 10),
	RBF_DROWNING = (1 << 11),
	RBF_0x9F52E2C4 = (1 << 12),
	RBF_PLAYER_BUMP = (1 << 13),
	RBF_PLAYER_RAGDOLL_BUMP = (1 << 14),
	RBF_PED_RAGDOLL_BUMP = (1 << 15),
	RBF_VEHICLE_GRAB = (1 << 16),
	RBF_SMOKE_GRENADE = (1 << 17),
	RBF_HORSE_BUMP = (1 << 18),
	RBF_ACTIVATE_ON_COLLISION = (1 << 19)
};

| Property | Value |
|----------|-------|
| Native Name | `SET_RAGDOLL_BLOCKING_FLAGS` |
| Hash | `0x26695EC767728D84` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetRagdollBlockingFlags(ped, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x26695EC767728D84, ped, flags)
```


---

## SET_RELATIONSHIP_BETWEEN_GROUPS

| Property | Value |
|----------|-------|
| Native Name | `SET_RELATIONSHIP_BETWEEN_GROUPS` |
| Hash | `0xBF25EB89375A37AD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `relationship` (int), `group1` (Hash), `group2` (Hash) |

### Parameters

- **`relationship`** (`int`)
- **`group1`** (`Hash`)
- **`group2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetRelationshipBetweenGroups(relationship, group1, group2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBF25EB89375A37AD, relationship, group1, group2)
```


---

## SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME` |
| Hash | `0x7A556143A1C03898` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetScenarioPedDensityMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7A556143A1C03898, multiplier)
```


---

## SPAWNPOINTS_CANCEL_SEARCH

| Property | Value |
|----------|-------|
| Native Name | `SPAWNPOINTS_CANCEL_SEARCH` |
| Hash | `0xFEE4A5459472A9F8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SpawnpointsCancelSearch()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFEE4A5459472A9F8, )
```


---

## SPAWNPOINTS_GET_NUM_SEARCH_RESULTS

| Property | Value |
|----------|-------|
| Native Name | `SPAWNPOINTS_GET_NUM_SEARCH_RESULTS` |
| Hash | `0xA635C11B8C44AFC2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = SpawnpointsGetNumSearchResults()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA635C11B8C44AFC2, )
```


---

## SPAWNPOINTS_GET_SEARCH_RESULT

| Property | Value |
|----------|-------|
| Native Name | `SPAWNPOINTS_GET_SEARCH_RESULT` |
| Hash | `0x280C7E3AC7F56E90` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `randomInt` (int), `x` (float*), `y` (Any*), `z` (float*) |

### Parameters

- **`randomInt`** (`int`)
- **`x`** (`float*`)
- **`y`** (`Any*`)
- **`z`** (`float*`)

### Usage

**Lua (Direct):**
```lua
SpawnpointsGetSearchResult(randomInt, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x280C7E3AC7F56E90, randomInt, x, y, z)
```


---

## SPAWNPOINTS_GET_SEARCH_RESULT_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `SPAWNPOINTS_GET_SEARCH_RESULT_FLAGS` |
| Hash | `0xB782F8238512BAD5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
SpawnpointsGetSearchResultFlags(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB782F8238512BAD5, p0, p1)
```


---

## SPAWNPOINTS_IS_SEARCH_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `SPAWNPOINTS_IS_SEARCH_ACTIVE` |
| Hash | `0x3C67506996001F5E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = SpawnpointsIsSearchActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3C67506996001F5E, )
```


---

## SPAWNPOINTS_IS_SEARCH_COMPLETE

| Property | Value |
|----------|-------|
| Native Name | `SPAWNPOINTS_IS_SEARCH_COMPLETE` |
| Hash | `0xA586FBEB32A53DBB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = SpawnpointsIsSearchComplete()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA586FBEB32A53DBB, )
```


---

## SPAWNPOINTS_IS_SEARCH_FAILED

| Property | Value |
|----------|-------|
| Native Name | `SPAWNPOINTS_IS_SEARCH_FAILED` |
| Hash | `0xF445DE8DA80A1792` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = SpawnpointsIsSearchFailed()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF445DE8DA80A1792, )
```


---

## SPAWNPOINTS_START_SEARCH

**Description:** Params: p4 = 35.f, duration = 5000 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `SPAWNPOINTS_START_SEARCH` |
| Hash | `0x2DF9038C90AD5264` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `width` (float), `p4` (float), `spawnpointsFlag` (int), `p6` (float), `duration` (int), `p8` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`width`** (`float`)
- **`p4`** (`float`)
- **`spawnpointsFlag`** (`int`)
- **`p6`** (`float`)
- **`duration`** (`int`)
- **`p8`** (`float`)

### Usage

**Lua (Direct):**
```lua
SpawnpointsStartSearch(x, y, z, width, p4, spawnpointsFlag, p6, duration, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2DF9038C90AD5264, x, y, z, width, p4, spawnpointsFlag, p6, duration, p8)
```


---

## SPAWNPOINTS_START_SEARCH_IN_ANGLED_AREA

**Description:** Searching area between coords 1 and 2

| Property | Value |
|----------|-------|
| Native Name | `SPAWNPOINTS_START_SEARCH_IN_ANGLED_AREA` |
| Hash | `0xB2AFF10216DEFA2F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `width` (float), `spawnpointsFlag` (int), `p8` (float), `duration` (int), `p10` (float) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`width`** (`float`)
- **`spawnpointsFlag`** (`int`)
- **`p8`** (`float`)
- **`duration`** (`int`)
- **`p10`** (`float`)

### Usage

**Lua (Direct):**
```lua
SpawnpointsStartSearchInAngledArea(x1, y1, z1, x2, y2, z2, width, spawnpointsFlag, p8, duration, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB2AFF10216DEFA2F, x1, y1, z1, x2, y2, z2, width, spawnpointsFlag, p8, duration, p10)
```


---

## SPECIAL_FUNCTION_DO_NOT_USE

| Property | Value |
|----------|-------|
| Native Name | `SPECIAL_FUNCTION_DO_NOT_USE` |
| Hash | `0xF9ACF4A08098EA25` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SpecialFunctionDoNotUse(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF9ACF4A08098EA25, ped, p1)
```


---

## TIME_SINCE_PED_LAST_SHOT

**Description:** Returns time since the specified ped last shot, in seconds. (fPlayerJustShotTime)

| Property | Value |
|----------|-------|
| Native Name | `TIME_SINCE_PED_LAST_SHOT` |
| Hash | `0x285D36C5C72B0569` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = TimeSincePedLastShot(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x285D36C5C72B0569, ped)
```


---

## TOGGLE_SCENARIO_PED_COWER_IN_PLACE

**Description:** If toggle is true, when the ped is using a scenario he will stop it and become scared
If toggle is false, the ped will not be scared anymore and continue his scenario

Old name: _SET_PED_SCARED_WHEN_USING_SCENARIO

| Property | Value |
|----------|-------|
| Native Name | `TOGGLE_SCENARIO_PED_COWER_IN_PLACE` |
| Hash | `0x9A77DFD295E29B09` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ToggleScenarioPedCowerInPlace(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9A77DFD295E29B09, ped, toggle)
```


---

## WAS_PED_SKELETON_UPDATED

**Description:** Despite this function's name, it simply returns whether the specified handle is a Ped.

| Property | Value |
|----------|-------|
| Native Name | `WAS_PED_SKELETON_UPDATED` |
| Hash | `0x11B499C1E0FF8559` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = WasPedSkeletonUpdated(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x11B499C1E0FF8559, ped)
```


---

## _0x00B380FF2DF6AB7A

| Property | Value |
|----------|-------|
| Native Name | `_0x00B380FF2DF6AB7A` |
| Hash | `0x00B380FF2DF6AB7A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x00B380FF2DF6AB7A(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x00B380FF2DF6AB7A, p0, p1)
```


---

## _0x0105FEE8F9091255

| Property | Value |
|----------|-------|
| Native Name | `_0x0105FEE8F9091255` |
| Hash | `0x0105FEE8F9091255` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0105FEE8F9091255(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0105FEE8F9091255, p0, p1)
```


---

*End of PED natives part 7*
