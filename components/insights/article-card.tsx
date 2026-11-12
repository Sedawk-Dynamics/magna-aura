import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock } from 'lucide-react'
import { AnimatedVisual } from '@/components/site/animated-visual'
import { formatDate, getTopic, type Article } from '@/lib/insights'

export function ArticleCard({ article }: { article: Article }) {
  const topic = getTopic(article.topic)
  const date = formatDate(article.date)
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <AnimatedVisual kind={article.visual} className="transition-transform duration-700 group-hover:scale-105" />
        {topic && (
          <span className="absolute top-3 left-3 rounded-md bg-primary px-2.5 py-1 text-[11px] font-bold tracking-wide text-primary-foreground uppercase">
            {topic.shortLabel}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        {(date || article.readMinutes) && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {date && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                <time dateTime={article.date}>{date}</time>
              </span>
            )}
            {article.readMinutes && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" aria-hidden="true" />
                {article.readMinutes} min read
              </span>
            )}
          </div>
        )}
        <h3 className="text-lg leading-snug font-bold">
          <Link href={`/insights/${article.slug}`} className="after:absolute after:inset-0 focus:outline-none">
            <span className="relative">{article.title}</span>
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-brand-green-strong">
          Read Article
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </article>
  )
}
