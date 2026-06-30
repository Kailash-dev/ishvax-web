import { SHOWCASE_TEMPLATES } from '../../data/templates'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import { AnimatedItem, AnimatedSection } from '../ui/AnimatedSection'

const categoryStyles: Record<string, string> = {
  'Web App': 'bg-brand-500/15 text-brand-300 border-brand-500/30',
  'Mobile App': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'Full Stack': 'bg-violet-500/15 text-violet-300 border-violet-500/30',
}

export function ShowcaseTemplates() {
  return (
    <AnimatedSection className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Capabilities"
          title="Complex Apps We Build"
          subtitle="From enterprise web platforms to production-grade mobile apps — we deliver full-stack solutions engineered for scale, security, and performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOWCASE_TEMPLATES.map((template) => (
            <AnimatedItem key={template.id}>
              <Card className="h-full group relative overflow-hidden">
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${template.color}`}
                />

                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${template.color} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon name={template.icon} className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryStyles[template.category]}`}
                  >
                    {template.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{template.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{template.description}</p>

                <ul className="space-y-2 mb-5">
                  {template.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-gray-300">
                      <Icon name="check" className="w-4 h-4 text-brand-400 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-border/60">
                  {template.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-surface-elevated/80 text-gray-400 border border-surface-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
