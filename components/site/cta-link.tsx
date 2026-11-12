import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const VARIANTS = {
  green: 'bg-brand-green-strong text-accent-foreground hover:bg-brand-green-strong/90 shadow-sm',
  navy: 'bg-primary text-primary-foreground hover:bg-primary/90',
  'outline-light': 'border border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground/10',
  'outline-dark': 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
} as const

export type CtaVariant = keyof typeof VARIANTS

export function CtaLink({
  href,
  children,
  variant = 'green',
  className,
  icon = true,
  external = false,
}: {
  href: string
  children: React.ReactNode
  variant?: CtaVariant
  className?: string
  icon?: boolean | React.ReactNode
  external?: boolean
}) {
  const classes = cn(
    'group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors',
    VARIANTS[variant],
    className,
  )
  const trailing =
    icon === true ? (
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    ) : icon === false ? null : (
      icon
    )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {trailing}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {trailing}
    </Link>
  )
}
