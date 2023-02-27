import React, { FC, useState } from 'react';
import { CalendarProps } from './Calendar';
import CalendarButton from './CalendarButton';
import CalendarDropdown from './CalendarDropdown';
import FocusManager from './FocusManager';
import { createMonths, createYears } from './generator';

const MonthYearPicker: FC<CalendarProps> = ({ calendar, selectCalendar }) => {
  const { year, monthIndex } = calendar;
  const [yearDispay, setyearDispay] = useState(false);
  const [monthDispay, setmonthDispay] = useState(false);
  const years = createYears(year);
  const months = createMonths(monthIndex + 1);
  const month = monthIndex >= 9 ? `${monthIndex + 1}` : `0${monthIndex + 1}`;

  return (
    // <CalendarDropdown items={years} />
    <div className="month-year-picker">
      <FocusManager
        openPicker={() => setyearDispay(true)}
        closePicker={() => setyearDispay(false)}
      >
        <div className="year-picker">
          <CalendarButton className="picker-button">{year}</CalendarButton>
          {yearDispay && (
            <CalendarDropdown
              items={years}
              mode="year"
              calendar={calendar}
              selectCalendar={selectCalendar}
              setDispay={setyearDispay}
            />
          )}
        </div>
      </FocusManager>
      <FocusManager
        openPicker={() => setmonthDispay(true)}
        closePicker={() => setmonthDispay(false)}
      >
        <div className="month-picker">
          <CalendarButton className="picker-button">{month}</CalendarButton>
          {monthDispay && (
            <CalendarDropdown
              items={months}
              mode="month"
              calendar={calendar}
              selectCalendar={selectCalendar}
              setDispay={setmonthDispay}
            />
          )}
        </div>
      </FocusManager>
    </div>
  );
};

export default MonthYearPicker;
