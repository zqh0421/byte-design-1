---
group:
  title: General
---

## General Input

Input.

```jsx
import { Input } from 'byte-design';

export default () => 
  <>
    <Input prefix='www.' />
  </>
```

## API
|   Property   | Description         | Type                               | Default    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **btnType**  | Set button type      | `primary` \| `default` \| `danger` \| `link` | `default` |
|   **size**   | Set button size       | `lg` \| `sm`                           | -         |
| **disabled** | Disabled state of button | `boolean`                           | `false`    |
|   **href**   | Redirect url of link button | `string`                         | -         |



