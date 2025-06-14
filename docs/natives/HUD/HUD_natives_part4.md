# HUD Natives - Part 4 of 4

Red Dead Redemption 3 Native Functions Reference

**Namespace:** HUD  
**Natives in this file:** 38  
**Total natives in namespace:** 188  
**Generated from:** RDR3natives JSON data

---

## _UI_PROMPT_SET_CONTROL_ACTION

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_CONTROL_ACTION` |
| Hash | `0xB5352B7494A08258` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `action` (Hash) |

### Parameters

- **`prompt`** (`Prompt`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptSetControlAction(prompt, action)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB5352B7494A08258, prompt, action)
```


---

## _UI_PROMPT_SET_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_ENABLED` |
| Hash | `0x8A0FB4D03A630D21` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `toggle` (BOOL) |

### Parameters

- **`prompt`** (`Prompt`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetEnabled(prompt, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8A0FB4D03A630D21, prompt, toggle)
```


---

## _UI_PROMPT_SET_GROUP

**Description:** tabIndex: specifies tab of prompt

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_GROUP` |
| Hash | `0x2F11D3A254169EA4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `groupId` (int), `tabIndex` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`groupId`** (`int`)
- **`tabIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetGroup(prompt, groupId, tabIndex)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2F11D3A254169EA4, prompt, groupId, tabIndex)
```


---

## _UI_PROMPT_SET_HOLD_AUTO_FILL_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_HOLD_AUTO_FILL_MODE` |
| Hash | `0x3CE932E737C145D6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `autoFillTimeMs` (int), `holdTimeMs` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`autoFillTimeMs`** (`int`)
- **`holdTimeMs`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetHoldAutoFillMode(prompt, autoFillTimeMs, holdTimeMs)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3CE932E737C145D6, prompt, autoFillTimeMs, holdTimeMs)
```


---

## _UI_PROMPT_SET_HOLD_AUTO_FILL_WITH_DECAY_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_HOLD_AUTO_FILL_WITH_DECAY_MODE` |
| Hash | `0xA3F2149AA24F3D8E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `autoFillTimeMs` (int), `holdTimeMs` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`autoFillTimeMs`** (`int`)
- **`holdTimeMs`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetHoldAutoFillWithDecayMode(prompt, autoFillTimeMs, holdTimeMs)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA3F2149AA24F3D8E, prompt, autoFillTimeMs, holdTimeMs)
```


---

## _UI_PROMPT_SET_HOLD_INDEFINITELY_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_HOLD_INDEFINITELY_MODE` |
| Hash | `0xEA5CCF4EEB2F82D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetHoldIndefinitelyMode(prompt)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEA5CCF4EEB2F82D1, prompt)
```


---

## _UI_PROMPT_SET_HOLD_MODE

**Description:** Params: p2 is 304000 in R* SP Script coachrobberies

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_HOLD_MODE` |
| Hash | `0x94073D5CA3F16B7B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `holdTimeMs` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`holdTimeMs`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetHoldMode(prompt, holdTimeMs)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x94073D5CA3F16B7B, prompt, holdTimeMs)
```


---

## _UI_PROMPT_SET_MANUAL_RESOLVED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MANUAL_RESOLVED` |
| Hash | `0xA520C7B05FA4EB2A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (Any) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetManualResolved(prompt, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA520C7B05FA4EB2A, prompt, p1)
```


---

## _UI_PROMPT_SET_MASH_AUTO_FILL_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MASH_AUTO_FILL_MODE` |
| Hash | `0x6C39587D7CC66801` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `autoFillTimeMs` (int), `mashes` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`autoFillTimeMs`** (`int`)
- **`mashes`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetMashAutoFillMode(prompt, autoFillTimeMs, mashes)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C39587D7CC66801, prompt, autoFillTimeMs, mashes)
```


---

## _UI_PROMPT_SET_MASH_INDEFINITELY_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MASH_INDEFINITELY_MODE` |
| Hash | `0x7B66E89312727274` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetMashIndefinitelyMode(prompt)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7B66E89312727274, prompt)
```


---

## _UI_PROMPT_SET_MASH_MANUAL_CAN_FAIL_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MASH_MANUAL_CAN_FAIL_MODE` |
| Hash | `0x179DCF71F705DA20` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (float), `p2` (float), `p3` (float), `p4` (Any) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetMashManualCanFailMode(prompt, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x179DCF71F705DA20, prompt, p1, p2, p3, p4)
```


---

## _UI_PROMPT_SET_MASH_MANUAL_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MASH_MANUAL_MODE` |
| Hash | `0x32DF729D8BD3C1C6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (float), `p2` (float), `p3` (float), `p4` (Any) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetMashManualMode(prompt, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x32DF729D8BD3C1C6, prompt, p1, p2, p3, p4)
```


---

## _UI_PROMPT_SET_MASH_MANUAL_MODE_DECAY_SPEED

