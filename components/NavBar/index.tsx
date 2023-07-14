import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

import moon from "@/components/Icons/animateIcon/moon.png";
import sun from "@/components/Icons/animateIcon/sun.png";

import type { LinkProps } from "next/link";
import eventBus from "@/utils/useEventBus";

declare const LinkProps: LinkProps & {
  before: string;
};

const DarkModeSwitcher: React.FC<PropsWithChildren & StandardProps> = ({
  className,
}) => {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    const html = document.querySelector("html");
    const state = html?.classList.toggle("dark");
    window.localStorage.setItem("theme", state ? state?.toString() : "false");
    setIsDark(!isDark);
    eventBus.emit("toggleTheme", isDark);
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
    <div onClick={handleClick} className={`cursor-pointer  ${className}`}>
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
  { path: "/post", name: "P", title: "Posts" },
  { path: "/archieve", name: "A", title: "Archieve" },
  { path: "/board", name: "B", title: "Board" },
];
const NavItem = ({
  href,
  title,
  name,
}: PropsWithChildren<{ href: string; title: string; name: any }>) => (
  <li className="h-auto shrink-0">
    <Link
      className={`
        flex 
        w-full 
        min-w-[50px]
        items-center
        justify-center
        text-base
        leading-8
      `}
      title={title}
      href={href}
    >
      <span>{name}</span>
    </Link>
  </li>
);
const NavBar = () => {
  // 收缩展开header
  const headerRef = useRef<HTMLDivElement>(null);
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", fixNav);
    function fixNav() {
      if (!headerRef.current) return;
      if (window.scrollY > headerRef.current.offsetHeight + 150) {
        // header.classList.add('active');
        setShrink(true);
      } else {
        // header.classList.remove('active');
        setShrink(false);
      }
    }
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`
          ${shrink && "-translate-y-full"}
          sticky
          inset-x-0
          top-0
          z-50 
          select-none 
          bg-BG_MAIN
          text-sm
          transition-all
          duration-200
          dark:border-gray-700
          dark:bg-DARK_BG_MAIN
          `}
      >
        <nav className="h-12 w-full px-4">
          <ul className="flex h-full items-center  justify-end gap-1 sm:gap-4">
            <div>
              <NavItem href="/" name={<h1>/</h1>} title="Home Page" />
            </div>
            {DEFAULT_NAV_LIST.map(({ path, name, title }) => {
              return (
                <NavItem key={path} href={path} name={name} title={title} />
              );
            })}
            <DarkModeSwitcher className="shrink-0" />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
