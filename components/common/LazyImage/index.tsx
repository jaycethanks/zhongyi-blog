import { type ImgHTMLAttributes, useState } from 'react';
import Image from 'next/image';

type LazyImageType = {
  src: string
  className?: string
  height: number
  width: number

} & ImgHTMLAttributes<HTMLImageElement>;

// 图片加载时的闪耀效果图
function generateShimmer(w: number, h: number) {
  const shimmer = (w: number, h: number) => `
<svg style="opacity: 0.3;" width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#111" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str: string) => window.btoa(str);
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
}

const LazyImage: React.FC<LazyImageType> = ({ src, className, width, height }) => {
  const isValidSrc = /^(?:https?:\/\/|\/|data:image\/[a-z]+;base64,)[^\s]+\.(?:jpg|jpeg|gif|png|bmp)$/.test(
    src,
  );
  const [imgSrc, setImgSrc] = useState(src);

  return <>
  {/* Image 的src 如果是 xxx.assets/image-20230130110529790.png 这种错误的数据结构, 将无法被捕获错误,会报错, 而不会进入到 onError */}
  <Image
    className={className}
    width={width}
    height={height}
    src={isValidSrc ? imgSrc : 'data:image/svg+xml;base64,'}
    alt=" "
    loading="lazy"
    placeholder="blur"
    onError={() => setImgSrc(generateShimmer(width, height))}
    blurDataURL={generateShimmer(width, height)}
  />

</>;
};

export default LazyImage;
