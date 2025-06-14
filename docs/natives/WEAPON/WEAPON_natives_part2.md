# WEAPON Natives - Part 2 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** WEAPON  
**Natives in this file:** 50  
**Total natives in namespace:** 222  
**Generated from:** RDR3natives JSON data

---

## SET_PED_CURRENT_WEAPON_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_CURRENT_WEAPON_VISIBLE` |
| Hash | `0x0725A4CCFDED9A70` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `visible` (BOOL), `deselectWeapon` (BOOL), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`visible`** (`BOOL`)
- **`deselectWeapon`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedCurrentWeaponVisible(ped, visible, deselectWeapon, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0725A4CCFDED9A70, ped, visible, deselectWeapon, p3, p4)
```


---

## SET_PED_DROPS_INVENTORY_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_DROPS_INVENTORY_WEAPON` |
| Hash | `0x208A1888007FC0E6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `xOffset` (float), `yOffset` (float), `zOffset` (float), `ammoCount` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`xOffset`** (`float`)
- **`yOffset`** (`float`)
- **`zOffset`** (`float`)
- **`ammoCount`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedDropsInventoryWeapon(ped, weaponHash, xOffset, yOffset, zOffset, ammoCount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x208A1888007FC0E6, ped, weaponHash, xOffset, yOffset, zOffset, ammoCount)
```


---

## SET_PED_DROPS_WEAPONS_WHEN_DEAD

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_DROPS_WEAPONS_WHEN_DEAD` |
| Hash | `0x476AE72C1D19D1A8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedDropsWeaponsWhenDead(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x476AE72C1D19D1A8, ped, toggle)
```


---

## SET_PED_INFINITE_AMMO

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_INFINITE_AMMO` |
| Hash | `0x3EDCB0505123623B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetPedInfiniteAmmo(ped, toggle, weaponHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3EDCB0505123623B, ped, toggle, weaponHash)
```


---

## SET_PLAYER_PED_QUICK_SWAP_WEAPON_BY_GUID

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_PED_QUICK_SWAP_WEAPON_BY_GUID` |
| Hash | `0xEC1F85DA51D3D6C4` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `ped` (Ped), `guidPrimary` (Any*), `guidSecondary` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`guidPrimary`** (`Any*`)
- **`guidSecondary`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
SetPlayerPedQuickSwapWeaponByGuid(ped, guidPrimary, guidSecondary)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEC1F85DA51D3D6C4, ped, guidPrimary, guidSecondary)
```


---

## SET_VEHICLE_WEAPON_HEADING

| Property | Value |
|----------|-------|
| Native Name | `SET_VEHICLE_WEAPON_HEADING` |
| Hash | `0x194D877FC5597B7D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `seatIndex` (int), `heading` (float), `p3` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`seatIndex`** (`int`)
- **`heading`** (`float`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetVehicleWeaponHeading(vehicle, seatIndex, heading, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x194D877FC5597B7D, vehicle, seatIndex, heading, p3)
```


---

## SHOULD_WEAPON_BE_DISCARDED_WHEN_SWAPPED

| Property | Value |
|----------|-------|
| Native Name | `SHOULD_WEAPON_BE_DISCARDED_WHEN_SWAPPED` |
| Hash | `0x2C83212A7AA51D3D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ShouldWeaponBeDiscardedWhenSwapped(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2C83212A7AA51D3D, weaponHash)
```


---

## _0x000FA7A4A8443AF7

| Property | Value |
|----------|-------|
| Native Name | `_0x000FA7A4A8443AF7` |
| Hash | `0x000FA7A4A8443AF7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x000FA7A4A8443AF7(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x000FA7A4A8443AF7, p0)
```


---

## _IS_PED_HOLDING_WEAPON

**Description:** Returns whether the specified ped is holding a weapon with the given hash.
only these weapons below return true
 WEAPON_BOW, WEAPON_KIT_METAL_DETECTOR, WEAPON_MELEE_CLEAVER, WEAPON_MELEE_DAVY_LANTERN, WEAPON_MELEE_HATCHET, WEAPON_MELEE_HATCHET_HUNTER, WEAPON_MELEE_KNIFE_JAWBONE, WEAPON_MELEE_LANTERN WEAPON_MELEE_TORCH, WEAPON_MOONSHINEJUG_MP, WEAPON_RIFLE_BOLTACTION, WEAPON_SHOTGUN_PUMP, WEAPON_THROWN_BOLAS, WEAPON_THROWN_MOLOTOV

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_HOLDING_WEAPON` |
| Hash | `0x07E1C35F0078C3F9` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weapon` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weapon`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedHoldingWeapon(ped, weapon)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x07E1C35F0078C3F9, ped, weapon)
```


---

## _0x0DE0944ECCB3DF5D

**Description:** _GET_D* - _GET_L*

