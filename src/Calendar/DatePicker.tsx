import classnames from 'classnames';
import dayjs, { Dayjs } from 'dayjs';
import React, { useContext, useMemo } from 'react';
import CalendarButton from './CalendarButton';
import { DateContext } from './DateManager';
import { createWeekNames, createWeeks } from './generator';
import './style.scss';

export interface DatePickerProps {
  calendar: {
    year: number;
    monthIndex: number;
  };
  selectedDate: Dayjs;
}

const DatePicker: React.FC<DatePickerProps> = ({ calendar, selectedDate }) => {
  const { year, monthIndex } = calendar;
  const { onSelectDate } = useContext(DateContext);
  const weeks = useMemo(
    () => createWeeks(year, monthIndex),
    [year, monthIndex],
  ); // 缓存
  const weekNames = useMemo(() => createWeekNames(), []);
  const click = (evt: any, day: Dayjs) => {
    if (onSelectDate) onSelectDate(evt, day);
  };
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
              const isToday =
                day.format('YYYY/MM/DD') === dayjs().format('YYYY/MM/DD');
              const notCrrentMonth = dayjs().month() !== day.month();
              const isSelected = day.diff(selectedDate) === 0;
              const classes = classnames({
                'is-today': isToday,
                'not-current-month': notCrrentMonth,
                'is-selected': isSelected,
              });
              return (
                <td key={j}>
                  <CalendarButton
                    className={classes}
                    onClick={(evt) => click(evt, day)}
                  >
                    {day.date()}
                  </CalendarButton>
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
