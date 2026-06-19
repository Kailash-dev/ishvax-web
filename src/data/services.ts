export interface ServiceOverview {
  id: string
  title: string
  description: string
  icon: string
}

export const SERVICES_OVERVIEW: ServiceOverview[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Solutions',
    description:
      'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
    icon: 'brain',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description:
      'Tailored enterprise applications and SaaS platforms built to solve your unique business challenges.',
    icon: 'code',
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Analytics',
    description:
      'Robust data pipelines, warehousing, and business intelligence solutions for data-driven decisions.',
    icon: 'database',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Solutions & DevOps',
    description:
      'Scalable cloud infrastructure, CI/CD pipelines, and infrastructure automation on AWS and Azure.',
    icon: 'cloud',
  },
  {
    id: 'web-dev',
    title: 'Web Application Development',
    description:
      'Modern, responsive web applications with exceptional user experiences and performance.',
    icon: 'globe',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Application Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android that engage users on the go.',
    icon: 'smartphone',
  },
]

export interface ServiceDetail {
  id: string
  title: string
  description: string
  icon: string
  items: string[]
}

export const SERVICES_DETAILED: ServiceDetail[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description:
      'Transform your business with cutting-edge AI solutions that deliver measurable results.',
    icon: 'brain',
    items: [
      'Predictive Analytics',
      'LLM Integrations',
      'AI Agents',
      'Automation Solutions',
      'Computer Vision',
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description:
      'End-to-end software development tailored to your enterprise needs and growth objectives.',
    icon: 'code',
    items: [
      'Enterprise Applications',
      'SaaS Platforms',
      'CRM Systems',
      'ERP Systems',
    ],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Analytics',
    description:
      'Build robust data infrastructure that turns raw data into actionable business intelligence.',
    icon: 'database',
    items: [
      'Data Pipelines',
      'ETL Solutions',
      'Data Warehousing',
      'Business Intelligence',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description:
      'Accelerate delivery with cloud-native architectures and automated DevOps practices.',
    icon: 'cloud',
    items: [
      'AWS',
      'Azure',
      'CI/CD',
      'Infrastructure Automation',
      'Monitoring & Scaling',
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Beautiful, performant web experiences that represent your brand and convert visitors.',
    icon: 'globe',
    items: [
      'Corporate Websites',
      'Admin Panels',
      'Portals',
      'E-Commerce',
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description:
      'Engaging mobile applications that deliver seamless experiences across all devices.',
    icon: 'smartphone',
    items: [
      'Android Apps',
      'iOS Apps',
      'Cross-platform Apps',
    ],
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'AI-First Approach',
    description: 'We integrate artificial intelligence at the core of every solution we build.',
    icon: 'sparkles',
  },
  {
    title: 'Scalable Architecture',
    description: 'Solutions designed to grow with your business, from startup to enterprise scale.',
    icon: 'layers',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Industry-leading security practices protecting your data and applications.',
    icon: 'shield',
  },
  {
    title: 'Agile Delivery',
    description: 'Iterative development with transparent communication and rapid deployment.',
    icon: 'zap',
  },
  {
    title: 'Cloud-Native Development',
    description: 'Modern cloud architectures optimized for performance, reliability, and cost.',
    icon: 'cloud',
  },
  {
    title: 'Dedicated Support',
    description: 'Ongoing partnership with dedicated support to ensure your success.',
    icon: 'headphones',
  },
] as const

export const TECH_STACK = [
  'React',
  'Angular',
  'Node.js',
  'TypeScript',
  'Python',
  'AWS',
  'Azure',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'OpenAI',
  'TensorFlow',
] as const
