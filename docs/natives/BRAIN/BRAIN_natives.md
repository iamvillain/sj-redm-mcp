# BRAIN Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** BRAIN  
**Natives in this file:** 11  
**Generated from:** RDR3natives JSON data

---

## DISABLE_SCRIPT_BRAIN_SET

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_SCRIPT_BRAIN_SET` |
| Hash | `0x3F44EA613A5B2676` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `brainSet` (int) |

### Parameters

- **`brainSet`** (`int`)

### Usage

**Lua (Direct):**
```lua
DisableScriptBrainSet(brainSet)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3F44EA613A5B2676, brainSet)
```


---

## ENABLE_SCRIPT_BRAIN_SET

| Property | Value |
|----------|-------|
| Native Name | `ENABLE_SCRIPT_BRAIN_SET` |
| Hash | `0x1CF6E5C6750EADBD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `brainSet` (int) |

### Parameters

- **`brainSet`** (`int`)

### Usage

**Lua (Direct):**
```lua
EnableScriptBrainSet(brainSet)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1CF6E5C6750EADBD, brainSet)
```


---

## REACTIVATE_ALL_OBJECT_BRAINS_THAT_ARE_WAITING_TILL_OUT_OF_RANGE

**Description:** Called before starting a new thread_monitor script thread in startup_mp/startup_tlg
Alternative name _REGISTER_SCRIPT_BRAIN

Old name: _PREPARE_SCRIPT_BRAIN

| Property | Value |
|----------|-------|
| Native Name | `REACTIVATE_ALL_OBJECT_BRAINS_THAT_ARE_WAITING_TILL_OUT_OF_RANGE` |
| Hash | `0xA32B0B05EFF75730` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ReactivateAllObjectBrainsThatAreWaitingTillOutOfRange()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA32B0B05EFF75730, )
```


---

## REACTIVATE_NAMED_OBJECT_BRAINS_WAITING_TILL_OUT_OF_RANGE

| Property | Value |
|----------|-------|
| Native Name | `REACTIVATE_NAMED_OBJECT_BRAINS_WAITING_TILL_OUT_OF_RANGE` |
| Hash | `0x74C333E34DF74E8A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scriptName` (const char*) |

### Parameters

- **`scriptName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ReactivateNamedObjectBrainsWaitingTillOutOfRange(scriptName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74C333E34DF74E8A, scriptName)
```


---

## REGISTER_OBJECT_SCRIPT_BRAIN

**Description:** Registers a script for any object with a specific model hash.

| Property | Value |
|----------|-------|
| Native Name | `REGISTER_OBJECT_SCRIPT_BRAIN` |
| Hash | `0x16AF9B4EEAC3B305` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scriptName` (const char*), `modelHash` (Hash), `p2` (int), `activationRange` (float), `p4` (int), `p5` (int) |

### Parameters

- **`scriptName`** (`const char*`)
- **`modelHash`** (`Hash`)
- **`p2`** (`int`)
- **`activationRange`** (`float`)
- **`p4`** (`int`)
- **`p5`** (`int`)

### Usage

**Lua (Direct):**
```lua
RegisterObjectScriptBrain(scriptName, modelHash, p2, activationRange, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x16AF9B4EEAC3B305, scriptName, modelHash, p2, activationRange, p4, p5)
```


---

## _0x4AA5EA1EDFB25786

**Description:** Called with flag 0 before 0xA6AC35DB4A7957A8 in net_entity_brain
_SET_SCRIPT_BRAIN*

| Property | Value |
|----------|-------|
| Native Name | `_0x4AA5EA1EDFB25786` |
| Hash | `0x4AA5EA1EDFB25786` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `flag` (int) |

### Parameters

- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x4AA5EA1EDFB25786(flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4AA5EA1EDFB25786, flag)
```


---

## _0xA6AC35DB4A7957A8

**Description:** Common flags: 250, 99999
_SET_SCRIPT_BRAIN*

| Property | Value |
|----------|-------|
| Native Name | `_0xA6AC35DB4A7957A8` |
| Hash | `0xA6AC35DB4A7957A8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `flag` (int) |

### Parameters

- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xA6AC35DB4A7957A8(flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA6AC35DB4A7957A8, flag)
```


---

## _GET_SCRIPT_BRAIN_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_GET_SCRIPT_BRAIN_ENTITY` |
| Hash | `0x6818D1A194E29983` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetScriptBrainEntity()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6818D1A194E29983, )
```


---

## _REMOVE_SCRIPT_BRAIN_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_SCRIPT_BRAIN_ENTITY` |
| Hash | `0x38F1E09224EECA09` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
RemoveScriptBrainEntity(entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x38F1E09224EECA09, entity)
```


---

## _START_PRELOADED_SCRIPT_BRAIN

**Description:** Returns threadId

| Property | Value |
|----------|-------|
| Native Name | `_START_PRELOADED_SCRIPT_BRAIN` |
| Hash | `0x4E4507CC5E4DB869` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity), `scriptName` (const char*), `scriptStackSize` (int), `p3` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`scriptName`** (`const char*`)
- **`scriptStackSize`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartPreloadedScriptBrain(entity, scriptName, scriptStackSize, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4E4507CC5E4DB869, entity, scriptName, scriptStackSize, p3)
```


---

## _START_SCRIPT_BRAIN

**Description:** Returns threadId

| Property | Value |
|----------|-------|
| Native Name | `_START_SCRIPT_BRAIN` |
| Hash | `0x6F62FAE266DCFC81` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity), `scriptName` (const char*), `p2` (int), `p3` (Any*), `p4` (int), `p5` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`scriptName`** (`const char*`)
- **`p2`** (`int`)
- **`p3`** (`Any*`)
- **`p4`** (`int`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StartScriptBrain(entity, scriptName, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6F62FAE266DCFC81, entity, scriptName, p2, p3, p4, p5)
```


---

*End of BRAIN natives*
