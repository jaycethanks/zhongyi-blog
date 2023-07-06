import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';

import styles from './tab.module.scss';

import type { LinkProps } from "next/link";
declare const LinkProps: LinkProps & {
  before: string;
};

type TabItemType = {
  content: ReactNode | string
  title: string
  id: number
}


const TabTitle = ({ title, onClick, id, current }: { title: string, current: number, id: number, onClick: () => void }) => {
  return (<>
    <span className={`text-3xl mr-6 cursor-pointer ${id === current ? 'text-REMARK_TEXT dark:DARK_REMARK_TEXT' : 'text-TEXT_MAIN dark:DARK_TEXT_MAIN'}`} onClick={onClick}> {title} </span>
  </>)
}


const Tab = ({
  tabItems,
}: PropsWithChildren<{ current: number, tabItems: TabItemType[] }>) => {
  const [current, setCurrent] = useState(tabItems[0].id);
  let activeItem = tabItems.find(it => it.id === current)
  function handleClick(id: number) {
    setCurrent(id)
    activeItem = tabItems.find(it => it.id === current)
  }
  return (<>
    {
      tabItems.map(tab => (
        <TabTitle key={tab.id} current={current} id={tab.id} title={tab.title} onClick={() => handleClick(tab.id)} />
      ))
    }
    <div>
      <motion.div
        key={activeItem?.id}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        {activeItem?.content}
      </motion.div>
    </div>
  </>)
};


export default Tab;
