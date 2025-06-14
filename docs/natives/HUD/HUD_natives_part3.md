# HUD Natives - Part 3 of 4

Red Dead Redemption 3 Native Functions Reference

**Namespace:** HUD  
**Natives in this file:** 50  
**Total natives in namespace:** 188  
**Generated from:** RDR3natives JSON data

---

## _TEXT_BLOCK_DELETE

| Property | Value |
|----------|-------|
| Native Name | `_TEXT_BLOCK_DELETE` |
| Hash | `0xAA03F130A637D923` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textBlock` (const char*) |

### Parameters

- **`textBlock`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
TextBlockDelete(textBlock)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAA03F130A637D923, textBlock)
```


---

## _TEXT_BLOCK_IS_STREAMED

| Property | Value |
|----------|-------|
| Native Name | `_TEXT_BLOCK_IS_STREAMED` |
| Hash | `0x3CF96E16265B7DC8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `textBlock` (const char*) |

### Parameters

- **`textBlock`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = TextBlockIsStreamed(textBlock)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3CF96E16265B7DC8, textBlock)
```


---

## _UI_PROMPT_ADD_GROUP_LINK

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_ADD_GROUP_LINK` |
| Hash | `0x684C96CC7C66E8EF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `prompt` (Prompt), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`prompt`** (`Prompt`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptAddGroupLink(p0, prompt, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x684C96CC7C66E8EF, p0, prompt, p2)
```


---

## _UI_PROMPT_ADD_GROUP_RETURN_LINK

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_ADD_GROUP_RETURN_LINK` |
| Hash | `0x837972ED28159536` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `prompt` (Prompt) |

### Parameters

- **`p0`** (`Any`)
- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
UiPromptAddGroupReturnLink(p0, prompt)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x837972ED28159536, p0, prompt)
```


---

## _UI_PROMPT_CLEAR_HORIZONTAL_ORIENTATION

**Description:** id is the return value from 0xD9459157EB22C895.

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_CLEAR_HORIZONTAL_ORIENTATION` |
| Hash | `0x6095358C4142932A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `id` (int) |

### Parameters

- **`id`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptClearHorizontalOrientation(id)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6095358C4142932A, id)
```


---

## _UI_PROMPT_CLEAR_PROMPT_PRIORITY_PREFERENCE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_CLEAR_PROMPT_PRIORITY_PREFERENCE` |
| Hash | `0x51259AE5C72D4A1B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
UiPromptClearPromptPriorityPreference()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x51259AE5C72D4A1B, )
```


---

