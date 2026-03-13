# Migration Guide: Mintlify to Zensical

Step-by-step guide for migrating from Mintlify to Zensical.

## Overview

Zensical is NOT related to Mintlify. It's a modern static site generator built by the creators of Material for MkDocs. The main differences:

| Feature | Mintlify | Zensical |
|---------|----------|----------|
| Config | `docs.json` | `zensical.toml` |
| Files | `.mdx` | `.md` |
| CLI | `npx mintlify` | `zensical` |
| Theme | Custom | Material-based |

## Migration Steps

### Step 1: Install Zensical

```bash
pip install zensical
# or
uv add zensical
```

### Step 2: Create Configuration

Create `zensical.toml`:

```toml
[project]
site_name = "Your Documentation"
site_url = "https://your-site.github.io/repo/"
docs_dir = "docs"
site_dir = "site"

[project.theme]
variant = "modern"
```

### Step 3: Rename Files

Convert file extensions:
```bash
# Rename .mdx to .md
find docs -name "*.mdx" -exec bash -c 'mv "$1" "${1%.mdx}.md"' _ {} \;
```

### Step 4: Remove MDX Features

Remove or replace:
- React components (`<Note>`, `<Accordion>`, etc.)
- Frontmatter in different format
- Custom Mintlify-specific syntax

Replace with:
- Standard Markdown
- Admonitions (callouts)
- Standard frontmatter

### Step 5: Update Navigation

Old `docs.json`:
```json
{
  "navigation": [
    { "page": "index.mdx" },
    { "section": "Guides", "children": ["guide1.mdx", "guide2.mdx"] }
  ]
}
```

New `zensical.toml`:
```toml
[project.navigation]
pages = [
    "index",
    { "section" = "Guides", "children" = ["guide1", "guide2"] }
]
```

### Step 6: Update CLI Commands

| Mintlify | Zensical |
|----------|----------|
| `npx mintlify dev` | `zensical serve` |
| `npx mintlify build` | `zensical build` |
| `npx mintlify start` | `zensical serve` |
| `npx mintlify deploy` | GitHub Actions |

### Step 7: Verify Build

```bash
zensical serve --open
# Check all pages render correctly
zensical build --clean
```

## Common Conversions

### Callouts

Mintlify:
```mdx
<Note>
  This is a note.
</Note>
```

Zensical:
```markdown
!!! note
    This is a note.
```

### Accordions

Mintlify:
```mdx
<Accordion title="Click to expand">
  Content here
</Accordion>
```

Zensical:
```markdown
??? note "Click to expand"
    Content here
```

### Code Groups

Mintlify:
```mdx
<CodeGroup>
  <CodeGroupItem title="npm">
  npm install
  </CodeGroupItem>
  <CodeGroupItem title="yarn">
  yarn add
  </CodeGroupItem>
</CodeGroup>
```

Zensical:
```markdown
=== "npm"
    npm install

=== "yarn"
    yarn add
```

### Custom Components

Replace any custom React components with standard Markdown or remove entirely.

## Post-Migration

1. Update CI/CD workflows
2. Update README badges
3. Check all internal links
4. Test search functionality
5. Verify responsive design
6. Update deployment scripts

## Rollback Plan

Keep backup of:
- Original `docs/` directory
- Original `docs.json`
- Original CI/CD workflows

If migration fails:
```bash
git checkout docs/
git checkout docs.json
```
