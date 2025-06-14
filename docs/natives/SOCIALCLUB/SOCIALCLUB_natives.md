# SOCIALCLUB Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** SOCIALCLUB  
**Natives in this file:** 33  
**Generated from:** RDR3natives JSON data

---

## SC_COMMUNITY_EVENT_GET_DISPLAY_NAME

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_DISPLAY_NAME` |
| Hash | `0x89D9BDE7334B110F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (char*) |

### Parameters

- **`p0`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetDisplayName(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x89D9BDE7334B110F, p0)
```


---

## SC_COMMUNITY_EVENT_GET_DISPLAY_NAME_BY_ID

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_DISPLAY_NAME_BY_ID` |
| Hash | `0x11EA52CAD1B55910` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (char*) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetDisplayNameById(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x11EA52CAD1B55910, p0, p1)
```


---

## SC_COMMUNITY_EVENT_GET_DISPLAY_NAME_FOR_TYPE

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_DISPLAY_NAME_FOR_TYPE` |
| Hash | `0x85EA0BEC7B1F7622` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (char*), `p1` (const char*) |

### Parameters

- **`p0`** (`char*`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetDisplayNameForType(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x85EA0BEC7B1F7622, p0, p1)
```


---

## SC_COMMUNITY_EVENT_GET_EVENT_ID

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EVENT_ID` |
| Hash | `0xD635DF6BAA5A6017` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetEventId()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD635DF6BAA5A6017, )
```


---

## SC_COMMUNITY_EVENT_GET_EVENT_ID_FOR_TYPE

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EVENT_ID_FOR_TYPE` |
| Hash | `0x03C03ABBABBEF752` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetEventIdForType(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x03C03ABBABBEF752, p0)
```


---

## SC_COMMUNITY_EVENT_GET_EXTRA_DATA_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EXTRA_DATA_FLOAT` |
| Hash | `0x060BBAD634C2B44B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (float*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetExtraDataFloat(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x060BBAD634C2B44B, p0, p1)
```


---

## SC_COMMUNITY_EVENT_GET_EXTRA_DATA_FLOAT_BY_ID

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EXTRA_DATA_FLOAT_BY_ID` |
| Hash | `0x91C9E2A0F9DD6DD4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (const char*), `p2` (float*) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`const char*`)
- **`p2`** (`float*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetExtraDataFloatById(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x91C9E2A0F9DD6DD4, p0, p1, p2)
```


---

## SC_COMMUNITY_EVENT_GET_EXTRA_DATA_FLOAT_FOR_TYPE

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EXTRA_DATA_FLOAT_FOR_TYPE` |
| Hash | `0x1BDB56DB258F052D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (float*), `p2` (const char*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`float*`)
- **`p2`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetExtraDataFloatForType(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1BDB56DB258F052D, p0, p1, p2)
```


---

## SC_COMMUNITY_EVENT_GET_EXTRA_DATA_INT

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EXTRA_DATA_INT` |
| Hash | `0xB4411D4D6B81438E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (int*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetExtraDataInt(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB4411D4D6B81438E, p0, p1)
```


---

## SC_COMMUNITY_EVENT_GET_EXTRA_DATA_INT_BY_ID

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EXTRA_DATA_INT_BY_ID` |
| Hash | `0x7C981DE05A7403A0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (const char*), `p2` (int*) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`const char*`)
- **`p2`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetExtraDataIntById(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7C981DE05A7403A0, p0, p1, p2)
```


---

## SC_COMMUNITY_EVENT_GET_EXTRA_DATA_INT_FOR_TYPE

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EXTRA_DATA_INT_FOR_TYPE` |
| Hash | `0x3519CC3525319A96` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (int*), `p2` (const char*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`int*`)
- **`p2`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetExtraDataIntForType(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3519CC3525319A96, p0, p1, p2)
```


---

## SC_COMMUNITY_EVENT_GET_EXTRA_DATA_STRING

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EXTRA_DATA_STRING` |
| Hash | `0x9F6DCD0C939C71E9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (char*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetExtraDataString(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9F6DCD0C939C71E9, p0, p1)
```


---

## SC_COMMUNITY_EVENT_GET_EXTRA_DATA_STRING_BY_ID

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EXTRA_DATA_STRING_BY_ID` |
| Hash | `0x049D2196D9D11184` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int), `p1` (const char*), `p2` (char*) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`const char*`)
- **`p2`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetExtraDataStringById(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x049D2196D9D11184, p0, p1, p2)
```


