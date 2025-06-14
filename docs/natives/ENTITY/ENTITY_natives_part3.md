# ENTITY Natives - Part 3 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ENTITY  
**Natives in this file:** 50  
**Total natives in namespace:** 268  
**Generated from:** RDR3natives JSON data

---

## PLACE_ENTITY_ON_GROUND_PROPERLY

| Property | Value |
|----------|-------|
| Native Name | `PLACE_ENTITY_ON_GROUND_PROPERLY` |
| Hash | `0x9587913B9E772D29` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = PlaceEntityOnGroundProperly(entity, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9587913B9E772D29, entity, p1)
```


---

## PLAY_ENTITY_ANIM

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/animations

| Property | Value |
|----------|-------|
| Native Name | `PLAY_ENTITY_ANIM` |
| Hash | `0xDC6D22FAB76D4874` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `animName` (const char*), `animDict` (const char*), `p3` (float), `loop` (BOOL), `stayInAnim` (BOOL), `p6` (BOOL), `delta` (float), `bitset` (Any) |

### Parameters

- **`entity`** (`Entity`)
- **`animName`** (`const char*`)
- **`animDict`** (`const char*`)
- **`p3`** (`float`)
- **`loop`** (`BOOL`)
- **`stayInAnim`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`delta`** (`float`)
- **`bitset`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = PlayEntityAnim(entity, animName, animDict, p3, loop, stayInAnim, p6, delta, bitset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDC6D22FAB76D4874, entity, animName, animDict, p3, loop, stayInAnim, p6, delta, bitset)
```


---

## REMOVE_FORCED_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_FORCED_OBJECT` |
| Hash | `0x553FA683F2BCD814` |
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
RemoveForcedObject(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x553FA683F2BCD814, p0, p1, p2, p3, p4)
```


---

## REMOVE_MODEL_HIDE

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_MODEL_HIDE` |
| Hash | `0x3F38A98576F6213A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
RemoveModelHide(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3F38A98576F6213A, p0, p1, p2, p3, p4, p5)
```


---

## REMOVE_MODEL_SWAP

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_MODEL_SWAP` |
| Hash | `0x824E1C26A14CB817` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `originalModel` (Hash), `newModel` (Hash), `p6` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`originalModel`** (`Hash`)
- **`newModel`** (`Hash`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemoveModelSwap(x, y, z, radius, originalModel, newModel, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x824E1C26A14CB817, x, y, z, radius, originalModel, newModel, p6)
```


---

## RESET_ENTITY_ALPHA

| Property | Value |
|----------|-------|
| Native Name | `RESET_ENTITY_ALPHA` |
| Hash | `0x744B9EF44779D9AB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
ResetEntityAlpha(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x744B9EF44779D9AB, entity)
```


---

## SCRIPT_OVERRIDE_ENTITY_LOOT_TABLE_PERMANENT

**Description:** Sets the loot table an entity will carry. Returns true if loot table has been successfully set. Returns false if entity is not a ped or object.
https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS/loot_rewards.lua

| Property | Value |
|----------|-------|
| Native Name | `SCRIPT_OVERRIDE_ENTITY_LOOT_TABLE_PERMANENT` |
| Hash | `0x8C03CD6B5E0E85E8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `lootTable` (Hash) |

### Parameters

- **`entity`** (`Entity`)
- **`lootTable`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ScriptOverrideEntityLootTablePermanent(entity, lootTable)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8C03CD6B5E0E85E8, entity, lootTable)
```


---

## SET_CAN_AUTO_VAULT_ON_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `SET_CAN_AUTO_VAULT_ON_ENTITY` |
| Hash | `0x80646744FA88F9D7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCanAutoVaultOnEntity(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x80646744FA88F9D7, entity, toggle)
```


---

## SET_CAN_CLIMB_ON_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `SET_CAN_CLIMB_ON_ENTITY` |
| Hash | `0x24AED2A608F93C4C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCanClimbOnEntity(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x24AED2A608F93C4C, entity, toggle)
```


