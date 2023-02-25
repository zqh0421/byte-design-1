import React, { useState, useEffect, useRef, ReactNode } from 'react'
import { Icon } from 'byte-design'
import './style.scss'

interface ISwitchProps {
  className?: string
  checked?: boolean
  size?: string
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: Function
  onClick?: Function
  autoFocus?: boolean
  loading?: boolean
  checkedChildren?: ReactNode
  uncheckedChildren?: ReactNode
}

const Switch: React.FC<ISwitchProps> = (props) => {
  const {
    autoFocus,
    defaultChecked,
    onClick,
    onChange,
    className,
    size,
    disabled,
    loading,
    checked,
    checkedChildren,
    uncheckedChildren,
    ...otherProps
  } = props
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked || false);
  const switchRef = useRef(null);

  const handleClick = () => {
    onClick && onClick(isChecked)
  }

  const handleChange = () => {
    onChange && onChange(!isChecked)
    setIsChecked(!isChecked)    
  }

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  useEffect(() => {
    if (switchRef.current) {
      let dom = switchRef.current as HTMLElement
      if (size==="small") {
        dom.style.setProperty("--switch-width","56px")
        dom.style.setProperty("--switch-font-size", "0.875rem")
      } else if (size==="large") {
        dom.style.setProperty("--switch-width","80px")
        dom.style.setProperty("--switch-font-size", "1.25rem")
      } else {
        dom.style.setProperty("--switch-width","64px")
        dom.style.setProperty("--switch-font-size", "1rem")
      }
    }
  }, [size])

  return (
    <div className={className}>
      <label className={`switch-container`} ref={switchRef}>
        <input
          type="checkbox"
          checked={isChecked}
          autoFocus={autoFocus}
          disabled={disabled || loading}
          onChange={handleChange}
          onClick={handleClick}
          className={`switch-box ${loading ? 'switch-loading' : ''}`}
          {...otherProps}
        />
        <div className="switch-btn">{ loading ? <Icon icon="spinner" className="loading" /> : ''}</div>
        <span className="switch-children">
          {isChecked ? checkedChildren : uncheckedChildren}
        </span>
      </label>
    </div>
  )
};

Switch.defaultProps = {
  defaultChecked: false,
  disabled: false,
  autoFocus: false,
  loading: false,
}

export default Switch;