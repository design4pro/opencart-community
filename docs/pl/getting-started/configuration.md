---
title: Konfiguracja
description: Skonfiguruj OpenCart dla wielu języków
---

# Przewodnik konfiguracji

Po zainstalowaniu pakietu językowego musisz skonfigurować OpenCart do używania wielu języków w swoim sklepie.

## Ustawienia języka

### Ustaw domyślny język

1. Wybierz **System** → **Ustawienia**
2. Kliknij **Edytuj** przy swoim sklepie
3. Przejdź do zakładki **Lokalizacja**
4. Ustaw **Język** na preferowany język
5. Ustaw **Język panelu administratora** na preferowany język
6. Kliknij **Zapisz**

### Dodaj języki do swojego sklepu

1. Wybierz **System** → **Lokalizacja** → **Języki**
2. Kliknij **Dodaj nowy**
3. Wypełnij szczegóły języka:

| Pole | Wartość dla polskiego | Wartość dla litewskiego |
|-------|---------------------|------------------------|
| Nazwa języka | Polski | Litewski |
| Kod | pl | lt |
| Locale | pl-pl,pl,polish | lt-lt,lt,lithuanian |
| Status | Włączony | Włączony |
| Kolejność | 1 | 2 |

4. Kliknij **Zapisz**

## Konfiguracja sklepu

### Ustawienia wielojęzyczne

1. Wybierz **System** → **Ustawienia**
2. **Edytuj** swój sklep
3. Przejdź do zakładki **Lokalizacja**
4. Skonfiguruj:
   - **Kraj**: Ustaw domyślny kraj
   - **Województwo**: Ustaw domyślne województwo
   - **Waluta**: Ustaw domyślną walutę
   - **Klasa długości**: Ustaw domyślną jednostkę długości
   - **Klasa wagi**: Ustaw domyślną jednostkę wagi

### Ustawienia przyjaznych URL

Aby uzyskać wielojęzyczne przyjazne URL:

1. Wybierz **System** → **Ustawienia**
2. **Edytuj** swój sklep
3. Przejdź do zakładki **Serwer**
4. Włącz **Przyjazne URL**

!!! note
    Upewnij się, że plik `.htaccess` jest poprawnie skonfigurowany dla przyjaznych URL.

## Przełącznik języka

### Dodawanie przełącznika języka do nagłówka

1. Wybierz **Projekt** → **Układy**
2. **Edytuj** układ nagłówka (lub utwórz nowy)
3. Dodaj moduł **Język** do pozycji **Nagłówek**
4. Kliknij **Zapisz**

### Dodawanie przełącznika języka do stopki

1. Wybierz **Projekt** → **Układy**
2. **Edytuj** układ stopki (lub utwórz nowy)
3. Dodaj moduł **Język** do pozycji **Stopka**
4. Kliknij **Zapisz**

## Kategorie i strony informacyjne

Aby uzyskać wielojęzyczną treść:

1. Wybierz **Katalog** → **Kategorie** (lub **Informacje**)
2. **Edytuj** każdą kategorię/stronę
3. Zobaczysz zakładki języków na górze
4. Wprowadź tłumaczenia dla każdego języka
5. Kliknij **Zapisz**

## Tłumaczenia produktów

Aby tłumaczyć produkty:

1. Wybierz **Katalog** → **Produkty**
2. **Edytuj** produkt
3. Użyj zakładek języków do wprowadzenia tłumaczeń dla:
   - Nazwa produktu
   - Opis
   - Tytuł meta
   - Opis meta
   - Tagi
4. Kliknij **Zapisz**

## Następne kroki

- [Aktywuj język w swoim sklepie](activation.md)

---

**Potrzebujesz pomocy?** Opublikuj pytanie na [GitHub Discussions](https://github.com/design4pro/opencart-community/discussions/categories/q-a)
