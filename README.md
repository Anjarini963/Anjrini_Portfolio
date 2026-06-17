# Abdullah Anjrini — Portfolio

A single-page personal portfolio for a Full-Stack Product Engineer. Built with
**Next.js (App Router) + Tailwind CSS v4**, deploys cleanly on Vercel.

Design: "Sage Onyx" — a calm, technical dark-default theme with one disciplined
sage accent, monospace technical cues, and subtle "Sage Aurora" gradient details.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

## Fill in your details

All copy and links live in one place — [`lib/content.ts`](lib/content.ts):

- `links.github` / `links.linkedin` — your profile URLs (placeholders for now)
- `links.cv` — path to your CV PDF in `/public`
- `hero.headshot` — path to your photo in `/public`

Assets to drop into [`public/`](public/) (see [`public/README.md`](public/README.md)):

- `headshot.jpg` — a square photo (a monogram placeholder shows until you add it)
- `0626-CV-AbdullahAnjrini.pdf` — the CV served by the "Download CV" links

Email (`abdullahanjarini@gmail.com`) is already wired up.

## Notes

- **Theme:** dark by default with a persisted light/dark toggle (no load flash).
- **Accessibility:** semantic HTML, keyboard-navigable, skip link, AA contrast,
  `prefers-reduced-motion` respected, content visible without JS.
- **RTL-ready:** all text lives in `lib/content.ts` and layout uses logical CSS
  (start/end), so an Arabic (RTL) locale can be added later without a redesign.

## Deploy to Vercel

Push to GitHub and import the repo in Vercel — no extra configuration needed.

## Structure

```
app/            layout, page, global styles (design tokens live in globals.css)
components/     Nav, Hero, About, Projects, Experience, Skills, Education, Contact, Footer
lib/content.ts  all copy + links (single source of truth)
public/         headshot + CV (placeholders to replace)
```
