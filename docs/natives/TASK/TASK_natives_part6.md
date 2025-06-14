# TASK Natives - Part 6 of 13

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TASK  
**Natives in this file:** 50  
**Total natives in namespace:** 640  
**Generated from:** RDR3natives JSON data

---

## TASK_PERFORM_SEQUENCE_FROM_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `TASK_PERFORM_SEQUENCE_FROM_PROGRESS` |
| Hash | `0x89221B16730234F0` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskPerformSequenceFromProgress(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x89221B16730234F0, ped, p1, p2, p3)
```


---

## TASK_PERSISTENT_CHARACTER

| Property | Value |
|----------|-------|
| Native Name | `TASK_PERSISTENT_CHARACTER` |
| Hash | `0x4391700CBD89C3D8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskPersistentCharacter(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4391700CBD89C3D8, ped)
```


---

## TASK_PICKUP_CARRIABLE_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_PICKUP_CARRIABLE_ENTITY` |
| Hash | `0x502EC17B1BED4BFA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)

### Usage

**Lua (Direct):**
```lua
TaskPickupCarriableEntity(ped, entity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x502EC17B1BED4BFA, ped, entity)
```


---

## TASK_PICK_UP_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `TASK_PICK_UP_WEAPON` |
| Hash | `0x55B0ECFD98596624` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskPickUpWeapon(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x55B0ECFD98596624, ped, p1)
```


---

## TASK_PLACE_CARRIED_ENTITY_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_PLACE_CARRIED_ENTITY_AT_COORD` |
| Hash | `0xC7F0B43DCDC57E3D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity), `x` (float), `y` (float), `z` (float), `p5` (float), `flags` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`p5`** (`float`)
- **`flags`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskPlaceCarriedEntityAtCoord(ped, entity, x, y, z, p5, flags)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC7F0B43DCDC57E3D, ped, entity, x, y, z, p5, flags)
```


---

## TASK_PLACE_CARRIED_ENTITY_ON_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `TASK_PLACE_CARRIED_ENTITY_ON_MOUNT` |
| Hash | `0x6D3D87C57B3D52C7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity), `mount` (Ped), `p3` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)
- **`mount`** (`Ped`)
- **`p3`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskPlaceCarriedEntityOnMount(ped, entity, mount, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D3D87C57B3D52C7, ped, entity, mount, p3)
```


---

## TASK_PLANT_BOMB

| Property | Value |
|----------|-------|
| Native Name | `TASK_PLANT_BOMB` |
| Hash | `0x965FEC691D55E9BF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `heading` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskPlantBomb(ped, x, y, z, heading)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x965FEC691D55E9BF, ped, x, y, z, heading)
```


---

## TASK_PLAY_ANIM

**Description:** https://github.com/femga/rdr3_discoveries/tree/master/animations
flags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eScriptedAnimFlags
ikFlags: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/eIkControlFlags 

