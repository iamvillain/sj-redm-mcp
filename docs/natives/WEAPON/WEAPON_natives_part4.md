# WEAPON Natives - Part 4 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** WEAPON  
**Natives in this file:** 50  
**Total natives in namespace:** 222  
**Generated from:** RDR3natives JSON data

---

## _GET_WEAPON_DIRT

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_DIRT` |
| Hash | `0x810E8AE9AFEA7E54` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `weaponObject` (Object) |

### Parameters

- **`weaponObject`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponDirt(weaponObject)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x810E8AE9AFEA7E54, weaponObject)
```


---

## _GET_WEAPON_EMOTE_VARIATION

**Description:** Returns weaponEmoteVariation

WEAPON_EMOTE_VARIATION_INVALID = -2,
WEAPON_EMOTE_VARIATION_BASE,
WEAPON_EMOTE_VARIATION_A,
WEAPON_EMOTE_VARIATION_B,
WEAPON_EMOTE_VARIATION_C,
WEAPON_EMOTE_VARIATION_D,
WEAPON_EMOTE_VARIATION_PREVIEW,
WEAPON_EMOTE_NUM_VARIATIONS

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_EMOTE_VARIATION` |
| Hash | `0x86147D05FA831D3A` |
| Return Type | `int` |
| Build | `1355` |
| Parameters | `ped` (Ped), `variation` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`variation`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponEmoteVariation(ped, variation)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x86147D05FA831D3A, ped, variation)
```


---

## _GET_WEAPON_GUN_SPINNING_WEAPON_EMOTE_TRICK_TYPE_HASH

**Description:** Returns iSpinHash

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_GUN_SPINNING_WEAPON_EMOTE_TRICK_TYPE_HASH` |
| Hash | `0xF4601C1203B1A78D` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `emote` (Hash), `weaponEmoteTrickType` (int) |

### Parameters

- **`emote`** (`Hash`)
- **`weaponEmoteTrickType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponGunSpinningWeaponEmoteTrickTypeHash(emote, weaponEmoteTrickType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF4601C1203B1A78D, emote, weaponEmoteTrickType)
```


---

## _GET_WEAPON_NAME

**Description:** Returns "WNS_INVALID" if the weapon is invalid/doesn't exist.

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_NAME` |
| Hash | `0x89CF5FF3D363311E` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponName(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x89CF5FF3D363311E, weaponHash)
```


---

## _GET_WEAPON_NAME_2

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_NAME_2` |
| Hash | `0x6D3AC61694A791C5` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponName2(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6D3AC61694A791C5, weaponHash)
```


---

## _GET_WEAPON_NAME_WITH_PERMANENT_DEGRADATION

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_NAME_WITH_PERMANENT_DEGRADATION` |
| Hash | `0x7A56D66C78D8EF8E` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash), `permanentDegradationLevel` (float) |

### Parameters

- **`weaponHash`** (`Hash`)
- **`permanentDegradationLevel`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponNameWithPermanentDegradation(weaponHash, permanentDegradationLevel)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7A56D66C78D8EF8E, weaponHash, permanentDegradationLevel)
```


---

## _GET_WEAPON_OBJECT_FROM_PED

**Description:** Detaches the weapon from the ped and actually removes the ped's weapon

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_OBJECT_FROM_PED` |
| Hash | `0xC6A6789BB405D11C` |
| Return Type | `Object` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponObjectFromPed(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC6A6789BB405D11C, ped, p1)
```


---

## _GET_WEAPON_SCALE

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_SCALE` |
| Hash | `0x22084CA699219624` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `weaponObject` (Object) |

### Parameters

- **`weaponObject`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponScale(weaponObject)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x22084CA699219624, weaponObject)
```


---

## _GET_WEAPON_SOOT

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_SOOT` |
| Hash | `0x4BF66F8878F67663` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `weaponObject` (Object) |

### Parameters

- **`weaponObject`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponSoot(weaponObject)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4BF66F8878F67663, weaponObject)
```


---

## _GET_WEAPON_STAT_ID

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_STAT_ID` |
| Hash | `0x8EC44AE8DECFF841` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponStatId(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8EC44AE8DECFF841, weaponHash)
```


---

## _GET_WEAPON_TYPE_FROM_AMMO_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_TYPE_FROM_AMMO_TYPE` |
| Hash | `0x7AA043F6C41D151E` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ammoType` (Hash) |

### Parameters

- **`ammoType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponTypeFromAmmoType(ammoType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7AA043F6C41D151E, ammoType)
```


---

## _GET_WEAPON_UNLOCK

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_UNLOCK` |
| Hash | `0x865F36299079FB75` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponUnlock(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x865F36299079FB75, weaponHash)
```


---

## _GIVE_WEAPON_COLLECTION_TO_PED

| Property | Value |
|----------|-------|
| Native Name | `_GIVE_WEAPON_COLLECTION_TO_PED` |
| Hash | `0x899A04AFCC725D04` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponCollection` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponCollection`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
GiveWeaponCollectionToPed(ped, weaponCollection)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x899A04AFCC725D04, ped, weaponCollection)
```


