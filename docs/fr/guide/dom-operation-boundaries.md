# Limites des opérations DOM

Les plugins déclaratifs prennent actuellement en charge :

- `addClass` : ajoute une classe aux éléments ciblés.
- `setAttribute` : définit un attribut.
- `setStyle` : définit des styles inline ou des variables CSS. Terminez une valeur par `!important` pour l'appliquer avec cette priorité ; les anciennes versions de Voyager ignorent une telle valeur, donc réglez `engine` sur `>=1.9.0` si votre plugin en dépend. Les raccourcis comme `margin` sont suivis longhand par longhand : désactiver un plugin n'efface jamais le `margin-top` d'un autre plugin.
- `hide` : masque les éléments ciblés.

La cible peut être un sélecteur CSS ou l'une des clés sémantiques listées plus haut, écrite `{ "kind": "semantic", "key": "userTurn" }`. Les clés sémantiques sont souvent plus stables, mais l'adaptateur du site doit déclarer la clé.

Les opérations déclaratives doivent être réversibles et sûres à exécuter plusieurs fois. Ne dépendez pas d'un état ponctuel de la page et ne supposez pas que le DOM ne change jamais.

## Primitives

Certains comportements ne se décrivent pas avec du CSS et une modification réversible du DOM. Une primitive est du code interne livré dans Voyager, qu'un manifest peut appeler par son nom via l'opération `native` :

```json
{
  "engine": ">=1.3.0",
  "requires": { "handlers": ["formulaCopy"] },
  "contributes": {
    "domOps": [{ "op": "native", "handler": "formulaCopy", "params": {} }]
  }
}
```

Le manifest choisit une primitive et la configure ; il ne fournit jamais de logique, et la primitive valide elle-même `params` avant de s'exécuter.

Deux règles s'appliquent à tout plugin qui en utilise une :

- Chaque site visé par le plugin doit déclarer les clés sémantiques que lit la primitive (`mermaid`, par exemple, lit `assistantTurn` et `codeBlock`). `requires.handlers` est facultatif : l’opération `native` implique déjà sa primitive.
- `engine` doit valoir au moins la version du moteur qui l'a livrée en premier. `formulaCopy` est arrivée dans le moteur 1.3.0, donc un plugin qui l'utilise déclare `">=1.3.0"`. Une plage inférieure fait échouer `bun run catalog:build`, car une ancienne version de Voyager signalerait alors un handler manquant au lieu de demander une mise à jour.

Les primitives ne font que s'enrichir : un nouveau paramètre est toujours optionnel et un changement cassant est livré sous un nouveau nom.

Un plugin dont le comportement change peut aussi porter un `changelog` d'une ligne, que le popup affiche à côté de la version. Traduisez-le dans `i18n.<locale>.changelog`, à côté de `name` et `description`.
