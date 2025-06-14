# OBJECT Natives - Part 2 of 4

Red Dead Redemption 3 Native Functions Reference

**Namespace:** OBJECT  
**Natives in this file:** 50  
**Total natives in namespace:** 153  
**Generated from:** RDR3natives JSON data

---

## REMOVE_DOOR_FROM_SYSTEM

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_DOOR_FROM_SYSTEM` |
| Hash | `0x464D8E1427156FE4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `doorHash` (Hash) |

### Parameters

- **`doorHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
RemoveDoorFromSystem(doorHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x464D8E1427156FE4, doorHash)
```


---

## REMOVE_PICKUP

| Property | Value |
|----------|-------|
| Native Name | `REMOVE_PICKUP` |
| Hash | `0x3288D8ACAECD2AB2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pickup` (Pickup) |

### Parameters

- **`pickup`** (`Pickup`)

### Usage

**Lua (Direct):**
```lua
RemovePickup(pickup)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3288D8ACAECD2AB2, pickup)
```


---

## SET_ACTIVATE_OBJECT_PHYSICS_AS_SOON_AS_IT_IS_UNFROZEN

| Property | Value |
|----------|-------|
| Native Name | `SET_ACTIVATE_OBJECT_PHYSICS_AS_SOON_AS_IT_IS_UNFROZEN` |
| Hash | `0x406137F8EF90EAF5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `toggle` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(object, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x406137F8EF90EAF5, object, toggle)
```


---

## SET_CUSTOM_TEXTURES_ON_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `SET_CUSTOM_TEXTURES_ON_OBJECT` |
| Hash | `0xE124889AE0521FCF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `txdHash` (Hash), `p2` (Any), `p3` (Any) |

### Parameters

- **`object`** (`Object`)
- **`txdHash`** (`Hash`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetCustomTexturesOnObject(object, txdHash, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE124889AE0521FCF, object, txdHash, p2, p3)
```


---

## SET_FORCE_OBJECT_THIS_FRAME

| Property | Value |
|----------|-------|
| Native Name | `SET_FORCE_OBJECT_THIS_FRAME` |
| Hash | `0xF538081986E49E9D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `x` (float), `y` (float), `z` (float), `p3` (float) |

### Parameters

- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetForceObjectThisFrame(x, y, z, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF538081986E49E9D, x, y, z, p3)
```


---

## SET_LOCAL_PLAYER_CAN_COLLECT_PORTABLE_PICKUPS

| Property | Value |
|----------|-------|
| Native Name | `SET_LOCAL_PLAYER_CAN_COLLECT_PORTABLE_PICKUPS` |
| Hash | `0x78857FC65CADB909` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetLocalPlayerCanCollectPortablePickups(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x78857FC65CADB909, toggle)
```


---

## SET_LOCAL_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_WITH_MODEL

**Description:** Maximum amount of pickup models that can be disallowed is 10.

Old name: _SET_LOCAL_PLAYER_CAN_USE_PICKUPS_WITH_THIS_MODEL

| Property | Value |
|----------|-------|
| Native Name | `SET_LOCAL_PLAYER_PERMITTED_TO_COLLECT_PICKUPS_WITH_MODEL` |
| Hash | `0x88EAEC617CD26926` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `modelHash` (Hash), `toggle` (BOOL) |

### Parameters

- **`modelHash`** (`Hash`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetLocalPlayerPermittedToCollectPickupsWithModel(modelHash, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x88EAEC617CD26926, modelHash, toggle)
```


---

## SET_MAX_NUM_PORTABLE_PICKUPS_CARRIED_BY_PLAYER

| Property | Value |
|----------|-------|
| Native Name | `SET_MAX_NUM_PORTABLE_PICKUPS_CARRIED_BY_PLAYER` |
| Hash | `0x0BF3B3BD47D79C08` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `modelHash` (Hash), `p1` (int) |

### Parameters

