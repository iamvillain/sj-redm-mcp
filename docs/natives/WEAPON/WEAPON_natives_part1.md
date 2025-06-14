# WEAPON Natives - Part 1 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** WEAPON  
**Natives in this file:** 50  
**Total natives in namespace:** 222  
**Generated from:** RDR3natives JSON data

---

## GET_ALLOW_DUAL_WIELD

| Property | Value |
|----------|-------|
| Native Name | `GET_ALLOW_DUAL_WIELD` |
| Hash | `0x918990BD9CE08582` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetAllowDualWield(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x918990BD9CE08582, ped)
```


---

## GET_AMMO_IN_CLIP

| Property | Value |
|----------|-------|
| Native Name | `GET_AMMO_IN_CLIP` |
| Hash | `0x2E1202248937775C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ammo` (int*), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`ammo`** (`int*`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetAmmoInClip(ped, ammo, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E1202248937775C, ped, ammo, weaponHash)
```


---

## GET_AMMO_IN_PED_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `GET_AMMO_IN_PED_WEAPON` |
| Hash | `0x015A522136D7F951` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetAmmoInPedWeapon(ped, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x015A522136D7F951, ped, weaponHash)
```


---

## GET_BEST_PED_SHORTARM_GUID

| Property | Value |
|----------|-------|
| Native Name | `GET_BEST_PED_SHORTARM_GUID` |
| Hash | `0xF52BD94B47CCF736` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `outGUID` (Any*), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`outGUID`** (`Any*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
GetBestPedShortarmGuid(ped, outGUID, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF52BD94B47CCF736, ped, outGUID, p2, p3)
```


---

## GET_BEST_PED_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `GET_BEST_PED_WEAPON` |
| Hash | `0x8483E98E8B888AE2` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetBestPedWeapon(ped, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8483E98E8B888AE2, ped, p1, p2)
```


---

## GET_CURRENT_PED_VEHICLE_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `GET_CURRENT_PED_VEHICLE_WEAPON` |
| Hash | `0x1017582BCD3832DC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash*) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = GetCurrentPedVehicleWeapon(ped, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1017582BCD3832DC, ped, weaponHash)
```


---

## GET_CURRENT_PED_WEAPON

**Description:** attachPoint: see SET_CURRENT_PED_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `GET_CURRENT_PED_WEAPON` |
| Hash | `0x3A87E44BB9A01D54` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash*), `p2` (BOOL), `attachPoint` (int), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash*`)
- **`p2`** (`BOOL`)
- **`attachPoint`** (`int`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetCurrentPedWeapon(ped, weaponHash, p2, attachPoint, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3A87E44BB9A01D54, ped, weaponHash, p2, attachPoint, p4)
```


---

## GET_CURRENT_PED_WEAPON_ENTITY_INDEX

