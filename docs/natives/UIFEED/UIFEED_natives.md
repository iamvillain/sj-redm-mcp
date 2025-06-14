# UIFEED Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** UIFEED  
**Natives in this file:** 27  
**Generated from:** RDR3natives JSON data

---

## UI_FEED_CLEAR_CHANNEL

**Description:** feedChannel: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eUIFeedChannel

| Property | Value |
|----------|-------|
| Native Name | `UI_FEED_CLEAR_CHANNEL` |
| Hash | `0xDD1232B332CBB9E7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `feedChannel` (int), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`feedChannel`** (`int`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UiFeedClearChannel(feedChannel, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDD1232B332CBB9E7, feedChannel, p1, p2)
```


---

## UI_FEED_GET_CURRENT_MESSAGE

**Description:** feedChannel: see UI_FEED_CLEAR_CHANNEL
Returns feedMessage

| Property | Value |
|----------|-------|
| Native Name | `UI_FEED_GET_CURRENT_MESSAGE` |
| Hash | `0xC17F69E1418CD11F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `feedChannel` (int) |

### Parameters

- **`feedChannel`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedGetCurrentMessage(feedChannel)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC17F69E1418CD11F, feedChannel)
```


---

## _0x0FD07141AD048AAE

**Description:** Only used in R* SP Script beat_animal_attack
Returns feedMessage

| Property | Value |
|----------|-------|
| Native Name | `_0x0FD07141AD048AAE` |
| Hash | `0x0FD07141AD048AAE` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0FD07141AD048AAE(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0FD07141AD048AAE, p0, p1)
```


---

## _0x18D6869FBFFEC0F8

**Description:** Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0x18D6869FBFFEC0F8` |
| Hash | `0x18D6869FBFFEC0F8` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x18D6869FBFFEC0F8(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x18D6869FBFFEC0F8, p0, p1, p2, p3)
```


---

## _0x4E88A65968A55C78

**Description:** Returns feedMessage

| Property | Value |
|----------|-------|
| Native Name | `_0x4E88A65968A55C78` |
| Hash | `0x4E88A65968A55C78` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x4E88A65968A55C78(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4E88A65968A55C78, p0, p1)
```


---

## _0x6D85126F6CCF02C9

| Property | Value |
|----------|-------|
| Native Name | `_0x6D85126F6CCF02C9` |
| Hash | `0x6D85126F6CCF02C9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `feedChannel` (int), `p1` (int), `p2` (BOOL) |

### Parameters

- **`feedChannel`** (`int`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x6D85126F6CCF02C9(feedChannel, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D85126F6CCF02C9, feedChannel, p1, p2)
```


---

## _0xAFF5BE9BA496CE40

| Property | Value |
|----------|-------|
| Native Name | `_0xAFF5BE9BA496CE40` |
| Hash | `0xAFF5BE9BA496CE40` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL), `p3` (BOOL), `collectableCategory` (Hash) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`collectableCategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0xAFF5BE9BA496CE40(p0, p1, p2, p3, collectableCategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAFF5BE9BA496CE40, p0, p1, p2, p3, collectableCategory)
```


---

## _0xB7223B91CD6B7E07

| Property | Value |
|----------|-------|
| Native Name | `_0xB7223B91CD6B7E07` |
| Hash | `0xB7223B91CD6B7E07` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `feedChannel` (int) |

### Parameters

- **`feedChannel`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB7223B91CD6B7E07(feedChannel)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB7223B91CD6B7E07, feedChannel)
```


---

## _UI_FEED_CLEAR_ALL_CHANNELS

**Description:** Hides Toast Notifications

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_CLEAR_ALL_CHANNELS` |
| Hash | `0x6035E8FBCA32AC5E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
UiFeedClearAllChannels()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6035E8FBCA32AC5E, )
```


---

## _UI_FEED_CLEAR_HELP_TEXT_FEED

**Description:** Clears help text

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_CLEAR_HELP_TEXT_FEED` |
| Hash | `0x2F901291EF177B02` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `feedMessage` (int), `p1` (BOOL) |

### Parameters

- **`feedMessage`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UiFeedClearHelpTextFeed(feedMessage, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2F901291EF177B02, feedMessage, p1)
```


---

## _UI_FEED_GET_MESSAGE_STATE

**Description:** Returns messageState, see https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eUIMessageState

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_GET_MESSAGE_STATE` |
| Hash | `0x59FA676177DBE4C9` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `feedMessage` (int) |

### Parameters

- **`feedMessage`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedGetMessageState(feedMessage)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x59FA676177DBE4C9, feedMessage)
```


---

## _UI_FEED_POST_FEED_TICKER