---

## SET_ENTITY_ALPHA

**Description:** skin - everything alpha except skin
Set entity alpha level. Ranging from 0 to 255 but changes occur after every 20 percent (after every 51).

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_ALPHA` |
| Hash | `0x0DF7692B1D9E7BA7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `alphaLevel` (int), `skin` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`alphaLevel`** (`int`)
- **`skin`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityAlpha(entity, alphaLevel, skin)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0DF7692B1D9E7BA7, entity, alphaLevel, skin)
```


---

## SET_ENTITY_ALWAYS_PRERENDER

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_ALWAYS_PRERENDER` |
| Hash | `0xACAD101E1FB66689` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityAlwaysPrerender(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xACAD101E1FB66689, entity, toggle)
```


---

## SET_ENTITY_AS_MISSION_ENTITY

**Description:** Makes the specified entity (ped, vehicle or object) persistent. Persistent entities will not automatically be removed by the engine.

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_AS_MISSION_ENTITY` |
| Hash | `0xDC19C288082E586E` |
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
SetEntityAsMissionEntity(entity, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDC19C288082E586E, entity, p1, p2)
```


---

## SET_ENTITY_AS_NO_LONGER_NEEDED

**Description:** Marks the specified entity (ped, vehicle or object) as no longer needed.
Entities marked as no longer needed, will be deleted as the engine sees fit.

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_AS_NO_LONGER_NEEDED` |
| Hash | `0x4971D2F8162B9674` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity*) |

### Parameters

- **`entity`** (`Entity*`)

### Usage

**Lua (Direct):**
```lua
SetEntityAsNoLongerNeeded(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4971D2F8162B9674, entity)
```


---

## SET_ENTITY_CAN_BE_DAMAGED

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_CAN_BE_DAMAGED` |
| Hash | `0x0D06D522B90E861F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityCanBeDamaged(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0D06D522B90E861F, entity, toggle)
```


---

## SET_ENTITY_CAN_BE_DAMAGED_BY_RELATIONSHIP_GROUP

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_CAN_BE_DAMAGED_BY_RELATIONSHIP_GROUP` |
| Hash | `0x0EF1AFB18649E015` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `bCanBeDamaged` (BOOL), `relGroup` (Hash) |

### Parameters

- **`entity`** (`Entity`)
- **`bCanBeDamaged`** (`BOOL`)
- **`relGroup`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetEntityCanBeDamagedByRelationshipGroup(entity, bCanBeDamaged, relGroup)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0EF1AFB18649E015, entity, bCanBeDamaged, relGroup)
```


---

## SET_ENTITY_CAN_BE_TARGETED_WITHOUT_LOS

**Description:** Sets whether the entity can be targeted without being in line-of-sight.

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_CAN_BE_TARGETED_WITHOUT_LOS` |
| Hash | `0x6D09F32E284D0FB7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityCanBeTargetedWithoutLos(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D09F32E284D0FB7, entity, toggle)
```


---

## SET_ENTITY_COLLISION

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_COLLISION` |
| Hash | `0xF66F820909453B8C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL), `keepPhysics` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)
- **`keepPhysics`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityCollision(entity, toggle, keepPhysics)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF66F820909453B8C, entity, toggle, keepPhysics)
```


---

## SET_ENTITY_COMPLETELY_DISABLE_COLLISION

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_COMPLETELY_DISABLE_COLLISION` |
| Hash | `0xE0580EC84813875A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL), `keepPhysics` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)
- **`keepPhysics`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityCompletelyDisableCollision(entity, toggle, keepPhysics)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0580EC84813875A, entity, toggle, keepPhysics)
```


---

