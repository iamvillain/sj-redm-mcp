# ITEMDATABASE Natives - Part 2 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ITEMDATABASE  
**Natives in this file:** 34  
**Total natives in namespace:** 84  
**Generated from:** RDR3natives JSON data

---

## _ITEMDATABASE_GET_FITS_SLOT_COUNT

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_FITS_SLOT_COUNT` |
| Hash | `0x2970D1D6BFCF9B46` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `category` (Hash) |

### Parameters

- **`category`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetFitsSlotCount(category)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2970D1D6BFCF9B46, category)
```


---

## _ITEMDATABASE_GET_FITS_SLOT_INFO

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_FITS_SLOT_INFO` |
| Hash | `0x77210C146CED5261` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `category` (Hash), `index` (int), `outSlotId` (Hash*) |

### Parameters

- **`category`** (`Hash`)
- **`index`** (`int`)
- **`outSlotId`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetFitsSlotInfo(category, index, outSlotId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x77210C146CED5261, category, index, outSlotId)
```


---

## _ITEMDATABASE_GET_HAS_SLOT_COUNT

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_HAS_SLOT_COUNT` |
| Hash | `0x44915068579D7710` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `category` (Hash) |

### Parameters

- **`category`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetHasSlotCount(category)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x44915068579D7710, category)
```


---

## _ITEMDATABASE_GET_HAS_SLOT_INFO

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_HAS_SLOT_INFO` |
| Hash | `0x8A9BD0DB7E8376CF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `category` (Hash), `index` (int), `outSlotId` (Hash*) |

### Parameters

- **`category`** (`Hash`)
- **`index`** (`int`)
- **`outSlotId`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetHasSlotInfo(category, index, outSlotId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8A9BD0DB7E8376CF, category, index, outSlotId)
```


---

## _ITEMDATABASE_GET_ITEM_PATHSET

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_ITEM_PATHSET` |
| Hash | `0xF4452CE83118C738` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `key` (Hash), `defaultPathset` (Hash) |

### Parameters

- **`key`** (`Hash`)
- **`defaultPathset`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetItemPathset(key, defaultPathset)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF4452CE83118C738, key, defaultPathset)
```


---

## _ITEMDATABASE_GET_ITEM_PRICE_MODIFIERS

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_ITEM_PRICE_MODIFIERS` |
| Hash | `0x4EB37AAB79AB0C48` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetItemPriceModifiers(key, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4EB37AAB79AB0C48, key, outData)
```


---

## _ITEMDATABASE_GET_ITEM_TAG_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_ITEM_TAG_TYPE` |
| Hash | `0x6111B8F9413F413A` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `item` (Hash), `tag` (Hash) |

### Parameters

- **`item`** (`Hash`)
- **`tag`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetItemTagType(item, tag)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6111B8F9413F413A, item, tag)
```


---

## _ITEMDATABASE_GET_MODIFIED_PRICE

**Description:** Returns an alternative cost hash to COST_SHOP_DEFAULT

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_MODIFIED_PRICE` |
| Hash | `0xCB92EC9C004732B4` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `key` (Hash), `index` (int) |

### Parameters

