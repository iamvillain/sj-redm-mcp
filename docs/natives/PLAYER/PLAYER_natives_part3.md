# PLAYER Natives - Part 3 of 8

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PLAYER  
**Natives in this file:** 50  
**Total natives in namespace:** 395  
**Generated from:** RDR3natives JSON data

---

## SET_WANTED_LEVEL_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `SET_WANTED_LEVEL_MULTIPLIER` |
| Hash | `0xD7FA719CB54866C2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetWantedLevelMultiplier(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD7FA719CB54866C2, multiplier)
```


---

## SIMULATE_PLAYER_INPUT_GAIT

| Property | Value |
|----------|-------|
| Native Name | `SIMULATE_PLAYER_INPUT_GAIT` |
| Hash | `0xFA0C063C422C4355` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `speed` (float), `duration` (int), `heading` (float), `p4` (BOOL), `p5` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`speed`** (`float`)
- **`duration`** (`int`)
- **`heading`** (`float`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SimulatePlayerInputGait(player, speed, duration, heading, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA0C063C422C4355, player, speed, duration, heading, p4, p5)
```


---

## START_PLAYER_TELEPORT

| Property | Value |
|----------|-------|
| Native Name | `START_PLAYER_TELEPORT` |
| Hash | `0xDF8822C55EDDA65B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `x` (float), `y` (float), `z` (float), `heading` (float), `p5` (BOOL), `p6` (BOOL), `p7` (BOOL), `p8` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StartPlayerTeleport(player, x, y, z, heading, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF8822C55EDDA65B, player, x, y, z, heading, p5, p6, p7, p8)
```


---

## STOP_PLAYER_TELEPORT

**Description:** Disables the player's teleportation

| Property | Value |
|----------|-------|
| Native Name | `STOP_PLAYER_TELEPORT` |
| Hash | `0x0858B86146601BE8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
StopPlayerTeleport()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0858B86146601BE8, )
```


---

## SUPPRESS_WITNESSES_CALLING_POLICE_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SUPPRESS_WITNESSES_CALLING_POLICE_THIS_FRAME` |
| Hash | `0x96722257E5381E00` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SuppressWitnessesCallingPoliceThisFrame(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x96722257E5381E00, player)
```


---

## UPDATE_PLAYER_TELEPORT

| Property | Value |
|----------|-------|
| Native Name | `UPDATE_PLAYER_TELEPORT` |
| Hash | `0xC39DCE4672CBFBC1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = UpdatePlayerTeleport(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC39DCE4672CBFBC1, player)
```


---

## UPDATE_WANTED_POSITION_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `UPDATE_WANTED_POSITION_THIS_FRAME` |
| Hash | `0xD0B0B044112BF424` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
UpdateWantedPositionThisFrame(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD0B0B044112BF424, player)
```


---

## _0x00B156AFEBCC5AE0

| Property | Value |
|----------|-------|
| Native Name | `_0x00B156AFEBCC5AE0` |
| Hash | `0x00B156AFEBCC5AE0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x00B156AFEBCC5AE0(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x00B156AFEBCC5AE0, p0)
```


---

## _SET_PLAYER_WEAPON_DRAW_SPEED

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_WEAPON_DRAW_SPEED` |
| Hash | `0x00EB5A760638DB55` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `weapon` (Hash), `speed` (float) |

### Parameters

- **`player`** (`Player`)
- **`weapon`** (`Hash`)
- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPlayerWeaponDrawSpeed(player, weapon, speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x00EB5A760638DB55, player, weapon, speed)
```


---

## _0x03B4B759A8990505

