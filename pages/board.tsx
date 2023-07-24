import Head from 'next/head';
import Giscus from '@giscus/react';
import { useEffect, useState } from 'react';
import style from './board.module.scss';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import eventBus from '@/utils/useEventBus';

// https://github.com/giscus/giscus/blob/main/README.zh-CN.md
// https://github.com/giscus/giscus-component
const Board = () => {
  const [theme, setTheme] = useState<string>();
  useEffect(() => {
    const cacheTheme
      = localStorage.getItem('theme') === 'false' ? 'light' : 'dark';
    setTheme(cacheTheme);
  }, []);
  eventBus.on('toggleTheme', (isLight: boolean) => {
    setTheme(isLight ? 'light' : 'dark');
  });
  return (
    <Layout>
      <Head>
        <title>ZY - 留言板</title>
      </Head>
      {/* <BulletChat /> */}
      <Container title="/留言">
        {/* className={style.} */}
        <div
          className={`min-h-[20rem] w-full p-2 sm:p-6 ${style['giscus-custom']}`}
        >
          <Giscus
            id="comments"
            repo="jaycethanks/sunzhongyi-blog-comment-giscus"
            repoId="R_kgDOIqyzkg"
            category="General"
            categoryId="DIC_kwDOIqyzks4CTPaB"
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={theme}
            lang="zh-CN"
            loading="lazy"
          />
          {/* <MessageList /> */}
        </div>
      </Container>
    </Layout>
  );
};

export default Board;
