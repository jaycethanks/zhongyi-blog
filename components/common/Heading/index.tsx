import { PropsWithChildren } from "react";

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
}
export default ({ level, children }: PropsWithChildren<HeadingLevel>) => {
  return (
    <p className={`${fontSize[level]} font-medium leading-snug text-inherit`}>
      {children}
    </p>
  );
};
