import { useState } from 'react';
import { StandardProps } from '@/types';
import CopyFullfilled from '@/components/Icons/CopyFullfilled';

export default function CodeCopyBtn({ children }: StandardProps) {
  const [copyOk, setCopyOk] = useState(false);

  const iconColor = copyOk ? '#0af20a' : '#ddd';
  const icon = copyOk ? 'fa-check-square' : 'fa-copy';

  const handleClick = (e) => {
    navigator.clipboard.writeText(children[0].props.children[0]);
    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
      <button onClick={handleClick} className='absolute right-0 cursor-pointer p-4 text-gray-500 hover:text-gray-400 active:text-gray-600'>
        <CopyFullfilled className="" />
      </button>
  );
}

