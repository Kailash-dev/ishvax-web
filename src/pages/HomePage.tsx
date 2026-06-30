import { SEO } from '../components/ui/SEO'
import { Hero } from '../components/home/Hero'
import { Stats } from '../components/home/Stats'
import { ServicesOverview } from '../components/home/ServicesOverview'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { TechStack } from '../components/home/TechStack'
import { Clients } from '../components/home/Clients'
import { ShowcaseTemplates } from '../components/home/ShowcaseTemplates'
import { Testimonials } from '../components/home/Testimonials'
import { FAQ } from '../components/home/FAQ'
import { CTABanner } from '../components/home/CTABanner'

export function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyChooseUs />
      <TechStack />
      <ShowcaseTemplates />
      <Clients />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  )
}
