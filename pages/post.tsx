import { useState } from 'react';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import Tab from '@/components/Tab';
import RecentPost from '@/components/Pages/Post/RecentPost/RecentPost';
import Categories from '@/components/Pages/Post/Categories/Categories';

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
const _loadMock = [
  {
    createdAt: '2023-07-11T18:53:04.021Z',
    title: 'voluptas minus reprehenderit',
    assumeCost: '9',
    id: '14',
  },
  {
    createdAt: '2023-07-11T23:48:10.842Z',
    title: 'sed architecto explicabo',
    assumeCost: '5',
    id: '15',
  },
  {
    createdAt: '2023-07-11T18:55:41.333Z',
    title: 'porro quaerat perferendis',
    assumeCost: '7',
    id: '16',
  },
  {
    createdAt: '2023-07-11T16:01:50.006Z',
    title: 'magnam impedit eaque',
    assumeCost: '7',
    id: '17',
  },
  {
    createdAt: '2023-07-11T12:53:36.654Z',
    title: 'porro debitis natus',
    assumeCost: '8',
    id: '18',
  },
  {
    createdAt: '2023-07-11T22:59:15.712Z',
    title: 'nostrum deleniti ab',
    assumeCost: '9',
    id: '19',
  },
  {
    createdAt: '2023-07-12T05:54:39.644Z',
    title: 'veniam dolorem dolore',
    assumeCost: '5',
    id: '20',
  },
];

const fake = [
  {
    name: 'eligendi-animi-harum',
    postCount: 90,
    id: '1',
  },
  {
    name: 'nihil-tenetur-magnam',
    postCount: 79,
    id: '2',
  },
  {
    name: 'ipsam-quidem-quia',
    postCount: 55,
    id: '3',
  },
  {
    name: 'in-alias-doloremque',
    postCount: 16,
    id: '4',
  },
  {
    name: 'perspiciatis-odit-corporis',
    postCount: 36,
    id: '5',
  },
  {
    name: 'beatae-error-optio',
    postCount: 29,
    id: '6',
  },
  {
    name: 'reprehenderit-sit-cum',
    postCount: 1,
    id: '7',
  },
  {
    name: 'dolorem-culpa-minima',
    postCount: 20,
    id: '8',
  },
  {
    name: 'et-nam-quibusdam',
    postCount: 69,
    id: '9',
  },
];
export default function Home() {
  const [posts, setPosts] = useState(_mock);
  const [categories] = useState(fake);
  // setCategories(fake)// mock action
  function handleLoadMore() {
    setPosts([..._mock, ..._loadMock]);
  }
  return (
    // 这里为了开发阶段默认启用夜间模式， 上线应该去掉
    <div>
      <Layout>
        <Container title="/文章">
          <Tab
            tabItems={[
              {
                content: (toRight: boolean) => (
                  <RecentPost toRight={toRight} handleLoadMore={handleLoadMore} recentPosts={posts}></RecentPost>
                ),
                title: 'Recent Posts',
                id: 0,
              },
              {
                content: (toRight: boolean) => <Categories categories={categories}></Categories>,
                title: 'Categories',
                id: 1,
              },
            ]}
          />
        </Container>
      </Layout>
    </div>
  );
}
