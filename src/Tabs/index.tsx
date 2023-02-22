import { forceReRender } from '@storybook/react'
import React, { useEffect, useRef, useState } from 'react'
// import { Tabs as RCTabs, TabsProps as RCTabsProps } from 'rc-tabs'

export type TabsType = 'line' | 'card' | 'editable-card'
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left'
export interface ItemProps {
  key: string
  label: string
  children: string
}

export interface TabsProps {
  rootClassName?: string
  type?: TabsType
  size?: SizeType
  hideAdd?: boolean
  centered?: boolean
  addIcon?: React.ReactNode
  onEdit?: (
    e: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => void
  children?: React.ReactNode
  items?: ItemProps[]
}

function Tabs ({
  // type,
  // className,
  // rootClassName,
  // size: propSize,
  // onEdit,
  // hideAdd,
  // centered,
  // addIcon,
  // popupClassName,
  children,
  items,
  animated,
  ...props
}: TabsProps) {
  const [tabs, setTabs] = useState(items)
  const [selected, setSelected] = useState(0)
  const [counter, setCounter] = useState(items.length + 1)

  const animationBar = useRef(null)
  const tabsRef = useRef(null)

  function getMap () {
    if (!tabsRef.current) {
      // Initialize the Map on first usage.
      tabsRef.current = new Map()
    }
    return tabsRef.current
  }

  function moveBar (index): void {
    const itemRect = getMap().get(index).getBoundingClientRect()
    animationBar.current.style.left = itemRect.x + 'px'
    animationBar.current.style.width = itemRect.width + 'px'
    animationBar.current.style.height = itemRect.height + 'px'
  }

  function handleClick (index) {
    setSelected(index)
  }

  function addTab (): void {
    const index = counter
    setCounter(counter + 1)
    console.log(index)
    const newTab = {
      key: index.toString(),
      label: `Tab ${index}`,
      children: `Content of Tab Pane ${index}`
    }
    setTabs(tabs.concat(newTab))
  }
  // TODO: add remove tabs functionality
  function removeTab (index: number): void {
    setTabs(prev => {
      prev.splice(index, 1)
      return prev
    })
  }

  useEffect(() => {
    moveBar(selected)
  }, [selected])

  return (
    <>
      <div className="max-w-[600px] justify-center shadow-md rounded-lg overflow-hidden border-gray-500 border">
        <div>
          <div className="flex flex-row bg-yellow-100 gap-4 px-1 pb-0">
            <div
              ref={animationBar}
              className="animation-bar absolute border-b-2 border-blue-700 transition-all ease-in-out"
            ></div>
            {tabs?.map((item, index) => {
              const tabColor =
                index === selected ? 'text-yellow-200' : 'text-white'
              return (
                <div key={item.key} className='flex flex-row shrink-0'>
                  <div
                    className={`border cursor-pointer p-1 bg-blue-300 ${tabColor} rounded-t-md shrink-0 shadow-lg hover:bg-blue-500 transition-colors `}
                    onClick={() => { handleClick(index) }}
                    ref={(node) => {
                      const map = getMap()
                      if (node != null) {
                        map.set(index, node)
                      } else {
                        map.delete(index)
                      }
                    }}
                  >
                    {item.label}
                  </div>
                  {/* <button className='rounded-r-full p-0 w-8 h-8 m-0 hidden' onClick={() => { removeTab(index) }}> x </button> */}
                  {/* TODO: add remove tab functionality */}
                </div>
              )
            })}
            <button
              className="bg-white text-black p-0 rounded-full h-8 w-8"
              onClick={() => { addTab() }}
            >
              +
            </button>
          </div>
        </div>
        <div className="border-y border-grey-400 min-h-[400px] bg-green-200 text-black p-2">
          {tabs[selected].children ?? ''}
        </div>
      </div>
    </>
  )
}

export default Tabs
