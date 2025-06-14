# AUDIO Natives - Part 1 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** AUDIO  
**Natives in this file:** 50  
**Total natives in namespace:** 221  
**Generated from:** RDR3natives JSON data

---

## ADD_ENTITY_TO_AUDIO_MIX_GROUP

| Property | Value |
|----------|-------|
| Native Name | `ADD_ENTITY_TO_AUDIO_MIX_GROUP` |
| Hash | `0x153973AB99FE8980` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `groupName` (const char*), `p2` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`groupName`** (`const char*`)
- **`p2`** (`float`)

### Usage

**Lua (Direct):**
```lua
AddEntityToAudioMixGroup(entity, groupName, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x153973AB99FE8980, entity, groupName, p2)
```


---

## ADD_PED_TO_CONVERSATION

| Property | Value |
|----------|-------|
| Native Name | `ADD_PED_TO_CONVERSATION` |
| Hash | `0x95D9F4BC443956E7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `convoRoot` (const char*), `ped` (Ped), `characterName` (const char*) |

### Parameters

- **`convoRoot`** (`const char*`)
- **`ped`** (`Ped`)
- **`characterName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
AddPedToConversation(convoRoot, ped, characterName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x95D9F4BC443956E7, convoRoot, ped, characterName)
```


---

## AUDIO_IS_MUSIC_PLAYING

**Description:** Old name: AUDIO_IS_SCRIPTED_MUSIC_PLAYING

| Property | Value |
|----------|-------|
| Native Name | `AUDIO_IS_MUSIC_PLAYING` |
| Hash | `0x845FFC3A4FEEFA3E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = AudioIsMusicPlaying()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x845FFC3A4FEEFA3E, )
```


---

## AUDIO_TRIGGER_EXPLOSION

| Property | Value |
|----------|-------|
| Native Name | `AUDIO_TRIGGER_EXPLOSION` |
| Hash | `0x374F0E716BFCDE82` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (const char*), `x` (float), `y` (float), `z` (float) |

### Parameters

- **`name`** (`const char*`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)

### Usage

**Lua (Direct):**
```lua
AudioTriggerExplosion(name, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x374F0E716BFCDE82, name, x, y, z)
```


---

## CANCEL_MUSIC_EVENT

| Property | Value |
|----------|-------|
| Native Name | `CANCEL_MUSIC_EVENT` |
| Hash | `0x5B17A90291133DA5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `eventName` (const char*) |

### Parameters

- **`eventName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = CancelMusicEvent(eventName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5B17A90291133DA5, eventName)
```


---

## CLEAR_AMBIENT_ZONE_LIST_STATE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_AMBIENT_ZONE_LIST_STATE` |
| Hash | `0x120C48C614909FA4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ambientZone` (const char*), `p1` (BOOL) |

### Parameters

