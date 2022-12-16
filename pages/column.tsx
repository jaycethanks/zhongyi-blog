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
    count: 27347,
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
    count: 87453,
    list: [
      {
        title: "Islands USB Northeast",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
    ],
  },
  {
    createdAt: "2022-12-15T15:46:37.211Z",
    name: "quod",
    description: "culpa-esse-maxime",
    id: "3",
    count: 83296,
    list: [
      {
        title: "Coordinator Arsenic",
        subtitle: "deleniti-ex-vitae",
        artid: "b5ad3e3c-a24f-4f2a-9df8-48978ca1d57a",
      },
    ],
  },
  {
    createdAt: "2022-12-15T19:10:00.537Z",
    name: "in",
    description: "laboriosam-sunt-et",
    id: "4",
    count: 63083,
    list: [
      {
        title: "TLS meter",
        subtitle: "laborum-culpa-deserunt",
        artid: "e72e1106-7eaa-4c98-8c6f-6eec974fac49",
      },
    ],
  },
  {
    createdAt: "2022-12-15T17:09:17.043Z",
    name: "sit",
    description: "magni-officia-consequatur",
    id: "5",
    count: 43190,
    list: [
      {
        title: "West",
        subtitle: "iusto-quis-nostrum",
        artid: "6b44cda5-206c-46da-a1ae-6ae2d2e540e7",
      },
    ],
  },
  {
    createdAt: "2022-12-15T08:57:38.944Z",
    name: "libero",
    description: "ex-non-architecto",
    id: "6",
    count: 2105,
    list: [
      {
        title: "strategize",
        subtitle: "rem-facere-incidunt",
        artid: "1e18db43-41bb-4675-bf40-c35666de77e1",
      },
    ],
  },
  {
    createdAt: "2022-12-15T07:55:30.350Z",
    name: "praesentium",
    description: "quia-sit-aperiam",
    id: "7",
    count: 75495,
    list: [
      {
        title: "Trial City",
        subtitle: "quam-fugit-voluptatem",
        artid: "e4453913-b712-4d3d-a7d2-ef4ea7cac981",
      },
    ],
  },
  {
    createdAt: "2022-12-16T05:58:24.011Z",
    name: "laboriosam",
    description: "esse-placeat-architecto",
    id: "8",
    count: 71563,
    list: [
      {
        title: "matrix Cuban application",
        subtitle: "debitis-inventore-deserunt",
        artid: "a7e47903-a298-49f0-b757-c7eda52845ef",
      },
    ],
  },
];
const total = mockColumns
  .map((col: any) => col.count)
  .reduce((pre: any, cur: any) => pre + cur);

mockColumns = mockColumns.map((col: any) => {
  col.percent = ((col.count / total) * 100).toFixed(0);
  console.log("[col.percent]: ", col.percent);
  return col;
});
export default (props) => {
  return (
    <Layout>
      <Head>
        <title>ZY - 专栏</title>
      </Head>
      <Container>
        <div className="flex">
          {mockColumns.map((column: any) => {
            const { createdAt, description, percent, id, list, name, count } =
              column;
            return (
              <div
                key={id}
                className={`min-h-[8rem]  min-w-[4rem] border border-red-400`}
                style={{ width: `${percent}%` }}
              >
                {name}
                {percent}
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};
