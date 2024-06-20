import React from 'react';

function About() {
  return (
    <div className='w-full p-20 bg-red-500 rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-neue-montreal text-[3vw] leading-[4.5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full border-t-[1px]   border-red-200 mt-20 '>

        <div className='w-1/2 pt-10 '>
        <h1 className='text-3xl mb-6'>Our Approach</h1>
        <button className='px-10 py-6 bg-zinc-900 rounded-full  text-white flex gap-10 items-center'>Read More <div className='w-3 h-3 bg-zinc-100 rounded-full'>
            </div></button>
        </div>
      </div>
    </div>
  );
}

export default About;
