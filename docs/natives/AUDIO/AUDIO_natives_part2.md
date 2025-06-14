# AUDIO Natives - Part 2 of 5

Red Dead Redemption 3 Native Functions Reference

**Namespace:** AUDIO  
**Natives in this file:** 50  
**Total natives in namespace:** 221  
**Generated from:** RDR3natives JSON data

---

## REMOVE_PORTAL_SETTINGS_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_PORTAL_SETTINGS_OVERRIDE` |
| Hash | `0xB4BBFD9CD8B3922B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RemovePortalSettingsOverride(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB4BBFD9CD8B3922B, p0)
```


---

## REQUEST_SCRIPT_AUDIO_BANK

| Property | Value |
|----------|-------|
| Native Name | `REQUEST_SCRIPT_AUDIO_BANK` |
| Hash | `0x2F844A8B08D76685` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `audioBank` (const char*) |

### Parameters

- **`audioBank`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = RequestScriptAudioBank(audioBank)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2F844A8B08D76685, audioBank)
```


---

## RESTART_SCRIPTED_CONVERSATION

| Property | Value |
|----------|-------|
| Native Name | `RESTART_SCRIPTED_CONVERSATION` |
| Hash | `0x9AEB285D1818C9AC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RestartScriptedConversation(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9AEB285D1818C9AC, p0)
```


---

## SET_AMBIENT_VOICE_NAME

| Property | Value |
|----------|-------|
| Native Name | `SET_AMBIENT_VOICE_NAME` |
| Hash | `0x6C8065A3B780185B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `name` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetAmbientVoiceName(ped, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6C8065A3B780185B, ped, name)
```


---

## SET_AMBIENT_ZONE_LIST_STATE

| Property | Value |
|----------|-------|
| Native Name | `SET_AMBIENT_ZONE_LIST_STATE` |
| Hash | `0x9748FA4DE50CCE3E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ambientZone` (const char*), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`ambientZone`** (`const char*`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAmbientZoneListState(ambientZone, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9748FA4DE50CCE3E, ambientZone, p1, p2)
```


---

## SET_AMBIENT_ZONE_LIST_STATE_PERSISTENT

