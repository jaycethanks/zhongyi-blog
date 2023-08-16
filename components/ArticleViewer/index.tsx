import remarkGfm from 'remark-gfm';

import remarkMermaidjs from 'remark-mermaidjs';
import remarkEmoji from 'remark-emoji';
import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import remarkSlug from 'remark-slug';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls, useDragControls } from 'framer-motion';
import { LocateMenu } from '../Icons/LocateMenu';
import styles from './markdown-styles.module.scss';
import tocStyle from './markdown-style.toc.module.scss';
import { oneDark, oneLight } from '@/styles/react-syntax-highlighter';

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

interface ArticleViewerType {
  isLight: boolean // 是否暗色主题
  contentStr: string // markdown 文本
}
const ArticleViewer: React.FC<ArticleViewerType> = ({ isLight, contentStr }) => {
  const dragControls = useDragControls();
  const animationControls = useAnimationControls();

  const handleResetTocPosition = () => {
    animationControls.start({
      x: 0,
      y: 0,
    });
  };
  const [showTocPin, setShowTocPin] = useState(false);

  return (
    <div className={styles['markdown-style']}>
      { showTocPin && <span className="hidden lg:inline-block toc-anchor fixed top-16 hover:rotate-45 transition-all duration-TRANSITION_DURATION opacity-70 hover:scale-110 hover:opacity-100 left-16 text-lg xl:text-2xl cursor-pointer" onClick={handleResetTocPosition}><LocateMenu/></span>}
      <motion.div>
      <ReactMarkdown
        className="markdown-body "
        children={contentStr || ''}
        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeToc]}
        remarkPlugins={[remarkEmoji, remarkGfm, remarkMermaidjs, remarkSlug]}
        components={{
          code({ inline, className, children, ...props }) {
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
          p({ node, children }) {
            // const { node } = paragraph
            if (node.children[0] && (node.children[0] as any).tagName === 'img') {
              const image = node.children[0] as any;
              const metastring = image.properties.alt;
              const alt = metastring?.replace(/ *\{[^)]*\} */g, '') || ' '; // fix:图片加载失败的时候，不显示默认border https://stackoverflow.com/a/33470333/12261182
              const metaWidth = metastring.match(/{([^}]+)x/);
              const metaHeight = metastring.match(/x([^}]+)}/);
              const width = metaWidth ? metaWidth[1] : '768';
              const height = metaHeight ? metaHeight[1] : '432';
              const isPriority = metastring?.toLowerCase().match('{priority}');
              const hasCaption = metastring?.toLowerCase().includes('{caption: ');
              const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

              const [imgSrc, setImgSrc] = useState(image.properties.src);
              const isValidSrc = /^(?:https?:\/\/|\/|data:image\/[a-z]+;base64,)[^\s]+\.(?:jpg|jpeg|gif|png|bmp)$/.test(
                imgSrc,
              );

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
                    onError={() => setImgSrc(generateShimmer(width, height))}
                    blurDataURL={generateShimmer(width, height)}
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
          nav({ children }) {
            // MutableRefObject<HTMLElement | null>
            const navRef = useRef(null);
            // const [width, setWidth] = useState(window.innerWidth);
            const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
            const gap = 64;// 注意， motion.div 上应该和这个同步(ml-[64px])， 不然页面刷新会闪一下

            // 定义一个回调函数来更新组件的状态
            //
            useEffect(() => {
              const { innerHeight, innerWidth } = window;
              if (navRef && navRef.current) {
                const { offsetHeight, offsetWidth } = navRef.current as unknown as HTMLDivElement;
                setDragConstraints({ left: 0, top: 0, right: innerWidth - offsetWidth - 2 * gap, bottom: innerHeight - offsetHeight - 2 * gap });
                // animationControls.start({
                //   opacity: 1,
                // });
                (navRef.current as unknown as HTMLDivElement).style.marginLeft = `${gap}px`;
              }
            }, [navRef]);
            const hasToc = (children[0] as any)?.props?.children?.length;
            if (hasToc) setShowTocPin(true);
            if (!hasToc) return <></>;
            return (
              // <AnimatePresence initial={false}>
              <motion.div
                ref={navRef}
                className={`${tocStyle['markdown-toc']}
                fixed left-0 top-0 overflow-y-auto  z-10
                mt-16 ml-[64px]
                pl-2 pr-2  py-2 hidden lg:block
                border
                border-REMARK_TEXT/20
                dark:border-DARK_REMARK_TEXT/20
                w-[35ch] 
                3xl:w-[40ch] 
                max-h-[75ch]
                h-auto
                cursor-pointer 
                transition-colors duration-TRANSITION_DURATION
                bg-BG_MAIN_DEEP/50
                dark:bg-DARK_BG_MAIN_DEEP/50
                backdrop-blur-sm
                rounded-md
                text-REMARK_TEXT dark:text-DARK_REMARK_TEXT
                will-change-transform
                text-sm `}
                // opacity-0
                // hover:opacity-100
                // initial={{ opacity: 0 }}
                drag
                transition={{ duration: 0.3 }}
                dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
                dragConstraints={dragConstraints}
                animate={animationControls}
                dragControls={dragControls}
              >
                <nav className="toc_nav">{children}</nav>
              </motion.div>

            // </AnimatePresence>
            );
          },
        }}
      />
      </motion.div>
    </div>
  );
};

export default ArticleViewer;
