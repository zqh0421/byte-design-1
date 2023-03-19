import dayjs from 'dayjs';
import React, { FC, useContext } from 'react';
import Button from '../Button';
import { ArrowButton } from './CalendarButton';
import CalendarLayout from './CalendarLayout';
import DatePicker from './DatePicker';
import {DateContext} from './DateManager'
import MonthYearPicker from './MonthYearPicker';
import { CalendarProps } from './Calendar';

const DateView: FC<CalendarProps> = ({ calendar, selectCalendar }) => {
  const { year, monthIndex } = calendar;
  const context = useContext(DateContext) // 冗余，直接在DatePicker中使用context
  const toPreMonth = () => {
    const preMonthIndex = (monthIndex - 1 + 12) % 12;
    const preYear = year + Math.floor((monthIndex - 1) / 12);
    selectCalendar({ year: preYear, monthIndex: preMonthIndex });
  };
  const toNextMonth = () => {
    const nextMonthIndex = (monthIndex + 1) % 12;
    const nextYear = year + Math.floor((monthIndex + 1) / 12);

    selectCalendar({ year: nextYear, monthIndex: nextMonthIndex });
  };
  const toToday = () => {
    selectCalendar({year:dayjs().year(), monthIndex:dayjs().month()})
  }
  return (
    <CalendarLayout
      headerElement={{
        leftElement: <ArrowButton icon="angles-left" onClick={toPreMonth} />,
        middleElement: <MonthYearPicker calendar={calendar} selectCalendar={selectCalendar}/>,
        rightElement: <ArrowButton icon="angles-right" onClick={toNextMonth} />,
      }}
      bodyElement=<DatePicker
        calendar={calendar}
        selectedDate={context.date}
      />
      footerElement=<Button btnType="primary" onClick={toToday}>Today</Button>
    />
  );
};

export default DateView;
