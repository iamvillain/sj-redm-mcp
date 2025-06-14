# GRAPHICS Natives - Part 3 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** GRAPHICS  
**Natives in this file:** 50  
**Total natives in namespace:** 267  
**Generated from:** RDR3natives JSON data

---

## START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY_BONE

| Property | Value |
|----------|-------|
| Native Name | `START_NETWORKED_PARTICLE_FX_LOOPED_ON_ENTITY_BONE` |
| Hash | `0x9C56621462FFE7A6` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `entity` (Entity), `xOffset` (float), `yOffset` (float), `zOffset` (float), `xRot` (float), `yRot` (float), `zRot` (float), `boneIndex` (int), `scale` (float), `xAxis` (BOOL), `yAxis` (BOOL), `zAxis` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`entity`** (`Entity`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`boneIndex`** (`int`)
- **`scale`** (`float`)
- **`xAxis`** (`BOOL`)
- **`yAxis`** (`BOOL`)
- **`zAxis`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartNetworkedParticleFxLoopedOnEntityBone(effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9C56621462FFE7A6, effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis)
```


---

## START_NETWORKED_PARTICLE_FX_NON_LOOPED_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `START_NETWORKED_PARTICLE_FX_NON_LOOPED_AT_COORD` |
| Hash | `0xFB97618457994A62` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `xPos` (float), `yPos` (float), `zPos` (float), `xRot` (float), `yRot` (float), `zRot` (float), `scale` (float), `xAxis` (BOOL), `yAxis` (BOOL), `zAxis` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`scale`** (`float`)
- **`xAxis`** (`BOOL`)
- **`yAxis`** (`BOOL`)
- **`zAxis`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartNetworkedParticleFxNonLoopedAtCoord(effectName, xPos, yPos, zPos, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFB97618457994A62, effectName, xPos, yPos, zPos, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis)
```


---

## START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `START_NETWORKED_PARTICLE_FX_NON_LOOPED_ON_ENTITY` |
| Hash | `0xE6CFE43937061143` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `entity` (Entity), `offsetX` (float), `offsetY` (float), `offsetZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scale` (float), `axisX` (BOOL), `axisY` (BOOL), `axisZ` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`entity`** (`Entity`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scale`** (`float`)
- **`axisX`** (`BOOL`)
- **`axisY`** (`BOOL`)
- **`axisZ`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartNetworkedParticleFxNonLoopedOnEntity(effectName, entity, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, scale, axisX, axisY, axisZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE6CFE43937061143, effectName, entity, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, scale, axisX, axisY, axisZ)
```


---

## START_PARTICLE_FX_LOOPED_AT_COORD

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/graphics/ptfx/ptfx_assets_looped.lua

| Property | Value |
|----------|-------|
| Native Name | `START_PARTICLE_FX_LOOPED_AT_COORD` |
| Hash | `0xBA32867E86125D3A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `x` (float), `y` (float), `z` (float), `xRot` (float), `yRot` (float), `zRot` (float), `scale` (float), `xAxis` (BOOL), `yAxis` (BOOL), `zAxis` (BOOL), `p11` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`scale`** (`float`)
- **`xAxis`** (`BOOL`)
- **`yAxis`** (`BOOL`)
- **`zAxis`** (`BOOL`)
- **`p11`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartParticleFxLoopedAtCoord(effectName, x, y, z, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis, p11)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBA32867E86125D3A, effectName, x, y, z, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis, p11)
```


---

## START_PARTICLE_FX_LOOPED_ON_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `START_PARTICLE_FX_LOOPED_ON_ENTITY` |
| Hash | `0xBD41E1440CE39800` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `entity` (Entity), `xOffset` (float), `yOffset` (float), `zOffset` (float), `xRot` (float), `yRot` (float), `zRot` (float), `scale` (float), `xAxis` (BOOL), `yAxis` (BOOL), `zAxis` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`entity`** (`Entity`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`scale`** (`float`)
- **`xAxis`** (`BOOL`)
- **`yAxis`** (`BOOL`)
- **`zAxis`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartParticleFxLoopedOnEntity(effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBD41E1440CE39800, effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis)
```


---

## START_PARTICLE_FX_LOOPED_ON_ENTITY_BONE

| Property | Value |
|----------|-------|
| Native Name | `START_PARTICLE_FX_LOOPED_ON_ENTITY_BONE` |
| Hash | `0xD3BA6EC7F2FBD5E9` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `entity` (Entity), `xOffset` (float), `yOffset` (float), `zOffset` (float), `xRot` (float), `yRot` (float), `zRot` (float), `boneIndex` (int), `scale` (float), `xAxis` (BOOL), `yAxis` (BOOL), `zAxis` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`entity`** (`Entity`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`boneIndex`** (`int`)
- **`scale`** (`float`)
- **`xAxis`** (`BOOL`)
- **`yAxis`** (`BOOL`)
- **`zAxis`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartParticleFxLoopedOnEntityBone(effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD3BA6EC7F2FBD5E9, effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis)
```


---

## START_PARTICLE_FX_LOOPED_ON_PED_BONE

| Property | Value |
|----------|-------|
| Native Name | `START_PARTICLE_FX_LOOPED_ON_PED_BONE` |
| Hash | `0xE689C1B1432BB8AF` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `ped` (Ped), `xOffset` (float), `yOffset` (float), `zOffset` (float), `xRot` (float), `yRot` (float), `zRot` (float), `boneIndex` (int), `scale` (float), `xAxis` (BOOL), `yAxis` (BOOL), `zAxis` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`ped`** (`Ped`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`boneIndex`** (`int`)
- **`scale`** (`float`)
- **`xAxis`** (`BOOL`)
- **`yAxis`** (`BOOL`)
- **`zAxis`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartParticleFxLoopedOnPedBone(effectName, ped, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE689C1B1432BB8AF, effectName, ped, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis)
```


---

## START_PARTICLE_FX_NON_LOOPED_AT_COORD

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/graphics/ptfx/ptfx_assets_non_looped.lua

| Property | Value |
|----------|-------|
| Native Name | `START_PARTICLE_FX_NON_LOOPED_AT_COORD` |
| Hash | `0x2E80BF72EF7C87AC` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `xPos` (float), `yPos` (float), `zPos` (float), `xRot` (float), `yRot` (float), `zRot` (float), `scale` (float), `eventType` (int), `bPeekOnly` (BOOL), `bIsRegistered` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`xRot`** (`float`)
- **`yRot`** (`float`)
- **`zRot`** (`float`)
- **`scale`** (`float`)
- **`eventType`** (`int`)
- **`bPeekOnly`** (`BOOL`)
- **`bIsRegistered`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartParticleFxNonLoopedAtCoord(effectName, xPos, yPos, zPos, xRot, yRot, zRot, scale, eventType, bPeekOnly, bIsRegistered)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E80BF72EF7C87AC, effectName, xPos, yPos, zPos, xRot, yRot, zRot, scale, eventType, bPeekOnly, bIsRegistered)
```


---

## START_PARTICLE_FX_NON_LOOPED_ON_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `START_PARTICLE_FX_NON_LOOPED_ON_ENTITY` |
| Hash | `0xFF4C64C513388C12` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `entity` (Entity), `offsetX` (float), `offsetY` (float), `offsetZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `scale` (float), `axisX` (BOOL), `axisY` (BOOL), `axisZ` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`entity`** (`Entity`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`scale`** (`float`)
- **`axisX`** (`BOOL`)
- **`axisY`** (`BOOL`)
- **`axisZ`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartParticleFxNonLoopedOnEntity(effectName, entity, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, scale, axisX, axisY, axisZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFF4C64C513388C12, effectName, entity, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, scale, axisX, axisY, axisZ)
```


---

## START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE

| Property | Value |
|----------|-------|
| Native Name | `START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE` |
| Hash | `0x3FAA72BD940C3AC0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `ped` (Ped), `offsetX` (float), `offsetY` (float), `offsetZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `boneIndex` (int), `scale` (float), `axisX` (BOOL), `axisY` (BOOL), `axisZ` (BOOL) |

### Parameters

- **`effectName`** (`const char*`)
- **`ped`** (`Ped`)
- **`offsetX`** (`float`)
- **`offsetY`** (`float`)
- **`offsetZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`boneIndex`** (`int`)
- **`scale`** (`float`)
- **`axisX`** (`BOOL`)
- **`axisY`** (`BOOL`)
- **`axisZ`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartParticleFxNonLoopedOnPedBone(effectName, ped, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, boneIndex, scale, axisX, axisY, axisZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3FAA72BD940C3AC0, effectName, ped, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, boneIndex, scale, axisX, axisY, axisZ)
```


---

## START_PETROL_TRAIL_DECALS

| Property | Value |
|----------|-------|
| Native Name | `START_PETROL_TRAIL_DECALS` |
| Hash | `0x46F246D6504F0031` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
StartPetrolTrailDecals(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x46F246D6504F0031, p0, p1)
```


---

## STOP_PARTICLE_FX_LOOPED

| Property | Value |
|----------|-------|
| Native Name | `STOP_PARTICLE_FX_LOOPED` |
| Hash | `0x22970F3A088B133B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ptfxHandle` (int), `p1` (BOOL) |

### Parameters

- **`ptfxHandle`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StopParticleFxLooped(ptfxHandle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x22970F3A088B133B, ptfxHandle, p1)
```


---

## TOGGLE_PAUSED_RENDERPHASES

| Property | Value |
|----------|-------|
| Native Name | `TOGGLE_PAUSED_RENDERPHASES` |
| Hash | `0xEF9E1C45732F55FA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TogglePausedRenderphases(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEF9E1C45732F55FA, toggle)
```


---

## UPDATE_LIGHTS_ON_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `UPDATE_LIGHTS_ON_ENTITY` |
| Hash | `0xBDBACB52A03CC760` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
UpdateLightsOnEntity(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBDBACB52A03CC760, entity)
```


---

## USE_PARTICLE_FX_ASSET

**Description:** fxName: see data_0/data/effects/ptfx/fxlists/

| Property | Value |
|----------|-------|
| Native Name | `USE_PARTICLE_FX_ASSET` |
| Hash | `0xA10DB07FC234DD12` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `fxName` (const char*) |

### Parameters

- **`fxName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
UseParticleFxAsset(fxName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA10DB07FC234DD12, fxName)
```


---

## _0x085C5B61A0114F32

| Property | Value |
|----------|-------|
| Native Name | `_0x085C5B61A0114F32` |
| Hash | `0x085C5B61A0114F32` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x085C5B61A0114F32(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x085C5B61A0114F32, p0, p1)
```


---

## _0x0D5B19C34068FEE7

**Description:** Gets set to 1 when GET_STATUS_OF_TAKE_HIGH_QUALITY_PHOTO = PHOTO_OPERATION_SUCCEEDED

| Property | Value |
|----------|-------|
| Native Name | `_0x0D5B19C34068FEE7` |
| Hash | `0x0D5B19C34068FEE7` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0D5B19C34068FEE7(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0D5B19C34068FEE7, p0)
```


---

## _0x1460B644397453EB

**Description:** _RESET_*

| Property | Value |
|----------|-------|
| Native Name | `_0x1460B644397453EB` |
| Hash | `0x1460B644397453EB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x1460B644397453EB()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1460B644397453EB, )
```


---

## _0x171C18E994C1A395

| Property | Value |
|----------|-------|
| Native Name | `_0x171C18E994C1A395` |
| Hash | `0x171C18E994C1A395` |
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
_0x171C18E994C1A395(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x171C18E994C1A395, p0, p1, p2, p3, p4)
```


---

## _0x1A9F09AB458D49C6

**Description:** Used in shop scripts for CATALOG_BOOK
false = Normal -> [CATALOG_BOOK_SHUTDOWN]
true = Trees flickering? -> [CATALOG_BOOK_OPEN]

| Property | Value |
|----------|-------|
| Native Name | `_0x1A9F09AB458D49C6` |
| Hash | `0x1A9F09AB458D49C6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x1A9F09AB458D49C6(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1A9F09AB458D49C6, p0)
```


---

## _0x1C6306E5BC25C29C

| Property | Value |
|----------|-------|
| Native Name | `_0x1C6306E5BC25C29C` |
| Hash | `0x1C6306E5BC25C29C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x1C6306E5BC25C29C()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1C6306E5BC25C29C, )
```


---

## _0x1FF8731BE1DFC0C0

| Property | Value |
|----------|-------|
| Native Name | `_0x1FF8731BE1DFC0C0` |
| Hash | `0x1FF8731BE1DFC0C0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1FF8731BE1DFC0C0(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1FF8731BE1DFC0C0, p0, p1)
```


---

## _0x21F00E08CBB5F37B

**Description:** Params: component - used in odriscolls1 and sean1 R* SP Script: COMPONENT_BINOCULARS_SCOPE01
Triggers the binocular scaleform

| Property | Value |
|----------|-------|
| Native Name | `_0x21F00E08CBB5F37B` |
| Hash | `0x21F00E08CBB5F37B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `component` (const char*) |

### Parameters

- **`component`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0x21F00E08CBB5F37B(component)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x21F00E08CBB5F37B, component)
```


---

## _0x26DD2FB0A88CC412

**Description:** effectName2, p2 and p3 are unused

ANIMPOSTFX_*

| Property | Value |
|----------|-------|
| Native Name | `_0x26DD2FB0A88CC412` |
| Hash | `0x26DD2FB0A88CC412` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectName` (const char*), `effectName2` (const char*), `p2` (Any), `p3` (Any) |

### Parameters

- **`effectName`** (`const char*`)
- **`effectName2`** (`const char*`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x26DD2FB0A88CC412(effectName, effectName2, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x26DD2FB0A88CC412, effectName, effectName2, p2, p3)
```


---

## _0x285438C26C732F9D

| Property | Value |
|----------|-------|
| Native Name | `_0x285438C26C732F9D` |
| Hash | `0x285438C26C732F9D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x285438C26C732F9D()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x285438C26C732F9D, )
```


---

## _0x32DE2BFFDA43E62A

| Property | Value |
|----------|-------|
| Native Name | `_0x32DE2BFFDA43E62A` |
| Hash | `0x32DE2BFFDA43E62A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x32DE2BFFDA43E62A()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x32DE2BFFDA43E62A, )
```


---

## _0x38D9D50F2085E9B3

**Description:** ANIMPOSTFX_*

| Property | Value |
|----------|-------|
| Native Name | `_0x38D9D50F2085E9B3` |
| Hash | `0x38D9D50F2085E9B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectNameHash` (Hash) |

### Parameters

- **`effectNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x38D9D50F2085E9B3(effectNameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x38D9D50F2085E9B3, effectNameHash)
```


---

## _0x3DA7A10583A4BEC0

**Description:** ANIMPOSTFX_*

| Property | Value |
|----------|-------|
| Native Name | `_0x3DA7A10583A4BEC0` |
| Hash | `0x3DA7A10583A4BEC0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x3DA7A10583A4BEC0()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3DA7A10583A4BEC0, )
```


---

## _0x402E1A61D2587FCD

**Description:** Only used in R* SP Script spd_agnesdown1

| Property | Value |
|----------|-------|
| Native Name | `_0x402E1A61D2587FCD` |
| Hash | `0x402E1A61D2587FCD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `x` (float), `y` (float), `z` (float), `p4` (float), `p5` (float), `heading` (float) |

### Parameters

- **`p0`** (`Any`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`heading`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = _0x402E1A61D2587FCD(p0, x, y, z, p4, p5, heading)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x402E1A61D2587FCD, p0, x, y, z, p4, p5, heading)
```


---

## _0x4046493D2EEACA0E

**Description:** _DISABLE_*

| Property | Value |
|----------|-------|
| Native Name | `_0x4046493D2EEACA0E` |
| Hash | `0x4046493D2EEACA0E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x4046493D2EEACA0E()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4046493D2EEACA0E, )
```


---

## _0x41F88A85A579A61D

**Description:** Used in CREATE_BEZIER_BLOOD_TRAIL_OF_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_0x41F88A85A579A61D` |
| Hash | `0x41F88A85A579A61D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x41F88A85A579A61D(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x41F88A85A579A61D, p0)
```


---

## _0x453D16D41FC51D3E

| Property | Value |
|----------|-------|
| Native Name | `_0x453D16D41FC51D3E` |
| Hash | `0x453D16D41FC51D3E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x453D16D41FC51D3E(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x453D16D41FC51D3E, p0)
```


---

## _0x48FE0DB54045B975

| Property | Value |
|----------|-------|
| Native Name | `_0x48FE0DB54045B975` |
| Hash | `0x48FE0DB54045B975` |
| Return Type | `void` |
| Build | `1311` |
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
_0x48FE0DB54045B975(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x48FE0DB54045B975, p0, p1, p2, p3, p4, p5, p6)
```


---

## _0x4BD66B4E3427689B

**Description:** Used in CREATE_BEZIER_BLOOD_TRAIL_OF_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_0x4BD66B4E3427689B` |
| Hash | `0x4BD66B4E3427689B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0x4BD66B4E3427689B(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4BD66B4E3427689B, p0)
```


---

## _0x4FB67D172C4476F3

**Description:** p1: AMB_ANN_COAL_CHUTE_DIVE, AMB_ANN_COAL_CHUTE
p2: EMIT
p3: either 0.0f or 1.0f

| Property | Value |
|----------|-------|
| Native Name | `_0x4FB67D172C4476F3` |
| Hash | `0x4FB67D172C4476F3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (const char*), `p2` (const char*), `p3` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`const char*`)
- **`p2`** (`const char*`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x4FB67D172C4476F3(entity, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4FB67D172C4476F3, entity, p1, p2, p3)
```


---

## _0x503941F65DBA24EC

| Property | Value |
|----------|-------|
| Native Name | `_0x503941F65DBA24EC` |
| Hash | `0x503941F65DBA24EC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x503941F65DBA24EC(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x503941F65DBA24EC, p0)
```


---

## _0x519928DF02EB5101

| Property | Value |
|----------|-------|
| Native Name | `_0x519928DF02EB5101` |
| Hash | `0x519928DF02EB5101` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x519928DF02EB5101(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x519928DF02EB5101, p0)
```


---

## _0x5AC6E0FA028369DE

**Description:** Closes the the binocular scaleform

| Property | Value |
|----------|-------|
| Native Name | `_0x5AC6E0FA028369DE` |
| Hash | `0x5AC6E0FA028369DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x5AC6E0FA028369DE()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5AC6E0FA028369DE, )
```


---

## _0x5C674EB487891F6B

| Property | Value |
|----------|-------|
| Native Name | `_0x5C674EB487891F6B` |
| Hash | `0x5C674EB487891F6B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x5C674EB487891F6B()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5C674EB487891F6B, )
```


---

## _0x5C9C3A466B3296A8

**Description:** Only used in R* SP Script spd_agnesdown1

| Property | Value |
|----------|-------|
| Native Name | `_0x5C9C3A466B3296A8` |
| Hash | `0x5C9C3A466B3296A8` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x5C9C3A466B3296A8(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5C9C3A466B3296A8, p0)
```


---

## _SET_PHOTO_MODE_EXPOSURE_LOCKED

| Property | Value |
|----------|-------|
| Native Name | `_SET_PHOTO_MODE_EXPOSURE_LOCKED` |
| Hash | `0x5CD6A2CCE5087161` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1311` |
| Parameters | `lock` (BOOL) |

### Parameters

- **`lock`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPhotoModeExposureLocked(lock)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5CD6A2CCE5087161, lock)
```


---

## _CHANGE_PHOTO_MODE_CONTRAST

| Property | Value |
|----------|-------|
| Native Name | `_CHANGE_PHOTO_MODE_CONTRAST` |
| Hash | `0x62B9F9A1272AED80` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `value` (float) |

### Parameters

- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
ChangePhotoModeContrast(value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x62B9F9A1272AED80, value)
```


---

## _0x67B0778C62E74423

| Property | Value |
|----------|-------|
| Native Name | `_0x67B0778C62E74423` |
| Hash | `0x67B0778C62E74423` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x67B0778C62E74423(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x67B0778C62E74423, p0)
```


---

## _0x6C03118E9E5C1A14

| Property | Value |
|----------|-------|
| Native Name | `_0x6C03118E9E5C1A14` |
| Hash | `0x6C03118E9E5C1A14` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6C03118E9E5C1A14(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C03118E9E5C1A14, p0)
```


---

## _0x71845905BCCDE781

**Description:** ANIMPOSTFX_*

| Property | Value |
|----------|-------|
| Native Name | `_0x71845905BCCDE781` |
| Hash | `0x71845905BCCDE781` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `effectNameHash` (Hash) |

### Parameters

- **`effectNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x71845905BCCDE781(effectNameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x71845905BCCDE781, effectNameHash)
```


---

## _0x735762E8D7573E42

| Property | Value |
|----------|-------|
| Native Name | `_0x735762E8D7573E42` |
| Hash | `0x735762E8D7573E42` |
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
_0x735762E8D7573E42(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x735762E8D7573E42, p0, p1, p2)
```


---

## _0x812C1563185C6FB2

**Description:** Used in CREATE_BEZIER_BLOOD_TRAIL_OF_TYPE
_ENABLE_*

| Property | Value |
|----------|-------|
| Native Name | `_0x812C1563185C6FB2` |
| Hash | `0x812C1563185C6FB2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x812C1563185C6FB2()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x812C1563185C6FB2, )
```


---

## _0x815653A42C5ABE76

| Property | Value |
|----------|-------|
| Native Name | `_0x815653A42C5ABE76` |
| Hash | `0x815653A42C5ABE76` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x815653A42C5ABE76()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x815653A42C5ABE76, )
```


---

## _0x8996FA6AD9FE4E90

| Property | Value |
|----------|-------|
| Native Name | `_0x8996FA6AD9FE4E90` |
| Hash | `0x8996FA6AD9FE4E90` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x8996FA6AD9FE4E90(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8996FA6AD9FE4E90, p0)
```


---

## _0x910E260AEAD855DE

| Property | Value |
|----------|-------|
| Native Name | `_0x910E260AEAD855DE` |
| Hash | `0x910E260AEAD855DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x910E260AEAD855DE()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x910E260AEAD855DE, )
```


---

*End of GRAPHICS natives part 3*
