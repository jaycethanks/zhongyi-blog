import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import isMobileDevice from 'is-mobile';
import { useRouter } from 'next/router';
import type { CategoryInterface } from '@/apis/QueryList';
import type { StandardProps } from '@/types';

interface CategoriesType {
  categories: CategoryInterface[] | undefined
}

interface CategoryItemProps {
  key: string
  category: CategoryInterface
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { name, relateCount, description, catid } = category;
  const router = useRouter();
  const handleClick = () => {
    router.push({ pathname: `/posts/${catid}`, query: { name } });
  };
  return (
    <div onClick={handleClick} className="flex justify-between items-center cursor-pointer
    mb-4 p-4 rounded-lg
    text-REMARK_TEXT
    dark:text-DARK_REMARK_TEXT

    hover:text-TEXT_MAIN
    dark:hover:text-DARK_TEXT_MAIN

    bg-BG_MAIN_DEEP
    hover:brightness-95

    dark:bg-DARK_BG_MAIN_DEEP
    dark:hover:brightness-95
    ">
      <div className="left">
        <p className=" font-mono text-xl">
          <span>{name} </span>
        </p>
        <p className="my-0  font-mono text-sm">{description}</p>
      </div>
      <div className="right">
        <span className="text-sm">{relateCount} </span>
      </div>
    </div>
  );
};

const Categories = ({ categories }: StandardProps & CategoriesType) => {
  const isMobile = isMobileDevice();
  if (!categories || !categories.length) return <>No Info</>;
  return (
    <>
      <main className="recent-posts">
        {(categories || []).map((category, index) => {
          const { catid } = category;
          const motionProps: HTMLMotionProps<'li'> = {
            initial: { y: 10 },
            animate: { y: 0 },
            transition: { delay: index * 0.06 },
          };
          return (
            <motion.li className="list-none" key={catid} {...(isMobile ? {} : motionProps)}>
              <CategoryItem key={catid} category={category}></CategoryItem>
            </motion.li>
          );
        })}
      </main>
    </>
  );
};

export default Categories;
