# MISC Natives - Part 2 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** MISC  
**Natives in this file:** 50  
**Total natives in namespace:** 288  
**Generated from:** RDR3natives JSON data

---

## GET_LINE_PLANE_INTERSECTION

| Property | Value |
|----------|-------|
| Native Name | `GET_LINE_PLANE_INTERSECTION` |
| Hash | `0xAB6A04CEC428258B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (float), `p9` (float), `p10` (float), `p11` (float), `p12` (float*) |

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
- **`p9`** (`float`)
- **`p10`** (`float`)
- **`p11`** (`float`)
- **`p12`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = GetLinePlaneIntersection(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAB6A04CEC428258B, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12)
```


---

## GET_MISSION_FLAG

| Property | Value |
|----------|-------|
| Native Name | `GET_MISSION_FLAG` |
| Hash | `0xB15CD1CF58771DE1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetMissionFlag()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB15CD1CF58771DE1, )
```


---

## GET_MODEL_DIMENSIONS

| Property | Value |
|----------|-------|
| Native Name | `GET_MODEL_DIMENSIONS` |
| Hash | `0xDCB8DDD5D054A7E7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `modelHash` (Hash), `minimum` (Vector3*), `maximum` (Vector3*) |

### Parameters

- **`modelHash`** (`Hash`)
- **`minimum`** (`Vector3*`)
- **`maximum`** (`Vector3*`)

### Usage

**Lua (Direct):**
```lua
GetModelDimensions(modelHash, minimum, maximum)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDCB8DDD5D054A7E7, modelHash, minimum, maximum)
```


---

## GET_NUMBER_OF_FREE_STACKS_OF_THIS_SIZE

| Property | Value |
|----------|-------|
| Native Name | `GET_NUMBER_OF_FREE_STACKS_OF_THIS_SIZE` |
| Hash | `0x40DC2907A9697EF7` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `stackSize` (int) |

### Parameters

- **`stackSize`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetNumberOfFreeStacksOfThisSize(stackSize)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x40DC2907A9697EF7, stackSize)
```


---

## GET_NUMBER_OF_MICROSECONDS_SINCE_LAST_CALL

| Property | Value |
|----------|-------|
| Native Name | `GET_NUMBER_OF_MICROSECONDS_SINCE_LAST_CALL` |
| Hash | `0xB0CE5E5ED8BB3581` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetNumberOfMicrosecondsSinceLastCall()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB0CE5E5ED8BB3581, )
```


---

## GET_ONSCREEN_KEYBOARD_RESULT

**Description:** Returns NULL unless UPDATE_ONSCREEN_KEYBOARD() returns 1 in the same tick.

| Property | Value |
|----------|-------|
| Native Name | `GET_ONSCREEN_KEYBOARD_RESULT` |
| Hash | `0xAFB4CF58A4A292B1` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetOnscreenKeyboardResult()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAFB4CF58A4A292B1, )
```


---

## GET_PROJECTILE_OF_PROJECTILE_TYPE_WITHIN_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `GET_PROJECTILE_OF_PROJECTILE_TYPE_WITHIN_DISTANCE` |
| Hash | `0x9578986A6105A6AD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `weaponHash` (Hash), `distance` (float), `outCoords` (Vector3*), `outProjectile` (Object*), `p5` (BOOL), `mustBeOwnedByThisPed` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`weaponHash`** (`Hash`)
- **`distance`** (`float`)
- **`outCoords`** (`Vector3*`)
- **`outProjectile`** (`Object*`)
- **`p5`** (`BOOL`)
- **`mustBeOwnedByThisPed`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetProjectileOfProjectileTypeWithinDistance(ped, weaponHash, distance, outCoords, outProjectile, p5, mustBeOwnedByThisPed)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9578986A6105A6AD, ped, weaponHash, distance, outCoords, outProjectile, p5, mustBeOwnedByThisPed)
```


---

