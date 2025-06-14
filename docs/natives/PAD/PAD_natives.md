# PAD Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PAD  
**Natives in this file:** 40  
**Generated from:** RDR3natives JSON data

---

## CLEAR_CONTROL_LIGHT_EFFECT

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_CONTROL_LIGHT_EFFECT` |
| Hash | `0xCB0360EFEFB2580D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int) |

### Parameters

- **`control`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearControlLightEffect(control)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCB0360EFEFB2580D, control)
```


---

## CLEAR_CONTROL_SHAKE_SUPPRESSED_ID

**Description:** Old name: _CLEAR_SUPPRESSED_PAD_RUMBLE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_CONTROL_SHAKE_SUPPRESSED_ID` |
| Hash | `0xA0CEFCEA390AAB9B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int) |

### Parameters

- **`control`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearControlShakeSuppressedId(control)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA0CEFCEA390AAB9B, control)
```


---

## DISABLE_ALL_CONTROL_ACTIONS

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_ALL_CONTROL_ACTIONS` |
| Hash | `0x5F4B6931816E599B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int) |

### Parameters

- **`control`** (`int`)

### Usage

**Lua (Direct):**
```lua
DisableAllControlActions(control)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5F4B6931816E599B, control)
```


---

## DISABLE_CONTROL_ACTION

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_CONTROL_ACTION` |
| Hash | `0xFE99B66D079CF6BC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash), `disableRelatedActions` (BOOL) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)
- **`disableRelatedActions`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DisableControlAction(control, action, disableRelatedActions)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFE99B66D079CF6BC, control, action, disableRelatedActions)
```


---

## ENABLE_CONTROL_ACTION

| Property | Value |
|----------|-------|
| Native Name | `ENABLE_CONTROL_ACTION` |
| Hash | `0x351220255D64C155` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash), `enableRelatedActions` (BOOL) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)
- **`enableRelatedActions`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EnableControlAction(control, action, enableRelatedActions)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x351220255D64C155, control, action, enableRelatedActions)
```


---

## GET_CONTROL_HOW_LONG_AGO

**Description:** Returns time in ms since last input.

| Property | Value |
|----------|-------|
| Native Name | `GET_CONTROL_HOW_LONG_AGO` |
| Hash | `0xD7D22F5592AED8BA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `control` (int) |

### Parameters

- **`control`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetControlHowLongAgo(control)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD7D22F5592AED8BA, control)
```


---

## GET_CONTROL_NORMAL

| Property | Value |
|----------|-------|
| Native Name | `GET_CONTROL_NORMAL` |
| Hash | `0xEC3C9B8D5327B563` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetControlNormal(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEC3C9B8D5327B563, control, action)
```


---

## GET_CONTROL_UNBOUND_NORMAL

| Property | Value |
|----------|-------|
| Native Name | `GET_CONTROL_UNBOUND_NORMAL` |
| Hash | `0x5B84D09CEC5209C5` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetControlUnboundNormal(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5B84D09CEC5209C5, control, action)
```


---

## GET_CONTROL_VALUE

| Property | Value |
|----------|-------|
| Native Name | `GET_CONTROL_VALUE` |
| Hash | `0xD95E79E8686D2C27` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetControlValue(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD95E79E8686D2C27, control, action)
```


---

## GET_DISABLED_CONTROL_NORMAL

| Property | Value |
|----------|-------|
| Native Name | `GET_DISABLED_CONTROL_NORMAL` |
| Hash | `0x11E65974A982637C` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetDisabledControlNormal(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x11E65974A982637C, control, action)
```


---

## GET_DISABLED_CONTROL_UNBOUND_NORMAL

| Property | Value |
|----------|-------|
| Native Name | `GET_DISABLED_CONTROL_UNBOUND_NORMAL` |
| Hash | `0x4F8A26A890FD62FB` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetDisabledControlUnboundNormal(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4F8A26A890FD62FB, control, action)
```


---

## HAVE_CONTROLS_CHANGED

| Property | Value |
|----------|-------|
| Native Name | `HAVE_CONTROLS_CHANGED` |
| Hash | `0x6CD79468A1E595C6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int) |

### Parameters

- **`control`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HaveControlsChanged(control)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6CD79468A1E595C6, control)
```


---

## IS_CONTROL_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `IS_CONTROL_ENABLED` |
| Hash | `0x1CEA6BFDF248E5D9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsControlEnabled(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1CEA6BFDF248E5D9, control, action)
```


---

## IS_CONTROL_JUST_PRESSED

| Property | Value |
|----------|-------|
| Native Name | `IS_CONTROL_JUST_PRESSED` |
| Hash | `0x580417101DDB492F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsControlJustPressed(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x580417101DDB492F, control, action)
```


---

## IS_CONTROL_JUST_RELEASED

| Property | Value |
|----------|-------|
| Native Name | `IS_CONTROL_JUST_RELEASED` |
| Hash | `0x50F940259D3841E6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsControlJustReleased(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x50F940259D3841E6, control, action)
```


---

## IS_CONTROL_PRESSED

| Property | Value |
|----------|-------|
| Native Name | `IS_CONTROL_PRESSED` |
| Hash | `0xF3A21BCD95725A4A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsControlPressed(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF3A21BCD95725A4A, control, action)
```


---

## IS_CONTROL_RELEASED

| Property | Value |
|----------|-------|
| Native Name | `IS_CONTROL_RELEASED` |
| Hash | `0x648EE3E7F38877DD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsControlReleased(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x648EE3E7F38877DD, control, action)
```


---

## IS_DISABLED_CONTROL_JUST_PRESSED

| Property | Value |
|----------|-------|
| Native Name | `IS_DISABLED_CONTROL_JUST_PRESSED` |
| Hash | `0x91AEF906BCA88877` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsDisabledControlJustPressed(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x91AEF906BCA88877, control, action)
```