## _UI_PROMPT_CONTEXT_SET_POINT

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_CONTEXT_SET_POINT` |
| Hash | `0xAE84C5EE2C384FB3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`prompt`** (`Prompt`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
UiPromptContextSetPoint(prompt, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE84C5EE2C384FB3, prompt, x, y, z)
```


---

## _UI_PROMPT_CONTEXT_SET_RADIUS

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_CONTEXT_SET_RADIUS` |
| Hash | `0x0C718001B77CA468` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `radius` (float) |

### Parameters

- **`prompt`** (`Prompt`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
UiPromptContextSetRadius(prompt, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0C718001B77CA468, prompt, radius)
```


---

## _UI_PROMPT_CONTEXT_SET_VOLUME

**Description:** Attaches a Volume

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_CONTEXT_SET_VOLUME` |
| Hash | `0x4D107406667423BE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `volume` (Volume) |

### Parameters

- **`prompt`** (`Prompt`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
UiPromptContextSetVolume(prompt, volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D107406667423BE, prompt, volume)
```


---

## _UI_PROMPT_CREATE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_CREATE` |
| Hash | `0x29FA7910726C3889` |
| Return Type | `Prompt` |
| Build | `1207` |
| Parameters | `inputHash` (Hash), `labelName` (const char*), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (int) |

### Parameters

- **`inputHash`** (`Hash`)
- **`labelName`** (`const char*`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptCreate(inputHash, labelName, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x29FA7910726C3889, inputHash, labelName, p2, p3, p4, p5)
```


---

## _UI_PROMPT_DELETE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_DELETE` |
| Hash | `0x00EDE88D4D13CF59` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
UiPromptDelete(prompt)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x00EDE88D4D13CF59, prompt)
```


---

## _UI_PROMPT_DISABLE_PROMPTS_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_DISABLE_PROMPTS_THIS_FRAME` |
| Hash | `0xF1622CE88A1946FB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
UiPromptDisablePromptsThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF1622CE88A1946FB, )
```


---

## _UI_PROMPT_DISABLE_PROMPT_TYPE_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_DISABLE_PROMPT_TYPE_THIS_FRAME` |
| Hash | `0xFC094EF26DD153FA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptDisablePromptTypeThisFrame(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFC094EF26DD153FA, p0)
```


---

## _UI_PROMPT_DOES_AMBIENT_GROUP_EXIST

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_DOES_AMBIENT_GROUP_EXIST` |
| Hash | `0xEB550B927B34A1BB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptDoesAmbientGroupExist(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEB550B927B34A1BB, hash)
```


---

## _UI_PROMPT_ENABLE_PROMPT_TYPE_THIS_FRAME

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/graphics/HUD/prompts/prompt_types

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_ENABLE_PROMPT_TYPE_THIS_FRAME` |
| Hash | `0x06565032897BA861` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
UiPromptEnablePromptTypeThisFrame(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06565032897BA861, p0)
```


---

## _UI_PROMPT_FILTER_CLEAR

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_FILTER_CLEAR` |
| Hash | `0x6A2F820452017EA2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
UiPromptFilterClear()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A2F820452017EA2, )
```


---

## _UI_PROMPT_GET_GROUP_ACTIVE_PAGE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_GET_GROUP_ACTIVE_PAGE` |
| Hash | `0xC1FCC36C3F7286C8` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptGetGroupActivePage(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC1FCC36C3F7286C8, hash)
```


---

## _UI_PROMPT_GET_GROUP_ID_FOR_SCENARIO_POINT

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_GET_GROUP_ID_FOR_SCENARIO_POINT` |
| Hash | `0xCB73D7521E7103F0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptGetGroupIdForScenarioPoint(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB73D7521E7103F0, p0, p1)
```


---

## _UI_PROMPT_GET_GROUP_ID_FOR_TARGET_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_GET_GROUP_ID_FOR_TARGET_ENTITY` |
| Hash | `0xB796970BD125FCE8` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptGetGroupIdForTargetEntity(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB796970BD125FCE8, entity)
```


---

## _UI_PROMPT_GET_MASH_MODE_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_GET_MASH_MODE_PROGRESS` |
| Hash | `0x8A9585293863B8A5` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptGetMashModeProgress(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8A9585293863B8A5, prompt)
```


---

## _UI_PROMPT_GET_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_GET_PROGRESS` |
| Hash | `0x81801291806DBC50` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptGetProgress(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x81801291806DBC50, prompt)
```


---

## _UI_PROMPT_GET_URGENT_PULSING_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_GET_URGENT_PULSING_ENABLED` |
| Hash | `0x1FBA0DABECDDB52B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptGetUrgentPulsingEnabled(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1FBA0DABECDDB52B, prompt)
```


---

## _UI_PROMPT_HAS_HOLD_AUTO_FILL_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_HAS_HOLD_AUTO_FILL_MODE` |
| Hash | `0x8010BEBD0D5ED5BC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptHasHoldAutoFillMode(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8010BEBD0D5ED5BC, prompt)
```


---

## _UI_PROMPT_HAS_HOLD_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_HAS_HOLD_MODE` |
| Hash | `0xB60C9F9ED47ABB76` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptHasHoldMode(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB60C9F9ED47ABB76, prompt)
```


---

## _UI_PROMPT_HAS_HOLD_MODE_COMPLETED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_HAS_HOLD_MODE_COMPLETED` |
| Hash | `0xE0F65F0640EF0617` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptHasHoldModeCompleted(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE0F65F0640EF0617, prompt)
```


---

## _UI_PROMPT_HAS_MANUAL_MASH_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_HAS_MANUAL_MASH_MODE` |
| Hash | `0xA6C6A4ADB3BAC409` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptHasManualMashMode(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA6C6A4ADB3BAC409, prompt)
```


---

## _UI_PROMPT_HAS_MASH_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_HAS_MASH_MODE` |
| Hash | `0xCD072523791DDC1B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptHasMashMode(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCD072523791DDC1B, prompt)
```


---

## _UI_PROMPT_HAS_MASH_MODE_COMPLETED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_HAS_MASH_MODE_COMPLETED` |
| Hash | `0x845CE958416DC473` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptHasMashModeCompleted(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x845CE958416DC473, prompt)
```


---

## _UI_PROMPT_HAS_MASH_MODE_FAILED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_HAS_MASH_MODE_FAILED` |
| Hash | `0x25B18E530CF39D6F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptHasMashModeFailed(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x25B18E530CF39D6F, prompt)
```


---

## _UI_PROMPT_HAS_PRESSED_TIMED_MODE_COMPLETED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_HAS_PRESSED_TIMED_MODE_COMPLETED` |
| Hash | `0x3CE854D250A88DAF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptHasPressedTimedModeCompleted(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3CE854D250A88DAF, prompt)
```


---

## _UI_PROMPT_HAS_PRESSED_TIMED_MODE_FAILED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_HAS_PRESSED_TIMED_MODE_FAILED` |
| Hash | `0x1A17B9ECFF617562` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptHasPressedTimedModeFailed(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1A17B9ECFF617562, prompt)
```


---

## _UI_PROMPT_HAS_STANDARD_MODE_COMPLETED

**Description:** Params: p1 is 0

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_HAS_STANDARD_MODE_COMPLETED` |
| Hash | `0xC92AC953F0A982AE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (int) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptHasStandardModeCompleted(prompt, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC92AC953F0A982AE, prompt, p1)
```


---

## _UI_PROMPT_IS_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_IS_ACTIVE` |
| Hash | `0x546E342E01DE71CF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptIsActive(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x546E342E01DE71CF, prompt)
```


---

## _UI_PROMPT_IS_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_IS_ENABLED` |
| Hash | `0x0D00EDDFB58B7F28` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptIsEnabled(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0D00EDDFB58B7F28, prompt)
```


---

## _UI_PROMPT_IS_HOLD_MODE_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_IS_HOLD_MODE_RUNNING` |
| Hash | `0xC7D70EAEF92EFF48` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptIsHoldModeRunning(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC7D70EAEF92EFF48, prompt)
```


---

## _UI_PROMPT_IS_JUST_PRESSED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_IS_JUST_PRESSED` |
| Hash | `0x2787CC611D3FACC5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptIsJustPressed(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2787CC611D3FACC5, prompt)
```


---

## _UI_PROMPT_IS_JUST_RELEASED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_IS_JUST_RELEASED` |
| Hash | `0x635CC82FA297A827` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptIsJustReleased(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x635CC82FA297A827, prompt)
```


---

## _UI_PROMPT_IS_PRESSED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_IS_PRESSED` |
| Hash | `0x21E60E230086697F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptIsPressed(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x21E60E230086697F, prompt)
```


---

## _UI_PROMPT_IS_RELEASED

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_IS_RELEASED` |
| Hash | `0xAFC887BA7A7756D6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptIsReleased(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAFC887BA7A7756D6, prompt)
```


---

## _UI_PROMPT_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_IS_VALID` |
| Hash | `0x347469FBDD1589A9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptIsValid(prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x347469FBDD1589A9, prompt)
```


---

## _UI_PROMPT_REGISTER_BEGIN

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_REGISTER_BEGIN` |
| Hash | `0x04F97DE45A519419` |
| Return Type | `Prompt` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = UiPromptRegisterBegin()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x04F97DE45A519419, )
```


---

## _UI_PROMPT_REGISTER_END

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_REGISTER_END` |
| Hash | `0xF7AA2696A22AD8B9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
UiPromptRegisterEnd(prompt)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF7AA2696A22AD8B9, prompt)
```


---

## _UI_PROMPT_REMOVE_GROUP

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_REMOVE_GROUP` |
| Hash | `0x4E52C800A28F7BE8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (Any) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptRemoveGroup(prompt, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4E52C800A28F7BE8, prompt, p1)
```


---

## _UI_PROMPT_RESTART_MODES

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_RESTART_MODES` |
| Hash | `0xDC6C55DFA2C24EE5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt) |

