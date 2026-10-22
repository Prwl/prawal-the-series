import type { ReactNode } from 'react';
import { achievements, education, profile } from '../data/portfolio';

/**
 * Full job-application resume (2 pages, A4, ATS-friendly single column).
 * Sources: LinkedIn profile (experience, About, honors, certifications, events — verified Oct 2026)
 * and the personal-brand data (enterprise projects, languages, HackerRank, book contribution).
 * scripts/build-full-resume.mjs prints it to Prawal_Sharma_Resume_Full.pdf.
 */

const summary =
  'Technology Manager with 9+ years of experience leading engineering teams and delivering scalable, high-impact systems for global clients across the US, UK and South Africa. Specializes in AI-enabled, cloud-native solutions — LLM integrations, intelligent automation, microservices, event-driven and serverless architecture — combining strong engineering fundamentals with modern AI tooling. Track record of 100% client satisfaction, zero escalations and multi-year client retention across Media (advertising data) and Banking (payments) domains. Claude Certified Architect (Anthropic); AWS, Azure and GCP certified. Valid B1/B2 visa with onsite US client experience.';

const highlights = [
  { value: '9+ yrs', label: 'engineering & team leadership' },
  { value: '160K+', label: 'daily banking transactions at 99.9% uptime' },
  { value: '20–30%', label: 'productivity lift from AI-assisted workflows' },
  { value: '200+', label: 'data sources integrated on one platform' },
];

const competencies = [
  'AI Strategy & Intelligent Automation',
  'LLM Integrations & Agentic AI (MCP)',
  'Scalable System Architecture',
  'Microservices · Event-Driven · Serverless',
  'Cloud Engineering (AWS · Azure · GCP)',
  'Full-Stack: Node.js · React · GraphQL',
  'Engineering Leadership & Mentoring',
  'Global Stakeholder Management',
  'Agile Delivery & Process Automation',
];

type Role = { title: string; period: string; mode?: string; points: string[]; extra?: { name: string; points: string[] }[] };

