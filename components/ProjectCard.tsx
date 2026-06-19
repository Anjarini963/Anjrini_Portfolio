"use client";

import { type MouseEvent } from "react";
import type { Project } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

/**
 * One project card in the grid — clean, text-only. The whole card is a click
 * target that opens the detail modal (see ProjectModal). Hover lifts it and
 * runs the cursor sheen; featured cards carry the sage→teal gradient hairline.
 */
export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const frame = project.featured
    ? "gradient-border"
    : "border border-line bg-surface";

  // Track the cursor within the card so the sheen highlight follows it.
  function handleMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <article
      onMouseMove={handleMove}
      className={`group relative isolate flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${frame}`}
    >
      {/* Cursor-tracking sage sheen (behind the text). */}
      <span aria-hidden className="card-sheen" />

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-muted">{project.year}</span>
        {project.badge && (
          <span className="rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[11px] text-accent">
            {project.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">
        {project.title}
      </h3>

      <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      {/* View hint — purely visual; the overlay button below does the work. */}
      <span className="mt-3 inline-flex w-fit items-center gap-1.5 font-mono text-xs text-accent transition-colors group-hover:text-accent-2">
        view
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>

      {/* Tech-stack tags */}
      <ul className="mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted transition-colors group-hover:text-text"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Full-card click target — kept last so it overlays the content. */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View details for ${project.title}`}
        className="absolute inset-0 cursor-pointer rounded-2xl"
      />
    </article>
  );
}
