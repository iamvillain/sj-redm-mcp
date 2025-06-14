# PED Natives - Part 2 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## GET_DEAD_PED_PICKUP_COORDS

| Property | Value |
|----------|-------|
| Native Name | `GET_DEAD_PED_PICKUP_COORDS` |
| Hash | `0xCD5003B097200F36` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetDeadPedPickupCoords(ped, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCD5003B097200F36, ped, p1, p2)
```


---

## GET_GROUP_SIZE

| Property | Value |
|----------|-------|
| Native Name | `GET_GROUP_SIZE` |
| Hash | `0x8DE69FE35CA09A45` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `groupId` (int), `hasLeader` (BOOL*), `numberOfFollowers` (int*) |

### Parameters

- **`groupId`** (`int`)
- **`hasLeader`** (`BOOL*`)
- **`numberOfFollowers`** (`int*`)

### Usage

**Lua (Direct):**
```lua
GetGroupSize(groupId, hasLeader, numberOfFollowers)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8DE69FE35CA09A45, groupId, hasLeader, numberOfFollowers)
```


---

## GET_IS_PED_RESPONDING_TO_NEGATIVE_INTERACTION

| Property | Value |
|----------|-------|
| Native Name | `GET_IS_PED_RESPONDING_TO_NEGATIVE_INTERACTION` |
| Hash | `0xA454D234E45BB6E5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `player` (Player) |

### Parameters

- **`ped`** (`Ped`)
- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsPedRespondingToNegativeInteraction(ped, player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA454D234E45BB6E5, ped, player)
```


---

## GET_IS_PED_RESPONDING_TO_POSITIVE_INTERACTION

| Property | Value |
|----------|-------|
| Native Name | `GET_IS_PED_RESPONDING_TO_POSITIVE_INTERACTION` |
| Hash | `0x9337183FDA2E9035` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `player` (Player) |

### Parameters

- **`ped`** (`Ped`)
- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsPedRespondingToPositiveInteraction(ped, player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9337183FDA2E9035, ped, player)
```


---

## GET_JACK_TARGET

| Property | Value |
|----------|-------|
| Native Name | `GET_JACK_TARGET` |
| Hash | `0x5486A79D9FBD342D` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetJackTarget(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5486A79D9FBD342D, ped)
```


---

## GET_LOOTING_PICKUP_TARGET_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `GET_LOOTING_PICKUP_TARGET_ENTITY` |
| Hash | `0x14169FA823679E41` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetLootingPickupTargetEntity(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x14169FA823679E41, ped)
```


---

## GET_MELEE_TARGET_FOR_PED

| Property | Value |
|----------|-------|
| Native Name | `GET_MELEE_TARGET_FOR_PED` |
| Hash | `0x18A3E9EE1297FD39` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetMeleeTargetForPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x18A3E9EE1297FD39, ped)
```


---

## GET_META_PED_ASSET_GUIDS

**Description:** This is a way to get what drawables a ped has equipped
Example: you are able to tell if the ped has the drawable PLAYER_ZERO_HAT_017 attached
Note: this works with non shop components, direct .ydd files.

| Property | Value |
|----------|-------|
| Native Name | `GET_META_PED_ASSET_GUIDS` |
| Hash | `0xA9C28516A6DC9D56` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `index` (int), `drawable` (Hash*), `albedo` (Hash*), `normal` (Hash*), `material` (Hash*) |

### Parameters

- **`ped`** (`Ped`)
- **`index`** (`int`)
- **`drawable`** (`Hash*`)
- **`albedo`** (`Hash*`)
- **`normal`** (`Hash*`)
- **`material`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = GetMetaPedAssetGuids(ped, index, drawable, albedo, normal, material)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA9C28516A6DC9D56, ped, index, drawable, albedo, normal, material)
```


---

## GET_META_PED_ASSET_TINT

| Property | Value |
|----------|-------|
| Native Name | `GET_META_PED_ASSET_TINT` |
| Hash | `0xE7998FEC53A33BBE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `index` (int), `pallete` (Hash*), `tint0` (int*), `tint1` (int*), `tint2` (int*) |

### Parameters

- **`ped`** (`Ped`)
- **`index`** (`int`)
- **`pallete`** (`Hash*`)
- **`tint0`** (`int*`)
- **`tint1`** (`int*`)
- **`tint2`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = GetMetaPedAssetTint(ped, index, pallete, tint0, tint1, tint2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE7998FEC53A33BBE, ped, index, pallete, tint0, tint1, tint2)
```


