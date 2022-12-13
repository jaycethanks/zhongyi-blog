import ArchiveList from '@/components/App/Archive/ArchiveList';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';

export default (props) => {
  return (
    <Layout>
      <Container>
        <h2>this is archive page</h2>
        <span>共 120 篇文章 </span>
        <span>站点访问量 10000+ </span>
        <span>阅读量 800+ </span>
        <span>阅读平均耗时 13min </span>
        <span>评论总计 300 </span>
        <span>累计点赞 100 </span>
        近期发布
        <ArchiveList />
      </Container>
    </Layout>
  );
};
