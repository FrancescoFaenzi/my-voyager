# Making Changes

## Before You Start

1. **Create a branch** from `main`:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Link Discussions / Issues** - When implementing a new feature, you **must first start a Discussion**. PRs for new features submitted without prior discussion will be closed. When submitting a PR, please link that Discussion; for a fix, link the Issue.

## Pre-Commit Checklist

Before submitting, complete the applicable checks in the [AGENTS.md verification matrix](../../../AGENTS.md#verification). Code PRs require `bun run verify:pr`; prose-only changes follow the matrix. Reuse passing checks while their inputs remain unchanged.

Ensure that:

1. Your changes achieve the desired functionality.
2. Your changes do not negatively affect existing features.

---
