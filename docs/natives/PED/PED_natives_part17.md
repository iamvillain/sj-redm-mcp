# PED Natives - Part 17 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## _GET_SHOP_ITEM_HAT_COMPONENT

| Property | Value |
|----------|-------|
| Native Name | `_GET_SHOP_ITEM_HAT_COMPONENT` |
| Hash | `0x7E02E4218D916B94` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped), `metapedType` (int), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`metapedType`** (`int`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetShopItemHatComponent(ped, metapedType, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7E02E4218D916B94, ped, metapedType, p2)
```


---

## _GET_SHOP_ITEM_NUM_WEARABLE_STATES

**Description:** Returns the number of wearable states available for a shop item / component. p2 seems to be true in scripts.

For use with 0x6243635AF2F1B826 (_GET_SHOP_ITEM_AVAILABLE_WEARABLE_STATE_BY_INDEX)

| Property | Value |
|----------|-------|
| Native Name | `_GET_SHOP_ITEM_NUM_WEARABLE_STATES` |
| Hash | `0xFFCC2DB2D9953401` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `componentHash` (Hash), `isMpFemale` (BOOL), `p2` (BOOL) |

### Parameters

- **`componentHash`** (`Hash`)
- **`isMpFemale`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetShopItemNumWearableStates(componentHash, isMpFemale, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFFCC2DB2D9953401, componentHash, isMpFemale, p2)
```


---

## _GET_SHOP_ITEM_WEARABLE_STATE_BY_INDEX

**Description:** Gets an available wearable state by index for a shop item / component - it does not retreive what the current state is. p3 seems to be true in scripts.

Use 0xFFCC2DB2D9953401 (_GET_SHOP_ITEM_NUM_WEARABLE_STATES) to get the number of available wearable states

| Property | Value |
|----------|-------|
| Native Name | `_GET_SHOP_ITEM_WEARABLE_STATE_BY_INDEX` |
| Hash | `0x6243635AF2F1B826` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `componentHash` (Hash), `wearableStateIndex` (int), `isMpFemale` (BOOL), `p3` (BOOL) |

### Parameters

- **`componentHash`** (`Hash`)
- **`wearableStateIndex`** (`int`)
- **`isMpFemale`** (`BOOL`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetShopItemWearableStateByIndex(componentHash, wearableStateIndex, isMpFemale, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6243635AF2F1B826, componentHash, wearableStateIndex, isMpFemale, p3)
```


---

## _GET_STAMINA_DEPLETION_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_GET_STAMINA_DEPLETION_MULTIPLIER` |
| Hash | `0x825F6DD559A0895B` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetStaminaDepletionMultiplier(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x825F6DD559A0895B, ped)
```


---

## _GET_STAMINA_RECHARGE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `_GET_STAMINA_RECHARGE_MULTIPLIER` |
| Hash | `0xE7687EB2F634ABF0` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetStaminaRechargeMultiplier(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE7687EB2F634ABF0, ped)
```


---

## _GET_TOTAL_PED_DAMAGE_FROM_AI

**Description:** _GET_WA*

| Property | Value |
|----------|-------|
| Native Name | `_GET_TOTAL_PED_DAMAGE_FROM_AI` |
| Hash | `0x92C8EACA29F6BED6` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetTotalPedDamageFromAi(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x92C8EACA29F6BED6, ped)
```


---

## _GET_TRANSPORT_PED_IS_SEATED_ON

| Property | Value |
|----------|-------|
| Native Name | `_GET_TRANSPORT_PED_IS_SEATED_ON` |
| Hash | `0x849BD6C6314793D0` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetTransportPedIsSeatedOn(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x849BD6C6314793D0, ped)
```


---

## _GET_VEHICLE_DRAFT_HORSE_IS_ATTACHED_TO

| Property | Value |
|----------|-------|
| Native Name | `_GET_VEHICLE_DRAFT_HORSE_IS_ATTACHED_TO` |
| Hash | `0xE4770DA1B8FF4FD1` |
| Return Type | `Vehicle` |
| Build | `1207` |
| Parameters | `horse` (Ped) |

### Parameters

- **`horse`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetVehicleDraftHorseIsAttachedTo(horse)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE4770DA1B8FF4FD1, horse)
```


---

## _GIVE_PED_HASH_COMMAND

**Description:** Ped Command Hash are special commands, that can be activated to change conditional anim variations or trigger transitions between conditional anims.
https://github.com/femga/rdr3_discoveries/blob/master/animations/scenarios

| Property | Value |
|----------|-------|
| Native Name | `_GIVE_PED_HASH_COMMAND` |
| Hash | `0xD65FDC686A031C83` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `commandHash` (Hash), `activationDuration` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`commandHash`** (`Hash`)
- **`activationDuration`** (`float`)

### Usage

**Lua (Direct):**
```lua
GivePedHashCommand(ped, commandHash, activationDuration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD65FDC686A031C83, ped, commandHash, activationDuration)
```


---

## _GIVE_PED_SCENARIO_PROP

| Property | Value |
|----------|-------|
| Native Name | `_GIVE_PED_SCENARIO_PROP` |
| Hash | `0x3BBDD6143FF16F98` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `object` (Object), `conditionalAnim` (const char*), `p3` (const char*), `p4` (const char*), `p5` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`object`** (`Object`)
- **`conditionalAnim`** (`const char*`)
- **`p3`** (`const char*`)
- **`p4`** (`const char*`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GivePedScenarioProp(ped, object, conditionalAnim, p3, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3BBDD6143FF16F98, ped, object, conditionalAnim, p3, p4, p5)
```


---

## _GIVE_PED_SCENARIO_PROP_DYNAMIC

**Description:** Only used in SP R* Script rcm_jack2

| Property | Value |
|----------|-------|
| Native Name | `_GIVE_PED_SCENARIO_PROP_DYNAMIC` |
| Hash | `0xA0774E388CE4A679` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `object` (Object), `p2` (const char*), `p3` (const char*), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`object`** (`Object`)
- **`p2`** (`const char*`)
- **`p3`** (`const char*`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GivePedScenarioPropDynamic(ped, object, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA0774E388CE4A679, ped, object, p2, p3, p4)
```


---

## _HAS_META_PED_ASSET_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_HAS_META_PED_ASSET_LOADED` |
| Hash | `0xB0B2C6D170B0E8E5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `requestId` (int) |

### Parameters

- **`requestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasMetaPedAssetLoaded(requestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB0B2C6D170B0E8E5, requestId)
```


---

## _HAS_META_PED_OUTFIT_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_HAS_META_PED_OUTFIT_LOADED` |
| Hash | `0x610438375E5D1801` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `requestId` (int) |

### Parameters

- **`requestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasMetaPedOutfitLoaded(requestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x610438375E5D1801, requestId)
```


---

## _HAS_META_PED_REQUEST_LOADED

| Property | Value |
|----------|-------|
| Native Name | `_HAS_META_PED_REQUEST_LOADED` |
| Hash | `0xC0940AC858C1E126` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `requestId` (int) |

### Parameters

- **`requestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasMetaPedRequestLoaded(requestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC0940AC858C1E126, requestId)
```


---

## _HAS_PED_BEEN_SHOVED_RECENTLY

| Property | Value |
|----------|-------|
| Native Name | `_HAS_PED_BEEN_SHOVED_RECENTLY` |
| Hash | `0x29FCE825613FEFCA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ms` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`ms`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasPedBeenShovedRecently(ped, ms)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x29FCE825613FEFCA, ped, ms)
```


---

## _HAS_PED_EMOTIONAL_PRESET_LOADED

**Description:** See _REQUEST_PED_EMOTIONAL_PRESET

| Property | Value |
|----------|-------|
| Native Name | `_HAS_PED_EMOTIONAL_PRESET_LOADED` |
| Hash | `0xDE3904B22695D9F9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `name` (const char*) |

### Parameters

- **`ped`** (`Ped`)
- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
local result = HasPedEmotionalPresetLoaded(ped, name)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDE3904B22695D9F9, ped, name)
```


---

## _HAS_PED_TAKEN_GORE_DAMAGE

**Description:** limb: 3 = Left Hand, 4 = Left Arm, 6 = Right Hand, 7 = Right Arm, 9 = Left Foot, 10 = Left Leg, 12 = Right Foot, 13 = Right Leg, 37 = Head

| Property | Value |
|----------|-------|
| Native Name | `_HAS_PED_TAKEN_GORE_DAMAGE` |
| Hash | `0xBA208A8D6399A3AC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `limb` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`limb`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = HasPedTakenGoreDamage(ped, limb)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBA208A8D6399A3AC, ped, limb)
```


---

## _HORSE_AGITATE

**Description:** _H* - _I*

| Property | Value |
|----------|-------|
| Native Name | `_HORSE_AGITATE` |
| Hash | `0xBAE08F00021BFFB2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `mount` (Ped), `kickOffRider` (BOOL) |