## GET_RAIN_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `GET_RAIN_LEVEL` |
| Hash | `0x931B5F4CC130224B` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetRainLevel()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x931B5F4CC130224B, )
```


---

## GET_RANDOM_EVENT_FLAG

| Property | Value |
|----------|-------|
| Native Name | `GET_RANDOM_EVENT_FLAG` |
| Hash | `0x924D54E5698AE3E0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetRandomEventFlag()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x924D54E5698AE3E0, )
```


---

## GET_RANDOM_FLOAT_IN_RANGE

| Property | Value |
|----------|-------|
| Native Name | `GET_RANDOM_FLOAT_IN_RANGE` |
| Hash | `0xE29F927A961F8AAA` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `startRange` (float), `endRange` (float) |

### Parameters

- **`startRange`** (`float`)
- **`endRange`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = GetRandomFloatInRange(startRange, endRange)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE29F927A961F8AAA, startRange, endRange)
```


---

## GET_RANDOM_INT_IN_RANGE

| Property | Value |
|----------|-------|
| Native Name | `GET_RANDOM_INT_IN_RANGE` |
| Hash | `0xD53343AA4FB7DD28` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `startRange` (int), `endRange` (int) |

### Parameters

- **`startRange`** (`int`)
- **`endRange`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetRandomIntInRange(startRange, endRange)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD53343AA4FB7DD28, startRange, endRange)
```


---

## GET_REAL_WORLD_TIME

**Description:** Returns GET_GAME_TIMER() / 1000
Only used in rcm_pearson1.ysc

| Property | Value |
|----------|-------|
| Native Name | `GET_REAL_WORLD_TIME` |
| Hash | `0x2E036F0480B8BF02` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetRealWorldTime()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E036F0480B8BF02, )
```


---

## GET_SCRIPT_TIME_WITHIN_FRAME_IN_MICROSECONDS

| Property | Value |
|----------|-------|
| Native Name | `GET_SCRIPT_TIME_WITHIN_FRAME_IN_MICROSECONDS` |
| Hash | `0x63219768C586667C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetScriptTimeWithinFrameInMicroseconds()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x63219768C586667C, )
```


---

## GET_SNOW_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `GET_SNOW_LEVEL` |
| Hash | `0x1E5D727041BE1709` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetSnowLevel()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1E5D727041BE1709, )
```


---

## GET_SYSTEM_TIME

| Property | Value |
|----------|-------|
| Native Name | `GET_SYSTEM_TIME` |
| Hash | `0xBE7F225417E35A7C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetSystemTime()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBE7F225417E35A7C, )
```


---

## GET_SYSTEM_TIME_STEP

**Description:** Old name: _GET_BENCHMARK_TIME

| Property | Value |
|----------|-------|
| Native Name | `GET_SYSTEM_TIME_STEP` |
| Hash | `0x3F3172FEAE3AFE1C` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetSystemTimeStep()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3F3172FEAE3AFE1C, )
```


---

## GET_WIND_DIRECTION

| Property | Value |
|----------|-------|
| Native Name | `GET_WIND_DIRECTION` |
| Hash | `0xF703E82F3FE14A5F` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetWindDirection()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF703E82F3FE14A5F, )
```


---

## GET_WIND_SPEED

| Property | Value |
|----------|-------|
| Native Name | `GET_WIND_SPEED` |
| Hash | `0xFFB7E74E041150A4` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetWindSpeed()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFFB7E74E041150A4, )
```


---

## HAS_BULLET_IMPACTED_IN_AREA

**Description:** p3 - possibly radius?

