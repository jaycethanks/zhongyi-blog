import type { StandardProps } from '@/types';
import CopyFullfilled from '@/components/Icons/CopyFullfilled';

export default function CodeCopyBtn({ children }: StandardProps) {
  const handleClick = () => {
    navigator.clipboard.writeText(children[0].props.children[0]);
  };

  return (
    <button
      onClick={handleClick}
      className="absolute right-0 cursor-pointer p-4 text-gray-500 hover:text-gray-400 active:text-gray-600"
    >
      <CopyFullfilled className="" />
    </button>
  );
}
