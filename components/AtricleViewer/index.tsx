import {PropsWithChildren} from 'react';

import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import RightArrowOutlined from '@/components/Icons/RightArrowOutlined';
import Fonts from '@/fonts';
import {Editor, Viewer} from '@bytemd/react';

import style from './juejin.module.scss';

type AtricleCardProps = {
	content: string;
	title: string;
	description: string;
};
const AtricleViewer: React.FC<AtricleCardProps & StandardProps> = ({
	className,
	content,
	title,
	description,
	...rest
}) => (
	<div
		{...rest}
		className={`${className} ${style['markdown-body']}  relative  overflow-hidden  bg-BG_MAIN_DEEP sm:p-6 sm:pt-12 p-2 pt-4 transition-colors duration-TRANSITION_DURATION dark:bg-DARK_BG_MAIN_DEEP`}
	>
		{/* 阅读更多操作文本 */}
		<div className='absolute inset-0 bottom-[unset] flex select-none justify-end'>
			<Button className='p-2'>
          阅读全文{' '}
				<RightArrowOutlined className='fill-TEXT_MAIN dark:fill-DARK_TEXT_MAIN' />
			</Button>
		</div>
		<p
			className={`${Fonts.SourceHanSerifCN} text-xl sm:text-3xl font-semibold leading-10 tracking-wide text-TEXT_MAIN transition-colors duration-TRANSITION_DURATION  dark:text-DARK_TEXT_MAIN`}
		>
			{title}
		</p>
		<p className={`${Fonts.KaiTi}  font-thin text-base`}>
        —— {description}
		</p>

		<div className='hidden sm:block'>
			<Viewer value={content}></Viewer>
		</div>

		{/* 遮罩 */}
		<div className='hidden sm:block absolute inset-0 top-[unset] h-12  bg-gradient-to-b from-transparent to-BG_MAIN_DEEP transition-colors duration-TRANSITION_DURATION dark:to-DARK_BG_MAIN_DEEP'></div>
	</div>
);

export default AtricleViewer;
