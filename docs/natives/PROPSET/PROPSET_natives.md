# PROPSET Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PROPSET  
**Natives in this file:** 37  
**Generated from:** RDR3natives JSON data

---

## CREATE_PROP_SET_INSTANCE_ATTACHED_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `CREATE_PROP_SET_INSTANCE_ATTACHED_TO_ENTITY` |
| Hash | `0x9609DBDDE18FAD8C` |
| Return Type | `PropSet` |
| Build | `1207` |
| Parameters | `hash` (Hash), `x` (float), `y` (float), `z` (float), `entity` (Entity), `p5` (float), `p6` (BOOL), `p7` (int), `p8` (BOOL) |

### Parameters

- **`hash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`entity`** (`Entity`)
- **`p5`** (`float`)
- **`p6`** (`BOOL`)
- **`p7`** (`int`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePropSetInstanceAttachedToEntity(hash, x, y, z, entity, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9609DBDDE18FAD8C, hash, x, y, z, entity, p5, p6, p7, p8)
```


---

## DOES_PROP_SET_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_PROP_SET_EXIST` |
| Hash | `0x7DDDCF815E650FF5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `propSet` (PropSet) |

### Parameters

- **`propSet`** (`PropSet`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPropSetExist(propSet)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7DDDCF815E650FF5, propSet)
```


---

## IS_PROP_SET_FULLY_LOADED

| Property | Value |
|----------|-------|
| Native Name | `IS_PROP_SET_FULLY_LOADED` |
| Hash | `0xF42DB680A8B2A4D9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `propSet` (PropSet) |

### Parameters

- **`propSet`** (`PropSet`)

### Usage

**Lua (Direct):**
```lua
local result = IsPropSetFullyLoaded(propSet)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF42DB680A8B2A4D9, propSet)
```


---

## _0x58E0B01D45CA7357

| Property | Value |
|----------|-------|
| Native Name | `_0x58E0B01D45CA7357` |
| Hash | `0x58E0B01D45CA7357` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x58E0B01D45CA7357(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x58E0B01D45CA7357, p0)
```


---

## _MODIFY_PROPSET_COORDS_AND_HEADING

**Description:** Relocates an existing prop set to specified coordinates and adjusts its heading (rotation) without affecting the prop set's internal layout or structure. The `propSet` parameter identifies the prop set to move. The parameters (`coordsX`, `coordsY`, `coordsZ`) set the new central position of the prop set, while `heading` specifies its rotation around the Z-axis (in degrees). When `onGroundProperly` is true, the prop set automatically aligns accurately with the terrain

| Property | Value |
|----------|-------|
| Native Name | `_MODIFY_PROPSET_COORDS_AND_HEADING` |
| Hash | `0xC4B67EF3FD65622D` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `propset` (int), `posX` (float), `posY` (float), `posZ` (float), `onGroundProperly` (BOOL), `heading` (float) |

### Parameters

