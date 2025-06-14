# PED Natives - Part 15 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _CLEAR_PED_ACTION_DISABLE_FLAG

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PED_ACTION_DISABLE_FLAG` |
| Hash | `0x949B2F9ED2917F5D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `actionDisableFlag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`actionDisableFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearPedActionDisableFlag(ped, actionDisableFlag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x949B2F9ED2917F5D, ped, actionDisableFlag)
```


---

## _CLEAR_PED_BLOOD_DAMAGE_FACIAL

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PED_BLOOD_DAMAGE_FACIAL` |
| Hash | `0x7F5D88333EE8A86F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearPedBloodDamageFacial(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7F5D88333EE8A86F, ped, p1)
```


---

## _CLEAR_PED_COMBAT_STYLE

**Description:** Params: p1 = 1 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PED_COMBAT_STYLE` |
| Hash | `0x78815FC52832B690` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearPedCombatStyle(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x78815FC52832B690, ped, p1)
```


---

## _CLEAR_PED_COMBAT_STYLE_MOD

**Description:** _CLEAR_PED_COMBAT_*

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PED_COMBAT_STYLE_MOD` |
| Hash | `0x1FA132CBCD7CB239` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `combatStyleModHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`combatStyleModHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ClearPedCombatStyleMod(ped, combatStyleModHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1FA132CBCD7CB239, ped, combatStyleModHash)
```


---

## _CLEAR_PED_DESIRED_LOCO_FOR_MODEL

**Description:** Clears locomotion archetype

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PED_DESIRED_LOCO_FOR_MODEL` |
| Hash | `0x4FD80C3DD84B817B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearPedDesiredLocoForModel(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4FD80C3DD84B817B, ped)
```


---

## _CLEAR_PED_DESIRED_LOCO_MOTION_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PED_DESIRED_LOCO_MOTION_TYPE` |
| Hash | `0x58F7DB5BD8FA2288` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ClearPedDesiredLocoMotionType(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x58F7DB5BD8FA2288, ped)
```


---

## _CLEAR_PED_GRAPPLE_FLAG

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PED_GRAPPLE_FLAG` |
| Hash | `0xEAE3B5B019C8D23F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearPedGrappleFlag(ped, flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEAE3B5B019C8D23F, ped, flag)
```


---

## _CLEAR_PED_TARGET_ACTION_DISABLE_FLAG

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PED_TARGET_ACTION_DISABLE_FLAG` |
| Hash | `0xBBF6D1D07C02D00A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `actionDisableFlag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`actionDisableFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearPedTargetActionDisableFlag(ped, actionDisableFlag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBBF6D1D07C02D00A, ped, actionDisableFlag)
```


---

## _CLEAR_PED_TEXTURE

**Description:** Removes every texture layer
Old Name: _RESET_PED_TEXTURE_2

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PED_TEXTURE` |
| Hash | `0xB63B9178D0F58D82` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int) |

### Parameters

- **`textureId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearPedTexture(textureId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB63B9178D0F58D82, textureId)
```


---

## _CLEAR_PELT_FROM_HORSE

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_PELT_FROM_HORSE` |
| Hash | `0x627F7F3A0C4C51FF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `horse` (Ped), `peltId` (int) |

### Parameters

- **`horse`** (`Ped`)
- **`peltId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearPeltFromHorse(horse, peltId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x627F7F3A0C4C51FF, horse, peltId)
```


---

## _COMPUTE_SATCHEL_ITEM_FOR_PED_CARCASS

**Description:** Related to dead animals items/loots
Notice: skinningQuality is partially calculated using pedQuality

| Property | Value |
|----------|-------|
| Native Name | `_COMPUTE_SATCHEL_ITEM_FOR_PED_CARCASS` |
| Hash | `0x6B89FAA36FC909A3` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `outInventoryItemArray` (Any*), `ped` (Ped), `damageCleanliness` (int), `skinningQuality` (int) |

### Parameters

- **`outInventoryItemArray`** (`Any*`)
- **`ped`** (`Ped`)
- **`damageCleanliness`** (`int`)
- **`skinningQuality`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ComputeSatchelItemForPedCarcass(outInventoryItemArray, ped, damageCleanliness, skinningQuality)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6B89FAA36FC909A3, outInventoryItemArray, ped, damageCleanliness, skinningQuality)
```


---

## _CREATE_GRAVITY_WELL

**Description:** Creates a handle to an instance of "CScriptResource_GravityWell", this system forces local ped to target specified position when moving, however player still can interrupt this.
Can be useful to "point" player at some specific position.
Only works while on-foot.

_CREATE_[P-Z]

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_GRAVITY_WELL` |
| Hash | `0x4F5EBE70081E5A20` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `xPos` (float), `yPos` (float), `zPos` (float), `heading` (float), `radius` (float), `p5` (float), `p6` (float), `p7` (float), `stopAtDestination` (BOOL) |

