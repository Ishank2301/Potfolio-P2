import { GraduationCap, MapPin, Trophy } from "lucide-react";
import { achievements, profile } from "../data/profile";

function About() {
  return (
    <section className="section-grid" id="about" aria-labelledby="about-title">
      <div>
        <p className="eyebrow">About</p>
        <h2 id="about-title">Engineer for agentic products and production AI.</h2>
      </div>
      <div className="about-stack">
        <p className="section-copy">{profile.summary}</p>
        <div className="timeline-strip">
          <span>
            <MapPin size={17} /> {profile.location}
          </span>
          <span>
            <GraduationCap size={17} /> B.Tech Software Engineering
          </span>
          <span>
            <Trophy size={17} /> National hackathon top 10
          </span>
        </div>
        <div className="achievement-list">
          {achievements.map((item) => (
            <article key={item}>
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
