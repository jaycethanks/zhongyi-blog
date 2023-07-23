import 'bytemd/dist/index.css';

import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import isMobileDevice from 'is-mobile';
import About from '@/components/Pages/About';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import SimplestLoading from '@/components/Loading/SimplestLoading';
import { GET_ABOUT } from '@/apis/QueryList';
import SericeSideGraphQLClient from '@/utils/SericeSideGraphQLClient';

// import isMobileDevice from 'is-mobile';
export default function Home({ data }) {
  //   const { loading, error, data } = useQuery<{ about: ABOUT }>(GET_ABOUT);
  //   console.log('data', data);
  const isMobile = isMobileDevice();
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
        <Container title="/">
          <motion.div className="list-none" {...motionsProps}>
            {!data ? <SimplestLoading /> : <About about={data?.about} />}
          </motion.div>
        </Container>
      </Layout>
    </div>
  );
}
// 基于时间的增量渲染（ISR）
export async function getStaticProps() {
//   const { loading, error, data } = useQuery<{ about: ABOUT }>(GET_ABOUT);
  const data = await SericeSideGraphQLClient.request(GET_ABOUT);
  return {
    props: {
      data,
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
