import { useEffect, useRef, useState } from 'react';
import { profile } from '../content';
import ContactAction from './ContactAction';
import type { CSSProperties } from 'react';

interface HeroProps {
  reduced: boolean;
  paused: boolean;
  setPaused: (paused: boolean) => void;
}

type PortraitStyle = CSSProperties & { '--turn': string };
import './Hero.css';

const headlines = [
  ['SOFTWARE', 'ENGINEERING.'],
  ['ARCHITECTURE.'],
  ['TECHNICAL', 'LEADERSHIP.'],
];
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smoothstep = (value: number) => value * value * (3 - 2 * value);

// Each half of the shortened scroll range transitions to the next headline.
function headlinePosition(progress: number) {
  const position = progress * 2;
  return position < 1 ? smoothstep(position) : 1 + smoothstep(position - 1);
}

export default function Hero({ reduced, paused, setPaused }: HeroProps) {
  const sequence = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const requestedTime = useRef(0);
  const [progress, setProgress] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const stopped = reduced || paused;

  useEffect(() => {
    if (reduced) { setProgress(0); return; }
    if (paused || !sequence.current) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!sequence.current || !stage.current) return;
      const bounds = sequence.current.getBoundingClientRect();
      const travel = bounds.height - stage.current.offsetHeight;
      setProgress(travel > 0 ? clamp(-bounds.top / travel) : 0);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(sequence.current);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [paused, reduced]);

  const seekPortrait = () => {
    const media = video.current;
    if (!media || !Number.isFinite(media.duration) || media.duration <= 0 || media.seeking) return;
    // Avoid duration itself, where browsers may render a blank final frame.
    const target = requestedTime.current * Math.max(0, media.duration - 0.04);
    if (Math.abs(media.currentTime - target) > 0.025) media.currentTime = target;
  };
  useEffect(() => {
    requestedTime.current = progress;
    seekPortrait();
  }, [progress]);

  const position = headlinePosition(progress);
  const slide = Math.round(position);
  const hasVideo = Boolean(profile.portraitVideo) && !videoFailed;
  // A video contains the actual head turn. Flat images get only a subtle tilt.
  const turn = hasVideo ? 0 : Math.sin(progress * Math.PI * 2) * (profile.portraitImage ? 12 : 38);

  const portraitStyle: PortraitStyle = { '--turn': `${turn}deg` };

  return (
    <section ref={sequence} className={`hero-sequence ${reduced ? 'hero-sequence-static' : ''}`} id="home" aria-label="Introduction">
      <div ref={stage} className="hero hero-pinned" data-progress={progress.toFixed(3)} onPointerMove={event => {
        if (stopped || event.pointerType === 'touch') return;
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty('--mx', `${(event.clientX - bounds.left - bounds.width / 2) * 0.035}px`);
        event.currentTarget.style.setProperty('--my', `${(event.clientY - bounds.top - bounds.height / 2) * 0.035}px`);
      }}>
        <div className="hero-alpine-background" aria-hidden="true" />
        <div className="spotlight" />
        <div className={`portrait-stage ${profile.portraitImage ? 'portrait-stage-with-photo' : ''}`} aria-hidden="true">
          <div className="portrait-placeholder" style={portraitStyle}>
            {hasVideo ? (
              <video ref={video} src={profile.portraitVideo || undefined} poster={profile.portraitImage || undefined}
                muted playsInline preload="auto" onLoadedMetadata={seekPortrait} onLoadedData={seekPortrait}
                onSeeked={seekPortrait} onError={() => setVideoFailed(true)} />
            ) : profile.portraitImage ? <img src={profile.portraitImage} alt="" fetchPriority="high" decoding="async" /> : <span className="portrait-initial">N</span>}
          </div>
        </div>
        <div className="hero-title">
          <p className="eyebrow">NAZARIY BOHUN / BUSINESS · ENGINEERING · DELIVERY</p>
          <h1 className="scroll-headlines" aria-label={profile.role}>
            {headlines.map((lines, index) => {
              const distance = index - position;
              const opacity = clamp(1 - Math.abs(distance));
              return <span key={index} className="headline scroll-headline" aria-hidden="true" style={{
                opacity, visibility: opacity === 0 ? 'hidden' : 'visible',
                transform: `translateY(${distance * 28}px)`, filter: `blur(${Math.abs(distance) * 5}px)`,
              }}>{lines.map(line => <span key={line}>{line}</span>)}</span>;
            })}
          </h1>
        </div>
        <div className="hero-description"><span className="description-rule" /><p>{profile.introduction}</p><span className="hero-specialism">ENTERPRISE · ENTREPRENEURSHIP</span></div>
        <a className="scroll-cue" href="#about"><span>↓</span> {progress < 0.98 && !reduced ? 'SCROLL TO EXPLORE' : 'DISCOVER MY BACKGROUND'}</a>
        <div className="hero-actions"><a className="button" href="#projects">Explore work <span>↗</span></a><ContactAction kind="linkedin" className="outline hero-linkedin" /><button className="hero-motion-control" onClick={() => setPaused(!paused)} disabled={reduced} aria-pressed={stopped}>{reduced ? 'Motion reduced' : paused ? 'Resume motion' : 'Pause motion'}</button></div>
        <div className="hero-index"><span>{String(slide + 1).padStart(2, '0')}</span><i />03</div>
        {!reduced && <div className="hero-scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>}
      </div>
    </section>
  );
}


