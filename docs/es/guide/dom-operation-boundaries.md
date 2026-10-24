# Límites de operaciones DOM

Los plugins declarativos soportan actualmente:

- `addClass`: añade una clase a los elementos objetivo.
- `setAttribute`: establece un atributo.
- `setStyle`: establece estilos inline o variables CSS. Termina el valor con `!important` para aplicarlo con esa prioridad; las versiones antiguas de Voyager descartan ese valor, así que pon `engine` en `>=1.9.0` si tu plugin lo necesita. Los atajos como `margin` se registran propiedad por propiedad, de modo que desactivar un plugin nunca borra el `margin-top` de otro plugin.
- `hide`: oculta elementos objetivo.

El objetivo puede ser un selector CSS o una de las claves semánticas listadas arriba, escrita como `{ "kind": "semantic", "key": "userTurn" }`. Las claves semánticas suelen ser más estables, pero el adaptador del sitio debe declarar esa clave.

Las operaciones declarativas deben ser reversibles y seguras al ejecutarse repetidamente. No dependas de un estado puntual de la página ni asumas que el DOM nunca cambia.

## Primitivas

Algunos comportamientos no se pueden describir con CSS y una edición reversible del DOM. Una primitiva es código propio que viaja dentro de Voyager y que un manifest puede invocar por nombre mediante la operación `native`:

```json
{
  "engine": ">=1.3.0",
  "requires": { "handlers": ["formulaCopy"] },
  "contributes": {
    "domOps": [{ "op": "native", "handler": "formulaCopy", "params": {} }]
  }
}
```

El manifest elige una primitiva y la configura; nunca aporta lógica, y la propia primitiva valida `params` antes de ejecutarse.

Se aplican dos reglas a cualquier plugin que use una:

- Cada sitio que cubre el plugin debe declarar las claves semánticas que lee la primitiva (`mermaid`, por ejemplo, lee `assistantTurn` y `codeBlock`). `requires.handlers` es opcional: la operación `native` ya implica su primitiva.
- `engine` debe ser al menos la versión del motor que la publicó por primera vez. `formulaCopy` llegó en el motor 1.3.0, así que un plugin que la use declara `">=1.3.0"`. Un rango menor hace fallar `bun run catalog:build`, porque una versión antigua de Voyager informaría de un handler ausente en vez de pedir al usuario que actualice.

Las primitivas solo crecen: un parámetro nuevo siempre es opcional y un cambio incompatible se publica con un nombre nuevo.

Un plugin que cambie de comportamiento también puede llevar un `changelog` de una línea, que el popup muestra junto a la versión. Tradúcelo en `i18n.<locale>.changelog`, junto a `name` y `description`.
