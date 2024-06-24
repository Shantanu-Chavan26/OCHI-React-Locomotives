import React from 'react';
import { motion } from "framer-motion";

function Featured() {
  return (
    <div className='w-full py-10 bg-zinc-900'>
      <div className='w-full px-10 border-b-2 border-white pb-20'>
        <h1 className='text-7xl font-serif text-semibold text-white'>Featured Projects</h1>
      </div>
      <div className='px-20 mt-10'>
        <div className='cardcontainer w-full flex justify-content: space-around flex-grow-10 gap-10 relative align-content:space-arund'>
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            className='leftcard relative card w-1/2 h-[75vh] overflow-hidden'
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='absolute z-10 text-5xl leading-none tracking-tighter font-neue-montreal text-[#b3fb21] w-full text-center top-[50%] left-1/2 transform -translate-x-1/2 py-2 mr-10'
            >
              {"PROJECT 1".split('').map((item, index) => <span key={index}>{item}</span>)}
            </motion.div>

            <div className='rounded-xl w-full h-full overflow-hidden'>
              <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="Project 1" />
            </div>
          </motion.div>

          

         
          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            className='rightcard relative card w-1/2 h-[75vh] overflow-hidden rounded-xl  border-2 border-white p-4'
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='absolute z-10 text-5xl leading-none tracking-tighter font-neue-montreal text-[#b3fb21] w-full text-center top-[50%] left-1/2 transform -translate-x-1/2 py-2 '
            >
              {"PROJECT 2".split('').map((item, index) => <span key={index}>{item}</span>)}
            </motion.div>

            <div className='rounded-xl w-full h-full overflow-hidden'>
              <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="Project 2" />
            </div>
          </motion.div>
        </div>
        <div className='cardcontainer w-full flex justify-content: space-around flex-grow-10 gap-10 relative align-content:space-arund mt-20'>
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            className='leftcard relative card w-1/2 h-[75vh] overflow-hidden'
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='absolute z-10 text-5xl leading-none tracking-tighter font-neue-montreal text-[#b3fb21] w-full text-center top-[50%] left-1/2 transform -translate-x-1/2 py-2 mr-10'
            >
              {"PROJECT 3".split('').map((item, index) => <span key={index}>{item}</span>)}
            </motion.div>

            <div className='rounded-xl w-full h-full overflow-hidden'>
              <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="Project 1" />
            </div>
          </motion.div>

          

          

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            className='rightcard relative card w-1/2 h-[75vh] rounded-xl overflow-hidden border-2 border-white p-4'
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='absolute z-10 text-5xl leading-none tracking-tighter font-neue-montreal text-[#b3fb21] w-full text-center top-[50%] left-1/2 transform -translate-x-1/2 py-2'
            >
              {"PROJECT 4".split('').map((item, index) => <span key={index}>{item}</span>)}
            </motion.div>

            <div className='rounded-xl w-full h-full overflow-hidden'>
              <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="Project 2" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
