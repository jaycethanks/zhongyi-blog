import Heading from '@/components/common/Heading';
import SpacerBar from '@/components/common/SpacerBar';
import Fonts from '@/fonts';

const list = [
  { name: "React(12)", id: "3" },
  { name: "Vue(23)", id: "o" },
  { name: "Vue3(54)", id: "n" },
  { name: "Java(12)", id: "c" },
  { name: "Golang(23)", id: "g" },
  {
    name: "《Learning Three.js The JavaScript 3D Library for WebGL, Second Edition》(4)",
    id: "t",
  },
  { name: "《Three.js 入门指南》(15)", id: "2" },
  { name: "《你不得不知的Markdown》(7)", id: "g" },
  { name: "CSS(21)", id: "e" },
  { name: "Git(1)", id: "a" },
  { name: "HTML/CSS/JS基础(21)", id: "3" },
  { name: "JavaScript(33)", id: "d" },
  { name: "JS API 专项学习(4)", id: "z" },
  { name: "linux(23)", id: "f" },
  { name: "PHP(3)", id: "x" },
  { name: "PWA(3)", id: "v" },
  { name: "Three.js(1)", id: "5" },
  { name: "vue(15)", id: "h" },
  { name: "wordpress(3)", id: "t" },
  { name: "博客类站点学习(1)", id: "w" },
  { name: "代码规范(2)", id: "k" },
  { name: "电脑使用(25)", id: "u" },
  { name: "经济学人每周一译(5)", id: "q" },
  { name: "开发工具的使用(12)", id: "v" },
  { name: "每日一点-编程(4)", id: "r" },
  { name: "其他(7)", id: "a" },
  { name: "收藏文章(4)", id: "b" },
  { name: "微信小程序(2)", id: "6" },
  { name: "我的收藏媒体(1)", id: "w" },
  { name: "项目开发的时候遇到的一些问题(15)", id: "1" },
  { name: "烟波坐船听雨声，静若蓑笠钓鱼翁。(2)", id: "0" },
  { name: "英语学习(3)", id: "r" },
];

const Categories: React.FC<StandardProps> = (props) => {
  return (
    <div {...props}>
      <Heading level={1}>分类</Heading>
      <SpacerBar gap={8} />
      <ul>
        {list.map((it) => (
          <li
            key={it.id}
            className="cursor-pointer hover:bg-BG_MAIN_DEEP hover:underline hover:[-webkit-text-stroke:thin] hover:dark:bg-DARK_BG_MAIN_DEEP"
          >
            {it.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