- **`key`** (`Hash`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetModifiedPrice(key, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCB92EC9C004732B4, key, index)
```


---

## _ITEMDATABASE_GET_NUMBER_OF_MODIFIED_PRICES

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_NUMBER_OF_MODIFIED_PRICES` |
| Hash | `0x5AAAF40E9B224F5E` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `key` (Hash) |

### Parameters

- **`key`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetNumberOfModifiedPrices(key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5AAAF40E9B224F5E, key)
```


---

## _ITEMDATABASE_GET_NUMBER_OF_MODIFIERS

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_NUMBER_OF_MODIFIERS` |
| Hash | `0x1289D8315235856D` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `key` (Hash) |

### Parameters

- **`key`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetNumberOfModifiers(key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1289D8315235856D, key)
```


---

## _ITEMDATABASE_GET_PRIORITY_ACCESS_AWARD

**Description:** _ITEMDATABASE_GET_* - _ITEMDATABASE_IS_*

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_PRIORITY_ACCESS_AWARD` |
| Hash | `0xEF254F1A4C08B7E6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `award` (Hash) |

### Parameters

- **`award`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetPriorityAccessAward(award)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEF254F1A4C08B7E6, award)
```


---

## _ITEMDATABASE_GET_SHOP_INVENTORIES_ITEMS_COUNT

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_INVENTORIES_ITEMS_COUNT` |
| Hash | `0xC568B1A0F17C7025` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `shopType` (Hash) |

### Parameters

- **`shopType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopInventoriesItemsCount(shopType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC568B1A0F17C7025, shopType)
```


---

## _ITEMDATABASE_GET_SHOP_INVENTORIES_ITEM_INFO

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_INVENTORIES_ITEM_INFO` |
| Hash | `0x4A79B41B4EB91F4E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `shopType` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`shopType`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopInventoriesItemInfo(shopType, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4A79B41B4EB91F4E, shopType, index, outData)
```


---

## _ITEMDATABASE_GET_SHOP_INVENTORIES_ITEM_INFO_BY_KEY

**Description:** Same Native Function as 0x17721003A66C72BF

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_INVENTORIES_ITEM_INFO_BY_KEY` |
| Hash | `0xCFB06801F5099B25` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `shopType` (Hash), `key` (Hash), `outData` (Any*) |

### Parameters

- **`shopType`** (`Hash`)
- **`key`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopInventoriesItemInfoByKey(shopType, key, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCFB06801F5099B25, shopType, key, outData)
```


---

## _ITEMDATABASE_GET_SHOP_INVENTORIES_REQUIREMENT_GROUP_INFO

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_INVENTORIES_REQUIREMENT_GROUP_INFO` |
| Hash | `0x76C752D788A76813` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `shopType` (Hash), `key` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`shopType`** (`Hash`)
- **`key`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopInventoriesRequirementGroupInfo(shopType, key, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x76C752D788A76813, shopType, key, index, outData)
```


---

## _ITEMDATABASE_GET_SHOP_INVENTORIES_REQUIREMENT_INFO

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_INVENTORIES_REQUIREMENT_INFO` |
| Hash | `0xE0EA5C031AE5539F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `shopType` (Hash), `key` (Hash), `groupIndex` (int), `index` (int), `outData` (Any*) |

### Parameters

- **`shopType`** (`Hash`)
- **`key`** (`Hash`)
- **`groupIndex`** (`int`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopInventoriesRequirementInfo(shopType, key, groupIndex, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE0EA5C031AE5539F, shopType, key, groupIndex, index, outData)
```


---

## _ITEMDATABASE_GET_SHOP_LAYOUT_INFO

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_LAYOUT_INFO` |
| Hash | `0x66A6D76B6BB999B4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `layout` (Hash), `outData` (Any*) |

### Parameters

- **`layout`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopLayoutInfo(layout, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x66A6D76B6BB999B4, layout, outData)
```


---

## _ITEMDATABASE_GET_SHOP_LAYOUT_MENU_INFO_BY_ID

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_LAYOUT_MENU_INFO_BY_ID` |
| Hash | `0xD66114469978B55B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `layout` (Hash), `menu` (Hash), `outData` (Any*) |

### Parameters

- **`layout`** (`Hash`)
- **`menu`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopLayoutMenuInfoById(layout, menu, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD66114469978B55B, layout, menu, outData)
```


---

## _ITEMDATABASE_GET_SHOP_LAYOUT_MENU_INFO_BY_INDEX

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_LAYOUT_MENU_INFO_BY_INDEX` |
| Hash | `0xF04247092F193B75` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `layout` (Hash), `menu` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`layout`** (`Hash`)
- **`menu`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopLayoutMenuInfoByIndex(layout, menu, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF04247092F193B75, layout, menu, index, outData)
```


---

## _ITEMDATABASE_GET_SHOP_LAYOUT_MENU_PAGE_KEY

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_LAYOUT_MENU_PAGE_KEY` |
| Hash | `0x9A60570657A7B635` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `layout` (Hash), `menu` (Hash), `index` (int), `outPageKey` (Hash*) |

### Parameters

- **`layout`** (`Hash`)
- **`menu`** (`Hash`)
- **`index`** (`int`)
- **`outPageKey`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopLayoutMenuPageKey(layout, menu, index, outPageKey)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A60570657A7B635, layout, menu, index, outPageKey)
```


---

## _ITEMDATABASE_GET_SHOP_LAYOUT_PAGE_INFO_BY_KEY

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_LAYOUT_PAGE_INFO_BY_KEY` |
| Hash | `0xB347C100DF0C9B7F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `layout` (Hash), `pageKey` (Hash), `outData` (Any*) |

### Parameters

- **`layout`** (`Hash`)
- **`pageKey`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopLayoutPageInfoByKey(layout, pageKey, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB347C100DF0C9B7F, layout, pageKey, outData)
```


---

## _ITEMDATABASE_GET_SHOP_LAYOUT_PAGE_ITEM_KEY

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_LAYOUT_PAGE_ITEM_KEY` |
| Hash | `0xF32BEF578B3DBAE8` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `layout` (Hash), `pageKey` (Hash), `index` (int), `outItemKey` (Hash*), `outMenuId` (int*), `outLayout` (Hash*) |

### Parameters

- **`layout`** (`Hash`)
- **`pageKey`** (`Hash`)
- **`index`** (`int`)
- **`outItemKey`** (`Hash*`)
- **`outMenuId`** (`int*`)
- **`outLayout`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopLayoutPageItemKey(layout, pageKey, index, outItemKey, outMenuId, outLayout)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF32BEF578B3DBAE8, layout, pageKey, index, outItemKey, outMenuId, outLayout)
```


---

## _ITEMDATABASE_GET_SHOP_LAYOUT_ROOT_MENU_INFO

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_SHOP_LAYOUT_ROOT_MENU_INFO` |
| Hash | `0x86FCB565CCA0CFA7` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `layout` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`layout`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetShopLayoutRootMenuInfo(layout, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x86FCB565CCA0CFA7, layout, index, outData)
```


---

## _ITEMDATABASE_IS_BUNDLE_VALID

**Description:** Params: mode is 0

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_IS_BUNDLE_VALID` |
| Hash | `0x4308812A6E9CA62E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `bundle` (Hash), `mode` (int) |

### Parameters

- **`bundle`** (`Hash`)
- **`mode`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseIsBundleValid(bundle, mode)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4308812A6E9CA62E, bundle, mode)
```


---

## _ITEMDATABASE_IS_INTRINSIC_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_IS_INTRINSIC_ITEM` |
| Hash | `0x337F88E3A063995E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash) |

### Parameters

- **`key`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseIsIntrinsicItem(key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x337F88E3A063995E, key)
```


