# PED Natives - Part 1 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## ADD_ARMOUR_TO_PED

**Description:** Same as SET_PED_ARMOUR, but ADDS 'amount' to the armor the Ped already has.

| Property | Value |
|----------|-------|
| Native Name | `ADD_ARMOUR_TO_PED` |
| Hash | `0x5BA652A0CD14DF2F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `amount` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddArmourToPed(ped, amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5BA652A0CD14DF2F, ped, amount)
```


---

## ADD_CUSTOM_FORMATION_LOCATION

| Property | Value |
|----------|-------|
| Native Name | `ADD_CUSTOM_FORMATION_LOCATION` |
| Hash | `0x4E23CD07BD161E06` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `x` (float), `y` (float), `z` (float), `position` (int) |

### Parameters

- **`groupId`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`position`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddCustomFormationLocation(groupId, x, y, z, position)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4E23CD07BD161E06, groupId, x, y, z, position)
```


---

## ADD_FORMATION_LOCATION

| Property | Value |
|----------|-------|
| Native Name | `ADD_FORMATION_LOCATION` |
| Hash | `0xB05945C1E9E60D91` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `groupId` (int), `p1` (float), `p2` (float), `p3` (float) |

### Parameters

- **`groupId`** (`int`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = AddFormationLocation(groupId, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB05945C1E9E60D91, groupId, p1, p2, p3)
```


---

## ADD_RELATIONSHIP_GROUP

**Description:** The hash of the created relationship group is output in the second parameter.

| Property | Value |
|----------|-------|
| Native Name | `ADD_RELATIONSHIP_GROUP` |
| Hash | `0xF372BC22FCB88606` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `name` (char*), `groupHash` (Hash) |

### Parameters

- **`name`** (`char*`)
- **`groupHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = AddRelationshipGroup(name, groupHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF372BC22FCB88606, name, groupHash)
```


---

## ADD_SCENARIO_BLOCKING_AREA

**Description:** blockingFlags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eScenarioBlockingFlags

| Property | Value |
|----------|-------|
| Native Name | `ADD_SCENARIO_BLOCKING_AREA` |
| Hash | `0x1B5C85C612E5256E` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `p6` (BOOL), `blockingFlags` (int) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`p6`** (`BOOL`)
- **`blockingFlags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = AddScenarioBlockingArea(x1, y1, z1, x2, y2, z2, p6, blockingFlags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1B5C85C612E5256E, x1, y1, z1, x2, y2, z2, p6, blockingFlags)
```


---

## APPLY_DAMAGE_TO_PED

**Description:** damages a ped with the given amount

| Property | Value |
|----------|-------|
| Native Name | `APPLY_DAMAGE_TO_PED` |
| Hash | `0x697157CED63F18D4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `damageAmount` (int), `damageArmour` (BOOL), `boneId` (int), `pedKiller` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`damageAmount`** (`int`)
- **`damageArmour`** (`BOOL`)
- **`boneId`** (`int`)
- **`pedKiller`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ApplyDamageToPed(ped, damageAmount, damageArmour, boneId, pedKiller)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x697157CED63F18D4, ped, damageAmount, damageArmour, boneId, pedKiller)
```


---

## APPLY_PED_BLOOD_SPECIFIC

| Property | Value |
|----------|-------|
| Native Name | `APPLY_PED_BLOOD_SPECIFIC` |
| Hash | `0xEF0D582CBF2D9B0F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (Any), `p7` (float), `p8` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`Any`)
- **`p7`** (`float`)
- **`p8`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
ApplyPedBloodSpecific(ped, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEF0D582CBF2D9B0F, ped, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## APPLY_PED_DAMAGE_PACK

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_decals.lua

| Property | Value |
|----------|-------|
| Native Name | `APPLY_PED_DAMAGE_PACK` |
| Hash | `0x46DF918788CB093F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `damagePack` (char*), `damage` (float), `mult` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`damagePack`** (`char*`)
- **`damage`** (`float`)
- **`mult`** (`float`)

### Usage

**Lua (Direct):**
```lua
ApplyPedDamagePack(ped, damagePack, damage, mult)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x46DF918788CB093F, ped, damagePack, damage, mult)
```


---

## CAN_KNOCK_PED_OFF_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `CAN_KNOCK_PED_OFF_VEHICLE` |
| Hash | `0x51AC07A44D4F5B8A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = CanKnockPedOffVehicle(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x51AC07A44D4F5B8A, ped)
```