## SET_ENTITY_COORDS

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_COORDS` |
| Hash | `0x06843DA7060A026B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `xPos` (float), `yPos` (float), `zPos` (float), `xAxis` (BOOL), `yAxis` (BOOL), `zAxis` (BOOL), `clearArea` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`xAxis`** (`BOOL`)
- **`yAxis`** (`BOOL`)
- **`zAxis`** (`BOOL`)
- **`clearArea`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityCoords(entity, xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06843DA7060A026B, entity, xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea)
```


---

## SET_ENTITY_COORDS_NO_OFFSET

**Description:** Axis - Invert Axis Flags

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_COORDS_NO_OFFSET` |
| Hash | `0x239A3351AC1DA385` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `xPos` (float), `yPos` (float), `zPos` (float), `xAxis` (BOOL), `yAxis` (BOOL), `zAxis` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`xAxis`** (`BOOL`)
- **`yAxis`** (`BOOL`)
- **`zAxis`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityCoordsNoOffset(entity, xPos, yPos, zPos, xAxis, yAxis, zAxis)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x239A3351AC1DA385, entity, xPos, yPos, zPos, xAxis, yAxis, zAxis)
```


---

## SET_ENTITY_DYNAMIC

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_DYNAMIC` |
| Hash | `0xFBFC4473F66CE344` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityDynamic(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFBFC4473F66CE344, entity, toggle)
```


---

## SET_ENTITY_HAS_GRAVITY

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_HAS_GRAVITY` |
| Hash | `0x0CEDB728A1083FA7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityHasGravity(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0CEDB728A1083FA7, entity, toggle)
```


---

## SET_ENTITY_HEADING

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_HEADING` |
| Hash | `0xCF2B9C0645C4651B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `heading` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`heading`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetEntityHeading(entity, heading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCF2B9C0645C4651B, entity, heading)
```


---

## SET_ENTITY_HEALTH

**Description:** Sets the entity's health. healthAmount sets the health value to that, and sets the maximum health core value. Setting healthAmount to 0 will kill the entity. entityKilledBy parameter can also be 0

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_HEALTH` |
| Hash | `0xAC2767ED8BDFAB15` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `healthAmount` (int), `entityKilledBy` (Entity) |

### Parameters

- **`entity`** (`Entity`)
- **`healthAmount`** (`int`)
- **`entityKilledBy`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
SetEntityHealth(entity, healthAmount, entityKilledBy)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAC2767ED8BDFAB15, entity, healthAmount, entityKilledBy)
```


---

## SET_ENTITY_INVINCIBLE

**Description:** Sets a ped or an object totally invincible. It doesn't take any kind of damage. Peds will not ragdoll on explosions.

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_INVINCIBLE` |
| Hash | `0xA5C38736C426FCB8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityInvincible(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA5C38736C426FCB8, entity, toggle)
```


---

## SET_ENTITY_IS_TARGET_PRIORITY

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_IS_TARGET_PRIORITY` |
| Hash | `0x0A5D170C44CB2189` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL), `p2` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetEntityIsTargetPriority(entity, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0A5D170C44CB2189, entity, p1, p2)
```


---

## SET_ENTITY_LOAD_COLLISION_FLAG

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_LOAD_COLLISION_FLAG` |
| Hash | `0x9B9EE31AED48072E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityLoadCollisionFlag(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9B9EE31AED48072E, entity, toggle)
```


---

## SET_ENTITY_LOD_DIST

**Description:** LOD distance can be 0 to 0xFFFF (higher values will result in 0xFFFF) as it is actually stored as a 16-bit value (aka uint16_t).

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_LOD_DIST` |
| Hash | `0x5FB407F0A7C877BF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `value` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetEntityLodDist(entity, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5FB407F0A7C877BF, entity, value)
```


---

## SET_ENTITY_MAX_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_MAX_HEALTH` |
| Hash | `0x166E7CF68597D8B5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `value` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetEntityMaxHealth(entity, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x166E7CF68597D8B5, entity, value)
```


---

