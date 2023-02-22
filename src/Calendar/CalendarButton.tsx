import Button from 'byte-design/Button';
import Icon from 'byte-design/Icon';
import classnames from 'classnames';
import React from 'react';
import './style.scss';
const CalendarButton: React.FC<React.ButtonHTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...rest
}) => {
  const classes = classnames(className, 'calendar-button');
  return <button className={classes} {...rest}>{children}</button>;
};

interface ArrowButtonProps extends React.HTMLAttributes<HTMLElement> {
  icon: 'arrow-left' | 'arrow-right';
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ icon, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon icon={icon} theme="primary" size="lg" />
    </Button>
  );
};
export { ArrowButton };
export default CalendarButton;
