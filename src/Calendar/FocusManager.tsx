import React, { FC } from 'react';
// 管理聚焦和失焦事件
// 在React中可以作为父组件，接收blur和focus事件的冒泡
interface FocusManagerProps extends React.HTMLAttributes<HTMLDivElement> {
  openPicker: Function;
  closePicker: Function;
}
const FocusManager: FC<FocusManagerProps> = ({
  openPicker,
  closePicker,
  ...rest
}) => {
  let _timer: any = null;
  const onBlur = (e: any) => {
    // 使用setTimeout防止失焦后日历消失无法聚焦
    _timer = setTimeout(() => closePicker(e), 0);
  };
  const onFocus = (e: any) => {
    clearTimeout(_timer);
    openPicker(e);
  };
  return (
    <div onFocus={onFocus} onBlur={onBlur} {...rest}>
    </div>
  );
};

export default FocusManager;
