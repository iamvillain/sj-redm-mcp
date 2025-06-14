# HUD Natives - Part 2 of 4

Red Dead Redemption 3 Native Functions Reference

**Namespace:** HUD  
**Natives in this file:** 50  
**Total natives in namespace:** 188  
**Generated from:** RDR3natives JSON data

---

## _0x53CE46C01A089DA1

| Property | Value |
|----------|-------|
| Native Name | `_0x53CE46C01A089DA1` |
| Hash | `0x53CE46C01A089DA1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `prompt` (Prompt), `p1` (BOOL) |

### Parameters

- **`prompt`** (`Prompt`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x53CE46C01A089DA1(prompt, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x53CE46C01A089DA1, prompt, p1)
```


---

## _0x5651516D947ABC53

| Property | Value |
|----------|-------|
| Native Name | `_0x5651516D947ABC53` |
| Hash | `0x5651516D947ABC53` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x5651516D947ABC53()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5651516D947ABC53, )
```


---

## _0x7EC0D68233E391AC

| Property | Value |
|----------|-------|
| Native Name | `_0x7EC0D68233E391AC` |
| Hash | `0x7EC0D68233E391AC` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7EC0D68233E391AC(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7EC0D68233E391AC, p0)
```


---

## _0x806862E5D266CF38

| Property | Value |
|----------|-------|
| Native Name | `_0x806862E5D266CF38` |
| Hash | `0x806862E5D266CF38` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x806862E5D266CF38(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x806862E5D266CF38, p0, p1, p2)
```


---

## _0x8A59D44189AF2BC5

| Property | Value |
|----------|-------|
| Native Name | `_0x8A59D44189AF2BC5` |
| Hash | `0x8A59D44189AF2BC5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x8A59D44189AF2BC5(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8A59D44189AF2BC5, p0, p1)
```


---

## _0x8B55B324A9123F6B

| Property | Value |
|----------|-------|
| Native Name | `_0x8B55B324A9123F6B` |
| Hash | `0x8B55B324A9123F6B` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `groupId` (int), `volume` (Volume), `p2` (const char*), `p3` (Any), `p4` (Any), `p5` (Any) |

### Parameters

- **`groupId`** (`int`)
- **`volume`** (`Volume`)
- **`p2`** (`const char*`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x8B55B324A9123F6B(groupId, volume, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8B55B324A9123F6B, groupId, volume, p2, p3, p4, p5)
```


---

## _0x958278B97C4AFFD8

| Property | Value |
|----------|-------|
| Native Name | `_0x958278B97C4AFFD8` |
| Hash | `0x958278B97C4AFFD8` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x958278B97C4AFFD8(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x958278B97C4AFFD8, p0, p1)
```


---

## _HUD_WEAPON_WHEEL_GET_SELECTED_ITEM_HASH

**Description:** Returns the hash of the currently highlighted item in the weapon wheel.
Only works while the wheel is open will return false

Use in conjunction with IS_CONTROL_JUST_RELEASED(0, 'INPUT_OPEN_WHEEL_MENU') to detect item selection/usage.

| Property | Value |
|----------|-------|
| Native Name | `_HUD_WEAPON_WHEEL_GET_SELECTED_ITEM_HASH` |
| Hash | `0x9C409BBC492CB5B1` |
| Return Type | `Any` |
| API Set | `client` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = HudWeaponWheelGetSelectedItemHash()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9C409BBC492CB5B1, )
```


---

## _0x9D37EB5003E0F2CF

| Property | Value |
|----------|-------|
| Native Name | `_0x9D37EB5003E0F2CF` |
| Hash | `0x9D37EB5003E0F2CF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9D37EB5003E0F2CF(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9D37EB5003E0F2CF, p0, p1)
```


---

## _0xB0E8599243B3F568

| Property | Value |
|----------|-------|
| Native Name | `_0xB0E8599243B3F568` |
| Hash | `0xB0E8599243B3F568` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB0E8599243B3F568(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB0E8599243B3F568, p0)
```


---

## _0xBFFF81E12A745A5F

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_0xBFFF81E12A745A5F` |
| Hash | `0xBFFF81E12A745A5F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xBFFF81E12A745A5F()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBFFF81E12A745A5F, )
```


---

## _SET_CURRENT_UGC_MISSION_DESCRIPTION

