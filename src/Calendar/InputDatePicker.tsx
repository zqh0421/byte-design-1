import React, { useState } from 'react'
import DateView from './DateView'
import DatePicker from './DatePicker'
import dayjs from 'dayjs'
import Calendar from './Calendar'
import FocusManager from './FocusManager'
const InputDatePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false)
  return (
    <FocusManager
      childFocus={()=>setShowCalendar(true)}
      childBlur={()=>setShowCalendar(false)}
    >
      <input type="text" />
      {showCalendar && <Calendar/>}
    </FocusManager>
  )
}

export default InputDatePicker;