| Property | Value |
|----------|-------|
| Native Name | `_0x0DE0944ECCB3DF5D` |
| Hash | `0x0DE0944ECCB3DF5D` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0DE0944ECCB3DF5D(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0DE0944ECCB3DF5D, ped)
```


---

## _0x14FF0C2545527F9B

**Description:** Puts the gun visibly in your horse's holster without having to be close to the horse. Use 0xE9BD19F8121ADE3E before using this native
_A* or _B*

| Property | Value |
|----------|-------|
| Native Name | `_0x14FF0C2545527F9B` |
| Hash | `0x14FF0C2545527F9B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `horse` (Ped), `weaponHash` (Hash), `ped` (Ped) |

### Parameters

- **`horse`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x14FF0C2545527F9B(horse, weaponHash, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x14FF0C2545527F9B, horse, weaponHash, ped)
```


---

## _0x16D9841A85FA627E

| Property | Value |
|----------|-------|
| Native Name | `_0x16D9841A85FA627E` |
| Hash | `0x16D9841A85FA627E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x16D9841A85FA627E(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x16D9841A85FA627E, ped, toggle)
```


---

## _0x183CE355115B6E75

| Property | Value |
|----------|-------|
| Native Name | `_0x183CE355115B6E75` |
| Hash | `0x183CE355115B6E75` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x183CE355115B6E75(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x183CE355115B6E75, p0, p1)
```


---

## _0x23BF601A42F329A0

| Property | Value |
|----------|-------|
| Native Name | `_0x23BF601A42F329A0` |
| Hash | `0x23BF601A42F329A0` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x23BF601A42F329A0(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x23BF601A42F329A0, p0)
```


---

## _0x2EBF70E1D8C06683

**Description:** _SET_A* - _SET_B*

| Property | Value |
|----------|-------|
| Native Name | `_0x2EBF70E1D8C06683` |
| Hash | `0x2EBF70E1D8C06683` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x2EBF70E1D8C06683(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2EBF70E1D8C06683, ped, p1)
```


---

## _0x3799EFCC3C8CD5E1

| Property | Value |
|----------|-------|
| Native Name | `_0x3799EFCC3C8CD5E1` |
| Hash | `0x3799EFCC3C8CD5E1` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x3799EFCC3C8CD5E1(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3799EFCC3C8CD5E1, p0)
```


---

## _0x404514D231DB27A0

| Property | Value |
|----------|-------|
| Native Name | `_0x404514D231DB27A0` |
| Hash | `0x404514D231DB27A0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x404514D231DB27A0(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x404514D231DB27A0, p0, p1)
```


---

## _0x431240A58484D5D0

| Property | Value |
|----------|-------|
| Native Name | `_0x431240A58484D5D0` |
| Hash | `0x431240A58484D5D0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x431240A58484D5D0(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x431240A58484D5D0, ped, toggle)
```


---

## _0x44C8F4908F1B2622

| Property | Value |
|----------|-------|
| Native Name | `_0x44C8F4908F1B2622` |
| Hash | `0x44C8F4908F1B2622` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ammoHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`ammoHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x44C8F4908F1B2622(ped, ammoHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x44C8F4908F1B2622, ped, ammoHash)
```


---

## _0x457B16951AD77C1B

| Property | Value |
|----------|-------|
| Native Name | `_0x457B16951AD77C1B` |
| Hash | `0x457B16951AD77C1B` |
| Return Type | `void` |
| Build | `1436` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x457B16951AD77C1B(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x457B16951AD77C1B, p0)
```


---

## _0x45E57FDD531C9477

| Property | Value |
|----------|-------|
| Native Name | `_0x45E57FDD531C9477` |
| Hash | `0x45E57FDD531C9477` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x45E57FDD531C9477(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x45E57FDD531C9477, ped, toggle)
```


---

## _GET_NUM_PEDS_RESTRAINED_FROM_WEAPON_BOLAS

**Description:** returns the amount of peds that were restrained with the weapon thrown bolas

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_PEDS_RESTRAINED_FROM_WEAPON_BOLAS` |
| Hash | `0x46D42883E873C1D7` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1232` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumPedsRestrainedFromWeaponBolas(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x46D42883E873C1D7, ped)
```


---

## _SET_PED_WEAPON_ON_BACK

**Description:** Holster the holded shoulder weapon. Precisions: 0 means with anim while 1 means direct holster

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_WEAPON_ON_BACK` |
| Hash | `0x4820A6939D7CEF28` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `disableAnim` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`disableAnim`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedWeaponOnBack(ped, disableAnim)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4820A6939D7CEF28, ped, disableAnim)
```


---

## _0x4823F13A21F51964

