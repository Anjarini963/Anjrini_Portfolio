import { education } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Two-item education list. */
export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading number="05" label="Education" />

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 90}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <p className="font-mono text-xs text-accent">{item.detail}</p>
              <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight">
                {item.degree}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{item.school}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