- **`propset`** (`int`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`onGroundProperly`** (`BOOL`)
- **`heading`** (`float`)

### Usage

**Lua (Direct):**
```lua
ModifyPropsetCoordsAndHeading(propset, posX, posY, posZ, onGroundProperly, heading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC4B67EF3FD65622D, propset, posX, posY, posZ, onGroundProperly, heading)
```


---

## _ADD_ADDITIONAL_PROP_SET_FOR_VEHICLE

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_propsets.lua

| Property | Value |
|----------|-------|
| Native Name | `_ADD_ADDITIONAL_PROP_SET_FOR_VEHICLE` |
| Hash | `0x75F90E4051CC084C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `propset` (Hash) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`propset`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
AddAdditionalPropSetForVehicle(vehicle, propset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75F90E4051CC084C, vehicle, propset)
```


---

## _ADD_LIGHT_PROP_SET_TO_VEHICLE

**Description:** To remove propsets either parse a zero as hash or call 0xE31C0CB1C3186D40
0xA6A9712955F53D9C returns lightPropset Hashes
https://github.com/femga/rdr3_discoveries/blob/master/vehicles/vehicle_modding/vehicle_lantern_propsets.lua

| Property | Value |
|----------|-------|
| Native Name | `_ADD_LIGHT_PROP_SET_TO_VEHICLE` |
| Hash | `0xC0F0417A90402742` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `lightPropset` (Hash) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`lightPropset`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
AddLightPropSetToVehicle(vehicle, lightPropset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC0F0417A90402742, vehicle, lightPropset)
```


---

## _ADD_PROP_SET_FOR_VEHICLE

**Description:** List of vehicle propsets (wagons & trains): https://pastebin.com/1CsnvGLu / https://pastebin.com/v7TtqTgE

| Property | Value |
|----------|-------|
| Native Name | `_ADD_PROP_SET_FOR_VEHICLE` |
| Hash | `0xD80FAF919A2E56EA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `propset` (Hash) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`propset`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
AddPropSetForVehicle(vehicle, propset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD80FAF919A2E56EA, vehicle, propset)
```


---

## _CREATE_PROP_SET

**Description:** propsetType: https://github.com/femga/rdr3_discoveries/blob/master/objects/propsets_list.lua
placementType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/PlacementType

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_PROP_SET` |
| Hash | `0xE65C5CBA95F0E510` |
| Return Type | `PropSet` |
| Build | `1207` |
| Parameters | `propsetType` (Hash), `x` (float), `y` (float), `z` (float), `placementType` (int), `heading` (float), `zProbe` (float), `p7` (BOOL), `useVegMod` (BOOL) |

### Parameters

- **`propsetType`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`placementType`** (`int`)
- **`heading`** (`float`)
- **`zProbe`** (`float`)
- **`p7`** (`BOOL`)
- **`useVegMod`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePropSet(propsetType, x, y, z, placementType, heading, zProbe, p7, useVegMod)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE65C5CBA95F0E510, propsetType, x, y, z, placementType, heading, zProbe, p7, useVegMod)
```


---

## _CREATE_PROP_SET_2

**Description:** Same as _CREATE_PROP_SET

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_PROP_SET_2` |
| Hash | `0x899C97A1CCE7D483` |
| Return Type | `PropSet` |
| Build | `1207` |
| Parameters | `propsetType` (Hash), `x` (float), `y` (float), `z` (float), `placementType` (int), `heading` (float), `zProbe` (float), `p7` (BOOL), `useVegMod` (BOOL) |

### Parameters

- **`propsetType`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`placementType`** (`int`)
- **`heading`** (`float`)
- **`zProbe`** (`float`)
- **`p7`** (`BOOL`)
- **`useVegMod`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePropSet2(propsetType, x, y, z, placementType, heading, zProbe, p7, useVegMod)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x899C97A1CCE7D483, propsetType, x, y, z, placementType, heading, zProbe, p7, useVegMod)
```


---

## _CREATE_PROP_SET_INSTANCE_ATTACHED_TO_ENTITY_2

**Description:** Same as CREATE_PROP_SET_INSTANCE_ATTACHED_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_PROP_SET_INSTANCE_ATTACHED_TO_ENTITY_2` |
| Hash | `0xACA7FB30269096D4` |
| Return Type | `PropSet` |
| Build | `1207` |
| Parameters | `hash` (Hash), `x` (float), `y` (float), `z` (float), `entity` (Entity), `p5` (float), `p6` (BOOL), `p7` (int), `p8` (BOOL) |

### Parameters

- **`hash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`entity`** (`Entity`)
- **`p5`** (`float`)
- **`p6`** (`BOOL`)
- **`p7`** (`int`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreatePropSetInstanceAttachedToEntity2(hash, x, y, z, entity, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xACA7FB30269096D4, hash, x, y, z, entity, p5, p6, p7, p8)
```


---

## _DELETE_PROP_SET

| Property | Value |
|----------|-------|
| Native Name | `_DELETE_PROP_SET` |
| Hash | `0x58AC173A55D9D7B4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `propSet` (PropSet), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`propSet`** (`PropSet`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DeletePropSet(propSet, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x58AC173A55D9D7B4, propSet, p1, p2)
```


---

## _DOES_PROP_SET_OF_TYPE_EXIST_NEAR_COORDS