- **`ambientZone`** (`const char*`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ClearAmbientZoneListState(ambientZone, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x120C48C614909FA4, ambientZone, p1)
```


---

## CLEAR_AMBIENT_ZONE_STATE

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_AMBIENT_ZONE_STATE` |
| Hash | `0x218DD44AAAC964FF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `zoneName` (const char*), `p1` (BOOL) |

### Parameters

- **`zoneName`** (`const char*`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ClearAmbientZoneState(zoneName, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x218DD44AAAC964FF, zoneName, p1)
```


---

## CLEAR_CONVERSATION_HISTORY

| Property | Value |
|----------|-------|
| Native Name | `CLEAR_CONVERSATION_HISTORY` |
| Hash | `0x33D51F801CB16E4F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearConversationHistory()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x33D51F801CB16E4F, )
```


---

## CREATE_NEW_SCRIPTED_CONVERSATION

| Property | Value |
|----------|-------|
| Native Name | `CREATE_NEW_SCRIPTED_CONVERSATION` |
| Hash | `0xD2C91A0B572AAE56` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `convoRoot` (const char*) |

### Parameters

- **`convoRoot`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = CreateNewScriptedConversation(convoRoot)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD2C91A0B572AAE56, convoRoot)
```


---

## DISABLE_PED_PAIN_AUDIO

| Property | Value |
|----------|-------|
| Native Name | `DISABLE_PED_PAIN_AUDIO` |
| Hash | `0xA9A41C1E940FB0E8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DisablePedPainAudio(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA9A41C1E940FB0E8, ped, toggle)
```


---

## DOES_CONTEXT_EXIST_FOR_THIS_PED

**Description:** Checks if the ped can play the speech or has the speech file, last parameter is usually false.

| Property | Value |
|----------|-------|
| Native Name | `DOES_CONTEXT_EXIST_FOR_THIS_PED` |
| Hash | `0x49B99BF3FDA89A7A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `speechName` (const char*), `unk` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`speechName`** (`const char*`)
- **`unk`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = DoesContextExistForThisPed(ped, speechName, unk)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x49B99BF3FDA89A7A, ped, speechName, unk)
```


---

## FORCE_PED_PANIC_WALLA

| Property | Value |
|----------|-------|
| Native Name | `FORCE_PED_PANIC_WALLA` |
| Hash | `0x062D5EAD4DA2FA6A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ForcePedPanicWalla()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x062D5EAD4DA2FA6A, )
```


---

## FORCE_USE_AUDIO_GAME_OBJECT

**Description:** Old name: _FORCE_VEHICLE_ENGINE_AUDIO

| Property | Value |
|----------|-------|
| Native Name | `FORCE_USE_AUDIO_GAME_OBJECT` |
| Hash | `0x4F0C413926060B38` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `audioName` (const char*) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`audioName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ForceUseAudioGameObject(vehicle, audioName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4F0C413926060B38, vehicle, audioName)
```


---

## GET_CURRENT_SCRIPTED_CONVERSATION_LINE

| Property | Value |
|----------|-------|
| Native Name | `GET_CURRENT_SCRIPTED_CONVERSATION_LINE` |
| Hash | `0x480357EE890C295A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetCurrentScriptedConversationLine(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x480357EE890C295A, p0)
```


---

## GET_MUSIC_PLAYTIME

| Property | Value |
|----------|-------|
| Native Name | `GET_MUSIC_PLAYTIME` |
| Hash | `0xE7A0D23DC414507B` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetMusicPlaytime()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE7A0D23DC414507B, )
```


---

## GET_SOUND_ID

| Property | Value |
|----------|-------|
| Native Name | `GET_SOUND_ID` |
| Hash | `0x430386FE9BF80B45` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetSoundId()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x430386FE9BF80B45, )
```


---

## IS_AMBIENT_SPEECH_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `IS_AMBIENT_SPEECH_DISABLED` |
| Hash | `0x932C2D096A2C3FFF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsAmbientSpeechDisabled(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x932C2D096A2C3FFF, ped)
```


---

## IS_AMBIENT_SPEECH_PLAYING

| Property | Value |
|----------|-------|
| Native Name | `IS_AMBIENT_SPEECH_PLAYING` |
| Hash | `0x9072C8B49907BFAD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsAmbientSpeechPlaying(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9072C8B49907BFAD, ped)
```


---

## IS_ANIMAL_VOCALIZATION_PLAYING

| Property | Value |
|----------|-------|
| Native Name | `IS_ANIMAL_VOCALIZATION_PLAYING` |
| Hash | `0xC265DF9FB44A9FBD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `pedHandle` (Ped) |

### Parameters

- **`pedHandle`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimalVocalizationPlaying(pedHandle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC265DF9FB44A9FBD, pedHandle)
```


---

## IS_ANY_SPEECH_PLAYING

| Property | Value |
|----------|-------|
| Native Name | `IS_ANY_SPEECH_PLAYING` |
| Hash | `0x729072355FA39EC9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnySpeechPlaying(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x729072355FA39EC9, ped)
```


---

## IS_AUDIO_SCENE_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `IS_AUDIO_SCENE_ACTIVE` |
| Hash | `0xB65B60556E2A9225` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scene` (const char*) |

### Parameters

- **`scene`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsAudioSceneActive(scene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB65B60556E2A9225, scene)
```


---

## IS_HORN_ACTIVE

**Description:** Checks whether the horn of a vehicle is currently played.

| Property | Value |
|----------|-------|
| Native Name | `IS_HORN_ACTIVE` |
| Hash | `0x9D6BFC12B05C6121` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle) |

### Parameters

- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsHornActive(vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9D6BFC12B05C6121, vehicle)
```


---

## IS_PED_IN_CURRENT_CONVERSATION

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_CURRENT_CONVERSATION` |
| Hash | `0x049E937F18F4020C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (const char*), `ped` (Ped), `p2` (Any) |

### Parameters

