# ITEMDATABASE Natives - Part 1 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** ITEMDATABASE  
**Natives in this file:** 50  
**Total natives in namespace:** 84  
**Generated from:** RDR3natives JSON data

---

## ITEMDATABASE_FILLOUT_ITEM_BY_NAME

| Property | Value |
|----------|-------|
| Native Name | `ITEMDATABASE_FILLOUT_ITEM_BY_NAME` |
| Hash | `0x2A610BEE7D341CC4` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutItemByName(key, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x2A610BEE7D341CC4, key, outData)
```


---

## ITEMDATABASE_FILLOUT_ITEM_EFFECT_ID_INFO

| Property | Value |
|----------|-------|
| Native Name | `ITEMDATABASE_FILLOUT_ITEM_EFFECT_ID_INFO` |
| Hash | `0xCF2D360D27FD1ABF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutItemEffectIdInfo(key, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCF2D360D27FD1ABF, key, outData)
```


---

## ITEMDATABASE_FILLOUT_ITEM_INFO

| Property | Value |
|----------|-------|
| Native Name | `ITEMDATABASE_FILLOUT_ITEM_INFO` |
| Hash | `0xFE90ABBCBFDC13B2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutItemInfo(key, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFE90ABBCBFDC13B2, key, outData)
```


---

## ITEMDATABASE_IS_BUYABLE_AWARD_VALID

| Property | Value |
|----------|-------|
| Native Name | `ITEMDATABASE_IS_BUYABLE_AWARD_VALID` |
| Hash | `0x4CE753203FA42214` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `award` (Hash) |

### Parameters

- **`award`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseIsBuyableAwardValid(award)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4CE753203FA42214, award)
```


---

## _0x17721003A66C72BF

| Property | Value |
|----------|-------|
| Native Name | `_0x17721003A66C72BF` |
| Hash | `0x17721003A66C72BF` |
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
local result = _0x17721003A66C72BF(shopType, key, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x17721003A66C72BF, shopType, key, outData)
```


---

## _ITEMDATABASE_GET_AWARD_ACQUIRE_COST

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_AWARD_ACQUIRE_COST` |
| Hash | `0x1FC25AEB5F76B38D` |
| Return Type | `BOOL` |
| API Set | `client` |
| Build | `1311` |
| Parameters | `award` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`award`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetAwardAcquireCost(award, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1FC25AEB5F76B38D, award, index, outData)
```


---

## _0x388088BFF3681189

| Property | Value |
|----------|-------|
| Native Name | `_0x388088BFF3681189` |
| Hash | `0x388088BFF3681189` |
| Return Type | `int` |
| Build | `1232` |
| Parameters | `bundle` (Hash), `costtype` (Hash) |

### Parameters

- **`bundle`** (`Hash`)
- **`costtype`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x388088BFF3681189(bundle, costtype)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x388088BFF3681189, bundle, costtype)
```


---

## _0x3A0B667ABFF87F6E

| Property | Value |
|----------|-------|
| Native Name | `_0x3A0B667ABFF87F6E` |
| Hash | `0x3A0B667ABFF87F6E` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any), `p2` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)
- **`p2`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x3A0B667ABFF87F6E(p0, p1, p2)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3A0B667ABFF87F6E, p0, p1, p2)
```


---

## _0x48229CE0C7938237

**Description:** _ITEMDATABASE_GET_(A)* - _ITEMDATABASE_GET_(B)*

| Property | Value |
|----------|-------|
| Native Name | `_0x48229CE0C7938237` |
| Hash | `0x48229CE0C7938237` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `award` (Hash) |

### Parameters

- **`award`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x48229CE0C7938237(award)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x48229CE0C7938237, award)
```


---

## _0x537A0555F62CA01A

| Property | Value |
|----------|-------|
| Native Name | `_0x537A0555F62CA01A` |
| Hash | `0x537A0555F62CA01A` |
| Return Type | `BOOL` |
| Build | `1436` |
| Parameters | `key` (Hash), `p1` (int) |

### Parameters

