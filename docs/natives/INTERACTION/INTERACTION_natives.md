# INTERACTION Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** INTERACTION  
**Natives in this file:** 6  
**Generated from:** RDR3natives JSON data

---

## SET_MOUSE_CURSOR_STYLE

**Description:** Changes the mouse cursor's sprite.

spriteId's: https://github.com/femga/rdr3_discoveries/tree/master/graphics/HUD/cursor_sprites#readme

Old name: _SET_MOUSE_CURSOR_SPRITE

| Property | Value |
|----------|-------|
| Native Name | `SET_MOUSE_CURSOR_STYLE` |
| Hash | `0x7F5858AAB5A58CCE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `spriteId` (int) |

### Parameters

- **`spriteId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetMouseCursorStyle(spriteId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7F5858AAB5A58CCE, spriteId)
```


---

## SET_MOUSE_CURSOR_THIS_FRAME

**Description:** Shows the cursor on screen for one frame.

Old name: _SET_MOUSE_CURSOR_ACTIVE_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_MOUSE_CURSOR_THIS_FRAME` |
| Hash | `0xF12E4CCAF249DC10` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetMouseCursorThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF12E4CCAF249DC10, )
```


---

## _POINTER_IS_BEING_MOVED

**Description:** Returns true if player is moving mouse while cursor is active
_PI* - _PO*

| Property | Value |
|----------|-------|
| Native Name | `_POINTER_IS_BEING_MOVED` |
| Hash | `0x2B8B605F2A9E64BF` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = PointerIsBeingMoved()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2B8B605F2A9E64BF, )
```


---

## _POINTER_IS_LEFT_BUTTON_HELD

**Description:** Returns true if player is holding LMB while cursor is active
_PI* - _PO*

| Property | Value |
|----------|-------|
| Native Name | `_POINTER_IS_LEFT_BUTTON_HELD` |
| Hash | `0x61CAE9D1FD055E44` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = PointerIsLeftButtonHeld()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x61CAE9D1FD055E44, )
```


---

## _POINTER_IS_LEFT_BUTTON_JUST_RELEASED

**Description:** Returns true if player releases LMB if cursor is active
_PI* - _PO*

| Property | Value |
|----------|-------|
| Native Name | `_POINTER_IS_LEFT_BUTTON_JUST_RELEASED` |
| Hash | `0xF7F51A57349739F2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = PointerIsLeftButtonJustReleased()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF7F51A57349739F2, )
```


---

## _SET_ALLOW_FIRST_PERSON_MOUSE_CAMERA_MOVEMENT

**Description:** Allows camera to be moved if middle mouse button is held while in first person
Must be called every frame
_SET*

| Property | Value |
|----------|-------|
| Native Name | `_SET_ALLOW_FIRST_PERSON_MOUSE_CAMERA_MOVEMENT` |
| Hash | `0x0546B117BB17548B` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetAllowFirstPersonMouseCameraMovement()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0546B117BB17548B, )
```


---

*End of INTERACTION natives*
