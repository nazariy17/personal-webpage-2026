import { profile } from '../content';
import './Hero.css';
import MountainScene from './MountainScene';

interface HeroProps {
  reduced: boolean;
}

export default function Hero({ reduced }: HeroProps) {
  return <section className="hero" id="home" aria-labelledby="hero-heading" onPointerMove={event => {
    if (reduced || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--scene-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 33.8}px`);
    event.currentTarget.style.setProperty('--scene-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 20.28}px`);
  }} onPointerLeave={event => {
    event.currentTarget.style.setProperty('--scene-x', '0px');
    event.currentTarget.style.setProperty('--scene-y', '0px');
  }}>
    <div className="hero-scenery-wrap" aria-hidden="true"><div className="hero-scenery"><MountainScene /></div></div>
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="hero-kicker"><span className="signal-dot" />Nazariy Bohun <span className="kicker-divider">/</span> Senior Software Engineer</p>
        <h1 id="hero-heading" aria-label="Engineering. With ownership."><span className="hero-line" aria-hidden="true"><span>Engineering.</span></span><span className="hero-line hero-line-accent" aria-hidden="true"><span>With ownership.</span></span></h1>
        <p className="hero-description">{profile.introduction}</p>
        <div className="hero-actions"><a className="button" href="#work">Explore my work <span aria-hidden="true">↗</span></a><a className="hero-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a></div>
      </div>
      <figure className="hero-portrait">
        <img src={profile.portraitImage || profile.aboutImage || undefined} alt="Nazariy Bohun" fetchPriority="high" width="1024" height="1536" />
      </figure>
    </div>
    <div className="hero-facts"><div className="hero-facts-inner"><p><strong>15<span>+</span></strong><span>Years of engineering<br />& delivery experience</span></p><p><span className="fact-icon destination-flag" aria-hidden="true"><svg viewBox="0 0 32 32" width="24" height="24" focusable="false"><path fill="#e30613" d="M0 0h32v32H0z" /><path fill="#fff" d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z" /></svg></span><span><strong>Germany → Switzerland</strong><span>Relocating for the right role · Portuguese / EU citizen</span></span></p><p><span className="fact-icon" aria-hidden="true">✳</span><span><strong>Engineering × product × entrepreneurship</strong><span>Technical depth, product judgement and founder experience</span></span></p></div></div>
  </section>;
}