### Parameters

- **`mount`** (`Ped`)
- **`kickOffRider`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
HorseAgitate(mount, kickOffRider)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBAE08F00021BFFB2, mount, kickOffRider)
```


---

## _INCAPACITATED_REVIVE

| Property | Value |
|----------|-------|
| Native Name | `_INCAPACITATED_REVIVE` |
| Hash | `0xF6262491C7704A63` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ped2` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`ped2`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
IncapacitatedRevive(ped, ped2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF6262491C7704A63, ped, ped2)
```


---

## _IS_ANIMAL_CONTROLLED_BY_A_PLAYER

**Description:** Returns true only if it's a player ped and an animal as well.
_IS_ANY_* - _IS_CONTROL_*

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIMAL_CONTROLLED_BY_A_PLAYER` |
| Hash | `0x0E2F43516F998269` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimalControlledByAPlayer(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0E2F43516F998269, ped)
```


---

## _IS_ANIMAL_INTERACTION_RUNNING

| Property | Value |
|----------|-------|
| Native Name | `_IS_ANIMAL_INTERACTION_RUNNING` |
| Hash | `0x7FC84E85D98F063D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsAnimalInteractionRunning(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7FC84E85D98F063D, ped)
```


---

## _IS_META_PED_ASSET_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_META_PED_ASSET_VALID` |
| Hash | `0x93FFD92F05EC32FD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `requestId` (int) |

### Parameters

- **`requestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsMetaPedAssetValid(requestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x93FFD92F05EC32FD, requestId)
```


---

## _IS_META_PED_FISH

**Description:** Returns true if given ped is a fish.
_IS_ME* - _IS_MO*

| Property | Value |
|----------|-------|
| Native Name | `_IS_META_PED_FISH` |
| Hash | `0x118D476A6F1A13F1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsMetaPedFish(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x118D476A6F1A13F1, ped)
```


---

## _IS_META_PED_OUTFIT_EQUIPPED

**Description:** Used in script function HORSE_IS_META_PED_OUTFIT_SADDLE_EQUIPPED

| Property | Value |
|----------|-------|
| Native Name | `_IS_META_PED_OUTFIT_EQUIPPED` |
| Hash | `0x98082246107A6ACF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `outfit` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`outfit`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsMetaPedOutfitEquipped(ped, outfit)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x98082246107A6ACF, ped, outfit)
```


---

## _IS_META_PED_OUTFIT_REQUEST_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_META_PED_OUTFIT_REQUEST_VALID` |
| Hash | `0xB25E57FC8E37114D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `requestId` (int) |

### Parameters

- **`requestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsMetaPedOutfitRequestValid(requestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB25E57FC8E37114D, requestId)
```


---

## _IS_META_PED_REQUEST_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_META_PED_REQUEST_VALID` |
| Hash | `0x43E4DA469541A9C9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `requestId` (int) |

### Parameters

- **`requestId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsMetaPedRequestValid(requestId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x43E4DA469541A9C9, requestId)
```


---

## _IS_META_PED_USING_COMPONENT_CATEGORY

**Description:** checks if a ped is using a component category
see component category hashes here https://raw.githubusercontent.com/femga/rdr3_discoveries/refs/heads/master/clothes/cloth_hash_names.lua
Old name: _IS_META_PED_USING_COMPONENT

| Property | Value |
|----------|-------|
| Native Name | `_IS_META_PED_USING_COMPONENT_CATEGORY` |
| Hash | `0xFB4891BD7578CDC1` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `componentCategory` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`componentCategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsMetaPedUsingComponentCategory(ped, componentCategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFB4891BD7578CDC1, ped, componentCategory)
```


---

## _IS_MOUNT_SEAT_FREE

| Property | Value |
|----------|-------|
| Native Name | `_IS_MOUNT_SEAT_FREE` |
| Hash | `0xAAB0FE202E9FC9F0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `mount` (Ped), `seat` (int) |

