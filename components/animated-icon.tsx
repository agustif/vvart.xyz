"use client"

import { motion } from "framer-motion";

interface AnimatedIconProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ children, delay = 0, x = 0, y = 5, ...props }) => {
  const iconVariants = {
    initial: { opacity: 0, x: x || 0, y: y || 5, rotate: 0, scale: 0.8 },
    animate: { opacity: 1, x: x || 0, y: y || 0, rotate: 0, scale: 1 },
  };

  return (
    <motion.div
      variants={iconVariants}
      initial="initial"
      animate="animate"
      transition={{ delay, duration: 0.5 }}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
