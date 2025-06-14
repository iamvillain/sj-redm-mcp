# TASK Natives - Part 12 of 13

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TASK  
**Natives in this file:** 50  
**Total natives in namespace:** 640  
**Generated from:** RDR3natives JSON data

---

## _CREATE_WAYPOINT_PATH

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_WAYPOINT_PATH` |
| Hash | `0x5C885E0978B6AD60` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `pathName` (char*), `p1` (Any), `nodes` (int), `p3` (int) |

### Parameters

- **`pathName`** (`char*`)
- **`p1`** (`Any`)
- **`nodes`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = CreateWaypointPath(pathName, p1, nodes, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5C885E0978B6AD60, pathName, p1, nodes, p3)
```


---

## _CUFF_PED

| Property | Value |
|----------|-------|
| Native Name | `_CUFF_PED` |
| Hash | `0x7981037A96E7D174` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
CuffPed(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7981037A96E7D174, ped)
```


---

## _DELETE_PATCH_OBJECTS_FROM_HERB_COMPOSITES

**Description:** Params: p1 is always false except in script nb_egg_protector

| Property | Value |
|----------|-------|
| Native Name | `_DELETE_PATCH_OBJECTS_FROM_HERB_COMPOSITES` |
| Hash | `0x5758B1EE0C3FD4AC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `compositeId` (int), `p1` (BOOL) |

### Parameters

- **`compositeId`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
DeletePatchObjectsFromHerbComposites(compositeId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5758B1EE0C3FD4AC, compositeId, p1)
```


---

## _DELETE_SCENARIO_POINT

| Property | Value |
|----------|-------|
| Native Name | `_DELETE_SCENARIO_POINT` |
| Hash | `0x81948DFE4F5A0283` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scenario` (int) |

### Parameters

- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
DeleteScenarioPoint(scenario)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x81948DFE4F5A0283, scenario)
```


---

## _DETACH_CARRIABLE_PED

| Property | Value |
|----------|-------|
| Native Name | `_DETACH_CARRIABLE_PED` |
| Hash | `0x36D188AECB26094B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
DetachCarriablePed(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x36D188AECB26094B, ped)
```


---

## _DISASSOCIATE_PROP_FROM_SCENARIO

| Property | Value |
|----------|-------|
| Native Name | `_DISASSOCIATE_PROP_FROM_SCENARIO` |
| Hash | `0x6EF4E31B4D5D2DA0` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `scenario` (int), `propName` (char*) |

### Parameters

- **`scenario`** (`int`)
- **`propName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = DisassociatePropFromScenario(scenario, propName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6EF4E31B4D5D2DA0, scenario, propName)
```


---

## _DOES_SCENARIO_GROUP_EXIST_HASH

| Property | Value |
|----------|-------|
| Native Name | `_DOES_SCENARIO_GROUP_EXIST_HASH` |
| Hash | `0x76E98B52369A289C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scenarioGroup` (Hash) |

### Parameters

- **`scenarioGroup`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = DoesScenarioGroupExistHash(scenarioGroup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x76E98B52369A289C, scenarioGroup)
```


---

## _DOES_SCENARIO_POINT_HAVE_PROPS

| Property | Value |
|----------|-------|
| Native Name | `_DOES_SCENARIO_POINT_HAVE_PROPS` |
| Hash | `0xEA31F199A73801D3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scenario` (int) |

### Parameters

- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = DoesScenarioPointHaveProps(scenario)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEA31F199A73801D3, scenario)
```


---

## _FIND_MODEL_FOR_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_FIND_MODEL_FOR_ITEM` |
| Hash | `0xE47DD64B9F02677D` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `item` (Hash) |

### Parameters

- **`item`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = FindModelForItem(item)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE47DD64B9F02677D, item)
```


---

## _GET_HERB_COMPOSITE_NUM_ENTITIES

**Description:** Flowers, Stalks or whatever the composite has

| Property | Value |
|----------|-------|
| Native Name | `_GET_HERB_COMPOSITE_NUM_ENTITIES` |
| Hash | `0x96C6ED22FB742C3E` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `compositeId` (int), `outEntities` (Any*) |

### Parameters

- **`compositeId`** (`int`)
- **`outEntities`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = GetHerbCompositeNumEntities(compositeId, outEntities)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x96C6ED22FB742C3E, compositeId, outEntities)
```


