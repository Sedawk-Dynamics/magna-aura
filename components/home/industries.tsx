import { AnimatedVisual } from '@/components/site/animated-visual'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'
import { INDUSTRIES } from '@/lib/site-data'
import { ICONS } from '@/lib/icons'

/** All industries are shown at once in a grid, so no card depends on carousel rotation. */
export function Industries() {
  return (
    <section aria-labelledby="industries-title" className="bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-green-strong uppercase">Industries We Serve</p>
            <h2 id="industries-title" className="text-3xl font-extrabold md:text-4xl">
              Supporting Industry and Infrastructure in Saudi Arabia
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-pretty text-muted-foreground">
            Our expertise supports organizations across key sectors, from energy and infrastructure to industrial and
            service industries.
          </p>
        </Reveal>

        <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => {
            const Icon = ICONS[ind.icon]
            return (
              <StaggerItem key={ind.name} as="li">
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                  <AnimatedVisual kind={ind.visual} className="transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5 text-primary-foreground">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-green-strong">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-lg leading-snug font-bold">{ind.name}</span>
                  </figcaption>
                </figure>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
