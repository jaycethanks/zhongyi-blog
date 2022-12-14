import { PropsWithChildren } from 'react';

import SpacerBar from '../SpacerBar';
import styles from './timeline.module.scss';

type TimelineProps = {
  title: any;
  head?: any;
};
const Timeline: React.FC<PropsWithChildren & TimelineProps> = ({
  children,
  head,
  title,
}) => {
  return (
    <>
      {head}
      <SpacerBar gap={4} />
      {title}
      <ul>{children}</ul>
    </>
  );
};

const TimelineItem: React.FC<PropsWithChildren & { label: any }> = ({
  label,
  children,
}) => {
  return (
    <>
      <li className={`${styles["timeline-item"]}`}>
        <div className={`${styles["timeline-label"]} text-sm sm:text-base`}>
          {label}
        </div>
        <div
          className={`${styles["timeline-tail"]} border-r border-slate-100 dark:border-slate-600`}
        ></div>
        <div
          className={`${styles["timeline-head"]} bg-slate-200 dark:bg-slate-700`}
        ></div>
        <div className={`${styles["timeline-content"]}`}>{children}</div>
      </li>
    </>
  );
};

export { Timeline, TimelineItem };
