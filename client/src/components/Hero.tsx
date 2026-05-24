import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { profile, stats } from "../data/profile";

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="portfolio-title">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          2026 on-demand AI systems
        </motion.p>
        <motion.h1 id="portfolio-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          {profile.name}
        </motion.h1>
        <motion.p className="intro-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          {profile.headline}
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <a className="primary-action" href="#projects">
            View systems <ArrowRight size={18} />
          </a>
          <a className="secondary-action" href={`mailto:${profile.email}`}>
            Build with me
          </a>
        </motion.div>
      </div>
      <motion.aside
        className="signal-board"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ rotateX: 3, rotateY: -4 }}
      >
        <div className="signal-header">
          <Sparkles size={18} />
          <span>Live capability map</span>
        </div>
        <div className="signal-grid">
          {stats.map((stat) => (
            <div className="stat-tile" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <p>
          Agentic workflows, retrieval systems, fine-tuning, and production APIs
          shaped into usable product experiences.
        </p>
      </motion.aside>
    </section>
  );
}

export default Hero;
