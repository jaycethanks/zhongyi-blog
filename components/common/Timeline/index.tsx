import { PropsWithChildren } from 'react';

import styles from './timeline.module.scss';

console.log("[styles]: ", styles);
const Timeline: React.FC<PropsWithChildren> = ({ children }) => {
  return <ul>{children}</ul>;
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
        >
          {}
        </div>
        <div
          className={`${styles["timeline-head"]} bg-slate-200 dark:bg-slate-700`}
        >
          {}
        </div>
        <div className={`${styles["timeline-content"]}`}>{children}</div>
      </li>
    </>
  );
  return <div>{children}</div>;
};

export { Timeline, TimelineItem };
