# Repository Guidelines

## Project Structure & Module Organization
This repository is a Zensical documentation site for OpenCart language packs. Core content lives in `docs/` with topic folders like `docs/getting-started/` and `docs/extensions/`. Static assets are in `docs/stylesheets/` and `docs/javascripts/`. Theme overrides live in `overrides/`. The Zensical build output is `site/` and should be treated as generated.

If you add new documentation pages, keep the folder conventions (kebab-case filenames like `getting-started/installation.md`, landing pages as `index.md`) and update navigation in `zensical.toml`. If you introduce localized content later, mirror the folder structure per language and keep navigation consistent.

## Build, Test, and Development Commands
Zensical is the only build tool used here. Install the dev dependency from `pyproject.toml`, then use:

```bash
zensical serve        # Run local dev server
zensical serve --open # Run and open in browser
zensical build        # Production build to site/
zensical build --clean
```

## Coding Style & Naming Conventions
Keep Markdown clear and concise with short paragraphs and consistent heading levels. Use sentence case for headings and prefer relative links within `docs/`.

For CSS and JS in `docs/stylesheets/extra.css` and `docs/javascripts/home-animation.js`, follow the existing style: 4-space indentation, single quotes in JS, and grouped sections with short comments where needed. Asset and file names should remain kebab-case.

## Testing Guidelines
There are no automated tests in this repository. Validate changes manually by running `zensical serve` and verifying pages, navigation, and any custom JS/CSS. For build validation, run `zensical build` and ensure `site/` is generated without errors.

## Commit & Pull Request Guidelines
Commit history follows Conventional Commits with common types like `feat:`, `fix:`, `chore:`, `refactor:`, and optional scopes (for example, `fix(ci): ...`). Keep messages short and scoped to the change.

For PRs, include a clear summary, link relevant issues or discussions, and add screenshots or GIFs for visual changes (homepage, theme, CSS/JS). Mention any updates to `zensical.toml` navigation so reviewers know to check structure.

## Configuration Notes
Site configuration is in `zensical.toml`. Avoid editing `site/` directly; regenerate it via `zensical build`.
