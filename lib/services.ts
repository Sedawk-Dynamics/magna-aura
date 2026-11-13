import type { IconName } from '@/lib/icons'
import type { VisualKind } from '@/lib/visuals'

export type ServiceItem = {
  code: string
  title: string
  icon: IconName
  description?: string
  deliverables: string[]
  visual?: VisualKind
}

export type ServiceGroup = {
  number: string
  title: string
  summary: string
  icon: IconName
  items: ServiceItem[]
}

export type ServiceSection = {
  heading: string
  /** Each entry is shown as one bullet point. */
  paragraphs: string[]
}

export type StandardItem = {
  code: string
  label: string
  icon: IconName
}

export type Service = {
  slug: string
  title: string
  titleLead: string
  titleAccent: string
  tagline: string
  intro: string
  heroVisual: VisualKind
  icon: IconName
  overviewTitle: string
  overviewText: string
  groups: ServiceGroup[]
  /** Long-form credentials / approach copy shown after the service groups. */
  highlights: {
    title: string
    subtitle?: string
    intro: string[]
    sections: ServiceSection[]
    visual: VisualKind
  }
  /** Optional standards grid (used on the ISO page). */
  standards?: StandardItem[]
  standardsNote?: string
  cta: { title: string; text: string }
  relatedInsights: string[]
  /** True when the source pack included a full landing-page design for this service. */
  hasDetailedScope: boolean
}

