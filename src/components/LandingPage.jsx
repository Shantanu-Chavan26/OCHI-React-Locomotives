import { motion } from 'framer-motion';
import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
motion

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 border-t-2'>
       <div className='textstructure mt-52 px-20'>
        {["We Create" ,"Eye Opening" , "Presentations"].map((item , index)=>{
            return  <div className='masker font-serif font-semibold'> 
            <div className='w-fit flex'>
            {index === 1 && <motion.div initial={{width:0}}  animate={{width:"9vw"}} transiton={{ease:[0, 0.55, 0.45, 1] , duration:5}}   className='mr-5 rounded-md relative w-[9vw] h-[5vw] bg-red-500'></motion.div>}
            <h1 className='uppercase text-7xl leading-[7.5vw]tracking-tigher'>{item}</h1>
            </div>
          </div>
      
        })}
       
        
       </div>
       <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between py-5 px-20 '>
        {["For public and private companies" , "From the first pitch to IPO"].map((item , index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border-[2px] border-zinc-700 rounded-full font-semibold text-md uppercase'>start the project</div>
          <div className='w-10 h-10 rounded-full border-[2px] border-zinc-700 flex items-center justify-center'>
          <FaLocationArrow />
          </div>
        </div>
       </div>
    </div>
  );
}

export default LandingPage
