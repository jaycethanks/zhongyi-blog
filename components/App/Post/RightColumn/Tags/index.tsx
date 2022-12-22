import Heading from '@/components/common/Heading';
import SpacerBar from '@/components/common/SpacerBar';
import Fonts from '@/fonts';

const list = [
  { name: "React(12)", id: "3" },
  { name: "Vue(23)", id: "o" },
  { name: "Vue3(54)", id: "n" },
  { name: "Java(12)", id: "c" },
  { name: "Golang(23)", id: "g" },
  { name: "CSS(21)", id: "e" },
  { name: "Git(1)", id: "a" },
  { name: "JavaScript(33)", id: "d" },
  { name: "linux(23)", id: "f" },
  { name: "PHP(3)", id: "x" },
  { name: "PWA(3)", id: "v" },
  { name: "Three.js(1)", id: "5" },
  { name: "vue(15)", id: "h" },
  { name: "wordpress(3)", id: "t" },
];

const Categories: React.FC<StandardProps> = (props) => {
  return (
    <div {...props}>
      <Heading level={1}>标签</Heading>
      <SpacerBar gap={8} />
      <ul>
        {list.map((it) => (
          <li
            key={it.id}
            className="cursor-pointer  hover:bg-BG_MAIN_DEEP hover:underline hover:[-webkit-text-stroke:thin] hover:dark:bg-DARK_BG_MAIN_DEEP"
          >
            {it.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
