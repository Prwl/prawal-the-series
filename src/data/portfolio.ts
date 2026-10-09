/**
 * Central portfolio data — generated from Prawal's personal-brand data (profile.js, showcase.js,
 * mediaAssets.js) and resume (Prawal_Sharma_Resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears in those sources.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Prawal Sharma',
  displayName: 'Prawal Sharma',
  firstName: 'PRAWAL',
  initial: 'P',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SHARMA ORIGINAL',
  role: 'Technology Manager',
  tagline: ['Technology Manager', 'AI-Driven Engineering', 'Cloud Certified'],
  intro:
    'Engineering leader who ships: 160K+ daily banking transactions at 99.9% uptime, 20–30% AI-assisted productivity gains across global teams, and a zero-escalation track record across 9+ years at Successive Digital.',
  /** Longer summary used on the generated PDF resume. */
  resumeSummary:
    'Technology Manager with 9+ years of experience building and leading engineering teams delivering scalable, cloud-native, and AI-enabled systems for global clients across Media and Banking domains (US, UK, South Africa). Proven track record of 100% client satisfaction, zero escalations, and multi-year client retention. Strong hands-on expertise in distributed systems, microservices, LLM integrations, and full-stack development. Claude Certified Architect; AWS, Azure, and GCP certified. B1/B2 visa holder with onsite US client engagement experience.',
  resumeHighlights: [
    { value: '9+ yrs', label: 'engineering & leadership' },
    { value: '160K+', label: 'daily banking transactions at 99.9% uptime' },
    { value: '20–30%', label: 'productivity lift from AI-assisted workflows' },
    { value: '0', label: 'escalations · 100% client retention' },
  ],
  location: 'Delhi, India',
  email: 'prawal0007@gmail.com',
  phone: '+91 98911 14036',
  links: {
    linkedin: 'https://www.linkedin.com/in/sharma-prawal/',
  },
  resumePdf: '/assets/Prawal_Sharma_Resume.pdf',
  resumeFileName: 'Prawal_Sharma_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet:
      '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w, /assets/portrait-1600.webp 1600w, /assets/portrait-2200.webp 2200w',
    alt: 'Portrait of Prawal Sharma',
  },
  interests: ['LLM-enabled workflows', 'Event-driven & serverless architecture', 'AI-assisted engineering productivity'],
};

export const education = [
  {
    school: 'Maharshi Dayanand University',
    place: 'Rohtak',
    degree: 'Bachelor of Technology — Computer Science',
    period: '2012 – 2016',
    score: '78%',
  },
];

export type Role = { title: string; period: string; points: string[] };
export type Job = { company: string; place: string; period: string; roles: Role[] };

