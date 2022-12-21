import { PropsWithChildren } from 'react';

import Heading from '@/components/common/Heading';
import SpacerBar from '@/components/common/SpacerBar';
import Fonts from '@/fonts';

type ContainerProps = {
  className?: string;
  title?: string;
};
export default ({
  children,
  className,
  title,
}: PropsWithChildren & ContainerProps) => {
  return (
    <div
      className={`container mx-auto max-w-[80rem] p-2 md:py-4 md:px-4 xl:w-[70%] ${className}`}
    >
      <Heading level={1} className={`font-extrabold ${Fonts.SourceHanSerifCN}`}>
        {title}
      </Heading>
      <SpacerBar gap={6} />
      {children}
    </div>
  );
};
