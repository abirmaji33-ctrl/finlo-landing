import { useState } from 'react';
import Icon from './Icon';
import { navItems } from '../content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Abrish AI home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" role="presentation">
              <path d="M25.9 8.1c-8.8-2.4-17 4.2-17 12.8 0 7.1 5.7 12.5 12.7 11.2 5.9-1.1 9.5-6.6 8.2-12.1-.9-3.7-4.4-5.9-7.9-4.7-3.1 1-4.2 4.3-2.3 6.5 1.2 1.3 3.2 1.3 4.4.1" />
              <path d="M22 12.5c-5.4.1-9.1 4.1-8.8 8.6.2 3.8 3.2 6.4 6.8 6.1" />
            </svg>
          </span>
          <span className="brand-name">
            Abrish<span> AI</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#offer">
          Share feedback <Icon name="arrow" size={16} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={open ? 'burger is-open' : 'burger'} aria-hidden="true" />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
