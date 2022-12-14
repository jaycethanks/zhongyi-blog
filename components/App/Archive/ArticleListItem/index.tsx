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
const ArticleListItem: React.FC<ArticleListItemProps> = ({ article }) => {
  const { artid, title, description, createAt, liking, comments, read } =
    article;
  return (
    <div className="bg-slate-100 px-4 py-2 dark:bg-slate-700">
      <div className="title">
        <Link
          href="/post/"
          className="transition-colors duration-100 hover:text-blue-500 dark:hover:text-blue-600"
        >
          {title}
        </Link>
      </div>
      <div className="description text-sm text-slate-500 ">{description}</div>
      <div className="summary-bar pt-2">
        <ul className="summary-start flex gap-6 text-slate-500">
          <li className="flex items-center gap-2">
            <ReadOutlined className="fill-slate-500" /> {read}
          </li>
          <li className="flex items-center gap-2">
            <HeartOutlined className="fill-slate-500" /> {liking}
          </li>
          <li className="flex items-center gap-2">
            <MsgOutlined className="fill-slate-500" /> {comments}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArticleListItem;
