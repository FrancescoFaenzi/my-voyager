# DOM 작업 범위

현재 선언형 플러그인은 다음 작업을 지원합니다.

- `addClass`: 대상 요소에 클래스를 추가합니다.
- `setAttribute`: 속성을 설정합니다.
- `setStyle`: 인라인 스타일 또는 CSS 변수를 설정합니다. 값 끝에 `!important`를 붙이면 그 우선순위로 적용됩니다. 이전 Voyager 버전은 이런 값을 버리므로, 플러그인이 이 기능에 의존한다면 `engine`을 `>=1.9.0`로 설정하세요. `margin` 같은 축약 속성은 개별 longhand 단위로 추적되므로, 한 플러그인을 꺼도 다른 플러그인의 `margin-top`이 지워지지 않습니다.
- `hide`: 대상 요소를 숨깁니다.

대상은 CSS 선택자이거나 위에 나열한 의미 키를 `{ "kind": "semantic", "key": "userTurn" }` 형태로 쓴 것일 수 있습니다. 의미 키는 보통 더 안정적이지만, 현재 사이트 어댑터가 그 키를 선언해야 합니다.

선언형 작업은 되돌릴 수 있고 반복 실행해도 안전해야 합니다. 한 번뿐인 페이지 상태에 의존하지 말고, DOM이 항상 그대로라고 가정하지 마세요.

## 프리미티브

CSS와 되돌릴 수 있는 DOM 수정만으로는 표현할 수 없는 동작도 있습니다. 프리미티브는 Voyager 안에 함께 배포되는 자체 코드이며, manifest는 `native` 작업으로 이름을 적어 호출할 수 있습니다.

```json
{
  "engine": ">=1.3.0",
  "requires": { "handlers": ["formulaCopy"] },
  "contributes": {
    "domOps": [{ "op": "native", "handler": "formulaCopy", "params": {} }]
  }
}
```

manifest는 프리미티브를 고르고 설정할 뿐 로직을 담지 않습니다. `params`는 실행 전에 해당 프리미티브가 직접 검증합니다.

프리미티브를 쓰는 플러그인에는 두 가지 규칙이 있습니다.

- 플러그인이 매칭하는 모든 사이트가 그 프리미티브가 읽는 시맨틱 키를 선언해야 합니다(예: `mermaid`는 `assistantTurn`과 `codeBlock`을 읽습니다). `requires.handlers`는 선택 사항입니다. `native` 작업이 이미 그 프리미티브를 가리키기 때문입니다.
- `engine`은 그 프리미티브가 처음 들어간 엔진 버전 이상이어야 합니다. `formulaCopy`는 엔진 1.3.0에 들어갔으므로 이를 쓰는 플러그인은 `">=1.3.0"`으로 선언합니다. 범위가 더 낮으면 `bun run catalog:build`가 실패합니다. 예전 Voyager에서는 업데이트를 안내하는 대신 handler가 없다고 보고하기 때문입니다.

프리미티브는 늘어나기만 합니다. 새 매개변수는 항상 선택이고, 호환성을 깨는 변경은 새 이름으로 나갑니다.

동작이 바뀐 플러그인은 한 줄짜리 `changelog`도 넣을 수 있고, popup이 버전 옆에 보여줍니다. 번역은 `name`, `description`과 나란히 `i18n.<locale>.changelog`에 씁니다.
