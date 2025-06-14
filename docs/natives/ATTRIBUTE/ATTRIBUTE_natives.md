# ATTRIBUTE Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ATTRIBUTE  
**Natives in this file:** 27  
**Generated from:** RDR3natives JSON data

---

## ADD_ATTRIBUTE_POINTS

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `ADD_ATTRIBUTE_POINTS` |
| Hash | `0x75415EE0CB583760` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddAttributePoints(ped, attributeIndex, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75415EE0CB583760, ped, attributeIndex, p2)
```


---

## DISABLE_ATTRIBUTE_OVERPOWER

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_ATTRIBUTE_OVERPOWER` |
| Hash | `0xF8DAC3D85636C241` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
DisableAttributeOverpower(ped, attributeIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF8DAC3D85636C241, ped, attributeIndex)
```


---

## ENABLE_ATTRIBUTE_OVERPOWER

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

Old name: _SET_ATTRIBUTE_OVERPOWER_VALUE

| Property | Value |
|----------|-------|
| Native Name | `ENABLE_ATTRIBUTE_OVERPOWER` |
| Hash | `0xF6A7C08DF2E28B28` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int), `value` (float), `makeSound` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)
- **`value`** (`float`)
- **`makeSound`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EnableAttributeOverpower(ped, attributeIndex, value, makeSound)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF6A7C08DF2E28B28, ped, attributeIndex, value, makeSound)
```


---

## GET_ATTRIBUTE_BASE_RANK

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `GET_ATTRIBUTE_BASE_RANK` |
| Hash | `0x147149F2E909323C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAttributeBaseRank(ped, attributeIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x147149F2E909323C, ped, attributeIndex)
```


---

## GET_ATTRIBUTE_BONUS_RANK

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `GET_ATTRIBUTE_BONUS_RANK` |
| Hash | `0x0EFA71F4B4330E04` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `coreIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`coreIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAttributeBonusRank(ped, coreIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0EFA71F4B4330E04, ped, coreIndex)
```


---

## GET_ATTRIBUTE_POINTS

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `GET_ATTRIBUTE_POINTS` |
| Hash | `0x219DA04BAA9CB065` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAttributePoints(ped, attributeIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x219DA04BAA9CB065, ped, attributeIndex)
```


---

## GET_ATTRIBUTE_RANK

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `GET_ATTRIBUTE_RANK` |
| Hash | `0xA4C8E23E29040DE0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAttributeRank(ped, attributeIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA4C8E23E29040DE0, ped, attributeIndex)
```


---

## GET_DEFAULT_ATTRIBUTE_POINTS_NEEDED_FOR_RANK

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `GET_DEFAULT_ATTRIBUTE_POINTS_NEEDED_FOR_RANK` |
| Hash | `0x94A7F191DB49A44D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `modelHash` (Hash), `attributeIndex` (int), `rank` (int) |

### Parameters

- **`modelHash`** (`Hash`)
- **`attributeIndex`** (`int`)
- **`rank`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetDefaultAttributePointsNeededForRank(modelHash, attributeIndex, rank)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x94A7F191DB49A44D, modelHash, attributeIndex, rank)
```


---

## GET_DEFAULT_ATTRIBUTE_RANK

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `GET_DEFAULT_ATTRIBUTE_RANK` |
| Hash | `0x958DD43D41F89A47` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetDefaultAttributeRank(ped, attributeIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x958DD43D41F89A47, ped, attributeIndex)
```


---

## GET_DEFAULT_MAX_ATTRIBUTE_RANK

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `GET_DEFAULT_MAX_ATTRIBUTE_RANK` |
| Hash | `0x7C059C55AD940CB4` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetDefaultMaxAttributeRank(ped, attributeIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7C059C55AD940CB4, ped, attributeIndex)
```


---

## GET_MAX_ATTRIBUTE_POINTS

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `GET_MAX_ATTRIBUTE_POINTS` |
| Hash | `0x223BF310F854871C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetMaxAttributePoints(ped, attributeIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x223BF310F854871C, ped, attributeIndex)
```


---

## GET_MAX_ATTRIBUTE_RANK

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `GET_MAX_ATTRIBUTE_RANK` |
| Hash | `0x704674A0535A471D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetMaxAttributeRank(ped, attributeIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x704674A0535A471D, ped, attributeIndex)
```


