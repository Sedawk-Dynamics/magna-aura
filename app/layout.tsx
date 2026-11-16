import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { MotionProvider } from '@/components/site/motion-provider'
import { CONTACT, SITE } from '@/lib/site-data'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const DEFAULT_TITLE = `${SITE.name} | ISO, Engineering & Asset Reliability Consultancy`

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    'ISO consultancy Saudi Arabia',
    'ISO 9001 consultant Jeddah',
    'ISO 14001 consultant',
    'ISO 45001 consultant',
    'ISO 22000 food safety consultant',
    'integrated management systems',
    'HSE consultancy Saudi Arabia',
    'process safety consultant',
    'asset management consultancy',
    'rotating equipment reliability',
    'project management consultancy Saudi Arabia',
    'engineering advisory Jeddah',
    'business excellence consultancy',
    'Al-Noor Arabia',
  ],
  applicationName: SITE.shortName,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_SA',
    siteName: SITE.name,
    title: DEFAULT_TITLE,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: '/image.png', width: 80, height: 82, alt: SITE.name }],
  },
  twitter: {
    card: 'summary',
    title: DEFAULT_TITLE,
    description: SITE.description,
    images: ['/image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'Tcsde71UDiifFB0Irb63AC5EwORmflgZwIJru8wmOUg',
  },
  icons: {
    icon: '/image.png',
    shortcut: '/image.png',
    apple: '/image.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b2a5b',
}

/** Organization / local business details for search engines (schema.org). */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: `${SITE.url}/image.png`,
  description: SITE.description,
  telephone: CONTACT.phone.display,
  email: CONTACT.email.display,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'As Safa',
    addressLocality: 'Jeddah',
    postalCode: '23453',
    addressCountry: 'SA',
  },
  areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  knowsAbout: [
    'ISO 9001',
    'ISO 14001',
    'ISO 45001',
    'ISO 22000',
    'Integrated management systems',
    'HSE and process safety',
    'Asset management and equipment reliability',
    'Project management and engineering advisory',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} bg-background`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
