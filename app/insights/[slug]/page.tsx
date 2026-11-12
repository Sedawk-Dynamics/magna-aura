import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedVisual } from '@/components/site/animated-visual'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'
import { CtaLink } from '@/components/site/cta-link'
import { Reveal } from '@/components/site/reveal'
import { RelatedInsights } from '@/components/services/related-insights'
import { ARTICLES, formatDate, getArticle, getTopic } from '@/lib/insights'
import { getService } from '@/lib/services'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps<'/insights/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { type: 'article' },
  }
}

export default async function ArticlePage({ params }: PageProps<'/insights/[slug]'>) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const topic = getTopic(article.topic)
  const service = topic ? getService(topic.serviceSlug) : undefined
  const date = formatDate(article.date)
  const related = ARTICLES.filter((a) => a.slug !== article.slug && a.topic === article.topic)
    .concat(ARTICLES.filter((a) => a.slug !== article.slug && a.topic !== article.topic))
    .slice(0, 3)
    .map((a) => a.slug)

  return (
    <>
      <article>
        <header className="bg-navy-deep text-primary-foreground">
          <div className="mx-auto flex max-w-4xl flex-col gap-5 px-6 pt-12 pb-32">
            <Link href="/insights" className="inline-flex w-fit items-center gap-2 text-sm text-primary-foreground/75 hover:text-brand-green">
              <ArrowLeft className="size-4" aria-hidden="true" />
              All Insights
            </Link>
            {topic && (
              <p className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">{topic.label}</p>
            )}
            <h1 className="text-3xl leading-tight font-extrabold text-balance md:text-5xl">{article.title}</h1>
            <p className="text-lg leading-relaxed text-pretty text-primary-foreground/80">{article.excerpt}</p>
            {(date || article.readMinutes) && (
              <div className="flex items-center gap-5 text-sm text-primary-foreground/70">
                {date && (
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="size-4" aria-hidden="true" />
                    <time dateTime={article.date}>{date}</time>
                  </span>
                )}
                {article.readMinutes && (
                  <span className="inline-flex items-center gap-2">
                    <Clock className="size-4" aria-hidden="true" />
                    {article.readMinutes} min read
                  </span>
                )}
              </div>
            )}
          </div>
        </header>

        <div className="mx-auto -mt-24 flex max-w-4xl flex-col gap-10 px-6 pb-16">
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-xl shadow-navy/20">
            <AnimatedVisual kind={article.visual} />
          </Reveal>

          <Reveal className="flex flex-col gap-5 rounded-xl border bg-muted p-6 md:p-8">
            <h2 className="text-xl font-extrabold">Discuss this topic with our consultants</h2>
            <p className="leading-relaxed text-muted-foreground">
              {article.excerpt} Our consultants can walk you through how this applies to your organization and help
              define a practical approach.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaLink href="/contact">Request a Consultation</CtaLink>
              {service && (
                <CtaLink href={`/services/${service.slug}`} variant="outline-dark">
                  {service.title}
                </CtaLink>
              )}
            </div>
          </Reveal>
        </div>
      </article>
      <div className="border-t">
        <RelatedInsights slugs={related} exclude={article.slug} />
      </div>
    </>
  )
}
