# OBJECT Natives - Part 4 of 4

Red Dead Redemption 3 Native Functions Reference

**Namespace:** OBJECT  
**Natives in this file:** 3  
**Total natives in namespace:** 153  
**Generated from:** RDR3natives JSON data

---

## _SET_OBJECT_TARGETTABLE_2

| Property | Value |
|----------|-------|
| Native Name | `_SET_OBJECT_TARGETTABLE_2` |
| Hash | `0x581EDBE56E8D62C9` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `targettable` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`targettable`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetObjectTargettable2(object, targettable)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x581EDBE56E8D62C9, object, targettable)
```


---

## _SET_OBJECT_TARGETTABLE_FOCUS

**Description:** focus on objects like focus on peds, p1 is to enable/disable p2 is to enable/disable focus when you have a weapon out

| Property | Value |
|----------|-------|
| Native Name | `_SET_OBJECT_TARGETTABLE_FOCUS` |
| Hash | `0xA22712E8471AA08E` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object), `toggle` (BOOL), `weaponLock` (BOOL) |

### Parameters

- **`object`** (`Object`)
- **`toggle`** (`BOOL`)
- **`weaponLock`** (`BOOL`)

### Usage

**Lua (Direct):**
```lua
SetObjectTargettableFocus(object, toggle, weaponLock)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xA22712E8471AA08E, object, toggle, weaponLock)
```


---

## _SET_PICKUP_COLLECTABLE_ON_MOUNT

| Property | Value |
|----------|-------|
| Native Name | `_SET_PICKUP_COLLECTABLE_ON_MOUNT` |
| Hash | `0x00EE08603EADEE92` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `object` (Object) |

### Parameters

- **`object`** (`Object`)

### Usage

**Lua (Direct):**
```lua
SetPickupCollectableOnMount(object)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x00EE08603EADEE92, object)
```


---

*End of OBJECT natives part 4*
