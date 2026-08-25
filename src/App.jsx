import {
  profile,
  summary,
  expertise,
  skills,
  domains,
  experience,
  education,
  certifications,
  awards,
} from './data/resume'
import './App.css'

const nav = [
  { href: '#summary', label: 'Summary' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#domains', label: 'Domains' },
  { href: '#education', label: 'Education' },
]

function Icon({ id }) {
  return (
    <svg className="icon" role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`}></use>
    </svg>
  )
}

function App() {
  return (
    <>
      <header id="site-header">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero">
        <p className="eyebrow">{profile.title}</p>
        <h1>{profile.name}</h1>
        <ul className="contact-row">
          <li>
            <Icon id="location-icon" />
            {profile.location}
          </li>
          <li>
            <Icon id="phone-icon" />
            {profile.phones.join(' / ')}
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>
              <Icon id="mail-icon" />
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.website.href} target="_blank" rel="noreferrer">
              <Icon id="globe-icon" />
              {profile.website.label}
            </a>
          </li>
          <li>
            <a href={profile.linkedin.href} target="_blank" rel="noreferrer">
              <Icon id="linkedin-icon" />
              LinkedIn
            </a>
          </li>
        </ul>
      </section>

      <section id="summary" className="section">
        <h2>Executive Summary</h2>
        <p className="summary-text">{summary}</p>
      </section>

      <section id="expertise" className="section">
        <h2>Architecture Expertise</h2>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Professional Experience</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company + job.period}>
              <div className="timeline-head">
                <h3>{job.company}</h3>
                <span className="period">{job.period}</span>
              </div>
              <p className="role">
                {job.role} · {job.location}
              </p>
              {job.project && <p className="project">{job.project}</p>}
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="domains" className="section">
        <h2>Domain Expertise</h2>
        <div className="domain-list">
          {domains.map((domain) => (
            <div className="domain-row" key={domain.domain}>
              <div className="domain-head">
                <h3>{domain.domain}</h3>
                <span className="years">{domain.years}</span>
              </div>
              <p>{domain.skills}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <h2>Education & Certifications</h2>
        <div className="edu-grid">
          <div>
            <h3>Education</h3>
            <ul className="plain-list">
              {education.map((item) => (
                <li key={item.degree}>
                  <strong>{item.degree}</strong>
                  <span>
                    {item.school} · {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Certifications</h3>
            <ul className="plain-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Awards</h3>
            <ul className="plain-list">
              {awards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer id="site-footer">
        <p>
          {profile.name} · {profile.email} · {profile.phones[0]}
        </p>
      </footer>
    </>
  )
}

export default App