| Property | Value |
|----------|-------|
| Native Name | `HAS_BULLET_IMPACTED_IN_AREA` |
| Hash | `0xC153E5BCCF411814` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (float), `p4` (BOOL), `p5` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = HasBulletImpactedInArea(x, y, z, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC153E5BCCF411814, x, y, z, p3, p4, p5)
```


---

## HAS_BULLET_IMPACTED_IN_BOX

| Property | Value |
|----------|-------|
| Native Name | `HAS_BULLET_IMPACTED_IN_BOX` |
| Hash | `0x3B6A4C05FB2B33AC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (BOOL), `p7` (BOOL) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = HasBulletImpactedInBox(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3B6A4C05FB2B33AC, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## IGNORE_NEXT_RESTART

| Property | Value |
|----------|-------|
| Native Name | `IGNORE_NEXT_RESTART` |
| Hash | `0x6C9FF40FF1B69F8F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
IgnoreNextRestart(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C9FF40FF1B69F8F, toggle)
```


---

## INFORM_CODE_OF_CONTENT_ID_OF_CURRENT_UGC_MISSION

| Property | Value |
|----------|-------|
| Native Name | `INFORM_CODE_OF_CONTENT_ID_OF_CURRENT_UGC_MISSION` |
| Hash | `0x708DF841B8F27AA2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
InformCodeOfContentIdOfCurrentUgcMission(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x708DF841B8F27AA2, p0)
```


---

## IS_BIT_SET

| Property | Value |
|----------|-------|
| Native Name | `IS_BIT_SET` |
| Hash | `0x4ED6CFDFE8D4131A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `address` (int), `offset` (int) |

### Parameters

- **`address`** (`int`)
- **`offset`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsBitSet(address, offset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4ED6CFDFE8D4131A, address, offset)
```


---

## IS_BULLET_IN_ANGLED_AREA

| Property | Value |
|----------|-------|
| Native Name | `IS_BULLET_IN_ANGLED_AREA` |
| Hash | `0x9D09D8493747CF02` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (BOOL) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsBulletInAngledArea(p0, p1, p2, p3, p4, p5, p6, p7)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9D09D8493747CF02, p0, p1, p2, p3, p4, p5, p6, p7)
```


---

## IS_BULLET_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `IS_BULLET_IN_AREA` |
| Hash | `0xC652FD308772D79E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (BOOL) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsBulletInArea(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC652FD308772D79E, p0, p1, p2, p3, p4)
```


---

## IS_BULLET_IN_BOX

| Property | Value |
|----------|-------|
| Native Name | `IS_BULLET_IN_BOX` |
| Hash | `0xC128137C52152741` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (BOOL) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsBulletInBox(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC128137C52152741, p0, p1, p2, p3, p4, p5, p6)
```


---

## IS_DURANGO_VERSION

**Description:** Hardcoded to return false.
Checks for XBOXONE Game Build.

| Property | Value |
|----------|-------|
| Native Name | `IS_DURANGO_VERSION` |
| Hash | `0xD1CCC2A2639D325F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsDurangoVersion()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD1CCC2A2639D325F, )
```


---

## IS_GAME_SESSION_STATE_MACHINE_IDLE

| Property | Value |
|----------|-------|
| Native Name | `IS_GAME_SESSION_STATE_MACHINE_IDLE` |
| Hash | `0xF9E7DBB39080640B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsGameSessionStateMachineIdle()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF9E7DBB39080640B, )
```


---

## IS_INCIDENT_VALID

| Property | Value |
|----------|-------|
| Native Name | `IS_INCIDENT_VALID` |
| Hash | `0x39F2B1BAD412246A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `incidentId` (int) |

### Parameters

- **`incidentId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsIncidentValid(incidentId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x39F2B1BAD412246A, incidentId)
```


---

## IS_MAG_DEMO_1_ACTIVE

**Description:** magdemo = magazine demo, i. e. for magazines such as IGN, pre play phases to prepare articles etc. - example 2012 builds for V
Hardcoded to return false.

| Property | Value |
|----------|-------|
| Native Name | `IS_MAG_DEMO_1_ACTIVE` |
| Hash | `0x5FC9357C26DAEFCE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsMagDemo1Active()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5FC9357C26DAEFCE, )
```


---

## IS_MINIGAME_IN_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `IS_MINIGAME_IN_PROGRESS` |
| Hash | `0xF4D8BCD052E7EA1B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsMinigameInProgress()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF4D8BCD052E7EA1B, )
```


---

## IS_ORBIS_VERSION

**Description:** Hardcoded to return false.
Checks for PS4 Game Build.

| Property | Value |
|----------|-------|
| Native Name | `IS_ORBIS_VERSION` |
| Hash | `0x88CFAE250D3E0C71` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsOrbisVersion()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x88CFAE250D3E0C71, )
```


---

## IS_PC_VERSION

**Description:** Hardcoded to return true.

