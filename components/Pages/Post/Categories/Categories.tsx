import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import isMobileDevice from 'is-mobile';
import type { CategoryInterface } from '@/apis/QueryList';

interface CategoriesType {
  categories: CategoryInterface[] | undefined
}

interface CategoryItemProps {
  key: string
  category: CategoryInterface
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { name, relateCount, catid, description } = category;
  return (
    <>
      <p className="mt-8 cursor-pointer font-mono text-xl text-REMARK_TEXT  dark:text-DARK_REMARK_TEXT ">
        <span className='hover:dark:text-DARK_TEXT_MAIN hover:text-TEXT_MAIN'>{name} </span>
        <span className="text-sm hover:opacity-75">{relateCount} </span>
      </p>
      <p className='my-0 cursor-pointer font-mono text-sm text-REMARK_TEXT  dark:text-DARK_REMARK_TEXT '>{description}</p>
    </>
  );
};

const Categories = ({ categories }: StandardProps & CategoriesType) => {
  const isMobile = isMobileDevice();
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
