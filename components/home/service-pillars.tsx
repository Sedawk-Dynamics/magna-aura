import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedVisual } from '@/components/site/animated-visual'
import { SectionHeading } from '@/components/site/section-heading'
import { Stagger, StaggerItem } from '@/components/site/reveal'
import { PILLARS } from '@/lib/services'
import { ICONS } from '@/lib/icons'

export function ServicePillars() {
  return (
    <section aria-labelledby="pillars-title" className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20">
      <SectionHeading
        id="pillars-title"
        eyebrow="Our Services"
        title="Three Pillars of Expertise"
        text="Management systems, project and engineering advisory, and asset reliability, brought together to strengthen organizational, project and asset performance."
      />
      <Stagger className="grid gap-6 lg:grid-cols-3">
        {PILLARS.map((p) => {
          const Icon = ICONS[p.icon]
          return (
            <StaggerItem
              key={p.title}
              as="article"
              className="group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <AnimatedVisual kind={p.visual} className="transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative flex flex-1 flex-col gap-4 p-6 pt-10">
                <span className="absolute -top-7 left-6 inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-card">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-extrabold">{p.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{p.text}</p>
                <ul className="mt-auto flex flex-col border-t pt-3">
                  {p.links.map((l) => {
                    const LinkIcon = ICONS[l.icon]
                    return (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="group/link flex items-center gap-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-brand-green-strong"
                        >
                          <LinkIcon className="size-4 shrink-0 text-brand-blue" aria-hidden="true" />
                          <span className="flex-1">{l.label}</span>
                          <ArrowRight
                            className="size-4 shrink-0 transition-transform group-hover/link:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </StaggerItem>
          )
        })}
      </Stagger>
    </section>
  )
}
