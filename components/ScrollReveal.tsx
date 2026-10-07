'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number | 'some' | 'all';
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  yOffset = 32,
  duration = 0.75,
  className = '',
  viewportAmount = 0.15,
  once = true,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: viewportAmount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom smooth ease-out curve for luxury architectural UI
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