---

## SC_COMMUNITY_EVENT_GET_EXTRA_DATA_STRING_FOR_TYPE

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_GET_EXTRA_DATA_STRING_FOR_TYPE` |
| Hash | `0xC8FC3B2432E8229D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (char*), `p2` (const char*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`char*`)
- **`p2`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventGetExtraDataStringForType(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC8FC3B2432E8229D, p0, p1, p2)
```


---

## SC_COMMUNITY_EVENT_IS_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_IS_ACTIVE` |
| Hash | `0xCBF743C984695CF3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventIsActive()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCBF743C984695CF3, )
```


---

## SC_COMMUNITY_EVENT_IS_ACTIVE_BY_ID

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_IS_ACTIVE_BY_ID` |
| Hash | `0x62B384FEFDE06817` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventIsActiveById(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x62B384FEFDE06817, p0)
```


---

## SC_COMMUNITY_EVENT_IS_ACTIVE_FOR_TYPE

| Property | Value |
|----------|-------|
| Native Name | `SC_COMMUNITY_EVENT_IS_ACTIVE_FOR_TYPE` |
| Hash | `0x09937EB0CEBC2F9F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScCommunityEventIsActiveForType(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x09937EB0CEBC2F9F, p0)
```


---

## SC_INBOX_GET_MESSAGE_IS_READ_AT_INDEX

| Property | Value |
|----------|-------|
| Native Name | `SC_INBOX_GET_MESSAGE_IS_READ_AT_INDEX` |
| Hash | `0x74CF39E030A382C4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `msgIndex` (int) |

### Parameters

- **`msgIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ScInboxGetMessageIsReadAtIndex(msgIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74CF39E030A382C4, msgIndex)
```


---

## SC_INBOX_GET_MESSAGE_TYPE_AT_INDEX

| Property | Value |
|----------|-------|
| Native Name | `SC_INBOX_GET_MESSAGE_TYPE_AT_INDEX` |
| Hash | `0xFF92537C4DDC1241` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `msgIndex` (int) |

### Parameters

- **`msgIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ScInboxGetMessageTypeAtIndex(msgIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFF92537C4DDC1241, msgIndex)
```


---

## SC_INBOX_GET_TOTAL_NUM_MESSAGES

| Property | Value |
|----------|-------|
| Native Name | `SC_INBOX_GET_TOTAL_NUM_MESSAGES` |
| Hash | `0x8EF0F633280C0663` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = ScInboxGetTotalNumMessages()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8EF0F633280C0663, )
```


---

## SC_INBOX_MESSAGE_GET_DATA_INT

| Property | Value |
|----------|-------|
| Native Name | `SC_INBOX_MESSAGE_GET_DATA_INT` |
| Hash | `0x95BB39C4DA99F348` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int), `context` (char*), `out` (int*) |

### Parameters

- **`p0`** (`int`)
- **`context`** (`char*`)
- **`out`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = ScInboxMessageGetDataInt(p0, context, out)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x95BB39C4DA99F348, p0, context, out)
```


---

## SC_INBOX_MESSAGE_GET_DATA_STRING

| Property | Value |
|----------|-------|
| Native Name | `SC_INBOX_MESSAGE_GET_DATA_STRING` |
| Hash | `0x66F77FD58506FF6B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int), `context` (char*), `out` (char*) |

### Parameters

- **`p0`** (`int`)
- **`context`** (`char*`)
- **`out`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = ScInboxMessageGetDataString(p0, context, out)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x66F77FD58506FF6B, p0, context, out)
```


---

## SC_INBOX_MESSAGE_GET_RAW_TYPE_AT_INDEX

| Property | Value |
|----------|-------|
| Native Name | `SC_INBOX_MESSAGE_GET_RAW_TYPE_AT_INDEX` |
| Hash | `0x176D077685CD83E4` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ScInboxMessageGetRawTypeAtIndex(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x176D077685CD83E4, p0)
```


---

## SC_INBOX_SET_MESSAGE_AS_READ_AT_INDEX