| Property | Value |
|----------|-------|
| Native Name | `TASK_PLAY_ANIM` |
| Hash | `0xEA47FE3719165B94` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `ped` (Ped), `animDict` (char*), `animName` (char*), `speed` (float), `speedMultiplier` (float), `duration` (int), `flags` (int), `playbackRate` (float), `p8` (BOOL), `ikFlags` (int), `p10` (BOOL), `taskFilter` (char*), `p12` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`animDict`** (`char*`)
- **`animName`** (`char*`)
- **`speed`** (`float`)
- **`speedMultiplier`** (`float`)
- **`duration`** (`int`)
- **`flags`** (`int`)
- **`playbackRate`** (`float`)
- **`p8`** (`BOOL`)
- **`ikFlags`** (`int`)
- **`p10`** (`BOOL`)
- **`taskFilter`** (`char*`)
- **`p12`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskPlayAnim(ped, animDict, animName, speed, speedMultiplier, duration, flags, playbackRate, p8, ikFlags, p10, taskFilter, p12)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEA47FE3719165B94, ped, animDict, animName, speed, speedMultiplier, duration, flags, playbackRate, p8, ikFlags, p10, taskFilter, p12)
```


---

## TASK_PLAY_ANIM_ADVANCED

**Description:** flags: see TASK_PLAY_ANIM
ikFlags: see TASK_PLAY_ANIM

| Property | Value |
|----------|-------|
| Native Name | `TASK_PLAY_ANIM_ADVANCED` |
| Hash | `0x83CDB10EA29B370B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `animDict` (char*), `animName` (char*), `posX` (float), `posY` (float), `posZ` (float), `rotX` (float), `rotY` (float), `rotZ` (float), `speed` (float), `speedMultiplier` (float), `duration` (int), `flags` (int), `p13` (float), `p14` (int), `p15` (int), `p16` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`animDict`** (`char*`)
- **`animName`** (`char*`)
- **`posX`** (`float`)
- **`posY`** (`float`)
- **`posZ`** (`float`)
- **`rotX`** (`float`)
- **`rotY`** (`float`)
- **`rotZ`** (`float`)
- **`speed`** (`float`)
- **`speedMultiplier`** (`float`)
- **`duration`** (`int`)
- **`flags`** (`int`)
- **`p13`** (`float`)
- **`p14`** (`int`)
- **`p15`** (`int`)
- **`p16`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskPlayAnimAdvanced(ped, animDict, animName, posX, posY, posZ, rotX, rotY, rotZ, speed, speedMultiplier, duration, flags, p13, p14, p15, p16)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x83CDB10EA29B370B, ped, animDict, animName, posX, posY, posZ, rotX, rotY, rotZ, speed, speedMultiplier, duration, flags, p13, p14, p15, p16)
```


---

## TASK_PLAY_EMOTE_WITH_HASH

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/animations/kit_emotes_list.lua
emote: https://alloc8or.re/rdr3/doc/enums/eEmote.txt

enum eEmoteType
{
	EMOTE_TYPE_INVALID = -1,
	EMOTE_TYPE_REACT,
	EMOTE_TYPE_ACTION,
	EMOTE_TYPE_TAUNT,
	EMOTE_TYPE_GREET,
	EMOTE_TYPE_TWIRL_GUN,
	EMOTE_TYPE_DANCE_FLOOR
};

enum eEmotePlaybackMode
{
	EMOTE_PM_INVALID = -1,
	EMOTE_PM_UPPERBODY,
	EMOTE_PM_UPPERBODY_LOOP,
	EMOTE_PM_FULLBODY,
};

| Property | Value |
|----------|-------|
| Native Name | `TASK_PLAY_EMOTE_WITH_HASH` |
| Hash | `0xB31A277C1AC7B7FF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `emoteType` (int), `playbackMode` (int), `emote` (Hash), `isSecondaryTask` (BOOL), `canBreakOut` (BOOL), `disableEarlyOutAnimTag` (BOOL), `ignoreInvalidMainTask` (BOOL), `destroyProps` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`emoteType`** (`int`)
- **`playbackMode`** (`int`)
- **`emote`** (`Hash`)
- **`isSecondaryTask`** (`BOOL`)
- **`canBreakOut`** (`BOOL`)
- **`disableEarlyOutAnimTag`** (`BOOL`)
- **`ignoreInvalidMainTask`** (`BOOL`)
- **`destroyProps`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskPlayEmoteWithHash(ped, emoteType, playbackMode, emote, isSecondaryTask, canBreakOut, disableEarlyOutAnimTag, ignoreInvalidMainTask, destroyProps)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB31A277C1AC7B7FF, ped, emoteType, playbackMode, emote, isSecondaryTask, canBreakOut, disableEarlyOutAnimTag, ignoreInvalidMainTask, destroyProps)
```


---

## TASK_PLAY_UPPER_ANIM_FACING_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_PLAY_UPPER_ANIM_FACING_ENTITY` |
| Hash | `0xAD67214236AB1CFE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `animDict` (char*), `animName` (char*), `entity` (Entity), `p4` (int), `p5` (float), `p6` (float), `p7` (int), `p8` (float), `p9` (BOOL), `p10` (BOOL), `p11` (float), `p12` (char*), `p13` (int), `p14` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`animDict`** (`char*`)
- **`animName`** (`char*`)
- **`entity`** (`Entity`)
- **`p4`** (`int`)
- **`p5`** (`float`)
- **`p6`** (`float`)
- **`p7`** (`int`)
- **`p8`** (`float`)
- **`p9`** (`BOOL`)
- **`p10`** (`BOOL`)
- **`p11`** (`float`)
- **`p12`** (`char*`)
- **`p13`** (`int`)
- **`p14`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskPlayUpperAnimFacingEntity(ped, animDict, animName, entity, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAD67214236AB1CFE, ped, animDict, animName, entity, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14)
```


