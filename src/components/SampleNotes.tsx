import { useState } from 'react';
import Icon from './Icon';
import { sample } from '../content';

type Tab = 'Summary' | 'Transcript' | 'Highlights';
const tabs: Tab[] = ['Summary', 'Transcript', 'Highlights'];

export default function SampleNotes() {
  const [tab, setTab] = useState<Tab>('Summary');

  return (
    <section className="section section-tint" id="sample-notes" aria-labelledby="notes-title">
      <div className="section-head">
        <p className="section-eyebrow">SAMPLE NOTES</p>
        <h2 id="notes-title">
          Turn conversations
          <br />
          into useful notes.
        </h2>
        <p className="section-lede">
          A clear summary with key takeaways, evidence, open questions and next steps for each candidate. Try the tabs
          below — everything shown is invented sample data.
        </p>
      </div>

      <div className="notes-window">
        <div className="notes-top">
          <div className="window-dots">
            <i /> <i /> <i />
          </div>
          <strong>{sample.candidate}</strong>
          <span className="sample-badge">Sample</span>
        </div>

        <div className="tab-bar" role="tablist" aria-label="Sample note views">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              id={`tab-${t}`}
              aria-selected={tab === t}
              aria-controls={`panel-${t}`}
              className={tab === t ? 'is-active' : ''}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="notes-body" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
          {tab === 'Summary' && (
            <div className="summary-grid">
              <div className="summary-card">
                <h3>Candidate summary</h3>
                <p className="who">
                  <span className="avatar big">JL</span>
                  <span>
                    <strong>{sample.candidate}</strong>
                    <small>
                      {sample.role} · {sample.stage}
                    </small>
                  </span>
                </p>

                <div className="summary-section">
                  <span className="dot dot-green">
                    <Icon name="check" size={16} />
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
                <div className="summary-section">
                  <span className="dot dot-amber">
                    <Icon name="alert" size={16} />
                  </span>
                  <div>
                    <h4>Areas to explore</h4>
                    <ul>
                      {sample.explore.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="summary-section">
                  <span className="dot dot-green">
                    <Icon name="arrow" size={16} />
                  </span>
                  <div>
                    <h4>Next steps</h4>
                    <ul>
                      {sample.nextSteps.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <aside className="summary-side">
                <h3>Skills discussed</h3>
                <div className="chip-row">
                  {sample.skills.map((s) => (
                    <span className="chip chip-light" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </aside>
            </div>
          )}

          {tab === 'Transcript' && (
            <ul className="transcript">
              {sample.transcript.map((l) => (
                <li key={l.time} className={l.highlight ? 'is-highlight' : ''}>
                  <span className={`avatar big ${l.role}`}>{l.initials}</span>
                  <div>
                    <p className="line-meta">
                      <strong>{l.who}</strong> <time>{l.time}</time>
                    </p>
                    <p className="line-text">{l.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {tab === 'Highlights' && (
            <ul className="highlight-list">
              {sample.highlights.map((h) => (
                <li key={h.time}>
                  <span className="chip chip-light">{h.tag}</span>
                  <blockquote>{h.quote}</blockquote>
                  <time>{h.time} in transcript</time>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
