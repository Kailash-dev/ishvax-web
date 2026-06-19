import { LEADERSHIP } from '../../data/leadership'
import { Card } from '../ui/Card'
import { Icon } from '../ui/Icon'
import { AnimatedItem, AnimatedSection } from '../ui/AnimatedSection'

export function Leadership() {
  return (
    <AnimatedSection className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {LEADERSHIP.map((leader) => (
            <AnimatedItem key={leader.id}>
              <Card className="text-center group">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-lg transition-shadow">
                  <span className="text-white font-bold text-2xl">{leader.initials}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{leader.name}</h3>
                <p className="text-brand-400 text-sm font-medium mb-4">{leader.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{leader.bio}</p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors text-sm"
                  aria-label={`${leader.name} on LinkedIn`}
                >
                  <Icon name="linkedin" className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
