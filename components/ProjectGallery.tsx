"use client";

import { useState } from "react";
import type { Project } from "@/lib/content";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

/**
 * Client wrapper that owns the "which card is open" state, renders the grid of
 * clickable cards, and mounts the detail modal.
 */
export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 90} className="h-full">
            <ProjectCard project={project} onOpen={() => setActive(project)} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
