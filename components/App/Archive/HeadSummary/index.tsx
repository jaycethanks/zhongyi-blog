import Fonts from '@/fonts';

import styles from './headsummary.module.scss';

const list = [
  {
    label: "发布文章",
    value: "120",
  },
  {
    label: "站点访问量",
    value: "10000",
  },
  {
    label: "阅读量",
    value: "800",
  },
  {
    label: "阅读平均耗时",
    value: "13min",
  },
  {
    label: "评论总计",
    value: "300",
  },
  {
    label: "累计点赞",
    value: "100",
  },
];

const HeadSummary = () => {
  return (
    <>
      <div className="head-summary">
        <ul className="grid grid-cols-3 items-center justify-items-center sm:grid-cols-11">
          {list.map((it, index) => {
            const { label, value } = it;
            return (
              <>
                {index != 0 ? (
                  <div className="hidden transition-colors duration-TRANSITION_DURATION sm:block sm:h-6 sm:w-[1px] sm:bg-DIVIDER_LINE sm:dark:bg-DARK_DIVIDER_LINE"></div>
                ) : (
                  ""
                )}
                <li>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-lg text-COLOR_MAIN dark:to-DARK_COLOR_MAIN">
                      {value}{" "}
                    </span>
                    <span
                      className={`${Fonts.SourceHanSerifCN} whitespace-nowrap text-xs text-REMARK_TEXT transition-colors duration-TRANSITION_DURATION  dark:text-DARK_REMARK_TEXT`}
                    >
                      {label}
                    </span>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HeadSummary;
