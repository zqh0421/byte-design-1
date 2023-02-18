---
group:
  title: General
---

## General Button

Used to start an immediate action, supports all attributes of `HTML button` and `a` links.

```jsx
import { Button } from 'byte-design';

export default () => 
  <>
    <Button>General Button</Button>
    <Button btnType="primary">Primary Button</Button>  
    <Button btnType="danger">Danger Button</Button>
    <Button disabled>disabled</Button>
  </>
```
## Link Button
```jsx
import { Button } from 'byte-design';

export default () => 
  <>
    <Button btnType="link" href="mockhref.com">Link Button</Button> 
    <Button btnType="link" href="mockhref.com" disabled>disabled</Button>  
  </>
```
## API
|   Property   | Description         | Type                               | Default    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **btnType**  | Set button type      | `primary` \| `default` \| `danger` \| `link` | `default` |
|   **size**   | Set button size       | `lg` \| `sm`                           | -         |
| **disabled** | Disabled state of button | `boolean`                           | `false`    |
|   **href**   | Redirect url of link button | `string`                         | -         |



