# NETWORK Natives - Part 6 of 12

Red Dead Redemption 3 Native Functions Reference

**Namespace:** NETWORK  
**Natives in this file:** 50  
**Total natives in namespace:** 566  
**Generated from:** RDR3natives JSON data

---

## SET_ENTITY_VISIBLE_IN_CUTSCENE

| Property | Value |
|----------|-------|
| Native Name | `SET_ENTITY_VISIBLE_IN_CUTSCENE` |
| Hash | `0xE0031D3C8F36AB82` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (BOOL), `p2` (BOOL), `p3` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetEntityVisibleInCutscene(entity, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE0031D3C8F36AB82, entity, p1, p2, p3)
```


---

## SET_LOCAL_PLAYER_AS_GHOST

**Description:** Old name: _SET_LOCAL_PLAYER_AS_GHOST

| Property | Value |
|----------|-------|
| Native Name | `SET_LOCAL_PLAYER_AS_GHOST` |
| Hash | `0x5FFE9B4144F9712F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetLocalPlayerAsGhost(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5FFE9B4144F9712F, toggle)
```


---

## SET_LOCAL_PLAYER_INVISIBLE_LOCALLY

| Property | Value |
|----------|-------|
| Native Name | `SET_LOCAL_PLAYER_INVISIBLE_LOCALLY` |
| Hash | `0xE5F773C1A1D9D168` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetLocalPlayerInvisibleLocally(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE5F773C1A1D9D168, p0)
```


---

## SET_LOCAL_PLAYER_VISIBLE_IN_CUTSCENE

| Property | Value |
|----------|-------|
| Native Name | `SET_LOCAL_PLAYER_VISIBLE_IN_CUTSCENE` |
| Hash | `0xD1065D68947E7B6E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `local` (BOOL), `remote` (BOOL), `instanceId` (int) |

### Parameters

- **`local`** (`BOOL`)
- **`remote`** (`BOOL`)
- **`instanceId`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetLocalPlayerVisibleInCutscene(local, remote, instanceId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD1065D68947E7B6E, local, remote, instanceId)
```


---

## SET_NETWORK_ID_ALWAYS_EXISTS_FOR_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `SET_NETWORK_ID_ALWAYS_EXISTS_FOR_PLAYER` |
| Hash | `0xA8A024587329F36A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `netId` (int), `player` (Player), `toggle` (BOOL) |

### Parameters

- **`netId`** (`int`)
- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetNetworkIdAlwaysExistsForPlayer(netId, player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA8A024587329F36A, netId, player, toggle)
```


---

## SET_NETWORK_ID_EXISTS_ON_ALL_MACHINES

| Property | Value |
|----------|-------|
| Native Name | `SET_NETWORK_ID_EXISTS_ON_ALL_MACHINES` |
| Hash | `0xE05E81A888FA63C8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `netId` (int), `toggle` (BOOL) |

### Parameters

- **`netId`** (`int`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetNetworkIdExistsOnAllMachines(netId, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE05E81A888FA63C8, netId, toggle)
```


---

## SET_NETWORK_ID_STOP_CLONING

| Property | Value |
|----------|-------|
| Native Name | `SET_NETWORK_ID_STOP_CLONING` |
| Hash | `0x9ED3108D6847760A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `networkId` (int), `bStopCloning` (BOOL) |

### Parameters

- **`networkId`** (`int`)
- **`bStopCloning`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetNetworkIdStopCloning(networkId, bStopCloning)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9ED3108D6847760A, networkId, bStopCloning)
```


---

## SET_NETWORK_ID_VISIBLE_IN_CUTSCENE

| Property | Value |
|----------|-------|
| Native Name | `SET_NETWORK_ID_VISIBLE_IN_CUTSCENE` |
| Hash | `0xA6928482543022B4` |
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
SetNetworkIdVisibleInCutscene(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA6928482543022B4, p0, p1, p2, p3)
```


---

## SET_PLAYER_INVISIBLE_LOCALLY

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_INVISIBLE_LOCALLY` |
| Hash | `0x12B37D54667DB0B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerInvisibleLocally(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x12B37D54667DB0B8, player, toggle)
```


