import Head from 'next/head';

import ArchiveContent from '@/components/App/Archive';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';

const Archive =  (props) => {
  const ArchiveRecord = {
    id:1,
    year: 2023,
    list: []
  }
  return (
    <Layout>
      <Head>
        <title>ZY - 归档</title>
      </Head>
      <Container title="归档">
        <ArchiveContent {...ArchiveRecord}/>
      </Container>
    </Layout>
  );
};


export default Archive