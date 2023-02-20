import React from 'react';
import classnames from 'classnames';
import './style.scss';
const CalendarButton: React.FC<
  React.ButtonHTMLAttributes<HTMLElement>
> = ({ children,className }) => {
  const classes = classnames(className, 'calendar-button')
  return <button className={classes}>{children}</button>;
};
export default CalendarButton;
