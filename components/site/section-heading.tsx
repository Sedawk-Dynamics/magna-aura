import { cn } from '@/lib/utils'
import { Reveal } from '@/components/site/reveal'

export function SectionHeading({
  eyebrow,
  title,
  text,
  className,
  align = 'left',
  tone = 'light',
  id,
}: {
  eyebrow?: string
  title: string
  text?: string
  className?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  id?: string
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-xs font-bold tracking-[0.2em] uppercase',
            tone === 'dark' ? 'text-brand-green' : 'text-brand-green-strong',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'text-3xl font-extrabold md:text-4xl',
          tone === 'dark' ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {text && (
        <p
          className={cn(
            'max-w-2xl leading-relaxed text-pretty',
            tone === 'dark' ? 'text-primary-foreground/80' : 'text-muted-foreground',
          )}
        >
          {text}
        </p>
      )}
    </Reveal>
  )
}