---

## _GET_HOGTIE_ESCAPE_TIMER

| Property | Value |
|----------|-------|
| Native Name | `_GET_HOGTIE_ESCAPE_TIMER` |
| Hash | `0x4687E69D258BBE41` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetHogtieEscapeTimer(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4687E69D258BBE41, ped)
```


---

## _GET_ITEM_INTERACTION_ENTITY_FROM_PED

**Description:** item hashes: PRIMARYITEM, P_MUGCOFFEE01X_PH_R_HAND, P_BOTTLEBEER01X_PH_R_HAND
http://prntscr.com/1qtp3bz
https://github.com/femga/rdr3_discoveries/tree/master/tasks/TASK_ITEM_INTERACTION

| Property | Value |
|----------|-------|
| Native Name | `_GET_ITEM_INTERACTION_ENTITY_FROM_PED` |
| Hash | `0x05A0100EA714DB68` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `ped` (Ped), `item` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`item`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetItemInteractionEntityFromPed(ped, item)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x05A0100EA714DB68, ped, item)
```


---

## _GET_LED_HORSE_FROM_PED

| Property | Value |
|----------|-------|
| Native Name | `_GET_LED_HORSE_FROM_PED` |
| Hash | `0xED1F514AF4732258` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetLedHorseFromPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xED1F514AF4732258, ped)
```


---

## _GET_PED_IS_IGNORING_DEAD_BODIES

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_IS_IGNORING_DEAD_BODIES` |
| Hash | `0x1948BBE561A2375A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedIsIgnoringDeadBodies(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1948BBE561A2375A, ped)
```


---

## _GET_PED_USING_SCENARIO_POINT

| Property | Value |
|----------|-------|
| Native Name | `_GET_PED_USING_SCENARIO_POINT` |
| Hash | `0x5BA659955369B0E2` |
| Return Type | `Ped` |
| Build | `1207` |
| Parameters | `scenario` (int) |

### Parameters

- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetPedUsingScenarioPoint(scenario)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5BA659955369B0E2, scenario)
```


---

## _GET_SCENARIO_CONTAINER_OPENING_STATE

**Description:** Returns m_eContainerState

| Property | Value |
|----------|-------|
| Native Name | `_GET_SCENARIO_CONTAINER_OPENING_STATE` |
| Hash | `0xB219612B5568E9EC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `entity` (Entity) |

### Parameters

- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
local result = GetScenarioContainerOpeningState(entity)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB219612B5568E9EC, entity)
```


---

## _GET_SCENARIO_POINT_COORDS

**Description:** Params: p1 is always true in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_GET_SCENARIO_POINT_COORDS` |
| Hash | `0xA8452DD321607029` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `scenario` (int), `p1` (BOOL) |

### Parameters

- **`scenario`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetScenarioPointCoords(scenario, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA8452DD321607029, scenario, p1)
```


---

## _GET_SCENARIO_POINT_ENTITY

**Description:** Note: The current name for this native is the old name of 0x295514F198EFD0CA
Old name for this native: _GET_ENTITY_SCENARIO_POINT_IS_ATTACHED_TO

| Property | Value |
|----------|-------|
| Native Name | `_GET_SCENARIO_POINT_ENTITY` |
| Hash | `0x7467165EE97D3C68` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `scenario` (int) |

### Parameters

- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetScenarioPointEntity(scenario)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7467165EE97D3C68, scenario)
```


---

## _GET_SCENARIO_POINT_HEADING

**Description:** Params: p1 is always true in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_GET_SCENARIO_POINT_HEADING` |
| Hash | `0xB93EA7184BAA85C3` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `scenario` (int), `p1` (BOOL) |

### Parameters

- **`scenario`** (`int`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetScenarioPointHeading(scenario, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB93EA7184BAA85C3, scenario, p1)
```


