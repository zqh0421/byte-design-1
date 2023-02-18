---
title: Menu
group:
  title: 导航型组件
---
## 水平菜单
为页面和功能提供导航的菜单列表。

```jsx
import { Menu, MenuItem, SubMenu } from 'byte-design';

export default () => 
  <>
    <Menu mode='horizontal'>
    <MenuItem>first</MenuItem>
    <SubMenu title='submenu'>
      <MenuItem>one</MenuItem>
      <MenuItem>two</MenuItem>
      <MenuItem>three</MenuItem>
    </SubMenu>
    <MenuItem disabled>second</MenuItem>
    <MenuItem>third</MenuItem>
  </Menu>
  </>
```

## 垂直菜单

子菜单为弹出式列表。

```jsx
import { Menu, MenuItem, SubMenu } from 'byte-design';

export default () => 
  <>
    <Menu mode='vertical'>
      <MenuItem>first</MenuItem>
      <SubMenu title='submenu'>
        <MenuItem>one</MenuItem>
        <MenuItem>two</MenuItem>
        <MenuItem>three</MenuItem>
      </SubMenu>
      <MenuItem disabled>second</MenuItem>
      <MenuItem>third</MenuItem>
    </Menu>
  </>
```

## API
### Menu
|     属性     | 说明               | 类型                                | 默认值    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **mode**  | 菜单类型，支持垂直、水平两种       | `vertical` \| `horizontal`             | -        |
| **defaultIndex**   | 设置默认激活的菜单项       | `string`               | -         |
### MenuItem
|     属性     | 说明               | 类型                                | 默认值    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **disabled** | 设置 MenuItem 的禁用 | `boolean`                           | `false`    |
### SubMenu
|     属性     | 说明               | 类型                                | 默认值    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **title**  | 设置子菜单的名称       | `string`                      | -        |
| **disabled** | 设置 SubMenu 的禁用 | `boolean`                           | `false`    |



