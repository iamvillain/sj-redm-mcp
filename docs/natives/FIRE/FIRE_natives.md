# FIRE Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** FIRE  
**Natives in this file:** 28  
**Generated from:** RDR3natives JSON data

---

## ADD_EXPLOSION

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/graphics/explosions

explosionType:
enum eExplosionTag
{
	EXP_TAG_DONTCARE = -1,
	EXP_TAG_GRENADE,
	EXP_TAG_STICKYBOMB,
	EXP_TAG_MOLOTOV,
	EXP_TAG_MOLOTOV_VOLATILE,
	EXP_TAG_HI_OCTANE,
	EXP_TAG_CAR,
	EXP_TAG_PLANE,
	EXP_TAG_PETROL_PUMP,
	EXP_TAG_DIR_STEAM,
	EXP_TAG_DIR_FLAME,
	EXP_TAG_DIR_WATER_HYDRANT,
	EXP_TAG_BOAT,
	EXP_TAG_BULLET,
	EXP_TAG_SMOKEGRENADE,
	EXP_TAG_BZGAS,
	EXP_TAG_GAS_CANISTER,
	EXP_TAG_EXTINGUISHER,
	EXP_TAG_TRAIN,
	EXP_TAG_DIR_FLAME_EXPLODE,
	EXP_TAG_VEHICLE_BULLET,
	EXP_TAG_BIRD_CRAP,
	EXP_TAG_FIREWORK,
	EXP_TAG_TORPEDO,
	EXP_TAG_TORPEDO_UNDERWATER,
	EXP_TAG_LANTERN,
	EXP_TAG_DYNAMITE,
	EXP_TAG_DYNAMITESTACK,
	EXP_TAG_DYNAMITE_VOLATILE,
	EXP_TAG_RIVER_BLAST,
	EXP_TAG_PLACED_DYNAMITE,
	EXP_TAG_FIRE_ARROW,
	EXP_TAG_DYNAMITE_ARROW,
	EXP_TAG_PHOSPHOROUS_BULLET,
	EXP_TAG_LIGHTNING_STRIKE,
	EXP_TAG_TRACKING_ARROW,
	EXP_TAG_POISON_BOTTLE
};

| Property | Value |
|----------|-------|
| Native Name | `ADD_EXPLOSION` |
| Hash | `0x7D6F58F69DA92530` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `explosionType` (int), `damageScale` (float), `isAudible` (BOOL), `isInvisible` (BOOL), `cameraShake` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`explosionType`** (`int`)
- **`damageScale`** (`float`)
- **`isAudible`** (`BOOL`)
- **`isInvisible`** (`BOOL`)
- **`cameraShake`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddExplosion(x, y, z, explosionType, damageScale, isAudible, isInvisible, cameraShake)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7D6F58F69DA92530, x, y, z, explosionType, damageScale, isAudible, isInvisible, cameraShake)
```


---

## ADD_EXPLOSION_WITH_USER_VFX

**Description:** explosionType: see ADD_EXPLOSION
Change explosionFx (Visual Effect) for specified explosionType

| Property | Value |
|----------|-------|
| Native Name | `ADD_EXPLOSION_WITH_USER_VFX` |
| Hash | `0x53BA259F3A67A99E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `explosionType` (int), `explosionFx` (Hash), `damageScale` (float), `isAudible` (BOOL), `isInvisible` (BOOL), `cameraShake` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`explosionType`** (`int`)
- **`explosionFx`** (`Hash`)
- **`damageScale`** (`float`)
- **`isAudible`** (`BOOL`)
- **`isInvisible`** (`BOOL`)
- **`cameraShake`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddExplosionWithUserVfx(x, y, z, explosionType, explosionFx, damageScale, isAudible, isInvisible, cameraShake)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x53BA259F3A67A99E, x, y, z, explosionType, explosionFx, damageScale, isAudible, isInvisible, cameraShake)
```


---

## ADD_OWNED_EXPLOSION

**Description:** explosionType: see ADD_EXPLOSION

| Property | Value |
|----------|-------|
| Native Name | `ADD_OWNED_EXPLOSION` |
| Hash | `0xD84A917A64D4D016` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `explosionType` (int), `damageScale` (float), `isAudible` (BOOL), `isInvisible` (BOOL), `cameraShake` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`explosionType`** (`int`)
- **`damageScale`** (`float`)
- **`isAudible`** (`BOOL`)
- **`isInvisible`** (`BOOL`)
- **`cameraShake`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddOwnedExplosion(ped, x, y, z, explosionType, damageScale, isAudible, isInvisible, cameraShake)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD84A917A64D4D016, ped, x, y, z, explosionType, damageScale, isAudible, isInvisible, cameraShake)
```


