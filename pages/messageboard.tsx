import Head from 'next/head';

import BulletChat from '@/components/App/MessageBoard/BulletChat';
import MessageList from '@/components/App/MessageBoard/MessageList';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';

export default () => {
  return (
    <Layout>
      <Head>
        <title>ZY - 留言板</title>
      </Head>
      {/* <BulletChat /> */}
      <Container title="留言">
        <div className="min-h-[20rem] w-full p-2 sm:p-6">
          <MessageList />
        </div>
      </Container>
    </Layout>
  );
};
