# AUDIO Natives - Part 5 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** AUDIO  
**Natives in this file:** 21  
**Total natives in namespace:** 221  
**Generated from:** RDR3natives JSON data

---

## PLAY_SOUND_FROM_COORD

**Description:** Old name: _PLAY_SOUND_FROM_POSITION

| Property | Value |
|----------|-------|
| Native Name | `PLAY_SOUND_FROM_COORD` |
| Hash | `0xCCE219C922737BFA` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `SoundName` (const char*), `positionX` (float), `positionY` (float), `positionZ` (float), `SetName` (const char*), `bOverNetwork` (BOOL), `nNetworkRange` (int), `isExteriorLoc` (BOOL), `p8` (int) |

### Parameters

- **`SoundName`** (`const char*`)
- **`positionX`** (`float`)
- **`positionY`** (`float`)
- **`positionZ`** (`float`)
- **`SetName`** (`const char*`)
- **`bOverNetwork`** (`BOOL`)
- **`nNetworkRange`** (`int`)
- **`isExteriorLoc`** (`BOOL`)
- **`p8`** (`int`)

### Usage

**Lua (Direct):**
```lua
PlaySoundFromCoord(SoundName, positionX, positionY, positionZ, SetName, bOverNetwork, nNetworkRange, isExteriorLoc, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCCE219C922737BFA, SoundName, positionX, positionY, positionZ, SetName, bOverNetwork, nNetworkRange, isExteriorLoc, p8)
```


---

## _PLAY_SOUND_FROM_POSITION_WITH_ID

**Description:** Starts Audio Loop
_PLAY_SOUND_FROM_ENTITY* - _PLAY_SOUND_FRONTEND*

