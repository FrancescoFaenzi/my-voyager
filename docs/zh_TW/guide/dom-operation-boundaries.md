# DOM 操作邊界

目前宣告式外掛支援這些操作：

- `addClass`：給目標元素添加類別名稱。
- `setAttribute`：設定屬性。
- `setStyle`：設定行內樣式或 CSS 變數。值的結尾可加上 `!important`，以該優先順序套用；較舊的 Voyager 版本會捨棄這類值，因此若外掛依賴它，請將 `engine` 設為 `>=1.9.0`。`margin` 之類的簡寫會逐個長屬性追蹤，因此關閉某個外掛時，不會清除另一個外掛的 `margin-top`。
- `hide`：隱藏目標元素。

目標可以是 CSS 選擇器，也可以是上面列出的語義鍵，寫成 `{ "kind": "semantic", "key": "userTurn" }`。語義鍵通常更穩定，但需要目前網站適配器宣告了這個鍵。

宣告式操作必須可撤銷、可重複執行。不要依賴一次性的頁面狀態，也不要假設頁面 DOM 永遠不變。

## 原語

有些行為沒辦法只用 CSS 和可撤銷的 DOM 修改描述出來。原語是隨 Voyager 一起打包的第一方程式碼，清單可以透過 `native` 操作按名稱呼叫它：

```json
{
  "engine": ">=1.3.0",
  "requires": { "handlers": ["formulaCopy"] },
  "contributes": {
    "domOps": [{ "op": "native", "handler": "formulaCopy", "params": {} }]
  }
}
```

清單只負責挑一個原語並給它設定，不提供邏輯；`params` 會先由該原語驗證，然後才會執行。

用到原語的外掛要遵守兩條規則：

- 外掛匹配的每個網站都必須宣告該原語讀取的語意鍵（例如 `mermaid` 讀取 `assistantTurn` 和 `codeBlock`）。`requires.handlers` 可寫可不寫：`native` 操作本身就隱含了它用到的原語。
- `engine` 至少要寫到首次提供該原語的引擎版本。`formulaCopy` 從引擎 1.3.0 開始提供，所以用到它的外掛寫 `">=1.3.0"`。寫低了 `bun run catalog:build` 會失敗，因為舊版 Voyager 那時會回報缺少 handler，而不是提示使用者升級。

原語只增不改：新參數一定是可選的，破壞性變更會換一個新名字。

有行為變化的外掛還可以寫一行 `changelog`，popup 會把它顯示在版本號旁邊。翻譯放在 `i18n.<locale>.changelog`，和 `name`、`description` 並列。