| Property | Value |
|----------|-------|
| Native Name | `IS_PC_VERSION` |
| Hash | `0xB0FB6CFAA5A1C833` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsPcVersion()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB0FB6CFAA5A1C833, )
```


---

## IS_POSITION_OCCUPIED

| Property | Value |
|----------|-------|
| Native Name | `IS_POSITION_OCCUPIED` |
| Hash | `0x825CA3ED43831015` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `range` (float), `p4` (BOOL), `p5` (BOOL), `p6` (BOOL), `p7` (BOOL), `p8` (BOOL), `p9` (Any), `p10` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`range`** (`float`)
- **`p4`** (`BOOL`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)
- **`p9`** (`Any`)
- **`p10`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPositionOccupied(x, y, z, range, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x825CA3ED43831015, x, y, z, range, p4, p5, p6, p7, p8, p9, p10)
```


---

## IS_PROJECTILE_IN_AREA

**Description:** Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.

ownedByPlayer = only projectiles fired by the player will be detected.

| Property | Value |
|----------|-------|
| Native Name | `IS_PROJECTILE_IN_AREA` |
| Hash | `0x05B0061EFDFC8941` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `ownedByPlayer` (BOOL) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`ownedByPlayer`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsProjectileInArea(x1, y1, z1, x2, y2, z2, ownedByPlayer)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x05B0061EFDFC8941, x1, y1, z1, x2, y2, z2, ownedByPlayer)
```


---

## IS_PROJECTILE_TYPE_IN_ANGLED_AREA

| Property | Value |
|----------|-------|
| Native Name | `IS_PROJECTILE_TYPE_IN_ANGLED_AREA` |
| Hash | `0x928431F4133CD3D4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (Any), `p8` (BOOL) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`Any`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsProjectileTypeInAngledArea(p0, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x928431F4133CD3D4, p0, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## IS_PROJECTILE_TYPE_IN_AREA

**Description:** Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a rectangle.

| Property | Value |
|----------|-------|
| Native Name | `IS_PROJECTILE_TYPE_IN_AREA` |
| Hash | `0x04965FB9E14235C7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `xMin` (float), `yMin` (float), `zMin` (float), `xMax` (float), `yMax` (float), `zMax` (float), `weaponType` (Hash), `isPlayer` (BOOL) |

### Parameters

- **`xMin`** (`float`)
- **`yMin`** (`float`)
- **`zMin`** (`float`)
- **`xMax`** (`float`)
- **`yMax`** (`float`)
- **`zMax`** (`float`)
- **`weaponType`** (`Hash`)
- **`isPlayer`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsProjectileTypeInArea(xMin, yMin, zMin, xMax, yMax, zMax, weaponType, isPlayer)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x04965FB9E14235C7, xMin, yMin, zMin, xMax, yMax, zMax, weaponType, isPlayer)
```


---

## IS_PROJECTILE_TYPE_WITHIN_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `IS_PROJECTILE_TYPE_WITHIN_DISTANCE` |
| Hash | `0xF51C9BAAD9ED64C4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float), `p2` (float), `p3` (Any), `p4` (float), `p5` (BOOL) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`Any`)
- **`p4`** (`float`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsProjectileTypeWithinDistance(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF51C9BAAD9ED64C4, p0, p1, p2, p3, p4, p5)
```


---

## IS_STADIA_VERSION

**Description:** Hardcoded to return false.

| Property | Value |
|----------|-------|
| Native Name | `IS_STADIA_VERSION` |
| Hash | `0x268AB8420A9E4ED7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsStadiaVersion()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x268AB8420A9E4ED7, )
```


---

## IS_STRING_NULL

| Property | Value |
|----------|-------|
| Native Name | `IS_STRING_NULL` |
| Hash | `0x602102324604D96B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `string` (const char*) |

### Parameters

- **`string`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsStringNull(string)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x602102324604D96B, string)
```


---

## IS_STRING_NULL_OR_EMPTY

| Property | Value |
|----------|-------|
| Native Name | `IS_STRING_NULL_OR_EMPTY` |
| Hash | `0x2CF12F9ACF18F048` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `string` (const char*) |

### Parameters

- **`string`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsStringNullOrEmpty(string)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2CF12F9ACF18F048, string)
```


---

## IS_STRING_NULL_OR_EMPTY_OR_SPACES

**Description:** Returns true if the entire string consists only of space characters.

| Property | Value |
|----------|-------|
| Native Name | `IS_STRING_NULL_OR_EMPTY_OR_SPACES` |
| Hash | `0x375F5870A7B8BEC1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `string` (const char*) |

### Parameters

