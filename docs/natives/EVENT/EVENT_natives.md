# EVENT Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** EVENT  
**Natives in this file:** 38  
**Generated from:** RDR3natives JSON data

---

## ADD_SHOCKING_EVENT_AT_POSITION

**Description:** eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt
https://github.com/femga/rdr3_discoveries/blob/master/AI/EVENTS

| Property | Value |
|----------|-------|
| Native Name | `ADD_SHOCKING_EVENT_AT_POSITION` |
| Hash | `0xD9F8455409B525E9` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `eventType` (Hash), `x` (float), `y` (float), `z` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (float), `p9` (int), `p10` (int) |

### Parameters

- **`eventType`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`int`)
- **`p10`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = AddShockingEventAtPosition(eventType, x, y, z, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD9F8455409B525E9, eventType, x, y, z, p4, p5, p6, p7, p8, p9, p10)
```


---

## ADD_SHOCKING_EVENT_FOR_ENTITY

**Description:** eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt

| Property | Value |
|----------|-------|
| Native Name | `ADD_SHOCKING_EVENT_FOR_ENTITY` |
| Hash | `0x7FD8F3BE76F89422` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `eventType` (Hash), `entity` (Entity), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `p6` (float), `p7` (float), `p8` (BOOL), `p9` (BOOL), `p10` (int), `p11` (int) |

### Parameters

- **`eventType`** (`Hash`)
- **`entity`** (`Entity`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`BOOL`)
- **`p9`** (`BOOL`)
- **`p10`** (`int`)
- **`p11`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = AddShockingEventForEntity(eventType, entity, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7FD8F3BE76F89422, eventType, entity, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11)
```


---

## IS_SHOCKING_EVENT_IN_SPHERE

**Description:** eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt

| Property | Value |
|----------|-------|
| Native Name | `IS_SHOCKING_EVENT_IN_SPHERE` |
| Hash | `0x9DB47E16060D6354` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `eventType` (Hash), `x` (float), `y` (float), `z` (float), `radius` (float) |

### Parameters

- **`eventType`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsShockingEventInSphere(eventType, x, y, z, radius)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9DB47E16060D6354, eventType, x, y, z, radius)
```


---

## REMOVE_ALL_SHOCKING_EVENTS

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_ALL_SHOCKING_EVENTS` |
| Hash | `0xD47A168C2AB90DC4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemoveAllShockingEvents(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD47A168C2AB90DC4, p0)
```


---

## REMOVE_ALL_SHOCKING_EVENTS_OF_TYPE

**Description:** eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_ALL_SHOCKING_EVENTS_OF_TYPE` |
| Hash | `0x118873DD538490B4` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `eventType` (Hash), `scriptCreatedOnly` (BOOL) |

### Parameters

- **`eventType`** (`Hash`)
- **`scriptCreatedOnly`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemoveAllShockingEventsOfType(eventType, scriptCreatedOnly)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x118873DD538490B4, eventType, scriptCreatedOnly)
```


---

## REMOVE_SHOCKING_EVENT

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_SHOCKING_EVENT` |
| Hash | `0xE8BB3CC253A34559` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `event` (ScrHandle) |

### Parameters

- **`event`** (`ScrHandle`)

### Usage

**Lua (Direct):**
```lua
local result = RemoveShockingEvent(event)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE8BB3CC253A34559, event)
```


---

## REMOVE_SHOCKING_EVENT_SPAWN_BLOCKING_AREAS

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_SHOCKING_EVENT_SPAWN_BLOCKING_AREAS` |
| Hash | `0xDB249021652420C5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
RemoveShockingEventSpawnBlockingAreas()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDB249021652420C5, )
```


---

## SET_DECISION_MAKER

| Property | Value |
|----------|-------|
| Native Name | `SET_DECISION_MAKER` |
| Hash | `0x8AE2F981CDDB8FA4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `name` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`name`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetDecisionMaker(ped, name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8AE2F981CDDB8FA4, ped, name)
```


---

## SET_DECISION_MAKER_TO_DEFAULT

