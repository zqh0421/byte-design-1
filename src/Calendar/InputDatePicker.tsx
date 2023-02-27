import React, { useState } from 'react';
import Calendar from './Calendar';
import CalendarInput from './CalendarInput';
import DateManager from './DateManager';
import FocusManager from './FocusManager';

const InputDatePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  // 冒泡接收onChange事件?
  return (
    <FocusManager
      openPicker={() => setShowCalendar(true)}
      closePicker={() => setShowCalendar(false)}
    >
      <DateManager closePicker={() => setShowCalendar(false)}>
        <CalendarInput />
        {showCalendar && <Calendar />}
      </DateManager>
    </FocusManager>
  );
};

export default InputDatePicker;