---

## _GET_SCENARIO_POINT_PED_IS_USING

| Property | Value |
|----------|-------|
| Native Name | `_GET_SCENARIO_POINT_PED_IS_USING` |
| Hash | `0xDF7993356F52359A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = GetScenarioPointPedIsUsing(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDF7993356F52359A, ped, p1)
```


---

## _GET_SCENARIO_POINT_RADIUS

| Property | Value |
|----------|-------|
| Native Name | `_GET_SCENARIO_POINT_RADIUS` |
| Hash | `0x6718F40313A2B5A6` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `scenario` (int) |

### Parameters

- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetScenarioPointRadius(scenario)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6718F40313A2B5A6, scenario)
```


---

## _GET_SCENARIO_POINT_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_GET_SCENARIO_POINT_TYPE` |
| Hash | `0xA92450B5AE687AAF` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `scenario` (int) |

### Parameters

- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = GetScenarioPointType(scenario)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA92450B5AE687AAF, scenario)
```


---

## _GET_SCENARIO_POINT_TYPE_PED_IS_USING

| Property | Value |
|----------|-------|
| Native Name | `_GET_SCENARIO_POINT_TYPE_PED_IS_USING` |
| Hash | `0x2D0571BB55879DA2` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetScenarioPointTypePedIsUsing(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2D0571BB55879DA2, ped)
```


---

## _GET_SCRIPT_TASK_ACTION_TIME

| Property | Value |
|----------|-------|
| Native Name | `_GET_SCRIPT_TASK_ACTION_TIME` |
| Hash | `0xA710DC5D25F8B942` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `ped` (Ped), `task` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`task`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetScriptTaskActionTime(ped, task)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA710DC5D25F8B942, ped, task)
```


---

## _GET_TASK_FISHING

**Description:** Fishing Research: https://pastebin.com/NmK5ZLVs
Only used in R* Scripts fishing_core and av_fishing_river

| Property | Value |
|----------|-------|
| Native Name | `_GET_TASK_FISHING` |
| Hash | `0xF3735ACD11ACD500` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = GetTaskFishing(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF3735ACD11ACD500, ped, p1)
```


---

## _GET_TASK_MOVE_NETWORK_ID

**Description:** Returns hash of the underlying move network def, see move_networks.xml
https://alloc8or.re/rdr3/doc/misc/move_networks.txt

| Property | Value |
|----------|-------|
| Native Name | `_GET_TASK_MOVE_NETWORK_ID` |
| Hash | `0xCACC2F9D994504B7` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = GetTaskMoveNetworkId(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCACC2F9D994504B7, ped)
```


---

## _GET_TASK_MOVE_NETWORK_PHASE_FLOAT

| Property | Value |
|----------|-------|
| Native Name | `_GET_TASK_MOVE_NETWORK_PHASE_FLOAT` |
| Hash | `0x844CEEE428EA35B0` |
| Return Type | `float` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `phaseName` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`phaseName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
local result = GetTaskMoveNetworkPhaseFloat(ped, phaseName)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x844CEEE428EA35B0, ped, phaseName)
```


---

## _IS_HAT_BEING_PICKED_UP

**Description:** Returns true while a hat is being picked up
_IS_A* - _IS_D*

| Property | Value |
|----------|-------|
| Native Name | `_IS_HAT_BEING_PICKED_UP` |
| Hash | `0x11CD066F54DA0133` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hatObject` (Object) |

### Parameters

- **`hatObject`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = IsHatBeingPickedUp(hatObject)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x11CD066F54DA0133, hatObject)
```


---

## _IS_HAT_BEING_PICKED_UP_2

**Description:** Returns true while a hat is being picked up. Similar to 0x11CD066F54DA0133
_IS_A* - _IS_D*

| Property | Value |
|----------|-------|
| Native Name | `_IS_HAT_BEING_PICKED_UP_2` |
| Hash | `0x4ECCC2815CA79AE2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `hatObject` (Object) |

### Parameters

