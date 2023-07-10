import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
	type PropsWithChildren, ReactElement, type ReactNode, type, useEffect, useRef, useState,
} from 'react';

import styles from './tab.module.scss';

import type {LinkProps} from 'next/link';

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
	<span className={`select-none text-3xl mr-6 cursor-pointer ${id === current ? 'text-REMARK_TEXT dark:DARK_REMARK_TEXT' : 'text-TEXT_MAIN dark:DARK_TEXT_MAIN'}`} onClick={onClick}> {title} </span>
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
		<div>
			<motion.div
				key={activeItem?.id}
				initial={{y: 50}}
				animate={{y: 0}}
			>
				{activeItem?.content}
			</motion.div>
		</div>
	</>);
};

export default Tab;
