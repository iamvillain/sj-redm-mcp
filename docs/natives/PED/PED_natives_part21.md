# PED Natives - Part 21 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 10  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _SET_TOTAL_PED_DAMAGE_FROM_AI

**Description:** _SET_W(EAPON?)*

| Property | Value |
|----------|-------|
| Native Name | `_SET_TOTAL_PED_DAMAGE_FROM_AI` |
| Hash | `0x73B6F907B913C860` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `totalDamage` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`totalDamage`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTotalPedDamageFromAi(ped, totalDamage)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x73B6F907B913C860, ped, totalDamage)
```


---

## _SHOOT_TRIGGER_AT_COORDS

**Description:** Triggers a gunshot
Params: p5 = -1 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_SHOOT_TRIGGER_AT_COORDS` |
| Hash | `0x4C57F27D1554E6B0` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `p4` (int), `p5` (float), `p6` (int), `p7` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p4`** (`int`)
- **`p5`** (`float`)
- **`p6`** (`int`)
- **`p7`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = ShootTriggerAtCoords(ped, x, y, z, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4C57F27D1554E6B0, ped, x, y, z, p4, p5, p6, p7)
```


---

## _SPAWNPOINTS_START_SEARCH_WITH_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_SPAWNPOINTS_START_SEARCH_WITH_VOLUME` |
| Hash | `0x83ED1FC9DF3411F5` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `volume` (Volume), `spawnpointsFlag` (int), `p2` (float), `duration` (int), `p4` (float) |

### Parameters

- **`volume`** (`Volume`)
- **`spawnpointsFlag`** (`int`)
- **`p2`** (`float`)
- **`duration`** (`int`)
- **`p4`** (`float`)

### Usage

**Lua (Direct):**
```lua
SpawnpointsStartSearchWithVolume(volume, spawnpointsFlag, p2, duration, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x83ED1FC9DF3411F5, volume, spawnpointsFlag, p2, duration, p4)
```


---

## _UNRESERVE_AMBIENT_PEDS

| Property | Value |
|----------|-------|
| Native Name | `_UNRESERVE_AMBIENT_PEDS` |
| Hash | `0x7D4E70A67A651C71` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `numPeds` (int) |

### Parameters

- **`numPeds`** (`int`)

### Usage

**Lua (Direct):**
```lua
UnreserveAmbientPeds(numPeds)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7D4E70A67A651C71, numPeds)
```


---

## _UPDATE_ANIMAL_DAMAGE_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_UPDATE_ANIMAL_DAMAGE_MODIFIER` |
| Hash | `0x0F9E754EBE8FDBFA` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
UpdateAnimalDamageModifier(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0F9E754EBE8FDBFA, player)
```


---

## _UPDATE_PED_TEXTURE

**Description:** Should be called at least once for any new texture override.
Otherwise component textures will be just black.
Also needs to be called for updating any ped overlays to apply the changes.

| Property | Value |
|----------|-------|
| Native Name | `_UPDATE_PED_TEXTURE` |
| Hash | `0x92DAABA2C1C10B0E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int) |

### Parameters

- **`textureId`** (`int`)

### Usage

**Lua (Direct):**
```lua
UpdatePedTexture(textureId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x92DAABA2C1C10B0E, textureId)
```


---

## _UPDATE_PED_VARIATION

**Description:** Update variation on ped, needed after first creation, or when component or texture/overlay is changed

| Property | Value |
|----------|-------|
| Native Name | `_UPDATE_PED_VARIATION` |
| Hash | `0xCC8CA3E88256E58F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL), `p3` (BOOL), `p4` (BOOL), `p5` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UpdatePedVariation(ped, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCC8CA3E88256E58F, ped, p1, p2, p3, p4, p5)
```


---

## _UPDATE_PED_WOUND_EFFECT

**Description:** Params: 0.0f to remove wound effects

| Property | Value |
|----------|-------|
| Native Name | `_UPDATE_PED_WOUND_EFFECT` |
| Hash | `0x66B1CB778D911F49` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
UpdatePedWoundEffect(ped, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66B1CB778D911F49, ped, value)
```


---

## _UPDATE_SHOP_ITEM_WEARABLE_STATE

| Property | Value |
|----------|-------|
| Native Name | `_UPDATE_SHOP_ITEM_WEARABLE_STATE` |
| Hash | `0x66B957AAC2EAAEAB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `componentHash` (Hash), `wearableState` (Hash), `p3` (int), `p4` (BOOL), `p5` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`componentHash`** (`Hash`)
- **`wearableState`** (`Hash`)
- **`p3`** (`int`)
- **`p4`** (`BOOL`)
- **`p5`** (`int`)

### Usage

**Lua (Direct):**
```lua
UpdateShopItemWearableState(ped, componentHash, wearableState, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66B957AAC2EAAEAB, ped, componentHash, wearableState, p3, p4, p5)
```


---

## _WARP_PED_OUT_OF_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_WARP_PED_OUT_OF_VEHICLE` |
| Hash | `0xE0B61ED8BB37712F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
WarpPedOutOfVehicle(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0B61ED8BB37712F, ped)
```


---

*End of PED natives part 21*
