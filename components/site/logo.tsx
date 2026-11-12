import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/site-data'

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" className={cn('inline-flex shrink-0 items-center', className)} aria-label={`${SITE.name} – Home`}>
      <Image
        src="/images/al-noor-arabia-logo.png"
        alt={SITE.name}
        width={1400}
        height={325}
        priority={priority}
        className="h-12 w-auto sm:h-16"
      />
    </Link>
  )
}