---

## _GIVE_WEAPON_COMPONENT_TO_ENTITY

**Description:** entity can be a ped or weapon object.

| Property | Value |
|----------|-------|
| Native Name | `_GIVE_WEAPON_COMPONENT_TO_ENTITY` |
| Hash | `0x74C9090FDD1BB48E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `componentHash` (Hash), `weaponHash` (Hash), `p3` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`componentHash`** (`Hash`)
- **`weaponHash`** (`Hash`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
GiveWeaponComponentToEntity(entity, componentHash, weaponHash, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74C9090FDD1BB48E, entity, componentHash, weaponHash, p3)
```


---

## _GIVE_WEAPON_COMPONENT_TO_WEAPON_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `_GIVE_WEAPON_COMPONENT_TO_WEAPON_OBJECT` |
| Hash | `0x1A47699E8D533E8F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weaponObject` (Object*), `ped` (Ped), `componentHash` (Hash), `p3` (BOOL) |

### Parameters

- **`weaponObject`** (`Object*`)
- **`ped`** (`Ped`)
- **`componentHash`** (`Hash`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
GiveWeaponComponentToWeaponObject(weaponObject, ped, componentHash, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1A47699E8D533E8F, weaponObject, ped, componentHash, p3)
```


---

## _HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `_HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON` |
| Hash | `0xDCF06D0CDFF68424` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `weaponName` (Hash), `weaponType` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`weaponName`** (`Hash`)
- **`weaponType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityBeenDamagedByWeapon(entity, weaponName, weaponType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDCF06D0CDFF68424, entity, weaponName, weaponType)
```


---

## _HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON_RECENTLY

| Property | Value |
|----------|-------|
| Native Name | `_HAS_ENTITY_BEEN_DAMAGED_BY_WEAPON_RECENTLY` |
| Hash | `0x9E2D5D6BC97A5F1E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `weaponHash` (Hash), `ms` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`weaponHash`** (`Hash`)
- **`ms`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasEntityBeenDamagedByWeaponRecently(entity, weaponHash, ms)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9E2D5D6BC97A5F1E, entity, weaponHash, ms)
```


---

## _HAS_PED_GOT_WEAPON_COMPONENT

| Property | Value |
|----------|-------|
| Native Name | `_HAS_PED_GOT_WEAPON_COMPONENT` |
| Hash | `0xBBC67A6F965C688A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `componentHash` (Hash), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`componentHash`** (`Hash`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasPedGotWeaponComponent(ped, componentHash, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBBC67A6F965C688A, ped, componentHash, weaponHash)
```


---

## _HAS_WEAPON_ASSET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_HAS_WEAPON_ASSET_LOADED` |
| Hash | `0xFF07CF465F48B830` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasWeaponAssetLoaded(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFF07CF465F48B830, weaponHash)
```


---

## _HIDE_PED_WEAPONS

**Description:** Unequip current weapon and set current weapon to WEAPON_UNARMED.
p0 usually 2 in R* scripts. Doesn't seem to have any effect if changed....
immediately: if true it will instantly switch to unarmed

| Property | Value |
|----------|-------|
| Native Name | `_HIDE_PED_WEAPONS` |
| Hash | `0xFCCC886EDE3C63EC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p0` (int), `immediately` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p0`** (`int`)
- **`immediately`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
HidePedWeapons(ped, p0, immediately)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFCCC886EDE3C63EC, ped, p0, immediately)
```


---

## _HOLSTER_PED_WEAPONS

| Property | Value |
|----------|-------|
| Native Name | `_HOLSTER_PED_WEAPONS` |
| Hash | `0x94A3C1B804D291EC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL), `p3` (BOOL), `immediately` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`immediately`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
HolsterPedWeapons(ped, p1, p2, p3, immediately)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x94A3C1B804D291EC, ped, p1, p2, p3, immediately)
```


---

## _IS_AMMO_SILENT

| Property | Value |
|----------|-------|
| Native Name | `_IS_AMMO_SILENT` |
| Hash | `0xD2866CBA797E872E` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `ammoHash` (Hash) |

### Parameters

- **`ammoHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsAmmoSilent(ammoHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD2866CBA797E872E, ammoHash)
```


---

## _IS_AMMO_SILENT_2

| Property | Value |
|----------|-------|
| Native Name | `_IS_AMMO_SILENT_2` |
| Hash | `0x7EFACC589B98C488` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ammoHash` (Hash) |

