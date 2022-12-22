import Head from 'next/head';

import ArchiveList from '@/components/App/Archive/ArchiveList';
import HeadSummary from '@/components/App/Archive/HeadSummary';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';

export default (props) => {
  return (
    <Layout>
      <Head>
        <title>ZY - 归档</title>
      </Head>
      <Container title="归档">
        <HeadSummary />
        <ArchiveList />
      </Container>
    </Layout>
  );
};
