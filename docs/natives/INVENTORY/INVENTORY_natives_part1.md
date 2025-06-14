# INVENTORY Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** INVENTORY  
**Natives in this file:** 50  
**Total natives in namespace:** 83  
**Generated from:** RDR3natives JSON data

---

## INVENTORY_COPY_MP_INVENTORY_TO_MISSION_INVENTORY

| Property | Value |
|----------|-------|
| Native Name | `INVENTORY_COPY_MP_INVENTORY_TO_MISSION_INVENTORY` |
| Hash | `0x644CCB76A76CFBD6` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `p1` (BOOL), `bCopySatchelItems` (BOOL), `bCopyEmotes` (BOOL), `bCopyHorse` (BOOL), `p5` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)
- **`p1`** (`BOOL`)
- **`bCopySatchelItems`** (`BOOL`)
- **`bCopyEmotes`** (`BOOL`)
- **`bCopyHorse`** (`BOOL`)
- **`p5`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
InventoryCopyMpInventoryToMissionInventory(p0, p1, bCopySatchelItems, bCopyEmotes, bCopyHorse, p5)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x644CCB76A76CFBD6, p0, p1, bCopySatchelItems, bCopyEmotes, bCopyHorse, p5)
```


---

## INVENTORY_DISABLE_MISSION_INVENTORY_PICKUPS

| Property | Value |
|----------|-------|
| Native Name | `INVENTORY_DISABLE_MISSION_INVENTORY_PICKUPS` |
| Hash | `0xE1F389F03DC83673` |
| Return Type | `void` |
| Build | `1311` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
InventoryDisableMissionInventoryPickups()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE1F389F03DC83673, )
```


---

## INVENTORY_GET_CHILDREN_IN_SLOT_COUNT

| Property | Value |
|----------|-------|
| Native Name | `INVENTORY_GET_CHILDREN_IN_SLOT_COUNT` |
| Hash | `0x033EE4B89F3AC545` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `slotId` (Hash) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`slotId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetChildrenInSlotCount(inventoryId, guid, slotId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x033EE4B89F3AC545, inventoryId, guid, slotId)
```


---

## INVENTORY_GET_GUID_FROM_ITEMID

| Property | Value |
|----------|-------|
| Native Name | `INVENTORY_GET_GUID_FROM_ITEMID` |
| Hash | `0x886DFD3E185C8A89` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `p2` (Hash), `slotId` (Hash), `outGuid` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`p2`** (`Hash`)
- **`slotId`** (`Hash`)
- **`outGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetGuidFromItemid(inventoryId, guid, p2, slotId, outGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x886DFD3E185C8A89, inventoryId, guid, p2, slotId, outGuid)
```


---

## INVENTORY_GET_INVENTORY_ITEM

| Property | Value |
|----------|-------|
| Native Name | `INVENTORY_GET_INVENTORY_ITEM` |
| Hash | `0x9700E8EFC4AB9089` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `inData` (Any*), `outData` (Any*), `p3` (BOOL) |

### Parameters

- **`inventoryId`** (`int`)
- **`inData`** (`Any*`)
- **`outData`** (`Any*`)
- **`p3`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItem(inventoryId, inData, outData, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9700E8EFC4AB9089, inventoryId, inData, outData, p3)
```


---

## _0x0349404A22736740

**Description:** Params: p0 is only 0 or 1
Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0x0349404A22736740` |
| Hash | `0x0349404A22736740` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (BOOL), `inventoryId` (int), `guid` (Any*) |

### Parameters

- **`p0`** (`BOOL`)
- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
_0x0349404A22736740(p0, inventoryId, guid)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0349404A22736740, p0, inventoryId, guid)
```


---

## _0x112BCA290D2EB53C

**Description:** Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0x112BCA290D2EB53C` |
| Hash | `0x112BCA290D2EB53C` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `p1` (Hash), `year` (int*), `month` (int*), `day` (int*), `hour` (int*), `minute` (int*), `second` (int*) |

### Parameters

