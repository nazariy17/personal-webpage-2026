import { profile } from '../content';
import { Reveal } from './Reveal';
import ContactAction from './ContactAction';

export default function Contact() {
  const missing = [!profile.email && 'Email', !profile.linkedin && 'LinkedIn'].filter(Boolean);
  return <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
    <Reveal className="contact-grid">
      <div><p className="eyebrow">05 / CONTACT</p><h2 id="contact-heading">LET’S TALK.</h2></div>
      <div className="contact-details">
        <p>Open to conversations about software engineering, technical leadership, product and AI-enabled engineering.</p>
        <div className="contact-actions"><ContactAction kind="email" /><ContactAction kind="linkedin" /></div>
        {missing.length > 0 && <p className="contact-pending">{missing.join(' and ')} details coming soon.</p>}
      </div>
    </Reveal>
  </section>;
}