- **`key`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x537A0555F62CA01A(key, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x537A0555F62CA01A, key, p1)
```


---

## _0x799FCD53358ED5FA

**Description:** Returns Item Count

| Property | Value |
|----------|-------|
| Native Name | `_0x799FCD53358ED5FA` |
| Hash | `0x799FCD53358ED5FA` |
| Return Type | `int` |
| Build | `1355` |
| Parameters | `bundle` (Any), `p1` (Any) |

### Parameters

- **`bundle`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x799FCD53358ED5FA(bundle, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x799FCD53358ED5FA, bundle, p1)
```


---

## _0x7A35A72A692BE9DB

| Property | Value |
|----------|-------|
| Native Name | `_0x7A35A72A692BE9DB` |
| Hash | `0x7A35A72A692BE9DB` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `p0` (Any) |

### Parameters

- **`p0`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x7A35A72A692BE9DB(p0)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7A35A72A692BE9DB, p0)
```


---

## _0x8870895BA5ED9385

| Property | Value |
|----------|-------|
| Native Name | `_0x8870895BA5ED9385` |
| Hash | `0x8870895BA5ED9385` |
| Return Type | `int` |
| Build | `1232` |
| Parameters | `key` (Hash), `tagType` (Hash), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`tagType`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x8870895BA5ED9385(key, tagType, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8870895BA5ED9385, key, tagType, outData)
```


---

## _0x8D029948CA29409B

**Description:** _ITEMDATABASE_FILLOUT_(A)* - _ITEMDATABASE_FILLOUT_(B)*

| Property | Value |
|----------|-------|
| Native Name | `_0x8D029948CA29409B` |
| Hash | `0x8D029948CA29409B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `award` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`award`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0x8D029948CA29409B(award, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8D029948CA29409B, award, index, outData)
```


---

## _0xAA29A5F13B2C20B2

**Description:** Returns Pathset Hash

| Property | Value |
|----------|-------|
| Native Name | `_0xAA29A5F13B2C20B2` |
| Hash | `0xAA29A5F13B2C20B2` |
| Return Type | `Hash` |
| Build | `1232` |
| Parameters | `p0` (Any), `p1` (Hash) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0xAA29A5F13B2C20B2(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAA29A5F13B2C20B2, p0, p1)
```


---

## _0xC4146375D8A0B374

| Property | Value |
|----------|-------|
| Native Name | `_0xC4146375D8A0B374` |
| Hash | `0xC4146375D8A0B374` |
| Return Type | `BOOL` |
| Build | `1355` |
| Parameters | `bundle` (Any), `p1` (Any), `index` (int), `p3` (Any) |

### Parameters

- **`bundle`** (`Any`)
- **`p1`** (`Any`)
- **`index`** (`int`)
- **`p3`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xC4146375D8A0B374(bundle, p1, index, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC4146375D8A0B374, bundle, p1, index, p3)
```


---

## _0xD076DB9B96FAADF1

| Property | Value |
|----------|-------|
| Native Name | `_0xD076DB9B96FAADF1` |
| Hash | `0xD076DB9B96FAADF1` |
| Return Type | `BOOL` |
| Build | `1311` |
| Parameters | `award` (Hash), `outData` (Any*) |

### Parameters

- **`award`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD076DB9B96FAADF1(award, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD076DB9B96FAADF1, award, outData)
```


---

## _0xDBEADA0DF5F9AB9F

| Property | Value |
|----------|-------|
| Native Name | `_0xDBEADA0DF5F9AB9F` |
| Hash | `0xDBEADA0DF5F9AB9F` |
| Return Type | `BOOL` |
| Build | `1355` |
| Parameters | `layout` (Hash), `index` (int), `outMenuKey` (int*) |

### Parameters

- **`layout`** (`Hash`)
- **`index`** (`int`)
- **`outMenuKey`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = _0xDBEADA0DF5F9AB9F(layout, index, outMenuKey)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDBEADA0DF5F9AB9F, layout, index, outMenuKey)
```


---

## _ITEMDATABASE_CAN_EQUIP_ITEM_ON_CATEGORY

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_CAN_EQUIP_ITEM_ON_CATEGORY` |
| Hash | `0x856FF92C57742AE5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `category` (Hash), `slotId` (Hash) |

### Parameters

- **`key`** (`Hash`)
- **`category`** (`Hash`)
- **`slotId`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseCanEquipItemOnCategory(key, category, slotId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x856FF92C57742AE5, key, category, slotId)
```


---

## _ITEMDATABASE_CREATE_ITEM_COLLECTION

**Description:** Returns collectionId to be used with 0x8750F69A720C2E41 (p0) and 0xCBB7B6EDFA933ADE (p0)

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_CREATE_ITEM_COLLECTION` |
| Hash | `0x71EFA7999AE79408` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `data` (Any*), `size` (int*), `comparisonType` (int) |

