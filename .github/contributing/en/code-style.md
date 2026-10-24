# Code Style

## General Guidelines

- **Prefer early returns** over nested conditionals
- **Use descriptive names** - avoid abbreviations
- **Avoid magic numbers** - use named constants
- **Match existing style** - consistency over preference

## TypeScript Conventions

- **PascalCase**: Classes, interfaces, types, enums, React components
- **camelCase**: Functions, variables, methods
- **UPPER_SNAKE_CASE**: Constants

## Import Order

1. React & React-related imports
2. Third-party libraries
3. Internal absolute imports (`@/...`)
4. Relative imports (`./...`)
5. Type-only imports

```typescript
import React, { useState } from 'react';

import { marked } from 'marked';

import { Button } from '@/components/ui/Button';
import { StorageService } from '@/core/services/StorageService';
import type { FolderData } from '@/core/types/folder';

import { parseData } from './parser';
```

---
