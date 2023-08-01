import type { ImgHTMLAttributes } from 'react';
import { useState } from 'react';

type LazyImageType = {
  onLoad?(): void
  onError?(): void
  src: string
  classNames?: string
  height?: string
} & ImgHTMLAttributes<HTMLImageElement>;

const LazyImage: React.FC<LazyImageType> = ({
  onLoad,
  onError,
  src,
  height,
  ...rest
}) => {
  const [loading, setLoading] = useState(true);

  const handleOnload = () => {
    setLoading(false);
    onLoad?.();
    console.log('ONLOAD');
  };
  const handleOnError = () => {
    setLoading(false);
    onError?.();
    console.log('ONERROR');
  };
  return (
    <div className={`lazyload-img relative ${height}`}>
      <div
        className="h-full w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <img
        className="h-0"
        src={src}
        alt=""
        {...rest}
        onLoad={handleOnload}
        onError={handleOnError}
      />
      {loading && (
        <div className="absolute inset-0  bg-white dark:bg-slate-800"></div>
      )}
    </div>
  );
};

export default LazyImage;
