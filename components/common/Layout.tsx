import { PropsWithChildren } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
interface pageProps {}

export default ({ children }: PropsWithChildren<pageProps>) => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-200">
      <NavBar />
      <main className="min-h-[calc(100vh-3rem)] dark:bg-gray-900">
        {children}
      </main>
      <Footer />
    </div>
  );
};
