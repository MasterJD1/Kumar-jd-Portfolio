import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export const ScaleIn = ({ 
  children, 
  delay = 0,
  duration = 0.5 
}: ScaleInProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: [0.23, 1.07, 0.32, 1]
      }}
    >
      {children}
    </motion.div>
  );
};