| Property | Value |
|----------|-------|
| Native Name | `SET_DECISION_MAKER_TO_DEFAULT` |
| Hash | `0x6B9C5C38838FB6E6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
SetDecisionMakerToDefault(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6B9C5C38838FB6E6, ped)
```


---

## SUPPRESS_SHOCKING_EVENTS_NEXT_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SUPPRESS_SHOCKING_EVENTS_NEXT_FRAME` |
| Hash | `0x84994FAD4E4E4E69` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SuppressShockingEventsNextFrame()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x84994FAD4E4E4E69, )
```


---

## _0x18E93EBFC1FCFA48

**Description:** Only used in R* SP Script beat_rat_infestation and homeinvasion

| Property | Value |
|----------|-------|
| Native Name | `_0x18E93EBFC1FCFA48` |
| Hash | `0x18E93EBFC1FCFA48` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `volume` (Volume), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`volume`** (`Volume`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x18E93EBFC1FCFA48(volume, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x18E93EBFC1FCFA48, volume, p1, p2)
```


---

## _0x1A5C5D350068A673

**Description:** AGGRO_CHECK_PROPERTY_DAMAGE: Property damage found with event

| Property | Value |
|----------|-------|
| Native Name | `_0x1A5C5D350068A673` |
| Hash | `0x1A5C5D350068A673` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x1A5C5D350068A673(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1A5C5D350068A673, ped, p1)
```


---

## _0x1D1B448D719415AB

**Description:** _GET*

| Property | Value |
|----------|-------|
| Native Name | `_0x1D1B448D719415AB` |
| Hash | `0x1D1B448D719415AB` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x1D1B448D719415AB(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1D1B448D719415AB, ped)
```


---

## _0x26054EB81AC0893B

| Property | Value |
|----------|-------|
| Native Name | `_0x26054EB81AC0893B` |
| Hash | `0x26054EB81AC0893B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
local result = _0x26054EB81AC0893B(object)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x26054EB81AC0893B, object)
```


---

## _0x2DD42FAD06E6F19E

| Property | Value |
|----------|-------|
| Native Name | `_0x2DD42FAD06E6F19E` |
| Hash | `0x2DD42FAD06E6F19E` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `object` (Object), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = _0x2DD42FAD06E6F19E(object, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2DD42FAD06E6F19E, object, p1, p2)
```


---

## _0x36D0F2BA2C0D9BDE

**Description:** _ADD* (_ADD_SHOCKING_EVENT_* ?)

| Property | Value |
|----------|-------|
| Native Name | `_0x36D0F2BA2C0D9BDE` |
| Hash | `0x36D0F2BA2C0D9BDE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x36D0F2BA2C0D9BDE(entity, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x36D0F2BA2C0D9BDE, entity, p1)
```


---

## _0x4465C3D1475BD3FD

| Property | Value |
|----------|-------|
| Native Name | `_0x4465C3D1475BD3FD` |
| Hash | `0x4465C3D1475BD3FD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `model` (Hash) |

### Parameters

- **`model`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x4465C3D1475BD3FD(model)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4465C3D1475BD3FD, model)
```


---

## _0x4B2B1A891D437CA7

**Description:** Only used in R* SP Script coachrobberies
_SET_S*

| Property | Value |
|----------|-------|
| Native Name | `_0x4B2B1A891D437CA7` |
| Hash | `0x4B2B1A891D437CA7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (float) |

### Parameters

- **`p0`** (`float`)

### Usage

**Lua (Direct):**
```lua
_0x4B2B1A891D437CA7(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4B2B1A891D437CA7, p0)
```


---

## _0x56B3410626A473E7

**Description:** Only used in R* SP Script beat_rat_infestation
Params: p0 = value returned by 0x18E93EBFC1FCFA48

| Property | Value |
|----------|-------|
| Native Name | `_0x56B3410626A473E7` |
| Hash | `0x56B3410626A473E7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x56B3410626A473E7(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x56B3410626A473E7, p0)
```


---

## _0x7C511E91738A0828

**Description:** Only used in R* SP Scripts
Hash only used in R* Script mob3.ysc: ROBBERY
_ADD_PED*

