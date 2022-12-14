import '../styles/globals.css';

import Head from 'next/head';

import Fonts from '@/fonts';

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  const times: any = {
    "12": "π",
    "1": "π",
    "2": "π",
    "3": "π",
    "4": "π",
    "5": "π",
    "6": "π",
    "7": "π",
    "8": "π",
    "9": "π",
    "10": "π",
    "11": "π",
  };
  let hours: any = new Date().getHours();
  hours = (hours % 12 || 12).toString(); // θ½¬12ε°ζΆεΆ
  return (
    <>
      {/* https://css-tricks.com/emoji-as-a-favicon/ */}
      {/* θΏιηfavicon ε°δΌθ¦η /public/ δΈηico */}
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
    </>
  );
}
