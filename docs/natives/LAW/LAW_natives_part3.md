# LAW Natives - Part 3 of 3

Red Dead Redemption 3 Native Functions Reference

**Namespace:** LAW  
**Natives in this file:** 24  
**Total natives in namespace:** 124  
**Generated from:** RDR3natives JSON data

---

## _GET_HUD_PLAYER_CRIME_TYPE

**Description:** See _REPORT_CRIME

| Property | Value |
|----------|-------|
| Native Name | `_GET_HUD_PLAYER_CRIME_TYPE` |
| Hash | `0x259CE340A8738814` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetHudPlayerCrimeType(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x259CE340A8738814, player)
```


---

## _GET_TIME_SINCE_LAST_SEEN_BY_LAW

**Description:** Returns the amount of time (probably in game minutes) since last seen by the law / left the wanted radius

| Property | Value |
|----------|-------|
| Native Name | `_GET_TIME_SINCE_LAST_SEEN_BY_LAW` |
| Hash | `0x717DA2281DF90855` |
| Return Type | `float` |
| Build | `1207` |
| Parameters | `player` (Player) |

### Parameters

- **`player`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = GetTimeSinceLastSeenByLaw(player)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x717DA2281DF90855, player)
```


---

## _IS_GUARD_PED_INVESTIGATING

| Property | Value |
|----------|-------|
| Native Name | `_IS_GUARD_PED_INVESTIGATING` |
| Hash | `0xD743C4293F47AFAD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = IsGuardPedInvestigating(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD743C4293F47AFAD, ped)
```


---

## _LAW_WITNESS_RESPONSE_TASK

| Property | Value |
|----------|-------|
| Native Name | `_LAW_WITNESS_RESPONSE_TASK` |
| Hash | `0xF0B67BAD53C35BD9` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `pedGroup1` (Ped), `ped` (Ped), `pedGroup2` (Ped), `x` (float), `y` (float), `z` (float), `crimeType` (Hash) |

### Parameters

- **`pedGroup1`** (`Ped`)
- **`ped`** (`Ped`)
- **`pedGroup2`** (`Ped`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`crimeType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = LawWitnessResponseTask(pedGroup1, ped, pedGroup2, x, y, z, crimeType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF0B67BAD53C35BD9, pedGroup1, ped, pedGroup2, x, y, z, crimeType)
```


---

## _PAUSE_BOUNTY_HUNTER_COOLDOWN

**Description:** p0 is always BOUNTYHUNTERSGLOBALCOOLDOWN in R* scripts

| Property | Value |
|----------|-------|
| Native Name | `_PAUSE_BOUNTY_HUNTER_COOLDOWN` |
| Hash | `0xC61EDEBF16CD9668` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (BOOL), `p2` (Any) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`BOOL`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
PauseBountyHunterCooldown(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC61EDEBF16CD9668, p0, p1, p2)
```


---

## _REMOVE_GUARD_ZONE

| Property | Value |
|----------|-------|
| Native Name | `_REMOVE_GUARD_ZONE` |
| Hash | `0x67EBDD958835956C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (const char*) |

### Parameters

- **`name`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
RemoveGuardZone(name)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x67EBDD958835956C, name)
```


---

## _REPORT_CRIME

**Description:** crimeType:
enum eCrimeType : Hash
{
	CRIME_ACCOMPLICE = 0xAF074F6D,
	CRIME_ARSON = 0x68134DC7,
	CRIME_ASSAULT = 0x0BADC882,
	CRIME_ASSAULT_ANIMAL = 0x18DA55EE,
	CRIME_ASSAULT_CORPSE = 0x4E5F23F2,
	CRIME_ASSAULT_HORSE = 0xC4736181,
	CRIME_ASSAULT_LAW = 0xD7466D7C,
	CRIME_ASSAULT_LIVESTOCK = 0xCCE1CCBD,
	CRIME_BANK_ROBBERY = 0x6A1ADE3D,
	CRIME_BURGLARY = 0xA54C77E0,
	CRIME_CHEATING = 0xA2FF1145,
	CRIME_DISTURBANCE = 0x5011F613,
	CRIME_EXPLOSION = 0x3EBA7A37,
	CRIME_EXPLOSION_POISON = 0x91D0A0E1,
	CRIME_GRAVE_ROBBERY = 0x971EA5AF,
	CRIME_HASSLE = 0x58488776,
	CRIME_HIT_AND_RUN = 0xFF0A3CC4,
	CRIME_HIT_AND_RUN_LAW = 0x064814AF,
	CRIME_INTIMIDATION = 0x8319FBAB,
	CRIME_JACK_HORSE = 0x82F7E4A2,
	CRIME_JACK_VEHICLE = 0x6B981F4C,
	CRIME_JAIL_BREAK = 0x12C1D589,
	CRIME_KIDNAPPING = 0x98F908DB,
	CRIME_KIDNAPPING_LAW = 0xFD72A7EA,
	CRIME_LASSO_ASSAULT = 0x56EE5D5A,
	CRIME_LAW_IS_THREATENED = 0x1CB91DF0,
	CRIME_LOITERING = 0x6629D2F4,
	CRIME_LOOTING = 0x55AD2BEB,
	CRIME_MURDER = 0xE28ECE7E,
	CRIME_MURDER_ANIMAL = 0x48F59A66,
	CRIME_MURDER_HORSE = 0xC7261D79,
	CRIME_MURDER_LAW = 0x7797FCE7,
	CRIME_MURDER_LIVESTOCK = 0x9569C546,
	CRIME_MURDER_PLAYER = 0xF5ABD6C9,
	CRIME_MURDER_PLAYER_HORSE = 0xD55C6A79,
	CRIME_PROPERTY_DESTRUCTION = 0x533B003D,
	CRIME_RESIST_ARREST = 0xDF577BA5,
	CRIME_ROBBERY = 0xA3BEDE4C,
	CRIME_SELF_DEFENCE = 0xBD6A0AA3,
	CRIME_STAGECOACH_ROBBERY = 0xFC738E61,
	CRIME_STOLEN_GOODS = 0x9A949C79,
	CRIME_THEFT = 0x72ADE410,
	CRIME_THEFT_HORSE = 0xBE3A5838,
	CRIME_THEFT_LIVESTOCK = 0x85BA08FD,
	CRIME_THEFT_VEHICLE = 0x43A9ECA1,
	CRIME_THREATEN = 0x941C985A,
	CRIME_THREATEN_LAW = 0x7F908566,
	CRIME_TRAIN_ROBBERY = 0x647D2A5A,
	CRIME_TRAMPLE = 0x45DB39D8,
	CRIME_TRAMPLE_LAW = 0xF00F266B,
	CRIME_TRAMPLE_PLAYER = 0x75970C15,
	CRIME_TRESPASSING = 0xAEDE8E35,
	CRIME_UNARMED_ASSAULT = 0x5098CC5A,
	CRIME_VANDALISM = 0x80FDC759,
	CRIME_VANDALISM_VEHICLE = 0xF9E7ECE4,
	CRIME_VEHICLE_DESTRUCTION = 0x54A85DDC,
	CRIME_WANTED_LEVEL_UP_DEBUG_HIGH = 0x99C52FF5,
	CRIME_WANTED_LEVEL_UP_DEBUG_LOW = 0xD891890F
};

| Property | Value |
|----------|-------|
| Native Name | `_REPORT_CRIME` |
| Hash | `0xF60386770878A98F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `crimeType` (Hash), `bounty` (int), `entity` (Entity), `isKnownSuspect` (BOOL) |

