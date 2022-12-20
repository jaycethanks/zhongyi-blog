import { PropsWithChildren } from 'react';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

interface pageProps {}

export default ({ children }: PropsWithChildren<pageProps>) => {
  return (
    <div className="bg-BG_MAIN text-TEXT_MAIN transition-colors duration-300  dark:bg-DARK_BG_MAIN dark:text-DARK_TEXT_MAIN">
      <NavBar />
      <main className="min-h-[calc(100vh-3rem)] dark:bg-gray-900">
        {children}
      </main>
      <Footer />
    </div>
  );
};