---

## SET_ATTRIBUTE_BASE_RANK

**Description:** attributeIndex:
enum ePedAttribute
{
	PA_HEALTH,
	PA_STAMINA,
	PA_SPECIALABILITY,
	PA_COURAGE,
	PA_AGILITY,
	PA_SPEED,
	PA_ACCELERATION,
	PA_BONDING,
	SA_HUNGER,
	SA_FATIGUED,
	SA_INEBRIATED,
	SA_POISONED,
	SA_BODYHEAT,
	SA_BODYWEIGHT,
	SA_OVERFED,
	SA_SICKNESS,
	SA_DIRTINESS,
	SA_DIRTINESSHAT,
	MTR_STRENGTH,
	MTR_GRIT,
	MTR_INSTINCT,
	PA_UNRULINESS,
	SA_DIRTINESSSKIN
};

| Property | Value |
|----------|-------|
| Native Name | `SET_ATTRIBUTE_BASE_RANK` |
| Hash | `0x5DA12E025D47D4E5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int), `newValue` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)
- **`newValue`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetAttributeBaseRank(ped, attributeIndex, newValue)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5DA12E025D47D4E5, ped, attributeIndex, newValue)
```


---

## SET_ATTRIBUTE_BONUS_RANK

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `SET_ATTRIBUTE_BONUS_RANK` |
| Hash | `0x920F9488BD115EFB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int), `newValue` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)
- **`newValue`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetAttributeBonusRank(ped, attributeIndex, newValue)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x920F9488BD115EFB, ped, attributeIndex, newValue)
```


---

## SET_ATTRIBUTE_POINTS

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `SET_ATTRIBUTE_POINTS` |
| Hash | `0x09A59688C26D88DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetAttributePoints(ped, attributeIndex, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x09A59688C26D88DF, ped, attributeIndex, p2)
```


---

## STOP_ITEM_PREVIEW

| Property | Value |
|----------|-------|
| Native Name | `STOP_ITEM_PREVIEW` |
| Hash | `0xD962F8579D702DB5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
StopItemPreview()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD962F8579D702DB5, )
```


---

## _ENABLE_ATTRIBUTE_CORE_OVERPOWER

**Description:** coreIndex: see _SET_ATTRIBUTE_CORE_VALUE

Previously incorrectly named ENABLE_ATTRIBUTE_OVERPOWER

| Property | Value |
|----------|-------|
| Native Name | `_ENABLE_ATTRIBUTE_CORE_OVERPOWER` |
| Hash | `0x4AF5A4C7B9157D14` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `coreIndex` (int), `value` (float), `makeSound` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`coreIndex`** (`int`)
- **`value`** (`float`)
- **`makeSound`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EnableAttributeCoreOverpower(ped, coreIndex, value, makeSound)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4AF5A4C7B9157D14, ped, coreIndex, value, makeSound)
```


---

## _GET_ATTRIBUTE_CORE_OVERPOWER_SECONDS_LEFT

| Property | Value |
|----------|-------|
| Native Name | `_GET_ATTRIBUTE_CORE_OVERPOWER_SECONDS_LEFT` |
| Hash | `0xB429F58803D285B1` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `coreIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`coreIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAttributeCoreOverpowerSecondsLeft(ped, coreIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB429F58803D285B1, ped, coreIndex)
```


---

## _GET_ATTRIBUTE_CORE_VALUE

**Description:** Gets the ped's core value on a scale of 0 to 100.
coreIndex: see _SET_ATTRIBUTE_CORE_VALUE

| Property | Value |
|----------|-------|
| Native Name | `_GET_ATTRIBUTE_CORE_VALUE` |
| Hash | `0x36731AC041289BB1` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `coreIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`coreIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAttributeCoreValue(ped, coreIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x36731AC041289BB1, ped, coreIndex)
```


---

## _GET_ATTRIBUTE_OVERPOWER_SECONDS_LEFT

| Property | Value |
|----------|-------|
| Native Name | `_GET_ATTRIBUTE_OVERPOWER_SECONDS_LEFT` |
| Hash | `0x4C9F782180712742` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetAttributeOverpowerSecondsLeft(ped, attributeIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4C9F782180712742, ped, attributeIndex)
```


