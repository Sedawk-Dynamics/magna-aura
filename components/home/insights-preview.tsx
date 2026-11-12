import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CardCarousel } from '@/components/site/card-carousel'
import { Reveal } from '@/components/site/reveal'
import { ArticleCard } from '@/components/insights/article-card'
import { ARTICLES } from '@/lib/insights'

export function InsightsPreview() {
  const featured = ARTICLES.find((a) => a.slug === 'iso-45001-industrial-operations')
  const ordered = featured ? [featured, ...ARTICLES.filter((a) => a !== featured)] : ARTICLES

  return (
    <section aria-labelledby="insights-title" className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20">
      <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-green-strong uppercase">Insights & Resources</p>
          <h2 id="insights-title" className="text-3xl font-extrabold md:text-4xl">
            Knowledge That Supports Better Decisions.
          </h2>
        </div>
        <Link
          href="/insights"
          className="group inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-foreground"
        >
          View All Insights
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </Reveal>
      <CardCarousel label="Latest insights">
        {ordered.map((a) => (
          <div key={a.slug} className="relative h-full">
            <ArticleCard article={a} />
          </div>
        ))}
      </CardCarousel>
    </section>
  )
}
