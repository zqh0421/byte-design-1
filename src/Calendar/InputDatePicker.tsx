import React from 'react'
import DatePicker from "./DatePicker"


const InputDatePicker = () => {
  return (
    <DatePicker calendar={{year:2023, monthIndex:1}} selectedDate={new Date(2023,1,27)} />
  )
}

export default InputDatePicker;