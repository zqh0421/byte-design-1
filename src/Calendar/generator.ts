import dayjs, { Dayjs } from 'dayjs';
import { chunk} from 'lodash';
// 日历表
export const createWeeks = (year: number, monthIndex: number): Dayjs[][] => {
  // 6*7
  const current = dayjs(new Date(year, monthIndex));
  const firstDayOfCalendar = current.startOf('week');
  const weeks = new Array(6 * 7).fill(0).map((_, i) => {
    // 从周一开始
    return firstDayOfCalendar.add(i + 1, 'day');
  });

  return chunk(weeks, 7);
};

// 星期名
export const createWeekNames = (): string[] => {
  return ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
};

// 下拉菜单-年份
export const createYears = (currentYear: number): number[] =>{
  const start = currentYear - 2
  const end = currentYear + 2
  const res = []
  for(let i = start; i <= end; i++){
    res.push(i)
  }
  return res
}

// 下拉菜单-月份
export const createMonths = (currentMonth: number):number[] =>{
  let start = currentMonth-2 >= 1? currentMonth-2: 1
  let end = currentMonth+2 <=12 ? currentMonth+2:12
  if(start === 1 && end < 5) end = 5
  if(end === 12 && start > 8) start = 8
  const res = []
  for(let i = start; i <= end; i++){
    res.push(i)
  }
  return res
}
