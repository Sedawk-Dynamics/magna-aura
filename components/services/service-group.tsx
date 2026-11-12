import { Check } from 'lucide-react'
import { AnimatedVisual } from '@/components/site/animated-visual'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'
import { ICONS } from '@/lib/icons'
import type { ServiceGroup, ServiceItem } from '@/lib/services'
import { cn } from '@/lib/utils'

function Deliverables({ items }: { items: string[] }) {
  if (items.length === 0) return null
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-muted p-4">
      <p className="text-sm font-bold text-foreground">Key Deliverables</p>
      <ul className="flex flex-col gap-1.5">
        {items.map((d) => (
          <li key={d} className="flex gap-2 text-sm leading-snug text-muted-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-brand-green-strong" aria-hidden="true" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ItemCard({ item }: { item: ServiceItem }) {
  const Icon = ICONS[item.icon]
  const header = (
    <div className="flex items-start gap-3">
      <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-secondary px-2.5 py-1 text-xs font-bold text-brand-blue">
        {item.code}
      </span>
      <Icon className="size-7 shrink-0 text-primary" aria-hidden="true" />
      <h3 className="text-base leading-snug font-extrabold md:text-lg">{item.title}</h3>
    </div>
  )

  if (item.visual) {
    return (
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm sm:flex-row">
        <div className="relative aspect-[16/9] shrink-0 overflow-hidden sm:aspect-auto sm:w-2/5">
          <AnimatedVisual kind={item.visual} className="transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          {header}
          {item.description && <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
          <div className="mt-auto">
            <Deliverables items={item.deliverables} />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-lg hover:shadow-navy/5">
      {header}
      {item.description && <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
      <div className="mt-auto">
        <Deliverables items={item.deliverables} />
      </div>
    </article>
  )
}

export function ServiceGroupSection({ group, tone }: { group: ServiceGroup; tone: 'navy' | 'green' }) {
  const Icon = ICONS[group.icon]
  const hasImages = group.items.some((i) => i.visual)
  const count = group.items.length

  return (
    <section aria-labelledby={`group-${group.number}`} className="flex flex-col gap-6">
      <Reveal className="flex flex-col overflow-hidden rounded-xl md:flex-row md:items-stretch">
        <div
          className={cn(
            'flex items-center gap-4 px-6 py-4 text-primary-foreground',
            tone === 'navy' ? 'bg-primary' : 'bg-brand-green-strong',
          )}
        >
          <span className="text-4xl font-extrabold">{group.number}</span>
          <Icon className="size-8" aria-hidden="true" />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1 bg-secondary px-6 py-4">
          <h2 id={`group-${group.number}`} className="text-xl font-extrabold md:text-2xl">
            {group.title}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{group.summary}</p>
        </div>
      </Reveal>

      <Stagger
        className={cn(
          'grid gap-5',
          hasImages
            ? 'lg:grid-cols-2'
            : count >= 5
              ? 'sm:grid-cols-2 lg:grid-cols-3'
              : count === 4
                ? 'sm:grid-cols-2 lg:grid-cols-4'
                : 'sm:grid-cols-2 lg:grid-cols-3',
        )}
      >
        {group.items.map((item) => (
          <StaggerItem key={item.code} className="h-full">
            <ItemCard item={item} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
