import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { isMobileDevice } from '@/utils/isMobile';

interface RecentPostsPropsType {
  recentPosts: PostType[]
  handleLoadMore?: () => void
  toRight: boolean
}

interface PostRecordProps {
  key: string
  post: PostType
}

const PostRecord: React.FC<PostRecordProps> = ({ post }) => {
  const { title, createdAt, assumeCost } = post;
  return (
    <>
      <p className="my-4 cursor-pointer font-mono text-xl text-REMARK_TEXT transition-colors duration-TRANSITION_DURATION hover:text-TEXT_MAIN dark:text-DARK_REMARK_TEXT hover:dark:text-DARK_TEXT_MAIN">
        {title}{' '}
        <span className="text-sm hover:opacity-75">
          {createdAt} {assumeCost}
        </span>
      </p>
    </>
  );
};

export default function RecentPost({ recentPosts, toRight, handleLoadMore }: StandardProps & RecentPostsPropsType) {
  const isMobile = isMobileDevice(navigator);

  return (
    <>
      <main className="recent-posts">
        {recentPosts.map((post, index) => {
          const { id } = post;
          const motionProps: HTMLMotionProps<'li'> = isMobile
            ? {}
            : {
                initial: { y: 50, x: toRight ? 100 : -100, opacity: 0 },
                animate: { y: 0, x: 0, opacity: 1 },
                transition: { delay: index * 0.02, bounce: 0.75, damping: 20 },
              };
          return (
            <motion.li className="list-none" key={id} {...motionProps}>
              <PostRecord key={id} post={post}></PostRecord>
            </motion.li>
          );
        })}
        {handleLoadMore && <button onClick={handleLoadMore}>Loading More</button>}
      </main>
    </>
  );
}