## SET_ENTITY_MOTION_BLUR

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_MOTION_BLUR` |
| Hash | `0x516C6ABD18322B63` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityMotionBlur(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x516C6ABD18322B63, entity, toggle)
```


---

## SET_ENTITY_NOWEAPONDECALS

**Description:** Old name: _SET_ENTITY_DECALS_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_NOWEAPONDECALS` |
| Hash | `0xC64E597783BE9A1D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityNoweapondecals(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC64E597783BE9A1D, entity, toggle)
```


---

## SET_ENTITY_NO_COLLISION_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_NO_COLLISION_ENTITY` |
| Hash | `0xE037BF068223C38D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity1` (Entity), `entity2` (Entity), `thisFrameOnly` (BOOL) |

### Parameters

- **`entity1`** (`Entity`)
- **`entity2`** (`Entity`)
- **`thisFrameOnly`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityNoCollisionEntity(entity1, entity2, thisFrameOnly)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE037BF068223C38D, entity1, entity2, thisFrameOnly)
```


---

## SET_ENTITY_ONLY_DAMAGED_BY_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_ONLY_DAMAGED_BY_PLAYER` |
| Hash | `0x473598683095D430` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityOnlyDamagedByPlayer(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x473598683095D430, entity, toggle)
```


---

## SET_ENTITY_ONLY_DAMAGED_BY_RELATIONSHIP_GROUP

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_ONLY_DAMAGED_BY_RELATIONSHIP_GROUP` |
| Hash | `0x6C1F6AA2F0ADD104` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL), `relationshipGroup` (Hash) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)
- **`relationshipGroup`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetEntityOnlyDamagedByRelationshipGroup(entity, p1, relationshipGroup)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C1F6AA2F0ADD104, entity, p1, relationshipGroup)
```


---

## SET_ENTITY_PROOFS

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/AI/ENTITY_PROOFS
BOOL p2: handles an additional special proofs flag, so it simply indicates whether it should be enabled or disabled, not sure what exactly it proofs the entity from though

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_PROOFS` |
| Hash | `0xFAEE099C6F890BB8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `proofsBitset` (int), `specialFlag` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`proofsBitset`** (`int`)
- **`specialFlag`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityProofs(entity, proofsBitset, specialFlag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFAEE099C6F890BB8, entity, proofsBitset, specialFlag)
```


---

## SET_ENTITY_QUATERNION

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_QUATERNION` |
| Hash | `0x100E7007D13E3687` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `x` (float), `y` (float), `z` (float), `w` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`w`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetEntityQuaternion(entity, x, y, z, w)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x100E7007D13E3687, entity, x, y, z, w)
```


---

## SET_ENTITY_RENDER_SCORCHED

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_RENDER_SCORCHED` |
| Hash | `0x85B8A7534E44BC23` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityRenderScorched(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x85B8A7534E44BC23, entity, toggle)
```


---

## SET_ENTITY_REQUIRES_MORE_EXPENSIVE_RIVER_CHECK

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_REQUIRES_MORE_EXPENSIVE_RIVER_CHECK` |
| Hash | `0x850C940EE3E7B8B5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityRequiresMoreExpensiveRiverCheck(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x850C940EE3E7B8B5, entity, toggle)
```


---

## SET_ENTITY_ROTATION

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_ROTATION` |
| Hash | `0x9CC8314DFEDE441E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `pitch` (float), `roll` (float), `yaw` (float), `rotationOrder` (int), `p5` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`pitch`** (`float`)
- **`roll`** (`float`)
- **`yaw`** (`float`)
- **`rotationOrder`** (`int`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityRotation(entity, pitch, roll, yaw, rotationOrder, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9CC8314DFEDE441E, entity, pitch, roll, yaw, rotationOrder, p5)
```


---

## SET_ENTITY_SHOULD_FREEZE_WAITING_ON_COLLISION

