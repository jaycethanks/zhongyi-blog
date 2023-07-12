import Heading from "@/components/common/Heading";
import Fonts from "@/fonts";
import Container from "@/components/common/Container";
const quickEntrylinks = [
  { path: "/", name: "Home" },
  { path: "/post", name: "文章" },
  { path: "/column", name: "专栏" },
  { path: "/archive", name: "归档" },
  { path: "/messageboard", name: "留言" },
  { path: "/about", name: "关于" },
];

const more = [
  { path: "/", name: "Github" },
  { path: "/", name: "Git Page" }
];
const Footer = () => (
  <div className="w-full bg-BG_MAIN dark:bg-DARK_BG_MAIN">
  <Container>
    {/* <div className="flex justify-start gap-6 items-start select-none   ">
      <div>
        <Heading level={3}>快速导航</Heading>
        <ul>
          {quickEntrylinks.map(({ path, name }) => {
            return (
              <li key={name}>
                <a className="underline underline-offset-4 mt-2 inline-block" href={path}>{name}</a>
              </li>
            );
          })}
          <li></li>
        </ul>
      </div>
      <div>
        <Heading level={3}>更多</Heading>
        <ul>
          {more.map(({ path, name }) => {
            return (
              <li key={name}>
                <a className="underline underline-offset-4 mt-2 inline-block" href={path}>{name}</a>
              </li>
            );
          })}
          <li></li>
        </ul>
      </div>
    </div> */}
    This is a simple footer
  </Container>
  </div>

);

export default Footer
