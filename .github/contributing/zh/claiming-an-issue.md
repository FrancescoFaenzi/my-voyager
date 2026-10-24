# 认领 Issue

为避免重复工作并协调贡献：

## 1. 检查现有工作

在开始之前，检查 issue 的 **Assignees** 部分，确认是否已有人被分配。

## 2. 认领 Issue

对于未分配、且**没有** `community-only` 或 `enhancement` 标签的 issue，评论 `/claim`，机器人会自动将你分配为负责人。带这两个标签中任意一个的 issue，必须等维护者回复 `/approve @你的用户名` 后才会分配。

维护者的 `/approve @用户名` 会做两件事：分配 issue，并通过一次向 `main` 的提交把该用户加入 [`APPROVED_CONTRIBUTORS`](../../APPROVED_CONTRIBUTORS)。此后，PR 准入限制不再针对该用户，包括功能类 PR。

## 3. 社群专属 Issue

带有 `community-only` 标签的 issue 仅供经确认的 Voyager 社群成员认领：

1. 社群成员评论 `/claim`。
2. 维护者确认社群身份后评论 `/approve @用户名`。
3. 机器人完成分配后再开始实现或提交 PR。

该标签会自动移除 `help wanted` 和 `good first issue`，避免把社群任务作为公开招募任务展示。尚未加入社群的贡献者可以先加入 [Voyager Discord](https://discord.gg/TEUFxdMbGb)，或选择没有 `community-only` 标签的 issue。

## 4. 取消认领

如果你无法继续处理某个 issue，评论 `/unclaim` 即可释放它供他人处理。

## 5. 贡献意愿复选框

Issue 仅用于报告缺陷。创建 issue 时，你可以勾选"我愿意为该问题贡献修复代码 / I am willing to contribute a fix for this bug"复选框，表明你有兴趣修复该问题。

---
