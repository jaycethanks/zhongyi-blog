import 'bytemd/dist/index.css';

import {useState} from 'react';

import About from '@/components/About';
import ArticleCard from '@/components/App/Post/ArticleCard';
import RecentPosts from '@/components/App/Post/RecentPosts';
import Banner from '@/components/Banner';
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import Layout from '@/components/common/Layout';
// Import TagLine from
import SpacerBar from '@/components/common/SpacerBar';
import AtricleViewer from '@/components/HomePage/AtricleViewer';
import TagLine from '@/components/Tagline';
import Fonts from '@/fonts';
// Import gfm from '@bytemd/plugin-gfm'
import {Editor, Viewer} from '@bytemd/react';

import HomeRecentPosts from '../components/HomePage/HomeRecentPosts/index';

const plugins = [
	// Gfm(),
	// Add more plugins here
];

export default function Home(props: any) {
	const [value, setValue] = useState('');
	const {whetherData} = props;
	return (
	// 这里为了开发阶段默认启用夜间模式， 上线应该去掉
		<div>
			<Layout>
				<Container title='/'>
					{/* <HomeRecentPosts /> */}
					<About />
				</Container>
			</Layout>
		</div>
	);
}

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