---

## SET_PLAYER_VISIBLE_LOCALLY

| Property | Value |
|----------|-------|
| Native Name | `SET_PLAYER_VISIBLE_LOCALLY` |
| Hash | `0xFAA10F1FAFB11AF2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `toggle` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPlayerVisibleLocally(player, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFAA10F1FAFB11AF2, player, toggle)
```


---

## TEXTURE_DOWNLOAD_GET_NAME

| Property | Value |
|----------|-------|
| Native Name | `TEXTURE_DOWNLOAD_GET_NAME` |
| Hash | `0x3448505B6E35262D` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `textureDownloadId` (int) |

### Parameters

- **`textureDownloadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = TextureDownloadGetName(textureDownloadId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3448505B6E35262D, textureDownloadId)
```


---

## TEXTURE_DOWNLOAD_RELEASE

| Property | Value |
|----------|-------|
| Native Name | `TEXTURE_DOWNLOAD_RELEASE` |
| Hash | `0x487EB90B98E9FB19` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureDownloadId` (int) |

### Parameters

- **`textureDownloadId`** (`int`)

### Usage

**Lua (Direct):**
```lua
TextureDownloadRelease(textureDownloadId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x487EB90B98E9FB19, textureDownloadId)
```


---

## TEXTURE_DOWNLOAD_REQUEST

**Description:** Returns textureDownloadId

| Property | Value |
|----------|-------|
| Native Name | `TEXTURE_DOWNLOAD_REQUEST` |
| Hash | `0x16160DA74A8E74A2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*), `filePath` (const char*), `name` (const char*), `p3` (BOOL) |

### Parameters

- **`gamerHandle`** (`Any*`)
- **`filePath`** (`const char*`)
- **`name`** (`const char*`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = TextureDownloadRequest(gamerHandle, filePath, name, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x16160DA74A8E74A2, gamerHandle, filePath, name, p3)
```


---

## UGC_CLEAR_QUERY_RESULTS

| Property | Value |
|----------|-------|
| Native Name | `UGC_CLEAR_QUERY_RESULTS` |
| Hash | `0xE931354FEA710038` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ugcRequestId` (int) |

### Parameters

- **`ugcRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
UgcClearQueryResults(ugcRequestId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE931354FEA710038, ugcRequestId)
```


---

## UGC_DID_DESCRIPTION_REQUEST_SUCCEED

| Property | Value |
|----------|-------|
| Native Name | `UGC_DID_DESCRIPTION_REQUEST_SUCCEED` |
| Hash | `0x162C23CA83ED0A62` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `description` (Hash) |

### Parameters

- **`description`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UgcDidDescriptionRequestSucceed(description)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x162C23CA83ED0A62, description)
```


---

## UGC_DID_REQUEST_SUCCEED

| Property | Value |
|----------|-------|
| Native Name | `UGC_DID_REQUEST_SUCCEED` |
| Hash | `0x0B6009A90B8495F1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ugcRequestId` (int) |

### Parameters

- **`ugcRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcDidRequestSucceed(ugcRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0B6009A90B8495F1, ugcRequestId)
```


---

## UGC_GET_CACHED_DESCRIPTION

| Property | Value |
|----------|-------|
| Native Name | `UGC_GET_CACHED_DESCRIPTION` |
| Hash | `0x40F7E66472DF3E5C` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | `description` (Hash), `length` (int) |

### Parameters

- **`description`** (`Hash`)
- **`length`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcGetCachedDescription(description, length)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x40F7E66472DF3E5C, description, length)
```


---

## UGC_HAS_DESCRIPTION_REQUEST_FINISHED

| Property | Value |
|----------|-------|
| Native Name | `UGC_HAS_DESCRIPTION_REQUEST_FINISHED` |
| Hash | `0xEBFA8D50ADDC54C4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `description` (Hash) |

### Parameters

- **`description`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UgcHasDescriptionRequestFinished(description)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEBFA8D50ADDC54C4, description)
```


