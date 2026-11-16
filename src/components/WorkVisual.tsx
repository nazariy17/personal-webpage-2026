export default function WorkVisual({ index }: { index: number }) {
  return <div className={`work-visual work-visual-${index}`} aria-hidden="true">
    <span className="visual-label">{['Delivery systems', 'Application architecture', 'Developer experience', 'AI-enabled products'][index]}</span>
    {index === 0 ? <div className="delivery-diagram"><div className="diagram-node"><span>01</span><strong>Build</strong><i>✓</i></div><div className="diagram-connection" /><div className="diagram-node"><span>02</span><strong>Release</strong><i>✓</i></div><div className="diagram-connection" /><div className="diagram-node"><span>03</span><strong>Deploy</strong><i>↗</i></div></div>
    : index === 1 ? <div className="state-diagram"><svg viewBox="0 0 360 160" fill="none"><path d="M45 40H100L140 80M45 120H100L140 80M315 40H260L220 80M315 120H260L220 80" stroke="currentColor" strokeWidth="1.5" /><circle cx="45" cy="40" r="8" /><circle cx="45" cy="120" r="8" /><circle cx="315" cy="40" r="8" /><circle cx="315" cy="120" r="8" /></svg><span>Clearer<br /><strong>state.</strong></span></div>
    : index === 2 ? <div className="toolkit-diagram">{['Vue 3', 'Actions', 'Access', 'Docs'].map((item, i) => <div key={item}><span>{['⌘', '↗', '⊞', '≡'][i]}</span>{item}</div>)}</div>
    : <div className="conversation-diagram"><span className="conversation-symbol">✳</span><div><span /><span /><span /></div><p>Complexity, in conversation.</p></div>}
    <span className="visual-corner">0{index + 1} / MBTI</span>
  </div>;
}
