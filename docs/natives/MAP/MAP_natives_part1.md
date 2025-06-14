# MAP Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** MAP  
**Natives in this file:** 50  
**Total natives in namespace:** 85  
**Generated from:** RDR3natives JSON data

---

## ADD_POINT_TO_GPS_MULTI_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `ADD_POINT_TO_GPS_MULTI_ROUTE` |
| Hash | `0x64C59DD6834FA942` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AddPointToGpsMultiRoute(x, y, z, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x64C59DD6834FA942, x, y, z, p3)
```


---

## ALLOW_SONAR_BLIPS

| Property | Value |
|----------|-------|
| Native Name | `ALLOW_SONAR_BLIPS` |
| Hash | `0x6E6E64788C07D2E0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AllowSonarBlips(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6E6E64788C07D2E0, toggle)
```


---

## BLIP_ADD_FOR_COORDS

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips
https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips_mp

| Property | Value |
|----------|-------|
| Native Name | `BLIP_ADD_FOR_COORDS` |
| Hash | `0x554D9D53F696D002` |
| Return Type | `Blip` |
| Build | `1207` |
| Parameters | `blipHash` (Hash), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`blipHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = BlipAddForCoords(blipHash, x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x554D9D53F696D002, blipHash, x, y, z)
```


---

## BLIP_ADD_FOR_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `BLIP_ADD_FOR_ENTITY` |
| Hash | `0x23F74C2FDA6E7C61` |
| Return Type | `Blip` |
| Build | `1207` |
| Parameters | `blipHash` (Hash), `entity` (Entity) |

### Parameters

- **`blipHash`** (`Hash`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = BlipAddForEntity(blipHash, entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x23F74C2FDA6E7C61, blipHash, entity)
```


---

## BLIP_ADD_FOR_PICKUP_PLACEMENT

| Property | Value |
|----------|-------|
| Native Name | `BLIP_ADD_FOR_PICKUP_PLACEMENT` |
| Hash | `0xA486008892065FB9` |
| Return Type | `Blip` |
| Build | `1207` |
| Parameters | `blipHash` (Hash), `pickup` (Pickup) |

### Parameters

- **`blipHash`** (`Hash`)
- **`pickup`** (`Pickup`)

### Usage

**Lua (Direct):**
```lua
local result = BlipAddForPickupPlacement(blipHash, pickup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA486008892065FB9, blipHash, pickup)
```


---

## BLIP_ADD_FOR_RADIUS

| Property | Value |
|----------|-------|
| Native Name | `BLIP_ADD_FOR_RADIUS` |
| Hash | `0x45F13B7E0A15C880` |
| Return Type | `Blip` |
| Build | `1207` |
| Parameters | `blipHash` (Hash), `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`blipHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = BlipAddForRadius(blipHash, x, y, z, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x45F13B7E0A15C880, blipHash, x, y, z, radius)
```


---

## BLIP_ADD_MODIFIER

**Description:** https://alloc8or.re/rdr3/doc/enums/eBlipModifier.txt
https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/blip_modifiers

Old name: _BLIP_SET_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `BLIP_ADD_MODIFIER` |
| Hash | `0x662D364ABF16DE2F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `blip` (Blip), `modifierHash` (Hash) |

### Parameters

- **`blip`** (`Blip`)
- **`modifierHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = BlipAddModifier(blip, modifierHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x662D364ABF16DE2F, blip, modifierHash)
```


---

## BLIP_REMOVE_MODIFIER

**Description:** If modifierHash is 0, ALL modifiers will be removed.

| Property | Value |
|----------|-------|
| Native Name | `BLIP_REMOVE_MODIFIER` |
| Hash | `0xB059D7BD3D78C16F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `blip` (Blip), `modifierHash` (Hash) |

### Parameters

- **`blip`** (`Blip`)
- **`modifierHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = BlipRemoveModifier(blip, modifierHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB059D7BD3D78C16F, blip, modifierHash)
```


---

## CLEAR_GPS_CUSTOM_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_GPS_CUSTOM_ROUTE` |
| Hash | `0x1EAA5674B4D181C5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearGpsCustomRoute()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1EAA5674B4D181C5, )
```


---