---

## TASK_POLICE

| Property | Value |
|----------|-------|
| Native Name | `TASK_POLICE` |
| Hash | `0x87BE56724650408E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = TaskPolice(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x87BE56724650408E, ped, p1)
```


---

## TASK_PUT_PED_DIRECTLY_INTO_COVER

| Property | Value |
|----------|-------|
| Native Name | `TASK_PUT_PED_DIRECTLY_INTO_COVER` |
| Hash | `0x4172393E6BE1FECE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `timeout` (int), `p5` (BOOL), `p6` (float), `p7` (Any), `p8` (Any), `coverpoint` (ScrHandle), `p10` (BOOL), `p11` (BOOL), `p12` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`timeout`** (`int`)
- **`p5`** (`BOOL`)
- **`p6`** (`float`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)
- **`coverpoint`** (`ScrHandle`)
- **`p10`** (`BOOL`)
- **`p11`** (`BOOL`)
- **`p12`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskPutPedDirectlyIntoCover(ped, x, y, z, timeout, p5, p6, p7, p8, coverpoint, p10, p11, p12)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4172393E6BE1FECE, ped, x, y, z, timeout, p5, p6, p7, p8, coverpoint, p10, p11, p12)
```


---

## TASK_PUT_PED_DIRECTLY_INTO_GRAPPLE

**Description:** grappleStyle: AR_GRAPPLE_STRUGGLE, AR_ALLIGATOR_LEG_GRAB_CHALLENGE_FAIL, AR_GRAPPLE_BACK_FROM_BACK, AR_GRAPPLE_BACK_DEFEND, AR_GRAPPLE_FRONT_FROM_FRONT

| Property | Value |
|----------|-------|
| Native Name | `TASK_PUT_PED_DIRECTLY_INTO_GRAPPLE` |
| Hash | `0xA05F3F20889D7A5B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `grappleTarget` (Ped), `grappleStyle` (Hash), `p3` (float), `p4` (float), `p5` (BOOL), `p6` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`grappleTarget`** (`Ped`)
- **`grappleStyle`** (`Hash`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskPutPedDirectlyIntoGrapple(ped, grappleTarget, grappleStyle, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA05F3F20889D7A5B, ped, grappleTarget, grappleStyle, p3, p4, p5, p6)
```


---

## TASK_PUT_PED_DIRECTLY_INTO_MELEE

**Description:** meleeStyles: AR_GRAPPLE_BACK_FROM_BACK, AR_GRAPPLE_MOUNT_FACEDOWN_FROM_FRONT, AR_ALLIGATOR_LEAPKILL, AR_ALLIGATOR_WAIST_AUTOKILL_FRONT

| Property | Value |
|----------|-------|
| Native Name | `TASK_PUT_PED_DIRECTLY_INTO_MELEE` |
| Hash | `0x1C6CD14A876FFE39` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `meleeTarget` (Ped), `meleeStyle` (Hash), `p3` (float), `animBlendRatio` (float), `p5` (BOOL), `p6` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`meleeTarget`** (`Ped`)
- **`meleeStyle`** (`Hash`)
- **`p3`** (`float`)
- **`animBlendRatio`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskPutPedDirectlyIntoMelee(ped, meleeTarget, meleeStyle, p3, animBlendRatio, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1C6CD14A876FFE39, ped, meleeTarget, meleeStyle, p3, animBlendRatio, p5, p6)
```


---

## TASK_REACT

**Description:** Makes a ped react to an entity.
Params: reactingTo Entity can be 0, p8 is always 4

| Property | Value |
|----------|-------|
| Native Name | `TASK_REACT` |
| Hash | `0xC4C32C31920E1B70` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `reactingTo` (Entity), `x` (float), `y` (float), `z` (float), `reactionName` (char*), `p6` (float), `p7` (float), `p8` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`reactingTo`** (`Entity`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`reactionName`** (`char*`)
- **`p6`** (`float`)
- **`p7`** (`float`)
- **`p8`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskReact(ped, reactingTo, x, y, z, reactionName, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC4C32C31920E1B70, ped, reactingTo, x, y, z, reactionName, p6, p7, p8)
```


