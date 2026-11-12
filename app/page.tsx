import { HeroCarousel } from '@/components/home/hero-carousel'
import { Association } from '@/components/home/association'
import { ServicePillars } from '@/components/home/service-pillars'
import { Industries } from '@/components/home/industries'
import { WhyUs } from '@/components/home/why-us'
import { InsightsPreview } from '@/components/home/insights-preview'
import { CtaBand } from '@/components/site/cta-band'

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ServicePillars />
      <Association />
      <Industries />
      <WhyUs />
      <InsightsPreview />
      <CtaBand visual="network" />
    </>
  )
}
