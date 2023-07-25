import 'bytemd/dist/index.css';

import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import isMobileDevice from 'is-mobile';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { HTMLAttributes, ImgHTMLAttributes, useEffect, useState } from 'react';
import Giscus from '@giscus/react';
import Head from 'next/head';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import SericeSideGraphQLClient from '@/utils/SericeSideGraphQLClient';
import type { PostDto } from '@/apis/QueryList';
import { QUERY_BY_ID } from '@/apis/QueryList';
import SpacerBar from '@/components/common/SpacerBar';
import remarkSlug from 'remark-slug';
// import markdownStyle from '@/styles/markdown-styles.module.scss';
// import "@/styles/markdown-styles.scss"
import remarkToc from 'remark-toc';
import eventBus from '@/utils/useEventBus';
import Image from 'next/image'
import { ReactElement } from 'react-markdown/lib/react-markdown';

// import isMobileDevice from 'is-mobile';
interface PostType {
  post: { article: PostDto } | null;
}

const BackBtn: React.FC<StandardProps> = ({ children }) => {
  return (
    <Link className="text-3xl  hover:underline underline-offset-4 decoration-1 px-1 py-1 rounded-xl" href="/post">
      {children}
    </Link>
  );
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
    
    
  console.log('[ ]: ', toBase64(shimmer(400, 300)))
    
    
export default function Post({ post }: PostType) {
  const isMobile = isMobileDevice();

  // 代码段主题
  const [styles, setStyles] = useState<any>([]);
  const [style, setStyle] = useState({});

  // 这个插件的主题导入有bug, https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/509
  // import { funky } from 'react-syntax-highlighter/dist/esm/styles/prism';
  // 以下是一个异步导入的临时解决方案
  useEffect(() => {
    // 在 useEffect 中使用 await 关键字是不允许的，因为 useEffect 函数必须是一个同步函数。如果你想要在 useEffect 中使用异步代码，你可以将异步代码封装成一个函数，并在 useEffect 中调用这个函数。
    const fetchStyles = async () => {
      const [{ default: lightStyle }, { default: darkStyle }] = await Promise.all([
        import('react-syntax-highlighter/dist/esm/styles/prism/one-light'),
        import('react-syntax-highlighter/dist/esm/styles/prism/one-dark'),
      ]);
      setStyles([lightStyle, darkStyle]);
    };
    fetchStyles();
  }, []);

  // Gis 主题切换
  const [theme, setTheme] = useState<string>();
  useEffect(() => {
    const cacheTheme = localStorage.getItem('theme') === 'false' ? 'light' : 'dark';
    setTheme(cacheTheme);
    setStyle(cacheTheme === 'light' ? styles[0] : styles[1]);
  }, [styles]);
  eventBus.on('toggleTheme', (isLight: boolean) => {
    setTheme(isLight ? 'light' : 'dark');
    setStyle(isLight ? styles[0] : styles[1]);
  });

  const motionsProps: HTMLMotionProps<'div'> = isMobile
    ? {}
    : {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { damping: 100 },
      };
  return (
    <div>
      <Layout>
        <Head>
          <title>{post?.article?.title}</title>
        </Head>
        {/* 返回 */}
        <Container className="py-0">
          <BackBtn>../</BackBtn>
        </Container>
        {/* 正文 */}
        <Container title={post?.article?.title || ''} >
          <SpacerBar gap={6} />
          <motion.div className="list-none" {...motionsProps}>
            <ReactMarkdown
              className='markdown-body'
              children={post?.article?.content || ''}
              remarkPlugins={[remarkSlug,remarkToc,remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      children={String(children).replace(/\n$/, '')}
                      style={style}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                  );
                },
                p({node, className, children, ...props}) {
                  // const { node } = paragraph
                  if((node.children[0] as any).tagName === "img"){
                    const image = node.children[0] as any
                    const metastring = image.properties.alt
                    const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
                    const metaWidth = metastring.match(/{([^}]+)x/)
                    const metaHeight = metastring.match(/x([^}]+)}/)
                    const width = metaWidth ? metaWidth[1] : "768"
                    const height = metaHeight ? metaHeight[1] : "432"
                    const isPriority = metastring?.toLowerCase().match('{priority}')
                    const hasCaption = metastring?.toLowerCase().includes('{caption:')
                    const caption = metastring?.match(/{caption: (.*?)}/)?.pop()
                
                    return (
                      <div className="postImgWrapper">
                        <Image
                          src={image.properties.src}
                          width={width}
                          height={height}
                          className="postImg"
                          alt={alt}
                          priority={isPriority}
                          loading="lazy"
                          placeholder='blur'
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
                        />
                          {hasCaption ? <div className="caption" aria-label={caption}>{caption}</div> : null}
                      </div>
                    )
                  }
                  return <p>{children}</p>
                },
                
              }}
            />
          </motion.div>
        </Container>

        {/* 返回 */}
        <Container>
          <BackBtn>cd ..</BackBtn>
          <Giscus
            id="comments"
            repo="jaycethanks/sunzhongyi-blog-comment-giscus"
            repoId="R_kgDOIqyzkg"
            category="Blog-comment"
            categoryId="DIC_kwDOIqyzks4CTPaE"
            mapping="title"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={theme}
            lang="zh-CN"
            loading="lazy"
          />
        </Container>
      </Layout>
    </div>
  );
}
interface Params {
  params: {
    artid: string;
  };
}

// 基于时间的增量渲染（ISR）
export async function getStaticProps({ params }: Params) {
  const post: PostType = await SericeSideGraphQLClient.request(QUERY_BY_ID(params.artid));

  return {
    props: {
      post,
    },
    // 重新生成页面的时间间隔为 1 小时
    revalidate: 3600,
  };
}

/**
 * 注：
 * useQuery 是 React Apollo 提供的一个 React Hook，它只能在 React 组件内部使用。在 Next.js 中，由于 getStaticProps 函数是在服务器端执行的，而不是在客户端执行的，所以不能在 getStaticProps 函数中使用 useQuery。
 * 如果你想在 Next.js 中使用 GraphQL，你可以考虑使用 graphql-request 或者 apollo-server-micro 等库来发送 GraphQL 查询，并将查询结果作为 props 传递给页面组件进行渲染。
 */

export async function getStaticPaths() {
  const paths: { params: { id: string } }[] = []; // 初始化一个空数组
  return { paths, fallback: 'blocking' };
}

/**
 * 在 getStaticPaths 函数中，我们需要返回一个包含所有可能的动态路径参数的对象。这些动态路径参数通常是从数据源中获取的，例如从数据库或 API 中获取。因此，使用 fetchPosts 函数获取所有博客文章是为了从数据源中获取这些动态路径参数。但是，这种做法仅适用于数据量较小的情况，因为它会一次性获取所有数据，并将所有文章的 id 值包装成一个对象，这样会导致构建时间和资源消耗过多。
 * 对于数据量较大的情况，我们可以使用动态 getStaticPaths 函数来避免一次性获取所有数据。动态 getStaticPaths 函数允许我们在构建时不预先生成所有可能的动态路径页面，而是根据实际的页面请求动态生成页面。这样可以大大减少构建时间和资源消耗。
 *
 * 将 paths 初始化为空数组，并使用 fallback: 'blocking' 参数启用动态生成功能。这样，当用户访问一个不存在的页面时，Next.js 将在服务器端动态生成页面，并将页面缓存到磁盘上，以便下一次访问时可以直接提供缓存的页面，从而提高性能。
 */