### Parameters

- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
UiPromptRestartModes(prompt)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDC6C55DFA2C24EE5, prompt)
```


---

## _UI_PROMPT_SET_ACTIVE_GROUP_THIS_FRAME

**Description:** Note: you must use VAR_STRING for p1 if string is not part of text database
tabAmount: specifies number of tabs in prompt group
tabDefaultIndex: specifies starting index
p3 if is set > 3 you can no longer press Q to change tab if there are more than one tab set in tabAmount

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_ACTIVE_GROUP_THIS_FRAME` |
| Hash | `0xC65A45D4453C2627` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `hash` (Hash), `name` (const char*), `tabAmount` (int), `tabDefaultIndex` (int), `p4` (int), `prompt` (Prompt) |

### Parameters

- **`hash`** (`Hash`)
- **`name`** (`const char*`)
- **`tabAmount`** (`int`)
- **`tabDefaultIndex`** (`int`)
- **`p4`** (`int`)
- **`prompt`** (`Prompt`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptSetActiveGroupThisFrame(hash, name, tabAmount, tabDefaultIndex, p4, prompt)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC65A45D4453C2627, hash, name, tabAmount, tabDefaultIndex, p4, prompt)
```


---

## _UI_PROMPT_SET_ALLOWED_ACTION

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_ALLOWED_ACTION` |
| Hash | `0x565C1CE183CB0EAF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `action` (Hash) |

### Parameters

- **`prompt`** (`Prompt`)
- **`action`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetAllowedAction(prompt, action)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x565C1CE183CB0EAF, prompt, action)
```


