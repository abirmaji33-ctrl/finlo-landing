import Icon from './Icon';
import { images, sample } from '../content';

export default function HeroVisual() {
  return (
    <figure className="hero-visual" style={{ ['--scenery' as string]: `url(${images.heroScenery})` }}>
      <div className="app-window" role="img" aria-label="Illustration of an interview notes workspace with sample data">
        <aside className="app-sidebar" aria-hidden="true">
          <div className="window-dots">
            <i /> <i /> <i />
          </div>
          <ul className="side-nav">
            <li className="is-active">
              <Icon name="chat" size={16} /> Transcript
            </li>
            <li>
              <Icon name="doc" size={16} /> Notes
            </li>
            <li>
              <Icon name="star" size={16} /> Highlights
            </li>
          </ul>
          <p className="side-label">Recent interviews</p>
          <ul className="recent-list">
            {sample.recent.map((r, i) => (
              <li key={r.name} className={i === 0 ? 'is-active' : ''}>
                <img className="avatar" src={r.photo} alt="" width={32} height={32} />
                <span>
                  <strong>{r.name}</strong>
                  <small>{r.meta}</small>
                </span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="app-main" aria-hidden="true">
          <div className="search-pill">
            <Icon name="search" size={15} /> Search transcript
          </div>
          <h3>Interview with {sample.candidate}</h3>
          <div className="chip-row">
            <span className="chip">{sample.role}</span>
            <span className="chip">{sample.stage}</span>
          </div>
          <div className="tab-row">
            <span className="is-active">Notes</span>
            <span>Transcript</span>
            <span>Summary</span>
          </div>
          <div className="note-block">
            <span className="note-icon">
              <Icon name="check" size={14} />
            </span>
            <div>
              <h4>Key takeaways</h4>
              <ul>
                {sample.takeaways.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="chip-row skills">
            {sample.skills.slice(0, 3).map((s) => (
              <span className="chip chip-light" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="call-window" aria-hidden="true">
        <div className="call-tiles">
          <img className="tile tile-a" src={images.faces.main} alt="" />
          <img className="tile tile-b" src={images.faces.left} alt="" />
          <img className="tile tile-c" src={images.faces.right} alt="" />
        </div>
        <div className="call-controls">
          <span>
            <Icon name="mic" size={17} />
          </span>
          <span>
            <Icon name="video" size={17} />
          </span>
          <span className="hangup">
            <Icon name="hangup" size={17} />
          </span>
        </div>
      </div>

      <div className="record-pill" aria-hidden="true">
        <span className="rec-dot" />
        <span className="rec-time">00:14</span>
        <span className="waveform">
          <i /> <i /> <i /> <i /> <i /> <i /> <i /> <i /> <i />
        </span>
        <span className="rec-stop">
          <Icon name="stop" size={14} />
        </span>
      </div>

      <figcaption className="visual-caption">Concept preview · sample data, not a live product</figcaption>
    </figure>
  );
}
