import type { MetadataRoute } from 'next'
import { ARTICLES } from '@/lib/insights'
import { SERVICES } from '@/lib/services'
import { SITE } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
  ]

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const articles: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE.url}/insights/${a.slug}`,
    lastModified: a.date ? new Date(`${a.date}T00:00:00Z`) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...pages, ...services, ...articles]
}
