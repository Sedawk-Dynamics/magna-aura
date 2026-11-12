import type { IconName } from '@/lib/icons'
import type { VisualKind } from '@/lib/visuals'

export const SITE = {
  name: 'Al-Noor Arabia Management Consulting',
  shortName: 'Al-Noor Arabia',
  arabicName: 'النور العربية للاستشارات الإدارية',
  url: 'https://alnoorarabia-consultants.com',
  description:
    'A management and technical consultancy based in Saudi Arabia, delivering ISO & management systems, project & engineering advisory, and asset management & reliability services for sustainable business performance.',
  tagline: 'From Compliance to Performance.',
}

export const CONTACT = {
  phone: { display: '+966 56 142 3145', href: 'tel:+966561423145' },
  whatsapp: { display: '+966 54 849 0871', href: 'https://wa.me/966548490871' },
  email: { display: 'info@alnoorarabia-consultants.com', href: 'mailto:info@alnoorarabia-consultants.com' },
  address: { lines: ['As Safa, Jeddah 23453', 'Kingdom of Saudi Arabia'] },
}

/** Brochure of the formally associated firm. Place the PDF at this path in /public. */
export const ASSOCIATION_BROCHURE_URL = '/documents/al-noor-kuwait-brochure.pdf'

export type NavItem = { label: string; href: string }

export const MAIN_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Insights & Resources', href: '/insights' },
  { label: 'Contact Us', href: '/contact' },
]

export const ASSOCIATION = {
  title: 'Our International Association',
  subtitle: 'Local Presence. International Experience.',
  headline: 'International Expertise. Focus on Saudi Arabia.',
  text: 'Al-Noor Arabia is formally associated with Al-Noor International Consultants, Kuwait, an established management consultancy providing consulting, auditing, training and business excellence services since 2010.',
  stats: [
    { value: '2010', label: 'Established', icon: 'CalendarDays' as IconName },
    { value: '300+', label: 'Customers served globally', icon: 'Users' as IconName },
    { value: '25+', label: 'Years of consulting experience among founding professionals', icon: 'Award' as IconName },
  ],
}

export const INDUSTRIES: { name: string; visual: VisualKind; icon: IconName }[] = [
  { name: 'Oil, Gas & Petrochemicals', visual: 'pipeline', icon: 'Droplet' },
  { name: 'Water, Wastewater & Utilities', visual: 'pipeline', icon: 'Waves' },
  { name: 'Manufacturing & Industrial Operations', visual: 'gears', icon: 'Factory' },
  { name: 'Construction & Infrastructure', visual: 'network', icon: 'Construction' },
  { name: 'Food & Hospitality', visual: 'shield', icon: 'UtensilsCrossed' },
  { name: 'Facilities & Asset Operations', visual: 'network', icon: 'Building2' },
]

export const WHY_US: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Experienced Leadership',
    text: 'More than 25 years of professional experience in management systems, projects and operational assurance.',
    icon: 'Users',
  },
  {
    title: 'Multidisciplinary Expertise',
    text: 'Management, engineering and reliability capabilities brought together for integrated solutions.',
    icon: 'Cog',
  },
  {
    title: 'Specialized Technical Capabilities',
    text: 'Hydraulic engineering, piping, electrical engineering and rotating equipment reliability.',
    icon: 'Globe',
  },
  {
    title: 'Practical, Performance-Focused Solutions',
    text: 'Implementation support, technical excellence and measurable improvement.',
    icon: 'TrendingUp',
  },
]

export type TeamMember = {
  name: string
  role: string
  credentials: string
  summary: string
  image: string
}

