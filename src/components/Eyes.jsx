import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen bg-[#F7F3E9] relative'>
      <div className='absolute w-full h-full bg-cover bg-center opacity-90' style={{ backgroundImage: 'url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")' }}></div>
      <div className='relative w-full h-full flex justify-center items-center'>
        <div className='black-div h-32 flex gap-10'>
          <div className='flex items-center w-[16vw] h-[17.2vw] bg-white rounded-full justify-center'>
            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative flex justify-center items-center'>
              <h2>Play</h2>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='w-5 h-5 rounded-full bg-white'></div>
              </div>
            </div>
          </div>
          <div className='flex items-center w-[16vw] h-[17.2vw] bg-white rounded-full justify-center'>
            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative flex justify-center items-center'>
              <h2>Play</h2>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='w-5 h-5 rounded-full bg-white'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
