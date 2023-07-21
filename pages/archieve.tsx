import Head from 'next/head';
import { useState } from 'react';
import Tab from '@/components/Tab';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import RecentPost from '@/components/Pages/Post/RecentPost/RecentPost';

const _mock = [
  {
    createdAt: '2023-07-10T03:10:14.747Z',
    title: 'ad minima maxime',
    assumeCost: '4',
    id: '1',
  },
  {
    createdAt: '2023-07-10T05:06:40.000Z',
    title: 'minus rerum animi',
    assumeCost: '2',
    id: '2',
  },
  {
    createdAt: '2023-07-09T09:44:56.848Z',
    title: 'sit molestiae inventore',
    assumeCost: '5',
    id: '3',
  },
  {
    createdAt: '2023-07-09T14:31:14.301Z',
    title: 'qui nostrum fuga',
    assumeCost: '9',
    id: '4',
  },
  {
    createdAt: '2023-07-10T04:56:08.120Z',
    title: 'laudantium similique quis',
    assumeCost: '5',
    id: '5',
  },
  {
    createdAt: '2023-07-10T06:12:09.311Z',
    title: 'tenetur eveniet quam',
    assumeCost: '1',
    id: '6',
  },
  {
    createdAt: '2023-07-10T00:47:46.345Z',
    title: 'expedita magnam quisquam',
    assumeCost: '2',
    id: '7',
  },
  {
    createdAt: '2023-07-10T06:44:50.691Z',
    title: 'cum sed consequatur',
    assumeCost: '6',
    id: '8',
  },
  {
    createdAt: '2023-07-09T16:32:33.877Z',
    title: 'ipsam voluptates eligendi',
    assumeCost: '7',
    id: '9',
  },
  {
    createdAt: '2023-07-09T23:37:13.539Z',
    title: 'nam rem nemo',
    assumeCost: '1',
    id: '10',
  },
  {
    createdAt: '2023-07-12T07:43:41.906Z',
    title: 'debitis corporis ipsa',
    assumeCost: '6',
    id: '11',
  },
  {
    createdAt: '2023-07-12T08:50:30.448Z',
    title: 'incidunt vero reiciendis',
    assumeCost: '4',
    id: '12',
  },
  {
    createdAt: '2023-07-12T02:05:12.577Z',
    title: 'laborum excepturi perferendis',
    assumeCost: '7',
    id: '13',
  },
];

const archieveMock = [
  {
    id: 1,
    year: '2023',
    posts: [..._mock].sort(() => Math.random() - 0.5),
  },
  {
    id: 2,
    year: '2022',
    posts: [..._mock].sort(() => Math.random() - 0.5),
  },
  {
    id: 3,
    year: '2021',
    posts: _mock.sort(() => Math.random() - 0.5),
  },
  {
    id: 4,
    year: '2020',
    posts: _mock,
  },
  {
    id: 5,
    year: '2019',
    posts: _mock,
  },
];
console.log('archieveMock', archieveMock);

const Archieve = () => {
  const [archieveRecords] = useState<ArchieveRecord[]>(archieveMock);
  const tabItems = archieveRecords.map((record) => {
    return {
      id: record.id,
      title: record.year,
      content: (toRight: boolean) => <RecentPost toRight={toRight} recentPosts={record.posts}></RecentPost>,
    };
  });
  return (
    <Layout>
      <Head>
        <title>ZY - 归档</title>
      </Head>
      <Container title="/归档">
        <Tab tabItems={tabItems}></Tab>
      </Container>
    </Layout>
    // <ArchieveContent archieveRecord={archieveMock[0]}/>
  );
};

export default Archieve;
