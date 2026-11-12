import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { LinkKuwait, KUWAIT_NAME } from '@/components/site/kuwait-link'
import { WhatsAppIcon } from '@/components/site/whatsapp-icon'
import { CONTACT, MAIN_NAV, SITE } from '@/lib/site-data'
import { SERVICES } from '@/lib/services'

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.3fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-lg bg-background p-3">
            <Image
              src="/images/al-noor-arabia-logo.png"
              alt={SITE.name}
              width={1400}
              height={325}
              className="h-14 w-auto"
            />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/75">{SITE.description}</p>
        </div>

        <nav aria-label="Quick links" className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm text-primary-foreground/75">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-green">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our services" className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">Our Services</h2>
          <ul className="flex flex-col gap-2 text-sm text-primary-foreground/75">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-brand-green">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">Contact Us</h2>
          <address className="flex flex-col gap-3 text-sm not-italic text-primary-foreground/75">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-green" aria-hidden="true" />
              <span>
                {CONTACT.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </p>
            <a href={CONTACT.phone.href} className="flex items-center gap-3 hover:text-brand-green">
              <Phone className="size-4 shrink-0 text-brand-green" aria-hidden="true" />
              {CONTACT.phone.display}
            </a>
            <a
              href={CONTACT.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-brand-green"
            >
              <WhatsAppIcon className="size-4 shrink-0 text-brand-green" />
              <span className="sr-only">WhatsApp:</span>
              {CONTACT.whatsapp.display}
            </a>
            <a href={CONTACT.email.href} className="flex items-center gap-3 break-all hover:text-brand-green">
              <Mail className="size-4 shrink-0 text-brand-green" aria-hidden="true" />
              {CONTACT.email.display}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            <LinkKuwait text={`In association with ${KUWAIT_NAME}`} />
          </p>
        </div>
      </div>
    </footer>
  )
}
