---
group:
  title: Data Entry
  order: 3
---

# Switch

Switch selector.

## When to Use
- If you need to represent the switching between two states or on-off state.
- The difference between `checkbox` and `switch` is that the `switch` will trigger a state change directly when you toggle it, while `checkbox` is generally used for state marking, which should work in conjunction with submit operation.

## Basic Use
The most basic use.

```jsx
import React from 'react';
import { Switch } from 'byte-design';

const App: React.FC = () => {
  const onClick = () => {
    console.log("clicked")
  }
  return (
    <Switch
      defaultChecked={true}
      onChange={() => console.log("change")}
      onClick={onClick}
    />
  )
};

export default App;
```