import { PropsWithChildren } from 'react';

import Heading from '@/components/common/Heading';
import SpacerBar from '@/components/common/SpacerBar';
import { Timeline, TimelineItem } from '@/components/common/Timeline';
import Fonts from '@/fonts';

import ArticleListItem from '../ArticleListItem';
import styles from './archivelist.module.scss';

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
const Block: React.FC<PropsWithChildren & StandardProps> = ({
  children,
  className,
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
const ArchiveList = () => {
  return (
    <div>
      <SpacerBar gap={16} />
      <Block>
        <Heading
          level={2}
          className={`${Fonts.SourceHanSerifCN} font-semibold`}
        >
          最近发布
        </Heading>
        <Timeline title={<Heading level={4}>12月</Heading>}>
          {list.map((it) => {
            return (
              <TimelineItem key={it.id} label={it.label}>
                <ArticleListItem article={it.article} />
              </TimelineItem>
            );
          })}
        </Timeline>
        <Timeline
          title={
            <Heading className={Fonts.SourceHanSerifCN} level={4}>
              10月
            </Heading>
          }
        >
          {list.map((it) => {
            return (
              <TimelineItem key={it.id} label={it.label}>
                <ArticleListItem article={it.article} />
              </TimelineItem>
            );
          })}
        </Timeline>
      </Block>

      <SpacerBar gap={16} />
      <Block>
        <Heading
          level={2}
          className={`${Fonts.SourceHanSerifCN} font-semibold`}
        >
          历史文章
        </Heading>
        <Timeline
          head={<Heading level={3}>2022年</Heading>}
          title={<Heading level={4}>08月</Heading>}
        >
          {list.map((it) => {
            return (
              <TimelineItem key={it.id} label={it.label}>
                <ArticleListItem article={it.article} />
              </TimelineItem>
            );
          })}
        </Timeline>
        <Timeline title={<Heading level={4}>07月</Heading>}>
          {list.map((it) => {
            return (
              <TimelineItem key={it.id} label={it.label}>
                <ArticleListItem article={it.article} />
              </TimelineItem>
            );
          })}
        </Timeline>
      </Block>
    </div>
  );
};
export default ArchiveList;
