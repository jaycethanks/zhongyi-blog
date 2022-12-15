import { PropsWithChildren } from 'react';

const Popover: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute right-0 top-2 h-4 w-20 border border-red-700 bg-red-400"></div>
    </div>
  );
};
export default Popover;
