import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'
import { ICONS } from '@/lib/icons'
import type { Service } from '@/lib/services'

export function ServiceStandards({ service }: { service: Service }) {
  if (!service.standards?.length) return null

  return (
    <section aria-labelledby="standards-title" className="bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16">
        <Reveal className="flex flex-col gap-3">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-green-strong uppercase">Standards & Certifications</p>
          <h2 id="standards-title" className="text-3xl font-extrabold md:text-4xl">
            Management Systems & Certifications We Support
          </h2>
        </Reveal>

        <Stagger as="ul" className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {service.standards.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <StaggerItem key={`${s.code}-${s.label}`} as="li" className="h-full">
                <div className="flex h-full items-start gap-3 rounded-xl border bg-card p-4 transition-shadow hover:shadow-lg hover:shadow-navy/5">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-brand-blue">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <h3 className="text-sm font-extrabold text-brand-green-strong">{s.code}</h3>
                    <p className="text-xs leading-snug text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>

        {service.standardsNote && <p className="text-sm text-muted-foreground">{service.standardsNote}</p>}
      </div>
    </section>
  )
}
