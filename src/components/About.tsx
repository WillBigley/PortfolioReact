export default function About(): JSX.Element {
  return (
    <section className="section section-muted" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About me</p>
          <h2>Practical software, thoughtful problem-solving.</h2>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <p>
              I completed a Bachelor of Computer Science at Auckland University
              of Technology, majoring in Software and Cybersecurity.
            </p>

            <p>
              My main industry project involved contributing to the
              redevelopment of Shosha’s e-commerce platform. I worked with
              React, TypeScript, JavaScript, Magento, Strapi, GraphQL, Git and
              modern UI/UX practices.
            </p>

            <p>
              I enjoy learning unfamiliar systems, debugging issues, improving
              user experiences and turning requirements into maintainable
              software.
            </p>

            <p>
              I also use AI-assisted development tools such as ChatGPT, GitHub
              Copilot and Claude for research, debugging, documentation and
              implementation support. I review and test generated solutions
              before using them.
            </p>
          </div>

          <div className="fact-grid">
            <article className="fact-card">
              <span>Location</span>
              <strong>Auckland, New Zealand</strong>
            </article>

            <article className="fact-card">
              <span>Qualification</span>
              <strong>Bachelor of Computer Science</strong>
            </article>

            <article className="fact-card">
              <span>Major</span>
              <strong>Software and Cybersecurity</strong>
            </article>

            <article className="fact-card">
              <span>Interests</span>
              <strong>Web, cloud, AI and integration</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
