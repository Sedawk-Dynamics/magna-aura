import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink } from '@/components/site/cta-link'
import { CtaBand } from '@/components/site/cta-band'
import { SectionHeading } from '@/components/site/section-heading'
import { CardCarousel } from '@/components/site/card-carousel'
import { ArticleCard } from '@/components/insights/article-card'
import { InsightsExplorer } from '@/components/insights/insights-explorer'
import { Resources } from '@/components/insights/resources'
import { ARTICLES } from '@/lib/insights'

export const metadata: Metadata = {
  title: 'Insights & Resources',
  description:
    'Professional insights, technical guidance and practical resources covering management systems, operational excellence, engineering, asset reliability, food safety and HSE.',
  alternates: { canonical: '/insights' },
}

export default function InsightsPage() {
  const featured = ARTICLES.filter((a) => a.featured)

  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        titleLead="Expert Perspectives."
        titleAccent="Practical Knowledge."
        subtitle="Better Business Decisions."
        text="Explore professional insights, industry updates, technical guidance and practical resources covering management systems, operational excellence, engineering, asset reliability, food safety and HSE."
        visual="network"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Insights & Resources' }]}
      >
        <CtaLink href="#latest">Explore Our Insights</CtaLink>
      </PageHero>

      <section aria-labelledby="featured-title" className="bg-muted">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
          <SectionHeading
            id="featured-title"
            eyebrow="Featured"
            title="Featured Insights"
            text="Our latest perspectives on key industry topics."
          />
          <CardCarousel label="Featured insights" autoplay>
            {featured.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </CardCarousel>
        </div>
      </section>

      <InsightsExplorer />
      <Resources />
      <CtaBand
        title="Stay Informed. Stay Ahead."
        text="Explore our insights, use our practical resources and discuss how our consultants can support your organization."
        visual="shield"
        whatsapp
      />
    </>
  )
}