---

## UGC_HAS_REQUEST_FINISHED

| Property | Value |
|----------|-------|
| Native Name | `UGC_HAS_REQUEST_FINISHED` |
| Hash | `0xA9EB4D606076615D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ugcRequestId` (int) |

### Parameters

- **`ugcRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcHasRequestFinished(ugcRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA9EB4D606076615D, ugcRequestId)
```


---

## UGC_IS_DESCRIPTION_REQUEST_IN_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `UGC_IS_DESCRIPTION_REQUEST_IN_PROGRESS` |
| Hash | `0x2D5DC831176D0114` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `description` (Hash) |

### Parameters

- **`description`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UgcIsDescriptionRequestInProgress(description)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2D5DC831176D0114, description)
```


---

## UGC_IS_LANGUAGE_SUPPORTED

| Property | Value |
|----------|-------|
| Native Name | `UGC_IS_LANGUAGE_SUPPORTED` |
| Hash | `0xF53E48461B71EECB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `languageId` (int) |

### Parameters

- **`languageId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcIsLanguageSupported(languageId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF53E48461B71EECB, languageId)
```


---

## UGC_IS_REQUEST_PENDING

| Property | Value |
|----------|-------|
| Native Name | `UGC_IS_REQUEST_PENDING` |
| Hash | `0xF4AC4FA844FD559A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ugcRequestId` (int) |

### Parameters

- **`ugcRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcIsRequestPending(ugcRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF4AC4FA844FD559A, ugcRequestId)
```


---

## UGC_QUERY_GET_CONTENT_HAS_PLAYER_RECORD

| Property | Value |
|----------|-------|
| Native Name | `UGC_QUERY_GET_CONTENT_HAS_PLAYER_RECORD` |
| Hash | `0xF794765390A6DCA5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `index` (int) |

### Parameters

- **`p0`** (`Any`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetContentHasPlayerRecord(p0, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF794765390A6DCA5, p0, index)
```


---

## UGC_QUERY_GET_CONTENT_NUM

| Property | Value |
|----------|-------|
| Native Name | `UGC_QUERY_GET_CONTENT_NUM` |
| Hash | `0x76160E0396142765` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ugcRequestId` (int) |

### Parameters

- **`ugcRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryGetContentNum(ugcRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x76160E0396142765, ugcRequestId)
```


---

## UGC_QUERY_WAS_FORCE_CANCELLED

| Property | Value |
|----------|-------|
| Native Name | `UGC_QUERY_WAS_FORCE_CANCELLED` |
| Hash | `0xF8F0705E77A0E705` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ugcRequestId` (int) |

### Parameters

- **`ugcRequestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcQueryWasForceCancelled(ugcRequestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF8F0705E77A0E705, ugcRequestId)
```


---

## UGC_RELEASE_ALL_CACHED_DESCRIPTIONS

| Property | Value |
|----------|-------|
| Native Name | `UGC_RELEASE_ALL_CACHED_DESCRIPTIONS` |
| Hash | `0x68103E2247887242` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
UgcReleaseAllCachedDescriptions()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x68103E2247887242, )
```


---

## UGC_RELEASE_CACHED_DESCRIPTION

| Property | Value |
|----------|-------|
| Native Name | `UGC_RELEASE_CACHED_DESCRIPTION` |
| Hash | `0x5A34CD9C3C5BEC44` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `description` (Hash) |

### Parameters

- **`description`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UgcReleaseCachedDescription(description)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5A34CD9C3C5BEC44, description)
```


---

## UGC_REQUEST_CACHED_DESCRIPTION

| Property | Value |
|----------|-------|
| Native Name | `UGC_REQUEST_CACHED_DESCRIPTION` |
| Hash | `0x5E0165278F6339EE` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `description` (Hash) |

### Parameters

