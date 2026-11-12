import type { IconName } from '@/lib/icons'
import type { VisualKind } from '@/lib/visuals'

export type Topic = {
  id: string
  label: string
  shortLabel: string
  icon: IconName
  serviceSlug: string
}

export const TOPICS: Topic[] = [
  { id: 'iso', label: 'ISO & Integrated Management Systems', shortLabel: 'ISO & IMS', icon: 'FileCog', serviceSlug: 'iso-integrated-management-systems' },
  { id: 'opex', label: 'Business & Operational Excellence', shortLabel: 'Operational Excellence', icon: 'Settings', serviceSlug: 'business-operational-excellence' },
  { id: 'project', label: 'Project Management & Engineering Advisory', shortLabel: 'Project Management', icon: 'HardHat', serviceSlug: 'project-management-engineering-advisory' },
  { id: 'asset', label: 'Asset Management & Equipment Reliability', shortLabel: 'Asset Management', icon: 'Cog', serviceSlug: 'asset-management-equipment-reliability' },
  { id: 'food', label: 'Food Safety & Quality Management', shortLabel: 'Food Safety & Quality', icon: 'UtensilsCrossed', serviceSlug: 'food-safety-quality-management' },
  { id: 'hse', label: 'HSE & Environmental Sustainability', shortLabel: 'HSE & Sustainability', icon: 'Leaf', serviceSlug: 'hse-environmental-sustainability' },
]

export type Article = {
  slug: string
  title: string
  excerpt: string
  topic: Topic['id']
  date?: string
  readMinutes?: number
  visual: VisualKind
  featured?: boolean
}

export const ARTICLES: Article[] = [
  {
    slug: 'preparing-for-iso-certification',
    title: 'Preparing Your Organization for ISO Certification: Key Steps and Common Gaps',
    excerpt: 'A practical guide to gap assessments, documentation, implementation and certification readiness.',
    topic: 'iso',
    date: '2026-10-15',
    readMinutes: 6,
    visual: 'network',
    featured: true,
  },
  {
    slug: 'hse-risk-assessments',
    title: 'Conducting Effective HSE Risk Assessments and Site Inspections',
    excerpt: 'A practical approach to hazard identification, compliance assessment and corrective action management.',
    topic: 'hse',
    date: '2026-09-28',
    readMinutes: 5,
    visual: 'globe',
    featured: true,
  },
  {
    slug: 'iso-22000-fssc-brcgs',
    title: 'ISO 22000, FSSC 22000 and BRCGS: Understanding the Differences',
    excerpt: 'A comparison to help food-sector organizations identify relevant food safety requirements.',
    topic: 'food',
    date: '2026-09-10',
    readMinutes: 5,
    visual: 'shield',
    featured: true,
  },
  {
    slug: 'building-kpi-framework',
    title: 'From Processes to Performance: Building an Effective KPI Framework',
    excerpt: 'How organizations can connect operational processes, measurable objectives and continual improvement.',
    topic: 'opex',
    date: '2026-09-05',
    readMinutes: 5,
    visual: 'gears',
  },
  {
    slug: 'project-delivery-governance',
    title: 'Strengthening Project Delivery Through Governance and Assurance',
    excerpt: 'The role of project controls, contractor performance monitoring and quality assurance in successful delivery.',
    topic: 'project',
    date: '2026-08-22',
    readMinutes: 5,
    visual: 'pipeline',
  },
  {
    slug: 'equipment-reliability-rcm-rca',
    title: 'Improving Equipment Reliability Through RCM and Root Cause Analysis',
    excerpt: 'Understanding equipment criticality, recurring failures and maintenance optimization.',
    topic: 'asset',
    date: '2026-08-12',
    readMinutes: 5,
    visual: 'chart',
  },
  {
    slug: 'iso-45001-industrial-operations',
    title: 'Key Considerations for ISO 45001 Implementation in Industrial Operations',
    excerpt: 'Practical steps to strengthen occupational health and safety management systems in industrial environments.',
    topic: 'iso',
    visual: 'network',
  },
]

export const RESOURCES = [
  { title: 'ISO Certification Readiness Checklist', topic: 'iso' },
  { title: 'Internal Audit Preparation Checklist', topic: 'opex' },
  { title: 'Project Quality Assurance Checklist', topic: 'project' },
  { title: 'Equipment Reliability Assessment Checklist', topic: 'asset' },
  { title: 'HSE Site Inspection Checklist', topic: 'hse' },
] as const

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getTopic(id: string) {
  return TOPICS.find((t) => t.id === id)
}

export function formatDate(iso?: string) {
  if (!iso) return undefined
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
