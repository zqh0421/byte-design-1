---
title: Switch
group:
  title: Data Entry
  order: 3
---

# Switch

Switch selector.

## When to Use
- If you need to represent the switching between two states or on-off state.
- The difference between `checkbox` and `switch` is that the `switch` will trigger a state change directly when you toggle it, while `checkbox` is generally used for state marking, which should work in conjunction with submit operation.

## Examples
### Basic Use
The most basic use.

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

### Disabled
Disabled state of `Switch`.
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
      <br />
      <button onClick={toggle}>
        Toggle disabled
      </button>
    </>
  );
};

export default App;
```

### Text & Icons
Switch with text and icons.

```tsx
import React from 'react';
import { Switch, Icon } from 'byte-design';

const App: React.FC = () => (
  <>
    <Switch checkedChildren="开" uncheckedChildren="关" defaultChecked />
    <br />
    <Switch checkedChildren="1" uncheckedChildren="0" />
    <br />
    <Switch checkedChildren={<Icon icon="house"/>} uncheckedChildren={<Icon icon="star"/>} />
  </>
);

export default App;
```

### Different Sizes
`size="small"` represents a small sized switch. Three sizes - `default`, `small` and `large` are available now.

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

### Loading
Mark a pending state of switch.

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

| Property | Description | Type | Default |
| -- | -- | -- | -- |
| autoFocus | Automatically focus on switch | boolean | false |
| className | The additional class to Switch | string | - |
| checked | Determine whether the Switch is checked | boolean | false |
| size | The size of `Switch`, options: `default` `small` `large` | string | `default` |
| defaultChecked | Whether to set the initial state | boolean | false |
| disabled | Disable switch | boolean | false |
| onChange | Trigger when the checked state is changing | function(checked: boolean, event: Event) | - |
| onClick | Trigger when clicked | function(checked: boolean, event: Event) | - |
| checkedChildren | The content to be shown when the state is checked | string | - |
| uncheckedChildren | The content to be shown when the state is unchecked | string | - |
| loading | Loading state of switch | boolean | false |