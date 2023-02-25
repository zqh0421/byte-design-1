---
title: 开关
group:
  title: 数据录入型组件
  order: 3
---

# 开关

这是一个开关。

## 何时使用？
- 需要代表开/关状态的变更时。
- `switch`会在你点击时直接触发状态变更，而`checkbox`通常用作状态标记，需要跟提交操作一起使用。
## 实例
### 基本使用
最基本的开关用例。

```tsx
import React from 'react';
import { Switch } from 'byte-design';

const App: React.FC = () => {
  const onChange = (checked: boolean) => {
    console.log(`Switch checked ${checked}`)
  }
  return (
    <Switch
      defaultChecked={true}
      onChange={onChange}
    />
  )
};

export default App;
```

### 禁用状态
`Switch`的禁用状态。
```tsx
import React, { useState } from 'react';
import { Switch } from 'byte-design';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br /><br />
      <button onClick={toggle}>
        Toggle disabled
      </button>
    </>
  );
};

export default App;
```

### 文本与图标
带有文本和图标的开关。

```tsx
import React from 'react';
import { Switch, Icon } from 'byte-design';

const App: React.FC = () => (
  <>
    <Switch checkedChildren="开启" uncheckedChildren="关闭" defaultChecked />
    <br />
    <Switch checkedChildren="1" uncheckedChildren="0" />
    <br />
    <Switch checkedChildren={<Icon icon="house"/>} uncheckedChildren={<Icon icon="star"/>} />
  </>
);

export default App;
```

### 尺寸
现在有三种备选的尺寸 —— `default`, `small`和`large`。

```tsx
import React from 'react';
import { Switch } from 'byte-design';

const App: React.FC = () => (
  <>
    <Switch size="small" defaultChecked />
    <br />
    <Switch defaultChecked />
    <br />
    <Switch size="large" defaultChecked />
  </>
);

export default App;
```

### 加载
标记开关的加载中状态。

```tsx
import React from 'react';
import { Switch } from 'byte-design';

const App: React.FC = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);

export default App;
```

## API

| 属性 | 描述 | 类型 | 默认值 |
| -- | -- | -- | -- |
| autoFocus | 自动聚焦 | boolean | false |
| className | 为开关添加额外类名 | string | - |
| checked | 决定开关的“开/关”状态 | boolean | false |
| size | `Switch`的尺寸，备选项有： `default` `small` `large` | string | `default` |
| defaultChecked | 开关的初始状态 | boolean | false |
| disabled | 禁用开关 | boolean | false |
| onChange | 当状态切换时触发 | function(checked: boolean, event: Event) | - |
| onClick | 当点击开关时触发 | function(checked: boolean, event: Event) | - |
| checkedChildren | 开关在“开”状态下显示的内容 | string | - |
| uncheckedChildren | 开关在“关”状态下显示的内容  | string | - |
| loading | 开关加载状态 | boolean | false |