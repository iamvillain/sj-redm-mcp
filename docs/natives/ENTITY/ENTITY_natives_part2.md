# ENTITY Natives - Part 2 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ENTITY  
**Natives in this file:** 50  
**Total natives in namespace:** 268  
**Generated from:** RDR3natives JSON data

---

## GET_NEAREST_PLAYER_TO_ENTITY_ON_TEAM

| Property | Value |
|----------|-------|
| Native Name | `GET_NEAREST_PLAYER_TO_ENTITY_ON_TEAM` |
| Hash | `0xB2C30C3B4AFF718C` |
| Return Type | `Player` |
| Build | `1207` |
| Parameters | `entity` (Entity), `team` (int), `playerPedToIgnore` (Ped), `flags` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`team`** (`int`)
- **`playerPedToIgnore`** (`Ped`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetNearestPlayerToEntityOnTeam(entity, team, playerPedToIgnore, flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB2C30C3B4AFF718C, entity, team, playerPedToIgnore, flags)
```


---

## GET_OBJECT_INDEX_FROM_ENTITY_INDEX

**Description:** Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).

| Property | Value |
|----------|-------|
| Native Name | `GET_OBJECT_INDEX_FROM_ENTITY_INDEX` |
| Hash | `0x280BBE5601EAA983` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetObjectIndexFromEntityIndex(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x280BBE5601EAA983, entity)
```


---

## GET_OFFSET_FROM_ENTITY_GIVEN_WORLD_COORDS

| Property | Value |
|----------|-------|
| Native Name | `GET_OFFSET_FROM_ENTITY_GIVEN_WORLD_COORDS` |
| Hash | `0x497C6B1A2C9AE69C` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `entity` (Entity), `posX` (float), `posY` (float), `posZ` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetOffsetFromEntityGivenWorldCoords(entity, posX, posY, posZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x497C6B1A2C9AE69C, entity, posX, posY, posZ)
```


---

## GET_OFFSET_FROM_ENTITY_IN_WORLD_COORDS

**Description:** Offset values are relative to the entity.

x = left/right
y = forward/backward
z = up/down

| Property | Value |
|----------|-------|
| Native Name | `GET_OFFSET_FROM_ENTITY_IN_WORLD_COORDS` |
| Hash | `0x1899F328B0E12848` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `entity` (Entity), `offsetX` (float), `offsetY` (float), `offsetZ` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetOffsetFromEntityInWorldCoords(entity, offsetX, offsetY, offsetZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1899F328B0E12848, entity, offsetX, offsetY, offsetZ)
```


---

## GET_PED_INDEX_FROM_ENTITY_INDEX

**Description:** Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_INDEX_FROM_ENTITY_INDEX` |
| Hash | `0x0F16D042BD640EA3` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedIndexFromEntityIndex(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0F16D042BD640EA3, entity)
```


---

## GET_VEHICLE_INDEX_FROM_ENTITY_INDEX

**Description:** Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).

| Property | Value |
|----------|-------|
| Native Name | `GET_VEHICLE_INDEX_FROM_ENTITY_INDEX` |
| Hash | `0xDF1E5AAC561AFC59` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleIndexFromEntityIndex(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF1E5AAC561AFC59, entity)
```


---

## GET_WORLD_POSITION_OF_ENTITY_BONE

**Description:** Returns the coordinates of an entity-bone.
https://github.com/femga/rdr3_discoveries/tree/master/boneNames

| Property | Value |
|----------|-------|
| Native Name | `GET_WORLD_POSITION_OF_ENTITY_BONE` |
| Hash | `0x82CFA50E34681CA5` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `entity` (Entity), `boneIndex` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`boneIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetWorldPositionOfEntityBone(entity, boneIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x82CFA50E34681CA5, entity, boneIndex)
```


---

## HAS_ANIM_EVENT_FIRED

| Property | Value |
|----------|-------|
| Native Name | `HAS_ANIM_EVENT_FIRED` |
| Hash | `0x5851CC48405F4A07` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `actionHash` (Hash) |

### Parameters

- **`entity`** (`Entity`)
- **`actionHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasAnimEventFired(entity, actionHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5851CC48405F4A07, entity, actionHash)
```


---

## HAS_COLLISION_LOADED_AROUND_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `HAS_COLLISION_LOADED_AROUND_ENTITY` |
| Hash | `0xBEB1600952B9CF5C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = HasCollisionLoadedAroundEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBEB1600952B9CF5C, entity)
```


---

## HAS_COLLISION_LOADED_AROUND_POSITION

**Description:** Old name: _HAS_COLLISION_LOADED_AT_COORDS

| Property | Value |
|----------|-------|
| Native Name | `HAS_COLLISION_LOADED_AROUND_POSITION` |
| Hash | `0x6BFBDC46139C45AB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `xPos` (float), `yPos` (float), `zPos` (float) |

