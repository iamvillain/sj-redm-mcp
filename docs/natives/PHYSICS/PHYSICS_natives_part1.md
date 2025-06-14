# PHYSICS Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PHYSICS  
**Natives in this file:** 50  
**Total natives in namespace:** 72  
**Generated from:** RDR3natives JSON data

---

## ACTIVATE_PHYSICS

| Property | Value |
|----------|-------|
| Native Name | `ACTIVATE_PHYSICS` |
| Hash | `0x710311ADF0E20730` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
ActivatePhysics(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x710311ADF0E20730, entity)
```


---

## ADD_ROPE

**Description:** There are 19 types of rope, from type = 0 to type = 18
Rope definitions are stored in ropedata.xml
Rope types 0, 15 and 18 have proper physics for hanging objects (taut, do not sag, small to medium diameter, good aspect for a rope)

| Property | Value |
|----------|-------|
| Native Name | `ADD_ROPE` |
| Hash | `0xE832D760399EB220` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `length` (float), `ropeType` (int), `maxLength` (float), `minLength` (float), `p10` (float), `p11` (BOOL), `p12` (BOOL), `rigid` (BOOL), `p14` (float), `breakWhenShot` (BOOL), `unkPtr` (Any*), `p17` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`length`** (`float`)
- **`ropeType`** (`int`)
- **`maxLength`** (`float`)
- **`minLength`** (`float`)
- **`p10`** (`float`)
- **`p11`** (`BOOL`)
- **`p12`** (`BOOL`)
- **`rigid`** (`BOOL`)
- **`p14`** (`float`)
- **`breakWhenShot`** (`BOOL`)
- **`unkPtr`** (`Any*`)
- **`p17`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = AddRope(x, y, z, rotX, rotY, rotZ, length, ropeType, maxLength, minLength, p10, p11, p12, rigid, p14, breakWhenShot, unkPtr, p17)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE832D760399EB220, x, y, z, rotX, rotY, rotZ, length, ropeType, maxLength, minLength, p10, p11, p12, rigid, p14, breakWhenShot, unkPtr, p17)
```


---

## ATTACH_ENTITIES_TO_ROPE

**Description:** Attaches entity 1 to entity 2.
If you use a boneName (p12/p13) make sure boneId (p15/p16) is set to -1.

| Property | Value |
|----------|-------|
| Native Name | `ATTACH_ENTITIES_TO_ROPE` |
| Hash | `0x3D95EC8B6D940AC3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `entity1` (Entity), `entity2` (Entity), `ent1X` (float), `ent1Y` (float), `ent1Z` (float), `ent2X` (float), `ent2Y` (float), `ent2Z` (float), `length` (float), `alwaysZero1` (int), `alwaysZero2` (int), `boneName1` (char*), `boneName2` (char*), `p14` (BOOL), `boneId1` (int), `boneId2` (int), `alwaysZero3` (int), `alwaysZero4` (int), `p19` (BOOL), `p20` (BOOL) |

### Parameters

- **`ropeId`** (`int`)
- **`entity1`** (`Entity`)
- **`entity2`** (`Entity`)
- **`ent1X`** (`float`)
- **`ent1Y`** (`float`)
- **`ent1Z`** (`float`)
- **`ent2X`** (`float`)
- **`ent2Y`** (`float`)
- **`ent2Z`** (`float`)
- **`length`** (`float`)
- **`alwaysZero1`** (`int`)
- **`alwaysZero2`** (`int`)
- **`boneName1`** (`char*`)
- **`boneName2`** (`char*`)
- **`p14`** (`BOOL`)
- **`boneId1`** (`int`)
- **`boneId2`** (`int`)
- **`alwaysZero3`** (`int`)
- **`alwaysZero4`** (`int`)
- **`p19`** (`BOOL`)
- **`p20`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AttachEntitiesToRope(ropeId, entity1, entity2, ent1X, ent1Y, ent1Z, ent2X, ent2Y, ent2Z, length, alwaysZero1, alwaysZero2, boneName1, boneName2, p14, boneId1, boneId2, alwaysZero3, alwaysZero4, p19, p20)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3D95EC8B6D940AC3, ropeId, entity1, entity2, ent1X, ent1Y, ent1Z, ent2X, ent2Y, ent2Z, length, alwaysZero1, alwaysZero2, boneName1, boneName2, p14, boneId1, boneId2, alwaysZero3, alwaysZero4, p19, p20)
```


