# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language Preference

**All generated documents, code, and comments must be in English**, unless explicitly requested otherwise by the user.

## Project Overview

This is a Zensical-powered documentation site for OpenCart language packages, maintained by DESIGN4PRO. The site provides documentation for installing, building, and translating OpenCart language packs in English and Polish.

## Documentation Structure (Multilingual)

```
docs/
├── en/                      # English (default)
│   ├── index.md            # Homepage
│   ├── getting-started/
│   │   ├── installation.md
│   │   ├── configuration.md
│   │   └── activation.md
│   ├── extensions/
│   │   ├── polish.md
│   │   └── lithuanian.md
│   ├── faq.md
│   ├── troubleshooting.md
│   └── support.md
│
└── pl/                      # Polish
    ├── index.md            # Homepage (Polish)
    ├── getting-started/
    │   ├── installation.md
    │   ├── configuration.md
    │   └── activation.md
    ├── extensions/
    │   ├── polish.md
    │   └── lithuanian.md
    ├── faq.md
    ├── troubleshooting.md
    └── support.md
```

## Commands

### Local Development

```bash
# Start local development server (Zensical)
zensical serve

# Open in browser
zensical serve --open
```

### Build & Deploy

```bash
# Build documentation for production
zensical build

# Build with clean cache
zensical build --clean

# Start production server
zensical serve
```

## Configuration

The site is configured in `zensical.toml`:
- Uses "modern" theme variant with OpenCart Blue (`#04B6F0`)
- Navigation configured with tabs pattern: Getting Started, Extensions, FAQ, Troubleshooting, Support
- Language toggle configured for English/Polish switching
- Custom homepage with Three.js particle animation

## OpenCart Version

**Only OpenCart 4.1.x is supported.**

## Extension Structure

The extension `oc_language_pl` (Polish Language Pack) is maintained at:
- Private repository: `../opencart/src/v4.1/extension/oc_language_pl/`

## Custom Features

### Three.js Homepage Animation
- Located in `docs/javascripts/home-animation.js`
- Particle system with OpenCart Blue colors
- Mouse interaction for particle attraction
- Custom CSS in `docs/stylesheets/extra.css`

### Homepage Template Override
- Located in `overrides/homepage.html`
- Full-width hero section with animation container

## Adding New Content

When adding new documentation pages:
1. Create the English version in `docs/en/`
2. Create the Polish translation in `docs/pl/`
3. Add both pages to `zensical.toml` navigation
4. Use relative links within the same language (e.g., `../getting-started/installation/`)

## GitHub Discussions

Support and community discussions are hosted at:
https://github.com/design4pro/opencart-community/discussions
