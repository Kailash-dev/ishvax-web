import { Link } from 'react-router-dom'
import { NAV_LINKS, COMPANY } from '../../data/company'
import { Icon } from '../ui/Icon'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-elevated border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">IX</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">
                  Ishva<span className="text-brand-400">X</span>
                </span>
                <span className="block text-xs text-gray-500">Technologies</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {COMPANY.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-colors"
                aria-label="WhatsApp"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-gray-400 hover:text-brand-400 hover:border-brand-400/30 transition-colors"
                aria-label="Email"
              >
                <Icon name="mail" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>AI & Machine Learning</li>
              <li>Custom Software</li>
              <li>Data Engineering</li>
              <li>Cloud & DevOps</li>
              <li>Web & Mobile Apps</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Icon name="location" className="w-4 h-4 mt-0.5 shrink-0 text-brand-400" />
                <span>
                  {COMPANY.address.line1}, {COMPANY.address.line2},<br />
                  {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" className="w-4 h-4 shrink-0 text-brand-400" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-400 transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="phone" className="w-4 h-4 shrink-0 text-brand-400" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-brand-400 transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Blog coming soon
          </p>
        </div>
      </div>
    </footer>
  )
}