- **`description`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = UgcRequestCachedDescription(description)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5E0165278F6339EE, description)
```


---

## UGC_REQUEST_CONTENT_DATA_FROM_PARAMS

| Property | Value |
|----------|-------|
| Native Name | `UGC_REQUEST_CONTENT_DATA_FROM_PARAMS` |
| Hash | `0x7FD2990AF016795E` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `contentTypeName` (const char*), `contentId` (const char*), `fileId` (int), `fileVersion` (int), `languageId` (int) |

### Parameters

- **`contentTypeName`** (`const char*`)
- **`contentId`** (`const char*`)
- **`fileId`** (`int`)
- **`fileVersion`** (`int`)
- **`languageId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = UgcRequestContentDataFromParams(contentTypeName, contentId, fileId, fileVersion, languageId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7FD2990AF016795E, contentTypeName, contentId, fileId, fileVersion, languageId)
```


---

## UGC_SET_QUERY_DATA_FROM_OFFLINE

| Property | Value |
|----------|-------|
| Native Name | `UGC_SET_QUERY_DATA_FROM_OFFLINE` |
| Hash | `0xF98DDE0A8ED09323` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
UgcSetQueryDataFromOffline(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF98DDE0A8ED09323, p0)
```


---

## UGC_TEXTURE_DOWNLOAD_REQUEST

| Property | Value |
|----------|-------|
| Native Name | `UGC_TEXTURE_DOWNLOAD_REQUEST` |
| Hash | `0x308F96458B7087CC` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any*), `p5` (BOOL) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any*`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = UgcTextureDownloadRequest(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x308F96458B7087CC, p0, p1, p2, p3, p4, p5)
```


---

## VEH_TO_NET

**Description:** Returns the network ID of the given vehicle.

| Property | Value |
|----------|-------|
| Native Name | `VEH_TO_NET` |
| Hash | `0xB4C94523F023419C` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = VehToNet(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB4C94523F023419C, vehicle)
```


---

## _0x02B3CDD652B3CDD6

**Description:** Note: this native was added in build 1311.16

GET_NUM_*

| Property | Value |
|----------|-------|
| Native Name | `_0x02B3CDD652B3CDD6` |
| Hash | `0x02B3CDD652B3CDD6` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x02B3CDD652B3CDD6()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x02B3CDD652B3CDD6, )
```


---

## _0x02C4C6C2900D84DF

**Description:** Only used in SP R* Script dominoes_sp: p1 = 0

| Property | Value |
|----------|-------|
| Native Name | `_0x02C4C6C2900D84DF` |
| Hash | `0x02C4C6C2900D84DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (Any) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x02C4C6C2900D84DF(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x02C4C6C2900D84DF, player, p1)
```


---

## _0x039AD6B57D5179FF

**Description:** Note: this native was added in build 1311.23

| Property | Value |
|----------|-------|
| Native Name | `_0x039AD6B57D5179FF` |
| Hash | `0x039AD6B57D5179FF` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x039AD6B57D5179FF()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x039AD6B57D5179FF, )
```


---

## _0x039B692B3318FAB6

**Description:** Note: this native was added in build 1311.23

| Property | Value |
|----------|-------|
| Native Name | `_0x039B692B3318FAB6` |
| Hash | `0x039B692B3318FAB6` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x039B692B3318FAB6(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x039B692B3318FAB6, p0)
```


---

## _0x062842D61D0D53FD

**Description:** Note: this native was added in build 1311.23

| Property | Value |
|----------|-------|
| Native Name | `_0x062842D61D0D53FD` |
| Hash | `0x062842D61D0D53FD` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x062842D61D0D53FD()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x062842D61D0D53FD, )
```


---

## _0x0B6B4507AC5EA8B8

| Property | Value |
|----------|-------|
| Native Name | `_0x0B6B4507AC5EA8B8` |
| Hash | `0x0B6B4507AC5EA8B8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x0B6B4507AC5EA8B8()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0B6B4507AC5EA8B8, )
```


---

## _0x0BF90CBB6B72977B

| Property | Value |
|----------|-------|
| Native Name | `_0x0BF90CBB6B72977B` |
| Hash | `0x0BF90CBB6B72977B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x0BF90CBB6B72977B()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0BF90CBB6B72977B, )
```


---

## _0x0CC28C08613BA9E5

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_0x0CC28C08613BA9E5` |
| Hash | `0x0CC28C08613BA9E5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (int) |

### Parameters

- **`p0`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x0CC28C08613BA9E5(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0CC28C08613BA9E5, p0)
```


