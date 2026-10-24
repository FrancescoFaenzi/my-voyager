# Required Workflow

1. Propose a new feature in Discussions and wait for explicit maintainer approval of the approach; assignment or `/claim` only selects an owner.
2. Submit every repository change through one focused topic-branch PR; do not push directly to `main`.
3. Check the final change using the [AGENTS.md verification matrix](../../../AGENTS.md#verification): code PRs require `bun run verify:pr`; prose, comments, or formatting-only changes use the applicable checks. Apply formatting or lint fixes only to intended files when needed, and disclose incomplete checks.
4. Add regression tests for behavior changes, or explain why automation is not useful.
5. Load the real extension artifact in affected browsers and exercise the changed workflow; identify missing coverage and its owner in the PR.

> 💡 If you contribute with an AI agent (Claude Code, Codex, …), tell it to use the bundled `voyager-contribute` skill (under `.claude/skills/` and `.agents/skills/`): it encodes this workflow plus the repository-specific pitfalls that cost past PRs the most review rounds. Agents outside the repo checkout (e.g. Cursor) can install it via `npx skills add voyager-crew/voyager -s voyager-contribute`.
