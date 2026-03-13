---
name: zensical-docs
description: This skill should be used when the user asks to "create documentation with Zensical", "set up Zensical", "add new page to docs", "build documentation site", "preview documentation locally", "configure Zensical", "add admonition", "migrate from Mintlify to Zensical", or "update documentation". Provides comprehensive Zensical documentation workflow guidance.
argument-hint: "Use this skill for any questions related to Zensical documentation setup, configuration, authoring, building, and deployment. Refer to the detailed documentation in this skill for step-by-step instructions and best practices."
metadata: 
 - version: 0.1.0
---

# Zensical Documentation Skill

Use this skill when working with Zensical documentation in the OpenCart Community project.

## What is Zensical

Zensical is a modern static site generator for building documentation. It's built by the creators of Material for MkDocs and uses Python Markdown extensions. Key points:

- **Configuration**: Uses `zensical.toml` (TOML format)
- **Source files**: Markdown files in `docs/` directory
- **Output**: Static HTML in `site/` directory
- **NOT Mintlify**: Zensical is a MkDocs successor, not related to Mintlify

## Zensical CLI Commands

### Development Server

```bash
zensical serve              # Start local dev server (localhost:8000)
zensical serve --open      # Open in default browser
zensical serve --dev-addr localhost:3000  # Custom port
```

### Build Commands

```bash
zensical build             # Build static site to site_dir
zensical build --clean    # Build with clean cache
zensical build --config-file custom.toml  # Custom config
```

### New Project

```bash
zensical new project-name  # Create new Zensical project
```

## Configuration (zensical.toml)

Create `zensical.toml` in project root:

```toml
[project]
site_name = "OpenCart Community Documentation"
site_url = "https://design4pro.github.io/opencart-community/"
site_description = "Documentation for OpenCart language packages"
site_author = "DESIGN4PRO"
docs_dir = "docs"
site_dir = "site"
use_directory_urls = true
dev_addr = "localhost:8000"

[project.theme]
variant = "modern"  # or "classic" for Material MkDocs look
```

For detailed configuration options, see `references/configuration.md`.

## Project Structure

```
project/
├── zensical.toml       # Configuration
├── docs/              # Source markdown files
│   ├── index.md       # Home page
│   └── *.md           # Other pages
└── site/              # Built output (gitignored)
```

## Markdown Features

### Admonitions (Callouts)

```markdown
!!! note
    This is a note.

!!! warning
    Be careful with this.

!!! tip "Pro Tip"
    Use custom titles.
```

Supported types: note, abstract, info, tip, success, question, warning, failure, danger, bug, example, quote

### Collapsible Blocks

```markdown
??? note
    Collapsed by default

???+ note
    Expanded by default
```

For more markdown features, see `references/markdown-extensions.md`.

## Workflows

### Adding New Documentation Page

1. Create `docs/new-page.md`
2. Add frontmatter with title and description:
   ```markdown
   ---
   title: New Page Title
   description: Brief description for SEO
   ---
   ```
3. Add page to `zensical.toml` navigation:
   ```toml
   [project.navigation]
   pages = [
       "index",
       { "new-page" = "New Page Title" }
   ]
   ```
4. Run `zensical serve` to preview

### Building for Production

```bash
zensical build --clean
# Output goes to site/ directory
```

### Deploying to GitHub Pages

The project includes `.github/workflows/docs.yml` for automatic deployment.

## Migration from Mintlify

When migrating from Mintlify:

1. Replace `.mdx` files with `.md` files
2. Replace `docs/docs.json` with `zensical.toml`
3. Remove React components (MDX features)
4. Use Markdown admonitions instead of Mintlify callouts
5. Update navigation in `zensical.toml` instead of `docs.json`
6. Change CLI commands from `npx mintlify` to `zensical`

For detailed migration steps, see `references/migration-guide.md`.

## Common Issues

### Port Already in Use

```bash
zensical serve --dev-addr localhost:3001
```

### Build Cache Issues

```bash
zensical build --clean
```

### Configuration Errors

Validate `zensical.toml` syntax - use TOML validator.

## Additional Resources

### Reference Files

- **`references/configuration.md`** - Detailed configuration options
- **`references/markdown-extensions.md`** - Complete markdown features guide
- **`references/migration-guide.md`** - Migration from Mintlify/MkDocs

### Example Files

- **`examples/zensical.toml`** - Complete example configuration