- **`inventoryId`** (`int`)
- **`p1`** (`Hash`)
- **`year`** (`int*`)
- **`month`** (`int*`)
- **`day`** (`int*`)
- **`hour`** (`int*`)
- **`minute`** (`int*`)
- **`second`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x112BCA290D2EB53C(inventoryId, p1, year, month, day, hour, minute, second)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x112BCA290D2EB53C, inventoryId, p1, year, month, day, hour, minute, second)
```


---

## _INVENTORY_USE_SATCHEL_ITEM

**Description:** eInventoryItem: CLOTHING_FANCY_SUIT, CLOTHING_GUNSLINGER_OUTFIT, etc.
Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_USE_SATCHEL_ITEM` |
| Hash | `0x46743BBFEDBC859E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `eInventoryItem` (Hash), `p2` (BOOL) |

### Parameters

- **`inventoryId`** (`int`)
- **`eInventoryItem`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
InventoryUseSatchelItem(inventoryId, eInventoryItem, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x46743BBFEDBC859E, inventoryId, eInventoryItem, p2)
```


---

## _0x46DB71883EE9D5AF

**Description:** Returns databindingEntryId to be used with 0x951847CEF3D829FF (p0)

| Property | Value |
|----------|-------|
| Native Name | `_0x46DB71883EE9D5AF` |
| Hash | `0x46DB71883EE9D5AF` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `data` (Any), `stats` (const char*), `guid` (Any*), `ped` (Ped) |

### Parameters

