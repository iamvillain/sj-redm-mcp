# PLAYER Natives - Part 5 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PLAYER  
**Natives in this file:** 50  
**Total natives in namespace:** 395  
**Generated from:** RDR3natives JSON data

---

## _0x929DDD5538F3DF1F

| Property | Value |
|----------|-------|
| Native Name | `_0x929DDD5538F3DF1F` |
| Hash | `0x929DDD5538F3DF1F` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x929DDD5538F3DF1F(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x929DDD5538F3DF1F, p0, p1)
```


---

## _0x93624B36E8851B42

| Property | Value |
|----------|-------|
| Native Name | `_0x93624B36E8851B42` |
| Hash | `0x93624B36E8851B42` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
_0x93624B36E8851B42(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x93624B36E8851B42, player)
```


---

## _0x9422743A5BA50E10

| Property | Value |
|----------|-------|
| Native Name | `_0x9422743A5BA50E10` |
| Hash | `0x9422743A5BA50E10` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x9422743A5BA50E10(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9422743A5BA50E10, p0)
```


---

## _0x9461A8FAB0378E5B

| Property | Value |
|----------|-------|
| Native Name | `_0x9461A8FAB0378E5B` |
| Hash | `0x9461A8FAB0378E5B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9461A8FAB0378E5B(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9461A8FAB0378E5B, p0, p1)
```


---

## _SET_PLAYER_SIT_PROMPT_TEXT

**Description:** Sets the sit prompt for a specific player using a predefined text entry. use game strings like PLAYER_SIT or use custom with
AddTextEntry("sit_custom", "Take a seat")
this native must be invoked
https://imgur.com/gallery/0x988c9045531b9fce-9bTHgkv

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_SIT_PROMPT_TEXT` |
| Hash | `0x988C9045531B9FCE` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1232` |
| Parameters | `playerID` (Player), `label` (char*) |

### Parameters

- **`playerID`** (`Player`)
- **`label`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPlayerSitPromptText(playerID, label)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x988C9045531B9FCE, playerID, label)
```


---

## _0x9AFCF9FE1884BF62

| Property | Value |
|----------|-------|
| Native Name | `_0x9AFCF9FE1884BF62` |
| Hash | `0x9AFCF9FE1884BF62` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9AFCF9FE1884BF62(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9AFCF9FE1884BF62, p0, p1)
```


---

## _0x9FC5A003FB76EDBD

| Property | Value |
|----------|-------|
| Native Name | `_0x9FC5A003FB76EDBD` |
| Hash | `0x9FC5A003FB76EDBD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9FC5A003FB76EDBD(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9FC5A003FB76EDBD, p0, p1)
```


---

## _SET_PLAYER_HAT_ACCESS

**Description:** Sets the player's ability to wear hats based on the specified flag. The flag value determines whether the player can wear all hats or only the ones they own.
If the flag is set to 15 and `allow` is true, the player can wear all available hats. However, if you want to restrict the player to wearing only their owned hats (flag 1), you **must first** disable flag 15 by setting it to false, and then set flag 1 to true.

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_HAT_ACCESS` |
| Hash | `0xA0C683284DF027C7` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `flag` (int), `allow` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`flag`** (`int`)
- **`allow`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerHatAccess(player, flag, allow)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA0C683284DF027C7, player, flag, allow)
```


---

## _0xA28056CD1B04B250

| Property | Value |
|----------|-------|
| Native Name | `_0xA28056CD1B04B250` |
| Hash | `0xA28056CD1B04B250` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)
- **`p9`** (`Any`)
- **`p10`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xA28056CD1B04B250(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA28056CD1B04B250, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## _0xA342495F93B7B838

| Property | Value |
|----------|-------|
| Native Name | `_0xA342495F93B7B838` |
| Hash | `0xA342495F93B7B838` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xA342495F93B7B838(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA342495F93B7B838, p0, p1)
```


---

## _0xA54000D4BFD90BDE

| Property | Value |
|----------|-------|
| Native Name | `_0xA54000D4BFD90BDE` |
| Hash | `0xA54000D4BFD90BDE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA54000D4BFD90BDE(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA54000D4BFD90BDE, p0)
```


