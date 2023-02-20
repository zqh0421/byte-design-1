import dayjs, { Dayjs } from 'dayjs';
import { chunk } from 'lodash';
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
