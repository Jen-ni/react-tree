Back to [react-tree](../../README.md)

# Icon

### Description

Customized rc-tree component.

### Dependencies

None

### Initialization

N/A

### API

#### Tree

| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| data                     | array            | required                                 | Tree data                                |
| elements                 | object           |                                          | key element mapping                      |

#### Tree - `data` prop attributes

| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| title                    | string           | required                                 | Branch / leaf title                      |
| key                      | string           | required                                 | Unique key of Branch / leaf        |

#### Tree - `elements` prop attributes

| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
|                      |        |                              |                               |

### Code example

```jsx
import { Tree } from 'react-tree';

function TreeView() {
  return (
    <Tree data=[] />
  );
}