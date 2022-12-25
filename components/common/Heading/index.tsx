import { PropsWithChildren } from 'react';

enum fontSize {
  "text-base " = 6,
  "text-lg" = 5,
  "text-xl" = 4,
  "text-2xl" = 3,
  "text-[1.795rem]" = 2,
  "text-[1.986rem]" = 1,
}
type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  rightSlot?: any;
} & StandardProps;

const Heading: React.FC<PropsWithChildren & HeadingProps> = ({
  level,
  children,
  className,
  rightSlot,
}) => {
  return (
    <p
      className={`${fontSize[level]} flex items-center justify-between font-medium leading-snug  tracking-wide text-inherit`}
    >
      <span
        className={`select-none text-TEXT_MAIN dark:text-DARK_TEXT_MAIN ${className} transition-colors duration-TRANSITION_DURATION`}
      >
        {children}
      </span>
      {rightSlot && <div>{rightSlot}</div>}
    </p>
  );
};

export default Heading;
