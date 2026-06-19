import { motion } from 'framer-motion'
import type { ServiceDetail } from '../../data/services'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'

interface ServiceSectionProps {
  service: ServiceDetail
  index: number
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const isEven = index % 2 === 0

  return (
    <motion.section
      id={service.id}
      className="py-16 lg:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } gap-12 items-center`}
        >
          <div className="flex-1">
            <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-6">
              <Icon name={service.icon} className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {service.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {service.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                    <Icon name="check" className="w-3 h-3 text-brand-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full">
            <Card hover={false} className="relative overflow-hidden min-h-[280px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-700/10" />
              <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
              <div className="relative text-center p-8">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-lg mb-6">
                  <Icon name={service.icon} className="w-12 h-12 text-white" />
                </div>
                <p className="text-gray-400 text-sm">
                  {service.items.length} specialized solutions
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
