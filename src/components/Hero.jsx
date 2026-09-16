import { useEffect, useRef, useState } from 'react';
import { profile } from '../content';
const headlines = [['SOFTWARE', 'ENGINEER.'], ['FULL-STACK', 'DEVELOPER.'], ['FOUNDER.', 'BUILDER.']];
export default function Hero({ reduced, paused, setPaused }) {
  const [slide, setSlide] = useState(0);
  const video = useRef(null);
  const stopped = reduced || paused;
  useEffect(() => {
    if (stopped) return;
    const timer = setInterval(() => { if (!document.hidden) setSlide(s => (s + 1) % headlines.length); }, 4200);
    return () => clearInterval(timer);
  }, [stopped]);
  useEffect(() => { if (video.current) { if(stopped) video.current.pause(); else video.current.play().catch(() => {}); } }, [stopped]);
  return <section className="hero" id="home" onPointerMove={event => {
    if(stopped || event.pointerType === 'touch') return;
    const r = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${(event.clientX - r.left - r.width / 2) * .035}px`);
    event.currentTarget.style.setProperty('--my', `${(event.clientY - r.top - r.height / 2) * .035}px`);
  }}>
    <div className="spotlight" />
    <div className="portrait-stage" aria-hidden="true"><div className="portrait-placeholder" style={{ '--turn': `${[-7, 8, 0][slide]}deg` }}>
      {profile.portraitVideo ? <video ref={video} src={profile.portraitVideo} poster={profile.portraitImage || undefined} muted loop playsInline /> : profile.portraitImage ? <img src={profile.portraitImage} alt="" /> : <span className="portrait-initial">N</span>}
    </div></div>
    <div className="hero-title"><p className="eyebrow">{profile.name.toUpperCase()} / ENGINEER & FOUNDER</p><h1 aria-label="Software engineer, full-stack developer, founder and builder"><span key={slide} className="headline" aria-hidden="true">{headlines[slide].map(line => <span key={line}>{line}</span>)}</span></h1></div>
    <div className="hero-description"><span className="description-rule"/><p>{profile.introduction}</p><span className="hero-specialism">ENTERPRISE · WEB · MOBILE</span></div>
    <a className="scroll-cue" href="#about"><span>↓</span> DISCOVER MY BACKGROUND</a>
    <div className="hero-actions"><a className="button" href="#projects">Explore work <span>↗</span></a><button className="outline" onClick={() => setPaused(!paused)} disabled={reduced} aria-pressed={stopped}>{stopped ? 'Motion paused' : 'Pause motion'}</button></div>
    <div className="hero-index"><span>{String(slide + 1).padStart(2, '0')}</span><i />03</div>
  </section>;
}
