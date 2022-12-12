import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import Marquee from '@/components/Marquee';
import MessageList from '@/components/MessageList';

import comments from './api/mockmsg';

// console.log("[comments]: ", comments);
const items = comments.slice(0, 10);
export default () => {
  return (
    <Layout>
      {
        // comments.map((comment) => {
        <>
          <Marquee style={{ marginLeft: "2%" }} items={items}></Marquee>
          <Marquee style={{ marginLeft: "-16%" }} items={items}></Marquee>
          <Marquee style={{ marginLeft: "-4%" }} items={items}></Marquee>
          <Marquee style={{ marginLeft: "4%" }} items={items}></Marquee>
          <Marquee items={items}></Marquee>
        </>
        // })
      }
      <Container>
        <div className="min-h-[20rem] w-full p-6">
          <MessageList />
        </div>
      </Container>
    </Layout>
  );
};