## CLEAR_GPS_FLAGS

**Description:** Clears the GPS flags.

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_GPS_FLAGS` |
| Hash | `0x4D3771237C79FF41` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearGpsFlags()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D3771237C79FF41, )
```


---

## CLEAR_GPS_MULTI_ROUTE

**Description:** Does the same as SET_GPS_MULTI_ROUTE_RENDER(false);

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_GPS_MULTI_ROUTE` |
| Hash | `0x9E0AB9AAEE87CE28` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearGpsMultiRoute()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9E0AB9AAEE87CE28, )
```


---

## CLEAR_GPS_PLAYER_WAYPOINT

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_GPS_PLAYER_WAYPOINT` |
| Hash | `0x08FDC6F796E350D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearGpsPlayerWaypoint()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x08FDC6F796E350D1, )
```


---

## DISPLAY_RADAR

**Description:** If Minimap / Radar should be displayed.

| Property | Value |
|----------|-------|
| Native Name | `DISPLAY_RADAR` |
| Hash | `0x1B3DA717B9AFF828` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DisplayRadar(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1B3DA717B9AFF828, toggle)
```


---

## DOES_BLIP_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_BLIP_EXIST` |
| Hash | `0xCD82FA174080B3B1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `blip` (Blip) |

### Parameters

- **`blip`** (`Blip`)

### Usage

**Lua (Direct):**
```lua
local result = DoesBlipExist(blip)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCD82FA174080B3B1, blip)
```


---

## FORCE_SONAR_BLIPS_THIS_FRAME

**Description:** Doesn't actually return anything.

| Property | Value |
|----------|-------|
| Native Name | `FORCE_SONAR_BLIPS_THIS_FRAME` |
| Hash | `0xEE1C7BA69BB74B08` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ForceSonarBlipsThisFrame()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEE1C7BA69BB74B08, )
```


---

## GET_BLIP_COORDS

| Property | Value |
|----------|-------|
| Native Name | `GET_BLIP_COORDS` |
| Hash | `0x201C319797BDA603` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `blip` (Blip) |

### Parameters

- **`blip`** (`Blip`)

### Usage

**Lua (Direct):**
```lua
local result = GetBlipCoords(blip)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x201C319797BDA603, blip)
```


---

## GET_BLIP_FROM_ENTITY

**Description:** Returns the Blip handle of given Entity.

| Property | Value |
|----------|-------|
| Native Name | `GET_BLIP_FROM_ENTITY` |
| Hash | `0x6D2C41A8BD6D6FD0` |
| Return Type | `Blip` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetBlipFromEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6D2C41A8BD6D6FD0, entity)
```


---

## GET_MAIN_PLAYER_BLIP_ID

| Property | Value |
|----------|-------|
| Native Name | `GET_MAIN_PLAYER_BLIP_ID` |
| Hash | `0x5CD2889B2B381D45` |
| Return Type | `Blip` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetMainPlayerBlipId()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5CD2889B2B381D45, )
```


---

## IS_BLIP_ON_MINIMAP

| Property | Value |
|----------|-------|
| Native Name | `IS_BLIP_ON_MINIMAP` |
| Hash | `0x46534526B9CD2D17` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `blip` (Blip) |

### Parameters

- **`blip`** (`Blip`)

### Usage

**Lua (Direct):**
```lua
local result = IsBlipOnMinimap(blip)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x46534526B9CD2D17, blip)
```


---

## IS_WAYPOINT_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_WAYPOINT_ACTIVE` |
| Hash | `0x202B1BBFC6AB5EE4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsWaypointActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x202B1BBFC6AB5EE4, )
```


---

## LOCK_MINIMAP_ANGLE

**Description:** Locks the minimap to the specified angle in integer degrees.

angle: The angle in whole degrees. If less than 0 or greater than 360, unlocks the angle.

