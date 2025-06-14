# HUD Natives - Part 1 of 4

Red Dead Redemption 3 Native Functions Reference

**Namespace:** HUD  
**Natives in this file:** 50  
**Total natives in namespace:** 188  
**Generated from:** RDR3natives JSON data

---

## ALLOW_PAUSE_WHEN_NOT_IN_STATE_OF_PLAY_THIS_FRAME

**Description:** Old name: _ALLOW_PAUSE_MENU_WHEN_DEAD_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `ALLOW_PAUSE_WHEN_NOT_IN_STATE_OF_PLAY_THIS_FRAME` |
| Hash | `0x30996422DF1EE561` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
AllowPauseWhenNotInStateOfPlayThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x30996422DF1EE561, )
```


---

## BUSYSPINNER_IS_ON

| Property | Value |
|----------|-------|
| Native Name | `BUSYSPINNER_IS_ON` |
| Hash | `0x823BF7B1DF613A21` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = BusyspinnerIsOn()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x823BF7B1DF613A21, )
```


---

## BUSYSPINNER_OFF

**Description:** Removes the loading prompt at the bottom right of the screen.

| Property | Value |
|----------|-------|
| Native Name | `BUSYSPINNER_OFF` |
| Hash | `0x58F441B90EA84D06` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
BusyspinnerOff()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x58F441B90EA84D06, )
```


---

## CLEAR_ALL_HELP_MESSAGES

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_ALL_HELP_MESSAGES` |
| Hash | `0x916ED8321F087059` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearAllHelpMessages()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x916ED8321F087059, )
```


---

## CREATE_FAKE_MP_GAMER_TAG

| Property | Value |
|----------|-------|
| Native Name | `CREATE_FAKE_MP_GAMER_TAG` |
| Hash | `0x53CB4B502E1C57EA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `username` (const char*), `pointedClanTag` (BOOL), `isRockstarClan` (BOOL), `clanTag` (const char*), `clanFlag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`username`** (`const char*`)
- **`pointedClanTag`** (`BOOL`)
- **`isRockstarClan`** (`BOOL`)
- **`clanTag`** (`const char*`)
- **`clanFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CreateFakeMpGamerTag(ped, username, pointedClanTag, isRockstarClan, clanTag, clanFlag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x53CB4B502E1C57EA, ped, username, pointedClanTag, isRockstarClan, clanTag, clanFlag)
```


---

## DISABLE_FRONTEND_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_FRONTEND_THIS_FRAME` |
| Hash | `0x56CE42A528156A67` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
DisableFrontendThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x56CE42A528156A67, )
```


---

## DISPLAY_HUD

**Description:** If Hud should be displayed

| Property | Value |
|----------|-------|
| Native Name | `DISPLAY_HUD` |
| Hash | `0xD63FE3AF9FB3D53F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DisplayHud(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD63FE3AF9FB3D53F, toggle)
```


---

## DOES_TEXT_LABEL_EXIST

**Description:** Checks if the passed gxt name exists in the game files.

| Property | Value |
|----------|-------|
| Native Name | `DOES_TEXT_LABEL_EXIST` |
| Hash | `0x73C258C68D6F55B6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `label` (const char*) |

### Parameters

- **`label`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DoesTextLabelExist(label)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x73C258C68D6F55B6, label)
```


---

## GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME

**Description:** Note: you must use VAR_STRING. Byte code very similar to TEXT_COMMAND_DISPLAY_TEXT in V
Old name: _GET_TEXT_SUBSTRING

| Property | Value |
|----------|-------|
| Native Name | `GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME` |
| Hash | `0x9D7E12EC6A1EE4E5` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `text` (const char*), `position` (int), `length` (int) |

### Parameters

- **`text`** (`const char*`)
- **`position`** (`int`)
- **`length`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetCharacterFromAudioConversationFilename(text, position, length)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9D7E12EC6A1EE4E5, text, position, length)
```


---

## GET_FILENAME_FOR_AUDIO_CONVERSATION

**Description:** Gets a string literal from a label name.

Old name: _GET_LABEL_TEXT

| Property | Value |
|----------|-------|
| Native Name | `GET_FILENAME_FOR_AUDIO_CONVERSATION` |
| Hash | `0xCFEDCCAD3C5BA90D` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `labelName` (const char*) |

### Parameters

- **`labelName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetFilenameForAudioConversation(labelName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCFEDCCAD3C5BA90D, labelName)
```


---

## GET_HUD_SCREEN_POSITION_FROM_WORLD_POSITION

| Property | Value |
|----------|-------|
| Native Name | `GET_HUD_SCREEN_POSITION_FROM_WORLD_POSITION` |
| Hash | `0xB39C81628EF10B42` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `worldX` (float), `worldY` (float), `worldZ` (float), `screenX` (float*), `screenY` (float*) |

