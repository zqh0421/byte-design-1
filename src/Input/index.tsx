import classNames from 'classnames';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import './style.scss';

type InputHeight = 'lg' | 'md' | 'sm';

export interface InputRef {
  focus: () => void;
  blur: () => void;
  setSelectionRange: (
    start: number,
    end: number,
    direction?: 'forward' | 'backward' | 'none',
  ) => void;
  select: () => void;
  input: HTMLInputElement | null;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  suffix?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  height?: InputHeight;
  defaultValue?: string;
  value?: string;
  onChange?: () => void;
  required?: boolean;
  type?: string;
  label?: string;
}

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    prefix = '',
    suffix = '',
    className = '',
    placeholder = 'enter something',
    disabled = false,
    id,
    maxLength,
    height = 'md',
    defaultValue = '',
    onChange,
    required = false,
    type = 'text',
    label = '',
    ...restProps
  }: InputProps = props;
  // const [inputContent, setInputContent] = useState(`${defaultValue}`);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus,
    blur: () => {
      inputRef.current?.blur();
    },
    setSelectionRange: (
      start: number,
      end: number,
      direction?: 'forward' | 'backward' | 'none',
    ) => {
      inputRef.current?.setSelectionRange(start, end, direction);
    },
    select: () => {
      inputRef.current?.select();
    },
    input: inputRef.current,
  }));

  const heightOfSize = {
    sm: '24px',
    md: '32px',
    lg: '40px',
  };

  const classes = {
    container: classNames(`h-[${heightOfSize[height]}]`, 'container'),
    input: classNames(
      { 'rounded-r-md': prefix.length === 0 },
      { 'rounded-l-md': suffix.length === 0 },
      { 'input-disabled': disabled },
      'input',
      className,
    ),
  };

  return (
    <>
      <label>
        {label}
        <span className={classes.container}>
          {prefix && <span className="prefix">{prefix}</span>}
          <input
            className={classes.input}
            type={type}
            id={id}
            name="name"
            required={required}
            placeholder={placeholder}
            maxLength={maxLength}
            disabled={disabled}
            onChange={onChange}
            {...restProps}
            defaultValue={defaultValue}
            ref={inputRef}
          />
          {suffix && <span className="suffix">{suffix}</span>}
        </span>
      </label>
      {/* <p>{inputContent}</p> */}
    </>
  );
});

export default Input;
