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


const TabTitle = ({ title, onClick }: { title: string, onClick: () => void }) => {
  return (<>
    <span className='text-3xl mr-6' onClick={onClick}> {title} </span>
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
        <TabTitle title={tab.title} onClick={() => handleClick(tab.id)} />
      ))
    }
    <div>
      {activeItem?.content}
    </div>
  </>)
};


export default Tab;