---

## TASK_RELOAD_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `TASK_RELOAD_WEAPON` |
| Hash | `0x62D2916F56B9CD2D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `unused` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`unused`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskReloadWeapon(ped, unused)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x62D2916F56B9CD2D, ped, unused)
```


---

## TASK_REVIVE_TARGET

| Property | Value |
|----------|-------|
| Native Name | `TASK_REVIVE_TARGET` |
| Hash | `0x356088527D9EBAAD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `reviver` (Ped), `tool` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`reviver`** (`Ped`)
- **`tool`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TaskReviveTarget(ped, reviver, tool)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x356088527D9EBAAD, ped, reviver, tool)
```


---

## TASK_RIDE_TRAIN

| Property | Value |
|----------|-------|
| Native Name | `TASK_RIDE_TRAIN` |
| Hash | `0x37FB1C870E2EC2C6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `train` (Vehicle), `scenarioPoint` (int), `scenarioHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`train`** (`Vehicle`)
- **`scenarioPoint`** (`int`)
- **`scenarioHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TaskRideTrain(ped, train, scenarioPoint, scenarioHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x37FB1C870E2EC2C6, ped, train, scenarioPoint, scenarioHash)
```


---

## TASK_ROB_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_ROB_PED` |
| Hash | `0x7BB967F85D8CCBDB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskRobPed(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7BB967F85D8CCBDB, ped, p1, p2, p3, p4)
```


---

## TASK_SCRIPTED_ANIMATION

| Property | Value |
|----------|-------|
| Native Name | `TASK_SCRIPTED_ANIMATION` |
| Hash | `0x126EF75F1E17ABE5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `args` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TaskScriptedAnimation(ped, args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x126EF75F1E17ABE5, ped, args)
```


---

## TASK_SEEK_CLEAR_LOS_TO_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_SEEK_CLEAR_LOS_TO_ENTITY` |
| Hash | `0x8D7F2A63688C20A4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `entity` (Entity), `p2` (float), `p3` (float), `p4` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`entity`** (`Entity`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskSeekClearLosToEntity(ped, entity, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8D7F2A63688C20A4, ped, entity, p2, p3, p4)
```


---