| Property | Value |
|----------|-------|
| Native Name | `LOCK_MINIMAP_ANGLE` |
| Hash | `0x0BFD145EF819FB3A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `angle` (int) |

### Parameters

- **`angle`** (`int`)

### Usage

**Lua (Direct):**
```lua
LockMinimapAngle(angle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0BFD145EF819FB3A, angle)
```


---

## REMOVE_BLIP

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_BLIP` |
| Hash | `0xF2C3C9DA47AAA54A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `blip` (Blip*) |

### Parameters

- **`blip`** (`Blip*`)

### Usage

**Lua (Direct):**
```lua
RemoveBlip(blip)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF2C3C9DA47AAA54A, blip)
```


---

## RESET_MINIMAP_FOW

| Property | Value |
|----------|-------|
| Native Name | `RESET_MINIMAP_FOW` |
| Hash | `0xEB3CB3386C775D72` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ResetMinimapFow(hash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEB3CB3386C775D72, hash)
```


---

## SET_BLIP_COORDS

| Property | Value |
|----------|-------|
| Native Name | `SET_BLIP_COORDS` |
| Hash | `0x4FF674F5E23D49CE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `blip` (Blip), `posX` (float), `posY` (float), `posZ` (float) |

### Parameters

- **`blip`** (`Blip`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetBlipCoords(blip, posX, posY, posZ)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4FF674F5E23D49CE, blip, posX, posY, posZ)
```


---

## SET_BLIP_FLASHES

| Property | Value |
|----------|-------|
| Native Name | `SET_BLIP_FLASHES` |
| Hash | `0x0DF2B55F717DDB10` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `blip` (Blip), `p1` (int*), `p2` (Hash*) |

### Parameters

- **`blip`** (`Blip`)
- **`p1`** (`int*`)
- **`p2`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = SetBlipFlashes(blip, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0DF2B55F717DDB10, blip, p1, p2)
```


---

## SET_BLIP_FLASH_TIMER

| Property | Value |
|----------|-------|
| Native Name | `SET_BLIP_FLASH_TIMER` |
| Hash | `0x02FF4CF43B7209D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `blip` (Blip), `blipType` (int), `blipHash` (Hash) |

### Parameters

- **`blip`** (`Blip`)
- **`blipType`** (`int`)
- **`blipHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetBlipFlashTimer(blip, blipType, blipHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x02FF4CF43B7209D1, blip, blipType, blipHash)
```


---

## SET_BLIP_NAME_FROM_TEXT_FILE

| Property | Value |
|----------|-------|
| Native Name | `SET_BLIP_NAME_FROM_TEXT_FILE` |
| Hash | `0x0A062D6D7C0B2C2C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `blip` (Blip), `textLabel` (char*) |

### Parameters

- **`blip`** (`Blip`)
- **`textLabel`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetBlipNameFromTextFile(blip, textLabel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0A062D6D7C0B2C2C, blip, textLabel)
```


---

## SET_BLIP_NAME_TO_PLAYER_NAME

| Property | Value |
|----------|-------|
| Native Name | `SET_BLIP_NAME_TO_PLAYER_NAME` |
| Hash | `0x093DD5A31BC2B459` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `blip` (Blip), `player` (Player) |

### Parameters

- **`blip`** (`Blip`)
- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SetBlipNameToPlayerName(blip, player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x093DD5A31BC2B459, blip, player)
```


---

## SET_BLIP_ROTATION

| Property | Value |
|----------|-------|
| Native Name | `SET_BLIP_ROTATION` |
| Hash | `0x6049966A94FBE706` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `blip` (Blip), `rotation` (int) |

### Parameters

- **`blip`** (`Blip`)
- **`rotation`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetBlipRotation(blip, rotation)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6049966A94FBE706, blip, rotation)
```


---

## SET_BLIP_SCALE

**Description:** only works for BLIP_ADD_FOR_RADIUS AND BLIP_ADD_FOR_AREA, this native works as a radius not really a scale

| Property | Value |
|----------|-------|
| Native Name | `SET_BLIP_SCALE` |
| Hash | `0xD38744167B2FA257` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `blip` (Blip), `scale` (float) |

### Parameters

- **`blip`** (`Blip`)
- **`scale`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetBlipScale(blip, scale)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD38744167B2FA257, blip, scale)
```


---

## SET_BLIP_SPRITE

| Property | Value |
|----------|-------|
| Native Name | `SET_BLIP_SPRITE` |
| Hash | `0x74F74D3207ED525C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `blip` (Blip), `hash` (Hash), `p2` (BOOL) |

### Parameters

- **`blip`** (`Blip`)
- **`hash`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetBlipSprite(blip, hash, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74F74D3207ED525C, blip, hash, p2)
```


---

## SET_GPS_CUSTOM_ROUTE_RENDER

| Property | Value |
|----------|-------|
| Native Name | `SET_GPS_CUSTOM_ROUTE_RENDER` |
| Hash | `0xF6CEF599FC470B33` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `p1` (int), `p2` (int) |

### Parameters

- **`p0`** (`BOOL`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetGpsCustomRouteRender(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF6CEF599FC470B33, p0, p1, p2)
```


---

## SET_GPS_FLAGS

**Description:** https://alloc8or.re/rdr3/doc/enums/rage__eGpsFlags.txt

| Property | Value |
|----------|-------|
| Native Name | `SET_GPS_FLAGS` |
| Hash | `0x5DE61C90DDECFA2D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (float) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetGpsFlags(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5DE61C90DDECFA2D, p0, p1)
```


---

## SET_GPS_MULTI_ROUTE_RENDER

| Property | Value |
|----------|-------|
| Native Name | `SET_GPS_MULTI_ROUTE_RENDER` |
| Hash | `0x4426D65E029A4DC0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetGpsMultiRouteRender(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4426D65E029A4DC0, toggle)
```


---

## SET_MINIMAP_FOW_REVEAL_COORDINATE

**Description:** Up to eight coordinates may be revealed per frame

| Property | Value |
|----------|-------|
| Native Name | `SET_MINIMAP_FOW_REVEAL_COORDINATE` |
| Hash | `0x73348402566ECB6E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (Hash) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetMinimapFowRevealCoordinate(x, y, z, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x73348402566ECB6E, x, y, z, p3)
```


---

## SET_MINIMAP_FOW_REVEAL_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `SET_MINIMAP_FOW_REVEAL_VOLUME` |
| Hash | `0x63CBBD6CA6F321F9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `p1` (Hash) |

### Parameters

- **`volume`** (`Volume`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetMinimapFowRevealVolume(volume, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x63CBBD6CA6F321F9, volume, p1)
```


---

## SET_MINIMAP_HIDE_FOW

**Description:** Reveals the entire minimap (FOW = Fog of War)

| Property | Value |
|----------|-------|
| Native Name | `SET_MINIMAP_HIDE_FOW` |
| Hash | `0x4B8F743A4A6D2FF8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetMinimapHideFow(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4B8F743A4A6D2FF8, toggle)
```


---

## SET_RADAR_AS_EXTERIOR_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_RADAR_AS_EXTERIOR_THIS_FRAME` |
| Hash | `0xA8EBBAE986FB5457` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetRadarAsExteriorThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA8EBBAE986FB5457, )
```


---

## SET_RADAR_ZOOM

| Property | Value |
|----------|-------|
| Native Name | `SET_RADAR_ZOOM` |
| Hash | `0xCAF6489DA2C8DD9E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `zoomLevel` (int) |

### Parameters

- **`zoomLevel`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetRadarZoom(zoomLevel)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCAF6489DA2C8DD9E, zoomLevel)
```


---

## SET_WAYPOINT_OFF

| Property | Value |
|----------|-------|
| Native Name | `SET_WAYPOINT_OFF` |
| Hash | `0xFA8C41E8020D3439` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetWaypointOff()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA8C41E8020D3439, )
```


---

## START_GPS_MULTI_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `START_GPS_MULTI_ROUTE` |
| Hash | `0x3D3D15AF7BCAAF83` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `colorNameHash` (Hash), `onFoot` (BOOL), `inVehicle` (BOOL) |

### Parameters

- **`colorNameHash`** (`Hash`)
- **`onFoot`** (`BOOL`)
- **`inVehicle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StartGpsMultiRoute(colorNameHash, onFoot, inVehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3D3D15AF7BCAAF83, colorNameHash, onFoot, inVehicle)
```


---

## TRIGGER_SONAR_BLIP

