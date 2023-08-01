import type { PropsWithChildren } from 'react';

enum GAP {
  'h-28' = 28,
  'h-27' = 27,
  'h-26' = 26,
  'h-25' = 25,
  'h-24' = 24,
  'h-23' = 23,
  'h-22' = 22,
  'h-21' = 21,
  'h-20' = 20,
  'h-19' = 19,
  'h-18' = 18,
  'h-17' = 17,
  'h-16' = 16,
  'h-15' = 15,
  'h-14' = 14,
  'h-13' = 13,
  'h-12' = 12,
  'h-11' = 11,
  'h-10' = 10,
  'h-9' = 9,
  'h-8' = 8,
  'h-7' = 7,
  'h-6' = 6,
  'h-5' = 5,
  'h-4' = 4,
  'h-3' = 3,
  'h-2' = 2,
  'h-1' = 1,
}
interface GapProp {
  gap: number
}

export default ({ gap }: PropsWithChildren<GapProp>) => {
  if (gap < 1 || gap > 28) {
    throw new Error('gap prop for 「SpacerBar」 must be in `1 ~ 28`');
  }

  return <div className={`spacer-bar w-full flex-shrink-0  ${GAP[gap]}`}></div>;
};