- **`modelHash`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetMaxNumPortablePickupsCarriedByPlayer(modelHash, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0BF3B3BD47D79C08, modelHash, p1)
```


---

## SET_OBJECT_ALLOW_LOW_LOD_BUOYANCY

| Property | Value |
|----------|-------|
| Native Name | `SET_OBJECT_ALLOW_LOW_LOD_BUOYANCY` |
| Hash | `0x4D89D607CB3DD1D2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `toggle` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetObjectAllowLowLodBuoyancy(object, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D89D607CB3DD1D2, object, toggle)
```


---

## SET_OBJECT_PHYSICS_PARAMS

**Description:** Adjust the physics parameters of a prop, or otherwise known as "object". This is useful for simulated gravity.

Other parameters seem to be unknown.

p2: seems to be weight and gravity related. Higher value makes the obj fall faster. Very sensitive?
p3: seems similar to p2
p4: makes obj fall slower the higher the value
p5: similar to p4

| Property | Value |
|----------|-------|
| Native Name | `SET_OBJECT_PHYSICS_PARAMS` |
| Hash | `0xF6DF6E90DE7DF90F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `weight` (float), `p2` (float), `p3` (float), `p4` (float), `p5` (float), `gravity` (float), `p7` (float), `p8` (float), `p9` (float), `p10` (float), `buoyancy` (float) |

### Parameters

- **`object`** (`Object`)
- **`weight`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)
- **`gravity`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`float`)
- **`p9`** (`float`)
- **`p10`** (`float`)
- **`buoyancy`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetObjectPhysicsParams(object, weight, p2, p3, p4, p5, gravity, p7, p8, p9, p10, buoyancy)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF6DF6E90DE7DF90F, object, weight, p2, p3, p4, p5, gravity, p7, p8, p9, p10, buoyancy)
```


---

## SET_OBJECT_TAKES_DAMAGE_FROM_COLLIDING_WITH_BUILDINGS

| Property | Value |
|----------|-------|
| Native Name | `SET_OBJECT_TAKES_DAMAGE_FROM_COLLIDING_WITH_BUILDINGS` |
| Hash | `0xEB6F1A9B5510A5D2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `enabled` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetObjectTakesDamageFromCollidingWithBuildings(object, enabled)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEB6F1A9B5510A5D2, object, enabled)
```


---

## SET_OBJECT_TARGETTABLE

| Property | Value |
|----------|-------|
| Native Name | `SET_OBJECT_TARGETTABLE` |
| Hash | `0x8A7391690F5AFD81` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `targettable` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`targettable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetObjectTargettable(object, targettable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8A7391690F5AFD81, object, targettable)
```


---

## SET_OBJECT_TINT_INDEX

**Description:** Alt name: _SET_OBJECT_TINT

Old name: _SET_OBJECT_TEXTURE_VARIATION

| Property | Value |
|----------|-------|
| Native Name | `SET_OBJECT_TINT_INDEX` |
| Hash | `0x971DA0055324D033` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `textureVariation` (int) |

### Parameters

- **`object`** (`Object`)
- **`textureVariation`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetObjectTintIndex(object, textureVariation)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x971DA0055324D033, object, textureVariation)
```


---

## SET_PICKUP_DO_NOT_AUTO_PLACE_ON_GROUND

| Property | Value |
|----------|-------|
| Native Name | `SET_PICKUP_DO_NOT_AUTO_PLACE_ON_GROUND` |
| Hash | `0x634C19521485AB25` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pickupObject` (Object) |

### Parameters

- **`pickupObject`** (`Object`)

### Usage

**Lua (Direct):**
```lua
SetPickupDoNotAutoPlaceOnGround(pickupObject)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x634C19521485AB25, pickupObject)
```


---

## SET_PICKUP_GENERATION_RANGE_MULTIPLIER

| Property | Value |
|----------|-------|
| Native Name | `SET_PICKUP_GENERATION_RANGE_MULTIPLIER` |
| Hash | `0x318516E02DE3ECE2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetPickupGenerationRangeMultiplier(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x318516E02DE3ECE2, multiplier)
```


---

## SET_PICKUP_HIDDEN_WHEN_UNCOLLECTABLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PICKUP_HIDDEN_WHEN_UNCOLLECTABLE` |
| Hash | `0x81218CE01B672219` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPickupHiddenWhenUncollectable(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x81218CE01B672219, p0, p1)
```


---

## SET_PICKUP_NOT_LOOTABLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PICKUP_NOT_LOOTABLE` |
| Hash | `0x92E87F60F21A0C3A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPickupNotLootable(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x92E87F60F21A0C3A, p0, p1)
```


