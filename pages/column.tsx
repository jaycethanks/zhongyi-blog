import Head from 'next/head';

import ArchiveList from '@/components/App/Archive/ArchiveList';
import HeadSummary from '@/components/App/Archive/HeadSummary';
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import Layout from '@/components/common/Layout';

let mockColumns: any = [
  {
    createdAt: "2022-12-16T03:55:24.420Z",
    name: "placeat",
    description: "aperiam-aliquid-necessitatibus",
    id: "1",
    count: 2,
    list: [
      {
        title: "incubate Wyoming",
        subtitle: "sapiente-sunt-porro",
        artid: "e14b0cf1-6bec-4b71-92af-9af9f7770b35",
      },
    ],
  },
  {
    createdAt: "2022-12-16T03:03:04.568Z",
    name: "nemo",
    description: "omnis-atque-distinctio",
    id: "2",
    count: 5,
    list: [
      {
        title: "Islands USB Northeast",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
    ],
  },
  {
    createdAt: "2022-12-16T03:03:04.568Z",
    name: "nemo",
    description: "omnis-atque-distinctio",
    id: "3",
    count: 8,
    list: [
      {
        title: "Islands USB Northeast",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
    ],
  },
  {
    createdAt: "2022-12-16T03:03:04.568Z",
    name: "nemo",
    description: "omnis-atque-distinctio",
    id: "4",
    count: 12,
    list: [
      {
        title: "Islands USB Northeast",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
    ],
  },
  {
    createdAt: "2022-12-16T03:03:04.568Z",
    name: "nemo",
    description: "omnis-atque-distinctio",
    id: "5",
    count: 18,
    list: [
      {
        title: "Islands USB Northeast",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
    ],
  },
];

mockColumns = mockColumns.sort((a: any, b: any) => b.count - a.count);

const list: any = [];
struct(mockColumns);
function struct(mockColumns: any) {
  list.push(mockColumns.splice(0, 3));
  if (mockColumns.length != 0) {
    struct(mockColumns);
  }
}

list.map((its: any) => {
  const total = its
    .map((col: any) => col.count)
    .reduce((pre: any, cur: any) => pre + cur);

  const sortIts = its
    .map((col: any) => {
      col.percent = ((col.count / total) * 100).toFixed(0);
      return col;
    })
    .sort((a: any, b: any) => b.percent - a.percent);

  return sortIts;
});

console.log("[list]: ", list);

export default (props) => {
  return (
    <Layout>
      <Head>
        <title>ZY - 专栏</title>
      </Head>
      <Container>
        {
          <div className="xxl:columns-5 fill columns-1 gap-2 sm:columns-2 md:columns-3 lg:columns-4">
            <div className="mt-2 h-36 bg-red-400">1</div>
            <div className="mt-2 h-32 bg-red-400">2</div>
            <div className="mt-2 h-28 bg-red-400">3</div>
            <div className="mt-2 h-24 bg-red-400">4</div>
            <div className="mt-2 h-20 bg-red-400">5</div>
            <div className="mt-2 h-16 bg-red-400">6</div>
            <div className="mt-2 h-14 bg-red-400">7</div>
            <div className="mt-2 h-12 bg-red-400">8</div>
            <div className="mt-2 h-11 bg-red-400">9</div>
            <div className="mt-2 h-10 bg-red-400">10</div>
            <div className="mt-2 h-10 bg-red-400">11</div>
            <div className="mt-2 h-10 bg-red-400">12</div>
            <div className="mt-2 h-10 bg-red-400">13</div>
            {/* <img src="https://source.unsplash.com/random/1" alt="" />
            <img src="https://source.unsplash.com/random/2" alt="" />
            <img src="https://source.unsplash.com/random/3" alt="" />
            <img src="https://source.unsplash.com/random/4" alt="" />
            <img src="https://source.unsplash.com/random/5" alt="" />
            <img src="https://source.unsplash.com/random/6" alt="" />
            <img src="https://source.unsplash.com/random/7" alt="" />
            <img src="https://source.unsplash.com/random/8" alt="" />
            <img src="https://source.unsplash.com/random/9" alt="" /> */}
          </div>
        }
      </Container>
    </Layout>
  );
};
