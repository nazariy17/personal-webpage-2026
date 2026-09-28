import { profile } from '../content';
import { Reveal } from './Reveal';
import ContactAction from './ContactAction';

export default function Contact() {
  const missing = [!profile.email && 'Email', !profile.linkedin && 'LinkedIn'].filter(Boolean);
  return <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
    <Reveal className="contact-grid">
      <div><p className="eyebrow">05 / CONTACT</p><h2 id="contact-heading">LET’S TALK.</h2></div>
      <div className="contact-details">
        <p>My primary focus is Technical Product Owner roles for software and platforms. I’m also open to senior software engineering and technical leadership opportunities, particularly where I can grow into applied AI, LLM applications and AI enablement.</p>
        <p>Portuguese / EU citizen, based in Germany and open to relocation to German-speaking Switzerland.</p>
        <div className="contact-actions"><ContactAction kind="email" /><ContactAction kind="linkedin" /></div>
        {missing.length > 0 && <p className="contact-pending">{missing.join(' and ')} details coming soon.</p>}
      </div>
    </Reveal>
  </section>;
}
