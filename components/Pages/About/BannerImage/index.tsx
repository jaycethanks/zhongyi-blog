import Heading from '@/components/common/Heading';
import LazyImage from '@/components/common/LazyImage';

type BannerImageProps = {
  src: string;
  height: string;
  title: string;
  subTitle: string;
};
const BannerImage: React.FC<BannerImageProps> = ({
  src,
  height,
  title,
  subTitle,
}) => {
  return (
    <>
      <LazyImage src={src} height={height} />
      <div className="backdrop dark:backdrop-brightness-70 absolute inset-0 flex flex-col justify-center bg-white/20 px-16 text-slate-100 dark:bg-black/5 dark:text-slate-200">
        <Heading className="font-bold " level={1}>
          {title}
        </Heading>
        <Heading className="" level={3}>
          {subTitle}
        </Heading>
      </div>
    </>
  );
};
export default BannerImage;
