import style from './RecentPost.module.scss';
type PostType = {
	id: string;
	title: string;
	createdAt: string;
	assumeCost: string;
};

type RecentPostsPropsType = {
	recentPosts: PostType[];
};

type PostRecordProps = {
	key: string;
	post: PostType;
};

const PostRecord: React.FC<PostRecordProps> = ({post, ...props}) => {
	const {id, title, createdAt, assumeCost} = post;
	return (<>
		<p className='text-lg font-mono my-4'>{title} <span className='text-sm'>{createdAt} {assumeCost}</span></p>
	</>);
};

export default function RecentPost({recentPosts}: StandardProps & RecentPostsPropsType) {
	return (<>
		<main className='recent-posts'>
			{
				recentPosts.map(post => {
					const {id} = post;
					return (<PostRecord key={id} post={post}></PostRecord>);
				})
			}
		</main>
	</>);
}

