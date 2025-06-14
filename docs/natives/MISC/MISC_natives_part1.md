# MISC Natives - Part 1 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** MISC  
**Natives in this file:** 50  
**Total natives in namespace:** 288  
**Generated from:** RDR3natives JSON data

---

## ABSF

| Property | Value |
|----------|-------|
| Native Name | `ABSF` |
| Hash | `0x134549B388167CBF` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `value` (float) |

### Parameters

- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Absf(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x134549B388167CBF, value)
```


---

## ABSI

| Property | Value |
|----------|-------|
| Native Name | `ABSI` |
| Hash | `0x0C214D5B8A38C828` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `value` (int) |

### Parameters

- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = Absi(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C214D5B8A38C828, value)
```


---

## ACOS

| Property | Value |
|----------|-------|
| Native Name | `ACOS` |
| Hash | `0x586690F0176DC575` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Acos(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x586690F0176DC575, p0)
```


---

## ACTION_MANAGER_ENABLE_ACTION

**Description:** Appears to remove stealth kill action from memory (?)

| Property | Value |
|----------|-------|
| Native Name | `ACTION_MANAGER_ENABLE_ACTION` |
| Hash | `0x7ACF124C12A2B045` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hash` (Hash), `enable` (BOOL) |

### Parameters

- **`hash`** (`Hash`)
- **`enable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ActionManagerEnableAction(hash, enable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7ACF124C12A2B045, hash, enable)
```


---

## ACTION_MANAGER_IS_ACTION_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `ACTION_MANAGER_IS_ACTION_ENABLED` |
| Hash | `0xFD0759658268FD8E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hash` (Hash) |

### Parameters

- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ActionManagerIsActionEnabled(hash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFD0759658268FD8E, hash)
```


---

## ACTIVITY_FEED_ACTION_START_WITH_COMMAND_LINE

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `ACTIVITY_FEED_ACTION_START_WITH_COMMAND_LINE` |
| Hash | `0x91D657230BC208D2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (const char*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ActivityFeedActionStartWithCommandLine(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x91D657230BC208D2, p0, p1)
```


---

## ACTIVITY_FEED_ACTION_START_WITH_COMMAND_LINE_ADD

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `ACTIVITY_FEED_ACTION_START_WITH_COMMAND_LINE_ADD` |
| Hash | `0x1694A053DFB61A34` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ActivityFeedActionStartWithCommandLineAdd(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1694A053DFB61A34, p0)
```


---

## ACTIVITY_FEED_ADD_SUBSTRING_TO_CAPTION

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `ACTIVITY_FEED_ADD_SUBSTRING_TO_CAPTION` |
| Hash | `0x9935F76407C32539` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ActivityFeedAddSubstringToCaption(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9935F76407C32539, p0)
```


---

## ACTIVITY_FEED_CREATE

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `ACTIVITY_FEED_CREATE` |
| Hash | `0xCC7FC854B956A128` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (char*), `p1` (char*) |

### Parameters

- **`p0`** (`char*`)
- **`p1`** (`char*`)

### Usage

**Lua (Direct):**
```lua
ActivityFeedCreate(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCC7FC854B956A128, p0, p1)
```


---

## ACTIVITY_FEED_POST

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `ACTIVITY_FEED_POST` |
| Hash | `0xB16FC7B364D86585` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ActivityFeedPost()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB16FC7B364D86585, )
```


---

## ADD_POP_MULTIPLIER_AREA

| Property | Value |
|----------|-------|
| Native Name | `ADD_POP_MULTIPLIER_AREA` |
| Hash | `0x5EBDA1A3B8CB5EF7` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `pedDensity` (float), `trafficDensity` (float), `p8` (BOOL), `p9` (BOOL) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`pedDensity`** (`float`)
- **`trafficDensity`** (`float`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = AddPopMultiplierArea(x1, y1, z1, x2, y2, z2, pedDensity, trafficDensity, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5EBDA1A3B8CB5EF7, x1, y1, z1, x2, y2, z2, pedDensity, trafficDensity, p8, p9)
```


---

## ADD_TACTICAL_NAV_MESH_POINT

**Description:** Params: p3 is 0 in R* Script utopia2

| Property | Value |
|----------|-------|
| Native Name | `ADD_TACTICAL_NAV_MESH_POINT` |
| Hash | `0xE4EE55E63FA9AF45` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddTacticalNavMeshPoint(x, y, z, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE4EE55E63FA9AF45, x, y, z, p3)
```


---

## ARE_STRINGS_EQUAL

| Property | Value |
|----------|-------|
| Native Name | `ARE_STRINGS_EQUAL` |
| Hash | `0xD3852F22AB713A1F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `string1` (char*), `string2` (char*) |

### Parameters

- **`string1`** (`char*`)
- **`string2`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = AreStringsEqual(string1, string2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD3852F22AB713A1F, string1, string2)
```


---

## ASIN

| Property | Value |
|----------|-------|
| Native Name | `ASIN` |
| Hash | `0x6E3C15D296C15583` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Asin(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6E3C15D296C15583, p0)
```


---

## ATAN

| Property | Value |
|----------|-------|
| Native Name | `ATAN` |
| Hash | `0x503054DED0B78027` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Atan(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x503054DED0B78027, p0)
```


---

## ATAN2

| Property | Value |
|----------|-------|
| Native Name | `ATAN2` |
| Hash | `0x965B220A066E3F07` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Atan2(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x965B220A066E3F07, p0, p1)
```


---

## BLOCK_DISPATCH_SERVICE_RESOURCE_CREATION

**Description:** dispatchService: see ENABLE_DISPATCH_SERVICE

| Property | Value |
|----------|-------|
| Native Name | `BLOCK_DISPATCH_SERVICE_RESOURCE_CREATION` |
| Hash | `0x66947E61A44DE2C6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `dispatchService` (int), `toggle` (BOOL) |

### Parameters

- **`dispatchService`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
BlockDispatchServiceResourceCreation(dispatchService, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66947E61A44DE2C6, dispatchService, toggle)
```


---

## CANCEL_ONSCREEN_KEYBOARD

**Description:** Old name: _CANCEL_ONSCREEN_KEYBOARD

| Property | Value |
|----------|-------|
| Native Name | `CANCEL_ONSCREEN_KEYBOARD` |
| Hash | `0x58A39BE597CE99CD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
CancelOnscreenKeyboard()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x58A39BE597CE99CD, )
```


---

## CLEAR_ANGLED_AREA_OF_VEHICLES

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_ANGLED_AREA_OF_VEHICLES` |
| Hash | `0xA4D83115C1E02F8A` |
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
ClearAngledAreaOfVehicles(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA4D83115C1E02F8A, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## CLEAR_AREA

**Description:** Possible flag names:
ALL_BASE = 0,
PROJECTILES = 1,
BROADCAST = 524288,
AMBIENT_POPULATION = 1048576

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_AREA` |
| Hash | `0x3B882A96EA77D5B1` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `flag` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearArea(x, y, z, radius, flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3B882A96EA77D5B1, x, y, z, radius, flag)
```


---

## CLEAR_BIT

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_BIT` |
| Hash | `0x7D1D4A3602B6AD4E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `address` (int*), `offset` (int) |

### Parameters

- **`address`** (`int*`)
- **`offset`** (`int`)

### Usage

**Lua (Direct):**
```lua
ClearBit(address, offset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7D1D4A3602B6AD4E, address, offset)
```


---

## CLEAR_OVERRIDE_WEATHER

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_OVERRIDE_WEATHER` |
| Hash | `0x80A398F16FFE3CC3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearOverrideWeather()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x80A398F16FFE3CC3, )
```


---

## CLEAR_TACTICAL_NAV_MESH_POINTS

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_TACTICAL_NAV_MESH_POINTS` |
| Hash | `0xD93B6516C6878267` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearTacticalNavMeshPoints()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD93B6516C6878267, )
```


---

## CLEAR_WEATHER_TYPE_PERSIST

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_WEATHER_TYPE_PERSIST` |
| Hash | `0xD85DFE5C131E4AE9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearWeatherTypePersist()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD85DFE5C131E4AE9, )
```


---

## COMPARE_STRINGS

| Property | Value |
|----------|-------|
| Native Name | `COMPARE_STRINGS` |
| Hash | `0xBFBB74A15EFC149B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `str1` (char*), `str2` (char*), `matchCase` (BOOL), `maxLength` (int) |

### Parameters

- **`str1`** (`char*`)
- **`str2`** (`char*`)
- **`matchCase`** (`BOOL`)
- **`maxLength`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CompareStrings(str1, str2, matchCase, maxLength)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBFBB74A15EFC149B, str1, str2, matchCase, maxLength)
```


---

## COPY_SCRIPT_STRUCT

**Description:** Old name: _COPY_MEMORY

