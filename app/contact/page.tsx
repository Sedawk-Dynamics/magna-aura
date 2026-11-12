import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { CtaBand } from '@/components/site/cta-band'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'
import { WhatsAppIcon } from '@/components/site/whatsapp-icon'
import { ContactForm } from '@/components/contact/contact-form'
import { CONTACT } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Connect with Al-Noor Arabia Management Consulting to discuss your consultancy needs, technical requirements or upcoming projects.',
  alternates: { canonical: '/contact' },
}

const CHANNELS = [
  {
    title: 'Call Us',
    text: 'Speak to our team for immediate assistance.',
    value: CONTACT.phone.display,
    href: CONTACT.phone.href,
    icon: Phone,
    tint: 'bg-brand-blue',
    external: false,
  },
  {
    title: 'WhatsApp Us',
    text: 'Get quick support via WhatsApp.',
    value: CONTACT.whatsapp.display,
    href: CONTACT.whatsapp.href,
    icon: WhatsAppIcon,
    tint: 'bg-brand-green-strong',
    external: true,
  },
  {
    title: 'Email Us',
    text: 'Send us your enquiries or documentation.',
    value: CONTACT.email.display,
    href: CONTACT.email.href,
    icon: Mail,
    tint: 'bg-primary',
    external: false,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        titleLead="Let’s Discuss Your"
        titleAccent="Business Requirements"
        text="Connect with Al-Noor Arabia Management Consulting to discuss your consultancy needs, technical requirements or upcoming projects. Our team is ready to support you."
        visual="globe"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-3 border-l-4 border-brand-green-strong pl-5">
            <h2 className="text-3xl font-extrabold">Get in Touch</h2>
            <p className="text-lg font-bold text-brand-blue">We Look Forward to Hearing from You</p>
            <p className="leading-relaxed text-muted-foreground">
              Whether you require ISO management-system consulting, operational excellence support, engineering advisory
              or specialized technical services, we welcome your enquiry.
            </p>
          </Reveal>

          <Stagger className="flex flex-col gap-4">
            {CHANNELS.map((c) => (
              <StaggerItem key={c.title}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-5 rounded-xl border bg-card p-5 transition-shadow hover:shadow-lg hover:shadow-navy/5"
                >
                  <span
                    className={`inline-flex size-14 shrink-0 items-center justify-center rounded-full text-primary-foreground ${c.tint}`}
                  >
                    <c.icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className="text-lg font-extrabold">{c.title}</span>
                    <span className="text-sm text-muted-foreground">{c.text}</span>
                    <span className="font-bold break-all text-primary group-hover:text-brand-green-strong">
                      {c.value}
                    </span>
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="flex gap-5 rounded-xl border bg-card p-5">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MapPin className="size-6" aria-hidden="true" />
            </span>
            <address className="flex flex-col gap-0.5 text-sm not-italic">
              <span className="text-lg font-extrabold">Visit Us</span>
              {CONTACT.address.lines.map((line) => (
                <span key={line} className="text-muted-foreground">
                  {line}
                </span>
              ))}
            </address>
          </Reveal>
        </div>

        <Suspense>
          <ContactForm />
        </Suspense>
      </section>

      <CtaBand
        title="Let’s Work Together"
        text="Your Business Challenges. Our Consulting Expertise. From management systems and operational excellence to engineering advisory and technical consultancy, Al-Noor Arabia is ready to discuss your requirements."
        whatsapp
      />
    </>
  )
}
