import { images, steps } from '../content';

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works" aria-labelledby="how-title">
      <div className="section-head">
        <p className="section-eyebrow">HOW IT WORKS</p>
        <h2 id="how-title">
          From conversation
          <br />
          to candidate insights.
        </h2>
        <p className="section-lede">Capture the interview, get structured notes, and keep the important details in one place.</p>
      </div>

      <ol className="step-list">
        {steps.map((s) => (
          <li key={s.n}>
            <span className="step-n">{s.n}</span>
            <div>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <figure className="image-card">
        <img
          src={images.howItWorks}
          width={1400}
          height={649}
          loading="lazy"
          alt="Illustration of the three steps: add a candidate and role, record the conversation, then review an interview summary"
        />
        <figcaption>Illustration of the planned flow</figcaption>
      </figure>
    </section>
  );
}
