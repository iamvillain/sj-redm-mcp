# MISC Natives - Part 3 of 6

Red Dead Redemption 3 Native Functions Reference

**Namespace:** MISC  
**Natives in this file:** 50  
**Total natives in namespace:** 288  
**Generated from:** RDR3natives JSON data

---

## RESET_DISPATCH_IDEAL_SPAWN_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `RESET_DISPATCH_IDEAL_SPAWN_DISTANCE` |
| Hash | `0xC7817264BC4B6377` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetDispatchIdealSpawnDistance()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC7817264BC4B6377, )
```


---

## RESET_END_USER_BENCHMARK

**Description:** Begins with RESET_*. Next character in the name is either D or E.

Old name: _RESET_BENCHMARK_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `RESET_END_USER_BENCHMARK` |
| Hash | `0xECBABD0307FB216F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetEndUserBenchmark()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xECBABD0307FB216F, )
```


---

## RESET_SCRIPT_TIME_WITHIN_FRAME

| Property | Value |
|----------|-------|
| Native Name | `RESET_SCRIPT_TIME_WITHIN_FRAME` |
| Hash | `0x1411A7CBC3A6EB7B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetScriptTimeWithinFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1411A7CBC3A6EB7B, )
```


---

## RESET_WANTED_RESPONSE_NUM_PEDS_TO_SPAWN

| Property | Value |
|----------|-------|
| Native Name | `RESET_WANTED_RESPONSE_NUM_PEDS_TO_SPAWN` |
| Hash | `0xEF42F56F69877125` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ResetWantedResponseNumPedsToSpawn()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEF42F56F69877125, )
```


---

## SAVE_END_USER_BENCHMARK

**Description:** Saves the benchmark recording to %USERPROFILE%\Documents\Rockstar Games\Red Dead Redemption 2\Benchmarks and submits some metrics.

Old name: _SAVE_BENCHMARK_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `SAVE_END_USER_BENCHMARK` |
| Hash | `0xF4743E2ECC02B3DA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SaveEndUserBenchmark()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF4743E2ECC02B3DA, )
```


---

## SCRIPT_RACE_GET_PLAYER_SPLIT_TIME

| Property | Value |
|----------|-------|
| Native Name | `SCRIPT_RACE_GET_PLAYER_SPLIT_TIME` |
| Hash | `0x769E848C66E3C2BB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any*), `p2` (Any*) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any*`)
- **`p2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ScriptRaceGetPlayerSplitTime(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x769E848C66E3C2BB, p0, p1, p2)
```


---

## SCRIPT_RACE_INIT

| Property | Value |
|----------|-------|
| Native Name | `SCRIPT_RACE_INIT` |
| Hash | `0x8AE059F47158417E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `numCheckpoints` (int), `numLaps` (int), `numPlayers` (int), `p3` (Any) |

### Parameters

- **`numCheckpoints`** (`int`)
- **`numLaps`** (`int`)
- **`numPlayers`** (`int`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
ScriptRaceInit(numCheckpoints, numLaps, numPlayers, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8AE059F47158417E, numCheckpoints, numLaps, numPlayers, p3)
```


---

## SCRIPT_RACE_PLAYER_HIT_CHECKPOINT

| Property | Value |
|----------|-------|
| Native Name | `SCRIPT_RACE_PLAYER_HIT_CHECKPOINT` |
| Hash | `0xBA62B4D80FA66BD6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `part` (int), `checkpoint` (int), `lap` (int), `time` (int) |

### Parameters

- **`part`** (`int`)
- **`checkpoint`** (`int`)
- **`lap`** (`int`)
- **`time`** (`int`)

### Usage

**Lua (Direct):**
```lua
ScriptRacePlayerHitCheckpoint(part, checkpoint, lap, time)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBA62B4D80FA66BD6, part, checkpoint, lap, time)
```


---

## SCRIPT_RACE_SHUTDOWN

| Property | Value |
|----------|-------|
| Native Name | `SCRIPT_RACE_SHUTDOWN` |
| Hash | `0x334CE0DA4FAF330C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ScriptRaceShutdown()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x334CE0DA4FAF330C, )
```


---

## SET_BIT

| Property | Value |
|----------|-------|
| Native Name | `SET_BIT` |
| Hash | `0xF73FBE4845C43B5B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `address` (int*), `offset` (int) |