### Parameters

- **`xPos`** (`float`)
- **`yPos`** (`float`)
- **`zPos`** (`float`)
- **`heading`** (`float`)
- **`radius`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`stopAtDestination`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateGravityWell(xPos, yPos, zPos, heading, radius, p5, p6, p7, stopAtDestination)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4F5EBE70081E5A20, xPos, yPos, zPos, heading, radius, p5, p6, p7, stopAtDestination)
```


---

## _CREATE_META_PED

**Description:** Only used in SP scripts, for example odriscolls1: BOOLS: true, true, true, false, false

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_META_PED` |
| Hash | `0x0BCD4091C8EABA42` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `requestId` (int), `x` (float), `y` (float), `z` (float), `heading` (float), `p5` (BOOL), `p6` (BOOL), `p7` (BOOL), `p8` (BOOL), `p9` (BOOL) |

### Parameters

- **`requestId`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateMetaPed(requestId, x, y, z, heading, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0BCD4091C8EABA42, requestId, x, y, z, heading, p5, p6, p7, p8, p9)
```


---

## _CREATE_META_PED_ASSET

**Description:** Creates prop from metaped asset bundle
https://github.com/femga/rdr3_discoveries/blob/master/objects/metaped_asset_bundles_list.lua
Creates a pickup-able metaped component. asset doesn't seems to be related to component hashes. Hash example : 0xD20354AB (https ://i.imgur.com/dzHkcDb.png)

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_META_PED_ASSET` |
| Hash | `0x9641A9A20310F6B8` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `asset` (Hash), `posX` (float), `posY` (float), `posZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `p7` (BOOL), `p8` (BOOL), `p9` (BOOL) |

### Parameters

- **`asset`** (`Hash`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateMetaPedAsset(asset, posX, posY, posZ, rotX, rotY, rotZ, p7, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9641A9A20310F6B8, asset, posX, posY, posZ, rotX, rotY, rotZ, p7, p8, p9)
```


---

## _CREATE_META_PED_OUTFIT_PED

**Description:** Creates metaped from ped outfit requestId. See _REQUEST_METAPED_OUTFIT

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_META_PED_OUTFIT_PED` |
| Hash | `0xEAF682A14F8E5F53` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `requestId` (int), `x` (float), `y` (float), `z` (float), `heading` (float), `p5` (BOOL), `p6` (BOOL), `p7` (BOOL), `p8` (BOOL) |

### Parameters

- **`requestId`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = CreateMetaPedOutfitPed(requestId, x, y, z, heading, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEAF682A14F8E5F53, requestId, x, y, z, heading, p5, p6, p7, p8)
```


---

## _DETACH_VOLUME_FROM_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_DETACH_VOLUME_FROM_ENTITY` |
| Hash | `0x19C975B81BE53C28` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `entity` (Entity) |

### Parameters

