import Heading from '@/components/common/Heading';
import Font_Ba from '@/fonts/SvgIconFonts/Font_Ba';
import Font_Dong from '@/fonts/SvgIconFonts/Font_Dong';
import Font_Mu from '@/fonts/SvgIconFonts/Font_Mu';
import Font_You from '@/fonts/SvgIconFonts/Font_You';

type BannerProps = {
  whetherData: any;
};
const Banner: React.FC<StandardProps & BannerProps> = ({
  whetherData,
  ...rest
}) => {
  const { city, data } = whetherData;
  return (
    <>
      <div
        className="flex justify-between border-b border-dashed dark:border-gray-600"
        {...rest}
      >
        {/* hello */}
        <div className="item flex flex-1 flex-col items-center sm:flex-row sm:items-start">
          <Font_Mu
            size="w-24 h-24 sm:w-24 sm:h-24 "
            className="fill-TEXT_MAIN dark:fill-DARK_TEXT_MAIN"
          ></Font_Mu>
          <Font_Dong
            size="w-24 h-24 sm:w-24 sm:h-24"
            className="fill-TEXT_MAIN dark:fill-DARK_TEXT_MAIN"
          ></Font_Dong>
          <Font_You
            size="w-24 h-24 sm:w-24 sm:h-24"
            className="fill-TEXT_MAIN dark:fill-DARK_TEXT_MAIN"
          ></Font_You>
          <Font_Ba
            size="w-24 h-24 sm:w-24 sm:h-24"
            className="fill-TEXT_MAIN dark:fill-DARK_TEXT_MAIN"
          ></Font_Ba>

          {/* <Heading level={4}>Find me in below links !</Heading> */}
        </div>
        {/* whether */}
        <div className="flex flex-col items-end">
          <ul className="flex flex-col flex-nowrap items-center justify-between gap-1 whitespace-nowrap  sm:flex-row">
            {data.map(
              (
                day: {
                  fxDate: string;
                  textDay: string;
                  tempMax: string;
                  tempMin: string;
                },
                index: number
              ) => {
                return (
                  <li
                    key={index}
                    className="flex flex-col items-center justify-center gap-1 bg-BG_MAIN_DEEP py-2 px-4 transition-colors duration-TRANSITION_DURATION dark:bg-DARK_BG_MAIN_DEEP"
                  >
                    <div className="flex shrink-0 flex-col items-center gap-2 sm:flex-row">
                      <p className="text-3xl">{day.textDay}</p>
                      <div className="text-sm">
                        <p>最高温度：{day.tempMax}</p>
                        <p>最低温度：{day.tempMin}</p>
                      </div>
                    </div>
                    <span className="text-xs">
                      {["今天", "明天", "后天"][index]}
                    </span>
                  </li>
                );
              }
            )}
          </ul>
          <div className="mb-2 p-2 text-2xl"></div>

          <span className="flex flex-col items-end justify-center whitespace-nowrap text-lg sm:flex-row">
            <span>2022 年 12 月 23 日</span>{" "}
            <span className="hidden sm:block">·</span> <span>{city}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Banner;