---

## BREAK_ENTITY_GLASS

| Property | Value |
|----------|-------|
| Native Name | `BREAK_ENTITY_GLASS` |
| Hash | `0x2E648D16F6E308F3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (float), `p9` (Any), `p10` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`Any`)
- **`p10`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
BreakEntityGlass(entity, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E648D16F6E308F3, entity, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## DELETE_CHILD_ROPE

| Property | Value |
|----------|-------|
| Native Name | `DELETE_CHILD_ROPE` |
| Hash | `0xAA5D6B1888E4DB20` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int) |

### Parameters

- **`ropeId`** (`int`)

### Usage

**Lua (Direct):**
```lua
DeleteChildRope(ropeId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAA5D6B1888E4DB20, ropeId)
```


---

## DELETE_ROPE

| Property | Value |
|----------|-------|
| Native Name | `DELETE_ROPE` |
| Hash | `0x52B4829281364649` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int*) |

### Parameters

- **`ropeId`** (`int*`)

### Usage

**Lua (Direct):**
```lua
DeleteRope(ropeId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x52B4829281364649, ropeId)
```


---

## DETACH_ROPE_FROM_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `DETACH_ROPE_FROM_ENTITY` |
| Hash | `0xBCF3026912A8647D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `entity` (Entity) |

### Parameters

- **`ropeId`** (`int`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
DetachRopeFromEntity(ropeId, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBCF3026912A8647D, ropeId, entity)
```


---

## DOES_ROPE_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_ROPE_EXIST` |
| Hash | `0xFD5448BE3111ED96` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ropeId` (int) |

### Parameters

- **`ropeId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesRopeExist(ropeId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFD5448BE3111ED96, ropeId)
```


---

## GET_ROPE_LAST_VERTEX_COORD

| Property | Value |
|----------|-------|
| Native Name | `GET_ROPE_LAST_VERTEX_COORD` |
| Hash | `0x21BB0FBD3E217C2D` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `ropeId` (int) |

### Parameters

- **`ropeId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetRopeLastVertexCoord(ropeId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x21BB0FBD3E217C2D, ropeId)
```


---

## GET_ROPE_VERTEX_COORD

| Property | Value |
|----------|-------|
| Native Name | `GET_ROPE_VERTEX_COORD` |
| Hash | `0xEA61CA8E80F09E4D` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `ropeId` (int), `vertex` (int) |

### Parameters

- **`ropeId`** (`int`)
- **`vertex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetRopeVertexCoord(ropeId, vertex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEA61CA8E80F09E4D, ropeId, vertex)
```


---

## GET_ROPE_VERTEX_COUNT

| Property | Value |
|----------|-------|
| Native Name | `GET_ROPE_VERTEX_COUNT` |
| Hash | `0x3655F544CD30F0B5` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ropeId` (int) |

### Parameters

- **`ropeId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetRopeVertexCount(ropeId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3655F544CD30F0B5, ropeId)
```


---

## ROPE_DRAW_SHADOW_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `ROPE_DRAW_SHADOW_ENABLED` |
| Hash | `0xF159A63806BB5BA8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int*), `toggle` (BOOL) |

### Parameters

- **`ropeId`** (`int*`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RopeDrawShadowEnabled(ropeId, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF159A63806BB5BA8, ropeId, toggle)
```


---

## ROPE_FORCE_LENGTH

**Description:** Forces a rope to a certain length.

| Property | Value |
|----------|-------|
| Native Name | `ROPE_FORCE_LENGTH` |
| Hash | `0xD009F759A723DB1B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `length` (float) |

### Parameters

- **`ropeId`** (`int`)
- **`length`** (`float`)

### Usage

**Lua (Direct):**
```lua
RopeForceLength(ropeId, length)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD009F759A723DB1B, ropeId, length)
```


---

## ROPE_SET_UPDATE_ORDER

| Property | Value |
|----------|-------|
| Native Name | `ROPE_SET_UPDATE_ORDER` |
| Hash | `0xDC57A637A20006ED` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (Any) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
RopeSetUpdateOrder(ropeId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDC57A637A20006ED, ropeId, p1)
```