export const SERVICES: Service[] = [
  {
    slug: 'iso-integrated-management-systems',
    title: 'ISO & Integrated Management Systems',
    titleLead: 'ISO & Integrated',
    titleAccent: 'Management Systems',
    tagline: 'Build robust systems, improve performance and drive operational excellence.',
    intro:
      'Al-Noor Arabia supports organizations with ISO 9001, 14001, 45001, 20121 and Integrated Management Systems (IMS), including audits and certification readiness.',
    heroVisual: 'network',
    icon: 'BadgeCheck',
    overviewTitle: 'Management Systems That Strengthen Performance',
    overviewText:
      'We help organizations establish, integrate and audit management systems aligned with internationally recognized ISO standards, supported by the international experience of Al-Noor International Consultants, Kuwait.',
    groups: [
      {
        number: '01',
        title: 'Assess & Develop',
        summary: 'Assessing current systems and developing an integrated, practical management-system framework.',
        icon: 'FileCog',
        items: [
          {
            code: '01.1',
            title: 'Gap Assessment & Implementation Planning',
            icon: 'SearchCheck',
            deliverables: ['Gap assessment report', 'Implementation roadmap'],
          },
          {
            code: '01.2',
            title: 'Management-System Development',
            icon: 'FileText',
            deliverables: ['Policies and procedures', 'Process documentation'],
          },
          {
            code: '01.3',
            title: 'Integrated Management Systems (IMS)',
            icon: 'Layers',
            deliverables: ['Integrated IMS framework', 'Harmonized procedures'],
          },
        ],
      },
      {
        number: '02',
        title: 'Implement & Verify',
        summary: 'Putting the system into practice, auditing its effectiveness and preparing for certification.',
        icon: 'Cog',
        items: [
          {
            code: '02.1',
            title: 'Implementation, Training & Awareness',
            icon: 'GraduationCap',
            deliverables: ['Implementation support records', 'Training materials'],
          },
          {
            code: '02.2',
            title: 'Internal Audits & Compliance Reviews',
            icon: 'ClipboardCheck',
            deliverables: ['Internal audit report', 'Corrective action plan'],
          },
          {
            code: '02.3',
            title: 'Certification Readiness',
            icon: 'Award',
            deliverables: ['Readiness assessment report', 'Audit preparation plan'],
          },
        ],
      },
      {
        number: '03',
        title: 'Sustain & Improve',
        summary: 'Keeping the system effective through surveillance and continual improvement.',
        icon: 'TrendingUp',
        items: [
          {
            code: '03.1',
            title: 'Surveillance & Continual Improvement',
            icon: 'Target',
            deliverables: ['Performance review report', 'Continual improvement plan'],
          },
        ],
      },
    ],
    highlights: {
      title: 'International Management-System Expertise',
      subtitle: 'Through Our Association with Al-Noor International Consultants, Kuwait',
      intro: [
        'Al-Noor Arabia combines experienced management-system consulting professionals with access to established international expertise through its formal association with Al-Noor International Consultants, Kuwait, which has provided management-system consulting, auditing, training and business excellence services since 2010.',
        'Our approach integrates international standards, practical implementation, risk-based thinking and continual improvement to help organizations establish effective, compliant and performance-focused management systems.',
      ],
      sections: [
        {
          heading: 'International Standards & Integrated Management Systems Expertise',
          paragraphs: [
            'Expertise across ISO 9001, ISO 14001, ISO 45001, ISO 20121 and other ISO frameworks',
            'Development, integration, gap assessments and risk-based planning',
            'Process documentation, compliance evaluations and continual improvement',
            'Integrated Management Systems (IMS) aligned under one governance framework',
          ],
        },
        {
          heading: 'Experienced Management-System Consultants & Auditors',
          paragraphs: [
            'Consultants and auditors across quality, HSE, project assurance and operations',
            'ISO lead auditing and internal audit programme development',
            'Management reviews and nonconformity management',
            'Corrective actions and management-system effectiveness assessments',
          ],
        },
        {
          heading: 'Practical Implementation & Organizational Capability Development',
          paragraphs: [
            'Support beyond documentation: policies, procedures and process controls',
            'Employee awareness, competency development and internal auditor training',
            'Implementation monitoring and knowledge transfer',
            'Focus on practical application and process ownership',
          ],
        },
        {
          heading: 'Certification Readiness & Continual Improvement',
          paragraphs: [
            'Initial gap assessments and implementation planning',
            'Internal audits, management reviews and corrective action verification',
            'Pre-certification readiness assessments',
            'Preparation for independent audits and surveillance cycles',
          ],
        },
      ],
      visual: 'network',
    },
    standards: [
      { code: 'ISO 9001', label: 'Quality Management', icon: 'BadgeCheck' },
      { code: 'ISO 13485', label: 'QMS for Medical Devices', icon: 'Stethoscope' },
      { code: 'ISO 41001', label: 'Facilities Management', icon: 'Building2' },
      { code: 'ISO 50001', label: 'Energy Management', icon: 'Zap' },
      { code: 'ISO 20000', label: 'IT Service Management', icon: 'Server' },
      { code: 'ISO 27001', label: 'Information Security', icon: 'ShieldCheck' },
      { code: 'ISO 22000', label: 'Food Safety Management', icon: 'UtensilsCrossed' },
      { code: 'BRCGS', label: 'Readiness', icon: 'Award' },
      { code: 'ISO 14001', label: 'Environmental Management', icon: 'Leaf' },
      { code: 'ISO 31000', label: 'Risk Management', icon: 'Scale' },
      { code: 'ISO 55001', label: 'Asset Management', icon: 'Settings' },
      { code: 'ISO 46001', label: 'Water Efficiency Management', icon: 'Droplet' },
      { code: 'ISO 42001', label: 'Artificial Intelligence Management', icon: 'Cpu' },
      { code: 'ISO 27701', label: 'Privacy Protection Management', icon: 'Fingerprint' },
      { code: 'HALAL', label: 'Readiness', icon: 'BadgeCheck' },
      { code: 'FSSC 22000', label: 'Readiness', icon: 'Award' },
      { code: 'ISO 45001', label: 'Health & Safety Management', icon: 'HardHat' },
      { code: 'ISO 26000', label: 'Corporate Social Responsibility', icon: 'Handshake' },
      { code: 'ISO 17020', label: 'Inspection Bodies Accreditation', icon: 'SearchCheck' },
      { code: 'ISO 17025', label: 'Testing & Calibration Laboratories', icon: 'FlaskConical' },
      { code: 'HACCP', label: 'Readiness', icon: 'ListChecks' },
      { code: 'GLOBALG.A.P.', label: 'Readiness', icon: 'Sprout' },
      { code: 'ISO 27031', label: 'ICT Readiness for Business Continuity', icon: 'Server' },
      { code: 'ISO 22301', label: 'Business Continuity Management', icon: 'ShieldAlert' },
    ],
    standardsNote: 'We also support other applicable management-system and sector-specific standards based on client requirements.',
    cta: {
      title: 'Discuss Your Management System Requirements',
      text: 'Whether you are implementing a new ISO standard, integrating existing systems or preparing for certification, our consultants can help define an appropriate approach.',
    },
    relatedInsights: ['preparing-for-iso-certification', 'iso-45001-industrial-operations'],
    hasDetailedScope: true,
  },
  {
    slug: 'business-operational-excellence',
    title: 'Business & Operational Excellence',
    titleLead: 'Business &',
    titleAccent: 'Operational Excellence',
    tagline: 'Improving processes, performance and governance.',
    intro:
      'Al-Noor Arabia helps organizations strengthen process performance through process improvement, SOPs, KPIs, performance management and continual improvement, supported by audit, risk, governance and compliance services.',
    heroVisual: 'gears',
    icon: 'TrendingUp',
    overviewTitle: 'From Processes to Performance',
    overviewText:
      'We support organizations in connecting operational processes, measurable objectives and continual improvement, while strengthening internal audit, risk, governance and compliance practices.',
    groups: [
      {
        number: '01',
        title: 'Assess & Analyze',
        summary: 'Understanding current process performance and the gaps that hold it back.',
        icon: 'SearchCheck',
        items: [
          {
            code: '01.1',
            title: 'Business Process Assessment & Gap Analysis',
            icon: 'Workflow',
            deliverables: ['Business process gap assessment report', 'Improvement recommendations & action plan'],
          },
          {
            code: '01.2',
            title: 'Organizational & Operational Performance Assessment',
            icon: 'ChartColumnIncreasing',
            deliverables: ['Operational performance assessment report', 'Performance improvement action plan'],
          },
        ],
      },
      {
        number: '02',
        title: 'Design & Improve',
        summary: 'Redesigning processes and standardizing how work gets done.',
        icon: 'Settings',
        items: [
          {
            code: '02.1',
            title: 'Business Process Re-engineering',
            icon: 'Workflow',
            deliverables: ['Redesigned process maps & workflows', 'Process improvement implementation plan'],
          },
          {
            code: '02.2',
            title: 'Lean Six Sigma & Continuous Improvement',
            icon: 'Target',
            deliverables: ['Lean Six Sigma improvement roadmap', 'Process improvement & root cause analysis report'],
          },
          {
            code: '02.3',
            title: 'SOP Development & Process Standardization',
            icon: 'FileText',
            deliverables: ['Standard operating procedures (SOPs)', 'Process maps & supporting templates'],
          },
        ],
      },
      {
        number: '03',
        title: 'Measure & Sustain',
        summary: 'Tracking performance and embedding improvements into day-to-day operations.',
        icon: 'ChartColumnIncreasing',
        items: [
          {
            code: '03.1',
            title: 'KPI Development & Performance Management',
            icon: 'Gauge',
            deliverables: ['KPI framework & performance scorecards', 'Performance monitoring dashboard'],
          },
          {
            code: '03.2',
            title: 'Change Management & Improvement Implementation',
            icon: 'Users',
            deliverables: ['Change management & implementation plan', 'Progress monitoring & improvement tracking report'],
          },
        ],
      },
    ],
    highlights: {
      title: 'Practical, Performance-Focused Solutions',
      intro: [
        'Al-Noor Arabia combines over 25 years of senior-level professional experience, internationally recognized professional qualifications and access to established international consulting expertise through its formal association with Al-Noor International Consultants, Kuwait, operating since 2010.',
        'Our approach integrates business process improvement, management systems, operational excellence and performance management to deliver practical, sustainable and measurable organizational improvements.',
      ],
      sections: [
        {
          heading: 'Experienced & Professionally Qualified Leadership',
          paragraphs: [
            'Over 25 years across management systems, projects, quality and operational excellence',
            'PMP®, PMI-RMP® and Lean Six Sigma Black Belt credentials',
          ],
        },
        {
          heading: 'International & Multidisciplinary Consulting Expertise',
          paragraphs: [
            'Established methodologies through our association with Al-Noor International Consultants, Kuwait',
            'Business process management, governance, operational risk and project assurance expertise',
          ],
        },
        {
          heading: 'Practical Implementation & Capability Development',
          paragraphs: [
            'Business process mapping and SOP development',
            'KPI framework implementation and management-system integration',
            'Stakeholder engagement, employee awareness and knowledge transfer',
          ],
        },
        {
          heading: 'Measurable Performance & Continual Improvement',
          paragraphs: [
            'Lean Six Sigma, root cause analysis and process optimization',
            'KPIs, performance dashboards and corrective action plans',
            'Lower process variation and sustained gains in efficiency, quality and service',
          ],
        },
      ],
      visual: 'chart',
    },
    cta: {
      title: 'Discuss Your Operational Excellence Requirements',
      text: 'Whether you need process improvement, a KPI framework, an internal audit or a governance review, our consultants can help define an appropriate scope.',
    },
    relatedInsights: ['building-kpi-framework'],
    hasDetailedScope: false,
  },
  {
    slug: 'project-management-engineering-advisory',
    title: 'Project Management & Engineering Advisory',
    titleLead: 'Project Management &',
    titleAccent: 'Engineering Advisory',
    tagline: 'Strengthening Project Delivery. Enhancing Engineering Performance.',
    intro:
      'Al-Noor Arabia provides project management, delivery assurance and specialized engineering advisory services to improve project execution, technical performance and successful project outcomes.',
    heroVisual: 'pipeline',
    icon: 'Network',
    overviewTitle: 'Integrated Project & Engineering Expertise',
    overviewText:
      'Supporting effective project governance, delivery assurance and specialized engineering solutions across infrastructure, construction and industrial projects.',
    groups: [
      {
        number: '01',
        title: 'Specialized Engineering Advisory',
        summary: 'Providing focused technical expertise for infrastructure, industrial and building engineering systems.',
        icon: 'Award',
        items: [
          {
            code: '01.1',
            title: 'Wet Infrastructure & Hydraulic Engineering',
            icon: 'Droplet',
            visual: 'pipeline',
            description:
              'WaterGEMS/HAMMER modelling, steady-state and transient hydraulic analysis, and FEED-level water and wastewater pumping and pipeline engineering, including sizing, routing and options analysis.',
            deliverables: ['Hydraulic modelling & analysis report', 'Water infrastructure FEED assessment'],
          },
          {
            code: '01.2',
            title: 'Piping & Electrical Engineering',
            icon: 'Network',
            visual: 'gears',
            description:
              'Piping engineering reviews, piping stress assessments and electrical engineering technical advisory.',
            deliverables: ['Piping & electrical technical assessment', 'Engineering review & recommendations'],
          },
          {
            code: '01.3',
            title: 'Building Firefighting Mechanical Engineering',
            icon: 'Flame',
            visual: 'network',
            description:
              'Building firefighting mechanical-system design advisory, engineering assessments and technical design reviews.',
            deliverables: ['Firefighting mechanical engineering assessment', 'Design review & recommendations'],
          },
          {
            code: '01.4',
            title: 'Industrial Management of Change (MOC)',
            icon: 'FileCog',
            visual: 'pipeline',
            description:
              'Engineering modification assessments, technical risk evaluation and MOC implementation support.',
            deliverables: ['MOC technical & risk assessment', 'MOC procedure & action plan'],
          },
        ],
      },
      {
        number: '02',
        title: 'Project Management & Delivery Assurance',
        summary: 'Strengthening project governance, execution controls, quality and successful handover.',
        icon: 'Users',
        items: [
          {
            code: '02.1',
            title: 'PMO & Governance',
            icon: 'Network',
            description: 'Establishing PMO frameworks and governance processes for effective project delivery.',
            deliverables: ['PMO framework & governance procedures', 'Project management processes & templates'],
          },
          {
            code: '02.2',
            title: 'Project Controls',
            icon: 'ChartColumnIncreasing',
            description: 'Planning, scheduling, cost control and performance monitoring to keep projects on track.',
            deliverables: ['Project controls framework', 'Project performance dashboard'],
          },
          {
            code: '02.3',
            title: 'Project Risk Management',
            icon: 'ShieldCheck',
            description: 'Identifying, assessing and mitigating project risks to improve delivery assurance.',
            deliverables: ['Project risk register', 'Risk mitigation plan'],
          },
          {
            code: '02.4',
            title: 'Project QA/QC',
            icon: 'ClipboardList',
            description: 'Implementing quality assurance and quality control processes during project execution.',
            deliverables: ['Project quality plan', 'Inspection & audit reports'],
          },
          {
            code: '02.5',
            title: 'Contractor Performance, Completion & Handover',
            icon: 'HardHat',
            description: 'Assessing contractor performance and supporting project completion and handover.',
            deliverables: ['Contractor performance assessment', 'Project completion & handover report'],
          },
        ],
      },
    ],
    highlights: {
      title: 'Experienced Professionals. Specialized Engineering Expertise.',
      intro: [
        'Al-Noor Arabia brings together professionally qualified project management leadership and experienced engineering specialists to support infrastructure, construction, utilities and industrial projects.',
        'Our multidisciplinary consulting capabilities combine project governance, quality assurance, risk management and specialized engineering expertise to strengthen project delivery, technical compliance and operational performance.',
      ],
      sections: [
        {
          heading: 'Certified Project Management & Risk Leadership',
          paragraphs: [
            'PMP® and PMI-RMP® certified project management leadership',
            'Project governance, controls, risk management and delivery assurance',
          ],
        },
        {
          heading: 'Project Quality, Inspection & Assurance Specialists',
          paragraphs: [
            'QA/QC and inspection: contractor performance, audits and nonconformity management',
            'Project handover assurance',
            'Credentials: NDT Level III, API 510 and IMS Lead Auditor',
          ],
        },
        {
          heading: 'Multidisciplinary Engineering & Technical Advisory',
          paragraphs: [
            'Piping, electrical, mechanical and wet infrastructure engineering',
            'FEED reviews, hydraulic modelling and technical assessments',
            'Engineering coordination and industrial project advisory',
            'Specialist network with approximately 30–35 years of combined experience',
          ],
        },
        {
          heading: 'Practical Project Solutions & Delivery Improvement',
          paragraphs: [
            'Root cause analysis and risk-based evaluations',
            'Contractor performance reviews and technical problem-solving',
            'Actionable improvement recommendations and project risk reduction',
          ],
        },
      ],
      visual: 'network',
    },
    cta: {
      title: 'Discuss Your Project & Engineering Requirements',
      text: 'Whether you require project management support, delivery assurance or specialized engineering advisory, our team can help define an appropriate consultancy scope.',
    },
    relatedInsights: ['project-delivery-governance'],
    hasDetailedScope: true,
  },
  {
    slug: 'asset-management-equipment-reliability',
    title: 'Asset Management & Equipment Reliability',
    titleLead: 'Asset Management &',
    titleAccent: 'Equipment Reliability',
    tagline: 'Optimizing Asset Performance. Improving Equipment Reliability.',
    intro:
      'Al-Noor Arabia provides asset management, maintenance optimization and rotating-equipment reliability advisory services to improve equipment availability, reduce recurring failures and strengthen asset lifecycle performance.',
    heroVisual: 'gears',
    icon: 'Settings',
    overviewTitle: 'Improving Asset Performance Throughout the Lifecycle',
    overviewText:
      'We help organizations assess asset condition, optimize maintenance strategies and address equipment reliability challenges through risk-based assessments, technical diagnostics and practical improvement solutions.',
    groups: [
      {
        number: '01',
        title: 'Asset Management & Maintenance Strategy',
        summary: 'Strengthening asset performance, maintenance effectiveness and lifecycle decisions.',
        icon: 'Settings',
        items: [
          {
            code: '01.1',
            title: 'Asset Condition, Criticality & Performance Assessment',
            icon: 'SearchCheck',
            deliverables: ['Asset condition & criticality report', 'Reliability performance & replacement prioritization plan'],
          },
          {
            code: '01.2',
            title: 'Reliability-Centered Maintenance (RCM)',
            icon: 'ClipboardList',
            deliverables: ['RCM assessment report', 'Maintenance strategy and implementation plan'],
          },
          {
            code: '01.3',
            title: 'Preventive & Predictive Maintenance Optimization',
            icon: 'ChartColumnIncreasing',
            deliverables: ['Preventive & predictive maintenance programme', 'Maintenance optimization & evaluation report'],
          },
        ],
      },
      {
        number: '02',
        title: 'Equipment & Infrastructure Asset Reliability',
        summary:
          'Specialized reliability advisory for industrial rotating equipment, water and wastewater pumping systems and treatment-plant machinery.',
        icon: 'Wrench',
        items: [
          {
            code: '02.1',
            title: 'Condition Monitoring & Machinery Diagnostics',
            icon: 'Activity',
            visual: 'chart',
            description:
              'Offline and online vibration monitoring, machinery condition assessment, fault diagnosis and corrective maintenance recommendations.',
            deliverables: ['Vibration monitoring & diagnostic report', 'Corrective maintenance recommendations'],
          },
          {
            code: '02.2',
            title: 'Lubrication Management & Oil Analysis',
            icon: 'Droplet',
            visual: 'gears',
            description:
              'Lubrication programme development, lubricant condition evaluation, oil analysis support and lubrication improvement recommendations.',
            deliverables: ['Lubrication management programme', 'Oil analysis & lubrication recommendations'],
          },
          {
            code: '02.3',
            title: 'Root Cause Analysis & Reliability Improvement',
            icon: 'Cog',
            visual: 'chart',
            description:
              'Investigation of chronic equipment failures, bad-actor identification, equipment risk assessment and reliability-related MOC recommendations.',
            deliverables: ['Equipment failure RCA report', 'Reliability improvement & corrective action plan'],
          },
          {
            code: '02.4',
            title: 'Rotating Equipment Integrity & Reliability Audits',
            icon: 'ShieldCheck',
            visual: 'pipeline',
            description:
              'Integrity and reliability assessments for pumps, motors, compressors, fans and other rotating equipment, including water and wastewater pumping systems and treatment-plant equipment.',
            deliverables: ['Integrity & reliability assessment', 'Reliability audit & action plan'],
          },
          {
            code: '02.5',
            title: 'Equipment Procurement & FAT Advisory',
            icon: 'FileText',
            visual: 'pipeline',
            description:
              'Technical support for equipment specification reviews, vendor evaluation and Factory Acceptance Testing (FAT) for rotating equipment and associated systems.',
            deliverables: ['Procurement technical review report', 'FAT inspection report'],
          },
        ],
      },
    ],
    highlights: {
      title: 'Experienced Professionals. Certified Asset Management Expertise.',
      intro: [
        'Our consulting capabilities combine internationally recognized asset management qualifications with extensive practical experience in asset lifecycle management, maintenance, reliability engineering and rotating-equipment performance across industrial facilities, utilities and infrastructure operations.',
      ],
      sections: [
        {
          heading: 'IAM-Qualified Asset Management Professional',
          paragraphs: [
            'Principal Consultant holds the IAM Certificate in Asset Management, awarded through examination',
            'Supports lifecycle planning and asset performance improvement',
            'Aligned with ISO 55001',
          ],
        },
        {
          heading: 'Rotating Equipment & Condition Monitoring Specialists',
          paragraphs: [
            '20+ years in rotating machinery diagnostics and vibration analysis',
            'Lubrication monitoring and equipment troubleshooting',
            'Tools: BHGE System 1, Emerson CSI and SKF Microlog',
          ],
        },
        {
          heading: 'Maintenance & Reliability Engineering Specialists',
          paragraphs: [
            'Maintenance strategy and preventive and predictive maintenance',
            'Reliability-centred maintenance (RCM) and equipment criticality assessment',
            'Higher asset availability and lifecycle value',
          ],
        },
        {
          heading: 'Root Cause Analysis & Asset Performance Specialists',
          paragraphs: [
            'Equipment failure investigations and root cause analysis (RCA)',
            'Repair-versus-replacement evaluations',
            'Asset condition assessments and remaining useful life estimation',
          ],
        },
      ],
      visual: 'pipeline',
    },
    cta: {
      title: 'Discuss Your Asset Reliability Requirements',
      text: 'Whether you need an asset condition assessment, maintenance strategy review, rotating-equipment diagnostics or support in resolving recurring equipment failures, our team can help define an appropriate technical consultancy scope.',
    },
    relatedInsights: ['equipment-reliability-rcm-rca'],
    hasDetailedScope: true,
  },
  {
    slug: 'food-safety-quality-management',
    title: 'Food Safety & Quality Management',
    titleLead: 'Food Safety &',
    titleAccent: 'Quality Management',
    tagline: 'Strengthening Food Safety. Building Consumer Confidence.',
    intro:
      'Al-Noor Arabia provides food safety and quality management consulting, implementation, auditing and training services, supported by the international expertise of Al-Noor International Consultants, Kuwait. Our services help organizations ensure safe food production, meet regulatory requirements and achieve internationally recognized food safety certifications.',
    heroVisual: 'shield',
    icon: 'ShieldCheck',
    overviewTitle: 'Comprehensive Food Safety & Quality Solutions',
    overviewText:
      'We support food manufacturers, processors, caterers, distributors and retailers in developing effective food safety management systems, strengthening operational controls and improving compliance across the food supply chain.',
    groups: [
      {
        number: '01',
        title: 'Food Safety Standards & Certification Readiness',
        summary:
          'Supporting organizations in implementing internationally recognized food safety standards and preparing for certification.',
        icon: 'ShieldCheck',
        items: [
          {
            code: '01.1',
            title: 'ISO 22000 Food Safety Management Systems',
            icon: 'UtensilsCrossed',
            deliverables: ['FSMS documentation & implementation plan', 'Internal audit & certification-readiness report'],
          },
          {
            code: '01.2',
            title: 'BRCGS Certification Readiness',
            icon: 'BadgeCheck',
            deliverables: ['BRCGS gap assessment report', 'Implementation & audit-readiness plan'],
          },
          {
            code: '01.3',
            title: 'FSSC 22000 Certification Readiness',
            icon: 'Award',
            deliverables: ['FSSC 22000 gap assessment report', 'FSMS implementation & readiness report'],
          },
          {
            code: '01.4',
            title: 'HACCP – Hazard Analysis & Critical Control Points',
            icon: 'ListChecks',
            deliverables: ['HACCP study & control plan', 'HACCP implementation & verification report'],
          },
          {
            code: '01.5',
            title: 'Halal Certification Readiness',
            icon: 'BadgeCheck',
            deliverables: ['Halal compliance gap assessment', 'Halal assurance & certification-readiness documentation'],
          },
          {
            code: '01.6',
            title: 'GLOBALG.A.P. Certification Readiness',
            icon: 'Sprout',
            deliverables: ['GLOBALG.A.P. compliance assessment', 'Implementation & audit-readiness plan'],
          },
        ],
      },
      {
        number: '02',
        title: 'Food Safety Assurance, Auditing & Training',
        summary: 'Strengthening food safety practices, verifying compliance and developing organizational competence.',
        icon: 'Users',
        items: [
          {
            code: '02.1',
            title: 'Food Safety Hazard Assessment & Risk Control',
            icon: 'SearchCheck',
            deliverables: ['Food safety hazard assessment report', 'Risk control & preventive action plan'],
          },
          {
            code: '02.2',
            title: 'Food Safety Internal & Supplier Audits',
            icon: 'ClipboardCheck',
            deliverables: ['Internal/supplier audit report', 'Corrective action follow-up report'],
          },
          {
            code: '02.3',
            title: 'Food Safety Training & Awareness',
            icon: 'GraduationCap',
            deliverables: ['Customized training programmes', 'Training materials & competency assessment'],
          },
        ],
      },
    ],
    highlights: {
      title: 'International Food Safety Expertise',
      subtitle: 'Through Our Association with Al-Noor International Consultants, Kuwait',
      intro: [
        'Established in 2010, Al-Noor International Consultants, Kuwait, provides management-system consulting, auditing and training services, including food safety and quality management systems such as ISO 22000, FSSC 22000, BRCGS, HACCP, Halal and GLOBALG.A.P.',
        'Through this formal association, Al-Noor Arabia draws upon established international consulting knowledge and methodologies to support food safety compliance, management-system implementation, certification readiness and continual improvement for organizations in Saudi Arabia.',
      ],
      sections: [
        {
          heading: 'International Food Safety Standards Expertise',
          paragraphs: [
            'ISO 22000, FSSC 22000, BRCGS, HACCP, Halal and GLOBALG.A.P. frameworks',
            'Gap assessments, hazard analysis and prerequisite programmes (PRPs)',
            'Food safety management-system development, internal audits and readiness support',
          ],
        },
        {
          heading: 'Experienced Food Safety Consultants & Auditors',
          paragraphs: [
            'Support for manufacturing, processing, catering, hospitality and distribution',
            'Food safety risk assessment, hygiene and sanitation controls',
            'Supplier assurance and documentation reviews',
          ],
        },
        {
          heading: 'Practical Implementation & Certification Readiness',
          paragraphs: [
            'Food safety policies, HACCP plans and monitoring systems',
            'Traceability arrangements and corrective action processes',
            'Preparation for independent certification or customer audits',
          ],
        },
        {
          heading: 'Food Safety Training & Capacity Development',
          paragraphs: [
            'Training on food hygiene, HACCP principles and food safety hazards',
            'Internal auditing and food safety management systems',
            'Stronger food safety culture and workforce competency',
          ],
        },
      ],
      visual: 'shield',
    },
    cta: {
      title: 'Discuss Your Food Safety Requirements',
      text: 'Whether you require ISO 22000, BRCGS, FSSC 22000, HACCP, Halal or GLOBALG.A.P. certification-readiness support, our consultants can help assess your requirements and develop an appropriate implementation approach.',
    },
    relatedInsights: ['iso-22000-fssc-brcgs'],
    hasDetailedScope: true,
  },
  {
    slug: 'hse-environmental-sustainability',
    title: 'HSE & Environmental Sustainability',
    titleLead: 'HSE & Environmental',
    titleAccent: 'Sustainability',
    tagline: 'Protecting People. Strengthening Compliance. Advancing Sustainability.',
    intro:
      'Al-Noor Arabia provides Health, Safety & Environment (HSE) and environmental sustainability consulting services to help organizations manage operational risks, improve workplace safety, ensure environmental compliance and adopt sustainable practices.',
    heroVisual: 'shield',
    icon: 'Leaf',
    overviewTitle: 'Building Safer, More Sustainable Operations',
    overviewText:
      'We support organizations in identifying HSE risks, assessing compliance, strengthening operational controls and developing practical environmental and sustainability initiatives aligned with applicable requirements and business objectives.',
    groups: [
      {
        number: '01',
        title: 'Health, Safety & Operational Risk',
        summary: 'Strengthening workplace safety, managing operational risks and improving HSE preparedness.',
        icon: 'HardHat',
        items: [
          {
            code: '01.1',
            title: 'HSE Risk Assessment & Hazard Identification',
            icon: 'ShieldAlert',
            deliverables: ['Hazard Identification & Risk Assessment (HIRA) Report', 'Risk Mitigation & Control Action Plan'],
          },
          {
            code: '01.2',
            title: 'HSE Compliance Audits & Site Inspections',
            icon: 'SearchCheck',
            deliverables: ['HSE Compliance Audit & Inspection Report', 'Corrective Action & Compliance Improvement Plan'],
          },
          {
            code: '01.3',
            title: 'HSE Policies, Procedures & Operational Controls',
            icon: 'FileText',
            deliverables: ['HSE Policies & Operational Procedures', 'HSE Implementation & Control Framework'],
          },
          {
            code: '01.4',
            title: 'Emergency Preparedness & HSE Training',
            icon: 'Siren',
            deliverables: ['Emergency Preparedness & Response Plan', 'HSE Training & Emergency Drill Programme'],
          },
        ],
      },
      {
        number: '02',
        title: 'Environmental Management & Sustainability',
        summary: 'Improving environmental compliance, resource efficiency and sustainable operational practices.',
        icon: 'Leaf',
        items: [
          {
            code: '02.1',
            title: 'Environmental Compliance & Risk Assessment',
            icon: 'Sprout',
            deliverables: ['Environmental Compliance Assessment', 'Environmental Risk Mitigation Plan'],
          },
          {
            code: '02.2',
            title: 'Waste Management & Resource Efficiency',
            icon: 'Recycle',
            deliverables: ['Waste Management Assessment', 'Resource Efficiency Improvement Plan'],
          },
          {
            code: '02.3',
            title: 'Sustainability Strategy & Improvement Programmes',
            icon: 'Leaf',
            deliverables: ['Sustainability Gap Assessment & Roadmap', 'Sustainability Improvement Action Plan'],
          },
        ],
      },
    ],
    highlights: {
      title: 'Practical Expertise. Sustainable Solutions.',
      intro: [
        'Al-Noor Arabia combines internationally certified HSE professionals with extensive experience in occupational health and safety, process safety, environmental management, management systems and operational risk management. Our consulting approach emphasizes regulatory compliance, practical implementation, risk reduction and continual improvement across industrial facilities, projects and business operations.',
      ],
      sections: [
        {
          heading: 'Certified HSE & Process Safety Professionals',
          paragraphs: [
            'CSP and ASP credentials from the Board of Certified Safety Professionals (BCSP), USA',
            '17+ years in the oil, gas and petrochemical industries',
            'Occupational safety, process safety, EHSS assurance and contractor safety',
          ],
        },
        {
          heading: 'Practical HSE Implementation & Training',
          paragraphs: [
            'HSE management systems, policies, procedures and risk assessments',
            'Emergency preparedness and operational safety controls',
            'HSE induction, permit-to-work and lockout/tagout (LOTO) training support',
          ],
        },
        {
          heading: 'Regulatory Compliance & Risk Management',
          paragraphs: [
            'HSE compliance assessments and compliance gap analysis',
            'Hazard identification and operational risk evaluations',
            'Saudi Arabian regulatory requirements, ISO 45001 and ISO 14001',
          ],
        },
        {
          heading: 'Environmental Management & Sustainable Operations',
          paragraphs: [
            'Environmental management systems and environmental aspects and impacts assessments',
            'Waste management, resource efficiency and pollution prevention',
            'Measurable sustainability improvements',
          ],
        },
      ],
      visual: 'globe',
    },
    cta: {
      title: 'Discuss Your HSE & Sustainability Requirements',
      text: 'Whether you need an HSE compliance assessment, environmental improvement programme or sustainability advisory support, our consultants can help.',
    },
    relatedInsights: ['hse-risk-assessments', 'iso-45001-industrial-operations'],
    hasDetailedScope: true,
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}

/** The three service pillars shown on the homepage, with the sub-links listed in the homepage design. */
export const PILLARS: {
  title: string
  text: string
  visual: VisualKind
  icon: IconName
  links: { label: string; href: string; icon: IconName }[]
}[] = [
  {
    title: 'Management Systems & Business Excellence',
    text: 'Build robust systems, improve performance and drive operational excellence.',
    visual: 'network',
    icon: 'Users',
    links: [
      { label: 'ISO & Integrated Management Systems', href: '/services/iso-integrated-management-systems', icon: 'BadgeCheck' },
      { label: 'Business & Operational Excellence', href: '/services/business-operational-excellence', icon: 'TrendingUp' },
      { label: 'Food Safety & Quality Management', href: '/services/food-safety-quality-management', icon: 'UtensilsCrossed' },
      { label: 'HSE & Environmental Sustainability', href: '/services/hse-environmental-sustainability', icon: 'Leaf' },
    ],
  },
  {
    title: 'Project Management & Engineering Advisory',
    text: 'Deliver projects with assurance, quality and technical expertise.',
    visual: 'pipeline',
    icon: 'Construction',
    links: [
      { label: 'Project Management & Project Controls', href: '/services/project-management-engineering-advisory', icon: 'ChartColumnIncreasing' },
      { label: 'Project Quality Assurance', href: '/services/project-management-engineering-advisory', icon: 'ClipboardCheck' },
      { label: 'Wet Infrastructure & Hydraulic Engineering', href: '/services/project-management-engineering-advisory', icon: 'Droplet' },
      { label: 'Piping & Electrical Engineering Advisory', href: '/services/project-management-engineering-advisory', icon: 'Network' },
      { label: 'Industrial Management of Change', href: '/services/project-management-engineering-advisory', icon: 'FileCog' },
    ],
  },
  {
    title: 'Asset Management & Equipment Reliability',
    text: 'Optimize asset performance, improve reliability and extend lifecycle value.',
    visual: 'gears',
    icon: 'ChartColumnIncreasing',
    links: [
      { label: 'Physical Asset Management & ISO 55001', href: '/services/asset-management-equipment-reliability', icon: 'Building2' },
      { label: 'Asset Condition & Criticality Assessments', href: '/services/asset-management-equipment-reliability', icon: 'SearchCheck' },
      { label: 'Rotating Equipment Reliability', href: '/services/asset-management-equipment-reliability', icon: 'Settings' },
      { label: 'Maintenance Strategy Optimization', href: '/services/asset-management-equipment-reliability', icon: 'Wrench' },
      { label: 'Pumping-System Reliability & Performance', href: '/services/asset-management-equipment-reliability', icon: 'Gauge' },
    ],
  },
]
