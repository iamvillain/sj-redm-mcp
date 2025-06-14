# INTERIOR Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** INTERIOR  
**Natives in this file:** 30  
**Generated from:** RDR3natives JSON data

---

## ACTIVATE_INTERIOR_ENTITY_SET

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/interiors/interior_sets

| Property | Value |
|----------|-------|
| Native Name | `ACTIVATE_INTERIOR_ENTITY_SET` |
| Hash | `0x174D0AAB11CED739` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `interior` (Interior), `entitySetName` (const char*), `p2` (int) |

### Parameters

- **`interior`** (`Interior`)
- **`entitySetName`** (`const char*`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
ActivateInteriorEntitySet(interior, entitySetName, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x174D0AAB11CED739, interior, entitySetName, p2)
```


---

## CLEAR_ROOM_FOR_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_ROOM_FOR_ENTITY` |
| Hash | `0xA1762D5BBFCA13A8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
ClearRoomForEntity(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA1762D5BBFCA13A8, entity)
```


---

## CLEAR_ROOM_FOR_GAME_VIEWPORT

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_ROOM_FOR_GAME_VIEWPORT` |
| Hash | `0x951A049765E0D450` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearRoomForGameViewport()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x951A049765E0D450, )
```


---

## DEACTIVATE_INTERIOR_ENTITY_SET

| Property | Value |
|----------|-------|
| Native Name | `DEACTIVATE_INTERIOR_ENTITY_SET` |
| Hash | `0x33B81A2C07A51FFF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `interior` (Interior), `entitySetName` (const char*), `p2` (BOOL) |

### Parameters

- **`interior`** (`Interior`)
- **`entitySetName`** (`const char*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DeactivateInteriorEntitySet(interior, entitySetName, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x33B81A2C07A51FFF, interior, entitySetName, p2)
```


---

## DISABLE_INTERIOR

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_INTERIOR` |
| Hash | `0x3C2B92A1A07D4FCE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `interior` (Interior), `toggle` (BOOL) |

### Parameters

- **`interior`** (`Interior`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DisableInterior(interior, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3C2B92A1A07D4FCE, interior, toggle)
```


---

## FORCE_ROOM_FOR_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `FORCE_ROOM_FOR_ENTITY` |
| Hash | `0xBC29A9894C976945` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `interior` (Interior), `roomHashKey` (Hash) |

### Parameters

- **`entity`** (`Entity`)
- **`interior`** (`Interior`)
- **`roomHashKey`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ForceRoomForEntity(entity, interior, roomHashKey)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC29A9894C976945, entity, interior, roomHashKey)
```


---

## FORCE_ROOM_FOR_GAME_VIEWPORT

| Property | Value |
|----------|-------|
| Native Name | `FORCE_ROOM_FOR_GAME_VIEWPORT` |
| Hash | `0x115B4AA8FB28AB43` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `interiorID` (int), `roomHashKey` (Hash) |

### Parameters

- **`interiorID`** (`int`)
- **`roomHashKey`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ForceRoomForGameViewport(interiorID, roomHashKey)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x115B4AA8FB28AB43, interiorID, roomHashKey)
```


---

## GET_INTERIOR_AT_COORDS

| Property | Value |
|----------|-------|
| Native Name | `GET_INTERIOR_AT_COORDS` |
| Hash | `0xCDD36C9E5C469070` |
| Return Type | `Interior` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetInteriorAtCoords(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCDD36C9E5C469070, x, y, z)
```


---

## GET_INTERIOR_AT_COORDS_WITH_TYPE

| Property | Value |
|----------|-------|
| Native Name | `GET_INTERIOR_AT_COORDS_WITH_TYPE` |
| Hash | `0xAAD6170AA33B13C0` |
| Return Type | `Interior` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `interiorType` (const char*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`interiorType`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetInteriorAtCoordsWithType(x, y, z, interiorType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAAD6170AA33B13C0, x, y, z, interiorType)
```


---

## GET_INTERIOR_AT_COORDS_WITH_TYPEHASH

**Description:** Hashed version of GET_INTERIOR_AT_COORDS_WITH_TYPE