---

## _IS_ATTRIBUTE_CORE_OVERPOWERED

| Property | Value |
|----------|-------|
| Native Name | `_IS_ATTRIBUTE_CORE_OVERPOWERED` |
| Hash | `0x200373A8DF081F22` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `coreIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`coreIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsAttributeCoreOverpowered(ped, coreIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x200373A8DF081F22, ped, coreIndex)
```


---

## _IS_ATTRIBUTE_OVERPOWERED

**Description:** attributeIndex: see SET_ATTRIBUTE_BASE_RANK

| Property | Value |
|----------|-------|
| Native Name | `_IS_ATTRIBUTE_OVERPOWERED` |
| Hash | `0x103C2F885ABEB00B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `attributeIndex` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`attributeIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsAttributeOverpowered(ped, attributeIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x103C2F885ABEB00B, ped, attributeIndex)
```


---

## _SET_ATTRIBUTE_CORE_VALUE

**Description:** coreIndex:
enum eAttributeCore
{
	ATTRIBUTE_CORE_HEALTH,
	ATTRIBUTE_CORE_STAMINA,
	ATTRIBUTE_CORE_DEADEYE
};

| Property | Value |
|----------|-------|
| Native Name | `_SET_ATTRIBUTE_CORE_VALUE` |
| Hash | `0xC6258F41D86676E0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `coreIndex` (int), `value` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`coreIndex`** (`int`)
- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetAttributeCoreValue(ped, coreIndex, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC6258F41D86676E0, ped, coreIndex, value)
```


---

## _SET_STATUS_EFFECT_CORE_ICON

**Description:** Displays status effects on core icons (includes warnings).

enum eUiRpgStatusEffect
{
	STATUS_NONE,
	STATUS_COLD,
	STATUS_HOT,
	STATUS_OVERFED,
	STATUS_DIRTY,
	STATUS_SNAKE_VENOM,
	STATUS_ARROW_WOUNDED,
	STATUS_ARROW_DRAINED,
	STATUS_ARROW_DISORIENTED,
	STATUS_ARROW_TRACKED,
	STATUS_ARROW_CONFUSION,
	STATUS_UNDERWEIGHT,
	STATUS_OVERWEIGHT,
	STATUS_SICK_1,
	STATUS_SICK_2,
	STATUS_PREDATOR_INVULNERABLE
};

| Property | Value |
|----------|-------|
| Native Name | `_SET_STATUS_EFFECT_CORE_ICON` |
| Hash | `0xA4D3A1C008F250DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `statusEffectType` (int) |

### Parameters

- **`statusEffectType`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetStatusEffectCoreIcon(statusEffectType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA4D3A1C008F250DF, statusEffectType)
```


---

## _SET_STATUS_EFFECT_PERIODIC_ICON

**Description:** Starts core periodic icon.
statusEffectType: see 0xA4D3A1C008F250DF

| Property | Value |
|----------|-------|
| Native Name | `_SET_STATUS_EFFECT_PERIODIC_ICON` |
| Hash | `0xFB6E111908502871` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `statusEffectType` (int) |

### Parameters

- **`statusEffectType`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetStatusEffectPeriodicIcon(statusEffectType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFB6E111908502871, statusEffectType)
```


---

## _START_ITEM_PREVIEW

**Description:** Params: p1 is related to satchel_category

| Property | Value |
|----------|-------|
| Native Name | `_START_ITEM_PREVIEW` |
| Hash | `0x7E2C766ADB2C5F1A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
StartItemPreview(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7E2C766ADB2C5F1A, p0, p1)
```


---

## _STOP_STATUS_EFFECT_PERIODIC_ICON

**Description:** Stops periodic icon.
statusEffectType: see 0xA4D3A1C008F250DF

| Property | Value |
|----------|-------|
| Native Name | `_STOP_STATUS_EFFECT_PERIODIC_ICON` |
| Hash | `0x3FC4C027FD0936F4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `statusEffectType` (int) |

### Parameters

- **`statusEffectType`** (`int`)

### Usage

**Lua (Direct):**
```lua
StopStatusEffectPeriodicIcon(statusEffectType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3FC4C027FD0936F4, statusEffectType)
```


---

*End of ATTRIBUTE natives*
