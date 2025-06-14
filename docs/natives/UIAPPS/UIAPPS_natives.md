# UIAPPS Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** UIAPPS  
**Natives in this file:** 19  
**Generated from:** RDR3natives JSON data

---

## CAN_LAUNCH_UIAPP_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `CAN_LAUNCH_UIAPP_BY_HASH` |
| Hash | `0xE555EC27D65EDE80` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `appNameHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CanLaunchUiappByHash(appNameHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE555EC27D65EDE80, appNameHash)
```


---

## CAN_LAUNCH_UIAPP_BY_HASH_WITH_ENTRY

| Property | Value |
|----------|-------|
| Native Name | `CAN_LAUNCH_UIAPP_BY_HASH_WITH_ENTRY` |
| Hash | `0x16F47D434B6086BF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `appNameHash` (Hash), `entryHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)
- **`entryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CanLaunchUiappByHashWithEntry(appNameHash, entryHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x16F47D434B6086BF, appNameHash, entryHash)
```


---

## IS_ANY_UIAPP_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_ANY_UIAPP_ACTIVE` |
| Hash | `0xAC959AB99AAF3D9F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsAnyUiappActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAC959AB99AAF3D9F, )
```


---

## IS_ANY_UIAPP_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `IS_ANY_UIAPP_RUNNING` |
| Hash | `0xDB30BEC7A7A5CBD3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = IsAnyUiappRunning()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDB30BEC7A7A5CBD3, )
```


---

## IS_UIAPP_ACTIVE_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `IS_UIAPP_ACTIVE_BY_HASH` |
| Hash | `0x25B7A0206BDFAC76` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `appNameHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsUiappActiveByHash(appNameHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x25B7A0206BDFAC76, appNameHash)
```


---

## IS_UIAPP_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `IS_UIAPP_RUNNING` |
| Hash | `0xDE4A9B35D028979F` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `appName` (char*) |

### Parameters

- **`appName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsUiappRunning(appName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDE4A9B35D028979F, appName)
```


---

## IS_UIAPP_RUNNING_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `IS_UIAPP_RUNNING_BY_HASH` |
| Hash | `0x4E511D093A86AD49` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `appNameHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsUiappRunningByHash(appNameHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4E511D093A86AD49, appNameHash)
```


---

## IS_UIAPP_TRANSITIONING_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `IS_UIAPP_TRANSITIONING_BY_HASH` |
| Hash | `0x42095B886D30DE66` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `appNameHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsUiappTransitioningByHash(appNameHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x42095B886D30DE66, appNameHash)
```


---

## LAUNCH_UIAPP_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `LAUNCH_UIAPP_BY_HASH` |
| Hash | `0xC8FC7F4E4CF4F581` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `appNameHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = LaunchUiappByHash(appNameHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC8FC7F4E4CF4F581, appNameHash)
```


---

## LAUNCH_UIAPP_BY_HASH_WITH_ENTRY

| Property | Value |
|----------|-------|
| Native Name | `LAUNCH_UIAPP_BY_HASH_WITH_ENTRY` |
| Hash | `0xC1BCF31E975B3195` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `appNameHash` (Hash), `entryHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)
- **`entryHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = LaunchUiappByHashWithEntry(appNameHash, entryHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC1BCF31E975B3195, appNameHash, entryHash)
```


---

## LAUNCH_UIAPP_WITH_ENTRY

| Property | Value |
|----------|-------|
| Native Name | `LAUNCH_UIAPP_WITH_ENTRY` |
| Hash | `0x7B2027BAC5C8EC89` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `appName` (char*), `entry` (char*) |

### Parameters

- **`appName`** (`char*`)
- **`entry`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = LaunchUiappWithEntry(appName, entry)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7B2027BAC5C8EC89, appName, entry)
```


---

## REQUEST_UIAPP_TRANSITION_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_UIAPP_TRANSITION_BY_HASH` |
| Hash | `0x7689CD255655BFD7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `appNameHash` (Hash), `transitionHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)
- **`transitionHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = RequestUiappTransitionByHash(appNameHash, transitionHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7689CD255655BFD7, appNameHash, transitionHash)
```


---

## _CLOSE_ALL_UIAPPS

| Property | Value |
|----------|-------|
| Native Name | `_CLOSE_ALL_UIAPPS` |
| Hash | `0xAD7B70F7230C5A12` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
CloseAllUiapps()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAD7B70F7230C5A12, )
```


---

## _CLOSE_ALL_UIAPPS_IMMEDIATE

| Property | Value |
|----------|-------|
| Native Name | `_CLOSE_ALL_UIAPPS_IMMEDIATE` |
| Hash | `0x12769EEB8DBD7A7B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
CloseAllUiappsImmediate()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x12769EEB8DBD7A7B, )
```


---

## _CLOSE_UIAPP

| Property | Value |
|----------|-------|
| Native Name | `_CLOSE_UIAPP` |
| Hash | `0x818C6CA9B659E8EC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `appName` (char*) |

### Parameters

- **`appName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
CloseUiapp(appName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x818C6CA9B659E8EC, appName)
```


---

## _CLOSE_UIAPP_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_CLOSE_UIAPP_BY_HASH` |
| Hash | `0x2FF10C9C3F92277E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `appNameHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
CloseUiappByHash(appNameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2FF10C9C3F92277E, appNameHash)
```


### Examples

**Example 1 (lua):**
```lua
if IsUiappActiveByHash(`abilities`) then
   CloseUiappByHash(`abilities`)
end
```


---

## _CLOSE_UIAPP_BY_HASH_IMMEDIATE

| Property | Value |
|----------|-------|
| Native Name | `_CLOSE_UIAPP_BY_HASH_IMMEDIATE` |
| Hash | `0x04428420A248A354` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `appNameHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
CloseUiappByHashImmediate(appNameHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x04428420A248A354, appNameHash)
```


---

## _CLOSE_UIAPP_IMMEDIATE

| Property | Value |
|----------|-------|
| Native Name | `_CLOSE_UIAPP_IMMEDIATE` |
| Hash | `0x3015635426D1B17C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `appName` (char*) |

### Parameters

- **`appName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
CloseUiappImmediate(appName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3015635426D1B17C, appName)
```


---

## _GET_UIAPP_CURRENT_ACTIVITY_BY_HASH

| Property | Value |
|----------|-------|
| Native Name | `_GET_UIAPP_CURRENT_ACTIVITY_BY_HASH` |
| Hash | `0x96FD694FE5BE55DC` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `appNameHash` (Hash) |

### Parameters

- **`appNameHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetUiappCurrentActivityByHash(appNameHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x96FD694FE5BE55DC, appNameHash)
```


---

*End of UIAPPS natives*
