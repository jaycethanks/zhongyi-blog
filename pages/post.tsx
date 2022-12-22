import RecentPosts from '@/components/App/Post/RecentPosts';
import Banner from '@/components/Banner';
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import Layout from '@/components/common/Layout';
import SpacerBar from '@/components/common/SpacerBar';
import Fonts from '@/fonts';

import RightColumn from '../components/App/Post/RightColumn/index';
import TopReads from '../components/App/Post/TopReads/index';

export default function Home() {
  return (
    // 这里为了开发阶段默认启用夜间模式， 上线应该去掉
    <div>
      <Layout>
        <Container title="文章">
          {/* <Banner /> */}
          <TopReads />
          <SpacerBar gap={8} />
          <div className="flex flex-col gap-6 sm:flex-row">
            <RightColumn />
            <RecentPosts className="order-2 sm:order-1" />
          </div>
        </Container>
      </Layout>
    </div>
  );
}
