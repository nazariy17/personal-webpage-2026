import type { Achievement } from '../content';

export default function WorkVisual({ index, variant, organisation }: {
  index: number;
  variant: Achievement['visual'];
  organisation: Achievement['organisation'];
}) {
  const visualIndex = { solutions: 0, architecture: 1, enablement: 2, ai: 3 }[variant];
  return <div className={`work-visual work-visual-${visualIndex}`} aria-hidden="true">
    <span className="visual-label">{['Client solution delivery', 'Application architecture', 'Developer experience', 'AI-enabled products'][visualIndex]}</span>
    {variant === 'solutions' ? <div className="delivery-diagram"><div className="diagram-node"><span>01</span><strong>Discover</strong><i>✓</i></div><div className="diagram-connection" /><div className="diagram-node"><span>02</span><strong>Scope</strong><i>✓</i></div><div className="diagram-connection" /><div className="diagram-node"><span>03</span><strong>Deliver</strong><i>↗</i></div></div>
    : variant === 'architecture' ? <div className="state-diagram"><svg viewBox="0 0 360 160" fill="none"><path d="M45 40H100L140 80M45 120H100L140 80M315 40H260L220 80M315 120H260L220 80" stroke="currentColor" strokeWidth="1.5" /><circle cx="45" cy="40" r="8" /><circle cx="45" cy="120" r="8" /><circle cx="315" cy="40" r="8" /><circle cx="315" cy="120" r="8" /></svg><span>Clearer<br /><strong>state.</strong></span></div>
    : variant === 'enablement' ? <div className="toolkit-diagram">{['Vue 3', 'Actions', 'Access', 'Docs'].map((item, i) => <div key={item}><span>{['⌘', '↗', '⊞', '≡'][i]}</span>{item}</div>)}</div>
    : <div className="conversation-diagram"><span className="conversation-symbol">✳</span><div><span /><span /><span /></div><p>Component comparison, in conversation.</p></div>}
    <span className="visual-corner">0{index + 1} / {organisation === 'Softrino' ? 'SOFTRINO' : 'MBTI'}</span>
  </div>;
}