---

## CAN_PED_BE_MOUNTED

| Property | Value |
|----------|-------|
| Native Name | `CAN_PED_BE_MOUNTED` |
| Hash | `0x2D64376CF437363E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = CanPedBeMounted(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2D64376CF437363E, ped)
```


---

## CAN_PED_IN_COMBAT_SEE_TARGET

| Property | Value |
|----------|-------|
| Native Name | `CAN_PED_IN_COMBAT_SEE_TARGET` |
| Hash | `0xEAD42DE3610D0721` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `target` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`target`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = CanPedInCombatSeeTarget(ped, target)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEAD42DE3610D0721, ped, target)
```


---

## CAN_PED_RAGDOLL

| Property | Value |
|----------|-------|
| Native Name | `CAN_PED_RAGDOLL` |
| Hash | `0x128F79EDCECE4FD5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = CanPedRagdoll(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x128F79EDCECE4FD5, ped)
```


---

## CAN_PED_SEE_ENTITY

**Description:** Returns:
0 - CTR_CANNOT_TARGET
1 - CTR_CAN_TARGET
2 - CTR_NOT_SURE_YET

| Property | Value |
|----------|-------|
| Native Name | `CAN_PED_SEE_ENTITY` |
| Hash | `0x7F9B9791D4CB71F6` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetEntity` (Entity), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`targetEntity`** (`Entity`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CanPedSeeEntity(ped, targetEntity, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7F9B9791D4CB71F6, ped, targetEntity, p2, p3)
```


---

## CAN_PED_SEE_PED_CACHED

| Property | Value |
|----------|-------|
| Native Name | `CAN_PED_SEE_PED_CACHED` |
| Hash | `0x9D9473CB82D83A30` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CanPedSeePedCached(ped, targetPed, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9D9473CB82D83A30, ped, targetPed, p2)
```


---

## CLEAR_FACIAL_IDLE_ANIM_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_FACIAL_IDLE_ANIM_OVERRIDE` |
| Hash | `0x726256CC1EEB182F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearFacialIdleAnimOverride(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x726256CC1EEB182F, ped)
```


---

## CLEAR_PED_BLOOD_DAMAGE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_BLOOD_DAMAGE` |
| Hash | `0x8FE22675A5A45817` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearPedBloodDamage(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8FE22675A5A45817, ped)
```


---

## CLEAR_PED_BLOOD_DAMAGE_BY_ZONE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_BLOOD_DAMAGE_BY_ZONE` |
| Hash | `0x56E3B78C5408D9F4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearPedBloodDamageByZone(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x56E3B78C5408D9F4, ped, p1)
```


---

## CLEAR_PED_DAMAGE_DECAL_BY_ZONE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_DAMAGE_DECAL_BY_ZONE` |
| Hash | `0x523C79AEEFCC4A2A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`char*`)

### Usage

**Lua (Direct):**
```lua
ClearPedDamageDecalByZone(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x523C79AEEFCC4A2A, ped, p1, p2)
```


---

## CLEAR_PED_DECORATIONS

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_DECORATIONS` |
| Hash | `0x0E5173C163976E38` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearPedDecorations(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0E5173C163976E38, ped)
```


---

## CLEAR_PED_ENV_DIRT

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_ENV_DIRT` |
| Hash | `0x6585D955A68452A5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearPedEnvDirt(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6585D955A68452A5, ped)
```


---

## CLEAR_PED_LAST_DAMAGE_BONE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_LAST_DAMAGE_BONE` |
| Hash | `0x8EF6B7AC68E2F01B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearPedLastDamageBone(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8EF6B7AC68E2F01B, ped)
```


---

## CLEAR_PED_NON_CREATION_AREA

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_NON_CREATION_AREA` |
| Hash | `0x2E05208086BA0651` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearPedNonCreationArea()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E05208086BA0651, )
```


---

## CLEAR_PED_WETNESS

**Description:** It clears the wetness of the selected Ped/Player. Clothes have to be wet to notice the difference.

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_PED_WETNESS` |
| Hash | `0x9C720776DAA43E7E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearPedWetness(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9C720776DAA43E7E, ped)
```


---

## CLEAR_RAGDOLL_BLOCKING_FLAGS

**Description:** flags: see SET_RAGDOLL_BLOCKING_FLAGS

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_RAGDOLL_BLOCKING_FLAGS` |
| Hash | `0xD86D101FCFD00A4B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearRagdollBlockingFlags(ped, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD86D101FCFD00A4B, ped, flags)
```


---

## CLEAR_RELATIONSHIP_BETWEEN_GROUPS

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_RELATIONSHIP_BETWEEN_GROUPS` |
| Hash | `0x5E29243FB56FC6D4` |
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
ClearRelationshipBetweenGroups(relationship, group1, group2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5E29243FB56FC6D4, relationship, group1, group2)
```


---

## CLONE_PED

| Property | Value |
|----------|-------|
| Native Name | `CLONE_PED` |
| Hash | `0xEF29A16337FACADB` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped), `isNetwork` (BOOL), `bScriptHostPed` (BOOL), `copyHeadBlendFlag` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`isNetwork`** (`BOOL`)
- **`bScriptHostPed`** (`BOOL`)
- **`copyHeadBlendFlag`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = ClonePed(ped, isNetwork, bScriptHostPed, copyHeadBlendFlag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEF29A16337FACADB, ped, isNetwork, bScriptHostPed, copyHeadBlendFlag)
```


---

## CLONE_PED_TO_TARGET

**Description:** Copies ped's components and props to targetPed.
Can be used to clear anything from a ped by cloning it, including bullet holes.

| Property | Value |
|----------|-------|
| Native Name | `CLONE_PED_TO_TARGET` |
| Hash | `0xE952D6431689AD9A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClonePedToTarget(ped, targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE952D6431689AD9A, ped, targetPed)
```


---

## COMPUTE_SATCHEL_ITEM_FOR_PED_DAMAGE

| Property | Value |
|----------|-------|
| Native Name | `COMPUTE_SATCHEL_ITEM_FOR_PED_DAMAGE` |
| Hash | `0x9E7738B291706746` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `pedAttached` (Ped), `damageCleanliness` (int) |

### Parameters

- **`p0`** (`Any`)
- **`pedAttached`** (`Ped`)
- **`damageCleanliness`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ComputeSatchelItemForPedDamage(p0, pedAttached, damageCleanliness)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9E7738B291706746, p0, pedAttached, damageCleanliness)
```


