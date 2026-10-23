import type { ReactNode } from 'react';
import { achievements, education, profile } from '../data/portfolio';

/**
 * Full job-application resume (2 pages, A4, ATS-friendly single column).
 * Sources: LinkedIn profile (experience, About, honors, certifications, events — verified Oct 2026)
 * the personal-brand data (enterprise and personal projects, languages, book contribution) and the
 * Engineering Manager revision (team scope, Payliance/Azure modernization, MCP POC).
 * scripts/build-full-resume.mjs prints it to Prawal_Sharma_Resume_Full.pdf.
 */

/** Public profiles shown under the contact line. */
const profileLinks = [
  { href: 'https://github.com/sharma-prawal' },
  { href: 'https://www.credly.com/users/sharma-prawal' },
  { href: 'https://www.hackerrank.com/profile/PrawalSharma' },
];

const summary =
  'Engineering Manager and hands-on architecture leader with 10 years of experience delivering enterprise payments and advertising-data platforms for global clients across the US, UK and South Africa. Currently leads two concurrent client engagements of roughly 5–12 people each — directly managing about half of the combined team (performance, mentoring, career growth, hiring decisions) and providing technical leadership to partner-vendor engineers. Owns solution design, engineering execution, production quality, releases and stakeholder alignment, with a record of 100% client satisfaction, zero escalations and multi-year client retention. Experienced in cloud-native and event-driven architecture, and in applying AI to engineering — AI-assisted delivery, RAG, LLM and MCP prototypes. Claude Certified Architect; AWS, Azure and GCP certified; valid B1/B2 visa.';

const highlights = [
  { value: '10 yrs', label: 'engineering & team leadership' },
  { value: '160K+', label: 'daily banking transactions at 99.9% uptime' },
  { value: '20–30%', label: 'productivity lift from AI-assisted workflows' },
  { value: '90+', label: 'data sources integrated on one platform' },
];

const competencies = [
  'People Management & Performance Reviews',
  'Cross-Vendor Technical Leadership',
  'Delivery & Release Ownership',
  'Solution Design & Architecture',
  'Cloud · Event-Driven · Serverless',
  'Payments & ACH',
  'API & Connector Platforms',
  'AI-Assisted Engineering · RAG · MCP',
  'Global Stakeholder Management',
];

type Role = { title: string; period: string; mode?: string; points: string[]; extra?: { name: string; points: string[] }[] };

const successive: Role[] = [
  {
    title: 'Technology Manager',
    period: 'Nov 2024 – Present',
    mode: 'Hybrid',
    points: [
      'Lead two parallel fintech and media-data engagements with 5–12 contributors each, coordinating architecture, roadmap trade-offs, sprint execution, quality gates, production releases and client communication across the US, UK and South Africa.',
      'Directly manage about half of the combined team — performance appraisals, feedback, mentoring, career growth and hiring decisions — and guide partner-vendor engineers as technical lead.',
      'Led modernization of Payliance settlement and return processing on Azure Functions and Service Bus, with retry and error-handling patterns, secure configuration and phased merchant onboarding.',
      'Drive Data Refinery platform upgrades and connector delivery; coordinate enrollment and fraud-control improvements across API, UI and QA teams with production-readiness reviews.',
      'Introduced AI-assisted development and documentation practices, improving engineering productivity by ~20–30%; guided schedule-intelligence, LLM and MCP integrations as proofs of concept.',
    ],
  },
  {
    title: 'Technology Lead',
    period: 'Jul 2021 – Nov 2024',
    mode: 'Hybrid',
    points: [
      'Led end-to-end delivery of multiple applications for global clients with 100% client satisfaction and zero escalations, contributing to multi-year engagements.',
      'Owned technical delivery and design decisions across MERN, PHP and GraphQL ecosystems; managed cross-functional teams (PM, QA, BA).',
    ],
    extra: [
      { name: 'Connectors (Media · team of 11)', points: ['90+ data-source integrations (Facebook Ads, Google Campaign Manager) with OAuth, scheduled ingestion and reporting.'] },
      { name: 'Data Serve (Media)', points: ['Cross-cloud data serving across AWS S3, Google Cloud, Azure ADLS and Snowflake; automated enterprise data pipelines.'] },
      { name: 'Enrollment & Transactions (Banking)', points: ['White-labeled ACH debit payments with fraud detection and transaction workflows for a US bank.'] },
    ],
  },
  {
    title: 'Software Engineer',
    period: 'Oct 2019 – Jul 2021',
    points: ['Technical lead for 3 concurrent application pods at a global advertising enterprise, coordinating releases across Node.js, React, Redux and GraphQL applications.'],
  },
  {
    title: 'Associate Software Engineer',
    period: 'Mar 2018 – Sep 2019',
    points: ['Led a team of 4 engineers delivering full-stack applications and APIs; improved customer satisfaction by ~50% through performance and reliability work.'],
  },
  {
    title: 'Software Engineer Trainee',
    period: 'Aug 2017 – Feb 2018',
    points: ['Developed internal meeting-room booking and HR document automation tools (PHP, Laravel, Lumen).'],
  },
];

