import { images } from '../content';

export default function MobileNotes() {
  return (
    <section className="section mobile-section" aria-labelledby="mobile-title">
      <div className="mobile-copy">
        <p className="section-eyebrow">ANYTIME, ANYWHERE</p>
        <h2 id="mobile-title">
          Your notes,
          <br />
          where you work.
        </h2>
        <p className="section-lede">
          The idea: open interactive notes on the go, review key moments and share them with your team. This is a
          design concept — mobile access is not built yet.
        </p>
      </div>
      <figure className="phone-card">
        <img
          src={images.mobileNotes}
          width={760}
          height={895}
          loading="lazy"
          alt="Concept illustration of interview notes on a phone, with Summary, Transcript and Highlights tabs"
        />
      </figure>
    </section>
  );
}
