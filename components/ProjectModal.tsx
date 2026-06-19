"use client";

import { useEffect } from "react";
import type { Project } from "@/lib/content";
import ProjectShots from "./ProjectShots";
import { CloseIcon } from "./icons";

/**
 * The "popped-out" detail view. Centers over a blurred backdrop. When the
 * project has screenshots it leads with a carousel of them; when it doesn't,
 * there's no placeholder — it simply opens with the full write-up. Closes on
 * Escape, backdrop click, or the X. Locks body scroll while open.
 */
export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);

    // Lock background scroll while the modal is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasShots = !!project.shots && project.shots.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] grid place-items-center p-4 sm:p-6"
    >
      {/* Backdrop — click to dismiss. */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="modal-backdrop absolute inset-0 cursor-default bg-canvas/70 backdrop-blur-sm"
      />

      <div className="modal-panel relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-canvas/70 text-muted backdrop-blur-sm transition-colors hover:text-text"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        {/* Screenshot carousel (only when shots exist) */}
        {hasShots && (
          <div className="relative shrink-0">
            <ProjectShots shots={project.shots!} title={project.title} />
            {/* Top-edge meta overlay over the carousel. */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start gap-3 p-4">
              <span className="rounded-full bg-canvas/70 px-2.5 py-1 font-mono text-xs text-muted backdrop-blur-sm">
                {project.year}
              </span>
              {project.badge && (
                <span className="rounded-full border border-accent/40 bg-canvas/70 px-2.5 py-1 font-mono text-[11px] text-accent backdrop-blur-sm">
                  {project.badge}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Content band */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-7">
          {/* When there are no shots, the meta row lives here instead. The
              end-padding keeps the badge clear of the absolute close button. */}
          {!hasShots && (
            <div className="flex items-start justify-between gap-4 pe-10">
              <span className="font-mono text-xs text-muted">{project.year}</span>
              {project.badge && (
                <span className="rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[11px] text-accent">
                  {project.badge}
                </span>
              )}
            </div>
          )}

          <h3 className="mt-1 text-xl font-semibold leading-snug tracking-tight">
            {project.title}
          </h3>

          <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted">
            {project.summary}
          </p>

          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
            {project.detail}
          </p>

          {/* Tech-stack tags */}
          <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
