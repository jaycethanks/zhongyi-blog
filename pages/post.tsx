import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import Tab from '@/components/Tab';
import RecentPost from '@/components/Pages/Post/RecentPost/RecentPost';
import Categories from '@/components/Pages/Post/Categories/Categories';
import type { CategoryInterface, RecentPostInterface } from '@/apis/QueryList';
import { CATEGORIES, RECENT_POSTS } from '@/apis/QueryList';
import SericeSideGraphQLClient from '@/utils/SericeSideGraphQLClient';

interface HomeProps {
  recentPosts: RecentPostInterface[]
  categories: CategoryInterface[]
}
export default function Home({ recentPosts, categories }: HomeProps) {
  return (
    // 这里为了开发阶段默认启用夜间模式， 上线应该去掉
    <div>
      <Layout>
        <Container title="/文章">
          <Tab
            tabItems={[
              {
                content: (toRight: boolean) => <RecentPost toRight={toRight} recentPosts={recentPosts}></RecentPost>,
                title: 'Recent Posts',
                id: 0,
              },
              {
                content: (toRight: boolean) => <Categories categories={categories}></Categories>,
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

async function recentPostsData(): Promise<{ recentPosts: RecentPostInterface[] } > {
  return await SericeSideGraphQLClient.request(RECENT_POSTS);
}
async function categoriesData(): Promise<{ categories: CategoryInterface[] }> {
  return await SericeSideGraphQLClient.request(CATEGORIES);
}

// 基于时间的增量渲染（ISR）
export async function getStaticProps() {
  const [{ recentPosts }, { categories }] = await Promise.all([recentPostsData(), categoriesData()]);
  return {
    props: {
      recentPosts, categories,
    },
    // 重新生成页面的时间间隔为 1 小时
    revalidate: 3600,
  };
}
