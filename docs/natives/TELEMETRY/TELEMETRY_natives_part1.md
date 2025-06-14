# TELEMETRY Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** TELEMETRY  
**Natives in this file:** 50  
**Total natives in namespace:** 78  
**Generated from:** RDR3natives JSON data

---

## ANALYTICS_PLAYTIME_FREEMODE_END

| Property | Value |
|----------|-------|
| Native Name | `ANALYTICS_PLAYTIME_FREEMODE_END` |
| Hash | `0x3180E991D4B8F248` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
AnalyticsPlaytimeFreemodeEnd()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3180E991D4B8F248, )
```


---

## ANALYTICS_PLAYTIME_FREEMODE_START

| Property | Value |
|----------|-------|
| Native Name | `ANALYTICS_PLAYTIME_FREEMODE_START` |
| Hash | `0xE9F24081D84931B8` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
AnalyticsPlaytimeFreemodeStart()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE9F24081D84931B8, )
```


---

## TELEMETRY_CAMP_DONATE

| Property | Value |
|----------|-------|
| Native Name | `TELEMETRY_CAMP_DONATE` |
| Hash | `0xDF516E598D966D06` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `transactionId` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `slotId` (Hash), `p6` (Hash), `p7` (Any), `p8` (BOOL) |

### Parameters

- **`transactionId`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`slotId`** (`Hash`)
- **`p6`** (`Hash`)
- **`p7`** (`Any`)
- **`p8`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
TelemetryCampDonate(transactionId, p1, p2, p3, p4, slotId, p6, p7, p8)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xDF516E598D966D06, transactionId, p1, p2, p3, p4, slotId, p6, p7, p8)
```


---

## TELEMETRY_PERSONAL_VEHICLE_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `TELEMETRY_PERSONAL_VEHICLE_MOUNT` |
| Hash | `0xFF9052BC7A3B7D33` |
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
TelemetryPersonalVehicleMount(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFF9052BC7A3B7D33, p0, p1, p2, p3)
```


---

## TELEMETRY_PLAYER_MENU_PIN

| Property | Value |
|----------|-------|
| Native Name | `TELEMETRY_PLAYER_MENU_PIN` |
| Hash | `0x076C5843371EB889` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryPlayerMenuPin(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x076C5843371EB889, p0, p1, p2, p3)
```


---

## _0x6F5BC5C4EAB42B15

**Description:** Note: this native was added in build 1491.50

| Property | Value |
|----------|-------|
| Native Name | `_0x6F5BC5C4EAB42B15` |
| Hash | `0x6F5BC5C4EAB42B15` |
| Return Type | `void` |
| Build | `1491` |
| Parameters | `linkID` (int), `type` (int), `contentId` (const char*) |

### Parameters

- **`linkID`** (`int`)
- **`type`** (`int`)
- **`contentId`** (`const char*`)

### Usage

**Lua (Direct):**
```lua
_0x6F5BC5C4EAB42B15(linkID, type, contentId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6F5BC5C4EAB42B15, linkID, type, contentId)
```


---

## _0xEC0BD8736DCAF841

| Property | Value |
|----------|-------|
| Native Name | `_0xEC0BD8736DCAF841` |
| Hash | `0xEC0BD8736DCAF841` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0xEC0BD8736DCAF841(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEC0BD8736DCAF841, toggle)
```


---

## _CLEAR_TELEMETRY_SHOP_UI

| Property | Value |
|----------|-------|
| Native Name | `_CLEAR_TELEMETRY_SHOP_UI` |
| Hash | `0x32D5898C4898CD95` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
ClearTelemetryShopUi()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x32D5898C4898CD95, )
```


---

## _TELEMETRY_AMBIENT_VIGNETTE

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_AMBIENT_VIGNETTE` |
| Hash | `0x3145044F3990D321` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryAmbientVignette(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3145044F3990D321, p0, p1, p2, p3, p4, p5, p6)
```


---

## _TELEMETRY_ANIMAL_SKINNED

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_ANIMAL_SKINNED` |
| Hash | `0x7581972ADF5D699A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `type` (Hash), `items` (Any*) |

### Parameters

- **`type`** (`Hash`)
- **`items`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TelemetryAnimalSkinned(type, items)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7581972ADF5D699A, type, items)
```


