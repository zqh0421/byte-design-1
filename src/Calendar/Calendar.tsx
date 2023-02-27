import dayjs from 'dayjs';
import React, { useState } from 'react';
import DateView from './DateView';
import MonthYearView from './MonthYearPicker';
import './style.scss'
const current = dayjs();
const initCalendar = {
  year: current.year(),
  monthIndex: current.month(),
};
export interface CalendarProps {
  calendar: {
    year: number;
    monthIndex: number;
  };
  selectCalendar: (calendar:{year:number, monthIndex:number})=>void;
}

const Calendar = () => {
  // 管理状态
  const [isDateView, setDateView] = useState(true);
  const [calendar, setCalendar] = useState(initCalendar); 
  // tabIndex：使得元素可以被聚焦
  return (
    <div tabIndex={0} className="calendar">
      {isDateView ? (
        <DateView calendar={calendar} selectCalendar={setCalendar} />
      ) : (
        <a/>
      )}
    </div>
  );
};

export default Calendar;
