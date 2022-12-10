import styles from './index.module.css';

type Item = {
  createdAt: string;
  name: string;
  avatar: string;
  content: string;
  id: string;
};
const Marquee: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <div className="flex">
      <div
        className={
          styles["marquee__group"] + " marquee__group flex w-auto min-w-max"
        }
      >
        {items.map((item, index) => {
          return (
            <div
              className="marquee-item  m-2 flex shrink-0 items-center gap-2  p-2"
              key={item.id}
            >
              {/* avatar */}
              <div className="marquee-item-avater">
                <img className="h-10 w-10 rounded-full" src={item.avatar} />
              </div>

              <div className="marquee-right">
                {/* name + content */}
                <div className="flex items-center gap-2 ">
                  <div className="marquee-item-nickname text-red-400">
                    {item.name} :
                  </div>
                  <div className="marquee-item-content w-auto">
                    {item.content}
                  </div>
                </div>

                {/* timestamp */}
                <div className="marquee-item-create-at text-sm text-gray-400">
                  {item.createdAt}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        aria-hidden={true}
        className={
          styles["marquee__group"] +
          " marquee__group flex w-auto min-w-max border-2 border-green-700"
        }
      >
        {items.map((item, index) => {
          return (
            <div
              className="marquee-item  m-2 flex shrink-0 items-center gap-2  p-2"
              key={item.id}
            >
              {/* avatar */}
              <div className="marquee-item-avater">
                <img className="h-10 w-10 rounded-full" src={item.avatar} />
              </div>

              <div className="marquee-right">
                {/* name + content */}
                <div className="flex items-center gap-2 ">
                  <div className="marquee-item-nickname text-red-400">
                    {item.name} :
                  </div>
                  <div className="marquee-item-content w-auto">
                    {item.content}
                  </div>
                </div>

                {/* timestamp */}
                <div className="marquee-item-create-at text-sm text-gray-400">
                  {item.createdAt}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Marquee;
