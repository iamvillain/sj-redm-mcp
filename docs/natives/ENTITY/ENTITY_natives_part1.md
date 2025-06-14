# ENTITY Natives - Part 1 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ENTITY  
**Natives in this file:** 50  
**Total natives in namespace:** 268  
**Generated from:** RDR3natives JSON data

---

## APPLY_FORCE_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `APPLY_FORCE_TO_ENTITY` |
| Hash | `0xF15E8F5D333F09C4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `forceFlags` (int), `x` (float), `y` (float), `z` (float), `offX` (float), `offY` (float), `offZ` (float), `boneIndex` (int), `isDirectionRel` (BOOL), `ignoreUpVec` (BOOL), `isForceRel` (BOOL), `p12` (BOOL), `p13` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`forceFlags`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`offX`** (`float`)
- **`offY`** (`float`)
- **`offZ`** (`float`)
- **`boneIndex`** (`int`)
- **`isDirectionRel`** (`BOOL`)
- **`ignoreUpVec`** (`BOOL`)
- **`isForceRel`** (`BOOL`)
- **`p12`** (`BOOL`)
- **`p13`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ApplyForceToEntity(entity, forceFlags, x, y, z, offX, offY, offZ, boneIndex, isDirectionRel, ignoreUpVec, isForceRel, p12, p13)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF15E8F5D333F09C4, entity, forceFlags, x, y, z, offX, offY, offZ, boneIndex, isDirectionRel, ignoreUpVec, isForceRel, p12, p13)
```


---

## APPLY_FORCE_TO_ENTITY_CENTER_OF_MASS

**Description:** p6/relative - makes the xyz force not relative to world coords, but to something else
p7/highForce - setting false will make the force really low

