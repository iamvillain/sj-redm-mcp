# REPLAY Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** REPLAY  
**Natives in this file:** 5  
**Generated from:** RDR3natives JSON data

---

## CLOSE_VIDEO_EDITOR

**Description:** Hardcoded to return true.

| Property | Value |
|----------|-------|
| Native Name | `CLOSE_VIDEO_EDITOR` |
| Hash | `0xCEEC64BD27A59312` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CloseVideoEditor(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCEEC64BD27A59312, p0)
```


---

## IS_VIDEO_EDITOR_RUNNING

**Description:** Hardcoded to return false.

| Property | Value |
|----------|-------|
| Native Name | `IS_VIDEO_EDITOR_RUNNING` |
| Hash | `0x9EEB007317FA3B9C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsVideoEditorRunning()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9EEB007317FA3B9C, )
```


---

## OPEN_VIDEO_EDITOR

**Description:** Hardcoded to return true.

| Property | Value |
|----------|-------|
| Native Name | `OPEN_VIDEO_EDITOR` |
| Hash | `0xB3F2829907403C13` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = OpenVideoEditor()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB3F2829907403C13, )
```


---

## REPLAY_SYSTEM_HAS_REQUESTED_A_SCRIPT_CLEANUP

**Description:** Hardcoded to return false.

Old name: _IS_INTERIOR_RENDERING_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `REPLAY_SYSTEM_HAS_REQUESTED_A_SCRIPT_CLEANUP` |
| Hash | `0x0F838D47DE58EDB2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ReplaySystemHasRequestedAScriptCleanup()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0F838D47DE58EDB2, )
```


---

## SET_SCRIPTS_HAVE_CLEANED_UP_FOR_REPLAY_SYSTEM

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `SET_SCRIPTS_HAVE_CLEANED_UP_FOR_REPLAY_SYSTEM` |
| Hash | `0x57C6525034E76EB0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetScriptsHaveCleanedUpForReplaySystem()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x57C6525034E76EB0, )
```


---

*End of REPLAY natives*
