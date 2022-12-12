import Link from 'next/link';
import { PropsWithChildren, useState } from 'react';

const DarkModeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
    setIsDark(!isDark);
  };
  return (
    <div onClick={handleClick}>
      <span>{isDark ? "Light" : "Dark"}</span>
    </div>
  );
};
// const [menuFold, setMenuFold] = useState(false);
// const MobileMenu = () => {
//   const clickHandler = () => {
//     setMenuFold(!menuFold);
//   };
//   return <button onClick={clickHandler}>{menuFold.toString()}</button>;
// };
const DEFAULT_NAV_LIST = [
  { path: "/post", name: "文章" },
  { path: "/archive", name: "归档" },
  { path: "/messageboard", name: "留言" },
  { path: "/about", name: "关于" },
];
const NavItem = ({
  href,
  name,
}: PropsWithChildren<{ href: string; name: any }>) => (
  <li className="flex w-full items-center border-b border-gray-200 dark:border-gray-700 sm:h-auto sm:w-auto sm:border-none">
    <Link href={href}>{name}</Link>
  </li>
);
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const menuClickHandler = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <header
        className="
    sticky 
    inset-x-0
    top-0 z-50 
    flex 
    h-12
    w-full
    justify-between
    border-b
    bg-white bg-opacity-50 px-4 text-sm
    font-medium
    shadow-sm
    backdrop-blur-[10px]
    backdrop-saturate-150
    dark:border-gray-700
    dark:bg-gray-900
    dark:bg-opacity-50
    sm:backdrop-blur-[20px]

    "
      >
        <nav className="hidden sm:block">
          <ul className="flex h-full items-center gap-4">
            <div>
              <NavItem href="/" name={<h1>Home</h1>} />
            </div>
            {DEFAULT_NAV_LIST.map(({ path, name }) => {
              return <NavItem key={path} href={path} name={name} />;
            })}
          </ul>
        </nav>

        <div className="operator flex h-full w-full items-center justify-between sm:w-auto">
          <DarkModeSwitcher />
          <div onClick={menuClickHandler} className="sm:hidden">
            {expanded ? "FOLD" : "UNFOLD"}
          </div>
        </div>
      </header>

      {/* mobile */}

      <div className="fixed top-12 left-0 right-0 bottom-0 sm:hidden">
        <nav
          className={
            "dark:shadow-white-50 fixed top-12 right-0 left-0 z-20  bg-white/50 pb-4  shadow-sm  backdrop-blur-[10px] transition-transform duration-300 dark:bg-gray-900/50  sm:hidden" +
            `${expanded ? " translate-y-0" : " -translate-y-[150%]"}`
          }
        >
          <ul className="flex h-full flex-col items-start gap-4 p-2 ">
            {DEFAULT_NAV_LIST.map(({ path, name }) => {
              return <NavItem key={path} href={path} name={name} />;
            })}
          </ul>
        </nav>
        {!expanded ? null : (
          <div className="mask fixed top-12 left-0 right-0 bottom-0 z-10 bg-black/5"></div>
        )}
      </div>
    </>
  );
};

export default NavBar;
