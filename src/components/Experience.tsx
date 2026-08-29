import { timeline } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Experience and education</p>
          <h2>Background</h2>
        </div>

        <div className="experience-layout">
          <article className="experience-card">
            <p className="experience-date">February 2025 – November 2025</p>
            <h3>Web Developer · Shosha R&amp;D Project</h3>
            <p>
              Developed and maintained frontend features for a React and
              Magento e-commerce platform. Worked with TypeScript, JavaScript,
              HTML, CSS, Strapi CMS, GraphQL, Git and Agile practices.
            </p>

            <ul>
              <li>Improved customer-facing functionality and navigation.</li>
              <li>Debugged and maintained a large legacy codebase.</li>
              <li>Conducted testing, optimisation and technical troubleshooting.</li>
              <li>Collaborated with team members and project stakeholders.</li>
            </ul>
          </article>

          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.date}-${item.title}`}>
                <div className="timeline-marker" />
                <p className="timeline-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.organisation}</p>
                {item.description && <p>{item.description}</p>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
