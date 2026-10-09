# Abrish AI landing page

A React + TypeScript + Vite landing page for Abrish AI, an interview-notes concept for recruiters. It is a validation page: it explains the idea, shows sample screens, and asks visitors one question ("Would you try it?").

## Before you share it

Open `src/content.ts` and set two values:

- `PRICE`: the monthly price shown after the free first month (currently the visible placeholder `$[price]`).
- `CONTACT_EMAIL`: where answers go (currently empty, so the page shows a visible `[your email goes here]` note).

## Run locally

Node.js 20 or newer is required.

```bash
npm install
npm run dev      # development server
npm run build    # type-check and production build into dist/
npm run preview  # serve the production build locally
```

## Deploy with Netlify

1. Push this repository to GitHub (`abrish-ai-landing`).
2. In Netlify, choose **Add new site → Import an existing project** and select the repository.
3. The settings come from `netlify.toml` (build command `npm run build`, publish directory `dist`, Node 20). No changes needed.

## Project layout

```
public/
  favicon.svg
  images/                 compressed WebP images
src/
  content.ts              all copy, sample data, price and email
  components/             Navbar, Hero, HeroVisual, HowItWorks, SampleNotes,
                          MobileNotes, Roadmap, Offer, Footer, Icon
  index.css               all styles
index.html
netlify.toml
```

## Images

| File | Source | Used in |
| --- | --- | --- |
| `hero-scenery.webp` | bottom strip of `6.png` (scenery only) | hero background |
| `how-it-works.webp` | step cards cropped from `4.png` | How it works |
| `mobile-notes.webp` | phone cropped from `1.png` | Mobile section |

The hero window, transcript, candidate summary and integrations are built in code instead of using the generated screenshots (`6`, `5`, `3`, `2`), because those images contain misspelled or invented text and integration statuses that are not true. To swap an image, replace the file in `public/images/` keeping the same name, or change the path in `src/content.ts`.

## Honesty notes

The page states that it is an early concept. No recording, transcription, summaries, mobile app or integrations exist yet, and all names and notes on screen are invented sample data. Keep it that way until the features are real.
