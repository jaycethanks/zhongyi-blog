import styles from './index.module.css';

type Item = {
  createdAt: string;
  name: string;
  avatar: string;
  content: string;
  id: string;
};
const Marquee: React.FC<{ items: Item[]; style?: React.CSSProperties }> = ({
  items,
  style,
}) => {
  return (
    <div className="flex" style={{ ...style }}>
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
              {item.content}
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
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Marquee;
