import Image from 'next/image';
import Link from 'next/link';
import styles from './tab.module.scss';
import {type PropsWithChildren, ReactElement, type ReactNode, useEffect, useRef, useState} from 'react';
import { motion } from 'framer-motion';
type TabItemType = {
	content: (params:any)=>ReactNode | string;
	title: string;
	id: number;
};

type TabTitleType = {
	title: string;
	current: number;
	id: number;
	onClick: () => void;
};

const TabTitle = ({title, onClick, id, current}: TabTitleType) => (<>
  <span className={`transition-colors duration-TRANSITION_DURATION select-none text-3xl mr-6 cursor-pointer ${id === current ? 'text-TEXT_MAIN dark:text-DARK_TEXT_MAIN' : 'text-REMARK_TEXT dark:text-DARK_REMARK_TEXT'}`} onClick={onClick}> {title} </span>
</>);

const Tab = ({
  tabItems,
}: PropsWithChildren<{tabItems: TabItemType[]}>) => {
  const [current, setCurrent] = useState(tabItems[0].id);
  let activeItem = tabItems.find(it => it.id === current);
  
  // last 用于记录上一个tab index,
  // let last = 0;
  const [last,setLast] = useState(0)
  const [toRight,setToRight] = useState(true)
  function handleClick(id: number,index:number) {
    setToRight(index > last)// 当前点击项索引大于上一个，就向右，否则向左
    setCurrent(id);
    activeItem = tabItems.find(it => it.id === current);
    // update last
    setLast(index)
  }
  
  return (<>
    {
      tabItems.map((tab,index) => (
        <TabTitle key={tab.id} current={current} id={tab.id} title={tab.title} onClick={() => {
          handleClick(tab.id,index);
        }} />
      ))
    }
    <div className='mt-6' key={activeItem?.id}>
      <motion.ul
        key={activeItem?.id}
        initial={{y:10,x:toRight ? 200 : -200,opacity:0 }}
        animate={{y:0,x:0,opacity:1}}
        transition={{ duration:.3,type:'spring',bounce: 0.25,damping: 20, }}
      >
        {activeItem?.content(toRight)}
      </motion.ul>
    </div>
  </>);
};

export default Tab;
