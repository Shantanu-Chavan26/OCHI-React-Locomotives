import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".1"    className='w-full bg-[#F7F3E9] rounded-2xl rounded-tl-3xl rounded-tr-3xl'>
      <div className='text-black py-10 border-t-2 border-b-2 flex overflow-hidden whitespace-nowrap'>
        {/* <motion.h1
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 9 }}
          className='text-[9vw] leading-none font-serif font-semibold uppercase pt-10 -mb-15'
        >
          We are ochi
        </motion.h1> */}
        <motion.h1
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{ ease:'linear', repeat: Infinity, duration: 5 }}
          className='text-[9vw] leading-none font-serif font-semibold uppercase pt-10 -mb-[1vw] pr-5'
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className=' text-[9vw] leading-none font-serif font-semibold uppercase pt-10 -mb-[1vw] pr-5'
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