---

## _TELEMETRY_BOUNTY_TARGET

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_BOUNTY_TARGET` |
| Hash | `0x52FA31DB8F3AD25D` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `data` (Any*) |

### Parameters

- **`data`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TelemetryBountyTarget(data)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x52FA31DB8F3AD25D, data)
```


---

## _TELEMETRY_CAMP_CREATED

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_CAMP_CREATED` |
| Hash | `0x565EAA726B2CE3B7` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryCampCreated(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x565EAA726B2CE3B7, p0)
```


---

## _TELEMETRY_CAMP_SUPPLIES

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_CAMP_SUPPLIES` |
| Hash | `0x217F47761376E16E` |
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
TelemetryCampSupplies(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x217F47761376E16E, p0, p1, p2, p3, p4)
```


---

## _TELEMETRY_CHAR_CREATOR

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_CHAR_CREATOR` |
| Hash | `0x7207AD471BC9278C` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryCharCreator(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7207AD471BC9278C, p0, p1, p2, p3, p4, p5, p6)
```


---

## _TELEMETRY_COLLECT

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_COLLECT` |
| Hash | `0xD6CB05DDAEE43AFD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `transactionId` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any) |

### Parameters

- **`transactionId`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryCollect(transactionId, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD6CB05DDAEE43AFD, transactionId, p1, p2, p3, p4, p5, p6)
```


---

## _TELEMETRY_COUPON

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_COUPON` |
| Hash | `0x621D719C4836292B` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryCoupon(p0, p1, p2, p3, p4, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x621D719C4836292B, p0, p1, p2, p3, p4, p5)
```


---

## _TELEMETRY_CRAFT_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_CRAFT_ITEM` |
| Hash | `0x78C2E029DB205A3A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `quantity` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`quantity`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryCraftItem(p0, p1, p2, quantity)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x78C2E029DB205A3A, p0, p1, p2, quantity)
```


---

## _TELEMETRY_CREATE_UUID

**Description:** Works in MP only.

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_CREATE_UUID` |
| Hash | `0xE692D336F8A2A97F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `uuid` (Any*) |

### Parameters

- **`uuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = TelemetryCreateUuid(uuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE692D336F8A2A97F, uuid)
```


---

## _TELEMETRY_CUSTOM

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_CUSTOM` |
| Hash | `0x40914CCF2A1AB531` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TelemetryCustom(args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x40914CCF2A1AB531, args)
```


---

## _TELEMETRY_DEFENSIVE

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_DEFENSIVE` |
| Hash | `0xE57529D23541D2DD` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryDefensive(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE57529D23541D2DD, p0, p1, p2)
```


---

## _TELEMETRY_DISCOVERABLE

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_DISCOVERABLE` |
| Hash | `0xF5EAD898EF387E73` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryDiscoverable(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF5EAD898EF387E73, p0)
```


---

## _TELEMETRY_EMOTE_ADD_CATEGORY_TO_SAVE

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_EMOTE_ADD_CATEGORY_TO_SAVE` |
| Hash | `0x2C24AF8EEEEF8A55` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `emote` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`emote`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TelemetryEmoteAddCategoryToSave(p0, p1, emote)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x2C24AF8EEEEF8A55, p0, p1, emote)
```


---

## _TELEMETRY_FAST_TRAVEL

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_FAST_TRAVEL` |
| Hash | `0x7CEF4AC79F7E7FAD` |
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
TelemetryFastTravel(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x7CEF4AC79F7E7FAD, p0, p1, p2, p3, p4)
```


---