- **`hatObject`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = IsHatBeingPickedUp2(hatObject)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4ECCC2815CA79AE2, hatObject)
```


---

## _IS_PED_ARRESTING_ANY_PED

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_ARRESTING_ANY_PED` |
| Hash | `0xA9CC7856D52DBD25` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedArrestingAnyPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA9CC7856D52DBD25, ped)
```


---

## _IS_PED_DUELLING

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_DUELLING` |
| Hash | `0xC8B29D18022EA2B7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedDuelling(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC8B29D18022EA2B7, ped)
```


---

## _IS_PED_LEADING_HORSE

| Property | Value |
|----------|-------|
| Native Name | `_IS_PED_LEADING_HORSE` |
| Hash | `0xEFC4303DDC6E60D3` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedLeadingHorse(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEFC4303DDC6E60D3, ped)
```


---

## _IS_SCENARIO_GROUP_ENABLED_HASH

| Property | Value |
|----------|-------|
| Native Name | `_IS_SCENARIO_GROUP_ENABLED_HASH` |
| Hash | `0xDCC374913DE6AAA6` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `scenarioGroup` (Hash) |

### Parameters

- **`scenarioGroup`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsScenarioGroupEnabledHash(scenarioGroup)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDCC374913DE6AAA6, scenarioGroup)
```


---

## _IS_SCENARIO_POINT_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_IS_SCENARIO_POINT_ACTIVE` |
| Hash | `0x0CC36D4156006509` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scenario` (int) |

### Parameters

- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsScenarioPointActive(scenario)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0CC36D4156006509, scenario)
```


---

## _IS_SCENARIO_POINT_FLAG_SET

| Property | Value |
|----------|-------|
| Native Name | `_IS_SCENARIO_POINT_FLAG_SET` |
| Hash | `0x8569C38D2FB80650` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `scenario` (int), `flag` (int) |

### Parameters

- **`scenario`** (`int`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsScenarioPointFlagSet(scenario, flag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8569C38D2FB80650, scenario, flag)
```


---

## _MAKE_OBJECT_CARRIABLE

| Property | Value |
|----------|-------|
| Native Name | `_MAKE_OBJECT_CARRIABLE` |
| Hash | `0x78B4567E18B54480` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
MakeObjectCarriable(object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x78B4567E18B54480, object)
```


---

## _PED_FISHINGROD_HOOK_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_PED_FISHINGROD_HOOK_ENTITY` |
| Hash | `0x1A52076D26E09004` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
PedFishingrodHookEntity(ped, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1A52076D26E09004, ped, entity)
```


---

## _PED_FISHINGROD_HOOK_OBJECT

**Description:** Used with 'P_BODYPARTARMFLOAT02X' model in fishing_core.c

| Property | Value |
|----------|-------|
| Native Name | `_PED_FISHINGROD_HOOK_OBJECT` |
| Hash | `0xCE71C2F9BAA3F975` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `object` (Object) |

### Parameters

- **`ped`** (`Ped`)
- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
PedFishingrodHookObject(ped, object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCE71C2F9BAA3F975, ped, object)
```


---

## _PED_IS_IN_SCENARIO_BASE

| Property | Value |
|----------|-------|
| Native Name | `_PED_IS_IN_SCENARIO_BASE` |
| Hash | `0x02EBBB3989B7E695` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = PedIsInScenarioBase(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x02EBBB3989B7E695, ped)
```


---

## _REQUEST_HERB_COMPOSITE_ASSET

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/objects/composites

| Property | Value |
|----------|-------|
| Native Name | `_REQUEST_HERB_COMPOSITE_ASSET` |
| Hash | `0x73F0D0327BFA0812` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `asset` (Hash) |

### Parameters

- **`asset`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = RequestHerbCompositeAsset(asset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x73F0D0327BFA0812, asset)
```


---

## _RESET_SCENARIO_FOR_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `_RESET_SCENARIO_FOR_ENTITY` |
| Hash | `0x2E20878FD208A68E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scenario` (int), `entity` (Entity) |

### Parameters

- **`scenario`** (`int`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
ResetScenarioForEntity(scenario, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2E20878FD208A68E, scenario, entity)
```


---

## _RESET_SCENARIO_SCRIPT

| Property | Value |
|----------|-------|
| Native Name | `_RESET_SCENARIO_SCRIPT` |
| Hash | `0x5A40040BB5AE3EA2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scenario` (int) |

### Parameters

- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
ResetScenarioScript(scenario)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5A40040BB5AE3EA2, scenario)
```


---

## _SET_FISHING_BAIT

**Description:** Baits: p_fishHook02x, p_baitBread01x, p_baitCorn01x, p_baitCheese01x, p_baitWorm01x, p_baitCricket01x, p_crawdad01x, p_finisheDragonfly01x, p_finisdFishlure01x, p_finishdCrawd01x, p_finisheDragonflyLegendary01x, p_finisdFishlureLegendary01x, p_finishdCrawdLegendary01x, p_lgoc_spinner_v4

| Property | Value |
|----------|-------|
| Native Name | `_SET_FISHING_BAIT` |
| Hash | `0x9B0C7FA063E67629` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `bait` (char*), `withoutBuoy` (BOOL), `instantly` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`bait`** (`char*`)
- **`withoutBuoy`** (`BOOL`)
- **`instantly`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetFishingBait(ped, bait, withoutBuoy, instantly)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9B0C7FA063E67629, ped, bait, withoutBuoy, instantly)
```


---

## _SET_HOGTIE_ESCAPE_TIMER

**Description:** Sets the time it takes for a hogtied ped to escape
-1.0f for ped to never escape

| Property | Value |
|----------|-------|
| Native Name | `_SET_HOGTIE_ESCAPE_TIMER` |
| Hash | `0xAB591AE6B48B913E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `time` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`time`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetHogtieEscapeTimer(ped, time)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAB591AE6B48B913E, ped, time)
```


---

## _SET_PED_CLEAR_AIMING_IN_THE_AIR

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_CLEAR_AIMING_IN_THE_AIR` |
| Hash | `0x34C0010188D7C54A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPedClearAimingInTheAir(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x34C0010188D7C54A, ped, p1)
```


