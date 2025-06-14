# SAVE Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** SAVE  
**Natives in this file:** 24  
**Generated from:** RDR3natives JSON data

---

## SAVEGAME_IS_SAVE_PENDING

| Property | Value |
|----------|-------|
| Native Name | `SAVEGAME_IS_SAVE_PENDING` |
| Hash | `0x3CF46F55C6585590` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = SavegameIsSavePending()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3CF46F55C6585590, )
```


---

## SAVEGAME_SAVE_MP

**Description:** See SAVEGAME_SAVE_SP

| Property | Value |
|----------|-------|
| Native Name | `SAVEGAME_SAVE_MP` |
| Hash | `0x1840F3B30ED0105F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `savegameType` (Hash) |

### Parameters

- **`savegameType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = SavegameSaveMp(savegameType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1840F3B30ED0105F, savegameType)
```


---

## SAVEGAME_SAVE_SP

**Description:** enum eSavegameType : Hash
{
	SAVEGAMETYPE_AMBIENT = 0x3CA4E1F8,
	SAVEGAMETYPE_DEFAULT = 0xCB6ED080,
	SAVEGAMETYPE_DELETE_CHAR = 0xCD35F947,
	SAVEGAMETYPE_END_CREATE_NEWCHAR = 0x4C50A3CE,
	SAVEGAMETYPE_END_MATCH = 0xE470ED50,
	SAVEGAMETYPE_END_MISSION = 0x9A444E54,
	SAVEGAMETYPE_END_SESSION = 0x6D23956C,
	SAVEGAMETYPE_END_SHOPPING = 0xA311A6C4,
	SAVEGAMETYPE_RANKUP = 0xE25F8017,
	SAVEGAMETYPE_SCRIPT_MP_GLOBALS = 0xAFF30AD4,
	SAVEGAMETYPE_SP_AUTOSAVE = 0xF4AE69EC,
	SAVEGAMETYPE_SP_DEBUG = 0x6A8122FD,
	SAVEGAMETYPE_SP_PROPERTY = 0xAE0AB38E
};

| Property | Value |
|----------|-------|
| Native Name | `SAVEGAME_SAVE_SP` |
| Hash | `0x62C9EB51656D68CE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `savegameType` (Hash) |

### Parameters

- **`savegameType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = SavegameSaveSp(savegameType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x62C9EB51656D68CE, savegameType)
```


---

## _SAVEGAME_HAS_SAVE_FAILED

| Property | Value |
|----------|-------|
| Native Name | `_SAVEGAME_HAS_SAVE_FAILED` |
| Hash | `0x1431540BCA1A1BD2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = SavegameHasSaveFailed()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1431540BCA1A1BD2, )
```


---

## _0x443174C20B8B9E7F

| Property | Value |
|----------|-------|
| Native Name | `_0x443174C20B8B9E7F` |
| Hash | `0x443174C20B8B9E7F` |
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
_0x443174C20B8B9E7F(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x443174C20B8B9E7F, p0, p1, p2)
```


---

## _0x4FB5869E2B37FC00

| Property | Value |
|----------|-------|
| Native Name | `_0x4FB5869E2B37FC00` |
| Hash | `0x4FB5869E2B37FC00` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x4FB5869E2B37FC00()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4FB5869E2B37FC00, )
```


---

## _0x81F4E92BE3958364

| Property | Value |
|----------|-------|
| Native Name | `_0x81F4E92BE3958364` |
| Hash | `0x81F4E92BE3958364` |
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
_0x81F4E92BE3958364(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x81F4E92BE3958364, p0, p1, p2)
```


---

## _0x8E8FFB9E4AD051D2

| Property | Value |
|----------|-------|
| Native Name | `_0x8E8FFB9E4AD051D2` |
| Hash | `0x8E8FFB9E4AD051D2` |
| Return Type | `void` |
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
_0x8E8FFB9E4AD051D2(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8E8FFB9E4AD051D2, p0, p1, p2, p3)
```


---

## _0x9BB83C4DD7BE0802

| Property | Value |
|----------|-------|
| Native Name | `_0x9BB83C4DD7BE0802` |
| Hash | `0x9BB83C4DD7BE0802` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x9BB83C4DD7BE0802(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9BB83C4DD7BE0802, p0, p1, p2, p3, p4)
```


---

## _0xA7ECEBAFBAF997A5

| Property | Value |
|----------|-------|
| Native Name | `_0xA7ECEBAFBAF997A5` |
| Hash | `0xA7ECEBAFBAF997A5` |
| Return Type | `Any` |
| Build | `1436` |
| Parameters | `savegameType` (Hash) |

### Parameters

- **`savegameType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0xA7ECEBAFBAF997A5(savegameType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA7ECEBAFBAF997A5, savegameType)
```


---

## _0xA844FEB5C22C2C74

