# COLLECTION Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** COLLECTION  
**Natives in this file:** 31  
**Generated from:** RDR3natives JSON data

---

## COLLECTABLE_CATEGORY_SET_HAS_RECEIVED_LIST

| Property | Value |
|----------|-------|
| Native Name | `COLLECTABLE_CATEGORY_SET_HAS_RECEIVED_LIST` |
| Hash | `0x0B6D275D2F242E17` |
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
CollectableCategorySetHasReceivedList(p0, p1, p2)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x0B6D275D2F242E17, p0, p1, p2)
```


---

## COLLECTABLE_GET_CATEGORY_ITEM_SET_BUY_AWARD

**Description:** collectableCategory: ANTIQUE_BOTTLES, BIRD_EGGS, ARROWHEADS, FAMILY_HEIRLOOMS, WILD_FLOWERS, COINS, LOST_JEWELRY_RINGS, LOST_JEWELRY_BRACELETS, LOST_JEWELRY_EARRINGS, LOST_JEWELRY_NECKLACES, TAROT_CARDS_CUPS, TAROT_CARDS_PENTACLES, TAROT_CARDS_SWORDS, TAROT_CARDS_WANDS, FOSSILS_COMMON, FOSSILS_UNCOMMON, FOSSILS_RARE

| Property | Value |
|----------|-------|
| Native Name | `COLLECTABLE_GET_CATEGORY_ITEM_SET_BUY_AWARD` |
| Hash | `0xCC644BC1DD655269` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `p1` (Hash) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableGetCategoryItemSetBuyAward(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xCC644BC1DD655269, collectableCategory, p1)
```


---

## _0x33825A7388A6B9F6

| Property | Value |
|----------|-------|
| Native Name | `_0x33825A7388A6B9F6` |
| Hash | `0x33825A7388A6B9F6` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `p1` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x33825A7388A6B9F6(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x33825A7388A6B9F6, collectableCategory, p1)
```


---

## _0x3FD91F1A148A0468

| Property | Value |
|----------|-------|
| Native Name | `_0x3FD91F1A148A0468` |
| Hash | `0x3FD91F1A148A0468` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `collectableCategory` (Hash), `p1` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x3FD91F1A148A0468(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3FD91F1A148A0468, collectableCategory, p1)
```


---

## _0x61BEFBA3CE7A3BC8

**Description:** Params: collectableCategory = WEEKLY_COLLECTABLES

| Property | Value |
|----------|-------|
| Native Name | `_0x61BEFBA3CE7A3BC8` |
| Hash | `0x61BEFBA3CE7A3BC8` |
| Return Type | `BOOL` |
| Build | `1232` |
| Parameters | `collectableCategory` (Hash), `p1` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x61BEFBA3CE7A3BC8(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x61BEFBA3CE7A3BC8, collectableCategory, p1)
```


---

## _0x6BAB7ACED1017204

**Description:** Params: collectableCategory = WEEKLY_COLLECTABLES

| Property | Value |
|----------|-------|
| Native Name | `_0x6BAB7ACED1017204` |
| Hash | `0x6BAB7ACED1017204` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `p1` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x6BAB7ACED1017204(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6BAB7ACED1017204, collectableCategory, p1)
```


---

## _0x755901C7598B97BC

**Description:** Returns p2 (index?) for 0xB9020EC89C07DF04

| Property | Value |
|----------|-------|
| Native Name | `_0x755901C7598B97BC` |
| Hash | `0x755901C7598B97BC` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `p1` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x755901C7598B97BC(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x755901C7598B97BC, collectableCategory, p1)
```


---

## _0x775FA1FC87666847

| Property | Value |
|----------|-------|
| Native Name | `_0x775FA1FC87666847` |
| Hash | `0x775FA1FC87666847` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `collectableCategory` (Hash), `p1` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0x775FA1FC87666847(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x775FA1FC87666847, collectableCategory, p1)
```


---

## _0x93F2E7B5DB85657B

