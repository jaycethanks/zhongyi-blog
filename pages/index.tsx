import Banner from '@/components/Banner';
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import Layout from '@/components/common/Layout';
import SpacerBar from '@/components/common/SpacerBar';
import RecentPosts from '@/components/HomePage/RecentPosts';

export default function Home() {
  return (
    // 这里为了开发阶段默认启用夜间模式， 上线应该去掉
    <div>
      <Layout>
        <Container>
          <Banner />
          <SpacerBar gap={8} />
          <Heading level={1}>最新发布文章</Heading>
          <RecentPosts />
        </Container>
      </Layout>
    </div>
  );
}
