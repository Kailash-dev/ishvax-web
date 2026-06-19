import { useEffect } from 'react'
import { COMPANY } from '../../data/company'

interface SEOProps {
  title?: string
  description?: string
  path?: string
  type?: string
}

const SITE_URL = 'https://ishvax.com'

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function SEO({
  title,
  description = COMPANY.description,
  path = '',
  type = 'website',
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${COMPANY.name}`
    : `${COMPANY.name} — ${COMPANY.tagline}`
  const url = `${SITE_URL}${path}`

  useEffect(() => {
    document.title = fullTitle

    setMeta('description', description)
    setMeta('og:type', type, true)
    setMeta('og:url', url, true)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:site_name', COMPANY.name, true)
    setMeta('og:locale', 'en_IN', true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta(
      'keywords',
      'AI software development, machine learning, cloud engineering, data engineering, custom software, IshvaX Technologies, Gurugram'
    )

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [fullTitle, description, url, type])

  return null
}