| Property | Value |
|----------|-------|
| Native Name | `_0x93F2E7B5DB85657B` |
| Hash | `0x93F2E7B5DB85657B` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x93F2E7B5DB85657B(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x93F2E7B5DB85657B, p0, p1)
```


---

## _0x9ADEE485726025D4

**Description:** Params: collectableCategory = WEEKLY_COLLECTABLES

| Property | Value |
|----------|-------|
| Native Name | `_0x9ADEE485726025D4` |
| Hash | `0x9ADEE485726025D4` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash) |

### Parameters

- **`collectableCategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = _0x9ADEE485726025D4(collectableCategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9ADEE485726025D4, collectableCategory)
```


---

## _0xB9020EC89C07DF04

**Description:** Accepts more hashes than 0xCC644BC1DD655269
Such as: CAROLINA_PARAKEETS, DINO_BONES, EGRET_FEATHERS, ...

| Property | Value |
|----------|-------|
| Native Name | `_0xB9020EC89C07DF04` |
| Hash | `0xB9020EC89C07DF04` |
| Return Type | `Any` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `p1` (int), `index` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)
- **`index`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xB9020EC89C07DF04(collectableCategory, p1, index)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xB9020EC89C07DF04, collectableCategory, p1, index)
```


---

## _0xC3CA424E1F12ED0C

| Property | Value |
|----------|-------|
| Native Name | `_0xC3CA424E1F12ED0C` |
| Hash | `0xC3CA424E1F12ED0C` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `collectableCategory` (Hash), `p1` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xC3CA424E1F12ED0C(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC3CA424E1F12ED0C, collectableCategory, p1)
```


---

## _0xC4AC39719C1BB559

| Property | Value |
|----------|-------|
| Native Name | `_0xC4AC39719C1BB559` |
| Hash | `0xC4AC39719C1BB559` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `collectableCategory` (Hash), `p1` (Any) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0xC4AC39719C1BB559(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xC4AC39719C1BB559, collectableCategory, p1)
```


---

## _0xD1806FB3EDED6D11

| Property | Value |
|----------|-------|
| Native Name | `_0xD1806FB3EDED6D11` |
| Hash | `0xD1806FB3EDED6D11` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `collectableCategory` (Hash), `p1` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD1806FB3EDED6D11(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD1806FB3EDED6D11, collectableCategory, p1)
```


---

## _0xD297F68928A58130

| Property | Value |
|----------|-------|
| Native Name | `_0xD297F68928A58130` |
| Hash | `0xD297F68928A58130` |
| Return Type | `Any` |
| Build | `1232` |
| Parameters | `collectableCategory` (Hash), `p1` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xD297F68928A58130(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD297F68928A58130, collectableCategory, p1)
```


---

## _COLLECTABLE_SET_ITEM_HASH_DISCOVERED

**Description:** Returns discoveredItemHash
_COLLECTABLE_C* - _COLLECTABLE_G*

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_SET_ITEM_HASH_DISCOVERED` |
| Hash | `0xEC3959E9950BF56B` |
| Return Type | `Hash` |
| API Set | `client` |
| Build | `1207` |
| Parameters | `collectableItem` (Hash) |

### Parameters

- **`collectableItem`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableSetItemHashDiscovered(collectableItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xEC3959E9950BF56B, collectableItem)
```


---

## _0xFC832B06127D8E99

| Property | Value |
|----------|-------|
| Native Name | `_0xFC832B06127D8E99` |
| Hash | `0xFC832B06127D8E99` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `p1` (int) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`p1`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = _0xFC832B06127D8E99(collectableCategory, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xFC832B06127D8E99, collectableCategory, p1)
```


---

## _COLLECTABLE_CATEGORY_GET_NUM_COLLECTABLES

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_CATEGORY_GET_NUM_COLLECTABLES` |
| Hash | `0x62CAB7DB62EAD434` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `collectableSubcategory` (Hash) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`collectableSubcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableCategoryGetNumCollectables(collectableCategory, collectableSubcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x62CAB7DB62EAD434, collectableCategory, collectableSubcategory)
```


---

## _COLLECTABLE_CATEGORY_GET_NUM_FOUND

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_CATEGORY_GET_NUM_FOUND` |
| Hash | `0x5461C821D00FE15A` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `collectableSubcategory` (Hash) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`collectableSubcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableCategoryGetNumFound(collectableCategory, collectableSubcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x5461C821D00FE15A, collectableCategory, collectableSubcategory)
```


---

## _COLLECTABLE_CATEGORY_GET_NUM_TURNED_IN

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_CATEGORY_GET_NUM_TURNED_IN` |
| Hash | `0x3A65F4844913A047` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `collectableSubcategory` (Hash) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`collectableSubcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableCategoryGetNumTurnedIn(collectableCategory, collectableSubcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3A65F4844913A047, collectableCategory, collectableSubcategory)
```


---

