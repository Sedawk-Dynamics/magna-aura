'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { AnimatePresence, motion } from 'motion/react'
import { Pause, Play } from 'lucide-react'
import { AnimatedVisual } from '@/components/site/animated-visual'
import { CtaLink } from '@/components/site/cta-link'
import type { VisualKind } from '@/lib/visuals'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

type Slide = {
  eyebrow: string
  lead: string
  accent: string
  pillars: string[]
  text: string
  visual: VisualKind
  primary: { label: string; href: string }
}

const SLIDES: Slide[] = [
  {
    eyebrow: 'Al-Noor Arabia Management Consulting',
    lead: 'From Compliance',
    accent: 'to Performance.',
    pillars: ['ISO & Management Systems', 'Project & Engineering Advisory', 'Asset Management & Reliability'],
    text: 'Integrated management consultancy and specialized advisory expertise to strengthen organizational, project and asset performance.',
    visual: 'network',
    primary: { label: 'Explore Our Services', href: '/services' },
  },
  {
    eyebrow: 'Project & Engineering Advisory',
    lead: 'Strengthening',
    accent: 'Project Delivery.',
    pillars: ['PMO & Governance', 'Project Controls & QA/QC', 'Hydraulic, Piping & Electrical'],
    text: 'Project management, delivery assurance and specialized engineering advisory to improve project execution and technical performance.',
    visual: 'pipeline',
    primary: { label: 'Project & Engineering Services', href: '/services/project-management-engineering-advisory' },
  },
  {
    eyebrow: 'Asset Management & Reliability',
    lead: 'Optimizing',
    accent: 'Asset Performance.',
    pillars: ['Condition & Criticality', 'RCM & Maintenance Strategy', 'Rotating Equipment Reliability'],
    text: 'Asset management, maintenance optimization and rotating-equipment reliability advisory to reduce recurring failures and extend lifecycle value.',
    visual: 'gears',
    primary: { label: 'Asset Reliability Services', href: '/services/asset-management-equipment-reliability' },
  },
  {
    eyebrow: 'Food Safety & HSE',
    lead: 'Protecting People.',
    accent: 'Building Confidence.',
    pillars: ['ISO 22000 · FSSC 22000 · HACCP', 'HSE Risk & Compliance', 'Environmental Sustainability'],
    text: 'Food safety, HSE and sustainability consulting to manage operational risk, meet regulatory requirements and achieve recognized certifications.',
    visual: 'shield',
    primary: { label: 'Food Safety & Quality', href: '/services/food-safety-quality-management' },
  },
]

export function HeroCarousel() {
  const [playing, setPlaying] = useState(true)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 6500, stopOnInteraction: false }),
  ])
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const autoplay = emblaApi?.plugins().autoplay
    if (!autoplay) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      autoplay.stop()
      setPlaying(false)
    }
  }, [emblaApi])

  const togglePlay = () => {
    const autoplay = emblaApi?.plugins().autoplay
    if (!autoplay) return
    if (autoplay.isPlaying()) {
      autoplay.stop()
      setPlaying(false)
    } else {
      autoplay.play()
      setPlaying(true)
    }
  }

  const slide = SLIDES[selected]

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured services"
      className="relative isolate overflow-hidden bg-navy-deep text-primary-foreground"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((s, i) => (
            <div
              key={s.eyebrow}
              className="relative h-full min-w-0 shrink-0 grow-0 basis-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}`}
              aria-hidden={i !== selected}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: i === selected ? 1.06 : 1 }}
                transition={{ duration: 7, ease: 'linear' }}
              >
                <AnimatedVisual kind={s.visual} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy-deep/70 to-transparent" />

      <div className="mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center gap-10 px-6 py-16 md:min-h-[620px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className="flex max-w-2xl flex-col gap-5"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
              exit: { opacity: 0, transition: { duration: 0.2 } },
            }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { ease: EASE, duration: 0.6 } } }}
              className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase"
            >
              {slide.eyebrow}
            </motion.p>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { ease: EASE, duration: 0.7 } } }}
              className="text-5xl leading-[1.02] font-extrabold md:text-6xl lg:text-7xl"
            >
              {slide.lead}
              <span className="block text-brand-green">{slide.accent}</span>
            </motion.h1>
            <motion.ul
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { ease: EASE, duration: 0.6 } } }}
              className="flex flex-wrap gap-2"
            >
              {slide.pillars.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm"
                >
                  {p}
                </li>
              ))}
            </motion.ul>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { ease: EASE, duration: 0.6 } } }}
              className="max-w-xl text-lg leading-relaxed text-pretty text-primary-foreground/85"
            >
              {slide.text}
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { ease: EASE, duration: 0.6 } } }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <CtaLink href={slide.primary.href}>{slide.primary.label}</CtaLink>
              <CtaLink href="/contact" variant="outline-light">
                Contact Us
              </CtaLink>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.eyebrow}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Show slide ${i + 1}: ${s.eyebrow}`}
                aria-current={i === selected}
                className="group relative h-1.5 w-10 overflow-hidden rounded-full bg-primary-foreground/25 sm:w-14"
              >
                <span
                  className={cn(
                    'absolute inset-y-0 left-0 rounded-full bg-brand-green transition-[width] duration-500',
                    i === selected ? 'w-full' : 'w-0 group-hover:w-1/3',
                  )}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex size-9 items-center justify-center rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10"
            aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          >
            {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
          </button>
          <p className="text-xs text-primary-foreground/70" aria-live="polite">
            <span className="font-bold text-primary-foreground">{String(selected + 1).padStart(2, '0')}</span> /{' '}
            {String(SLIDES.length).padStart(2, '0')}
          </p>
        </div>
      </div>
    </section>
  )
}
