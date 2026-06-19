import { SERVICES_OVERVIEW } from '../../data/services'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import { AnimatedItem, AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'

export function ServicesOverview() {
  return (
    <AnimatedSection className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Technology Solutions"
          subtitle="From AI-powered automation to cloud-native applications, we deliver end-to-end solutions that drive business growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_OVERVIEW.map((service) => (
            <AnimatedItem key={service.id}>
              <Card className="h-full group">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-5 group-hover:bg-brand-500/20 transition-colors">
                  <Icon name={service.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </Card>
            </AnimatedItem>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/services" variant="outline">
            Explore All Services
            <Icon name="arrow" className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