### Parameters

- **`worldX`** (`float`)
- **`worldY`** (`float`)
- **`worldZ`** (`float`)
- **`screenX`** (`float*`)
- **`screenY`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = GetHudScreenPositionFromWorldPosition(worldX, worldY, worldZ, screenX, screenY)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB39C81628EF10B42, worldX, worldY, worldZ, screenX, screenY)
```


---

## GET_LENGTH_OF_LITERAL_STRING

**Description:** Returns the length of the string passed (much like strlen).

| Property | Value |
|----------|-------|
| Native Name | `GET_LENGTH_OF_LITERAL_STRING` |
| Hash | `0x481FBF588B0B76DB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `string` (const char*) |

### Parameters

- **`string`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetLengthOfLiteralString(string)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x481FBF588B0B76DB, string)
```


---

## GET_LENGTH_OF_LITERAL_STRING_IN_BYTES

| Property | Value |
|----------|-------|
| Native Name | `GET_LENGTH_OF_LITERAL_STRING_IN_BYTES` |
| Hash | `0xDC5AD6B7AB8184F5` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `string` (const char*) |

### Parameters

- **`string`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetLengthOfLiteralStringInBytes(string)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDC5AD6B7AB8184F5, string)
```


---

## GET_NAMED_RENDERTARGET_RENDER_ID

| Property | Value |
|----------|-------|
| Native Name | `GET_NAMED_RENDERTARGET_RENDER_ID` |
| Hash | `0xB6762A85EE29AA60` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `name` (const char*) |

### Parameters

- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetNamedRendertargetRenderId(name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB6762A85EE29AA60, name)
```


---

## GET_STRING_FROM_HASH_KEY

**Description:** Returns the label text given the hash.

Old name: _GET_LABEL_TEXT_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `GET_STRING_FROM_HASH_KEY` |
| Hash | `0xBD5DD5EAE2B6CE14` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `labelHash` (Hash) |

### Parameters

- **`labelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetStringFromHashKey(labelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBD5DD5EAE2B6CE14, labelHash)
```


---

## HIDE_HUD_AND_RADAR_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `HIDE_HUD_AND_RADAR_THIS_FRAME` |
| Hash | `0x36CDD81627A6FCD2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
HideHudAndRadarThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x36CDD81627A6FCD2, )
```


---

## HIDE_LOADING_ON_FADE_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `HIDE_LOADING_ON_FADE_THIS_FRAME` |
| Hash | `0xEA600AABAF4B9084` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
HideLoadingOnFadeThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEA600AABAF4B9084, )
```


---

## IS_HUD_HIDDEN

| Property | Value |
|----------|-------|
| Native Name | `IS_HUD_HIDDEN` |
| Hash | `0x71B72B478F8189DC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsHudHidden()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x71B72B478F8189DC, )
```


---

## IS_MP_GAMER_TAG_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_MP_GAMER_TAG_ACTIVE` |
| Hash | `0x6E1C31E14C7A5F97` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerTagId` (int) |

### Parameters

- **`gamerTagId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsMpGamerTagActive(gamerTagId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6E1C31E14C7A5F97, gamerTagId)
```


---

## IS_NAMED_RENDERTARGET_LINKED

| Property | Value |
|----------|-------|
| Native Name | `IS_NAMED_RENDERTARGET_LINKED` |
| Hash | `0x707032835FF09AE7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `modelHash` (Hash) |

### Parameters

- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsNamedRendertargetLinked(modelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x707032835FF09AE7, modelHash)
```


---

## IS_NAMED_RENDERTARGET_REGISTERED

| Property | Value |
|----------|-------|
| Native Name | `IS_NAMED_RENDERTARGET_REGISTERED` |
| Hash | `0x3EE32F7964C40FE6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `name` (const char*) |

### Parameters

- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsNamedRendertargetRegistered(name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3EE32F7964C40FE6, name)
```


---

## IS_PAUSE_MENU_ACTIVE

**Description:** Returns true when either Pause Menu, a Frontend Menu, Online Policies menu or Social Club menu is active.

| Property | Value |
|----------|-------|
| Native Name | `IS_PAUSE_MENU_ACTIVE` |
| Hash | `0x535384D6067BA42E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsPauseMenuActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x535384D6067BA42E, )
```


---

## IS_RADAR_HIDDEN

| Property | Value |
|----------|-------|
| Native Name | `IS_RADAR_HIDDEN` |
| Hash | `0x1B82FD5FFA4D666E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsRadarHidden()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1B82FD5FFA4D666E, )
```


---

## IS_RADAR_HIDDEN_BY_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `IS_RADAR_HIDDEN_BY_SCRIPT` |
| Hash | `0x66F35DD9D2B58579` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsRadarHiddenByScript()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x66F35DD9D2B58579, )
```


