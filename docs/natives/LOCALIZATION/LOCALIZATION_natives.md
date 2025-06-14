# LOCALIZATION Natives

Red Dead Redemption 3 Native Functions Reference

**Namespace:** LOCALIZATION  
**Natives in this file:** 4  
**Generated from:** RDR3natives JSON data

---

## GET_CURRENT_LANGUAGE

**Description:** 0 = american (en-US)
1 = french (fr-FR)
2 = german (de-DE)
3 = italian (it-IT)
4 = spanish (es-ES)
5 = brazilian (pt-BR)
6 = polish (pl-PL)
7 = russian (ru-RU)
8 = korean (ko-KR)
9 = chinesetrad (zh-TW)
10 = japanese (ja-JP)
11 = mexican (es-MX)
12 = chinesesimp (zh-CN)

| Property | Value |
|----------|-------|
| Native Name | `GET_CURRENT_LANGUAGE` |
| Hash | `0xDB917DA5C6835FCC` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = GetCurrentLanguage()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0xDB917DA5C6835FCC, )
```


---

## LOCALIZATION_GET_SYSTEM_DATE_TYPE

**Description:** 0 = DATE_FORMAT_DMY
1 = DATE_FORMAT_MDY
2 = DATE_FORMAT_YMD

Old name: _LOCALIZATION_GET_SYSTEM_DATE_FORMAT

| Property | Value |
|----------|-------|
| Native Name | `LOCALIZATION_GET_SYSTEM_DATE_TYPE` |
| Hash | `0x76E30B799EBEEA0F` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = LocalizationGetSystemDateType()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x76E30B799EBEEA0F, )
```


---

## LOCALIZATION_GET_SYSTEM_LANGUAGE

**Description:** Same return values as GET_CURRENT_LANGUAGE

| Property | Value |
|----------|-------|
| Native Name | `LOCALIZATION_GET_SYSTEM_LANGUAGE` |
| Hash | `0x3C1A05F86AE6ACB5` |
| Return Type | `int` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = LocalizationGetSystemLanguage()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x3C1A05F86AE6ACB5, )
```


---

## _DOES_CURRENT_LANGUAGE_SUPPORT_CONDENSED_STYLE

**Description:** Returns true if the current language is american, french, german, italian, spanish, brazilian or mexican.
_DOES_*

| Property | Value |
|----------|-------|
| Native Name | `_DOES_CURRENT_LANGUAGE_SUPPORT_CONDENSED_STYLE` |
| Hash | `0x45D50415E4D885FF` |
| Return Type | `BOOL` |
| Build | `1207` |
| Parameters | None |

### Usage

**Lua (Direct):**
```lua
local result = DoesCurrentLanguageSupportCondensedStyle()
```

**Lua (Hash):**
```lua
local result = Citizen.InvokeNative(0x45D50415E4D885FF, )
```


---

*End of LOCALIZATION natives*
