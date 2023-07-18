import { useIsMobile } from '@/utils/useIsMobile';
import {motion} from 'framer-motion';


type RecentPostsPropsType = {
	recentPosts: PostType[];
	handleLoadMore?:()=>void,
	toRight:Boolean
};

type PostRecordProps = {
	key: string;
	post: PostType;
};

const PostRecord: React.FC<PostRecordProps> = ({post}) => {
	const {title, createdAt, assumeCost} = post;
	return (<>
		<p className='transition-colors duration-TRANSITION_DURATION text-xl text-REMARK_TEXT dark:text-DARK_REMARK_TEXT hover:text-TEXT_MAIN hover:dark:text-DARK_TEXT_MAIN font-mono my-4 cursor-pointer'>{title} <span className='text-sm hover:opacity-75'>{createdAt} {assumeCost}</span></p>
	</>);
};

export default function RecentPost({recentPosts,toRight,handleLoadMore}: StandardProps & RecentPostsPropsType) {
	const isMobile = true

	return (<>
		<main className='recent-posts'>
			{
				recentPosts.map((post, index) => {
					const {id} = post;

					return (
						
						<motion.li
							className='list-none'
							key={id}
							initial={{y: 50,x:toRight ? 100 : -100, opacity: 0}}
							animate={isMobile ? false : {y: 0,x:0, opacity: 1}}
							transition={{delay: index * 0.02,bounce: 0.75,damping: 20,}}
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

