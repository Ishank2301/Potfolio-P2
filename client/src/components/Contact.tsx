import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Let’s build useful intelligence.</h2>
        <p className="section-copy">
          Open to AI engineering, full stack AI product work, research
          implementation, and agentic workflow collaborations.
        </p>
      </div>
      <div className="contact-actions">
        <a href={`mailto:${profile.email}`}>
          <Mail size={18} /> {profile.email}
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          <Github size={18} /> GitHub
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={18} /> LinkedIn
        </a>
        <span>
          <MapPin size={18} /> {profile.location}
        </span>
      </div>
    </section>
  );
}

export default Contact;
