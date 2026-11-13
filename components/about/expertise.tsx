import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedVisual } from '@/components/site/animated-visual'
import { SectionHeading } from '@/components/site/section-heading'
import { CardCarousel } from '@/components/site/card-carousel'
import { SERVICES } from '@/lib/services'

/** Same six services as the Our Services page, so both pages always match. */
export function Expertise() {
  return (
    <section aria-labelledby="expertise-title" className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20">
      <SectionHeading id="expertise-title" eyebrow="What We Do" title="Our Consulting Expertise" />
      <CardCarousel label="Consulting expertise" slideClassName="basis-[85%] sm:basis-1/2 lg:basis-1/3">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy/10"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <AnimatedVisual kind={s.heroVisual} className="transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-brand-green-strong">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </CardCarousel>
    </section>
  )
}