---

## _EAGLE_EYE_ARE_ALL_TRAILS_HIDDEN

**Description:** Retrieves whether all trails are currently hidden during Eagle Eye mode for the specified player.

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_ARE_ALL_TRAILS_HIDDEN` |
| Hash | `0xA62BBAAE67A05BB0` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = EagleEyeAreAllTrailsHidden(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA62BBAAE67A05BB0, player)
```


---

## _0xAAED694CE814817F

| Property | Value |
|----------|-------|
| Native Name | `_0xAAED694CE814817F` |
| Hash | `0xAAED694CE814817F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xAAED694CE814817F(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAAED694CE814817F, p0)
```


---

## _SET_PLAYER_CAN_PICKUP_HAT

**Description:** Enables or disables the Pick Up prompt for a hat on the ground for the specified player. When set to true, the player will see a prompt to pick up the hat if they are near it.

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_CAN_PICKUP_HAT` |
| Hash | `0xACA45DDCEF6071C4` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `canPickup` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`canPickup`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerCanPickupHat(player, canPickup)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xACA45DDCEF6071C4, player, canPickup)
```


---

## _0xB15CD2F9932C9AB5

| Property | Value |
|----------|-------|
| Native Name | `_0xB15CD2F9932C9AB5` |
| Hash | `0xB15CD2F9932C9AB5` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB15CD2F9932C9AB5(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB15CD2F9932C9AB5, p0)
```


---

## _0xB331D8A73F9D2BDF

**Description:** _IS_PLAYER_I* - _IS_PLAYER_P*

| Property | Value |
|----------|-------|
| Native Name | `_0xB331D8A73F9D2BDF` |
| Hash | `0xB331D8A73F9D2BDF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (Any*) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB331D8A73F9D2BDF(player, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB331D8A73F9D2BDF, player, p1)
```


---

## _0xBA5CA1FEB5DE0DF6

| Property | Value |
|----------|-------|
| Native Name | `_0xBA5CA1FEB5DE0DF6` |
| Hash | `0xBA5CA1FEB5DE0DF6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xBA5CA1FEB5DE0DF6(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBA5CA1FEB5DE0DF6, p0, p1, p2, p3, p4, p5)
```


---

## _0xBB6EA5D59E926095

**Description:** NPEW__ENUM__EMOTE_CATEGORY_INVALID = -1
NPEW__ENUM__EMOTE_CATEGORY_ACTIONS
NPEW__ENUM__EMOTE_CATEGORY_ANTAGONIZE
NPEW__ENUM__EMOTE_CATEGORY_REACTIONS
NPEW__ENUM__EMOTE_CATEGORY_GREET
NPEW__ENUM__NUM_EMOTE_CATEGORIES
NPEW__ENUM__NUM_DISPLAY_TEXTURES

| Property | Value |
|----------|-------|
| Native Name | `_0xBB6EA5D59E926095` |
| Hash | `0xBB6EA5D59E926095` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `category` (int), `emote` (Hash) |

### Parameters

- **`category`** (`int`)
- **`emote`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0xBB6EA5D59E926095(category, emote)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB6EA5D59E926095, category, emote)
```


---

## _SPECIAL_ABILITY_SET_ACTIVATE

**Description:** Activates the special ability for the specified player.

