import { PropsWithChildren } from 'react';

import SpacerBar from '../SpacerBar';
import styles from './timeline.module.scss';

type TimelineProps = {
  title: any;
  head?: any;
};
const Timeline: React.FC<PropsWithChildren & TimelineProps & StandardProps> = ({
  children,
  head,
  title,
  className,
}) => {
  return (
    <div className={`${className}`}>
      {head}
      <SpacerBar gap={4} />
      {title}
      <ul>{children}</ul>
    </div>
  );
};

const TimelineItem: React.FC<
  PropsWithChildren & StandardProps & { label: any }
> = ({ label, children, className }) => {
  return (
    <>
      <li className={`${styles["timeline-item"]} ${className}`}>
        <div className={`${styles["timeline-label"]} text-sm sm:text-base`}>
          {label}
        </div>
        <div
          className={`${styles["timeline-tail"]} border-r  border-DIVIDER_LINE transition-colors duration-TRANSITION_DURATION dark:border-DARK_DIVIDER_LINE`}
        ></div>
        <div
          className={`${styles["timeline-head"]} bg-DIVIDER_LINE transition-colors duration-TRANSITION_DURATION dark:bg-DARK_DIVIDER_LINE`}
        ></div>
        <div className={`${styles["timeline-content"]}`}>{children}</div>
      </li>
    </>
  );
};

export { Timeline, TimelineItem };
