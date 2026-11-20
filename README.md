<div align="center">
  <img src="docs/public/logo.png" alt="Voyager logo" width="112" height="112">
  <h1>my-voyager (Hardened Privacy Edition)</h1>
  <p><b>Make every AI chat yours — with zero third-party egress.</b></p>
  <p>A security-hardened, locally contained fork of <a href="https://github.com/voyager-crew/voyager">Voyager</a> for Gemini, AI Studio, ChatGPT, Claude, DeepSeek, and Kimi.<br>All core productivity features preserved. All remote polling, dynamic catalog fetches, and localhost sandbox bridges removed.</p>

  <p>
    <img src="https://img.shields.io/badge/License-GPL--3.0-blue?style=flat-square" alt="License: GPL-3.0">
    <img src="https://img.shields.io/badge/Privacy-Zero%20Third--Party%20Egress-2ea44f?style=flat-square" alt="Privacy: Zero Third-Party Egress">
    <img src="https://img.shields.io/badge/Build-GitHub%20Actions%20Cloud%20CI-2088FF?style=flat-square&logo=githubactions&logoColor=white" alt="Build: GitHub Actions">
    <img src="https://img.shields.io/badge/Runtime-Chrome%20Unpacked-4285F4?style=flat-square&logo=googlechrome&logoColor=white" alt="Chrome Unpacked">
  </p>

  <p>
    <a href="#security--privacy-hardening">Security & Privacy Audit</a> ·
    <a href="#what-you-get">Features</a> ·
    <a href="#install-zero-local-toolchain">Install</a> ·
    <a href="#verification">Verify</a> ·
    <a href="#credits--license">License</a>
  </p>
</div>

---

## Why This Fork Exists

Upstream **Voyager** is an exceptional open-source productivity suite for web-based AI platforms, but its default architecture includes convenience mechanisms that violate a strict zero-trust browser policy: background polling to external domains, dynamic remote plugin catalog refreshes, and an unauthenticated local HTTP bridge to desktop IDEs.

**`my-voyager`** eliminates those egress vectors at the source level (audited and refactored via Google Jules in PR `#1`, merge commit `2d4074c`) and compiles the extension cleanly in the cloud via GitHub Actions—so you never have to install local JavaScript toolchains to build or verify what runs in your browser.

---

## Security & Privacy Hardening

Every modification in this release targets data egress across the browser trust boundary while keeping local UI and organization features intact.

| Risk Vector | Upstream Behavior | Hardening Applied (`24532f4`) | Security Impact |
| :--- | :--- | :--- | :--- |
| **Remote Announcements Polling** | `src/features/announcements/background.ts` periodically executed `fetch()` against a remote announcement feed URL. | Removed all outbound HTTP fetch and retry logic; replaced with a hard local return (`return { feed: null, state };`). | Eliminates background heartbeat pings, IP/metadata leakage, and external feed exposure. |
| **Remote Plugin Catalog Refresh** | `src/features/plugins/remote/hostCatalogRefresh.ts` fetched live plugin manifests from `https://voyager.nagi.fun/catalog`. | Disabled outbound catalog fetches and stripped live-fetch test suites. | Eliminates implicit telemetry and prevents post-installation supply-chain changes from remote servers. |
| **Local IDE Context Sync Bridge** | `src/features/contextSync/services/SyncService.ts` extracted conversation `DialogNode` payloads and dispatched them via `gv.syncToIDE` to a local server (`127.0.0.1:3030`). | Removed payload dispatch logic; replaced `syncToIDE()` with a local no-op stub (`Disabled by user`). | Seals the browser sandbox-bypass vector and prevents local port hijacking/interception of raw prompts. |
| **Static Audit Trail** | No repository-level egress inventory. | Added a dedicated privacy analysis report (`44a06d9`) documenting all external connection points. | Provides a transparent, reviewable security baseline for every future upstream sync. |

### What Is Preserved vs. Intentionally Disabled

- **Preserved (100% local):** Folders, conversation timeline, chat export, LaTeX formula copy, quote reply, Mermaid diagrams, reading width & typography, Vim input keys, send-key behavior, draft auto-save, batch delete, visual effects, prompt library, Deep Research export, watermark-free image refinement, chat forks, default model lock, Markdown fix, and local JSON plugins.
- **Intentionally Disabled:** Remote announcement banners, automatic remote catalog updates from `voyager.nagi.fun`, and local IDE Context Sync (`127.0.0.1:3030`).
- **User-Controlled:** Cloud sync (Google Drive / iCloud) is never active unless you explicitly authenticate it; by default, all folders and prompts remain strictly inside local browser storage.

---

## How It Works

Voyager separates three layers:

- **Sites:** A small definition per AI platform mapping semantic page regions (sidebar, messages, composer).
- **Primitives:** Built-in local capabilities (timeline, folders, formula copy, diagrams, export).
- **Plugins:** Declarative JSON definitions applying primitives and CSS to semantic targets—no arbitrary executable plugin scripts.

> **Fork note:** Because automatic remote catalog updates are intentionally disabled in `my-voyager`, site-selector updates after upstream UI redesigns are applied explicitly by syncing from upstream, auditing the diff, and rebuilding via GitHub Actions.

