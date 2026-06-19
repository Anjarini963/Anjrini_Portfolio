# Project screenshots

Each project has its own folder here, named after its `slug` in
[`lib/content.ts`](../../lib/content.ts):

| Folder                            | Project                                            |
| --------------------------------- | -------------------------------------------------- |
| `pitchiq/`                        | PitchIQ — AI Sales-Call Coaching Platform          |
| `procurement-assistant/`          | AI Procurement Assistant                           |
| `fake-news-detector/`             | Arabic Fake-News Detection Browser Extension       |
| `flutter-supabase-app/`           | Full-Stack Flutter App + Supabase Backend          |

## How to add screenshots

1. Drop image files (`.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, `.gif`) into the
   matching folder.
2. That's it. The site reads the folder automatically — no code changes needed.

- **Order** = filename order, so prefix to control the sequence:
  `01-dashboard.png`, `02-live-call.png`, `03-scorecard.png`.
- **One image** → shows it on its own. **Multiple** → a carousel (arrows, dots,
  ←/→ keys) appears in the project's pop-up.
- **Empty folder** (just the `.gitkeep`) → no image area at all; the pop-up opens
  text-only. Same if the folder is missing.

> The `.gitkeep` files only exist so the empty folders stay in git. They're
> ignored — leave them, or delete them once a folder has real images.

## Note on when changes show up

Screenshots are read when the site renders:

- **`npm run dev`** → just refresh the page after adding/removing files.
- **Production (`npm run build`)** → folders are read at build time, so rebuild
  (or redeploy) to pick up new images.
