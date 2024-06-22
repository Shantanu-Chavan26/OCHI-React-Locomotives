import React from 'react'

function Featured() {
  return (
    <div className='w-full py-10 bg-zinc-900'>
      <div className='w-full px-10 border-b-2 pb-20'> 
            <h1 className='text-7xl font-neue-montreal '>Featured Projects</h1>
        
      </div>
      <div className='px-20 mt-10'>
      <div className='cardcontainer w-full flex gap-10 '>
        
            <div className='relative card w-1/2  h-[75vh]  overflow-hidden '> 
                 <h1 className='absolute  z-[9] text-6xl leading-none tracking-tighter  font-neue-montreal right-0 -translate-x-1/2 top-1/2 -translate-y-1/2'>Project 1 </h1>
              <div className=' card rounded-xl  w-full h-full overflow-hidden'>
                <img className="w-full h-full bg-cover "  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
              </div>
            </div>
            <div className='card w-1/2 rounded-xl h-[75vh]  overflow-hidden relative '>
            <h1 className='absolute  z-[9] text-6xl leading-none tracking-tighter  font-neue-montreal left-0 translate-x-1/2 top-1/2 translate-y-1/2'>Project 2</h1>
            <div className='  rounded-xl  w-full h-full'>
            <img className="w-full h-full bg-cover "  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Featured
