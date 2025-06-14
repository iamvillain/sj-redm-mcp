# PED Natives - Part 18 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _IS_TRACKED_PED_VISIBILITY_PERCENTAGE_NOT_LESS_THAN

| Property | Value |
|----------|-------|
| Native Name | `_IS_TRACKED_PED_VISIBILITY_PERCENTAGE_NOT_LESS_THAN` |
| Hash | `0x164CECC59E70DF86` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `percent` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`percent`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsTrackedPedVisibilityPercentageNotLessThan(ped, percent)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x164CECC59E70DF86, ped, percent)
```


---

## _IS_USING_SLIPSTREAM

**Description:** _IS_TRACKED_* - IS_V*

| Property | Value |
|----------|-------|
| Native Name | `_IS_USING_SLIPSTREAM` |
| Hash | `0xAF61B3CD8C3B82C3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsUsingSlipstream(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAF61B3CD8C3B82C3, ped)
```


---

## _PED_CLEAR_LOCO_MOTION

| Property | Value |
|----------|-------|
| Native Name | `_PED_CLEAR_LOCO_MOTION` |
| Hash | `0x935CF6E42BAF7F4D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
PedClearLocoMotion(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x935CF6E42BAF7F4D, ped)
```


---

## _PED_DUELING_DID_PLAYER_HEADSHOT_OPPONENT

| Property | Value |
|----------|-------|
| Native Name | `_PED_DUELING_DID_PLAYER_HEADSHOT_OPPONENT` |
| Hash | `0xBD6B242B8BD5543A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = PedDuelingDidPlayerHeadshotOpponent(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBD6B242B8BD5543A, ped)
```


---

## _PED_EMOTIONAL_PRESET_LOCO_MOTION

**Description:** target: 0 affects everyone
duration: -1 indefinite
flag: always 4 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_PED_EMOTIONAL_PRESET_LOCO_MOTION` |
| Hash | `0xAAB050DA48B57978` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `presetName` (const char*), `targetPed` (Ped), `duration` (int), `flag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`presetName`** (`const char*`)
- **`targetPed`** (`Ped`)
- **`duration`** (`int`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
PedEmotionalPresetLocoMotion(ped, presetName, targetPed, duration, flag)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAAB050DA48B57978, ped, presetName, targetPed, duration, flag)
```


---

## _PED_WAS_KILLED_BY_HEADSHOT

| Property | Value |
|----------|-------|
| Native Name | `_PED_WAS_KILLED_BY_HEADSHOT` |
| Hash | `0x06FA94C835787C64` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = PedWasKilledByHeadshot(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x06FA94C835787C64, ped)
```


---

## _REFRESH_LOOT_STATE_FOR_PED

**Description:** Returns loot state
enum eLootState
{
	LAP_NONE,
	LAP_RESUMING,
	LAP_GETTING_ON_FOOT,
	LAP_DISTANT_NAV,
	LAP_CHOOSING_ACTION,
	LAP_APPROACHING,
	LAP_ENTERING,
	LAP_LOOTING,
	LAP_EXITING
};

_POSSE_* - _REGISTER_HATED*

| Property | Value |
|----------|-------|
| Native Name | `_REFRESH_LOOT_STATE_FOR_PED` |
| Hash | `0x5463C962BC7777C3` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `lootTarget` (Ped*), `p3` (int), `p4` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`lootTarget`** (`Ped*`)
- **`p3`** (`int`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RefreshLootStateForPed(ped, p1, lootTarget, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5463C962BC7777C3, ped, p1, lootTarget, p3, p4)
```


---

## _REFRESH_META_PED_SHOP_ITEMS

**Description:** p1 is always 1

| Property | Value |
|----------|-------|
| Native Name | `_REFRESH_META_PED_SHOP_ITEMS` |
| Hash | `0x59BD177A1A48600A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
RefreshMetaPedShopItems(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x59BD177A1A48600A, ped, p1)
```


---

## _REGISTER_HATED_TARGETS_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `_REGISTER_HATED_TARGETS_IN_AREA` |
| Hash | `0xD8736EFDA38EDC5C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
RegisterHatedTargetsInArea(ped, x, y, z, radius)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD8736EFDA38EDC5C, ped, x, y, z, radius)
```


