import classNames from 'classnames';
import { ImgHTMLAttributes, useState } from 'react';

type LazyImageType = {
  onLoad?(): void;
  onError?(): void;
  src: string;
  classNames?: string;
  height: string;
} & ImgHTMLAttributes<HTMLImageElement>;

const LazyImage: React.FC<LazyImageType> = ({
  onLoad,
  onError,
  src,
  height,
  ...rest
}) => {
  const handleOnload = () => {
    setLoading(false);
    onLoad?.();
    console.log("ONLOAD");
  };
  const handleOnError = () => {
    setLoading(false);
    onError?.();
    console.log("ONERROR");
  };
  const [loading, setLoading] = useState(true);
  return (
    <div className={`lazyload-img relative ${height}`}>
      <div
        className="backdrop h-full w-full bg-white/50"
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