## _TELEMETRY_FAVOR_EMOTE

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_FAVOR_EMOTE` |
| Hash | `0x16B23D4F7A1F50D9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryFavorEmote(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x16B23D4F7A1F50D9, p0, p1, p2)
```


---

## _TELEMETRY_GAME_PROGRESS

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_GAME_PROGRESS` |
| Hash | `0x51EC204A6E5B5A1A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryGameProgress(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x51EC204A6E5B5A1A, p0, p1)
```


---

## _TELEMETRY_GANG_SHARES

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_GANG_SHARES` |
| Hash | `0xE6DC9B21AC7A8729` |
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
TelemetryGangShares(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE6DC9B21AC7A8729, p0, p1, p2, p3)
```


---

## _TELEMETRY_GOLD_STORE

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_GOLD_STORE` |
| Hash | `0x536B6025E94AC48F` |
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
TelemetryGoldStore(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x536B6025E94AC48F, p0, p1, p2, p3)
```


---

## _TELEMETRY_GUN_LOCKER

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_GUN_LOCKER` |
| Hash | `0x415FE28ED44BFF14` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
TelemetryGunLocker()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x415FE28ED44BFF14, )
```


---

## _TELEMETRY_GUN_LOCKER_WEAPON_REMOVED

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_GUN_LOCKER_WEAPON_REMOVED` |
| Hash | `0x317D9C9560529CC2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TelemetryGunLockerWeaponRemoved(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x317D9C9560529CC2, p0)
```


---

## _TELEMETRY_GUN_LOCKER_WEAPON_STORED

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_GUN_LOCKER_WEAPON_STORED` |
| Hash | `0xC3ADF4880784FA9C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Hash) |

### Parameters

- **`p0`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TelemetryGunLockerWeaponStored(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC3ADF4880784FA9C, p0)
```


---

## _TELEMETRY_HERB_PICKED

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_HERB_PICKED` |
| Hash | `0xAE693EC3A178F6C2` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `herbType` (Hash) |

### Parameters

- **`herbType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
TelemetryHerbPicked(herbType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xAE693EC3A178F6C2, herbType)
```


---

## _TELEMETRY_HONOR

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_HONOR` |
| Hash | `0xE6B763C7F4902201` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryHonor(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE6B763C7F4902201, p0, p1)
```


---

## _TELEMETRY_HUB_NAVIGATION

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_HUB_NAVIGATION` |
| Hash | `0x25CC50EC1A6F3A96` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryHubNavigation(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x25CC50EC1A6F3A96, p0, p1, p2, p3)
```


---

## _TELEMETRY_HUB_OFFERS

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_HUB_OFFERS` |
| Hash | `0x37AA282163B0D2C4` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `couponItem` (Any), `p1` (Any) |

### Parameters

- **`couponItem`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryHubOffers(couponItem, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x37AA282163B0D2C4, couponItem, p1)
```


---

## _TELEMETRY_INTRO_SKIP

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_INTRO_SKIP` |
| Hash | `0x1B554723799245F4` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryIntroSkip(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x1B554723799245F4, p0, p1, p2)
```


---

## _TELEMETRY_LOBBY_PROGRESSION

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_LOBBY_PROGRESSION` |
| Hash | `0xECD67E9FA677CCCF` |
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
TelemetryLobbyProgression(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xECD67E9FA677CCCF, p0, p1, p2, p3)
```


---

## _TELEMETRY_LOOT

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_LOOT` |
| Hash | `0xCF63EF77B0DF0397` |
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
TelemetryLoot(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xCF63EF77B0DF0397, p0, p1, p2, p3)
```


---

## _TELEMETRY_MATCH_NOMINATION

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MATCH_NOMINATION` |
| Hash | `0x330029E121380CEB` |
| Return Type | `void` |
| Build | `1355` |
| Parameters | `args` (Any*) |

### Parameters

