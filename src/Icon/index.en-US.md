---
group:
  title: General
---

## icon

For all icons, please refer to：https://fontawesome.com/icons

```jsx
import { Icon } from 'byte-design';

export default () => 
  <>
    <Icon icon="house"/>{" "}
    <Icon icon="times" theme="danger"/>{" "}
    <Icon icon="star" theme="primary"/>{" "}
    <Icon icon="check" theme="secondary"/>{" "}
    <Icon icon="gears" theme="warning"/>
  </>
```

## API
|   Property   | Description         | Type                               | Default    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **icon**  | Set icon style       | refer：https://fontawesome.com/icons | - |
|   **theme**   | Set icon theme color   | `primary` \| `secondary`  \| `success`\| `info`\| `warning`\| `danger`\| `light`\| `dark`    | -    |



