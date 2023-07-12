import style from './RecentPost.module.scss';
import {motion} from 'framer-motion';

type PostType = {
	id: string;
	title: string;
	createdAt: string;
	assumeCost: string;
};

type RecentPostsPropsType = {
	recentPosts: PostType[];
	handleLoadMore?:()=>void,
};

type PostRecordProps = {
	key: string;
	post: PostType;
};

const PostRecord: React.FC<PostRecordProps> = ({post, ...props}) => {
	const {id, title, createdAt, assumeCost} = post;
	return (<>
		<p className='text-xl text-REMARK_TEXT dark:text-DARK_REMARK_TEXT hover:text-TEXT_MAIN hover:dark:text-DARK_TEXT_MAIN font-mono my-4 cursor-pointer'>{title} <span className='text-sm hover:opacity-75'>{createdAt} {assumeCost}</span></p>
	</>);
};

export default function RecentPost({recentPosts,handleLoadMore}: StandardProps & RecentPostsPropsType) {
	return (<>
		<main className='recent-posts'>
			{
				recentPosts.map((post, index) => {
					const {id} = post;
					return (
						<motion.li
							className='list-none'
							key={id}
							initial={{y: 10, opacity: 0}}
							animate={{y: 0, opacity: 1}}
							transition={{delay: index * 0.1}}
						>
							<PostRecord key={id} post={post}></PostRecord>
						</motion.li>
					);
				})
			}
			{
				handleLoadMore && <button onClick={handleLoadMore}>Loading More</button>
			}
			
			
		</main>
	</>);
}