## _COLLECTABLE_CATEGORY_GET_TOAST_TEXTURE_DICTIONARY

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_CATEGORY_GET_TOAST_TEXTURE_DICTIONARY` |
| Hash | `0x13AAECDA43318BFE` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `collectableSubcategory` (Hash) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`collectableSubcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableCategoryGetToastTextureDictionary(collectableCategory, collectableSubcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x13AAECDA43318BFE, collectableCategory, collectableSubcategory)
```


---

## _COLLECTABLE_CATEGORY_GET_TOAST_TEXTURE_NAME

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_CATEGORY_GET_TOAST_TEXTURE_NAME` |
| Hash | `0xD52D20B0C76BB26D` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `collectableCategory` (Hash), `collectableSubcategory` (Hash) |

### Parameters

- **`collectableCategory`** (`Hash`)
- **`collectableSubcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableCategoryGetToastTextureName(collectableCategory, collectableSubcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xD52D20B0C76BB26D, collectableCategory, collectableSubcategory)
```


---

## _COLLECTABLE_GET_CATEGORY

**Description:** Used in Script Function NET_COLLECTABLES_HANDLE_ITEM_ADDED
Returns collectableCategory Hash

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_GET_CATEGORY` |
| Hash | `0x725D52F21A5E9EF6` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `collectableItem` (Hash) |

### Parameters

- **`collectableItem`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableGetCategory(collectableItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x725D52F21A5E9EF6, collectableItem)
```


---

## _COLLECTABLE_GET_COLLECTABLE_ITEM_HASH

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_GET_COLLECTABLE_ITEM_HASH` |
| Hash | `0x126CBEBBA46693CF` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `index` (int), `collectableCategory` (Hash), `collectableSubcategory` (Hash) |

### Parameters

- **`index`** (`int`)
- **`collectableCategory`** (`Hash`)
- **`collectableSubcategory`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableGetCollectableItemHash(index, collectableCategory, collectableSubcategory)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x126CBEBBA46693CF, index, collectableCategory, collectableSubcategory)
```


---

## _COLLECTABLE_GET_IPL

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_GET_IPL` |
| Hash | `0x922A79CD4A033B8B` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `collectableItem` (Hash) |

### Parameters

- **`collectableItem`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableGetIpl(collectableItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x922A79CD4A033B8B, collectableItem)
```


---

## _COLLECTABLE_GET_NUM_FOUND

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_GET_NUM_FOUND` |
| Hash | `0xF83D3DDA4D3C8169` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `collectableItem` (Hash) |

### Parameters

- **`collectableItem`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableGetNumFound(collectableItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xF83D3DDA4D3C8169, collectableItem)
```


---

## _COLLECTABLE_GET_NUM_TURNED_IN

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_GET_NUM_TURNED_IN` |
| Hash | `0x9A03F22AD446EEAC` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | `collectableItem` (Hash) |

### Parameters

- **`collectableItem`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableGetNumTurnedIn(collectableItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x9A03F22AD446EEAC, collectableItem)
```


---

## _COLLECTABLE_GET_PLACEMENT_LOCATION

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_GET_PLACEMENT_LOCATION` |
| Hash | `0x1F1DD794908C2BFA` |
| Return Type | `Vector3` |
| Build | `1207` |
| Parameters | `collectableItem` (Hash) |

### Parameters

- **`collectableItem`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableGetPlacementLocation(collectableItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x1F1DD794908C2BFA, collectableItem)
```


---

## _COLLECTABLE_GET_SUBCATEGORY

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_GET_SUBCATEGORY` |
| Hash | `0x6052B4DE6657684F` |
| Return Type | `Hash` |
| Build | `1207` |
| Parameters | `collectableItem` (Hash) |

### Parameters

- **`collectableItem`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = CollectableGetSubcategory(collectableItem)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x6052B4DE6657684F, collectableItem)
```


---

## _COLLECTABLE_INCREMENT_NUM_FOUND

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_INCREMENT_NUM_FOUND` |
| Hash | `0x3EA62E56F386C997` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `collectableItem` (Hash), `amount` (int) |

### Parameters

- **`collectableItem`** (`Hash`)
- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
CollectableIncrementNumFound(collectableItem, amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x3EA62E56F386C997, collectableItem, amount)
```


---

## _COLLECTABLE_INCREMENT_NUM_TURNED_IN

| Property | Value |
|----------|-------|
| Native Name | `_COLLECTABLE_INCREMENT_NUM_TURNED_IN` |
| Hash | `0x398FAB9C96A81924` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `collectableItem` (Hash), `amount` (int) |

### Parameters

- **`collectableItem`** (`Hash`)
- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
CollectableIncrementNumTurnedIn(collectableItem, amount)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x398FAB9C96A81924, collectableItem, amount)
```


---

*End of COLLECTION natives*
