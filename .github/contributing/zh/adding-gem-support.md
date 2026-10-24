# 添加 Gem 支持

如需为新 Gem（官方 Google Gems 或自定义 Gems）添加支持：

1. 打开 `src/pages/content/folder/gemConfig.ts`
2. 在 `GEM_CONFIG` 数组中添加新条目：

```typescript
{
  id: 'your-gem-id',           // URL 中的 ID：/gem/your-gem-id/...
  name: 'Your Gem Name',       // 显示名称
  icon: 'material_icon_name',  // Google Material Symbols 图标
}
```

## 查找 Gem ID

- 打开与该 Gem 的对话
- 检查 URL：`https://gemini.google.com/app/gem/[GEM_ID]/...`
- 在配置中使用 `[GEM_ID]` 部分

## 选择图标

使用有效的 [Google Material Symbols](https://fonts.google.com/icons) 图标名称：

| 图标           | 用途           |
| -------------- | -------------- |
| `auto_stories` | 学习、教育     |
| `lightbulb`    | 创意、头脑风暴 |
| `work`         | 职业、专业     |
| `code`         | 编程、技术     |
| `analytics`    | 数据、分析     |

---
