# SHAPETEST Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** SHAPETEST  
**Natives in this file:** 8  
**Generated from:** RDR3natives JSON data

---

## GET_SHAPE_TEST_RESULT

**Description:** Returns the result of a shape test: 0 if the handle is invalid, 1 if the shape test is still pending, or 2 if the shape test has completed, and the handle should be invalidated.

When used with an asynchronous shape test, this native should be looped until returning 0 or 2, after which the handle is invalidated.

enum eShapeTestStatus
{
	SHAPETEST_STATUS_NONEXISTENT,
	SHAPETEST_STATUS_RESULTS_NOTREADY,
	SHAPETEST_STATUS_RESULTS_READY
};

| Property | Value |
|----------|-------|
| Native Name | `GET_SHAPE_TEST_RESULT` |
| Hash | `0xEDE8AC7C5108FB1D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `shapeTestHandle` (ScrHandle), `hit` (BOOL*), `endCoords` (Vector3*), `surfaceNormal` (Vector3*), `entityHit` (Entity*) |

### Parameters

- **`shapeTestHandle`** (`ScrHandle`)
- **`hit`** (`BOOL*`)
- **`endCoords`** (`Vector3*`)
- **`surfaceNormal`** (`Vector3*`)
- **`entityHit`** (`Entity*`)

### Usage

**Lua (Direct):**
```lua
local result = GetShapeTestResult(shapeTestHandle, hit, endCoords, surfaceNormal, entityHit)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEDE8AC7C5108FB1D, shapeTestHandle, hit, endCoords, surfaceNormal, entityHit)
```


---

## START_EXPENSIVE_SYNCHRONOUS_SHAPE_TEST_LOS_PROBE

**Description:** Does the same as 0x7EE9F5D83DD4F90E, except blocking until the shape test completes.

| Property | Value |
|----------|-------|
| Native Name | `START_EXPENSIVE_SYNCHRONOUS_SHAPE_TEST_LOS_PROBE` |
| Hash | `0x377906D8A31E5586` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `flags` (int), `entityToIgnore` (Entity), `p8` (int) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`flags`** (`int`)
- **`entityToIgnore`** (`Entity`)
- **`p8`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StartExpensiveSynchronousShapeTestLosProbe(x1, y1, z1, x2, y2, z2, flags, entityToIgnore, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x377906D8A31E5586, x1, y1, z1, x2, y2, z2, flags, entityToIgnore, p8)
```


---

## START_SHAPE_TEST_BOX

| Property | Value |
|----------|-------|
| Native Name | `START_SHAPE_TEST_BOX` |
| Hash | `0xFE466162C4401D18` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `posX` (float), `posY` (float), `posZ` (float), `dimensionsX` (float), `dimensionsY` (float), `dimensionsZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `rotationOrder` (int), `flags` (int), `entityToIgnore` (Entity), `options` (int) |

### Parameters

- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`dimensionsX`** (`float`)
- **`dimensionsY`** (`float`)
- **`dimensionsZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`rotationOrder`** (`int`)
- **`flags`** (`int`)
- **`entityToIgnore`** (`Entity`)
- **`options`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StartShapeTestBox(posX, posY, posZ, dimensionsX, dimensionsY, dimensionsZ, rotX, rotY, rotZ, rotationOrder, flags, entityToIgnore, options)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFE466162C4401D18, posX, posY, posZ, dimensionsX, dimensionsY, dimensionsZ, rotX, rotY, rotZ, rotationOrder, flags, entityToIgnore, options)
```


---

## START_SHAPE_TEST_CAPSULE

| Property | Value |
|----------|-------|
| Native Name | `START_SHAPE_TEST_CAPSULE` |
| Hash | `0x28579D1B8F8AAC80` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `radius` (float), `flags` (int), `entityToIgnore` (Entity), `p9` (int) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`radius`** (`float`)
- **`flags`** (`int`)
- **`entityToIgnore`** (`Entity`)
- **`p9`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StartShapeTestCapsule(x1, y1, z1, x2, y2, z2, radius, flags, entityToIgnore, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x28579D1B8F8AAC80, x1, y1, z1, x2, y2, z2, radius, flags, entityToIgnore, p9)
```


---

## START_SHAPE_TEST_LOS_PROBE

**Description:** Asynchronously starts a line-of-sight (raycast) world probe shape test.

Use the handle with 0x3D87450E15D98694 or 0x65287525D951F6BE until it returns 0 or 2.

p8 is a bit mask with bits 1, 2 and/or 4, relating to collider types; 4 should usually be used. flags used are mostly 83 and 3167 

| Property | Value |
|----------|-------|
| Native Name | `START_SHAPE_TEST_LOS_PROBE` |
| Hash | `0x7EE9F5D83DD4F90E` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `flags` (int), `entity` (Entity), `p8` (int) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`flags`** (`int`)
- **`entity`** (`Entity`)
- **`p8`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StartShapeTestLosProbe(x1, y1, z1, x2, y2, z2, flags, entity, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7EE9F5D83DD4F90E, x1, y1, z1, x2, y2, z2, flags, entity, p8)
```


---

## START_SHAPE_TEST_MOUSE_CURSOR_LOS_PROBE

**Description:** Old name: _START_SHAPE_TEST_SURROUNDING_COORDS

| Property | Value |
|----------|-------|
| Native Name | `START_SHAPE_TEST_MOUSE_CURSOR_LOS_PROBE` |
| Hash | `0x9839013D8B6014F1` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `pVec1` (Vector3*), `pVec2` (Vector3*), `flag` (int), `entity` (Entity), `flag2` (int) |

### Parameters

- **`pVec1`** (`Vector3*`)
- **`pVec2`** (`Vector3*`)
- **`flag`** (`int`)
- **`entity`** (`Entity`)
- **`flag2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = StartShapeTestMouseCursorLosProbe(pVec1, pVec2, flag, entity, flag2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9839013D8B6014F1, pVec1, pVec2, flag, entity, flag2)
```


---

## START_SHAPE_TEST_SWEPT_SPHERE

| Property | Value |
|----------|-------|
| Native Name | `START_SHAPE_TEST_SWEPT_SPHERE` |
| Hash | `0xAA5B7C8309F73230` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `radius` (float), `flags` (int), `entity` (Entity), `p9` (Any) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`radius`** (`float`)
- **`flags`** (`int`)
- **`entity`** (`Entity`)
- **`p9`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = StartShapeTestSweptSphere(x1, y1, z1, x2, y2, z2, radius, flags, entity, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAA5B7C8309F73230, x1, y1, z1, x2, y2, z2, radius, flags, entity, p9)
```


---

## _0x04AA59CA40571C2E

| Property | Value |
|----------|-------|
| Native Name | `_0x04AA59CA40571C2E` |
| Hash | `0x04AA59CA40571C2E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x04AA59CA40571C2E(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x04AA59CA40571C2E, p0, p1)
```


---

*End of SHAPETEST natives*