---

## SET_DAMPING

| Property | Value |
|----------|-------|
| Native Name | `SET_DAMPING` |
| Hash | `0xEEA3B200A6FEB65B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `vertex` (int), `value` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`vertex`** (`int`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDamping(entity, vertex, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEEA3B200A6FEB65B, entity, vertex, value)
```


---

## SET_DISABLE_BREAKING

| Property | Value |
|----------|-------|
| Native Name | `SET_DISABLE_BREAKING` |
| Hash | `0x5CEC1A84620E7D5B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `toggle` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDisableBreaking(object, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5CEC1A84620E7D5B, object, toggle)
```


---

## SET_DISABLE_FRAG_DAMAGE

| Property | Value |
|----------|-------|
| Native Name | `SET_DISABLE_FRAG_DAMAGE` |
| Hash | `0x01BA3AED21C16CFB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `toggle` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetDisableFragDamage(object, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x01BA3AED21C16CFB, object, toggle)
```


---

## START_ROPE_UNWINDING_FRONT

| Property | Value |
|----------|-------|
| Native Name | `START_ROPE_UNWINDING_FRONT` |
| Hash | `0x538D1179EC1AA9A9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int) |

### Parameters

- **`ropeId`** (`int`)

### Usage

**Lua (Direct):**
```lua
StartRopeUnwindingFront(ropeId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x538D1179EC1AA9A9, ropeId)
```


---

## START_ROPE_WINDING

| Property | Value |
|----------|-------|
| Native Name | `START_ROPE_WINDING` |
| Hash | `0x1461C72C889E343E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int) |

### Parameters

- **`ropeId`** (`int`)

### Usage

**Lua (Direct):**
```lua
StartRopeWinding(ropeId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1461C72C889E343E, ropeId)
```


---

## STOP_ROPE_UNWINDING_FRONT

| Property | Value |
|----------|-------|
| Native Name | `STOP_ROPE_UNWINDING_FRONT` |
| Hash | `0xFFF3A50779EFBBB3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int) |

### Parameters

- **`ropeId`** (`int`)

### Usage

**Lua (Direct):**
```lua
StopRopeUnwindingFront(ropeId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFFF3A50779EFBBB3, ropeId)
```


---

## STOP_ROPE_WINDING

| Property | Value |
|----------|-------|
| Native Name | `STOP_ROPE_WINDING` |
| Hash | `0xCB2D4AB84A19AA7C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int) |

### Parameters

- **`ropeId`** (`int`)

### Usage

**Lua (Direct):**
```lua
StopRopeWinding(ropeId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCB2D4AB84A19AA7C, ropeId)
```


---

## _0x0CB16D05E03FB525

| Property | Value |
|----------|-------|
| Native Name | `_0x0CB16D05E03FB525` |
| Hash | `0x0CB16D05E03FB525` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0CB16D05E03FB525(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0CB16D05E03FB525, p0)
```


---

## _0x1D97DA8ACB5D2582

| Property | Value |
|----------|-------|
| Native Name | `_0x1D97DA8ACB5D2582` |
| Hash | `0x1D97DA8ACB5D2582` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (int) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x1D97DA8ACB5D2582(ropeId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1D97DA8ACB5D2582, ropeId, p1)
```


---

## _0x1FC92BDBA1106BD2

| Property | Value |
|----------|-------|
| Native Name | `_0x1FC92BDBA1106BD2` |
| Hash | `0x1FC92BDBA1106BD2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (float) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x1FC92BDBA1106BD2(ropeId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1FC92BDBA1106BD2, ropeId, p1)
```


---

## _0x21D0890D88DFB0B0