| Property | Value |
|----------|-------|
| Native Name | `_SPECIAL_ABILITY_SET_ACTIVATE` |
| Hash | `0xBBA140062B15A8AC` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SpecialAbilitySetActivate(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBBA140062B15A8AC, player)
```


---

## _EAGLE_EYE_SET_REGISTERED_ENTITY_GLOW

**Description:** Enable/disable a color on the entity in eagle eye mode.

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_SET_REGISTERED_ENTITY_GLOW` |
| Hash | `0xBC02B3D151D3859F` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity` (Entity), `enable` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`enable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EagleEyeSetRegisteredEntityGlow(entity, enable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC02B3D151D3859F, entity, enable)
```


---

## _0xBD96185264DDAAEA

| Property | Value |
|----------|-------|
| Native Name | `_0xBD96185264DDAAEA` |
| Hash | `0xBD96185264DDAAEA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xBD96185264DDAAEA(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBD96185264DDAAEA, p0, p1)
```


---

## _0xBEA3A6E5F5F79A6F

**Description:** _GET_PLAYER_I*

| Property | Value |
|----------|-------|
| Native Name | `_0xBEA3A6E5F5F79A6F` |
| Hash | `0xBEA3A6E5F5F79A6F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xBEA3A6E5F5F79A6F(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBEA3A6E5F5F79A6F, p0, p1)
```


---

## _0xBED386157F65942C

| Property | Value |
|----------|-------|
| Native Name | `_0xBED386157F65942C` |
| Hash | `0xBED386157F65942C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xBED386157F65942C(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBED386157F65942C, p0, p1)
```


---

## _0xBEFED69CE8317F91

| Property | Value |
|----------|-------|
| Native Name | `_0xBEFED69CE8317F91` |
| Hash | `0xBEFED69CE8317F91` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xBEFED69CE8317F91(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBEFED69CE8317F91, p0)
```


---

## _0xC177C827CEFC0AA4

| Property | Value |
|----------|-------|
| Native Name | `_0xC177C827CEFC0AA4` |
| Hash | `0xC177C827CEFC0AA4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC177C827CEFC0AA4(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC177C827CEFC0AA4, p0, p1)
```


---

## _0xC4873B053054C04B

| Property | Value |
|----------|-------|
| Native Name | `_0xC4873B053054C04B` |
| Hash | `0xC4873B053054C04B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC4873B053054C04B(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC4873B053054C04B, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## _0xC58CE6824E604DEC

| Property | Value |
|----------|-------|
| Native Name | `_0xC58CE6824E604DEC` |
| Hash | `0xC58CE6824E604DEC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC58CE6824E604DEC(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC58CE6824E604DEC, p0)
```


---

## _DISABLE_PLAYER_INTERACTIVE_FOCUS_PRESET

**Description:** Disables the previously set interactive focus mode preset for a given player. see `_SET_PLAYER_INTERACTIVE_FOCUS_PRESET - 0x3C1B1807C7A415D6`

| Property | Value |
|----------|-------|
| Native Name | `_DISABLE_PLAYER_INTERACTIVE_FOCUS_PRESET` |
| Hash | `0xC67A4910425F11F1` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `name` (char*) |

### Parameters

- **`player`** (`Player`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
DisablePlayerInteractiveFocusPreset(player, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC67A4910425F11F1, player, name)
```


---

## _0xC71D07C96946E263

| Property | Value |
|----------|-------|
| Native Name | `_0xC71D07C96946E263` |
| Hash | `0xC71D07C96946E263` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC71D07C96946E263(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC71D07C96946E263, p0, p1)
```


---

## _0xC74EB3F2EC169F6B

**Description:** Hardcoded to return zero/false.

| Property | Value |
|----------|-------|
| Native Name | `_0xC74EB3F2EC169F6B` |
| Hash | `0xC74EB3F2EC169F6B` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xC74EB3F2EC169F6B(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC74EB3F2EC169F6B, p0)
```


---

## _0xC900A465364A85D6

| Property | Value |
|----------|-------|
| Native Name | `_0xC900A465364A85D6` |
| Hash | `0xC900A465364A85D6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
_0xC900A465364A85D6(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC900A465364A85D6, player)
```


---

## _0xC93A9A45430D484E

| Property | Value |
|----------|-------|
| Native Name | `_0xC93A9A45430D484E` |
| Hash | `0xC93A9A45430D484E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xC93A9A45430D484E(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC93A9A45430D484E, p0)
```


---

## _0xCA59808E51FD67C4

| Property | Value |
|----------|-------|
| Native Name | `_0xCA59808E51FD67C4` |
| Hash | `0xCA59808E51FD67C4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xCA59808E51FD67C4(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCA59808E51FD67C4, p0, p1)
```


---

## _0xCB0B9506BC91E441

