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
