# Translating Language Files

This project uses Claude Code skill for translating OpenCart language files efficiently and accurately.

## Available Languages

| Language | Status |
|----------|--------|
| Polish (pl-pl) | Complete translation available |
| French (fr-fr) | Translation in progress |
| German (de-de) | Coming soon |
| Italian (it-it) | Coming soon |
| Ukrainian (uk-ua) | Coming soon |
| Spanish (es-es) | Coming soon |

## How to Translate

### Using Claude Code Commands

1. **Open Claude Code**
   - Open Claude Code in the project directory

2. **Use Translate Skill**
   - Use the OpenCart Language Translator skill with your desired language and scope

3. **Wait for Completion**
   - The agent will process all files and generate translations

### Example Commands

Translate admin language files to German:

```
/translate admin language to german for v4.1
```

Translate catalog language files to French:

```
/translate catalog language files to french
```

### Direct Requests

You can also ask directly in natural language:

- "Przetłumacz pliki językowe admin na niemiecki dla v4.1"
- "Translate catalog language files to French"
- "Translate all extension files to Spanish"

> **Note:** The translation agent uses AI to provide high-quality, context-aware translations for all language files.

## Translation Workflow

1. **Source Files**
   - English source files are located in `sources/{version}/`

2. **Translation Process**
   - Claude Code processes each file and generates translations using AI

3. **Translation Output**
   - Translated files are saved to `translations/{lang}/{version}/`

4. **Build Package**
   - Use `npm run build` to create the package

## File Structure

### Source Files

```
sources/
├── v4.1/
│   ├── admin/           # Admin panel English files
│   │   ├── catalog/
│   │   ├── common/
│   │   └── ...
│   └── catalog/         # Catalog English files
│       ├── account/
│       ├── checkout/
│       └── ...
├── v4.0/
└── v3/
```

### Translated Files

```
translations/
├── pl/
│   ├── v4.1/
│   │   ├── admin/      # Polish admin translations
│   │   └── catalog/    # Polish catalog translations
│   ├── v4.0/
│   └── v3/
├── fr/
└── ...
```

## Translation Coverage

| Component | Status |
|-----------|--------|
| Admin Panel | Full coverage |
| Catalog | Full coverage |
| Extensions | Full coverage |
| System Messages | Full coverage |

---

> **Check:** All translations maintain 100% compatibility with source files.

## Best Practices

> **Tip:** When adding new translations:
> 1. Always use the regional language code format (pl-pl, de-de, es-es)
> 2. Follow OpenCart's existing translation conventions
> 3. Test translations in both admin and catalog
> 4. Build and install the package to verify

## Need Help?

For questions about translations or to contribute new languages, contact: dev@design4.pro