| Property | Value |
|----------|-------|
| Native Name | `SET_AMBIENT_ZONE_LIST_STATE_PERSISTENT` |
| Hash | `0xF3638DAE8C4045E1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ambientZone` (const char*), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`ambientZone`** (`const char*`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAmbientZoneListStatePersistent(ambientZone, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF3638DAE8C4045E1, ambientZone, p1, p2)
```


---

## SET_AMBIENT_ZONE_STATE

| Property | Value |
|----------|-------|
| Native Name | `SET_AMBIENT_ZONE_STATE` |
| Hash | `0xBDA07E5950085E46` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `zoneName` (const char*), `isEnabled` (BOOL), `p2` (BOOL) |

### Parameters

- **`zoneName`** (`const char*`)
- **`isEnabled`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAmbientZoneState(zoneName, isEnabled, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBDA07E5950085E46, zoneName, isEnabled, p2)
```


---

## SET_AMBIENT_ZONE_STATE_PERSISTENT

| Property | Value |
|----------|-------|
| Native Name | `SET_AMBIENT_ZONE_STATE_PERSISTENT` |
| Hash | `0x1D6650420CEC9D3B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ambientZone` (const char*), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`ambientZone`** (`const char*`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAmbientZoneStatePersistent(ambientZone, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1D6650420CEC9D3B, ambientZone, p1, p2)
```


---

## SET_ANIMAL_MOOD

**Description:** Not implemented.

| Property | Value |
|----------|-------|
| Native Name | `SET_ANIMAL_MOOD` |
| Hash | `0xCC97B29285B1DC3B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `animal` (Ped), `mood` (int) |

### Parameters

- **`animal`** (`Ped`)
- **`mood`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetAnimalMood(animal, mood)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCC97B29285B1DC3B, animal, mood)
```


---

## SET_AUDIO_FLAG

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/audio/audio_flags

| Property | Value |
|----------|-------|
| Native Name | `SET_AUDIO_FLAG` |
| Hash | `0xB9EFD5C25018725A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `flagName` (const char*), `toggle` (BOOL) |

### Parameters

- **`flagName`** (`const char*`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAudioFlag(flagName, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB9EFD5C25018725A, flagName, toggle)
```


---

## SET_AUDIO_ONLINE_TRANSITION_STAGE

| Property | Value |
|----------|-------|
| Native Name | `SET_AUDIO_ONLINE_TRANSITION_STAGE` |
| Hash | `0x9B1FC259187C97C0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetAudioOnlineTransitionStage(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9B1FC259187C97C0, p0)
```


---

## SET_AUDIO_SCENE_VARIABLE

| Property | Value |
|----------|-------|
| Native Name | `SET_AUDIO_SCENE_VARIABLE` |
| Hash | `0xEF21A9EF089A2668` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scene` (const char*), `variable` (const char*), `value` (float) |

### Parameters

- **`scene`** (`const char*`)
- **`variable`** (`const char*`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAudioSceneVariable(scene, variable, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEF21A9EF089A2668, scene, variable, value)
```


---

## SET_AUDIO_VEHICLE_PRIORITY

| Property | Value |
|----------|-------|
| Native Name | `SET_AUDIO_VEHICLE_PRIORITY` |
| Hash | `0xE5564483E407F914` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `p1` (Any) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetAudioVehiclePriority(vehicle, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE5564483E407F914, vehicle, p1)
```


---

## SET_GPS_ACTIVE

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `SET_GPS_ACTIVE` |
| Hash | `0x3BD3F52BA9B1E4E8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `active` (BOOL) |

### Parameters

- **`active`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetGpsActive(active)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3BD3F52BA9B1E4E8, active)
```


---

## SET_HORN_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `SET_HORN_ENABLED` |
| Hash | `0x76D683C108594D0E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `vehicle` (Vehicle), `toggle` (BOOL) |

### Parameters

- **`vehicle`** (`Vehicle`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetHornEnabled(vehicle, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x76D683C108594D0E, vehicle, toggle)
```


---

## SET_IS_SCRIPTED_SPEECH_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `SET_IS_SCRIPTED_SPEECH_DISABLED` |
| Hash | `0xB2DE3AEBE31150E2` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `disabled` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`disabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = SetIsScriptedSpeechDisabled(ped, disabled)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB2DE3AEBE31150E2, ped, disabled)
```


---

## SET_PED_INTERIOR_WALLA_DENSITY

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_INTERIOR_WALLA_DENSITY` |
| Hash | `0x8BF907833BE275DE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedInteriorWallaDensity(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8BF907833BE275DE, p0, p1)
```


---

## SET_PED_IS_DRUNK

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_IS_DRUNK` |
| Hash | `0x95D2D383D5396B8A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedIsDrunk(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x95D2D383D5396B8A, ped, toggle)
```


---

## SET_PED_WALLA_DENSITY

**Description:** https://en.m.wikipedia.org/wiki/Walla

| Property | Value |
|----------|-------|
| Native Name | `SET_PED_WALLA_DENSITY` |
| Hash | `0x149AEE66F0CB3A99` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float), `p1` (float) |

### Parameters

- **`p0`** (`float`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedWallaDensity(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x149AEE66F0CB3A99, p0, p1)
```


---

## SET_PORTAL_SETTINGS_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `SET_PORTAL_SETTINGS_OVERRIDE` |
| Hash | `0x044DBAD7A7FA2BE5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (const char*) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SetPortalSettingsOverride(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x044DBAD7A7FA2BE5, p0, p1)
```


---

## SET_STATIC_EMITTER_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `SET_STATIC_EMITTER_ENABLED` |
| Hash | `0x399D2D3B33F1B8EB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `emitterName` (const char*), `toggle` (BOOL) |

### Parameters

- **`emitterName`** (`const char*`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetStaticEmitterEnabled(emitterName, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x399D2D3B33F1B8EB, emitterName, toggle)
```


---

## SKIP_TO_NEXT_SCRIPTED_CONVERSATION_LINE

| Property | Value |
|----------|-------|
| Native Name | `SKIP_TO_NEXT_SCRIPTED_CONVERSATION_LINE` |
| Hash | `0x9663FE6B7A61EB00` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (const char*) |

### Parameters

- **`p0`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
SkipToNextScriptedConversationLine(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9663FE6B7A61EB00, p0)
```


---

## START_AUDIO_SCENE

| Property | Value |
|----------|-------|
| Native Name | `START_AUDIO_SCENE` |
| Hash | `0x013A80FC08F6E4F2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scene` (const char*) |

### Parameters

- **`scene`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = StartAudioScene(scene)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x013A80FC08F6E4F2, scene)
```


---

## START_PRELOADED_CONVERSATION

| Property | Value |
|----------|-------|
| Native Name | `START_PRELOADED_CONVERSATION` |
| Hash | `0x23641AFE870AF385` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `convoRoot` (const char*) |

### Parameters

- **`convoRoot`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
StartPreloadedConversation(convoRoot)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x23641AFE870AF385, convoRoot)
```


---

## START_SCRIPT_CONVERSATION

| Property | Value |
|----------|-------|
| Native Name | `START_SCRIPT_CONVERSATION` |
| Hash | `0x6B17C62C9635D2DC` |
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
StartScriptConversation(convoRoot, p1, p2, clone)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6B17C62C9635D2DC, convoRoot, p1, p2, clone)
```


---

## STOP_AUDIO_SCENE

| Property | Value |
|----------|-------|
| Native Name | `STOP_AUDIO_SCENE` |
| Hash | `0xDFE8422B3B94E688` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scene` (const char*) |

### Parameters

- **`scene`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
StopAudioScene(scene)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDFE8422B3B94E688, scene)
```


---

## STOP_AUDIO_SCENES

| Property | Value |
|----------|-------|
| Native Name | `STOP_AUDIO_SCENES` |
| Hash | `0xBAC7FC81A75EC1A1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
StopAudioScenes()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBAC7FC81A75EC1A1, )
```


---

## STOP_CURRENT_PLAYING_AMBIENT_SPEECH

| Property | Value |
|----------|-------|
| Native Name | `STOP_CURRENT_PLAYING_AMBIENT_SPEECH` |
| Hash | `0xB8BEC0CA6F0EDB0F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
StopCurrentPlayingAmbientSpeech(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB8BEC0CA6F0EDB0F, ped, p1)
```


---

## STOP_CURRENT_PLAYING_SPEECH

| Property | Value |
|----------|-------|
| Native Name | `STOP_CURRENT_PLAYING_SPEECH` |
| Hash | `0x79D2F0E66F81D90D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
StopCurrentPlayingSpeech(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x79D2F0E66F81D90D, ped, p1)
```


---

## STOP_PED_SPEAKING

| Property | Value |
|----------|-------|
| Native Name | `STOP_PED_SPEAKING` |
| Hash | `0x9D64D7405520E3D3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `shaking` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`shaking`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
StopPedSpeaking(ped, shaking)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9D64D7405520E3D3, ped, shaking)
```


---

## STOP_SCRIPTED_CONVERSATION

| Property | Value |
|----------|-------|
| Native Name | `STOP_SCRIPTED_CONVERSATION` |
| Hash | `0xD79DEEFB53455EBA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (const char*), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`p0`** (`const char*`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = StopScriptedConversation(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD79DEEFB53455EBA, p0, p1, p2)
```


---

## STOP_STREAM

| Property | Value |
|----------|-------|
| Native Name | `STOP_STREAM` |
| Hash | `0xA4718A1419D18151` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `streamId` (int) |

### Parameters

- **`streamId`** (`int`)

### Usage

**Lua (Direct):**
```lua
StopStream(streamId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA4718A1419D18151, streamId)
```


---

## TRIGGER_MUSIC_EVENT

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/audio/music_events/music_events.lua

| Property | Value |
|----------|-------|
| Native Name | `TRIGGER_MUSIC_EVENT` |
| Hash | `0x706D57B0F50DA710` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `eventName` (const char*) |

### Parameters

- **`eventName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = TriggerMusicEvent(eventName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x706D57B0F50DA710, eventName)
```


---

## UNREGISTER_SCRIPT_WITH_AUDIO

**Description:** nullsub, doesn't do anything

| Property | Value |
|----------|-------|
| Native Name | `UNREGISTER_SCRIPT_WITH_AUDIO` |
| Hash | `0xA8638BE228D4751A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
UnregisterScriptWithAudio()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA8638BE228D4751A, )
```


---

## USE_FOOTSTEP_SCRIPT_SWEETENERS

| Property | Value |
|----------|-------|
| Native Name | `USE_FOOTSTEP_SCRIPT_SWEETENERS` |
| Hash | `0xBF4DC1784BE94DFA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `hash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`hash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
UseFootstepScriptSweeteners(ped, p1, hash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBF4DC1784BE94DFA, ped, p1, hash)
```


---

## _0x017492B2201E3428

| Property | Value |
|----------|-------|
| Native Name | `_0x017492B2201E3428` |
| Hash | `0x017492B2201E3428` |
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
_0x017492B2201E3428(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x017492B2201E3428, p0, p1, p2, p3)
```