---

## _ITEMDATABASE_IS_KEY_VALID

**Description:** Params: mode is 0

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_IS_KEY_VALID` |
| Hash | `0x6D5D51B188333FD1` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `mode` (int) |

### Parameters

- **`key`** (`Hash`)
- **`mode`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseIsKeyValid(key, mode)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6D5D51B188333FD1, key, mode)
```


---

## _ITEMDATABASE_IS_OVERPOWERED_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_IS_OVERPOWERED_ITEM` |
| Hash | `0x337F88E3A063995F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash) |

### Parameters

- **`key`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseIsOverpoweredItem(key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x337F88E3A063995F, key)
```


---

## _ITEMDATABASE_IS_SHOP_KEY_VALID

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_IS_SHOP_KEY_VALID` |
| Hash | `0x00B9507D8E1D8716` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `shopType` (Hash) |

### Parameters

- **`shopType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseIsShopKeyValid(shopType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x00B9507D8E1D8716, shopType)
```


---

## _ITEMDATABASE_IS_SHOP_LAYOUT_KEY_VALID

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_IS_SHOP_LAYOUT_KEY_VALID` |
| Hash | `0x3AFE5182C45A84F6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `layout` (Hash) |

### Parameters

- **`layout`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseIsShopLayoutKeyValid(layout)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3AFE5182C45A84F6, layout)
```


---

## _ITEMDATABASE_LOCALIZATION_GET_NUM_LABEL_TYPES

**Description:** Returns docData.iNumTotalLabelTypes

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_LOCALIZATION_GET_NUM_LABEL_TYPES` |
| Hash | `0xCEC6A41E8910486A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseLocalizationGetNumLabelTypes(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCEC6A41E8910486A, p0)
```


---

## _ITEMDATABASE_LOCALIZATION_GET_NUM_VALUES

**Description:** Returns iNumValuesForType

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_LOCALIZATION_GET_NUM_VALUES` |
| Hash | `0x49885D82A13EEAEA` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseLocalizationGetNumValues(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x49885D82A13EEAEA, p0, p1)
```


---

## _ITEMDATABASE_LOCALIZATION_GET_TYPE

**Description:** Returns LabelType

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_LOCALIZATION_GET_TYPE` |
| Hash | `0xCABF5D41D0073D4A` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseLocalizationGetType(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCABF5D41D0073D4A, p0, p1)
```


---

## _ITEMDATABASE_LOCALIZATION_GET_VALUE

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_LOCALIZATION_GET_VALUE` |
| Hash | `0x9AE5610FDCED6EA7` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any), `label` (Hash), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`label`** (`Hash`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseLocalizationGetValue(p0, label, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9AE5610FDCED6EA7, p0, label, p2)
```


---

## _ITEMDATABASE_RELEASE_ITEM_COLLECTION

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_RELEASE_ITEM_COLLECTION` |
| Hash | `0xCBB7B6EDFA933ADE` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `collectionId` (int) |

### Parameters

- **`collectionId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseReleaseItemCollection(collectionId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCBB7B6EDFA933ADE, collectionId)
```


---

*End of ITEMDATABASE natives part 2*