---

## _0x0D183D8490EE4366

**Description:** Note: this native was added in build 1311.23

| Property | Value |
|----------|-------|
| Native Name | `_0x0D183D8490EE4366` |
| Hash | `0x0D183D8490EE4366` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (int), `p1` (int) |

### Parameters

- **`p0`** (`int`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x0D183D8490EE4366(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0D183D8490EE4366, p0, p1)
```


---

## _0x0E54D4DA6018FF8E

| Property | Value |
|----------|-------|
| Native Name | `_0x0E54D4DA6018FF8E` |
| Hash | `0x0E54D4DA6018FF8E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x0E54D4DA6018FF8E()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E54D4DA6018FF8E, )
```


---

## _0x106CBDD5077DEDE1

**Description:** Note: this native was added in build 1311.23

| Property | Value |
|----------|-------|
| Native Name | `_0x106CBDD5077DEDE1` |
| Hash | `0x106CBDD5077DEDE1` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x106CBDD5077DEDE1(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x106CBDD5077DEDE1, p0)
```


---

## _0x13F592FC3BF0EA84

| Property | Value |
|----------|-------|
| Native Name | `_0x13F592FC3BF0EA84` |
| Hash | `0x13F592FC3BF0EA84` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `volume` (Volume), `p1` (BOOL), `originalWeight` (float), `p3` (Any), `p4` (Any) |

### Parameters

- **`volume`** (`Volume`)
- **`p1`** (`BOOL`)
- **`originalWeight`** (`float`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x13F592FC3BF0EA84(volume, p1, originalWeight, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x13F592FC3BF0EA84, volume, p1, originalWeight, p3, p4)
```


---

## _0x1413B6BF27AB7A95

| Property | Value |
|----------|-------|
| Native Name | `_0x1413B6BF27AB7A95` |
| Hash | `0x1413B6BF27AB7A95` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x1413B6BF27AB7A95()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1413B6BF27AB7A95, )
```


---

## _0x160F0CE6D76A39C9

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `_0x160F0CE6D76A39C9` |
| Hash | `0x160F0CE6D76A39C9` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x160F0CE6D76A39C9()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x160F0CE6D76A39C9, )
```


---

## _0x16EFB123C4451032

| Property | Value |
|----------|-------|
| Native Name | `_0x16EFB123C4451032` |
| Hash | `0x16EFB123C4451032` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (int), `gamerHandle` (Any*) |

### Parameters

- **`p0`** (`int`)
- **`gamerHandle`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x16EFB123C4451032(p0, gamerHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x16EFB123C4451032, p0, gamerHandle)
```


---

## _0x18B94666CF610AEB

| Property | Value |
|----------|-------|
| Native Name | `_0x18B94666CF610AEB` |
| Hash | `0x18B94666CF610AEB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0x18B94666CF610AEB()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x18B94666CF610AEB, )
```


---

## _0x19447FCAE97704DC

**Description:** Note: this native was added in build 1311.23

| Property | Value |
|----------|-------|
| Native Name | `_0x19447FCAE97704DC` |
| Hash | `0x19447FCAE97704DC` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `ctx` (Hash), `ec` (int), `ex` (BOOL), `ro` (BOOL) |

### Parameters

- **`ctx`** (`Hash`)
- **`ec`** (`int`)
- **`ex`** (`BOOL`)
- **`ro`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x19447FCAE97704DC(ctx, ec, ex, ro)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x19447FCAE97704DC, ctx, ec, ex, ro)
```


---

## _0x19B52C20B5C4757C

| Property | Value |
|----------|-------|
| Native Name | `_0x19B52C20B5C4757C` |
| Hash | `0x19B52C20B5C4757C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x19B52C20B5C4757C()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x19B52C20B5C4757C, )
```


---

*End of NETWORK natives part 6*
