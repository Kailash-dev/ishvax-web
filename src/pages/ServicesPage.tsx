import { motion } from 'framer-motion'
import { SEO } from '../components/ui/SEO'
import { SERVICES_DETAILED } from '../data/services'
import { ServiceSection } from '../components/services/ServiceSection'
import { CTABanner } from '../components/home/CTABanner'
import { Button } from '../components/ui/Button'

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore IshvaX Technologies' comprehensive services including AI & Machine Learning, Custom Software Development, Data Engineering, Cloud & DevOps, Web and Mobile Development."
        path="/services"
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            End-to-End Technology Solutions
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            From AI-powered automation to cloud-native applications, we deliver solutions tailored to your business needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button href="/contact">Get a Free Consultation</Button>
          </motion.div>
        </div>
      </section>

      <div className="divide-y divide-surface-border/50">
        {SERVICES_DETAILED.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      <CTABanner />
    </>
  )
}
