import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import CalendarLayout from './CalendarLayout';
import DatePicker from './DatePicker';
const DateView = () => {
  return (
    <CalendarLayout
      headerElement={{
        leftElement: (
          <Icon
            icon="arrow-left"
            theme="primary"
            size="lg"
            onClick={() => 0}
            style={{ cursor: 'pointer' }}
          />
        ),
        middleElement: <p>2023年2月</p>,
        rightElement: <Icon icon="arrow-right" theme="primary" size="lg" />,
      }}
      bodyElement=<DatePicker
        calendar={{ year: 2023, monthIndex: 1 }}
        selectedDate={new Date(2023, 1, 27)}
      />
      footerElement=<Button btnType="primary">Today</Button>
    />
  );
};

export default DateView;