---

## _0x018ABE833CA64D2A

| Property | Value |
|----------|-------|
| Native Name | `_0x018ABE833CA64D2A` |
| Hash | `0x018ABE833CA64D2A` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x018ABE833CA64D2A(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x018ABE833CA64D2A, p0, p1)
```


---

## _0x06C5DF5EE444BC6B

| Property | Value |
|----------|-------|
| Native Name | `_0x06C5DF5EE444BC6B` |
| Hash | `0x06C5DF5EE444BC6B` |
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
_0x06C5DF5EE444BC6B(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x06C5DF5EE444BC6B, p0, p1, p2, p3, p4)
```


---

## _0x078F77FD1A43EAB3

| Property | Value |
|----------|-------|
| Native Name | `_0x078F77FD1A43EAB3` |
| Hash | `0x078F77FD1A43EAB3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x078F77FD1A43EAB3(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x078F77FD1A43EAB3, p0, p1)
```


---

## _0x0CB3D1919E8D7CBA

| Property | Value |
|----------|-------|
| Native Name | `_0x0CB3D1919E8D7CBA` |
| Hash | `0x0CB3D1919E8D7CBA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `convoRoot` (const char*) |

### Parameters

- **`convoRoot`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0CB3D1919E8D7CBA(convoRoot)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0CB3D1919E8D7CBA, convoRoot)
```


