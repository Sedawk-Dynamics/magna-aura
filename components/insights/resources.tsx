import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'
import { Stagger, StaggerItem } from '@/components/site/reveal'
import { RESOURCES } from '@/lib/insights'

export function Resources() {
  return (
    <section aria-labelledby="resources-title" className="bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
        <SectionHeading
          id="resources-title"
          eyebrow="Practical Resources"
          title="Tools & Checklists"
          text="Useful tools and templates to support your management-system and operational improvement initiatives. Request a copy and our team will share it with you."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {RESOURCES.map((r) => (
            <StaggerItem key={r.title} className="h-full">
              <Link
                href={`/contact?resource=${encodeURIComponent(r.title)}`}
                className="group flex h-full flex-col gap-4 rounded-xl border bg-card p-5 transition-shadow hover:shadow-lg hover:shadow-navy/5"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <FileText className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-sm leading-snug font-bold">{r.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue">
                  Request
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
