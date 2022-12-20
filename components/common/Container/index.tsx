import { PropsWithChildren } from 'react';

type ContainerProps = {
  className?: string;
};
export default ({
  children,
  className,
}: PropsWithChildren & ContainerProps) => {
  return (
    <div
      className={`container mx-auto max-w-[80rem] p-2 md:py-4 md:px-4 xl:w-[70%] ${className}`}
    >
      {children}
    </div>
  );
};