const selectedProjects = [
  {
    name: 'Payments — BIM Enrollment & Transactions',
    meta: 'Fintech · Team Lead → Engineering Manager · 2017 – Present',
    text: 'White-label ACH enrollment and payment operations — merchant mapping, returns and settlements, fraud detection and scoring, compliance reporting, Plaid and Socure identity flows; event-driven jobs modernized on Azure.',
  },
  {
    name: 'Data Refinery & Connectors',
    meta: 'Media technology · Technical Lead · 2019 – Present',
    text: "Governed data ingestion and activation for Dentsu International: 90+ data sources with 1–2 day onboarding and delivery to AWS, Google Cloud, Azure and Snowflake.",
  },
  {
    name: 'AI-Driven Datasource Intelligence & MCP',
    meta: '2026 proofs of concept · with Amit Bora',
    text: 'Schedule- and configuration-risk recommendations learned from historical pipeline behavior (XGBoost, explainable ML), plus read-only API exposure through an MCP server — experimental, not production.',
  },
  {
    name: 'Taxonomy',
    meta: 'Media advertising · Senior Developer',
    text: 'Dynamic Handsontable spreadsheets generating unique campaign identifiers with dependency rules for partners such as Coca-Cola and Microsoft (React, GraphQL, Node.js, MongoDB).',
  },
];

const personalProjects = [
  {
    name: 'AI Brand Assistant (RAG chatbot)',
    meta: 'React · Groq API · Llama 4 Scout',
    text: 'Chatbot on a personal-brand site that answers questions grounded in a structured knowledge base: intent classification and synonym-expanded retrieval select the top chunks, which are injected into the prompt and streamed from the LLM.',
  },
  {
    name: '“The Series” portfolio platform',
    meta: 'React · TypeScript · Vite · Vercel · built AI-assisted with Claude Code',
    text: 'Data-driven, streaming-style portfolio template deployed for three professionals, with automated pipelines for resume PDFs (headless Chromium), portrait cutouts and AI upscaling — prawal-the-series.vercel.app.',
  },
  {
    name: 'Android Notes App · Published builds',
    meta: 'Android · Web · itch.io',
    text: 'Android notes app with folders, editor and quick actions; a live school website (sunriseschoolkandi.org); and an anime-style visual novel published on itch.io.',
  },
];

const skills = [
  { label: 'Architecture & Cloud', items: 'Cloud-native systems, event-driven architecture, serverless, microservices, Azure Functions, Azure Service Bus, AWS, Azure, GCP, Docker, CI/CD' },
  { label: 'AI', items: 'LLM integrations, RAG (Retrieval-Augmented Generation), Agentic AI, MCP, Claude API & Agent SDK, prompt engineering, machine learning (XGBoost)' },
  { label: 'Languages & Frameworks', items: 'JavaScript, TypeScript, Node.js, React, Redux, PHP, Laravel, Python, REST, GraphQL, Apollo' },
  { label: 'Data', items: 'MongoDB, Azure SQL, MySQL, PostgreSQL, Snowflake, Azure ADLS, AWS S3, OAuth integrations' },
  { label: 'Practices', items: 'Engineering management, Agile/Scrum, release management, code review, testing (Jest), stakeholder communication' },
];

/** Proctored or paid certification exams only, with issue years. The two AWS Associate certifications have passed their 3-year validity. */
const certs = [
  { issuer: 'Anthropic', items: 'Claude Certified Architect – Foundations (2026)' },
  { issuer: 'AWS', items: 'Certified AI Practitioner (2025); Certified Developer – Associate (2022); Certified Solutions Architect – Associate (2021)' },
  { issuer: 'Microsoft', items: 'Azure AI Fundamentals (2022); Security, Compliance & Identity Fundamentals (2022); Azure Data Fundamentals (2021); Azure Fundamentals AZ-900 (2021)' },
  { issuer: 'Google Cloud', items: 'Cloud Digital Leader' },
  { issuer: 'Scrum Alliance', items: 'Certified Agile Leadership Essentials, CAL-E (2023)' },
  { issuer: 'ICTRD', items: 'Artificial Intelligence and Machine Learning Program (2026)' },
];

const extras = [
  'Contributor — “The Subtle Art of Effective Communication” (organizational book on communication and listening).',
  'Conferences — AI Impact Summit 2026 and Convergence India Expo 2026 (Bharat Mandapam), AWS Public Sector Symposium 2023, MongoDB.local, IAMAI India Digital Summit; dentsu “Building Generative AI Solutions” hackathon (2023).',
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
  .contact { margin-top: 4px; font-size: 8.6pt; color: #4a4a52; }
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
        <p className="role">Engineering Manager · Technology Manager · AI & Cloud Architecture</p>
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
        <p className="contact">
          {profileLinks.map((l) => (
            <span key={l.href}>
              <a href={l.href}>{l.href.replace(/^https?:\/\/(www\.)?/, '')}</a>
            </span>
          ))}
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
          <p className="muted">Aug 2017 – Present</p>
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

      <Section title="Personal Projects">
        {personalProjects.map((p) => (
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
              <b>{e.degree}</b> — {e.school} · {e.score}
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
