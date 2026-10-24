# Getting Started

## Prerequisites

- **Bun 1.3.12** (matching `packageManager` and CI)
- **GitHub CLI (`gh`)** ([installation](https://cli.github.com/)): install it and authenticate with `gh auth login`, then run `gh auth status` to confirm the active account is the one you intend to contribute as; the `voyager-contribute` skill relies on it for Issue/PR state and publishing. Without `gh`, use the GitHub web UI instead and note that in the PR.
- The affected browsers for loading the extension and exercising the real workflow

## Quick Start

```bash
# Clone the repository
git clone https://github.com/voyager-crew/voyager.git
cd voyager

# Install dependencies
bun install

# Start development mode
bun run dev
```

---
