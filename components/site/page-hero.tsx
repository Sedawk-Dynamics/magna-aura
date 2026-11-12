'use client'

import Link from 'next/link'
import { AnimatedVisual } from '@/components/site/animated-visual'
import type { VisualKind } from '@/lib/visuals'
import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'
import { LinkKuwait } from '@/components/site/kuwait-link'

const EASE = [0.22, 1, 0.36, 1] as const

export function PageHero({
  eyebrow,
  titleLead,
  titleAccent,
  subtitle,
  text,
  visual,
  breadcrumbs,
  children,
}: {
  eyebrow: string
  titleLead: string
  titleAccent?: string
  subtitle?: string
  text: string
  visual: VisualKind
  breadcrumbs: { label: string; href?: string }[]
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-primary-foreground">
      <motion.div
        className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[62%]"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <AnimatedVisual kind={visual} />
      </motion.div>
      {/* Gradient blends the photo into the navy text column. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/30 lg:via-navy-deep/85 lg:to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 md:py-20 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-primary-foreground/70">
            {breadcrumbs.map((b, i) => (
              <li key={b.label} className="flex items-center gap-1">
                {b.href ? (
                  <Link href={b.href} className="hover:text-brand-green">
                    {b.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-primary-foreground">
                    {b.label}
                  </span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="size-3" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </nav>

        <motion.div
          className="flex max-w-2xl flex-col gap-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase">{eyebrow}</p>
          <h1 className="text-4xl leading-[1.05] font-extrabold md:text-5xl lg:text-6xl">
            {titleLead}
            {titleAccent && <span className="block text-brand-green">{titleAccent}</span>}
          </h1>
          {subtitle && <p className="text-lg font-bold text-pretty">{subtitle}</p>}
          <p className="max-w-xl leading-relaxed text-pretty text-primary-foreground/85">
            <LinkKuwait text={text} />
          </p>
          {children && <div className="flex flex-wrap gap-3 pt-2">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
