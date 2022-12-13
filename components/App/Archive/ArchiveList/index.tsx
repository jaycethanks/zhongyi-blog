import Heading from '@/components/common/Heading';
import SpacerBar from '@/components/common/SpacerBar';
import { Timeline, TimelineItem } from '@/components/common/Timeline';

import styles from './archivelist.module.scss';

const list = [
  {
    id: "123",
    label: <Heading level={5}>12月13日</Heading>,
    content: <div className="">"母猪的产后护理"</div>,
  },
  {
    id: "3",
    label: <Heading level={5}>12月10日</Heading>,
    content: <div className="">"养猪致富经验"</div>,
  },
];

const ArchiveList = () => {
  return (
    <div>
      <SpacerBar gap={16} />
      <Heading level={1}>最近发布</Heading>
      <Heading level={3}>12月</Heading>
      <Timeline>
        {list.map((it) => {
          return (
            <TimelineItem key={it.id} label={it.label}>
              {it.content}
            </TimelineItem>
          );
        })}
      </Timeline>
      <Heading level={3}>10月</Heading>
      <Timeline>
        {list.map((it) => {
          return (
            <TimelineItem key={it.id} label={it.label}>
              {it.content}
            </TimelineItem>
          );
        })}
      </Timeline>
      <SpacerBar gap={16} />
      <Heading level={1}>历史文章</Heading>
      <Heading level={2}>2022年</Heading>
      <Heading level={3}>08月</Heading>
      <Timeline>
        {list.map((it) => {
          return (
            <TimelineItem key={it.id} label={it.label}>
              {it.content}
            </TimelineItem>
          );
        })}
      </Timeline>
      <Heading level={3}>07月</Heading>
      <Timeline>
        {list.map((it) => {
          return (
            <TimelineItem key={it.id} label={it.label}>
              {it.content}
            </TimelineItem>
          );
        })}
      </Timeline>
      <Heading level={2}>2021年</Heading>
      <Heading level={3}>12月</Heading>
      <Heading level={3}>11月</Heading>
    </div>
  );
};
export default ArchiveList;