- **`p0`** (`const char*`)
- **`ped`** (`Ped`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInCurrentConversation(p0, ped, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x049E937F18F4020C, p0, ped, p2)
```


---

## IS_SCRIPTED_CONVERSATION_LOADED

| Property | Value |
|----------|-------|
| Native Name | `IS_SCRIPTED_CONVERSATION_LOADED` |
| Hash | `0xDF0D54BE7A776737` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `convoRoot` (const char*) |

### Parameters

- **`convoRoot`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsScriptedConversationLoaded(convoRoot)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF0D54BE7A776737, convoRoot)
```


---

## IS_SCRIPTED_CONVERSATION_PLAYING

| Property | Value |
|----------|-------|
| Native Name | `IS_SCRIPTED_CONVERSATION_PLAYING` |
| Hash | `0x1ECC76792F661CF5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = IsScriptedConversationPlaying(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1ECC76792F661CF5, p0)
```


---

## IS_SCRIPTED_SPEECH_PLAYING

| Property | Value |
|----------|-------|
| Native Name | `IS_SCRIPTED_SPEECH_PLAYING` |
| Hash | `0xCC9AA18DCC7084F4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsScriptedSpeechPlaying(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCC9AA18DCC7084F4, p0)
```


---

## IS_STREAM_PLAYING

| Property | Value |
|----------|-------|
| Native Name | `IS_STREAM_PLAYING` |
| Hash | `0xD11FA52EB849D978` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `streamId` (int) |

### Parameters

- **`streamId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsStreamPlaying(streamId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD11FA52EB849D978, streamId)
```


---

## LOAD_STREAM

| Property | Value |
|----------|-------|
| Native Name | `LOAD_STREAM` |
| Hash | `0x1F1F957154EC51DF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `streamName` (const char*), `soundSet` (const char*) |

### Parameters

- **`streamName`** (`const char*`)
- **`soundSet`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = LoadStream(streamName, soundSet)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F1F957154EC51DF, streamName, soundSet)
```


---

## PAUSE_SCRIPTED_CONVERSATION

| Property | Value |
|----------|-------|
| Native Name | `PAUSE_SCRIPTED_CONVERSATION` |
| Hash | `0x8530AD776CD72B12` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (BOOL), `p2` (BOOL), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PauseScriptedConversation(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8530AD776CD72B12, p0, p1, p2, p3, p4)
```


---

## PLAY_AMBIENT_SPEECH_FROM_POSITION_NATIVE

**Description:** Old name: _PLAY_AMBIENT_SPEECH_AT_COORDS

| Property | Value |
|----------|-------|
| Native Name | `PLAY_AMBIENT_SPEECH_FROM_POSITION_NATIVE` |
| Hash | `0xED640017ED337E45` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `params` (Any*) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`params`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = PlayAmbientSpeechFromPositionNative(x, y, z, params)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xED640017ED337E45, x, y, z, params)
```


---

## PLAY_ANIMAL_VOCALIZATION

| Property | Value |
|----------|-------|
| Native Name | `PLAY_ANIMAL_VOCALIZATION` |
| Hash | `0xEE066C7006C49C0A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vocalizationName` (const char*), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`vocalizationName`** (`const char*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PlayAnimalVocalization(ped, vocalizationName, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEE066C7006C49C0A, ped, vocalizationName, p2)
```


---

## PLAY_END_CREDITS_MUSIC

| Property | Value |
|----------|-------|
| Native Name | `PLAY_END_CREDITS_MUSIC` |
| Hash | `0xCD536C4D33DCC900` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `play` (BOOL) |

### Parameters

- **`play`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PlayEndCreditsMusic(play)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCD536C4D33DCC900, play)
```


---

## PLAY_PAIN

**Description:** Valid pain IDs: 0..12  these names are not official, but here is a list of the IDs:
 1 burning,
 2 drowning,
 3 coughing,
 4 nothing,
 5 nothing,
 6 coughing_2,
 7 nothing,
 8 nothing,
 9 hurtingSick?,
 10 hurtingFall?,
 11 nothing,
 12 choking

| Property | Value |
|----------|-------|
| Native Name | `PLAY_PAIN` |
| Hash | `0xBC9AE166038A5CEC` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `painId` (int), `p2` (float), `p3` (BOOL), `isNetwork` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`painId`** (`int`)
- **`p2`** (`float`)
- **`p3`** (`BOOL`)
- **`isNetwork`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PlayPain(ped, painId, p2, p3, isNetwork)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBC9AE166038A5CEC, ped, painId, p2, p3, isNetwork)
```


---

## PLAY_PED_AMBIENT_SPEECH_NATIVE

**Description:** struct ScriptedSpeechParams
{
	const char* speechName;
	const char* voiceName;
	alignas(8) int variation;
	alignas(8) Hash speechParamHash;
	alignas(8) Ped listenerPed;
	alignas(8) BOOL syncOverNetwork;
	alignas(8) int v7;
	alignas(8) int v8;
};

static_assert(sizeof(ScriptedSpeechParams) == 0x40, "incorrect ScriptedSpeechParams size");


Example:

ScriptedSpeechParams params{"RE_PH_RHD_V3_AGGRO", "0405_U_M_M_RhdSheriff_01", 1, joaat("SPEECH_PARAMS_BEAT_SHOUTED_CLEAR"), 0, true, 1, 1};
PLAY_PED_AMBIENT_SPEECH_NATIVE(PLAYER_PED_ID(), (Any*)&params);

Old name: _PLAY_AMBIENT_SPEECH1
https://github.com/femga/rdr3_discoveries/tree/master/audio/audio_banks

| Property | Value |
|----------|-------|
| Native Name | `PLAY_PED_AMBIENT_SPEECH_NATIVE` |
| Hash | `0x8E04FEDD28D42462` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `speaker` (Ped), `params` (Any*) |

### Parameters

- **`speaker`** (`Ped`)
- **`params`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = PlayPedAmbientSpeechNative(speaker, params)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8E04FEDD28D42462, speaker, params)
```


---

## PLAY_SOUND

| Property | Value |
|----------|-------|
| Native Name | `PLAY_SOUND` |
| Hash | `0x7FF4944CC209192D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `audioName` (const char*), `audioRef` (const char*), `p2` (BOOL), `p3` (Any), `p4` (BOOL), `p5` (Any) |

