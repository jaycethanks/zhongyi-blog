import Head from 'next/head';
import Link from 'next/link';

import ArchiveList from '@/components/App/Archive/ArchiveList';
import HeadSummary from '@/components/App/Archive/HeadSummary';
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import Layout from '@/components/common/Layout';
import Fonts from '@/fonts';

let mockColumns: any = [
  {
    createdAt: "2022-12-16T03:55:24.420Z",
    name: "ThreeJS",
    description: "aperiam-aliquid-necessitatibus",
    id: "1",
    count: 2,
    list: [
      {
        title: "字体非兼容性处理方案",
        subtitle: "sapiente-sunt-porro",
        artid: "e14b0cf1-6bec-4b71-92af-9af9f7770b35",
      },
    ],
  },
  {
    createdAt: "2022-12-16T03:03:04.568Z",
    name: "谱写新时代中国宪法实",
    description:
      "施行 40 周年这是一段Lorem 专栏标题的子标题，也称之为专栏的描述",
    id: "2",
    count: 5,
    list: [
      {
        title: "[工具] Clash #Linux #Ubuntu 配置教程",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
    ],
  },
  {
    createdAt: "2022-12-16T03:03:04.568Z",
    name: "网格布局教程",
    description: "这是一段Lorem 专栏标题的子标题，也称之为专栏的描述",
    id: "3",
    count: 8,
    list: [
      {
        title: "CSS Grid 网格布局教程",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
    ],
  },
  {
    createdAt: "2022-12-16T03:03:04.568Z",
    name: "React",
    description: "这是一段Lorem 专栏标题的子标题，也称之为专栏的描述",
    id: "4",
    count: 12,
    list: [
      {
        title: "容器属性",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
    ],
  },
  {
    createdAt: "2022-12-16T03:03:04.568Z",
    name: "Vue",
    description: "这是一段Lorem 专栏标题的子标题，也称之为专栏的描述",
    id: "5",
    count: 18,
    list: [
      {
        title: "Nestjs-Authentication 文档翻译",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
    ],
  },
  {
    createdAt: "2022-12-16T03:03:04.568Z",
    name: "Vue3",
    description: "这是一段Lorem 专栏标题的子标题，也称之为专栏的描述",
    id: "6",
    count: 18,
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
    name: "D3",
    description: "这是一段Lorem 专栏标题的子标题，也称之为专栏的描述",
    id: "7",
    count: 18,
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
    name: "GoLang",
    description: "这是一段Lorem 专栏标题的子标题，也称之为专栏的描述",
    id: "8",
    count: 18,
    list: [
      {
        title:
          "[跨域问题]：Response to preflight request doesn't pass access control check: It does not have HTTP ok status. 的解决",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
    ],
  },
  {
    createdAt: "2022-12-16T03:03:04.568Z",
    name: "Java",
    description: "这是一段Lorem 专栏标题的子标题，也称之为专栏的描述",
    id: "9",
    count: 18,
    list: [
      {
        title: "Jetbrains全家桶破解注册教程（含Intellij_IDEA）",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920",
      },
      {
        title: "[JS高程]语言基础，for循环中的var变量声明图解",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f7709920as",
      },
      {
        title: "vite配置文件语法提示以及开发环境和生产环境区分",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-asec49f7709920as",
      },
      {
        title: "浅了解 Service Worker",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-sf65f-4050-80b1-ec49f7709920as",
      },
      {
        title: "如何写一个全局的 Notice 组件?",
        subtitle: "unde-dolorum-non",
        artid: "c3470204-f65f-4050-80b1-ec49f770s9920as",
      },
    ],
  },
];

mockColumns = mockColumns.sort((a: any, b: any) => b.count - a.count);

export default (props) => {
  return (
    <Layout>
      <Head>
        <title>ZY - 专栏</title>
      </Head>
      <Container title="专栏" className={`${Fonts.SourceHanSerifCN}`}>
        {
          // prettier-ignore
          <div className={`columns-1 gap-x-6 sm:columns-2 md:columns-3 lg:columns-4 xxl:columns-5 [column-rule-style:solid] [column-rule-width:1px] [column-rule-color:#e2e8f0] dark:[column-rule-color:#475569]  transition-colors duration-TRANSITION_DURATION`} >

            {
              mockColumns.map((it:any,index:number)=>{
                const _index = mockColumns.length - index
                return (
                  <div key={it.id} className={`mb-4 p-4 h-auto  break-inside-avoid transition-colors duration-TRANSITION_DURATION bg-BG_MAIN_DEEP dark:bg-DARK_BG_MAIN_DEEP text-TEXT_MAIN  dark:text-DARK_TEXT_MAIN`} 
                  style={{minHeight:`${12+_index*2}rem`}}
                  >
                    <Heading level={2} className={`font-bold ${Fonts.SourceHanSansCNRegular}`}>{it.name} </Heading>
                    <Heading level={4} className="">{it.description}</Heading>
                    <ul className={`pl-8 list-disc mt-2 font-mono tracking-wider text-REMARK_TEXT  dark:text-DARK_REMARK_TEXT`}>
                      {
                        it.list.map((article:any)=>{
                          return <li key={article.artid} className="mb-4">
                            <Link href="#" className='cursor-pointer hover:underline hover:[-webkit-text-stroke:thin]'>{article.title}</Link>
                          </li>
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        }
      </Container>
    </Layout>
  );
};