- **`data`** (`Any`)
- **`stats`** (`const char*`)
- **`guid`** (`Any*`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = _0x46DB71883EE9D5AF(data, stats, guid, ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x46DB71883EE9D5AF, data, stats, guid, ped)
```


---

## _INVENTORY_REMOVE_INVENTORY_ITEMS

**Description:** removeReason: REMOVE_REASON_DEFAULT (eRemoveItemReason)
Example: INVENTORY::_0x5D6182F3BCE1333B(1, joaat("REMOVE_REASON_DEFAULT")); -> clears weapon wheel
Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_REMOVE_INVENTORY_ITEMS` |
| Hash | `0x5D6182F3BCE1333B` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `removeReason` (Hash) |

### Parameters

- **`inventoryId`** (`int`)
- **`removeReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryRemoveInventoryItems(inventoryId, removeReason)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5D6182F3BCE1333B, inventoryId, removeReason)
```


---

## _0x6862E4D93F64CF01

**Description:** Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0x6862E4D93F64CF01` |
| Hash | `0x6862E4D93F64CF01` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `p2` (Hash), `p3` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`p2`** (`Hash`)
- **`p3`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6862E4D93F64CF01(inventoryId, guid, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6862E4D93F64CF01, inventoryId, guid, p2, p3)
```


---

## _0x6968CE7AC32F6788

**Description:** Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0x6968CE7AC32F6788` |
| Hash | `0x6968CE7AC32F6788` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int) |

### Parameters

- **`inventoryId`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x6968CE7AC32F6788(inventoryId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6968CE7AC32F6788, inventoryId)
```


---

## _INVENTORY_APPLY_WEAPON_STATS_TO_ENTRY

**Description:** Apply the weapon stats to the CatalogItemInspection stats entry id. get entryId with _INVENTORY_GET_CATALOG_ITEM_INSPECTION_STATS_ENTRY

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_APPLY_WEAPON_STATS_TO_ENTRY` |
| Hash | `0x75CFAC49301E134E` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entryId` (int), `weapon` (Hash), `ped` (Ped) |

### Parameters

- **`entryId`** (`int`)
- **`weapon`** (`Hash`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
InventoryApplyWeaponStatsToEntry(entryId, weapon, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75CFAC49301E134E, entryId, weapon, ped)
```


---

## _0x75CFAC49301E134F

**Description:** p1, p2: 0

| Property | Value |
|----------|-------|
| Native Name | `_0x75CFAC49301E134F` |
| Hash | `0x75CFAC49301E134F` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `databindingEntryId` (Hash), `p1` (BOOL), `p2` (BOOL) |

### Parameters

- **`databindingEntryId`** (`Hash`)
- **`p1`** (`BOOL`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
_0x75CFAC49301E134F(databindingEntryId, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x75CFAC49301E134F, databindingEntryId, p1, p2)
```


---

## _0x951847CEF3D829FF

**Description:** p0: value returned by 0x46DB71883EE9D5AF

| Property | Value |
|----------|-------|
| Native Name | `_0x951847CEF3D829FF` |
| Hash | `0x951847CEF3D829FF` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `p0` (Any), `outGuid` (Any*), `ped` (Ped) |

### Parameters

- **`p0`** (`Any`)
- **`outGuid`** (`Any*`)
- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
_0x951847CEF3D829FF(p0, outGuid, ped)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x951847CEF3D829FF, p0, outGuid, ped)
```


---

## _0x9AC53CB6907B4428

**Description:** p1 (out) and p2 (in) are both script arrays?
item: can be a component item, see SHOP_CATALOG_BUILD_LIST_OF_WEAPON_COMPONENTS

| Property | Value |
|----------|-------|
| Native Name | `_0x9AC53CB6907B4428` |
| Hash | `0x9AC53CB6907B4428` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `item` (Hash), `p1` (Any*), `p2` (Any*) |

### Parameters

- **`item`** (`Hash`)
- **`p1`** (`Any*`)
- **`p2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x9AC53CB6907B4428(item, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9AC53CB6907B4428, item, p1, p2)
```


---

## _0x9B4E793B1CB6550A

**Description:** Used in function SET_SHOP_BEING_ROBBED and many other shop related scripts and functions.
INVENTORY_A*

| Property | Value |
|----------|-------|
| Native Name | `_0x9B4E793B1CB6550A` |
| Hash | `0x9B4E793B1CB6550A` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
_0x9B4E793B1CB6550A()
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9B4E793B1CB6550A, )
```


---

## _INVENTORY_GET_CATALOG_ITEM_INSPECTION_EFFECTS_ENTRY

**Description:** Returns effects entry id of CatalogItemInspection container.

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_CATALOG_ITEM_INSPECTION_EFFECTS_ENTRY` |
| Hash | `0x9D21B185ABC2DBC4` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entryId` (int), `name` (const char*), `unk1` (BOOL), `unk2` (BOOL) |

### Parameters

- **`entryId`** (`int`)
- **`name`** (`const char*`)
- **`unk1`** (`BOOL`)
- **`unk2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetCatalogItemInspectionEffectsEntry(entryId, name, unk1, unk2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9D21B185ABC2DBC4, entryId, name, unk1, unk2)
```


---

## _INVENTORY_GET_CATALOG_ITEM_INSPECTION_STATS_ENTRY

**Description:** Returns stats entry id of CatalogItemInspection container

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_CATALOG_ITEM_INSPECTION_STATS_ENTRY` |
| Hash | `0x9D21B185ABC2DBC5` |
| Return Type | `int` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `entryId` (int), `name` (const char*), `unk1` (int), `playerid` (Player) |

### Parameters

- **`entryId`** (`int`)
- **`name`** (`const char*`)
- **`unk1`** (`int`)
- **`playerid`** (`Player`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetCatalogItemInspectionStatsEntry(entryId, name, unk1, playerid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9D21B185ABC2DBC5, entryId, name, unk1, playerid)
```


---

## _0x9E58207B194488AC

| Property | Value |
|----------|-------|
| Native Name | `_0x9E58207B194488AC` |
| Hash | `0x9E58207B194488AC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `ped` (Ped), `p1` (int) |

### Parameters

- **`ped`** (`Ped`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0x9E58207B194488AC(ped, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x9E58207B194488AC, ped, p1)
```


---

## _0xB1DD74A1F5536622

| Property | Value |
|----------|-------|
| Native Name | `_0xB1DD74A1F5536622` |
| Hash | `0xB1DD74A1F5536622` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `inventoryId` (int), `itemGUID` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`itemGUID`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB1DD74A1F5536622(inventoryId, itemGUID)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB1DD74A1F5536622, inventoryId, itemGUID)
```


---

## _0xD08685BA892DBFAB

**Description:** Params: p3 returns an int between 0 and 20 (?)
Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0xD08685BA892DBFAB` |
| Hash | `0xD08685BA892DBFAB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `p2` (int*), `p3` (int*) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`p2`** (`int*`)
- **`p3`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD08685BA892DBFAB(inventoryId, guid, p2, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD08685BA892DBFAB, inventoryId, guid, p2, p3)
```


---

## _0xE1F45A67A9F0DCBC

**Description:** Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_0xE1F45A67A9F0DCBC` |
| Hash | `0xE1F45A67A9F0DCBC` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int) |

### Parameters

- **`inventoryId`** (`int`)

### Usage

**Lua (Direct):**
```lua
_0xE1F45A67A9F0DCBC(inventoryId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE1F45A67A9F0DCBC, inventoryId)
```


---

## _INVENTORY_USE_BACKUP_INVENTORY

**Description:** Only used in R* SP Scripts

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_USE_BACKUP_INVENTORY` |
| Hash | `0xE36D4A38D28D9CFB` |
| Return Type | `void` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `p0` (BOOL) |

### Parameters

