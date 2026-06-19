import { motion } from 'framer-motion'
import { SEO } from '../components/ui/SEO'
import { COMPANY } from '../data/company'
import { ContactForm } from '../components/contact/ContactForm'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'

export function ContactPage() {
  const fullAddress = `${COMPANY.address.line1}, ${COMPANY.address.line2}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.pincode}, ${COMPANY.address.country}`

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with IshvaX Technologies. Book a consultation, send us a message, or visit our office in Gurugram, India."
        path="/contact"
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
            Contact Us
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Let&apos;s Build Something Great
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ready to start your project? Reach out and our team will get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <Card hover={false}>
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <ContactForm />
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card hover={false}>
                <h3 className="text-lg font-semibold text-white mb-6">Company Details</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <Icon name="location" className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">{COMPANY.name}</p>
                      <p className="text-gray-400 text-sm mt-1">
                        {COMPANY.address.line1},<br />
                        {COMPANY.address.line2},<br />
                        {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.pincode},<br />
                        {COMPANY.address.country}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="mail" className="w-5 h-5 text-brand-400 shrink-0" />
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-gray-400 hover:text-brand-400 transition-colors text-sm"
                    >
                      {COMPANY.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="phone" className="w-5 h-5 text-brand-400 shrink-0" />
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-gray-400 hover:text-brand-400 transition-colors text-sm"
                    >
                      {COMPANY.phone}
                    </a>
                  </li>
                </ul>
              </Card>

              <div className="flex flex-col gap-3">
                <Button
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  external
                  className="w-full"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
                <Button href="/contact" variant="outline" className="w-full">
                  Schedule Consultation
                </Button>
              </div>

              <Card hover={false} className="overflow-hidden p-0">
                <div className="aspect-video bg-surface-card relative">
                  <iframe
                    title="IshvaX Technologies Office Location"
                    src="https://maps.google.com/maps?q=Landmark+Cyber+Park+Sector+67+Gurugram&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-xs">{fullAddress}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
