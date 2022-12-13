import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import BulletChat from '@/components/MessageBoard/BulletChat';
import MessageList from '@/components/MessageList';

export default () => {
  return (
    <Layout>
      <BulletChat />
      <Container>
        <div className="min-h-[20rem] w-full p-2 sm:p-6">
          <MessageList />
        </div>
      </Container>
    </Layout>
  );
};
