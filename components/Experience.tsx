import { experience } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Vertical timeline of roles, most recent first. */
export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading number="03" label="Experience" title="Where I've worked" />

      <ol className="relative ms-2 border-s border-line">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company + job.role} delay={i * 80} className="relative ps-8 pb-12 last:pb-0">
            {/* Node on the timeline — pinned to the start edge (the border line)
                and pulled left half its width so it sits centered on the line.
                Indenting the <li> with padding (not margin) keeps its start edge
                aligned to the line, so this stays correct no matter which element
                is the positioning context. */}
            <span
              className="absolute start-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-canvas"
              aria-hidden
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-base font-semibold tracking-tight">
                {job.role}{" "}
                <span className="font-normal text-accent">· {job.company}</span>
              </h3>
              <span className="shrink-0 font-mono text-xs text-muted">{job.period}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {job.points.map((point, j) => (
                <li key={j} className="text-pretty text-sm leading-relaxed text-muted">
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
