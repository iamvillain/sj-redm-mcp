# MAP Natives - Part 2 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** MAP  
**Natives in this file:** 35  
**Total natives in namespace:** 85  
**Generated from:** RDR3natives JSON data

---

## _SET_ENTITY_BLIP_ICON_TO_LOCKON_ENTITY_PROMPT

**Description:** adds the entity blip icon to the entity lockon prompt if wrong param will remove the icon if had any

| Property | Value |
|----------|-------|
| Native Name | `_SET_ENTITY_BLIP_ICON_TO_LOCKON_ENTITY_PROMPT` |
| Hash | `0x97F6F158CC5B5CA2` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `blipId` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`blipId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetEntityBlipIconToLockonEntityPrompt(entity, blipId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x97F6F158CC5B5CA2, entity, blipId)
```


---

## _REMOVE_BLIP_ICON_FROM_ENTITY_LOCKON_PROMPT

**Description:** 
in the decompiles this doesnt seem to ever be executed the param needed needs to be above 0 but its always passed as 0
 removes the icon from lockon prompt

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_BLIP_ICON_FROM_ENTITY_LOCKON_PROMPT` |
| Hash | `0xBB68D4D3CA3DE402` |
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
RemoveBlipIconFromEntityLockonPrompt(entity, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB68D4D3CA3DE402, entity, p1)
```


---

## _0xD3F58E9316B7FC2A

| Property | Value |
|----------|-------|
| Native Name | `_0xD3F58E9316B7FC2A` |
| Hash | `0xD3F58E9316B7FC2A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xD3F58E9316B7FC2A(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD3F58E9316B7FC2A, p0)
```


---

## _GET_WAYPOINT_POSITION

**Description:** Unlike `GET_WAYPOINT_COORDS - 0x29B30D07C3F7873B`, which returns a single value, this native returns the x and y coordinates of the waypoint separately as floats from pointer. To retrieve each coordinate, `Citizen.PointerValueFloat()` must be used with this function.

| Property | Value |
|----------|-------|
| Native Name | `_GET_WAYPOINT_POSITION` |
| Hash | `0xF08E42BFA46BDFF8` |
| Return Type | `Any` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `x` (float*), `y` (float*) |

### Parameters

- **`x`** (`float*`)
- **`y`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = GetWaypointPosition(x, y)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF08E42BFA46BDFF8, x, y)
```


### Examples

**Example 1 (lua):**
```lua
local x,y = _GET_WAYPOINT_POSITION(Citizen.PointerValueFloat(),Citizen.PointerValueFloat())
```


---

## _IS_GPS_ROUTE_ON_ROAD

**Description:** Checks if the GPS route to the waypoint is navigable along a road. If a route exists but there is no valid road path, this function returns false.

| Property | Value |
|----------|-------|
| Native Name | `_IS_GPS_ROUTE_ON_ROAD` |
| Hash | `0xF47A1EB2A538A3A3` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsGpsRouteOnRoad()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF47A1EB2A538A3A3, )
```


---

## _ABANDON_BLIP

**Description:** It's unclear what exactly this does, but I assume it marks the blip as "no longer needed"

| Property | Value |
|----------|-------|
| Native Name | `_ABANDON_BLIP` |
| Hash | `0xDEEDE7C41742E011` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `blip` (Blip) |

### Parameters

- **`blip`** (`Blip`)

### Usage

**Lua (Direct):**
```lua
AbandonBlip(blip)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDEEDE7C41742E011, blip)
```


---

## _ADD_PROP_TO_MINIMAP

**Description:** list of minimap props: https://github.com/femga/rdr3_discoveries/tree/master/graphics/minimap/minimapObjects
variations parameter are the interior locations you see on the map like these bellow
variation 0 https://i.imgur.com/jkLhn3Z.png
variation 2  https://i.imgur.com/eKV0Tcm.png
variation 4 https://i.imgur.com/rjwOgEH.png
there are more and you can find them in the decompiles

| Property | Value |
|----------|-------|
| Native Name | `_ADD_PROP_TO_MINIMAP` |
| Hash | `0x1392105DA88BBFFB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `minimapProp` (Hash), `x` (float), `y` (float), `rotation` (float), `variation` (int) |

### Parameters

- **`minimapProp`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`rotation`** (`float`)
- **`variation`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddPropToMinimap(minimapProp, x, y, rotation, variation)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1392105DA88BBFFB, minimapProp, x, y, rotation, variation)
```