| Property | Value |
|----------|-------|
| Native Name | `_0xCB0B9506BC91E441` |
| Hash | `0xCB0B9506BC91E441` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xCB0B9506BC91E441(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCB0B9506BC91E441, p0, p1)
```


---

## _0xCB61A63AA53D7D22

| Property | Value |
|----------|-------|
| Native Name | `_0xCB61A63AA53D7D22` |
| Hash | `0xCB61A63AA53D7D22` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xCB61A63AA53D7D22(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCB61A63AA53D7D22, p0, p1)
```


---

## _SET_PLAYER_COOPERATE_PROMPT_THIS_FRAME

**Description:** Activates the Surrender prompt for the specified player in the current frame.

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_COOPERATE_PROMPT_THIS_FRAME` |
| Hash | `0xCBB54CC7FFFFAB86` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `targetPed` (Ped), `promptOrder` (int), `p3` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`targetPed`** (`Ped`)
- **`promptOrder`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerCooperatePromptThisFrame(player, targetPed, promptOrder, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCBB54CC7FFFFAB86, player, targetPed, promptOrder, p3)
```


### Examples

**Example 1 (lua):**
```lua
// Calm targetPed
Citizen.InvokeNative(0x3A2A2071DF5CC569,targetPed,PlayerPedId(),2)
//Register lockon prompt to targetPed
Citizen.InvokeNative(0x870708A6E147A9AD,targetPed,"",10.1,10.1, 0, 0.0, 0.0, 0, false, -1)

// Activate the surrender prompt for the current player towards the targetPed
while true do 
  Wait(0)
  Citizen.InvokeNative(0xCBB54CC7FFFFAB86,PlayerId(),targetPed,1, false)
  //_SET_PLAYER_SURRENDER_PROMPT_THIS_FRAME(PlayerId(), targetPed, 1, false);
end
```


---

## _0xCD7CA3013FD12749

| Property | Value |
|----------|-------|
| Native Name | `_0xCD7CA3013FD12749` |
| Hash | `0xCD7CA3013FD12749` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xCD7CA3013FD12749(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCD7CA3013FD12749, p0, p1)
```


---

## _0xCDDD4B74660E2335

| Property | Value |
|----------|-------|
| Native Name | `_0xCDDD4B74660E2335` |
| Hash | `0xCDDD4B74660E2335` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xCDDD4B74660E2335(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCDDD4B74660E2335, p0, p1, p2)
```


---

## _0xCEDC16930526F728

| Property | Value |
|----------|-------|
| Native Name | `_0xCEDC16930526F728` |
| Hash | `0xCEDC16930526F728` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xCEDC16930526F728(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCEDC16930526F728, p0)
```


---

## _0xCFB2EED4FCB7BD77

| Property | Value |
|----------|-------|
| Native Name | `_0xCFB2EED4FCB7BD77` |
| Hash | `0xCFB2EED4FCB7BD77` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xCFB2EED4FCB7BD77(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCFB2EED4FCB7BD77, p0, p1, p2)
```


---

## _SET_PLAYER_AIM_WEAPON

**Description:** Sets the weapon that the specified player will aim with. The weapon must already be assigned to the PED. This also determines the weapon order, specifying which weapon the player will automatically switch to when the current weapon runs out of ammo.

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_AIM_WEAPON` |
| Hash | `0xCFFC3ECCD7A5CCEB` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `weapon` (Hash), `attachSlotId` (int) |

### Parameters

- **`player`** (`Player`)
- **`weapon`** (`Hash`)
- **`attachSlotId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPlayerAimWeapon(player, weapon, attachSlotId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCFFC3ECCD7A5CCEB, player, weapon, attachSlotId)
```


---

## _SET_PLAYER_PICKUP_PROMPT_VISIBLE

**Description:** Shows or hides all Pick Up prompts for the specified player, including the prompt for picking up hats from the ground. When set to true, the player will see Pick Up prompts for all nearby items. If set to false, all Pick Up prompts will be hidden.

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_PICKUP_PROMPT_VISIBLE` |
| Hash | `0xD1A70C1E8D1031FE` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `enable` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`enable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerPickupPromptVisible(player, enable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD1A70C1E8D1031FE, player, enable)
```


