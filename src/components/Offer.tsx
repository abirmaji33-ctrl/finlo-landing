import Icon from './Icon';
import { CONTACT_EMAIL, PRICE, feedbackQuestions } from '../content';

function mailto(subject: string) {
  const body = encodeURIComponent('Hi, here is my answer to your question about Abrish AI.\n\nA bit more detail (optional):\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
}

export default function Offer() {
  return (
    <section className="section offer" id="offer" aria-labelledby="offer-title">
      <div className="offer-card">
        <div className="offer-copy">
          <p className="section-eyebrow">EARLY ACCESS</p>
          <h2 id="offer-title">Would this help you run better interviews?</h2>
          <p className="section-lede">
            We are building Abrish with a small group of recruiters. If you join, you get the first month free. After
            that the plan is <strong className="price">{PRICE}</strong> per month — and we want to know whether that
            feels fair.
          </p>
          <ul className="offer-list">
            <li>
              <Icon name="check" size={16} /> First month free
            </li>
            <li>
              <Icon name="check" size={16} /> Direct line to the founder
            </li>
            <li>
              <Icon name="check" size={16} /> Your feedback decides what gets built first
            </li>
          </ul>
        </div>

        <div className="offer-ask">
          <h3>Would you try it?</h3>
          <p>Pick one — it opens an email so you can add details.</p>
          <div className="ask-buttons">
            {feedbackQuestions.map((q) => (
              <a key={q.id} className="button button-answer" href={mailto(q.subject)}>
                {q.label}
              </a>
            ))}
          </div>
          <p className="ask-note">
            {CONTACT_EMAIL ? (
              <>Or write to {CONTACT_EMAIL}.</>
            ) : (
              <span className="placeholder-note">[your email goes here — set CONTACT_EMAIL in src/content.ts]</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
