import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import isMobileDevice from 'is-mobile';
import dayjs from 'dayjs';
import type { RecentPostInterface } from '@/apis/QueryList';

interface RecentPostsPropsType {
  recentPosts: RecentPostInterface[] | undefined
  toRight: boolean
}

interface PostRecordProps {
  key: string
  post: RecentPostInterface
}

const PostRecord: React.FC<PostRecordProps> = ({ post }) => {
  const { title, createdAt } = post;
  return (
    <>
      <p className="flex items-start justify-between gap-4  sm:block my-4 cursor-pointer font-mono text-base sm:text-xl text-REMARK_TEXT transition-colors duration-TRANSITION_DURATION hover:text-TEXT_MAIN dark:text-DARK_REMARK_TEXT hover:dark:text-DARK_TEXT_MAIN">
        {title}{' '}
        <span className="shrink-0 text-sm hover:opacity-75">
          {dayjs(createdAt).format('YYYY/MM/DD')}
        </span>
      </p>
    </>
  );
};

export default function RecentPost({ recentPosts, toRight }: StandardProps & RecentPostsPropsType) {
  const isMobile = isMobileDevice();

  return (
    <>
      <main className="recent-posts">
          {(recentPosts || []).map((post, index) => {
            const { artid } = post;
            const motionProps: HTMLMotionProps<'li'> = isMobile
              ? {}
              : {
                  initial: { y: 50, x: toRight ? 100 : -100, opacity: 0 },
                  animate: { y: 0, x: 0, opacity: 1 },
                  transition: { delay: index * 0.02, bounce: 0.75, damping: 20 },
                };
            return (
            <motion.li className="list-none" key={artid} {...motionProps}>
              <PostRecord key={artid} post={post}></PostRecord>
            </motion.li>
            );
          })}

      </main>
    </>
  );
}