**Description:** Returns weaponObject, attachPoint: see SET_CURRENT_PED_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `GET_CURRENT_PED_WEAPON_ENTITY_INDEX` |
| Hash | `0x3B390A939AF0B5FC` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attachPoint` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attachPoint`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetCurrentPedWeaponEntityIndex(ped, attachPoint)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3B390A939AF0B5FC, ped, attachPoint)
```


---

## GET_MAX_AMMO

| Property | Value |
|----------|-------|
| Native Name | `GET_MAX_AMMO` |
| Hash | `0xDC16122C7A20C933` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ammo` (int*), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`ammo`** (`int*`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetMaxAmmo(ped, ammo, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDC16122C7A20C933, ped, ammo, weaponHash)
```


---

## GET_MAX_AMMO_IN_CLIP

| Property | Value |
|----------|-------|
| Native Name | `GET_MAX_AMMO_IN_CLIP` |
| Hash | `0xA38DCFFCEA8962FA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetMaxAmmoInClip(ped, weaponHash, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA38DCFFCEA8962FA, ped, weaponHash, p2)
```


---

## GET_PED_AMMO_BY_TYPE

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_AMMO_BY_TYPE` |
| Hash | `0x39D22031557946C1` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ammoType` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`ammoType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedAmmoByType(ped, ammoType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x39D22031557946C1, ped, ammoType)
```


---

## GET_PED_AMMO_TYPE_FROM_WEAPON

**Description:** Returns the current ammo type of the specified ped's specified weapon.

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_AMMO_TYPE_FROM_WEAPON` |
| Hash | `0x7FEAD38B326B9F74` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedAmmoTypeFromWeapon(ped, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7FEAD38B326B9F74, ped, weaponHash)
```


---

## GET_PED_BACKUP_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_BACKUP_WEAPON` |
| Hash | `0xC71FE230A513C30F` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedBackupWeapon(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC71FE230A513C30F, ped, p1)
```


---

## GET_PED_LAST_WEAPON_IMPACT_COORD

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_LAST_WEAPON_IMPACT_COORD` |
| Hash | `0x6C4D0409BA1A2BC2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `coords` (Vector3*) |

### Parameters

- **`ped`** (`Ped`)
- **`coords`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedLastWeaponImpactCoord(ped, coords)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6C4D0409BA1A2BC2, ped, coords)
```


---

## GET_PED_WEAPON_GUID_AT_ATTACH_POINT

| Property | Value |
|----------|-------|
| Native Name | `GET_PED_WEAPON_GUID_AT_ATTACH_POINT` |
| Hash | `0x6929E22158E52265` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attachPoint` (int), `weaponGuid` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`attachPoint`** (`int`)
- **`weaponGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedWeaponGuidAtAttachPoint(ped, attachPoint, weaponGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6929E22158E52265, ped, attachPoint, weaponGuid)
```


---

## GET_WEAPONTYPE_GROUP

| Property | Value |
|----------|-------|
| Native Name | `GET_WEAPONTYPE_GROUP` |
| Hash | `0xEDCA14CA5199FF25` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeapontypeGroup(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEDCA14CA5199FF25, weaponHash)
```


---

## GET_WEAPON_CLIP_SIZE

| Property | Value |
|----------|-------|
| Native Name | `GET_WEAPON_CLIP_SIZE` |
| Hash | `0xD3750CCC00635FC2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponClipSize(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD3750CCC00635FC2, weaponHash)
```


---

## GET_WEAPON_DEGRADATION

**Description:** 0.0: good condition, 1.0: poor condition

| Property | Value |
|----------|-------|
| Native Name | `GET_WEAPON_DEGRADATION` |
| Hash | `0x0D78E1097F89E637` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `weaponObject` (Object) |

### Parameters

- **`weaponObject`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponDegradation(weaponObject)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0D78E1097F89E637, weaponObject)
```


---

## GET_WEAPON_PERMANENT_DEGRADATION

**Description:** Related to rust of weapons

| Property | Value |
|----------|-------|
| Native Name | `GET_WEAPON_PERMANENT_DEGRADATION` |
| Hash | `0xD56E5F336C675EFA` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `weaponObject` (Object) |

### Parameters

- **`weaponObject`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponPermanentDegradation(weaponObject)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD56E5F336C675EFA, weaponObject)
```


---

## GIVE_DELAYED_WEAPON_TO_PED

**Description:** addReason: see _ADD_AMMO_TO_PED

| Property | Value |
|----------|-------|
| Native Name | `GIVE_DELAYED_WEAPON_TO_PED` |
| Hash | `0xB282DC6EBD803C75` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `ammoCount` (int), `p3` (BOOL), `addReason` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`ammoCount`** (`int`)
- **`p3`** (`BOOL`)
- **`addReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
GiveDelayedWeaponToPed(ped, weaponHash, ammoCount, p3, addReason)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB282DC6EBD803C75, ped, weaponHash, ammoCount, p3, addReason)
```


---

## GIVE_WEAPON_TO_PED

**Description:** Gives the ped the weapon.
List: https://github.com/femga/rdr3_discoveries/blob/master/weapons/weapons.lua

