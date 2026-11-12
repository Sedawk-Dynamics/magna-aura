import { Check, Gem, Mountain, Target } from 'lucide-react'
import { Stagger, StaggerItem } from '@/components/site/reveal'
import { ABOUT } from '@/lib/site-data'

export function VisionMissionValues() {
  return (
    <section aria-label="Vision, mission and values" className="bg-muted">
      <Stagger className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
        <StaggerItem className="flex flex-col gap-4 rounded-xl border-t-4 border-brand-green-strong bg-card p-7 shadow-sm">
          <Target className="size-9 text-brand-green-strong" aria-hidden="true" />
          <h2 className="text-2xl font-extrabold">Our Vision</h2>
          <p className="leading-relaxed text-muted-foreground">{ABOUT.vision}</p>
        </StaggerItem>
        <StaggerItem className="flex flex-col gap-4 rounded-xl border-t-4 border-brand-blue bg-card p-7 shadow-sm">
          <Mountain className="size-9 text-brand-blue" aria-hidden="true" />
          <h2 className="text-2xl font-extrabold">Our Mission</h2>
          <p className="leading-relaxed text-muted-foreground">{ABOUT.mission}</p>
        </StaggerItem>
        <StaggerItem className="flex flex-col gap-4 rounded-xl border-t-4 border-primary bg-card p-7 shadow-sm">
          <Gem className="size-9 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-extrabold">Our Values</h2>
          <ul className="flex flex-col gap-2">
            {ABOUT.values.map((v) => (
              <li key={v} className="flex items-center gap-2 font-medium">
                <Check className="size-4 shrink-0 text-brand-green-strong" aria-hidden="true" />
                {v}
              </li>
            ))}
          </ul>
        </StaggerItem>
      </Stagger>
    </section>
  )
}
