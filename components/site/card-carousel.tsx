'use client'

import { Children, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function CardCarousel({
  children,
  label,
  slideClassName = 'basis-[85%] sm:basis-1/2 lg:basis-1/3',
  autoplay = false,
  tone = 'light',
}: {
  children: React.ReactNode
  label: string
  slideClassName?: string
  autoplay?: boolean
  tone?: 'light' | 'dark'
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: autoplay, containScroll: autoplay ? false : 'trimSnaps' },
    autoplay ? [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })] : [],
  )
  const [selected, setSelected] = useState(0)
  const [snaps, setSnaps] = useState<number[]>([])
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const sync = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
    setSnaps(emblaApi.scrollSnapList())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    sync()
    emblaApi.on('select', sync).on('reInit', sync)
    return () => {
      emblaApi.off('select', sync).off('reInit', sync)
    }
  }, [emblaApi, sync])

  const slides = Children.toArray(children)
  const buttonClass = cn(
    'inline-flex size-10 items-center justify-center rounded-full border transition-colors disabled:opacity-40',
    tone === 'dark'
      ? 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10'
      : 'border-border bg-background text-foreground hover:bg-muted',
  )

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="flex flex-col gap-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex touch-pan-y">
          {slides.map((slide, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              className={cn('min-w-0 shrink-0 grow-0 pl-5', slideClassName)}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {snaps.length > 1 && (
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === selected}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === selected
                    ? 'w-8 bg-brand-green-strong'
                    : tone === 'dark'
                      ? 'w-2 bg-primary-foreground/30'
                      : 'w-2 bg-border',
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className={buttonClass}
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!autoplay && !canPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={buttonClass}
              onClick={() => emblaApi?.scrollNext()}
              disabled={!autoplay && !canNext}
              aria-label="Next slide"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
