# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language Preference

**All generated documents, code, and comments must be in English**, unless explicitly requested otherwise by the user.

## Project Overview

This is a Zensical-powered documentation site for OpenCart language packages, maintained by DESIGN4PRO. The site provides documentation for installing, building, and translating OpenCart language packs.

## Documentation Structure

```
docs/
├── docs.json              # Mintlify configuration
├── index.mdx              # Main landing page (English)
├── overview.mdx           # Overview page
├── languages/             # Language overview pages
│   └── polish.mdx         # Polish language documentation
├── getting-started/       # English getting started guides
│   ├── installation.mdx
│   ├── purchase.mdx
│   └── support.mdx
├── development/           # Development guides
│   ├── building.mdx
│   └── translating.mdx
└── CLAUDE.md
```

## Commands

### Local Development

```bash
# Start local development server (Mintlify)
npx mintlify dev
```

### Build & Deploy

```bash
# Build documentation for production
npx mintlify build

# Start production server
npx mintlify start

# Deploy to Mintlify
npx mintlify deploy
```

### Validation

```bash
# Check for broken links
npx mintlify broken-links

# Validate configuration
npx mintlify validate
```

## Configuration

The site uses the "maple" theme with primary color `#0096e6`. Navigation is configured in `docs.json` using the **tabs** pattern (recommended by Mintlify): Getting Started, Languages, and Development.

## OpenCart Version

**Only OpenCart 4.1.x is supported.** The source files are located in `../opencart/src/v4.1/`.

## Extension Structure

The extension `oc_language_pl` (Polish Language Pack) is the only extension in this project. Located at:
- `../opencart/src/v4.1/extension/oc_language_pl/`

Key files:
- `install.json` - Extension metadata (version 4.1.x only)
- `admin/` - Admin panel language files
- `catalog/` - Catalog (storefront) language files

## Multi-Language Support

The documentation supports English (default) and Polish (`/pl/`). When adding new pages:
1. Create the English version in the root directory
2. Create the Polish translation in `pl/` directory
3. Add both to `docs.json` navigation
