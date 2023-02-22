import dayjs from 'dayjs';
import React, { FC, useContext } from 'react';
import Button from '../Button';
import { ArrowButton } from './CalendarButton';
import CalendarLayout from './CalendarLayout';
import DatePicker from './DatePicker';
import {DateContext} from './DateManager'
export interface DateViewProps {
  calendar: {
    year: number;
    monthIndex: number;
  };
  setCalendar: Function;
}
const DateView: FC<DateViewProps> = ({ calendar, setCalendar }) => {
  const { year, monthIndex } = calendar;
  const context = useContext(DateContext)
  const toPreMonth = () => {
    const preMonthIndex = (monthIndex - 1 + 12) % 12;
    const preYear = year + Math.floor((monthIndex - 1) / 12);
    setCalendar({ year: preYear, monthIndex: preMonthIndex });
  };
  const toNextMonth = () => {
    const nextMonthIndex = (monthIndex + 1) % 12;
    const nextYear = year + Math.floor((monthIndex + 1) / 12);

    setCalendar({ year: nextYear, monthIndex: nextMonthIndex });
  };
  const toToday = () => {
    setCalendar({year:dayjs().year(), monthIndex:dayjs().month()})
  }
  return (
    <CalendarLayout
      headerElement={{
        leftElement: <ArrowButton icon="arrow-left" onClick={toPreMonth} />,
        middleElement: <p>{`${year}年${monthIndex + 1}月`}</p>,
        rightElement: <ArrowButton icon="arrow-right" onClick={toNextMonth} />,
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
