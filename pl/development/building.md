# Budowanie Pakietów

Dowiedz się, jak budować pakiety językowe ze plików źródłowych przy użyciu systemu budowania.

## Wymagania Wstępne

- Node.js w wersji 18 lub wyższej
- Menadżer pakietów npm lub yarn

## Instalacja

```bash
# Używając npm
npm install

# Używając yarn
yarn install
```

## Budowanie Pakietów

### Buduj Wszystkie Pakiety

Zbuduj wszystkie pakiety językowe dla domyślnej wersji:

```bash
npm run build
```

### Buduj Określony Język

Zbuduj tylko pakiet określonego języka:

```bash
npm run build:pl
```

### Buduj Wszystkie Języki

Zbuduj wszystkie pakiety językowe dla wszystkich wersji:

```bash
npm run build:all
```

## Wynik

Zbudowane pakiety są zapisywane w katalogu `packages/`:

```
packages/
├── pl/
│   ├── v4.1/
│   │   └── opencart-core-language-pl-v4.1.ocmod.zip
│   ├── v4.0/
│   └── v3/
├── fr/
└── ...
```

> **Uwaga:** Każdy pakiet jest nazwany zgodnie z konwencją: `opencart-core-language-{lang}-{version}.ocmod.zip`

## Struktura Pakietu

Każdy pakiet ZIP zawiera:

```
opencart-core-language-{lang}-{version}.ocmod.zip
├── install.json
├── admin/
│   └── language/
│       ├── en-gb/
│       └── {language}/
└── catalog/
    └── language/
        ├── en-gb/
        └── {language}/
```

## Szablon Rozszerzenia

Wielokrotnie używalny szablon do tworzenia rozszerzeń językowych OpenCart znajduje się w:

```
sources/v4.1/extension/template/design4pro/
```

### Struktura Szablonu

```
design4pro/
├── install.json
└── admin/
    ├── controller/dashboard/language_xx.php
    ├── model/dashboard/language_xx.php    # Konfigurowalne stałe
    ├── view/template/dashboard/language_xx.twig
    └── language/
        ├── en-gb/language_xx.php
        └── pl-pl/language_xx.php
```

### Używanie Szablonu

1. **Kopiuj Szablon**
   - Skopiuj folder `design4pro` do nowego katalogu języka (np. `language_de/`)

2. **Zmień Nazwy Plików**
   - Zmień nazwy wszystkich plików `language_xx` na swój kod języka:
     - `language_xx.php` → `language_de.php`
     - `language_xx.twig` → `language_de.twig`

3. **Skonfiguruj Stałe**
   - Zmodyfikuj stałe w `model/dashboard/language_de.php`:
     - `LANGUAGE_CODE` - format regionalny (np. `'de-de'`)
     - `LANGUAGE_NAME` - nazwa języka
     - `COUNTRY_CODE`, `CURRENCY_CODE`, `TAX_RATE_PERCENT`
     - `ZONES` - tablica regionów/prowincji
     - Słowniki tłumaczeń

4. **Zaktualizuj Folder Języka**
   - Zmień nazwę folderu języka z `pl-pl` na swój kod (np. `de-de`)

5. **Tłumacz**
   - Przetłumacz `admin/language/{code}/language_de.php`

6. **Zaktualizuj Metadane**
   - Zaktualizuj `install.json` ze szczegółami swojego języka

> **Ostrzeżenie:** Użyj kodu języka w nazwie rozszerzenia: `language_pl`, `language_de` itp. Zapobiega to konfliktom przy instalacji wielu języków.

## Ważne Uwagi

### Kody Języków

Użyj regionalnego formatu kodów języków:

- Polski: `pl-pl`
- Niemiecki: `de-de`
- Hiszpański: `es-es`

OpenCart 4.x wymaga tego formatu dla właściwego wykrywania języka.

### Funkcje Szablonu

Szablon obsługuje:

- Instalację języka
- Konfigurację waluty
- Ustawienia kraju
- Ustawienia stref/prowincji
- Stawki podatkowe
- Słowniki tłumaczeń

---

> **Gotowe:** Twoje rozszerzenie językowe jest teraz gotowe do instalacji przez instalator rozszerzeń OpenCart.