| Property | Value |
|----------|-------|
| Native Name | `APPLY_FORCE_TO_ENTITY_CENTER_OF_MASS` |
| Hash | `0x31DA7CEC5334DB37` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `forceType` (int), `x` (float), `y` (float), `z` (float), `component` (int), `isDirectionRel` (BOOL), `isForceRel` (BOOL), `p8` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`forceType`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`component`** (`int`)
- **`isDirectionRel`** (`BOOL`)
- **`isForceRel`** (`BOOL`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ApplyForceToEntityCenterOfMass(entity, forceType, x, y, z, component, isDirectionRel, isForceRel, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x31DA7CEC5334DB37, entity, forceType, x, y, z, component, isDirectionRel, isForceRel, p8)
```


---

## ATTACH_ENTITY_TO_ENTITY

**Description:** Attaches entity1 to bone (boneIndex) of entity2.

boneIndex - this is different to boneID, use GET_PED_BONE_INDEX to get the index from the ID. use the index for attaching to specific bones. entity1 will be attached to entity2's centre if bone index given doesn't correspond to bone indexes for that entity type.
https://github.com/femga/rdr3_discoveries/tree/master/boneNames

useSoftPinning - if set to false attached entity will not detach when fixed
collision - controls collision between the two entities (FALSE disables collision).
isPed - pitch doesn't work when false and roll will only work on negative numbers (only peds)
vertexIndex - position of vertex
fixedRot - if false it ignores entity vector

| Property | Value |
|----------|-------|
| Native Name | `ATTACH_ENTITY_TO_ENTITY` |
| Hash | `0x6B9BBD38AB0796DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity1` (Entity), `entity2` (Entity), `boneIndex` (int), `xPos` (float), `yPos` (float), `zPos` (float), `xRot` (float), `yRot` (float), `zRot` (float), `p9` (BOOL), `useSoftPinning` (BOOL), `collision` (BOOL), `isPed` (BOOL), `vertexIndex` (int), `fixedRot` (BOOL), `p15` (BOOL), `p16` (BOOL) |

### Parameters

- **`entity1`** (`Entity`)
- **`entity2`** (`Entity`)
- **`boneIndex`** (`int`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`p9`** (`BOOL`)
- **`useSoftPinning`** (`BOOL`)
- **`collision`** (`BOOL`)
- **`isPed`** (`BOOL`)
- **`vertexIndex`** (`int`)
- **`fixedRot`** (`BOOL`)
- **`p15`** (`BOOL`)
- **`p16`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AttachEntityToEntity(entity1, entity2, boneIndex, xPos, yPos, zPos, xRot, yRot, zRot, p9, useSoftPinning, collision, isPed, vertexIndex, fixedRot, p15, p16)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6B9BBD38AB0796DF, entity1, entity2, boneIndex, xPos, yPos, zPos, xRot, yRot, zRot, p9, useSoftPinning, collision, isPed, vertexIndex, fixedRot, p15, p16)
```


---

## ATTACH_ENTITY_TO_ENTITY_PHYSICALLY

| Property | Value |
|----------|-------|
| Native Name | `ATTACH_ENTITY_TO_ENTITY_PHYSICALLY` |
| Hash | `0xB629A43CA1643481` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity1` (Entity), `entity2` (Entity), `p2` (int), `boneIndex` (int), `offsetX` (float), `offsetY` (float), `offsetZ` (float), `p7` (float), `p8` (float), `p9` (float), `p10` (float), `p11` (float), `p12` (float), `p13` (float), `p14` (BOOL), `p15` (BOOL), `p16` (BOOL), `p17` (BOOL), `p18` (int), `p19` (BOOL), `p20` (float), `p21` (float) |

### Parameters

- **`entity1`** (`Entity`)
- **`entity2`** (`Entity`)
- **`p2`** (`int`)
- **`boneIndex`** (`int`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`float`)
- **`p10`** (`float`)
- **`p11`** (`float`)
- **`p12`** (`float`)
- **`p13`** (`float`)
- **`p14`** (`BOOL`)
- **`p15`** (`BOOL`)
- **`p16`** (`BOOL`)
- **`p17`** (`BOOL`)
- **`p18`** (`int`)
- **`p19`** (`BOOL`)
- **`p20`** (`float`)
- **`p21`** (`float`)

### Usage

**Lua (Direct):**
```lua
AttachEntityToEntityPhysically(entity1, entity2, p2, boneIndex, offsetX, offsetY, offsetZ, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB629A43CA1643481, entity1, entity2, p2, boneIndex, offsetX, offsetY, offsetZ, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21)
```


---

## CLEAR_ENTITY_LAST_DAMAGE_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_ENTITY_LAST_DAMAGE_ENTITY` |
| Hash | `0xBB19AC7D4DCEFD0F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
ClearEntityLastDamageEntity(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB19AC7D4DCEFD0F, entity)
```


---

## CREATE_FORCED_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `CREATE_FORCED_OBJECT` |
| Hash | `0x0961A905AFBC34C7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (Any), `modelHash` (Hash), `p5` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`Any`)
- **`modelHash`** (`Hash`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
CreateForcedObject(x, y, z, p3, modelHash, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0961A905AFBC34C7, x, y, z, p3, modelHash, p5)
```


---

## CREATE_MODEL_HIDE

| Property | Value |
|----------|-------|
| Native Name | `CREATE_MODEL_HIDE` |
| Hash | `0x069848B3FB3C4426` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `model` (Hash), `p5` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`model`** (`Hash`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
CreateModelHide(x, y, z, radius, model, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x069848B3FB3C4426, x, y, z, radius, model, p5)
```


---

## CREATE_MODEL_HIDE_EXCLUDING_SCRIPT_OBJECTS

| Property | Value |
|----------|-------|
| Native Name | `CREATE_MODEL_HIDE_EXCLUDING_SCRIPT_OBJECTS` |
| Hash | `0xD136090A9AAAB17D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `model` (Hash), `p5` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`model`** (`Hash`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
CreateModelHideExcludingScriptObjects(x, y, z, radius, model, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD136090A9AAAB17D, x, y, z, radius, model, p5)
```


---

## CREATE_MODEL_SWAP

**Description:** Only works with objects!

| Property | Value |
|----------|-------|
| Native Name | `CREATE_MODEL_SWAP` |
| Hash | `0x10B2218320B6F5AC` |
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
CreateModelSwap(x, y, z, radius, originalModel, newModel, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x10B2218320B6F5AC, x, y, z, radius, originalModel, newModel, p6)
```


---

## DELETE_ENTITY

**Description:** Deletes the specified entity, then sets the handle pointed to by the pointer to NULL.

| Property | Value |
|----------|-------|
| Native Name | `DELETE_ENTITY` |
| Hash | `0x4CD38C78BD19A497` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity*) |

### Parameters

- **`entity`** (`Entity*`)

### Usage

**Lua (Direct):**
```lua
DeleteEntity(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4CD38C78BD19A497, entity)
```


---

## DETACH_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `DETACH_ENTITY` |
| Hash | `0x64CDE9D6BF8ECAD3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL), `collision` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)
- **`collision`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DetachEntity(entity, p1, collision)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x64CDE9D6BF8ECAD3, entity, p1, collision)
```


---

## DOES_ENTITY_BELONG_TO_THIS_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `DOES_ENTITY_BELONG_TO_THIS_SCRIPT` |
| Hash | `0x622B1980CBE13332` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = DoesEntityBelongToThisScript(entity, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x622B1980CBE13332, entity, p1)
```


---

## DOES_ENTITY_EXIST

**Description:** Checks if the Entity exists

| Property | Value |
|----------|-------|
| Native Name | `DOES_ENTITY_EXIST` |
| Hash | `0xD42BD6EB2E0F1677` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = DoesEntityExist(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD42BD6EB2E0F1677, entity)
```


---

## DOES_ENTITY_HAVE_DRAWABLE

| Property | Value |
|----------|-------|
| Native Name | `DOES_ENTITY_HAVE_DRAWABLE` |
| Hash | `0x20487F0DA9AF164A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = DoesEntityHaveDrawable(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x20487F0DA9AF164A, entity)
```


---

## DOES_ENTITY_HAVE_PHYSICS

| Property | Value |
|----------|-------|
| Native Name | `DOES_ENTITY_HAVE_PHYSICS` |
| Hash | `0xA512B3F1B2A0B51C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = DoesEntityHavePhysics(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA512B3F1B2A0B51C, entity)
```


---

## FIND_ANIM_EVENT_PHASE

| Property | Value |
|----------|-------|
| Native Name | `FIND_ANIM_EVENT_PHASE` |
| Hash | `0x42718CC559BD7776` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `animDictionary` (const char*), `animName` (const char*), `p2` (const char*), `p3` (Any*), `p4` (Any*) |

### Parameters

- **`animDictionary`** (`const char*`)
- **`animName`** (`const char*`)
- **`p2`** (`const char*`)
- **`p3`** (`Any*`)
- **`p4`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = FindAnimEventPhase(animDictionary, animName, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x42718CC559BD7776, animDictionary, animName, p2, p3, p4)
```


---

## FORCE_ENTITY_AI_AND_ANIMATION_UPDATE

| Property | Value |
|----------|-------|
| Native Name | `FORCE_ENTITY_AI_AND_ANIMATION_UPDATE` |
| Hash | `0x4C9E96473D4F1A88` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ForceEntityAiAndAnimationUpdate(entity, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4C9E96473D4F1A88, entity, p1)
```


---

## FREEZE_ENTITY_POSITION

| Property | Value |
|----------|-------|
| Native Name | `FREEZE_ENTITY_POSITION` |
| Hash | `0x7D9EFB7AD6B19754` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `toggle` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
FreezeEntityPosition(entity, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7D9EFB7AD6B19754, entity, toggle)
```


---

## GET_ANIM_DURATION

| Property | Value |
|----------|-------|
| Native Name | `GET_ANIM_DURATION` |
| Hash | `0x9FFAF4940A54CC09` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `animDict` (const char*), `animName` (const char*) |

### Parameters

- **`animDict`** (`const char*`)
- **`animName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetAnimDuration(animDict, animName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9FFAF4940A54CC09, animDict, animName)
```


---

## GET_CARRIABLE_ENTITY_STATE

**Description:** enum eCarriableState
{
	CARRIABLE_STATE_NONE,
	CARRIABLE_STATE_TRANSITIONING_TO_HOGTIED,
	CARRIABLE_STATE_CARRIABLE_INTRO,
	CARRIABLE_STATE_CARRIABLE,
	CARRIABLE_STATE_BEING_PICKED_UP_FROM_GROUND,
	CARRIABLE_STATE_CARRIED_BY_HUMAN,
	CARRIABLE_STATE_BEING_PLACED_ON_GROUND,
	CARRIABLE_STATE_CARRIED_BY_MOUNT,
	CARRIABLE_STATE_BEING_PLACED_ON_MOUNT,
	CARRIABLE_STATE_BEING_PICKED_UP_FROM_MOUNT,
	CARRIABLE_STATE_BEING_CUT_FREE,
	CARRIABLE_STATE_BEING_PLACED_ON_GROUND_ESCAPE,
	CARRIABLE_STATE_BEING_PLACED_IN_VEHICLE
};

| Property | Value |
|----------|-------|
| Native Name | `GET_CARRIABLE_ENTITY_STATE` |
| Hash | `0x61914209C36EFDDB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetCarriableEntityState(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x61914209C36EFDDB, entity)
```


---

## GET_ENTITY_ALPHA

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_ALPHA` |
| Hash | `0x1BB501624FAF2BEA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityAlpha(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1BB501624FAF2BEA, entity)
```


---

## GET_ENTITY_ATTACHED_TO

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_ATTACHED_TO` |
| Hash | `0x56D713888A566481` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityAttachedTo(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x56D713888A566481, entity)
```


---

## GET_ENTITY_BONE_INDEX_BY_NAME

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_BONE_INDEX_BY_NAME` |
| Hash | `0xBACA8FE9C76C124E` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity), `boneName` (const char*) |

### Parameters

- **`entity`** (`Entity`)
- **`boneName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityBoneIndexByName(entity, boneName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBACA8FE9C76C124E, entity, boneName)
```


---

## GET_ENTITY_COLLISION_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_COLLISION_DISABLED` |
| Hash | `0xAA2FADD30F45A9DA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityCollisionDisabled(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAA2FADD30F45A9DA, entity)
```


---

## GET_ENTITY_COORDS

**Description:** Gets the current coordinates for a specified entity.
`entity` = The entity to get the coordinates from.
`alive` = Unused by the game, potentially used by debug builds in order to assert whether or not an entity was alive.

If entity is a ped and it's in a vehicle or on a mount the coords of that entity are returned. Set 'realCoords' to true when you need the true ped coords.

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_COORDS` |
| Hash | `0xA86D5F069399F44D` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `entity` (Entity), `alive` (BOOL), `realCoords` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`alive`** (`BOOL`)
- **`realCoords`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityCoords(entity, alive, realCoords)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA86D5F069399F44D, entity, alive, realCoords)
```


---

## GET_ENTITY_FORWARD_VECTOR

**Description:** Gets the entity's forward vector in XY(Z) eulers.

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_FORWARD_VECTOR` |
| Hash | `0x2412D9C05BB09B97` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityForwardVector(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2412D9C05BB09B97, entity)
```


---

## GET_ENTITY_FORWARD_X

**Description:** Gets the X-component of the entity's forward vector.

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_FORWARD_X` |
| Hash | `0xDB0954E9960F6457` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityForwardX(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDB0954E9960F6457, entity)
```


---

## GET_ENTITY_FORWARD_Y

**Description:** Gets the Y-component of the entity's forward vector.

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_FORWARD_Y` |
| Hash | `0x9A5C073ECBDA7EE7` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityForwardY(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A5C073ECBDA7EE7, entity)
```


---

## GET_ENTITY_HEADING

**Description:** Returns the heading of the entity in degrees. Also know as the "Yaw" of an entity.

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_HEADING` |
| Hash | `0xC230DD956E2F5507` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityHeading(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC230DD956E2F5507, entity)
```


---

## GET_ENTITY_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_HEALTH` |
| Hash | `0x82368787EA73C0F7` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityHealth(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x82368787EA73C0F7, entity)
```


---

## GET_ENTITY_HEIGHT

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_HEIGHT` |
| Hash | `0x296DEBC84474B375` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity), `X` (float), `Y` (float), `Z` (float), `atTop` (BOOL), `inWorldCoords` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`X`** (`float`)
- **`Y`** (`float`)
- **`Z`** (`float`)
- **`atTop`** (`BOOL`)
- **`inWorldCoords`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityHeight(entity, X, Y, Z, atTop, inWorldCoords)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x296DEBC84474B375, entity, X, Y, Z, atTop, inWorldCoords)
```


---

## GET_ENTITY_HEIGHT_ABOVE_GROUND

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_HEIGHT_ABOVE_GROUND` |
| Hash | `0x0D3B5BAEA08F63E9` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityHeightAboveGround(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0D3B5BAEA08F63E9, entity)
```


---

## GET_ENTITY_LOD_DIST

**Description:** Returns the LOD distance of an entity.

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_LOD_DIST` |
| Hash | `0xDF240D0C2A948683` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityLodDist(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF240D0C2A948683, entity)
```


---

## GET_ENTITY_MATRIX

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_MATRIX` |
| Hash | `0x3A9B1120AF13FBF2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `rightVector` (Vector3*), `forwardVector` (Vector3*), `upVector` (Vector3*), `position` (Vector3*) |

### Parameters

- **`entity`** (`Entity`)
- **`rightVector`** (`Vector3*`)
- **`forwardVector`** (`Vector3*`)
- **`upVector`** (`Vector3*`)
- **`position`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
GetEntityMatrix(entity, rightVector, forwardVector, upVector, position)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3A9B1120AF13FBF2, entity, rightVector, forwardVector, upVector, position)
```