---

## COUNT_PEDS_IN_COMBAT_WITH_TARGET

| Property | Value |
|----------|-------|
| Native Name | `COUNT_PEDS_IN_COMBAT_WITH_TARGET` |
| Hash | `0x5407B7288D0478B7` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CountPedsInCombatWithTarget(ped, flag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5407B7288D0478B7, ped, flag)
```


---

## COUNT_PEDS_IN_COMBAT_WITH_TARGET_WITHIN_RADIUS

| Property | Value |
|----------|-------|
| Native Name | `COUNT_PEDS_IN_COMBAT_WITH_TARGET_WITHIN_RADIUS` |
| Hash | `0x336B3D200AB007CB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `radius` (float), `flag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CountPedsInCombatWithTargetWithinRadius(ped, x, y, z, radius, flag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x336B3D200AB007CB, ped, x, y, z, radius, flag)
```


---

## CREATE_GROUP

**Description:** Creates a new ped group.
Groups can contain up to 8 peds.

The parameter is unused.

Returns a handle to the created group, or 0 if a group couldn't be created.

| Property | Value |
|----------|-------|
| Native Name | `CREATE_GROUP` |
| Hash | `0x90370EBE0FEE1A3D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `taskAllocator` (int) |

### Parameters

- **`taskAllocator`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CreateGroup(taskAllocator)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x90370EBE0FEE1A3D, taskAllocator)
```


---

## CREATE_PED

| Property | Value |
|----------|-------|
| Native Name | `CREATE_PED` |
| Hash | `0xD49F9B0955C367DE` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `modelHash` (Hash), `x` (float), `y` (float), `z` (float), `heading` (float), `isNetwork` (BOOL), `bScriptHostPed` (BOOL), `p7` (BOOL), `p8` (BOOL) |

### Parameters

- **`modelHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`isNetwork`** (`BOOL`)
- **`bScriptHostPed`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePed(modelHash, x, y, z, heading, isNetwork, bScriptHostPed, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD49F9B0955C367DE, modelHash, x, y, z, heading, isNetwork, bScriptHostPed, p7, p8)
```


