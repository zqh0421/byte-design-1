import React, { useState, useEffect, useRef, ReactNode } from 'react'
import './style.scss'

interface ISwitchProps {
  className?: string
  checked?: boolean
  size?: string
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: Function
  onClick?: Function
  loading?: boolean
  checkedChildren?: ReactNode
  uncheckedChildren?: ReactNode
}

const Switch: React.FC<ISwitchProps> = (props) => {
  const {
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
  } = props
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked || checked || false);
  const switchRef = useRef(null);
  
  const handleClick = () => {
    if (!disabled && !loading) {
      setIsChecked(!isChecked)
      onClick && onClick(isChecked)
    }
  }

  useEffect(() => {
    onChange && onChange(isChecked)
  }, [isChecked])

  useEffect(() => {
    if (switchRef.current) {
      let dom = switchRef.current as HTMLElement
      if (size==="small") {
        dom.style.setProperty("--switch-width","42px")
        dom.style.setProperty("--switch-font-size", "xx-small")
      } else if (size==="large") {
        dom.style.setProperty("--switch-width","60px")
        dom.style.setProperty("--switch-font-size", "medium")
      } else {
        dom.style.setProperty("--switch-width","50px")
        dom.style.setProperty("--switch-font-size", "small")
      }
    }
  }, [size])
  return (
    <>
      <div className="wrapping" ref={switchRef}>
        <div
          className={
            `switch-container`+
            `${isChecked ? ' switch-container-checked' : ''}`+
            `${disabled || loading ? ' switch-container-disabled' : ''}`
          }
          onClick={handleClick}
        >
          <span className={`switch-children`}>{isChecked ? checkedChildren : uncheckedChildren}</span>
            {/* loading && <div
              className={`switch-loading ${isChecked ? 'switch-loading-checked': ''}`}
            /> */}
        </div>
      </div>
    </>
  )
};

Switch.defaultProps = {
  checked: false,
  size: "default",
  defaultChecked: false,
  disabled: false,
  onChange: () => {}
}

export default Switch;