---

## GET_ENTITY_MAX_HEALTH

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_MAX_HEALTH` |
| Hash | `0x15D757606D170C3C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityMaxHealth(entity, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x15D757606D170C3C, entity, p1)
```


---

## GET_ENTITY_MODEL

**Description:** Returns the model hash from the entity

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_MODEL` |
| Hash | `0xDA76A9F39210D365` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityModel(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDA76A9F39210D365, entity)
```


---

## GET_ENTITY_PITCH

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_PITCH` |
| Hash | `0xEF355ABEFF7F5005` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityPitch(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEF355ABEFF7F5005, entity)
```


---

## GET_ENTITY_POPULATION_TYPE

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_POPULATION_TYPE` |
| Hash | `0xADE28862B6D7B85B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityPopulationType(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xADE28862B6D7B85B, entity)
```


---

## GET_ENTITY_ROLL

**Description:** Displays the current ROLL axis of the entity [-180.0000/180.0000+]
(Sideways Roll) such as a vehicle tipped on its side

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_ROLL` |
| Hash | `0xBF966536FA8B6879` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityRoll(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBF966536FA8B6879, entity)
```


---

## GET_ENTITY_ROTATION

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_ROTATION` |
| Hash | `0xE09CAF86C32CB48F` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `entity` (Entity), `rotationOrder` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`rotationOrder`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityRotation(entity, rotationOrder)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE09CAF86C32CB48F, entity, rotationOrder)
```