| Property | Value |
|----------|-------|
| Native Name | `_0x03B4B759A8990505` |
| Hash | `0x03B4B759A8990505` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x03B4B759A8990505(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x03B4B759A8990505, p0)
```


---

## _SET_PLAYER_PROMPT_LEAVE_TEXT

**Description:** Sets the stand prompt for a specific player using a predefined text entry. use AddTextEntry for promptTextKey for custom names

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_PROMPT_LEAVE_TEXT` |
| Hash | `0x06C3DB00B69D5435` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1232` |
| Parameters | `player` (Player), `promptTextKey` (char*) |

### Parameters

- **`player`** (`Player`)
- **`promptTextKey`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPlayerPromptLeaveText(player, promptTextKey)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06C3DB00B69D5435, player, promptTextKey)
```


---

## _0x06E1FB78B1E59CA5

| Property | Value |
|----------|-------|
| Native Name | `_0x06E1FB78B1E59CA5` |
| Hash | `0x06E1FB78B1E59CA5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x06E1FB78B1E59CA5(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06E1FB78B1E59CA5, ped, p1)
```


---

## _0x086549F3B0381CB1

| Property | Value |
|----------|-------|
| Native Name | `_0x086549F3B0381CB1` |
| Hash | `0x086549F3B0381CB1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x086549F3B0381CB1(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x086549F3B0381CB1, p0, p1)
```


---

## _0x0869D499A7848309

| Property | Value |
|----------|-------|
| Native Name | `_0x0869D499A7848309` |
| Hash | `0x0869D499A7848309` |
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
_0x0869D499A7848309(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0869D499A7848309, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## _0x08E22898A6AF4905

**Description:** _SET_PLAYER_*? some multiplier or modifier for health or statmina ?

| Property | Value |
|----------|-------|
| Native Name | `_0x08E22898A6AF4905` |
| Hash | `0x08E22898A6AF4905` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (float) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x08E22898A6AF4905(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x08E22898A6AF4905, player, p1)
```


---

## _0x0B7803F6F7BB43E0

**Description:** Hardcoded to return zero/false.

| Property | Value |
|----------|-------|
| Native Name | `_0x0B7803F6F7BB43E0` |
| Hash | `0x0B7803F6F7BB43E0` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x0B7803F6F7BB43E0()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0B7803F6F7BB43E0, )
```


---

## _CLEAR_DEADEYE_AURA_INTENSITY_WITH_FLAG

**Description:** Clears the intensity of aura effects applied to entities for a specific player in Deadeye mode based on a flag parameter. This function is used to reset any intensity modifications set by `_SET_DEADEYE_ENTITY_AURA_INTENSITY_WITH_FLAG - 0x131E294EF60160DF`, restoring affected entities' aura intensity to their default state.

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_DEADEYE_AURA_INTENSITY_WITH_FLAG` |
| Hash | `0x0E9057A9DA78D0F8` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `bitflag` (int) |

### Parameters

- **`player`** (`Player`)
- **`bitflag`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearDeadeyeAuraIntensityWithFlag(player, bitflag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0E9057A9DA78D0F8, player, bitflag)
```


---

## _0x0F4EAF69DA41AF43

| Property | Value |
|----------|-------|
| Native Name | `_0x0F4EAF69DA41AF43` |
| Hash | `0x0F4EAF69DA41AF43` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0F4EAF69DA41AF43(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0F4EAF69DA41AF43, p0)
```


---

## _0x0F9CF06986300875

| Property | Value |
|----------|-------|
| Native Name | `_0x0F9CF06986300875` |
| Hash | `0x0F9CF06986300875` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0F9CF06986300875(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0F9CF06986300875, p0)
```


---

## _SET_PLAYER_MELEE_PROMPT_TEXT

**Description:** Sets the melee combat prompt for a specific player using a predefined text entry. use game string or 
AddTextEntry("custom_text", "Throw a punch") and use custom_text in the native

| Property | Value |
|----------|-------|
| Native Name | `_SET_PLAYER_MELEE_PROMPT_TEXT` |
| Hash | `0x0FAF95D71ED67ADE` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `label` (char*) |

### Parameters

- **`player`** (`Player`)
- **`label`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPlayerMeleePromptText(player, label)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0FAF95D71ED67ADE, player, label)
```


---

## _0x107F2A66E1C4C83A

| Property | Value |
|----------|-------|
| Native Name | `_0x107F2A66E1C4C83A` |
| Hash | `0x107F2A66E1C4C83A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x107F2A66E1C4C83A(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x107F2A66E1C4C83A, p0)
```


---

## _0x113EF458AB6CDA67

| Property | Value |
|----------|-------|
| Native Name | `_0x113EF458AB6CDA67` |
| Hash | `0x113EF458AB6CDA67` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x113EF458AB6CDA67(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x113EF458AB6CDA67, p0, p1)
```