- **`volume`** (`Volume`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
DetachVolumeFromEntity(volume, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x19C975B81BE53C28, volume, entity)
```


---

## _DISABLE_ALL_LOOK_AT_REQUESTS

| Property | Value |
|----------|-------|
| Native Name | `_DISABLE_ALL_LOOK_AT_REQUESTS` |
| Hash | `0xE1965A380342BE1F` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
DisableAllLookAtRequests(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE1965A380342BE1F, ped, p1)
```


---

## _DISABLE_AMBIENT_LOOK_AT_REQUESTS

| Property | Value |
|----------|-------|
| Native Name | `_DISABLE_AMBIENT_LOOK_AT_REQUESTS` |
| Hash | `0x80038740C96AD17F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
DisableAmbientLookAtRequests(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x80038740C96AD17F, p0, p1)
```


---

## _DOES_META_PED_OUTFIT_EXIST_FOR_PED_MODEL

| Property | Value |
|----------|-------|
| Native Name | `_DOES_META_PED_OUTFIT_EXIST_FOR_PED_MODEL` |
| Hash | `0xC0E880B7A441164D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outfit` (Hash), `model` (Hash) |

### Parameters

- **`outfit`** (`Hash`)
- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DoesMetaPedOutfitExistForPedModel(outfit, model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC0E880B7A441164D, outfit, model)
```


---

## _DOES_META_PED_SUBOUTFIT_EXIST_FOR_PED_MODEL

| Property | Value |
|----------|-------|
| Native Name | `_DOES_META_PED_SUBOUTFIT_EXIST_FOR_PED_MODEL` |
| Hash | `0x4FF3C2B4E6A196C1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `outfit` (Hash), `suboutfit` (Hash), `model` (Hash) |

### Parameters

- **`outfit`** (`Hash`)
- **`suboutfit`** (`Hash`)
- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DoesMetaPedSuboutfitExistForPedModel(outfit, suboutfit, model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4FF3C2B4E6A196C1, outfit, suboutfit, model)
```


---

## _EQUIP_META_PED_OUTFIT

**Description:** Note: you have to update your ped's variation after calling (using 0xCC8CA3E88256E58F)

Body Types:
MPCREATOR_NEUTRAL
MPCREATOR_SKINNY
MPCREATOR_SKINNY_MUSCULAR
MPCREATOR_HEAVY
MPCREATOR_HEAVY_MUSCULAR

eBodyWeightOutfit (pedattributes.ymt):
-2045421226 (smallest)
-1745814259
-325933489
-1065791927
-844699484
-1273449080
927185840
149872391
399015098
-644349862
1745919061 (default)
1004225511
1278600348
502499352
-2093198664
-1837436619
1736416063
2040610690
-1173634986
-867801909
1960266524 (biggest)

https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_outfits.lua

Alt name: _EQUIP_META_PED_OUTFIT_COMPONENT

| Property | Value |
|----------|-------|
| Native Name | `_EQUIP_META_PED_OUTFIT` |
| Hash | `0x1902C4CFCC5BE57C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `hash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
EquipMetaPedOutfit(ped, hash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1902C4CFCC5BE57C, ped, hash)
```


---

## _EQUIP_META_PED_OUTFIT_EXTRA

**Description:** Changes Multiplayer ped face and body type components, they can be stacked
Params: p3 = 1
Body shape for mp_male from 124 - 128, 110 - 115 for mp_female
Face shape for mp_male from 110 - 123, 96 - 109 for mp_female
Cloth type for mp_male from 0 - 109, 0 - 95 for mp_female

| Property | Value |
|----------|-------|
| Native Name | `_EQUIP_META_PED_OUTFIT_EXTRA` |
| Hash | `0xA5BAE410B03E7371` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `component` (int), `p2` (Any), `p3` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`component`** (`int`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
EquipMetaPedOutfitExtra(ped, component, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA5BAE410B03E7371, ped, component, p2, p3)
```


---

## _EQUIP_META_PED_OUTFIT_PRESET

**Description:** Sets the outfit preset for the ped. The presetId is an index which determines its preset outfit. p2 is always false in the scripts.
If p2 is true as player, then certain components like facial hair and hair will not be removed.
Old name: _SET_PED_OUTFIT_PRESET

| Property | Value |
|----------|-------|
| Native Name | `_EQUIP_META_PED_OUTFIT_PRESET` |
| Hash | `0x77FF8D35EEC6BBC4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `presetId` (int), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`presetId`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EquipMetaPedOutfitPreset(ped, presetId, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x77FF8D35EEC6BBC4, ped, presetId, p2)
```


---

## _EQUIP_META_PED_SUBOUTFIT

| Property | Value |
|----------|-------|
| Native Name | `_EQUIP_META_PED_SUBOUTFIT` |
| Hash | `0x66FF395445A88A6E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `suboutfit` (Hash), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`suboutfit`** (`Hash`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
EquipMetaPedSuboutfit(ped, suboutfit, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66FF395445A88A6E, ped, suboutfit, p2)
```


---

## _FAKE_SET_PED_LOCO_INJURED

| Property | Value |
|----------|-------|
| Native Name | `_FAKE_SET_PED_LOCO_INJURED` |
| Hash | `0x8B3CB08158E98481` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `enabled` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
FakeSetPedLocoInjured(ped, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8B3CB08158E98481, ped, enabled)
```


---

## _FORCE_PED_DEATH

| Property | Value |
|----------|-------|
| Native Name | `_FORCE_PED_DEATH` |
| Hash | `0x1CE875505D45338A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `pedKiller` (Ped), `weapon` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`pedKiller`** (`Ped`)
- **`weapon`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ForcePedDeath(ped, pedKiller, weapon)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1CE875505D45338A, ped, pedKiller, weapon)
```


---

## _GET_ACCURACY_AGAINST_LOCAL_PLAYER_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_GET_ACCURACY_AGAINST_LOCAL_PLAYER_MODIFIER` |
| Hash | `0xDC9273D95976BA22` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetAccuracyAgainstLocalPlayerModifier(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDC9273D95976BA22, ped)
```


---

## _GET_ACTIVE_ANIMAL_OWNER

| Property | Value |
|----------|-------|
| Native Name | `_GET_ACTIVE_ANIMAL_OWNER` |
| Hash | `0xF103823FFE72BB49` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `animal` (Ped) |

### Parameters

- **`animal`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetActiveAnimalOwner(animal)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF103823FFE72BB49, animal)
```


---

## _GET_ACTIVE_DYNAMIC_SCENARIO

**Description:** Returns kneeling, sitting, squating, and sleeping scenario hashes

| Property | Value |
|----------|-------|
| Native Name | `_GET_ACTIVE_DYNAMIC_SCENARIO` |
| Hash | `0x569F1E1237508DEB` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetActiveDynamicScenario(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x569F1E1237508DEB, ped)
```


---

## _GET_ACTIVE_DYNAMIC_SCENARIO_2

**Description:** Returns kneeling, sitting, squating, and sleeping scenario hashes

| Property | Value |
|----------|-------|
| Native Name | `_GET_ACTIVE_DYNAMIC_SCENARIO_2` |
| Hash | `0xC22AA08A8ADB87D4` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetActiveDynamicScenario2(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC22AA08A8ADB87D4, ped)
```


---

## _GET_BLOCKING_OF_NON_TEMPORARY_EVENTS

| Property | Value |
|----------|-------|
| Native Name | `_GET_BLOCKING_OF_NON_TEMPORARY_EVENTS` |
| Hash | `0x268B3AEBF032A88D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetBlockingOfNonTemporaryEvents(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x268B3AEBF032A88D, ped)
```


---

## _GET_CARRIER_AS_HUMAN

| Property | Value |
|----------|-------|
| Native Name | `_GET_CARRIER_AS_HUMAN` |
| Hash | `0x79443D56C8DF45EE` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetCarrierAsHuman(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x79443D56C8DF45EE, entity)
```


---

## _GET_CARRIER_AS_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `_GET_CARRIER_AS_MOUNT` |
| Hash | `0xA033D7E4BBF9844D` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetCarrierAsMount(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA033D7E4BBF9844D, entity)
```


---

## _GET_CARRIER_AS_PED

| Property | Value |
|----------|-------|
| Native Name | `_GET_CARRIER_AS_PED` |
| Hash | `0x09B83E68DE004CD4` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetCarrierAsPed(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x09B83E68DE004CD4, entity)
```


---

## _GET_CHAR_EXPRESSION

**Description:** Gets MetaPedExpression at index specified

For index, see: _SET_CHAR_EXPRESSION

Old name: _GET_PED_FACE_FEATURE

| Property | Value |
|----------|-------|
| Native Name | `_GET_CHAR_EXPRESSION` |
| Hash | `0xFD1BA1EEF7985BB8` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `index` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetCharExpression(ped, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFD1BA1EEF7985BB8, ped, index)
```


---

## _GET_DEFAULT_RELATIONSHIP_GROUP_HASH

| Property | Value |
|----------|-------|
| Native Name | `_GET_DEFAULT_RELATIONSHIP_GROUP_HASH` |
| Hash | `0x3CC4A718C258BDD0` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `modelHash` (Hash) |

### Parameters

- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetDefaultRelationshipGroupHash(modelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3CC4A718C258BDD0, modelHash)
```


---

## _GET_FIRST_ENTITY_PED_IS_CARRYING

| Property | Value |
|----------|-------|
| Native Name | `_GET_FIRST_ENTITY_PED_IS_CARRYING` |
| Hash | `0xD806CD2A4F2C2996` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetFirstEntityPedIsCarrying(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD806CD2A4F2C2996, ped)
```


---

## _GET_GROUP_FORMATION

| Property | Value |
|----------|-------|
| Native Name | `_GET_GROUP_FORMATION` |
| Hash | `0x13A1B061007C906B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `groupId` (int) |

### Parameters

- **`groupId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetGroupFormation(groupId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x13A1B061007C906B, groupId)
```


---

## _GET_HEALTH_RECHARGE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_GET_HEALTH_RECHARGE_MULTIPLIER` |
| Hash | `0x95B8E397B8F4360F` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetHealthRechargeMultiplier(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x95B8E397B8F4360F, ped)
```


---

## _GET_HORSE_TAMING_STATE

**Description:** Returns an int based on enum eTamingState

enum eTamingState
{
	ATS_INVALID = 0,
	ATS_INACTIVE,
	ATS_TARGET_DETECTED,
	ATS_CALLED_OUT,
	ATS_MOUNTABLE,
	ATS_BEING_PATTED,
	ATS_BREAKING_ACTIVE,
	ATS_SPOOKED,
	ATS_RETREATING,
	ATS_FLEEING
};

| Property | Value |
|----------|-------|
| Native Name | `_GET_HORSE_TAMING_STATE` |
| Hash | `0x454AD4DA6C41B5BD` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `horse` (Ped) |

### Parameters

- **`horse`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetHorseTamingState(horse)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x454AD4DA6C41B5BD, horse)
```


---

## _GET_INCAPACITATION_TIME_REMAINING

| Property | Value |
|----------|-------|
| Native Name | `_GET_INCAPACITATION_TIME_REMAINING` |
| Hash | `0x88D9D76D78065487` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetIncapacitationTimeRemaining(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x88D9D76D78065487, ped)
```


---

## _GET_IS_PED_BEING_ROBBED

**Description:** If p2 is false, then this native will return true until the interaction is complete. If true, the native will return true until player pockets robbery item.
_GET_IS_PED_[M-R]*

| Property | Value |
|----------|-------|
| Native Name | `_GET_IS_PED_BEING_ROBBED` |
| Hash | `0xE33F98BD76490ABC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `player` (Player), `trueUntilPlayerPocketsItem` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`player`** (`Player`)
- **`trueUntilPlayerPocketsItem`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsPedBeingRobbed(ped, player, trueUntilPlayerPocketsItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE33F98BD76490ABC, ped, player, trueUntilPlayerPocketsItem)
```


---

## _GET_IS_PED_COMMAND_HASH_PRESENT

| Property | Value |
|----------|-------|
| Native Name | `_GET_IS_PED_COMMAND_HASH_PRESENT` |
| Hash | `0x68821369A2CEADD5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `commandHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`commandHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsPedCommandHashPresent(ped, commandHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x68821369A2CEADD5, ped, commandHash)
```


---

## _GET_IS_PED_IN_DISPUTE_WITH_PED

**Description:** Returns true if ped is in a dispute another ped (pedInDisputeWith can also be 0)

| Property | Value |
|----------|-------|
| Native Name | `_GET_IS_PED_IN_DISPUTE_WITH_PED` |
| Hash | `0x331550B212014B92` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `pedInDisputeWith` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`pedInDisputeWith`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsPedInDisputeWithPed(ped, pedInDisputeWith)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x331550B212014B92, ped, pedInDisputeWith)
```


---

## _GET_IS_PED_MOTIVATION_STATE_ENABLED

**Description:** motivationState: see _SET_PED_MOTIVATION

| Property | Value |
|----------|-------|
| Native Name | `_GET_IS_PED_MOTIVATION_STATE_ENABLED` |
| Hash | `0x33FA048675821DA7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `motivationState` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`motivationState`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetIsPedMotivationStateEnabled(ped, motivationState)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x33FA048675821DA7, ped, motivationState)
```


---

## _GET_LASSOED_LASSOER

| Property | Value |
|----------|-------|
| Native Name | `_GET_LASSOED_LASSOER` |
| Hash | `0x0C31C51168E80365` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetLassoedLassoer(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C31C51168E80365, ped)
```


---

## _GET_LASSOER_OF_PED

**Description:** _IS_PED_S* - _IS_PED_U*

| Property | Value |
|----------|-------|
| Native Name | `_GET_LASSOER_OF_PED` |
| Hash | `0x833F0053340EF413` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetLassoerOfPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x833F0053340EF413, ped)
```


---

## _GET_LASSO_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_GET_LASSO_TARGET` |
| Hash | `0xB65A4DAB460A19BD` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetLassoTarget(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB65A4DAB460A19BD, ped)
```


---

## _GET_LAST_LED_MOUNT

**Description:** Returns last horse the ped was leading

| Property | Value |
|----------|-------|
| Native Name | `_GET_LAST_LED_MOUNT` |
| Hash | `0x693126B5D0457D0D` |
| Return Type | `Ped` |
| Build | `1232` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetLastLedMount(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x693126B5D0457D0D, ped)
```


---

## _GET_LAST_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `_GET_LAST_MOUNT` |
| Hash | `0x4C8B59171957BCF7` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetLastMount(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4C8B59171957BCF7, ped)
```


---

*End of PED natives part 15*