## TASK_SEEK_COVER_FROM_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_SEEK_COVER_FROM_PED` |
| Hash | `0x84D32B3BEC531324` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `fromPed` (Ped), `duration` (int), `p3` (Any), `p4` (Any), `p5` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`fromPed`** (`Ped`)
- **`duration`** (`int`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskSeekCoverFromPed(ped, fromPed, duration, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x84D32B3BEC531324, ped, fromPed, duration, p3, p4, p5)
```


---

## TASK_SEEK_COVER_FROM_POS

| Property | Value |
|----------|-------|
| Native Name | `TASK_SEEK_COVER_FROM_POS` |
| Hash | `0x75AC2B60386D89F2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `duration` (int), `p5` (Any), `p6` (Any), `p7` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`duration`** (`int`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskSeekCoverFromPos(ped, x, y, z, duration, p5, p6, p7)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75AC2B60386D89F2, ped, x, y, z, duration, p5, p6, p7)
```


---

## TASK_SEEK_COVER_TO_COORDS

| Property | Value |
|----------|-------|
| Native Name | `TASK_SEEK_COVER_TO_COORDS` |
| Hash | `0x39246A6958EF072C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)
- **`p9`** (`Any`)
- **`p10`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskSeekCoverToCoords(ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x39246A6958EF072C, ped, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## TASK_SEEK_COVER_TO_COVER_POINT

| Property | Value |
|----------|-------|
| Native Name | `TASK_SEEK_COVER_TO_COVER_POINT` |
| Hash | `0xD43D95C7A869447F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)
- **`p7`** (`Any`)
- **`p8`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskSeekCoverToCoverPoint(ped, p1, p2, p3, p4, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD43D95C7A869447F, ped, p1, p2, p3, p4, p5, p6, p7, p8)
```


---

## TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS

| Property | Value |
|----------|-------|
| Native Name | `TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS` |
| Hash | `0x90D2156198831D69` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `toggle` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskSetBlockingOfNonTemporaryEvents(ped, toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x90D2156198831D69, ped, toggle)
```


---

## TASK_SET_CROUCH_MOVEMENT

| Property | Value |
|----------|-------|
| Native Name | `TASK_SET_CROUCH_MOVEMENT` |
| Hash | `0x17293C633C8AC019` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (Any), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`Any`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskSetCrouchMovement(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x17293C633C8AC019, ped, p1, p2, p3)
```


---

## TASK_SET_SPHERE_DEFENSIVE_AREA

| Property | Value |
|----------|-------|
| Native Name | `TASK_SET_SPHERE_DEFENSIVE_AREA` |
| Hash | `0x933C06518B52A9A4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float), `p3` (float), `p4` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`float`)
- **`p4`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskSetSphereDefensiveArea(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x933C06518B52A9A4, ped, p1, p2, p3, p4)
```


---

## TASK_SET_STEALTH_MOVEMENT

| Property | Value |
|----------|-------|
| Native Name | `TASK_SET_STEALTH_MOVEMENT` |
| Hash | `0x4C3FA937B44A90FA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (Any), `p3` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`Any`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskSetStealthMovement(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4C3FA937B44A90FA, ped, p1, p2, p3)
```


---

## TASK_SHOCKING_EVENT_REACT

| Property | Value |
|----------|-------|
| Native Name | `TASK_SHOCKING_EVENT_REACT` |
| Hash | `0x452419CBD838065B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskShockingEventReact(ped, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x452419CBD838065B, ped, p1, p2)
```


---

## TASK_SHOOT_AT_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_SHOOT_AT_COORD` |
| Hash | `0x46A6CC01E0826106` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `duration` (int), `firingPattern` (Hash), `p6` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`duration`** (`int`)
- **`firingPattern`** (`Hash`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskShootAtCoord(ped, x, y, z, duration, firingPattern, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x46A6CC01E0826106, ped, x, y, z, duration, firingPattern, p6)
```


---

## TASK_SHOOT_AT_ENTITY

| Property | Value |
|----------|-------|
| Native Name | `TASK_SHOOT_AT_ENTITY` |
| Hash | `0x08DA95E8298AE772` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `entity` (Entity), `targetEntity` (Entity), `duration` (int), `firingPattern` (Hash), `affectCockedState` (BOOL) |

### Parameters

- **`entity`** (`Entity`)
- **`targetEntity`** (`Entity`)
- **`duration`** (`int`)
- **`firingPattern`** (`Hash`)
- **`affectCockedState`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskShootAtEntity(entity, targetEntity, duration, firingPattern, affectCockedState)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x08DA95E8298AE772, entity, targetEntity, duration, firingPattern, affectCockedState)
```


---

## TASK_SHOOT_WITH_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `TASK_SHOOT_WITH_WEAPON` |
| Hash | `0x08AA95E8298AE772` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `args` (Any*) |

### Parameters

- **`ped`** (`Ped`)
- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TaskShootWithWeapon(ped, args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x08AA95E8298AE772, ped, args)
```


---

## TASK_SHUFFLE_TO_NEXT_VEHICLE_SEAT

**Description:** Makes the specified ped shuffle to the next vehicle seat.
The ped MUST be in a vehicle and the vehicle parameter MUST be the ped's current vehicle.

| Property | Value |
|----------|-------|
| Native Name | `TASK_SHUFFLE_TO_NEXT_VEHICLE_SEAT` |
| Hash | `0x7AA80209BDA643EB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
TaskShuffleToNextVehicleSeat(ped, vehicle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7AA80209BDA643EB, ped, vehicle)
```


---

## TASK_SMART_FLEE_COORD

**Description:** Makes the specified ped flee the specified distance from the specified position.
fleeType: see TASK_FLEE_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_SMART_FLEE_COORD` |
| Hash | `0x94587F17E9C365D5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `distance` (float), `time` (int), `fleeType` (int), `fleeSpeed` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`distance`** (`float`)
- **`time`** (`int`)
- **`fleeType`** (`int`)
- **`fleeSpeed`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskSmartFleeCoord(ped, x, y, z, distance, time, fleeType, fleeSpeed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x94587F17E9C365D5, ped, x, y, z, distance, time, fleeType, fleeSpeed)
```


---

## TASK_SMART_FLEE_PED

**Description:** Makes a ped run away from another ped (fleeFromTarget)

fleeDistance = ped will flee this distance
fleeTime = ped will flee for this amount of time, set to "-1" to flee forever
fleeType = see TASK_FLEE_COORD, can be 0, R* Scripts: fm_mission/race_controller: 66048; fme_escaped_convicts: 2260992, 2523136, 2359296; la_alligator/fox: 2097152; net_fetch: 17301536; net_stable_mount: 540928
fleeSpeed = mostly 3f, rarely 1f in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `TASK_SMART_FLEE_PED` |
| Hash | `0x22B0D0E37CCB840D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `fleeFromTarget` (Ped), `fleeDistance` (float), `fleeTime` (int), `fleeType` (int), `fleeSpeed` (float), `targetPed` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`fleeFromTarget`** (`Ped`)
- **`fleeDistance`** (`float`)
- **`fleeTime`** (`int`)
- **`fleeType`** (`int`)
- **`fleeSpeed`** (`float`)
- **`targetPed`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskSmartFleePed(ped, fleeFromTarget, fleeDistance, fleeTime, fleeType, fleeSpeed, targetPed)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x22B0D0E37CCB840D, ped, fleeFromTarget, fleeDistance, fleeTime, fleeType, fleeSpeed, targetPed)
```


---

## TASK_STAND_GUARD

| Property | Value |
|----------|-------|
| Native Name | `TASK_STAND_GUARD` |
| Hash | `0xAE032F8BBA959E90` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `heading` (float), `scenarioName` (char*) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`scenarioName`** (`char*`)

### Usage

**Lua (Direct):**
```lua
TaskStandGuard(ped, x, y, z, heading, scenarioName)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE032F8BBA959E90, ped, x, y, z, heading, scenarioName)
```


---

## TASK_STAND_STILL

**Description:** Makes the specified ped stand still for (time) milliseconds.

| Property | Value |
|----------|-------|
| Native Name | `TASK_STAND_STILL` |
| Hash | `0x919BE13EED931959` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `time` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`time`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskStandStill(ped, time)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x919BE13EED931959, ped, time)
```


---

## TASK_START_SCENARIO_AT_POSITION

| Property | Value |
|----------|-------|
| Native Name | `TASK_START_SCENARIO_AT_POSITION` |
| Hash | `0x4D1F61FC34AF3CD1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `scenarioHash` (Hash), `x` (float), `y` (float), `z` (float), `heading` (float), `duration` (int), `sittingScenario` (BOOL), `teleport` (BOOL), `p9` (char*), `p10` (float), `p11` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`scenarioHash`** (`Hash`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`heading`** (`float`)
- **`duration`** (`int`)
- **`sittingScenario`** (`BOOL`)
- **`teleport`** (`BOOL`)
- **`p9`** (`char*`)
- **`p10`** (`float`)
- **`p11`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskStartScenarioAtPosition(ped, scenarioHash, x, y, z, heading, duration, sittingScenario, teleport, p9, p10, p11)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4D1F61FC34AF3CD1, ped, scenarioHash, x, y, z, heading, duration, sittingScenario, teleport, p9, p10, p11)
```


---

## TASK_START_SCENARIO_IN_PLACE_HASH

**Description:** https://github.com/femga/rdr3_discoveries/blob/master/animations/scenarios
Params: duration in milliseconds

conditionalHash (optionally):
0 = play random conditional anim.
Every conditional anim has requirements to play it.
If requirements are not met, ped plays random allowed conditional anim or can be stuck.
For example, this scenario type has possible conditional anim WORLD_HUMAN_LEAN_BACK_WALL_SMOKING_MALE_D, but it can not be played by player, because condition is set to NOT be CAIConditionIsPlayer (check file amb_rest.meta and amb_rest_CA.meta with OPENIV to clarify requirements).

| Property | Value |
|----------|-------|
| Native Name | `TASK_START_SCENARIO_IN_PLACE_HASH` |
| Hash | `0x524B54361229154F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `scenarioHash` (Hash), `duration` (int), `playEnterAnim` (BOOL), `conditionalHash` (Hash), `heading` (float), `p6` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`scenarioHash`** (`Hash`)
- **`duration`** (`int`)
- **`playEnterAnim`** (`BOOL`)
- **`conditionalHash`** (`Hash`)
- **`heading`** (`float`)
- **`p6`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskStartScenarioInPlaceHash(ped, scenarioHash, duration, playEnterAnim, conditionalHash, heading, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x524B54361229154F, ped, scenarioHash, duration, playEnterAnim, conditionalHash, heading, p6)
```


---

## TASK_STAY_IN_COVER

**Description:** Makes the ped run to take cover

| Property | Value |
|----------|-------|
| Native Name | `TASK_STAY_IN_COVER` |
| Hash | `0xE5DA8615A6180789` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskStayInCover(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE5DA8615A6180789, ped)
```


---

## TASK_STOP_LEADING_HORSE

| Property | Value |
|----------|-------|
| Native Name | `TASK_STOP_LEADING_HORSE` |
| Hash | `0xED27560703F37258` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
TaskStopLeadingHorse(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xED27560703F37258, ped)
```


---

## TASK_SWAP_FISHING_BAIT

**Description:** Baits: see 0x9B0C7FA063E67629

| Property | Value |
|----------|-------|
| Native Name | `TASK_SWAP_FISHING_BAIT` |
| Hash | `0x2C28AC30A72722DA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `bait` (char*), `withoutBuoy` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`bait`** (`char*`)
- **`withoutBuoy`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskSwapFishingBait(ped, bait, withoutBuoy)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2C28AC30A72722DA, ped, bait, withoutBuoy)
```


---

## TASK_SWAP_WEAPON

| Property | Value |
|----------|-------|
| Native Name | `TASK_SWAP_WEAPON` |
| Hash | `0xA21C51255B205245` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskSwapWeapon(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA21C51255B205245, ped, p1, p2, p3, p4)
```