---

## GET_ENTITY_SPEED

**Description:** Result is in meters per second (m/s)

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_SPEED` |
| Hash | `0xFB6BA510A533DF81` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntitySpeed(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFB6BA510A533DF81, entity)
```


---

## GET_ENTITY_SPEED_VECTOR

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_SPEED_VECTOR` |
| Hash | `0xF2DB09816A419DC5` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `entity` (Entity), `relative` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`relative`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntitySpeedVector(entity, relative)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF2DB09816A419DC5, entity, relative)
```


---

## GET_ENTITY_SUBMERGED_LEVEL

**Description:** Get how much of the entity is submerged.  1.0f is whole entity.

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_SUBMERGED_LEVEL` |
| Hash | `0x4A77C3F73FD9E831` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntitySubmergedLevel(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4A77C3F73FD9E831, entity)
```


---

## GET_ENTITY_TYPE

**Description:** Returns entityType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eEntityType

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_TYPE` |
| Hash | `0x97F696ACA466B4E0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityType(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x97F696ACA466B4E0, entity)
```


---

## GET_ENTITY_UPRIGHT_VALUE

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_UPRIGHT_VALUE` |
| Hash | `0x56398BE65160C3BE` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityUprightValue(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x56398BE65160C3BE, entity)
```


---

## GET_ENTITY_VELOCITY

| Property | Value |
|----------|-------|
| Native Name | `GET_ENTITY_VELOCITY` |
| Hash | `0x4805D2B1D8CF94A9` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntityVelocity(entity, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4805D2B1D8CF94A9, entity, p1)
```