---

## _SET_PED_IGNORE_DEAD_BODIES

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_IGNORE_DEAD_BODIES` |
| Hash | `0x013A7BA5015C1372` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedIgnoreDeadBodies(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x013A7BA5015C1372, ped, toggle)
```


---

## _SET_PED_PATH_LADDER_COST_MODIFIER

**Description:** _SET_PED_PATH_P*

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_PATH_LADDER_COST_MODIFIER` |
| Hash | `0x70F7A1EAB1AE3AA8` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `ped` (Ped), `modifier` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`modifier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPedPathLadderCostModifier(ped, modifier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x70F7A1EAB1AE3AA8, ped, modifier)
```


---

## _SET_PED_PATH_MAY_ENTER_DEEP_WATER

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_PATH_MAY_ENTER_DEEP_WATER` |
| Hash | `0x9DE63896B176EA94` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `mayEnterDeepWater` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`mayEnterDeepWater`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetPedPathMayEnterDeepWater(ped, mayEnterDeepWater)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9DE63896B176EA94, ped, mayEnterDeepWater)
```


---

## _SET_SCENARIO_CONTAINER_OPENING_STATE

**Description:** Opens/closes containers: ChestDugUp

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_CONTAINER_OPENING_STATE` |
| Hash | `0x188F8071F244B9B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `open` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`open`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScenarioContainerOpeningState(entity, open)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x188F8071F244B9B8, entity, open)
```


---

## _SET_SCENARIO_GROUP_ENABLED_HASH

| Property | Value |
|----------|-------|
| Native Name | `_SET_SCENARIO_GROUP_ENABLED_HASH` |
| Hash | `0x9925EDDB6EAB88CD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `scenarioGroup` (Hash), `toggle` (BOOL) |

### Parameters

- **`scenarioGroup`** (`Hash`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetScenarioGroupEnabledHash(scenarioGroup, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9925EDDB6EAB88CD, scenarioGroup, toggle)
```


---

*End of TASK natives part 12*
