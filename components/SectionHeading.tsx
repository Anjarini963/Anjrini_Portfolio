import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** Two-digit section number, e.g. "02". */
  number: string;
  /** Monospace label, e.g. "Projects". */
  label: string;
  /** Optional larger headline beneath the label. */
  title?: string;
};

/**
 * Monospace numbered section label, e.g. "01 — Projects", with an optional
 * display title. The "—" rule extends to fill the row for a quiet technical feel.
 */
export default function SectionHeading({ number, label, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-accent">{number}</span>
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
        <span className="h-px flex-1 bg-line" aria-hidden />
      </div>
      {title && (
        <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      )}
    </Reveal>
  );
}
