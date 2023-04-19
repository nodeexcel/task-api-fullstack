import React from 'react'
import { useScroll, useTransform ,motion} from "framer-motion";

const Gallery = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 3000]);
  return (
    <div className='bg-white text-black'>
      <motion.h1 className='title' style={{x}}>We sell furniture</motion.h1>
    </div>
  )
}

export default Gallery
