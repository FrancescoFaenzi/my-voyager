# Submitting a Pull Request

## PR Guidelines

1. **Title**: Use a clear, descriptive title (e.g., "feat: add dark mode toggle" or "fix: timeline scroll sync")
2. **Description**: Explain what changes you made and why
3. **User Impact**: Describe how users will be affected
4. **Visual Proof (Strict)**: For ANY UI changes or new features, you **MUST** provide screenshots or screen recordings. **No screenshot = No review/reply.**
5. **Issue Reference**: Link related issues (e.g., "Closes #123")
6. **Tests & Logic**: Behavior changes need relevant regression tests; when no useful automated test exists, explain why and describe the logic. "Magic" fixes without context are not accepted.

## Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `perf:` - Performance improvements
- `style:` - Formatting only
- `build:` / `ci:` - Build system or CI changes
- `deps:` - Dependency updates
- `revert:` - Reverting a commit
- `ux:` - User experience tweaks

Headers stay within 100 characters with a lowercase scope ([`commitlint.config.cjs`](../../../commitlint.config.cjs)).

---