Params: p7 is 0.5f, and p8 is 1.0f. p11 and p12 are both 0 in R* Scripts
attachPoint: see SET_CURRENT_PED_WEAPON
addReason: see _ADD_AMMO_TO_PED
permanentDegradation: default 0.5, any higher than 0 it will automatically make the weapon worn, you can also adjust the value to change the weapons maximum cleanliness

| Property | Value |
|----------|-------|
| Native Name | `GIVE_WEAPON_TO_PED` |
| Hash | `0x5E3BDDBCB83F3D84` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `ammoCount` (int), `bForceInHand` (BOOL), `bForceInHolster` (BOOL), `attachPoint` (int), `bAllowMultipleCopies` (BOOL), `p7` (float), `p8` (float), `addReason` (Hash), `bIgnoreUnlocks` (BOOL), `permanentDegradation` (float), `p12` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`ammoCount`** (`int`)
- **`bForceInHand`** (`BOOL`)
- **`bForceInHolster`** (`BOOL`)
- **`attachPoint`** (`int`)
- **`bAllowMultipleCopies`** (`BOOL`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`addReason`** (`Hash`)
- **`bIgnoreUnlocks`** (`BOOL`)
- **`permanentDegradation`** (`float`)
- **`p12`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GiveWeaponToPed(ped, weaponHash, ammoCount, bForceInHand, bForceInHolster, attachPoint, bAllowMultipleCopies, p7, p8, addReason, bIgnoreUnlocks, permanentDegradation, p12)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5E3BDDBCB83F3D84, ped, weaponHash, ammoCount, bForceInHand, bForceInHolster, attachPoint, bAllowMultipleCopies, p7, p8, addReason, bIgnoreUnlocks, permanentDegradation, p12)
```


---

## GIVE_WEAPON_TO_PED_WITH_OPTIONS

| Property | Value |
|----------|-------|
| Native Name | `GIVE_WEAPON_TO_PED_WITH_OPTIONS` |
| Hash | `0xBE7E42B07FD317AC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `data` (Any*), `outData` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`data`** (`Any*`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = GiveWeaponToPedWithOptions(ped, data, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBE7E42B07FD317AC, ped, data, outData)
```


---

## HAS_PED_GOT_WEAPON

**Description:** onlyCheckPlayerInventory: If true, it will only check the players current inventory. If false, it also checks your horse inventory

| Property | Value |
|----------|-------|
| Native Name | `HAS_PED_GOT_WEAPON` |
| Hash | `0x8DECB02F88F428BC` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `p2` (int), `onlyCheckPlayerInventory` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`p2`** (`int`)
- **`onlyCheckPlayerInventory`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = HasPedGotWeapon(ped, weaponHash, p2, onlyCheckPlayerInventory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8DECB02F88F428BC, ped, weaponHash, p2, onlyCheckPlayerInventory)
```


---

## HAS_WEAPON_GOT_WEAPON_COMPONENT

| Property | Value |
|----------|-------|
| Native Name | `HAS_WEAPON_GOT_WEAPON_COMPONENT` |
| Hash | `0x76A18844E743BF91` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weapon` (Object), `addonHash` (Hash) |

### Parameters

- **`weapon`** (`Object`)
- **`addonHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = HasWeaponGotWeaponComponent(weapon, addonHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x76A18844E743BF91, weapon, addonHash)
```


---

## HIDE_PED_WEAPON_FOR_SCRIPTED_CUTSCENE

**Description:** Hides the ped's weapon during a cutscene.

| Property | Value |
|----------|-------|
| Native Name | `HIDE_PED_WEAPON_FOR_SCRIPTED_CUTSCENE` |
| Hash | `0x6F6981D2253C208F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
HidePedWeaponForScriptedCutscene(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6F6981D2253C208F, ped, toggle)
```


---

## IS_PED_ARMED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_ARMED` |
| Hash | `0xCB690F680A3EA971` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedArmed(ped, flags)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB690F680A3EA971, ped, flags)
```


---

## IS_PED_CARRYING_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_CARRYING_WEAPON` |
| Hash | `0xF29A186ED428B552` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedCarryingWeapon(ped, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF29A186ED428B552, ped, weaponHash)
```


---

## IS_PED_WEAPON_READY_TO_SHOOT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_WEAPON_READY_TO_SHOOT` |
| Hash | `0xB80CA294F2F26749` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedWeaponReadyToShoot(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB80CA294F2F26749, ped)
```


---

## IS_WEAPON_A_GUN

**Description:** Returns true if CWeaponInfoFlags::Flags::Gun is set.

| Property | Value |
|----------|-------|
| Native Name | `IS_WEAPON_A_GUN` |
| Hash | `0x705BE297EEBDB95D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponAGun(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x705BE297EEBDB95D, weaponHash)
```


---

## IS_WEAPON_BOW

| Property | Value |
|----------|-------|
| Native Name | `IS_WEAPON_BOW` |
| Hash | `0xC4DEC3CA8C365A5D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponBow(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC4DEC3CA8C365A5D, weaponHash)
```


---

## IS_WEAPON_MELEE_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `IS_WEAPON_MELEE_WEAPON` |
| Hash | `0x959383DCD42040DA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponMeleeWeapon(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x959383DCD42040DA, weaponHash)
```


---

## IS_WEAPON_PISTOL

| Property | Value |
|----------|-------|
| Native Name | `IS_WEAPON_PISTOL` |
| Hash | `0xDDC64F5E31EEDAB6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponPistol(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDDC64F5E31EEDAB6, weaponHash)
```


---

## IS_WEAPON_REPEATER

| Property | Value |
|----------|-------|
| Native Name | `IS_WEAPON_REPEATER` |
| Hash | `0xDDB2578E95EF7138` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponRepeater(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDDB2578E95EF7138, weaponHash)
```


