/**
 * Server-only helper that turns a project's screenshot folder into web paths.
 *
 * IMPORTANT: this uses the Node `fs` module, so it must only be imported from
 * server components (it's used by components/Projects.tsx, which is one). Never
 * import it from a "use client" file or it will break the client bundle.
 *
 * The folder convention is the single source of truth for a project's images:
 *
 *   public/projects/<slug>/
 *     ├── 01-dashboard.png   ← screenshots (carousel), shown in filename order
 *     ├── 02-live-call.png
 *     └── logo.svg           ← optional brand mark shown next to the title
 *
 * Screenshots are shown in filename order, so prefix them to control the
 * sequence. A file named `logo.*` is treated as the project's logo, not a
 * screenshot (so it never appears in the carousel).
 */
import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
  ".gif",
]);

/** The reserved basename for a project's logo mark (any image/svg extension). */
const LOGO_BASENAME = "logo";

function basename(name: string) {
  return name.slice(0, name.length - path.extname(name).length).toLowerCase();
}

/**
 * Returns the web paths ("/projects/<slug>/<file>") of every image in a
 * project's folder, sorted by filename. Returns [] when the folder is missing
 * OR contains no image files — so an empty folder (even with a .gitkeep) shows
 * no photos at all.
 */
export function getProjectShots(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "projects", slug);

  let entries: string[];
  try {
    entries = fs.readdirSync(dir);
  } catch {
    // Folder doesn't exist — that's fine, just no shots.
    return [];
  }

  return entries
    .filter(
      (name) =>
        IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()) &&
        basename(name) !== LOGO_BASENAME // keep the logo out of the carousel
    )
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((name) => `/projects/${slug}/${name}`);
}

/**
 * Returns the web path of a project's logo mark — a file named `logo.*` (svg,
 * png, jpg, …) in public/projects/<slug>/ — or null when there isn't one.
 */
export function getProjectLogo(slug: string): string | null {
  const dir = path.join(process.cwd(), "public", "projects", slug);

  let entries: string[];
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return null;
  }

  const logo = entries.find((name) => basename(name) === LOGO_BASENAME);
  return logo ? `/projects/${slug}/${logo}` : null;
}