---

## IS_DISABLED_CONTROL_JUST_RELEASED

| Property | Value |
|----------|-------|
| Native Name | `IS_DISABLED_CONTROL_JUST_RELEASED` |
| Hash | `0x305C8DCD79DA8B0F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsDisabledControlJustReleased(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x305C8DCD79DA8B0F, control, action)
```


---

## IS_DISABLED_CONTROL_PRESSED

| Property | Value |
|----------|-------|
| Native Name | `IS_DISABLED_CONTROL_PRESSED` |
| Hash | `0xE2587F8CBBD87B1D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsDisabledControlPressed(control, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE2587F8CBBD87B1D, control, action)
```


---

## IS_LOOK_INVERTED

| Property | Value |
|----------|-------|
| Native Name | `IS_LOOK_INVERTED` |
| Hash | `0x77B612531280010D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsLookInverted()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x77B612531280010D, )
```


---

## IS_USING_KEYBOARD_AND_MOUSE

**Description:** padIndex is not used

Old name: _IS_USING_KEYBOARD

| Property | Value |
|----------|-------|
| Native Name | `IS_USING_KEYBOARD_AND_MOUSE` |
| Hash | `0xA571D46727E2B718` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int) |

### Parameters

- **`control`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsUsingKeyboardAndMouse(control)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA571D46727E2B718, control)
```


---

## SET_CONTROL_LIGHT_EFFECT_COLOR

**Description:** nullsub, doesn't do anything

Old name: _SET_CONTROL_GROUP_COLOR

| Property | Value |
|----------|-------|
| Native Name | `SET_CONTROL_LIGHT_EFFECT_COLOR` |
| Hash | `0x8290252FFF36ACB5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int), `red` (int), `green` (int), `blue` (int) |

### Parameters

- **`control`** (`int`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetControlLightEffectColor(control, red, green, blue)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8290252FFF36ACB5, control, red, green, blue)
```


---

## SET_CONTROL_LIGHT_EFFECT_FLASHING_COLOR

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `SET_CONTROL_LIGHT_EFFECT_FLASHING_COLOR` |
| Hash | `0xA45884DB10EC7EE3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int), `red` (int), `green` (int), `blue` (int) |

### Parameters

- **`control`** (`int`)
- **`red`** (`int`)
- **`green`** (`int`)
- **`blue`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetControlLightEffectFlashingColor(control, red, green, blue)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA45884DB10EC7EE3, control, red, green, blue)
```


---

## SET_CONTROL_SHAKE

**Description:** Old name: SET_PAD_SHAKE

| Property | Value |
|----------|-------|
| Native Name | `SET_CONTROL_SHAKE` |
| Hash | `0x48B3886C1358D0D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int), `duration` (int), `frequency` (int) |

### Parameters

- **`control`** (`int`)
- **`duration`** (`int`)
- **`frequency`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetControlShake(control, duration, frequency)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x48B3886C1358D0D5, control, duration, frequency)
```


---

## SET_CONTROL_SHAKE_SUPPRESSED_ID

**Description:** Old name: SET_PAD_SHAKE_SUPPRESSED_ID

| Property | Value |
|----------|-------|
| Native Name | `SET_CONTROL_SHAKE_SUPPRESSED_ID` |
| Hash | `0xF239400E16C23E08` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int), `uniqueId` (int) |

### Parameters

- **`control`** (`int`)
- **`uniqueId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetControlShakeSuppressedId(control, uniqueId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF239400E16C23E08, control, uniqueId)
```


---

## SET_CONTROL_TRIGGER_SHAKE

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `SET_CONTROL_TRIGGER_SHAKE` |
| Hash | `0x14D29BB12D47F68C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int), `leftDuration` (int), `leftFrequency` (int), `rightDuration` (int), `rightFrequency` (int) |

### Parameters

