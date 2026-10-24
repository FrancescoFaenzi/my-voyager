# DOM operation boundaries

Declarative plugins currently support:

- `addClass`: add a class to target elements.
- `setAttribute`: set an attribute.
- `setStyle`: set inline styles or CSS variables. End a value with `!important` to apply it with that priority; older Voyager versions drop such a value, so set `engine` to `>=1.9.0` if your plugin relies on it. Shorthands such as `margin` are tracked per longhand, so turning one plugin off never clears another plugin's `margin-top`.
- `hide`: hide target elements.

Targets can be CSS selectors or the semantic keys listed above, written as `{ "kind": "semantic", "key": "userTurn" }`. Semantic keys are usually more stable, but they require the current site adapter to declare that key.

Declarative operations must be reversible and safe to run repeatedly. Do not depend on one-time page state, and do not assume the page DOM never changes.

## Primitives

Some behavior cannot be described with CSS and a reversible DOM edit. A
primitive is first-party code that ships inside Voyager and that a manifest can
call by name through the `native` operation:

```json
{
  "engine": ">=1.3.0",
  "requires": { "handlers": ["formulaCopy"] },
  "contributes": {
    "domOps": [{ "op": "native", "handler": "formulaCopy", "params": {} }]
  }
}
```

The manifest picks a primitive and configures it. It never supplies logic, and
`params` is validated by that primitive before it runs.

Two rules apply to any plugin that uses one:

- Every site the plugin matches must declare the semantic keys the primitive reads (`mermaid`, for example, reads `assistantTurn` and `codeBlock`). `requires.handlers` is optional: the `native` op already implies its primitive.
- `engine` must be at least the engine version that first shipped it.
  `formulaCopy` shipped in engine 1.3.0, so a plugin using it declares
  `">=1.3.0"`. A lower range fails `bun run catalog:build`, because an older
  Voyager would then report a missing handler instead of asking the user to
  update.

Primitives only grow: a new parameter is always optional, and a breaking change
ships under a new name.

A plugin that changes behavior can also carry a one-line `changelog`, which the
popup shows next to the version. Translate it under `i18n.<locale>.changelog`
next to `name` and `description`.