### Parameters

- **`mount`** (`Ped`)
- **`seat`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsMountSeatFree(mount, seat)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAAB0FE202E9FC9F0, mount, seat)
```


---

## _IS_PED_ACTION_DISABLE_FLAG_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_ACTION_DISABLE_FLAG_ENABLED` |
| Hash | `0xB346C85D49CC998E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `actionDisableFlag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`actionDisableFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedActionDisableFlagEnabled(ped, actionDisableFlag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB346C85D49CC998E, ped, actionDisableFlag)
```


---

## _IS_PED_CHILD

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_CHILD` |
| Hash | `0x137772000DAF42C5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedChild(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x137772000DAF42C5, ped)
```


---

## _IS_PED_CLIMBING_LADDER

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_CLIMBING_LADDER` |
| Hash | `0x59643424B68D52B5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedClimbingLadder(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x59643424B68D52B5, ped)
```


---

## _IS_PED_COWERING

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_COWERING` |
| Hash | `0xB086C8C0F5701D14` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedCowering(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB086C8C0F5701D14, ped)
```


---

## _IS_PED_DOING_SCENARIO_TRANSITION

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_DOING_SCENARIO_TRANSITION` |
| Hash | `0xC488B8C0E52560D8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedDoingScenarioTransition(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC488B8C0E52560D8, ped)
```


---

## _IS_PED_DRAGGING

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_DRAGGING` |
| Hash | `0x226CF9B159E38F42` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedDragging(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x226CF9B159E38F42, ped)
```


---

## _IS_PED_DRUNK

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_DRUNK` |
| Hash | `0x50F124E6EF188B22` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedDrunk(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x50F124E6EF188B22, ped)
```


---

## IS_PED_GROUP_LEADER

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_GROUP_LEADER` |
| Hash | `0x878B68960C1C2A35` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `groupId` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`groupId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedGroupLeader(ped, groupId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x878B68960C1C2A35, ped, groupId)
```


