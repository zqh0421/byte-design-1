import React, { useRef, FC, useState } from 'react';
import classNames from 'classnames';

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
      'flex font-light text-black border-gray-400 border p-0 focus:border-blue-400 rounded-md'
    ),
    input: classNames(
      { 'rounded-l-md': prefix.length === 0 },
      { 'rounded-l-md': suffix.length === 0 },
      'px-1 bg-slate-200 border-gray-400 font-light shadow-none focus:shadow-lg w-full hover:outline-2 outline-1 outline-blue-500 focus:outline z-10'
    ),
  };

  return (
    <>
      <span className={classes.container}>
        {prefix && (
          <span className="border-gray-400 border-r bg-gray-200 rounded-l-md px-1 flex justify-center items-center">
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
          <span className="border-gray-400 border-l bg-gray-200 rounded-r-md px-1 flex justify-center items-center">
            {suffix}
          </span>
        )}
      </span>
      <p>{inputContent}</p>
    </>
  );
};

export default Input;
