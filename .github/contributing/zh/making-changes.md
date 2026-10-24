# 进行更改

## 开始之前

1. **从 `main` 创建分支**：

   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

2. **关联 Discussion / Issue** - 在实现一个新功能时，请**务必先在 Discussions 发起讨论**。未经讨论直接提交的新功能 PR 将被关闭。提交 PR 时，请链接该 Discussion；修复类 PR 链接对应的 Issue。

## 提交前检查清单

提交前按 [AGENTS.md 验证矩阵](../../../AGENTS.md#verification) 完成适用检查。代码 PR 需要 `bun run verify:pr`；纯文档改动按矩阵验证。已通过且输入未变的检查无需重复。

并确保：

1. 你的更改实现了预期功能。
2. 你的更改没有影响现有的原有功能。

---
