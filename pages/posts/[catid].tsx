import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import SericeSideGraphQLClient from '@/utils/SericeSideGraphQLClient';
import type { RecentPostInterface } from '@/apis/QueryList';
import { QUERY_PISTLIST_BY_CATID } from '@/apis/QueryList';
import RecentPost from '@/components/Pages/Post/RecentPost/RecentPost';

interface PostListType {
  postsList: RecentPostInterface[]

}

const Posts = ({ postsList }: PostListType) => {
  console.log('postList', postsList);
  const { query: { name } } = useRouter();

  return (
  <Layout>
        <Head>
          <title>Categories</title>
        </Head>
  <Container title={`/Records/Categories/${name}`} >
    {!postsList.length
      ? <span>Empty</span>
      : <>
      <RecentPost toRight={true} recentPosts={postsList}></RecentPost>
    {/* {paragraphs.map((it, index) => (
      <motion.div key={index} {...{ ...motionsProps, transition: { delay: 0.01 * index } }}>{it} </motion.div>
    ))} */}
      </>}
  </Container>
</Layout>
  );
};

export default Posts;

interface Params {
  params: {
    catid: string
  }
}

// 基于时间的增量渲染（ISR）
export async function getStaticProps({ params }: Params) {
  const res: { postsList: RecentPostInterface[] } = await SericeSideGraphQLClient.request(QUERY_PISTLIST_BY_CATID(params.catid));

  return {
    props: {
      postsList: res.postsList,
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
