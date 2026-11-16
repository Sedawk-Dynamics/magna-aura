'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { Logo } from '@/components/site/logo'
import { CtaLink } from '@/components/site/cta-link'
import { WhatsAppIcon } from '@/components/site/whatsapp-icon'
import { CONTACT, MAIN_NAV } from '@/lib/site-data'
import { SERVICES } from '@/lib/services'
import { cn } from '@/lib/utils'

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!servicesOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setServicesOpen(false)
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [servicesOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy-deep text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-2 text-xs">
          <a href={CONTACT.phone.href} className="inline-flex items-center gap-2 hover:text-brand-green">
            <Phone className="size-3.5" aria-hidden="true" />
            {CONTACT.phone.display}
          </a>
          <a
            href={CONTACT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brand-green-strong px-2.5 py-1 font-semibold text-white transition-colors hover:bg-brand-green-strong/90"
          >
            <WhatsAppIcon className="size-4" />
            <span className="sr-only">WhatsApp</span>
            {CONTACT.whatsapp.display}
          </a>
          <a href={CONTACT.email.href} className="inline-flex items-center gap-2 hover:text-brand-green">
            <Mail className="size-3.5" aria-hidden="true" />
            {CONTACT.email.display}
          </a>
          <span className="ml-auto text-primary-foreground/70">Jeddah, Kingdom of Saudi Arabia</span>
        </div>
      </div>

      <div
        className={cn(
          'border-b bg-background/95 backdrop-blur transition-shadow',
          scrolled ? 'shadow-md shadow-navy/5' : 'shadow-none',
        )}
      >
        <nav aria-label="Main" className="mx-auto flex max-w-none items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-10">
          <Logo priority />

          <ul className="hidden items-center gap-1 lg:flex">
            {MAIN_NAV.map((item) =>
              item.href === '/services' ? (
                <li key={item.href} ref={servicesRef} className="relative">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        'relative px-3 py-2 text-sm font-semibold transition-colors hover:text-brand-green-strong',
                        isActive(pathname, item.href) ? 'text-brand-green-strong' : 'text-foreground',
                      )}
                      aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="-ml-2 rounded p-1 text-foreground hover:text-brand-green-strong"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      aria-label="Show services"
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      <ChevronDown
                        className={cn('size-4 transition-transform', servicesOpen && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        id="services-menu"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 mt-3 w-[min(92vw,640px)] -translate-x-1/2 rounded-xl border bg-popover p-3 shadow-xl shadow-navy/10"
                      >
                        <ul className="grid gap-1 sm:grid-cols-2">
                          {SERVICES.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                className="flex flex-col gap-0.5 rounded-lg p-3 transition-colors hover:bg-muted"
                              >
                                <span className="text-sm font-bold text-foreground">{s.title}</span>
                                <span className="text-xs leading-relaxed text-muted-foreground">{s.tagline}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-3 py-2 text-sm font-semibold transition-colors hover:text-brand-green-strong',
                      isActive(pathname, item.href) ? 'text-brand-green-strong' : 'text-foreground',
                    )}
                    aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive(pathname, item.href) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-green-strong"
                      />
                    )}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="hidden lg:block">
            <CtaLink href="/contact">Request a Consultation</CtaLink>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-foreground hover:bg-muted lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b bg-background lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-md px-3 py-3 text-base font-semibold',
                      isActive(pathname, item.href) ? 'bg-muted text-brand-green-strong' : 'text-foreground',
                    )}
                    aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.href === '/services' && (
                    <ul className="ml-3 flex flex-col border-l pl-3">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-3">
                <CtaLink href="/contact" className="w-full">
                  Request a Consultation
                </CtaLink>
              </li>
              <li className="flex flex-col gap-2 pt-4 text-sm text-muted-foreground">
                <a href={CONTACT.phone.href} className="inline-flex items-center gap-2">
                  <Phone className="size-4" aria-hidden="true" /> {CONTACT.phone.display}
                </a>
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="size-4" /> WhatsApp {CONTACT.whatsapp.display}
                </a>
                <a href={CONTACT.email.href} className="inline-flex items-center gap-2 break-all">
                  <Mail className="size-4" aria-hidden="true" /> {CONTACT.email.display}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
