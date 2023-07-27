import Head from 'next/head';
import { useState } from 'react';
import Tab from '@/components/Tab';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import RecentPost from '@/components/Pages/Post/RecentPost/RecentPost';
import type { ArchieveInterface, RecentPostInterface } from '@/apis/QueryList';
import { ARCHIEVE, QUERY_MORE } from '@/apis/QueryList';
import SericeSideGraphQLClient from '@/utils/SericeSideGraphQLClient';

interface ArchieveType {
  archieves: ArchieveInterface[]
}
const Archieve = ({ archieves }: ArchieveType) => {
  const [archState, setArchState] = useState(archieves);
  const [loading, setLoading] = useState(false);
  const handleLoad = async (title: string) => {
    setLoading(true);
    const certainArchieve = archState.find(archState => archState.year === title);
    const pageInfo = {
      start: certainArchieve?.posts.length || 0, // 从哪个索引位开始继续加载
      size: 10, // 一次加载的最多条目数
      year: title,
    };
    const res = await SericeSideGraphQLClient.request(QUERY_MORE(pageInfo)) as { queryMore: RecentPostInterface[] };

    if (res.queryMore.length) {
      const updatedArchieves = archState.map((archieve) => {
        if (archieve.year === title) {
          return {
            ...archieve,
            posts: archieve.posts.concat(res.queryMore),
          };
        }
        else {
          return archieve;
        }
      });
      setArchState(updatedArchieves);
    }

    setLoading(false);

    // setArchState([archState,...])
  };
  const tabItems = (archState || []).map((record) => {
    //  是否开启加载更多按钮？ 当前posts 数量达到了首次拉取的最大值, 说明有可能还有可以拉取， 这时候就显示加载更多按钮
    const ifEnableLoadMore = record.posts.length >= 10;
    return {
      id: +record.year,
      title: record.year,
      content: (toRight: boolean) => <RecentPost loading={loading} title={record.year} toRight={toRight} enableLoadMore={ifEnableLoadMore} handleLoad={handleLoad} recentPosts={record?.posts}></RecentPost>,
    };
  });
  return (
    <Layout>
      <Head>
        <title>ZY - 归档</title>
      </Head>
      <Container title="/归档">{<Tab tabItems={tabItems}></Tab>}</Container>
    </Layout>
    // <ArchieveContent archieveRecord={archieveMock[0]}/>
  );
};

export default Archieve;

async function archieveData(perMaxSize: number): Promise<{ archieves: ArchieveInterface[] }> {
  return await SericeSideGraphQLClient.request(ARCHIEVE(perMaxSize));
}

// 基于时间的增量渲染（ISR）
export async function getStaticProps() {
  const { archieves } = await archieveData(15);
  return {
    props: {
      archieves,
    },
    // 重新生成页面的时间间隔为 1 小时
    revalidate: 10,
  };
}
