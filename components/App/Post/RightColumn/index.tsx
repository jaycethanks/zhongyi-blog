import Categories from './Categories/index';
import Tags from './Tags/index';

const RightColumn: React.FC<StandardProps> = () => {
  return (
    <div className="order-1 flex  w-full shrink-0 flex-col gap-4 sm:order-2 sm:w-52 md:w-56 lg:w-64 xl:w-72">
      <Categories />
      <Tags />
    </div>
  );
};

export default RightColumn;
