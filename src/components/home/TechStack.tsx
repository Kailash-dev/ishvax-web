import { motion } from 'framer-motion'
import { TECH_STACK } from '../../data/services'
import { SectionHeading } from '../ui/SectionHeading'

export function TechStack() {
  const doubled = [...TECH_STACK, ...TECH_STACK]

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          eyebrow="Technology"
          title="Built with Modern Technologies"
          subtitle="We leverage industry-leading tools and frameworks to build robust, scalable solutions."
        />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />

        <motion.div
          className="flex gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="shrink-0 px-6 py-3 rounded-xl bg-surface-card/60 backdrop-blur border border-surface-border/60 text-gray-300 font-medium text-sm hover:border-brand-500/30 hover:text-brand-400 transition-colors"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
