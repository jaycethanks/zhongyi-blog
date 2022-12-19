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
        {list.map((it: any) => {
          console.log("[it]: ", it);
          const [
            { percent: col1 } = { percent: undefined },
            { percent: col2 } = { percent: undefined },
            { percent: col3 } = { percent: undefined },
          ] = it;
          // const [
          //   { percent: col1 = undefined },
          //   { percent: col2 = undefined },
          //   { percent: col3 = undefined },
          // ] = it;

          // console.log(`${col1}%  ${col2}% ${col3}% }`);

          return (
            <div
              className="grid h-48 gap-2 border border-red-700"
              style={{
                gridTemplateColumns: `${col1 ? col1 + "%" : ""}  ${
                  col2 ? col2 + "%" : ""
                } ${col3 ? col3 + "%" : ""}`,
              }}
            >
              <div className="bg-blue-400"></div>
              <div className="bg-blue-400"></div>
            </div>
          );
        })}
      </Container>
    </Layout>
  );
};