| Property | Value |
|----------|-------|
| Native Name | `_DOES_PROP_SET_OF_TYPE_EXIST_NEAR_COORDS` |
| Hash | `0x72068021F498E6E3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `propsetHash` (Hash), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`propsetHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPropSetOfTypeExistNearCoords(propsetHash, x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x72068021F498E6E3, propsetHash, x, y, z)
```


---

## _DOES_VEHICLE_HAVE_ANY_LIGHT_PROP_SET

| Property | Value |
|----------|-------|
| Native Name | `_DOES_VEHICLE_HAVE_ANY_LIGHT_PROP_SET` |
| Hash | `0xC9B4B3A36F81FD75` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = DoesVehicleHaveAnyLightPropSet(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC9B4B3A36F81FD75, vehicle)
```


---

## _DOES_VEHICLE_HAVE_ANY_PROP_SET

| Property | Value |
|----------|-------|
| Native Name | `_DOES_VEHICLE_HAVE_ANY_PROP_SET` |
| Hash | `0x53784CEA0159439B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = DoesVehicleHaveAnyPropSet(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x53784CEA0159439B, vehicle)
```


---

## _GET_ENTITIES_FROM_PROP_SET

| Property | Value |
|----------|-------|
| Native Name | `_GET_ENTITIES_FROM_PROP_SET` |
| Hash | `0x738271B660FE0695` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `propSet` (PropSet), `itemSet` (ItemSet), `model` (Hash), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`propSet`** (`PropSet`)
- **`itemSet`** (`ItemSet`)
- **`model`** (`Hash`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetEntitiesFromPropSet(propSet, itemSet, model, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x738271B660FE0695, propSet, itemSet, model, p3, p4)
```


---

## _GET_PROP_SET_AT_COORDS

| Property | Value |
|----------|-------|
| Native Name | `_GET_PROP_SET_AT_COORDS` |
| Hash | `0xC061E50F8D299F95` |
| Return Type | `PropSet` |
| Build | `1207` |
| Parameters | `propsetHash` (Hash), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`propsetHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetPropSetAtCoords(propsetHash, x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC061E50F8D299F95, propsetHash, x, y, z)
```


---

## _GET_PROP_SET_MODEL

| Property | Value |
|----------|-------|
| Native Name | `_GET_PROP_SET_MODEL` |
| Hash | `0xA6A9712955F53D9C` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `propSet` (PropSet) |

### Parameters

- **`propSet`** (`PropSet`)

### Usage

**Lua (Direct):**
```lua
local result = GetPropSetModel(propSet)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA6A9712955F53D9C, propSet)
```


---

## _GET_TRAIN_CARRIAGE_PROP_SET

**Description:** Example before/after deleting a train carriage's propset: https://imgur.com/a/qRNrIrK

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRAIN_CARRIAGE_PROP_SET` |
| Hash | `0xCFC0BD09BB1B73FF` |
| Return Type | `PropSet` |
| Build | `1207` |
| Parameters | `trainCarriage` (Entity) |

### Parameters

- **`trainCarriage`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetTrainCarriagePropSet(trainCarriage)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCFC0BD09BB1B73FF, trainCarriage)
```


---

## _GET_VEHICLE_LIGHT_PROP_SET

**Description:** Returns PropSet handle to be used with _GET_PROP_SET_MODEL

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_LIGHT_PROP_SET` |
| Hash | `0xA079300AF757FB1A` |
| Return Type | `PropSet` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleLightPropSet(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA079300AF757FB1A, vehicle)
```


---

## _GET_VEHICLE_PROP_SET

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_PROP_SET` |
| Hash | `0xCE2ACD6F602803E5` |
| Return Type | `PropSet` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehiclePropSet(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCE2ACD6F602803E5, vehicle)
```


---

## _GET_VEHICLE_PROP_SET_HASH

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_PROP_SET_HASH` |
| Hash | `0x36F69E7A22655653` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehiclePropSetHash(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x36F69E7A22655653, vehicle)
```


---

## _HAS_PROP_SET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_HAS_PROP_SET_LOADED` |
| Hash | `0x48A88FC684C55FDC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasPropSetLoaded(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x48A88FC684C55FDC, hash)
```


---

## _HAS_PROP_SET_LOADED_2

**Description:** Same as _HAS_PROP_SET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_HAS_PROP_SET_LOADED_2` |
| Hash | `0xD090ABEF4D6A7D96` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasPropSetLoaded2(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD090ABEF4D6A7D96, hash)
```


---

