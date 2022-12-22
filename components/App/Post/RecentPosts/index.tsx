import ArticleCard from '@/components/App/Post/ArticleCard/index';
import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import SpacerBar from '@/components/common/SpacerBar';
import Fonts from '@/fonts';

const { ArticleItem } = ArticleCard;

const mocklist = [
  {
    createdAt: "2021-07-14T05:29:58.195Z",
    title: "[工具] Clash #Linux #Ubuntu 配置教程",
    description:
      "摘要： 下文失效，参见 这里 ~~JetBrain 全家桶破解注册教程~~ 本教程适用于 Jetbrains WebStorm | PyCharm | PhpStorm | IDEA 本教程适用于 Windows / Mac / Linux 脚本来源自 discord. 源下载链接. 本教程以 IDEA 示",
    cover: "",
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
    cover: "",
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
];

const RecentPosts: React.FC<StandardProps> = (props) => {
  return (
    <div {...props}>
      <Heading
        level={1}
        rightSlot={
          <Button className="py-2 px-4">
            <span className="text-base">查看更多</span>
          </Button>
        }
      >
        历史发布
      </Heading>
      <SpacerBar gap={8} />
      <ArticleCard>
        {mocklist.map((it, index) => {
          return <ArticleItem key={it.artid} article={it} />;
        })}
      </ArticleCard>
    </div>
  );
};

export default RecentPosts;
