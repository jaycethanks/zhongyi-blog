import { PropsWithChildren } from 'react';

import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import RightArrowOutlined from '@/components/Icons/RightArrowOutlined';
import Fonts from '@/fonts';
import { Editor, Viewer } from '@bytemd/react';

import style from './juejin.module.scss';

type AtricleCardProps = {
  content: string;
  title: string;
  description: string;
};
const AtricleViewer: React.FC<AtricleCardProps & StandardProps> = ({
  className,
  content,
  title,
  description,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`${className} ${style["markdown-body"]}  relative  overflow-hidden  bg-BG_MAIN_DEEP p-6 pt-12 transition-colors duration-TRANSITION_DURATION dark:bg-DARK_BG_MAIN_DEEP`}
    >
      {/* 阅读更多操作文本 */}
      <div className="absolute inset-0 bottom-[unset] flex select-none justify-end">
        <Button className="p-2">
          阅读全文{" "}
          <RightArrowOutlined className="fill-TEXT_MAIN dark:fill-DARK_TEXT_MAIN" />
        </Button>
      </div>
      <p
        className={`${Fonts.SourceHanSerifCN} text-[1.986rem] font-semibold leading-10 tracking-wide [margin-bottom:1rem!important]`}
      >
        {title}
      </p>
      <Heading level={4} className={`${Fonts.KaiTi} font-semibold`}>
        —— {description}
      </Heading>
      <Viewer value={content}></Viewer>

      {/* 遮罩 */}
      <div className="absolute inset-0 top-[unset] h-12  bg-gradient-to-b from-transparent to-BG_MAIN_DEEP transition-colors duration-TRANSITION_DURATION dark:to-DARK_BG_MAIN_DEEP"></div>
    </div>
  );
};

export default AtricleViewer;
