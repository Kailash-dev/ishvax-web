import { TESTIMONIALS } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import { AnimatedItem, AnimatedSection } from '../ui/AnimatedSection'

export function Testimonials() {
  return (
    <AnimatedSection className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from the businesses we've helped transform."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <AnimatedItem key={testimonial.id}>
              <Card className="h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="star" className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-surface-border pt-4">
                  <p className="text-white font-medium text-sm">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
