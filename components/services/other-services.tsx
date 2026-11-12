import Link from 'next/link'
import { AnimatedVisual } from '@/components/site/animated-visual'
import { CardCarousel } from '@/components/site/card-carousel'
import { SectionHeading } from '@/components/site/section-heading'
import { SERVICES } from '@/lib/services'

export function OtherServices({ currentSlug }: { currentSlug: string }) {
  const others = SERVICES.filter((s) => s.slug !== currentSlug)
  return (
    <section aria-labelledby="other-services" className="bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
        <SectionHeading id="other-services" eyebrow="Our Services" title="Explore Other Services" />
        <CardCarousel label="Other services" slideClassName="basis-[80%] sm:basis-1/2 lg:basis-1/4">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-xl"
            >
              <AnimatedVisual kind={s.heroVisual} className="transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-5 text-lg leading-snug font-bold text-primary-foreground">
                {s.title}
              </span>
            </Link>
          ))}
        </CardCarousel>
      </div>
    </section>
  )
}
