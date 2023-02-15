import React, { type FC } from 'react'
import './index.less'

const Button: FC<{ content: string }> = (props) => {
  return (
    <button className="test">{props.content}</button>
  )
};

export default Button;