| Property | Value |
|----------|-------|
| Native Name | `TRIGGER_SONAR_BLIP` |
| Hash | `0x72DD432F3CDFC0EE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `typeHash` (Hash), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`typeHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
TriggerSonarBlip(typeHash, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x72DD432F3CDFC0EE, typeHash, x, y, z)
```


---

## UNLOCK_MINIMAP_ANGLE

| Property | Value |
|----------|-------|
| Native Name | `UNLOCK_MINIMAP_ANGLE` |
| Hash | `0x5373DE8E179BC2A0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
UnlockMinimapAngle()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5373DE8E179BC2A0, )
```


---

## _CLEAR_BLIP

**Description:** Clear blip data. It must be used before RemoveBlip I'm pretty sure that blips are handled internally with databinding. This function should then allow you to clear blip container and therefore free up memory?.

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_BLIP` |
| Hash | `0x01B928CA2E198B01` |
| Return Type | `Any` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `blipid` (Blip) |

### Parameters

- **`blipid`** (`Blip`)

### Usage

**Lua (Direct):**
```lua
local result = ClearBlip(blipid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x01B928CA2E198B01, blipid)
```


---

## _SET_BLIP_ICON_ON_ENTITY_ACTIVE_PROMPT

**Description:** It adds blip a icon to active prompts like from scenarios or pickups without the need to use lockon

| Property | Value |
|----------|-------|
| Native Name | `_SET_BLIP_ICON_ON_ENTITY_ACTIVE_PROMPT` |
| Hash | `0x1726963E6049DB53` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `blipIcon` (Hash) |

### Parameters

- **`entity`** (`Entity`)
- **`blipIcon`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetBlipIconOnEntityActivePrompt(entity, blipIcon)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1726963E6049DB53, entity, blipIcon)
```


---

## _BLIP_DETACH_FROM_ENTITY

**Description:** Not official native name
Removes the blip from an entity and makes it static on the map, try it on GetMainPlayerBlipId() for a demonstration

| Property | Value |
|----------|-------|
| Native Name | `_BLIP_DETACH_FROM_ENTITY` |
| Hash | `0x250C75EB1728CC0D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `blip` (Blip) |

### Parameters

- **`blip`** (`Blip`)

### Usage

**Lua (Direct):**
```lua
BlipDetachFromEntity(blip)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x250C75EB1728CC0D, blip)
```


---

## _IS_BLIP_ICON_ON_LOCKON_ENTITY_PROMPT

**Description:** checks if the entity lockon prompt contains an icon

| Property | Value |
|----------|-------|
| Native Name | `_IS_BLIP_ICON_ON_LOCKON_ENTITY_PROMPT` |
| Hash | `0x3CB8859F04763C78` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `blipId` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`blipId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsBlipIconOnLockonEntityPrompt(entity, blipId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3CB8859F04763C78, entity, blipId)
```


---

## _CLEAR_BLIP_ICON_FROM_LOCKON_ENTITY_PROMPT

**Description:** will remove the blip icon from the entity lockon prompt, use 0 for p1

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_BLIP_ICON_FROM_LOCKON_ENTITY_PROMPT` |
| Hash | `0x44813684F72B563C` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearBlipIconFromLockonEntityPrompt(entity, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x44813684F72B563C, entity, p1)
```


---

## _SET_BLIP_ICON_TO_LOCKON_ENTITY_PROMPT

**Description:** will add a blip icon to the entity lockon prompt that you specify

| Property | Value |
|----------|-------|
| Native Name | `_SET_BLIP_ICON_TO_LOCKON_ENTITY_PROMPT` |
| Hash | `0x7563CBCA99253D1A` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `blipIcon` (Hash) |

### Parameters

- **`entity`** (`Entity`)
- **`blipIcon`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetBlipIconToLockonEntityPrompt(entity, blipIcon)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7563CBCA99253D1A, entity, blipIcon)
```


---

## _CLEAR_PAUSEMAP_COORDS

**Description:** Clears the previously set coordinates for the pause map view, removing any specified focal point and radius that were set using `SetPausemapCoordsWithRadius - 0xE0884C184728C75B`

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PAUSEMAP_COORDS` |
| Hash | `0x7C9F4CDF402CA82A` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1311` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearPausemapCoords()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C9F4CDF402CA82A, )
```


---

*End of MAP natives part 1*