- **`p0`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
InventoryUseBackupInventory(p0)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE36D4A38D28D9CFB, p0)
```


---

## _GET_DEFAULT_ITEM_SLOT_INFO

**Description:** p1: WARDROBE, KIT_CAMP, CHARACTER, KIT_MOONSHINER_PROPERTY
Returns slot hash

| Property | Value |
|----------|-------|
| Native Name | `_GET_DEFAULT_ITEM_SLOT_INFO` |
| Hash | `0x6452B1D357D81742` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `item` (Hash), `p1` (Hash) |

### Parameters

- **`item`** (`Hash`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetDefaultItemSlotInfo(item, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6452B1D357D81742, item, p1)
```


---

## _GET_ITEM_ROLE_MAX_LEVEL_COUNT

| Property | Value |
|----------|-------|
| Native Name | `_GET_ITEM_ROLE_MAX_LEVEL_COUNT` |
| Hash | `0xADDD1E7C0ECF7D95` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `eRoleMaxLevel` (Hash) |

### Parameters

- **`inventoryId`** (`int`)
- **`eRoleMaxLevel`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetItemRoleMaxLevelCount(inventoryId, eRoleMaxLevel)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xADDD1E7C0ECF7D95, inventoryId, eRoleMaxLevel)
```


---

## _GET_ITEM_SLOT_MAX_COUNT

| Property | Value |
|----------|-------|
| Native Name | `_GET_ITEM_SLOT_MAX_COUNT` |
| Hash | `0xE80E50BEE276A54A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `provision` (Hash), `slotId` (Hash) |

### Parameters

- **`provision`** (`Hash`)
- **`slotId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = GetItemSlotMaxCount(provision, slotId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE80E50BEE276A54A, provision, slotId)
```


---

## _INVENTORY_ADD_ITEM_WITH_GUID

**Description:** inventoryItemSlotHash: https://pastebin.com/P6fyr3vr

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_ADD_ITEM_WITH_GUID` |
| Hash | `0xCB5D11F9508A928D` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid1` (Any*), `guid2` (Any*), `item` (Hash), `inventoryItemSlot` (Hash), `p5` (int), `addReason` (Hash) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid1`** (`Any*`)
- **`guid2`** (`Any*`)
- **`item`** (`Hash`)
- **`inventoryItemSlot`** (`Hash`)
- **`p5`** (`int`)
- **`addReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryAddItemWithGuid(inventoryId, guid1, guid2, item, inventoryItemSlot, p5, addReason)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB5D11F9508A928D, inventoryId, guid1, guid2, item, inventoryItemSlot, p5, addReason)
```


---

## _INVENTORY_ARE_LOCAL_CHANGES_ALLOWED

**Description:** inventoryId: see _INVENTORY_GET_PED_INVENTORY_ID

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_ARE_LOCAL_CHANGES_ALLOWED` |
| Hash | `0x0FBBFFC891A97C81` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int) |

### Parameters

- **`inventoryId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryAreLocalChangesAllowed(inventoryId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0FBBFFC891A97C81, inventoryId)
```


---

## _INVENTORY_COMPARE_GUIDS

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_COMPARE_GUIDS` |
| Hash | `0x4C543D5DFCD2DAFD` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `guid1` (Any*), `guid2` (Any*) |

### Parameters

- **`guid1`** (`Any*`)
- **`guid2`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryCompareGuids(guid1, guid2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4C543D5DFCD2DAFD, guid1, guid2)
```


---

## _INVENTORY_COPY_ITEM_TO_INVENTORY

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_COPY_ITEM_TO_INVENTORY` |
| Hash | `0xC04F47D488EF9EBA` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `inventoryIdCloned` (int), `p2` (Any*), `p3` (Any) |

### Parameters

- **`inventoryId`** (`int`)
- **`inventoryIdCloned`** (`int`)
- **`p2`** (`Any*`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
InventoryCopyItemToInventory(inventoryId, inventoryIdCloned, p2, p3)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC04F47D488EF9EBA, inventoryId, inventoryIdCloned, p2, p3)
```


---

## _INVENTORY_COPY_ITEM_TO_MISSION_INVENTORY

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_COPY_ITEM_TO_MISSION_INVENTORY` |
| Hash | `0x3112ADB9D5F3426B` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `guid` (Any*), `p1` (BOOL) |

### Parameters

- **`guid`** (`Any*`)
- **`p1`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
InventoryCopyItemToMissionInventory(guid, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3112ADB9D5F3426B, guid, p1)
```


---

## _INVENTORY_CREATE_ITEM_COLLECTION

