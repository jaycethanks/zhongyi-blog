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
      <div className="absolute inset-0 flex flex-col justify-center px-16">
        <Heading className="font-bold text-slate-200" level={1}>
          {title}
        </Heading>
        <Heading className="text-slate-200" level={3}>
          {subTitle}
        </Heading>
      </div>
    </>
  );
};
export default BannerImage;
