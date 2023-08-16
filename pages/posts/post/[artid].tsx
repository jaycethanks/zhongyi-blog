import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import isMobileDevice from 'is-mobile';
import { useEffect, useState } from 'react';
import Giscus from '@giscus/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import SericeSideGraphQLClient from '@/utils/SericeSideGraphQLClient';
import type { PostDto } from '@/apis/QueryList';
import { QUERY_BY_ID } from '@/apis/QueryList';
import eventBus from '@/utils/useEventBus';
import ArticleViewer from '@/components/ArticleViewer';
import BackOutlined from '@/components/Icons/BackOutlined';
import type { StandardProps } from '@/types';
import ScrollToTopOutlined from '@/components/Icons/ScrollToTopOutlined';

// import isMobileDevice from 'is-mobile';
interface PostType {
  post: { article: PostDto } | null
}

const BackBtn: React.FC<StandardProps & { title?: string }> = ({ children, className, title }) => {
  const router = useRouter();

  return (
    <span
      onClick={() => router.back()}
      title={title}
      className={`${className} text-3xl  hover:underline underline-offset-4 decoration-1 px-1 py-1 rounded-xl cursor-pointer`}
    >
      {children}
    </span>
  );
};

const ScrollToTop: React.FC<StandardProps> = ({ className }) => {
  const [ifshowToTop, setIfshowToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY > 10) {
        setIfshowToTop(true);
      }
      else {
        setIfshowToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {ifshowToTop
        ? (
        <motion.div
          key={ifshowToTop.toString()}
          onClick={() => window.scrollTo(0, 0)}
          className="fixed p-2 right-4 sm:right-24 "
          exit={{ bottom: 0, opacity: 0, scale: 0 }}
          initial={{ bottom: 0, opacity: 0, scale: 0 }}
          animate={{ bottom: isMobileDevice() ? 50 : 50, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`${className} cursor-pointer  w-8 h-8 p-1 animate-bounce text-current opacity-70 hover:opacity-100`} >
            <ScrollToTopOutlined />
          </div>
        </motion.div>
          )
        : (
        <></>
          )}
    </AnimatePresence>
  );
};

export default function Post({ post }: PostType) {
  const isMobile = isMobileDevice();
  const { scrollYProgress } = useScroll();

  // 代码段主题
  // const [codeStyle, setCodeStyle] = useState<any>(null);
  // Gis 主题切换
  const [theme, setTheme] = useState<string>();
  useEffect(() => {
    const cacheTheme = localStorage.getItem('theme') === 'false' ? 'light' : 'dark';
    setTheme(cacheTheme);
  }, []);
  eventBus.on('toggleTheme', (isLight: boolean) => {
    setTheme(isLight ? 'light' : 'dark');
  });

  // motion Prop Type
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
        <ScrollToTop />
        <motion.div
          className="fixed inline-block top-0 left-0 right-0 origin-left h-[2px] bg-COLOR_MAIN/80 dark:bg-DARK_COLOR_MAIN/80"
          style={{ scaleX: scrollYProgress }}
        >
          {/* <span className='absolute right-0 bottom-1'><img className='h-12 w-12' src={mariogif.src} alt="" /></span> */}
        </motion.div>
        {/* 正文 */}
        <Container className='p-4'>
          <motion.div className="list-none" {...motionsProps}>
            <ArticleViewer isLight={theme === 'light'} contentStr={post?.article?.content || ''} />
          </motion.div>
        </Container>

        {/* 返回 */}
        <Container>
          <BackBtn
            title="Back"
            className=" hover:bg-gray-100 dark:hover:bg-gray-800   inline-flex min-w-[2em]  justify-center"
          >
            <BackOutlined />
          </BackBtn>
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
    artid: string
  }
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
