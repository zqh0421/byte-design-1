import classNames from "classnames";
import React from "react";
import { AnchorHTMLAttributes } from "react";

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?:string;
  children: React.ReactNode;
}
// 加入button和a标签的native attributes，
// 并使用Partial<T>使两个标签能取到各自的原生属性
export type ButtonProps = Partial<BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>>
const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    href, //如何让type为link时必须加href？(重新写一个linkProps接口)
    children,
    ...restProps
  } = props
  // 对象中的值为真才添加对应类名
  const classnames = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled':disabled && btnType === 'link'
  })

  let ret = null
  if(btnType === 'link' && href){
    ret = (
      <a
        href={href}
        className={classnames}
        {...restProps}
      >{children}</a>
    )
  }else{
    ret = (
      <button
        type="button"
        className={classnames}
        disabled={disabled}
        {...restProps}
      >{children}</button>
    )
  }

  return ret
}
Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;