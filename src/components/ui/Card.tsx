import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export function Card({ children, className = '', hover = true, glass = true }: CardProps) {
  return (
    <motion.div
      className={`
        rounded-2xl p-6
        ${glass ? 'bg-surface-card/60 backdrop-blur-xl border border-surface-border/60' : 'bg-surface-card border border-surface-border'}
        ${hover ? 'hover:border-brand-500/30 hover:shadow-glow transition-all duration-300' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