**Description:** string1 is the only string used in the scripts, the others are null (0)

| Property | Value |
|----------|-------|
| Native Name | `_SET_CURRENT_UGC_MISSION_DESCRIPTION` |
| Hash | `0xCE0D2F5586627CCE` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `active` (BOOL), `string1` (const char*), `string2` (const char*), `string3` (const char*), `string4` (const char*) |

### Parameters

- **`active`** (`BOOL`)
- **`string1`** (`const char*`)
- **`string2`** (`const char*`)
- **`string3`** (`const char*`)
- **`string4`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetCurrentUgcMissionDescription(active, string1, string2, string3, string4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE0D2F5586627CCE, active, string1, string2, string3, string4)
```


---

## _0xD6BD313CFA41E57A

| Property | Value |
|----------|-------|
| Native Name | `_0xD6BD313CFA41E57A` |
| Hash | `0xD6BD313CFA41E57A` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD6BD313CFA41E57A(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD6BD313CFA41E57A, p0)
```


---

## _0xF1E6979C0B779985

| Property | Value |
|----------|-------|
| Native Name | `_0xF1E6979C0B779985` |
| Hash | `0xF1E6979C0B779985` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `uiscene` (int) |

### Parameters

- **`uiscene`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xF1E6979C0B779985(uiscene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF1E6979C0B779985, uiscene)
```


---

## _BUSYSPINNER_SET_TEXT

| Property | Value |
|----------|-------|
| Native Name | `_BUSYSPINNER_SET_TEXT` |
| Hash | `0x7F78CD75CC4539E4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `text` (const char*) |

### Parameters

- **`text`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
BusyspinnerSetText(text)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7F78CD75CC4539E4, text)
```


---

## _CREATE_MP_GAMER_TAG

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_MP_GAMER_TAG` |
| Hash | `0xD877AF112AD2B41B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `player` (Player), `username` (const char*), `pointedClanTag` (BOOL), `isRockstarClan` (BOOL), `clanTag` (const char*), `clanFlag` (int) |

### Parameters

- **`player`** (`Player`)
- **`username`** (`const char*`)
- **`pointedClanTag`** (`BOOL`)
- **`isRockstarClan`** (`BOOL`)
- **`clanTag`** (`const char*`)
- **`clanFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CreateMpGamerTag(player, username, pointedClanTag, isRockstarClan, clanTag, clanFlag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD877AF112AD2B41B, player, username, pointedClanTag, isRockstarClan, clanTag, clanFlag)
```


---

## _CREATE_MP_GAMER_TAG_ON_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_MP_GAMER_TAG_ON_ENTITY` |
| Hash | `0xE961BF23EAB76B12` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity), `text` (const char*) |

### Parameters

- **`entity`** (`Entity`)
- **`text`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = CreateMpGamerTagOnEntity(entity, text)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE961BF23EAB76B12, entity, text)
```


---

## _DISABLE_HUD_CONTEXT

**Description:** Old name: _DISPLAY_HUD_COMPONENT

| Property | Value |
|----------|-------|
| Native Name | `_DISABLE_HUD_CONTEXT` |
| Hash | `0x8BC7C1F929D07BF3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `component` (Hash) |

### Parameters

- **`component`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
DisableHudContext(component)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8BC7C1F929D07BF3, component)
```


---

## _DISABLE_REDUCED_MENU_TIME_SCALE

**Description:** Disables reduced time scale while menus such as weapon wheel and satchel are open.

| Property | Value |
|----------|-------|
| Native Name | `_DISABLE_REDUCED_MENU_TIME_SCALE` |
| Hash | `0xC5C7A2F6567FCCBC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
DisableReducedMenuTimeScale()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC5C7A2F6567FCCBC, )
```


---

## _DISPLAY_TEXT

**Description:** nullsub, this native does nothing since build 1436, use _BG_DISPLAY_TEXT (0x16794E044C9EFB58) instead.

| Property | Value |
|----------|-------|
| Native Name | `_DISPLAY_TEXT` |
| Hash | `0xD79334A4BB99BAD1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `text` (const char*), `xPos` (float), `yPos` (float) |

### Parameters

- **`text`** (`const char*`)
- **`xPos`** (`float`)
- **`yPos`** (`float`)

### Usage

**Lua (Direct):**
```lua
DisplayText(text, xPos, yPos)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD79334A4BB99BAD1, text, xPos, yPos)
```


