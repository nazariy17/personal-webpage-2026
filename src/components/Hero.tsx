import { profile } from '../content';
import './Hero.css';

interface HeroProps {
  paused: boolean;
  reduced: boolean;
  onToggleMotion: () => void;
}

export default function Hero({ paused, reduced, onToggleMotion }: HeroProps) {
  return <section className="hero" id="home" aria-labelledby="hero-heading" onPointerMove={event => {
    if (paused || reduced || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 14}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 10}px`);
  }} onPointerLeave={event => {
    event.currentTarget.style.setProperty('--pointer-x', '0px');
    event.currentTarget.style.setProperty('--pointer-y', '0px');
  }}>
    <div className="hero-scenery" aria-hidden="true" />
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="hero-kicker"><span className="signal-dot" />Nazariy Bohun <span className="kicker-divider">/</span> Senior Software Engineer</p>
        <h1 id="hero-heading">Engineering.<br /><span>With ownership.</span></h1>
        <p className="hero-description">{profile.introduction}</p>
        <div className="hero-actions"><a className="button" href="#work">Explore my work <span aria-hidden="true">↗</span></a><a className="hero-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a></div>
        <div className="hero-signature"><span className="signature-line" />Software. Solutions. Delivery.</div>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-orbit" aria-hidden="true"><span /><span /></div>
        <img src={profile.portraitImage || profile.aboutImage || undefined} alt="Nazariy Bohun" fetchPriority="high" width="720" height="900" />
        <figcaption><span className="portrait-caption-label">An engineering mindset.</span><strong>A wider perspective.</strong><span className="caption-cross" aria-hidden="true">+</span></figcaption>
      </figure>
      <a className="hero-scroll" href="#work"><span aria-hidden="true">↓</span>Scroll to discover</a>
      <button className="motion-control" onClick={onToggleMotion} disabled={reduced} aria-pressed={paused || reduced} aria-label={reduced ? 'Animation reduced by system preference' : paused ? 'Resume animation' : 'Pause animation'}><span aria-hidden="true">{paused || reduced ? '▷' : 'Ⅱ'}</span>{reduced ? 'Reduced motion' : paused ? 'Resume animation' : 'Pause animation'}</button>
    </div>
    <div className="hero-facts"><div className="hero-facts-inner"><p><strong>15<span>+</span></strong><span>Years of engineering<br />& delivery experience</span></p><p><span className="fact-icon" aria-hidden="true">↗</span><span><strong>Germany → Switzerland</strong><span>Open to relocation · Portuguese / EU citizen</span></span></p><p><span className="fact-icon" aria-hidden="true">✳</span><span><strong>Engineering × ownership × AI</strong><span>From the right questions to working software</span></span></p></div></div>
  </section>;
}
