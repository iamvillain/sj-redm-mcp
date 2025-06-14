# INVENTORY Natives - Part 2 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** INVENTORY  
**Natives in this file:** 33  
**Total natives in namespace:** 83  
**Generated from:** RDR3natives JSON data

---

## _INVENTORY_GET_INVENTORY_ITEM_EQUIPPED_IN_SLOT

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_EQUIPPED_IN_SLOT` |
| Hash | `0xBE012571B25F5ACA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `slotId` (Hash), `p3` (int), `p4` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`slotId`** (`Hash`)
- **`p3`** (`int`)
- **`p4`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemEquippedInSlot(inventoryId, guid, slotId, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBE012571B25F5ACA, inventoryId, guid, slotId, p3, p4)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_EQUIPPED_IN_SLOT_BY_REF

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_EQUIPPED_IN_SLOT_BY_REF` |
| Hash | `0x22E590F108289A9D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `slotId` (Hash), `outGuid` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`slotId`** (`Hash`)
- **`outGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemEquippedInSlotByRef(inventoryId, guid, slotId, outGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x22E590F108289A9D, inventoryId, guid, slotId, outGuid)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_FIT_SLOT

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_FIT_SLOT` |
| Hash | `0xB991FE166FAF84FD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Hash), `p1` (Any*), `p2` (int) |

### Parameters

- **`p0`** (`Hash`)
- **`p1`** (`Any*`)
- **`p2`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemFitSlot(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB991FE166FAF84FD, p0, p1, p2)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_HIDDEN

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_HIDDEN` |
| Hash | `0xF9933164965533B7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemHidden(inventoryId, guid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF9933164965533B7, inventoryId, guid)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_INSPECTION_INFO

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_INSPECTION_INFO` |
| Hash | `0x0C093C1787F18519` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `item` (Hash), `info` (Any*) |

### Parameters

- **`item`** (`Hash`)
- **`info`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemInspectionInfo(item, info)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C093C1787F18519, item, info)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_IN_USE

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_IN_USE` |
| Hash | `0x70E3A884ED000A01` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `inventoryId` (int), `guid` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemInUse(inventoryId, guid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x70E3A884ED000A01, inventoryId, guid)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_IS_ANIMAL_PELT

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_IS_ANIMAL_PELT` |
| Hash | `0x4AEF1FB5B9011D75` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `item` (Hash) |

### Parameters

- **`item`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemIsAnimalPelt(item)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4AEF1FB5B9011D75, item)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_SOUND

**Description:** soundType: see 0x2BAE4880DCDD560B
Returns item Hash to be used with _IS_SCRIPTED_AUDIO_CUSTOM and _PLAY_SOUND_FROM_ITEM (p0)

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_SOUND` |
| Hash | `0x2E1CDC1FF3B8473E` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `item` (Hash), `soundType` (int) |

### Parameters

- **`item`** (`Hash`)
- **`soundType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemSound(item, soundType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2E1CDC1FF3B8473E, item, soundType)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_WEAPON_COPY_ID

**Description:** Returns CopyID

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_WEAPON_COPY_ID` |
| Hash | `0xAB5F12746A099A0E` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemWeaponCopyId(inventoryId, guid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAB5F12746A099A0E, inventoryId, guid)
```


---

## _INVENTORY_GET_IS_INVENTORY_ITEM_SOUND_VALID

**Description:** soundType: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/CItemInfoSoundsInterface__sSoundsInfo__eSoundType

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_IS_INVENTORY_ITEM_SOUND_VALID` |
| Hash | `0x2BAE4880DCDD560B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `item` (Hash), `soundType` (int) |

### Parameters

- **`item`** (`Hash`)
- **`soundType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetIsInventoryItemSoundValid(item, soundType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2BAE4880DCDD560B, item, soundType)
```


---

## _INVENTORY_GET_ITEM_EXPIRY_TIME

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_ITEM_EXPIRY_TIME` |
| Hash | `0x4A606C17276E1BCC` |
| Return Type | `int` |
| Build | `1232` |
| Parameters | `itemGUID` (Any*) |

### Parameters

- **`itemGUID`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetItemExpiryTime(itemGUID)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4A606C17276E1BCC, itemGUID)
```


---

## _INVENTORY_GET_ITEM_FROM_COLLECTION_INDEX

**Description:** collectionId is < outCollectionSize

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_ITEM_FROM_COLLECTION_INDEX` |
| Hash | `0x82FA24C3D3FCD9B7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `collectionId` (int), `itemIndex` (int), `itemData` (Any*) |

### Parameters

- **`collectionId`** (`int`)
- **`itemIndex`** (`int`)
- **`itemData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetItemFromCollectionIndex(collectionId, itemIndex, itemData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x82FA24C3D3FCD9B7, collectionId, itemIndex, itemData)
```


---

## _INVENTORY_IS_GUID_VALID

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_IS_GUID_VALID` |
| Hash | `0xB881CA836CC4B6D4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `guid` (Any*) |

### Parameters

