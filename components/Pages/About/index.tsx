import Link from 'next/link';
import SvgBox from '@/components/SvgBox';
import LazyImage from '@/components/common/LazyImage/index';
import SpacerBar from '@/components/common/SpacerBar';
import type { ABOUT } from '@/apis/QueryList';

interface LinkType {
  icon?: string
  title?: string
  url?: string
}
const About: React.FC<{ about: ABOUT }> = ({ about, ...rest }) => {
  const { avatar, links, msg } = about;
  const parsedLinks = JSON.parse(links) as LinkType[];
  return (
    <>
      {/* <div className="HeadSlogan relative">
        <BannerImage
          height="h-96"
          src="https://picsum.photos/seed/picsum/1280/480"
          title="关于"
          subTitle="emmm...好像确实放个图片会好看一些"
        />
      </div> */}

      <div className="p-2 sm:p-0">
        <div className="basic-info card">
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="inline-block w-48 shrink-0">
              <LazyImage
                height="h-48"
                src={avatar}
              />
              <ul className="link-group mt-4 flex justify-center gap-2 sm:justify-start">
                {parsedLinks.map((it) => {
                  const { title, icon, url } = it;
                  return (
                    <li key={title}>
                      <a
                        title={title}
                        href={url}
                        target="_blank"
                        key={title}
                        className={'flex items-center justify-center bg-BG_MAIN_DEEP p-2 transition-colors duration-TRANSITION_DURATION dark:bg-DARK_BG_MAIN_DEEP'}
                      >
                        <SvgBox width="16" height="16" className=' fill-TEXT_MAIN transition-all duration-TRANSITION_DURATION dark:fill-DARK_TEXT_MAIN'>
                          {icon}
                        </SvgBox>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="leading-7">
              <span className="inline-block  w-[2rem] tracking-wider"></span>
              {msg}
              <p>
                <span className="inline-block  w-[2rem] tracking-wider"></span>
                如果需要，你可以通过页面中提供的一些方式找到我，或者,
                你也可以在本博客
                <Link
                  className=" text-blue-500  dark:text-blue-700"
                  href={'/board'}
                >
                  留言板
                </Link>
                和我说点什么, 我将会收到邮件通知。
              </p>
            </div>
          </div>
          <SpacerBar gap={16} />
        </div>

        {/* {abouts.map((about) => {
            const { aboid, title, content, subTitle } = about;
            return (
              <div key={aboid}>
                <Heading level={2}>{title}</Heading>
                <Heading level={4}>{subTitle}</Heading>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-500">
                  <span className="inline-block w-[2rem]"></span>
                  {content}
                </p>
                <SpacerBar gap={16} />
              </div>
            );
          })} */}
      </div>
    </>
  );
};

export default About;
