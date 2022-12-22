import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, useEffect, useState } from 'react';

import moonFace from '@/components/Icons/animateIcon/moon-face.png';
import moon from '@/components/Icons/animateIcon/moon.png';
import sun from '@/components/Icons/animateIcon/sun.png';

import type { LinkProps } from "next/link";
declare const LinkProps: LinkProps & {
  before: string;
};

const DarkModeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    const html = document.querySelector("html");
    const state = html?.classList.toggle("dark");
    window.localStorage.setItem("theme", state ? state?.toString() : "false");
    setIsDark(!isDark);
  };
  useEffect(() => {
    const savedTheme = window?.localStorage.getItem("theme");
    if (savedTheme === "true") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <span>
        {isDark ? (
          <Image src={sun} className="h-6 w-6" alt="" />
        ) : (
          <Image src={moon} className="h-6 w-6" alt="" />
          // <Image src={moonFace} className="h-6 w-6 -rotate-12" alt="" />
        )}
      </span>
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
  { path: "/column", name: "专栏" },
  { path: "/archive", name: "归档" },
  { path: "/messageboard", name: "留言" },
  { path: "/about", name: "关于" },
];
const NavItem = ({
  href,
  name,
}: PropsWithChildren<{ href: string; name: any }>) => (
  <li className="w-full  sm:h-auto sm:w-auto sm:border-none">
    <Link
      className={`
        flex 
        h-12 
        w-full 
        items-center
        justify-center
        text-lg
        leading-8
        sm:border-none
        sm:text-base
      `}
      href={href}
    >
      <span>{name}</span>
    </Link>
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
    top-0
    z-50 flex 
    h-12 
    w-full
    select-none
    items-center
    justify-between
    px-4 
    text-sm font-medium
    shadow-md
    backdrop-blur-[10px]
    dark:border-gray-700
    dark:bg-opacity-50
    sm:bg-opacity-50
    sm:backdrop-blur-[20px]
    sm:backdrop-saturate-150

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

        {/* date */}
        {/* <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center">
          <span>
            {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
          </span>
        </div> */}

        <div className="operator flex h-full w-full items-center justify-between sm:w-auto">
          <DarkModeSwitcher />
          <div onClick={menuClickHandler} className="sm:hidden">
            {expanded ? "FOLD" : "UNFOLD"}
          </div>
        </div>
      </header>

      {/* mobile */}

      <div className="fixed top-12 left-0 right-0  z-[49] sm:hidden">
        <nav
          className={
            "dark:shadow-white-50 slow-ease fixed top-12 right-0 left-0 z-20 pb-4 transition-transform duration-TRANSITION_DURATION  sm:hidden" +
            `${expanded ? " translate-y-0" : " -translate-y-[150%]"}`
          }
        >
          <ul className="flex h-full flex-col items-start gap-4 p-4 ">
            <NavItem key="/" href="/" name="Home" />
            {DEFAULT_NAV_LIST.map(({ path, name }) => {
              return <NavItem key={path} href={path} name={name} />;
            })}
          </ul>
        </nav>
        {!expanded ? null : (
          <div className="mask fixed top-12 left-0 right-0 bottom-0 z-10  backdrop-blur-[10px]"></div>
        )}
      </div>
    </>
  );
};

export default NavBar;
