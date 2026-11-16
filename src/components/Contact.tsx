import { profile } from '../content';
import ContactAction from './ContactAction';

export default function Contact() {
  return <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
    <div className="contact-grid">
      <div><p className="eyebrow">06 / Get in touch</p><h2 id="contact-heading">Good software starts<br />with a conversation.</h2></div>
      <div className="contact-details">
        <p>I’m interested in roles combining software engineering with technical solution, platform and delivery responsibility, including practical AI-enabled development.</p>
        <p>Based in Germany and open to relocation to German-speaking Switzerland. Portuguese / EU citizen.</p>
        <div className="contact-actions"><ContactAction kind="email" /><ContactAction kind="linkedin" /></div>
        {profile.email && <a className="contact-address" href={`mailto:${profile.email}`}>{profile.email}</a>}
      </div>
    </div>
  </section>;
}