### Parameters

- **`address`** (`int*`)
- **`offset`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetBit(address, offset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF73FBE4845C43B5B, address, offset)
```


---

## SET_BITS_IN_RANGE

| Property | Value |
|----------|-------|
| Native Name | `SET_BITS_IN_RANGE` |
| Hash | `0x324DC1CEF57F31E6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `var` (int*), `rangeStart` (int), `rangeEnd` (int), `p3` (int) |

### Parameters

- **`var`** (`int*`)
- **`rangeStart`** (`int`)
- **`rangeEnd`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetBitsInRange(var, rangeStart, rangeEnd, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x324DC1CEF57F31E6, var, rangeStart, rangeEnd, p3)
```


---

## SET_CHEAT_ACTIVE

**Description:** Cheats are GTA IV cheats:

0 = unknown
1 = unknown (same as 0)
2 = Max Health and Armor
3 = Raise Wanted Level
4 = Lower Wanted Level
5 = unknown (does nothing)
6 = Change Weather
7 = Spawn Annihilator
8 = Spawn NRG 900
9 = Spawn FBI
10 = Spawn Jetmax
11 = Spawn Comet
12 = Spawn Turismo
13 = Spawn Cognoscenti
14 = Spawn Super GT
15 = Spawn Sanchez

Initially used in Max Payne 3, that's why we know the name.

| Property | Value |
|----------|-------|
| Native Name | `SET_CHEAT_ACTIVE` |
| Hash | `0xD4958E8CF0DE0DD0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `cheatId` (int) |

### Parameters

- **`cheatId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetCheatActive(cheatId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD4958E8CF0DE0DD0, cheatId)
```


---

## SET_CREDITS_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `SET_CREDITS_ACTIVE` |
| Hash | `0xD37BECF862DA726F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCreditsActive(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD37BECF862DA726F, toggle)
```


---

## SET_CURR_WEATHER_STATE

**Description:** Params: BOOL p3 is always true

Old name: _SET_WEATHER_TYPE_TRANSITION

| Property | Value |
|----------|-------|
| Native Name | `SET_CURR_WEATHER_STATE` |
| Hash | `0xFA3E3CA8A1DE6D5D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weatherType1` (Hash), `weatherType2` (Hash), `percentWeather2` (float), `enabled` (BOOL) |

### Parameters

