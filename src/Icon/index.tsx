import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";
import './style.scss'
library.add(fas);

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
// 继承图标本身的属性
export interface IconProps extends FontAwesomeIconProps {
  theme? : ThemeProps
}

const Icon: React.FC<IconProps> = ({ 
    className, 
    theme, 
    ...restProps 
}) => {
  const classes = classNames('icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon;