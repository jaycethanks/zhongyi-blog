import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { isMobileDevice } from '@/utils/isMobile';

interface CategoryItemType {
  id: string
  name: string
  postCount: number
}

interface CategoriesType {
  categories: CategoryItemType[]
}

interface CategoryItemProps {
  key: string
  category: CategoryItemType
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { name, postCount } = category;
  return (
    <>
      <p className="my-4 cursor-pointer font-mono text-xl text-REMARK_TEXT hover:text-TEXT_MAIN dark:text-DARK_REMARK_TEXT hover:dark:text-DARK_TEXT_MAIN">
        {name} <span className="text-sm hover:opacity-75">{postCount} </span>
      </p>
    </>
  );
};

const Categories = ({ categories }: StandardProps & CategoriesType) => {
  const isMobile = isMobileDevice(navigator);
  return (
    <>
      <main className="recent-posts">
        {categories.map((category, index) => {
          const { id } = category;
          const motionProps: HTMLMotionProps<'li'> = {
            initial: { y: 10, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: index * 0.1 },
          };
          return (
            <motion.li className="list-none" key={id} {...(isMobile ? {} : motionProps)}>
              <CategoryItem key={id} category={category}></CategoryItem>
            </motion.li>
          );
        })}
      </main>
    </>
  );
};

export default Categories;