---

## _0xD1F6B912785BFD35

| Property | Value |
|----------|-------|
| Native Name | `_0xD1F6B912785BFD35` |
| Hash | `0xD1F6B912785BFD35` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD1F6B912785BFD35(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD1F6B912785BFD35, p0)
```


---

## _0xD288E02E364972D2

| Property | Value |
|----------|-------|
| Native Name | `_0xD288E02E364972D2` |
| Hash | `0xD288E02E364972D2` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xD288E02E364972D2(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD288E02E364972D2, p0, p1, p2)
```


---

## _ADD_AMBIENT_PLAYER_INTERACTIVE_FOCUS_PRESET_AT_COORDS

**Description:** Adds an interactive focus mode preset between a player and a specific set of coordinates with a target entity.
To access all available presets, refer to the file located at:update_1.rpf.common.data.interactive_focus_mode_presets.meta


| Property | Value |
|----------|-------|
| Native Name | `_ADD_AMBIENT_PLAYER_INTERACTIVE_FOCUS_PRESET_AT_COORDS` |
| Hash | `0xD48227263E3D06AE` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1232` |
| Parameters | `player` (Player), `p1` (Vector3*), `preset` (char*), `x` (float), `y` (float), `z` (float), `targetEntity` (Entity), `name` (char*) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`Vector3*`)
- **`preset`** (`char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`targetEntity`** (`Entity`)
- **`name`** (`char*`)

### Usage

**Lua (Direct):**
```lua
AddAmbientPlayerInteractiveFocusPresetAtCoords(player, p1, preset, x, y, z, targetEntity, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD48227263E3D06AE, player, p1, preset, x, y, z, targetEntity, name)
```


### Examples

**Example 1 (lua):**
```lua
AddPlayerInteractiveFocusPresetAtCoords(PlayerId(),GetEntityCoords(PlayerPedId()),'ForcedILONoIcon',0.0,0.0,0.0,PlayerPedId(),'text')
```


---

## _0xDA9D7BE231FE865F

| Property | Value |
|----------|-------|
| Native Name | `_0xDA9D7BE231FE865F` |
| Hash | `0xDA9D7BE231FE865F` |
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
local result = _0xDA9D7BE231FE865F(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDA9D7BE231FE865F, p0, p1, p2)
```


---

## _0xDAB6A2FC56B7DE65

| Property | Value |
|----------|-------|
| Native Name | `_0xDAB6A2FC56B7DE65` |
| Hash | `0xDAB6A2FC56B7DE65` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xDAB6A2FC56B7DE65(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDAB6A2FC56B7DE65, p0)
```


---

## _EAGLE_EYE_REMOVE_PARTICLE_EFFECT_FROM_ENTITY

**Description:** Remove yellow particle from the entity when it was set using `0x6ECFC621A168424C` 
entity: entity to remove yellow particles
entity2: same entity as entity
p2: always 0

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_REMOVE_PARTICLE_EFFECT_FROM_ENTITY` |
| Hash | `0xDC5E09D012D759C4` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entity1` (Entity), `entity2` (Entity), `p2` (int) |

### Parameters

- **`entity1`** (`Entity`)
- **`entity2`** (`Entity`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
EagleEyeRemoveParticleEffectFromEntity(entity1, entity2, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDC5E09D012D759C4, entity1, entity2, p2)
```


---

## _0xDD33A82352C4652F

| Property | Value |
|----------|-------|
| Native Name | `_0xDD33A82352C4652F` |
| Hash | `0xDD33A82352C4652F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped), `p2` (int) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xDD33A82352C4652F(player, ped, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDD33A82352C4652F, player, ped, p2)
```


---

## _IS_SPECIAL_ABILITY_ENABLED

**Description:** Checks if the player's Deadeye ability is enabled.

| Property | Value |
|----------|-------|
| Native Name | `_IS_SPECIAL_ABILITY_ENABLED` |
| Hash | `0xDE6C85975F9D4894` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsSpecialAbilityEnabled(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDE6C85975F9D4894, player)
```


---

*End of PLAYER natives part 5*
