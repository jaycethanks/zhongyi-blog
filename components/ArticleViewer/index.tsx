import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkSlug from 'remark-slug';
import Image from 'next/image';
import { useState } from 'react';
import { oneDark, oneLight } from '@/styles/react-syntax-highlighter';

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
    <>
      <ReactMarkdown
        className="markdown-body"
        children={contentStr || ''}
        remarkPlugins={[[remarkSlug], [remarkToc], [remarkGfm]]}
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

              return (
                <>
                  <Image
                    src={imgSrc}
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
    </>
  );
};

export default ArticleViewer;