---

## _IS_PED_INTIMIDATED

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_INTIMIDATED` |
| Hash | `0x57779B55B83E2BEA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedIntimidated(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57779B55B83E2BEA, ped)
```


---

## _IS_PED_INVESTIGATING

**Description:** _IS_PED_IN*

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_INVESTIGATING` |
| Hash | `0x7583A9D35248B83F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInvestigating(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7583A9D35248B83F, ped)
```


---

## _IS_PED_IN_POINT

**Description:** If returned true: There are enemy peds near friendly turn in ped. Going to aggro.
If returned false: Moving back to idle as there aren't any remaining enemy peds near ped
_IS_PED_IN_*

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_IN_POINT` |
| Hash | `0x078076AB50FB117F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `radius` (float), `p5` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInPoint(ped, x, y, z, radius, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x078076AB50FB117F, ped, x, y, z, radius, p5)
```


---

## _IS_PED_LEADING_ANY_GROUP

**Description:** _IS_PED_L* - _IS_PED_M*

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_LEADING_ANY_GROUP` |
| Hash | `0x917760CFE7A0E0F1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedLeadingAnyGroup(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x917760CFE7A0E0F1, ped)
```


---

## _IS_PED_MODEL_SUPPRESSED

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_MODEL_SUPPRESSED` |
| Hash | `0xAA9F048DCF69B6DC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedModelSuppressed(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAA9F048DCF69B6DC, model)
```


---

## _IS_PED_QUEUED_FOR_DELETION

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_QUEUED_FOR_DELETION` |
| Hash | `0x8D9BFCE3352DE47F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedQueuedForDeletion(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8D9BFCE3352DE47F, ped)
```


---

## _IS_PED_SLIDING

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_SLIDING` |
| Hash | `0xD6740E14E4CEFC0B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedSliding(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD6740E14E4CEFC0B, ped)
```


---

## _IS_PED_TARGET_ACTION_DISABLE_FLAG_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_TARGET_ACTION_DISABLE_FLAG_ENABLED` |
| Hash | `0x02AA2096FE00F3E1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `actionDisableFlag` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`actionDisableFlag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedTargetActionDisableFlagEnabled(ped, actionDisableFlag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x02AA2096FE00F3E1, ped, actionDisableFlag)
```


---

## _IS_PED_USING_ACTION_MODE_2

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_USING_ACTION_MODE_2` |
| Hash | `0xEBB208D6AE712C03` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedUsingActionMode2(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEBB208D6AE712C03, ped)
```


---

## _IS_PED_VISIBILITY_TRACKED

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_VISIBILITY_TRACKED` |
| Hash | `0x5102307CE88798EB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedVisibilityTracked(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5102307CE88798EB, ped)
```


---

## _IS_SCENARIO_BLOCKING_AREA_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_SCENARIO_BLOCKING_AREA_VALID` |
| Hash | `0x91A5F9CBEBB9D936` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = IsScenarioBlockingAreaValid(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x91A5F9CBEBB9D936, p0)
```


---

## _IS_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_IS_TARGET` |
| Hash | `0x6E5CBCB3941D7D08` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsTarget(ped, targetPed)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6E5CBCB3941D7D08, ped, targetPed)
```


---

## _IS_TEXTURE_VALID

| Property | Value |
|----------|-------|
| Native Name | `_IS_TEXTURE_VALID` |
| Hash | `0x31DC8D3F216D8509` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `textureId` (int) |

### Parameters

- **`textureId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsTextureValid(textureId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x31DC8D3F216D8509, textureId)
```


---

## _IS_THIS_MODEL_A_HORSE

| Property | Value |
|----------|-------|
| Native Name | `_IS_THIS_MODEL_A_HORSE` |
| Hash | `0x772A1969F649E902` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsThisModelAHorse(model)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x772A1969F649E902, model)
```


---

*End of PED natives part 17*