| Property | Value |
|----------|-------|
| Native Name | `_0x21D0890D88DFB0B0` |
| Hash | `0x21D0890D88DFB0B0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (BOOL), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (float), `p9` (float), `p10` (int) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`BOOL`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`float`)
- **`p10`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x21D0890D88DFB0B0(ropeId, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x21D0890D88DFB0B0, ropeId, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## _0x31160EC47E7C9549

| Property | Value |
|----------|-------|
| Native Name | `_0x31160EC47E7C9549` |
| Hash | `0x31160EC47E7C9549` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x31160EC47E7C9549(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x31160EC47E7C9549, p0, p1)
```


---

## _0x32F4DBFDFCCCC735

| Property | Value |
|----------|-------|
| Native Name | `_0x32F4DBFDFCCCC735` |
| Hash | `0x32F4DBFDFCCCC735` |
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
_0x32F4DBFDFCCCC735(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x32F4DBFDFCCCC735, p0, p1, p2)
```


---

## _0x3900491C0D61ED4B

| Property | Value |
|----------|-------|
| Native Name | `_0x3900491C0D61ED4B` |
| Hash | `0x3900491C0D61ED4B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3900491C0D61ED4B(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3900491C0D61ED4B, p0, p1)
```


---

## _0x423C6B1F3786D28B

| Property | Value |
|----------|-------|
| Native Name | `_0x423C6B1F3786D28B` |
| Hash | `0x423C6B1F3786D28B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x423C6B1F3786D28B(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x423C6B1F3786D28B, p0, p1)
```


---

## _0x461FCBDEB4D06717

| Property | Value |
|----------|-------|
| Native Name | `_0x461FCBDEB4D06717` |
| Hash | `0x461FCBDEB4D06717` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (BOOL) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x461FCBDEB4D06717(ropeId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x461FCBDEB4D06717, ropeId, p1)
```


---

## _0x483D4E917B0D35A9

| Property | Value |
|----------|-------|
| Native Name | `_0x483D4E917B0D35A9` |
| Hash | `0x483D4E917B0D35A9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x483D4E917B0D35A9(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x483D4E917B0D35A9, p0, p1)
```


---

## _0x522FA3F490E2F7AC

| Property | Value |
|----------|-------|
| Native Name | `_0x522FA3F490E2F7AC` |
| Hash | `0x522FA3F490E2F7AC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (Any), `p2` (Any) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x522FA3F490E2F7AC(ropeId, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x522FA3F490E2F7AC, ropeId, p1, p2)
```


---

## _0x5A989B7EE3672A56

| Property | Value |
|----------|-------|
| Native Name | `_0x5A989B7EE3672A56` |
| Hash | `0x5A989B7EE3672A56` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x5A989B7EE3672A56(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5A989B7EE3672A56, p0, p1)
```


---

## _0x5BD7457221CC5FF4

| Property | Value |
|----------|-------|
| Native Name | `_0x5BD7457221CC5FF4` |
| Hash | `0x5BD7457221CC5FF4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x5BD7457221CC5FF4(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5BD7457221CC5FF4, p0, p1)
```


---

## _0x5E981C764DF33117

| Property | Value |
|----------|-------|
| Native Name | `_0x5E981C764DF33117` |
| Hash | `0x5E981C764DF33117` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x5E981C764DF33117(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5E981C764DF33117, p0, p1)
```


---

## _0x69C810B72291D831

