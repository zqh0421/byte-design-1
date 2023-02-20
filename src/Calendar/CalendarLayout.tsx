import React, { FC, ReactNode } from 'react';
import './style.scss';

export interface CalendarLayoutProps<T> {
  headerElement?: {
    leftElement: T;
    rightElement: T;
    middleElement: T;
  };
  bodyElement?: T;
  footerElement?: T;
}

const CalendarLayout: FC<CalendarLayoutProps<ReactNode>> = ({
  headerElement,
  bodyElement,
  footerElement,
}) => {
  // const {leftElement, rightElement, middleElement} =  headerElement 
  return (
    <div className='layout-container'>
      {/* <div className='layout-header'>
        <div>{leftElement}</div>
        <div>{rightElement}</div>
        <div>{middleElement}</div>
      </div> */}
      <div className='layout-body'>{bodyElement}</div>
      <div className='layout-footer'>{footerElement}</div>
    </div>
  );
};

export default CalendarLayout;
