import Image from 'next/image';
import { ChangeEvent, ChangeEventHandler, PropsWithChildren, ReactElement, useState } from 'react';

import sun from '@/components/Icons/animateIcon/sun.png';

type PopoverProps = {
  triggerBtn: ReactElement;
};
const Popover: React.FC<PropsWithChildren & PopoverProps> = ({
  children,
  triggerBtn,
}) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="relative">
      <label htmlFor="trigger" className="flex">
        {triggerBtn}
        <input
          type="checkbox"
          id="trigger"
          className="inline-block"
          onChange={handleChange}
        />
      </label>
      {checked && (
        <>
          <div className="absolute right-1 top-3.5   h-1.5 w-1.5 rotate-45  bg-slate-300"></div>
          <div className="absolute -right-1.5 top-4  gap-2 bg-slate-300 p-2">
            {/* {children} */}
            <Image src={sun} className="inline-block h-6 w-6" alt="" />
            <Image src={sun} className="inline-block h-6 w-6" alt="" />
            <Image src={sun} className="inline-block h-6 w-6" alt="" />
            <Image src={sun} className="inline-block h-6 w-6" alt="" />
            <Image src={sun} className="inline-block h-6 w-6" alt="" />
          </div>
        </>
      )}
    </div>
  );
};
export default Popover;
