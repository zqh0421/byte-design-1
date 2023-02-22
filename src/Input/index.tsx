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
}: InputProps) => {
  const inputRef = useRef(null);
  const [inputContent, setInputContent] = useState(
    `${prefix}${defaultValue}${suffix}`
  );

  const classes = {
    container: classNames(
      { 'h-[40px]': size === 'lg' },
      { 'h-[32px]': size === 'md' },
      { 'h-[24px]': size === 'sm' },
      'container'
    ),
    input: classNames(
      { 'rounded-l-md': prefix.length === 0 },
      { 'rounded-l-md': suffix.length === 0 },
      'input'
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
          type="text"
          id="name"
          name="name"
          required
          placeholder={placeholder}
          minLength={4}
          maxLength={maxLength}
          size={10}
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
