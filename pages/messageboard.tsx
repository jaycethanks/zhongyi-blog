import Layout from '@/components/common/Layout';
import Marquee from '@/components/Marquee';

import comments from './api/mockmsg';

// console.log("[comments]: ", comments);
const items = comments.slice(0, 10);
export default () => {
  return (
    <Layout>
      {
        // comments.map((comment) => {
        <>
          <Marquee items={items}></Marquee>
          <Marquee items={items}></Marquee>
          <Marquee items={items}></Marquee>
          <Marquee items={items}></Marquee>
          <Marquee items={items}></Marquee>
        </>
        // })
      }
    </Layout>
  );
};