---

## SET_PICKUP_PARTICLE_FX_HIGHLIGHT

| Property | Value |
|----------|-------|
| Native Name | `SET_PICKUP_PARTICLE_FX_HIGHLIGHT` |
| Hash | `0x1607C7D9B3021DF5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPickupParticleFxHighlight(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1607C7D9B3021DF5, p0, p1)
```


---

## SET_PICKUP_PARTICLE_FX_SPAWN

| Property | Value |
|----------|-------|
| Native Name | `SET_PICKUP_PARTICLE_FX_SPAWN` |
| Hash | `0xEB9740A38FD6D634` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPickupParticleFxSpawn(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEB9740A38FD6D634, p0, p1)
```


---

## SET_PICKUP_REGENERATION_TIME

| Property | Value |
|----------|-------|
| Native Name | `SET_PICKUP_REGENERATION_TIME` |
| Hash | `0x78015C9B4B3ECC9D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `pickup` (Pickup), `duration` (int) |

### Parameters

- **`pickup`** (`Pickup`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPickupRegenerationTime(pickup, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x78015C9B4B3ECC9D, pickup, duration)
```


---

## SET_PICKUP_UNCOLLECTABLE

| Property | Value |
|----------|-------|
| Native Name | `SET_PICKUP_UNCOLLECTABLE` |
| Hash | `0x4A8CB328CD6F1C9B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
SetPickupUncollectable(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4A8CB328CD6F1C9B, p0, p1)
```


---

## SET_STATE_OF_RAYFIRE_MAP_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `SET_STATE_OF_RAYFIRE_MAP_OBJECT` |
| Hash | `0x5C29F698D404C5E1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `state` (int) |

### Parameters

- **`object`** (`Object`)
- **`state`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetStateOfRayfireMapObject(object, state)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5C29F698D404C5E1, object, state)
```


---

## SET_TEAM_PICKUP_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `SET_TEAM_PICKUP_OBJECT` |
| Hash | `0x53E0DF1A2A3CF0CA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `p1` (Any), `p2` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`p1`** (`Any`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetTeamPickupObject(object, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x53E0DF1A2A3CF0CA, object, p1, p2)
```


---

## SLIDE_OBJECT

| Property | Value |
|----------|-------|
| Native Name | `SLIDE_OBJECT` |
| Hash | `0x2FDFF4107B8C1147` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `object` (Object), `toX` (float), `toY` (float), `toZ` (float), `speedX` (float), `speedY` (float), `speedZ` (float), `collision` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`toX`** (`float`)
- **`toY`** (`float`)
- **`toZ`** (`float`)
- **`speedX`** (`float`)
- **`speedY`** (`float`)
- **`speedZ`** (`float`)
- **`collision`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = SlideObject(object, toX, toY, toZ, speedX, speedY, speedZ, collision)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2FDFF4107B8C1147, object, toX, toY, toZ, speedX, speedY, speedZ, collision)
```


---

## SUPPRESS_PICKUP_REWARD_TYPE

| Property | Value |
|----------|-------|
| Native Name | `SUPPRESS_PICKUP_REWARD_TYPE` |
| Hash | `0xF92099527DB8E2A7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `rewardType` (int), `suppress` (BOOL) |

### Parameters

- **`rewardType`** (`int`)
- **`suppress`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SuppressPickupRewardType(rewardType, suppress)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF92099527DB8E2A7, rewardType, suppress)
```


---

## TRACK_OBJECT_VISIBILITY

| Property | Value |
|----------|-------|
| Native Name | `TRACK_OBJECT_VISIBILITY` |
| Hash | `0xB252BC036B525623` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
TrackObjectVisibility(object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB252BC036B525623, object)
```


---

## _0x08C5825A2932EA7B

| Property | Value |
|----------|-------|
| Native Name | `_0x08C5825A2932EA7B` |
| Hash | `0x08C5825A2932EA7B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x08C5825A2932EA7B(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x08C5825A2932EA7B, p0)
```


---

## _0x0943113E02322164

**Description:** Params: p1 = 23 in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0x0943113E02322164` |
| Hash | `0x0943113E02322164` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `object` (Object), `p1` (int) |

### Parameters

- **`object`** (`Object`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x0943113E02322164(object, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0943113E02322164, object, p1)
```


---

## _0x0C0A373D181BF900

**Description:** something to do with doors lockdown when navmesh is swapping?UPDATE_WORLD_STATE  seems to be for unlocking something

| Property | Value |
|----------|-------|
| Native Name | `_0x0C0A373D181BF900` |
| Hash | `0x0C0A373D181BF900` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `doorHash` (Hash) |

### Parameters

- **`doorHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
_0x0C0A373D181BF900(doorHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0C0A373D181BF900, doorHash)
```


---

## _0x1F5E07E14A86FAFC

**Description:** _SET_A(MBIENT_PICKUP_?)*

| Property | Value |
|----------|-------|
| Native Name | `_0x1F5E07E14A86FAFC` |
| Hash | `0x1F5E07E14A86FAFC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x1F5E07E14A86FAFC(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1F5E07E14A86FAFC, p0)
```


---

## _0x20135AF9C10D2A3D

| Property | Value |
|----------|-------|
| Native Name | `_0x20135AF9C10D2A3D` |
| Hash | `0x20135AF9C10D2A3D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x20135AF9C10D2A3D(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x20135AF9C10D2A3D, p0)
```


---

## _0x22031584496CFB70

| Property | Value |
|----------|-------|
| Native Name | `_0x22031584496CFB70` |
| Hash | `0x22031584496CFB70` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x22031584496CFB70(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x22031584496CFB70, p0, p1)
```


---

## _0x235C863DA77BD88D

| Property | Value |
|----------|-------|
| Native Name | `_0x235C863DA77BD88D` |
| Hash | `0x235C863DA77BD88D` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x235C863DA77BD88D(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x235C863DA77BD88D, p0, p1, p2)
```


---

## _0x250EBB11E81A10BE

| Property | Value |
|----------|-------|
| Native Name | `_0x250EBB11E81A10BE` |
| Hash | `0x250EBB11E81A10BE` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x250EBB11E81A10BE(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x250EBB11E81A10BE, p0)
```


---

## _0x2BF1953C0C21AC88

| Property | Value |
|----------|-------|
| Native Name | `_0x2BF1953C0C21AC88` |
| Hash | `0x2BF1953C0C21AC88` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x2BF1953C0C21AC88(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2BF1953C0C21AC88, p0)
```


---

## _0x3A77DAE8B4FD7586

| Property | Value |
|----------|-------|
| Native Name | `_0x3A77DAE8B4FD7586` |
| Hash | `0x3A77DAE8B4FD7586` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3A77DAE8B4FD7586(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3A77DAE8B4FD7586, p0, p1)
```


---

## _0x3DF1A0A58498E209

| Property | Value |
|----------|-------|
| Native Name | `_0x3DF1A0A58498E209` |
| Hash | `0x3DF1A0A58498E209` |
| Return Type | `void` |
| Build | `1436` |
| Parameters | `object` (Object), `p1` (Any) |

### Parameters

- **`object`** (`Object`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x3DF1A0A58498E209(object, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3DF1A0A58498E209, object, p1)
```


---

## _0x3E2616E7EA539480

| Property | Value |
|----------|-------|
| Native Name | `_0x3E2616E7EA539480` |
| Hash | `0x3E2616E7EA539480` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x3E2616E7EA539480(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3E2616E7EA539480, p0)
```


---

## _0x46CBCF0E98A4E156

| Property | Value |
|----------|-------|
| Native Name | `_0x46CBCF0E98A4E156` |
| Hash | `0x46CBCF0E98A4E156` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x46CBCF0E98A4E156(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x46CBCF0E98A4E156, p0, p1)
```


---

## _0x491439AEF410A2FC

| Property | Value |
|----------|-------|
| Native Name | `_0x491439AEF410A2FC` |
| Hash | `0x491439AEF410A2FC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x491439AEF410A2FC(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x491439AEF410A2FC, p0)
```


---

## _0x4AE07EBA3462C5D5

| Property | Value |
|----------|-------|
| Native Name | `_0x4AE07EBA3462C5D5` |
| Hash | `0x4AE07EBA3462C5D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x4AE07EBA3462C5D5(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4AE07EBA3462C5D5, p0, p1)
```


---

## _0x4D8611DFE1126478

| Property | Value |
|----------|-------|
| Native Name | `_0x4D8611DFE1126478` |
| Hash | `0x4D8611DFE1126478` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x4D8611DFE1126478(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4D8611DFE1126478, p0)
```


---

## _0x5230BF34EB0EC645

| Property | Value |
|----------|-------|
| Native Name | `_0x5230BF34EB0EC645` |
| Hash | `0x5230BF34EB0EC645` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x5230BF34EB0EC645(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5230BF34EB0EC645, p0)
```


---

## _0x57C242543B7B8FB9

| Property | Value |
|----------|-------|
| Native Name | `_0x57C242543B7B8FB9` |
| Hash | `0x57C242543B7B8FB9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x57C242543B7B8FB9(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x57C242543B7B8FB9, p0, p1)
```


---

## _0x58DE624FA7FB0E7F

| Property | Value |
|----------|-------|
| Native Name | `_0x58DE624FA7FB0E7F` |
| Hash | `0x58DE624FA7FB0E7F` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x58DE624FA7FB0E7F(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x58DE624FA7FB0E7F, p0)
```


---

## _0x614D0B4533F842D3

| Property | Value |
|----------|-------|
| Native Name | `_0x614D0B4533F842D3` |
| Hash | `0x614D0B4533F842D3` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x614D0B4533F842D3(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x614D0B4533F842D3, p0)
```


---

## _0x6579860A5558524A

| Property | Value |
|----------|-------|
| Native Name | `_0x6579860A5558524A` |
| Hash | `0x6579860A5558524A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
_0x6579860A5558524A(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6579860A5558524A, p0, p1)
```


---

## _0x6E2AA80BB0C03728

| Property | Value |
|----------|-------|
| Native Name | `_0x6E2AA80BB0C03728` |
| Hash | `0x6E2AA80BB0C03728` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6E2AA80BB0C03728(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6E2AA80BB0C03728, p0, p1)
```


---

## _0x7D4411D6736CD295

| Property | Value |
|----------|-------|
| Native Name | `_0x7D4411D6736CD295` |
| Hash | `0x7D4411D6736CD295` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7D4411D6736CD295(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7D4411D6736CD295, p0, p1)
```


---

## _0x7F458B543006C8FE

**Description:** something to do with doors lockdown when navmesh is swapping? UPDATE_WORLD_STATE, seems to be for locking something

| Property | Value |
|----------|-------|
| Native Name | `_0x7F458B543006C8FE` |
| Hash | `0x7F458B543006C8FE` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `doorHash` (Hash), `p1` (int) |

### Parameters

- **`doorHash`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x7F458B543006C8FE(doorHash, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7F458B543006C8FE, doorHash, p1)
```


---

*End of OBJECT natives part 2*
