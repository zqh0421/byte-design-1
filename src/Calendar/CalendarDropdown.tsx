import { throttle } from 'lodash';
import React, { FC, useEffect, useRef, useState } from 'react';
import CalendarButton, { ArrowButton } from './CalendarButton';
import { createYears,createMonths } from './generator';
import './style.scss';
import { CalendarProps } from './Calendar';
export interface CalendarDropdownProps extends CalendarProps{
  items: any[];
  mode: 'year' | 'month';
  setyearDispay: (x:boolean)=>void;
}

const CalendarDropdown: FC<CalendarDropdownProps> = ({ items, mode, calendar, selectCalendar,setyearDispay }) => {
  const [dates, setDates] = useState(items);
  const divRef = useRef<HTMLDivElement>(null);
  const n = items.length;
  useEffect(() => {
    // 解决passive event listener的问题
    if (divRef.current) {
      divRef.current.addEventListener('wheel', onwheel, { passive: false });
    }
    console.log('current date:' + dates);
    return () => { // 组件卸载时移除listener
      if (divRef.current) {
        divRef.current.removeEventListener('wheel', onwheel);
      }
    };
  }, []);
  // 点击时重新生成
  const changeDate = (step: number) => {
    // 因为setState是异步的，所以必须使用函数式更新
    setDates((prevDates) => {
      let newDate;
      if (mode === 'year') {
        newDate = createYears(prevDates[Math.floor(n / 2)] + step);
      } else {
        newDate = createMonths(prevDates[Math.floor(n / 2)] + step); // temp
      }
      return newDate;
    });
  };
  let _timer:any = null;
  const onwheel = (evt: WheelEvent) => {
    evt.preventDefault();
    const step = evt.deltaY > 0 ? 1 : -1; // 根据deltaY控制方向
    // 节流控制速度
    if (_timer) return 
    _timer = setTimeout(()=>{
      changeDate(step)
      _timer = null
    }, 60)
  };
  const clickDate = (year:number)=>{
    if(mode === 'year'){
      selectCalendar({year, monthIndex:calendar.monthIndex})
      setyearDispay(false)
    }else{
      selectCalendar({year, monthIndex:calendar.monthIndex})
    }

  }
  return (
    <div className="dropdown" ref={divRef}>
      <ArrowButton icon="angle-up" onClick={() => changeDate(-1)} />
      <ul>
        {dates.map((date, i) => {
          return (
            <li key={i}>
              <CalendarButton className="dropdown-button" onClick={()=>clickDate(date)}>
                {date}
              </CalendarButton>
            </li>
          );
        })}
      </ul>
      <ArrowButton icon="angle-down" onClick={() => changeDate(1)} />
    </div>
  );
};

export default CalendarDropdown;
