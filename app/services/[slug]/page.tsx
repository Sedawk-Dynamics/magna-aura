import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink } from '@/components/site/cta-link'
import { Reveal } from '@/components/site/reveal'
import { ServiceGroupSection } from '@/components/services/service-group'
import { ServiceHighlights } from '@/components/services/service-highlights'
import { ServiceStandards } from '@/components/services/service-standards'
import { LinkKuwait } from '@/components/site/kuwait-link'
import { RelatedInsights } from '@/components/services/related-insights'
import { OtherServices } from '@/components/services/other-services'
import { SERVICES, getService } from '@/lib/services'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps<'/services/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.intro,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

export default async function ServicePage({ params }: PageProps<'/services/[slug]'>) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        titleLead={service.titleLead}
        titleAccent={service.titleAccent}
        subtitle={service.tagline}
        text={service.intro}
        visual={service.heroVisual}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/services' },
          { label: service.title },
        ]}
      >
        <CtaLink href="/contact">Request a Consultation</CtaLink>
      </PageHero>

      <section className="border-b bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <Reveal className="flex flex-col gap-3 border-l-4 border-brand-green-strong pl-5">
            <h2 className="text-2xl font-extrabold md:text-3xl">{service.overviewTitle}</h2>
            <p className="max-w-3xl leading-relaxed text-pretty text-muted-foreground">
              <LinkKuwait text={service.overviewText} />
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16">
        {service.groups.map((g, i) => (
          <ServiceGroupSection key={g.number} group={g} tone={i % 2 === 0 ? 'navy' : 'green'} />
        ))}
      </div>

      <ServiceStandards service={service} />

      <ServiceHighlights service={service} />
      <RelatedInsights slugs={service.relatedInsights} />
      <OtherServices currentSlug={service.slug} />
    </>
  )
}