- **`string`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsStringNullOrEmptyOrSpaces(string)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x375F5870A7B8BEC1, string)
```


---

## NETWORK_SET_SCRIPT_IS_SAFE_FOR_NETWORK_GAME

| Property | Value |
|----------|-------|
| Native Name | `NETWORK_SET_SCRIPT_IS_SAFE_FOR_NETWORK_GAME` |
| Hash | `0x3D0EAC6385DD6100` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
NetworkSetScriptIsSafeForNetworkGame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3D0EAC6385DD6100, )
```


---

## NEXT_ONSCREEN_KEYBOARD_RESULT_WILL_DISPLAY_USING_THESE_FONTS

| Property | Value |
|----------|-------|
| Native Name | `NEXT_ONSCREEN_KEYBOARD_RESULT_WILL_DISPLAY_USING_THESE_FONTS` |
| Hash | `0x5CB71EAA1429A358` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `fontBitField` (int) |

### Parameters

- **`fontBitField`** (`int`)

### Usage

**Lua (Direct):**
```lua
NextOnscreenKeyboardResultWillDisplayUsingTheseFonts(fontBitField)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5CB71EAA1429A358, fontBitField)
```


---

## OVERRIDE_SAVE_HOUSE

| Property | Value |
|----------|-------|
| Native Name | `OVERRIDE_SAVE_HOUSE` |
| Hash | `0xB2C69E11A37B5AF0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `override` (BOOL), `x` (float), `y` (float), `z` (float), `heading` (float), `isAutosave` (BOOL), `returnCoords` (Vector3*), `returnHeading` (float*) |

### Parameters

- **`override`** (`BOOL`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`isAutosave`** (`BOOL`)
- **`returnCoords`** (`Vector3*`)
- **`returnHeading`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = OverrideSaveHouse(override, x, y, z, heading, isAutosave, returnCoords, returnHeading)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB2C69E11A37B5AF0, override, x, y, z, heading, isAutosave, returnCoords, returnHeading)
```


---

## PAUSE_DEATH_ARREST_RESTART

| Property | Value |
|----------|-------|
| Native Name | `PAUSE_DEATH_ARREST_RESTART` |
| Hash | `0x66AB6B6C7E72F393` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PauseDeathArrestRestart(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x66AB6B6C7E72F393, toggle)
```


---

## POPULATE_NOW

**Description:** spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called

| Property | Value |
|----------|-------|
| Native Name | `POPULATE_NOW` |
| Hash | `0xEA6DC3A8ADD2005F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
PopulateNow()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEA6DC3A8ADD2005F, )
```


---

## REGISTER_INTERACTION_LOCKON_PROMPT

**Description:** p3 is usually the same value of radius
p8 determines whether the ILO prompt is a lock on prompt with RMB

| Property | Value |
|----------|-------|
| Native Name | `REGISTER_INTERACTION_LOCKON_PROMPT` |
| Hash | `0x870708A6E147A9AD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity), `text` (const char*), `radius` (float), `p3` (float), `flag` (int), `p5` (float), `p6` (float), `prompt` (Prompt), `p8` (BOOL), `p9` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`text`** (`const char*`)
- **`radius`** (`float`)
- **`p3`** (`float`)
- **`flag`** (`int`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`prompt`** (`Prompt`)
- **`p8`** (`BOOL`)
- **`p9`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RegisterInteractionLockonPrompt(entity, text, radius, p3, flag, p5, p6, prompt, p8, p9)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x870708A6E147A9AD, entity, text, radius, p3, flag, p5, p6, prompt, p8, p9)
```


---

## REMOVE_DISPATCH_SPAWN_BLOCKING_AREA

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_DISPATCH_SPAWN_BLOCKING_AREA` |
| Hash | `0x49F751F6868DDC5B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
RemoveDispatchSpawnBlockingArea(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x49F751F6868DDC5B, p0)
```


---

## REMOVE_POP_MULTIPLIER_AREA

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_POP_MULTIPLIER_AREA` |
| Hash | `0x88CB484364EFB37A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `id` (int), `p1` (BOOL) |

### Parameters

- **`id`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemovePopMultiplierArea(id, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x88CB484364EFB37A, id, p1)
```


---

*End of MISC natives part 2*
