import React, { FC, useState } from 'react';
import CalendarButton from './CalendarButton';
import { createYears } from './generator';
import CalendarDropdown from './CalendarDropdown';
import { CalendarProps } from './Calendar';

const MonthYearPicker: FC<CalendarProps> = ({ calendar, selectCalendar }) => {
  const { year, monthIndex } = calendar;
  const [yearDispay, setyearDispay] = useState(false)
  const years = createYears(year);
  const month = monthIndex >= 9? `${monthIndex+1}`: `0${monthIndex+1}`
  
  return (
    // <CalendarDropdown items={years} />
    <div className='month-year-picker'>
      <div className='year-picker'>
      <CalendarButton className='picker-button' onClick={()=>setyearDispay(true)}>{year}</CalendarButton>
      {yearDispay && <CalendarDropdown items={years} mode='year' calendar={calendar} selectCalendar={selectCalendar} setyearDispay={setyearDispay}/>}
      </div>

      <CalendarButton className='picker-button'>{month}</CalendarButton>
    </div>
  );
};

export default MonthYearPicker;