---

## _UI_PROMPT_SET_AMBIENT_GROUP_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_AMBIENT_GROUP_THIS_FRAME` |
| Hash | `0x315C81D760609108` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (float), `p2` (int), `p3` (int), `p4` (Hash), `name` (const char*), `p6` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`float`)
- **`p2`** (`int`)
- **`p3`** (`int`)
- **`p4`** (`Hash`)
- **`name`** (`const char*`)
- **`p6`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptSetAmbientGroupThisFrame(entity, p1, p2, p3, p4, name, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x315C81D760609108, entity, p1, p2, p3, p4, name, p6)
```


---

## _UI_PROMPT_SET_ATTRIBUTE

**Description:** attribute: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eUIPromptAttribute

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_ATTRIBUTE` |
| Hash | `0x560E76D5E2E1803F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `attribute` (int), `enabled` (BOOL) |

### Parameters

- **`prompt`** (`Prompt`)
- **`attribute`** (`int`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetAttribute(prompt, attribute, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x560E76D5E2E1803F, prompt, attribute, enabled)
```


---

## _UI_PROMPT_SET_BEAT_MODE

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_BEAT_MODE` |
| Hash | `0xF957A1654C6322FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `toggle` (BOOL) |

### Parameters

- **`prompt`** (`Prompt`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetBeatMode(prompt, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF957A1654C6322FE, prompt, toggle)
```


---

## _UI_PROMPT_SET_BEAT_MODE_GRAYED_OUT

| Property | Value |
|----------|-------|
| Native Name | `_UI_PROMPT_SET_BEAT_MODE_GRAYED_OUT` |
| Hash | `0xB487A4936FBF40AC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (Any) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiPromptSetBeatModeGrayedOut(prompt, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB487A4936FBF40AC, prompt, p1)
```


---

*End of HUD natives part 3*
