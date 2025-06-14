# SPACTIONPROXY Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** SPACTIONPROXY  
**Natives in this file:** 6  
**Generated from:** RDR3natives JSON data

---

## _SPACTIONPROXY_GET_NEXT_PENDING_BUY_ACTION

| Property | Value |
|----------|-------|
| Native Name | `_SPACTIONPROXY_GET_NEXT_PENDING_BUY_ACTION` |
| Hash | `0x1F471B79ACC98BEF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `data` (Any*) |

### Parameters

- **`data`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = SpactionproxyGetNextPendingBuyAction(data)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F471B79ACC98BEF, data)
```


---

## _SPACTIONPROXY_GET_NEXT_PENDING_CRAFTING_ACTION

| Property | Value |
|----------|-------|
| Native Name | `_SPACTIONPROXY_GET_NEXT_PENDING_CRAFTING_ACTION` |
| Hash | `0x1F471B79ACC97BEF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `data` (Any*) |

### Parameters

- **`data`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = SpactionproxyGetNextPendingCraftingAction(data)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F471B79ACC97BEF, data)
```


---

## _SPACTIONPROXY_MANAGER_IS_FAILED

| Property | Value |
|----------|-------|
| Native Name | `_SPACTIONPROXY_MANAGER_IS_FAILED` |
| Hash | `0x1F471B79ACC91BEC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = SpactionproxyManagerIsFailed()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F471B79ACC91BEC, )
```


---

## _SPACTIONPROXY_MANAGER_IS_READY

| Property | Value |
|----------|-------|
| Native Name | `_SPACTIONPROXY_MANAGER_IS_READY` |
| Hash | `0x1F471B79ACC91BED` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = SpactionproxyManagerIsReady()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F471B79ACC91BED, )
```


---

## _SPACTIONPROXY_PROCESS_ACTION

| Property | Value |
|----------|-------|
| Native Name | `_SPACTIONPROXY_PROCESS_ACTION` |
| Hash | `0x1F471B79ACC94BEF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (BOOL) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = SpactionproxyProcessAction(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F471B79ACC94BEF, p0, p1)
```


---

## _SPACTIONPROXY_START_MANAGER

| Property | Value |
|----------|-------|
| Native Name | `_SPACTIONPROXY_START_MANAGER` |
| Hash | `0x1F471B79ACC91BEE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = SpactionproxyStartManager()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F471B79ACC91BEE, )
```


---

*End of SPACTIONPROXY natives*
