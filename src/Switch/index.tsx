import React, { useState, useEffect } from 'react'
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
}

const Switch: React.FC<ISwitchProps> = (props) => {
  const {
    defaultChecked,
    onClick,
    onChange
  } = props
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked || false);
  const handleClick = () => {
    setIsChecked(!isChecked)
    onClick && onClick(isChecked)
  }
  useEffect(() => {
    console.log(props)
  },[])

  useEffect(() => {
    onChange && onChange(isChecked)
  }, [isChecked])

  return (
      <div className={`switch-container ${isChecked ? 'switch-container-checked' : ''}`} onClick={handleClick}>
        <div className={`switch-btn ${isChecked ? 'switch-btn-checked' : ''}`}></div>
      </div>
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