---

## _DOES_TEXT_BLOCK_EXIST

| Property | Value |
|----------|-------|
| Native Name | `_DOES_TEXT_BLOCK_EXIST` |
| Hash | `0x2C729F2B94CEA911` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `textDatabase` (const char*) |

### Parameters

- **`textDatabase`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = DoesTextBlockExist(textDatabase)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2C729F2B94CEA911, textDatabase)
```


---

## _ENABLE_HUD_CONTEXT

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/graphics/HUD/hud_presets
Old name: _HIDE_HUD_COMPONENT

| Property | Value |
|----------|-------|
| Native Name | `_ENABLE_HUD_CONTEXT` |
| Hash | `0x4CC5F2FC1332577F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `component` (Hash) |

### Parameters

- **`component`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
EnableHudContext(component)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4CC5F2FC1332577F, component)
```


---

## _ENABLE_HUD_CONTEXT_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_ENABLE_HUD_CONTEXT_THIS_FRAME` |
| Hash | `0xC9CAEAEEC1256E54` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `component` (Hash) |

### Parameters

- **`component`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
EnableHudContextThisFrame(component)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC9CAEAEEC1256E54, component)
```


---

## _ENABLE_REDUCED_MENU_TIME_SCALE

**Description:** Enables reduced time scale while menus such as weapon wheel and satchel are open.

| Property | Value |
|----------|-------|
| Native Name | `_ENABLE_REDUCED_MENU_TIME_SCALE` |
| Hash | `0x26F6BBEA2CE3E3DC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
EnableReducedMenuTimeScale()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x26F6BBEA2CE3E3DC, )
```


---

## _GET_COLOR_FROM_NAME

**Description:** colorNameHash: https://alloc8or.re/rdr3/doc/enums/eColor.txt

| Property | Value |
|----------|-------|
| Native Name | `_GET_COLOR_FROM_NAME` |
| Hash | `0xB981DD2DFAF9B1C9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `colorNameHash` (Hash), `red` (int*), `green` (int*), `blue` (int*), `alpha` (int*) |

### Parameters

- **`colorNameHash`** (`Hash`)
- **`red`** (`int*`)
- **`green`** (`int*`)
- **`blue`** (`int*`)
- **`alpha`** (`int*`)

### Usage

**Lua (Direct):**
```lua
GetColorFromName(colorNameHash, red, green, blue, alpha)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB981DD2DFAF9B1C9, colorNameHash, red, green, blue, alpha)
```


---

## _GET_LABEL_TEXT_2

| Property | Value |
|----------|-------|
| Native Name | `_GET_LABEL_TEXT_2` |
| Hash | `0x3429670F9B9EF2D3` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `label` (const char*) |

### Parameters

- **`label`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetLabelText2(label)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3429670F9B9EF2D3, label)
```


---

## _GET_TEXT_SUBSTRING_2

**Description:** Similar to 0x9D7E12EC6A1EE4E5(GET_TEXT_SUBSTRING) but starts at the beginning of the string

| Property | Value |
|----------|-------|
| Native Name | `_GET_TEXT_SUBSTRING_2` |
| Hash | `0xD8402B858F4DDD88` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `text` (const char*), `length` (int) |

### Parameters

- **`text`** (`const char*`)
- **`length`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetTextSubstring2(text, length)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD8402B858F4DDD88, text, length)
```


---

## _HIDE_HUD_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_HIDE_HUD_THIS_FRAME` |
| Hash | `0xBF4F34A85CA2970D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
HideHudThisFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBF4F34A85CA2970D, )
```


---

## _IS_MP_GAMER_TAG_ACTIVE_ON_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_IS_MP_GAMER_TAG_ACTIVE_ON_ENTITY` |
| Hash | `0x502E1591A504F843` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `gamerTagId` (int), `entity` (Entity) |

### Parameters

