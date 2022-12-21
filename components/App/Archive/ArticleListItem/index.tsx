import Link from 'next/link';

import HeartOutlined from '@/components/Icons/HeartOutlined';
import MsgOutlined from '@/components/Icons/MsgOutlined';
import ReadOutlined from '@/components/Icons/ReadOutlined';

import styles from './articlelistitem.module.scss';

type ArticleListItemProps = {
  article: {
    artid: string;
    title: string;
    description: string;
    createAt: string;
    liking: number;
    comments: number;
    read: number;
  };
};
const ArticleListItem: React.FC<ArticleListItemProps & StandardProps> = ({
  article,
  ...rest
}) => {
  const { artid, title, description, createAt, liking, comments, read } =
    article;
  return (
    <div
      className="bg-BG_MAIN_DEEP px-4 py-2  transition-colors duration-TRANSITION_DURATION dark:bg-DARK_BG_MAIN_DEEP"
      {...rest}
    >
      <div className="title text-TEXT_MAIN transition-colors duration-TRANSITION_DURATION dark:text-DARK_TEXT_MAIN">
        <Link
          href="/post/"
          className=" hover:text-blue-500 dark:hover:text-blue-600"
        >
          {title}
        </Link>
      </div>
      <div className="description text-sm text-REMARK_TEXT">{description}</div>
      <div className="summary-bar pt-2">
        <ul className="summary-start flex gap-6 text-REMARK_TEXT">
          <li className="flex items-center gap-2">
            <ReadOutlined className="fill-REMARK_TEXT" /> {read}
          </li>
          <li className="flex items-center gap-2">
            <HeartOutlined className="fill-REMARK_TEXT" /> {liking}
          </li>
          <li className="flex items-center gap-2">
            <MsgOutlined className="fill-REMARK_TEXT" /> {comments}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArticleListItem;