| Property | Value |
|----------|-------|
| Native Name | `_0x4823F13A21F51964` |
| Hash | `0x4823F13A21F51964` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x4823F13A21F51964(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4823F13A21F51964, p0, p1)
```


---

## _0x486C96A0DCD2BC92

| Property | Value |
|----------|-------|
| Native Name | `_0x486C96A0DCD2BC92` |
| Hash | `0x486C96A0DCD2BC92` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x486C96A0DCD2BC92(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x486C96A0DCD2BC92, p0, p1)
```


---

## _DOES_PED_HAVE_REPEATER

**Description:** Returns whether the ped has a repeater p1: 0 or 1

| Property | Value |
|----------|-------|
| Native Name | `_DOES_PED_HAVE_REPEATER` |
| Hash | `0x495A04CAEC263AF8` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPedHaveRepeater(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x495A04CAEC263AF8, ped, p1)
```


---

## _GET_WEAPON_HAS_MULTIPLE_AMMO_TYPES

**Description:** Returns whether the weapon has multiple ammo types or not.

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_HAS_MULTIPLE_AMMO_TYPES` |
| Hash | `0x58425FCA3D3A2D15` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponHasMultipleAmmoTypes(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58425FCA3D3A2D15, weaponHash)
```


---

## _0x5A695BD328586B44

**Description:** Returns true if ped is on a horse while inside of a town
Params: p1 = 0
GET_L* - GET_MA*

| Property | Value |
|----------|-------|
| Native Name | `_0x5A695BD328586B44` |
| Hash | `0x5A695BD328586B44` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x5A695BD328586B44(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5A695BD328586B44, ped, p1)
```


---

## _DOES_PED_HAVE_REVOLVER

**Description:** Returns whether the ped has a revolver p1: 0 or 1

| Property | Value |
|----------|-------|
| Native Name | `_DOES_PED_HAVE_REVOLVER` |
| Hash | `0x5B235F24472F2C3B` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPedHaveRevolver(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5B235F24472F2C3B, ped, p1)
```


---

## _0x63B83A526329AFBC

**Description:** Only used in R* Script fme_escaped_convicts, p0 = 0

| Property | Value |
|----------|-------|
| Native Name | `_0x63B83A526329AFBC` |
| Hash | `0x63B83A526329AFBC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x63B83A526329AFBC(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x63B83A526329AFBC, p0)
```


---

## _0x641351E9AD103890

| Property | Value |
|----------|-------|
| Native Name | `_0x641351E9AD103890` |
| Hash | `0x641351E9AD103890` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x641351E9AD103890(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x641351E9AD103890, p0, p1)
```


---

## _GET_DEFAULT_WEAPON_ATTACH_POINT

