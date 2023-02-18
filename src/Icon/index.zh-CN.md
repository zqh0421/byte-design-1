---
group:
  title: 通用型组件
---

## 图标

所有图标请参考：https://fontawesome.com/icons

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
|     属性     | 说明               | 类型                                | 默认值    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **icon**  | 设置图标样式       | 参考：https://fontawesome.com/icons | - |
|   **theme**   | 设置图标主题色   | `primary` \| `secondary`  \| `success`\| `info`\| `warning`\| `danger`\| `light`\| `dark`    | -    |