| Property | Value |
|----------|-------|
| Native Name | `GET_INTERIOR_AT_COORDS_WITH_TYPEHASH` |
| Hash | `0x3543AEA1816D1D2B` |
| Return Type | `Interior` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `typeHash` (Hash) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`typeHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetInteriorAtCoordsWithTypehash(x, y, z, typeHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3543AEA1816D1D2B, x, y, z, typeHash)
```


---

## GET_INTERIOR_FROM_COLLISION

| Property | Value |
|----------|-------|
| Native Name | `GET_INTERIOR_FROM_COLLISION` |
| Hash | `0x5054D1A5218FA696` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetInteriorFromCollision(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5054D1A5218FA696, x, y, z)
```


---

## GET_INTERIOR_FROM_ENTITY

**Description:** Returns the handle of the interior that the entity is in. Returns 0 if outside.

| Property | Value |
|----------|-------|
| Native Name | `GET_INTERIOR_FROM_ENTITY` |
| Hash | `0xB417689857646F61` |
| Return Type | `Interior` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetInteriorFromEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB417689857646F61, entity)
```


---

## GET_INTERIOR_FROM_PRIMARY_VIEW

| Property | Value |
|----------|-------|
| Native Name | `GET_INTERIOR_FROM_PRIMARY_VIEW` |
| Hash | `0xBC8A281FF125C655` |
| Return Type | `Interior` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetInteriorFromPrimaryView()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBC8A281FF125C655, )
```


---

## GET_INTERIOR_LOCATION_AND_NAMEHASH

| Property | Value |
|----------|-------|
| Native Name | `GET_INTERIOR_LOCATION_AND_NAMEHASH` |
| Hash | `0x8451E87D3C2B0286` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `interior` (Interior), `position` (Vector3*), `nameHash` (Hash*) |

### Parameters

- **`interior`** (`Interior`)
- **`position`** (`Vector3*`)
- **`nameHash`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
GetInteriorLocationAndNamehash(interior, position, nameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8451E87D3C2B0286, interior, position, nameHash)
```


---

## GET_KEY_FOR_ENTITY_IN_ROOM

**Description:** Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `GET_KEY_FOR_ENTITY_IN_ROOM` |
| Hash | `0x27D7B6F79E1F4603` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetKeyForEntityInRoom(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x27D7B6F79E1F4603, entity)
```


---

## GET_ROOM_KEY_FROM_ENTITY

**Description:** Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.

| Property | Value |
|----------|-------|
| Native Name | `GET_ROOM_KEY_FROM_ENTITY` |
| Hash | `0x076E46E0EB52AFC6` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetRoomKeyFromEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x076E46E0EB52AFC6, entity)
```


---

## IS_COLLISION_MARKED_OUTSIDE

**Description:** Returns true if the collision at the specified coords is marked as being outside (false if there's an interior)

| Property | Value |
|----------|-------|
| Native Name | `IS_COLLISION_MARKED_OUTSIDE` |
| Hash | `0xF291396B517E25B2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsCollisionMarkedOutside(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF291396B517E25B2, x, y, z)
```


---

## IS_INTERIOR_ENTITY_SET_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_INTERIOR_ENTITY_SET_ACTIVE` |
| Hash | `0x32810CA2125F5842` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `interior` (Interior), `entitySetName` (const char*) |

### Parameters

- **`interior`** (`Interior`)
- **`entitySetName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsInteriorEntitySetActive(interior, entitySetName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x32810CA2125F5842, interior, entitySetName)
```


---

## IS_INTERIOR_READY

| Property | Value |
|----------|-------|
| Native Name | `IS_INTERIOR_READY` |
| Hash | `0x941560D2D45DBFC8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `interior` (Interior) |

### Parameters

- **`interior`** (`Interior`)

### Usage

**Lua (Direct):**
```lua
local result = IsInteriorReady(interior)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x941560D2D45DBFC8, interior)
```


---

## IS_INTERIOR_SCENE

| Property | Value |
|----------|-------|
| Native Name | `IS_INTERIOR_SCENE` |
| Hash | `0x4200F14D6F840A9A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsInteriorScene()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4200F14D6F840A9A, )
```


---

## IS_VALID_INTERIOR

| Property | Value |
|----------|-------|
| Native Name | `IS_VALID_INTERIOR` |
| Hash | `0x017C1B3159F79F6C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `interior` (Interior) |