- **`guid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryIsGuidValid(guid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB881CA836CC4B6D4, guid)
```


---

## _INVENTORY_IS_INVENTORY_ITEM_EQUIPPED

**Description:** Alternative Name: _INVENTORY_IS_ITEM_DISABLED

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_IS_INVENTORY_ITEM_EQUIPPED` |
| Hash | `0x3D10D7179D7034AF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `item` (Hash), `p2` (BOOL) |

### Parameters

- **`inventoryId`** (`int`)
- **`item`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryIsInventoryItemEquipped(inventoryId, item, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3D10D7179D7034AF, inventoryId, item, p2)
```


---

## _INVENTORY_IS_INVENTORY_ITEM_FLAG_ENABLED

**Description:** flag: https://github.com/Halen84/RDR3-Native-Flags-And-Enums/tree/main/ItemDatabaseItemFlags
2097152 (is item read?), 8388608 (is item sent/received/mailable?), 16777216 (is item consumable?)

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_IS_INVENTORY_ITEM_FLAG_ENABLED` |
| Hash | `0x245D07651B1D183B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `item` (Hash), `flag` (int) |

### Parameters

- **`item`** (`Hash`)
- **`flag`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryIsInventoryItemFlagEnabled(item, flag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x245D07651B1D183B, item, flag)
```


---

## _INVENTORY_IS_ITEM_EXPIRED

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_IS_ITEM_EXPIRED` |
| Hash | `0x0137C77A2EC64536` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `itemGUID` (Any*) |

### Parameters

- **`itemGUID`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryIsItemExpired(itemGUID)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0137C77A2EC64536, itemGUID)
```


---

## _INVENTORY_IS_PLAYER_INVENTORY_MIRRORING_TRANSACTIONS

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_IS_PLAYER_INVENTORY_MIRRORING_TRANSACTIONS` |
| Hash | `0xFC7563F482781A3D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = InventoryIsPlayerInventoryMirroringTransactions()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFC7563F482781A3D, )
```


---

## _INVENTORY_MOVE_INVENTORY_ITEM

**Description:** guid1: old parent GUID
guid2: new parent GUID
guid3: new item GUID (out param)

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_MOVE_INVENTORY_ITEM` |
| Hash | `0xDCCAA7C3BFD88862` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid1` (Any*), `guid2` (Any*), `slotId` (Hash), `quantity` (int), `outGuid` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid1`** (`Any*`)
- **`guid2`** (`Any*`)
- **`slotId`** (`Hash`)
- **`quantity`** (`int`)
- **`outGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryMoveInventoryItem(inventoryId, guid1, guid2, slotId, quantity, outGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDCCAA7C3BFD88862, inventoryId, guid1, guid2, slotId, quantity, outGuid)
```


---

## _INVENTORY_RELEASE_ITEM_COLLECTION

**Description:** Max num of collections is 5, so release your unused ones.

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_RELEASE_ITEM_COLLECTION` |
| Hash | `0x42A2F33A1942E865` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `collectionId` (int) |

### Parameters

- **`collectionId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryReleaseItemCollection(collectionId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x42A2F33A1942E865, collectionId)
```


---

## _INVENTORY_REMOVE_INVENTORY_ITEM_WITH_GUID

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_REMOVE_INVENTORY_ITEM_WITH_GUID` |
| Hash | `0x3E4E811480B3AE79` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `quantity` (int), `removeReason` (Hash) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`quantity`** (`int`)
- **`removeReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryRemoveInventoryItemWithGuid(inventoryId, guid, quantity, removeReason)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3E4E811480B3AE79, inventoryId, guid, quantity, removeReason)
```


---

## _INVENTORY_REMOVE_INVENTORY_ITEM_WITH_ITEMID

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_REMOVE_INVENTORY_ITEM_WITH_ITEMID` |
| Hash | `0xB4158C8C9A3B5DCE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `item` (Hash), `quantity` (int), `removeReason` (Hash) |

### Parameters

- **`inventoryId`** (`int`)
- **`item`** (`Hash`)
- **`quantity`** (`int`)
- **`removeReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryRemoveInventoryItemWithItemid(inventoryId, item, quantity, removeReason)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB4158C8C9A3B5DCE, inventoryId, item, quantity, removeReason)
```


---

## _INVENTORY_SET_INVENTORY_ITEM_HIDDEN

**Description:** Used with CClothingItem

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_SET_INVENTORY_ITEM_HIDDEN` |
| Hash | `0x9A113C660AEA3832` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `hidden` (BOOL) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`hidden`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
InventorySetInventoryItemHidden(inventoryId, guid, hidden)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9A113C660AEA3832, inventoryId, guid, hidden)
```


---

## _INVENTORY_SET_INVENTORY_ITEM_HIDDEN_2

**Description:** Used with CSatchelItem, R* Script usage: fisihing_core

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_SET_INVENTORY_ITEM_HIDDEN_2` |
| Hash | `0xD740F11FBC8AEF43` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `hidden` (BOOL) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`hidden`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
InventorySetInventoryItemHidden2(inventoryId, guid, hidden)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD740F11FBC8AEF43, inventoryId, guid, hidden)
```