### Parameters

- **`player`** (`Player`)
- **`crimeType`** (`Hash`)
- **`bounty`** (`int`)
- **`entity`** (`Entity`)
- **`isKnownSuspect`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
ReportCrime(player, crimeType, bounty, entity, isKnownSuspect)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF60386770878A98F, player, crimeType, bounty, entity, isKnownSuspect)
```


---

## _REPORT_PLAYER_LAW_DISPATCH_RESPONSE_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `_REPORT_PLAYER_LAW_DISPATCH_RESPONSE_OVERRIDE` |
| Hash | `0x9C4352134B2835FB` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `dispatchResponseHash` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`dispatchResponseHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
ReportPlayerLawDispatchResponseOverride(player, dispatchResponseHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9C4352134B2835FB, player, dispatchResponseHash)
```


---

## _SET_ALLOW_DISABLED_LAW_RESPONSES

| Property | Value |
|----------|-------|
| Native Name | `_SET_ALLOW_DISABLED_LAW_RESPONSES` |
| Hash | `0x4B52BF96E225D230` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetAllowDisabledLawResponses(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4B52BF96E225D230, toggle)
```


---

## _SET_BOUNTY_HUNTER_GLOBAL_COOLDOWN

**Description:** p0 is always BOUNTYHUNTERSGLOBALCOOLDOWN in R* scripts

| Property | Value |
|----------|-------|
| Native Name | `_SET_BOUNTY_HUNTER_GLOBAL_COOLDOWN` |
| Hash | `0xF19706B1F8FFA88F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (int) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetBountyHunterGlobalCooldown(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF19706B1F8FFA88F, p0, p1)
```


---

## _SET_BOUNTY_HUNTER_PURSUIT_CLEARED

**Description:** Force clears local player's wanted level

| Property | Value |
|----------|-------|
| Native Name | `_SET_BOUNTY_HUNTER_PURSUIT_CLEARED` |
| Hash | `0x55F37F5F3F2475E1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
SetBountyHunterPursuitCleared()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x55F37F5F3F2475E1, )
```