---

## GET_IS_ANIMAL

| Property | Value |
|----------|-------|
| Native Name | `GET_IS_ANIMAL` |
| Hash | `0x9A100F1CF4546629` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsAnimal(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A100F1CF4546629, entity)
```


---

## GET_MATCHING_ENTITIES

| Property | Value |
|----------|-------|
| Native Name | `GET_MATCHING_ENTITIES` |
| Hash | `0x84CCF9A12942C83D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `volume` (Volume), `itemSet` (ItemSet), `entityType` (int), `p3` (Any), `p4` (Hash), `p5` (const char*) |

### Parameters

- **`volume`** (`Volume`)
- **`itemSet`** (`ItemSet`)
- **`entityType`** (`int`)
- **`p3`** (`Any`)
- **`p4`** (`Hash`)
- **`p5`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetMatchingEntities(volume, itemSet, entityType, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x84CCF9A12942C83D, volume, itemSet, entityType, p3, p4, p5)
```


---

## GET_NEAREST_PARTICIPANT_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `GET_NEAREST_PARTICIPANT_TO_ENTITY` |
| Hash | `0x6888A43C35A5F630` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetNearestParticipantToEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6888A43C35A5F630, entity)
```


---

## GET_NEAREST_PLAYER_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `GET_NEAREST_PLAYER_TO_ENTITY` |
| Hash | `0x990E294FC387FB88` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `entity` (Entity), `playerPedToIgnore` (Ped), `flags` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`playerPedToIgnore`** (`Ped`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetNearestPlayerToEntity(entity, playerPedToIgnore, flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x990E294FC387FB88, entity, playerPedToIgnore, flags)
```


---

*End of ENTITY natives part 1*