**Description:** filterName (collections): "ALL", "ALL SATCHEL", "ALL HORSES", "ALL COACHES", "ALL MOUNTS", "ALL CLOTHING", "ALL WEAPONS", "ALL SATCHEL EXCLUDING CLOTHING", "ALL EXCLUDING CLOTHING"
slotId: -1591664384
p3: outCollectionSize (?)
Returns collectionId

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_CREATE_ITEM_COLLECTION` |
| Hash | `0x80D78BDC9D88EF07` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `filterName` (const char*), `slotId` (Hash), `size` (int*) |

### Parameters

- **`inventoryId`** (`int`)
- **`filterName`** (`const char*`)
- **`slotId`** (`Hash`)
- **`size`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryCreateItemCollection(inventoryId, filterName, slotId, size)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x80D78BDC9D88EF07, inventoryId, filterName, slotId, size)
```


---

## _INVENTORY_CREATE_ITEM_COLLECTION_2

**Description:** Returns collectionId

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_CREATE_ITEM_COLLECTION_2` |
| Hash | `0x97A3646645727F42` |
| Return Type | `int` |
| Build | `1232` |
| Parameters | `collectionSize` (int*) |

### Parameters

- **`collectionSize`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryCreateItemCollection2(collectionSize)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x97A3646645727F42, collectionSize)
```


---

## _INVENTORY_CREATE_ITEM_COLLECTION_WITH_FILTER

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_CREATE_ITEM_COLLECTION_WITH_FILTER` |
| Hash | `0x640F890C3E5A3FFD` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `filter` (Any*), `numInCollection` (int*) |

### Parameters

- **`inventoryId`** (`int`)
- **`filter`** (`Any*`)
- **`numInCollection`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryCreateItemCollectionWithFilter(inventoryId, filter, numInCollection)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x640F890C3E5A3FFD, inventoryId, filter, numInCollection)
```


---

## _INVENTORY_CREATE_SORTED_COLLECTION

**Description:** p1: 32
Returns collectionId

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_CREATE_SORTED_COLLECTION` |
| Hash | `0xBB7F968675B34B0C` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | `inventoryId` (int), `p1` (int), `size` (int*) |

### Parameters

- **`inventoryId`** (`int`)
- **`p1`** (`int`)
- **`size`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryCreateSortedCollection(inventoryId, p1, size)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBB7F968675B34B0C, inventoryId, p1, size)
```


---

## _INVENTORY_DISABLE_ITEM

**Description:** Example: (1, WEAPON_REVOLVER_CATTLEMAN, 0) - disables cattleman revolver on weapon wheel

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_DISABLE_ITEM` |
| Hash | `0x766315A564594401` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `item` (Hash), `gtxReason` (Hash) |

### Parameters

- **`inventoryId`** (`int`)
- **`item`** (`Hash`)
- **`gtxReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
InventoryDisableItem(inventoryId, item, gtxReason)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x766315A564594401, inventoryId, item, gtxReason)
```


---

## _INVENTORY_DISABLE_WEAPONS

**Description:** Params: p1 = 0

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_DISABLE_WEAPONS` |
| Hash | `0xE3A46370F70F3607` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `p1` (Any) |

### Parameters

- **`inventoryId`** (`int`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
InventoryDisableWeapons(inventoryId, p1)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xE3A46370F70F3607, inventoryId, p1)
```


---

## _INVENTORY_DOES_ITEM_OWN_EQUIPMENT

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_DOES_ITEM_OWN_EQUIPMENT` |
| Hash | `0x88B58B83A43A8CAB` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `item` (Hash) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`item`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryDoesItemOwnEquipment(inventoryId, guid, item)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x88B58B83A43A8CAB, inventoryId, guid, item)
```


---

## _INVENTORY_ENABLE_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_ENABLE_ITEM` |
| Hash | `0x6A564540FAC12211` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `item` (Hash) |

### Parameters

- **`inventoryId`** (`int`)
- **`item`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
InventoryEnableItem(inventoryId, item)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x6A564540FAC12211, inventoryId, item)
```


---

## _INVENTORY_ENABLE_WEAPONS

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_ENABLE_WEAPONS` |
| Hash | `0xD5D72F1624F3BA7C` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `inventoryId` (int) |

### Parameters

- **`inventoryId`** (`int`)

### Usage

**Lua (Direct):**
```lua
InventoryEnableWeapons(inventoryId)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xD5D72F1624F3BA7C, inventoryId)
```


---

