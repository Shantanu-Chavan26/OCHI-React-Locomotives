import React from 'react';
import { motion, useScroll } from "framer-motion";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className='relative w-full min-h-screen text-white bg-[#F7F3E9]'>
      {/* Scroll Progress Indicator */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-blue-400 origin-left z-50'
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
    </div>
  );
}

export default App;
