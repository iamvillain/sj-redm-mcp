# UITUTORIAL Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** UITUTORIAL  
**Natives in this file:** 3  
**Generated from:** RDR3natives JSON data

---

## _UITUTORIAL_GET_IS_THREAT_INDICATOR_CAPABLE_RADAR_SHOWN

| Property | Value |
|----------|-------|
| Native Name | `_UITUTORIAL_GET_IS_THREAT_INDICATOR_CAPABLE_RADAR_SHOWN` |
| Hash | `0x2CC24A2A7A1489C4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = UitutorialGetIsThreatIndicatorCapableRadarShown()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2CC24A2A7A1489C4, )
```


---

## _UITUTORIAL_GET_IS_THREAT_INDICATOR_ON

| Property | Value |
|----------|-------|
| Native Name | `_UITUTORIAL_GET_IS_THREAT_INDICATOR_ON` |
| Hash | `0xFC2E0A5E9ED4E1B4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = UitutorialGetIsThreatIndicatorOn()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFC2E0A5E9ED4E1B4, )
```


---

## _UITUTORIAL_SET_RPG_ICON_VISIBILITY

**Description:** enum eRpgIcons
{
	ICON_STAMINA,
	ICON_STAMINA_CORE,
	ICON_DEADEYE,
	ICON_DEADEYE_CORE,
	ICON_HEALTH,
	ICON_HEALTH_CORE,
	ICON_HORSE_HEALTH,
	ICON_HORSE_HEALTH_CORE,
	ICON_HORSE_STAMINA,
	ICON_HORSE_STAMINA_CORE,
	ICON_HORSE_COURAGE,
	ICON_HORSE_COURAGE_CORE
};

enum eRpgIconVisibility
{
	ICON_VISIBILITY_WAIT_TO_HIDE,
	ICON_VISIBILITY_ALWAYS_SHOW,
	ICON_VISIBILITY_ALWAYS_HIDE,
	ICON_VISIBILITY_ALWAYS_BLINK
};

| Property | Value |
|----------|-------|
| Native Name | `_UITUTORIAL_SET_RPG_ICON_VISIBILITY` |
| Hash | `0xC116E6DF68DCE667` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `rpgIcon` (int), `visibility` (int) |

### Parameters

- **`rpgIcon`** (`int`)
- **`visibility`** (`int`)

### Usage

**Lua (Direct):**
```lua
UitutorialSetRpgIconVisibility(rpgIcon, visibility)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC116E6DF68DCE667, rpgIcon, visibility)
```


---

*End of UITUTORIAL natives*
