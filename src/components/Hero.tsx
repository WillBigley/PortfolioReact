import { personalDetails } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Software developer · Auckland</p>

          <h1>
            Hi, I’m <span>{personalDetails.name}</span>.
          </h1>

          <p className="hero-summary">
            Computer Science graduate specialising in software and
            cybersecurity. I build user-focused web applications, investigate
            technical problems and enjoy learning modern development tools.
          </p>

          <div className="button-row">
            <a className="button button-primary" href="#projects">
              View my work
            </a>

            <a
              className="button button-secondary"
              href={personalDetails.cvUrl}
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
          </div>

          <div className="text-links" aria-label="Professional links">
            <a href={personalDetails.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href={personalDetails.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href={`mailto:${personalDetails.email}`}>Email</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Availability">
          <div className="initials-card" aria-hidden="true">
            WB
          </div>

          <div className="availability">
            <span className="availability-dot" />
            Open to graduate and junior opportunities
          </div>
        </aside>
      </div>
    </section>
  );
}
