import { projects } from "@/lib/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** The centerpiece — a responsive grid of interactive project cards. */
export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        number="02"
        label="Projects"
        title="Things I've shipped"
      />

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 90} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
