import { ExternalLink } from "lucide-react";
import { projects } from "../data/profile";

function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2 id="projects-title">Production-minded AI builds.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p>{project.type}</p>
              <h3>{project.name}</h3>
            </div>
            <p>{project.impact}</p>
            <div className="chip-cloud">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a href={project.href} target="_blank" rel="noreferrer">
              Repository <ExternalLink size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
