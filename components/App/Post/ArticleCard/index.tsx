import { PropsWithChildren, ReactElement } from 'react';

import Heading from '@/components/common/Heading';
import HeartOutlined from '@/components/Icons/HeartOutlined';
import MsgOutlined from '@/components/Icons/MsgOutlined';
import ReadOutlined from '@/components/Icons/ReadOutlined';
import Fonts from '@/fonts';

const ArticleCard: React.FC<PropsWithChildren & StandardProps> & {
  ArticleItem: React.FC<StandardProps & ArticleItemProps>;
} = ({ children, ...rest }) => {
  return (
    <div
      className={`xxl:grid-cols-4 grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3  ${{
        ...rest,
      }}`}
    >
      {children}
    </div>
  );
};

type ArticleItemProps = {
  article: {
    artid: string;
    title: string;
    description: string;
    createdAt: string;
    liking: number;
    readers: number;
    cover: string;
    visible: boolean;
    comments: number;
  };
};
const ArticleItem: React.FC<StandardProps & ArticleItemProps> = (props) => {
  const {
    artid,
    title,
    description,
    createdAt,
    liking,
    readers,
    cover,
    comments,
  } = props.article;
  return (
    <div
      {...props}
      className="flex  flex-col  justify-between bg-BG_MAIN_DEEP transition-colors duration-TRANSITION_DURATION dark:bg-DARK_BG_MAIN_DEEP"
    >
      <main className="">
        <div className="relative overflow-hidden ">
          {cover ? (
            <div
              className="
            h-48
            bg-white/30  
            bg-cover 
            bg-center 
            bg-no-repeat 
            transition-transform
            duration-150
            hover:scale-105"
              style={{ backgroundImage: `url(${cover})` }}
            ></div>
          ) : (
            <div
              className="flex h-48 items-center justify-center p-4 text-center transition-all duration-150
            hover:scale-105
            hover:font-bold
            
            "
            >
              {title}
            </div>
          )}

          <div
            className={`
            ${Fonts.SourceHanSansCNRegular}
            absolute 
            bottom-0 
            left-0 
            right-0
            select-none  
            bg-BG_MAIN/40
            p-1
            text-xs text-TEXT_MAIN
            backdrop-blur-2xl
            backdrop-brightness-50
            transition-colors
            duration-TRANSITION_DURATION dark:bg-DARK_BG_MAIN/40
            dark:text-DARK_TEXT_MAIN
            `}
          >
            <div className="cursor-pointer font-semibold hover:[-webkit-text-stroke:thin]">
              <p>[Markdown 必知必会]</p>
            </div>
            {/* prettier-ignore */}
            <ul className="flex flex-wrap gap-1 underline ">
              <li className="] cursor-pointer  whitespace-nowrap hover:[-webkit-text-stroke:thin]">#React</li>
              <li className="cursor-pointer whitespace-nowrap hover:[-webkit-text-stroke:thin]">#Javascript</li>
              <li className="cursor-pointer whitespace-nowrap hover:[-webkit-text-stroke:thin]">#高级</li>
              <li className="cursor-pointer whitespace-nowrap hover:[-webkit-text-stroke:thin]">#高级</li>
              <li className="cursor-pointer whitespace-nowrap hover:[-webkit-text-stroke:thin]">#高级</li>
            </ul>
          </div>
        </div>

        <div className="select-text p-2">
          <div className={`min-h-[4rem] w-full overflow-hidden break-all`}>
            <Heading
              level={3}
              className={`${Fonts.SourceHanSansCNRegular} cursor-pointer select-text text-ellipsis font-semibold hover:underline hover:[-webkit-text-stroke:thin]`}
            >
              {title}
            </Heading>
          </div>
          <p
            className={`text-sm leading-6 text-REMARK_TEXT dark:text-DARK_REMARK_TEXT`}
          >
            {description}
          </p>
        </div>
      </main>
      <footer className="select-none p-2 text-sm">
        <div className="summary-bar">
          <ul className="summary-start flex gap-6 text-REMARK_TEXT">
            <li className="flex items-center gap-2">
              <ReadOutlined className="fill-REMARK_TEXT" /> {readers}
            </li>
            <li className="flex items-center gap-2">
              <HeartOutlined className="fill-REMARK_TEXT" /> {liking}
            </li>
            <li className="flex items-center gap-2">
              <MsgOutlined className="fill-REMARK_TEXT" /> {comments}
            </li>
          </ul>
        </div>
        {/* <p>{new Date(createdAt).toLocaleDateString()}</p> */}
      </footer>
    </div>
  );
};

ArticleCard.ArticleItem = ArticleItem;
export default ArticleCard;
