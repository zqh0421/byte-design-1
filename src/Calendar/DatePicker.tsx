import React, { useMemo } from 'react';
import CalendarButton from './CalendarButton';
import classnames from 'classnames';
import { createWeekNames, createWeeks } from './generator';
import dayjs from 'dayjs';
import './style.scss';

export interface DatePickerProps {
  calendar: {
    year: number;
    monthIndex: number;
  };
  selectedDate: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({ calendar, selectedDate }) => {
  
  const { year, monthIndex } = calendar;
  const weeks = useMemo(
    () => createWeeks(year, monthIndex),
    [year, monthIndex],
  ); // 缓存
  const weekNames = useMemo(() => createWeekNames(), []);
  return (
    <table>
      <thead>
        <tr className="calendar-header">
          {weekNames.map((name, i) => (
            <th key={i}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((day, j) => {
              const isToday = dayjs().date() === day.date()
              const notCrrentMonth = dayjs().month() !== day.month()
              const isSelected = day.diff(selectedDate) === 0 
              
              const classes = classnames({
                'is-today': isToday,
                'not-current-month': notCrrentMonth,
                'is-selected': isSelected
              })
              return (
                <td key={j}>
                  <CalendarButton className={classes}>{day.date()}</CalendarButton>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DatePicker;