- **`weatherType1`** (`Hash`)
- **`weatherType2`** (`Hash`)
- **`percentWeather2`** (`float`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetCurrWeatherState(weatherType1, weatherType2, percentWeather2, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFA3E3CA8A1DE6D5D, weatherType1, weatherType2, percentWeather2, enabled)
```


---

## SET_DISPATCH_IDEAL_SPAWN_DISTANCE

| Property | Value |
|----------|-------|
| Native Name | `SET_DISPATCH_IDEAL_SPAWN_DISTANCE` |
| Hash | `0xEAB6823B82FBD283` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `fIdealSpawnDistance` (float) |

### Parameters

- **`fIdealSpawnDistance`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDispatchIdealSpawnDistance(fIdealSpawnDistance)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEAB6823B82FBD283, fIdealSpawnDistance)
```


---

## SET_FADE_IN_AFTER_DEATH_ARREST

**Description:** Sets whether the game should fade in after the player dies or is arrested.

| Property | Value |
|----------|-------|
| Native Name | `SET_FADE_IN_AFTER_DEATH_ARREST` |
| Hash | `0xDF3B5846DE5904AF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetFadeInAfterDeathArrest(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF3B5846DE5904AF, toggle)
```


---

## SET_FADE_IN_AFTER_LOAD

| Property | Value |
|----------|-------|
| Native Name | `SET_FADE_IN_AFTER_LOAD` |
| Hash | `0xAC806C4CAB973517` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetFadeInAfterLoad(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAC806C4CAB973517, toggle)
```


---

## SET_GAME_PAUSED

**Description:** Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused.

| Property | Value |
|----------|-------|
| Native Name | `SET_GAME_PAUSED` |
| Hash | `0xFAEC088D28B1DE4A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetGamePaused(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFAEC088D28B1DE4A, toggle)
```


---

## SET_MISSION_FLAG

**Description:** If true, the player can't save the game.

| Property | Value |
|----------|-------|
| Native Name | `SET_MISSION_FLAG` |
| Hash | `0x36694B456BE80D0A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetMissionFlag(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x36694B456BE80D0A, toggle)
```


---

## SET_PED_DECOMPOSED

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_DECOMPOSED` |
| Hash | `0x674B90BE1115846D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedDecomposed(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x674B90BE1115846D, ped, toggle)
```


---

## SET_RAIN

**Description:** Old name: _SET_RAIN_LEVEL

| Property | Value |
|----------|-------|
| Native Name | `SET_RAIN` |
| Hash | `0x193DFC0526830FD6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `intensity` (float) |

### Parameters

- **`intensity`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetRain(intensity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x193DFC0526830FD6, intensity)
```


---

## SET_RANDOM_EVENT_FLAG

**Description:** If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
Does nothing if the mission flag is set.

| Property | Value |
|----------|-------|
| Native Name | `SET_RANDOM_EVENT_FLAG` |
| Hash | `0xB1ADCCC4150C6473` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetRandomEventFlag(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB1ADCCC4150C6473, toggle)
```


---

## SET_RANDOM_SEED

| Property | Value |
|----------|-------|
| Native Name | `SET_RANDOM_SEED` |
| Hash | `0x5CD7A49104AFCB6B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `seed` (int) |

### Parameters

- **`seed`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetRandomSeed(seed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5CD7A49104AFCB6B, seed)
```


---

## SET_RANDOM_WEATHER_TYPE

| Property | Value |
|----------|-------|
| Native Name | `SET_RANDOM_WEATHER_TYPE` |
| Hash | `0x6E5A7FBEECAB3C72` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `p1` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetRandomWeatherType(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6E5A7FBEECAB3C72, p0, p1)
```


---

## SET_SUPER_JUMP_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_SUPER_JUMP_THIS_FRAME` |
| Hash | `0xB3E9BE963F10C445` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
SetSuperJumpThisFrame(player)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB3E9BE963F10C445, player)
```


---

## SET_THIS_SCRIPT_CAN_BE_PAUSED

| Property | Value |
|----------|-------|
| Native Name | `SET_THIS_SCRIPT_CAN_BE_PAUSED` |
| Hash | `0x3215376E79F6EA18` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetThisScriptCanBePaused(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3215376E79F6EA18, toggle)
```


---

## SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT` |
| Hash | `0x8ABD939C2E5D00ED` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetThisScriptCanRemoveBlipsCreatedByAnyScript(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8ABD939C2E5D00ED, toggle)
```


---

## SET_TIME_SCALE

**Description:** Maximum value is 1.0f
At a value of 0.0f the game will still run at a minimum time scale.

| Property | Value |
|----------|-------|
| Native Name | `SET_TIME_SCALE` |
| Hash | `0x9682AF6050854856` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `timeScale` (float) |

### Parameters

- **`timeScale`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetTimeScale(timeScale)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9682AF6050854856, timeScale)
```


---

## SET_WEATHER_TYPE

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/weather/weather_types.lua

| Property | Value |
|----------|-------|
| Native Name | `SET_WEATHER_TYPE` |
| Hash | `0x59174F1AFE095B5A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `weatherType` (Hash), `p1` (BOOL), `p2` (BOOL), `transition` (BOOL), `transitionTime` (float), `p5` (BOOL) |

### Parameters

- **`weatherType`** (`Hash`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`transition`** (`BOOL`)
- **`transitionTime`** (`float`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetWeatherType(weatherType, p1, p2, transition, transitionTime, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x59174F1AFE095B5A, weatherType, p1, p2, transition, transitionTime, p5)
```


---

## SET_WIND_DIRECTION

| Property | Value |
|----------|-------|
| Native Name | `SET_WIND_DIRECTION` |
| Hash | `0xB56C4F5F57A45600` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `direction` (float) |

### Parameters

- **`direction`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetWindDirection(direction)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB56C4F5F57A45600, direction)
```


---

## SET_WIND_SPEED

| Property | Value |
|----------|-------|
| Native Name | `SET_WIND_SPEED` |
| Hash | `0xD00C2D82DC04A99F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `speed` (float) |

