import Head from 'next/head';

import Archive from '@/components/App/Archive/Archive';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';

const Archive =  (props) => {
  return (
    <Layout>
      <Head>
        <title>ZY - 归档</title>
      </Head>
      <Container title="归档">
        <Archive />
      </Container>
    </Layout>
  );
};


export default Archive