### Parameters

- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = HasCollisionLoadedAroundPosition(xPos, yPos, zPos)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6BFBDC46139C45AB, xPos, yPos, zPos)
```


---

## HAS_ENTITY_ANIM_FINISHED

| Property | Value |
|----------|-------|
| Native Name | `HAS_ENTITY_ANIM_FINISHED` |
| Hash | `0xAEB40615337EF1E3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `animDict` (const char*), `animName` (const char*), `p3` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`animDict`** (`const char*`)
- **`animName`** (`const char*`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityAnimFinished(entity, animDict, animName, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAEB40615337EF1E3, entity, animDict, animName, p3)
```


---

## HAS_ENTITY_BEEN_DAMAGED_BY_ANY_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `HAS_ENTITY_BEEN_DAMAGED_BY_ANY_OBJECT` |
| Hash | `0x73BB763880CD23A6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityBeenDamagedByAnyObject(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x73BB763880CD23A6, entity)
```


---

## HAS_ENTITY_BEEN_DAMAGED_BY_ANY_PED

| Property | Value |
|----------|-------|
| Native Name | `HAS_ENTITY_BEEN_DAMAGED_BY_ANY_PED` |
| Hash | `0x9934E9C42D52D87E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityBeenDamagedByAnyPed(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9934E9C42D52D87E, entity)
```


---

## HAS_ENTITY_BEEN_DAMAGED_BY_ANY_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `HAS_ENTITY_BEEN_DAMAGED_BY_ANY_VEHICLE` |
| Hash | `0x695D7C26DE65C423` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityBeenDamagedByAnyVehicle(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x695D7C26DE65C423, entity)
```


---

## HAS_ENTITY_BEEN_DAMAGED_BY_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `HAS_ENTITY_BEEN_DAMAGED_BY_ENTITY` |
| Hash | `0x7B6E7BEC1143AC86` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity1` (Entity), `entity2` (Entity), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`entity1`** (`Entity`)
- **`entity2`** (`Entity`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityBeenDamagedByEntity(entity1, entity2, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7B6E7BEC1143AC86, entity1, entity2, p2, p3)
```


---

## HAS_ENTITY_CLEAR_LOS_TO_COORD

| Property | Value |
|----------|-------|
| Native Name | `HAS_ENTITY_CLEAR_LOS_TO_COORD` |
| Hash | `0x0C9DBF48C6BA6E4C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `x` (float), `y` (float), `z` (float), `flags` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityClearLosToCoord(entity, x, y, z, flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C9DBF48C6BA6E4C, entity, x, y, z, flags)
```


---

## HAS_ENTITY_CLEAR_LOS_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `HAS_ENTITY_CLEAR_LOS_TO_ENTITY` |
| Hash | `0xFCDFF7B72D23A1AC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity1` (Entity), `entity2` (Entity), `traceType` (int) |

### Parameters

- **`entity1`** (`Entity`)
- **`entity2`** (`Entity`)
- **`traceType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityClearLosToEntity(entity1, entity2, traceType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFCDFF7B72D23A1AC, entity1, entity2, traceType)
```


---

## HAS_ENTITY_CLEAR_LOS_TO_ENTITY_IN_FRONT

**Description:** Has the entity1 got a clear line of sight to the other entity2 from the direction entity1 is facing.

| Property | Value |
|----------|-------|
| Native Name | `HAS_ENTITY_CLEAR_LOS_TO_ENTITY_IN_FRONT` |
| Hash | `0xE88F19660651D566` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity1` (Entity), `entity2` (Entity), `traceType` (int) |

### Parameters

- **`entity1`** (`Entity`)
- **`entity2`** (`Entity`)
- **`traceType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityClearLosToEntityInFront(entity1, entity2, traceType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE88F19660651D566, entity1, entity2, traceType)
```


---

## HAS_ENTITY_COLLIDED_WITH_ANYTHING

| Property | Value |
|----------|-------|
| Native Name | `HAS_ENTITY_COLLIDED_WITH_ANYTHING` |
| Hash | `0xDF18751EC74F90FF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityCollidedWithAnything(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF18751EC74F90FF, entity)
```


---

## IS_AN_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `IS_AN_ENTITY` |
| Hash | `0x27CFF3E5A286D3DF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `handle` (ScrHandle) |

### Parameters

- **`handle`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnEntity(handle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x27CFF3E5A286D3DF, handle)
```


---

## IS_ENTITY_AN_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_AN_OBJECT` |
| Hash | `0x0A27A546A375FDEF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAnObject(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0A27A546A375FDEF, entity)
```


---

## IS_ENTITY_ATTACHED

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_ATTACHED` |
| Hash | `0xEE6AD63ABF59C0B7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAttached(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEE6AD63ABF59C0B7, entity)
```


---

## IS_ENTITY_ATTACHED_TO_ANY_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_ATTACHED_TO_ANY_OBJECT` |
| Hash | `0x306C1F6178F01AB3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAttachedToAnyObject(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x306C1F6178F01AB3, entity)
```


---

## IS_ENTITY_ATTACHED_TO_ANY_PED

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_ATTACHED_TO_ANY_PED` |
| Hash | `0xC841153DED2CA89A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAttachedToAnyPed(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC841153DED2CA89A, entity)
```


---

## IS_ENTITY_ATTACHED_TO_ANY_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_ATTACHED_TO_ANY_VEHICLE` |
| Hash | `0x12DF6E0D2E736749` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAttachedToAnyVehicle(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x12DF6E0D2E736749, entity)
```


---

## IS_ENTITY_ATTACHED_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_ATTACHED_TO_ENTITY` |
| Hash | `0x154A3C529497053E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `from` (Entity), `to` (Entity) |

### Parameters

- **`from`** (`Entity`)
- **`to`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAttachedToEntity(from, to)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x154A3C529497053E, from, to)
```


---

## IS_ENTITY_AT_COORD

**Description:** Checks if entity is within x/y/zSize distance of x/y/z. 

Last three are unknown ints, almost always p7 = 0, p8 = 1, p9 = 0

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_AT_COORD` |
| Hash | `0x5E58342602E94718` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `xPos` (float), `yPos` (float), `zPos` (float), `xSize` (float), `ySize` (float), `zSize` (float), `p7` (BOOL), `p8` (BOOL), `p9` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`xSize`** (`float`)
- **`ySize`** (`float`)
- **`zSize`** (`float`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)
- **`p9`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAtCoord(entity, xPos, yPos, zPos, xSize, ySize, zSize, p7, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5E58342602E94718, entity, xPos, yPos, zPos, xSize, ySize, zSize, p7, p8, p9)
```


---

## IS_ENTITY_AT_ENTITY

**Description:** Checks if entity1 is within the box defined by x/y/zSize of entity2.

Last three parameters are almost always p5 = 0, p6 = 1, p7 = 0

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_AT_ENTITY` |
| Hash | `0xC057F02B837A27F6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity1` (Entity), `entity2` (Entity), `xSize` (float), `ySize` (float), `zSize` (float), `p5` (BOOL), `p6` (BOOL), `p7` (int) |

### Parameters

- **`entity1`** (`Entity`)
- **`entity2`** (`Entity`)
- **`xSize`** (`float`)
- **`ySize`** (`float`)
- **`zSize`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`p7`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAtEntity(entity1, entity2, xSize, ySize, zSize, p5, p6, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC057F02B837A27F6, entity1, entity2, xSize, ySize, zSize, p5, p6, p7)
```


---

## IS_ENTITY_A_MISSION_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_A_MISSION_ENTITY` |
| Hash | `0x138190F64DB4BBD1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAMissionEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x138190F64DB4BBD1, entity)
```


---

## IS_ENTITY_A_PED

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_A_PED` |
| Hash | `0xCF8176912DDA4EA5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAPed(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCF8176912DDA4EA5, entity)
```


---

## IS_ENTITY_A_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_A_VEHICLE` |
| Hash | `0xC3D96AF45FCCEC4C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityAVehicle(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC3D96AF45FCCEC4C, entity)
```


---

## IS_ENTITY_DEAD

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_DEAD` |
| Hash | `0x7D5B1F88E7504BBA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityDead(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7D5B1F88E7504BBA, entity)
```


---

## IS_ENTITY_IN_AIR

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_IN_AIR` |
| Hash | `0x886E37EC497200B6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (Any) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityInAir(entity, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x886E37EC497200B6, entity, p1)
```


---

## IS_ENTITY_IN_ANGLED_AREA

**Description:** Creates a spherical cone at origin that extends to surface with the angle specified. Then returns true if the entity is inside the spherical cone

Angle is measured in degrees.

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_IN_ANGLED_AREA` |
| Hash | `0xD3151E53134595E5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `originX` (float), `originY` (float), `originZ` (float), `edgeX` (float), `edgeY` (float), `edgeZ` (float), `angle` (float), `p8` (BOOL), `p9` (BOOL), `p10` (Any) |

### Parameters

- **`entity`** (`Entity`)
- **`originX`** (`float`)
- **`originY`** (`float`)
- **`originZ`** (`float`)
- **`edgeX`** (`float`)
- **`edgeY`** (`float`)
- **`edgeZ`** (`float`)
- **`angle`** (`float`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)
- **`p10`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityInAngledArea(entity, originX, originY, originZ, edgeX, edgeY, edgeZ, angle, p8, p9, p10)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD3151E53134595E5, entity, originX, originY, originZ, edgeX, edgeY, edgeZ, angle, p8, p9, p10)
```


---

## IS_ENTITY_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_IN_AREA` |
| Hash | `0x0C2634C40A16193E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `p7` (BOOL), `p8` (BOOL), `p9` (Any) |

### Parameters

- **`entity`** (`Entity`)
- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)
- **`p9`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityInArea(entity, x1, y1, z1, x2, y2, z2, p7, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C2634C40A16193E, entity, x1, y1, z1, x2, y2, z2, p7, p8, p9)
```