### Parameters

- **`data`** (`Any*`)
- **`size`** (`int*`)
- **`comparisonType`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseCreateItemCollection(data, size, comparisonType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x71EFA7999AE79408, data, size, comparisonType)
```


---

## _ITEMDATABASE_DOES_BUNDLE_HAVE_TAG

**Description:** Params: tag = TAG_ITEM_PROPERTY (tagType(?))

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_DOES_BUNDLE_HAVE_TAG` |
| Hash | `0x99C6EA66DFE73757` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `bundle` (Hash), `tag` (Hash), `tagType` (Hash) |

### Parameters

- **`bundle`** (`Hash`)
- **`tag`** (`Hash`)
- **`tagType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseDoesBundleHaveTag(bundle, tag, tagType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x99C6EA66DFE73757, bundle, tag, tagType)
```


---

## _ITEMDATABASE_DOES_ITEM_HAVE_TAG

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_DOES_ITEM_HAVE_TAG` |
| Hash | `0xFF5FB5605AD56856` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `item` (Hash), `tag` (Hash), `tagType` (Hash) |

### Parameters

- **`item`** (`Hash`)
- **`tag`** (`Hash`)
- **`tagType`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseDoesItemHaveTag(item, tag, tagType)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFF5FB5605AD56856, item, tag, tagType)
```


---

## _ITEMDATABASE_FILLOUT_ACQUIRE_COST

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_ACQUIRE_COST` |
| Hash | `0x74F7928816E4E181` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `costtype` (Hash), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`costtype`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutAcquireCost(key, costtype, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74F7928816E4E181, key, costtype, outData)
```


---

## _ITEMDATABASE_FILLOUT_AWARD_ACQUIRE_COST

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_AWARD_ACQUIRE_COST` |
| Hash | `0xF27F01BBF5ACD3F3` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `award` (Hash), `costtype` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`award`** (`Hash`)
- **`costtype`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutAwardAcquireCost(award, costtype, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF27F01BBF5ACD3F3, award, costtype, index, outData)
```


---

## _ITEMDATABASE_FILLOUT_AWARD_ITEM_INFO

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_AWARD_ITEM_INFO` |
| Hash | `0x121D2005DD64496B` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `award` (Hash), `index` (int), `outData` (Hash*) |

### Parameters

- **`award`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutAwardItemInfo(award, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x121D2005DD64496B, award, index, outData)
```


---

## _ITEMDATABASE_FILLOUT_BUNDLE

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_BUNDLE` |
| Hash | `0xB542632693D53408` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `bundle` (Hash), `costtype` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`bundle`** (`Hash`)
- **`costtype`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutBundle(bundle, costtype, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB542632693D53408, bundle, costtype, index, outData)
```


---

## _ITEMDATABASE_FILLOUT_BUNDLE_UI_DATA

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_BUNDLE_UI_DATA` |
| Hash | `0x74C3B1093728D263` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `bundle` (Hash), `outData` (Any*) |

### Parameters

- **`bundle`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutBundleUiData(bundle, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x74C3B1093728D263, bundle, outData)
```


---

## _ITEMDATABASE_FILLOUT_BUY_AWARD_ACQUIRE_COSTS

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_BUY_AWARD_ACQUIRE_COSTS` |
| Hash | `0xB52E20F6767A09A2` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `award` (Hash), `outData` (Any*), `outUnk` (int*), `p3` (int) |

### Parameters

- **`award`** (`Hash`)
- **`outData`** (`Any*`)
- **`outUnk`** (`int*`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutBuyAwardAcquireCosts(award, outData, outUnk, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB52E20F6767A09A2, award, outData, outUnk, p3)
```


---

## _ITEMDATABASE_FILLOUT_BUY_AWARD_UI_DATA

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_BUY_AWARD_UI_DATA` |
| Hash | `0xF8D09EF8CE61D7BF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `award` (Hash), `outData` (Any*) |

### Parameters