---

## GET_CLOSEST_FIRE_POS

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOSEST_FIRE_POS` |
| Hash | `0xB646FB657F448261` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outPosition` (Vector3*), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`outPosition`** (`Vector3*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetClosestFirePos(outPosition, x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB646FB657F448261, outPosition, x, y, z)
```


---

## GET_NUMBER_OF_FIRES_IN_RANGE

| Property | Value |
|----------|-------|
| Native Name | `GET_NUMBER_OF_FIRES_IN_RANGE` |
| Hash | `0xF9617BC6FAE61E08` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumberOfFiresInRange(x, y, z, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF9617BC6FAE61E08, x, y, z, radius)
```


---

## GET_OWNER_OF_EXPLOSION_IN_ANGLED_AREA

**Description:** explosionType: see ADD_EXPLOSION

| Property | Value |
|----------|-------|
| Native Name | `GET_OWNER_OF_EXPLOSION_IN_ANGLED_AREA` |
| Hash | `0x8002DDAB58594D78` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `explosionType` (int), `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `radius` (float) |

### Parameters

- **`explosionType`** (`int`)
- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetOwnerOfExplosionInAngledArea(explosionType, x1, y1, z1, x2, y2, z2, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8002DDAB58594D78, explosionType, x1, y1, z1, x2, y2, z2, radius)
```


---

## IS_ENTITY_ON_FIRE

| Property | Value |
|----------|-------|
| Native Name | `IS_ENTITY_ON_FIRE` |
| Hash | `0x1BD7C371CE257C3E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityOnFire(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1BD7C371CE257C3E, entity)
```


---

## IS_EXPLOSION_ACTIVE_IN_AREA

**Description:** explosionType: see ADD_EXPLOSION

| Property | Value |
|----------|-------|
| Native Name | `IS_EXPLOSION_ACTIVE_IN_AREA` |
| Hash | `0xD96E82AEBFFAAFF0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `explosionType` (int), `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float) |

### Parameters

- **`explosionType`** (`int`)
- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsExplosionActiveInArea(explosionType, x1, y1, z1, x2, y2, z2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD96E82AEBFFAAFF0, explosionType, x1, y1, z1, x2, y2, z2)
```


---

## IS_EXPLOSION_IN_ANGLED_AREA

**Description:** explosionType: see ADD_EXPLOSION

| Property | Value |
|----------|-------|
| Native Name | `IS_EXPLOSION_IN_ANGLED_AREA` |
| Hash | `0x5AE661ECD18524C9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `explosionType` (int), `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `angle` (float) |

### Parameters

- **`explosionType`** (`int`)
- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`angle`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsExplosionInAngledArea(explosionType, x1, y1, z1, x2, y2, z2, angle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5AE661ECD18524C9, explosionType, x1, y1, z1, x2, y2, z2, angle)
```


---

## IS_EXPLOSION_IN_AREA

**Description:** explosionType: see ADD_EXPLOSION

| Property | Value |
|----------|-------|
| Native Name | `IS_EXPLOSION_IN_AREA` |
| Hash | `0x8391BA4313A25AD3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `explosionType` (int), `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float) |

### Parameters

- **`explosionType`** (`int`)
- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsExplosionInArea(explosionType, x1, y1, z1, x2, y2, z2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8391BA4313A25AD3, explosionType, x1, y1, z1, x2, y2, z2)
```


---

## IS_EXPLOSION_IN_SPHERE

**Description:** explosionType: see ADD_EXPLOSION

| Property | Value |
|----------|-------|
| Native Name | `IS_EXPLOSION_IN_SPHERE` |
| Hash | `0xD62DD846D82CBB90` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `explosionType` (int), `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`explosionType`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsExplosionInSphere(explosionType, x, y, z, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD62DD846D82CBB90, explosionType, x, y, z, radius)
```


---

## REMOVE_SCRIPT_FIRE

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_SCRIPT_FIRE` |
| Hash | `0x790125C36E194069` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `fireHandle` (FireId) |

### Parameters

- **`fireHandle`** (`FireId`)

### Usage

**Lua (Direct):**
```lua
RemoveScriptFire(fireHandle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x790125C36E194069, fireHandle)
```


---

## START_ENTITY_FIRE

| Property | Value |
|----------|-------|
| Native Name | `START_ENTITY_FIRE` |
| Hash | `0xC4DC7418A44D6822` |
| Return Type | `void` |
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
StartEntityFire(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC4DC7418A44D6822, p0, p1, p2, p3)
```


---

## START_SCRIPT_FIRE

**Description:** Starts a fire:

xyz: Location of fire
maxChildren: The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.
isGasFire: Whether or not the fire is powered by gasoline.

| Property | Value |
|----------|-------|
| Native Name | `START_SCRIPT_FIRE` |
| Hash | `0x6B83617E04503888` |
| Return Type | `FireId` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (int), `p4` (float), `p5` (BOOL), `soundsetName` (const char*), `p7` (float), `p8` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`int`)
- **`p4`** (`float`)
- **`p5`** (`BOOL`)
- **`soundsetName`** (`const char*`)
- **`p7`** (`float`)
- **`p8`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StartScriptFire(x, y, z, p3, p4, p5, soundsetName, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6B83617E04503888, x, y, z, p3, p4, p5, soundsetName, p7, p8)
```


---

## STOP_ENTITY_FIRE

| Property | Value |
|----------|-------|
| Native Name | `STOP_ENTITY_FIRE` |
| Hash | `0x8390751DC40C1E98` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
StopEntityFire(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8390751DC40C1E98, p0, p1)
```