| Property | Value |
|----------|-------|
| Native Name | `_0xA844FEB5C22C2C74` |
| Hash | `0xA844FEB5C22C2C74` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xA844FEB5C22C2C74()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA844FEB5C22C2C74, )
```


---

## _0xB00CE33465B5406D

| Property | Value |
|----------|-------|
| Native Name | `_0xB00CE33465B5406D` |
| Hash | `0xB00CE33465B5406D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB00CE33465B5406D(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB00CE33465B5406D, p0, p1)
```


---

## _0xC0ABF784590798A9

| Property | Value |
|----------|-------|
| Native Name | `_0xC0ABF784590798A9` |
| Hash | `0xC0ABF784590798A9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0xC0ABF784590798A9(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC0ABF784590798A9, p0)
```


---

## _0xE0B45E983BFC0768

| Property | Value |
|----------|-------|
| Native Name | `_0xE0B45E983BFC0768` |
| Hash | `0xE0B45E983BFC0768` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xE0B45E983BFC0768()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0B45E983BFC0768, )
```


---

## _0xE8346E62FD7FB962

| Property | Value |
|----------|-------|
| Native Name | `_0xE8346E62FD7FB962` |
| Hash | `0xE8346E62FD7FB962` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xE8346E62FD7FB962()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE8346E62FD7FB962, )
```


---

## _0xED4B0C1057892B2E

| Property | Value |
|----------|-------|
| Native Name | `_0xED4B0C1057892B2E` |
| Hash | `0xED4B0C1057892B2E` |
| Return Type | `void` |
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
_0xED4B0C1057892B2E(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xED4B0C1057892B2E, p0, p1, p2, p3)
```


---

## _SAVEGAME_GET_BOOL

**Description:** Does the exact same as 0x529B9CCD0972AF4E

| Property | Value |
|----------|-------|
| Native Name | `_SAVEGAME_GET_BOOL` |
| Hash | `0xBB7F4273C186BC4B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `variableName` (char*) |

### Parameters

- **`p0`** (`Any*`)
- **`variableName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SavegameGetBool(p0, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB7F4273C186BC4B, p0, variableName)
```


---

## _SAVEGAME_GET_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `_SAVEGAME_GET_FLOAT` |
| Hash | `0x35DEFECAE36D4FAE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `variableName` (const char*) |

### Parameters

- **`p0`** (`Any*`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SavegameGetFloat(p0, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x35DEFECAE36D4FAE, p0, variableName)
```


---

## _SAVEGAME_GET_INT

| Property | Value |
|----------|-------|
| Native Name | `_SAVEGAME_GET_INT` |
| Hash | `0x529B9CCD0972AF4E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `variableName` (const char*) |

### Parameters

- **`p0`** (`Any*`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SavegameGetInt(p0, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x529B9CCD0972AF4E, p0, variableName)
```


---

## _SAVEGAME_GET_INT_2

**Description:** Does the exact same as 0x529B9CCD0972AF4E
Commonly used with time/timestamps

| Property | Value |
|----------|-------|
| Native Name | `_SAVEGAME_GET_INT_2` |
| Hash | `0x529B9CCD0972AF4D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `variableName` (const char*) |

### Parameters

- **`p0`** (`Any*`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SavegameGetInt2(p0, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x529B9CCD0972AF4D, p0, variableName)
```


---

## _SAVEGAME_GET_INT_3

**Description:** Does the exact same as 0x529B9CCD0972AF4E
Commonly used with enums and flags

| Property | Value |
|----------|-------|
| Native Name | `_SAVEGAME_GET_INT_3` |
| Hash | `0xB25B5A375BE5BE26` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `variableName` (const char*) |

### Parameters

- **`p0`** (`Any*`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SavegameGetInt3(p0, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB25B5A375BE5BE26, p0, variableName)
```


---

## _SAVEGAME_GET_TEXT_LABEL_23

| Property | Value |
|----------|-------|
| Native Name | `_SAVEGAME_GET_TEXT_LABEL_23` |
| Hash | `0x5A10D6506B2F2C63` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `variableName` (const char*) |

### Parameters

- **`p0`** (`Any*`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SavegameGetTextLabel23(p0, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5A10D6506B2F2C63, p0, variableName)
```


---

## _SAVEGAME_GET_TEXT_LABEL_31

| Property | Value |
|----------|-------|
| Native Name | `_SAVEGAME_GET_TEXT_LABEL_31` |
| Hash | `0x4845E7E7643A908C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `variableName` (const char*) |

### Parameters

- **`p0`** (`Any*`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SavegameGetTextLabel31(p0, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4845E7E7643A908C, p0, variableName)
```


---

## _SAVEGAME_GET_TEXT_LABEL_63

| Property | Value |
|----------|-------|
| Native Name | `_SAVEGAME_GET_TEXT_LABEL_63` |
| Hash | `0x186608A2AC6F9E88` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `variableName` (const char*) |

### Parameters

- **`p0`** (`Any*`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SavegameGetTextLabel63(p0, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x186608A2AC6F9E88, p0, variableName)
```


---

*End of SAVE natives*