---

## CREATE_PED_INSIDE_VEHICLE

**Description:** seatIndex:
enum eVehicleSeat
{
	VS_ANY_PASSENGER = -2,
	VS_DRIVER,
	VS_FRONT_RIGHT,
	VS_BACK_LEFT,
	VS_BACK_RIGHT,
	VS_EXTRA_LEFT_1,
	VS_EXTRA_RIGHT_1,
	VS_EXTRA_LEFT_2,
	VS_EXTRA_RIGHT_2,
	VS_EXTRA_LEFT_3,
	VS_EXTRA_RIGHT_3,
	VS_NUM_SEATS
};

| Property | Value |
|----------|-------|
| Native Name | `CREATE_PED_INSIDE_VEHICLE` |
| Hash | `0x7DD959874C1FD534` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `modelHash` (Hash), `seatIndex` (int), `p3` (BOOL), `p4` (BOOL), `p5` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`modelHash`** (`Hash`)
- **`seatIndex`** (`int`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePedInsideVehicle(vehicle, modelHash, seatIndex, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7DD959874C1FD534, vehicle, modelHash, seatIndex, p3, p4, p5)
```


---

## CREATE_PED_ON_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `CREATE_PED_ON_MOUNT` |
| Hash | `0xF89AA2BD01FC06B7` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `mount` (Ped), `modelHash` (Hash), `index` (int), `p3` (BOOL), `p4` (BOOL), `p5` (BOOL), `p6` (BOOL) |

### Parameters

- **`mount`** (`Ped`)
- **`modelHash`** (`Hash`)
- **`index`** (`int`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePedOnMount(mount, modelHash, index, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF89AA2BD01FC06B7, mount, modelHash, index, p3, p4, p5, p6)
```


---

## DELETE_PED

**Description:** Deletes the specified ped, then sets the handle pointed to by the pointer to NULL.

| Property | Value |
|----------|-------|
| Native Name | `DELETE_PED` |
| Hash | `0xCC0EF140F99365C5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped*) |

### Parameters

- **`ped`** (`Ped*`)

### Usage

**Lua (Direct):**
```lua
DeletePed(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCC0EF140F99365C5, ped)
```


---

## DETACH_CARRIABLE_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `DETACH_CARRIABLE_ENTITY` |
| Hash | `0xED00D72F81CF7278` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DetachCarriableEntity(entity, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xED00D72F81CF7278, entity, p1, p2)
```


---

## DISABLE_PED_INJURED_ON_GROUND_BEHAVIOUR

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_PED_INJURED_ON_GROUND_BEHAVIOUR` |
| Hash | `0x733C87D4CE22BEA2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
DisablePedInjuredOnGroundBehaviour(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x733C87D4CE22BEA2, ped)
```


---

## DOES_GROUP_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_GROUP_EXIST` |
| Hash | `0x7C6B0C22F9F40BBE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `groupId` (int) |

### Parameters

- **`groupId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesGroupExist(groupId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7C6B0C22F9F40BBE, groupId)
```


---

## EXPLODE_PED_HEAD

**Description:** Forces the ped to fall back and kills it.

It doesn't really explode the ped's head but it kills the ped

| Property | Value |
|----------|-------|
| Native Name | `EXPLODE_PED_HEAD` |
| Hash | `0x2D05CED3A38D0F3A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ExplodePedHead(ped, weaponHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2D05CED3A38D0F3A, ped, weaponHash)
```


---

## FADE_AND_DESTROY_PED

| Property | Value |
|----------|-------|
| Native Name | `FADE_AND_DESTROY_PED` |
| Hash | `0x7043D0681285BA2D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped*) |

### Parameters

- **`ped`** (`Ped*`)

### Usage

**Lua (Direct):**
```lua
FadeAndDestroyPed(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7043D0681285BA2D, ped)
```


---

## FIND_ALL_ATTACHED_CARRIABLE_ENTITIES