---

## GET_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `GET_MOUNT` |
| Hash | `0xE7E11B8DCBED1058` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetMount(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE7E11B8DCBED1058, ped)
```


---

## GET_NUM_META_PED_OUTFITS

| Property | Value |
|----------|-------|
| Native Name | `GET_NUM_META_PED_OUTFITS` |
| Hash | `0x10C70A515BC03707` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumMetaPedOutfits(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x10C70A515BC03707, ped)
```


---

## GET_PEDS_JACKER

| Property | Value |
|----------|-------|
| Native Name | `GET_PEDS_JACKER` |
| Hash | `0x9B128DC36C1E04CF` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedsJacker(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9B128DC36C1E04CF, ped)
```


---

## GET_PED_ACCURACY

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_ACCURACY` |
| Hash | `0x37F4AD56ECBC0CD6` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedAccuracy(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x37F4AD56ECBC0CD6, ped)
```


---

## GET_PED_AS_GROUP_LEADER

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_AS_GROUP_LEADER` |
| Hash | `0x5CCE68DBD5FE93EC` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `groupID` (int) |

### Parameters

- **`groupID`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedAsGroupLeader(groupID)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5CCE68DBD5FE93EC, groupID)
```


---

## GET_PED_AS_GROUP_MEMBER

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_AS_GROUP_MEMBER` |
| Hash | `0x51455483CF23ED97` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `groupID` (int), `memberNumber` (int) |

### Parameters

- **`groupID`** (`int`)
- **`memberNumber`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedAsGroupMember(groupID, memberNumber)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x51455483CF23ED97, groupID, memberNumber)
```


---

## GET_PED_BLACKBOARD_SCRIPT_BOOL

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_BLACKBOARD_SCRIPT_BOOL` |
| Hash | `0x4912DFE492DB98CD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedBlackboardScriptBool(ped, variableName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4912DFE492DB98CD, ped, variableName)
```


---

