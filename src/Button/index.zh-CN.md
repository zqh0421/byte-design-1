---
group:
  title: 通用型组件
---

## 普通按钮

用于开始一个即时操作，支持`HTML button`和`a`链接的所有属性。

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
## 链接按钮
```jsx
import { Button } from 'byte-design';

export default () => 
  <>
    <Button btnType="link" href="mockhref.com">Link Button</Button> 
    <Button btnType="link" href="mockhref.com" disabled>disabled</Button>  
  </>
```
## API
|     属性     | 说明               | 类型                                | 默认值    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **btnType**  | 设置按钮类型       | `primary` \| `default` \| `danger` \| `link` | `default` |
|   **size**   | 设置按钮大小       | `lg` \| `sm`                           | -         |
| **disabled** | 设置 Button 的禁用 | `boolean`                           | `false`    |
|   **href**   | link button的属性  | `string`                            | -         |



