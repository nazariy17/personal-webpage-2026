import { profile } from '../content';
import './Hero.css';

export default function Hero() {
  return <section className="hero section" id="home" aria-labelledby="hero-heading">
    <div className="hero-copy">
      <p className="eyebrow">Senior Software Engineer / Former co-founder</p>
      <h1 id="hero-heading">From requirements<br />to reliable<br /><span>software.</span></h1>
      <p className="hero-description">{profile.introduction}</p>
      <div className="hero-actions"><a className="button" href="#work">View selected work <span aria-hidden="true">↘</span></a><a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div>
    </div>
    <figure className="hero-portrait">
      <div className="portrait-frame"><img src={profile.aboutImage || profile.portraitImage || undefined} alt="Nazariy Bohun" fetchPriority="high" width="720" height="900" /></div>
      <figcaption><span>{profile.name}</span><span>Engineering with perspective.</span></figcaption>
    </figure>
    <div className="hero-facts"><p><strong>15+ years</strong><span>Building & delivering software</span></p><p><strong>Germany → Switzerland</strong><span>Open to relocation · Portuguese / EU citizen</span></p><p><strong>Technical solutions & delivery</strong><span>Engineering judgement, from scope to release</span></p></div>
  </section>;
}