**Description:** Old name: _SET_ENTITY_CLEANUP_BY_ENGINE

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_SHOULD_FREEZE_WAITING_ON_COLLISION` |
| Hash | `0x740CB4F3F602C9F4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityShouldFreezeWaitingOnCollision(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x740CB4F3F602C9F4, entity, toggle)
```


---

## SET_ENTITY_VELOCITY

**Description:** Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_VELOCITY` |
| Hash | `0x1C99BB7B6E96D16F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetEntityVelocity(entity, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1C99BB7B6E96D16F, entity, x, y, z)
```


---

## SET_ENTITY_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_VISIBLE` |
| Hash | `0x1794B4FCC84D812F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetEntityVisible(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1794B4FCC84D812F, entity, toggle)
```


---

## SET_OBJECT_AS_NO_LONGER_NEEDED

**Description:** This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.

| Property | Value |
|----------|-------|
| Native Name | `SET_OBJECT_AS_NO_LONGER_NEEDED` |
| Hash | `0x3AE22DEB5BA5A3E6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object*) |

### Parameters

- **`object`** (`Object*`)

### Usage

**Lua (Direct):**
```lua
SetObjectAsNoLongerNeeded(object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3AE22DEB5BA5A3E6, object)
```


---

## SET_PED_AS_NO_LONGER_NEEDED

**Description:** This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_AS_NO_LONGER_NEEDED` |
| Hash | `0x2595DD4236549CE3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped*) |

### Parameters

- **`ped`** (`Ped*`)

### Usage

**Lua (Direct):**
```lua
SetPedAsNoLongerNeeded(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2595DD4236549CE3, ped)
```


---

## SET_VEHICLE_AS_NO_LONGER_NEEDED

**Description:** This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_AS_NO_LONGER_NEEDED` |
| Hash | `0x629BFA74418D6239` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle*) |

### Parameters

- **`vehicle`** (`Vehicle*`)

### Usage

**Lua (Direct):**
```lua
SetVehicleAsNoLongerNeeded(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x629BFA74418D6239, vehicle)
```


---

## STOP_ENTITY_ANIM

| Property | Value |
|----------|-------|
| Native Name | `STOP_ENTITY_ANIM` |
| Hash | `0x786591D986DE9159` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `entity` (Entity), `animation` (const char*), `animGroup` (const char*), `p3` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`animation`** (`const char*`)
- **`animGroup`** (`const char*`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = StopEntityAnim(entity, animation, animGroup, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x786591D986DE9159, entity, animation, animGroup, p3)
```


---

## WOULD_ENTITY_BE_OCCLUDED

| Property | Value |
|----------|-------|
| Native Name | `WOULD_ENTITY_BE_OCCLUDED` |
| Hash | `0x3546FAB293FF2981` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entityModelHash` (Hash), `x` (float), `y` (float), `z` (float), `p4` (BOOL) |

### Parameters

- **`entityModelHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = WouldEntityBeOccluded(entityModelHash, x, y, z, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3546FAB293FF2981, entityModelHash, x, y, z, p4)
```


---

## _0x002AAC783ED323ED

| Property | Value |
|----------|-------|
| Native Name | `_0x002AAC783ED323ED` |
| Hash | `0x002AAC783ED323ED` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x002AAC783ED323ED(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x002AAC783ED323ED, p0, p1)
```


---

## _0x007AAC783ED323ED

| Property | Value |
|----------|-------|
| Native Name | `_0x007AAC783ED323ED` |
| Hash | `0x007AAC783ED323ED` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x007AAC783ED323ED(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x007AAC783ED323ED, p0, p1, p2)
```


---

## _0x0939E773925C4719

| Property | Value |
|----------|-------|
| Native Name | `_0x0939E773925C4719` |
| Hash | `0x0939E773925C4719` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x0939E773925C4719()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0939E773925C4719, )
```


---

*End of ENTITY natives part 3*
