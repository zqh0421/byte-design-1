import React, { useMemo } from 'react';
import { createWeekNames, createWeeks } from './generator';

export interface DatePickerProps {
  calendar: {
    year: number;
    monthIndex: number;
  };
}

const DatePicker: React.FC<DatePickerProps> = ({ calendar }) => {
  const { year, monthIndex } = calendar;
  const weeks = useMemo(
    () => createWeeks(year, monthIndex),
    [year, monthIndex],
  ); // 缓存
  const weekNames = useMemo(() => createWeekNames(), []);
  return (
    <table>
      <thead>
        <tr>
          {weekNames.map((name, i) => (
            <td key={i}>{name}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>
            {week.map((day, j) => (
              <td key={j}>{day.date()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DatePicker;