### Parameters

- **`audioName`** (`const char*`)
- **`audioRef`** (`const char*`)
- **`p2`** (`BOOL`)
- **`p3`** (`Any`)
- **`p4`** (`BOOL`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
PlaySound(audioName, audioRef, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7FF4944CC209192D, audioName, audioRef, p2, p3, p4, p5)
```


---

## PLAY_SOUND_FROM_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `PLAY_SOUND_FROM_ENTITY` |
| Hash | `0x6FB1DA3CA9DA7D90` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `audioName` (const char*), `entity` (Entity), `audioRef` (const char*), `isNetwork` (BOOL), `p4` (Any), `p5` (Any) |

### Parameters

- **`audioName`** (`const char*`)
- **`entity`** (`Entity`)
- **`audioRef`** (`const char*`)
- **`isNetwork`** (`BOOL`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
PlaySoundFromEntity(audioName, entity, audioRef, isNetwork, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6FB1DA3CA9DA7D90, audioName, entity, audioRef, isNetwork, p4, p5)
```


---

## PLAY_SOUND_FRONTEND

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/audio/frontend_soundsets

| Property | Value |
|----------|-------|
| Native Name | `PLAY_SOUND_FRONTEND` |
| Hash | `0x67C540AA08E4A6F5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `audioName` (const char*), `audioRef` (const char*), `p2` (BOOL), `p3` (Any) |

### Parameters

- **`audioName`** (`const char*`)
- **`audioRef`** (`const char*`)
- **`p2`** (`BOOL`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
PlaySoundFrontend(audioName, audioRef, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x67C540AA08E4A6F5, audioName, audioRef, p2, p3)
```


---

## PLAY_STREAM_FROM_PED

| Property | Value |
|----------|-------|
| Native Name | `PLAY_STREAM_FROM_PED` |
| Hash | `0x89049DD63C08B5D1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `streamId` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`streamId`** (`int`)

### Usage

**Lua (Direct):**
```lua
PlayStreamFromPed(ped, streamId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x89049DD63C08B5D1, ped, streamId)
```


---

## PLAY_STREAM_FROM_POSITION

| Property | Value |
|----------|-------|
| Native Name | `PLAY_STREAM_FROM_POSITION` |
| Hash | `0x21442F412E8DE56B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `streamId` (int) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`streamId`** (`int`)

### Usage

**Lua (Direct):**
```lua
PlayStreamFromPosition(x, y, z, streamId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x21442F412E8DE56B, x, y, z, streamId)
```


---

## PLAY_STREAM_FRONTEND

| Property | Value |
|----------|-------|
| Native Name | `PLAY_STREAM_FRONTEND` |
| Hash | `0x58FCE43488F9F5F4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `streamId` (int) |

### Parameters

- **`streamId`** (`int`)

### Usage

**Lua (Direct):**
```lua
PlayStreamFrontend(streamId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x58FCE43488F9F5F4, streamId)
```


---

## PRELOAD_SCRIPT_CONVERSATION

| Property | Value |
|----------|-------|
| Native Name | `PRELOAD_SCRIPT_CONVERSATION` |
| Hash | `0x3B3CAD6166916D87` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `convoRoot` (const char*), `p1` (BOOL), `p2` (BOOL), `clone` (BOOL) |

### Parameters

- **`convoRoot`** (`const char*`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`clone`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
PreloadScriptConversation(convoRoot, p1, p2, clone)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3B3CAD6166916D87, convoRoot, p1, p2, clone)
```


---

## PREPARE_MUSIC_EVENT

| Property | Value |
|----------|-------|
| Native Name | `PREPARE_MUSIC_EVENT` |
| Hash | `0x1E5185B72EF5158A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `eventName` (const char*) |

### Parameters

- **`eventName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = PrepareMusicEvent(eventName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1E5185B72EF5158A, eventName)
```


---

## PREPARE_SOUND

**Description:** soundId maybe be incorrect name for param p2, in the decompiles is always -2

| Property | Value |
|----------|-------|
| Native Name | `PREPARE_SOUND` |
| Hash | `0xE368E8422C860BA7` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `soundName` (const char*), `soundsetName` (const char*), `soundId` (int) |

### Parameters

- **`soundName`** (`const char*`)
- **`soundsetName`** (`const char*`)
- **`soundId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = PrepareSound(soundName, soundsetName, soundId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE368E8422C860BA7, soundName, soundsetName, soundId)
```


---

## PREPARE_SOUNDSET

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/audio/soundsets

| Property | Value |
|----------|-------|
| Native Name | `PREPARE_SOUNDSET` |
| Hash | `0xD9130842D7226045` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `soundsetName` (const char*), `p1` (BOOL) |

### Parameters

- **`soundsetName`** (`const char*`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = PrepareSoundset(soundsetName, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD9130842D7226045, soundsetName, p1)
```


---

## PREPARE_SOUND_WITH_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `PREPARE_SOUND_WITH_ENTITY` |
| Hash | `0x4AD019591E94C064` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `soundName` (const char*), `entity` (Entity), `soundsetName` (const char*), `soundId` (int) |

### Parameters

- **`soundName`** (`const char*`)
- **`entity`** (`Entity`)
- **`soundsetName`** (`const char*`)
- **`soundId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = PrepareSoundWithEntity(soundName, entity, soundsetName, soundId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4AD019591E94C064, soundName, entity, soundsetName, soundId)
```


---

## REGISTER_SCRIPT_WITH_AUDIO

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `REGISTER_SCRIPT_WITH_AUDIO` |
| Hash | `0xC6ED9D5092438D91` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RegisterScriptWithAudio(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC6ED9D5092438D91, p0)
```


---

## RELEASE_NAMED_SCRIPT_AUDIO_BANK

| Property | Value |
|----------|-------|
| Native Name | `RELEASE_NAMED_SCRIPT_AUDIO_BANK` |
| Hash | `0x77ED170667F50170` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `audioBank` (const char*) |

### Parameters

- **`audioBank`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
ReleaseNamedScriptAudioBank(audioBank)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x77ED170667F50170, audioBank)
```


---

## RELEASE_SCRIPT_AUDIO_BANK

| Property | Value |
|----------|-------|
| Native Name | `RELEASE_SCRIPT_AUDIO_BANK` |
| Hash | `0x7A2D8AD0A9EB9C3F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ReleaseScriptAudioBank()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7A2D8AD0A9EB9C3F, )
```


---

## RELEASE_SOUND_ID

| Property | Value |
|----------|-------|
| Native Name | `RELEASE_SOUND_ID` |
| Hash | `0x353FC880830B88FA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `soundId` (int) |

### Parameters

- **`soundId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReleaseSoundId(soundId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x353FC880830B88FA, soundId)
```


---

## REMOVE_ENTITY_FROM_AUDIO_MIX_GROUP

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_ENTITY_FROM_AUDIO_MIX_GROUP` |
| Hash | `0x18EB48CFC41F2EA0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (float) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
RemoveEntityFromAudioMixGroup(entity, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x18EB48CFC41F2EA0, entity, p1)
```


---

*End of AUDIO natives part 1*