| Property | Value |
|----------|-------|
| Native Name | `COPY_SCRIPT_STRUCT` |
| Hash | `0xF7AC7DC0DEE7C9BE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `dst` (Any*), `src` (Any*), `size` (int) |

### Parameters

- **`dst`** (`Any*`)
- **`src`** (`Any*`)
- **`size`** (`int`)

### Usage

**Lua (Direct):**
```lua
CopyScriptStruct(dst, src, size)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF7AC7DC0DEE7C9BE, dst, src, size)
```


---

## CREATE_INCIDENT

**Description:** dispatchService: see ENABLE_DISPATCH_SERVICE

| Property | Value |
|----------|-------|
| Native Name | `CREATE_INCIDENT` |
| Hash | `0x3F892CAF67444AE7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `dispatchService` (int), `x` (float), `y` (float), `z` (float), `numUnits` (int), `radius` (float), `outIncidentID` (int*), `p7` (Any), `p8` (Any) |

### Parameters

- **`dispatchService`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`numUnits`** (`int`)
- **`radius`** (`float`)
- **`outIncidentID`** (`int*`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = CreateIncident(dispatchService, x, y, z, numUnits, radius, outIncidentID, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3F892CAF67444AE7, dispatchService, x, y, z, numUnits, radius, outIncidentID, p7, p8)
```


---

## DELETE_INCIDENT

**Description:** Delete an incident with a given id.

| Property | Value |
|----------|-------|
| Native Name | `DELETE_INCIDENT` |
| Hash | `0x5CFD0F0D6AAE0AEE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `incidentId` (int) |

### Parameters

- **`incidentId`** (`int`)

### Usage

**Lua (Direct):**
```lua
DeleteIncident(incidentId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5CFD0F0D6AAE0AEE, incidentId)
```


---

## DISABLE_LOOTING_COMPOSITE_LOOTABLE_THIS_FRAME

**Description:** disables prompt eat 

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_LOOTING_COMPOSITE_LOOTABLE_THIS_FRAME` |
| Hash | `0x40D72189F46D2E15` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `compositeId` (int), `disable` (BOOL) |

### Parameters

- **`compositeId`** (`int`)
- **`disable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DisableLootingCompositeLootableThisFrame(compositeId, disable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x40D72189F46D2E15, compositeId, disable)
```


---

## DISPLAY_ONSCREEN_KEYBOARD

**Description:** enum eOnscreenKeyboardTextType
{
	KTEXTTYPE_INVALID = -1,
	KTEXTTYPE_DEFAULT,
	KTEXTTYPE_EMAIL,
	KTEXTTYPE_PASSWORD,
	KTEXTTYPE_NUMERIC,
	KTEXTTYPE_ALPHABET,
	KTEXTTYPE_GAMERTAG,
	KTEXTTYPE_FILENAME,
	KTEXTTYPE_COUNT
};

| Property | Value |
|----------|-------|
| Native Name | `DISPLAY_ONSCREEN_KEYBOARD` |
| Hash | `0x044131118D8DB3CD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textType` (int), `windowTitle` (char*), `p2` (char*), `defaultText` (char*), `defaultConcat1` (char*), `defaultConcat2` (char*), `defaultConcat3` (char*), `maxInputLength` (int) |

### Parameters

- **`textType`** (`int`)
- **`windowTitle`** (`char*`)
- **`p2`** (`char*`)
- **`defaultText`** (`char*`)
- **`defaultConcat1`** (`char*`)
- **`defaultConcat2`** (`char*`)
- **`defaultConcat3`** (`char*`)
- **`maxInputLength`** (`int`)

### Usage

**Lua (Direct):**
```lua
DisplayOnscreenKeyboard(textType, windowTitle, p2, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, maxInputLength)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x044131118D8DB3CD, textType, windowTitle, p2, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, maxInputLength)
```


---

## DOES_POP_MULTIPLIER_AREA_EXIST

| Property | Value |
|----------|-------|
| Native Name | `DOES_POP_MULTIPLIER_AREA_EXIST` |
| Hash | `0x03BA619C81A646B3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `id` (int) |

### Parameters

