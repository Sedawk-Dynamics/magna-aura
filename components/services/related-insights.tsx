import { SectionHeading } from '@/components/site/section-heading'
import { Stagger, StaggerItem } from '@/components/site/reveal'
import { ArticleCard } from '@/components/insights/article-card'
import { ARTICLES, getArticle, type Article } from '@/lib/insights'

export function RelatedInsights({ slugs, exclude }: { slugs: string[]; exclude?: string }) {
  const picked = slugs.map(getArticle).filter((a): a is Article => Boolean(a))
  const fillers = ARTICLES.filter((a) => a.slug !== exclude && !picked.includes(a))
  const articles = [...picked, ...fillers].slice(0, 3)
  if (articles.length === 0) return null
  return (
    <section aria-labelledby="related-title" className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
      <SectionHeading id="related-title" eyebrow="Insights & Resources" title="Related Insights" />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <StaggerItem key={a.slug} className="h-full">
            <ArticleCard article={a} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
