import React from 'react'
import './home.scss'
import { motion } from 'framer-motion'

const textvariants={
  initial:{
    x:-500,
    opacity:0
  },

  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerchildren:0.5
    }
  },
}

const slidevariants={
  initial:{
   x:0
  },

  animate:{
    x:"-220%",
    transition:{
      duration:20,
      repeat:Infinity,
      repeatType:"mirror"
    }
  }
}



export const Home = () => {

  return (
    <div className='home'>
      <div className='wrapper'>
        <motion.div className='text' initial="initial" animate="animate">
            <motion.h4 variants={textvariants}>AKSHITH REDDY</motion.h4>
            <motion.h1 variants={textvariants}>Web Developer</motion.h1>
            <motion.div variants={textvariants} className='buttons'>
                 <motion.button variants={textvariants} whileHover={{scale:1.1,cursor:'pointer',background:'white',color:'black'}} className='fbutton'>See my work</motion.button>
                 <motion.button variants={textvariants} whileHover={{scale:1.1,cursor:'pointer',background:'white',color:'black'}} className='sbutton'>Contact me</motion.button>
            </motion.div>
        </motion.div>
      </div>
      <motion.div className='slidingtext' variants={slidevariants} initial="initial" animate="animate">
        FullStack Developer
      </motion.div>
        <div className='image'>
             <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}
