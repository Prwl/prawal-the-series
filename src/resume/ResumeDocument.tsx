import type { ReactNode } from 'react';
import { achievements, certifications, education, experience, profile, projects, skillCategories } from '../data/portfolio';

/**
 * A4, single-column, ATS-friendly resume rendered from the same data as the site.
 * scripts/build-resume.mjs prints it to public/assets/Prawal_Sharma_Resume.pdf.
 */
const css = `
  @page { size: A4; margin: 12mm 14mm 12mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: Inter, Helvetica, Arial, sans-serif; color: #1b1b1f; font-size: 9pt; line-height: 1.38; background: #fff; }
  .doc { max-width: 180mm; margin: 0 auto; }
  header { border-bottom: 2px solid #c8102e; padding-bottom: 9px; margin-bottom: 10px; }
  h1 { font-size: 23pt; font-weight: 800; letter-spacing: 0.04em; line-height: 1; }
  .role { margin-top: 4px; font-size: 10.5pt; font-weight: 600; color: #c8102e; }
  .contact { margin-top: 5px; font-size: 8.8pt; color: #4a4a52; }
  .contact a { color: inherit; text-decoration: none; }
  .contact span + span::before { content: '·'; margin: 0 6px; color: #9a9aa3; }
  h2 { font-size: 8.6pt; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #c8102e; border-bottom: 1px solid #e3e3e8; padding-bottom: 2px; margin: 10px 0 5px; break-after: avoid; }
  p.summary { color: #2c2c33; }
  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 8px; }
  .stat { border: 1px solid #ececf1; border-radius: 6px; padding: 5px 7px; }
  .stat b { display: block; font-size: 12.5pt; font-weight: 800; line-height: 1.1; }
  .stat span { font-size: 7.6pt; color: #5b5b64; line-height: 1.25; display: block; }
  .row { display: flex; justify-content: space-between; gap: 12px; align-items: baseline; }
  .muted { color: #6a6a73; font-size: 8.6pt; white-space: nowrap; }
  .job { margin-bottom: 6px; break-inside: avoid-page; }
  .early { margin-bottom: 2px; }
  .company { font-size: 10pt; font-weight: 700; }
  .title { font-weight: 600; margin-top: 3px; }
  ul { margin: 2px 0 0 14px; }
  li { margin: 1.5px 0; color: #2c2c33; }
  .proj { margin-bottom: 6px; break-inside: avoid; }
  .proj .name { font-weight: 700; }
  .proj .stack { font-size: 8.4pt; color: #5b5b64; }
  .skills p { margin: 2px 0; }
  .skills b, .certs b { font-weight: 600; }
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 0 18px; }
  .awards li { margin: 1px 0; }
  .avoid { break-inside: avoid; }
`;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function ResumeDocument() {
  const issuers = Array.from(new Set(certifications.map((c) => c.issuer)));
  const linkedinLabel = profile.links.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  return (
    <div className="doc">
      <style>{css}</style>
      <header>
        <h1>{profile.fullName.toUpperCase()}</h1>
        <p className="role">{profile.role} · AI-Driven Engineering Leader · Cloud & Scalable Systems</p>
        <p className="contact">
          <span>{profile.location}</span>
          <span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </span>
          <span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </span>
          <span>
            <a href={profile.links.linkedin}>{linkedinLabel}</a>
          </span>
        </p>
      </header>

      <Section title="Summary">
        <p className="summary">{profile.resumeSummary}</p>
        <div className="stats">
          {profile.resumeHighlights.map((h) => (
            <div key={h.label} className="stat">
              <b>{h.value}</b>
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        {experience.map((job) =>
          job.roles.length === 1 && job.roles[0].points.length === 1 ? (
            <div key={job.company} className="row early">
              <p>
                <b>{job.company}</b> <span className="muted">· {job.place}</span> — {job.roles[0].title}. {job.roles[0].points[0]}
              </p>
              <p className="muted">{job.period}</p>
            </div>
          ) : (
          <div key={job.company} className="job">
            <div className="row">
              <p className="company">
                {job.company} <span className="muted">· {job.place}</span>
              </p>
              <p className="muted">{job.period}</p>
            </div>
            {job.roles.map((r) => (
              <div key={r.title} className="avoid">
                <div className="row">
                  <p className="title">{r.title}</p>
                  <p className="muted">{r.period}</p>
                </div>
                <ul>
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          ),
        )}
      </Section>

      <Section title="Selected Projects">
        {projects.map((p) => (
          <div key={p.id} className="proj">
            <div className="row">
              <p>
                <span className="name">{p.title}</span> — {p.logline}
              </p>
              <p className="muted">{p.year}</p>
            </div>
            <ul>
              {p.build.slice(0, 1).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="stack">
              {p.stack.join(' · ')}
              {p.link ? ` · ${p.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}` : ''}
            </p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <div className="skills">
          {skillCategories.map((c) => (
            <p key={c.id}>
              <b>{c.title}: </b>
              {c.skills.map((s) => s.name).join(', ')}
            </p>
          ))}
        </div>
      </Section>

      <div className="two">
        <Section title="Certifications">
          <ul className="certs">
            {issuers.map((iss) => (
              <li key={iss}>
                <b>{iss}: </b>
                {certifications
                  .filter((c) => c.issuer === iss)
                  .map((c) => c.name)
                  .join('; ')}
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Awards — Successive Digital">
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
              <b>{e.degree}</b> — {e.school}, {e.place} · {e.score}
            </p>
            <p className="muted">{e.period}</p>
          </div>
        ))}
      </Section>
    </div>
  );
}