### Parameters

- **`speed`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetWindSpeed(speed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD00C2D82DC04A99F, speed)
```


---

## SHOOT_SINGLE_BULLET_BETWEEN_COORDS

| Property | Value |
|----------|-------|
| Native Name | `SHOOT_SINGLE_BULLET_BETWEEN_COORDS` |
| Hash | `0x867654CBC7606F2C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float), `damage` (int), `p7` (BOOL), `weaponHash` (Hash), `ownerPed` (Ped), `isAudible` (BOOL), `isInvisible` (BOOL), `speed` (float), `p13` (BOOL) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)
- **`damage`** (`int`)
- **`p7`** (`BOOL`)
- **`weaponHash`** (`Hash`)
- **`ownerPed`** (`Ped`)
- **`isAudible`** (`BOOL`)
- **`isInvisible`** (`BOOL`)
- **`speed`** (`float`)
- **`p13`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ShootSingleBulletBetweenCoords(x1, y1, z1, x2, y2, z2, damage, p7, weaponHash, ownerPed, isAudible, isInvisible, speed, p13)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x867654CBC7606F2C, x1, y1, z1, x2, y2, z2, damage, p7, weaponHash, ownerPed, isAudible, isInvisible, speed, p13)
```


---

## SHOULD_USE_METRIC_MEASUREMENTS

**Description:** Returns whether the game's measurement system is set to metric.

| Property | Value |
|----------|-------|
| Native Name | `SHOULD_USE_METRIC_MEASUREMENTS` |
| Hash | `0x4FB556ACEFA93098` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ShouldUseMetricMeasurements()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4FB556ACEFA93098, )
```


---

## START_END_USER_BENCHMARK

**Description:** Begins with START_*. Next character in the name is either D or E.

Old name: _START_BENCHMARK_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `START_END_USER_BENCHMARK` |
| Hash | `0x29D1F6DF864A094E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
StartEndUserBenchmark()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x29D1F6DF864A094E, )
```


---

## STOP_CURRENT_LOADING_PROGRESS_TIMER

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `STOP_CURRENT_LOADING_PROGRESS_TIMER` |
| Hash | `0xA565FAC215CBC77D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
StopCurrentLoadingProgressTimer()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA565FAC215CBC77D, )
```


---

## STOP_END_USER_BENCHMARK

**Description:** Begins with STOP_*. Next character in the name is either D or E.

Old name: _STOP_BENCHMARK_RECORDING

| Property | Value |
|----------|-------|
| Native Name | `STOP_END_USER_BENCHMARK` |
| Hash | `0xB89AEC71AFF2B599` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
StopEndUserBenchmark()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB89AEC71AFF2B599, )
```


---

## STRING_TO_INT

**Description:** Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.

| Property | Value |
|----------|-------|
| Native Name | `STRING_TO_INT` |
| Hash | `0xF2DD2298B3AF23E2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `string` (const char*), `outInteger` (int*) |

### Parameters

- **`string`** (`const char*`)
- **`outInteger`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = StringToInt(string, outInteger)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF2DD2298B3AF23E2, string, outInteger)
```


---

## TAN

| Property | Value |
|----------|-------|
| Native Name | `TAN` |
| Hash | `0x8C13DB96497B7ABF` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Tan(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8C13DB96497B7ABF, p0)
```


---

## UI_STARTED_END_USER_BENCHMARK

**Description:** Hardcoded to return false.

Old name: _UI_IS_SINGLEPLAYER_PAUSE_MENU_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `UI_STARTED_END_USER_BENCHMARK` |
| Hash | `0x4FFA0386A6216113` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = UiStartedEndUserBenchmark()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4FFA0386A6216113, )
```


---

## UNREGISTER_INTERACTION_LOCKON_PROMPT

| Property | Value |
|----------|-------|
| Native Name | `UNREGISTER_INTERACTION_LOCKON_PROMPT` |
| Hash | `0xE98D55C5983F2509` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = UnregisterInteractionLockonPrompt(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE98D55C5983F2509, entity)
```


---

## UPDATE_ONSCREEN_KEYBOARD