| Property | Value |
|----------|-------|
| Native Name | `FIND_ALL_ATTACHED_CARRIABLE_ENTITIES` |
| Hash | `0xB5ACE8B23A438EC0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `itemset` (ItemSet) |

### Parameters

- **`ped`** (`Ped`)
- **`itemset`** (`ItemSet`)

### Usage

**Lua (Direct):**
```lua
FindAllAttachedCarriableEntities(ped, itemset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB5ACE8B23A438EC0, ped, itemset)
```


---

## FORCE_ALL_HEADING_VALUES_TO_ALIGN

**Description:** Old name: _FREEZE_PED_CAMERA_ROTATION

| Property | Value |
|----------|-------|
| Native Name | `FORCE_ALL_HEADING_VALUES_TO_ALIGN` |
| Hash | `0xFF287323B0E2C69A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ForceAllHeadingValuesToAlign(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFF287323B0E2C69A, ped)
```


---

## FORCE_PED_AI_AND_ANIMATION_UPDATE

| Property | Value |
|----------|-------|
| Native Name | `FORCE_PED_AI_AND_ANIMATION_UPDATE` |
| Hash | `0x2208438012482A1A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ForcePedAiAndAnimationUpdate(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2208438012482A1A, ped, p1, p2)
```


---

## FORCE_PED_MOTION_STATE

**Description:** motionStateHash: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CPedMotionStates__eMotionState

| Property | Value |
|----------|-------|
| Native Name | `FORCE_PED_MOTION_STATE` |
| Hash | `0xF28965D04F570DCA` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `motionStateHash` (Hash), `p2` (BOOL), `p3` (int), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`motionStateHash`** (`Hash`)
- **`p2`** (`BOOL`)
- **`p3`** (`int`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = ForcePedMotionState(ped, motionStateHash, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF28965D04F570DCA, ped, motionStateHash, p2, p3, p4)
```


---

## GET_ANIM_INITIAL_OFFSET_POSITION

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIM_INITIAL_OFFSET_POSITION` |
| Hash | `0xBE22B26DD764C040` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `animDict` (char*), `animName` (char*), `x` (float), `y` (float), `z` (float), `xRot` (float), `yRot` (float), `zRot` (float), `p8` (float), `p9` (int) |

### Parameters

- **`animDict`** (`char*`)
- **`animName`** (`char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimInitialOffsetPosition(animDict, animName, x, y, z, xRot, yRot, zRot, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBE22B26DD764C040, animDict, animName, x, y, z, xRot, yRot, zRot, p8, p9)
```


---

## GET_ANIM_INITIAL_OFFSET_ROTATION

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIM_INITIAL_OFFSET_ROTATION` |
| Hash | `0x4B805E6046EE9E47` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `animDict` (char*), `animName` (char*), `x` (float), `y` (float), `z` (float), `xRot` (float), `yRot` (float), `zRot` (float), `p8` (float), `p9` (int) |

### Parameters

- **`animDict`** (`char*`)
- **`animName`** (`char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimInitialOffsetRotation(animDict, animName, x, y, z, xRot, yRot, zRot, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4B805E6046EE9E47, animDict, animName, x, y, z, xRot, yRot, zRot, p8, p9)
```


---

## GET_CARRIED_ATTACHED_INFO_FOR_SLOT

| Property | Value |
|----------|-------|
| Native Name | `GET_CARRIED_ATTACHED_INFO_FOR_SLOT` |
| Hash | `0x608BC6A6AACD5036` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = GetCarriedAttachedInfoForSlot(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x608BC6A6AACD5036, p0, p1, p2, p3)
```


---

## GET_CLOSEST_PED

**Description:** Gets the closest ped in a radius.

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOSEST_PED` |
| Hash | `0xC33AB876A77F8164` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `p4` (BOOL), `p5` (BOOL), `outPed` (Ped*), `p7` (BOOL), `p8` (BOOL), `p9` (BOOL), `pedType` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)
- **`outPed`** (`Ped*`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)
- **`pedType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetClosestPed(x, y, z, radius, p4, p5, outPed, p7, p8, p9, pedType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC33AB876A77F8164, x, y, z, radius, p4, p5, outPed, p7, p8, p9, pedType)
```


---

## GET_COMBAT_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `GET_COMBAT_FLOAT` |
| Hash | `0x52DFF8A10508090A` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `combatType` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`combatType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetCombatFloat(ped, combatType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x52DFF8A10508090A, ped, combatType)
```


---

## GET_CURRENT_TARGET_FOR_PED

| Property | Value |
|----------|-------|
| Native Name | `GET_CURRENT_TARGET_FOR_PED` |
| Hash | `0xCD66FEA29400A0B5` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetCurrentTargetForPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCD66FEA29400A0B5, ped)
```


---

*End of PED natives part 1*
