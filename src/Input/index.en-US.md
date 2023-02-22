---
group:
  title: General
---

## Default Input

Input.

```jsx
import { Input } from 'byte-design';

export default () => (
  <>
    <Input />
    <Input disabled={true} />
    <div>
      <Input /><Input />
    </div>
  </>
);
```

## prefix Input

Input.

```jsx
import { Input } from 'byte-design';

export default () => (
  <>
    <Input prefix="🥲🥲🥲" suffix="🍌🍌🍌" />
    <Input prefix="" suffix=".com" />
    <Input prefix="https://" suffix="" />
  </>
);
```

## API

|   Property   | Description                 | Type                                         | Default   |
| :----------: | --------------------------- | -------------------------------------------- | --------- |
| **btnType**  | Set button type             | `primary` \| `default` \| `danger` \| `link` | `default` |
|   **size**   | Set button size             | `lg` \| `sm`                                 | -         |
| **disabled** | Disabled state of button    | `boolean`                                    | `false`   |
|   **href**   | Redirect url of link button | `string`                                     | -         |
