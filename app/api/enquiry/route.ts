import { NextResponse } from 'next/server'
import { CONTACT } from '@/lib/site-data'
import { validateEnquiry, type EnquiryFields } from '@/lib/enquiry'

export const runtime = 'nodejs'

const FIELD_KEYS: (keyof EnquiryFields)[] = [
  'name',
  'company',
  'jobTitle',
  'email',
  'phone',
  'service',
  'location',
  'description',
]

/**
 * Receives a consultation enquiry from the website and emails it to the company inbox.
 *
 * Requires two environment variables (see .env.example):
 *   RESEND_API_KEY      – API key from resend.com
 *   ENQUIRY_FROM_EMAIL  – verified sender, e.g. "Al-Noor Arabia <enquiries@your-domain.com>"
 * Optional:
 *   ENQUIRY_TO_EMAIL    – inbox to receive enquiries (defaults to the company email)
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: the field is hidden from people, so only bots fill it in.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const fields = Object.fromEntries(
    FIELD_KEYS.map((key) => [key, typeof body[key] === 'string' ? (body[key] as string).trim() : '']),
  ) as EnquiryFields

  const errors = validateEnquiry(fields)
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Please check the highlighted fields.', fields: errors }, { status: 422 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.ENQUIRY_FROM_EMAIL
  const to = process.env.ENQUIRY_TO_EMAIL || CONTACT.email.display
  if (!apiKey || !from) {
    console.error('Enquiry not sent: RESEND_API_KEY and ENQUIRY_FROM_EMAIL must be set.')
    return NextResponse.json(
      { error: 'Enquiries are temporarily unavailable. Please email or WhatsApp us directly.' },
      { status: 503 },
    )
  }

  const text = [
    `Full Name: ${fields.name}`,
    `Company / Organization: ${fields.company}`,
    fields.jobTitle ? `Job Title: ${fields.jobTitle}` : null,
    `Email: ${fields.email}`,
    `Contact Number: +966 ${fields.phone}`,
    `Service Interested In: ${fields.service}`,
    fields.location ? `Project / Service Location: ${fields.location}` : null,
    '',
    'Requirements:',
    fields.description,
  ]
    .filter((line): line is string => line !== null)
    .join('\n')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: fields.email,
      subject: `Consultation Request – ${fields.service}`,
      text,
    }),
  })

  if (!response.ok) {
    console.error('Enquiry email rejected by provider, status', response.status)
    return NextResponse.json(
      { error: 'We could not send your enquiry. Please try again or contact us directly.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
