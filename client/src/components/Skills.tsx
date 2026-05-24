import { BrainCircuit } from "lucide-react";
import { skillGroups } from "../data/profile";

function Skills() {
  return (
    <section className="section-grid" id="skills" aria-labelledby="skills-title">
      <div>
        <p className="eyebrow">Skills</p>
        <h2 id="skills-title">Stack mapped for AI product shipping.</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-header">
              <BrainCircuit size={19} />
              <h3>{group.title}</h3>
            </div>
            <div className="chip-cloud">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
