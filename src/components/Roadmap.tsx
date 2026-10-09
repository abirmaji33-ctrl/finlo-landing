import { roadmap } from '../content';

export default function Roadmap() {
  return (
    <section className="section" id="roadmap" aria-labelledby="roadmap-title">
      <div className="section-head">
        <p className="section-eyebrow">ROADMAP</p>
        <h2 id="roadmap-title">
          Works with your
          <br />
          recruiting stack. Eventually.
        </h2>
        <p className="section-lede">
          Nothing below is connected yet. This is what we are exploring, and your answers help us decide what to build
          first.
        </p>
      </div>
      <ul className="roadmap-grid">
        {roadmap.map((r) => (
          <li key={r.name}>
            <span className="status-pill">Planned</span>
            <h3>{r.name}</h3>
            <p>{r.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
