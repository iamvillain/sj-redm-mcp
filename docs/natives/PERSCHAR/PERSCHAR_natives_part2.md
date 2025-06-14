# PERSCHAR Natives - Part 2 of 2

Red Dead Redemption 3 Native Functions Reference

**Namespace:** PERSCHAR  
**Natives in this file:** 1  
**Total natives in namespace:** 51  
**Generated from:** RDR3natives JSON data

---

## _SET_PERSCHAR_SCHEDULE

| Property | Value |
|----------|-------|
| Native Name | `_SET_PERSCHAR_SCHEDULE` |
| Hash | `0x187D65F3AEC5D679` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `persCharHash` (Hash), `schedule` (char*) |

### Parameters

- **`persCharHash`** (`Hash`)
- **`schedule`** (`char*`)

### Usage

**Lua (Direct):**
```lua
SetPerscharSchedule(persCharHash, schedule)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0x187D65F3AEC5D679, persCharHash, schedule)
```


---

*End of PERSCHAR natives part 2*