---

## _BLIP_ADD_FOR_AREA

| Property | Value |
|----------|-------|
| Native Name | `_BLIP_ADD_FOR_AREA` |
| Hash | `0xEC174ADBCB611ECC` |
| Return Type | `Blip` |
| Build | `1207` |
| Parameters | `blipHash` (Hash), `x` (float), `y` (float), `z` (float), `scaleX` (float), `scaleY` (float), `scaleZ` (float), `p7` (int) |

### Parameters

- **`blipHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`scaleX`** (`float`)
- **`scaleY`** (`float`)
- **`scaleZ`** (`float`)
- **`p7`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = BlipAddForArea(blipHash, x, y, z, scaleX, scaleY, scaleZ, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEC174ADBCB611ECC, blipHash, x, y, z, scaleX, scaleY, scaleZ, p7)
```


---

## _BLIP_ADD_FOR_STYLE

| Property | Value |
|----------|-------|
| Native Name | `_BLIP_ADD_FOR_STYLE` |
| Hash | `0x3E593DF9C2962EC6` |
| Return Type | `Blip` |
| Build | `1207` |
| Parameters | `styleHash` (Hash) |

### Parameters

- **`styleHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = BlipAddForStyle(styleHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3E593DF9C2962EC6, styleHash)
```


---

## _BLIP_ADD_FOR_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_BLIP_ADD_FOR_VOLUME` |
| Hash | `0xA6EF0C54A3443E70` |
| Return Type | `Blip` |
| Build | `1207` |
| Parameters | `blipHash` (Hash), `volume` (Volume) |

### Parameters

- **`blipHash`** (`Hash`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = BlipAddForVolume(blipHash, volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA6EF0C54A3443E70, blipHash, volume)
```


---

## _BLIP_ADD_STYLE

| Property | Value |
|----------|-------|
| Native Name | `_BLIP_ADD_STYLE` |
| Hash | `0xBD62D98799A3DAF0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `blip` (Blip), `styleHash` (Hash) |

### Parameters

- **`blip`** (`Blip`)
- **`styleHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = BlipAddStyle(blip, styleHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBD62D98799A3DAF0, blip, styleHash)
```


---

## _BLIP_SET_STYLE

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/blip_styles
Removes any existing modifiers and sets the style.

| Property | Value |
|----------|-------|
| Native Name | `_BLIP_SET_STYLE` |
| Hash | `0xEDD964B7984AC291` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `blip` (Blip), `styleHash` (Hash) |

### Parameters

- **`blip`** (`Blip`)
- **`styleHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = BlipSetStyle(blip, styleHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEDD964B7984AC291, blip, styleHash)
```


---

## _DOES_ENTITY_HAVE_BLIP

| Property | Value |
|----------|-------|
| Native Name | `_DOES_ENTITY_HAVE_BLIP` |
| Hash | `0x9FA00E2FC134A9D0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = DoesEntityHaveBlip(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9FA00E2FC134A9D0, entity)
```


---

## _FIND_CLOSEST_GPS_POSITION

| Property | Value |
|----------|-------|
| Native Name | `_FIND_CLOSEST_GPS_POSITION` |
| Hash | `0x3FDA2B79AEEE351C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `outPosition` (Vector3*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`outPosition`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
local result = FindClosestGpsPosition(x, y, z, outPosition)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3FDA2B79AEEE351C, x, y, z, outPosition)
```


---

## _GET_WAYPOINT_COORDS

| Property | Value |
|----------|-------|
| Native Name | `_GET_WAYPOINT_COORDS` |
| Hash | `0x29B30D07C3F7873B` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetWaypointCoords()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x29B30D07C3F7873B, )
```


---

## _HIDE_ACTIVE_POINTS_OF_INTEREST

| Property | Value |
|----------|-------|
| Native Name | `_HIDE_ACTIVE_POINTS_OF_INTEREST` |
| Hash | `0xA1B4052C2A3DCC1E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
HideActivePointsOfInterest()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA1B4052C2A3DCC1E, )
```


---

## _IS_BLIP_ATTACHED_TO_ANY_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_IS_BLIP_ATTACHED_TO_ANY_ENTITY` |
| Hash | `0xE9F676788F8D5E1E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `blip` (Blip) |

### Parameters

- **`blip`** (`Blip`)

### Usage

**Lua (Direct):**
```lua
local result = IsBlipAttachedToAnyEntity(blip)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE9F676788F8D5E1E, blip)
```


---

## _MAP_DISABLE_REGION_BLIP

| Property | Value |
|----------|-------|
| Native Name | `_MAP_DISABLE_REGION_BLIP` |
| Hash | `0x6786D7AFAC3162B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `regionHash` (Hash) |