---

## _INVENTORY_SET_INVENTORY_ITEM_INSPECTION_ENABLED

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_SET_INVENTORY_ITEM_INSPECTION_ENABLED` |
| Hash | `0x227522FD59DDB7E8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `p1` (Any*), `enabled` (BOOL) |

### Parameters

- **`inventoryId`** (`int`)
- **`p1`** (`Any*`)
- **`enabled`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = InventorySetInventoryItemInspectionEnabled(inventoryId, p1, enabled)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x227522FD59DDB7E8, inventoryId, p1, enabled)
```


---

## _INVENTORY_SET_INVENTORY_ITEM_IN_USE

**Description:** Only works on CClothingItem

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_SET_INVENTORY_ITEM_IN_USE` |
| Hash | `0x65A5F70F4A292EBE` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `inUse` (BOOL) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`inUse`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
InventorySetInventoryItemInUse(inventoryId, guid, inUse)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x65A5F70F4A292EBE, inventoryId, guid, inUse)
```


---

## _INVENTORY_SET_INVENTORY_ITEM_WEATHER_EFFECTIVENESS

**Description:** OWE_INVALID = -1,
OWE_GOOD_IN_HOT
OWE_GOOD_IN_NONE
OWE_GOOD_IN_COLD
OWE_GOOD_IN_ALL

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_SET_INVENTORY_ITEM_WEATHER_EFFECTIVENESS` |
| Hash | `0x6D2F987736A42D4C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `weatherEffectiveness` (int) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`weatherEffectiveness`** (`int`)

### Usage

**Lua (Direct):**
```lua
InventorySetInventoryItemWeatherEffectiveness(inventoryId, guid, weatherEffectiveness)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6D2F987736A42D4C, inventoryId, guid, weatherEffectiveness)
```


---

## _INVENTORY_SWAP_INVENTORY_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_SWAP_INVENTORY_ITEM` |
| Hash | `0xF2753D691BCDA314` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid1` (Any*), `guid2` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid1`** (`Any*`)
- **`guid2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventorySwapInventoryItem(inventoryId, guid1, guid2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF2753D691BCDA314, inventoryId, guid1, guid2)
```


---

## _INVENTORY_UPDATE_INVENTORY_ITEM

**Description:** Getter: _INVENTORY_GET_FULL_INVENTORY_ITEM_DATA

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_UPDATE_INVENTORY_ITEM` |
| Hash | `0xD80A8854DB5CFBA5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid1` (Any*), `guid2` (Any*), `p3` (int) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid1`** (`Any*`)
- **`guid2`** (`Any*`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryUpdateInventoryItem(inventoryId, guid1, guid2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD80A8854DB5CFBA5, inventoryId, guid1, guid2, p3)
```


---

## _INVENTORY_USE_MISSION_INVENTORY

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_USE_MISSION_INVENTORY` |
| Hash | `0xA6AA9F56BC6CFF58` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `enable` (BOOL), `mirrorTransactions` (BOOL) |

### Parameters

- **`enable`** (`BOOL`)
- **`mirrorTransactions`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
InventoryUseMissionInventory(enable, mirrorTransactions)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA6AA9F56BC6CFF58, enable, mirrorTransactions)
```


---

## _INVENTORY_IS_USING_BACKUP_INVENTORY

**Description:** old name _INVENTORY_USE_SP_BACKUP

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_IS_USING_BACKUP_INVENTORY` |
| Hash | `0x7C7E4AB748EA3B07` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = InventoryIsUsingBackupInventory()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7C7E4AB748EA3B07, )
```


---

## _SET_CARRIABLE_CARRY_ACTION_PROMPT_OVERRIDE

| Property | Value |
|----------|-------|
| Native Name | `_SET_CARRIABLE_CARRY_ACTION_PROMPT_OVERRIDE` |
| Hash | `0xF666EF30F4F0AC4E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `data` (Any*) |

### Parameters

- **`data`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
SetCarriableCarryActionPromptOverride(data)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xF666EF30F4F0AC4E, data)
```


---

## _SET_ITEM_PROMPT_INFO_REQUEST

| Property | Value |
|----------|-------|
| Native Name | `_SET_ITEM_PROMPT_INFO_REQUEST` |
| Hash | `0xFD41D1D4350F6413` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any*) |

### Parameters

- **`p0`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
SetItemPromptInfoRequest(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xFD41D1D4350F6413, p0)
```


---

## _SET_USE_MISSION_INVENTORY

**Description:** This native has no functionality.

| Property | Value |
|----------|-------|
| Native Name | `_SET_USE_MISSION_INVENTORY` |
| Hash | `0x597F571DDEE3FFAC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `toggle` (BOOL) |

### Parameters

- **`toggle`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetUseMissionInventory(toggle)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x597F571DDEE3FFAC, toggle)
```


---

*End of INVENTORY natives part 2*
