import Icon from './Icon';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-dot" /> AI NOTE-TAKING FOR RECRUITERS
        </p>
        <h1 id="hero-title">
          Stay in the conversation.
          <br />
          <em>Leave with the notes.</em>
        </h1>
        <p className="hero-description">
          Be present with every candidate. Abrish turns interview conversations into clear, structured notes you can
          revisit after the call.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#offer">
            Tell us what you think <Icon name="arrow" size={16} />
          </a>
          <a className="button button-secondary" href="#sample-notes">
            See sample notes
          </a>
        </div>
        <p className="hero-reassurance">
          <span className="reassurance-check">
            <Icon name="check" size={12} />
          </span>
          Early concept — shaped with recruiters, starting now
        </p>
      </div>

      <div className="hero-visual-wrap">
        <HeroVisual />
      </div>
    </section>
  );
}
