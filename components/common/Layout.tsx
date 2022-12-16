import { PropsWithChildren } from 'react';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

interface pageProps {}

export default ({ children }: PropsWithChildren<pageProps>) => {
  return (
    <div className="bg-main text-slate-800 transition-colors duration-300  dark:bg-gray-900 dark:text-slate-400">
      <NavBar />
      <main className="min-h-[calc(100vh-3rem)] dark:bg-gray-900">
        {children}
      </main>
      <Footer />
    </div>
  );
};
