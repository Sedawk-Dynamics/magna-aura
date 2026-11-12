import Image from 'next/image'
import { SectionHeading } from '@/components/site/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'
import { ABOUT } from '@/lib/site-data'
import { ICONS } from '@/lib/icons'

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="scroll-mt-28 bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20">
        <SectionHeading
          id="team-title"
          eyebrow="Our People"
          title="Our Professionals & Specialist Network"
          text={ABOUT.networkIntro}
        />

        <div className="flex flex-col gap-6">
          <Reveal>
            <h3 className="w-fit rounded-r-full bg-brand-green-strong py-2 pr-6 pl-4 text-lg font-bold text-accent-foreground">
              Our Core Consulting Team
            </h3>
          </Reveal>
          <Stagger as="ul" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.team.map((m) => (
              <StaggerItem key={m.name} as="li" className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
                  <div className="relative aspect-[4/5] bg-secondary">
                    <Image
                      src={m.image}
                      alt={`Portrait of ${m.name}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h4 className="text-lg font-extrabold">{m.name}</h4>
                    <p className="w-fit rounded-md bg-brand-green-strong px-3 py-1 text-xs leading-snug font-bold text-accent-foreground">
                      {m.role}
                    </p>
                    <p className="text-xs leading-relaxed font-semibold text-brand-blue">{m.credentials}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{m.summary}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal className="flex flex-col gap-4">
            <h3 className="w-fit rounded-r-full bg-primary py-2 pr-6 pl-4 text-lg font-bold text-primary-foreground">
              Our Specialist Consulting Network
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-extrabold">{ABOUT.specialistsTitle}</p>
              <p className="max-w-3xl leading-relaxed text-muted-foreground">{ABOUT.specialistsIntro}</p>
            </div>
          </Reveal>
          <Stagger className="grid gap-4 lg:grid-cols-3">
            {ABOUT.specialists.map((s) => {
              const Icon = ICONS[s.icon]
              return (
                <StaggerItem key={s.title} className="flex flex-col gap-4 rounded-xl border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-brand-blue">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h4 className="text-lg leading-snug font-bold">{s.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  {s.badges.length > 0 && (
                    <ul className="mt-auto flex flex-wrap gap-2">
                      {s.badges.map((b) => (
                        <li key={b} className="rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
