# UIEVENTS Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** UIEVENTS  
**Natives in this file:** 4  
**Generated from:** RDR3natives JSON data

---

## EVENTS_UI_GET_MESSAGE

**Description:** eventData:
struct UI_SCRIPT_EVENT
{
	alignas(8) eUIScriptEventType eventType; // https://alloc8or.re/rdr3/doc/enums/eUIScriptEventType.txt
	alignas(8) int intParam;
	alignas(8) Hash hashParam;
	alignas(8) Hash datastoreParam;
};

Old name: _EVENT_MANAGER_GET_EVENT

| Property | Value |
|----------|-------|
| Native Name | `EVENTS_UI_GET_MESSAGE` |
| Hash | `0xE24E957294241444` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash), `eventData` (Any*) |

### Parameters

- **`hash`** (`Hash`)
- **`eventData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = EventsUiGetMessage(hash, eventData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE24E957294241444, hash, eventData)
```


---

## EVENTS_UI_IS_PENDING

**Description:** Old name: _EVENT_MANAGER_IS_EVENT_PENDING

| Property | Value |
|----------|-------|
| Native Name | `EVENTS_UI_IS_PENDING` |
| Hash | `0x67ED5A7963F2F722` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = EventsUiIsPending(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x67ED5A7963F2F722, hash)
```


---

## EVENTS_UI_PEEK_MESSAGE

**Description:** eventData: see EVENTS_UI_GET_MESSAGE

Old name: _EVENT_MANAGER_PEEK_EVENT

| Property | Value |
|----------|-------|
| Native Name | `EVENTS_UI_PEEK_MESSAGE` |
| Hash | `0x90237103F27F7937` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash), `eventData` (Any*) |

### Parameters

- **`hash`** (`Hash`)
- **`eventData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = EventsUiPeekMessage(hash, eventData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x90237103F27F7937, hash, eventData)
```


---

## EVENTS_UI_POP_MESSAGE

**Description:** Old name: _EVENT_MANAGER_POP_EVENT

| Property | Value |
|----------|-------|
| Native Name | `EVENTS_UI_POP_MESSAGE` |
| Hash | `0x8E8A2369F48EC839` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
EventsUiPopMessage(hash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8E8A2369F48EC839, hash)
```


---

*End of UIEVENTS natives*
