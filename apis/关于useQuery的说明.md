useQuery 是用于客户端渲染的， 

增量渲染(ISR) 静态渲染(SSG) 和 服务端渲染的关系(SSR)

SSG ----> 按照时间的增量渲染 ----> ISR(都可以叫ISR)
SSG ----> 按照请求的渲染 ----> SSR(可以理解为增量渲染的一种)


/**
 * 注：
 * useQuery 是 React Apollo 提供的一个 React Hook，它只能在 React 组件内部使用。在 Next.js 中，由于 getStaticProps 函数是在服务器端执行的，而不是在客户端执行的，所以不能在 getStaticProps 函数中使用 useQuery。
 * 如果你想在 Next.js 中使用 GraphQL，你可以考虑使用 graphql-request 或者 apollo-server-micro 等库来发送 GraphQL 查询，并将查询结果作为 props 传递给页面组件进行渲染。
 */

以下是一个完整的之前 post 页面 客户端渲染的说明
```ts
import { useQuery } from '@apollo/client';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import Tab from '@/components/Tab';
import RecentPost from '@/components/Pages/Post/RecentPost/RecentPost';
import Categories from '@/components/Pages/Post/Categories/Categories';
import type { CategoryInterface, RecentPostInterface } from '@/apis/QueryList';
import { CATEGORIES, RECENT_POSTS } from '@/apis/QueryList';
import SimplestLoading from '@/components/Loading/SimplestLoading';

export default function Home() {
  const { loading, error, data } = useQuery<{ recentPosts: RecentPostInterface[] }>(RECENT_POSTS);
  const { loading: _loading, error: _error, data: _data } = useQuery<{ categories: CategoryInterface[] }>(CATEGORIES);
  console.log('loading', loading);
  return (
    // 这里为了开发阶段默认启用夜间模式， 上线应该去掉
    <div>
      <Layout>
        <Container title="/文章">
          <Tab
            tabItems={[
              {
                content: (toRight: boolean) => (
                  loading
                    ? <SimplestLoading/>
                    : <RecentPost toRight={toRight} recentPosts={data?.recentPosts}></RecentPost>
                ),
                title: 'Recent Posts',
                id: 0,
              },
              {
                content: (toRight: boolean) => (_loading
                  ? <SimplestLoading/>
                  : <Categories categories={_data?.categories}></Categories>
                ),
                title: 'Categories',
                id: 1,
              },
            ]}
          />
        </Container>
      </Layout>
    </div>
  );
}

```