## GET_PED_BLACKBOARD_SCRIPT_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_BLACKBOARD_SCRIPT_FLOAT` |
| Hash | `0xA29FD00D45311EB7` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedBlackboardScriptFloat(ped, variableName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA29FD00D45311EB7, ped, variableName)
```


---

## GET_PED_BLACKBOARD_SCRIPT_INT

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_BLACKBOARD_SCRIPT_INT` |
| Hash | `0xB71B91B398F8F067` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedBlackboardScriptInt(ped, variableName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB71B91B398F8F067, ped, variableName)
```


---

## GET_PED_BONE_COORDS

**Description:** Gets the position of the specified bone of the specified ped.

ped: The ped to get the position of a bone from.
boneId: The ID of the bone to get the position from. This is NOT the index.
offsetX: The X-component of the offset to add to the position relative to the bone's rotation.
offsetY: The Y-component of the offset to add to the position relative to the bone's rotation.
offsetZ: The Z-component of the offset to add to the position relative to the bone's rotation.

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_BONE_COORDS` |
| Hash | `0x17C07FC640E86B4E` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `ped` (Ped), `boneId` (int), `offsetX` (float), `offsetY` (float), `offsetZ` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`boneId`** (`int`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedBoneCoords(ped, boneId, offsetX, offsetY, offsetZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x17C07FC640E86B4E, ped, boneId, offsetX, offsetY, offsetZ)
```


---

## GET_PED_BONE_INDEX

**Description:** no bone = -1

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_BONE_INDEX` |
| Hash | `0x3F428D08BE5AAE31` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `boneId` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`boneId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedBoneIndex(ped, boneId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3F428D08BE5AAE31, ped, boneId)
```


---

## GET_PED_CAUSE_OF_DEATH

**Description:** Returns the hash of the weapon/model/object that killed the ped.

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_CAUSE_OF_DEATH` |
| Hash | `0x16FFE42AB2D2DC59` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedCauseOfDeath(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x16FFE42AB2D2DC59, ped)
```


---

## GET_PED_COMBAT_MOVEMENT

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_COMBAT_MOVEMENT` |
| Hash | `0xDEA92412FCAEB3F5` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedCombatMovement(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDEA92412FCAEB3F5, ped)
```


---

## GET_PED_CONFIG_FLAG

**Description:** flagId: see SET_PED_CONFIG_FLAG

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_CONFIG_FLAG` |
| Hash | `0x7EE53118C892B513` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flagId` (int), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`flagId`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedConfigFlag(ped, flagId, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7EE53118C892B513, ped, flagId, p2)
```


---

## GET_PED_CROUCH_MOVEMENT

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_CROUCH_MOVEMENT` |
| Hash | `0xD5FE956C70FF370B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedCrouchMovement(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD5FE956C70FF370B, ped)
```


---

## GET_PED_CURRENT_MOVE_BLEND_RATIO

**Description:** Old name: _GET_PED_CURRENT_MOVEMENT_SPEED

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_CURRENT_MOVE_BLEND_RATIO` |
| Hash | `0xF60165E1D2C5370B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `speedX` (float*), `speedY` (float*) |

### Parameters

- **`ped`** (`Ped`)
- **`speedX`** (`float*`)
- **`speedY`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedCurrentMoveBlendRatio(ped, speedX, speedY)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF60165E1D2C5370B, ped, speedX, speedY)
```


---

## GET_PED_DEFENSIVE_AREA_POSITION

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_DEFENSIVE_AREA_POSITION` |
| Hash | `0x3C06B8786DD94CD1` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedDefensiveAreaPosition(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3C06B8786DD94CD1, ped, p1)
```


---

## GET_PED_GRAPPLE_STATE

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_GRAPPLE_STATE` |
| Hash | `0x2311F15D971AA680` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedGrappleState(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2311F15D971AA680, ped)
```


---

## GET_PED_GROUP_INDEX

**Description:** Returns the groupId of which the specified ped is a member of.

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_GROUP_INDEX` |
| Hash | `0xF162E133B4E7A675` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedGroupIndex(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF162E133B4E7A675, ped)
```


---

## GET_PED_IS_BEING_GRAPPLED

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_IS_BEING_GRAPPLED` |
| Hash | `0x3BDFCF25B58B0415` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedIsBeingGrappled(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3BDFCF25B58B0415, ped)
```


---

## GET_PED_IS_DOING_COMBAT_ROLL

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_IS_DOING_COMBAT_ROLL` |
| Hash | `0xC48A9EB0D499B3E5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedIsDoingCombatRoll(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC48A9EB0D499B3E5, ped)
```


---

## GET_PED_IS_GRAPPLING

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_IS_GRAPPLING` |
| Hash | `0x0E99E3BF11BB6367` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedIsGrappling(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E99E3BF11BB6367, ped)
```


---

## GET_PED_LAST_DAMAGE_BONE

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_LAST_DAMAGE_BONE` |
| Hash | `0xD75960F6BD9EA49C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `outBone` (int*) |

### Parameters

- **`ped`** (`Ped`)
- **`outBone`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedLastDamageBone(ped, outBone)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD75960F6BD9EA49C, ped, outBone)
```


---

## GET_PED_LOOT_STATUS_MP

**Description:** enum ePedLootStatus
{
	PLS_NONE,
	PLS_PRE_LOOT,
	PLS_SAMPLING,
	PLS_SKINNING
};

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_LOOT_STATUS_MP` |
| Hash | `0xC737697C41628340` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedLootStatusMp(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC737697C41628340, ped)
```


---

## GET_PED_MAX_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_MAX_HEALTH` |
| Hash | `0x4700A416E8324EF3` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedMaxHealth(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4700A416E8324EF3, ped)
```


---

## GET_PED_MONEY

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_MONEY` |
| Hash | `0x3F69145BBA87BAE7` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedMoney(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3F69145BBA87BAE7, ped)
```


---

## GET_PED_MOTION_FOCUS_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_MOTION_FOCUS_ENTITY` |
| Hash | `0x243E1B4607040057` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedMotionFocusEntity(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x243E1B4607040057, ped)
```


---

## GET_PED_NEARBY_PEDS

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_NEARBY_PEDS` |
| Hash | `0x23F8F5FC7E8C4A6B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `sizeAndPeds` (Any*), `ignoredPedType` (int), `p3` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`sizeAndPeds`** (`Any*`)
- **`ignoredPedType`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedNearbyPeds(ped, sizeAndPeds, ignoredPedType, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x23F8F5FC7E8C4A6B, ped, sizeAndPeds, ignoredPedType, p3)
```


