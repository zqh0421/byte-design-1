import React from 'react'
import DatePicker from "./DatePicker"


const InputDatePicker = () => {
  return (
    <DatePicker calendar={{year:2023, monthIndex:1}} />
  )
}

export default InputDatePicker;