### Parameters

- **`interior`** (`Interior`)

### Usage

**Lua (Direct):**
```lua
local result = IsValidInterior(interior)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x017C1B3159F79F6C, interior)
```


---

## PIN_INTERIOR_IN_MEMORY

| Property | Value |
|----------|-------|
| Native Name | `PIN_INTERIOR_IN_MEMORY` |
| Hash | `0xBD3D33EABF680168` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `interior` (Interior) |

### Parameters

- **`interior`** (`Interior`)

### Usage

**Lua (Direct):**
```lua
PinInteriorInMemory(interior)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBD3D33EABF680168, interior)
```


---

## RETAIN_ENTITY_IN_INTERIOR

| Property | Value |
|----------|-------|
| Native Name | `RETAIN_ENTITY_IN_INTERIOR` |
| Hash | `0x5BD616735F16BF5C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `interior` (Interior) |

### Parameters

- **`entity`** (`Entity`)
- **`interior`** (`Interior`)

### Usage

**Lua (Direct):**
```lua
RetainEntityInInterior(entity, interior)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5BD616735F16BF5C, entity, interior)
```


---

## SET_INTERIOR_IN_USE

**Description:** Actually returns void in IDA but the script header defines a BOOL return type

| Property | Value |
|----------|-------|
| Native Name | `SET_INTERIOR_IN_USE` |
| Hash | `0xB5EF6FEF2DC9EBED` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `interior` (Interior) |

### Parameters

- **`interior`** (`Interior`)

### Usage

**Lua (Direct):**
```lua
local result = SetInteriorInUse(interior)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB5EF6FEF2DC9EBED, interior)
```


---

## UNPIN_INTERIOR

**Description:** Does something similar to INTERIOR::DISABLE_INTERIOR.

You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside. 

| Property | Value |
|----------|-------|
| Native Name | `UNPIN_INTERIOR` |
| Hash | `0x07FD1A0B814F6055` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `interior` (Interior) |

### Parameters

- **`interior`** (`Interior`)

### Usage

**Lua (Direct):**
```lua
UnpinInterior(interior)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x07FD1A0B814F6055, interior)
```


---

## _0x2533F2AB0EB9C6F9

| Property | Value |
|----------|-------|
| Native Name | `_0x2533F2AB0EB9C6F9` |
| Hash | `0x2533F2AB0EB9C6F9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2533F2AB0EB9C6F9(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2533F2AB0EB9C6F9, p0, p1)
```


---

## _0xFE2B3D5500B1B2E4

| Property | Value |
|----------|-------|
| Native Name | `_0xFE2B3D5500B1B2E4` |
| Hash | `0xFE2B3D5500B1B2E4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xFE2B3D5500B1B2E4(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFE2B3D5500B1B2E4, p0, p1)
```


---

## _GET_INTERIOR_MINIMAP_HASH

| Property | Value |
|----------|-------|
| Native Name | `_GET_INTERIOR_MINIMAP_HASH` |
| Hash | `0x3039BE60B3749716` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `interior` (Interior) |

### Parameters

- **`interior`** (`Interior`)

### Usage

**Lua (Direct):**
```lua
local result = GetInteriorMinimapHash(interior)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3039BE60B3749716, interior)
```


---

## _GET_INTERIOR_POSITION

| Property | Value |
|----------|-------|
| Native Name | `_GET_INTERIOR_POSITION` |
| Hash | `0x2C9746D0CA15BE1C` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `interior` (Interior) |

### Parameters

- **`interior`** (`Interior`)

### Usage

**Lua (Direct):**
```lua
local result = GetInteriorPosition(interior)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2C9746D0CA15BE1C, interior)
```


---

## _IS_INTERIOR_ENTITY_SET_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_INTERIOR_ENTITY_SET_VALID` |
| Hash | `0xD56FF170710FC826` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `interior` (Interior), `entitySetName` (const char*) |

### Parameters

- **`interior`** (`Interior`)
- **`entitySetName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsInteriorEntitySetValid(interior, entitySetName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD56FF170710FC826, interior, entitySetName)
```


---

*End of INTERIOR natives*
