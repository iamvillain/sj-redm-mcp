# WEAPON Natives - Part 5 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** WEAPON  
**Natives in this file:** 22  
**Total natives in namespace:** 222  
**Generated from:** RDR3natives JSON data

---

## _REQUEST_WEAPON_ASSET

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_WEAPON_ASSET` |
| Hash | `0x72D4CB5DB927009C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash), `p1` (int), `p2` (BOOL) |

### Parameters

- **`weaponHash`** (`Hash`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RequestWeaponAsset(weaponHash, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x72D4CB5DB927009C, weaponHash, p1, p2)
```


---

## _SEND_WEAPON_TO_INVENTORY

**Description:** Appears to just send specified weapon to your horse holster without having to be close
However, the weapon is not visible on the horse holster, but you can reach the weapon on the weapon wheel

| Property | Value |
|----------|-------|
| Native Name | `_SEND_WEAPON_TO_INVENTORY` |
| Hash | `0xE9BD19F8121ADE3E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SendWeaponToInventory(ped, weaponHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE9BD19F8121ADE3E, ped, weaponHash)
```


---

## _SET_ACTIVE_GUN_SPINNING_EQUIP_KIT_EMOTE_TWIRL

**Description:** emote hashes: KIT_EMOTE_TWIRL_GUN, KIT_EMOTE_TWIRL_GUN_LEFT_HOLSTER, KIT_EMOTE_TWIRL_GUN_DUAL, 0 (to unequip)

| Property | Value |
|----------|-------|
| Native Name | `_SET_ACTIVE_GUN_SPINNING_EQUIP_KIT_EMOTE_TWIRL` |
| Hash | `0xCBCFFF805F1B4596` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `ped` (Ped), `emote` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`emote`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetActiveGunSpinningEquipKitEmoteTwirl(ped, emote)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCBCFFF805F1B4596, ped, emote)
```


---

## _SET_ACTIVE_GUN_SPINNING_KIT_EMOTE_TWIRL

**Description:** spinHash can be -1, 0 to disable

| Property | Value |
|----------|-------|
| Native Name | `_SET_ACTIVE_GUN_SPINNING_KIT_EMOTE_TWIRL` |
| Hash | `0x01F661BB9C71B465` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponEmoteTrickType` (int), `spin` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponEmoteTrickType`** (`int`)
- **`spin`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetActiveGunSpinningKitEmoteTwirl(ped, weaponEmoteTrickType, spin)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x01F661BB9C71B465, ped, weaponEmoteTrickType, spin)
```


---

## _SET_ALLOW_DUAL_WIELD

| Property | Value |
|----------|-------|
| Native Name | `_SET_ALLOW_DUAL_WIELD` |
| Hash | `0x83B8D50EB9446BBA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `allow` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`allow`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAllowDualWield(ped, allow)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x83B8D50EB9446BBA, ped, allow)
```


---

## _SET_AMMO_IN_TURRET

**Description:** turretHash: WEAPON_TURRET_MAXIUM, WEAPON_TURRET_GATLING, WEAPON_TURRET_CANNON, WEAPON_TURRET_REVOLVING_CANNON

| Property | Value |
|----------|-------|
| Native Name | `_SET_AMMO_IN_TURRET` |
| Hash | `0xBDDA0C290C228159` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `turretHash` (Hash), `ammo` (int) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`turretHash`** (`Hash`)
- **`ammo`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetAmmoInTurret(vehicle, turretHash, ammo)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBDDA0C290C228159, vehicle, turretHash, ammo)
```


---

## _SET_AMMO_TYPE_FOR_PED_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `_SET_AMMO_TYPE_FOR_PED_WEAPON` |
| Hash | `0xCC9C4393523833E2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `ammoHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`ammoHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetAmmoTypeForPedWeapon(ped, weaponHash, ammoHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCC9C4393523833E2, ped, weaponHash, ammoHash)
```


---

## _SET_AMMO_TYPE_FOR_PED_WEAPON_INVENTORY

| Property | Value |
|----------|-------|
| Native Name | `_SET_AMMO_TYPE_FOR_PED_WEAPON_INVENTORY` |
| Hash | `0xEBE46B501BC3FBCF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponInventoryUid` (Any*), `ammoHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponInventoryUid`** (`Any*`)
- **`ammoHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetAmmoTypeForPedWeaponInventory(ped, weaponInventoryUid, ammoHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEBE46B501BC3FBCF, ped, weaponInventoryUid, ammoHash)
```


---

## _SET_FORCE_AUTO_EQUIP

| Property | Value |
|----------|-------|
| Native Name | `_SET_FORCE_AUTO_EQUIP` |
| Hash | `0xBE711B14A159E84F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetForceAutoEquip(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBE711B14A159E84F, ped, toggle)
```


---

## _SET_FORCE_CURRENT_WEAPON_INTO_COCKED_STATE

| Property | Value |
|----------|-------|
| Native Name | `_SET_FORCE_CURRENT_WEAPON_INTO_COCKED_STATE` |
| Hash | `0x5230D3F6EE56CFE6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attachPoint` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attachPoint`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetForceCurrentWeaponIntoCockedState(ped, attachPoint)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5230D3F6EE56CFE6, ped, attachPoint)
```


---

## _SET_GUN_SPINNING_INVENTORY_SLOT_ID_ACTIVATE

**Description:** _STOP_* - _TEST_*