- **`gamerTagId`** (`int`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = IsMpGamerTagActiveOnEntity(gamerTagId, entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x502E1591A504F843, gamerTagId, entity)
```


---

## _JOURNAL_CAN_WRITE_ENTRY

| Property | Value |
|----------|-------|
| Native Name | `_JOURNAL_CAN_WRITE_ENTRY` |
| Hash | `0xCF782691D91F270E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = JournalCanWriteEntry(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCF782691D91F270E, p0)
```


---

## _JOURNAL_CLEAR_ALL_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `_JOURNAL_CLEAR_ALL_PROGRESS` |
| Hash | `0xF402978DE6F88D6E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
JournalClearAllProgress()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF402978DE6F88D6E, )
```


---

## _JOURNAL_GET_ENTRY_AT_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_JOURNAL_GET_ENTRY_AT_INDEX` |
| Hash | `0x3D16ABD7A1FD8C96` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = JournalGetEntryAtIndex(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3D16ABD7A1FD8C96, p0)
```


---

## _JOURNAL_GET_ENTRY_COUNT

| Property | Value |
|----------|-------|
| Native Name | `_JOURNAL_GET_ENTRY_COUNT` |
| Hash | `0xE65B5DE53351BE22` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = JournalGetEntryCount()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE65B5DE53351BE22, )
```


---

## _JOURNAL_GET_ENTRY_INFO

| Property | Value |
|----------|-------|
| Native Name | `_JOURNAL_GET_ENTRY_INFO` |
| Hash | `0x5514C3E60673530F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = JournalGetEntryInfo(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5514C3E60673530F, p0, p1)
```


---

## _JOURNAL_GET_GRIME_AT_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_JOURNAL_GET_GRIME_AT_INDEX` |
| Hash | `0xCB5945E1B855852F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = JournalGetGrimeAtIndex(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB5945E1B855852F, p0)
```


---

## _JOURNAL_GET_TEXTURE_WITH_LAYOUT

| Property | Value |
|----------|-------|
| Native Name | `_JOURNAL_GET_TEXTURE_WITH_LAYOUT` |
| Hash | `0x62CC549B3B8EA2AA` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = JournalGetTextureWithLayout(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x62CC549B3B8EA2AA, p0, p1, p2)
```


---

## _JOURNAL_MARK_READ

| Property | Value |
|----------|-------|
| Native Name | `_JOURNAL_MARK_READ` |
| Hash | `0xE4509BABE59BD24E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
JournalMarkRead(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE4509BABE59BD24E, p0)
```


---

## _JOURNAL_WRITE_ENTRY

| Property | Value |
|----------|-------|
| Native Name | `_JOURNAL_WRITE_ENTRY` |
| Hash | `0x6DFDD665E416B093` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
JournalWriteEntry(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6DFDD665E416B093, p0)
```


---

## _MP_GAMER_TAG_DISABLE_REVIVE_TOP_ICON

| Property | Value |
|----------|-------|
| Native Name | `_MP_GAMER_TAG_DISABLE_REVIVE_TOP_ICON` |
| Hash | `0x1F9A64C2804B3471` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int) |

### Parameters

- **`gamerTagId`** (`int`)

### Usage

**Lua (Direct):**
```lua
MpGamerTagDisableReviveTopIcon(gamerTagId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1F9A64C2804B3471, gamerTagId)
```


---

## _MP_GAMER_TAG_ENABLE_REVIVE_TOP_ICON

| Property | Value |
|----------|-------|
| Native Name | `_MP_GAMER_TAG_ENABLE_REVIVE_TOP_ICON` |
| Hash | `0xFFF6579CF0139FCE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int) |

### Parameters

- **`gamerTagId`** (`int`)

### Usage

**Lua (Direct):**
```lua
MpGamerTagEnableReviveTopIcon(gamerTagId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFFF6579CF0139FCE, gamerTagId)
```


---

## _SET_MP_GAMER_TAG_COLOUR

| Property | Value |
|----------|-------|
| Native Name | `_SET_MP_GAMER_TAG_COLOUR` |
| Hash | `0x84BD27DDF9575816` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int), `colour` (Hash) |

### Parameters

- **`gamerTagId`** (`int`)
- **`colour`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetMpGamerTagColour(gamerTagId, colour)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x84BD27DDF9575816, gamerTagId, colour)
```


---

## _SET_MP_GAMER_TAG_NAME_POSSE

| Property | Value |
|----------|-------|
| Native Name | `_SET_MP_GAMER_TAG_NAME_POSSE` |
| Hash | `0x1EA716E0628A6F44` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int), `text` (const char*) |

### Parameters

