import { skills } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Scannable skill groups rendered as monospace tags. */
export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading number="04" label="Skills" title="Tools of the trade" />

      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 80}>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
