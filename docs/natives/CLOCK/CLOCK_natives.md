# CLOCK Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** CLOCK  
**Natives in this file:** 19  
**Generated from:** RDR3natives JSON data

---

## ADD_TO_CLOCK_TIME

| Property | Value |
|----------|-------|
| Native Name | `ADD_TO_CLOCK_TIME` |
| Hash | `0xAB7C251C7701D336` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hours` (int), `minutes` (int), `seconds` (int) |

### Parameters

- **`hours`** (`int`)
- **`minutes`** (`int`)
- **`seconds`** (`int`)

### Usage

**Lua (Direct):**
```lua
AddToClockTime(hours, minutes, seconds)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAB7C251C7701D336, hours, minutes, seconds)
```


---

## ADVANCE_CLOCK_TIME_TO

| Property | Value |
|----------|-------|
| Native Name | `ADVANCE_CLOCK_TIME_TO` |
| Hash | `0x0184750AE88D0B1D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hour` (int), `minute` (int), `second` (int) |

### Parameters

- **`hour`** (`int`)
- **`minute`** (`int`)
- **`second`** (`int`)

### Usage

**Lua (Direct):**
```lua
AdvanceClockTimeTo(hour, minute, second)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0184750AE88D0B1D, hour, minute, second)
```


---

## GET_CLOCK_DAY_OF_MONTH

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOCK_DAY_OF_MONTH` |
| Hash | `0xDF2FD796C54480A5` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetClockDayOfMonth()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF2FD796C54480A5, )
```


---

## GET_CLOCK_DAY_OF_WEEK

**Description:** Gets the current day of the week.

0: Sunday
1: Monday
2: Tuesday
3: Wednesday
4: Thursday
5: Friday
6: Saturday

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOCK_DAY_OF_WEEK` |
| Hash | `0x4DD02D4C7FB30076` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetClockDayOfWeek()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4DD02D4C7FB30076, )
```


---

## GET_CLOCK_HOURS

**Description:** Gets the current ingame hour, expressed without zeros. (09:34 will be represented as 9)

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOCK_HOURS` |
| Hash | `0xC82CF208C2B19199` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetClockHours()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC82CF208C2B19199, )
```


---

## GET_CLOCK_MINUTES

**Description:** Gets the current ingame clock minute.

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOCK_MINUTES` |
| Hash | `0x4E162231B823DBBF` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetClockMinutes()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4E162231B823DBBF, )
```


---

## GET_CLOCK_MONTH

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOCK_MONTH` |
| Hash | `0x2D44E8FC79EAB1AC` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetClockMonth()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2D44E8FC79EAB1AC, )
```


---

## GET_CLOCK_SECONDS

**Description:** Gets the current ingame clock second. Note that ingame clock seconds change really fast since a day in RDR is only 48 minutes in real life.

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOCK_SECONDS` |
| Hash | `0xB6101ABE62B5F080` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetClockSeconds()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB6101ABE62B5F080, )
```


---

## GET_CLOCK_YEAR

| Property | Value |
|----------|-------|
| Native Name | `GET_CLOCK_YEAR` |
| Hash | `0xE136DCA28C4A48BA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetClockYear()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE136DCA28C4A48BA, )
```


---

## GET_MILLISECONDS_PER_GAME_MINUTE

| Property | Value |
|----------|-------|
| Native Name | `GET_MILLISECONDS_PER_GAME_MINUTE` |
| Hash | `0xE4CB8D126501EC52` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetMillisecondsPerGameMinute()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE4CB8D126501EC52, )
```


---

## GET_POSIX_TIME

| Property | Value |
|----------|-------|
| Native Name | `GET_POSIX_TIME` |
| Hash | `0x90338AD4A784E455` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `year` (int*), `month` (int*), `day` (int*), `hour` (int*), `minute` (int*), `second` (int*) |

### Parameters

- **`year`** (`int*`)
- **`month`** (`int*`)
- **`day`** (`int*`)
- **`hour`** (`int*`)
- **`minute`** (`int*`)
- **`second`** (`int*`)

### Usage

**Lua (Direct):**
```lua
GetPosixTime(year, month, day, hour, minute, second)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x90338AD4A784E455, year, month, day, hour, minute, second)
```


---

## PAUSE_CLOCK

| Property | Value |
|----------|-------|
| Native Name | `PAUSE_CLOCK` |
| Hash | `0x4D1A590C92BF377E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL), `unused` (Any) |

### Parameters

- **`toggle`** (`BOOL`)
- **`unused`** (`Any`)

### Usage

**Lua (Direct):**
```lua
PauseClock(toggle, unused)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D1A590C92BF377E, toggle, unused)
```


---

## SET_CLOCK_DATE

| Property | Value |
|----------|-------|
| Native Name | `SET_CLOCK_DATE` |
| Hash | `0x02AD3092562941E2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `day` (int), `month` (int), `year` (int) |

### Parameters

- **`day`** (`int`)
- **`month`** (`int`)
- **`year`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetClockDate(day, month, year)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x02AD3092562941E2, day, month, year)
```


---

## SET_CLOCK_TIME

**Description:** SET_CLOCK_TIME(12, 34, 56);

| Property | Value |
|----------|-------|
| Native Name | `SET_CLOCK_TIME` |
| Hash | `0x3A52C59FFB2DEED8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `hour` (int), `minute` (int), `second` (int) |

### Parameters

- **`hour`** (`int`)
- **`minute`** (`int`)
- **`second`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetClockTime(hour, minute, second)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3A52C59FFB2DEED8, hour, minute, second)
```


---

## _ADD_TIME_TO_DATE_TIME

| Property | Value |
|----------|-------|
| Native Name | `_ADD_TIME_TO_DATE_TIME` |
| Hash | `0x28EEACE9B43D9597` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inDateTime` (Any*), `timeToAdd` (Any*), `outDateTime` (Any*) |

### Parameters

- **`inDateTime`** (`Any*`)
- **`timeToAdd`** (`Any*`)
- **`outDateTime`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
AddTimeToDateTime(inDateTime, timeToAdd, outDateTime)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x28EEACE9B43D9597, inDateTime, timeToAdd, outDateTime)
```


---

## _GET_POSIX_TIME_STRUCT

**Description:** Same as GET_POSIX_TIME except that it takes a single pointer to a struct.

| Property | Value |
|----------|-------|
| Native Name | `_GET_POSIX_TIME_STRUCT` |
| Hash | `0x86A68E84E5884951` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `outTime` (Any*) |

### Parameters

- **`outTime`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
GetPosixTimeStruct(outTime)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x86A68E84E5884951, outTime)
```


---

## _GET_SECONDS_SINCE_BASE_YEAR

**Description:** Base year is 1898.

| Property | Value |
|----------|-------|
| Native Name | `_GET_SECONDS_SINCE_BASE_YEAR` |
| Hash | `0x78FD8BE812E436B2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetSecondsSinceBaseYear()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x78FD8BE812E436B2, )
```


---

## _PAUSE_CLOCK_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_PAUSE_CLOCK_THIS_FRAME` |
| Hash | `0x568D998A9FF96774` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PauseClockThisFrame(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x568D998A9FF96774, toggle)
```


---

## _SET_MILLISECONDS_PER_GAME_MINUTE

| Property | Value |
|----------|-------|
| Native Name | `_SET_MILLISECONDS_PER_GAME_MINUTE` |
| Hash | `0x04EEDB3848DACF68` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ms` (int) |

### Parameters

- **`ms`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetMillisecondsPerGameMinute(ms)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x04EEDB3848DACF68, ms)
```


---

*End of CLOCK natives*