- **`award`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutBuyAwardUiData(award, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF8D09EF8CE61D7BF, award, outData)
```


---

## _ITEMDATABASE_FILLOUT_ITEM

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_ITEM` |
| Hash | `0xAD73B614DF26CF8A` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `key` (Hash), `costtype` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`costtype`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutItem(key, costtype, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAD73B614DF26CF8A, key, costtype, index, outData)
```


---

## _ITEMDATABASE_FILLOUT_ITEM_EFFECT_IDS

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_ITEM_EFFECT_IDS` |
| Hash | `0x9379BE60DC55BBE6` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutItemEffectIds(key, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9379BE60DC55BBE6, key, outData)
```


---

## _ITEMDATABASE_FILLOUT_MODIFIER

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_MODIFIER` |
| Hash | `0x60614A0AB580A2B5` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutModifier(key, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x60614A0AB580A2B5, key, index, outData)
```


---

## _ITEMDATABASE_FILLOUT_PRICE_MODIFIER_BY_KEY

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_PRICE_MODIFIER_BY_KEY` |
| Hash | `0x40C5D95818823C94` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutPriceModifierByKey(key, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x40C5D95818823C94, key, outData)
```


---

## _ITEMDATABASE_FILLOUT_SATCHEL_DATA

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_SATCHEL_DATA` |
| Hash | `0x4776EFD78F75C23F` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `outSatchelItemSize` (int*) |

### Parameters

- **`key`** (`Hash`)
- **`outSatchelItemSize`** (`int*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutSatchelData(key, outSatchelItemSize)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x4776EFD78F75C23F, key, outSatchelItemSize)
```


---

## _ITEMDATABASE_FILLOUT_SELL_PRICE

**Description:** Params: sellType = SELL_SHOP_DEFAULT

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_SELL_PRICE` |
| Hash | `0x7A62A2EEDE1C3766` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `sellType` (Hash), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`sellType`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutSellPrice(key, sellType, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x7A62A2EEDE1C3766, key, sellType, outData)
```


---

## _ITEMDATABASE_FILLOUT_TAG_DATA

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_TAG_DATA` |
| Hash | `0x5A11D6EEA17165B0` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `outData` (Any*), `outIndex` (int*), `p3` (int) |

### Parameters

- **`key`** (`Hash`)
- **`outData`** (`Any*`)
- **`outIndex`** (`int*`)
- **`p3`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutTagData(key, outData, outIndex, p3)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5A11D6EEA17165B0, key, outData, outIndex, p3)
```


---

## _ITEMDATABASE_FILLOUT_UI_DATA

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_FILLOUT_UI_DATA` |
| Hash | `0xB86F7CC2DC67AC60` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseFilloutUiData(key, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB86F7CC2DC67AC60, key, outData)
```


---

## _ITEMDATABASE_GET_ACQUIRE_COST

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_ACQUIRE_COST` |
| Hash | `0x6772A83C67A25775` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `key` (Hash), `index` (int), `outData` (Any*) |

### Parameters

- **`key`** (`Hash`)
- **`index`** (`int`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetAcquireCost(key, index, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6772A83C67A25775, key, index, outData)
```


---

## _ITEMDATABASE_GET_ACQUIRE_COSTS_COUNT

**Description:** Returns the number of <Item>s <acquirecosts> has from the key in catalog_sp.ymt

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_ACQUIRE_COSTS_COUNT` |
| Hash | `0x01FDDAD392D04144` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `key` (Hash) |

### Parameters

- **`key`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetAcquireCostsCount(key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x01FDDAD392D04144, key)
```


---

## _ITEMDATABASE_GET_ACQUIRE_COSTS_COUNT_FROM_COST_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_ACQUIRE_COSTS_COUNT_FROM_COST_TYPE` |
| Hash | `0xDEE7B3C76ED664BE` |
| Return Type | `int` |
| Build | `1232` |
| Parameters | `key` (Hash), `costtype` (Hash) |

### Parameters

- **`key`** (`Hash`)
- **`costtype`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetAcquireCostsCountFromCostType(key, costtype)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDEE7B3C76ED664BE, key, costtype)
```


---

## _ITEMDATABASE_GET_AWARD_ACQUIRE_COST_COUNT

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_AWARD_ACQUIRE_COST_COUNT` |
| Hash | `0x12DF9C58201DD19A` |
| Return Type | `int` |
| Build | `1311` |
| Parameters | `key` (Hash) |

