# CLAUDE.md

This file provides guidance for AI assistants working with this repository.

## Repository Overview

This is a **pure documentation repository** — a personal reference guide for setting up a new Windows PC. It is hosted as a GitHub Pages static site using Jekyll.

- **Owner**: Hiroshi Kuze
- **License**: MIT
- **Live site**: https://hiroshikuze.github.io/install_in_the_new_pc/
- **Language**: Content is primarily written in Japanese; README is in English

## Repository Structure

```
install_in_the_new_pc/
├── README.md       # English intro, links to the live site, and sponsor links
├── index.md        # Jekyll site entry point — lists available guides
├── windows10.md    # Main guide: Windows 10 setup steps (Japanese)
├── _config.yml     # Jekyll configuration (theme: jekyll-theme-tactile)
└── LICENSE         # MIT License
```

## Content Summary

### windows10.md
The core document, written in Japanese. Organized into three sections:

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

## Tech Stack

| Component | Technology |
|-----------|------------|
| Static site generator | Jekyll |
| Hosting | GitHub Pages |
| Theme | jekyll-theme-tactile |
| Content format | Markdown |
| Version control | Git |

**There are no build tools, package managers, test frameworks, CI/CD pipelines, or runtime dependencies.**

## Development Workflow

Since this is a documentation-only repository, the workflow is simple:

### Editing Content
1. Edit the relevant Markdown file (most likely `windows10.md` or `index.md`)
2. Follow existing formatting conventions (numbered lists, section headers in Japanese for content pages)
3. Commit with a descriptive message

### Adding New Guides
1. Create a new `.md` file (e.g., `windows11.md`)
2. Add a link to it in `index.md`
3. Follow the same section structure as `windows10.md`

### Local Jekyll Preview (optional)
If Jekyll is installed locally:
```bash
bundle exec jekyll serve
```
Then visit `http://localhost:4000`.

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
- Add or update software recommendations in `windows10.md`
- Create new OS/platform guide files and link them from `index.md`
- Fix broken links or outdated software references
- Improve clarity of Japanese text or English descriptions

**Do not:**
- Add build tools, package managers, or CI/CD — this repo intentionally has none
- Introduce non-Markdown formats for content
- Change the Jekyll theme without discussion
- Push to `main` directly; use a feature branch and PR
