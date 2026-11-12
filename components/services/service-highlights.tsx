import { AnimatedVisual } from '@/components/site/animated-visual'
import { CtaLink } from '@/components/site/cta-link'
import { LinkKuwait } from '@/components/site/kuwait-link'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'
import { Users } from 'lucide-react'
import type { Service } from '@/lib/services'

export function ServiceHighlights({ service }: { service: Service }) {
  const { highlights, cta } = service
  return (
    <section className="grid lg:grid-cols-[1fr_400px]">
      <div className="relative isolate overflow-hidden bg-navy-deep text-primary-foreground">
        <AnimatedVisual kind={highlights.visual} className="-z-10 opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/50" />
        <div className="flex flex-col gap-10 px-6 py-14 lg:px-12 xl:pl-[max(3rem,calc((100vw-80rem)/2+1.5rem))]">
          <Reveal className="flex max-w-3xl flex-col gap-4">
            <h2 className="text-3xl font-extrabold text-balance md:text-4xl">{highlights.title}</h2>
            {highlights.subtitle && (
              <p className="font-bold text-brand-green">
                <LinkKuwait text={highlights.subtitle} />
              </p>
            )}
            {highlights.intro.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-pretty text-primary-foreground/85">
                <LinkKuwait text={paragraph} />
              </p>
            ))}
          </Reveal>

          <Stagger className="grid gap-5 md:grid-cols-2">
            {highlights.sections.map((section, i) => (
              <StaggerItem key={section.heading} className="flex h-full flex-col gap-3 rounded-xl border border-primary-foreground/15 bg-navy-deep/70 p-6">
                <h3 className="flex items-start gap-3 text-lg leading-snug font-bold">
                  <span className="text-brand-green">{String(i + 1).padStart(2, '0')}</span>
                  {section.heading}
                </h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-primary-foreground/75">
                    <LinkKuwait text={paragraph} />
                  </p>
                ))}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
      <Reveal className="flex flex-col justify-center gap-4 bg-secondary px-6 py-14 lg:px-10">
        <h2 className="text-2xl font-extrabold text-balance">{cta.title}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{cta.text}</p>
        <CtaLink href="/contact" className="w-full">
          Request a Consultation
        </CtaLink>
        <CtaLink
          href="/about#team"
          variant="outline-dark"
          className="w-full"
          icon={<Users className="size-4" aria-hidden="true" />}
        >
          Meet Our Consultants
        </CtaLink>
      </Reveal>
    </section>
  )
}
