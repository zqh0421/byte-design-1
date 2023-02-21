import dayjs from 'dayjs';
import React, { useState } from 'react';
import DateView from './DateView';
import MonthYearView from './MonthYearView';

const current = dayjs();
const initCalendar = {
  year: current.year(),
  monthIndex: current.month(),
};

const Calendar = () => {
  // 管理状态
  const [isDateView, setDateView] = useState(true);
  const [calendar, setCalendar] = useState(initCalendar); // 用useText优化
  // tabIndex：使得元素可以被聚焦
  return (
    <div tabIndex={0}>
      {isDateView ? (
        <DateView calendar={calendar} setCalendar={setCalendar} />
      ) : (
        <MonthYearView />
      )}
    </div>
  );
};

export default Calendar;