**Description:** standard (prompt not held) rate: 0.035f
fast (prompt held) rate: 0.015f
punitive (been hit) rate: 0.14f

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MASH_MANUAL_MODE_DECAY_SPEED` |
| Hash | `0x7D393C247FB9B431` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `speed` (float) |

### Parameters

- **`prompt`** (`Prompt`)
- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetMashManualModeDecaySpeed(prompt, speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7D393C247FB9B431, prompt, speed)
```


---

## _UI_PROMPT_SET_MASH_MANUAL_MODE_INCREASE_PER_PRESS

**Description:** standard (prompt not held) rate: (1f / 128f)
fast (prompt held) rate: (1f / 64f)
punitive (been hit) rate: (1f / 128f)

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MASH_MANUAL_MODE_INCREASE_PER_PRESS` |
| Hash | `0xA0D1D79C6036A855` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `rate` (float) |

### Parameters

- **`prompt`** (`Prompt`)
- **`rate`** (`float`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetMashManualModeIncreasePerPress(prompt, rate)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA0D1D79C6036A855, prompt, rate)
```


---

## _UI_PROMPT_SET_MASH_MANUAL_MODE_PRESSED_GROWTH_SPEED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MASH_MANUAL_MODE_PRESSED_GROWTH_SPEED` |
| Hash | `0x56DBB26F98582C29` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `speed` (float) |

### Parameters

- **`prompt`** (`Prompt`)
- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetMashManualModePressedGrowthSpeed(prompt, speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x56DBB26F98582C29, prompt, speed)
```


---

## _UI_PROMPT_SET_MASH_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MASH_MODE` |
| Hash | `0xDF6423BF071C7F71` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `mashes` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`mashes`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetMashMode(prompt, mashes)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF6423BF071C7F71, prompt, mashes)
```


---

## _UI_PROMPT_SET_MASH_WITH_RESISTANCE_CAN_FAIL_MODE

**Description:** For startProgress, 0.0f - 1.0f is a percentage value, so 0.5f = 50% progress. Range: 0.0f - 1.0f
For decreaseSpeed, 0.0f will result in the prompt not showing the mash progress at all. 0.01f - ?.0f. At speeds around 7.0f to 8.0f the prompt basically fails immediately if you don't start mashing right away.

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MASH_WITH_RESISTANCE_CAN_FAIL_MODE` |
| Hash | `0xDC0CB602DEADBA53` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `mashes` (int), `decreaseSpeed` (float), `startProgress` (float) |

### Parameters

- **`prompt`** (`Prompt`)
- **`mashes`** (`int`)
- **`decreaseSpeed`** (`float`)
- **`startProgress`** (`float`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetMashWithResistanceCanFailMode(prompt, mashes, decreaseSpeed, startProgress)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDC0CB602DEADBA53, prompt, mashes, decreaseSpeed, startProgress)
```


---

## _UI_PROMPT_SET_MASH_WITH_RESISTANCE_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_MASH_WITH_RESISTANCE_MODE` |
| Hash | `0xCD1BDFF15EFA79F5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `mashes` (int), `p2` (float), `p3` (float) |

### Parameters

- **`prompt`** (`Prompt`)
- **`mashes`** (`int`)
- **`p2`** (`float`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetMashWithResistanceMode(prompt, mashes, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCD1BDFF15EFA79F5, prompt, mashes, p2, p3)
```


---

## _UI_PROMPT_SET_ORDERING_AS_INPUT_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_ORDERING_AS_INPUT_TYPE` |
| Hash | `0x2F385ECC5200938D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (Any) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetOrderingAsInputType(prompt, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2F385ECC5200938D, prompt, p1)
```


---

## _UI_PROMPT_SET_PRESSED_TIMED_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_PRESSED_TIMED_MODE` |
| Hash | `0x1473D3AF51D54276` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `depletionTimeMs` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`depletionTimeMs`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetPressedTimedMode(prompt, depletionTimeMs)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1473D3AF51D54276, prompt, depletionTimeMs)
```


---

## _UI_PROMPT_SET_PRIORITY

**Description:** priority: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ePromptPriority

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_PRIORITY` |
| Hash | `0xCA24F528D0D16289` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `priority` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`priority`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetPriority(prompt, priority)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCA24F528D0D16289, prompt, priority)
```


---

## _UI_PROMPT_SET_PROMPT_PRIORITY_PREFERENCE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_PROMPT_PRIORITY_PREFERENCE` |
| Hash | `0x530A428705BE5DEF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetPromptPriorityPreference(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x530A428705BE5DEF, ped)
```


---

## _UI_PROMPT_SET_REGISTER_HORIZONTAL_ORIENTATION

**Description:** This returns an id that can be used with 0x6095358C4142932A.

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_REGISTER_HORIZONTAL_ORIENTATION` |
| Hash | `0xD9459157EB22C895` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = UiPromptSetRegisterHorizontalOrientation()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD9459157EB22C895, )
```


---

## _UI_PROMPT_SET_ROTATE_MODE

**Description:** Used for controllers

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_ROTATE_MODE` |
| Hash | `0x7ABE7095FB3D2581` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (float), `counterclockwise` (BOOL) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`float`)
- **`counterclockwise`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetRotateMode(prompt, p1, counterclockwise)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7ABE7095FB3D2581, prompt, p1, counterclockwise)
```


