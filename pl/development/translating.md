# Tłumaczenie Plików Językowych

Ten projekt używa skillu Claude Code do efektywnego i dokładnego tłumaczenia plików językowych OpenCart.

## Dostępne Języki

| Język | Status |
|-------|--------|
| Polski (pl-pl) | Pełne tłumaczenie dostępne |
| Francuski (fr-fr) | Tłumaczenie w trakcie |
| Niemiecki (de-de) | Wkrótce |
| Włoski (it-it) | Wkrótce |
| Ukraiński (uk-ua) | Wkrótce |
| Hiszpański (es-es) | Wkrótce |

## Jak Tłumaczyć

### Używanie Poleceń Claude Code

1. **Otwórz Claude Code**
   - Otwórz Claude Code w katalogu projektu

2. **Użyj Skilla Tłumaczenia**
   - Użyj skillu OpenCart Language Translator z wybranym językiem i zakresem

3. **Czekaj na Zakończenie**
   - Agent przetworzy wszystkie pliki i wygeneruje tłumaczenia

### Przykładowe Polecenia

Tłumacz pliki językowe administratora na niemiecki:

```
/translate admin language to german for v4.1
```

Tłumacz pliki językowe sklepu na francuski:

```
/translate catalog language files to french
```

### Bezpośrednie Prośby

Możesz też pytać bezpośrednio:

- "Przetłumacz pliki językowe admin na niemiecki dla v4.1"
- "Translate catalog language files to French"
- "Translate all extension files to Spanish"

> **Uwaga:** Agent tłumaczący używa AI do zapewnienia wysokiej jakości, kontekstowych tłumaczeń dla wszystkich plików językowych.

## Przepływ Pracy Tłumaczenia

1. **Pliki Źródłowe**
   - Angielskie pliki źródłowe znajdują się w `sources/{version}/`

2. **Proces Tłumaczenia**
   - Claude Code przetwarza każdy plik i generuje tłumaczenia za pomocą AI

3. **Wynik Tłumaczenia**
   - Przetłumaczone pliki są zapisywane w `translations/{lang}/{version}/`

4. **Zbuduj Pakiet**
   - Użyj `npm run build` do utworzenia pakietu

## Struktura Plików

### Pliki Źródłowe

```
sources/
├── v4.1/
│   ├── admin/           # Angielskie pliki panelu administratora
│   │   ├── catalog/
│   │   ├── common/
│   │   └── ...
│   └── catalog/         # Angielskie pliki sklepu
│       ├── account/
│       ├── checkout/
│       └── ...
├── v4.0/
└── v3/
```

### Przetłumaczone Pliki

```
translations/
├── pl/
│   ├── v4.1/
│   │   ├── admin/      # Polskie tłumaczenia administratora
│   │   └── catalog     # Polskie tłumaczenia sklepu
│   ├── v4.0/
│   └── v3/
├── fr/
└── ...
```

## Pokrycie Tłumaczeń

| Komponent | Status |
|-----------|--------|
| Panel Administratora | Pełne pokrycie |
| Sklep | Pełne pokrycie |
| Rozszerzenia | Pełne pokrycie |
| Komunikaty Systemowe | Pełne pokrycie |

---

> **Gotowe:** Wszystkie tłumaczenia utrzymują 100% kompatybilność z plikami źródłowymi.

## Najlepsze Praktyki

> **Wskazówka:** Dodając nowe tłumaczenia:
> 1. Zawsze używaj regionalnego formatu kodu języka (pl-pl, de-de, es-es)
> 2. Postępuj zgodnie z istniejącymi konwencjami tłumaczeń OpenCart
> 3. Testuj tłumaczenia zarówno w adminie, jak i w sklepie
> 4. Zbuduj i zainstaluj pakiet, aby zweryfikować

## Potrzebujesz Pomocy?

W sprawach tłumaczeń lub aby wnieść nowe języki, skontaktuj się: dev@design4.pro