| Property | Value |
|----------|-------|
| Native Name | `_PLAY_SOUND_FROM_POSITION_WITH_ID` |
| Hash | `0xDCF5BA95BBF0FABA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `soundId` (int), `soundName` (const char*), `x` (float), `y` (float), `z` (float), `soundsetName` (const char*), `p6` (BOOL), `p7` (int), `p8` (BOOL) |

### Parameters

- **`soundId`** (`int`)
- **`soundName`** (`const char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`soundsetName`** (`const char*`)
- **`p6`** (`BOOL`)
- **`p7`** (`int`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PlaySoundFromPositionWithId(soundId, soundName, x, y, z, soundsetName, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDCF5BA95BBF0FABA, soundId, soundName, x, y, z, soundsetName, p6, p7, p8)
```


---

## _PLAY_SOUND_FRONTEND_WITH_SOUND_ID

| Property | Value |
|----------|-------|
| Native Name | `_PLAY_SOUND_FRONTEND_WITH_SOUND_ID` |
| Hash | `0xCE5D0FFE83939AF1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `soundId` (int), `name` (const char*), `soundSet` (const char*), `p3` (BOOL) |

### Parameters

- **`soundId`** (`int`)
- **`name`** (`const char*`)
- **`soundSet`** (`const char*`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PlaySoundFrontendWithSoundId(soundId, name, soundSet, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE5D0FFE83939AF1, soundId, name, soundSet, p3)
```


---

## _RELEASE_SHARD_SOUNDS

| Property | Value |
|----------|-------|
| Native Name | `_RELEASE_SHARD_SOUNDS` |
| Hash | `0x9D746964E0CF2C5F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `soundName` (const char*), `soundsetName` (const char*) |

### Parameters

- **`soundName`** (`const char*`)
- **`soundsetName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ReleaseShardSounds(soundName, soundsetName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9D746964E0CF2C5F, soundName, soundsetName)
```


---

## _RELEASE_SOUNDSET

| Property | Value |
|----------|-------|
| Native Name | `_RELEASE_SOUNDSET` |
| Hash | `0x531A78D6BF27014B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `soundsetName` (const char*) |

### Parameters

- **`soundsetName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ReleaseSoundset(soundsetName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x531A78D6BF27014B, soundsetName)
```


---

## _SET_AMBIENT_ZONE_POSITION

| Property | Value |
|----------|-------|
| Native Name | `_SET_AMBIENT_ZONE_POSITION` |
| Hash | `0x3743CE6948194349` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ambientZone` (const char*), `x` (float), `y` (float), `z` (float), `heading` (float) |

### Parameters

- **`ambientZone`** (`const char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAmbientZonePosition(ambientZone, x, y, z, heading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3743CE6948194349, ambientZone, x, y, z, heading)
```


---

## _SET_AUDIO_SCENESET

| Property | Value |
|----------|-------|
| Native Name | `_SET_AUDIO_SCENESET` |
| Hash | `0xAC84686C06184B0D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `audioName` (const char*), `sceneset` (const char*) |

### Parameters

- **`audioName`** (`const char*`)
- **`sceneset`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = SetAudioSceneset(audioName, sceneset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAC84686C06184B0D, audioName, sceneset)
```


---

## _SET_SOUND_RELATIONSHIP_ON_PED

**Description:** p1: Entity.Relationship
p2: Player, Enemy, Teammate, Neutral

| Property | Value |
|----------|-------|
| Native Name | `_SET_SOUND_RELATIONSHIP_ON_PED` |
| Hash | `0x2E31ACA7477CF00F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (const char*), `p2` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`const char*`)
- **`p2`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetSoundRelationshipOnPed(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E31ACA7477CF00F, ped, p1, p2)
```


---

## SET_VARIABLE_ON_SOUND

**Description:** Old Name: _SET_VARIABLE_ON_SOUND_WITH_ID

| Property | Value |
|----------|-------|
| Native Name | `SET_VARIABLE_ON_SOUND` |
| Hash | `0x503703EC1781B7D6` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `soundId` (int), `variableName` (const char*), `variableValue` (float) |

### Parameters

- **`soundId`** (`int`)
- **`variableName`** (`const char*`)
- **`variableValue`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetVariableOnSound(soundId, variableName, variableValue)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x503703EC1781B7D6, soundId, variableName, variableValue)
```


---

## _SET_VARIABLE_ON_SOUND_WITH_NAME

| Property | Value |
|----------|-------|
| Native Name | `_SET_VARIABLE_ON_SOUND_WITH_NAME` |
| Hash | `0x9821B68CD3E05F2B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `variableName` (const char*), `variableValue` (float), `audioName` (const char*), `audioRef` (const char*) |

### Parameters

- **`variableName`** (`const char*`)
- **`variableValue`** (`float`)
- **`audioName`** (`const char*`)
- **`audioRef`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetVariableOnSoundWithName(variableName, variableValue, audioName, audioRef)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9821B68CD3E05F2B, variableName, variableValue, audioName, audioRef)
```


---

## _SET_VOFX_PED_VOICE

**Description:** Hashes: VOFX_PLAYER_MALE01, VOFX_PLAYER_MALE02, VOFX_PLAYER_MALE03, VOFX_PLAYER_FEMALE01, VOFX_PLAYER_FEMALE02, VOFX_PLAYER_FEMALE03

| Property | Value |
|----------|-------|
| Native Name | `_SET_VOFX_PED_VOICE` |
| Hash | `0x2703EFB583F0949A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `voice` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`voice`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetVofxPedVoice(ped, voice)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2703EFB583F0949A, ped, voice)
```


---

## _SET_WHISTLE_CONFIG_FOR_PED

**Description:** whistleConfig: Ped.WhistlePitch (0.0 - 1.0), Ped.WhistleClarity (0.0 - 1.0), Ped.WhistleShape (0.0 - 10.0)

| Property | Value |
|----------|-------|
| Native Name | `_SET_WHISTLE_CONFIG_FOR_PED` |
| Hash | `0x9963681A8BC69BF3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `whistleConfig` (const char*), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`whistleConfig`** (`const char*`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetWhistleConfigForPed(ped, whistleConfig, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9963681A8BC69BF3, ped, whistleConfig, value)
```


---

## _START_AUDIO_SCENESET

| Property | Value |
|----------|-------|
| Native Name | `_START_AUDIO_SCENESET` |
| Hash | `0x6339C1EA3979B5F7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `audioName` (const char*), `sceneset` (const char*) |

### Parameters

- **`audioName`** (`const char*`)
- **`sceneset`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = StartAudioSceneset(audioName, sceneset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6339C1EA3979B5F7, audioName, sceneset)
```


---

## _STOP_ALL_SCRIPTED_AUDIO_SOUNDS

| Property | Value |
|----------|-------|
| Native Name | `_STOP_ALL_SCRIPTED_AUDIO_SOUNDS` |
| Hash | `0x2E399EAFBEEA74D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
StopAllScriptedAudioSounds()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E399EAFBEEA74D5, )
```


---

## _STOP_ALL_SCRIPTED_CONVERSIONS

| Property | Value |
|----------|-------|
| Native Name | `_STOP_ALL_SCRIPTED_CONVERSIONS` |
| Hash | `0x36559148B78853B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StopAllScriptedConversions(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x36559148B78853B3, p0, p1, p2)
```


---

## _STOP_AUDIO_SCENESET

| Property | Value |
|----------|-------|
| Native Name | `_STOP_AUDIO_SCENESET` |
| Hash | `0x9428447DED71FC7E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `sceneset` (const char*) |

