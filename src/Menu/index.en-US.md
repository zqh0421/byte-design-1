---
group:
  title: Navigation
---

## horizontal menu
A versatile menu for navigation.

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

## vertical menu

Submenus are pop-up lists.

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
|   Property   | Description         | Type                               | Default    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **mode**  | Menu type, supports both vertical and horizontal       | `vertical` \| `horizontal`             | -        |
| **defaultIndex**   | Set menu items that are activated by default       | `string`               | -         |
### MenuItem
|   Property   | Description         | Type                               | Default    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **disabled** | Set Disabled for MenuItem | `boolean`                           | `false`    |
### SubMenu
|   Property   | Description         | Type                               | Default    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **title**  | Set the name of the submenu      | `string`                      | -        |
| **disabled** | Set SubMenu disabled | `boolean`                           | `false`    |




