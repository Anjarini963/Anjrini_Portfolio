import { contact, links } from "@/lib/content";
import { ArrowRightIcon, DownloadIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

/** Calm closing section with email CTA and links. No contact form by design. */
export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading number="06" label="Contact" />

      <Reveal>
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {contact.heading}
        </h2>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted">
          {contact.body}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${links.email}`}
            className="btn-gradient group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            {links.email}
            <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent"
          >
            <DownloadIcon className="h-[18px] w-[18px]" />
            Download CV (PDF)
          </a>
        </div>

        <SocialLinks className="mt-8" />
      </Reveal>
    </section>
  );
}