| Property | Value |
|----------|-------|
| Native Name | `_0x7C511E91738A0828` |
| Hash | `0x7C511E91738A0828` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped1` (Ped), `ped2` (Ped), `p2` (int), `p3` (Hash) |

### Parameters

- **`ped1`** (`Ped`)
- **`ped2`** (`Ped`)
- **`p2`** (`int`)
- **`p3`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x7C511E91738A0828(ped1, ped2, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7C511E91738A0828, ped1, ped2, p2, p3)
```


---

## _0x83D43F0FD5276E4D

**Description:** _GET*

| Property | Value |
|----------|-------|
| Native Name | `_0x83D43F0FD5276E4D` |
| Hash | `0x83D43F0FD5276E4D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x83D43F0FD5276E4D(entity, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x83D43F0FD5276E4D, entity, p1)
```


---

## _0x9520175B35E2268D

**Description:** _SET_P*

| Property | Value |
|----------|-------|
| Native Name | `_0x9520175B35E2268D` |
| Hash | `0x9520175B35E2268D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x9520175B35E2268D(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9520175B35E2268D, ped, p1)
```


---

## _0xA86B0EE9B39D15D6

| Property | Value |
|----------|-------|
| Native Name | `_0xA86B0EE9B39D15D6` |
| Hash | `0xA86B0EE9B39D15D6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
_0xA86B0EE9B39D15D6(object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA86B0EE9B39D15D6, object)
```


---

## _0xAD17A18215DD23D6

**Description:** Might return time since some (?) event.

| Property | Value |
|----------|-------|
| Native Name | `_0xAD17A18215DD23D6` |
| Hash | `0xAD17A18215DD23D6` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (int), `p2` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xAD17A18215DD23D6(entity, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAD17A18215DD23D6, entity, p1, p2)
```


---

## _0xB6F4825153920582

**Description:** _S* (_SUPPRESS_EVENTS_NEXT_FRAME?)

| Property | Value |
|----------|-------|
| Native Name | `_0xB6F4825153920582` |
| Hash | `0xB6F4825153920582` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xB6F4825153920582()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB6F4825153920582, )
```


---

## _0xE28D7FC9FD32ABEB

**Description:** HAS_ACTOR_RECEIVED_TRACKED_EVENT_THAT_SHOULD_ALERT - iTimeSinceEvent >= iTimeLimitMS

| Property | Value |
|----------|-------|
| Native Name | `_0xE28D7FC9FD32ABEB` |
| Hash | `0xE28D7FC9FD32ABEB` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `entity` (Entity), `eventType` (Hash), `p2` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`eventType`** (`Hash`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xE28D7FC9FD32ABEB(entity, eventType, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE28D7FC9FD32ABEB, entity, eventType, p2)
```


---

## _0xE2C2FBB7825FFC66

| Property | Value |
|----------|-------|
| Native Name | `_0xE2C2FBB7825FFC66` |
| Hash | `0xE2C2FBB7825FFC66` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0xE2C2FBB7825FFC66()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE2C2FBB7825FFC66, )
```


---

## _ADD_MODEL_TO_EVENT_MONITOR

**Description:** Models used in the scripts: P_REGISTER05X, P_REGISTER06X, P_REGISTER03X, PLAYER_ZERO, PLAYER_THREE, A_C_HORSE_MORGAN_FLAXENCHESTNUT

| Property | Value |
|----------|-------|
| Native Name | `_ADD_MODEL_TO_EVENT_MONITOR` |
| Hash | `0x608AD36A644A97FE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `model` (Hash), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`model`** (`Hash`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
AddModelToEventMonitor(model, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x608AD36A644A97FE, model, p1, p2)
```


---

## _CREATE_SHOCKING_EVENT

| Property | Value |
|----------|-------|
| Native Name | `_CREATE_SHOCKING_EVENT` |
| Hash | `0xCA1315C33B9A2847` |
| Return Type | `ScrHandle` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = CreateShockingEvent(args)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCA1315C33B9A2847, args)
```


---

## _EVENT_FLUSH_ALL_EVENT_TRACKERS

| Property | Value |
|----------|-------|
| Native Name | `_EVENT_FLUSH_ALL_EVENT_TRACKERS` |
| Hash | `0xAD8F2424C6E1E3A8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
EventFlushAllEventTrackers(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAD8F2424C6E1E3A8, ped)
```


---

## _EVENT_GET_RECENT_EVENT

**Description:** Returns eventType

| Property | Value |
|----------|-------|
| Native Name | `_EVENT_GET_RECENT_EVENT` |
| Hash | `0x796EECFF0C6D39BE` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `entity` (Entity), `p1` (int), `p2` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`p1`** (`int`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = EventGetRecentEvent(entity, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x796EECFF0C6D39BE, entity, p1, p2)
```