- **`args`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TelemetryMatchNomination(args)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x330029E121380CEB, args)
```


---

## _TELEMETRY_MATCH_OVER

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MATCH_OVER` |
| Hash | `0xA2058154357726BB` |
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
TelemetryMatchOver(p0, p1, p2, p3, p4)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA2058154357726BB, p0, p1, p2, p3, p4)
```


---

## _TELEMETRY_MATCH_QUEUE

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MATCH_QUEUE` |
| Hash | `0x4C08D2B6D8BE17E4` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryMatchQueue(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x4C08D2B6D8BE17E4, p0, p1, p2, p3, p4, p5, p6)
```


---

## _TELEMETRY_MATCH_STARTED

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MATCH_STARTED` |
| Hash | `0xF620F47B4F4A78C4` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TelemetryMatchStarted(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF620F47B4F4A78C4, p0, p1)
```


---

## _TELEMETRY_MATCH_VOTE

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MATCH_VOTE` |
| Hash | `0xEF3C68F56BAD7B69` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*), `p1` (Any*) |

### Parameters

- **`p0`** (`Any*`)
- **`p1`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
TelemetryMatchVote(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEF3C68F56BAD7B69, p0, p1)
```


---

## _TELEMETRY_MENU_NAVIGATION

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MENU_NAVIGATION` |
| Hash | `0x3255D4D2082C6339` |
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
TelemetryMenuNavigation(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3255D4D2082C6339, p0, p1, p2, p3)
```


---

## _TELEMETRY_MISSION_CHECKPOINT

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MISSION_CHECKPOINT` |
| Hash | `0x8EC7890D446BD9C1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryMissionCheckpoint(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x8EC7890D446BD9C1, p0, p1, p2)
```


---

## _TELEMETRY_MISSION_FAILED_TO_LAUNCH

**Description:** _TELEMETRY_C* - _TELEMETRY_G*

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MISSION_FAILED_TO_LAUNCH` |
| Hash | `0x6571E4327390EC0B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `x` (float), `y` (float), `z` (float), `reason` (int) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`x`** (`float`)
- **`y`** (`float`)
- **`z`** (`float`)
- **`reason`** (`int`)

### Usage

**Lua (Direct):**
```lua
TelemetryMissionFailedToLaunch(p0, p1, x, y, z, reason)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6571E4327390EC0B, p0, p1, x, y, z, reason)
```


---

## _TELEMETRY_MISSION_ILO_OPTION

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MISSION_ILO_OPTION` |
| Hash | `0xEA323F5E1A4DA2F1` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryMissionIloOption(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xEA323F5E1A4DA2F1, p0, p1)
```


---

## _TELEMETRY_MISSION_OVER

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MISSION_OVER` |
| Hash | `0xD894437E12C17AEC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryMissionOver(p0, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD894437E12C17AEC, p0, p1)
```


---

## _TELEMETRY_MISSION_STARTED

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MISSION_STARTED` |
| Hash | `0x15B0CC1B36F1DE29` |
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
TelemetryMissionStarted(p0, p1, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x15B0CC1B36F1DE29, p0, p1, p2, p3)
```


---

## _TELEMETRY_MOONSHINE_BREW

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_MOONSHINE_BREW` |
| Hash | `0xB5013EFBB5516867` |
| Return Type | `void` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any), `p7` (Any), `p8` (Any), `p9` (Any), `p10` (Any) |

### Parameters

- **`p0`** (`Any`)
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
TelemetryMoonshineBrew(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xB5013EFBB5516867, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
```


---

## _TELEMETRY_NET_CAMP

| Property | Value |
|----------|-------|
| Native Name | `_TELEMETRY_NET_CAMP` |
| Hash | `0xA72773C3134F9A57` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any), `p3` (Any), `p4` (Any), `p5` (Any), `p6` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)
- **`p3`** (`Any`)
- **`p4`** (`Any`)
- **`p5`** (`Any`)
- **`p6`** (`Any`)

### Usage

**Lua (Direct):**
```lua
TelemetryNetCamp(p0, p1, p2, p3, p4, p5, p6)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA72773C3134F9A57, p0, p1, p2, p3, p4, p5, p6)
```


---

*End of TELEMETRY natives part 1*
