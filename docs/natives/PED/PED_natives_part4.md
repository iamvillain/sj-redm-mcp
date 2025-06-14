# PED Natives - Part 4 of 21

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PED  
**Natives in this file:** 50  
**Total natives in namespace:** 1010  
**Generated from:** RDR3natives JSON data

---

## IS_PED_IN_ANY_HELI

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_ANY_HELI` |
| Hash | `0x298B91AE825E5705` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInAnyHeli(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x298B91AE825E5705, ped)
```


---

## IS_PED_IN_ANY_PLANE

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_ANY_PLANE` |
| Hash | `0x5FFF4CFC74D8FB80` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInAnyPlane(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5FFF4CFC74D8FB80, ped)
```


---

## IS_PED_IN_ANY_TAXI

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_ANY_TAXI` |
| Hash | `0x6E575D6A898AB852` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInAnyTaxi(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6E575D6A898AB852, ped)
```


---

## IS_PED_IN_ANY_TRAIN

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_ANY_TRAIN` |
| Hash | `0x6F972C1AB75A1ED0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInAnyTrain(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6F972C1AB75A1ED0, ped)
```


---

## IS_PED_IN_ANY_VEHICLE

**Description:** Gets a value indicating whether the specified ped is in any vehicle.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_ANY_VEHICLE` |
| Hash | `0x997ABD671D25CA0B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `atGetIn` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`atGetIn`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInAnyVehicle(ped, atGetIn)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x997ABD671D25CA0B, ped, atGetIn)
```


---

## IS_PED_IN_COMBAT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_COMBAT` |
| Hash | `0x4859F1FC66A6278E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `target` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`target`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInCombat(ped, target)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4859F1FC66A6278E, ped, target)
```


---

## IS_PED_IN_COVER

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_COVER` |
| Hash | `0x60DFD0691A170B88` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInCover(ped, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x60DFD0691A170B88, ped, p1, p2)
```


---

## IS_PED_IN_COVER_FACING_LEFT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_COVER_FACING_LEFT` |
| Hash | `0x845333B3150583AB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInCoverFacingLeft(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x845333B3150583AB, ped)
```


---

## IS_PED_IN_FLYING_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_FLYING_VEHICLE` |
| Hash | `0x9134873537FA419C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInFlyingVehicle(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9134873537FA419C, ped)
```


---

## IS_PED_IN_GROUP

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_GROUP` |
| Hash | `0x5891CAC5D4ACFF74` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInGroup(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5891CAC5D4ACFF74, ped)
```


---

## IS_PED_IN_MELEE_COMBAT

**Description:** Notes: The function only returns true while the ped is: 
A.) Swinging a random melee attack (including pistol-whipping)

B.) Reacting to being hit by a melee attack (including pistol-whipping)

C.) Is locked-on to an enemy (arms up, strafing/skipping in the default fighting-stance, ready to dodge+counter). 

You don't have to be holding the melee-targeting button to be in this stance; you stay in it by default for a few seconds after swinging at someone. If you do a sprinting punch, it returns true for the duration of the punch animation and then returns false again, even if you've punched and made-angry many peds

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_MELEE_COMBAT` |
| Hash | `0x4E209B2C1EAD5159` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInMeleeCombat(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4E209B2C1EAD5159, ped)
```


---

## IS_PED_IN_MODEL

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_MODEL` |
| Hash | `0x796D90EFB19AA332` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `modelHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInModel(ped, modelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x796D90EFB19AA332, ped, modelHash)
```


---

## IS_PED_IN_VEHICLE

**Description:** Gets a value indicating whether the specified ped is in the specified vehicle.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_IN_VEHICLE` |
| Hash | `0xA3EE4A07279BB9DB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle), `atGetIn` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)
- **`atGetIn`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedInVehicle(ped, vehicle, atGetIn)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA3EE4A07279BB9DB, ped, vehicle, atGetIn)
```


---

## IS_PED_JACKING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_JACKING` |
| Hash | `0x4AE4FF911DFB61DA` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedJacking(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4AE4FF911DFB61DA, ped)
```


---

## IS_PED_JUMPING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_JUMPING` |
| Hash | `0xCEDABC5900A0BF97` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedJumping(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCEDABC5900A0BF97, ped)
```


---

## IS_PED_LASSOED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_LASSOED` |
| Hash | `0x9682F850056C9ADE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedLassoed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9682F850056C9ADE, ped)
```


---

## IS_PED_MALE

**Description:** Returns true/false if the ped is/isn't male.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_MALE` |
| Hash | `0x6D9F5FAA7488BA46` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedMale(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6D9F5FAA7488BA46, ped)
```


---

## IS_PED_MODEL

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_MODEL` |
| Hash | `0xC9D55B1A358A5BF7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `modelHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`modelHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedModel(ped, modelHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC9D55B1A358A5BF7, ped, modelHash)
```


---

