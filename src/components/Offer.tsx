import { FormEvent, useState } from 'react';
import Icon from './Icon';
import { PRICE, feedbackQuestions } from '../content';

// Submissions are collected by Netlify Forms. The matching hidden form lives in index.html.
const FORM_NAME = 'abrish-feedback';

type Status = 'idle' | 'sending' | 'sent' | 'error';

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

// Reads ?ref=brandon (or any tag) from the page link so you can tell where a submission came from.
function readRef() {
  try {
    return (new URLSearchParams(window.location.search).get('ref') ?? '').slice(0, 80);
  } catch {
    return '';
  }
}

export default function Offer() {
  const [choice, setChoice] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': FORM_NAME,
          answer: choice ?? '',
          email: String(fd.get('email') ?? ''),
          linkedin: String(fd.get('linkedin') ?? '').trim().slice(0, 300),
          ref: readRef(),
          message: String(fd.get('message') ?? ''),
          'bot-field': String(fd.get('bot-field') ?? ''),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section offer" id="offer" aria-labelledby="offer-title">
      <div className="offer-card">
        <div className="offer-copy">
          <p className="section-eyebrow">EARLY ACCESS</p>
          <h2 id="offer-title">Would this help you run better interviews?</h2>
          <p className="section-lede">
            We are building Abrish with a small group of recruiters. If you join, you get the first month free. After
            that the plan is <strong className="price">{PRICE}</strong> per user per month — and we want to know
            whether that feels fair.
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

        <div className="offer-ask" aria-live="polite">
          {status === 'sent' ? (
            <div className="ask-thanks">
              <h3>Thank you.</h3>
              <p>Your answer is in. We will get back to you at the email you gave.</p>
            </div>
          ) : choice === null ? (
            <>
              <h3>Would you try it?</h3>
              <p>Pick one, then leave your email so we can reply.</p>
              <div className="ask-buttons">
                {feedbackQuestions.map((q) => (
                  <button key={q.id} type="button" className="button button-answer" onClick={() => setChoice(q.label)}>
                    {q.label}
                  </button>
                ))}
              </div>
              <p className="ask-note">We only use your email to reply about Abrish. No newsletters.</p>
            </>
          ) : (
            <form className="ask-form" name={FORM_NAME} method="POST" onSubmit={onSubmit}>
              <div className="ask-chosen">
                <span>{choice}</span>
                <button type="button" className="link-button" onClick={() => { setChoice(null); setStatus('idle'); }}>
                  Change
                </button>
              </div>
              <p className="hp-field" aria-hidden="true">
                <label>
                  Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              <label>
                Your email
                <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" />
              </label>
              <label>
                LinkedIn profile (optional)
                <input type="text" name="linkedin" inputMode="url" autoComplete="url" placeholder="linkedin.com/in/your-name" />
              </label>
              <label>
                Anything you'd like to add? (optional)
                <textarea name="message" placeholder="What would make this useful for you?" />
              </label>
              {status === 'error' && (
                <p className="ask-error">Sorry, that didn't send. Please try again in a moment.</p>
              )}
              <button type="submit" className="button button-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send my answer'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