---

## IS_WEAPON_REVOLVER

| Property | Value |
|----------|-------|
| Native Name | `IS_WEAPON_REVOLVER` |
| Hash | `0xC212F1D05A8232BB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponRevolver(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC212F1D05A8232BB, weaponHash)
```


---

## IS_WEAPON_RIFLE

| Property | Value |
|----------|-------|
| Native Name | `IS_WEAPON_RIFLE` |
| Hash | `0x0A82317B7EBFC420` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponRifle(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0A82317B7EBFC420, weaponHash)
```


---

## IS_WEAPON_SHOTGUN

| Property | Value |
|----------|-------|
| Native Name | `IS_WEAPON_SHOTGUN` |
| Hash | `0xC75386174ECE95D5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponShotgun(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC75386174ECE95D5, weaponHash)
```


---

## IS_WEAPON_VALID

| Property | Value |
|----------|-------|
| Native Name | `IS_WEAPON_VALID` |
| Hash | `0x937C71165CF334B3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsWeaponValid(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x937C71165CF334B3, weaponHash)
```


---

## MAKE_PED_DROP_WEAPON

**Description:** Old name: _DROP_CURRENT_PED_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `MAKE_PED_DROP_WEAPON` |
| Hash | `0xCEF4C65DE502D367` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `attachPoint` (int), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`attachPoint`** (`int`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = MakePedDropWeapon(ped, p1, attachPoint, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCEF4C65DE502D367, ped, p1, attachPoint, p3, p4)
```


---

## REMOVE_ALL_PED_WEAPONS

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_ALL_PED_WEAPONS` |
| Hash | `0xF25DF915FA38C5F3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemoveAllPedWeapons(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF25DF915FA38C5F3, ped, p1, p2)
```


---

## REMOVE_WEAPON_COMPONENT_FROM_WEAPON_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_WEAPON_COMPONENT_FROM_WEAPON_OBJECT` |
| Hash | `0xF7D82B0D66777611` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weaponObject` (Object), `component` (Hash) |

### Parameters

- **`weaponObject`** (`Object`)
- **`component`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveWeaponComponentFromWeaponObject(weaponObject, component)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF7D82B0D66777611, weaponObject, component)
```