## IS_PED_ON_FOOT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_ON_FOOT` |
| Hash | `0x01FEE67DB37F59B2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedOnFoot(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x01FEE67DB37F59B2, ped)
```


---

## IS_PED_ON_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_ON_MOUNT` |
| Hash | `0x460BC76A0E10655E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedOnMount(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x460BC76A0E10655E, ped)
```


---

## IS_PED_ON_SPECIFIC_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_ON_SPECIFIC_VEHICLE` |
| Hash | `0xEC5F66E459AF3BB2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedOnSpecificVehicle(ped, vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEC5F66E459AF3BB2, ped, vehicle)
```


---

## IS_PED_ON_VEHICLE

**Description:** Gets a value indicating whether the specified ped is on top of any vehicle.

Return 1 when ped is on vehicle.
Return 0 when ped is not on a vehicle.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_ON_VEHICLE` |
| Hash | `0x67722AEB798E5FAB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedOnVehicle(ped, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x67722AEB798E5FAB, ped, p1)
```


---

## IS_PED_OPENING_DOOR

**Description:** Returns true if the ped is currently opening a door (CTaskOpenDoor).

Old name: _IS_PED_OPENING_A_DOOR

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_OPENING_DOOR` |
| Hash | `0x26AF0E8E30BD2A2C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedOpeningDoor(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x26AF0E8E30BD2A2C, ped)
```


---

## IS_PED_PERFORMING_MELEE_ACTION

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_PERFORMING_MELEE_ACTION` |
| Hash | `0xDCCA191DF9980FD7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int), `p2` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)
- **`p2`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedPerformingMeleeAction(ped, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDCCA191DF9980FD7, ped, p1, p2)
```


---

## IS_PED_PLANTING_BOMB

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_PLANTING_BOMB` |
| Hash | `0xC70B5FAE151982D8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedPlantingBomb(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC70B5FAE151982D8, ped)
```


---

## IS_PED_PRONE

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_PRONE` |
| Hash | `0xD6A86331A537A7B9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedProne(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD6A86331A537A7B9, ped)
```


---

## IS_PED_RAGDOLL

**Description:** If the ped handle passed through the parenthesis is in a ragdoll state this will return true.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_RAGDOLL` |
| Hash | `0x47E4E977581C5B55` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedRagdoll(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x47E4E977581C5B55, ped)
```


---

## IS_PED_READY_TO_RENDER

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_READY_TO_RENDER` |
| Hash | `0xA0BC8FAED8CFEB3C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedReadyToRender(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA0BC8FAED8CFEB3C, ped)
```


---

## IS_PED_RELOADING

**Description:** Returns whether the specified ped is reloading.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_RELOADING` |
| Hash | `0x24B100C68C645951` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedReloading(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x24B100C68C645951, ped)
```


---

## IS_PED_RESPONDING_TO_EVENT

**Description:** eventType: https://alloc8or.re/rdr3/doc/enums/eEventType.txt

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_RESPONDING_TO_EVENT` |
| Hash | `0x625B774D75C87068` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `eventType` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`eventType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedRespondingToEvent(ped, eventType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x625B774D75C87068, ped, eventType)
```


---

## IS_PED_RESPONDING_TO_THREAT

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_RESPONDING_TO_THREAT` |
| Hash | `0x77525BBF433F2CD6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedRespondingToThreat(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x77525BBF433F2CD6, ped)
```


---

## IS_PED_RUNNING_MOBILE_PHONE_TASK

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_RUNNING_MOBILE_PHONE_TASK` |
| Hash | `0x2AFE52F782F25775` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedRunningMobilePhoneTask(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2AFE52F782F25775, ped)
```


---

## IS_PED_RUNNING_RAGDOLL_TASK

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_RUNNING_RAGDOLL_TASK` |
| Hash | `0xE3B6097CC25AA69E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedRunningRagdollTask(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE3B6097CC25AA69E, ped)
```


---

## IS_PED_SHOOTING

**Description:** Returns whether the specified ped is shooting.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_SHOOTING` |
| Hash | `0x34616828CD07F1A1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedShooting(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x34616828CD07F1A1, ped)
```


---

## IS_PED_SITTING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_SITTING` |
| Hash | `0x84D0BF2B21862059` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedSitting(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x84D0BF2B21862059, ped)
```


---

## IS_PED_SITTING_IN_ANY_VEHICLE

**Description:** Detect if ped is in any vehicle
[True/False]

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_SITTING_IN_ANY_VEHICLE` |
| Hash | `0x826AA586EDB9FEF8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedSittingInAnyVehicle(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x826AA586EDB9FEF8, ped)
```


---

## IS_PED_SITTING_IN_VEHICLE

**Description:** Detect if ped is sitting in the specified vehicle
[True/False]

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_SITTING_IN_VEHICLE` |
| Hash | `0xA808AA1D79230FC2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `vehicle` (Vehicle) |

