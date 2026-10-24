# 必须流程

1. 新功能先在 Discussions 提案，并等待维护者明确同意方案；`/claim` 或被分配只代表负责人。
2. 每次仓库改动都通过一个聚焦的主题分支提交 PR，不直接推送到 `main`。
3. 按 [AGENTS.md 验证矩阵](../../../AGENTS.md#verification) 检查最终改动：代码 PR 运行 `bun run verify:pr`；纯文档、说明或格式改动使用对应检查。仅在需要时对改动文件应用格式化或 lint 修复，并说明未完成项。
4. 行为变更添加回归测试，或说明自动化测试不适用的理由。
5. 在受影响浏览器中加载实际扩展并验证改动流程；缺少环境时，在 PR 中注明未测试项和补测负责人。

> 💡 使用 AI Agent（Claude Code、Codex 等）贡献时，请让它使用仓库自带的 `voyager-contribute` skill（位于 `.claude/skills/` 与 `.agents/skills/`）：它内置上述流程与历史 PR 中最耗评审轮次的仓库特有陷阱。仓库外的 agent（如 Cursor）可用 `npx skills add voyager-crew/voyager -s voyager-contribute` 安装。
