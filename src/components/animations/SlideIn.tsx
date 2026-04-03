import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface SlideInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  className?: string
}

const getOffset = (direction: SlideInProps['direction']) => {
  switch (direction) {
    case 'left':
      return { x: -100, y: 0 }
    case 'right':
      return { x: 100, y: 0 }
    case 'up':
      return { x: 0, y: 100 }
    case 'down':
      return { x: 0, y: -100 }
    default:
      return { x: 0, y: 0 }
  }
}

export function SlideIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'left',
  className,
}: SlideInProps) {
  const offset = getOffset(direction)

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
