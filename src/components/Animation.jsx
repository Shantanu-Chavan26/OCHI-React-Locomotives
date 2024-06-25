import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";

const grid = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15]
];
const size = 60;
const gap = 10;

const Square = ({ active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      className="absolute rounded-full"
      style={{
        background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
        width: `${size}px`,
        height: `${size}px`,
        top: `${rowIndex * (size + gap)}px`,
        left: `${colIndex * (size + gap)}px`,
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0
      }}
    />
  );
};

function Animation() {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#F7F3E9] gap-10">
        <div className=" Heading w-full h-screen font-bold font-serif text-center  text-7xl mt-[20%] text-orange-600">
          <div className="heading1 mb-20 border-2 border-black p-4 rounded-xl ml-2 "> <h1>Drag </h1> </div>
          <div className="heading2 mb-20 border-2 border-black p-4 rounded-xl ml-2">  <h1>Imagination </h1> </div>
          <motion.div className="heading3 border-2 border-black p-4 rounded-xl ml-2">  <h1>A.R.O.U.N.D</h1> </motion.div>
                   
        </div>
      <motion.div
        animate={{ '--base-hue': 180 }}
        initial={{ '--base-hue': 0 }}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        className="w-full h-screen"
        style={{ '--base-hue': 0 }} 
      >      
         
              
        <div
          className="relative w-full h-screen"
          style={{
            display: "flex",
            width: `${(size + gap) * 4 - gap}px`,
            height: `${(size + gap) * 4 - gap}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            perspective: 500
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_item, colIndex) => (
              <Square
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={`${rowIndex}-${colIndex}`}
              />
            ))
          )}
 
        </div>
      
      </motion.div>
    </div>
  );
}

export default Animation;
