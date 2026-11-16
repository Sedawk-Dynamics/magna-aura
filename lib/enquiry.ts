export const MAX_DESC = 1000

/**
 * Web3Forms public access key. It is designed to sit in the page (it only permits
 * submissions to the inbox configured on the Web3Forms dashboard). No env file is used.
 */
export const WEB3FORMS_ACCESS_KEY = '43aad352-625e-41cb-afe4-b1a6c05e72d6'
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export type EnquiryFields = {
  name: string
  company: string
  jobTitle: string
  email: string
  countryCode: string
  phone: string
  service: string
  location: string
  description: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryFields, string>>

export const DEFAULT_COUNTRY_CODE = '+966'

export const COUNTRY_CODES: { code: string; label: string }[] = [
  { code: '+966', label: 'Saudi Arabia (+966)' },
  { code: '+965', label: 'Kuwait (+965)' },
  { code: '+971', label: 'United Arab Emirates (+971)' },
  { code: '+973', label: 'Bahrain (+973)' },
  { code: '+974', label: 'Qatar (+974)' },
  { code: '+968', label: 'Oman (+968)' },
  { code: '+962', label: 'Jordan (+962)' },
  { code: '+961', label: 'Lebanon (+961)' },
  { code: '+20', label: 'Egypt (+20)' },
  { code: '+91', label: 'India (+91)' },
  { code: '+92', label: 'Pakistan (+92)' },
  { code: '+880', label: 'Bangladesh (+880)' },
  { code: '+94', label: 'Sri Lanka (+94)' },
  { code: '+977', label: 'Nepal (+977)' },
  { code: '+60', label: 'Malaysia (+60)' },
  { code: '+63', label: 'Philippines (+63)' },
  { code: '+90', label: 'Turkey (+90)' },
  { code: '+44', label: 'United Kingdom (+44)' },
  { code: '+49', label: 'Germany (+49)' },
  { code: '+33', label: 'France (+33)' },
  { code: '+1', label: 'United States / Canada (+1)' },
]

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
