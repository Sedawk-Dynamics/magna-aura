import { SectionHeading } from '@/components/site/section-heading'
import { Stagger, StaggerItem } from '@/components/site/reveal'
import { WHY_US } from '@/lib/site-data'
import { ICONS } from '@/lib/icons'

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="bg-navy text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20">
        <SectionHeading id="why-title" tone="dark" eyebrow="Why Al-Noor Arabia?" title="Your Partner for Lasting Value" />
        <Stagger className="grid gap-px overflow-hidden rounded-xl bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_US.map((w) => {
            const Icon = ICONS[w.icon]
            return (
              <StaggerItem key={w.title} className="flex flex-col gap-4 bg-navy p-7">
                <Icon className="size-9 text-brand-green" aria-hidden="true" />
                <h3 className="text-lg font-bold">{w.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/75">{w.text}</p>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
