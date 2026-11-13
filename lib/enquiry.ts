export const MAX_DESC = 1000

export type EnquiryFields = {
  name: string
  company: string
  jobTitle: string
  email: string
  phone: string
  service: string
  location: string
  description: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryFields, string>>

/** Shared by the form (client) and the API route (server), so both apply the same rules. */
export function validateEnquiry(f: EnquiryFields): EnquiryErrors {
  const e: EnquiryErrors = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (f.company.trim().length < 2) e.company = 'Please enter your company or organization.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Please enter a valid email address.'
  if (!/^[0-9\s-]{7,15}$/.test(f.phone.trim())) e.phone = 'Please enter a valid contact number.'
  if (!f.service.trim()) e.service = 'Please select a service.'
  if (!f.description.trim()) e.description = 'Please describe your requirements.'
  if (f.description.length > MAX_DESC) e.description = `Please keep your description under ${MAX_DESC} characters.`
  return e
}
