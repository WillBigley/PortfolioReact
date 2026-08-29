import { skillGroups } from "../data/portfolio";

export default function Skills(): JSX.Element {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Technical skills</p>
          <h2>Technologies and capabilities</h2>
          <p>
            Skills developed through industry work, university projects and
            ongoing personal learning.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
