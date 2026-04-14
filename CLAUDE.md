# CLAUDE.md

This file provides guidance for AI assistants working with this repository.

## Repository Overview

This is a **pure documentation repository** — a personal reference guide for setting up a new Windows PC. It is hosted as a GitHub Pages static site using Jekyll.

- **Owner**: Hiroshi Kuze
- **License**: MIT
- **Live site**: [https://hiroshikuze.github.io/install_in_the_new_pc/](https://hiroshikuze.github.io/install_in_the_new_pc/)
- **Language**: Content is primarily written in Japanese; README is in English

## Repository Structure

```text
install_in_the_new_pc/
├── README.md           # English intro, links to the live site, and sponsor links
├── LICENSE             # MIT License
└── docs/
    ├── _config.yml           # Jekyll configuration (theme: jekyll-theme-slate)
    ├── _includes/
    │   └── head-custom.html  # Injects CSS/JS into every page <head>
    ├── assets/
    │   ├── css/
    │   │   └── changelog-modal.css  # What's New modal styles
    │   └── js/
    │       └── changelog-modal.js   # What's New modal logic + CHANGELOG constant
    ├── index.md              # Jekyll site entry point — lists available guides
    ├── windows10.md          # Windows 10 setup guide (Japanese)
    ├── windows11.md          # Windows 11 setup guide with winget (Japanese)
    ├── macos26.md            # macOS 26 Tahoe setup guide with Homebrew (Japanese)
    └── vscode-extensions.md  # VS Code extensions common across all OS (Japanese)
```

## Content Summary

### docs/windows10.md

Windows 10 setup guide, written in Japanese. Organized into three sections:

1. **基本設定 (Basic Configuration)**
   - Creating a USB recovery drive (16 GB)
   - Bluetooth device setup
   - Disconnecting LAN at first boot (to avoid forced Microsoft account setup)
   - Windows Update, Microsoft Store updates
   - Creating the recovery drive after setup
   - Printer driver installation

2. **自分としては必須設定 (Essential Personal Settings)**
   - Windows Features: WSL (Linux Subsystem), Telnet client, Virtual Machine Platform
   - Chrome browser installation and configuration
   - Chrome Remote Desktop
   - Visual Studio Code with extensions:
     - [テキスト校正くん](https://marketplace.visualstudio.com/items?itemName=ICS.japanese-proofreading) — Japanese text proofreading
     - [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces) — trailing whitespace highlighting
   - WinMerge (diff/merge tool)
   - Everything (fast file search)
   - CLCL (clipboard manager)
   - ZIP tool (e.g., Lhasa)
   - Lightweight text editor (e.g., Sakura Editor)
   - Lightweight image editor (e.g., Paint.NET)

3. **PCによって要りそうならインストール (Optional by PC)**
   - LINE for Windows
   - Zoom client
   - iCloud
   - Simplenote
   - Google Drive Backup and Sync
   - draw.io Diagrams

### docs/windows11.md

Windows 11 setup guide, written in Japanese. Adds winget (Windows Package Manager) bulk install commands at the top, then covers the same three sections as windows10.md with Windows 11-specific notes (e.g., OOBE/BYPASSNRO removal in 24H2, Copilot/OneDrive cleanup, WSL2 default, Explorer native archive support).

### docs/macos26.md

macOS 26 Tahoe setup guide, written in Japanese. Mirrors the Windows guides in structure but uses Homebrew for bulk installs. Covers macOS-specific equivalents: DiffMerge (WinMerge), Clipy (CLCL), The Unarchiver, CotEditor (Sakura Editor), iTerm2 (TeraTerm). Notes differences from Windows 11 (no forced Apple ID, no LAN disconnect needed, Spotlight as Everything alternative).

## Tech Stack

| Component | Technology |
| --------- | ---------- |
| Static site generator | Jekyll |
| Hosting | GitHub Pages |
| Theme | jekyll-theme-slate |
| Content format | Markdown |
| Version control | Git |

**There are no build tools, package managers, test frameworks, CI/CD pipelines, or runtime dependencies.**

## Development Workflow

Since this is a documentation-only repository, the workflow is simple:

### Editing Content

1. Edit the relevant Markdown file under `docs/` (e.g., `docs/windows11.md`, `docs/macos26.md`)
2. Follow existing formatting conventions (numbered lists, section headers in Japanese for content pages)
3. Commit with a descriptive message
4. Update `CLAUDE.md` if the change involves structural additions or important conventions

### Adding New Guides

1. Create a new `.md` file under `docs/` (e.g., `docs/windows12.md`)
2. Add a link to it in `docs/index.md`
3. Follow the same section structure as `docs/windows11.md`（three sections: 基本設定、自分としては必須設定、PCによって要りそうならインストール）
4. Update `CLAUDE.md` to document the new file's content summary

### Local Jekyll Preview (optional)

If Jekyll is installed locally:

```bash
bundle exec jekyll serve
```

Then visit `http://localhost:4000`.

### Updating the What's New Modal

When making user-facing changes (new content, fixed procedures, added features), update the `CHANGELOG` constant at the top of `docs/assets/js/changelog-modal.js`:

1. Bump the `version` string (e.g., `"1.1.0"` → `"1.2.0"`)
2. Set `date` to today's date (`YYYY-MM-DD`)
3. Add bullet points to `items` describing what changed — **user-visible changes only** (skip internal refactors, code cleanup, etc.)
4. Keep the old entry in the array so users can scroll through history

Do **not** update the CHANGELOG for changes that users won't notice (e.g., whitespace fixes, CLAUDE.md updates, CI changes).

### Deploying

Push to the `main` branch. GitHub Pages automatically builds and deploys the site.

## Conventions

- **Markdown style**: Use `#` for page title, `##` for major sections, numbered lists for steps
- **Language**: Content pages are in Japanese; README and structural docs (like this file) are in English
- **Links**: Use full URLs for external tools; use relative paths for internal page links
- **No trailing whitespace**: Keep Markdown clean
- **Commit messages**: Short and descriptive in English (e.g., `Update Windows 10 guide with new software`)

## Branch Naming

Active development branches follow the pattern: `claude/<description>-<session-id>`

## What AI Assistants Should and Should Not Do

**Do:**

- Add or update software recommendations in files under `docs/`
- Create new OS/platform guide files under `docs/` and link them from `docs/index.md`
- Fix broken links or outdated software references
- Improve clarity of Japanese text or English descriptions
- Update `CLAUDE.md` when making structural changes (new files, directory moves, important conventions)

**Do not:**

- Add build tools, package managers, or CI/CD — this repo intentionally has none
- Introduce non-Markdown formats for content
- Change the Jekyll theme without discussion
- Push to `main` directly; use a feature branch and PR