## _HAS_VEHICLE_TRAILER_PROP_SET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_HAS_VEHICLE_TRAILER_PROP_SET_LOADED` |
| Hash | `0x8F3333F0A6900B3C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `wagonIndex` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`wagonIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasVehicleTrailerPropSetLoaded(vehicle, wagonIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8F3333F0A6900B3C, vehicle, wagonIndex)
```


---

## _IS_PROP_SET_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `_IS_PROP_SET_VISIBLE` |
| Hash | `0x0CE8AAFE9E433A23` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `propSet` (PropSet) |

### Parameters

- **`propSet`** (`PropSet`)

### Usage

**Lua (Direct):**
```lua
local result = IsPropSetVisible(propSet)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0CE8AAFE9E433A23, propSet)
```


---

## _IS_VEHICLE_LIGHT_PROP_SET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_IS_VEHICLE_LIGHT_PROP_SET_LOADED` |
| Hash | `0x0790473EEE1977D3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehicleLightPropSetLoaded(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0790473EEE1977D3, vehicle)
```


---

## _IS_VEHICLE_PROP_SET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_IS_VEHICLE_PROP_SET_LOADED` |
| Hash | `0x155B2FBE72D7D1D0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehiclePropSetLoaded(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x155B2FBE72D7D1D0, vehicle)
```


---

## _IS_VEHICLE_PROP_SET_LOADED_ADDITIONAL

| Property | Value |
|----------|-------|
| Native Name | `_IS_VEHICLE_PROP_SET_LOADED_ADDITIONAL` |
| Hash | `0x7264F9CA87A9830B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsVehiclePropSetLoadedAdditional(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7264F9CA87A9830B, vehicle)
```


---

## _RELEASE_PROP_SET

| Property | Value |
|----------|-------|
| Native Name | `_RELEASE_PROP_SET` |
| Hash | `0xB1964A83B345B4AB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ReleasePropSet(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB1964A83B345B4AB, hash)
```


---

## _REMOVE_VEHICLE_LIGHT_PROP_SETS

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_VEHICLE_LIGHT_PROP_SETS` |
| Hash | `0xE31C0CB1C3186D40` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
RemoveVehicleLightPropSets(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE31C0CB1C3186D40, vehicle)
```


---

## _REMOVE_VEHICLE_PROP_SETS

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_VEHICLE_PROP_SETS` |
| Hash | `0x3BCF32FF37EA9F1D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
RemoveVehiclePropSets(vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3BCF32FF37EA9F1D, vehicle)
```


---

## _REQUEST_PROP_SET

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PROP_SET` |
| Hash | `0xF3DE57A46D5585E9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = RequestPropSet(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF3DE57A46D5585E9, hash)
```


---

## _REQUEST_PROP_SET_2

**Description:** Same as _REQUEST_PROP_SET

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PROP_SET_2` |
| Hash | `0xE72F591958F3ACAB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = RequestPropSet2(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE72F591958F3ACAB, hash)
```


---

## _SET_PROP_SET_AS_NO_LONGER_NEEDED

| Property | Value |
|----------|-------|
| Native Name | `_SET_PROP_SET_AS_NO_LONGER_NEEDED` |
| Hash | `0x909E3C7FAE539FB1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `propSet` (PropSet) |

### Parameters

- **`propSet`** (`PropSet`)

### Usage

**Lua (Direct):**
```lua
SetPropSetAsNoLongerNeeded(propSet)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x909E3C7FAE539FB1, propSet)
```


---

## _SET_PROP_SET_FLAG

| Property | Value |
|----------|-------|
| Native Name | `_SET_PROP_SET_FLAG` |
| Hash | `0xC1AB7EEFD3E6EE49` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `propSet` (PropSet), `flag` (int) |

### Parameters

- **`propSet`** (`PropSet`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPropSetFlag(propSet, flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC1AB7EEFD3E6EE49, propSet, flag)
```


---

## _SET_PROP_SET_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PROP_SET_VISIBLE` |
| Hash | `0x9D096A5BD02F953E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `propSet` (PropSet), `toggle` (BOOL) |

### Parameters

- **`propSet`** (`PropSet`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPropSetVisible(propSet, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9D096A5BD02F953E, propSet, toggle)
```


---

*End of PROPSET natives*