---

## _RELEASE_META_PED_ASSET_REQUEST

| Property | Value |
|----------|-------|
| Native Name | `_RELEASE_META_PED_ASSET_REQUEST` |
| Hash | `0x13E7320C762F0477` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `requestId` (int) |

### Parameters

- **`requestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReleaseMetaPedAssetRequest(requestId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x13E7320C762F0477, requestId)
```


---

## _RELEASE_META_PED_OUTFIT_REQUEST

| Property | Value |
|----------|-------|
| Native Name | `_RELEASE_META_PED_OUTFIT_REQUEST` |
| Hash | `0x4592B8B9B0EF5F48` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `requestId` (int) |

### Parameters

- **`requestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReleaseMetaPedOutfitRequest(requestId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4592B8B9B0EF5F48, requestId)
```


---

## _RELEASE_META_PED_REQUEST

| Property | Value |
|----------|-------|
| Native Name | `_RELEASE_META_PED_REQUEST` |
| Hash | `0x3972F78A78B5D9DF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `requestId` (int) |

### Parameters

- **`requestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReleaseMetaPedRequest(requestId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3972F78A78B5D9DF, requestId)
```


---

## _RELEASE_TEXTURE

**Description:** Removes a texture created by 0xC5E7204F322E49EB.

| Property | Value |
|----------|-------|
| Native Name | `_RELEASE_TEXTURE` |
| Hash | `0x6BEFAA907B076859` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int) |

### Parameters

- **`textureId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReleaseTexture(textureId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6BEFAA907B076859, textureId)
```


---

## _REMOVE_GRAVITY_WELL

**Description:** Removes gravity well by handle returned from 0x4F5EBE70081E5A20

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_GRAVITY_WELL` |
| Hash | `0x87247BC60B60BED8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `handle` (int) |

### Parameters

- **`handle`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemoveGravityWell(handle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x87247BC60B60BED8, handle)
```


---

## _REMOVE_MOTION_TYPE_ASSET

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_MOTION_TYPE_ASSET` |
| Hash | `0xDE7B2B4144906CDF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `nameHash` (Hash), `ped` (Ped) |

### Parameters