---

## STOP_FIRE_IN_RANGE

| Property | Value |
|----------|-------|
| Native Name | `STOP_FIRE_IN_RANGE` |
| Hash | `0xDB38F247BD421708` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
StopFireInRange(x, y, z, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDB38F247BD421708, x, y, z, radius)
```


---

## _0x24DB6B9F2B719043

**Description:** Only used in R* SP Related Camp Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0x24DB6B9F2B719043` |
| Hash | `0x24DB6B9F2B719043` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x24DB6B9F2B719043(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x24DB6B9F2B719043, p0)
```


---

## _ADD_EXPLOSION_WITH_USER_VFX_AND_DAMAGE_CAUSER

**Description:** Add explosion with vfx and assign an entity as damage causer.
explosionType: https://github.com/femga/rdr3_discoveries/blob/master/graphics/explosions/README.md
explosionFx: https://github.com/femga/rdr3_discoveries/blob/master/graphics/explosions/explosion_vfxTags.lua

| Property | Value |
|----------|-------|
| Native Name | `_ADD_EXPLOSION_WITH_USER_VFX_AND_DAMAGE_CAUSER` |
| Hash | `0x34AE85C7CA4857AA` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL), `x` (float), `y` (float), `z` (float), `explosionType` (int), `explosionFx` (Hash), `damageScale` (float), `isAudible` (BOOL), `isInvisible` (BOOL), `cameraShake` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`explosionType`** (`int`)
- **`explosionFx`** (`Hash`)
- **`damageScale`** (`float`)
- **`isAudible`** (`BOOL`)
- **`isInvisible`** (`BOOL`)
- **`cameraShake`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddExplosionWithUserVfxAndDamageCauser(entity, p1, x, y, z, explosionType, explosionFx, damageScale, isAudible, isInvisible, cameraShake)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x34AE85C7CA4857AA, entity, p1, x, y, z, explosionType, explosionFx, damageScale, isAudible, isInvisible, cameraShake)
```


---

## _0x41B87A6495EE13DD

| Property | Value |
|----------|-------|
| Native Name | `_0x41B87A6495EE13DD` |
| Hash | `0x41B87A6495EE13DD` |
| Return Type | `Any` |
| Build | `1232` |
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
local result = _0x41B87A6495EE13DD(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x41B87A6495EE13DD, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## _GET_CLOSEST_FIRE_POS_IN_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_GET_CLOSEST_FIRE_POS_IN_VOLUME` |
| Hash | `0x559FC1D310813031` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1232` |
| Parameters | `outPosition` (Vector3*), `posX` (float), `posY` (float), `posZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float) |