**Description:** Returns the attachpoint for a weapon hash. (returns -1 for melee as they can't be attached)

| Property | Value |
|----------|-------|
| Native Name | `_GET_DEFAULT_WEAPON_ATTACH_POINT` |
| Hash | `0x65DC4AC5B96614CB` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1311` |
| Parameters | `weaponHash` (Hash) |

### Parameters

- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetDefaultWeaponAttachPoint(weaponHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x65DC4AC5B96614CB, weaponHash)
```


---

## _0x74C2365FDD1BB48F

| Property | Value |
|----------|-------|
| Native Name | `_0x74C2365FDD1BB48F` |
| Hash | `0x74C2365FDD1BB48F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x74C2365FDD1BB48F(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74C2365FDD1BB48F, p0, p1)
```


---

## _0x74C8000FDD1BB111

| Property | Value |
|----------|-------|
| Native Name | `_0x74C8000FDD1BB111` |
| Hash | `0x74C8000FDD1BB111` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x74C8000FDD1BB111(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74C8000FDD1BB111, p0, p1)
```


---

## _0x74C8000FDD1BB222

| Property | Value |
|----------|-------|
| Native Name | `_0x74C8000FDD1BB222` |
| Hash | `0x74C8000FDD1BB222` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x74C8000FDD1BB222(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74C8000FDD1BB222, p0, p1)
```


---

## _0x74C9080FDD1BB48E

| Property | Value |
|----------|-------|
| Native Name | `_0x74C9080FDD1BB48E` |
| Hash | `0x74C9080FDD1BB48E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x74C9080FDD1BB48E(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74C9080FDD1BB48E, p0, p1)
```


---

## _0x74C9080FDD1BB48F

| Property | Value |
|----------|-------|
| Native Name | `_0x74C9080FDD1BB48F` |
| Hash | `0x74C9080FDD1BB48F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x74C9080FDD1BB48F(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74C9080FDD1BB48F, p0, p1)
```


---

## _0x74C90AAACC1DD48F

| Property | Value |
|----------|-------|
| Native Name | `_0x74C90AAACC1DD48F` |
| Hash | `0x74C90AAACC1DD48F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x74C90AAACC1DD48F(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74C90AAACC1DD48F, p0)
```


---

## _DOES_PED_HAVE_SNIPER

**Description:** Returns whether the ped has a sniper p1: 0 or 1

| Property | Value |
|----------|-------|
| Native Name | `_DOES_PED_HAVE_SNIPER` |
| Hash | `0x80BB243789008A82` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPedHaveSniper(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x80BB243789008A82, ped, p1)
```


---

## _0x8A779706DA5CA3DD

**Description:** Only used in R* SP Scripts native_son2, native_son3 and smuggler2
Params: p2 = -1

| Property | Value |
|----------|-------|
| Native Name | `_0x8A779706DA5CA3DD` |
| Hash | `0x8A779706DA5CA3DD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x8A779706DA5CA3DD(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8A779706DA5CA3DD, ped, p1, p2)
```


---

## _0x9409C62504A8F9E9

**Description:** Only used in R* SP Script guama3

| Property | Value |
|----------|-------|
| Native Name | `_0x9409C62504A8F9E9` |
| Hash | `0x9409C62504A8F9E9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x9409C62504A8F9E9(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9409C62504A8F9E9, vehicle, p1)
```


---

## _DOES_PED_HAVE_RIFLE

**Description:** Returns whether the ped has a rifle p1: 0 or 1

| Property | Value |
|----------|-------|
| Native Name | `_DOES_PED_HAVE_RIFLE` |
| Hash | `0x95CA12E2C68043E5` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPedHaveRifle(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x95CA12E2C68043E5, ped, p1)
```


---

## _0x9CCA3131E6B53C68

| Property | Value |
|----------|-------|
| Native Name | `_0x9CCA3131E6B53C68` |
| Hash | `0x9CCA3131E6B53C68` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x9CCA3131E6B53C68(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9CCA3131E6B53C68, p0, p1, p2)
```


---

## _GET_WEAPON_FROM_DEFAULT_PED_WEAPON_COLLECTION

**Description:** this native gets the weapon hash from the default ped weapon collection (see GetDefaultPedWeaponCollection for more info) will randomly return one of it's weapons

| Property | Value |
|----------|-------|
| Native Name | `_GET_WEAPON_FROM_DEFAULT_PED_WEAPON_COLLECTION` |
| Hash | `0x9EEFD670F10656D7` |
| Return Type | `Hash` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `weaponCollection` (int), `weaponGroup` (Hash) |

### Parameters

- **`weaponCollection`** (`int`)
- **`weaponGroup`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetWeaponFromDefaultPedWeaponCollection(weaponCollection, weaponGroup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9EEFD670F10656D7, weaponCollection, weaponGroup)
```


### Examples

**Example 1 (lua):**
```lua
local pedWeaponCollectionHash = GetDefaultPedWeaponCollection(joaat("mp_u_m_m_interrogator_01"))
local hash = Citizen.InvokeNative(0x9EEFD670F10656D7, pedWeaponCollectionHash, joaat("GROUP_REVOLVER"))
if hash and IsWeaponValid(hash) then
local name = GetWeaponName(hash)
local label = GetLabelText_2(name)
print(name, label)
end
```


---

## _0x9F0E1892C7F228A8

| Property | Value |
|----------|-------|
| Native Name | `_0x9F0E1892C7F228A8` |
| Hash | `0x9F0E1892C7F228A8` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x9F0E1892C7F228A8(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9F0E1892C7F228A8, p0)
```


---

## _0xA2091482ED42EF85

| Property | Value |
|----------|-------|
| Native Name | `_0xA2091482ED42EF85` |
| Hash | `0xA2091482ED42EF85` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA2091482ED42EF85(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA2091482ED42EF85, p0, p1)
```


---

## _0xA3716A77DCF17424

| Property | Value |
|----------|-------|
| Native Name | `_0xA3716A77DCF17424` |
| Hash | `0xA3716A77DCF17424` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xA3716A77DCF17424(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA3716A77DCF17424, p0, p1, p2)
```


---

## _0xA769D753922B031B

| Property | Value |
|----------|-------|
| Native Name | `_0xA769D753922B031B` |
| Hash | `0xA769D753922B031B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xA769D753922B031B(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA769D753922B031B, p0, p1, p2)
```


---

## _DOES_PED_HAVE_SHOTGUN

**Description:** Returns whether the ped has a shotgun p1: 0 or 1

| Property | Value |
|----------|-------|
| Native Name | `_DOES_PED_HAVE_SHOTGUN` |
| Hash | `0xABC18A28BAD4B46F` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPedHaveShotgun(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xABC18A28BAD4B46F, ped, p1)
```


---

## _0xAFFD0CCF31F469B8

| Property | Value |
|----------|-------|
| Native Name | `_0xAFFD0CCF31F469B8` |
| Hash | `0xAFFD0CCF31F469B8` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xAFFD0CCF31F469B8(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAFFD0CCF31F469B8, p0)
```


---

*End of WEAPON natives part 2*
