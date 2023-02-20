import React from 'react'
import DateView from './DateView'
import DatePicker from './DatePicker'
import dayjs from 'dayjs'
const InputDatePicker = () => {
  return (
    <DatePicker
    calendar={{ year: 2023, monthIndex: 1 }}
    selectedDate={new Date(2023, 1, 27)}
  />
  )
}

export default InputDatePicker;