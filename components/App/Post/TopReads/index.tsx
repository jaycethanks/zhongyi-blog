import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Heading from '@/components/common/Heading';
import SpacerBar from '@/components/common/SpacerBar';
import HeartOutlined from '@/components/Icons/HeartOutlined';
import MsgOutlined from '@/components/Icons/MsgOutlined';
import ReadOutlined from '@/components/Icons/ReadOutlined';
import Fonts from '@/fonts';

const mocklist = [
  {
    createdAt: "2021-07-14T05:29:58.195Z",
    title: "[工具] Clash #Linux #Ubuntu 配置教程",
    description:
      "摘要： 下文失效，参见 这里 ~~JetBrain 全家桶破解注册教程~~ 本教程适用于 Jetbrains WebStorm | PyCharm | PhpStorm | IDEA 本教程适用于 Windows / Mac / Linux 脚本来源自 discord. 源下载链接. 本教程以 IDEA 示",
    cover: "https://loremflickr.com/640/480",
    readers: 3,
    liking: 12,
    comments: 8,
    visible: true,
    artid: "1",
  },
  {
    createdAt: "2068-06-29T07:17:43.824Z",
    title: "CroLAX 问题反馈",
    description:
      "摘要： 下文失效，参见 这里 ~~JetBrain 全家桶破解注册教程~~ 本教程适用于 Jetbrains WebStorm | PyCharm | PhpStorm | IDEA 本教程适用于 Windows / Mac / Linux 脚本来源自 discord. 源下载链接. 本教程以 IDEA 示",
    cover: "https://loremflickr.com/640/480",
    readers: 12412,
    liking: 1,
    comments: 3,
    visible: true,
    artid: "2",
  },
  {
    createdAt: "2039-01-25T04:07:58.121Z",
    title: "Nestjs-Authentication 文档翻译",
    description:
      "摘要： 下文失效，参见 这里 ~~JetBrain 全家桶破解注册教程~~ 本教程适用于 Jetbrains WebStorm | PyCharm | PhpStorm | IDEA 本教程适用于 Windows / Mac / Linux 脚本来源自 discord. 源下载链接. 本教程以 IDEA 示",
    cover: "https://loremflickr.com/640/480",
    readers: 3,
    liking: 12,
    comments: 412,
    visible: true,
    artid: "3",
  },
  {
    createdAt: "2036-10-14T23:44:28.870Z",
    title: "[工具问题] docker.mysql8 Public Key Retrieval is not allowed",
    description:
      "摘要： 下文失效，参见 这里 ~~JetBrain 全家桶破解注册教程~~ 本教程适用于 Jetbrains WebStorm | PyCharm | PhpStorm | IDEA 本教程适用于 Windows / Mac / Linux 脚本来源自 discord. 源下载链接. 本教程以 IDEA 示",
    cover: "https://loremflickr.com/640/480",
    readers: 421,
    liking: 23,
    comments: 423,
    visible: true,
    artid: "4",
  },
  {
    createdAt: "2057-03-13T15:22:16.091Z",
    title: "001[Js修炼]手写深拷贝",
    description:
      "摘要： 下文失效，参见 这里 ~~JetBrain 全家桶破解注册教程~~ 本教程适用于 Jetbrains WebStorm | PyCharm | PhpStorm | IDEA 本教程适用于 Windows / Mac / Linux 脚本来源自 discord. 源下载链接. 本教程以 IDEA 示",
    cover: "https://loremflickr.com/640/480",
    readers: 4213,
    liking: 42,
    comments: 4213,
    visible: true,
    artid: "5",
  },
  {
    createdAt: "2012-09-24T01:43:09.849Z",
    title: "[JS高程]语言基础，for循环中的var变量声明图解",
    description:
      "摘要： 下文失效，参见 这里 ~~JetBrain 全家桶破解注册教程~~ 本教程适用于 Jetbrains WebStorm | PyCharm | PhpStorm | IDEA 本教程适用于 Windows / Mac / Linux 脚本来源自 discord. 源下载链接. 本教程以 IDEA 示",
    cover: "https://loremflickr.com/640/480",
    readers: 123,
    liking: 423,
    comments: 12,
    visible: true,
    artid: "6",
  },
  {
    createdAt: "2012-02-23T09:05:29.474Z",
    title: "pariatur-facilis-dolorum",
    description:
      "摘要： 下文失效，参见 这里 ~~JetBrain 全家桶破解注册教程~~ 本教程适用于 Jetbrains WebStorm | PyCharm | PhpStorm | IDEA 本教程适用于 Windows / Mac / Linux 脚本来源自 discord. 源下载链接. 本教程以 IDEA 示",
    cover: "https://loremflickr.com/640/480",
    readers: 4123,
    liking: 3,
    comments: 2,
    visible: true,
    artid: "7",
  },
];
const TopReads: React.FC<StandardProps> = (props) => {
  return (
    <div {...props}>
      <Heading level={1}>最多阅读</Heading>
      <SpacerBar gap={8} />
      <ul>
        {mocklist.map((it) => {
          const { artid, title, readers, liking, comments } = it;
          return (
            <li
              key={artid}
              className="700 flex  flex-col justify-between gap-2 p-2 transition-colors duration-TRANSITION_DURATION odd:bg-BG_MAIN_DEEP even:bg-BG_MAIN dark:odd:bg-DARK_BG_MAIN_DEEP  dark:even:bg-DARK_BG_MAIN sm:flex-row"
            >
              <span className="cursor-pointer hover:underline hover:[-webkit-text-stroke:thin]">
                {title}
              </span>
              <ul className="summary-start flex select-none justify-end gap-2 text-REMARK_TEXT">
                <li className="flex  min-w-[5rem] items-center  gap-2">
                  <ReadOutlined className="fill-REMARK_TEXT" /> {readers}
                </li>
                <li className="flex min-w-[5rem] items-center gap-2">
                  <HeartOutlined className="fill-REMARK_TEXT" /> {liking}
                </li>
                <li className="flex min-w-[5rem] items-center gap-2">
                  <MsgOutlined className="fill-REMARK_TEXT" /> {comments}
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
      {/* <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop
          effect={"fade"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, EffectFade, Autoplay, Pagination]}
          className="mySwiper"
        >
          {mocklist.map((it) => {
            return (
              <SwiperSlide key={it.artid}>
                <img className="h-96" src={it.cover} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
    </div>
  );
};

export default TopReads;
