import { profile } from '../content';
import ContactAction from './ContactAction';

export default function Contact() {
  return <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
    <div className="contact-grid">
      <div><p className="eyebrow">06 / Get in touch</p><h2 id="contact-heading">Good software starts<br />with a conversation.</h2></div>
      <div className="contact-details">
        <p>I’m interested in senior engineering, technical product and solution ownership, and platform roles where hands-on technical depth and responsibility for delivery matter. I bring enterprise engineering experience and a founder’s experience of discovering client needs, shaping solutions and coordinating delivery.</p>
        <p>Based in Germany, with relocation to German-speaking Switzerland planned for the start of a suitable role. Portuguese / EU citizen.</p>
        <div className="contact-actions"><ContactAction kind="email" /><ContactAction kind="linkedin" /></div>
        {profile.email && <a className="contact-address" href={`mailto:${profile.email}`}>{profile.email}</a>}
      </div>
    </div>
  </section>;
}
