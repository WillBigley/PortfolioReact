import { personalDetails } from "../data/portfolio";

export default function Contact(): JSX.Element {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Let’s build something useful.</h2>
          <p>
            I am interested in graduate and junior opportunities across
            software engineering, web development, integration, cybersecurity,
            cloud and AI-enabled development.
          </p>
        </div>

        <div className="button-row contact-buttons">
          <a
            className="button button-primary"
            href={`mailto:${personalDetails.email}`}
          >
            Email me
          </a>

          <a
            className="button button-secondary"
            href={personalDetails.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
