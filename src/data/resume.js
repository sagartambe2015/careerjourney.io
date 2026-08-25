export const profile = {
  name: 'Sagar Tambe',
  title: 'Software Architect / Data Engineer',
  location: 'Pune, India',
  phones: ['9664690404', '9137617465'],
  email: 'tambe.sagar@gmail.com',
  website: {
    label: 'sagarsudhirtambe.com',
    href: 'https://www.sagarsudhirtambe.com',
  },
  linkedin: {
    label: 'linkedin.com/in/sagar-tambe-41007a37',
    href: 'https://linkedin.com/in/sagar-tambe-41007a37',
  },
}

export const summary =
  'Software Architect with 10+ years of experience in system design, architecture definition, and large-scale distributed systems, primarily in banking, payments, and financial platforms. Specialized in designing high-availability, low-latency, and fault-tolerant systems using Java, microservices, event streaming, and cloud-native platforms. Total career span of 15+ years in Java Software Application Development with UI technology and architecture.'

export const expertise = [
  {
    title: 'System Design',
    detail:
      'High-Level Design (HLD), Low-Level Design (LLD), Microservices Architecture, Event-Driven & Streaming Architecture, Domain-Driven Design (DDD), and CQRS.',
  },
  {
    title: 'Scalability & Reliability',
    detail:
      'Low-latency trade processing systems, caching strategies (Redis, GemFire), Disaster Recovery, and High Availability.',
  },
  {
    title: 'Observability',
    detail:
      'Metrics, logging, and tracing design using OpenTelemetry, Grafana, and Kibana.',
  },
]

export const skills = [
  { category: 'Languages', items: ['Java (8, 11, 17)', 'Kotlin', 'Python', 'SQL'] },
  { category: 'Frameworks', items: ['Spring Boot', 'Spring Integration', 'Hibernate', 'Struts'] },
  {
    category: 'Streaming & Messaging',
    items: ['Apache Kafka', 'Apache Flink', 'IBM MQ', 'TIBCO', 'JMS'],
  },
  { category: 'Databases', items: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB'] },
  {
    category: 'Cloud & Platforms',
    items: ['AWS (EC2, S3, RDS, EKS)', 'OpenShift', 'Kubernetes', 'Docker'],
  },
  {
    category: 'UI Technologies',
    items: ['Angular', 'AngularJS', 'Node.js', 'D3.js', 'Bootstrap'],
  },
  {
    category: 'AI Skills',
    items: [
      'Context Engineering with Claude Code',
      'Prompt Engineering with Copilot',
      'Data Analytics and Pre-Processing',
    ],
  },
]

export const domains = [
  {
    domain: 'Market Domain — Citi Bank',
    years: '11 yrs',
    skills:
      'FIX 4.2/4.4, FIXML, exchange-specific APIs, E&A, cash ledgering, margin/collateral, FxFlat, trade matching, MiFID II, EMIR reporting, GIFT exchange onboarding, trade reporting, order management systems.',
  },
  {
    domain: 'Payment Domain — Polaris, Citi Bank',
    years: '4 yrs',
    skills:
      'Transaction banking and payment gateway. Cross-border fund transfer, SEPA, SEPA Bulk, Mercury ACH, infrastructures — SWIFT, ACH, SEPA, mass payments.',
  },
  {
    domain: 'Healthcare Domain — CitiusTech',
    years: '1.5 yrs',
    skills: 'Technical protocols: HL7, FHIR, SNOMED CT.',
  },
  {
    domain: 'Marketing Domain',
    years: '0.8 yrs',
    skills: 'Affiliate marketing.',
  },
  {
    domain: 'Innovation and Technology',
    years: '1.8 yrs',
    skills:
      'Container management, automated car parking solution, CCI display management, RFID integration with Microsoft BizTalk / Java low-level API.',
  },
]

export const experience = [
  {
    company: 'Citi Bank',
    location: 'Pune',
    role: 'Senior Software Lead (Assistant Vice President)',
    period: 'Feb 2017 – Present',
    project: 'FUSION-CV-TMG-GMI — Post-Trade Clearing Platform for Exchange Traded Derivatives',
    points: [
      'Lead a 5-member team managing a proprietary post-trade clearing platform for exchange traded derivatives.',
      'Architected FIX/FIXML-based connectivity for 20+ global clearing houses, including SGX, CME, EUREX, and HKE.',
      'Deep technical knowledge of front-to-back-office systems, encompassing OMS, trade matching, allocation, and post-trade reporting.',
      'Modernized GMI (Global Trade Clearing & Accounting) by deploying a cloud-native, scalable pub-sub architecture to synchronize multiple upstream data sources with sub-millisecond reliability.',
      'Engineered modules for Exercise and Assignment (E&A) and FxFlat positioning, ensuring precise lifecycle management for derivative contracts.',
      'Developed a high-scale cash management ledger covering equity, treasury, and margin use cases, providing real-time visibility into liquidity and firm-wide balances.',
      'Architected Cash as Collateral workflows to automate margin requirements, optimizing capital efficiency across multiple clearing houses.',
    ],
  },
  {
    company: 'CitiusTech',
    location: 'Mumbai',
    role: 'Technical Lead',
    period: 'Sep 2015 – Jan 2017',
    points: [
      'IBM Watson User-Admin Module: led the replacement rewrite of an existing .NET application into a modern Java/Angular-based web application.',
      'LIMS (PPD): developed a new application for the Generic Serial Dilution Assay module within Laboratory Information Management Systems.',
    ],
  },
  {
    company: 'Polaris Software Lab Ltd',
    location: 'Mumbai',
    role: 'Technical Lead',
    period: 'Aug 2011 – Sep 2015',
    points: [
      'Architected a critical banking transaction processing hub (RCX Hub) serving as middleware for upstream and downstream systems.',
      'Designed integrations using Java 7, Spring 3, and IBM MQ on WebSphere Server.',
    ],
  },
  {
    company: 'ILead Technologies',
    location: 'Mumbai',
    role: 'Senior Software Developer',
    period: 'Dec 2010 – Jun 2011',
    points: [
      'Developed affiliate marketing platforms (Inboxpays.com) with broadcast and auto-responder mailing modules using JMS and Java Mail API.',
    ],
  },
  {
    company: 'Essen Finance',
    location: 'Mumbai',
    role: 'Software Developer',
    period: 'Aug 2009 – Sep 2010',
    points: [
      'Collaborated on RFID-based software solutions including car parking, attendance management, and CCTV-enabled security systems.',
    ],
  },
  {
    company: 'Paramatrix',
    location: 'Mumbai',
    role: 'Junior Software Developer',
    period: 'Jun 2007 – Aug 2008',
    points: [
      "Developed the 'SCRABS-MoneyLive' User Admin Module for equity and investment markets.",
    ],
  },
]

export const education = [
  {
    degree: 'CPEE: Certified Program in Financial Engineering',
    school: 'IIQF',
    year: '2026',
  },
  { degree: 'PG Diploma in AI/ML', school: 'Purdue University', year: '2023' },
  { degree: 'MBA: Information Technology', school: 'Welingkar Institute, Mumbai', year: '2017' },
  {
    degree: 'Bachelor of Science: Information Technology',
    school: 'Mumbai University',
    year: '2007',
  },
]

export const certifications = [
  'Sun Certified Java Business Component Developer (SCBCD)',
  'Sun Certified Java Programmer (SCJP)',
  'MCTS: Microsoft SQL Server 2008 Database Development',
]

export const awards = [
  'Multiple Gratitude awards from Citi',
  'Delivery awards from CitiusTech and Polaris',
]
