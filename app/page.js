import { profile } from "../data/profile";

export default function HomePage() {
  return (
    <>
      <header>
        <strong>{profile.name}</strong>
        <nav aria-label="Primary navigation">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero">
          <h1>{profile.name}</h1>
          <p className="meta">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
          <div className="links-row">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.links.email}>Email</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <h2>About</h2>
          {profile.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2>Experience</h2>
          <div className="stack-list">
            {profile.experience.map((item) => (
              <article key={item.company} className="card">
                <div className="card-header">
                  <h3>
                    {item.role} ·{" "}
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.company}
                    </a>
                  </h3>
                  <span className="meta">{item.period}</span>
                </div>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>Projects</h2>
          <div className="stack-list">
            {profile.projects.map((project) => (
              <article key={project.title} className="card">
                <div className="card-header">
                  <h3>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
                </div>
                <p>{project.description}</p>
                <ul className="tag-list">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Core Fundamentals</h2>
          <ul className="tag-list">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact</h2>
          <p>
            Want to talk about engineering, design, or a project? Reach out at{" "}
            <a href={profile.links.email}>{profile.email}</a> or connect on{" "}
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>

      <footer>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with semantic HTML &amp; core CSS on Next.js</span>
      </footer>
    </>
  );
}
