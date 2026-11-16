import { Mail } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { WhatsAppIcon } from '@/components/site/whatsapp-icon'

const CIRCLE =
  'inline-flex size-14 items-center justify-center rounded-full text-white shadow-lg shadow-navy/25 transition-transform hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-brand-blue/40 sm:size-16'

/** Floating circular contact buttons (WhatsApp and email), fixed to the bottom-right corner on every page. */
export function WhatsAppFloat() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-center gap-3 sm:right-6 sm:bottom-6">
      <a
        href={CONTACT.email.href}
        title={`Email ${CONTACT.email.display}`}
        aria-label={`Email us at ${CONTACT.email.display}`}
        className={`${CIRCLE} bg-brand-blue hover:bg-brand-blue/90`}
      >
        <Mail className="size-7" aria-hidden="true" />
      </a>
      <a
        href={CONTACT.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        title={`WhatsApp ${CONTACT.whatsapp.display}`}
        aria-label={`Chat with us on WhatsApp, ${CONTACT.whatsapp.display}`}
        className={`${CIRCLE} bg-brand-green-strong hover:bg-brand-green-strong/90`}
      >
        <WhatsAppIcon className="size-8" />
      </a>
    </div>
  )
}