const successive: Role[] = [
  {
    title: 'Technology Manager',
    period: 'Nov 2024 – Present',
    mode: 'Hybrid',
    points: [
      'Lead multiple global client engagements, ensuring consistent delivery, quality and stakeholder alignment with teams in the US, UK and South Africa.',
      'Drive engineering strategy across projects with a focus on scalability, performance and system reliability.',
      'Introduced AI-assisted development practices (code generation, debugging, documentation automation), improving engineering productivity by ~20–30%.',
      'Identify opportunities for AI-driven features and intelligent automation; built AI POCs including LLM integrations and intelligent data workflows.',
      'Mentor engineers and strengthen team capabilities across full-stack and cloud technologies.',
    ],
  },
  {
    title: 'Technology Lead',
    period: 'Jul 2021 – Nov 2024',
    mode: 'Hybrid',
    points: [
      'Led end-to-end delivery of multiple applications for global clients with 100% client satisfaction and zero escalations, contributing to multi-year engagements.',
      'Owned architecture and execution across MERN, PHP and GraphQL ecosystems; managed cross-functional teams (PM, QA, BA).',
      'Improved delivery efficiency through automation, process optimization and AI-assisted workflows.',
    ],
    extra: [
      { name: 'Connectors (Media · team of 11)', points: ['Platform integrating 200+ data sources (Facebook Ads, Google Campaign Manager) with OAuth, data ingestion and reporting.'] },
      { name: 'Data Serve (Media)', points: ['Centralized data platform integrating GCP, Azure ADLS, AWS S3 and Snowflake; automated enterprise data pipelines.'] },
      { name: 'Enrollment & Transactions (Banking)', points: ['White-labeled ACH debit payment solution with fraud detection and transaction workflows for a US bank.'] },
    ],
  },
  {
    title: 'Software Engineer',
    period: 'Oct 2019 – Jul 2021',
    points: [
      'Acted as Technical Lead managing 3 parallel application pods for a global advertising enterprise.',
      'Delivered scalable applications with Node.js, React, Redux and GraphQL; ensured production releases with strong quality benchmarks and multiple client recognitions.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    period: 'Mar 2018 – Sep 2019',
    points: [
      'Led a team of 4 engineers and independently handled project delivery; built scalable APIs and optimized backend systems.',
      'Improved customer satisfaction by ~50% through performance and reliability enhancements (Node.js, React, PHP, GraphQL, Express).',
    ],
  },
  {
    title: 'Software Engineer Trainee',
    period: 'Aug 2017 – Feb 2018',
    points: ['Developed internal tools — meeting-room booking and HR letter automation (PHP, Laravel, Lumen).'],
  },
];

const selectedProjects = [
  {
    name: 'Data Refinery',
    meta: 'Media advertising · Technical Lead · 2019 – Present',
    text: "Governed data-activation platform serving 87+ sources with 1–2 day onboarding for Dentsu International's media operations — Connectors for automated fetches, Trifacta recipes for cleansing, Data Serve for delivery to S3, GCP, Snowflake and analytics tools.",
  },
  {
    name: 'BIM — Enrollment & Transactions',
    meta: 'Fintech / banking · Team Lead & Engineering Manager · 2017 – Present',
    text: 'White-labeled ACH payment platform for merchant, mobile and web commerce: enrollment APIs, transaction operations, fraud detection and scoring, compliance reporting; Plaid and Socure identity flows (PHP, MySQL, React).',
  },
  {
    name: 'AI-Driven Datasource Intelligence',
    meta: 'AI / ML POC · 2026 · with Amit Bora',
    text: 'AI assistant that learns from historical pipeline behavior to predict schedule risk and configuration success before the first run, using XGBoost and explainable AI to show why a setup is risky.',
  },
  {
    name: 'Taxonomy',
    meta: 'Media advertising · Senior Developer',
    text: 'Dynamically generated Handsontable spreadsheets producing unique campaign identifiers with dependency-driven rules for partners such as Coca-Cola and Microsoft (React, GraphQL, Apollo, Node.js, MongoDB).',
  },
  {
    name: 'TruckBoard · ACL URL Shortener · StormSmart',
    meta: 'Transportation · Banking · Operations',
    text: 'Fleet tracking and booking with map views (React, Redux, Laravel, Google Maps); single and batch URL shortening with reporting for bank promotions (Node.js, MongoDB); admin and CRUD platform for a services business (Laravel, PostgreSQL).',
  },
];

const skills = [
  { label: 'AI & Architecture', items: 'LLM integrations, Agentic AI, MCP, Claude API & Agent SDK, Prompt engineering, Machine learning (XGBoost), System design, Microservices, Event-driven, Serverless' },
  { label: 'Backend & APIs', items: 'Node.js, GraphQL, Apollo GraphQL, REST APIs, Express.js, PHP, Laravel, Lumen, Python, Java' },
  { label: 'Frontend', items: 'React, Redux, TypeScript, JavaScript (ES6+), HTML5, CSS3, jQuery' },
  { label: 'Cloud & DevOps', items: 'AWS, Azure, GCP, Docker, Git, Bitbucket, Linux, CI/CD' },
  { label: 'Data', items: 'MongoDB, PostgreSQL, MySQL, Snowflake, Azure ADLS, AWS S3, data pipelines' },
  { label: 'Practices', items: 'Engineering management, Agile/Scrum, Jest & testing, design patterns, code review, stakeholder communication' },
];

/** Issue years from the original certificates; the two AWS Associate certifications have passed their 3-year validity. */
const certs = [
  { issuer: 'Anthropic', items: 'Claude Certified Architect – Foundations (2026)' },
  { issuer: 'AWS', items: 'Certified AI Practitioner (2025); Certified Developer – Associate (2022); Certified Solutions Architect – Associate (2021); AWS Partner Cloud Economics, Business & Technical accreditations' },
  { issuer: 'Microsoft', items: 'Azure AI Fundamentals (2022); Security, Compliance & Identity Fundamentals (2022); Azure Data Fundamentals (2021); Azure Fundamentals AZ-900 (2021)' },
  { issuer: 'Google Cloud', items: 'Cloud Digital Leader' },
  { issuer: 'Apollo GraphQL', items: 'Graph Developer – Professional (2022); Graph Developer – Associate (2022)' },
  { issuer: 'Scrum Alliance', items: 'Certified Agile Leadership Essentials, CAL-E (2023)' },
  { issuer: 'ICTRD', items: 'Artificial Intelligence and Machine Learning Program (2026)' },
];

const moreCerts = [
  'HackerRank — 11 skill certificates (JavaScript, Node.js, REST API, React, SQL Advanced, Problem Solving)',
  '71 credentials in total on LinkedIn, including LinkedIn Learning, Pluralsight and MongoDB University courses',
];

const extras = [
  'Contributor — “The Subtle Art of Effective Communication” (organizational book on communication and listening).',
  'Conferences — AI Impact Summit 2026 and Convergence India Expo 2026 (Bharat Mandapam), AWS Public Sector Symposium 2023, MongoDB.local, IAMAI India Digital Summit; dentsu “Building Generative AI Solutions” hackathon (2023).',
  '15 LinkedIn recommendations from managers, peers and team members.',
];

const languages = 'English · Hindi · Punjabi (native or bilingual)';

const css = `
  @page { size: A4; margin: 11mm 13mm 11mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: Inter, Helvetica, Arial, sans-serif; color: #1b1b1f; font-size: 8.9pt; line-height: 1.36; background: #fff; }
  .doc { max-width: 184mm; margin: 0 auto; }
  header { border-bottom: 2px solid #c8102e; padding-bottom: 8px; margin-bottom: 8px; }
  h1 { font-size: 22pt; font-weight: 800; letter-spacing: 0.04em; line-height: 1; }
  .role { margin-top: 4px; font-size: 10pt; font-weight: 600; color: #c8102e; }
  .contact { margin-top: 5px; font-size: 8.6pt; color: #4a4a52; }
  .contact a { color: inherit; text-decoration: none; }
  .contact span + span::before { content: '·'; margin: 0 6px; color: #9a9aa3; }
  h2 { font-size: 8.4pt; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #c8102e; border-bottom: 1px solid #e3e3e8; padding-bottom: 2px; margin: 9px 0 4px; break-after: avoid; }
  p.summary { color: #2c2c33; }
  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 7px; }
  .stat { border: 1px solid #ececf1; border-radius: 6px; padding: 4px 7px; }
  .stat b { display: block; font-size: 12pt; font-weight: 800; line-height: 1.1; }
  .stat span { font-size: 7.4pt; color: #5b5b64; line-height: 1.25; display: block; }
  .comp { display: flex; flex-wrap: wrap; gap: 4px 6px; }
  .comp span { border: 1px solid #e3e3e8; border-radius: 4px; padding: 1px 6px; font-size: 8.2pt; color: #2c2c33; }
  .row { display: flex; justify-content: space-between; gap: 12px; align-items: baseline; }
  .muted { color: #6a6a73; font-size: 8.4pt; white-space: nowrap; }
  .company { font-size: 10pt; font-weight: 700; }
  .title { font-weight: 600; margin-top: 4px; }
  .avoid { break-inside: avoid; }
  ul { margin: 2px 0 0 14px; }
  li { margin: 1.2px 0; color: #2c2c33; }
  .sub { margin: 2px 0 0 14px; font-size: 8.5pt; color: #2c2c33; }
  .sub b { font-weight: 600; }
  .early { margin-top: 3px; }
  .proj { margin-bottom: 4px; break-inside: avoid; }
  .proj .name { font-weight: 700; }
  .proj .meta { color: #6a6a73; font-size: 8.3pt; }
  .skills p { margin: 1.5px 0; }
  .skills b, .certs b { font-weight: 600; }
  .two { display: grid; grid-template-columns: 1.15fr 1fr; gap: 0 18px; }
  .awards li, .certs li { margin: 1px 0; }
`;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function FullResume() {
  const linkedinLabel = profile.links.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  return (
    <div className="doc">
      <style>{css}</style>
      <header>
        <h1>{profile.fullName.toUpperCase()}</h1>
        <p className="role">Technology Manager · AI-Driven Engineering Leader · Cloud & Scalable Systems</p>
        <p className="contact">
          <span>{profile.location}</span>
          <span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </span>
          <span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </span>
          <span>
            <a href={profile.links.linkedin}>{linkedinLabel}</a>
          </span>
        </p>
      </header>

      <Section title="Professional Summary">
        <p className="summary">{summary}</p>
        <div className="stats">
          {highlights.map((h) => (
            <div key={h.label} className="stat">
              <b>{h.value}</b>
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Core Competencies">
        <div className="comp">
          {competencies.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </Section>

      <Section title="Professional Experience">
        <div className="row">
          <p className="company">
            Successive Digital <span className="muted">· Noida, India</span>
          </p>
          <p className="muted">Aug 2017 – Present · 9 yrs</p>
        </div>
        {successive.map((r) => (
          <div key={r.title} className="avoid">
            <div className="row">
              <p className="title">
                {r.title}
                {r.mode ? <span className="muted"> · {r.mode}</span> : null}
              </p>
              <p className="muted">{r.period}</p>
            </div>
            <ul>
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {r.extra?.map((x) => (
              <p key={x.name} className="sub">
                <b>{x.name}:</b> {x.points.join(' ')}
              </p>
            ))}
          </div>
        ))}
      </Section>

      <Section title="Selected Projects">
        {selectedProjects.map((p) => (
          <div key={p.name} className="proj">
            <p>
              <span className="name">{p.name}</span> <span className="meta">— {p.meta}</span>
            </p>
            <p>{p.text}</p>
          </div>
        ))}
      </Section>

      <Section title="Technical Skills">
        <div className="skills">
          {skills.map((s) => (
            <p key={s.label}>
              <b>{s.label}: </b>
              {s.items}
            </p>
          ))}
        </div>
      </Section>

      <div className="two">
        <Section title="Certifications">
          <ul className="certs">
            {certs.map((c) => (
              <li key={c.issuer}>
                <b>{c.issuer}: </b>
                {c.items}
              </li>
            ))}
            {moreCerts.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Section>
        <Section title="Honors & Awards">
          <ul className="awards">
            {achievements.map((a) => (
              <li key={a.id}>
                <b>{a.title}</b> — {a.org.replace('Successive Digital · ', '')}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section title="Education">
        {education.map((e) => (
          <div key={e.school} className="row">
            <p>
              <b>{e.degree}</b> — {e.school}
            </p>
            <p className="muted">{e.period}</p>
          </div>
        ))}
      </Section>

      <Section title="Additional">
        <ul>
          {extras.map((x) => (
            <li key={x}>{x}</li>
          ))}
          <li>Languages — {languages}.</li>
        </ul>
      </Section>
    </div>
  );
}
