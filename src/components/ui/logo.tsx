'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  animate?: boolean;
  size?: string;
}

const Logo = ({ animate = false, size = 'w-16 h-16' }: LogoProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    stroke="#5ceac9"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={size}
    initial={animate ? { pathLength: 0 } : {}}
    animate={animate ? { pathLength: 1 } : {}}
    transition={animate ? { duration: 1.5 } : {}}
  >
    <motion.path
      d="M50 5L95 25L95 75L50 95L5 75L5 25Z"
      stroke="#5ceac9"
      strokeWidth="3"
      fill="none"
      initial={animate ? { strokeDasharray: 400, strokeDashoffset: 400 } : {}}
      animate={animate ? { strokeDashoffset: 0 } : {}}
      transition={animate ? { duration: 1.5, ease: 'easeInOut' } : {}}
    />
    <motion.text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#5ceac9"
      fontSize="40"
      dy=".1em"
      initial={animate ? { opacity: 0 } : {}}
      animate={animate ? { opacity: 1 } : {}}
      transition={animate ? { delay: 1.5, duration: 0.5, ease: 'easeInOut' } : {}}
    >
      RS
    </motion.text>
  </motion.svg>
);

export default Logo;
