import React,{Children, createContext, useContext, useState} from "react"
import Classnames from "classnames"
import './style.scss'
export interface MenuProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;

  defaultIndex?: string;
  mode?: 'vertical' | 'horizontal';
}

interface IMenuContext { // 要传递的内容
  index: string;
  mode: 'vertical' | 'horizontal';
  select?: (index: string)=>void; 
}
// 在组件外创建上下文，必须带默认值
export const MenuContext = createContext<IMenuContext>({index:'0', mode:'horizontal'})
const Menu:React.FC<MenuProps> = ({
  defaultIndex = '0',
  mode = 'horizontal',
  className,
  style,
  children,
}) => {
  const classnames = Classnames('menu', className, `menu-${mode}`)
  const [active, setActive] = useState(defaultIndex)
  const passedContext: IMenuContext = { // 要传递的内容
    index: active,
    mode: mode,
    select(index) {
      setActive(index)
    }
  }
  
  const renderChildren = Children.map(children , (child, index)=>{
    // 必须是FC实例
    // 使用断言限制泛型类型
    const childElement = child as React.FunctionComponentElement<MenuItemProps> 
    // 一个个拿到child，及他们的idx
    // 不能通过 childElement.props.index 改index，只能用clone的节点
    if (childElement.type.name === 'MenuItem'  || childElement.type.name === 'SubMenu') 
      return React.cloneElement(childElement, {index:index.toString()})
    else console.warn('Menu中有非MenuItem的标签')
  })

  return (
    <ul style={style} className={classnames}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren}
      </MenuContext.Provider>
    </ul>
  )
}

/* item */
interface BaseMenuItemProps {
  index?:string;
  disabled?: boolean;
}
export type MenuItemProps = Partial<BaseMenuItemProps & React.LiHTMLAttributes<HTMLElement>>
const MenuItem: React.FC<MenuItemProps> = ({
  className,
  children,
  style,
  index,
  disabled
})=>{
  const context = useContext(MenuContext)
  const handleClick = ()=>{ // 触发点击时，将父组件的idx改为当前的
    if (context.select && !disabled && typeof index === 'string') {
      context.select(index)
    }
  }
  const classnames = Classnames('menu-item', className, {
    'is-disabled':disabled,
    'is-active': context.index === index // 父组件选的idx和当前idx相等时设置高亮
  })
  return (
    <li style={style} className={classnames} onClick={handleClick}>
      {children}
    </li>
  )
}

/* sub-menu */
interface BaseSubMenuProps {
  index?: string;
  title?: string;
  disabled?: boolean;  // 缺少disabled样式
}
// 自定义属性+原生属性
export type SubMenuProps = Partial<BaseSubMenuProps & React.LiHTMLAttributes<HTMLElement>>

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  disabled,
  children,
  className
}) => {
  const context = useContext(MenuContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const classnames = Classnames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  })
  let handleHover = {}
  let _timer:any = null // 计时器要公有，不能放在闭包里
  let hover = (flag: boolean, delay = 300)=>{
    return ()=>{
      if (_timer) clearTimeout(_timer)
      _timer = setTimeout(()=>{
        setMenuOpen(flag)
      },delay)
    }
  }

  if (context.mode === 'horizontal') {
    handleHover = {
      onMouseEnter: hover(true, 100),
      onMouseLeave: hover(false)
    }
  }

  const handleClick = () => {
    if (context.select && !disabled && typeof index === 'string') {
      context.select(index)
    }
    if (context.mode === 'vertical') {
      return {
        onClick: setMenuOpen(!menuOpen)
      }
    }
  }
  const renderChildren = () => {
    const frag = Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.name === 'MenuItem') {
        return React.cloneElement(childElement, {index:`${index}-${i}`})
      } else {
        console.warn('SubMenu中有非MenuItem的标签')
      }
    })
    const fragClasses = Classnames("submenu", { 'menu-opened': menuOpen })
    return (
      <ul className={fragClasses}>
        {frag}
      </ul>
    )
  }
  return (
    <li className={classnames} {...handleHover} >
      <div className="submenu-title" onClick={handleClick}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}


export default Menu;
export {SubMenu, MenuItem};