- **`control`** (`int`)
- **`leftDuration`** (`int`)
- **`leftFrequency`** (`int`)
- **`rightDuration`** (`int`)
- **`rightFrequency`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetControlTriggerShake(control, leftDuration, leftFrequency, rightDuration, rightFrequency)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x14D29BB12D47F68C, control, leftDuration, leftFrequency, rightDuration, rightFrequency)
```


---

## SET_CONTROL_VALUE_NEXT_FRAME

**Description:** This is for simulating player input.
value is a float value from 0 - 1

control: see IS_CONTROL_ENABLED

Old name: _SET_CONTROL_NORMAL

| Property | Value |
|----------|-------|
| Native Name | `SET_CONTROL_VALUE_NEXT_FRAME` |
| Hash | `0xE8A25867FBA3B05E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash), `value` (float) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = SetControlValueNextFrame(control, action, value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE8A25867FBA3B05E, control, action, value)
```


---

## SET_INPUT_EXCLUSIVE

| Property | Value |
|----------|-------|
| Native Name | `SET_INPUT_EXCLUSIVE` |
| Hash | `0xEDE476E5EE29EDB1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int), `action` (Hash) |

### Parameters

- **`control`** (`int`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetInputExclusive(control, action)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEDE476E5EE29EDB1, control, action)
```


---

## STOP_CONTROL_SHAKE

**Description:** Old name: STOP_PAD_SHAKE

| Property | Value |
|----------|-------|
| Native Name | `STOP_CONTROL_SHAKE` |
| Hash | `0x38C16A305E8CDC8D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int) |

### Parameters

- **`control`** (`int`)

### Usage

**Lua (Direct):**
```lua
StopControlShake(control)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x38C16A305E8CDC8D, control)
```


---

## _0x1252C029FC8EBB4D

**Description:** _IS_R* - _IS_S*

| Property | Value |
|----------|-------|
| Native Name | `_0x1252C029FC8EBB4D` |
| Hash | `0x1252C029FC8EBB4D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x1252C029FC8EBB4D()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1252C029FC8EBB4D, )
```


---

## _0x43F35DDB2905D945

| Property | Value |
|----------|-------|
| Native Name | `_0x43F35DDB2905D945` |
| Hash | `0x43F35DDB2905D945` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x43F35DDB2905D945(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x43F35DDB2905D945, p0, p1)
```


---

## _0x52C68E92D6E23ADD

| Property | Value |
|----------|-------|
| Native Name | `_0x52C68E92D6E23ADD` |
| Hash | `0x52C68E92D6E23ADD` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x52C68E92D6E23ADD(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x52C68E92D6E23ADD, p0)
```


---

## _0x5F217BC1190503D8

**Description:** rumbleCurve: common_0/data/rumblecurves.meta

| Property | Value |
|----------|-------|
| Native Name | `_0x5F217BC1190503D8` |
| Hash | `0x5F217BC1190503D8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `rumbleCurve` (const char*), `p1` (float) |

### Parameters

- **`rumbleCurve`** (`const char*`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x5F217BC1190503D8(rumbleCurve, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5F217BC1190503D8, rumbleCurve, p1)
```


---

## _0x709BA8C08C5C008D

| Property | Value |
|----------|-------|
| Native Name | `_0x709BA8C08C5C008D` |
| Hash | `0x709BA8C08C5C008D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x709BA8C08C5C008D()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x709BA8C08C5C008D, )
```


---

## _0xBD629C1C4F501C80

| Property | Value |
|----------|-------|
| Native Name | `_0xBD629C1C4F501C80` |
| Hash | `0xBD629C1C4F501C80` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xBD629C1C4F501C80(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBD629C1C4F501C80, p0)
```


---

## _GET_CURRENT_CONTROL_CONTEXT

**Description:** Gets the current control context. See: _SET_CONTROL_CONTEXT

| Property | Value |
|----------|-------|
| Native Name | `_GET_CURRENT_CONTROL_CONTEXT` |
| Hash | `0xDDCEB0F26C89C00F` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `control` (int) |

### Parameters

- **`control`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetCurrentControlContext(control)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDDCEB0F26C89C00F, control)
```


---

## _GET_DISABLED_CONTROL_HOW_LONG_AGO

| Property | Value |
|----------|-------|
| Native Name | `_GET_DISABLED_CONTROL_HOW_LONG_AGO` |
| Hash | `0x771DFCB24D19C2F6` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `control` (int) |

### Parameters

- **`control`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetDisabledControlHowLongAgo(control)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x771DFCB24D19C2F6, control)
```


---

## _IS_CONTROL_ACTION_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_CONTROL_ACTION_VALID` |
| Hash | `0xBC0884BC590951C7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `action` (Hash), `control` (int) |

### Parameters

- **`action`** (`Hash`)
- **`control`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsControlActionValid(action, control)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBC0884BC590951C7, action, control)
```


---

## _SET_CONTROL_CONTEXT

**Description:** Sets the current control context. Must be called every frame.

context: https://alloc8or.re/rdr3/doc/misc/input_contexts.txt
For more information, see common:/data/control/settings.meta
https://github.com/femga/rdr3_discoveries/tree/master/Controls

| Property | Value |
|----------|-------|
| Native Name | `_SET_CONTROL_CONTEXT` |
| Hash | `0x2804658EB7D8A50B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `control` (int), `context` (Hash) |

### Parameters

- **`control`** (`int`)
- **`context`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetControlContext(control, context)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2804658EB7D8A50B, control, context)
```


---

*End of PAD natives*
