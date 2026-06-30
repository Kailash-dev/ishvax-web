export type TemplateCategory = 'Web App' | 'Mobile App' | 'Full Stack'

export interface ShowcaseTemplate {
  id: string
  title: string
  category: TemplateCategory
  description: string
  highlights: string[]
  tech: string[]
  color: string
  icon: string
}

export const SHOWCASE_TEMPLATES: ShowcaseTemplate[] = [
  {
    id: 'enterprise-saas',
    title: 'Enterprise SaaS Dashboard',
    category: 'Web App',
    description:
      'Multi-tenant admin console with role-based access, real-time analytics, billing workflows, and audit logging for enterprise teams.',
    highlights: ['RBAC & SSO', 'Live dashboards', 'Subscription billing'],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    color: 'from-violet-500 to-purple-600',
    icon: 'layers',
  },
  {
    id: 'ai-analytics',
    title: 'AI Analytics Platform',
    category: 'Web App',
    description:
      'Data-heavy platform with predictive insights, custom report builders, pipeline orchestration, and LLM-powered natural language queries.',
    highlights: ['Predictive ML', 'Custom reports', 'AI copilot'],
    tech: ['Python', 'React', 'OpenAI', 'AWS'],
    color: 'from-cyan-500 to-blue-600',
    icon: 'brain',
  },
  {
    id: 'field-service-mobile',
    title: 'Field Service Mobile Suite',
    category: 'Mobile App',
    description:
      'Offline-first mobile app for technicians with job scheduling, GPS tracking, digital checklists, photo capture, and push notifications.',
    highlights: ['Offline sync', 'GPS routing', 'Push alerts'],
    tech: ['React Native', 'Firebase', 'Maps API'],
    color: 'from-orange-500 to-rose-500',
    icon: 'smartphone',
  },
  {
    id: 'marketplace',
    title: 'Multi-Vendor Marketplace',
    category: 'Full Stack',
    description:
      'End-to-end marketplace with vendor portals, product catalog, cart & checkout, order fulfillment, and commission management.',
    highlights: ['Vendor portal', 'Payments', 'Order tracking'],
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
    color: 'from-pink-500 to-fuchsia-600',
    icon: 'globe',
  },
  {
    id: 'erp-portal',
    title: 'ERP & Operations Portal',
    category: 'Web App',
    description:
      'Complex business operations hub covering inventory, procurement, HR workflows, document management, and executive reporting.',
    highlights: ['Inventory Mgmt', 'Workflow engine', 'Document hub'],
    tech: ['Angular', 'Java', 'PostgreSQL', 'Docker'],
    color: 'from-amber-500 to-orange-600',
    icon: 'database',
  },
  {
    id: 'fintech-mobile',
    title: 'Cross-Platform FinTech App',
    category: 'Mobile App',
    description:
      'Secure mobile banking experience with biometric auth, transaction history, instant transfers, KYC onboarding, and fraud detection.',
    highlights: ['Biometric auth', 'KYC flow', 'Fraud detection'],
    tech: ['Flutter', 'Kotlin', 'Swift', 'Azure'],
    color: 'from-emerald-500 to-green-600',
    icon: 'shield',
  },
] as const