---

## IS_RADAR_PREFERENCE_SWITCHED_ON

| Property | Value |
|----------|-------|
| Native Name | `IS_RADAR_PREFERENCE_SWITCHED_ON` |
| Hash | `0x81E47F0EE1F2B21E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsRadarPreferenceSwitchedOn()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x81E47F0EE1F2B21E, )
```


---

## IS_SUBTITLE_PREFERENCE_SWITCHED_ON

| Property | Value |
|----------|-------|
| Native Name | `IS_SUBTITLE_PREFERENCE_SWITCHED_ON` |
| Hash | `0x7C4AC9573587F2DF` |
| Return Type | `BOOL` |
| Build | `1355` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsSubtitlePreferenceSwitchedOn()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7C4AC9573587F2DF, )
```


---

## LINK_NAMED_RENDERTARGET

| Property | Value |
|----------|-------|
| Native Name | `LINK_NAMED_RENDERTARGET` |
| Hash | `0x2F506B8556242DDB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `modelHash` (Hash) |

### Parameters

- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
LinkNamedRendertarget(modelHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2F506B8556242DDB, modelHash)
```


---

## REGISTER_NAMED_RENDERTARGET

| Property | Value |
|----------|-------|
| Native Name | `REGISTER_NAMED_RENDERTARGET` |
| Hash | `0x98AF2BB6F62BD588` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `name` (const char*), `p1` (BOOL) |

### Parameters

- **`name`** (`const char*`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = RegisterNamedRendertarget(name, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x98AF2BB6F62BD588, name, p1)
```


---

## RELEASE_NAMED_RENDERTARGET

| Property | Value |
|----------|-------|
| Native Name | `RELEASE_NAMED_RENDERTARGET` |
| Hash | `0x0E692EE61761361F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `name` (const char*) |

### Parameters

- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = ReleaseNamedRendertarget(name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E692EE61761361F, name)
```


---

## REMOVE_MP_GAMER_TAG

**Description:** only works by invoking and passing as pointer value Citizen.InvokeNative(0x839BFD7D7E49FE09, Citizen.PointerValueIntInitialized(gamerTagId))

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_MP_GAMER_TAG` |
| Hash | `0x839BFD7D7E49FE09` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `gamerTagId` (int) |

### Parameters

- **`gamerTagId`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemoveMpGamerTag(gamerTagId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x839BFD7D7E49FE09, gamerTagId)
```


---

## SET_FRONTEND_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `SET_FRONTEND_ACTIVE` |
| Hash | `0xCE47C21C0687EBC2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `active` (BOOL) |

### Parameters

- **`active`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetFrontendActive(active)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE47C21C0687EBC2, active)
```


---

## SET_MISSION_NAME

| Property | Value |
|----------|-------|
| Native Name | `SET_MISSION_NAME` |
| Hash | `0x402669A4BDAA72DA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `name` (const char*) |

### Parameters

- **`p0`** (`BOOL`)
- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetMissionName(p0, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x402669A4BDAA72DA, p0, name)
```


---

## SET_MISSION_NAME_FOR_UGC_MISSION

| Property | Value |
|----------|-------|
| Native Name | `SET_MISSION_NAME_FOR_UGC_MISSION` |
| Hash | `0xD98630CE73C61E98` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `name` (const char*) |

### Parameters

- **`p0`** (`BOOL`)
- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetMissionNameForUgcMission(p0, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD98630CE73C61E98, p0, name)
```


---

## SET_MP_GAMER_TAG_BIG_TEXT

| Property | Value |
|----------|-------|
| Native Name | `SET_MP_GAMER_TAG_BIG_TEXT` |
| Hash | `0xA0D7CE5F83259663` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int), `string` (const char*) |

### Parameters

- **`gamerTagId`** (`int`)
- **`string`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetMpGamerTagBigText(gamerTagId, string)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA0D7CE5F83259663, gamerTagId, string)
```


---

## SET_MP_GAMER_TAG_NAME

| Property | Value |
|----------|-------|
| Native Name | `SET_MP_GAMER_TAG_NAME` |
| Hash | `0xEA6F4B8D4B4B5B3E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int), `string` (const char*) |

### Parameters

- **`gamerTagId`** (`int`)
- **`string`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetMpGamerTagName(gamerTagId, string)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEA6F4B8D4B4B5B3E, gamerTagId, string)
```


---

## SET_TEXT_RENDER_ID

