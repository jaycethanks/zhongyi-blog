import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeRaw from "rehype-raw"
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkSlug from 'remark-slug';
import Image from 'next/image';
import { useState } from 'react';
import { oneDark, oneLight } from '@/styles/react-syntax-highlighter';
import styles from "./markdown-styles.module.scss"


// 图片加载时的闪耀效果图

function generateShimmer(w: number, h: number, isLight = false) {
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
interface ArticleViewerType {
  isLight: boolean // 是否暗色主题
  contentStr: string // markdown 文本
}
const ArticleViewer: React.FC<ArticleViewerType> = ({ isLight, contentStr }) => {
  return (
    <div className={styles['markdown-style']}>
      <ReactMarkdown
        className="markdown-body"
        children={contentStr || ''}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[[remarkSlug],[remarkToc,{prefix: 'user-content-',singleTilde:false}],[remarkGfm]]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match
              ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={(isLight ? oneLight : oneDark) as any}
                language={match[1]}
                PreTag="div"
              />
                )
              : (
              <code {...props} className={className}>
                {children}
              </code>
                );
          },
          p({ node, className, children, ...props }) {
            // const { node } = paragraph
            if ((node.children[0] as any).tagName === 'img') {
              const image = node.children[0] as any;
              const metastring = image.properties.alt;
              const alt = metastring?.replace(/ *\{[^)]*\} */g, '') || ' '; // fix:图片加载失败的时候，不显示默认border https://stackoverflow.com/a/33470333/12261182
              const metaWidth = metastring.match(/{([^}]+)x/);
              const metaHeight = metastring.match(/x([^}]+)}/);
              const width = metaWidth ? metaWidth[1] : '768';
              const height = metaHeight ? metaHeight[1] : '432';
              const isPriority = metastring?.toLowerCase().match('{priority}');
              const hasCaption = metastring?.toLowerCase().includes('{caption:');
              const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

              const [imgSrc, setImgSrc] = useState(image.properties.src);
              const isValidSrc  = /^(?:https?:\/\/|\/|data:image\/[a-z]+;base64,)[^\s]+\.(?:jpg|jpeg|gif|png|bmp)$/.test(imgSrc)

              return (
                <>
                {/* Image 的src 如果是 xxx.assets/image-20230130110529790.png 这种错误的数据结构, 将无法被捕获错误,会报错, 而不会进入到 onError */}
                  <Image
                    src={isValidSrc ? imgSrc : 'data:image/svg+xml;base64,'}
                    width={width}
                    height={height}
                    className="postImg"
                    alt={alt}
                    priority={isPriority}
                    loading="lazy"
                    placeholder="blur"
                    onError={e => setImgSrc(generateShimmer(width, height, isLight))}
                    blurDataURL={generateShimmer(width, height, isLight)}
                  />
                  {hasCaption
                    ? (
                    <div className="caption" aria-label={caption}>
                      {caption}
                    </div>
                      )
                    : null}
                </>
              );
            }
            return <p>{children}</p>;
          },
        }}
      />
    </div>
  );
};

export default ArticleViewer;
