import { about } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** First-person intro: CS×AI foundation, the CS×Finance edge, and a bias to ship. */
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading number="01" label="About" />

      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80} className="text-pretty leading-relaxed text-muted">
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="space-y-5 border-t border-line pt-5 md:border-s md:border-t-0 md:ps-8 md:pt-0">
            {about.meta.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-text">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
