import React,{useState} from 'react'
import {motion} from 'framer-motion'
import './App.scss'
export const Test = () => {

    const [clicked, setClicked] = useState(false);


   const variants = {
        hidden: { opacity: 0,scale:0.4, x:0 },
        visible:(i)=>( { opacity: 1,scale:1,y:30,transition:{duration:0.5,delay:i*0.2} } ),
   }
  
   const items=["item 1","item 2","item 3","item 4"];

  return (
    <div className='testing'>
        <motion.ul initial="hidden" animate="visible" variants={variants} >
            {items.map((item,i)=>{
                return <motion.li
                variants={variants} key={item} custom={i}
                >{item}</motion.li>
            })}
        </motion.ul>
    </div>
  )
}


export default Test;