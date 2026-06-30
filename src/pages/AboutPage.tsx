import { motion } from 'framer-motion'
import { SEO } from '../components/ui/SEO'
import { COMPANY } from '../data/company'
import { Leadership } from '../components/about/Leadership'
import { Card } from '../components/ui/Card'
import { CTABanner } from '../components/home/CTABanner'
import { Icon } from '../components/ui/Icon'

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about IshvaX Technologies — our vision, mission, leadership team, and commitment to delivering AI-powered software solutions."
        path="/about"
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
            About Us
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Pioneering AI-Driven Innovation
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            IshvaX is an AI-powered software development company specializing in delivering
            intelligent, scalable, and innovative digital solutions. We help businesses transform
            their operations using cutting-edge artificial intelligence, data engineering, and
            modern software technologies.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover={false}>
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-5">
                  <Icon name="sparkles" className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed">{COMPANY.vision}</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover={false}>
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-5">
                  <Icon name="zap" className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">{COMPANY.mission}</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet the People Behind IshvaX
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Leadership and engineering talent driving innovation and excellence at IshvaX Technologies.
            </p>
          </div>
          <Leadership />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
