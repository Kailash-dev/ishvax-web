import { WHY_CHOOSE_US } from '../../data/services'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import { AnimatedItem, AnimatedSection } from '../ui/AnimatedSection'

export function WhyChooseUs() {
  return (
    <AnimatedSection className="py-24 lg:py-32 bg-surface-elevated/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why IshvaX"
          title="Why Choose Us"
          subtitle="We combine deep technical expertise with a client-first approach to deliver solutions that exceed expectations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <AnimatedItem key={item.title}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0">
                    <Icon name={item.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
