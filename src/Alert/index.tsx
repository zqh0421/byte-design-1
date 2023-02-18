import React, { useState } from "react"
import Classnames from "classnames";
import './style.scss'

export interface AlertProps {
  title: string; // 提示文本
  message?: string;
  type?: 'success' | 'warning' | 'danger';
  closeable?: boolean; // 是否可关闭
}

const Alert: React.FC<AlertProps> = ({
  title,
  message,
  type = 'success',
  closeable = true,
}) => {
  const [close, setClose] = useState(false)
  const classes = Classnames('alert', {
    [`alert-${type}`]: type,
  })
  const titleClasses = Classnames('alert-title', {
    'bold-title': message
  })
  const handleClose = () => setClose(true)
  return (
    close ? null : <div className={classes}>
      <span className={titleClasses}>{title}</span>
      {message && <p className="alert-message">{message}</p>}
      {closeable && <span className="alert-close" onClick={handleClose}>X</span>}
    </div>
  )
}

export default Alert;