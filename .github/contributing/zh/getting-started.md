# 快速开始

## 前置要求

- **Bun 1.3.12**（与 `packageManager` 和 CI 一致）
- **GitHub CLI（`gh`）**（[安装](https://cli.github.com/)）：安装后运行 `gh auth login` 完成认证，再运行 `gh auth status` 确认当前账号就是你准备用来贡献的账号；`voyager-contribute` skill 依赖它查询和发布 Issue/PR。没有 `gh` 时可改用 GitHub 网页操作，并在 PR 中注明。
- 用于加载扩展并验证真实流程的受影响浏览器

## 快速启动

```bash
# 克隆仓库
git clone https://github.com/voyager-crew/voyager.git
cd voyager

# 安装依赖
bun install

# 启动开发模式
bun run dev
```

---