### Parameters

- **`ammoHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsAmmoSilent2(ammoHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7EFACC589B98C488, ammoHash)
```


---

## _IS_AMMO_TYPE_VALID_FOR_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `_IS_AMMO_TYPE_VALID_FOR_WEAPON` |
| Hash | `0xC570B881754DF609` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash), `ammoHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)
- **`ammoHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsAmmoTypeValidForWeapon(weaponHash, ammoHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC570B881754DF609, weaponHash, ammoHash)
```


---

## _IS_AMMO_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_AMMO_VALID` |
| Hash | `0x1F7977C9101F807F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ammoHash` (Hash) |

### Parameters

- **`ammoHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsAmmoValid(ammoHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F7977C9101F807F, ammoHash)
```


---

## _IS_PED_CURRENT_WEAPON_HOLSTERED

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_CURRENT_WEAPON_HOLSTERED` |
| Hash | `0xBDD9C235D8D1052E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedCurrentWeaponHolstered(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBDD9C235D8D1052E, ped)
```


---

## _IS_TARGET_PED_CONSTRAINED_BY_PED_USING_BOLAS

| Property | Value |
|----------|-------|
| Native Name | `_IS_TARGET_PED_CONSTRAINED_BY_PED_USING_BOLAS` |
| Hash | `0x8D50F43298AB9545` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `ped` (Ped), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsTargetPedConstrainedByPedUsingBolas(ped, targetPed)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8D50F43298AB9545, ped, targetPed)
```


---

## _IS_WEAPON_BINOCULARS

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_BINOCULARS` |
| Hash | `0xC853230E76A152DF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponBinoculars(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC853230E76A152DF, weaponHash)
```


---

## _IS_WEAPON_HOLSTER_STATE_CHANGING

**Description:** Returns true if the ped is currently holstering or unholstering a weapon

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_HOLSTER_STATE_CHANGING` |
| Hash | `0x2387D6E9C6B478AA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponHolsterStateChanging(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2387D6E9C6B478AA, ped)
```


---

## _IS_WEAPON_KIT

**Description:** Returns true when the weapon passed is either a lasso, the camera or the binoculars
_IS_WEAPON_M* - _IS_WEAPON_P*

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_KIT` |
| Hash | `0x6ABAD7B0A854F8FB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponKit(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6ABAD7B0A854F8FB, weaponHash)
```


---

## _IS_WEAPON_KIT_2

**Description:** Returns true when the weapon passed is either the fishingrod, a lasso, the camera or the binoculars
_IS_WEAPON_M* - _IS_WEAPON_P*

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_KIT_2` |
| Hash | `0x49E40483948AF062` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponKit2(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x49E40483948AF062, weaponHash)
```


---

## _IS_WEAPON_KNIFE

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_KNIFE` |
| Hash | `0x792E3EF76C911959` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponKnife(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x792E3EF76C911959, weaponHash)
```


---

## _IS_WEAPON_LANTERN

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_LANTERN` |
| Hash | `0x79407D33328286C6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponLantern(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x79407D33328286C6, weaponHash)
```


---

## _IS_WEAPON_LASSO

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_LASSO` |
| Hash | `0x6E4E1A82081EABED` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponLasso(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6E4E1A82081EABED, weaponHash)
```


---

## _IS_WEAPON_ONE_HANDED

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_ONE_HANDED` |
| Hash | `0xD955FEE4B87AFA07` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponOneHanded(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD955FEE4B87AFA07, weaponHash)
```


---

## _IS_WEAPON_SILENT

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_SILENT` |
| Hash | `0x5809DBCA0A37C82B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponSilent(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5809DBCA0A37C82B, weaponHash)
```


---

## _IS_WEAPON_SNIPER

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_SNIPER` |
| Hash | `0x6AD66548840472E5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponSniper(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6AD66548840472E5, weaponHash)
```


---

## _IS_WEAPON_THROWABLE

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_THROWABLE` |
| Hash | `0x30E7C16B12DA8211` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponThrowable(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x30E7C16B12DA8211, weaponHash)
```


---

## _IS_WEAPON_TORCH

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_TORCH` |
| Hash | `0x506F1DE1BFC75304` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponTorch(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x506F1DE1BFC75304, weaponHash)
```


