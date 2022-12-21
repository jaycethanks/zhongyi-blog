import { PropsWithChildren, ReactElement } from 'react';

import Heading from '@/components/common/Heading';
import HeartOutlined from '@/components/Icons/HeartOutlined';
import MsgOutlined from '@/components/Icons/MsgOutlined';
import ReadOutlined from '@/components/Icons/ReadOutlined';

const ArticleCard: React.FC<PropsWithChildren & StandardProps> & {
  ArticleItem: React.FC<StandardProps & ArticleItemProps>;
} = ({ children, ...rest }) => {
  return (
    <div
      className={`xxl:grid-cols-5 grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${{
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
      className="flex flex-col justify-between   bg-BG_MAIN_DEEP p-2 dark:bg-DARK_BG_MAIN_DEEP"
    >
      <main className="">
        <div className="overflow-hidden ">
          <div
            className="h-48  bg-cover bg-center bg-no-repeat transition-all duration-200 hover:scale-125"
            style={{ backgroundImage: `url(${cover})` }}
          ></div>
        </div>
        <Heading level={3} className="font-extrabold">
          {title}
        </Heading>
        <Heading
          level={5}
          className="text-REMARK_TEXT dark:text-DARK_REMARK_TEXT"
        >
          {description}
        </Heading>
      </main>
      <footer className="text-sm">
        <div className="summary-bar pt-2">
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