- **`id`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesPopMultiplierAreaExist(id)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x03BA619C81A646B3, id)
```


---

## ENABLE_DISPATCH_SERVICE

**Description:** enum DispatchType
{
	DT_Invalid,
	DT_PoliceAutomobile,
	DT_PoliceHelicopter,
	DT_FireDepartment,
	DT_SwatAutomobile,
	DT_AmbulanceDepartment,
	DT_PoliceRiders,
	DT_PoliceVehicleRequest,
	DT_PoliceRoadBlock,
	DT_PoliceAutomobileWaitPulledOver,
	DT_PoliceAutomobileWaitCruising,
	DT_Gangs,
	DT_SwatHelicopter,
	DT_PoliceBoat,
	DT_ArmyVehicle,
	DT_OnFoot,
	DT_PoliceDogs
};

| Property | Value |
|----------|-------|
| Native Name | `ENABLE_DISPATCH_SERVICE` |
| Hash | `0x50E52637EF70EF77` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `dispatchService` (int), `toggle` (BOOL) |

### Parameters

- **`dispatchService`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
EnableDispatchService(dispatchService, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x50E52637EF70EF77, dispatchService, toggle)
```


---

## FIRE_SINGLE_BULLET

| Property | Value |
|----------|-------|
| Native Name | `FIRE_SINGLE_BULLET` |
| Hash | `0xCBC9A21F6A2A679C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
FireSingleBullet(args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCBC9A21F6A2A679C, args)
```


---

## FORCE_LIGHTNING_FLASH

**Description:** creates single lightning+thunder at random position

| Property | Value |
|----------|-------|
| Native Name | `FORCE_LIGHTNING_FLASH` |
| Hash | `0x369DB5B2510FA080` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ForceLightningFlash()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x369DB5B2510FA080, )
```


---

## GAME_FRAMEWORK_MANAGER_INIT

| Property | Value |
|----------|-------|
| Native Name | `GAME_FRAMEWORK_MANAGER_INIT` |
| Hash | `0x4CABE596D632E4B0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `transitionMode` (Hash) |

### Parameters

- **`transitionMode`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GameFrameworkManagerInit(transitionMode)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4CABE596D632E4B0, transitionMode)
```


---

## GET_ANGLE_BETWEEN_2D_VECTORS

| Property | Value |
|----------|-------|
| Native Name | `GET_ANGLE_BETWEEN_2D_VECTORS` |
| Hash | `0xD0DFE1C486097BBB` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `x2` (float), `y2` (float) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetAngleBetween2dVectors(x1, y1, x2, y2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD0DFE1C486097BBB, x1, y1, x2, y2)
```


---

## GET_BENCHMARK_ITERATIONS

**Description:** Returns value of the '-benchmarkIterations' command line option.

Old name: _GET_BENCHMARK_ITERATIONS_FROM_COMMAND_LINE

| Property | Value |
|----------|-------|
| Native Name | `GET_BENCHMARK_ITERATIONS` |
| Hash | `0x22FC52CF470CC98D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetBenchmarkIterations()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x22FC52CF470CC98D, )
```


---

## GET_BENCHMARK_PASS

**Description:** Returns value of the '-benchmarkPass' command line option.

Old name: _GET_BENCHMARK_PASS_FROM_COMMAND_LINE

| Property | Value |
|----------|-------|
| Native Name | `GET_BENCHMARK_PASS` |
| Hash | `0x9297DACF3A2CDFF7` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetBenchmarkPass()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9297DACF3A2CDFF7, )
```


---

## GET_BITS_IN_RANGE

| Property | Value |
|----------|-------|
| Native Name | `GET_BITS_IN_RANGE` |
| Hash | `0x68E1352AF48F905D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `var` (int), `rangeStart` (int), `rangeEnd` (int) |

### Parameters

