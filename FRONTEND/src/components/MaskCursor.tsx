import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MaskCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* SVG Definitions */}
      <svg
        className="fixed inset-0 pointer-events-none z-50"
        style={{ width: '100vw', height: '100vh' }}
      >
        <defs>
          <radialGradient id="cursorGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(251, 191, 36, 0.8)" />
            <stop offset="30%" stopColor="rgba(251, 191, 36, 0.4)" />
            <stop offset="70%" stopColor="rgba(251, 191, 36, 0.1)" />
            <stop offset="100%" stopColor="rgba(251, 191, 36, 0)" />
          </radialGradient>
          
          <mask id="cursorMask">
            <rect width="100%" height="100%" fill="black" />
            <motion.circle
              cx={mousePosition.x}
              cy={mousePosition.y}
              r="150"
              fill="white"
              animate={{
                r: isVisible ? 150 : 0,
                opacity: isVisible ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          </mask>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Masked overlay */}
        <rect
          width="100%"
          height="100%"
          fill="url(#cursorGradient)"
          mask="url(#cursorMask)"
          filter="url(#glow)"
        />
      </svg>

      {/* Cursor follower */}
      <motion.div
        className="fixed pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full shadow-lg" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <div className="w-10 h-10 border-2 border-amber-400 rounded-full animate-pulse" />
      </motion.div>
    </>
  );
};

export default MaskCursor;