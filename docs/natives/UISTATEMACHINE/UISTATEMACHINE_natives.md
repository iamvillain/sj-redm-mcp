# UISTATEMACHINE Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** UISTATEMACHINE  
**Natives in this file:** 12  
**Generated from:** RDR3natives JSON data

---

## UI_STATE_MACHINE_CAN_REQUEST_TRANSITION

| Property | Value |
|----------|-------|
| Native Name | `UI_STATE_MACHINE_CAN_REQUEST_TRANSITION` |
| Hash | `0xF7C180F57F85D0B8` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UiStateMachineCanRequestTransition(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF7C180F57F85D0B8, p0)
```


---

## UI_STATE_MACHINE_CREATE

| Property | Value |
|----------|-------|
| Native Name | `UI_STATE_MACHINE_CREATE` |
| Hash | `0x4C6F2C4B7A03A266` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UiStateMachineCreate(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4C6F2C4B7A03A266, p0, p1)
```


---

## UI_STATE_MACHINE_DESTROY

| Property | Value |
|----------|-------|
| Native Name | `UI_STATE_MACHINE_DESTROY` |
| Hash | `0x4EB122210A90E2D8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiStateMachineDestroy(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4EB122210A90E2D8, p0)
```


---

## UI_STATE_MACHINE_DESTROY_AND_CLEAR

| Property | Value |
|----------|-------|
| Native Name | `UI_STATE_MACHINE_DESTROY_AND_CLEAR` |
| Hash | `0x2738D68D2B4E09E7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
UiStateMachineDestroyAndClear(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2738D68D2B4E09E7, p0)
```


---

## UI_STATE_MACHINE_EXISTS

| Property | Value |
|----------|-------|
| Native Name | `UI_STATE_MACHINE_EXISTS` |
| Hash | `0x5D15569C0FEBF757` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UiStateMachineExists(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5D15569C0FEBF757, p0)
```


---

## UI_STATE_MACHINE_REQUEST_EXIT

| Property | Value |
|----------|-------|
| Native Name | `UI_STATE_MACHINE_REQUEST_EXIT` |
| Hash | `0x6B9FE4F0BA521A19` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiStateMachineRequestExit(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6B9FE4F0BA521A19, p0, p1)
```


---

## UI_STATE_MACHINE_REQUEST_TRANSITION

| Property | Value |
|----------|-------|
| Native Name | `UI_STATE_MACHINE_REQUEST_TRANSITION` |
| Hash | `0x7EA9C3547E80350E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UiStateMachineRequestTransition(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7EA9C3547E80350E, p0, p1)
```


---

## _UIFLOWBLOCK_ENTER

| Property | Value |
|----------|-------|
| Native Name | `_UIFLOWBLOCK_ENTER` |
| Hash | `0x3B7519720C9DCB45` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UiflowblockEnter(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3B7519720C9DCB45, p0, p1)
```


---

## _UIFLOWBLOCK_IS_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_UIFLOWBLOCK_IS_LOADED` |
| Hash | `0x10A93C057B6BD944` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UiflowblockIsLoaded(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x10A93C057B6BD944, p0)
```


---

## _UIFLOWBLOCK_RELEASE

| Property | Value |
|----------|-------|
| Native Name | `_UIFLOWBLOCK_RELEASE` |
| Hash | `0xF320A77DD5F781DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiflowblockRelease(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF320A77DD5F781DF, p0)
```


---

## _UIFLOWBLOCK_REQUEST

| Property | Value |
|----------|-------|
| Native Name | `_UIFLOWBLOCK_REQUEST` |
| Hash | `0xC0081B34E395CE48` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UiflowblockRequest(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC0081B34E395CE48, p0)
```


---

## _UI_STATE_MACHINE_IS_EXITED

| Property | Value |
|----------|-------|
| Native Name | `_UI_STATE_MACHINE_IS_EXITED` |
| Hash | `0x11E73195E735B25B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UiStateMachineIsExited(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x11E73195E735B25B, p0)
```


---

*End of UISTATEMACHINE natives*
