# Privacy Analysis

This document details the analysis of the Voyager extension repository focusing on potential data egress, external analytics pipelines, third-party catalog fetching, and external workspace connectors. The review strictly isolates components that initiate outbound connections outside the defined trust boundary of the browser, local machine, and authenticated Google/Apple accounts.

## 1. External Analytics Pipelines and Telemetry
The codebase does not contain explicit implementations of external analytics pipelines or telemetry services (such as Mixpanel, PostHog, Sentry, Segment, or Datadog) that send user data, browsing history, logs, or metrics to third-party developers without explicit disclosure.

There is code that intercepts analytics requests (`src/pages/content/watermarkRemover/__tests__/fetchInterceptor.test.ts`), and code tracking local actions to update the extension UI (e.g., tracking the scroll slider or DOM mutations in `src/pages/content/visualEffects/effectClock.ts` and `src/features/timeline/adapters/catalog/turnOwnership.ts`), but these do not send data to external third parties.

## 2. Supply Chain Risks and Third-Party Catalog Fetching
The extension implements a remote plugin catalog feature that fetches configuration and updates from an external server. This introduces a supply chain risk through third-party catalog fetching.

- **File**: `src/features/plugins/remote/hostCatalogRefresh.ts`
- **Implementation**:
  - The `HostCatalogRefresher` class fetches remote plugin updates via `fetchImpl(hostCatalogFileUrl(this.baseUrl, host))`.
  - The base URL is resolved in `src/features/plugins/remote/config.ts` (often defaulting to `https://voyager.nagi.fun` or similar based on `resolvePluginCatalogBaseUrl()`).
  - The fetch includes `cache: 'no-cache'`, `credentials: 'omit'`, and `redirect: 'follow'`.
  - The request transmits the host name (e.g., `<base>/hosts/<host>.json`) implicitly revealing the user's current platform interaction (e.g., deepseek, chatgpt) to the external catalog server. It does not send cookies or page content.

- **File**: `src/features/announcements/background.ts`
- **Implementation**:
  - The `RemoteAnnouncementBackgroundService` class periodically fetches announcements.
  - The feed URL defaults to `https://raw.githubusercontent.com/voyager-crew/voyager/main/docs/public/announcements.json`.
  - This is an implicit background fetch that occurs on a schedule (`chrome.alarms`), connecting to an external server (GitHub) to retrieve JSON data.

## 3. External Workspace Connectors and IDE Integrations
The extension includes a context synchronization feature designed to forward captured chat data directly to a local Integrated Development Environment (IDE) server. While it connects to `127.0.0.1`, it acts as an external workspace connector that bypasses standard browser sandbox limitations by forwarding DOM content and images out of the browser.

- **File**: `src/features/contextSync/services/SyncService.ts`
- **Implementation**:
  - The `SyncService` resolves an endpoint via `getServerUrl()`, defaulting to `http://127.0.0.1:3030/sync`.
  - It sends data via the `syncToIDE` method, which routes the payload (`data: DialogNode[]`) to a background script message (`type: 'gv.syncToIDE'`).

- **File**: `src/pages/content/contextSync/capture.ts`
- **Implementation**:
  - The `ContextCaptureService` reads the DOM of the active chat tab.
  - It extracts query and response texts, converts tables to Markdown, and retrieves image sources.
  - It captures images (using `fetchToBlob` or background messaging) and encodes them into Base64 format.
  - The captured payloads (DOM snapshots, raw prompts, conversation transcripts, and image content) are accumulated into an array of `DialogNode` objects and passed to the SyncService to be sent to the local IDE server.

## Summary
In summary, while the extension does not appear to embed unauthorized external telemetry or data exfiltration scripts, it does implement background fetches for announcements and remote plugin catalogs, which inherently expose IP addresses and platform interactions to external servers (GitHub, Voyager Catalog servers). Furthermore, the Context Sync feature explicitly captures and forwards conversation transcripts, DOM snapshots, and images to an external workspace connector (a local IDE server), bridging the browser sandbox boundary.