| Property | Value |
|----------|-------|
| Native Name | `_SET_GUN_SPINNING_INVENTORY_SLOT_ID_ACTIVATE` |
| Hash | `0x408CF580C5E96D49` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `ped` (Ped), `emoteType` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`emoteType`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetGunSpinningInventorySlotIdActivate(ped, emoteType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x408CF580C5E96D49, ped, emoteType)
```


---

## _SET_PED_ALL_WEAPONS_VISIBILITY

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_ALL_WEAPONS_VISIBILITY` |
| Hash | `0x4F806A6CFED89468` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `visible` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`visible`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedAllWeaponsVisibility(ped, visible)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4F806A6CFED89468, ped, visible)
```


---

## _SET_PED_INFINITE_AMMO_CLIP

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_INFINITE_AMMO_CLIP` |
| Hash | `0xFBAA1E06B6BCA741` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedInfiniteAmmoClip(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFBAA1E06B6BCA741, ped, toggle)
```


---

## _SET_PED_WEAPON_ATTACH_POINT_VISIBILITY

**Description:** attachPoint: see SET_CURRENT_PED_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_WEAPON_ATTACH_POINT_VISIBILITY` |
| Hash | `0x67E21ACC5C0C970C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attachPoint` (int), `visible` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`attachPoint`** (`int`)
- **`visible`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedWeaponAttachPointVisibility(ped, attachPoint, visible)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x67E21ACC5C0C970C, ped, attachPoint, visible)
```


---

## _SET_VEHICLE_WEAPON_HEADING_LIMITS

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_WEAPON_HEADING_LIMITS` |
| Hash | `0x56CB3B4305A4F7CE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (int), `minHeading` (float), `maxHeading` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`int`)
- **`minHeading`** (`float`)
- **`maxHeading`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVehicleWeaponHeadingLimits(vehicle, p1, minHeading, maxHeading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x56CB3B4305A4F7CE, vehicle, p1, minHeading, maxHeading)
```


---

## _SET_VEHICLE_WEAPON_HEADING_LIMITS_2

| Property | Value |
|----------|-------|
| Native Name | `_SET_VEHICLE_WEAPON_HEADING_LIMITS_2` |
| Hash | `0xBF5987E1CDE63501` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (int), `minHeading` (float), `maxHeading` (float) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`int`)
- **`minHeading`** (`float`)
- **`maxHeading`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetVehicleWeaponHeadingLimits2(vehicle, p1, minHeading, maxHeading)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBF5987E1CDE63501, vehicle, p1, minHeading, maxHeading)
```


---

## _SET_WEAPON_DAMAGE

**Description:** Related to weapon visual damage, not actual damage.

| Property | Value |
|----------|-------|
| Native Name | `_SET_WEAPON_DAMAGE` |
| Hash | `0xE22060121602493B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weaponObject` (Object), `level` (float), `p2` (BOOL) |

### Parameters

- **`weaponObject`** (`Object`)
- **`level`** (`float`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetWeaponDamage(weaponObject, level, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE22060121602493B, weaponObject, level, p2)
```


---

## _SET_WEAPON_DEGRADATION

| Property | Value |
|----------|-------|
| Native Name | `_SET_WEAPON_DEGRADATION` |
| Hash | `0xA7A57E89E965D839` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weaponObject` (Object), `level` (float) |

### Parameters

- **`weaponObject`** (`Object`)
- **`level`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetWeaponDegradation(weaponObject, level)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA7A57E89E965D839, weaponObject, level)
```


---

## _SET_WEAPON_DIRT

| Property | Value |
|----------|-------|
| Native Name | `_SET_WEAPON_DIRT` |
| Hash | `0x812CE61DEBCAB948` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weaponObject` (Object), `level` (float), `p2` (BOOL) |

### Parameters

- **`weaponObject`** (`Object`)
- **`level`** (`float`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetWeaponDirt(weaponObject, level, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x812CE61DEBCAB948, weaponObject, level, p2)
```


---

## _SET_WEAPON_LEVEL_THRESHOLD

**Description:** every other level will have the max value of (brokeLevel - threshold)

| Property | Value |
|----------|-------|
| Native Name | `_SET_WEAPON_LEVEL_THRESHOLD` |
| Hash | `0xD4071EFC83794B2F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weaponObject` (Object), `threshold` (float) |

### Parameters

- **`weaponObject`** (`Object`)
- **`threshold`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetWeaponLevelThreshold(weaponObject, threshold)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD4071EFC83794B2F, weaponObject, threshold)
```


---

## _SET_WEAPON_SCALE

| Property | Value |
|----------|-------|
| Native Name | `_SET_WEAPON_SCALE` |
| Hash | `0xC3544AD0522E69B4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weaponObject` (Object), `scale` (float) |

### Parameters

- **`weaponObject`** (`Object`)
- **`scale`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetWeaponScale(weaponObject, scale)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC3544AD0522E69B4, weaponObject, scale)
```


---

## _SET_WEAPON_SOOT

| Property | Value |
|----------|-------|
| Native Name | `_SET_WEAPON_SOOT` |
| Hash | `0xA9EF4AD10BDDDB57` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weaponObject` (Object), `level` (float), `p2` (BOOL) |

### Parameters

- **`weaponObject`** (`Object`)
- **`level`** (`float`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetWeaponSoot(weaponObject, level, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA9EF4AD10BDDDB57, weaponObject, level, p2)
```


---

*End of WEAPON natives part 5*
