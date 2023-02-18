---
group:
  title: 反馈型组件
---

## 警告提示

警告提示，展现需要关注的信息。

```jsx
import { Alert } from 'byte-design';

export default () => 
  <>
    <Alert 
    title='This is a success message'
    message='a description'
    />
    <Alert 
    title='This is a warning'
    type='warning'
    />
    <Alert 
    title='This is an error message and cannot be closed'
    type='danger'
    closeable = {false}
    />
  </>
```

## API
|     属性     | 说明               | 类型                                | 默认值    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **title**  | 设置提示文本       | `string`                               | -        |
| **message**   | 设置详细提示信息       | `string`                          | -         |
| **type** | 设置 警告类型 | `success` \| `waring` \| `danger`             | `success`    |
|   **closeable**   | 警告是否可关闭  | `boolean`                            | `true`         |



