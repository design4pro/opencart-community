---
title: Rozwiązywanie problemów
description: Najczęstsze problemy i rozwiązania dla pakietów językowych DESIGN4ᴾᴿᴼ
---

# Przewodnik rozwiązywania problemów

Rozwiązania najczęstszych problemów z naszymi pakietami językowymi OpenCart.

## Problemy z instalacją

### Rozszerzenie się nie instaluje

**Objawy**: Przesyłanie kończy się niepowodzeniem lub rozszerzenie nie pojawiaia się na liście

**Rozwiązania**:

1. **Sprawdź uprawnienia do plików**
   - Upewnij się, że `/storage/` jest zapisywalny
   - Sprawdź uprawnienia `/admin/`

2. **Zweryfikuj ustawienia PHP**
   - Zwiększ `upload_max_filesize` w php.ini
   - Włącz `file_uploads`

3. **Wyczyść pamięć podręczną**
   - Wybierz Pulpit → Wyczyść pamięć podręczną
   - Odśwież stronę rozszerzeń

### Komunikaty błędów instalacji

| Błąd | Rozwiązanie |
|-------|-------------|
| "Archiwum uszkodzone" | Ponownie pobierz plik rozszerzenia |
| "Odmowa dostępu" | Sprawdź uprawnienia do folderów |
| "Niezgodność wersji" | Zweryfikuj wersję OpenCart |

## Język nie działa

### Język się nie pojawia

**Objawy**: Zainstalowany język nie wyświetla się na frontendzie

**Rozwiązania**:

1. **Zweryfikuj instalację**
   - Wybierz Rozszerzenia → Rozszerzenia → Język
   - Potwierdź status "Włączony"

2. **Sprawdź definicję języka**
   - Wybierz System → Lokalizacja → Języki
   - Zweryfikuj, że język jest wymieniony
   - Sprawdź, czy status to Włączony

3. **Wyczyść pamięć podręczną**
   - System → Konserwacja → Wyczyść pamięć podręczną
   - Odśwież przeglądarkę (Ctrl+F5)

### Tłumaczenia się nie ładują

**Objawy**: Wyświetla się angielski zamiast przetłumaczonego tekstu

**Rozwiązania**:

1. **Włącz język w ustawieniach**
   - Wybierz System → Ustawienia → Lokalizacja
   - Ustaw domyślny język

2. **Sprawdź status pakietu językowego**
   - Rozszerzenia → Rozszerzenia → Język
   - Kliknij Edytuj przy swoim języku
   - Zweryfikuj Status = Włączony

3. **Zainstaluj ponownie pakiet językowy**
   - Odinstaluj istniejącą wersję
   - Wyczyść pamięć podręczną
   - Zainstaluj świeżą kopię

## Problemy z frontendem

### Przełącznik języka nie jest widoczny

**Objawy**: Nie można przełączać między językami

**Rozwiązania**:

1. **Dodaj moduł języka**
   - Wybierz Projekt → Układy
   - Edytuj swój układ
   - Dodaj moduł Język

2. **Sprawdź pozycję modułu**
   - Zweryfikuj, że moduł jest w widocznym obszarze
   - Spróbuj innej pozycji (nagłówek/stopka)

3. **Sprawdź status modułu**
   - Wybierz Rozszerzenia → Moduły
   - Zweryfikuj, że moduł Język jest włączony

### Układ strony psuje się po przełączeniu języka

**Objawy**: Układ strony psuje się podczas przełączania języka

**Rozwiązania**:

1. **Wyczyść pamięć podręczną**
   - System → Konserwacja → Wyczyść pamięć podręczną
   - Odśwież stronę

2. **Sprawdź kompatybilność motywu**
   - Niektóre motywy mogą wymagać aktualizacji
   - Skontaktuj się z twórcą motywu

3. **Sprawdź niestandardowy CSS/JS**
   - Tymczasowo wyłącz niestandardowe skrypty
   - Testuj z domyślnym motywem

## Problemy z backendem

### Panel administratora w złym języku

**Objawy**: Admin pokazuje zły język po instalacji

**Rozwiązania**:

1. **Sprawdź ustawienie języka użytkownika**
   - Wybierz swój profil (prawy górny róg)
   - Ustaw Język panelu administratora

2. **Sprawdź domyślny systemowy**
   - System → Ustawienia → Lokalizacja
   - Zweryfikuj Język panelu administratora

### Brakujące tłumaczenie w adminie

**Objawy**: Niektóre teksty admina są nadal po angielsku

**Rozwiązania**:

1. **Zweryfikuj, czy pakiet językowy jest aktualny**
   - Sprawdź aktualizacje na Rynku

2. **Zgłoś brakujące tłumaczenie**
   - Opublikuj na [GitHub Discussions](https://github.com/design4pro/opencart-community/discussions/categories/bug-reports)

## Problemy z wydajnością

### Wolne ładowanie strony

**Objawy**: Strony ładują się wolno z nowym językiem

**Rozwiązania**:

1. **Włącz buforowanie**
   - System → Ustawienia → Serwer
   - Włącz pamięć podręczną

2. **Zoptymalizuj obrazy**
   - Kompresuj obrazy flag językowych
   - Użyj sprite dla flag

## Zaawansowane rozwiązywanie problemów

### Ręczna instalacja języka

Jeśli automatyczna instalacja nie działa:

1. Prześlij pliki językowe przez FTP:
   - `/catalog/language/pl/` (sklep)
   - `/admin/language/pl/` (admin)

2. Dodaj język w System → Lokalizacja → Języki

3. Wyczyść wszystkie pamięci podręczne

### Problemy z bazą danych

Jeśli podejrzewasz uszkodzenie bazy danych:

1. Utwórz kopię zapasową bazy danych
2. Zainstaluj ponownie pakiet językowy
3. Przywróć w razie potrzeby

---

**Nadal masz problemy?** Opublikuj problem na [GitHub Discussions](https://github.com/design4pro/opencart-community/discussions/categories/q-a)
