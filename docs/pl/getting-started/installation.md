---
title: Instalacja
description: Jak zakupić i zainstalować pakiety językowe DESIGN4ᴾᴿᴼ dla OpenCart
---

# Instrukcja instalacji

Niniejszy przewodnik przeprowadzi Cię przez proces zakupu i instalacji pakietów językowych DESIGN4ᴾᴿᴼ dla OpenCart 4.1.x.

## Wymagania

Przed instalacją upewnij się, że posiadasz:

- **OpenCart 4.1.x** - Nasze rozszerzenia obsługują wyłącznie OpenCart 4.1.x
- **Dostęp do panelu administratora** - Potrzebujesz uprawnień administratora do instalacji rozszerzeń
- **Dostęp przez FTP** (opcjonalnie) - Wymagany tylko w przypadku niepowodzenia automatycznej instalacji

## Zakup

1. Odwiedź [Rynek OpenCart](https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=48243)
2. Wyszukaj "DESIGN4ᴾᴿᴼ" lub konkretny pakiet językowy
3. Kup rozszerzenie
4. Pobierz pliki rozszerzenia ze swojego konta

## Instalacja

### Metoda 1: Instalator OpenCart (Zalecana)

1. **Zaloguj się do panelu administratora**
   - Przejdź do panelu administratora OpenCart
   - Wybierz **Rozszerzenia** → **Instalator**

2. **Prześlij rozszerzenie**
   - Kliknij przycisk **Prześlij**
   - Wybierz plik rozszerzenia (`.ocmod.zip`)
   - Poczekaj na zakończenie przesyłania

3. **Zainstaluj rozszerzenie**
   - Wybierz **Rozszerzenia** → **Rozszerzenia**
   - Wybierz **Język** z listy typów rozszerzeń
   - Znajdź pakiet językowy na liście
   - Kliknij przycisk **Zainstaluj** (zielona ikona plusa)

### Metoda 2: Ręczne przesłanie

Jeśli automatyczny instalator nie działa:

1. Wypakuj plik ZIP rozszerzenia
2. Prześlij zawartość do katalogu głównego OpenCart przez FTP
3. Wybierz **Rozszerzenia** → **Rozszerzenia**
4. Wybierz **Język** z listy rozwijanej
5. Kliknij **Zainstaluj** obok pakietu językowego

## Weryfikacja

Po instalacji sprawdź, czy pakiet językowy jest zainstalowany:

1. Wybierz **Rozszerzenia** → **Rozszerzenia**
2. Wybierz **Język** z listy rozwijanej
3. Pakiet językowy powinien być widoczny ze statusem **Włączony**

!!! success "Instalacja zakończona"
    Pakiet językowy został zainstalowany. Przejdź do [Przewodnika konfiguracji](configuration.md), aby skonfigurować sklep.

## Rozwiązywanie problemów

W przypadku problemów podczas instalacji:

- **Przesyłanie nie powiodło się**: Sprawdź uprawnienia do plików i limity PHP
- **Rozszerzenie nie jest widoczne**: Wyczyść pamięć podręczną rozszerzeń
- **Komunikaty o błędach**: Sprawdź sekcję [Rozwiązywanie problemów](../troubleshooting/index.md)

## Następne kroki

- [Skonfiguruj ustawienia sklepu](configuration.md)
- [Aktywuj język](activation.md)

---

**Potrzebujesz pomocy?** Opublikuj pytanie na [GitHub Discussions](https://github.com/design4pro/opencart-community/discussions/categories/q-a)