---

## What You Get

● enabled out of the box · ○ toggleable in the extension popup

| Feature | Gemini | AI Studio | ChatGPT | Claude | DeepSeek | Kimi |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Folders | ● | ● | ● | ○ | ○ | ○ |
| Timeline | ● | | ○ | ○ | ○ | |
| Export | ● | | ○ | | | ○ |
| Formula copy | ● | ● | ○ | ○ | ○ | |
| Quote reply | ● | | ○ | ○ | ○ | ○ |
| Diagrams (Mermaid) | ● | | ○ | | | |
| Reading width & typography | ○ | | ○ | ○ | ○ | ○ |
| Vim keys in input box | ○ | | ○ | ○ | ○ | |
| Send key behavior | ○ | ○ | ○ | ○ | ○ | ○ |
| Draft auto-save | ○ | | | ○ | ○ | ○ |
| Batch delete | ● | ● | | | | |
| Visual effects (snow, rain, sakura) | ○ | ○ | ○ | ○ | ○ | ○ |

**Across all supported sites (plus any custom site you add):**
- **Prompt Library:** Unified local prompt manager across every AI platform.
- **Local Plugins:** Create or import declarative JSON plugins stored strictly in your browser.

**Gemini-specific extras:**
- Deep Research export, watermark-free image refinement, conversation forks, default model selection, and Markdown rendering fixes.

> [!NOTE]
> On Gemini for Enterprise, only the Prompt Library runs.

---

## Install (Zero Local Toolchain)

You do **not** need to install Bun, Node.js, or any build tools locally. The extension is compiled directly from `main` via `.github/workflows/build-extension.yml`.

1. Open the **[Actions](https://github.com/FrancescoFaenzi/my-voyager/actions)** tab in this repository.
2. Select the **Build Chrome Extension** workflow and click the latest green (successful) run on `main`.
3. Scroll to the **Artifacts** section at the bottom of the run summary and download **`voyager-chrome-extension`** (ZIP).
4. Extract the ZIP archive into a permanent local folder (do not delete this folder after loading).
5. Open Chrome and navigate to `chrome://extensions/`.
6. Enable **Developer mode** (toggle in the top-right corner).
7. Click **Load unpacked** (top-left) and select the extracted folder containing `manifest.json`.

<details>
<summary>Optional: Local Build Instructions (Requires Bun)</summary>

If you prefer to compile locally instead of using the GitHub Actions artifact:

```bash
# Clone with full Git history (required by vite.config.chrome.ts for catalog revision checks)
git clone [https://github.com/FrancescoFaenzi/my-voyager.git](https://github.com/FrancescoFaenzi/my-voyager.git)
cd my-voyager

# Install dependencies and build for Chrome
bun install
bun run build:chrome
```

The compiled unpacked extension is emitted to `dist_chrome/`. Load `dist_chrome/` via `chrome://extensions/` → **Load unpacked**.

</details>

---

## Verification

To independently confirm the integrity of your build:

1. **Source Audit:** Review [PR #1](https://github.com/FrancescoFaenzi/my-voyager/pull/1) (`2d4074c`) to inspect the exact deletions in `announcements/background.ts`, `contextSync/services/SyncService.ts`, and `plugins/remote/hostCatalogRefresh.ts`.
2. **Build Provenance:** Inspect `.github/workflows/build-extension.yml` to verify the cloud runner checks out the full repository (`fetch-depth: 0`), installs dependencies via `oven-sh/setup-bun@v2`, executes `bun run build:chrome`, and packages `dist_chrome/`.
3. **Runtime Check:** In `chrome://extensions/`, click **Inspect views → service worker** on the loaded extension and open the **Network** tab. Confirm zero outbound requests to `voyager.nagi.fun` or `127.0.0.1:3030`.

---

## Credits & License

This repository is a privacy-hardened derivative of **[voyager-crew/voyager](https://github.com/voyager-crew/voyager)**, originally created by **Jesse Zhang** and the Voyager contributors.

Upstream inspirations and third-party components:
- **[ChatGPT Conversation Timeline](https://github.com/Reborn14/chatgpt-conversation-timeline)** — Original timeline navigation concept.
- **[gemini-watermark-remover](https://github.com/journey-ad/gemini-watermark-remover)** / **[GeminiWatermarkTool](https://github.com/allenk/GeminiWatermarkTool)** — Image refinement logic (MIT notices retained in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)).
- **[Gemini Helper](https://greasyfork.org/scripts/558318-gemini-helper)** — Default-model locking interaction concepts.
- **[cordis](https://github.com/cordiverse/cordis)** — Fiber-style effect/disposal lifecycle design (`PluginScope`).

### License

Licensed under **GPL-3.0**, in full compliance with the upstream Voyager license. Third-party MIT notices are retained in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).

Gemini is a trademark of Google LLC. Claude is a trademark of Anthropic, PBC. ChatGPT is a trademark of OpenAI, Inc. Kimi is a trademark of Moonshot AI. This project is independent and is not affiliated with, endorsed by, or sponsored by any of these companies.
