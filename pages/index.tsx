import { error } from 'node:console';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import isMobileDevice from 'is-mobile';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import Fonts from '@/fonts';
import LazyImage from '@/components/common/LazyImage';
import SvgBox from '@/components/SvgBox';
import SimplestLoading from '@/components/Loading/SimplestLoading';
import SericeSideGraphQLClient from '@/utils/SericeSideGraphQLClient';
import { GET_ABOUT } from '@/apis/QueryList';

export default function Home({ data }: any) {
  interface LinkType {
    icon?: string
    title?: string
    url?: string
  }
  const isMobile = isMobileDevice();
  const motionsProps: HTMLMotionProps<'div'> = isMobile
    ? {}
    : {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { delay: 0.04 },
      };
  if (!data?.about) {
    return <span className='text-white'>No User Detected !</span>;
  }

  const { avatar, links, msg } = data.about;
  const parsedLinks = JSON.parse(links) as LinkType[];
  const paragraphs = [
    <div className={'flex flex-col sm:flex-row items-center  sm:items-start sm:gap-12  gap-4'}>
      <div className="left shrink-0">
        <div className="inline-block  shrink-0">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <LazyImage height={150} width={150} src={avatar} />
          </motion.div>
          <ul className="link-group mt-4 flex justify-center gap-2 sm:justify-start">
            {(parsedLinks || []).map((it) => {
              const { title, icon, url } = it;
              return (
                <li key={title}>
                  <a
                    title={title}
                    href={url}
                    target="_blank"
                    className='flex items-center justify-center p-2 transition-colors duration-TRANSITION_DURATION
                    bg-BG_MAIN_DEEP/50
                    hover:bg-BG_MAIN_DEEP

                    dark:bg-DARK_BG_MAIN_DEEP/50
                    hover:dark:bg-DARK_BG_MAIN_DEEP

                    text-TEXT_MAIN/70
                    hover:text-TEXT_MAIN

                    dark:text-DARK_TEXT_MAIN/70
                    dark:hover:text-DARK_TEXT_MAIN
                    '

                  >
                    <SvgBox
                      width="16"
                      height="16"
                      className=" "
                    >
                      {icon}
                    </SvgBox>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="right shrink-0 ">
        {
          [<span className='text-lg sm:text-3xl leading-loose'>Hi,</span>, 'I\'m Zhongyi Sun. From HuBei', 'Front-end developer in HangZhou currently.']
            .map((it, index) => <motion.div key={index} className='leading-loose text-sm sm:text-xl font-semibold' {...{ ...motionsProps, transition: { delay: 0.01 * index } }}>{it} </motion.div>)
        }
      </div>
    </div>,
    <p className='mt-4'>
      <span className="inline-block  w-[2rem] tracking-wider"></span>
      {msg}
    </p>,
    <p className='mt-4'>
      <span className="inline-block  w-[2rem] tracking-wider"></span>
      如果需要，你可以通过页面中提供的一些方式找到我，或者, 你也可以在本博客
      <Link className=" text-blue-500  dark:text-blue-700 hover:underline underline-offset-4" href={'/board'}>
        {' '}
        留言板
      </Link>{' '}
      和我说点什么, 我将会收到邮件通知。
    </p>,
    <p className='mt-4'>
      <span className="inline-block  w-[2rem] tracking-wider"></span>
      You can find me from left side links related. Or you can leave a message on the
      <Link className=" text-blue-500  dark:text-blue-700 hover:underline underline-offset-4" href={'/board'}>
        {' '}
        Message Bord
      </Link>{' '}
      if needed.
    </p>,
  ];
  return (
    <div>
      <Layout>
        <Container title="/" className={`${Fonts.JetBrainsMonoVariableFont} text-lg leading-8`}>
          {!data
            ? <SimplestLoading />
            : <>
          {paragraphs.map((it, index) => (
            <motion.div key={index} {...{ ...motionsProps, transition: { delay: 0.01 * index } }}>{it} </motion.div>
          ))}
            </>}
        </Container>
      </Layout>
    </div>
  );
}
// 基于时间的增量渲染（ISR）
export async function getStaticProps() {
  //   const { loading, error, data } = useQuery<{ about: ABOUT }>(GET_ABOUT);
  try {
    const data = await SericeSideGraphQLClient.request(GET_ABOUT);
    return {
      props: {
        data,
      },
      // 重新生成页面的时间间隔为 1 小时
      revalidate: 3600,
    };
  }
  catch (err) {
    console.log('error', error);
    return {
      props: {
        data: null,
      },
    };
  }
}

/**
 * 注：
 * useQuery 是 React Apollo 提供的一个 React Hook，它只能在 React 组件内部使用。在 Next.js 中，由于 getStaticProps 函数是在服务器端执行的，而不是在客户端执行的，所以不能在 getStaticProps 函数中使用 useQuery。
 * 如果你想在 Next.js 中使用 GraphQL，你可以考虑使用 graphql-request 或者 apollo-server-micro 等库来发送 GraphQL 查询，并将查询结果作为 props 传递给页面组件进行渲染。
 */
