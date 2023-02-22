import dayjs, { Dayjs } from 'dayjs';
import React, { createContext, FC, useState } from 'react';

interface IDateContext {
  date: Dayjs;
  textInput: string;
  onSelectDate?: Function; // 状态和改变状态的函数一起传
}
interface DateManagerProps {
  childChange?: Function;
  children?: React.ReactNode;
}

const initContext = { date: dayjs(), textInput: '' };
export const DateContext = createContext<IDateContext>(initContext); // 不能放组件里，要export

const DateManager: FC<DateManagerProps> = ({ childChange, children }) => {
  const [data, setData] = useState({
    date: dayjs(),
    textInput: '',
  });
  const onSelectDate = (evt: any, date: Dayjs) => {
    const newData = { date, textInput: dayjs(date).format('YYYY-MM-DD') };

    setData(newData);
    if (childChange) {
      // 暂时没用
      childChange(evt, newData);
    }
  };
  const passedContext: IDateContext = {
    date: data.date,
    textInput: data.textInput,
    onSelectDate,
  };
  return (
    <DateContext.Provider value={passedContext}>
      {children}
    </DateContext.Provider>
  );
};

export default DateManager;
