import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedVisual } from '@/components/site/animated-visual'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink } from '@/components/site/cta-link'
import { CtaBand } from '@/components/site/cta-band'
import { SectionHeading } from '@/components/site/section-heading'
import { Stagger, StaggerItem } from '@/components/site/reveal'
import { Industries } from '@/components/home/industries'
import { SERVICES } from '@/lib/services'
import { ICONS } from '@/lib/icons'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'ISO & management systems, business excellence, project & engineering advisory, asset reliability, food safety and HSE consulting in Saudi Arabia.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        titleLead="Integrated Consulting"
        titleAccent="Across Six Disciplines."
        subtitle="ISO & Management Systems | Project & Engineering Advisory | Asset Management & Reliability"
        text="Integrated management consultancy and specialized advisory expertise to strengthen organizational, project and asset performance."
        visual="pipeline"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Services' }]}
      >
        <CtaLink href="/contact">Request a Consultation</CtaLink>
      </PageHero>

      <section aria-labelledby="all-services" className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20">
        <SectionHeading
          id="all-services"
          eyebrow="What We Offer"
          title="Explore Our Services"
          text="Select a service area to see its scope, key deliverables and how our consultants can support your organization."
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <StaggerItem key={s.slug} as="article" className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <AnimatedVisual kind={s.heroVisual} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="relative flex flex-1 flex-col gap-3 p-6 pt-10">
                    <span className="absolute -top-7 left-6 inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-card">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h2 className="text-xl font-extrabold">{s.title}</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-brand-green-strong">
                      View service
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </Stagger>
      </section>

      <Industries />
      <CtaBand />
    </>
  )
}
