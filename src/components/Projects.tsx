import { projects } from "../data/portfolio";
import type { Project } from "../types";

function ProjectCard({ project }: { project: Project }) {
  const hasLinks = Boolean(project.repositoryUrl || project.liveUrl);

  return (
    <article
      className={`project-card ${project.featured ? "project-featured" : ""}`}
    >
      <div className="project-topline">
        <p className="project-type">{project.type}</p>
        <span aria-hidden="true">↗</span>
      </div>

      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <ul className="project-highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="tag-list">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      {hasLinks && (
        <div className="project-links">
          {project.repositoryUrl && (
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
              View code
            </a>
          )}

          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live site
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section section-muted" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
          <p>
            Replace the placeholder links with your actual repositories and
            only publish work you have permission to share.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
