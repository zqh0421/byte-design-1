import React, { useEffect, useRef, useState } from 'react';

import './style.scss';

export type TabsType = 'line' | 'card' | 'editable-card';
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
export interface ItemProps {
  key: string;
  label: string;
  children: string;
}

export interface TabsProps {
  rootClassName?: string;
  type?: TabsType;
  // size?: SizeType;
  hideAdd?: boolean;
  centered?: boolean;
  addIcon?: React.ReactNode;
  onEdit?: (
    e: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => void;
  children?: React.ReactNode;
  items?: ItemProps[];
}

function Tabs({
  // type,
  // className,
  // rootClassName,
  // size: propSize,
  // onEdit,
  // hideAdd,
  // centered,
  // addIcon,
  // popupClassName,
  // children,
  items = [],
}: // animated,
// ...props
TabsProps) {
  const [tabs, setTabs] = useState(items);
  const [selected, setSelected] = useState(0);
  const [counter, setCounter] = useState(items.length + 1);

  const animationBar = useRef(null);
  const tabsRef = useRef(null);

  function getMap() {
    if (!tabsRef.current) {
      // Initialize the Map on first usage.
      tabsRef.current = new Map();
    }
    return tabsRef.current;
  }

  function moveBar(index: number): void {
    const itemRect = getMap().get(index).getBoundingClientRect();
    if (animationBar.current !== null) {
      animationBar.current.style.left = itemRect.x + 'px';
      animationBar.current.style.width = itemRect.width + 'px';
      animationBar.current.style.height = itemRect.height - 1 + 'px';
    }
  }

  function handleClick(index: number) {
    setSelected(index);
  }

  function addTab(): void {
    const index = counter;
    setCounter(counter + 1);
    console.log(index);
    const newTab = {
      key: index.toString(),
      label: `Tab ${index}`,
      children: `Content of Tab Pane ${index}`,
    };
    setTabs(tabs.concat(newTab));
  }
  // TODO: add remove tabs functionality
  // function removeTab (index: number): void {
  //   setTabs(prev => {
  //     prev.splice(index, 1)
  //     return prev
  //   })
  // }

  useEffect(() => {
    moveBar(selected);
  }, [selected]);

  useEffect(() => {
    if (tabs) setSelected(tabs.length - 1);
  }, [tabs]);

  return (
    <>
      <div className="tab-container">
        <div>
          <div className="tab-nav">
            <div
              ref={animationBar}
              className="tab-animation-bar absolute border-b-2 border-blue-700 transition-all ease-in-out"
            ></div>
            {tabs?.map((item, index) => {
              const tabColor =
                index === selected ? 'text-yellow-200' : 'text-white';
              return (
                <div
                  key={item.key}
                  className="nav-key-container flex flex-row shrink-0"
                >
                  <div
                    className={`nav-key border cursor-pointer p-1 bg-blue-300 ${tabColor} rounded-t-md shrink-0 shadow-lg hover:bg-blue-500 transition-colors `}
                    onClick={() => {
                      handleClick(index);
                    }}
                    ref={(node) => {
                      const map = getMap();
                      if (map === null) return;
                      if (node !== null) {
                        map.set(index, node);
                      } else {
                        map.delete(index);
                      }
                    }}
                  >
                    {item.label}
                  </div>
                  {/* <button className='rounded-r-full p-0 w-8 h-8 m-0 hidden' onClick={() => { removeTab(index) }}> x </button> */}
                  {/* TODO: add remove tab functionality */}
                </div>
              );
            })}
            <button
              type="button"
              className="add-btn bg-white text-black p-0 rounded-full h-8 w-8"
              onClick={() => {
                addTab();
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="tab-content border-y border-grey-400 min-h-[400px] bg-green-200 text-black p-2">
          {tabs[selected]?.children ?? ''}
        </div>
      </div>
    </>
  );
}

export default Tabs;
