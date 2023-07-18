import { useIsMobile } from '@/utils/useIsMobile';
import {motion} from 'framer-motion';

type CategoryItemType = {
	id: string;
	name: string;
	postCount: number;
};

type CategoriesType = {
	categories: CategoryItemType[];
};

type CategoryItemProps = {
	key: string;
	category: CategoryItemType;
};

const CategoryItem: React.FC<CategoryItemProps> = ({category}) => {
	const { name, postCount} = category;
	return (<>
		<p className='text-xl text-REMARK_TEXT dark:text-DARK_REMARK_TEXT hover:text-TEXT_MAIN hover:dark:text-DARK_TEXT_MAIN font-mono my-4 cursor-pointer'>{name} <span className='text-sm hover:opacity-75'>{postCount} </span></p>
	</>);
};

const Categories = ({categories}: StandardProps & CategoriesType)=> {
	const isMobile = true
	return (<>
		<main className='recent-posts'>
			{
				categories.map((category, index) => {
					const {id} = category;
					return (
						<motion.li
							className='list-none'
							key={id}
							initial={{y: 10, opacity: 0}}
							animate={isMobile ? false : {y: 0, opacity: 1}}
							transition={{delay: index * 0.1}}
						>
							<CategoryItem key={id} category={category}></CategoryItem>
						</motion.li>
					);
				})
			}
		</main>
	</>);
}


export default Categories