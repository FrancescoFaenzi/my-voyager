# DOM 操作边界

当前声明式插件支持这些操作：

- `addClass`：给目标元素添加类名。
- `setAttribute`：设置属性。
- `setStyle`：设置内联样式或 CSS 变量。值以 `!important` 结尾时会以该优先级应用；旧版本的 Voyager 会丢弃这样的值，因此如果插件依赖它，请将 `engine` 设为 `>=1.9.0`。`margin` 之类的简写属性按各自的长属性分别记录，因此关闭某个插件时，不会清除另一个插件设置的 `margin-top`。
- `hide`：隐藏目标元素。

目标可以是 CSS 选择器，也可以是上面列出的语义键，写成 `{ "kind": "semantic", "key": "userTurn" }`。语义键更稳，但需要当前站点适配器声明了这个键。

声明式操作必须是可撤销、可重复执行的。不要依赖一次性的页面状态，也不要假设页面 DOM 永远不变。

## 原语

有些行为没法只用 CSS 和可撤销的 DOM 修改描述出来。原语是随 Voyager 一起打包的第一方代码，清单可以通过 `native` 操作按名字调用它：

```json
{
  "engine": ">=1.3.0",
  "requires": { "handlers": ["formulaCopy"] },
  "contributes": {
    "domOps": [{ "op": "native", "handler": "formulaCopy", "params": {} }]
  }
}
```

清单只负责挑一个原语并给它配置，不提供逻辑；`params` 会先由该原语校验，然后才会执行。

用到原语的插件要遵守两条规则：

- 插件匹配的每个站点都必须声明该原语读取的语义键（例如 `mermaid` 读取 `assistantTurn` 和 `codeBlock`）。`requires.handlers` 可写可不写：`native` 操作本身就隐含了它用到的原语。
- `engine` 至少要写到首次提供该原语的引擎版本。`formulaCopy` 从引擎 1.3.0 开始提供，所以用到它的插件写 `">=1.3.0"`。写低了 `bun run catalog:build` 会失败，因为旧版 Voyager 那时会报缺少 handler，而不是提示用户升级。

原语只增不改：新参数一定是可选的，破坏性变更会换一个新名字。

有行为变化的插件还可以写一行 `changelog`，popup 会把它显示在版本号旁边。翻译放在 `i18n.<locale>.changelog`，和 `name`、`description` 并列。