---

## REMOVE_WEAPON_FROM_PED

**Description:** removeReason:
enum eRemoveItemReason : Hash
{
	REMOVE_REASON_CLIENT_PURGED = 0x4A4E94DC,
	REMOVE_REASON_COALESCE = 0x2ABE393E,
	REMOVE_REASON_DEBUG = 0xA07362E6,
	REMOVE_REASON_DEFAULT = 0xF77DE93D,
	REMOVE_REASON_DELETE_CHARACTER = 0x20AFBDE9,
	REMOVE_REASON_DROPPED = 0xEC7FB5D5,
	REMOVE_REASON_DUPLICATE = 0x19047132,
	REMOVE_REASON_GIFTED_INCORRECTLY = 0x9C4E3829,
	REMOVE_REASON_GIVEN = 0xAD5377D4,
	REMOVE_REASON_INSUFFICIENT_INVENTORY = 0x518D1AAE,
	REMOVE_REASON_ITEM_DOES_NOT_EXIST = 0xEAD5D889,
	REMOVE_REASON_LOADOUT = 0x1B94E3BA,
	REMOVE_REASON_SET_AMOUNT = 0x19D5CFA5,
	REMOVE_REASON_SOLD = 0x76C4B482,
	REMOVE_REASON_USED = 0x2188E0A3,
	REMOVE_REASON_USE_FAILED = 0x671F9EAD
};

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_WEAPON_FROM_PED` |
| Hash | `0x4899CB088EDF59B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `p2` (BOOL), `removeReason` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`p2`** (`BOOL`)
- **`removeReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveWeaponFromPed(ped, weaponHash, p2, removeReason)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4899CB088EDF59B8, ped, weaponHash, p2, removeReason)
```


---

## SET_ALLOW_ANY_WEAPON_DROP

| Property | Value |
|----------|-------|
| Native Name | `SET_ALLOW_ANY_WEAPON_DROP` |
| Hash | `0x78030C7867D8B9B6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAllowAnyWeaponDrop(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x78030C7867D8B9B6, ped, toggle)
```


---

## SET_AMMO_IN_CLIP

