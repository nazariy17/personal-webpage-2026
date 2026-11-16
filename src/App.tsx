import { useEffect, useRef, useState } from 'react';
import { achievements, experience, personal, profile, projects, skills } from './content';
import type { Project } from './content';
import Hero from './components/Hero';
import Contact from './components/Contact';
import ContactAction from './components/ContactAction';
import ProjectDialog from './components/ProjectDialog';
import WorkVisual from './components/WorkVisual';
import { useReducedMotion } from './hooks/useReducedMotion';
import './content-sections.css';
import './contact.css';

const navigation = [
  ['Selected work', 'work'],
  ['Experience', 'experience'],
  ['Capabilities', 'skills'],
  ['Contact', 'contact'],
];

function Navigation() {
  return <header className="site-header"><div className="header-inner">
    <a className="brand" href="#home" aria-label="Nazariy Bohun — home"><span className="brand-mark" aria-hidden="true">N<span>.</span></span><span className="brand-name">Nazariy Bohun<small>Engineering & solutions</small></span></a>
    <nav aria-label="Main navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
    <ContactAction kind="linkedin" className="navigation-linkedin" iconOnly />
  </div></header>;
}

function SelectedWork() {
  return <section className="section selected-work" id="work" aria-labelledby="work-heading">
    <div className="section-heading" data-reveal><p className="eyebrow">01 / Selected work</p><h2 id="work-heading">Ownership,<br /><span>in practice.</span></h2><p>Real engineering challenges. Decisions I shaped. Software I helped move forward at Mercedes-Benz Tech Innovation.</p></div>
    <div className="achievement-grid">{achievements.map((item, index) => <article className="achievement" key={item.title} data-reveal>
      <WorkVisual index={index} />
      <div className="achievement-copy">
      <div className="achievement-top"><span className="item-number">0{index + 1}</span><p>{item.context}</p></div>
      <h3>{item.title}</h3><p className="achievement-scope">{item.scope}</p><p>{item.description}</p>
      <p className="achievement-outcome"><span>Result</span>{item.outcome}</p>
      <ul className="tag-list" aria-label="Technologies and focus">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </div>
    </article>)}</div>
  </section>;
}

function Experience() {
  return <section className="section experience" id="experience" aria-labelledby="experience-heading">
    <div className="section-heading" data-reveal><p className="eyebrow">02 / Experience</p><h2 id="experience-heading">Engineering depth.<br /><span>Delivery perspective.</span></h2></div>
    <div className="experience-list">{experience.map(item => <article key={item.company} data-reveal>
      <div className="experience-employer"><h3>{item.company}</h3><p>{item.area}</p></div>
      <div className="experience-detail"><p>{item.description}</p><ul>{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div>
    </article>)}</div>
  </section>;
}

function AboutAndSkills() {
  return <section className="section capabilities" id="skills" aria-labelledby="skills-heading">
    <div className="section-heading" data-reveal><p className="eyebrow">03 / Capabilities</p><h2 id="skills-heading">The bigger picture.<br /><span>The working detail.</span></h2></div>
    <div className="about-grid"><p className="about-statement">Understand the problem.<br />Define the approach.<br />See it through.</p><div className="about-copy">{profile.bio.map(text => <p key={text}>{text}</p>)}<p className="profile-languages"><strong>Languages</strong>{profile.languages}</p></div></div>
    <div className="skill-groups">{skills.map((group, index) => <article className="skill-group" key={group.title} data-reveal><span className="skill-symbol" aria-hidden="true">{['↗', '⌘', '⊞', '✳'][index]}</span><h3>{group.title}</h3><p>{group.description}</p><ul className="skill-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
  </section>;
}

function Projects({ onSelect }: { onSelect: (project: Project) => void }) {
  return <section className="section projects" id="projects" aria-labelledby="projects-heading">
    <div className="section-heading" data-reveal><p className="eyebrow">04 / Personal projects</p><h2 id="projects-heading">Always building.<br /><span>Always curious.</span></h2><p>Two ongoing projects connecting engineering with personal interests.</p></div>
    <div className="project-grid">{projects.map(project => <article className={`project-card project-card-${project.id}`} key={project.id} data-reveal>
      <div className={`project-visual project-visual-${project.id}`} aria-hidden="true">{project.id === 1 ? <><div className="agent-orbit" /><span className="project-glyph">✳</span><span className="project-visual-note">Context → Reasoning → Action</span></> : <><div className="radar-ring" /><svg viewBox="0 0 64 64" fill="currentColor"><path d="m33 5 5 22 21 13v5l-21-7-1 13 8 6v3l-13-3-13 3v-3l8-6-1-13-21 7v-5l21-13 5-22z" /></svg><span className="project-visual-note">A different view of the sky</span></>}</div>
      <div className="project-copy">
      <div className="project-top"><p>{project.category}</p><span className="status">{project.status}</span></div>
      <h3>{project.title}</h3><p>{project.summary}</p>
      <button className="text-link" onClick={() => onSelect(project)} aria-label={`Read about ${project.title}`}>Project details <span aria-hidden="true">↗</span></button>
      </div>
    </article>)}</div>
  </section>;
}

function Personal() {
  return <section className="section personal" aria-labelledby="personal-heading">
    <div className="personal-intro" data-reveal><div><p className="eyebrow">05 / A personal perspective</p><h2 id="personal-heading">Beyond<br /><span>the screen.</span></h2></div><div><p>{personal.background}</p><p>{personal.everyday}</p></div></div>
    <div className="interest-grid">{personal.interests.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
  </section>;
}

export default function App() {
  const [project, setProject] = useState<Project | null>(null);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elements = root.current?.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!elements) return;
    if (reduced || paused || !('IntersectionObserver' in window)) {
      elements.forEach(element => { element.dataset.visible = 'true'; });
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).dataset.visible = 'true';
        observer.unobserve(entry.target);
      }
    }), { threshold: .08 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [paused, reduced]);
  return <div ref={root} className={`portfolio ${paused || reduced ? 'motion-paused' : 'motion-enabled'}`}><a className="skip" href="#main-content">Skip to content</a><Navigation />
    <main id="main-content" tabIndex={-1}><Hero paused={paused} reduced={reduced} onToggleMotion={() => setPaused(value => !value)} /><SelectedWork /><Experience /><AboutAndSkills /><Projects onSelect={setProject} /><Personal /><Contact /></main>
    <footer className="site-footer"><div><a className="brand" href="#home">{profile.name}<span aria-hidden="true">.</span></a><p>Software. Solutions. Delivery.</p></div><p>© {new Date().getFullYear()} {profile.name}</p><a className="text-link" href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
    <ProjectDialog project={project} onClose={() => setProject(null)} />
  </div>;
}
