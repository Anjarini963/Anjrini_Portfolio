/**
 * Server-only helper that turns a project's screenshot folder into web paths.
 *
 * IMPORTANT: this uses the Node `fs` module, so it must only be imported from
 * server components (it's used by components/Projects.tsx, which is one). Never
 * import it from a "use client" file or it will break the client bundle.
 *
 * The folder convention is the single source of truth for screenshots:
 *
 *   public/projects/<slug>/   →  drop images here (png, jpg, jpeg, webp, avif, gif)
 *
 * Files are shown in filename order, so prefix them to control the sequence,
 * e.g. 01-dashboard.png, 02-live-call.png, 03-scorecard.png.
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
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((name) => `/projects/${slug}/${name}`);
}
