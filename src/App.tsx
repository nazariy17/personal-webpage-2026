import { useEffect, useState } from 'react';
import { profile, personal, skills, experience, projects } from './content';
import type { Project } from './content';
import Hero from './components/Hero';
import ProjectDialog from './components/ProjectDialog';
import { Reveal } from './components/Reveal';
import { useReducedMotion } from './hooks/useReducedMotion';
import './content-sections.css';
function Intro({ reduced }: { reduced: boolean }) {
  const [done, setDone] = useState(reduced);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (reduced) { setDone(true); return; }
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => { const value = Math.min(100, Math.round((now - start) / 9)); setProgress(value); if (value < 100) frame = requestAnimationFrame(tick); else setDone(true); };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduced]);
  return <div className={`loader ${done ? 'done' : ''}`} aria-hidden="true"><span>PERSONAL PORTFOLIO</span><div><strong>{profile.name.toUpperCase()}</strong><p>{profile.role.toUpperCase()}</p><b>{progress}%</b></div><span>WELCOME</span></div>;
}
function Navigation() {
  return <header className="site-header"><a className="brand" href="#home">{profile.name}<span className="brand-period">.</span></a><nav aria-label="Main navigation">{['About', 'Experience', 'Skills', 'Projects'].map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav><a className="contact-link" href="#contact">Get in touch <span>↗</span></a></header>;
}
function About() {
  return <section className="about section" id="about"><Reveal className={`about-card ${(profile.aboutImage || profile.portraitImage) ? 'about-card-with-photo' : ''}`}><span className="small-label">ENGINEERING / ENTREPRENEURSHIP</span>{(profile.aboutImage || profile.portraitImage) ? <img className="about-portrait" src={profile.aboutImage || profile.portraitImage || undefined} loading="lazy" alt={`Portrait of ${profile.name}`} /> : <div className="card-monogram" aria-hidden="true">N.</div>}<div className="card-caption"><strong>{profile.name}</strong><span>Engineer & founder</span></div></Reveal><Reveal className="about-copy"><p className="eyebrow">01 / INTRODUCTION</p><h2>Engineering, product,<br/><span>and perspective.</span></h2>{profile.bio.map(text => <p key={text}>{text}</p>)}<div className="disciplines">{[['Full-stack', 'Web & services'], ['Mobile', 'iOS development'], ['Founder', 'Business & delivery']].map(([title, description]) => <div key={title}><strong>{title}</strong><span>{description}</span></div>)}</div></Reveal></section>;
}
function BeyondEngineering() {
  return <section className="section beyond" aria-labelledby="beyond-heading">
    <Reveal className="beyond-introduction"><div className="section-heading"><p className="eyebrow">A PERSONAL PERSPECTIVE</p><h2 id="beyond-heading">Beyond engineering.</h2></div><div className="beyond-copy"><p>{personal.background}</p><p>{personal.everyday}</p></div></Reveal>
    <Reveal className="interest-grid">{personal.interests.map(interest => <article key={interest.title}><h3>{interest.title}</h3><p>{interest.description}</p></article>)}</Reveal>
  </section>;
}
function Experience() {
  return <section className="section experience" id="experience"><Reveal className="section-heading"><p className="eyebrow">02 / EXPERIENCE</p><h2>From enterprise systems<br/><span>to entrepreneurial thinking.</span></h2></Reveal><div className="experience-list">{experience.map((item, i) => <Reveal key={item.company}><article><span className="number">0{i + 1}</span><div><h3>{item.company}</h3><p>{item.area}</p></div><p>{item.description}</p></article></Reveal>)}</div></section>;
}
function Skills() {
  return <section className="section skills" id="skills"><Reveal className="section-heading"><p className="eyebrow">03 / TECHNICAL TOOLKIT</p><h2>Across the stack.</h2><p>Interfaces, services, and the systems that connect them.</p></Reveal><Reveal className="skill-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</Reveal></section>;
}
function Projects({ onSelect }: { onSelect: (project: Project) => void }) {
  return <section className="section projects" id="projects"><Reveal className="section-heading"><p className="eyebrow">04 / SELECTED WORK</p><h2>Projects & perspectives.</h2><p>Two active projects, bringing together engineering, AI, and aviation.</p></Reveal><div className="project-grid project-grid-pair">{projects.map((project, i) => <Reveal key={project.id}><button className="project-card" onClick={() => onSelect(project)}><span className="project-top">0{project.id} / {project.category.toUpperCase()} <span>↗</span></span><div className={`project-art art-${['one', 'two', 'three'][i]}`} aria-hidden="true"><span>0{project.id}</span></div><h3>{project.title}</h3><p>{project.summary}</p><span className="project-bottom">{project.status.toUpperCase()} <span>+</span></span></button></Reveal>)}</div></section>;
}
function Footer() {
  return <footer id="contact"><Reveal className="footer-top"><div><p className="eyebrow">05 / CONTACT</p><h2>Let’s build<br/>something that matters.</h2></div><div className="contact-placeholder contact-links">{profile.email && <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} ↗</a>}{profile.linkedin && <a className="contact-linkedin" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a>}{!profile.email && !profile.linkedin && <><span>CONTACT</span><p>Contact details coming soon.</p></>}</div><a href="#home" className="back-top" aria-label="Back to top">↑</a></Reveal><div className="footer-name" aria-hidden="true">{profile.name.toUpperCase()}</div><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.role.toUpperCase()}</span><a href="#home">BACK TO TOP ↑</a></div></footer>;
}
export default function App() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  return <div className={`portfolio ${reduced || paused ? 'motion-paused' : 'js-motion'}`}><Intro reduced={reduced}/><a className="skip" href="#about">Skip to content</a><Navigation/><main><Hero reduced={reduced} paused={paused} setPaused={setPaused}/><About/><BeyondEngineering/><Experience/><Skills/><Projects onSelect={setProject}/><Footer/></main><ProjectDialog project={project} onClose={() => setProject(null)}/></div>;
}

