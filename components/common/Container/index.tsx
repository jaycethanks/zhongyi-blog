import type { PropsWithChildren, ReactNode } from 'react';

import Heading from '@/components/common/Heading';
import SpacerBar from '@/components/common/SpacerBar';

interface ContainerProps {
  className?: string
  title?: string | ReactNode
}
const Container = ({
  children,
  className,
  title,
}: PropsWithChildren & ContainerProps) => (
  <div
    className={`container mx-auto max-w-[50em] p-8 md:py-4 md:px-4 xl:w-[80%] ${className ?? ''}`}
  >
    <Heading level={1} className={'font-extrabold'}>
      {title}
    </Heading>
    <SpacerBar gap={6} />
    {children}
  </div>
);

export default Container;
