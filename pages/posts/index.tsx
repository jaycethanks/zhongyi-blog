import { type PropsWithChildren, type ReactNode, useState } from 'react';
import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import isMobileDevice from 'is-mobile';


const Posts =()=>{
  return <>
    <p className='text-white'>hello posts</p>
  </>
}


export default Posts;
