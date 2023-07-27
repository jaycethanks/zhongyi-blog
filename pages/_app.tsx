import '../styles/globals.css';

import Head from 'next/head';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
    headers: {
      'uid': process.env.NEXT_PUBLIC_USERID || '',
      'X-App-Version': '1.0.0',
    },
  }),
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps }: AppProps) {
  const times: any = {
    12: '🕛',
    1: '🕐',
    2: '🕑',
    3: '🕒',
    4: '🕓',
    5: '🕔',
    6: '🕕',
    7: '🕖',
    8: '🕗',
    9: '🕘',
    10: '🕙',
    11: '🕚',
  };
  let hours: any = new Date().getHours();
  hours = (hours % 12 || 12).toString(); // 转12小时制
  return (
    <>
     <ApolloProvider client={client}>
      {/* https://css-tricks.com/emoji-as-a-favicon/ */}
      {/* 这里的favicon 将会覆盖 /public/ 下的ico */}
      <Head>
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${times[hours]}</text></svg>`}
        />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <main>
        {/* <main className={Fonts.SongJianTi}> */}
        <Component {...pageProps} />
      </main>
      </ApolloProvider>
    </>
  );
}
