import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'

export function CTABanner() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-brand-800/10 to-surface-card" />
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how IshvaX can help you leverage AI and modern technology to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Schedule Consultation
                <Icon name="arrow" className="w-5 h-5" />
              </Button>
              <Button
                href="https://wa.me/917992209997"
                variant="outline"
                size="lg"
                external
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
