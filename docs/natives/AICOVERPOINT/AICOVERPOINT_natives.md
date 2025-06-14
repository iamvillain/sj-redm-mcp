# AICOVERPOINT Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** AICOVERPOINT  
**Natives in this file:** 17  
**Generated from:** RDR3natives JSON data

---

## TASK_ENTER_COVER

| Property | Value |
|----------|-------|
| Native Name | `TASK_ENTER_COVER` |
| Hash | `0x4972A022AE6DAFA1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskEnterCover(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4972A022AE6DAFA1, ped)
```


---

## TASK_EXIT_COVER

| Property | Value |
|----------|-------|
| Native Name | `TASK_EXIT_COVER` |
| Hash | `0x2BC4A6D92D140112` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskExitCover(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2BC4A6D92D140112, ped)
```


---

## _0x140B3CB1D424A945

**Description:** weaponHash can also be -1

| Property | Value |
|----------|-------|
| Native Name | `_0x140B3CB1D424A945` |
| Hash | `0x140B3CB1D424A945` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x140B3CB1D424A945(ped, weaponHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x140B3CB1D424A945, ped, weaponHash)
```


---

## _0x3C7A9C2C953128FE

| Property | Value |
|----------|-------|
| Native Name | `_0x3C7A9C2C953128FE` |
| Hash | `0x3C7A9C2C953128FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x3C7A9C2C953128FE(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3C7A9C2C953128FE, ped)
```


---

## _0x53E4D0C079CA6855

| Property | Value |
|----------|-------|
| Native Name | `_0x53E4D0C079CA6855` |
| Hash | `0x53E4D0C079CA6855` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `handle` (ScrHandle) |

### Parameters

- **`handle`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
local result = _0x53E4D0C079CA6855(handle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x53E4D0C079CA6855, handle)
```


---

## _0x64340DC208D671D5

**Description:** coverLayer: see levels_0/levels/rdr3/coverlayers

| Property | Value |
|----------|-------|
| Native Name | `_0x64340DC208D671D5` |
| Hash | `0x64340DC208D671D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `coverLayer` (const char*) |

### Parameters

- **`coverLayer`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0x64340DC208D671D5(coverLayer)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x64340DC208D671D5, coverLayer)
```


---

## _ADD_COVER_BLOCKING_AREA

**Description:** args: f_0 = Volume Handle
f_1 = integer (?) (only the number 1 is ever used here, or is not used at all)
f_2 = integer (-1 to 32 in R* Scripts)

| Property | Value |
|----------|-------|
| Native Name | `_ADD_COVER_BLOCKING_AREA` |
| Hash | `0x733077295AB51304` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
AddCoverBlockingArea(args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x733077295AB51304, args)
```


---

## _0x7A1FDCF35EAA140F

**Description:** coverLayer: see levels_0/levels/rdr3/coverlayers

| Property | Value |
|----------|-------|
| Native Name | `_0x7A1FDCF35EAA140F` |
| Hash | `0x7A1FDCF35EAA140F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `coverLayer` (const char*) |

### Parameters

- **`coverLayer`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0x7A1FDCF35EAA140F(coverLayer)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7A1FDCF35EAA140F, coverLayer)
```


---

## _0x957D7E750216D74B

| Property | Value |
|----------|-------|
| Native Name | `_0x957D7E750216D74B` |
| Hash | `0x957D7E750216D74B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x957D7E750216D74B(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x957D7E750216D74B, ped)
```


---

## _0xEBA51A294C73292E

| Property | Value |
|----------|-------|
| Native Name | `_0xEBA51A294C73292E` |
| Hash | `0xEBA51A294C73292E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
_0xEBA51A294C73292E(args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEBA51A294C73292E, args)
```


---

## _ADD_SCRIPTED_COVER_POINT

| Property | Value |
|----------|-------|
| Native Name | `_ADD_SCRIPTED_COVER_POINT` |
| Hash | `0x975BD6351648935F` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `data` (Any*) |

### Parameters

- **`data`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = AddScriptedCoverPoint(data)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x975BD6351648935F, data)
```


---

## _ARE_LOAD_COVER_ANIMS_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_ARE_LOAD_COVER_ANIMS_LOADED` |
| Hash | `0x8CBE916CFC64AD5C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = AreLoadCoverAnimsLoaded(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8CBE916CFC64AD5C, ped)
```


---

## _DOES_COVER_POINT_EXIST

| Property | Value |
|----------|-------|
| Native Name | `_DOES_COVER_POINT_EXIST` |
| Hash | `0xC276FE69DDA22BAD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `handle` (ScrHandle) |

### Parameters

- **`handle`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
local result = DoesCoverPointExist(handle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC276FE69DDA22BAD, handle)
```


---

## _GET_COVER_POINT_STATE_FROM_PED

**Description:** 1 = In cover while crouched
2 = In cover while standing
3 = Not in cover

| Property | Value |
|----------|-------|
| Native Name | `_GET_COVER_POINT_STATE_FROM_PED` |
| Hash | `0x5F5B1B7E8E8F94C6` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetCoverPointStateFromPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5F5B1B7E8E8F94C6, ped)
```


---

## _REQUEST_FLINCH_COVER_ANIM

**Description:** Makes ped flinch (if in cover) like they have been shot at

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_FLINCH_COVER_ANIM` |
| Hash | `0x2A31D13C5F021D0D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
RequestFlinchCoverAnim(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2A31D13C5F021D0D, ped)
```


---

## _STOP_RUNNING_COVER_ANIMS

**Description:** Stops running cover anims and releases them
_STOP_RENDERING_* - _STOP_SCRIPTED*

| Property | Value |
|----------|-------|
| Native Name | `_STOP_RUNNING_COVER_ANIMS` |
| Hash | `0x1A7A802B2301EDC0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
StopRunningCoverAnims(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1A7A802B2301EDC0, ped)
```


---

## _TASK_AI_SEEK_COVER_TO_COVER_POINT

| Property | Value |
|----------|-------|
| Native Name | `_TASK_AI_SEEK_COVER_TO_COVER_POINT` |
| Hash | `0x89783FDDF079C88D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TaskAiSeekCoverToCoverPoint(args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x89783FDDF079C88D, args)
```


---

*End of AICOVERPOINT natives*
