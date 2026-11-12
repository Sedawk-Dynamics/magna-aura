'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, CheckCircle2, ClipboardPen, Lock } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { SERVICES } from '@/lib/services'
import { MAX_DESC, validateEnquiry, type EnquiryErrors, type EnquiryFields } from '@/lib/enquiry'
import { WhatsAppIcon } from '@/components/site/whatsapp-icon'
import { cn } from '@/lib/utils'

const inputClass =
  'w-full rounded-lg border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 outline-none transition-shadow focus-visible:border-brand-blue focus-visible:ring-3 focus-visible:ring-brand-blue/20 aria-invalid:border-destructive'

function Field({
  id,
  label,
  required,
  error,
  className,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-bold">
        {label}
        {required && (
          <span className="text-destructive" aria-hidden="true">
            {' *'}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactForm() {
  const searchParams = useSearchParams()
  const resource = searchParams.get('resource')

  const [fields, setFields] = useState<EnquiryFields>({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    description: resource ? `I would like to request the "${resource}".` : '',
  })
  const [website, setWebsite] = useState('') // honeypot, hidden from people
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [failure, setFailure] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const set = (key: keyof EnquiryFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const describe = (key: keyof EnquiryFields) =>
    errors[key] ? { 'aria-invalid': true as const, 'aria-describedby': `${key}-error` } : {}

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFailure(null)
    const found = validateEnquiry(fields)
    setErrors(found)
    const firstError = Object.keys(found)[0]
    if (firstError) {
      document.getElementById(firstError)?.focus()
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, website }),
      })
      const data = (await response.json().catch(() => ({}))) as { error?: string; fields?: EnquiryErrors }
      if (!response.ok) {
        if (data.fields) setErrors(data.fields)
        setFailure(data.error ?? 'We could not send your enquiry. Please try again.')
        return
      }
      setSent(true)
    } catch {
      setFailure('We could not reach our server. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-2xl border bg-card shadow-xl shadow-navy/10"
    >
      <div className="flex items-center gap-4 bg-primary px-6 py-5 text-primary-foreground md:px-8">
        <ClipboardPen className="size-10 shrink-0" aria-hidden="true" />
        <div>
          <h2 className="text-2xl font-extrabold">Request a Consultation</h2>
          <p className="font-semibold text-primary-foreground/80">Tell Us About Your Requirements</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 px-6 py-16 text-center md:px-8"
            role="status"
          >
            <CheckCircle2 className="size-14 text-brand-green-strong" aria-hidden="true" />
            <h3 className="text-2xl font-extrabold">Thank you, {fields.name.split(' ')[0]}.</h3>
            <p className="max-w-md leading-relaxed text-muted-foreground">
              Your enquiry has been received. Our team will review your requirements and contact you at{' '}
              <span className="font-bold text-foreground">{fields.email}</span>. For urgent matters, reach us on{' '}
              <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-blue underline">
                WhatsApp
              </a>{' '}
              or call{' '}
              <a href={CONTACT.phone.href} className="font-bold text-brand-blue underline">
                {CONTACT.phone.display}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-2 text-sm font-bold text-primary underline-offset-4 hover:underline"
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="grid gap-5 px-6 py-7 sm:grid-cols-2 md:px-8"
          >
            <p className="leading-relaxed text-muted-foreground sm:col-span-2">
              Please complete the enquiry form below. Our team will review your requirements and contact you to discuss
              the appropriate consultancy support.
            </p>

            <Field id="name" label="Full Name" required error={errors.name}>
              <input id="name" name="name" autoComplete="name" placeholder="Enter your full name" value={fields.name} onChange={set('name')} className={inputClass} {...describe('name')} />
            </Field>
            <Field id="company" label="Company / Organization" required error={errors.company}>
              <input id="company" name="company" autoComplete="organization" placeholder="Enter company name" value={fields.company} onChange={set('company')} className={inputClass} {...describe('company')} />
            </Field>
            <Field id="jobTitle" label="Job Title">
              <input id="jobTitle" name="jobTitle" autoComplete="organization-title" placeholder="Enter your job title" value={fields.jobTitle} onChange={set('jobTitle')} className={inputClass} />
            </Field>
            <Field id="email" label="Email Address" required error={errors.email}>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" value={fields.email} onChange={set('email')} className={inputClass} {...describe('email')} />
            </Field>
            <Field id="phone" label="Contact Number" required error={errors.phone}>
              <div className="flex">
                <span className="inline-flex items-center rounded-l-lg border border-r-0 bg-muted px-3 text-sm font-semibold">
                  +966
                </span>
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="Enter your contact number" value={fields.phone} onChange={set('phone')} className={cn(inputClass, 'rounded-l-none')} {...describe('phone')} />
              </div>
            </Field>
            <Field id="service" label="Service Interested In" required error={errors.service}>
              <select id="service" name="service" value={fields.service} onChange={set('service')} className={cn(inputClass, !fields.service && 'text-muted-foreground/70')} {...describe('service')}>
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other / General Enquiry">Other / General Enquiry</option>
              </select>
            </Field>
            <Field id="location" label="Project / Service Location" className="sm:col-span-2">
              <input id="location" name="location" placeholder="Enter project or service location (e.g. Jeddah, Riyadh, etc.)" value={fields.location} onChange={set('location')} className={inputClass} />
            </Field>
            <Field id="description" label="Brief Description of Requirements" required error={errors.description} className="sm:col-span-2">
              <div className="relative">
                <textarea id="description" name="description" rows={5} maxLength={MAX_DESC} placeholder="Please provide a brief description of your requirements..." value={fields.description} onChange={set('description')} className={cn(inputClass, 'resize-y pb-8')} {...describe('description')} />
                <span className="pointer-events-none absolute right-3 bottom-3 text-xs text-muted-foreground">
                  {fields.description.length} / {MAX_DESC}
                </span>
              </div>
            </Field>

            {/* Honeypot: hidden from people and screen readers; bots tend to fill it in. */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>

            {failure && (
              <div role="alert" className="flex flex-col gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm sm:col-span-2">
                <p className="font-semibold text-destructive">{failure}</p>
                <div className="flex flex-wrap gap-4 font-bold text-brand-blue">
                  <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline">
                    <WhatsAppIcon className="size-4" /> WhatsApp us
                  </a>
                  <a href={CONTACT.email.href} className="underline">
                    Email {CONTACT.email.display}
                  </a>
                  <a href={CONTACT.phone.href} className="underline">
                    Call {CONTACT.phone.display}
                  </a>
                </div>
              </div>
            )}

            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={submitting ? undefined : { y: -2 }}
              whileTap={submitting ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-green-strong px-6 py-3 text-lg font-bold text-accent-foreground shadow-sm transition-colors hover:bg-brand-green-strong/90 disabled:opacity-70 sm:col-span-2"
            >
              {submitting ? 'Sending…' : 'Submit Enquiry'}
              <ArrowRight className="size-5" aria-hidden="true" />
            </motion.button>
            <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground sm:col-span-2">
              <Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              Your information will be used to respond to your enquiry and handled in accordance with our Privacy Policy.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
