import { PropsWithChildren } from 'react';

import Heading from '@/components/common/Heading';
import SpacerBar from '@/components/common/SpacerBar';
import { Timeline, TimelineItem } from '@/components/common/Timeline';
import Fonts from '@/fonts';
import styles from './archive.module.scss';
import PostList from "@/components/Post/RecentPost/RecentPost"
const list = [
  {
    id: "123",
    label: <span className="text-xs">12月13日</span>,
    article: {
      artid: "asldhaokahsgdiahsbdaisulhfa",
      title: "母猪的产后护理",
      description:
        "Ab quo non dicta qui quae consectetur et. Adipisci vel id et est impedit ipsa nostrum. Pariatur necessitatibus beatae placeat non similique molestiae eum totam.",
      createAt: "12月13日",
      liking: 32,
      comments: 3,
      read: 986,
    },
  },
  {
    id: "3",
    label: <span className="text-xs">12月06日</span>,
    article: {
      artid: "aslkdjbnlaishdiasbfkaslhdo",
      title: "养猪致富经验",
      description:
        "Ab quo non dicta qui quae consectetur et. Adipisci vel id et est impedit ipsa nostrum. Pariatur necessitatibus beatae placeat non similique molestiae eum totam.",
      createAt: "12月12日",
      liking: 32,
      comments: 3,
      read: 986,
    },
  },
];
// const Block: React.FC<PropsWithChildren & StandardProps> = ({
//   children,
//   className,
// }) => {
//   return <div className={`p-4 ${className}`}>{children}</div>;
// };
type PostType = {
	id: string;
	title: string;
	createdAt: string;
	assumeCost: string;
};

type ArchiveRecord = {
  id:number;
  year: number;
  list: PostType[];
}
const ArchiveContent:React.FC<ArchiveRecord & StandardProps> = ({id,year,list,...props}) => {
  return (
    <div>
        <Heading level={2} className={`font-semibold`}>
          {year}
        </Heading>
        {/* <SpacerBar gap={16} /> */}
        <PostList recentPosts={list}></PostList>
    </div>
  );
};
export default ArchiveContent;
