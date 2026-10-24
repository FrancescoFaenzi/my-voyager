# Limites das operações DOM

Plugins declarativos suportam atualmente:

- `addClass`: adiciona uma classe aos elementos alvo.
- `setAttribute`: define um atributo.
- `setStyle`: define estilos inline ou variáveis CSS. Termine um valor com `!important` para o aplicar com essa prioridade; versões mais antigas do Voyager descartam esse valor, por isso defina `engine` como `>=1.9.0` se o plugin depender disso. Atalhos como `margin` são acompanhados por propriedade longa, por isso desativar um plugin nunca apaga o `margin-top` de outro.
- `hide`: oculta elementos alvo.

O alvo pode ser um seletor CSS ou uma das chaves semânticas listadas acima, escrita como `{ "kind": "semantic", "key": "userTurn" }`. As chaves semânticas costumam ser mais estáveis, mas o adaptador do site tem de declarar essa chave.

As operações declarativas devem ser reversíveis e seguras para executar repetidamente. Não dependa de um estado único da página nem assuma que o DOM nunca muda.

## Primitivas

Alguns comportamentos não se conseguem descrever com CSS e uma alteração reversível do DOM. Uma primitiva é código próprio que segue dentro do Voyager e que um manifest pode chamar pelo nome através da operação `native`:

```json
{
  "engine": ">=1.3.0",
  "requires": { "handlers": ["formulaCopy"] },
  "contributes": {
    "domOps": [{ "op": "native", "handler": "formulaCopy", "params": {} }]
  }
}
```

O manifest escolhe uma primitiva e configura-a; nunca fornece lógica, e a própria primitiva valida `params` antes de correr.

Aplicam-se duas regras a qualquer plugin que use uma:

- Cada site coberto pelo plugin tem de declarar as chaves semânticas que a primitiva lê (`mermaid`, por exemplo, lê `assistantTurn` e `codeBlock`). `requires.handlers` é opcional: a operação `native` já implica a sua primitiva.
- `engine` tem de ser pelo menos a versão do motor que a lançou pela primeira vez. A `formulaCopy` chegou no motor 1.3.0, por isso um plugin que a use declara `">=1.3.0"`. Um intervalo inferior faz falhar o `bun run catalog:build`, porque uma versão antiga do Voyager reportaria então um handler em falta em vez de pedir ao utilizador que atualize.

As primitivas só crescem: um parâmetro novo é sempre opcional e uma alteração incompatível sai com um nome novo.

Um plugin que mude de comportamento pode ainda trazer um `changelog` de uma linha, que o popup mostra ao lado da versão. Traduza-o em `i18n.<locale>.changelog`, junto de `name` e `description`.
