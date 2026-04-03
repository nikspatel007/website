import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, type ReactNode, Children } from 'react'

interface StaggerChildrenProps {
  children: ReactNode
  staggerDelay?: number
  duration?: number
  className?: string
  once?: boolean
  childClassName?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (duration: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  className,
  once = true,
  childClassName,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      custom={staggerDelay}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants} custom={duration} className={childClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
