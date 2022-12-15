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

  const findMe = {
    title: "如何找到我?",
    subTitle: "你可以在这些地方发现我",
    list: [
      {
        id: "12",
        name: "掘金",
        url: "#",
        bgColor: "#b1d7ff",
        icon: [
          "M465.189 161.792c-22.967 18.14-44.325 35.109-47.397 37.742l-5.851 4.68 10.971 8.632c5.998 4.827 11.85 9.508 13.02 10.532 1.17 1.024 17.993 14.336 37.156 29.696l34.962 27.795 5.267-3.95c2.925-2.194 23.259-18.432 45.348-35.986 21.943-17.555 41.253-32.768 42.716-33.646 1.609-1.024 2.779-2.194 2.779-2.78 0-0.438-9.655-8.63-21.504-17.846-11.995-9.363-22.674-17.847-23.845-18.871-15.945-13.02-49.737-39.059-50.76-39.059-0.586 0.147-19.896 14.922-42.862 33.061z m233.325 180.37C507.465 493.275 508.928 492.105 505.417 489.911c-3.072-1.902-11.556-8.485-64.073-50.03-9.07-7.168-18.578-14.775-21.358-16.823-2.78-2.194-8.777-6.875-13.312-10.532-4.68-3.657-10.679-8.339-13.312-10.533-13.165-10.24-71.095-56.027-102.107-80.457-5.852-4.681-11.41-8.485-12.142-8.485-0.731 0-10.971 7.754-22.674 17.116-11.703 9.508-22.674 18.286-24.284 19.456-1.755 1.17-5.12 3.95-7.46 6.144-2.34 2.34-4.828 4.096-5.413 4.096-3.072 0-0.731 3.072 6.437 8.777 4.096 3.218 8.777 6.875 10.094 8.046 1.316 1.024 10.24 8.045 19.748 15.506s23.26 18.286 30.428 23.99c19.31 15.215 31.89 25.308 127.853 101.084 47.836 37.742 88.796 69.779 90.844 71.095 3.657 2.487 3.95 2.487 7.46-0.292a1041.42 1041.42 0 0 0 16.092-12.727c6.875-5.413 14.775-11.703 17.554-13.897 30.135-23.699 80.018-63.05 81.774-64.512 1.17-1.024 12.434-9.802 24.868-19.603s37.888-29.696 56.32-44.324c18.579-14.629 46.227-36.425 61.733-48.567 15.506-12.142 27.794-22.528 27.502-23.26-0.878-1.17-57.637-47.104-59.978-48.274-0.731-0.439-18.578 12.727-39.497 29.257z",
          "M57.93 489.326c-15.215 12.288-28.527 23.405-29.697 24.576-2.34 2.194-5.412-0.44 80.018 66.852 33.207 26.185 32.622 25.747 57.637 45.495 10.386 8.192 36.279 28.672 57.783 45.495 38.18 30.135 44.91 35.401 52.663 41.545 2.048 1.756 22.967 18.14 46.372 36.572 23.26 18.432 74.167 58.514 112.933 89.088 38.912 30.573 71.095 55.734 71.826 56.027 0.732 0.293 7.46-4.389 14.921-10.386 21.797-16.97 90.259-70.949 101.523-79.872 5.705-4.535 12.873-10.24 15.945-12.58 3.072-2.488 6.436-5.12 7.314-5.852 0.878-0.878 11.85-9.509 24.283-19.31 20.773-16.091 59.1-46.226 64.366-50.615 1.17-1.024 5.12-4.096 8.777-6.875 3.657-2.78 7.9-6.29 9.509-7.607 1.609-1.317 14.775-11.703 29.257-23.113 29.11-22.82 42.277-33.207 88.503-69.632 17.262-13.605 32.475-25.454 33.646-26.478 2.486-2.048 31.451-24.869 44.617-35.255 4.827-3.657 9.07-7.168 9.508-7.607 0.44-0.585 5.998-4.827 12.435-9.8 6.436-4.828 13.165-10.24 15.067-11.85l3.365-2.926-9.948-7.753c-5.412-4.388-10.24-8.192-10.679-8.63-1.17-1.317-22.381-18.433-30.135-24.284-3.95-3.072-7.314-5.998-7.606-6.73-1.317-3.071-6.73 0.147-29.258 17.994-13.458 10.532-25.746 20.187-27.355 21.504-1.61 1.463-10.533 8.338-19.749 15.652-9.216 7.168-17.115 13.459-17.554 13.898-0.439 0.438-6.583 5.412-13.897 10.971-7.168 5.559-15.214 11.703-17.7 13.75-4.974 4.097-5.413 4.39-20.334 16.239-5.56 4.388-11.264 8.777-12.435 9.8-1.17 1.025-20.333 16.092-42.422 33.354-22.09 17.408-41.546 32.768-43.155 34.084-1.609 1.463-14.482 11.557-28.525 22.528s-40.814 32.037-59.539 46.812c-18.578 14.775-42.276 33.353-52.516 41.399s-23.26 18.285-28.965 22.82l-10.386 8.339-4.389-3.072c-2.34-1.756-4.68-3.511-5.12-3.95-0.439-0.439-4.973-4.096-10.24-8.046-11.849-9.216-14.482-11.264-16.676-13.166-0.878-0.877-4.243-3.51-7.46-5.851-3.22-2.487-6.145-4.681-6.584-5.12-0.439-0.439-6.875-5.705-14.482-11.703-7.607-5.851-14.921-11.556-16.091-12.58-1.317-1.17-17.116-13.605-35.255-27.795-17.993-14.19-35.109-27.648-38.035-29.842-5.705-4.681-33.499-26.624-125.074-98.743-34.523-27.209-72.704-57.344-84.846-66.852-49.737-39.498-55.15-43.594-56.905-43.447-0.877 0-14.043 10.24-29.257 22.528z",
        ],
      },
      {
        id: "12d",
        name: "博客园",
        url: "#",
        bgColor: "#eaeaea",
        icon: [
          "M851.404 172.596c-187.462-187.461-491.346-187.461-678.808 0-187.461 187.462-187.461 491.346 0 678.808 187.462 187.461 491.346 187.461 678.808 0 187.461-187.462 187.461-491.346 0-678.808zM387.33 728.087a47.084 47.084 0 1 1-66.633-66.502 47.084 47.084 0 0 1 66.633 66.502z m205.527 1.397a38.75 38.75 0 0 1-76.625-11.52h-0.044a6.545 6.545 0 0 0-0.044 0.305v-0.349c0.306-2.618 2.051-20.727-2.967-44.99a174.24 174.24 0 0 0-48.567-89.28 172.102 172.102 0 0 0-88.8-48.305 156.698 156.698 0 0 0-42.458-2.923 38.662 38.662 0 0 1-35.39-65.324 38.618 38.618 0 0 1 21.12-10.822v-0.218c4.452-0.742 111.142-16.45 200.335 72.742 89.018 89.018 74.182 196.145 73.44 200.727z m175.2 7.592a38.75 38.75 0 0 1-65.673 21.382 39.49 39.49 0 0 1-11.65-33.73c0.087-0.35 5.105-37.484-5.062-88.975-13.31-67.375-45.295-126.895-94.953-176.902-50.007-49.702-109.527-81.644-176.945-94.953-51.491-10.167-88.582-5.193-89.019-5.149h0.219-0.044a39.927 39.927 0 0 1-44.684-32.902 38.836 38.836 0 0 1 32.204-44.378c1.92-0.305 47.869-7.33 111.273 4.364a411.753 411.753 0 0 1 106.254 34.952 425.76 425.76 0 0 1 114.633 82.255l0.916 0.96 0.96 0.873a425.89 425.89 0 0 1 82.255 114.72c16.407 33.6 28.145 69.294 34.996 106.21 11.651 63.404 4.67 109.353 4.32 111.273z",
        ],
      },
    ],
  };

  return (
    <Layout>
      <Container>
        <Head>
          <title>ZY - 关于</title>
        </Head>

        {/* <div className="HeadSlogan relative">
          <BannerImage
            height="h-96"
            src="http://placeimg.com/1280/480/nature"
            title="关于"
            subTitle="emmm...好像确实放个图片会好看一些"
          />
        </div> */}

        <div className="p-4">
          <div className="basic-info card">
            <div>
              <Heading level={2}>About Me.</Heading>
              <Heading level={4}>一个博客好像都需要自我介绍</Heading>
              <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                <div className="inline-block w-48 shrink-0">
                  <LazyImage
                    height="h-48"
                    src="http://placeimg.com/480/480/nature"
                  />
                  <ul className="link-group mt-4 flex justify-center gap-2 sm:justify-start">
                    {findMe.list.map((it) => {
                      const { id, icon, bgColor, name, url } = it;
                      return (
                        <li key={id}>
                          <a
                            title={name}
                            href={url}
                            target="_blank"
                            key={id}
                            className={`flex items-center justify-center bg-slate-100 p-2 dark:bg-slate-700`}
                          >
                            <svg viewBox="0 0 1024 1024" width="16" height="16">
                              {icon.map((path, index) => (
                                <path
                                  key={index}
                                  d={path}
                                  className="fill-slate-600 dark:fill-slate-300"
                                ></path>
                              ))}
                            </svg>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="leading-7">
                  <span className="inline-block  w-[2rem] tracking-wider"></span>
                  "非真洪到能人我关倒身受赐冈苟位，接郭欲助，就更下秦关非因身付价冇养把是生今啊死身，够不介的国国韩不程游啊韩，九只反向并承人宋整希活觉的快己案，仍使办必内流县二德躲极间明，俭勉穿事将艳挟，得上杨，法。"
                  你可能会好奇: "你这写的是什么玩意?" ,
                  实际上,我不相信有人会真的把这段话读一遍, 就拿我自己来说,
                  我一次也没有读过, 所以如果你要问我这写的是什么? 我也不知道,
                  因为它是一段 Lorem 。
                  <p>
                    <span className="inline-block  w-[2rem] tracking-wider"></span>
                    如果需要，你可以通过页面中提供的一些方式找到我，或者,
                    你也可以在本博客
                    <Link
                      className=" text-blue-500  dark:text-blue-700"
                      href={"/messageboard"}
                    >
                      留言板
                    </Link>
                    和我说点什么, 我将会收到邮件通知。
                  </p>
                </div>
              </div>
              <SpacerBar gap={16} />
            </div>
          </div>

          {/* {abouts.map((about) => {
            const { aboid, title, content, subTitle } = about;
            return (
              <div key={aboid}>
                <Heading level={2}>{title}</Heading>
                <Heading level={4}>{subTitle}</Heading>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-500">
                  <span className="inline-block w-[2rem]"></span>
                  {content}
                </p>
                <SpacerBar gap={16} />
              </div>
            );
          })} */}
        </div>
      </Container>
    </Layout>
  );
};
