import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

const links = ["home", "about", "skills", "projects", "contact"];

function Navigation() {
  return (
    <header className="nav-shell">
      <a className="brand-mark" href="#home" aria-label="Ishank Mishra home">
        IM
      </a>
      <nav aria-label="Portfolio sections">
        {links.map((link) => (
          <a key={link} href={`#${link}`}>
            {link}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <a href={profile.links.github} aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href={profile.links.linkedin} aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </header>
  );
}

export default Navigation;