- **`gamerTagId`** (`int`)
- **`text`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetMpGamerTagNamePosse(gamerTagId, text)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1EA716E0628A6F44, gamerTagId, text)
```


---

## _SET_MP_GAMER_TAG_SECONDARY_ICON

**Description:** Found icons: SPEAKER, THROPY

| Property | Value |
|----------|-------|
| Native Name | `_SET_MP_GAMER_TAG_SECONDARY_ICON` |
| Hash | `0x95384C6CE1526EFF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int), `icon` (Hash) |

### Parameters

- **`gamerTagId`** (`int`)
- **`icon`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetMpGamerTagSecondaryIcon(gamerTagId, icon)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x95384C6CE1526EFF, gamerTagId, icon)
```


---

## _SET_MP_GAMER_TAG_TOP_ICON

**Description:** Found icons: https://pastebin.com/xx6rEgiG

| Property | Value |
|----------|-------|
| Native Name | `_SET_MP_GAMER_TAG_TOP_ICON` |
| Hash | `0x5F57522BC1EB9D9D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int), `icon` (Hash) |

### Parameters

- **`gamerTagId`** (`int`)
- **`icon`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetMpGamerTagTopIcon(gamerTagId, icon)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5F57522BC1EB9D9D, gamerTagId, icon)
```


---

## _SET_MP_GAMER_TAG_TYPE

**Description:** Found types: GENERIC_PLAYER, DEADDROP, HOTPROPERTY, MINIGAMES

| Property | Value |
|----------|-------|
| Native Name | `_SET_MP_GAMER_TAG_TYPE` |
| Hash | `0x25B9C78A25105C35` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int), `type` (Hash) |

### Parameters

- **`gamerTagId`** (`int`)
- **`type`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetMpGamerTagType(gamerTagId, type)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x25B9C78A25105C35, gamerTagId, type)
```


---

## _SET_MP_GAMER_TAG_UNK_ALLOW_LOCALIZED

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_SET_MP_GAMER_TAG_UNK_ALLOW_LOCALIZED` |
| Hash | `0xEF7AB1A0E8C86170` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int), `allow` (BOOL) |

### Parameters

- **`gamerTagId`** (`int`)
- **`allow`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetMpGamerTagUnkAllowLocalized(gamerTagId, allow)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEF7AB1A0E8C86170, gamerTagId, allow)
```


---

## _SET_MP_GAMER_TAG_VISIBILITY

**Description:** visibility:
enum eUIGamertagVisibility
{
	UIGAMERTAGVISIBILITY_NONE,
	UIGAMERTAGVISIBILITY_ICON,
	UIGAMERTAGVISIBILITY_SIMPLE,
	UIGAMERTAGVISIBILITY_COMPLEX
};

| Property | Value |
|----------|-------|
| Native Name | `_SET_MP_GAMER_TAG_VISIBILITY` |
| Hash | `0x93171DDDAB274EB8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerTagId` (int), `visibility` (int) |

### Parameters

- **`gamerTagId`** (`int`)
- **`visibility`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetMpGamerTagVisibility(gamerTagId, visibility)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x93171DDDAB274EB8, gamerTagId, visibility)
```


---

## _SET_TEXT_COLOR

**Description:** This native does nothing since build 1436, use _BG_SET_TEXT_COLOR (0x16FA5CE47F184F1E) instead.

| Property | Value |
|----------|-------|
| Native Name | `_SET_TEXT_COLOR` |
| Hash | `0x50A41AD966910F03` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `r` (int), `g` (int), `b` (int), `a` (int) |

### Parameters

- **`r`** (`int`)
- **`g`** (`int`)
- **`b`** (`int`)
- **`a`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetTextColor(r, g, b, a)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x50A41AD966910F03, r, g, b, a)
```


---

## _SHOW_HORSE_CORES

| Property | Value |
|----------|-------|
| Native Name | `_SHOW_HORSE_CORES` |
| Hash | `0xD4EE21B7CC7FD350` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `state` (BOOL) |

### Parameters

- **`state`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ShowHorseCores(state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD4EE21B7CC7FD350, state)
```


---

## _SHOW_PLAYER_CORES

| Property | Value |
|----------|-------|
| Native Name | `_SHOW_PLAYER_CORES` |
| Hash | `0x50C803A4CD5932C5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `state` (BOOL) |

### Parameters

- **`state`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ShowPlayerCores(state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x50C803A4CD5932C5, state)
```


---

*End of HUD natives part 2*