---

## _0x12E09E278C6C29B7

| Property | Value |
|----------|-------|
| Native Name | `_0x12E09E278C6C29B7` |
| Hash | `0x12E09E278C6C29B7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x12E09E278C6C29B7(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x12E09E278C6C29B7, p0)
```


---

## _SET_DEADEYE_ENTITY_AURA_INTENSITY_WITH_FLAG

**Description:** Applies a customizable aura effect to nearby entities when Deadeye is active, with control over aura intensity and additional behavior based on a flag parameter.
- flag (int): A flag that determines the behavior of the aura effect and which entities are affected. 2: Applies aura to humans. 4: Applies aura to animals.

| Property | Value |
|----------|-------|
| Native Name | `_SET_DEADEYE_ENTITY_AURA_INTENSITY_WITH_FLAG` |
| Hash | `0x131E294EF60160DF` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (float), `p2` (float), `p3` (float), `intensity` (float), `flag` (int) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`intensity`** (`float`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetDeadeyeEntityAuraIntensityWithFlag(player, p1, p2, p3, intensity, flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x131E294EF60160DF, player, p1, p2, p3, intensity, flag)
```


---

## _0x14E57F88BA0A07FC

| Property | Value |
|----------|-------|
| Native Name | `_0x14E57F88BA0A07FC` |
| Hash | `0x14E57F88BA0A07FC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `location` (Hash) |

### Parameters

- **`location`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x14E57F88BA0A07FC(location)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x14E57F88BA0A07FC, location)
```


---

## _0x19B2C7A6C34FAD54

| Property | Value |
|----------|-------|
| Native Name | `_0x19B2C7A6C34FAD54` |
| Hash | `0x19B2C7A6C34FAD54` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x19B2C7A6C34FAD54(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x19B2C7A6C34FAD54, p0, p1)
```


---

## _GET_PEDS_DAMAGED_BY_PLAYER_RECENTLY

**Description:** it is used to check for that period of time if player damaged any peds only returns the last 3 hits with the entity ids so if you hit the same entity 3 times it will return the same entity id 3 times, if you hit 4 different entities within that time it will return the last 3 entity ids
 only stores the last 3 hits in the data view buffer
duration is in miliseconds
you need dataview

| Property | Value |
|----------|-------|
| Native Name | `_GET_PEDS_DAMAGED_BY_PLAYER_RECENTLY` |
| Hash | `0x1A6E84F13C952094` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `duration` (int), `struct` (Any*) |

### Parameters

- **`player`** (`Player`)
- **`duration`** (`int`)
- **`struct`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedsDamagedByPlayerRecently(player, duration, struct)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1A6E84F13C952094, player, duration, struct)
```


### Examples

**Example 1 (lua):**
```lua
Citizen.InvokeNative(0x1A6E84F13C952094, PlayerId(), 10000, dataView:Buffer())
local entity = dataView:GetInt32(8 * 1)
local entity2 = dataView:GetInt32(8 * 2)
local entity3 = dataView:GetInt32(8 * 3)
print(entity, entity2, entity3)
```


---

## _0x1AD8AD999C27F44A

| Property | Value |
|----------|-------|
| Native Name | `_0x1AD8AD999C27F44A` |
| Hash | `0x1AD8AD999C27F44A` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1AD8AD999C27F44A(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1AD8AD999C27F44A, p0)
```


---

## _0x1D256EED194F5B58