### Parameters

- **`key`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetAwardAcquireCostCount(key)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x12DF9C58201DD19A, key)
```


---

## _ITEMDATABASE_GET_AWARD_ACQUIRE_COST_COUNT_FROM_COST_TYPE

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_AWARD_ACQUIRE_COST_COUNT_FROM_COST_TYPE` |
| Hash | `0xF540239F9937033B` |
| Return Type | `int` |
| Build | `1232` |
| Parameters | `award` (Hash), `costtype` (Hash) |

### Parameters

- **`award`** (`Hash`)
- **`costtype`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetAwardAcquireCostCountFromCostType(award, costtype)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF540239F9937033B, award, costtype)
```


---

## _ITEMDATABASE_GET_AWARD_COST_MODIFIERS

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_AWARD_COST_MODIFIERS` |
| Hash | `0xE81D0378A384E755` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `award` (Hash), `outData` (Any*) |

### Parameters

- **`award`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetAwardCostModifiers(award, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xE81D0378A384E755, award, outData)
```


---

## _ITEMDATABASE_GET_AWARD_ITEM_COUNT

**Description:** Returns iAwardItemCount

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_AWARD_ITEM_COUNT` |
| Hash | `0x3FAA928A79591761` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `award` (Hash) |

### Parameters

- **`award`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetAwardItemCount(award)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3FAA928A79591761, award)
```


---

## _ITEMDATABASE_GET_BUNDLE_ACQUIRE_COST_MODIFIERS

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_BUNDLE_ACQUIRE_COST_MODIFIERS` |
| Hash | `0xA97EE5E4589FCF5A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `bundle` (Hash), `outData` (Any*) |

### Parameters

- **`bundle`** (`Hash`)
- **`outData`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetBundleAcquireCostModifiers(bundle, outData)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA97EE5E4589FCF5A, bundle, outData)
```


---

## _ITEMDATABASE_GET_BUNDLE_ID

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_BUNDLE_ID` |
| Hash | `0x891A45960B6B768A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `bundle` (Hash) |

### Parameters

- **`bundle`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetBundleId(bundle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x891A45960B6B768A, bundle)
```


---

## _ITEMDATABASE_GET_BUNDLE_ITEM_COUNT

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_BUNDLE_ITEM_COUNT` |
| Hash | `0x3332695B01015DF9` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `bundleId` (int), `data` (Any*) |

### Parameters

- **`bundleId`** (`int`)
- **`data`** (`Any*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetBundleItemCount(bundleId, data)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3332695B01015DF9, bundleId, data)
```


---

## _ITEMDATABASE_GET_BUNDLE_ITEM_INFO

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_BUNDLE_ITEM_INFO` |
| Hash | `0x5D48A77E4B668B57` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `bundleId` (int), `data` (Any*), `index` (int), `outBundle` (Hash*) |

### Parameters

- **`bundleId`** (`int`)
- **`data`** (`Any*`)
- **`index`** (`int`)
- **`outBundle`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetBundleItemInfo(bundleId, data, index, outBundle)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5D48A77E4B668B57, bundleId, data, index, outBundle)
```


---

## _ITEMDATABASE_GET_COLLECTION_SIZE

**Description:** Returns (collection?) size/index (?)
_ITEMDATABASE_GET_(A)* - _ITEMDATABASE_GET_(B)*

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_COLLECTION_SIZE` |
| Hash | `0xD389A2549C4EFB30` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `collectionId` (int) |

### Parameters

- **`collectionId`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetCollectionSize(collectionId)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD389A2549C4EFB30, collectionId)
```


---

## _ITEMDATABASE_GET_COMPONENT_ITEM

**Description:** Params: p2 can be a component item hash

| Property | Value |
|----------|-------|
| Native Name | `_ITEMDATABASE_GET_COMPONENT_ITEM` |
| Hash | `0x8750F69A720C2E41` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `collectionId` (int), `index` (int), `outKey` (Hash*) |

### Parameters

- **`collectionId`** (`int`)
- **`index`** (`int`)
- **`outKey`** (`Hash*`)

### Usage

**Lua (Direct):**
```lua
local result = ItemdatabaseGetComponentItem(collectionId, index, outKey)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8750F69A720C2E41, collectionId, index, outKey)
```


---

*End of ITEMDATABASE natives part 1*
