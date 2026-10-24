# Adding Gem Support

To add support for a new Gem (official Google Gems or custom Gems):

1. Open `src/pages/content/folder/gemConfig.ts`
2. Add a new entry to the `GEM_CONFIG` array:

```typescript
{
  id: 'your-gem-id',           // From URL: /gem/your-gem-id/...
  name: 'Your Gem Name',       // Display name
  icon: 'material_icon_name',  // Google Material Symbols icon
}
```

## Finding the Gem ID

- Open a conversation with the Gem
- Check the URL: `https://gemini.google.com/app/gem/[GEM_ID]/...`
- Use the `[GEM_ID]` portion in your configuration

## Choosing an Icon

Use valid [Google Material Symbols](https://fonts.google.com/icons) icon names:

| Icon           | Use Case               |
| -------------- | ---------------------- |
| `auto_stories` | Learning, Education    |
| `lightbulb`    | Ideas, Brainstorming   |
| `work`         | Career, Professional   |
| `code`         | Programming, Technical |
| `analytics`    | Data, Analysis         |

---
