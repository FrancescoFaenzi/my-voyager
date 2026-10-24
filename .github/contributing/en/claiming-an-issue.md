# Claiming an Issue

To avoid duplicate work and coordinate contributions:

## 1. Check for Existing Work

Before starting, check if the issue is already assigned to someone by looking at the **Assignees** section.

## 2. Claim an Issue

For an unassigned issue **without** the `community-only` or `enhancement` label, comment `/claim` to assign yourself automatically. A bot will confirm the assignment. An issue carrying either label is assigned only after a maintainer replies `/approve @your-username`.

A maintainer's `/approve @username` does two things: it assigns the issue, and it adds that user to [`APPROVED_CONTRIBUTORS`](../../APPROVED_CONTRIBUTORS) with a commit to `main`. From then on the PR gate no longer limits their PRs, features included.

## 3. Community-only Issues

Issues labeled `community-only` are reserved for verified members of the Voyager community:

1. A community member comments `/claim`.
2. A maintainer verifies their community membership and comments `/approve @username`.
3. Start implementation or open a PR only after the bot assigns the issue.

The label automatically removes `help wanted` and `good first issue` so reserved work is not advertised as a public contribution task. Other contributors can join the [Voyager Discord](https://discord.gg/TEUFxdMbGb) or choose an issue without the `community-only` label.

## 4. Unclaim if Needed

If you can no longer work on an issue, comment `/unclaim` to release it for others.

## 5. Contribution Checkbox

Issues are for bugs only. When reporting one, you can check "I am willing to contribute a fix for this bug" to say you would like to fix it yourself.

---