| Property | Value |
|----------|-------|
| Native Name | `_0x1D256EED194F5B58` |
| Hash | `0x1D256EED194F5B58` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x1D256EED194F5B58(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1D256EED194F5B58, p0)
```


---

## _EAGLE_EYE_CAN_PLAYER_FOCUS_ON_TRACK

**Description:** Checks if the player can focus on tracks while in Eagle Eye mode. Returns true if the player is able to focus on a track, otherwise false.

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_CAN_PLAYER_FOCUS_ON_TRACK` |
| Hash | `0x1DA5C5B0923E1B85` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = EagleEyeCanPlayerFocusOnTrack(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1DA5C5B0923E1B85, player)
```


---

## _0x1E8099F449ABB0BA

| Property | Value |
|----------|-------|
| Native Name | `_0x1E8099F449ABB0BA` |
| Hash | `0x1E8099F449ABB0BA` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1E8099F449ABB0BA(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1E8099F449ABB0BA, p0)
```


---

## _0x1F488807BC8E0630

**Description:** _RESET_PLAYER_A* - _RESET_PLAYER_I*

| Property | Value |
|----------|-------|
| Native Name | `_0x1F488807BC8E0630` |
| Hash | `0x1F488807BC8E0630` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
_0x1F488807BC8E0630(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1F488807BC8E0630, player)
```


---

## _0x1FDA57E8908F2609

| Property | Value |
|----------|-------|
| Native Name | `_0x1FDA57E8908F2609` |
| Hash | `0x1FDA57E8908F2609` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped), `useSteerassist` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)
- **`useSteerassist`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x1FDA57E8908F2609(player, ped, useSteerassist)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1FDA57E8908F2609, player, ped, useSteerassist)
```


---

## _IS_PLAYER_ON_MOUNT_LOCKON_ENTITY

**Description:** This native is used to determine if the player has an active lockon an entity while riding a horse.

| Property | Value |
|----------|-------|
| Native Name | `_IS_PLAYER_ON_MOUNT_LOCKON_ENTITY` |
| Hash | `0x2009F8AB7A5E9D6D` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = IsPlayerOnMountLockonEntity(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2009F8AB7A5E9D6D, player)
```


---

## _0x21091B4BEB6376EE

| Property | Value |
|----------|-------|
| Native Name | `_0x21091B4BEB6376EE` |
| Hash | `0x21091B4BEB6376EE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x21091B4BEB6376EE(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x21091B4BEB6376EE, p0)
```


---

## _0x216BC0D3D2E413D2

| Property | Value |
|----------|-------|
| Native Name | `_0x216BC0D3D2E413D2` |
| Hash | `0x216BC0D3D2E413D2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (Any) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x216BC0D3D2E413D2(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x216BC0D3D2E413D2, player, p1)
```


---

## _0x22B3CABEDDB538B2

| Property | Value |
|----------|-------|
| Native Name | `_0x22B3CABEDDB538B2` |
| Hash | `0x22B3CABEDDB538B2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (float) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x22B3CABEDDB538B2(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x22B3CABEDDB538B2, player, p1)
```


---

## _EAGLE_EYE_SET_RANGE

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_SET_RANGE` |
| Hash | `0x22C8B10802301381` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `range` (float) |

### Parameters

- **`player`** (`Player`)
- **`range`** (`float`)

### Usage

**Lua (Direct):**
```lua
EagleEyeSetRange(player, range)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x22C8B10802301381, player, range)
```


---

## _0x263D69767F76059C

| Property | Value |
|----------|-------|
| Native Name | `_0x263D69767F76059C` |
| Hash | `0x263D69767F76059C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (int) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x263D69767F76059C(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x263D69767F76059C, player, p1)
```


---

## _GET_NUM_DEADEYE_MARKS_ON_PED

**Description:** Retrieves the number of marks placed on a PED when Deadeye mode is active for the specified player. 

