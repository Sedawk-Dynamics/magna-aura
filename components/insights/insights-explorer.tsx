'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LayoutGrid } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'
import { ArticleCard } from '@/components/insights/article-card'
import { ARTICLES, TOPICS } from '@/lib/insights'
import { ICONS } from '@/lib/icons'
import { cn } from '@/lib/utils'

export function InsightsExplorer() {
  const [topic, setTopic] = useState<string>('all')
  const visible = topic === 'all' ? ARTICLES : ARTICLES.filter((a) => a.topic === topic)

  const options = [{ id: 'all', shortLabel: 'All Topics', icon: null }, ...TOPICS]

  return (
    <section id="latest" aria-labelledby="latest-title" className="mx-auto flex max-w-7xl scroll-mt-28 flex-col gap-8 px-6 py-16">
      <SectionHeading
        id="latest-title"
        eyebrow="Explore by Topic"
        title="Latest Articles & Insights"
        text="Practical knowledge to support your business excellence journey. Browse insights by our core service areas."
      />

      <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
        {options.map((o) => {
          const Icon = o.icon ? ICONS[o.icon] : LayoutGrid
          const active = topic === o.id
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => setTopic(o.id)}
              aria-pressed={active}
              className={cn(
                'relative inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                active ? 'border-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-muted',
              )}
            >
              {active && (
                <motion.span
                  layoutId="topic-pill"
                  className="absolute inset-0 -z-0 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <Icon className="relative size-4" aria-hidden="true" />
              <span className="relative">{o.shortLabel}</span>
            </button>
          )
        })}
      </div>

      <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        <AnimatePresence mode="popLayout">
          {visible.map((a) => (
            <motion.li
              key={a.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <ArticleCard article={a} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  )
}
