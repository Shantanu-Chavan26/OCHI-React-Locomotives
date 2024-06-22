import React from 'react';
import { motion } from "framer-motion"

function About() {
  return (
    <div className='w-full p-20 bg-[E6E0D4] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-neue-montreal text-[3vw] leading-[4.5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full border-t-[1px]   border-red-200 mt-20 flex gap-5 '>

        <div className='w-1/2 pt-10 '>
        <motion.h1    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} className='text-2xl mb-6 ml-4'>Our Approach</motion.h1>
        <motion.button animate={{
        scale: [1, 1, 1, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["50%", "50%", "50%", "50%", "50%"]
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }} className='px-10 py-6 bg-zinc-900 rounded-full  text-white flex gap-10 items-center'>Read More<div className='w-2 h-2 bg-zinc-100 rounded-full'>
            </div></motion.button>
        </div>
        <div className='w-1/2 h-[70vh] bg-white  rounded-3xl bg-[url("https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover '>
           
        </div>
      </div>
    </div>
  );
}

export default About;
