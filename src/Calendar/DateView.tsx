import React from 'react';
import CalendarLayout from './CalendarLayout';
import DatePicker from './DatePicker';
import CalendarButton from './CalendarButton';
import dayjs from 'dayjs'

const DateView = () => {
  return (
    <CalendarLayout
      // headerElement={{
      //   leftElement: <CalendarButton />,
      //   middleElement: <CalendarButton />,
      //   rightElement: <CalendarButton />,
      // }}
      bodyElement={
        <DatePicker
          calendar={{ year: 2023, monthIndex: 1 }}
          selectedDate={new Date(2023, 1, 27)}
        />
      }
      footerElement={<CalendarButton />}
    />
  );
};

export default DateView;
