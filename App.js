import './App.css';
import { useState, useEffect } from 'react';
import photo from './photo.jpeg';

const projects = [
  { type: 'Full Stack', name: 'E-Commerce Platform', desc: 'Online store with cart, payment integration, and admin dashboard.', tags: ['React', 'Node.js', 'MongoDB'], link: 'https://github.com/pranjal' },
  { type: 'Backend', name: 'REST API Service', desc: 'Scalable RESTful API with JWT auth and rate limiting.', tags: ['Express', 'PostgreSQL', 'JWT'], link: 'https://github.com/pranjal' },
  { type: 'Frontend', name: 'Task Management App', desc: 'Kanban-style tool with drag-and-drop and real-time updates.', tags: ['React', 'TypeScript', 'Redux'], link: 'https://github.com/pranjal' },
  { type: 'Full Stack', name: 'Blog & CMS', desc: 'Content management system with markdown support and SEO.', tags: ['Next.js', 'MongoDB', 'Tailwind'], link: 'https://github.com/pranjal' },
];

function App() {
     const [text, setText] = useState('');
  const fullText = 'Vishwakarma';
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="portfolio">
      <nav className="nav">
        <div className="nav-logo">PV.</div>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-image">
  <img src={photo} alt="Pranjal Vishwakarma" />
</div>
        <div className="hero-text">
          <div className="hero-tag">Available for work</div>
          <h1>Pranjal<br /><span>{text}</span></h1>
          <p className="hero-sub">Full Stack Developer crafting robust, scalable web applications — from pixel-perfect frontends to rock-solid backends.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View my work →</a>
            <a href="#contact" className="btn-outline">Get in touch</a>
          </div>
        </div>
        <div className="hero-badge-wrap">
          <div className="hero-badge">
            <span className="num">1+</span>
            <span className="label">Years of experience</span>
          </div>
          <div className="hero-badge2">
            <span className="stack-title">STACK</span>
            <span className="stack-list">React · Node.js<br />MongoDB · PostgreSQL</span>
          </div>
        </div>
      </section>

      <div className="skills-row">
        {['React.js','Node.js','TypeScript','MongoDB','PostgreSQL','REST APIs','Docker','Git'].map(s => (
          <div className="skill-pill" key={s}><div className="skill-dot"></div>{s}</div>
        ))}
      </div>

      <section className="section" id="projects">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-type">{p.type}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-wrap">
          <div className="contact-text">
            <h3>Let's build<br />something great.</h3>
            <p>Open to full-time roles, freelance<br />projects, and collaborations.</p>
          </div>
          <div className="contact-links">
            <a className="contact-item" href="mailto:kumarpranjal2348@gmail.com">✉ kumarpranjal2348@gmail.com</a>
            <a className="contact-item" href="https://github.com/pranjal" target="_blank" rel="noreferrer">⌨ github.com/pranjal</a>
            <a className="contact-item" href="https://linkedin.com/in/pranjal" target="_blank" rel="noreferrer">in linkedin.com/in/pranjal</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;