- **`var`** (`int`)
- **`rangeStart`** (`int`)
- **`rangeEnd`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetBitsInRange(var, rangeStart, rangeEnd)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x68E1352AF48F905D, var, rangeStart, rangeEnd)
```


---

## GET_CLOSEST_POINT_ON_LINE

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOSEST_POINT_ON_LINE` |
| Hash | `0x83ACC65D9ACEC5EF` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (float), `p9` (BOOL) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetClosestPointOnLine(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x83ACC65D9ACEC5EF, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9)
```


---

## GET_COORDS_OF_PROJECTILE_TYPE_WITHIN_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `GET_COORDS_OF_PROJECTILE_TYPE_WITHIN_DISTANCE` |
| Hash | `0xD73C960A681052DF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `distance` (float), `outCoords` (Vector3*), `p4` (BOOL), `mustBeOwnedByThisPed` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`distance`** (`float`)
- **`outCoords`** (`Vector3*`)
- **`p4`** (`BOOL`)
- **`mustBeOwnedByThisPed`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetCoordsOfProjectileTypeWithinDistance(ped, weaponHash, distance, outCoords, p4, mustBeOwnedByThisPed)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD73C960A681052DF, ped, weaponHash, distance, outCoords, p4, mustBeOwnedByThisPed)
```


---

## GET_CURR_WEATHER_STATE

**Description:** Params: percentWeather2: 0f - 0.75f in R* Scripts

Old name: _GET_WEATHER_TYPE_TRANSITION

| Property | Value |
|----------|-------|
| Native Name | `GET_CURR_WEATHER_STATE` |
| Hash | `0x0AC679B2342F14F2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weatherType1` (Hash*), `weatherType2` (Hash*), `percentWeather2` (float*) |

### Parameters

- **`weatherType1`** (`Hash*`)
- **`weatherType2`** (`Hash*`)
- **`percentWeather2`** (`float*`)

### Usage

**Lua (Direct):**
```lua
GetCurrWeatherState(weatherType1, weatherType2, percentWeather2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0AC679B2342F14F2, weatherType1, weatherType2, percentWeather2)
```


---

## GET_DISTANCE_BETWEEN_COORDS

**Description:** If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.

Consider using this faster native instead: BUILTIN::VDIST - DVIST always takes in consideration the 3D coordinates.

| Property | Value |
|----------|-------|
| Native Name | `GET_DISTANCE_BETWEEN_COORDS` |
| Hash | `0x0BE7F4E3CDBAFB28` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `useZ` (BOOL) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`useZ`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetDistanceBetweenCoords(x1, y1, z1, x2, y2, z2, useZ)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0BE7F4E3CDBAFB28, x1, y1, z1, x2, y2, z2, useZ)
```


---

## GET_FRAME_COUNT

| Property | Value |
|----------|-------|
| Native Name | `GET_FRAME_COUNT` |
| Hash | `0x77DFA958FCF100C1` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetFrameCount()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x77DFA958FCF100C1, )
```


---

## GET_FRAME_TIME

| Property | Value |
|----------|-------|
| Native Name | `GET_FRAME_TIME` |
| Hash | `0x5E72022914CE3C38` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetFrameTime()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5E72022914CE3C38, )
```


---

## GET_GAME_TIMER

| Property | Value |
|----------|-------|
| Native Name | `GET_GAME_TIMER` |
| Hash | `0x4F67E8ECA7D3F667` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetGameTimer()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4F67E8ECA7D3F667, )
```


---

## GET_GROUND_Z_AND_NORMAL_FOR_3D_COORD

| Property | Value |
|----------|-------|
| Native Name | `GET_GROUND_Z_AND_NORMAL_FOR_3D_COORD` |
| Hash | `0x2A29CA9A6319E6AB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `groundZ` (float*), `normal` (Vector3*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`groundZ`** (`float*`)
- **`normal`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
local result = GetGroundZAndNormalFor3dCoord(x, y, z, groundZ, normal)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2A29CA9A6319E6AB, x, y, z, groundZ, normal)
```


---

## GET_GROUND_Z_FOR_3D_COORD

| Property | Value |
|----------|-------|
| Native Name | `GET_GROUND_Z_FOR_3D_COORD` |
| Hash | `0x24FA4267BB8D2431` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `groundZ` (float*), `p4` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`groundZ`** (`float*`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetGroundZFor3dCoord(x, y, z, groundZ, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x24FA4267BB8D2431, x, y, z, groundZ, p4)
```


---

## GET_HASH_KEY

**Description:** Computes a hash for the given string. It is hashed using Jenkins' One-at-a-Time hash algorithm (https://en.wikipedia.org/wiki/Jenkins_hash_function)
Note: this implementation is case-insensitive.

| Property | Value |
|----------|-------|
| Native Name | `GET_HASH_KEY` |
| Hash | `0xFD340785ADF8CFB7` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `string` (char*) |

### Parameters

- **`string`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetHashKey(string)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFD340785ADF8CFB7, string)
```


---

## GET_HEADING_FROM_VECTOR_2D

**Description:** dx = x1 - x2
dy = y1 - y2

| Property | Value |
|----------|-------|
| Native Name | `GET_HEADING_FROM_VECTOR_2D` |
| Hash | `0x38D5202FF9271C62` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `dx` (float), `dy` (float) |

### Parameters

- **`dx`** (`float`)
- **`dy`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetHeadingFromVector2d(dx, dy)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x38D5202FF9271C62, dx, dy)
```


---

*End of MISC natives part 1*