### Parameters

- **`regionHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
MapDisableRegionBlip(regionHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6786D7AFAC3162B3, regionHash)
```


---

## _MAP_DISCOVERY_SET_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_MAP_DISCOVERY_SET_ENABLED` |
| Hash | `0xDA98246C7A3C2189` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `discoveryHash` (Hash) |

### Parameters

- **`discoveryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
MapDiscoverySetEnabled(discoveryHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDA98246C7A3C2189, discoveryHash)
```


---

## _MAP_DISCOVER_REGION

| Property | Value |
|----------|-------|
| Native Name | `_MAP_DISCOVER_REGION` |
| Hash | `0xD8C7162AB2E2AF45` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `discoveryHash` (Hash) |

### Parameters

- **`discoveryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
MapDiscoverRegion(discoveryHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD8C7162AB2E2AF45, discoveryHash)
```


---

## _MAP_ENABLE_REGION_BLIP

**Description:** regionHash: https://github.com/femga/rdr3_discoveries/tree/master/graphics/minimap/wanted_regions

| Property | Value |
|----------|-------|
| Native Name | `_MAP_ENABLE_REGION_BLIP` |
| Hash | `0x563FCB6620523917` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `regionHash` (Hash), `styleHash` (Hash) |

### Parameters

- **`regionHash`** (`Hash`)
- **`styleHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
MapEnableRegionBlip(regionHash, styleHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x563FCB6620523917, regionHash, styleHash)
```


---

## _MAP_IS_DISCOVERY_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_MAP_IS_DISCOVERY_ACTIVE` |
| Hash | `0x3F81EA4275D39D6F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `discoveryHash` (Hash) |

### Parameters

- **`discoveryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MapIsDiscoveryActive(discoveryHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3F81EA4275D39D6F, discoveryHash)
```


---

## _MAP_IS_REGION_HIGHLIGHTED_WITH_STYLE

| Property | Value |
|----------|-------|
| Native Name | `_MAP_IS_REGION_HIGHLIGHTED_WITH_STYLE` |
| Hash | `0xE38450DBCBC70E3D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `regionHash` (Hash), `styleHash` (Hash) |

### Parameters

- **`regionHash`** (`Hash`)
- **`styleHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MapIsRegionHighlightedWithStyle(regionHash, styleHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE38450DBCBC70E3D, regionHash, styleHash)
```


---

## _REMOVE_PROP_FROM_MINIMAP

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PROP_FROM_MINIMAP` |
| Hash | `0xE057FEA9A22EB3EE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `minimapProp` (Hash) |

### Parameters

- **`minimapProp`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemovePropFromMinimap(minimapProp)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE057FEA9A22EB3EE, minimapProp)
```


---

## _REVEAL_MINIMAP_FOW

| Property | Value |
|----------|-------|
| Native Name | `_REVEAL_MINIMAP_FOW` |
| Hash | `0xF8096DF9B87246E3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RevealMinimapFow(hash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF8096DF9B87246E3, hash)
```


---

## _SET_BLIP_NAME

| Property | Value |
|----------|-------|
| Native Name | `_SET_BLIP_NAME` |
| Hash | `0x9CB1A1623062F402` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `blip` (Blip), `name` (char*) |

### Parameters

- **`blip`** (`Blip`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetBlipName(blip, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9CB1A1623062F402, blip, name)
```


---

## _SET_FOW_UPDATE_PLAYER_OVERRIDE

**Description:** Used for GUARMA MODE; Enabled: toggle = false, 0; Disabled: toggle = true, 0
Hash p1 seems to be unused, always 0

| Property | Value |
|----------|-------|
| Native Name | `_SET_FOW_UPDATE_PLAYER_OVERRIDE` |
| Hash | `0x63E7279D04160477` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL), `p1` (Hash) |

