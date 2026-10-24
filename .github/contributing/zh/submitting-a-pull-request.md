# 提交 Pull Request

## PR 指南

1. **标题**：使用清晰的描述性标题（如 "feat: add dark mode toggle" 或 "fix: timeline scroll sync"）
2. **描述**：解释你做了什么更改以及原因
3. **用户影响**：描述用户将如何受到影响
4. **可视化证据（严格）**：对于任何 UI 修改或新功能，**必须**提供截图或屏幕录制。**没有截图 = 不予审核/回复。**
5. **Issue 引用**：链接相关 issue（如 "Closes #123"）
6. **测试与逻辑**：行为变更须包含相关回归测试；没有适用的自动化测试时，说明理由和修改逻辑。不接受没有上下文的“魔法”修复。

## 提交信息格式

遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

- `feat:` - 新功能
- `fix:` - 错误修复
- `docs:` - 文档更改
- `chore:` - 维护任务
- `refactor:` - 代码重构
- `test:` - 添加或更新测试
- `perf:` - 性能优化
- `style:` - 仅格式调整
- `build:` / `ci:` - 构建系统或 CI 变更
- `deps:` - 依赖更新
- `revert:` - 回滚提交
- `ux:` - 用户体验调整

标题应控制在 100 个字符以内，scope 使用小写（见 [`commitlint.config.cjs`](../../../commitlint.config.cjs)）。

---
