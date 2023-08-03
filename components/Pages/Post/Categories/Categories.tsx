import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import isMobileDevice from 'is-mobile';
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
  const { name, relateCount, description } = category;
  return (
    <div className="flex justify-between items-center mb-4 p-4 rounded-lg text-REMARK_TEXT  dark:text-DARK_REMARK_TEXT hover:bg-BG_MAIN_DEEP/40 bg-BG_MAIN_DEEP/20 hover:dark:text-DARK_TEXT_MAIN hover:text-TEXT_MAIN">
      <div className="left">
        <p className="cursor-pointer font-mono text-xl">
          <span>{name} </span>
        </p>
        <p className="my-0 cursor-pointer font-mono text-sm">{description}</p>
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
            initial: { y: 10, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: index * 0.1 },
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