**Description:** Display text on right of the screen, Example : https://pastebin.com/n1YmNe25

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_FEED_TICKER` |
| Hash | `0xB2920B9760F0F36B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostFeedTicker(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB2920B9760F0F36B, p0, p1, p2)
```


---

## _UI_FEED_POST_GAME_UPDATE_SHARD

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_GAME_UPDATE_SHARD` |
| Hash | `0x8D1249BD28791878` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostGameUpdateShard(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8D1249BD28791878, p0, p1, p2)
```


---

## _UI_FEED_POST_HELP_TEXT

**Description:** Example : https://pastebin.com/GvdBp8Dh

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_HELP_TEXT` |
| Hash | `0x049D5C615BD38BAD` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostHelpText(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x049D5C615BD38BAD, p0, p1, p2)
```


---

## _UI_FEED_POST_LOCATION_SHARD

**Description:** Example : https://pastebin.com/h1YzycuR

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_LOCATION_SHARD` |
| Hash | `0xD05590C1AB38F068` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `duration` (Any*), `data` (Any*), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`duration`** (`Any*`)
- **`data`** (`Any*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostLocationShard(duration, data, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD05590C1AB38F068, duration, data, p2, p3)
```


---

## _UI_FEED_POST_MISSION_NAME

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_MISSION_NAME` |
| Hash | `0x2024F4F333095FB1` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostMissionName(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2024F4F333095FB1, p0, p1, p2)
```


---

## _UI_FEED_POST_OBJECTIVE

**Description:** Example : https://pastebin.com/13tuRa63

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_OBJECTIVE` |
| Hash | `0xCEDBF17EFCC0E4A4` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostObjective(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCEDBF17EFCC0E4A4, p0, p1, p2)
```


---

## _UI_FEED_POST_ONE_TEXT_SHARD

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_ONE_TEXT_SHARD` |
| Hash | `0x860DDFE97CC94DF0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostOneTextShard(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x860DDFE97CC94DF0, p0, p1, p2)
```


---

## _UI_FEED_POST_RANKUP_TOAST

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_RANKUP_TOAST` |
| Hash | `0x3F9FDDBA79117C69` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (int), `p3` (int) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostRankupToast(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3F9FDDBA79117C69, p0, p1, p2, p3)
```


---

## _UI_FEED_POST_RETICLE_MESSAGE

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_RETICLE_MESSAGE` |
| Hash | `0x893128CDB4B81FBB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostReticleMessage(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x893128CDB4B81FBB, p0, p1, p2)
```


---

## _UI_FEED_POST_SAMPLE_NOTIFICATION

**Description:** Example : https://pastebin.com/kAtEMQTD

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_SAMPLE_NOTIFICATION` |
| Hash | `0xC927890AA64E9661` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (int), `p3` (int) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostSampleNotification(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC927890AA64E9661, p0, p1, p2, p3)
```


---

## _UI_FEED_POST_SAMPLE_TOAST

**Description:** Example : https://pastebin.com/YZMBkAmW

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_SAMPLE_TOAST` |
| Hash | `0x26E87218390E6729` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostSampleToast(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x26E87218390E6729, p0, p1, p2, p3)
```


---

## _UI_FEED_POST_SAMPLE_TOAST_RIGHT

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_SAMPLE_TOAST_RIGHT` |
| Hash | `0xB249EBCB30DD88E0` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostSampleToastRight(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB249EBCB30DD88E0, p0, p1, p2)
```


---

## _UI_FEED_POST_SAMPLE_TOAST_WITH_APP_LINK

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_SAMPLE_TOAST_WITH_APP_LINK` |
| Hash | `0x38838A646FB30AAE` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostSampleToastWithAppLink(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x38838A646FB30AAE, p0, p1, p2, p3, p4)
```


---

## _UI_FEED_POST_THREE_TEXT_SHARD

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_THREE_TEXT_SHARD` |
| Hash | `0x02BCC0FE9EBA3529` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostThreeTextShard(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x02BCC0FE9EBA3529, p0, p1, p2, p3, p4)
```


---

## _UI_FEED_POST_TWO_TEXT_SHARD

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_TWO_TEXT_SHARD` |
| Hash | `0xA6F4216AB10EB08E` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL), `p3` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostTwoTextShard(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA6F4216AB10EB08E, p0, p1, p2, p3)
```


---

## _UI_FEED_POST_VOICE_CHAT_FEED

| Property | Value |
|----------|-------|
| Native Name | `_UI_FEED_POST_VOICE_CHAT_FEED` |
| Hash | `0xC48152BC6B3E821C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*), `p2` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UiFeedPostVoiceChatFeed(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC48152BC6B3E821C, p0, p1, p2)
```


---

*End of UIFEED natives*
