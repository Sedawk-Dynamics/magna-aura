import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink } from '@/components/site/cta-link'
import { CtaBand } from '@/components/site/cta-band'
import { WhoWeAre } from '@/components/about/who-we-are'
import { VisionMissionValues } from '@/components/about/vision-mission-values'
import { Expertise } from '@/components/about/expertise'
import { Team } from '@/components/about/team'
import { ABOUT } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us',
  description: ABOUT.intro,
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        titleLead="About"
        titleAccent="Al-Noor Arabia"
        text={ABOUT.intro}
        visual="network"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      >
        <CtaLink href="/contact">Request a Consultation</CtaLink>
        <CtaLink href="/services" variant="outline-light">
          Our Services
        </CtaLink>
      </PageHero>
      <WhoWeAre />
      <VisionMissionValues />
      <Expertise />
      <Team />
      <CtaBand
        title="Let’s Work Together"
        text="Connect with Al-Noor Arabia to discuss your business challenges and explore how our management and technical consulting expertise can support your organization."
      />
    </>
  )
}
