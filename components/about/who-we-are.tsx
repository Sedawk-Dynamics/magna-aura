import Image from 'next/image'
import { FileText, Handshake, Users } from 'lucide-react'
import { CtaLink } from '@/components/site/cta-link'
import { KUWAIT_NAME, LinkKuwait } from '@/components/site/kuwait-link'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'
import { ABOUT, ASSOCIATION, ASSOCIATION_BROCHURE_URL } from '@/lib/site-data'
import { ICONS } from '@/lib/icons'

export function WhoWeAre() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
      <Reveal className="flex flex-col gap-6">
        <p className="text-xs font-bold tracking-[0.25em] text-brand-green-strong uppercase">About Al-Noor Arabia</p>
        <div className="flex items-center gap-4">
          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-navy/20">
            <Users className="size-7" aria-hidden="true" />
          </span>
          <h2 className="text-4xl leading-tight font-extrabold md:text-5xl">Who We Are</h2>
        </div>
        <div className="flex flex-col gap-4 border-l-4 border-brand-green-strong pl-6">
          <p className="text-xl leading-relaxed font-semibold text-pretty text-foreground md:text-2xl">{ABOUT.whoWeAre}</p>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="flex flex-col gap-6 lg:border-l lg:pl-16">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <Handshake className="size-8 text-brand-green-strong" aria-hidden="true" />
            <h2 className="text-3xl font-extrabold">{ASSOCIATION.title}</h2>
          </div>
          <p className="font-semibold text-brand-blue">{ASSOCIATION.subtitle}</p>
        </div>
        <div className="flex flex-col gap-5 rounded-xl border bg-card p-6 shadow-sm">
          <Image
            src="/images/alnoor-kuwait-logo.png"
            alt={KUWAIT_NAME}
            width={1200}
            height={286}
            className="h-20 w-auto self-start"
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            <LinkKuwait text={ASSOCIATION.text} />
          </p>
          <Stagger className="grid grid-cols-3 gap-3">
            {ASSOCIATION.stats.map((s) => {
              const Icon = ICONS[s.icon]
              return (
                <StaggerItem key={s.label} className="flex flex-col items-center gap-1 rounded-xl bg-navy-deep p-4 text-center text-primary-foreground">
                  <Icon className="size-5 text-brand-green" aria-hidden="true" />
                  <p className="text-2xl font-extrabold sm:text-3xl">{s.value}</p>
                  <p className="text-xs leading-snug text-primary-foreground/75">{s.label}</p>
                </StaggerItem>
              )
            })}
          </Stagger>
          <CtaLink
            href={ASSOCIATION_BROCHURE_URL}
            external
            variant="outline-dark"
            className="self-start"
            icon={<FileText className="size-4" aria-hidden="true" />}
          >
            View Association Brochure
          </CtaLink>
        </div>
      </Reveal>
    </section>
  )
}