### Parameters

- **`sceneset`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
StopAudioSceneset(sceneset)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9428447DED71FC7E, sceneset)
```


---

## STOP_SOUND

**Description:** Old Name: _STOP_SOUND_WITH_ID

| Property | Value |
|----------|-------|
| Native Name | `STOP_SOUND` |
| Hash | `0x3210BCB36AF7621B` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `soundId` (int) |

### Parameters

- **`soundId`** (`int`)

### Usage

**Lua (Direct):**
```lua
StopSound(soundId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3210BCB36AF7621B, soundId)
```


---

## _STOP_SOUND_WITH_NAME

| Property | Value |
|----------|-------|
| Native Name | `_STOP_SOUND_WITH_NAME` |
| Hash | `0x0F2A2175734926D8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `audioName` (const char*), `audioRef` (const char*) |

### Parameters

- **`audioName`** (`const char*`)
- **`audioRef`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
StopSoundWithName(audioName, audioRef)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0F2A2175734926D8, audioName, audioRef)
```


---

## _TRIGGER_MUSIC_EVENT_WITH_HASH

| Property | Value |
|----------|-------|
| Native Name | `_TRIGGER_MUSIC_EVENT_WITH_HASH` |
| Hash | `0x05D6195FB4D428F4` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `eventName` (Hash) |

### Parameters

- **`eventName`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = TriggerMusicEventWithHash(eventName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x05D6195FB4D428F4, eventName)
```


---

## _UNLOAD_SPEECH_CONTEXT

**Description:** _UNLOAD_[A-C]* - USE_*

| Property | Value |
|----------|-------|
| Native Name | `_UNLOAD_SPEECH_CONTEXT` |
| Hash | `0x87E6302FC61208CC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `speechContext` (const char*) |

### Parameters

- **`speechContext`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
UnloadSpeechContext(speechContext)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x87E6302FC61208CC, speechContext)
```


---

## UPDATE_SOUND_COORD

**Description:** Only used in R* SP Scripts
Old Name: _UPDATE_SOUND_POSITION

| Property | Value |
|----------|-------|
| Native Name | `UPDATE_SOUND_COORD` |
| Hash | `0x0286617C8FC50A53` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `soundId` (int), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`soundId`** (`int`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
UpdateSoundCoord(soundId, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0286617C8FC50A53, soundId, x, y, z)
```


---

*End of AUDIO natives part 5*
