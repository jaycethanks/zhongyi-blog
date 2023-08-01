import type { HTMLMotionProps } from 'framer-motion';

import { motion } from 'framer-motion'; // AnimatePresence 处理动画的消失状态
import isMobileDevice from 'is-mobile';
import dayjs from 'dayjs';
import Link from 'next/link';
import type { RecentPostInterface } from '@/apis/QueryList';
import SimplestLoading from '@/components/Loading/SimplestLoading';
import type { StandardProps } from '@/types';

interface RecentPostsPropsType {
  recentPosts: RecentPostInterface[] | undefined
  toRight: boolean
  title?: string
  enableLoadMore?: boolean
  handleLoad?: (title: string) => void
  loading?: boolean
}

interface PostRecordProps {
  key?: string
  post: RecentPostInterface
}

const PostRecord: React.FC<PostRecordProps> = ({ post }) => {
  const { title, createdAt, artid } = post;
  return (
    <>
      <p className="flex  items-start justify-between gap-4 sm:whitespace-nowrap sm:block my-4 cursor-pointer font-mono text-base sm:text-lg text-REMARK_TEXT transition-colors duration-TRANSITION_DURATION  dark:text-DARK_REMARK_TEXT ">
        <Link className='hover:text-TEXT_MAIN hover:dark:text-DARK_TEXT_MAIN' href={`/posts/${artid}`}>{title}</Link> <span className="shrink-0 text-sm ">{dayjs(createdAt).format('YYYY/MM/DD')}</span>
      </p>
    </>
  );
};

export default function RecentPost({
  recentPosts,
  toRight,
  title,
  enableLoadMore = false,
  handleLoad,
  loading = false,
}: StandardProps & RecentPostsPropsType) {
  const isMobile = isMobileDevice();

  return (
    <>
      <main className="recent-posts">
          <ul>
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
          </ul>

        <p className="font-mono text-base sm:text-xl text-REMARK_TEXT transition-colors duration-TRANSITION_DURATION hover:text-TEXT_MAIN dark:text-DARK_REMARK_TEXT hover:dark:text-DARK_TEXT_MAIN">
          {enableLoadMore && title && (
            <>{loading ? <SimplestLoading /> : <button onClick={() => handleLoad?.(title)}>加载更多</button>}</>
          )}
        </p>
      </main>
    </>
  );
}