## _INVENTORY_EQUIP_ITEM_WITH_GUID

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_EQUIP_ITEM_WITH_GUID` |
| Hash | `0x734311E2852760D0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `bEquipped` (BOOL) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`bEquipped`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryEquipItemWithGuid(inventoryId, guid, bEquipped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x734311E2852760D0, inventoryId, guid, bEquipped)
```


---

## _INVENTORY_FITS_SLOT_ID

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_FITS_SLOT_ID` |
| Hash | `0x780C5B9AE2819807` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `item` (Hash), `slotId` (Hash) |

### Parameters

- **`item`** (`Hash`)
- **`slotId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryFitsSlotId(item, slotId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x780C5B9AE2819807, item, slotId)
```


---

## _INVENTORY_GET_CHILDREN_COUNT

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_CHILDREN_COUNT` |
| Hash | `0xE843D21A8E2498AA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `parentGuid` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`parentGuid`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetChildrenCount(inventoryId, parentGuid)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE843D21A8E2498AA, inventoryId, parentGuid)
```


---

## _INVENTORY_GET_FULL_INVENTORY_ITEM_DATA

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_FULL_INVENTORY_ITEM_DATA` |
| Hash | `0x025A1B1FB03FBF61` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `p2` (Any*), `p3` (int), `p4` (int) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`p2`** (`Any*`)
- **`p3`** (`int`)
- **`p4`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetFullInventoryItemData(inventoryId, guid, p2, p3, p4)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x025A1B1FB03FBF61, inventoryId, guid, p2, p3, p4)
```


---

## _INVENTORY_GET_INVENTORY_ID_FROM_PED

**Description:** Returns a unique inventory ID for this ped.
For the local player ped, it is an eInventories value.
For other peds, it is the inventory address casted to unsigned int.

enum eInventories
{
	INVENTORY_INVALID,
	INVENTORY_SP_PLAYER,
	INVENTORY_MP_PLAYER,
	INVENTORY_MP_MISSION,
	INVENTORY_SECOND_SCREEN,
	INVENTORY_SP_BACKUP,
	INVENTORY_SP_SNAPSHOT,
	INVENTORY_0xDE2AE452,
	INVENTORY_0x399D9B3A,
	INVENTORY_0x4BD43FA7,
	INVENTORY_0x9529D251,
	INVENTORY_0xA75776AC,
	INVENTORY_MAX_ID = 11,
	INVENTORY_IDS_COUNT
};

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ID_FROM_PED` |
| Hash | `0x13D234A2A3F66E63` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `ped` (Ped) |

### Parameters

- **`ped`** (`Ped`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryIdFromPed(ped)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x13D234A2A3F66E63, ped)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_CHILD

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_CHILD` |
| Hash | `0xCD9A485F2B383B44` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `parentGuid` (Any*), `childIndex` (Any), `outInventoryItem` (Any*) |

### Parameters

- **`inventoryId`** (`int`)
- **`parentGuid`** (`Any*`)
- **`childIndex`** (`Any`)
- **`outInventoryItem`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemChild(inventoryId, parentGuid, childIndex, outInventoryItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCD9A485F2B383B44, inventoryId, parentGuid, childIndex, outInventoryItem)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_COUNT_WITH_GUID

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_COUNT_WITH_GUID` |
| Hash | `0xC97E0D2302382211` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `guid` (Any*), `p2` (BOOL) |

### Parameters

- **`inventoryId`** (`int`)
- **`guid`** (`Any*`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemCountWithGuid(inventoryId, guid, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC97E0D2302382211, inventoryId, guid, p2)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_COUNT_WITH_ITEMID

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_COUNT_WITH_ITEMID` |
| Hash | `0xE787F05DFC977BDE` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `inventoryId` (int), `eInventoryItem` (Hash), `p2` (BOOL) |

### Parameters

- **`inventoryId`** (`int`)
- **`eInventoryItem`** (`Hash`)
- **`p2`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemCountWithItemid(inventoryId, eInventoryItem, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE787F05DFC977BDE, inventoryId, eInventoryItem, p2)
```


---

## _INVENTORY_GET_INVENTORY_ITEM_DESCRIPTION_HASH

| Property | Value |
|----------|-------|
| Native Name | `_INVENTORY_GET_INVENTORY_ITEM_DESCRIPTION_HASH` |
| Hash | `0xA4550FE9C512E3DD` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `item` (Hash) |

### Parameters

- **`item`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = InventoryGetInventoryItemDescriptionHash(item)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA4550FE9C512E3DD, item)
```


---

*End of INVENTORY natives part 1*