| Property | Value |
|----------|-------|
| Native Name | `_GET_NUM_DEADEYE_MARKS_ON_PED` |
| Hash | `0x27AD7162D3FED01E` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `ped` (Ped) |

### Parameters

- **`player`** (`Player`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumDeadeyeMarksOnPed(player, ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x27AD7162D3FED01E, player, ped)
```


---

## _SET_DEADEYE_ENTITY_AURA_WITH_FLAG

**Description:** Applies a aura effect to nearby entities when Deadeye is active, based on a flag parameter. This includes humans, animals, vehicles, and horses pulling those vehicles. Additionally, depending on the flag value, the player's appearance may change (e.g., turning gray).
- flag (int): A flag that determines the behavior of the aura effect. 2 means people 4 means animal etc.

| Property | Value |
|----------|-------|
| Native Name | `_SET_DEADEYE_ENTITY_AURA_WITH_FLAG` |
| Hash | `0x2B12B6FC8B8772AB` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `flag` (int) |

### Parameters

- **`player`** (`Player`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetDeadeyeEntityAuraWithFlag(player, flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2B12B6FC8B8772AB, player, flag)
```


---

## _0x2BB8D58E88777499

| Property | Value |
|----------|-------|
| Native Name | `_0x2BB8D58E88777499` |
| Hash | `0x2BB8D58E88777499` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2BB8D58E88777499(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2BB8D58E88777499, p0)
```


---

## _0x2BEED53B912537D0

| Property | Value |
|----------|-------|
| Native Name | `_0x2BEED53B912537D0` |
| Hash | `0x2BEED53B912537D0` |
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
_0x2BEED53B912537D0(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2BEED53B912537D0, p0, p1, p2)
```


---

## _0x2C2D287748E8E9B7

| Property | Value |
|----------|-------|
| Native Name | `_0x2C2D287748E8E9B7` |
| Hash | `0x2C2D287748E8E9B7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x2C2D287748E8E9B7(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2C2D287748E8E9B7, p0)
```


---

## _0x2E1ABE627C95ED9B

| Property | Value |
|----------|-------|
| Native Name | `_0x2E1ABE627C95ED9B` |
| Hash | `0x2E1ABE627C95ED9B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x2E1ABE627C95ED9B()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E1ABE627C95ED9B, )
```


---

## _0x2E67707BEC52CA4B

| Property | Value |
|----------|-------|
| Native Name | `_0x2E67707BEC52CA4B` |
| Hash | `0x2E67707BEC52CA4B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x2E67707BEC52CA4B(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E67707BEC52CA4B, p0)
```


---

## _0x310CE349E0C0EC4B

| Property | Value |
|----------|-------|
| Native Name | `_0x310CE349E0C0EC4B` |
| Hash | `0x310CE349E0C0EC4B` |
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
_0x310CE349E0C0EC4B(player, ped, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x310CE349E0C0EC4B, player, ped, p2)
```


---

## _0x325434C68358D282

**Description:** Only used in script function UPDATE_PLAYER_JUST_DIED_STATE

| Property | Value |
|----------|-------|
| Native Name | `_0x325434C68358D282` |
| Hash | `0x325434C68358D282` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x325434C68358D282(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x325434C68358D282, toggle)
```


---

## _EAGLE_EYE_SET_HIDE_ALL_TRAILS

**Description:** Sets whether all trails are hidden during Eagle Eye mode.

| Property | Value |
|----------|-------|
| Native Name | `_EAGLE_EYE_SET_HIDE_ALL_TRAILS` |
| Hash | `0x330CA55A3647FA1C` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `player` (Player), `hide` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`hide`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EagleEyeSetHideAllTrails(player, hide)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x330CA55A3647FA1C, player, hide)
```


---

## _0x35A33783EC3C3448

| Property | Value |
|----------|-------|
| Native Name | `_0x35A33783EC3C3448` |
| Hash | `0x35A33783EC3C3448` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x35A33783EC3C3448(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x35A33783EC3C3448, p0)
```


---

*End of PLAYER natives part 3*
