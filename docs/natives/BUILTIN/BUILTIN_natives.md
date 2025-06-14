# BUILTIN Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** BUILTIN  
**Natives in this file:** 22  
**Generated from:** RDR3natives JSON data

---

## CEIL

**Description:** Rounds a float value up to the next whole number

| Property | Value |
|----------|-------|
| Native Name | `CEIL` |
| Hash | `0x11E019C8F43ACC8A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `value` (float) |

### Parameters

- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Ceil(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x11E019C8F43ACC8A, value)
```


---

## COS

| Property | Value |
|----------|-------|
| Native Name | `COS` |
| Hash | `0xD0FFB162F40A139C` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `value` (float) |

### Parameters

- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Cos(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD0FFB162F40A139C, value)
```


---

## FLOOR

**Description:** Rounds a float value down to the next whole number

| Property | Value |
|----------|-------|
| Native Name | `FLOOR` |
| Hash | `0xF34EE736CF047844` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `value` (float) |

### Parameters

- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Floor(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF34EE736CF047844, value)
```


---

## LOG10

**Description:** Old name: _LOG10

| Property | Value |
|----------|-------|
| Native Name | `LOG10` |
| Hash | `0xE816E655DE37FE20` |
| Return Type | `float` |
| Build | `1232` |
| Parameters | `value` (float) |

### Parameters

- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Log10(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE816E655DE37FE20, value)
```


---

## POW

| Property | Value |
|----------|-------|
| Native Name | `POW` |
| Hash | `0xE3621CC40F31FE2E` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `base` (float), `exponent` (float) |

### Parameters

- **`base`** (`float`)
- **`exponent`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Pow(base, exponent)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE3621CC40F31FE2E, base, exponent)
```


---

## ROUND

| Property | Value |
|----------|-------|
| Native Name | `ROUND` |
| Hash | `0xF2DB717A73826179` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `value` (float) |

### Parameters

- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Round(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF2DB717A73826179, value)
```


---

## SETTIMERA

| Property | Value |
|----------|-------|
| Native Name | `SETTIMERA` |
| Hash | `0xC1B1E9A034A63A62` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `value` (int) |

### Parameters

- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
Settimera(value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC1B1E9A034A63A62, value)
```


---

## SETTIMERB

| Property | Value |
|----------|-------|
| Native Name | `SETTIMERB` |
| Hash | `0x5AE11BC36633DE4E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `value` (int) |

### Parameters

- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
Settimerb(value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5AE11BC36633DE4E, value)
```


---

## SET_THIS_THREAD_PRIORITY

**Description:** THREAD_PRIO_HIGHEST = 0
THREAD_PRIO_NORMAL = 1
THREAD_PRIO_LOWEST = 2
THREAD_PRIO_MANUAL_UPDATE = 100

| Property | Value |
|----------|-------|
| Native Name | `SET_THIS_THREAD_PRIORITY` |
| Hash | `0x42B65DEEF2EDF2A1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `priority` (int) |

### Parameters

- **`priority`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetThisThreadPriority(priority)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x42B65DEEF2EDF2A1, priority)
```


---

## SHIFT_LEFT

| Property | Value |
|----------|-------|
| Native Name | `SHIFT_LEFT` |
| Hash | `0xEDD95A39E5544DE8` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `value` (int), `bitShift` (int) |

### Parameters

- **`value`** (`int`)
- **`bitShift`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ShiftLeft(value, bitShift)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEDD95A39E5544DE8, value, bitShift)
```


---

## SHIFT_RIGHT

| Property | Value |
|----------|-------|
| Native Name | `SHIFT_RIGHT` |
| Hash | `0x97EF1E5BCE9DC075` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `value` (int), `bitShift` (int) |

### Parameters

- **`value`** (`int`)
- **`bitShift`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ShiftRight(value, bitShift)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x97EF1E5BCE9DC075, value, bitShift)
```


---

## SIN

| Property | Value |
|----------|-------|
| Native Name | `SIN` |
| Hash | `0x0BADBFA3B172435F` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `value` (float) |

### Parameters

- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Sin(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0BADBFA3B172435F, value)
```


---

## SQRT

| Property | Value |
|----------|-------|
| Native Name | `SQRT` |
| Hash | `0x71D93B57D07F9804` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `value` (float) |

### Parameters

- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Sqrt(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x71D93B57D07F9804, value)
```


---

## TIMERA

**Description:** Counts up. Every 1000 is 1 real-time second. Use SETTIMERA(int value) to set the timer (e.g.: SETTIMERA(0)).

| Property | Value |
|----------|-------|
| Native Name | `TIMERA` |
| Hash | `0x83666F9FB8FEBD4B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = Timera()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x83666F9FB8FEBD4B, )
```


---

## TIMERB

| Property | Value |
|----------|-------|
| Native Name | `TIMERB` |
| Hash | `0xC9D9444186B5A374` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = Timerb()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC9D9444186B5A374, )
```


---

## TIMESTEP

**Description:** Gets the current frame time.

| Property | Value |
|----------|-------|
| Native Name | `TIMESTEP` |
| Hash | `0x0000000050597EE2` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = Timestep()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0000000050597EE2, )
```


---

## TO_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `TO_FLOAT` |
| Hash | `0xBBDA792448DB5A89` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `value` (int) |

### Parameters

- **`value`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ToFloat(value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBBDA792448DB5A89, value)
```


---

## VDIST

**Description:** Calculates distance between vectors.
The value returned will be in meters.

| Property | Value |
|----------|-------|
| Native Name | `VDIST` |
| Hash | `0x2A488C176D52CCA5` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Vdist(x1, y1, z1, x2, y2, z2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2A488C176D52CCA5, x1, y1, z1, x2, y2, z2)
```


---

## VDIST2

**Description:** Calculates distance between vectors but does not perform Sqrt operations. (Its way faster)
The value returned will be in RAGE units.

| Property | Value |
|----------|-------|
| Native Name | `VDIST2` |
| Hash | `0xB7A628320EFF8E47` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `x1` (float), `y1` (float), `z1` (float), `x2` (float), `y2` (float), `z2` (float) |

### Parameters

- **`x1`** (`float`)
- **`y1`** (`float`)
- **`z1`** (`float`)
- **`x2`** (`float`)
- **`y2`** (`float`)
- **`z2`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Vdist2(x1, y1, z1, x2, y2, z2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB7A628320EFF8E47, x1, y1, z1, x2, y2, z2)
```


---

## VMAG

**Description:** Calculates the magnitude of a vector.

| Property | Value |
|----------|-------|
| Native Name | `VMAG` |
| Hash | `0x652D2EEEF1D3E62C` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Vmag(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x652D2EEEF1D3E62C, x, y, z)
```


---

## VMAG2

**Description:** Calculates the magnitude of a vector but does not perform Sqrt operations. (Its way faster)

| Property | Value |
|----------|-------|
| Native Name | `VMAG2` |
| Hash | `0xA8CEACB4F35AE058` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = Vmag2(x, y, z)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA8CEACB4F35AE058, x, y, z)
```


---

## WAIT

| Property | Value |
|----------|-------|
| Native Name | `WAIT` |
| Hash | `0x4EDE34FBADD967A6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ms` (int) |

### Parameters

- **`ms`** (`int`)

### Usage

**Lua (Direct):**
```lua
Wait(ms)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4EDE34FBADD967A6, ms)
```


---

*End of BUILTIN natives*