---

## IS_ENTITY_IN_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_IN_VOLUME` |
| Hash | `0x5A5526BC09C06623` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `volume` (ScrHandle), `p2` (BOOL), `p3` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`volume`** (`ScrHandle`)
- **`p2`** (`BOOL`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityInVolume(entity, volume, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5A5526BC09C06623, entity, volume, p2, p3)
```


---

## IS_ENTITY_IN_WATER

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_IN_WATER` |
| Hash | `0xDDE5C125AC446723` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityInWater(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDDE5C125AC446723, entity)
```


---

## IS_ENTITY_OCCLUDED

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_OCCLUDED` |
| Hash | `0x140188E884645624` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityOccluded(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x140188E884645624, entity)
```


---

## IS_ENTITY_ON_SCREEN

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_ON_SCREEN` |
| Hash | `0x613C15D5D8DB781F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityOnScreen(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x613C15D5D8DB781F, entity)
```


---

## IS_ENTITY_PLAYING_ANIM

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_PLAYING_ANIM` |
| Hash | `0xDEE49D5CA6C49148` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `animDict` (const char*), `animName` (const char*), `animType` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`animDict`** (`const char*`)
- **`animName`** (`const char*`)
- **`animType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityPlayingAnim(entity, animDict, animName, animType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDEE49D5CA6C49148, entity, animDict, animName, animType)
```


---

## IS_ENTITY_STATIC

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_STATIC` |
| Hash | `0x86468ADFA0F6B861` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityStatic(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x86468ADFA0F6B861, entity)
```


---

## IS_ENTITY_TOUCHING_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_TOUCHING_ENTITY` |
| Hash | `0x9A2304A64C3C8423` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `targetEntity` (Entity) |

### Parameters

- **`entity`** (`Entity`)
- **`targetEntity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityTouchingEntity(entity, targetEntity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A2304A64C3C8423, entity, targetEntity)
```


---

## IS_ENTITY_TOUCHING_MODEL

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_TOUCHING_MODEL` |
| Hash | `0x2AE3EBC8DEB9768B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `modelHash` (Hash) |

### Parameters

- **`entity`** (`Entity`)
- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityTouchingModel(entity, modelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2AE3EBC8DEB9768B, entity, modelHash)
```


---

## IS_ENTITY_UPRIGHT

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_UPRIGHT` |
| Hash | `0xF6F6AFD8D4FB2658` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `angle` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`angle`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityUpright(entity, angle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF6F6AFD8D4FB2658, entity, angle)
```


---

## IS_ENTITY_UPSIDEDOWN

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_UPSIDEDOWN` |
| Hash | `0x109DE3DA41AAD94A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityUpsidedown(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x109DE3DA41AAD94A, entity)
```


---

## IS_ENTITY_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_VISIBLE` |
| Hash | `0xFFC96ECB7FA404CA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityVisible(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFFC96ECB7FA404CA, entity)
```


---

## IS_ENTITY_VISIBLE_TO_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_VISIBLE_TO_SCRIPT` |
| Hash | `0xF213C724E77F321A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityVisibleToScript(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF213C724E77F321A, entity)
```


---

## IS_ENTITY_WAITING_FOR_WORLD_COLLISION

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_WAITING_FOR_WORLD_COLLISION` |
| Hash | `0x5E1CC2E8DC3111DD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityWaitingForWorldCollision(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5E1CC2E8DC3111DD, entity)
```


---

## IS_MAP_ENTITY_PINNED

| Property | Value |
|----------|-------|
| Native Name | `IS_MAP_ENTITY_PINNED` |
| Hash | `0x1FF441D7954F8709` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsMapEntityPinned(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1FF441D7954F8709, p0)
```


---

## PIN_CLOSEST_MAP_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `PIN_CLOSEST_MAP_ENTITY` |
| Hash | `0x6F3068258A499E52` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `modelHash` (Hash), `x` (float), `y` (float), `z` (float), `flags` (int) |

### Parameters

- **`modelHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = PinClosestMapEntity(modelHash, x, y, z, flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6F3068258A499E52, modelHash, x, y, z, flags)
```


---

*End of ENTITY natives part 2*
