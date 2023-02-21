import React, { useState } from 'react'
import DateView from './DateView'
import MonthYearView from './MonthYearView'
import dayjs from 'dayjs'

const current = dayjs()
const initCalendar = {
  year: current.year(),
  monthIndex: current.month()
}

const Calendar = () => {
  // 管理状态
  const [isDateView, setDateView] = useState(true)
  const [calendar, setCalendar] = useState(initCalendar) // 用useText优化
  return (
    isDateView ? 
    <DateView
      calendar = {calendar}
      setCalendar = {setCalendar}
    /> 
    : <MonthYearView/>
  )
}

export default Calendar