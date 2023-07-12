import Image from 'next/image';
import Link from 'next/link';
import styles from './tab.module.scss';
import {type PropsWithChildren, ReactElement, type ReactNode, useEffect, useRef, useState} from 'react';
type TabItemType = {
	content: ReactNode | string;
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
  function handleClick(id: number) {
    setCurrent(id);
    activeItem = tabItems.find(it => it.id === current);
  }

  return (<>
    {
      tabItems.map(tab => (
        <TabTitle key={tab.id} current={current} id={tab.id} title={tab.title} onClick={() => {
          handleClick(tab.id);
        }} />
      ))
    }
    <div className='mt-12' key={activeItem?.id}>
      {activeItem?.content}
    </div>
  </>);
};

export default Tab;
