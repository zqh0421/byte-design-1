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
    <Button>Hello dumi!</Button>
    <Button btnType="primary">Hello dumi!</Button>  
    <Button btnType="danger">Hello dumi!</Button>
    <Button disabled>disabled</Button>
  </>
```
## Link Button
```jsx
import { Button } from 'byte-design';

export default () => 
  <>
    <Button btnType="link" href="mockhref.com">Hello dumi!</Button> 
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



