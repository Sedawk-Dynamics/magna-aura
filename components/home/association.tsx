import Image from 'next/image'
import { AnimatedVisual } from '@/components/site/animated-visual'
import { LinkKuwait, KUWAIT_NAME, KUWAIT_URL } from '@/components/site/kuwait-link'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'
import { ASSOCIATION, SITE } from '@/lib/site-data'
import { ICONS } from '@/lib/icons'

export function Association() {
  return (
    <section aria-labelledby="association-title" className="bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16">
        <Reveal className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-brand-blue uppercase">International Association</p>
          <h2 id="association-title" className="text-2xl font-extrabold md:text-3xl">
            {ASSOCIATION.headline}
          </h2>
        </Reveal>

        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <Reveal className="flex flex-col items-center gap-3 rounded-xl bg-card p-6 text-center shadow-sm md:items-start md:text-left">
            <Image
              src="/images/al-noor-arabia-logo.png"
              alt={SITE.name}
              width={1400}
              height={325}
              className="h-16 w-auto"
            />
            <p className="text-sm font-semibold text-muted-foreground">Saudi Arabia</p>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto aspect-[16/9] w-full max-w-xs overflow-hidden rounded-xl md:w-64">
            <AnimatedVisual kind="handshake" />
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col items-center gap-3 rounded-xl bg-card p-6 text-center shadow-sm md:items-end md:text-right">
            <a href={KUWAIT_URL} target="_blank" rel="noopener noreferrer" aria-label={`${KUWAIT_NAME} (opens in a new tab)`}>
              <Image
                src="/images/alnoor-kuwait-logo.png"
                alt={KUWAIT_NAME}
                width={1200}
                height={286}
                className="h-16 w-auto"
              />
            </a>
            <p className="text-sm font-semibold text-muted-foreground">Kuwait · Established 2010</p>
          </Reveal>
        </div>

        <Reveal className="mx-auto max-w-3xl text-center leading-relaxed text-pretty text-muted-foreground">
          <LinkKuwait text={ASSOCIATION.text} />
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-3">
          {ASSOCIATION.stats.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <StaggerItem
                key={s.label}
                className="flex flex-col items-center gap-2 rounded-xl border bg-card p-6 text-center"
              >
                <Icon className="size-6 text-brand-green-strong" aria-hidden="true" />
                <p className="text-4xl font-extrabold text-foreground">{s.value}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.label}</p>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