export const experience: Job[] = [
  {
    company: 'Successive Digital',
    place: 'Noida',
    period: 'Aug 2017 – Present',
    roles: [
      {
        title: 'Technology Manager',
        period: 'Nov 2024 – Present',
        points: [
          'Leading multiple global client engagements across US, UK and South Africa, ensuring consistent delivery, quality and stakeholder alignment.',
          'Introduced AI-assisted development for code generation, debugging and documentation — improving engineering productivity by ~20–30%.',
          'Built AI-based POCs including LLM integrations and intelligent data workflows; mentoring engineers across full-stack and cloud.',
        ],
      },
      {
        title: 'Technology Lead',
        period: 'Jul 2021 – Nov 2024',
        points: [
          'Delivered end-to-end engineering for multiple large-scale applications with 100% client satisfaction and zero escalations, contributing to multi-year client retention.',
          'Connectors Platform (team of 11): data integration across 200+ sources incl. Facebook Ads and Google Campaign Manager — OAuth flows, ingestion pipelines, enterprise reporting.',
          'Data Serve: centralized data platform integrating GCP, Azure ADLS, AWS S3 and Snowflake. Enrollment & Transactions: white-labeled ACH debit payments with fraud detection for a US bank.',
        ],
      },
      {
        title: 'Software Engineer',
        period: 'Oct 2019 – Jul 2021',
        points: [
          'Acted as Technical Lead managing three parallel application pods for a global advertising enterprise.',
          'Delivered scalable applications using Node.js, React, Redux and GraphQL; mentored junior engineers.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        period: 'Mar 2018 – Sep 2019',
        points: [
          'Led a team of four engineers and independently handled project delivery.',
          'Improved customer satisfaction by ~50% through performance and reliability enhancements.',
        ],
      },
      {
        title: 'Software Engineer Trainee',
        period: 'Aug 2017 – Feb 2018',
        points: ['Developed internal tools including meeting booking and HR automation systems.'],
      },
    ],
  },
  {
    company: 'GirnarSoft',
    place: 'Gurugram',
    period: 'Jan 2016 – Jun 2016',
    roles: [{ title: 'Software Trainee', period: '6 months', points: ['Worked on CarDekho and BikeDekho platforms using Laravel.'] }],
  },
  {
    company: 'NIIT Technologies',
    place: 'Greater Delhi Area',
    period: 'Jul 2015 – Aug 2015',
    roles: [{ title: 'Summer Intern', period: '2 months', points: ['Built foundational skills in PHP.'] }],
  },
  {
    company: 'Aptech',
    place: 'Greater Delhi Area',
    period: 'Jul 2014 – Aug 2014',
    roles: [{ title: 'Summer Intern', period: '2 months', points: ['Built foundational skills in Java.'] }],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  /** Short badge shown on the card and overlay (a year, a run length or a release status). */
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Public link to the live product, store page or file. */
  link?: string;
  linkLabel?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'pipeline' | 'chart' | 'scenes' | 'browser';
};

export const projects: Project[] = [
  {
    id: 'data-refinery',
    title: 'Data Refinery',
    year: 'Since 2019',
    genre: 'Media • Data Platform • Cloud',
    logline: "A governed media-data activation platform serving 87+ sources across Dentsu International's advertising operations.",
    stack: ['React', 'TypeScript', 'GraphQL', 'Apollo Server', 'Node.js', 'MongoDB', 'Snowflake'],
    build: [
      'Technical Lead / Team Lead of a three-app model: Connectors for automated source fetches, Trifacta recipes for cleansing and enrichment, and Data Serve for multi-channel delivery to S3, GCP, Snowflake and analytics tools.',
      'Architected the Connectors platform (team of 11) — 200+ data sources including Facebook Ads and Google Campaign Manager, with OAuth and credential-based authorization, scheduling, ingestion pipelines and enterprise reporting.',
      'Designed Data Serve — a centralized data platform integrating GCP, Azure ADLS, AWS S3 and Snowflake that enabled fully automated, enterprise-grade data pipelines and reduced manual data-ops overhead.',
    ],
    features: [
      'Connectors: dynamic forms, OAuth & credential auth, scheduling',
      'Trifacta recipes for reusable cleansing & enrichment',
      'Data Serve: custom date ranges & multi-format downloads',
      'Delivery to AWS S3, GCP, Azure ADLS & Snowflake',
      'Self-service reporting without manual engineering',
    ],
    metrics: [
      { value: '200+', label: 'data sources connected' },
      { value: '87+', label: 'media sources served' },
      { value: '1–2 days', label: 'source onboarding' },
      { value: '11', label: 'engineers on the Connectors team' },
      { value: '3', label: 'apps: Connectors · Trifacta · Data Serve' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'pipeline',
  },
  {
    id: 'enrollment-transactions',
    title: 'Enrollment & Transactions',
    year: 'Since 2017',
    genre: 'Fintech • Payments • Fraud',
    logline: 'BIM — a white-labeled ACH debit payment platform powering in-store, mobile and web commerce for a US banking client.',
    stack: ['PHP', 'MySQL', 'React', 'Restler', 'Plaid', 'Socure'],
    build: [
      'Team Lead / Engineering Dev Manager with full ownership of enrollment APIs, transaction operations, fraud detection and compliance reporting — managed from 2017 to present.',
      'Technical Lead and Project Manager for a team of six: requirements with the client, a successful increment every sprint, and demos to the business.',
      'Integrated Plaid, Socure and banking-grade identity flows (IAV) alongside full-stack delivery in PHP, MySQL and React.',
    ],
    features: [
      'White-labeled ACH debit payment tender',
      'Enrollment & transaction APIs for merchant apps',
      'Fraud detection & scoring workflows',
      'Partner reporting jobs',
      'Client Boarding Wizard & admin panel',
    ],
    metrics: [
      { value: '160K+', label: 'daily banking transactions' },
      { value: '99.9%', label: 'uptime' },
      { value: '7', label: 'modules, from enrollment to fraud' },
      { value: '6', label: 'engineers led' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'taxonomy',
    title: 'Taxonomy',
    year: '7 months',
    genre: 'Media • Data UX • GraphQL',
    logline: 'Dynamically generated spreadsheets that build unique campaign identifiers for advertising partners such as Coca-Cola and Microsoft.',
    stack: ['React', 'TypeScript', 'GraphQL', 'Apollo Server', 'Node.js', 'MongoDB', 'Handsontable'],
    build: [
      'Built dynamically generated Handsontable workflows for advertisement taxonomy and unique-identifier generation.',
      'Handled dependency-driven configuration logic for partners including Coca-Cola and Microsoft.',
      'Optimized the existing solution for performance, with on-time sprint delivery and a demo at the end of every sprint.',
    ],
    features: ['Name Generator', 'Dynamic spreadsheet configurations', 'Data-dependency handling', 'Performance optimization'],
    metrics: [
      { value: '3', label: 'modules: Name Generator · HandsOnTable · Dependencies' },
      { value: '7 mo', label: 'delivery run' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'datastream-intelligence',
    title: 'Datasource Intelligence',
    year: 'POC · 2026',
    genre: 'AI • Explainable ML • Data Pipelines',
    logline: 'An AI assistant that learns from historical pipeline behavior to prevent data-pipeline failures before they happen.',
    stack: ['XGBoost', 'Explainable AI', 'Machine learning', 'Data pipelines'],
    build: [
      'Built with Amit Bora: an AI-powered assistant that learns from historical pipeline behavior and surfaces guidance during pipeline creation — not after failure.',
      'Predicts schedule risk (flags risky execution windows and suggests safer ones) and configuration success (compares new setups with historical patterns before the first run).',
      'Uses explainable AI so users see why something is risky, not just that it is.',
    ],
    features: ['Schedule-risk prediction', 'Configuration-success prediction', 'Safer execution windows suggested', 'Explainable AI reasoning'],
    metrics: [
      { value: 'Proactive', label: 'failures flagged before the first run' },
      { value: 'XAI', label: 'explains why, not just what' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'chart',
  },
  {
    id: 'visual-novel',
    title: 'Praashi',
    year: 'Published',
    genre: 'Visual Novel • Game • Narrative',
    logline: 'A polished anime-style visual novel published on itch.io — cinematic scenes, emotional choices and progression design.',
    stack: ['Visual novel', 'Game publishing', 'Narrative design'],
    build: [
      'Created a visual novel with menu flow, story scenes, emotional choices, keepsakes and vow moments.',
      'AI-assisted art direction, narrative pacing and scene composition.',
    ],
    features: ['Cinematic story scenes', 'Emotional choices', 'Memory gallery & keepsakes', 'Published on itch.io'],
    metrics: [
      { value: 'itch.io', label: 'published' },
      { value: '6', label: 'production screens' },
    ],
    link: 'https://prawalsharma.itch.io/praashi',
    linkLabel: 'Play on itch.io',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'scenes',
  },
  {
    id: 'sunrise-school',
    title: 'Sunrise Public School',
    year: 'Live',
    genre: 'Web • Education',
    logline: 'A public website for Sunrise Public School, Kandi — built to establish trust with parents and local visitors.',
    stack: ['Web', 'Responsive UI', 'Content design'],
    build: [
      'Built a polished responsive website with clear navigation, institution context and public-facing content.',
      'AI-assisted copy refinement, layout review and content structuring during delivery.',
    ],
    features: ['Responsive layout', 'Clear navigation', 'Institution story & information'],
    metrics: [
      { value: 'Live', label: 'sunriseschoolkandi.org' },
      { value: '5', label: 'core pages' },
    ],
    link: 'https://sunriseschoolkandi.org/',
    linkLabel: 'Visit live site',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'browser',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'esop',
    title: 'ESOP Ownership Achievement',
    org: 'Successive Digital · May 2026',
    detail: 'Recognized at Leadership Offsite 2026 for long-term contribution, leadership ownership and commitment to organizational success.',
    laurel: 'Leadership Offsite',
  },
  {
    id: 'outstanding-contribution',
    title: 'Outstanding Contribution',
    org: 'Successive Digital · May 2026',
    detail: 'Recognized at Leadership Offsite 2026 for driving impactful engineering initiatives, ownership and collaboration.',
    laurel: 'Leadership Offsite',
  },
  {
    id: 'employee-of-the-year',
    title: 'Employee of the Year',
    org: 'Successive Digital · 2023',
    detail: 'Recognized for exceptional contribution to organizational growth and delivery excellence.',
    laurel: 'Best of 2023',
  },
  {
    id: 'key-contributor',
    title: 'Key Contributor',
    org: 'Successive Digital · Apr 2023',
    detail: 'Delivered high-impact results across multiple projects.',
    laurel: 'Impact',
  },
  {
    id: 'longevity',
    title: 'Longevity Award',
    org: 'Successive Digital · Apr 2023',
    detail: 'Recognized for serving five golden and valuable years with Successive Digital.',
    laurel: 'Five Years',
  },
  {
    id: 'exceptional-performer',
    title: 'Exceptional Performer',
    org: 'Successive Digital · Mar 2022',
    detail: 'Consistently exceeded performance benchmarks.',
    laurel: 'Performance',
  },
  {
    id: 'extra-achiever',
    title: "Extra Achiever's Award",
    org: 'Successive Digital · Mar 2021',
    detail: 'For extra effort and constant commitment throughout lockdown work from home.',
    laurel: 'Commitment',
  },
  {
    id: 'client-happiness',
    title: 'Client Happiness',
    org: 'Successive Digital · Mar 2019',
    detail: 'Maintained strong client satisfaction and engagement.',
    laurel: 'Client Award',
  },
  {
    id: 'star-performer-2019',
    title: 'Star Performer',
    org: 'Successive Digital · Feb 2019',
    detail: 'Awarded Star Performer of the Month.',
    laurel: 'Of the Month',
  },
  {
    id: 'star-performer-2018',
    title: 'Star Performer',
    org: 'Successive Digital · Jul 2018',
    detail: 'First time awarded Star Performer of the Month.',
    laurel: 'Of the Month',
  },
];

export type Certification = { issuer: string; name: string; link: string };

const cert = (file: string) => `/assets/certs/${file}.jpg`;

export const certifications: Certification[] = [
  { issuer: 'Anthropic', name: 'Claude Certified Architect – Foundations', link: 'https://www.credly.com/badges/467e2ffa-4f8f-42cc-9e96-fc10ab32ec36' },
  { issuer: 'AWS', name: 'AWS Certified AI Practitioner', link: cert('aws-ai-practitioner') },
  { issuer: 'AWS', name: 'AWS Certified Developer – Associate', link: cert('aws-developer-associate') },
  { issuer: 'AWS', name: 'AWS Certified Solutions Architect – Associate', link: cert('aws-solutions-architect-associate') },
  { issuer: 'AWS', name: 'AWS Partner: Cloud Economics Accreditation', link: cert('aws-partner-cloud-economics') },
  { issuer: 'AWS', name: 'AWS Partner: Accreditation (Business)', link: cert('aws-partner-business') },
  { issuer: 'AWS', name: 'AWS Partner: Accreditation (Technical)', link: cert('aws-partner-technical') },
  { issuer: 'Microsoft', name: 'Azure AI Fundamentals', link: cert('azure-ai-fundamentals') },
  { issuer: 'Microsoft', name: 'Azure Fundamentals', link: cert('azure-fundamentals') },
  { issuer: 'Microsoft', name: 'Azure Data Fundamentals', link: cert('azure-data-fundamentals') },
  { issuer: 'Microsoft', name: 'Security, Compliance, and Identity Fundamentals', link: cert('azure-security-fundamentals') },
  { issuer: 'Google Cloud', name: 'Cloud Digital Leader', link: cert('gcp-cloud-digital-leader') },
  { issuer: 'Apollo GraphQL', name: 'Graph Developer – Professional', link: cert('apollo-graph-developer-professional') },
  { issuer: 'Apollo GraphQL', name: 'Graph Developer – Associate', link: cert('apollo-graph-developer-associate') },
  { issuer: 'Scrum Alliance', name: 'Certified Agile Leadership Essentials (CAL-E)', link: cert('scrum-cal-e') },
  { issuer: 'ICTRD', name: 'Artificial Intelligence and Machine Learning Program', link: cert('ictrd-ai-ml') },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'leadership',
    title: 'AI & Leadership',
    subtitle: 'Engineering leadership for the AI era',
    skills: [
      { name: 'Artificial Intelligence', mono: 'Ai', note: 'Focus' },
      { name: 'Engineering Management', mono: 'Em' },
      { name: 'System Design', mono: 'Sd' },
      { name: 'Agile Leadership', mono: 'Ag' },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    subtitle: 'Scalable by design',
    skills: [
      { name: 'Cloud Architecture', mono: 'Ca' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'Serverless', mono: 'Sv' },
      { name: 'Event-Driven', mono: 'Ev' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re', note: 'Primary' },
      { name: 'Redux', mono: 'Rx' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML / CSS', mono: 'Ht' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No', note: 'Primary' },
      { name: 'GraphQL', mono: 'Gq' },
      { name: 'Apollo GraphQL', mono: 'Ap' },
      { name: 'REST APIs', mono: 'Rs' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'Laravel', mono: 'Lv' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Tools',
    subtitle: 'Shipping & operating',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'Azure', mono: 'Az' },
      { name: 'GCP', mono: 'Gc' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Git', mono: 'Gt' },
      { name: 'Linux', mono: 'Lx' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & document',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Snowflake', mono: 'Sf' },
    ],
  },
  {
    id: 'quality',
    title: 'Quality & Craft',
    subtitle: 'How the work gets done',
    skills: [
      { name: 'Jest', mono: 'Je' },
      { name: 'Debugging', mono: 'Db' },
      { name: 'Design Patterns', mono: 'Dp' },
      { name: 'Software Architecture', mono: 'Sa' },
      { name: 'Python', mono: 'Py' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements.
 */
export const skillEvidence: Record<string, string[]> = {
  'Artificial Intelligence': ['Claude Certified Architect – Foundations', 'AWS Certified AI Practitioner', 'Azure AI Fundamentals', 'ICTRD AI & ML Program', 'Datasource Intelligence'],
  'Engineering Management': ['Technology Manager, Successive Digital', 'Zero escalations across US · UK · SA'],
  'Agile Leadership': ['Scrum Alliance CAL-E'],
  'Cloud Architecture': ['AWS Solutions Architect – Associate', 'Google Cloud Digital Leader', 'Data Refinery'],
  Microservices: ['Successive Digital — Technology Lead'],
  React: ['Data Refinery', 'Taxonomy', 'Enrollment & Transactions'],
  Redux: ['Global advertising pods, 2019 – 2021'],
  TypeScript: ['Data Refinery', 'Taxonomy'],
  'Node.js': ['Data Refinery', 'Taxonomy', 'HackerRank Node.js (Intermediate)'],
  GraphQL: ['Data Refinery', 'Taxonomy'],
  'Apollo GraphQL': ['Graph Developer – Professional', 'Graph Developer – Associate'],
  'REST APIs': ['HackerRank REST API (Intermediate)', 'Enrollment & Transactions'],
  PHP: ['Enrollment & Transactions', 'NIIT Technologies internship'],
  Laravel: ['GirnarSoft — CarDekho & BikeDekho'],
  AWS: ['AWS AI Practitioner', 'AWS Developer – Associate', 'AWS Solutions Architect – Associate'],
  Azure: ['Azure Fundamentals', 'Azure Data Fundamentals', 'Azure AI Fundamentals'],
  GCP: ['Google Cloud Digital Leader', 'Data Refinery'],
  MongoDB: ['Data Refinery', 'Taxonomy'],
  MySQL: ['Enrollment & Transactions'],
  Snowflake: ['Data Refinery'],
  Python: ['Datasource Intelligence'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: '2012 – 2016',
    synopsis: 'B.Tech in Computer Science at Maharshi Dayanand University, with summer internships and a first industry traineeship.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',
        description: 'Bachelor of Technology in Computer Science at Maharshi Dayanand University — finishing with 78%.',
        tags: ['B.Tech', 'Computer Science', '78%'],
        runtime: '2012 – 2016',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Intern',
        description: 'Summer internships at Aptech (Java, 2014) and NIIT Technologies (PHP, 2015).',
        tags: ['Java', 'PHP'],
        runtime: '2 + 2 months',
        palette: violet,
      },
      {
        code: 'S01 E03',
        title: 'The Trainee',
        description: 'Software Trainee at GirnarSoft, Gurugram — working on the CarDekho and BikeDekho platforms with Laravel.',
        tags: ['Laravel', 'CarDekho', 'BikeDekho'],
        runtime: 'Jan – Jun 2016',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Successive',
    period: '2017 – 2019',
    synopsis: 'Joining Successive Digital as a trainee and taking a team within the first year.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The New Recruit',
        description: 'Software Engineer Trainee — internal tools including meeting-room booking and dynamic HR letter generation.',
        tags: ['PHP', 'Laravel', 'Lumen'],
        runtime: 'Aug 2017 – Feb 2018',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'The First Team',
        description: 'Associate Software Engineer leading a team of four and lifting customer satisfaction by ~50% through performance and reliability work.',
        tags: ['Node.js', 'React', 'GraphQL', 'Express'],
        runtime: 'Mar 2018 – Sep 2019',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Star Performer',
        description: 'Star Performer of the Month in July 2018 and February 2019, plus the Client Happiness Award in March 2019.',
        tags: ['Star Performer ×2', 'Client Happiness'],
        runtime: '2018 – 2019',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'The Tech Lead',
    period: '2019 – 2024',
    synopsis: 'Leading pods for a global advertising enterprise, then owning large-scale media and banking platforms end to end.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Three Pods',
        description: 'Software Engineer acting as Technical Lead for three parallel application pods for a global advertising enterprise.',
        tags: ['Node.js', 'React', 'Redux', 'GraphQL'],
        runtime: 'Oct 2019 – Jul 2021',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'The Platforms',
        description: 'Connectors (200+ sources), Data Serve (GCP, Azure ADLS, S3, Snowflake) and a white-labeled ACH payment platform for a US bank.',
        tags: ['Data Refinery', 'Fintech', 'Cloud'],
        runtime: 'Jul 2021 – Nov 2024',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'Employee of the Year',
        description: 'Employee of the Year, Key Contributor and the Longevity Award for five years at Successive Digital.',
        tags: ['Employee of the Year', 'Longevity'],
        runtime: 'April 2023',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Technology Manager',
    period: '2024 – Present',
    synopsis: 'Leading global engagements across the US, UK and South Africa — and bringing AI into how engineering teams work.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Multiplier',
        description: 'Introduced AI-assisted code generation, debugging and documentation — a ~20–30% productivity lift across teams — and became a Claude Certified Architect (Anthropic, Aug 2026).',
        tags: ['AI-assisted engineering', 'LLMs', 'Claude Certified Architect'],
        runtime: 'Nov 2024 – Present',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'Across Borders',
        description: 'B1/B2 visa holder with onsite US client engagement — stakeholder delivery across the US, UK and South Africa.',
        tags: ['USA client visit', 'US · UK · SA'],
        runtime: 'Global',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'Leadership Offsite',
        description: 'The ESOP Ownership Achievement Award and the Outstanding Contribution Award at Leadership Offsite 2026.',
        tags: ['ESOP', 'Outstanding Contribution'],
        runtime: 'May 2026',
        palette: crimson,
      },
      {
        code: 'S04 E04',
        title: 'Off the Clock',
        description: 'Contributor to “The Subtle Art of Effective Communication”, and personal builds from a school website to a published visual novel.',
        tags: ['Book contributor', 'itch.io'],
        runtime: 'Ongoing',
        palette: violet,
      },
      {
        code: 'S04 E05',
        title: 'On the Circuit',
        description: 'AWS Public Sector Symposium (2023), a dentsu Generative AI Solutions hackathon (2023), MongoDB.local, IAMAI India Digital Summit, MPC Conclave, AI Impact Summit 2026 and Convergence India Expo 2026.',
        tags: ['AWS', 'GenAI hackathon', 'AI Impact Summit'],
        runtime: '2023 – 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The current focus points to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'LLM-enabled workflows, intelligent automation, event-driven and serverless architecture, and AI-assisted engineering productivity.',
        tags: ['LLMs', 'Serverless', 'Event-driven'],
        runtime: 'In production',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Daily volume', title: '160K+', detail: 'Banking transactions a day at 99.9% uptime', palette: amber },
  { label: 'The AI lift', title: '20–30%', detail: 'Productivity gain from AI-assisted workflows', palette: jade },
  { label: 'Biggest honour', title: 'Employee of the Year', detail: 'Successive Digital • 2023', palette: crimson },
  { label: 'Track record', title: '0 Escalations', detail: '100% client satisfaction, multi-year retention', palette: ocean },
  { label: 'The data Original', title: 'Data Refinery', detail: '200+ sources • 87+ served', palette: violet },
  { label: 'Cloud trilogy', title: 'AWS · Azure · GCP', detail: 'Certified on all three', palette: amber },
  { label: 'Latest award', title: 'ESOP Ownership', detail: 'Leadership Offsite 2026', palette: crimson },
  { label: 'Global stage', title: 'US · UK · SA', detail: 'Onsite US client delivery • B1/B2', palette: ocean },
  { label: 'Newest credential', title: 'Claude Certified Architect', detail: 'Anthropic • Foundations • Aug 2026', palette: violet },
  { label: 'Current focus', title: 'LLM Workflows', detail: 'with event-driven & serverless systems', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Now',
    title: 'Technology Manager',
    lines: ['Successive Digital, Noida', 'Global engagements across the US, UK and South Africa'],
    chips: ['9+ years', 'Zero escalations'],
  },
  {
    kicker: 'Stack',
    title: 'Full-stack, cloud-first.',
    lines: ['Node.js, React, GraphQL, TypeScript · PHP, Laravel', 'MongoDB, PostgreSQL, MySQL · AWS, Azure, GCP'],
    chips: ['Node.js', 'React', 'GraphQL', 'AWS', 'Azure', 'GCP'],
  },
  {
    kicker: 'The climb',
    title: 'Trainee to Manager',
    lines: ['Software Engineer Trainee · 2017', 'Associate SE → Software Engineer → Technology Lead', 'Technology Manager · Nov 2024 – Present'],
  },
  {
    kicker: 'Originals',
    title: 'Six Originals',
    lines: ['Data Refinery — 200+ sources connected', 'Enrollment & Transactions — 160K+ daily transactions', 'Plus Taxonomy, an explainable-AI POC, the Praashi visual novel and a live school site'],
  },
  {
    kicker: 'Awards',
    title: 'Ten Awards',
    lines: ['Employee of the Year — 2023', 'ESOP Ownership & Outstanding Contribution — 2026', 'Star Performer ×2 · Client Happiness · Longevity'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Credentials`,
    lines: ['Anthropic Claude Certified Architect', 'AWS · Microsoft Azure · Google Cloud', 'Apollo GraphQL · Scrum Alliance · ICTRD'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['LLM-enabled workflows · Event-driven systems · Serverless platforms'],
  },
];

export type Review = { name: string; role: string; date: string; quote: string; photo: string; linkedin: string };

export const reviews: Review[] = [
  { name: 'Pranjhi Singh', role: 'Full Stack Developer', date: 'August 2026', linkedin: 'https://www.linkedin.com/in/pranjhi-singh/', photo: '/assets/reviews/pranjhi_singh.jpeg', quote: 'I have the opportunity to work with Prawal Sharma and truly appreciate his leadership, professionalism, and approach to managing the team. He brings clarity to diverse challenges, keeps the team aligned, and encourages collaboration, ownership, and continuous learning.' },
  { name: 'Himanshu Gola', role: 'Associate Engineer at Successive Digital', date: 'August 2026', linkedin: 'https://www.linkedin.com/in/himanshu-gola-8083381a6/', photo: '/assets/reviews/himanshu_gola.jpeg', quote: 'He has strong technical expertise and a good understanding of scalable systems and cloud technologies. Prawal is always approachable and willing to help the team with technical challenges, while also encouraging us to take ownership of our work.' },
  { name: 'Preet Saxena', role: 'Manager – Technology', date: 'August 2026', linkedin: 'https://www.linkedin.com/in/preet-saxena/', photo: '/assets/reviews/preet_saxena.jpeg', quote: 'I’ve had the opportunity to work closely with Prawal and have consistently been impressed by his strong technical expertise, ownership, and leadership. He has a great ability to understand complex technical and business problems, identify risks early, and drive solutions through to completion.' },
  { name: 'Amit Bora', role: 'Senior Backend Engineer', date: 'July 2025', linkedin: 'https://www.linkedin.com/in/amitbora2/', photo: '/assets/reviews/amit_bora.jpeg', quote: 'I can confidently say he exemplifies the qualities of a forward-thinking and highly effective technology leader. With multiple certifications across Azure, AWS & GCP, he brings a deep, well-rounded expertise in cloud technologies—backed by hands-on experience and strategic vision.' },
  { name: 'Ravi Chaudhary', role: 'Manager Technology', date: 'September 2022', linkedin: 'https://www.linkedin.com/in/ravi-chaudhary-js/', photo: '/assets/reviews/ravi_chaudhary.jpeg', quote: 'The great thing about Prawal is the ownership and ready to learn anything quickly. Handles team calmly, and good knowledge of ReactJS.' },
  { name: 'Aashna Diwan', role: 'Lead Technical Communications Engineer @ Cadence', date: 'November 2021', linkedin: 'https://www.linkedin.com/in/aashna-diwan/', photo: '/assets/reviews/aashna_diwan.jpeg', quote: 'I rarely come across real talents who stand out like Prawal. He is an innovative, hard-working and an intelligent leader who is expertise in his area.' },
  { name: 'Ajai Srivastava', role: 'Sr. Manager – Technology', date: 'May 2021', linkedin: 'https://www.linkedin.com/in/ajai-srivastava-13759224/', photo: '/assets/reviews/ajai_srivastava.jpeg', quote: 'I was impressed by Prawal’s ability to handle any situation calmly and patiently, even with the toughest clients.' },
  { name: 'Sapna Upreti', role: 'VP Engineering Track', date: 'May 2021', linkedin: 'https://www.linkedin.com/in/sapna14/', photo: '/assets/reviews/sapna_upreti.jpeg', quote: 'I have been working with Prawal for more than 3 years, he is a gem of a person & a great engineer. He is always available & very organised when comes to following any process while working or reporting back on anything.' },
  { name: 'Shubham Soni', role: 'SDET', date: 'April 2021', linkedin: 'https://www.linkedin.com/in/shubham-soni-237039112/', photo: '/assets/reviews/shubham_soni.jpeg', quote: 'Currently, I’m working with Prawal and He is the best Lead I have ever work with the reason behind it why is best “He is always very patient, solution-oriented and there is nothing he couldn’t handle”.' },
  { name: 'Archana Sharma', role: 'Automation Testing · Leading QA Teams', date: 'April 2021', linkedin: 'https://www.linkedin.com/in/archana-sharma-97337472/', photo: '/assets/reviews/archana_sharma.jpeg', quote: 'Prawal is a dynamic resource, he finds the solution of problems in the wink of eye, He thinks from all the aspects of the problem which results in minimizing the efforts and increases the efficiency.' },
  { name: 'Jitendra Pal Singh', role: 'Senior Manager Technology @ Successive Digital', date: 'March 2021', linkedin: 'https://www.linkedin.com/in/jitendra-pal-singh/', photo: '/assets/reviews/jitendra_singh.jpeg', quote: 'If I use one word to describe him then it would be MULTITALENTED. He is a very hard worker and currently handling multiple projects on different technologies at the same time.' },
  { name: 'Tanish Kulshrestha', role: 'MERN Full Stack Developer', date: 'March 2021', linkedin: 'https://www.linkedin.com/in/tanish-kulshrestha/', photo: '/assets/reviews/tanish_kulshreshtha.png', quote: 'Prawal is one of the most valuable person I have ever met, who cares and supports his colleagues. He is not only a multi-skilled and insightful colleague, but also an inspiring team lead.' },
  { name: 'Deepak Prajapati', role: 'Ex-Lloyds Banking Group · Ex-Dentsu', date: 'March 2021', linkedin: 'https://www.linkedin.com/in/the-deepak-prajapati/', photo: '/assets/reviews/deepak_prajapati.jpeg', quote: 'He has exceptional expertise in leadership, coaching, motivation forward-thinking and also intelligent Lead who has lots of knowledge in his field and have a good humour as well.' },
  { name: 'Vikas Chauhan', role: 'Senior Software Engineer at R. Systems', date: 'March 2021', linkedin: 'https://www.linkedin.com/in/vikas-chauhan-39951848/', photo: '/assets/reviews/vikas_chauhan.jpeg', quote: 'When he is connected with you as a colleague, he is very professional and serious about his work, will support you in every situation and recognize your efforts as a team leader, and will tell your mistakes as a friend that what makes him a true leader.' },
  { name: 'Shashank Dixit', role: 'Manager Technology', date: 'March 2021', linkedin: 'https://www.linkedin.com/in/shashank-dixit-in/', photo: '/assets/reviews/shashank_dixit.jpeg', quote: 'Prawal is a proactive, result-oriented, responsible, and technically sound employee and he is always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skills.' },
];

export type ProfileId = 'prawal' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'reviews' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'prawal',
    name: 'Prawal',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'reviews', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, awards & reviews first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'reviews', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & cloud first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'reviews', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'reviews', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Career & education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2017 – Now`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the career', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Awards', card: 'My Awards', meta: `${achievements.length} Awards • ${certifications.length} Certifications`, palette: crimson },
  reviews: { nav: 'Reviews', card: "Critics' Reviews", meta: `${reviews.length} LinkedIn recommendations`, palette: amber },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
