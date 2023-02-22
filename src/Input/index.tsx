import React, { useRef, FC, useState } from 'react';
import classNames from 'classnames';

import './style.scss'

type InputSize = 'lg' | 'md' | 'sm';

interface InputProps {
  prefix?: string;
  suffix?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  size?: InputSize;
  defaultValue?: string;
  value?: string;
  onChange?: () => void;
  required?: boolean;
  type?: string;
}

const Input: FC<InputProps> = ({
  prefix = '',
  suffix = '',
  className = '',
  placeholder = 'enter something',
  disabled = false,
  id,
  maxLength,
  size = 'md',
  value,
  defaultValue = '',
  onChange,
  required = false,
  type = 'text'
}: InputProps) => {
  const inputRef = useRef(null);
  const [inputContent, setInputContent] = useState(
    `${defaultValue}`
  );
  
  const heightOfSize = {
    'sm': '24px',
    'md': '32px',
    'lg': '40px',
  }

  const classes = {
    container: classNames(
      `h-[${heightOfSize[size]}]`,
      'container'
    ),
    input: classNames(
      { 'rounded-r-md': prefix.length === 0 },
      { 'rounded-l-md': suffix.length === 0 },
      { 'input-disabled': disabled },
      'input',
      className
    ),
  };

  return (
    <>
      <span className={classes.container}>
        {prefix && (
          <span className="prefix">
            {prefix}
          </span>
        )}
        <input
          className={classes.input}
          type={type}
          id={id}
          name="name"
          required={required}
          placeholder={placeholder}
          minLength={4}
          maxLength={maxLength}
          size={10}
          disabled={disabled}
          onChange={(e) => {
            setInputContent(`${prefix}${e.target.value}${suffix}`);
          }}
          defaultValue={defaultValue}
          ref={inputRef}
        />
        {suffix && (
          <span className="suffix">
            {suffix}
          </span>
        )}
      </span>
      <p>{inputContent}</p>
    </>
  );
};

export default Input;