---

## _IS_WEAPON_TWO_HANDED

| Property | Value |
|----------|-------|
| Native Name | `_IS_WEAPON_TWO_HANDED` |
| Hash | `0x0556E9D2ECF39D01` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponTwoHanded(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0556E9D2ECF39D01, weaponHash)
```


---

## _LISTEN_PROJECTILE_HIT_EVENTS

| Property | Value |
|----------|-------|
| Native Name | `_LISTEN_PROJECTILE_HIT_EVENTS` |
| Hash | `0xDA5D3F2C6DD5B5D4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `listen` (BOOL) |

### Parameters

- **`listen`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ListenProjectileHitEvents(listen)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDA5D3F2C6DD5B5D4, listen)
```


---

## _MAKE_PED_RELOAD

| Property | Value |
|----------|-------|
| Native Name | `_MAKE_PED_RELOAD` |
| Hash | `0x79E1E511FF7EFB13` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = MakePedReload(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x79E1E511FF7EFB13, ped)
```


---

## _REFILL_AMMO_IN_CLIP

| Property | Value |
|----------|-------|
| Native Name | `_REFILL_AMMO_IN_CLIP` |
| Hash | `0xDF4A3404D022ADDE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `clipInventoryUid` (Any*), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`clipInventoryUid`** (`Any*`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RefillAmmoInClip(ped, clipInventoryUid, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF4A3404D022ADDE, ped, clipInventoryUid, p2)
```


---

## _REFILL_AMMO_IN_CURRENT_PED_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `_REFILL_AMMO_IN_CURRENT_PED_WEAPON` |
| Hash | `0x0A2AB7B7ABC055F4` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = RefillAmmoInCurrentPedWeapon(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0A2AB7B7ABC055F4, ped)
```


---

## _REMOVE_ALL_PED_AMMO

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_ALL_PED_AMMO` |
| Hash | `0x1B83C0DEEBCBB214` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
RemoveAllPedAmmo(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1B83C0DEEBCBB214, ped)
```


---

## _REMOVE_AMMO_FROM_PED

**Description:** removeReason must be REMOVE_REASON_USED, REMOVE_REASON_GIVEN, REMOVE_REASON_DROPPED or REMOVE_REASON_DEBUG, unless amount is -1

removeReason: see REMOVE_WEAPON_FROM_PED

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_AMMO_FROM_PED` |
| Hash | `0xF4823C813CB8277D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `amount` (int), `removeReason` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`amount`** (`int`)
- **`removeReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveAmmoFromPed(ped, weaponHash, amount, removeReason)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF4823C813CB8277D, ped, weaponHash, amount, removeReason)
```


---

## _REMOVE_AMMO_FROM_PED_BY_TYPE

**Description:** removeReason must be REMOVE_REASON_USED, REMOVE_REASON_GIVEN, REMOVE_REASON_DROPPED or REMOVE_REASON_DEBUG, unless amount is -1

removeReason: see REMOVE_WEAPON_FROM_PED

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_AMMO_FROM_PED_BY_TYPE` |
| Hash | `0xB6CFEC32E3742779` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ammoHash` (Hash), `amount` (int), `removeReason` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`ammoHash`** (`Hash`)
- **`amount`** (`int`)
- **`removeReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveAmmoFromPedByType(ped, ammoHash, amount, removeReason)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB6CFEC32E3742779, ped, ammoHash, amount, removeReason)
```


---

## _REMOVE_WEAPON_ASSET

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_WEAPON_ASSET` |
| Hash | `0xC3896D03E2852236` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveWeaponAsset(weaponHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC3896D03E2852236, weaponHash)
```


---

## _REMOVE_WEAPON_COMPONENT_FROM_PED

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_WEAPON_COMPONENT_FROM_PED` |
| Hash | `0x19F70C4D80494FF8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `componentHash` (Hash), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`componentHash`** (`Hash`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveWeaponComponentFromPed(ped, componentHash, weaponHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x19F70C4D80494FF8, ped, componentHash, weaponHash)
```


---

## _REMOVE_WEAPON_FROM_PED_BY_GUID

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_WEAPON_FROM_PED_BY_GUID` |
| Hash | `0x51C3B71591811485` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `ped` (Ped), `weaponGuid` (Any*), `removeReason` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponGuid`** (`Any*`)
- **`removeReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveWeaponFromPedByGuid(ped, weaponGuid, removeReason)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x51C3B71591811485, ped, weaponGuid, removeReason)
```


---

*End of WEAPON natives part 4*