---

## TASK_THROW_PROJECTILE

| Property | Value |
|----------|-------|
| Native Name | `TASK_THROW_PROJECTILE` |
| Hash | `0x7285951DBF6B5A51` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TaskThrowProjectile(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7285951DBF6B5A51, ped, p1, p2, p3)
```


---

## TASK_TURN_PED_TO_FACE_COORD

**Description:** duration in milliseconds

| Property | Value |
|----------|-------|
| Native Name | `TASK_TURN_PED_TO_FACE_COORD` |
| Hash | `0x1DDA930A0AC38571` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `duration` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`duration`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskTurnPedToFaceCoord(ped, x, y, z, duration)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1DDA930A0AC38571, ped, x, y, z, duration)
```


---

## TASK_TURN_PED_TO_FACE_ENTITY

**Description:** duration: the amount of time in milliseconds to do the task. -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped

| Property | Value |
|----------|-------|
| Native Name | `TASK_TURN_PED_TO_FACE_ENTITY` |
| Hash | `0x5AD23D40115353AC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetEntity` (Entity), `duration` (int), `p3` (float), `p4` (float), `p5` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`targetEntity`** (`Entity`)
- **`duration`** (`int`)
- **`p3`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)

### Usage

**Lua (Direct):**
```lua
TaskTurnPedToFaceEntity(ped, targetEntity, duration, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x5AD23D40115353AC, ped, targetEntity, duration, p3, p4, p5)
```


---

## TASK_TURN_TO_FACE_CLOSEST_PED

| Property | Value |
|----------|-------|
| Native Name | `TASK_TURN_TO_FACE_CLOSEST_PED` |
| Hash | `0x84179419DBDD36F2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (float), `p2` (float), `p3` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`float`)
- **`p2`** (`float`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
TaskTurnToFaceClosestPed(ped, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x84179419DBDD36F2, ped, p1, p2, p3)
```


---

## TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD

| Property | Value |
|----------|-------|
| Native Name | `TASK_USE_NEAREST_SCENARIO_CHAIN_TO_COORD` |
| Hash | `0x9FDA1B3D7E7028B3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `x` (float), `y` (float), `z` (float), `distance` (float), `p5` (BOOL), `p6` (BOOL), `p7` (BOOL), `p8` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`distance`** (`float`)
- **`p5`** (`BOOL`)
- **`p6`** (`BOOL`)
- **`p7`** (`BOOL`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TaskUseNearestScenarioChainToCoord(ped, x, y, z, distance, p5, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9FDA1B3D7E7028B3, ped, x, y, z, distance, p5, p6, p7, p8)
```


---

*End of TASK natives part 6*