export const ABOUT = {
  intro:
    'A management and technical consultancy based in Saudi Arabia, delivering practical, value-driven solutions for sustainable business performance.',
  whoWeAre:
    'Al-Noor Arabia Management Consulting is a consultancy based in Saudi Arabia that provides management, technical and operational advisory services to help organizations improve performance, ensure compliance, manage risk and achieve sustainable growth across projects, operations and corporate functions.',
  vision:
    'To be a trusted consulting partner in Saudi Arabia, known for practical solutions, professional expertise and lasting client value.',
  mission:
    'To help organizations improve performance, ensure compliance and build operational excellence through professional, industry-focused consulting services.',
  values: [
    'Integrity & Professionalism',
    'Client Focus',
    'Excellence in Delivery',
    'Collaboration & Knowledge Sharing',
    'Sustainable Value',
  ],
  expertise: [
    {
      title: 'ISO & Integrated Management Systems',
      text: 'ISO 9001, 14001, 45001, 20121, IMS, audits and certification readiness.',
      visual: 'network',
      href: '/services/iso-integrated-management-systems',
    },
    {
      title: 'Business & Operational Excellence',
      text: 'Process improvement, SOPs, KPIs, performance management and continual improvement.',
      visual: 'gears',
      href: '/services/business-operational-excellence',
    },
    {
      title: 'Project Management & Assurance',
      text: 'PMO, project controls, QA/QC, contractor reviews and project delivery assurance.',
      visual: 'pipeline',
      href: '/services/project-management-engineering-advisory',
    },
    {
      title: 'Audit, Risk, Governance & Compliance',
      text: 'Internal audits, risk assessments, governance reviews, compliance and business continuity.',
      visual: 'chart',
      href: '/services/business-operational-excellence',
    },
    {
      title: 'Food Safety & Quality Management',
      text: 'HACCP, ISO 22000, FSSC 22000, hygiene assessments and supplier audits.',
      visual: 'shield',
      href: '/services/food-safety-quality-management',
    },
    {
      title: 'HSE & Sustainability Advisory',
      text: 'HSE management, process safety, environmental compliance and sustainability support.',
      visual: 'globe',
      href: '/services/hse-environmental-sustainability',
    },
  ] satisfies { title: string; text: string; visual: VisualKind; href: string }[],
  networkIntro: 'A blend of proven leadership and specialized technical expertise.',
  team: [
    {
      name: 'Mohammed Irfan',
      role: 'General Manager & Principal Consultant',
      credentials: 'Mechanical Engineer | PMP® | PMI-RMP® | Lean Six Sigma Black Belt | IAM Certificate in Asset Management',
      summary:
        'A multidisciplinary management and engineering professional with over 25 years of experience in project management, integrated management systems, operational excellence, risk management, project assurance and asset management.',
      image: '/images/team/mohammed-irfan.jpg',
    },
    {
      name: 'Chowdary Mukhtar',
      role: 'Senior Piping Engineering Consultant',
      credentials: '35+ Years of Industry Experience | Piping Engineering & Technical Advisory',
      summary:
        'Specialist in piping engineering, FEED, piping stress analysis, engineering design reviews and brownfield modifications, with approximately 28 years of dedicated piping engineering experience supporting complex industrial projects.',
      image: '/images/team/chowdary-mukhtar.jpg',
    },
    {
      name: 'Murugan',
      role: 'Senior Electrical Engineering & Project Management Consultant',
      credentials: '30+ Years of Industry Experience | Electrical Engineering & Industrial Projects',
      summary:
        'Experienced in electrical engineering, industrial project management, engineering coordination, construction and commissioning, including extensive experience supporting SABIC engineering and project activities.',
      image: '/images/team/murugan.jpg',
    },
    {
      name: 'Razack Javed',
      role: 'Senior QA/QC, Inspection & Management Systems Consultant',
      credentials: '35+ Years of Industry Experience | NDT Level III | API 510 | IMS Lead Auditor',
      summary:
        'Specialist in quality assurance, quality control, technical inspection, project quality management and integrated management systems, with extensive experience in industrial project assurance, inspection management and compliance.',
      image: '/images/team/razack-javed.jpg',
    },
  ] satisfies TeamMember[],
  specialistsTitle: 'Specialized Technical Expertise. Practical Industry Solutions.',
  specialistsIntro:
    'Al-Noor Arabia is supported by a network of experienced technical specialists who provide project-based expertise across infrastructure engineering, equipment reliability, industrial HSE and process safety.',
  specialists: [
    {
      title: 'Wet Infrastructure, Water & Wastewater Engineering',
      text: 'Hydraulic steady-state and transient modelling using WaterGEMS and HAMMER, pumping systems, and pump and pipeline engineering at FEED level. Includes root cause analysis of pumping and treatment-plant failures, asset condition and criticality assessments, MTBF/MTTR analysis, repair-versus-replacement evaluations, remaining useful life estimation and building firefighting mechanical design.',
      icon: 'Droplet' as IconName,
      badges: ['WaterGEMS', 'HAMMER', 'FEED'] as string[],
    },
    {
      title: 'Rotating Equipment & Reliability Engineering',
      text: '20+ years of specialist experience in rotating machinery diagnostics, troubleshooting, vibration analysis, lubrication monitoring and machinery performance improvement. Advanced online and offline condition monitoring, machinery design reviews, Factory Acceptance Test (FAT) witnessing, reliability programmes and technical support for Management of Change (MOC).',
      icon: 'Settings' as IconName,
      badges: ['BHGE System 1', 'Emerson CSI', 'SKF Microlog'] as string[],
    },
    {
      title: 'HSE & Process Safety',
      text: '17+ years of professional experience in oil, gas and petrochemical industries, covering occupational safety, process safety, EHSS assurance, operational risk management, contractor safety and regulatory compliance. Specialist capabilities include process safety leadership, industrial risk assessment, turnaround safety, work permit and LOTO training, and workforce competency development.',
      icon: 'HardHat' as IconName,
      badges: ['CSP – Certified Safety Professional (BCSP, USA)', 'ASP – Associate Safety Professional (BCSP, USA)'] as string[],
    },
  ],
}