### Parameters

- **`toggle`** (`BOOL`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetFowUpdatePlayerOverride(toggle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x63E7279D04160477, toggle, p1)
```


---

## _SET_MINIMAP_FOW_OVERRIDE_REVEAL_SCALE

| Property | Value |
|----------|-------|
| Native Name | `_SET_MINIMAP_FOW_OVERRIDE_REVEAL_SCALE` |
| Hash | `0xE5A7F70B7C0F3271` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scale` (float), `p1` (Hash) |

### Parameters

- **`scale`** (`float`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetMinimapFowOverrideRevealScale(scale, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE5A7F70B7C0F3271, scale, p1)
```


---

## _SET_MINIMAP_FOW_SHOULD_UPDATE

| Property | Value |
|----------|-------|
| Native Name | `_SET_MINIMAP_FOW_SHOULD_UPDATE` |
| Hash | `0x632AA10BF7EA53D3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL), `p1` (Hash) |

### Parameters

- **`toggle`** (`BOOL`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetMinimapFowShouldUpdate(toggle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x632AA10BF7EA53D3, toggle, p1)
```


---

## _SET_MINIMAP_ZONE

**Description:** hash can be the hash of "guarma" or "world".

| Property | Value |
|----------|-------|
| Native Name | `_SET_MINIMAP_ZONE` |
| Hash | `0xA657EC9DBC6CC900` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `zone` (Hash) |

### Parameters

- **`zone`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetMinimapZone(zone)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA657EC9DBC6CC900, zone)
```


---

## _SET_PAUSEMAP_COORDS_WITH_RADIUS

| Property | Value |
|----------|-------|
| Native Name | `_SET_PAUSEMAP_COORDS_WITH_RADIUS` |
| Hash | `0xE0884C184728C75B` |
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
SetPausemapCoordsWithRadius(x, y, z, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0884C184728C75B, x, y, z, radius)
```


---

## _SET_RADAR_CONFIG_TYPE

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/graphics/minimap/radar/radar_configs.lua
configHash: -1943724816, 347777538, -117986897, -789269373, -547506804, -1986542417, 2080113112
p1: usually 898171178 or 0 in R* scripts (doesn't seems to have any effect)

| Property | Value |
|----------|-------|
| Native Name | `_SET_RADAR_CONFIG_TYPE` |
| Hash | `0x9C113883487FD53C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `configHash` (Hash), `p1` (Hash) |

### Parameters

- **`configHash`** (`Hash`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetRadarConfigType(configHash, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9C113883487FD53C, configHash, p1)
```


---

## _SHOW_ACTIVE_POINTS_OF_INTEREST

| Property | Value |
|----------|-------|
| Native Name | `_SHOW_ACTIVE_POINTS_OF_INTEREST` |
| Hash | `0x3FBB838AEA30C1D8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ShowActivePointsOfInterest()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3FBB838AEA30C1D8, )
```


---

## _START_GPS_CUSTOM_ROUTE_FROM_WAYPOINT_RECORDING_ROUTE

| Property | Value |
|----------|-------|
| Native Name | `_START_GPS_CUSTOM_ROUTE_FROM_WAYPOINT_RECORDING_ROUTE` |
| Hash | `0x6B44F13D888F770D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `waypointRecording` (char*), `point` (int), `numPoints` (int), `colorNameHash` (Hash), `p4` (BOOL), `p5` (BOOL) |

### Parameters

- **`waypointRecording`** (`char*`)
- **`point`** (`int`)
- **`numPoints`** (`int`)
- **`colorNameHash`** (`Hash`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StartGpsCustomRouteFromWaypointRecordingRoute(waypointRecording, point, numPoints, colorNameHash, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6B44F13D888F770D, waypointRecording, point, numPoints, colorNameHash, p4, p5)
```


---

## _TRIGGER_SONAR_BLIP_ON_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_TRIGGER_SONAR_BLIP_ON_ENTITY` |
| Hash | `0x0C7A2289A5C4D7C9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `typeHash` (Hash), `entity` (Entity) |

### Parameters

- **`typeHash`** (`Hash`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
TriggerSonarBlipOnEntity(typeHash, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0C7A2289A5C4D7C9, typeHash, entity)
```


---

*End of MAP natives part 2*