---

## _0x0D7FD6A55FD63AEF

**Description:** speechEventType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/naSpeechEventType 
p1 is possibly naSpeechAudibility, naSpeechType, or naSpeechEventTypeRequestPriority
SKIP_* - START_*

| Property | Value |
|----------|-------|
| Native Name | `_0x0D7FD6A55FD63AEF` |
| Hash | `0x0D7FD6A55FD63AEF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `speechEventType` (int), `p1` (int), `p2` (BOOL) |

### Parameters

- **`speechEventType`** (`int`)
- **`p1`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x0D7FD6A55FD63AEF(speechEventType, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0D7FD6A55FD63AEF, speechEventType, p1, p2)
```


---

## _0x0FAF7171BF613B80

| Property | Value |
|----------|-------|
| Native Name | `_0x0FAF7171BF613B80` |
| Hash | `0x0FAF7171BF613B80` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x0FAF7171BF613B80(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0FAF7171BF613B80, p0)
```


---

## _0x131EC9247E7A2903

| Property | Value |
|----------|-------|
| Native Name | `_0x131EC9247E7A2903` |
| Hash | `0x131EC9247E7A2903` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x131EC9247E7A2903(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x131EC9247E7A2903, p0)
```


---

## _0x138ADB94F8B90616

| Property | Value |
|----------|-------|
| Native Name | `_0x138ADB94F8B90616` |
| Hash | `0x138ADB94F8B90616` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x138ADB94F8B90616()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x138ADB94F8B90616, )
```


---

## _0x139A4B9DF2D26CBF

| Property | Value |
|----------|-------|
| Native Name | `_0x139A4B9DF2D26CBF` |
| Hash | `0x139A4B9DF2D26CBF` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x139A4B9DF2D26CBF(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x139A4B9DF2D26CBF, p0, p1)
```


---

## _0x152ED1B56E8F1F50

| Property | Value |
|----------|-------|
| Native Name | `_0x152ED1B56E8F1F50` |
| Hash | `0x152ED1B56E8F1F50` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `p0` (const char*), `currentScriptedConvoLine` (int) |

### Parameters

- **`p0`** (`const char*`)
- **`currentScriptedConvoLine`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x152ED1B56E8F1F50(p0, currentScriptedConvoLine)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x152ED1B56E8F1F50, p0, currentScriptedConvoLine)
```


---

## _0x1E6F9A9FE1A99F36

| Property | Value |
|----------|-------|
| Native Name | `_0x1E6F9A9FE1A99F36` |
| Hash | `0x1E6F9A9FE1A99F36` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `audSpeechEvent` (const char*) |

### Parameters

- **`audSpeechEvent`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0x1E6F9A9FE1A99F36(audSpeechEvent)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1E6F9A9FE1A99F36, audSpeechEvent)
```


---

## _0x254B0241E964B450

| Property | Value |
|----------|-------|
| Native Name | `_0x254B0241E964B450` |
| Hash | `0x254B0241E964B450` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `p0` (const char*), `currentScriptedConvoLine` (int) |

### Parameters

- **`p0`** (`const char*`)
- **`currentScriptedConvoLine`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x254B0241E964B450(p0, currentScriptedConvoLine)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x254B0241E964B450, p0, currentScriptedConvoLine)
```


---

## _0x259ACC5B52A2B2D9

| Property | Value |
|----------|-------|
| Native Name | `_0x259ACC5B52A2B2D9` |
| Hash | `0x259ACC5B52A2B2D9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x259ACC5B52A2B2D9(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x259ACC5B52A2B2D9, p0, p1)
```


---

## _0x2651DDC0EA269073

| Property | Value |
|----------|-------|
| Native Name | `_0x2651DDC0EA269073` |
| Hash | `0x2651DDC0EA269073` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ropeId` (int), `p1` (float) |

### Parameters

- **`ropeId`** (`int`)
- **`p1`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x2651DDC0EA269073(ropeId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2651DDC0EA269073, ropeId, p1)
```


---

*End of AUDIO natives part 2*