| Property | Value |
|----------|-------|
| Native Name | `SET_AMMO_IN_CLIP` |
| Hash | `0xDCD2A934D65CB497` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `ammo` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`ammo`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = SetAmmoInClip(ped, weaponHash, ammo)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDCD2A934D65CB497, ped, weaponHash, ammo)
```


---

## SET_CURRENT_PED_VEHICLE_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `SET_CURRENT_PED_VEHICLE_WEAPON` |
| Hash | `0x75C55983C2C39DAA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = SetCurrentPedVehicleWeapon(ped, weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x75C55983C2C39DAA, ped, weaponHash)
```


---

## SET_CURRENT_PED_WEAPON

**Description:** attachPoint:
enum eWeaponAttachPoint
{
	WEAPON_ATTACH_POINT_INVALID = -1,
	WEAPON_ATTACH_POINT_HAND_PRIMARY = 0,
	WEAPON_ATTACH_POINT_HAND_SECONDARY = 1,
	WEAPON_ATTACH_POINT_PISTOL_R = 2,
	MAX_HAND_WEAPON_ATTACH_POINTS = 2,
	WEAPON_ATTACH_POINT_PISTOL_L = 3,
	WEAPON_ATTACH_POINT_KNIFE = 4,
	WEAPON_ATTACH_POINT_LASSO = 5,
	WEAPON_ATTACH_POINT_THROWER = 6,
	WEAPON_ATTACH_POINT_BOW = 7,
	WEAPON_ATTACH_POINT_BOW_ALTERNATE = 8,
	WEAPON_ATTACH_POINT_RIFLE = 9,
	WEAPON_ATTACH_POINT_RIFLE_ALTERNATE = 10,
	WEAPON_ATTACH_POINT_LANTERN = 11,
	WEAPON_ATTACH_POINT_TEMP_LANTERN = 12,
	WEAPON_ATTACH_POINT_MELEE = 13,
	MAX_SYNCED_WEAPON_ATTACH_POINTS = 13,
	WEAPON_ATTACH_POINT_HIP = 14,
	WEAPON_ATTACH_POINT_BOOT = 15,
	WEAPON_ATTACH_POINT_BACK = 16,
	WEAPON_ATTACH_POINT_FRONT = 17,
	WEAPON_ATTACH_POINT_SHOULDERSLING = 18,
	WEAPON_ATTACH_POINT_LEFTBREAST = 19,
	WEAPON_ATTACH_POINT_RIGHTBREAST = 20,
	WEAPON_ATTACH_POINT_LEFTARMPIT = 21,
	WEAPON_ATTACH_POINT_RIGHTARMPIT = 22,
	WEAPON_ATTACH_POINT_LEFTARMPIT_RIFLE = 23,
	WEAPON_ATTACH_POINT_SATCHEL = 24,
	WEAPON_ATTACH_POINT_LEFTARMPIT_BOW = 25,
	WEAPON_ATTACH_POINT_RIGHT_HAND_EXTRA = 26,
	WEAPON_ATTACH_POINT_LEFT_HAND_EXTRA = 27,
	WEAPON_ATTACH_POINT_RIGHT_HAND_AUX = 28,
	MAX_WEAPON_ATTACH_POINTS = 29
};

| Property | Value |
|----------|-------|
| Native Name | `SET_CURRENT_PED_WEAPON` |
| Hash | `0xADF692B254977C0C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `equipNow` (BOOL), `attachPoint` (int), `p4` (BOOL), `p5` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`equipNow`** (`BOOL`)
- **`attachPoint`** (`int`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCurrentPedWeapon(ped, weaponHash, equipNow, attachPoint, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xADF692B254977C0C, ped, weaponHash, equipNow, attachPoint, p4, p5)
```


---

## SET_CURRENT_PED_WEAPON_BY_GUID

**Description:** Equips a weapon from a weaponItem, similar to GIVE_WEAPON_TO_PED

| Property | Value |
|----------|-------|
| Native Name | `SET_CURRENT_PED_WEAPON_BY_GUID` |
| Hash | `0x12FB95FE3D579238` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponUid` (Any*), `p2` (BOOL), `p3` (BOOL), `p4` (BOOL), `p5` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponUid`** (`Any*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCurrentPedWeaponByGuid(ped, weaponUid, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x12FB95FE3D579238, ped, weaponUid, p2, p3, p4, p5)
```


---

## SET_INSTANTLY_EQUIP_WEAPON_PICKUPS

| Property | Value |
|----------|-------|
| Native Name | `SET_INSTANTLY_EQUIP_WEAPON_PICKUPS` |
| Hash | `0x739B9C6D0E7F7F93` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetInstantlyEquipWeaponPickups(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x739B9C6D0E7F7F93, ped, toggle)
```


---

## SET_PED_AMMO

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_AMMO` |
| Hash | `0x14E56BC5B5DB6A19` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `ammo` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`ammo`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedAmmo(ped, weaponHash, ammo)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x14E56BC5B5DB6A19, ped, weaponHash, ammo)
```


---

## SET_PED_AMMO_BY_TYPE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_AMMO_BY_TYPE` |
| Hash | `0x5FD1E1F011E76D7E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ammoType` (Hash), `ammo` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`ammoType`** (`Hash`)
- **`ammo`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedAmmoByType(ped, ammoType, ammo)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5FD1E1F011E76D7E, ped, ammoType, ammo)
```


---

## SET_PED_AMMO_TO_DROP

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_AMMO_TO_DROP` |
| Hash | `0xA4EFEF9440A5B0EF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedAmmoToDrop(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA4EFEF9440A5B0EF, ped, p1, p2)
```


---

*End of WEAPON natives part 1*
