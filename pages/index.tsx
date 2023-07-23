import 'bytemd/dist/index.css';

import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import isMobileDevice from 'is-mobile';
import { useQuery } from '@apollo/client';
import About from '@/components/Pages/About';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import type { ABOUT } from '@/apis/QueryList';
import { GET_ABOUT } from '@/apis/QueryList';

// import isMobileDevice from 'is-mobile';
export default function Home() {
  const { loading, error, data } = useQuery<{ about: ABOUT }>(GET_ABOUT);
  console.log('data', data);
  const isMobile = isMobileDevice();
  const motionsProps: HTMLMotionProps<'div'> = isMobile
    ? {}
    : {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { damping: 100 },
      };
  return (
    <div>
      <Layout>
        <Container title="/">
          <motion.div className="list-none" {...motionsProps}>
            <About about={data?.about}/>
          </motion.div>
        </Container>
      </Layout>
    </div>
  );
}