| Property | Value |
|----------|-------|
| Native Name | `_0x69C810B72291D831` |
| Hash | `0x69C810B72291D831` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x69C810B72291D831(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x69C810B72291D831, p0, p1, p2, p3, p4, p5, p6)
```


---

## _0x6EA0E93CFFA472CC

| Property | Value |
|----------|-------|
| Native Name | `_0x6EA0E93CFFA472CC` |
| Hash | `0x6EA0E93CFFA472CC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6EA0E93CFFA472CC(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6EA0E93CFFA472CC, p0)
```


---

## _0x751DF00EEFF122E3

| Property | Value |
|----------|-------|
| Native Name | `_0x751DF00EEFF122E3` |
| Hash | `0x751DF00EEFF122E3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x751DF00EEFF122E3(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x751DF00EEFF122E3, p0)
```


---

## _0x76BAD9D538BCA1AA

| Property | Value |
|----------|-------|
| Native Name | `_0x76BAD9D538BCA1AA` |
| Hash | `0x76BAD9D538BCA1AA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (float) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x76BAD9D538BCA1AA(ropeId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x76BAD9D538BCA1AA, ropeId, p1)
```


---

## _0x814D453FCFDF119F

| Property | Value |
|----------|-------|
| Native Name | `_0x814D453FCFDF119F` |
| Hash | `0x814D453FCFDF119F` |
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
_0x814D453FCFDF119F(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x814D453FCFDF119F, p0, p1, p2)
```


---

## _0x8D59079C37C21D78

**Description:** _ROPE_SET_*

| Property | Value |
|----------|-------|
| Native Name | `_0x8D59079C37C21D78` |
| Hash | `0x8D59079C37C21D78` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (float) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x8D59079C37C21D78(ropeId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8D59079C37C21D78, ropeId, p1)
```


---

## _0x8EEDFD8921389928

| Property | Value |
|----------|-------|
| Native Name | `_0x8EEDFD8921389928` |
| Hash | `0x8EEDFD8921389928` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)
- **`p9`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x8EEDFD8921389928(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8EEDFD8921389928, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## _0x9C24846D0A4A2776

| Property | Value |
|----------|-------|
| Native Name | `_0x9C24846D0A4A2776` |
| Hash | `0x9C24846D0A4A2776` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9C24846D0A4A2776(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9C24846D0A4A2776, p0)
```


---

## _0xB40EA9E0D2E2F7F3

| Property | Value |
|----------|-------|
| Native Name | `_0xB40EA9E0D2E2F7F3` |
| Hash | `0xB40EA9E0D2E2F7F3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (float) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xB40EA9E0D2E2F7F3(ropeId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB40EA9E0D2E2F7F3, ropeId, p1)
```


---

## _0xB7469CB9AC3C0FD4

| Property | Value |
|----------|-------|
| Native Name | `_0xB7469CB9AC3C0FD4` |
| Hash | `0xB7469CB9AC3C0FD4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xB7469CB9AC3C0FD4(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB7469CB9AC3C0FD4, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## _0xBB3E9B073E66C3C9

| Property | Value |
|----------|-------|
| Native Name | `_0xBB3E9B073E66C3C9` |
| Hash | `0xBB3E9B073E66C3C9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (BOOL), `p2` (BOOL), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xBB3E9B073E66C3C9(ropeId, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB3E9B073E66C3C9, ropeId, p1, p2, p3, p4)
```


---

## _0xBDDA142759307528

| Property | Value |
|----------|-------|
| Native Name | `_0xBDDA142759307528` |
| Hash | `0xBDDA142759307528` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xBDDA142759307528(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBDDA142759307528, p0)
```


---

## _0xC64E7A62632AD2FE

| Property | Value |
|----------|-------|
| Native Name | `_0xC64E7A62632AD2FE` |
| Hash | `0xC64E7A62632AD2FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC64E7A62632AD2FE(ropeId, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC64E7A62632AD2FE, ropeId, p1, p2, p3, p4, p5, p6, p7)
```


---

## _0xC89E7410A93AC19A

| Property | Value |
|----------|-------|
| Native Name | `_0xC89E7410A93AC19A` |
| Hash | `0xC89E7410A93AC19A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (float) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0xC89E7410A93AC19A(ropeId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC89E7410A93AC19A, ropeId, p1)
```


---

## _0xD699E688B49C0FD2

| Property | Value |
|----------|-------|
| Native Name | `_0xD699E688B49C0FD2` |
| Hash | `0xD699E688B49C0FD2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (float), `p2` (float), `p3` (float), `p4` (BOOL) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xD699E688B49C0FD2(ropeId, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD699E688B49C0FD2, ropeId, p1, p2, p3, p4)
```


---

*End of PHYSICS natives part 1*