### Parameters

- **`outPosition`** (`Vector3*`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetClosestFirePosInVolume(outPosition, posX, posY, posZ, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x559FC1D310813031, outPosition, posX, posY, posZ, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```


---

## _0x68F6A75FDF5A70D6

| Property | Value |
|----------|-------|
| Native Name | `_0x68F6A75FDF5A70D6` |
| Hash | `0x68F6A75FDF5A70D6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x68F6A75FDF5A70D6(x, y, z, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x68F6A75FDF5A70D6, x, y, z, p3)
```


---

## _0x754937C28271BC65

| Property | Value |
|----------|-------|
| Native Name | `_0x754937C28271BC65` |
| Hash | `0x754937C28271BC65` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x754937C28271BC65(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x754937C28271BC65, p0)
```


---

## _IS_ENTITY_DAMAGED_BY_FIRE

**Description:** this natives only returns true if entity is damaged by fire , once damaged caused to entity by fire (like burned appearance) has cleared (they clear over time) then returns false

| Property | Value |
|----------|-------|
| Native Name | `_IS_ENTITY_DAMAGED_BY_FIRE` |
| Hash | `0xA4454592DCF7C992` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityDamagedByFire(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA4454592DCF7C992, entity)
```


---

## _ADD_EXPLOSION_WITH_DAMAGE_CAUSER

**Description:** Add explosion with and assign an entity as damage causer.
explosionType: https://github.com/femga/rdr3_discoveries/blob/master/graphics/explosions/README.md

| Property | Value |
|----------|-------|
| Native Name | `_ADD_EXPLOSION_WITH_DAMAGE_CAUSER` |
| Hash | `0xB7DF150605EEDC9B` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (int), `x` (float), `y` (float), `z` (float), `explosionType` (int), `damageScale` (float), `isAudible` (BOOL), `isInvisible` (BOOL), `cameraShake` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`explosionType`** (`int`)
- **`damageScale`** (`float`)
- **`isAudible`** (`BOOL`)
- **`isInvisible`** (`BOOL`)
- **`cameraShake`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddExplosionWithDamageCauser(entity, p1, x, y, z, explosionType, damageScale, isAudible, isInvisible, cameraShake)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB7DF150605EEDC9B, entity, p1, x, y, z, explosionType, damageScale, isAudible, isInvisible, cameraShake)
```


---

## _IS_ENTITY_CONSUMED_BY_FIRE

| Property | Value |
|----------|-------|
| Native Name | `_IS_ENTITY_CONSUMED_BY_FIRE` |
| Hash | `0xCDC25355C0D65963` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsEntityConsumedByFire(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCDC25355C0D65963, entity)
```


---

## _IS_EXPLOSION_IN_VOLUME

**Description:** explosionType: see ADD_EXPLOSION

| Property | Value |
|----------|-------|
| Native Name | `_IS_EXPLOSION_IN_VOLUME` |
| Hash | `0xE24822A4CFC9107A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `explosionType` (int), `volume` (Volume) |

### Parameters

- **`explosionType`** (`int`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = IsExplosionInVolume(explosionType, volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE24822A4CFC9107A, explosionType, volume)
```


---

## _IS_PED_SHOCKING_EVENT_ACTIVE

**Description:** Tested with fire & dynamite. Only returns true using value p1 = 1 and when the ped is affected by fire.

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_SHOCKING_EVENT_ACTIVE` |
| Hash | `0xAB7993BA61A4674F` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedShockingEventActive(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAB7993BA61A4674F, ped, p1)
```


---

## _STOP_FIRE_IN_BOX

| Property | Value |
|----------|-------|
| Native Name | `_STOP_FIRE_IN_BOX` |
| Hash | `0xB7C7BDC375AEA9A4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `posX` (float), `posY` (float), `posZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float) |

### Parameters

- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
StopFireInBox(posX, posY, posZ, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB7C7BDC375AEA9A4, posX, posY, posZ, rotX, rotY, rotZ, scaleX, scaleY, scaleZ)
```


---

*End of FIRE natives*