**Description:** Returns the current status of the onscreen keyboard, and updates the output.

Status Codes:

0 - User still editing
1 - User has finished editing
2 - User has canceled editing
3 - Keyboard isn't active

| Property | Value |
|----------|-------|
| Native Name | `UPDATE_ONSCREEN_KEYBOARD` |
| Hash | `0x37DF360F235A3893` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = UpdateOnscreenKeyboard()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x37DF360F235A3893, )
```


---

## VAR_STRING

**Description:** Note: The first bit in 'flags' must not be set.
It is also required to pass at least one extra argument (this must be a text label string or hash).
When passing a hash, flags should be 0.

| Property | Value |
|----------|-------|
| Native Name | `VAR_STRING` |
| Hash | `0xFA925AC00EB830B9` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `flags` (int), `...` () |

### Parameters

- **`flags`** (`int`)
- **`...`** (``)

### Usage

**Lua (Direct):**
```lua
local result = VarString(flags, ...)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFA925AC00EB830B9, flags, ...)
```


---

## WATER_OVERRIDE_SET_OCEANWAVEMAXAMPLITUDE

**Description:** Only used in smuggler2 script

| Property | Value |
|----------|-------|
| Native Name | `WATER_OVERRIDE_SET_OCEANWAVEMAXAMPLITUDE` |
| Hash | `0xF06C5B66DE20B2B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `maxAmplitude` (float) |

### Parameters

- **`maxAmplitude`** (`float`)

### Usage

**Lua (Direct):**
```lua
WaterOverrideSetOceanwavemaxamplitude(maxAmplitude)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF06C5B66DE20B2B8, maxAmplitude)
```


---

## WATER_OVERRIDE_SET_SHOREWAVEAMPLITUDE

**Description:** Only used in smuggler2 script

| Property | Value |
|----------|-------|
| Native Name | `WATER_OVERRIDE_SET_SHOREWAVEAMPLITUDE` |
| Hash | `0x55123D5A7D9D3C42` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `amplitude` (float) |

### Parameters

- **`amplitude`** (`float`)

### Usage

**Lua (Direct):**
```lua
WaterOverrideSetShorewaveamplitude(amplitude)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x55123D5A7D9D3C42, amplitude)
```


---

## _0x0358B8A41916C613

| Property | Value |
|----------|-------|
| Native Name | `_0x0358B8A41916C613` |
| Hash | `0x0358B8A41916C613` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0358B8A41916C613(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0358B8A41916C613, p0, p1, p2, p3)
```


---

## _0x0730E518486DEEC3

| Property | Value |
|----------|-------|
| Native Name | `_0x0730E518486DEEC3` |
| Hash | `0x0730E518486DEEC3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0730E518486DEEC3(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0730E518486DEEC3, p0)
```


---

## _DISABLE_COMPOSITE_PICK_PROMPT_THIS_FRAME

**Description:** disables composite Pick prompt

| Property | Value |
|----------|-------|
| Native Name | `_DISABLE_COMPOSITE_PICK_PROMPT_THIS_FRAME` |
| Hash | `0x082C043C7AFC3747` |
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
DisableCompositePickPromptThisFrame(compositeId, disable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x082C043C7AFC3747, compositeId, disable)
```


---

## _0x0A487CC74A517FB5

| Property | Value |
|----------|-------|
| Native Name | `_0x0A487CC74A517FB5` |
| Hash | `0x0A487CC74A517FB5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0A487CC74A517FB5(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0A487CC74A517FB5, p0)
```


---

## _0x0D0AE5081F88CFE1

| Property | Value |
|----------|-------|
| Native Name | `_0x0D0AE5081F88CFE1` |
| Hash | `0x0D0AE5081F88CFE1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0D0AE5081F88CFE1(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0D0AE5081F88CFE1, p0)
```


---

## _0x1096603B519C905F

**Description:** _SET_MISSION_NAME_*(FOR_ACTIVITY?/MINIGAME?)

| Property | Value |
|----------|-------|
| Native Name | `_0x1096603B519C905F` |
| Hash | `0x1096603B519C905F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (const char*) |

### Parameters

- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0x1096603B519C905F(name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1096603B519C905F, name)
```


---

*End of MISC natives part 3*
