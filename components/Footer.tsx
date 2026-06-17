import { profile } from "@/lib/content";

/** Minimal footer: name + year, with a small built-with note. */
export default function Footer() {
  // Static year — no client clock needed; bump as desired.
  const year = 2026;

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