---

## _EVENT_GET_SOURCE_ENTITY_FROM_EVENT

| Property | Value |
|----------|-------|
| Native Name | `_EVENT_GET_SOURCE_ENTITY_FROM_EVENT` |
| Hash | `0x822A001BCEA5BD81` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `entity` (Entity), `eventType` (Hash), `p2` (int), `p3` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`eventType`** (`Hash`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = EventGetSourceEntityFromEvent(entity, eventType, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x822A001BCEA5BD81, entity, eventType, p2, p3)
```


---

## _EVENT_GET_TARGET_ENTITY_FROM_EVENT

| Property | Value |
|----------|-------|
| Native Name | `_EVENT_GET_TARGET_ENTITY_FROM_EVENT` |
| Hash | `0x38497F139981C5C9` |
| Return Type | `Entity` |
| Build | `1207` |
| Parameters | `entity` (Entity), `eventType` (Hash), `p2` (int), `p3` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`eventType`** (`Hash`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = EventGetTargetEntityFromEvent(entity, eventType, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x38497F139981C5C9, entity, eventType, p2, p3)
```


---

## _EVENT_GET_TIME_SINCE_EVENT

| Property | Value |
|----------|-------|
| Native Name | `_EVENT_GET_TIME_SINCE_EVENT` |
| Hash | `0xC6A7DC546E94FED5` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `entity` (Entity), `eventType` (Hash), `p2` (int), `p3` (int) |

### Parameters

- **`entity`** (`Entity`)
- **`eventType`** (`Hash`)
- **`p2`** (`int`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = EventGetTimeSinceEvent(entity, eventType, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC6A7DC546E94FED5, entity, eventType, p2, p3)
```


---

## _IS_EVENT_TRACKER_ACTIVE

| Property | Value |
|----------|-------|
| Native Name | `_IS_EVENT_TRACKER_ACTIVE` |
| Hash | `0x797B3D4D92E56094` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `eventName` (const char*), `shockingEvent` (Hash) |

### Parameters

- **`eventName`** (`const char*`)
- **`shockingEvent`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsEventTrackerActive(eventName, shockingEvent)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x797B3D4D92E56094, eventName, shockingEvent)
```


---

## _REMOVE_ALL_SHOCKING_EVENTS_IN_AREA

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_ALL_SHOCKING_EVENTS_IN_AREA` |
| Hash | `0xB4C71BA9CAB097BD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `radius` (float), `p4` (BOOL) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemoveAllShockingEventsInArea(x, y, z, radius, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB4C71BA9CAB097BD, x, y, z, radius, p4)
```


---

## _REMOVE_ALL_SHOCKING_EVENTS_OF_TYPE_IN_AREA

**Description:** eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_ALL_SHOCKING_EVENTS_OF_TYPE_IN_AREA` |
| Hash | `0x6A648D42BF271DC7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `eventType` (Hash), `x` (float), `y` (float), `z` (float), `radius` (float), `p5` (BOOL) |

### Parameters

- **`eventType`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`radius`** (`float`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
RemoveAllShockingEventsOfTypeInArea(eventType, x, y, z, radius, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A648D42BF271DC7, eventType, x, y, z, radius, p5)
```


---

## _SET_EVENT_TRACKER_FOR_PED

| Property | Value |
|----------|-------|
| Native Name | `_SET_EVENT_TRACKER_FOR_PED` |
| Hash | `0xBB1E41DD3D3C6250` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `eventName` (const char*), `p2` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`eventName`** (`const char*`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetEventTrackerForPed(ped, eventName, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xBB1E41DD3D3C6250, ped, eventName, p2)
```


---

*End of EVENT natives*