---

## GET_PED_NEARBY_VEHICLES

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_NEARBY_VEHICLES` |
| Hash | `0xCFF869CBFA210D82` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `sizeAndVehs` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`sizeAndVehs`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedNearbyVehicles(ped, sizeAndVehs)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCFF869CBFA210D82, ped, sizeAndVehs)
```


---

## GET_PED_RELATIONSHIP_GROUP_DEFAULT_HASH

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_RELATIONSHIP_GROUP_DEFAULT_HASH` |
| Hash | `0x42FDD0F017B1E38E` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedRelationshipGroupDefaultHash(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x42FDD0F017B1E38E, ped)
```


---

## GET_PED_RELATIONSHIP_GROUP_HASH

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_RELATIONSHIP_GROUP_HASH` |
| Hash | `0x7DBDD04862D95F04` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedRelationshipGroupHash(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7DBDD04862D95F04, ped)
```


---

## GET_PED_RESET_FLAG

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_RESET_FLAG` |
| Hash | `0xAF9E59B1B1FBF2A0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flagId` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`flagId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedResetFlag(ped, flagId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAF9E59B1B1FBF2A0, ped, flagId)
```


---

## GET_PED_SOURCE_OF_DEATH

**Description:** Returns the entity that killed the ped

It is best to check if the Ped is dead before asking for its killer.

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_SOURCE_OF_DEATH` |
| Hash | `0x93C8B64DEB84728C` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedSourceOfDeath(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x93C8B64DEB84728C, ped)
```


---

## GET_PED_STEALTH_MOVEMENT

**Description:** Returns whether the entity is in stealth mode

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_STEALTH_MOVEMENT` |
| Hash | `0x7C2AC9CA66575FBF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedStealthMovement(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7C2AC9CA66575FBF, ped)
```


---

## GET_PED_TIME_OF_DEATH

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_TIME_OF_DEATH` |
| Hash | `0x1E98817B311AE98A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedTimeOfDeath(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1E98817B311AE98A, ped)
```


---

## GET_PED_TO_PLAYER_WEAPON_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_TO_PLAYER_WEAPON_DAMAGE_MODIFIER` |
| Hash | `0x936E7CAD0AE2EE14` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedToPlayerWeaponDamageModifier(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x936E7CAD0AE2EE14, ped)
```


---

## GET_PED_TYPE

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_TYPE` |
| Hash | `0xFF059E1E4C01E63C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedType(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFF059E1E4C01E63C, ped)
```


---

## GET_PLAYER_PED_IS_FOLLOWING

| Property | Value |
|----------|-------|
| Native Name | `GET_PLAYER_PED_IS_FOLLOWING` |
| Hash | `0x6A3975DEA89F9A17` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPlayerPedIsFollowing(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6A3975DEA89F9A17, ped)
```


---

## GET_RELATIONSHIP_BETWEEN_GROUPS

| Property | Value |
|----------|-------|
| Native Name | `GET_RELATIONSHIP_BETWEEN_GROUPS` |
| Hash | `0x9E6B70061662AE5C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `group1` (Hash), `group2` (Hash) |

### Parameters

- **`group1`** (`Hash`)
- **`group2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetRelationshipBetweenGroups(group1, group2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9E6B70061662AE5C, group1, group2)
```


---

## GET_RELATIONSHIP_BETWEEN_PEDS

| Property | Value |
|----------|-------|
| Native Name | `GET_RELATIONSHIP_BETWEEN_PEDS` |
| Hash | `0xEBA5AD3A0EAF7121` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped1` (Ped), `ped2` (Ped) |

### Parameters

- **`ped1`** (`Ped`)
- **`ped2`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetRelationshipBetweenPeds(ped1, ped2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEBA5AD3A0EAF7121, ped1, ped2)
```


---

## GET_SEAT_PED_IS_TRYING_TO_ENTER

| Property | Value |
|----------|-------|
| Native Name | `GET_SEAT_PED_IS_TRYING_TO_ENTER` |
| Hash | `0x6F4C85ACD641BCD2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetSeatPedIsTryingToEnter(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6F4C85ACD641BCD2, ped)
```


---

*End of PED natives part 2*
