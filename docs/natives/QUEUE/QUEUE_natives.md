# QUEUE Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** QUEUE  
**Natives in this file:** 2  
**Generated from:** RDR3natives JSON data

---

## _EVENT_QUEUE_IS_EMPTY

| Property | Value |
|----------|-------|
| Native Name | `_EVENT_QUEUE_IS_EMPTY` |
| Hash | `0x402B5D7D269FF796` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = EventQueueIsEmpty(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x402B5D7D269FF796, hash)
```


---

## _EVENT_QUEUE_POP

| Property | Value |
|----------|-------|
| Native Name | `_EVENT_QUEUE_POP` |
| Hash | `0xD87DF294B049211D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
EventQueuePop(hash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD87DF294B049211D, hash)
```


---

*End of QUEUE natives*