- **`nameHash`** (`Hash`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
RemoveMotionTypeAsset(nameHash, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDE7B2B4144906CDF, nameHash, ped)
```


---

## _REMOVE_PED_BLACKBOARD_BOOL

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PED_BLACKBOARD_BOOL` |
| Hash | `0xA6F67BEC53379A32` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RemovePedBlackboardBool(ped, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA6F67BEC53379A32, ped, variableName)
```


---

## _REMOVE_PED_BLACKBOARD_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PED_BLACKBOARD_FLOAT` |
| Hash | `0x411189E51B8020BA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RemovePedBlackboardFloat(ped, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x411189E51B8020BA, ped, variableName)
```


---

## _REMOVE_PED_BLACKBOARD_HASH

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PED_BLACKBOARD_HASH` |
| Hash | `0x0E17378642156790` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RemovePedBlackboardHash(ped, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0E17378642156790, ped, variableName)
```


---

## _REMOVE_PED_BLACKBOARD_INT

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PED_BLACKBOARD_INT` |
| Hash | `0x81B75428A7813E67` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `variableName` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`variableName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RemovePedBlackboardInt(ped, variableName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x81B75428A7813E67, ped, variableName)
```


---

## _REMOVE_PED_EMOTIONAL_PRESET

**Description:** See _REQUEST_PED_EMOTIONAL_PRESET

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PED_EMOTIONAL_PRESET` |
| Hash | `0xFC3BAB1801A8255A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `name` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RemovePedEmotionalPreset(ped, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFC3BAB1801A8255A, ped, name)
```


---

## _REMOVE_PED_FROM_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PED_FROM_MOUNT` |
| Hash | `0x5337B721C51883A9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemovePedFromMount(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5337B721C51883A9, ped, p1, p2)
```


---

## _REMOVE_PED_OVERLAY

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PED_OVERLAY` |
| Hash | `0x96C349DE04C49011` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int), `overlayId` (int) |

### Parameters

- **`textureId`** (`int`)
- **`overlayId`** (`int`)

### Usage

**Lua (Direct):**
```lua
RemovePedOverlay(textureId, overlayId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x96C349DE04C49011, textureId, overlayId)
```


---

## _REMOVE_PED_PROP

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PED_PROP` |
| Hash | `0x3A50753042B6891B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `propName` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`propName`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RemovePedProp(ped, propName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3A50753042B6891B, ped, propName)
```


---

## _REMOVE_PED_STAY_OUT_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PED_STAY_OUT_VOLUME` |
| Hash | `0x0CAB404CD2DB41F5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `volume` (Volume) |

### Parameters

- **`ped`** (`Ped`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
local result = RemovePedStayOutVolume(ped, volume)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0CAB404CD2DB41F5, ped, volume)
```


---

## _REMOVE_PED_SUBSCRIBE_TO_LEGENDARY_BLIPS

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_PED_SUBSCRIBE_TO_LEGENDARY_BLIPS` |
| Hash | `0x011A42FD923D41CA` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = RemovePedSubscribeToLegendaryBlips(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x011A42FD923D41CA, ped)
```


---

## _REMOVE_SHOP_ITEM_FROM_PED

**Description:** Directly removes a shop item component from a ped
Params: p2 and p3 are always 0

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_SHOP_ITEM_FROM_PED` |
| Hash | `0x0D7FFA1B2F69ED82` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `ped` (Ped), `componentHash` (Hash), `p2` (int), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`componentHash`** (`Hash`)
- **`p2`** (`int`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemoveShopItemFromPed(ped, componentHash, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0D7FFA1B2F69ED82, ped, componentHash, p2, p3)
```


---

## _REMOVE_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_TARGET` |
| Hash | `0x4707E9C23D8CA3FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
RemoveTarget(ped, targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4707E9C23D8CA3FE, ped, targetPed)
```


---

## _REQUEST_META_PED

**Description:** Returns requestId
Params: p1 = 1 in R* Scripts (Used in SP only)

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_META_PED` |
| Hash | `0xF97C34C33487D569` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `model` (Hash), `p1` (int) |

### Parameters

- **`model`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RequestMetaPed(model, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF97C34C33487D569, model, p1)
```


---

## _REQUEST_META_PED_ASSET_BUNDLE

**Description:** Returns requestId
Params: p1 = 1 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_META_PED_ASSET_BUNDLE` |
| Hash | `0x91FE941F9FCFB702` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `asset` (Hash), `p1` (int) |

### Parameters

- **`asset`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RequestMetaPedAssetBundle(asset, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x91FE941F9FCFB702, asset, p1)
```


---

## _REQUEST_META_PED_COMPONENT

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_META_PED_COMPONENT` |
| Hash | `0xF6D9E1F3560CBF8E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `metaPedType` (int), `p1` (Any), `p2` (int), `p3` (int), `p4` (int) |

### Parameters

- **`metaPedType`** (`int`)
- **`p1`** (`Any`)
- **`p2`** (`int`)
- **`p3`** (`int`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = RequestMetaPedComponent(metaPedType, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF6D9E1F3560CBF8E, metaPedType, p1, p2, p3, p4)
```


---

## _REQUEST_META_PED_OUTFIT

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/clothes/metaped_outfits.lua
Returns requestId, to be used with 0x74F512E29CB717E2

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_META_PED_OUTFIT` |
| Hash | `0x13154A76CE0CF9AB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `model` (Hash), `outfit` (Hash) |

### Parameters

- **`model`** (`Hash`)
- **`outfit`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = RequestMetaPedOutfit(model, outfit)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x13154A76CE0CF9AB, model, outfit)
```


---

## _REQUEST_MOTION_TYPE_ASSET

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_MOTION_TYPE_ASSET` |
| Hash | `0xF7EA250B9A919E03` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `nameHash` (Hash), `ped` (Ped) |

### Parameters

- **`nameHash`** (`Hash`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
RequestMotionTypeAsset(nameHash, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF7EA250B9A919E03, nameHash, ped)
```


---

## _REQUEST_PED_EMOTIONAL_PRESET

**Description:** For more information, see common:/data/emotional_presets.meta

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PED_EMOTIONAL_PRESET` |
| Hash | `0x5C3C55EAAD19915F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `name` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RequestPedEmotionalPreset(ped, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5C3C55EAAD19915F, ped, name)
```


---

## _REQUEST_PED_FACIAL_MOOD_THIS_FRAME

**Description:** mood: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/fwFacialAnimRequest__Mood
Params: p2 = 6 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PED_FACIAL_MOOD_THIS_FRAME` |
| Hash | `0x8B3B71C80A29A4BB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `mood` (Hash), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`mood`** (`Hash`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
RequestPedFacialMoodThisFrame(ped, mood, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8B3B71C80A29A4BB, ped, mood, p2)
```


---

## _REQUEST_PED_FOR_SCENARIO_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PED_FOR_SCENARIO_TYPE` |
| Hash | `0xBDED916A9F9B0604` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `object` (Object), `p2` (const char*), `scenarioType` (Hash), `p4` (const char*), `p5` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`object`** (`Object`)
- **`p2`** (`const char*`)
- **`scenarioType`** (`Hash`)
- **`p4`** (`const char*`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = RequestPedForScenarioType(ped, object, p2, scenarioType, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBDED916A9F9B0604, ped, object, p2, scenarioType, p4, p5)
```


---

## _REQUEST_PED_GETUP_ANIMATION

**Description:** Known get up animation types: REAR, FRONT

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PED_GETUP_ANIMATION` |
| Hash | `0xEAA8242C8479C27D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `getUpType` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`getUpType`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RequestPedGetupAnimation(ped, getUpType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEAA8242C8479C27D, ped, getUpType)
```


---

## _REQUEST_PROP_SCENARIO_PED

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_PROP_SCENARIO_PED` |
| Hash | `0xBEC65C6049B3219D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `object` (Object), `p2` (char*), `p3` (char*), `p4` (char*), `p5` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`object`** (`Object`)
- **`p2`** (`char*`)
- **`p3`** (`char*`)
- **`p4`** (`char*`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = RequestPropScenarioPed(ped, object, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBEC65C6049B3219D, ped, object, p2, p3, p4, p5)
```


---

## _REQUEST_TEXTURE

**Description:** Creates a texture override data for ped and returns it's index.
So you can replace any texture of any ped's component.
Also, you can add overlays on it, such as aging, lipstick and more.
Textures can be reused by multiple peds at once.
You can keep only 32 textures at once(including other peds).

https://github.com/femga/rdr3_discoveries/blob/master/clothes/change_overlays_script.lua
materialHash: https://github.com/femga/rdr3_discoveries/blob/master/clothes/cloth_drawable_albedo_normal_material_TEMPORARY.lua

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_TEXTURE` |
| Hash | `0xC5E7204F322E49EB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `albedoHash` (Hash), `normalHash` (Hash), `materialHash` (Hash) |

### Parameters

- **`albedoHash`** (`Hash`)
- **`normalHash`** (`Hash`)
- **`materialHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = RequestTexture(albedoHash, normalHash, materialHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC5E7204F322E49EB, albedoHash, normalHash, materialHash)
```


---

## _RESERVE_AMBIENT_PEDS

| Property | Value |
|----------|-------|
| Native Name | `_RESERVE_AMBIENT_PEDS` |
| Hash | `0xED9582B3DA8F02B4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `numPeds` (int) |

### Parameters

- **`numPeds`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReserveAmbientPeds(numPeds)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xED9582B3DA8F02B4, numPeds)
```


---

## _RESERVE_AMBIENT_PEDS_TOTAL

| Property | Value |
|----------|-------|
| Native Name | `_RESERVE_AMBIENT_PEDS_TOTAL` |
| Hash | `0xF008E0BA1FE1D644` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `numPeds` (int) |

### Parameters

- **`numPeds`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReserveAmbientPedsTotal(numPeds)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF008E0BA1FE1D644, numPeds)
```


---

## _RESET_PED_COMPONENTS

| Property | Value |
|----------|-------|
| Native Name | `_RESET_PED_COMPONENTS` |
| Hash | `0x0BFA1BD465CDFEFD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ResetPedComponents(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0BFA1BD465CDFEFD, ped)
```


---

## _RESET_PED_INCAPACITATION_BLEED_OUT_DURATION

| Property | Value |
|----------|-------|
| Native Name | `_RESET_PED_INCAPACITATION_BLEED_OUT_DURATION` |
| Hash | `0x4B9668DB91DC39B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ResetPedIncapacitationBleedOutDuration(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4B9668DB91DC39B8, ped)
```


---

## _RESET_PED_LADDER_MOVEMENT_SPEED_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_RESET_PED_LADDER_MOVEMENT_SPEED_MODIFIER` |
| Hash | `0x801917E7D7BCE418` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
ResetPedLadderMovementSpeedModifier(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x801917E7D7BCE418, ped)
```


---

## _RESET_PED_TEXTURE

**Description:** Removes every texture layer but the base layer
Clearing texture's data: setting params to default values, but keep overlays.

| Property | Value |
|----------|-------|
| Native Name | `_RESET_PED_TEXTURE` |
| Hash | `0x8472A1789478F82F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `textureId` (int) |

### Parameters

- **`textureId`** (`int`)

### Usage

**Lua (Direct):**
```lua
ResetPedTexture(textureId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8472A1789478F82F, textureId)
```


---

## _RESTORE_PED_STAMINA

**Description:** 0.0 <= stamina <= 100.0

| Property | Value |
|----------|-------|
| Native Name | `_RESTORE_PED_STAMINA` |
| Hash | `0x675680D089BFA21F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `stamina` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`stamina`** (`float`)

### Usage

**Lua (Direct):**
```lua
RestorePedStamina(ped, stamina)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x675680D089BFA21F, ped, stamina)
```


---

## _SET_ACCURACY_AGAINST_LOCAL_PLAYER_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_SET_ACCURACY_AGAINST_LOCAL_PLAYER_MODIFIER` |
| Hash | `0xC2266AA617668AD3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `modifier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAccuracyAgainstLocalPlayerModifier(ped, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC2266AA617668AD3, ped, modifier)
```


---

## _SET_AMBIENT_ANIMAL_DENSITY_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_SET_AMBIENT_ANIMAL_DENSITY_MULTIPLIER_THIS_FRAME` |
| Hash | `0xC0258742B034DFAF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAmbientAnimalDensityMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC0258742B034DFAF, multiplier)
```


---

## _SET_AMBIENT_HUMAN_DENSITY_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_SET_AMBIENT_HUMAN_DENSITY_MULTIPLIER_THIS_FRAME` |
| Hash | `0xBA0980B5C0A11924` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAmbientHumanDensityMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBA0980B5C0A11924, multiplier)
```


---

## _SET_AMBIENT_PED_DENSITY_MULTIPLIER_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `_SET_AMBIENT_PED_DENSITY_MULTIPLIER_THIS_FRAME` |
| Hash | `0xAB0D553FE20A6E25` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetAmbientPedDensityMultiplierThisFrame(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAB0D553FE20A6E25, multiplier)
```


---

## _SET_CHAR_EXPRESSION

**Description:** Sets MetaPedExpression at index specified. Morphs components, such as changing body size or facial features.

Note: You have to update the ped's variation (using 0xCC8CA3E88256E58F) after calling this native

index = MetaPedExpression IDs
List of face features: https://pastebin.com/9jb88FXW
Full list of MetaPedExpressions: https://pastebin.com/Ld76cAn7
value: -1.0 to 1.0 (values beyond this likely won't sync to other clients)

This native also allows you to change a horse's gender.

Old name: _SET_PED_FACE_FEATURE

| Property | Value |
|----------|-------|
| Native Name | `_SET_CHAR_EXPRESSION` |
| Hash | `0x5653AB26C82938CF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `index` (int), `value` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`index`** (`int`)
- **`value`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetCharExpression(ped, index, value)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5653AB26C82938CF, ped, index, value)
```


---

*End of PED natives part 18*
