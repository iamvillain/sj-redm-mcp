# MONEY Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** MONEY  
**Natives in this file:** 8  
**Generated from:** RDR3natives JSON data

---

## _0x07AD9E43FD478527

| Property | Value |
|----------|-------|
| Native Name | `_0x07AD9E43FD478527` |
| Hash | `0x07AD9E43FD478527` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `p0` (Any), `p1` (Any) |

### Parameters

- **`p0`** (`Any`)
- **`p1`** (`Any`)

### Usage

**Lua (Direct):**
```lua
local result = _0x07AD9E43FD478527(p0, p1)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x07AD9E43FD478527, p0, p1)
```


---

## _0xA46FD001D1BE896C

| Property | Value |
|----------|-------|
| Native Name | `_0xA46FD001D1BE896C` |
| Hash | `0xA46FD001D1BE896C` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = _0xA46FD001D1BE896C()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xA46FD001D1BE896C, )
```


---

## _MONEY_DECREMENT_CASH_BALANCE

| Property | Value |
|----------|-------|
| Native Name | `_MONEY_DECREMENT_CASH_BALANCE` |
| Hash | `0x466BC8769CF26A7A` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `amount` (int) |

### Parameters

- **`amount`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = MoneyDecrementCashBalance(amount)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x466BC8769CF26A7A, amount)
```


---

## _MONEY_GET_CASH_BALANCE

| Property | Value |
|----------|-------|
| Native Name | `_MONEY_GET_CASH_BALANCE` |
| Hash | `0x0C02DABFA3B98176` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = MoneyGetCashBalance()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x0C02DABFA3B98176, )
```


---

## _MONEY_INCREMENT_CASH_BALANCE

| Property | Value |
|----------|-------|
| Native Name | `_MONEY_INCREMENT_CASH_BALANCE` |
| Hash | `0xBC3422DC91667621` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `amount` (int), `addReason` (Hash) |

### Parameters

- **`amount`** (`int`)
- **`addReason`** (`Hash`)

### Usage

**Lua (Direct):**
```lua
local result = MoneyIncrementCashBalance(amount, addReason)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xBC3422DC91667621, amount, addReason)
```


---

## _NETWORK_GET_CASH_BALANCE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_CASH_BALANCE` |
| Hash | `0x8A67120DBC299525` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetCashBalance()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x8A67120DBC299525, )
```


---

## _NETWORK_GET_STRING_CASH_BALANCE

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_GET_STRING_CASH_BALANCE` |
| Hash | `0x282D36FF103D78DF` |
| Return Type | `const char*` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = NetworkGetStringCashBalance()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x282D36FF103D78DF, )
```


---

## _NETWORK_IS_MONEY_BALANCE_NOT_LESS_THAN

| Property | Value |
|----------|-------|
| Native Name | `_NETWORK_IS_MONEY_BALANCE_NOT_LESS_THAN` |
| Hash | `0xAEC5F0119867E457` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | `cashBalance` (int), `goldBarBalance` (int) |

### Parameters

- **`cashBalance`** (`int`)
- **`goldBarBalance`** (`int`)

### Usage

**Lua (Direct):**
```lua
local result = NetworkIsMoneyBalanceNotLessThan(cashBalance, goldBarBalance)
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xAEC5F0119867E457, cashBalance, goldBarBalance)
```


---

*End of MONEY natives*
