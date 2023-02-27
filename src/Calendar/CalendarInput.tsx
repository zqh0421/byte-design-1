import React, { useContext } from 'react';
import { DateContext } from './DateManager';
// 一定要抽离出来，以作为DateManger的子组件，单独使用useContext
// 如果在InputDatePicker上使用，将接收不到onSelectDate函数，因为是同级的
const CalendarInput = () => {
  const context = useContext(DateContext);
  return (
      <input
        type="text"
        value={context.textInput}
        onChange={() => ()=>0}
        placeholder={'点击选择日期'}
      />
  );
};

export default CalendarInput;