| Property | Value |
|----------|-------|
| Native Name | `SET_TEXT_RENDER_ID` |
| Hash | `0xE550CDE128D56757` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `renderId` (int) |

### Parameters

- **`renderId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetTextRenderId(renderId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE550CDE128D56757, renderId)
```


---

## TEXT_BLOCK_IS_LOADED

| Property | Value |
|----------|-------|
| Native Name | `TEXT_BLOCK_IS_LOADED` |
| Hash | `0xD0976CC34002DB57` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `textBlock` (const char*) |

### Parameters

- **`textBlock`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = TextBlockIsLoaded(textBlock)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD0976CC34002DB57, textBlock)
```


---

## TEXT_BLOCK_REQUEST

| Property | Value |
|----------|-------|
| Native Name | `TEXT_BLOCK_REQUEST` |
| Hash | `0xF66090013DE648D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textBlock` (const char*) |

### Parameters

- **`textBlock`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
TextBlockRequest(textBlock)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF66090013DE648D5, textBlock)
```


---

## UI_GET_SCENE_UIOBJECT

| Property | Value |
|----------|-------|
| Native Name | `UI_GET_SCENE_UIOBJECT` |
| Hash | `0xBE1067CD1C9570F6` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UiGetSceneUiobject(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBE1067CD1C9570F6, p0)
```


---

## UI_MOVIEVIEW_SET_RENDER_TARGET

| Property | Value |
|----------|-------|
| Native Name | `UI_MOVIEVIEW_SET_RENDER_TARGET` |
| Hash | `0x51DE09A2196BD951` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
UiMovieviewSetRenderTarget(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x51DE09A2196BD951, p0, p1)
```


---

## UI_PROMPT_IS_CONTROL_ACTION_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `UI_PROMPT_IS_CONTROL_ACTION_ACTIVE` |
| Hash | `0x1BE19185B8AFE299` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `controlAction` (Hash) |

### Parameters

- **`controlAction`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UiPromptIsControlActionActive(controlAction)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1BE19185B8AFE299, controlAction)
```


---

## UI_REQUEST_SCENE

| Property | Value |
|----------|-------|
| Native Name | `UI_REQUEST_SCENE` |
| Hash | `0xB6857100F8FD433C` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = UiRequestScene(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB6857100F8FD433C, p0, p1)
```


---

## _GET_NEAR_HORSE

**Description:** This native accepts 1 as parameter in the decompiles
returns the nearest horse handle if within 2 3 meters of the player, if not close enough returns false

NOTE: if type is 0 returns PlayerPedId always?

| Property | Value |
|----------|-------|
| Native Name | `_GET_NEAR_HORSE` |
| Hash | `0x0501D52D24EA8934` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetNearHorse(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0501D52D24EA8934, p0)
```


---

## _0x052D4AC0922AF91A

| Property | Value |
|----------|-------|
| Native Name | `_0x052D4AC0922AF91A` |
| Hash | `0x052D4AC0922AF91A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x052D4AC0922AF91A(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x052D4AC0922AF91A, p0, p1)
```


---

## _0x066725A9D52B3641

| Property | Value |
|----------|-------|
| Native Name | `_0x066725A9D52B3641` |
| Hash | `0x066725A9D52B3641` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x066725A9D52B3641()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x066725A9D52B3641, )
```


---

## _0x100157D6D7FE32CA

| Property | Value |
|----------|-------|
| Native Name | `_0x100157D6D7FE32CA` |
| Hash | `0x100157D6D7FE32CA` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x100157D6D7FE32CA(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x100157D6D7FE32CA, p0, p1)
```


---

## _0x160825DADF1B04B3

| Property | Value |
|----------|-------|
| Native Name | `_0x160825DADF1B04B3` |
| Hash | `0x160825DADF1B04B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x160825DADF1B04B3()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x160825DADF1B04B3, )
```


---

## _0x28AE29D909C8FDCE

| Property | Value |
|----------|-------|
| Native Name | `_0x28AE29D909C8FDCE` |
| Hash | `0x28AE29D909C8FDCE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x28AE29D909C8FDCE(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x28AE29D909C8FDCE, p0)
```


---

## _0x2F7BB105144ACF30

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_0x2F7BB105144ACF30` |
| Hash | `0x2F7BB105144ACF30` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x2F7BB105144ACF30()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2F7BB105144ACF30, )
```


---

## _0x3FE4FB41EF7D2196

| Property | Value |
|----------|-------|
| Native Name | `_0x3FE4FB41EF7D2196` |
| Hash | `0x3FE4FB41EF7D2196` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3FE4FB41EF7D2196(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3FE4FB41EF7D2196, p0)
```


---

*End of HUD natives part 1*
