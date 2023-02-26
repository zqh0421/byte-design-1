---
group:
  title: General
---

## General Input

Input.

```jsx
import { Tabs } from 'byte-design';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

export default () => (
  <>
    <Tabs items={items} />
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
