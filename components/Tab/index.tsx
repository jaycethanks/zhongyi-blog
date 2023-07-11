import Image from 'next/image';
import Link from 'next/link';
import RecentPost from '@/components/Post/RecentPost/RecentPost';
import styles from './tab.module.scss';
import {type PropsWithChildren, ReactElement, type ReactNode, useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
const mock = [
	{
		createdAt: '2023-07-10T03:10:14.747Z',
		title: 'ad minima maxime',
		assumeCost: '4',
		id: '1',
	},
	{
		createdAt: '2023-07-10T05:06:40.000Z',
		title: 'minus rerum animi',
		assumeCost: '2',
		id: '2',
	},
	{
		createdAt: '2023-07-09T09:44:56.848Z',
		title: 'sit molestiae inventore',
		assumeCost: '5',
		id: '3',
	},
	{
		createdAt: '2023-07-09T14:31:14.301Z',
		title: 'qui nostrum fuga',
		assumeCost: '9',
		id: '4',
	},
	{
		createdAt: '2023-07-10T04:56:08.120Z',
		title: 'laudantium similique quis',
		assumeCost: '5',
		id: '5',
	},
	{
		createdAt: '2023-07-10T06:12:09.311Z',
		title: 'tenetur eveniet quam',
		assumeCost: '1',
		id: '6',
	},
	{
		createdAt: '2023-07-10T00:47:46.345Z',
		title: 'expedita magnam quisquam',
		assumeCost: '2',
		id: '7',
	},
	{
		createdAt: '2023-07-10T06:44:50.691Z',
		title: 'cum sed consequatur',
		assumeCost: '6',
		id: '8',
	},
	{
		createdAt: '2023-07-09T16:32:33.877Z',
		title: 'ipsam voluptates eligendi',
		assumeCost: '7',
		id: '9',
	},
	{
		createdAt: '2023-07-09T23:37:13.539Z',
		title: 'nam rem nemo',
		assumeCost: '1',
		id: '10',
	},
];
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
	<span className={`select-none text-3xl mr-6 cursor-pointer ${id === current ? 'text-TEXT_MAIN dark:text-DARK_TEXT_MAIN' : 'text-REMARK_TEXT dark:text-DARK_REMARK_TEXT'}`} onClick={onClick}> {title} </span>
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
				{
					<RecentPost recentPosts={mock}></RecentPost>
				}
				{activeItem?.content}
			</motion.div>
		</div>
	</>);
};

export default Tab;
