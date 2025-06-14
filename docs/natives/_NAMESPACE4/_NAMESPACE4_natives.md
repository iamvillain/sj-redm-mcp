# _NAMESPACE4 Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** _NAMESPACE4  
**Natives in this file:** 1  
**Generated from:** RDR3natives JSON data

---

## _REPORT_PLAYER_BAD_SPORT_BEHAVIOR

**Description:** nullsub, doesn't do anything
however it is being used in tty scripts: [NET_BAD_SPORT_REPORT_PLAYER] Detected bad sport behavior from Player
badSportBehavior: BS_QUITTER = 0, BS_VEHICLE_DESTRUCTION = 1, BS_VOTED_OUT = 2

| Property | Value |
|----------|-------|
| Native Name | `_REPORT_PLAYER_BAD_SPORT_BEHAVIOR` |
| Hash | `0xC31C44C43B48FDE3` |
| Return Type | `void` |
| Build | `1207` |
| Parameters | `gamerHandle` (Any*), `badSportBehaviorType` (int) |

### Parameters

- **`gamerHandle`** (`Any*`)
- **`badSportBehaviorType`** (`int`)

### Usage

**Lua (Direct):**
```lua
ReportPlayerBadSportBehavior(gamerHandle, badSportBehaviorType)
```

**Lua (Hash):**
```lua
Citizen.InvokeNative(0xC31C44C43B48FDE3, gamerHandle, badSportBehaviorType)
```


---

*End of _NAMESPACE4 natives*