### Parameters

- **`ped`** (`Ped`)
- **`vehicle`** (`Vehicle`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedSittingInVehicle(ped, vehicle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA808AA1D79230FC2, ped, vehicle)
```


---

## IS_PED_STOPPED

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_STOPPED` |
| Hash | `0x530944F6F4B8A214` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedStopped(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x530944F6F4B8A214, ped)
```


---

## IS_PED_SWIMMING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_SWIMMING` |
| Hash | `0x9DE327631295B4C2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedSwimming(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9DE327631295B4C2, ped)
```


---

## IS_PED_SWIMMING_UNDER_WATER

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_SWIMMING_UNDER_WATER` |
| Hash | `0xC024869A53992F34` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedSwimmingUnderWater(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC024869A53992F34, ped)
```


---

## IS_PED_USING_ACTION_MODE

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_USING_ACTION_MODE` |
| Hash | `0x00E73468D085F745` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedUsingActionMode(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x00E73468D085F745, ped)
```


---

## IS_PED_USING_ANY_SCENARIO

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_USING_ANY_SCENARIO` |
| Hash | `0x57AB4A3080F85143` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedUsingAnyScenario(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x57AB4A3080F85143, ped)
```


---

## IS_PED_USING_SCENARIO_HASH

**Description:** Equivalent to IS_PED_USING_SCENARIO from V but takes a hash instead of a string.

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_USING_SCENARIO_HASH` |
| Hash | `0x34D6AC1157C8226C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `scenarioHash` (Hash) |

### Parameters

- **`ped`** (`Ped`)
- **`scenarioHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedUsingScenarioHash(ped, scenarioHash)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x34D6AC1157C8226C, ped, scenarioHash)
```


---

## IS_PED_USING_THIS_SCENARIO

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_USING_THIS_SCENARIO` |
| Hash | `0x9C54041BB66BCF9E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `scenario` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`scenario`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedUsingThisScenario(ped, scenario)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9C54041BB66BCF9E, ped, scenario)
```


---

## IS_PED_VAULTING

| Property | Value |
|----------|-------|
| Native Name | `IS_PED_VAULTING` |
| Hash | `0x117C70D1F5730B5E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsPedVaulting(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x117C70D1F5730B5E, ped)
```


---

## IS_TARGET_PED_IN_PERCEPTION_AREA

**Description:** Returns true if ped is in perception (focused and looking at target ped)
Most float params are -1.f in R* Scripts

| Property | Value |
|----------|-------|
| Native Name | `IS_TARGET_PED_IN_PERCEPTION_AREA` |
| Hash | `0x06087579E7AA85A9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped), `targetPed` (Ped), `p2` (float), `customDistance` (float), `p4` (float), `p5` (float) |

### Parameters

- **`ped`** (`Ped`)
- **`targetPed`** (`Ped`)
- **`p2`** (`float`)
- **`customDistance`** (`float`)
- **`p4`** (`float`)
- **`p5`** (`float`)

### Usage

**Lua (Direct):**
```lua
local result = IsTargetPedInPerceptionArea(ped, targetPed, p2, customDistance, p4, p5)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x06087579E7AA85A9, ped, targetPed, p2, customDistance, p4, p5)
```


---

## IS_TRACKED_PED_VISIBLE

**Description:** Returns whether or not a ped is visible within your FOV, not this check auto's to false after a certain distance.
Target needs to be tracked first, won't work otherwise.

| Property | Value |
|----------|-------|
| Native Name | `IS_TRACKED_PED_VISIBLE` |
| Hash | `0x91C8E617F64188AC` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsTrackedPedVisible(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x91C8E617F64188AC, ped)
```


---

## KNOCK_OFF_PED_PROP

| Property | Value |
|----------|-------|
| Native Name | `KNOCK_OFF_PED_PROP` |
| Hash | `0x6FD7816A36615F48` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (BOOL), `p2` (BOOL), `p3` (BOOL), `p4` (BOOL) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)
- **`p3`** (`BOOL`)
- **`p4`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
KnockOffPedProp(ped, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6FD7816A36615F48, ped, p1, p2, p3, p4)
```


---

## KNOCK_PED_OFF_VEHICLE

| Property | Value |
|----------|-------|
| Native Name | `KNOCK_PED_OFF_VEHICLE` |
| Hash | `0x45BBCBA77C29A841` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
KnockPedOffVehicle(ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x45BBCBA77C29A841, ped)
```


---

## PED_COWER_IN_PLACE

| Property | Value |
|----------|-------|
| Native Name | `PED_COWER_IN_PLACE` |
| Hash | `0xF6E1E9F47A7686F8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `ped2` (Ped) |

### Parameters

- **`ped`** (`Ped`)
- **`ped2`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
PedCowerInPlace(ped, ped2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF6E1E9F47A7686F8, ped, ped2)
```


---

*End of PED natives part 4*
