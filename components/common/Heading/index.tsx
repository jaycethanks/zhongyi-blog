import { PropsWithChildren } from 'react';

enum fontSize {
  "text-base" = 6,
  "text-lg" = 5,
  "text-xl" = 4,
  "text-2xl" = 3,
  "text-[1.795rem]" = 2,
  "text-[1.986rem]" = 1,
}
interface HeadingLevel {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}
export default ({
  level,
  children,
  className,
}: PropsWithChildren<HeadingLevel>) => {
  return (
    <p
      className={`${fontSize[level]} font-medium leading-snug tracking-wide text-inherit`}
    >
      <span className={`${className}`}>{children}</span>
    </p>
  );
};