---

## _UI_PROMPT_SET_SPINNER_POSITION

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_SPINNER_POSITION` |
| Hash | `0x832CB510DE546282` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (Any) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetSpinnerPosition(prompt, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x832CB510DE546282, prompt, p1)
```


---

## _UI_PROMPT_SET_SPINNER_SPEED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_SPINNER_SPEED` |
| Hash | `0xAC6586A7FDCD4B68` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (Any) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetSpinnerSpeed(prompt, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAC6586A7FDCD4B68, prompt, p1)
```


---

## _UI_PROMPT_SET_STANDARDIZED_HOLD_MODE

**Description:** Hashes: SHORT_TIMED_EVENT_MP, SHORT_TIMED_EVENT, MEDIUM_TIMED_EVENT, LONG_TIMED_EVENT, RUSTLING_CALM_TIMING, PLAYER_FOCUS_TIMING, PLAYER_REACTION_TIMING

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_STANDARDIZED_HOLD_MODE` |
| Hash | `0x74C7D7B72ED0D3CF` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `timedEventHash` (Hash) |

### Parameters

- **`prompt`** (`Prompt`)
- **`timedEventHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetStandardizedHoldMode(prompt, timedEventHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x74C7D7B72ED0D3CF, prompt, timedEventHash)
```


---

## _UI_PROMPT_SET_STANDARD_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_STANDARD_MODE` |
| Hash | `0xCC6656799977741B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `releaseMode` (BOOL) |

### Parameters

- **`prompt`** (`Prompt`)
- **`releaseMode`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetStandardMode(prompt, releaseMode)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCC6656799977741B, prompt, releaseMode)
```


---

## _UI_PROMPT_SET_TAG

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_TAG` |
| Hash | `0xDEC85C174751292B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (Any) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetTag(prompt, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDEC85C174751292B, prompt, p1)
```


---

## _UI_PROMPT_SET_TARGET_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_TARGET_MODE` |
| Hash | `0x5F6503D9CD2754EB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (float), `p2` (float), `p3` (Any) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetTargetMode(prompt, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5F6503D9CD2754EB, prompt, p1, p2, p3)
```


---

## _UI_PROMPT_SET_TARGET_MODE_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_TARGET_MODE_PROGRESS` |
| Hash | `0x00123054BEC8A30F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `progress` (float) |

### Parameters

- **`prompt`** (`Prompt`)
- **`progress`** (`float`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetTargetModeProgress(prompt, progress)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x00123054BEC8A30F, prompt, progress)
```


---

## _UI_PROMPT_SET_TARGET_MODE_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_TARGET_MODE_TARGET` |
| Hash | `0x5E019C45DD3B6A14` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (float), `p2` (float) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`float`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetTargetModeTarget(prompt, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5E019C45DD3B6A14, prompt, p1, p2)
```


---

## _UI_PROMPT_SET_TEXT

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_TEXT` |
| Hash | `0x5DD02A8318420DD7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `text` (const char*) |

### Parameters

- **`prompt`** (`Prompt`)
- **`text`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetText(prompt, text)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5DD02A8318420DD7, prompt, text)
```


---

## _UI_PROMPT_SET_TRANSPORT_MODE

**Description:** TM_ANY = 0,
TM_ON_FOOT,
TM_IN_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_TRANSPORT_MODE` |
| Hash | `0x876E4A35C73A6655` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `mode` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`mode`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetTransportMode(prompt, mode)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x876E4A35C73A6655, prompt, mode)
```


---

## _UI_PROMPT_SET_TYPE

**Description:** Params: type = mostly 0, 6 (net_mission_intro_story_gvo), 7 (fm_mission_controller), 14 (net_ugc_end_flow_transition_online), 15 (net_main_[tlg_]offline)

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_TYPE` |
| Hash | `0xF4A5C4509BF923B1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `type` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`type`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetType(prompt, type)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF4A5C4509BF923B1, prompt, type)
```


---

## _UI_PROMPT_SET_URGENT_PULSING_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_URGENT_PULSING_ENABLED` |
| Hash | `0xC5F428EE08FA7F2C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `toggle` (BOOL) |

### Parameters

- **`prompt`** (`Prompt`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetUrgentPulsingEnabled(prompt, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC5F428EE08FA7F2C, prompt, toggle)
```


---

## _UI_PROMPT_SET_VISIBLE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_VISIBLE` |
| Hash | `0x71215ACCFDE075EE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `toggle` (BOOL) |

### Parameters

- **`prompt`** (`Prompt`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetVisible(prompt, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x71215ACCFDE075EE, prompt, toggle)
```


---

## _UI_PROMPT_WAS_BEAT_MODE_PRESSED_IN_TIME_WINDOW

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_WAS_BEAT_MODE_PRESSED_IN_TIME_WINDOW` |
| Hash | `0x1FE4788AB1430C55` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptWasBeatModePressedInTimeWindow(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1FE4788AB1430C55, prompt)
```


---

*End of HUD natives part 4*
