---
group:
  title: Feedback
---

## Alert

Alert component for feedback.

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
|   Property   | Description         | Type                               | Default    |
| :----------: | ------------------ | ----------------------------------- | --------- |
| **title**  | set prompt text       | `string`                               | -        |
| **message**   | Set detailed prompt information       | `string`                          | -         |
| **type** | Set Warning Type | `success` \| `waring` \| `danger`             | `success`    |
|   **closeable**   | Whether the warning can be turned off  | `boolean`                            | `true`         |



