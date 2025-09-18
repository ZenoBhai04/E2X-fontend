import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  scale?: number;
  onClick?: () => void;
}

const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = '', 
  tiltMaxAngle = 15, 
  scale = 1.05,
  onClick 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -tiltMaxAngle;
    const rotateYValue = (mouseX / (rect.width / 2)) * tiltMaxAngle;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`transform-gpu ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        style={{
          transform: `translateZ(${isHovered ? '20px' : '0px'})`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;