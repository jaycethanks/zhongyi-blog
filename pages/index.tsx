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
/**
export async function getServerSideProps(context: any) {
	try {
		const ip = '149.28.248.35';

		// 高德通过ip获取城市名
		const res = await fetch(
			'https://restapi.amap.com/v3/ip?key=6a6c022d2b97d5b32a104e0d1c635952&ip=220.184.252.118',
		);
		const {city} = await res.json(); // 城市名
		// 和风天气城市搜索，获取location id
		const Location = await fetch(
			`https://geoapi.qweather.com/v2/city/lookup?key=0db8573c7f234b24ae563667ba6af308&location=${city}&number=1`,
		);
		const {
			location: [{id}],
		} = await Location.json();

		// 和风天气三日 天气预报
		const Whether = await fetch(
			`https://devapi.qweather.com/v7/weather/3d?key=0db8573c7f234b24ae563667ba6af308&location=${id}`,
		);

		const {daily} = await Whether.json();
		// Const pepareData = whetherData;
		return {
			props: {
				whetherData: {
					city,
					data: daily.map((it: any) => {
						const {fxDate, textDay, tempMax, tempMin} = it;
						return {
							fxDate,
							textDay,
							tempMax,
							tempMin,
						};
					}),
				},
			}, // Will be passed to the page component as props
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
}
 */
