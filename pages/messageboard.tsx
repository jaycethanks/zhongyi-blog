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
          <div className="marquee-board relative overflow-hidden">
            <Marquee style={{ marginLeft: "2%" }} items={items}></Marquee>
            <Marquee style={{ marginLeft: "-16%" }} items={items}></Marquee>
            <Marquee style={{ marginLeft: "-4%" }} items={items}></Marquee>
            <Marquee style={{ marginLeft: "4%" }} items={items}></Marquee>
            <Marquee items={items}></Marquee>

            <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-wrap items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm backdrop-filter dark:bg-black dark:bg-opacity-50">
              多的不要说，夸我帅b，好吗？
              <input type="text" />
            </div>
          </div>
          <p className="text-center text-xs text-slate-300">
            鼠标放在上方区域即可添加弹幕
          </p>
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
