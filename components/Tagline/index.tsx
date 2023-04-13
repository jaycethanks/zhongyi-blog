import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import moonFace from "@/components/Icons/animateIcon/moon-face.png";
import moon from "@/components/Icons/animateIcon/moon.png";
import sun from "@/components/Icons/animateIcon/sun.png";

import styles from "./tagline.module.scss"

import type { LinkProps } from "next/link";
import Fonts from "@/fonts";
declare const LinkProps: LinkProps & {
  before: string;
};


// const [menuFold, setMenuFold] = useState(false);
// const MobileMenu = () => {
//   const clickHandler = () => {
//     setMenuFold(!menuFold);
//   };
//   return <button onClick={clickHandler}>{menuFold.toString()}</button>;
// };
const TAGS = [
{path:"",name:"React(12)"},
{path:"",name:"Vue(23)"},
{path:"",name:"Vue3(54)"},
{path:"",name:"Java(12)"},
{path:"",name:"Golang(23)"},
{path:"",name:"CSS(21)"},
{path:"",name:"Git(1)"},
{path:"",name:"JavaScript(33)"},
{path:"",name:"linux(23)"},
{path:"",name:"PHP(3)"},
{path:"",name:"PWA(3)"},
{path:"",name:"Three.js(1)"},
{path:"",name:"vue(15)"},
{path:"",name:"wordpress(3)"},
];


const TagLine = () => {
  const taglineRef = useRef<HTMLUListElement>(null);
  const handleClick = (direction:1 | -1)=>{
    taglineRef.current && taglineRef.current.scrollBy({left:direction * 50,top:0,behavior : "smooth"})
    
    // 原来本来就支持 behavior : "smooth" ; - - !!!
    // runAniFn()
    // let count = 0;
    // let moveDelta = 20
    // let moveStep = 2
    // function runAniFn(){
    //   requestAnimationFrame(()=>{
    //     if(count >= moveDelta) return
    //     count+=moveStep
    //     taglineRef.current && taglineRef.current.scrollBy({left:direction * moveStep,top:0,behavior : "smooth"})
    //     requestAnimationFrame(runAniFn)
    //   })
    // }
    // taglineRef.current && taglineRef.current.scrollBy(direction * 50,0)
  }
  return (
    <div className="flex h-12 flex-nowrap items-center  border-b border-dashed dark:border-gray-600 select-none">
    <span className="hover:[-webkit-text-stroke:thin] cursor-pointer inline-block w-4" onClick={()=>handleClick(-1)}>&lt;</span>
    <ul ref={taglineRef} id="tagline" className={`transition-all overflow-x-auto w-full flex flex-nowrap   ${styles.hidden_scrollbar}`}>
      {TAGS.map(({path,name})=>{
        return <li key={name} className={`hover:[-webkit-text-stroke:thin] hover:underline underline-offset-4 inline-flex h-full items-center  mx-2 text-sm ${Fonts.HeiTi}`}><a  href={path}>{name}</a></li>
      })}
    </ul>
    <span className="hover:[-webkit-text-stroke:thin] cursor-pointer inline-block w-4" onClick={()=>handleClick(1)}>&gt;</span>
     
    </div>
  );
};

export default TagLine;
