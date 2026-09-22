import { profile } from '../content';

type ContactKind = 'email' | 'linkedin';

function ContactIcon({ kind }: { kind: ContactKind }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    {kind === 'email'
      ? <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></g>
      : <g fill="currentColor"><circle cx="5" cy="5" r="1.7" /><path d="M3.5 9h3v11h-3zM10 9h3v1.5c.8-1.2 1.9-1.8 3.3-1.8 2.9 0 4.2 1.9 4.2 5V20h-3v-6c0-1.7-.7-2.6-2-2.6-1.6 0-2.5 1.1-2.5 3V20h-3z" /></g>}
  </svg>;
}

export default function ContactAction({ kind, className = '', iconOnly = false }: {
  kind: ContactKind; className?: string; iconOnly?: boolean;
}) {
  const value = profile[kind];
  const label = kind === 'email' ? 'Email me' : 'LinkedIn';
  const accessibleLabel = kind === 'email' ? 'Email Nazar Bohun' : 'Nazar Bohun on LinkedIn (opens in a new tab)';
  const content = <><ContactIcon kind={kind} />{!iconOnly && <><span>{label}</span><span aria-hidden="true">↗</span></>}</>;
  const classes = 'contact-action ' + className;
  if (!value) return <span className={classes} role="link" aria-disabled="true"
    aria-label={label + ' — coming soon'} title={label + ' — coming soon'}>{content}</span>;
  return <a className={classes} href={kind === 'email' ? 'mailto:' + value : value}
    target={kind === 'linkedin' ? '_blank' : undefined}
    rel={kind === 'linkedin' ? 'noopener noreferrer' : undefined}
    aria-label={accessibleLabel}>{content}</a>;
}
