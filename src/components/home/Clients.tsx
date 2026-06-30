import { CLIENTS } from '../../data/clients'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { AnimatedItem, AnimatedSection } from '../ui/AnimatedSection'

export function Clients() {
  return (
    <AnimatedSection className="py-24 lg:py-32 bg-surface-elevated/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Clients"
          title="Trusted By Industry Leaders"
          subtitle="We're proud to partner with innovative companies driving digital transformation across industries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLIENTS.map((client) => (
            <AnimatedItem key={client.id}>
              <Card className="group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    <span className="text-white font-bold text-2xl">{client.initials}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-400 transition-colors"
                    >
                      {client.name}
                    </a>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{client.description}</p>
                </div>
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
