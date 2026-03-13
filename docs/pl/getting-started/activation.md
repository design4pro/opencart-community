---
title: Aktywacja
description: Aktywuj i przetestuj pakiet językowy w OpenCart
---

# Przewodnik aktywacji

Niniejszy przewodnik wyjaśnia, jak aktywować i przetestować zainstalowany pakiet językowy w OpenCart 4.1.x.

## Aktywacja języka

### Z poziomu rozszerzeń

1. Wybierz **Rozszerzenia** → **Rozszerzenia**
2. Wybierz **Język** z listy rozwijanej
3. Znajdź pakiet językowy na liście
4. Kliknij przycisk **Edytuj** (niebieska ikona ołówka)
5. Ustaw **Status** na **Włączony**
6. Kliknij **Zapisz**

### Szybka aktywacja przez przełącznik statusu

1. Wybierz **Rozszerzenia** → **Rozszerzenia**
2. Wybierz **Język** z listy rozwijanej
3. Znajdź pakiet językowy
4. Kliknij zielony przycisk **Włączony**, aby przełączyć status

## Testowanie aktywacji

### Testowanie frontendu

1. Wyczyść pamięć podręczną przeglądarki
2. Odwiedź stronę główną swojego sklepu
3. Znajdź przełącznik języka (zazwyczaj w nagłówku lub stopce)
4. Kliknij, aby przełączyć na nowy język
5. Zweryfikuj:
   - Menu nawigacyjne są przetłumaczone
   - Kategorie produktów są przetłumaczone
   - Przyciski i etykiety są przetłumaczone

### Testowanie backendu

1. Wyloguj się z panelu administratora
2. Zaloguj się ponownie
3. Interfejs administratora powinien teraz wyświetlać się w Twoim języku
4. Zweryfikuj:
   - Pozycje menu są przetłumaczone
   - Etykiety formularzy są przetłumaczone
   - Komunikaty o błędach są przetłumaczone
   - Przyciski są przetłumaczone

## Rozwiązywanie problemów

### Język się nie pojawia

Jeśli język nie pojawia się na frontendzie:

1. Wybierz **System** → **Lokalizacja** → **Języki**
2. Zweryfikuj, że język jest wymieniony i **Status** to Włączony
3. Sprawdź, czy kod języka jest poprawny (np. `pl` dla polskiego)

### Przełącznik języka nie jest widoczny

Jeśli przełącznik języka nie jest wyświetlany:

1. Wybierz **Projekt** → **Układy**
2. Edytuj swój układ (zazwyczaj "Domyślny" lub "Strona główna")
3. Zweryfikuj, że moduł **Język** jest dodany do pozycji
4. Sprawdź ustawienia modułu

### Tłumaczenia się nie ładują

Jeśli tłumaczenia się nie wyświetlają:

1. Wybierz **Rozszerzenia** → **Rozszerzenia**
2. Wybierz **Język**
3. Zweryfikuj, że Twój pakiet językowy pokazuje status **Włączony**
4. Spróbuj wyłączyć i ponownie włączyć rozszerzenie

!!! warning "Problemy z pamięcią podręczną"
    Jeśli tłumaczenia nie pojawiają się po aktywacji, wyczyść pamięć podręczną OpenCart:
    - Wybierz **Pulpit** → Kliknij ikonę koła zębatego
    - Kliknij **Wyczyść pamięć podręczną**

## Lista weryfikacyjna

Użyj tej listy do weryfikacji pomyślnej aktywacji:

- [ ] Język pokazuje "Włączony" na liście rozszerzeń
- [ ] Język pojawia się w System → Lokalizacja → Języki
- [ ] Przełącznik języka widoczny na frontendzie
- [ ] Frontend wyświetla przetłumaczoną treść
- [ ] Panel administratora wyświetla się w nowym języku
- [ ] Produkty mogą być tłumaczone
- [ ] Kategorie mogą być tłumaczone

---

**Potrzebujesz pomocy?** Opublikuj pytanie na [GitHub Discussions](https://github.com/design4pro/opencart-community/discussions/categories/q-a)
