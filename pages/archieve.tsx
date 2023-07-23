import Head from 'next/head';
import { useQuery } from '@apollo/client';
import Tab from '@/components/Tab';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import RecentPost from '@/components/Pages/Post/RecentPost/RecentPost';
import type { ArchieveInterface } from '@/apis/QueryList';
import { ARCHIEVE } from '@/apis/QueryList';
import SimplestLoading from '@/components/Loading/SimplestLoading';

const Archieve = () => {
  const { loading, error, data } = useQuery<{ archieves: ArchieveInterface[] }>(ARCHIEVE);
  const tabItems = (data?.archieves || []).map((record) => {
    return {
      id: +record.year,
      title: record.year,
      content: (toRight: boolean) => <RecentPost toRight={toRight} recentPosts={record?.posts}></RecentPost>,
    };
  });
  return (
    <Layout>
      <Head>
        <title>ZY - 归档</title>
      </Head>
      <Container title="/归档">
        {
          loading
            ? <SimplestLoading/>
            : <Tab tabItems={tabItems}></Tab>
        }
      </Container>
    </Layout>
    // <ArchieveContent archieveRecord={archieveMock[0]}/>
  );
};

export default Archieve;
