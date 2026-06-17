import { hero, profile } from "@/lib/content";
import { ArrowRightIcon, DownloadIcon } from "./icons";
import Headshot from "./Headshot";
import SocialLinks from "./SocialLinks";

/**
 * Hero section. Carries the only two "loud" Sage Aurora touches — the corner
 * radial glow and the dotted blueprint grid — both confined here. Headshot
 * sits to the inline-end on desktop, on top on mobile.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Aurora glow + dotted grid, hero-only and behind content. */}
      <div className="aurora-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="dotted-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 md:flex-row md:items-center md:gap-16">
        {/* Copy */}
        <div className="flex-1">
          <p className="mb-5 font-mono text-sm text-muted">
            <span className="text-accent">$</span> {profile.role.toLowerCase()}
          </p>

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.headlineLead}{" "}
            <span className="text-gradient">{hero.headlineHighlight}</span>{" "}
            {hero.headlineTail}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="btn-gradient group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
              <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent"
            >
              <DownloadIcon className="h-[18px] w-[18px]" />
              {hero.secondaryCta.label}
            </a>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        {/* Headshot slot */}
        <div className="shrink-0 md:order-last">
          <Headshot />
        </div>
      </div>
    </section>
  );
}
