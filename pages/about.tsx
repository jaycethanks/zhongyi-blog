import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import BannerImage from '@/components/App/About/BannerImage';
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import Layout from '@/components/common/Layout';
import SpacerBar from '@/components/common/SpacerBar';

import LazyImage from '../components/common/LazyImage/index';

export default (props) => {
  const abouts = [
    {
      aboid: "jasldjl",
      title: "About",
      subTitle: "让我简单的介绍一下我自己吧!",
      content:
        "好吧, 想了很久, 确实没什么好介绍的, 那就祝你 Hava a nice day! 好啦.🎉🎉🎉",
    },
    {
      aboid: "jasasdsl",
      title: "Things not related to web ?",
      subTitle: "emmm 写作文一样困难!",
      content:
        "鲁迅说, 如果你今天晚睡了一个小时, 那么你这一天就会少休息一个小时",
    },
    {
      aboid: "lkashjahsd",
      title: "This blog project?",
      subTitle: "",
      content:
        "该博客基于前台基于 Nextjs + GraphQL + Tailwindcss/Sass 构建, 后台管理发文系统 采用了 Antdpro 集成框架, Server 端,采用了 Nestjs, Mysql, Prisma, GraphQL Server, 以及 Nginx 用于页面Serve + 静态资源服务.",
    },
  ];

  // const [imgLoading, setImgLoading] = useState(true);
  // const handleOnload = () => {
  //   console.log("onload");
  // };
  return (
    <Layout>
      <Container>
        <Head>
          <Link rel="icon" href="/sun.png" />
          <title>ZY - 关于</title>
        </Head>

        <div className="HeadSlogan relative">
          <BannerImage
            height="h-96"
            src="http://placeimg.com/1280/480/nature"
            title="关于"
            subTitle="总是要说点什么才显得有点艺术气息"
          />
        </div>
        <div className="p-4">
          {abouts.map((about) => {
            const { aboid, title, content, subTitle } = about;
            return (
              <div key={aboid} className="text-slate-800 dark:text-slate-500">
                <Heading level={2}>{title}</Heading>
                <Heading level={4}>{subTitle}</Heading>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-500">
                  <span className="inline-block w-[2rem]"></span>
                  {content}
                </p>
                <SpacerBar gap={16} />
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};
