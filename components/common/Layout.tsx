import { type PropsWithChildren, useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Fonts from '@/fonts';

type PageProps = Record<string, unknown>;

const Layout = ({ children }: PropsWithChildren<PageProps>) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const savedTheme = window?.localStorage.getItem('theme');
    if (savedTheme === 'true')
      document.querySelector('html')?.classList.add('dark');

    setLoading(false);
  }, []);
  if (loading)
    return <></>;

  return (
    <div
      className={`bg-BG_MAIN tracking-wide overflow-hidden  text-TEXT_MAIN transition-colors  duration-TRANSITION_DURATION dark:bg-DARK_BG_MAIN  dark:text-DARK_TEXT_MAIN `}
    >
      <NavBar/>
      <main className='min-h-[calc(100vh-3rem)]'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
