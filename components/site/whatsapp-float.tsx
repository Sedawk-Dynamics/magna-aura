import { CONTACT } from '@/lib/site-data'
import { WhatsAppIcon } from '@/components/site/whatsapp-icon'

/** Floating circular WhatsApp button, fixed to the bottom-right corner on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      title={`WhatsApp ${CONTACT.whatsapp.display}`}
      aria-label={`Chat with us on WhatsApp, ${CONTACT.whatsapp.display}`}
      className="fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center rounded-full bg-brand-green-strong text-white shadow-lg shadow-navy/25 transition-transform hover:-translate-y-0.5 hover:bg-brand-green-strong/90 focus-visible:ring-3 focus-visible:ring-brand-blue/40 sm:right-6 sm:bottom-6 sm:size-16"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  )
}
