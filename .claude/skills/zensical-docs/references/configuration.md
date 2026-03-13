# Zensical Configuration Reference

Complete reference for `zensical.toml` configuration file.

## Project Section (Required)

The `[project]` section contains all main settings:

```toml
[project]
site_name = "My Documentation"
site_url = "https://example.com/"
site_description = "Description for SEO"
site_author = "Author Name"
```

## Directory Settings

```toml
[project]
docs_dir = "docs"      # Source directory (default: docs)
site_dir = "site"      # Output directory (default: site)
```

## URL Configuration

```toml
[project]
use_directory_urls = true  # /page/ instead of /page.html
```

## Theme Settings

```toml
[project.theme]
variant = "modern"  # "modern" (default) or "classic" (Material MkDocs)
```

### Theme Colors (Modern variant)

```toml
[project.theme]
primary_color = "#0096e6"  # Primary brand color
accent_color = "#00bcd4"   # Accent color
```

## Navigation

```toml
[project.navigation]
pages = [
    "index",
    "getting-started",
    { "api" = "API Reference" },
    { "guide" = "User Guide" }
]
```

### Nested Navigation

```toml
[project.navigation]
pages = [
    "index",
    {
        "section" = "Guides",
        "children" = [
            "getting-started",
            "installation",
            "configuration"
        ]
    }
]
```

## Markdown Extensions

Enable and configure markdown extensions:

```toml
[project.markdown_extensions]
# Admonitions
admonition = {}

# Code highlighting
pymdownx.highlight = { anchor_linenums = true }
pymdownx.inlinehilite = {}
pymdownx.snippets = {}

# Other extensions
pymdownx.details = {}
pymdownx.superfences = {}
pymdownx.tabbed = { alternate_style = true }
```

## Extra Settings

Custom key-value pairs for templates:

```toml
[project.extra]
github_repo = "organization/repo"
twitter = "@username"
```

## GitHub Integration

```toml
[project.github]
fork = true  # Show fork button
```

## Search

```toml
[project.search]
highlight = true  # Highlight search terms
```

## Unsupported MkDocs Settings

These settings are NOT supported in Zensical:
- `remote_branch`
- `remote_name`
- `exclude_docs`
- `draft_docs`
- `not_in_nav`
- `validation`
- `strict`
- `hooks`
- `watch`

## Environment Variables

Use environment variables in configuration:

```toml
[project]
site_url = "${SITE_URL}"
```

## Multiple Config Files

Use different configs for different environments:

```bash
zensical build --config-file zensical.prod.toml
zensical build --config-file zensical.dev.toml
```
