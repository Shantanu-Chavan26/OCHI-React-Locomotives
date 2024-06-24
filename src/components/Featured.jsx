import React from 'react';

function Featured() {
  return (
    <div className='w-full py-10 bg-zinc-900'>
      <div className='w-full px-10 border-b-2 pb-20'>
        <h1 className='text-7xl font-neue-montreal text-white'>Featured Projects</h1>
      </div>
      <div className='px-20 mt-10'>
        <div className='cardcontainer w-full flex gap-10 relative'>
          {/* Left Card */}
          <div className='relative card w-1/2 h-[75vh] overflow-hidden'>
            <h1 className='absolute z-10 text-6xl leading-none tracking-tighter font-neue-montreal text-white w-full text-center top-[50%] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 py-2 mr-10'>
              Project 1
            </h1>
            <div className='rounded-xl w-full h-full overflow-hidden'>
              <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="Project 1" />
            </div>
          </div>
          {/* Right Card */}
          <div className='relative card w-1/2 h-[75vh] overflow-hidden'>
            <h1 className='absolute z-10 text-6xl leading-none tracking-tighter font-neue-montreal text-white w-full text-center top-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 py-2'>
              Project 2
            </h1>
            <div className='rounded-xl w-full h-full overflow-hidden'>
              <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="Project 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