---

## _SET_CUSTOM_LAW_DISPATCH_RESPONSE

**Description:** Note: This native is only used in multiplayer scripts
dispatchResponseHash: see update1/common/data/dispatchresponses/..

| Property | Value |
|----------|-------|
| Native Name | `_SET_CUSTOM_LAW_DISPATCH_RESPONSE` |
| Hash | `0x009CF9A29972C298` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `dispatchResponseHash` (Hash) |

### Parameters

- **`dispatchResponseHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetCustomLawDispatchResponse(dispatchResponseHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x009CF9A29972C298, dispatchResponseHash)
```


---

## _SET_DISPATCH_MULTIPLIER_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `_SET_DISPATCH_MULTIPLIER_OVERRIDE` |
| Hash | `0x002BABE0B7D53136` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `multiplier` (float) |

### Parameters

- **`multiplier`** (`float`)

### Usage

**Lua (Direct):**
```lua
SetDispatchMultiplierOverride(multiplier)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x002BABE0B7D53136, multiplier)
```


---

## _SET_GUARD_ZONE_POSITION

| Property | Value |
|----------|-------|
| Native Name | `_SET_GUARD_ZONE_POSITION` |
| Hash | `0x7E7BF59F89FC6C6D` |
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
SetGuardZonePosition(name, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7E7BF59F89FC6C6D, name, x, y, z)
```


---

## _SET_GUARD_ZONE_POSITION_2

| Property | Value |
|----------|-------|
| Native Name | `_SET_GUARD_ZONE_POSITION_2` |
| Hash | `0x2F9005E2EA4E5EE4` |
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
SetGuardZonePosition2(name, x, y, z)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2F9005E2EA4E5EE4, name, x, y, z)
```


---

## _SET_GUARD_ZONE_VOLUME_REGISTRATION_END

| Property | Value |
|----------|-------|
| Native Name | `_SET_GUARD_ZONE_VOLUME_REGISTRATION_END` |
| Hash | `0xA8A74AA79FB67159` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (const char*), `volume` (Volume) |

### Parameters

