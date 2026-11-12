import { AnimatedVisual } from '@/components/site/animated-visual'
import { CtaLink } from '@/components/site/cta-link'
import type { VisualKind } from '@/lib/visuals'
import { WhatsAppIcon } from '@/components/site/whatsapp-icon'
import { Reveal } from '@/components/site/reveal'
import { CONTACT } from '@/lib/site-data'

export function CtaBand({
  title = 'Let’s Discuss Your Next Project',
  text = 'Whether you need ISO consultancy, project advisory or asset reliability support, our team is ready to understand your requirements and provide the right solution.',
  visual = 'network',
  whatsapp = false,
}: {
  title?: string
  text?: string
  visual?: VisualKind
  whatsapp?: boolean
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-primary-foreground">
      <AnimatedVisual kind={visual} className="-z-10 opacity-60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
          <p className="leading-relaxed text-pretty text-primary-foreground/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <CtaLink href="/contact">Request a Consultation</CtaLink>
          {whatsapp ? (
            <CtaLink
              href={CONTACT.whatsapp.href}
              external
              variant="outline-light"
              icon={<WhatsAppIcon className="size-4" />}
            >
              Contact Us on WhatsApp
            </CtaLink>
          ) : (
            <CtaLink href="/contact" variant="outline-light">
              Contact Our Team
            </CtaLink>
          )}
        </div>
      </Reveal>
    </section>
  )
}
