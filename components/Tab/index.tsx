import { type PropsWithChildren, type ReactNode, useState } from 'react';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import isMobileDevice from 'is-mobile';

interface TabItemType {
  content: (params: any) => ReactNode | string
  title: string
  id: number
}

interface TabTitleType {
  title: string
  current: number
  id: number
  onClick: () => void
}

const TabTitle = ({ title, onClick, id, current }: TabTitleType) => (
  <>
    <span
      className={`mr-6 cursor-pointer select-none whitespace-nowrap text-3xl transition-colors duration-TRANSITION_DURATION ${
        id === current ? 'text-TEXT_MAIN dark:text-DARK_TEXT_MAIN' : 'text-REMARK_TEXT dark:text-DARK_REMARK_TEXT'
      }`}
      onClick={onClick}
    >
      {' '}
      {title}{' '}
    </span>
  </>
);

const Tab = ({ tabItems }: PropsWithChildren<{ tabItems: TabItemType[] }>) => {
  const [current, setCurrent] = useState(tabItems[0]?.id);
  let activeItem = tabItems.find(it => it.id === current);

  // last 用于记录上一个tab index,
  // let last = 0;
  const [last, setLast] = useState(0);
  const [toRight, setToRight] = useState(true);
  function handleClick(id: number, index: number) {
    setToRight(index > last); // 当前点击项索引大于上一个，就向右，否则向左
    setCurrent(id);
    activeItem = tabItems.find(it => it.id === current);
    // update last
    setLast(index);
  }

  const isMobile = isMobileDevice();

  const motionUlProps: HTMLMotionProps<'ul'> = isMobile
    ? {}
    : {
        initial: { y: 10, x: toRight ? 200 : -200, opacity: 0 },
        animate: { y: 0, x: 0, opacity: 1 },
        transition: {
          duration: 0.3,
          type: 'spring',
          bounce: 0.25,
          damping: 20,
        },
      };
  return (
    <>
      <div className="tab-titles flex overflow-x-auto">
        {/* tab titles */}
        {tabItems.map((tab, index) => {
          const motionlLiProps: HTMLMotionProps<'li'> = isMobile
            ? {}
            : {
                initial: { x: 20, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { delay: index * 0.07, bounce: 0.25 },
              };
          return (
            <motion.li className="list-none" key={tab.id} {...motionlLiProps}>
              <TabTitle
                key={tab.id}
                current={current}
                id={tab.id}
                title={tab.title}
                onClick={() => {
                  handleClick(tab.id, index);
                }}
              />
            </motion.li>
          );
        })}
      </div>

      {/* tabcontent */}
      <div className="mt-6" key={activeItem?.id}>
        <motion.ul key={activeItem?.id} {...motionUlProps}>
          {activeItem?.content(toRight)}
        </motion.ul>
      </div>
    </>
  );
};

export default Tab;