- **`name`** (`const char*`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
SetGuardZoneVolumeRegistrationEnd(name, volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA8A74AA79FB67159, name, volume)
```


---

## _SET_GUARD_ZONE_VOLUME_REGISTRATION_START

| Property | Value |
|----------|-------|
| Native Name | `_SET_GUARD_ZONE_VOLUME_REGISTRATION_START` |
| Hash | `0x8C598A930F471938` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (const char*), `volume` (Volume) |

### Parameters

- **`name`** (`const char*`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
SetGuardZoneVolumeRegistrationStart(name, volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8C598A930F471938, name, volume)
```


---

## _SET_GUARD_ZONE_VOLUME_RESTRICTED

| Property | Value |
|----------|-------|
| Native Name | `_SET_GUARD_ZONE_VOLUME_RESTRICTED` |
| Hash | `0x35815F372D43E1E5` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (const char*), `volume` (Volume) |

### Parameters

- **`name`** (`const char*`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
SetGuardZoneVolumeRestricted(name, volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x35815F372D43E1E5, name, volume)
```


---

## _SET_GUARD_ZONE_VOLUME_THREAT

| Property | Value |
|----------|-------|
| Native Name | `_SET_GUARD_ZONE_VOLUME_THREAT` |
| Hash | `0xA1B0E6301E2E02A6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (char*), `volume` (Volume) |

### Parameters

- **`name`** (`char*`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
SetGuardZoneVolumeThreat(name, volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA1B0E6301E2E02A6, name, volume)
```


---

## _SET_GUARD_ZONE_VOLUME_WARNING

| Property | Value |
|----------|-------|
| Native Name | `_SET_GUARD_ZONE_VOLUME_WARNING` |
| Hash | `0xAD3E07C37A7C1ADC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `name` (char*), `volume` (Volume) |

### Parameters

- **`name`** (`char*`)
- **`volume`** (`Volume`)

### Usage

**Lua (Direct):**
```lua
SetGuardZoneVolumeWarning(name, volume)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAD3E07C37A7C1ADC, name, volume)
```


---

## _SET_LAW_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `_SET_LAW_DISABLED` |
| Hash | `0x8DE82BC774F3B862` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetLawDisabled(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8DE82BC774F3B862, toggle)
```


---

## _SET_LAW_RBS_VOLUME

| Property | Value |
|----------|-------|
| Native Name | `_SET_LAW_RBS_VOLUME` |
| Hash | `0x9BBDCB8DF789EBC1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `p1` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetLawRbsVolume(player, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9BBDCB8DF789EBC1, player, p1)
```


---

## _SET_LAW_REGION

**Description:** enum eLawRegion : Hash
{
	LAW_DISPATCH_REGION_NONE = 0,
	LAW_REGION_AGUASDULCES = 0x2F573EBE,
	LAW_REGION_ANNESBURG = 0x68CAFD50,
	LAW_REGION_ARMADILLO = 0xF0B90756,
	LAW_REGION_BAYOU_NWA = 0x80966B1C,
	LAW_REGION_BEECHERS_HOPE = 0xE2544977,
	LAW_REGION_BIG_VALLEY = 0x3DF1559A,
	LAW_REGION_BLACKWATER = 0x60D4886D,
	LAW_REGION_BLACKWATER_MAINGAME = 0x66553576,
	LAW_REGION_BLUEGILL_MARSH = 0x1D6AED8E,
	LAW_REGION_BRAITHWAITE_MANOR = 0x3D71E7FF,
	LAW_REGION_BUTCHER_CREEK = 0x2B3E1822,
	LAW_REGION_CALIGA_HALL = 0xF3FE5080,
	LAW_REGION_CORNWALL = 0xCC4672FA,
	LAW_REGION_CUMBERLAND_FOREST = 0x81A78306,
	LAW_REGION_EMERALD_RANCH = 0x5C069DF3,
	LAW_REGION_FORT_WALLACE = 0x0AF25192,
	LAW_REGION_GREAT_PLAINS = 0xB20573FA,
	LAW_REGION_GREAT_PLAINS_MAINGAME = 0x9862FF7C,
	LAW_REGION_GRIZZLIES = 0xBB936031,
	LAW_REGION_GUAMA = 0x200DFF42,
	LAW_REGION_HEARTLANDS = 0xAD14DA65,
	LAW_REGION_LAGRAS = 0xC64808D3,
	LAW_REGION_MACFARLANES_RANCH = 0x396A7D5F,
	LAW_REGION_MANICATO = 0x039DB6BF,
	LAW_REGION_MANZANITA_POST = 0x895E580E,
	LAW_REGION_MANZANITA_POST_MAINGAME = 0x9BDD6A38,
	LAW_REGION_OCCUPIED_CARAVAN_CAMP = 0x7EBABB01,
	LAW_REGION_OLD_MAP_WILDERNESS = 0xCBB45950,
	LAW_REGION_OLD_MAP_WILDERNESS_MAINGAME = 0x9F839BE7,
	LAW_REGION_OUTLAW3 = 0x97A02FC1,
	LAW_REGION_PRONGHORN_RANCH = 0x398E4BFC,
	LAW_REGION_RHODES = 0x89222928,
	LAW_REGION_RHODES_LOCKDOWN = 0xB1181671,
	LAW_REGION_RIDGEWOOD_FARM = 0x635C3028,
	LAW_REGION_ROANOKE_RIDGE = 0x46386A9A,
	LAW_REGION_SAINT_DENIS = 0x5CF7C268,
	LAW_REGION_SAINT_DENIS_RURAL = 0x4FD5331A,
	LAW_REGION_SCARLETT_MEADOWS = 0x5FDD9717,
	LAW_REGION_SISIKA = 0x2B6BBA52,
	LAW_REGION_STRAWBERRY = 0xDD932620,
	LAW_REGION_TALL_TREES = 0xD939B758,
	LAW_REGION_TALL_TREES_MAINGAME = 0x084B17DF,
	LAW_REGION_THIEVES_LANDING = 0x3D0C2EB6,
	LAW_REGION_THIEVES_LANDING_MAINGAME = 0x61C450F3,
	LAW_REGION_TUMBLEWEED = 0x0EFAF8DC,
	LAW_REGION_VALENTINE = 0xA7A3F0C3,
	LAW_REGION_VALENTINE_LOCKDOWN = 0x123582FE,
	LAW_REGION_VAN_HORN = 0x619B528E,
	LAW_REGION_WAPITI = 0x7A976E02
};

| Property | Value |
|----------|-------|
| Native Name | `_SET_LAW_REGION` |
| Hash | `0x4752F68EB7F2D280` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `player` (Player), `lawRegionHash` (Hash), `stateHash` (Hash) |

### Parameters

- **`player`** (`Player`)
- **`lawRegionHash`** (`Hash`)
- **`stateHash`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
SetLawRegion(player, lawRegionHash, stateHash)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4752F68EB7F2D280, player, lawRegionHash, stateHash)
```


---

## _SET_PED_LAW_BEHAVIOUR

**Description:** behaviour: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CLawBehavior__Flags

| Property | Value |
|----------|-------|
| Native Name | `_SET_PED_LAW_BEHAVIOUR` |
| Hash | `0x819ADD5EF1742F47` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `behaviour` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`behaviour`** (`int`)

### Usage

**Lua (Direct):**
```lua
SetPedLawBehaviour(ped, behaviour)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x819ADD5EF1742F47, ped, behaviour)
```


---

*End of LAW natives part 3*