| Property | Value |
|----------|-------|
| Native Name | `SC_INBOX_SET_MESSAGE_AS_READ_AT_INDEX` |
| Hash | `0x63CAC501FFF66DC4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `msgIndex` (int) |

### Parameters

- **`msgIndex`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ScInboxSetMessageAsReadAtIndex(msgIndex)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x63CAC501FFF66DC4, msgIndex)
```


---

## SC_PRESENCE_ATTR_SET_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `SC_PRESENCE_ATTR_SET_FLOAT` |
| Hash | `0xA31DAFCDC33775E9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `attrHash` (Hash), `value` (float) |

### Parameters

- **`attrHash`** (`Hash`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = ScPresenceAttrSetFloat(attrHash, value)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA31DAFCDC33775E9, attrHash, value)
```


---

## SC_PRESENCE_ATTR_SET_FLOAT_EX

| Property | Value |
|----------|-------|
| Native Name | `SC_PRESENCE_ATTR_SET_FLOAT_EX` |
| Hash | `0x00000000467F4CAA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `attrName` (char*), `value` (float), `p2` (BOOL) |

### Parameters

- **`attrName`** (`char*`)
- **`value`** (`float`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = ScPresenceAttrSetFloatEx(attrName, value, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x00000000467F4CAA, attrName, value, p2)
```


---

## SC_PRESENCE_ATTR_SET_INT_EX

| Property | Value |
|----------|-------|
| Native Name | `SC_PRESENCE_ATTR_SET_INT_EX` |
| Hash | `0x0000000085488C49` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `attrName` (char*), `value` (int), `p2` (BOOL) |

### Parameters

- **`attrName`** (`char*`)
- **`value`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = ScPresenceAttrSetIntEx(attrName, value, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0000000085488C49, attrName, value, p2)
```


---

## SC_PRESENCE_ATTR_SET_STRING_EX

| Property | Value |
|----------|-------|
| Native Name | `SC_PRESENCE_ATTR_SET_STRING_EX` |
| Hash | `0x00000000EB2D93B3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `attrName` (const char*), `value` (const char*), `p2` (BOOL) |

### Parameters

- **`attrName`** (`const char*`)
- **`value`** (`const char*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = ScPresenceAttrSetStringEx(attrName, value, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x00000000EB2D93B3, attrName, value, p2)
```


---

## SC_PROFANITY_CHECK_STRING

**Description:** Starts a task to check an entered string for profanity on the ROS/Social Club services.

| Property | Value |
|----------|-------|
| Native Name | `SC_PROFANITY_CHECK_STRING` |
| Hash | `0x9C74AC9D87B3FFF4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `string` (char*), `token` (int*) |

### Parameters

- **`string`** (`char*`)
- **`token`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = ScProfanityCheckString(string, token)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9C74AC9D87B3FFF4, string, token)
```


---

## SC_PROFANITY_GET_CHECK_IS_PENDING

| Property | Value |
|----------|-------|
| Native Name | `SC_PROFANITY_GET_CHECK_IS_PENDING` |
| Hash | `0x3A10BCD0C8AA0B82` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `token` (int) |

### Parameters

- **`token`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ScProfanityGetCheckIsPending(token)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3A10BCD0C8AA0B82, token)
```


---

## SC_PROFANITY_GET_CHECK_IS_VALID

| Property | Value |
|----------|-------|
| Native Name | `SC_PROFANITY_GET_CHECK_IS_VALID` |
| Hash | `0x08C8052AF40C4247` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `token` (int) |

### Parameters

- **`token`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ScProfanityGetCheckIsValid(token)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x08C8052AF40C4247, token)
```


---

## SC_PROFANITY_GET_STRING_PASSED

| Property | Value |
|----------|-------|
| Native Name | `SC_PROFANITY_GET_STRING_PASSED` |
| Hash | `0xF302973BB8BE70E6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `token` (int) |

### Parameters

- **`token`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ScProfanityGetStringPassed(token)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF302973BB8BE70E6, token)
```


---

## SC_PROFANITY_GET_STRING_STATUS

| Property | Value |
|----------|-------|
| Native Name | `SC_PROFANITY_GET_STRING_STATUS` |
| Hash | `0x0CF3BFB99EBBE5B1` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `token` (int) |

### Parameters

- **`token`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ScProfanityGetStringStatus(token)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0CF3BFB99EBBE5B1, token)
```


---

*End of SOCIALCLUB natives*
